import IdentityManager from 'service-framework/dist/IdentityManager';
import {Syncher} from 'service-framework/dist/Syncher';
import Discovery from 'service-framework/dist/Discovery';
import {divideURL} from '../utils/utils';
import Search from '../utils/Search';
import EventEmitter from '../utils/EventEmitter';

class UserAvailabilityObserver extends EventEmitter {

  constructor(hypertyURL, bus, configuration) {
    if (!hypertyURL) throw new Error('The hypertyURL is a needed parameter');
    if (!bus) throw new Error('The MiniBus is a needed parameter');
    if (!configuration) throw new Error('The configuration is a needed parameter ');

    super();

    let _this = this;
    _this._url = hypertyURL;
    //let identityManager = new IdentityManager(hypertyURL, configuration.runtimeURL, bus);
    console.log('[UserAvailabilityObserver] started with hypertyURL->', hypertyURL);
    _this._domain = divideURL(hypertyURL).domain;
    _this._objectDescURL = 'hyperty-catalogue://catalogue.' + _this._domain + '/.well-known/dataschema/Context';

    _this._users2observe = [];

    _this._syncher = new Syncher(hypertyURL, bus, configuration);
    let discovery = new Discovery(hypertyURL, configuration.runtimeURL, bus);
    _this._discovery = discovery;

    _this._discoveries = {}; //list of discovered objects
    //_this.identityManager = identityManager;
    //_this.search = new Search(discovery, identityManager);
    window.discovery = _this._discovery;
  }

  start () {
    let _this = this;

    return new Promise((resolve, reject) => {
      _this._syncher.resumeObservers({store: true}).then((observers) => {

        let observersList = Object.keys(observers);

        if (observersList.length  > 0) {

        console.log('[UserAvailabilityObserver.start] resuming: ', observers);

        /*observersList.forEach((i)=>{
          _this._users2observe.push(new UserAvailabilityController(observers[i]));
        });*/

        resolve(observers);
      } else {
        resolve(false);
      }

      }).catch((reason) => {
        console.info('[UserAvailabilityObserver] Resume Observer failed | ', reason);
        resolve(false);
      });
    }).catch((reason) => {
    reject('[UserAvailabilityObserver] Start failed | ', reason);
  });
}

  onResumeObserver(callback) {
     let _this = this;
     _this._onResumeObserver = callback;
   }


  discoverUsers(email,domain)
  {
    let _this = this;
    return new Promise(function(resolve,reject) {
      //TODO: replace by _discovery.discoverHypertiesDO(..) when DR notification works
      _this._discovery.discoverHypertiesDO(email, ['context'], ['availability_context'], domain).then(hyperties =>{
      //_this.search.users([email], [domain], ['context'], ['availability_context']).then(function(a) {
        console.log('[UserAvailabilityObserver.discoverUsers] discovery result->', hyperties);
        let discovered = [];
        let disconnected = [];
        hyperties.forEach(hyperty =>{
          _this._discoveries[hyperty.data.hypertyID] = hyperty;
          if (hyperty.data.status === 'live') {
            discovered.push(hyperty.data);
          } else {
            disconnected.push(hyperty);
            };
        });

        if (discovered.length > 0) {
          console.log('[UserAvailabilityObserver.discoverUsers] returning discovered hyperties data->', discovered);
          resolve(discovered);
        } else if (disconnected.length > 0) {
          console.log('[UserAvailabilityObserver.discoverUsers] disconnected Hyperties ', disconnected);
          //resolve([]);

          disconnected[0].onLive(_this._url,()=>{
            console.log('[UserAvailabilityObserver.discoverUsers] disconnected Hyperty is back to live', disconnected[0]);

            discovered.push(disconnected[0].data);
            resolve(discovered);
            disconnected[0].unsubscribeLive(_this._url);
          });
        }
      });
    });
  }

  /**
   * This function is used to start the user availability observation for a certain user availability reporter
   * @param  {DiscoveredObject} hyperty       Hyperty to be observed.
   * @return {<Promise> DataObjectObserver}      It returns as a Promise the UserAvailability Data Object Observer.
   */

  observe(hyperty)
    {
      let _this = this;
      return new Promise(function(resolve,reject) {
          _this._discovery.discoverDataObjectsPerReporter(hyperty.hypertyID, ['context'], ['availability_context'],  _this._domain).then(function(dataObjects) {
            console.log('[UserAvailabilityObserver.discoverAvailability] discovered user availability objects ', dataObjects);
          let last = 0;
          let url;

          dataObjects.forEach( (dataObject) => {
            if (dataObject.hasOwnProperty('lastModified') && dataObject.hasOwnProperty('url') && Date.parse(dataObject.lastModified) > last) {
              last = dataObject.lastModified;
              url = dataObject.url;
                //console.log('URL DATA Object', url);
          }
        });
        if (last != 0 && url) {
          resolve(_this._subscribeAvailability(hyperty, url));
        } else {
          reject ('[UserAvailabilityObserver.discoverAvailability] discovered DataObjecs are invalid', dataObjects);
        }
      });
    });
  }

  _subscribeAvailability(hyperty, url) {
    let _this = this;
    return new Promise(function(resolve,reject) {
        _this._syncher.subscribe(_this._objectDescURL, url).then((availability) => {
          console.log('[UserAvailabilityObserver.observeAvailability] observer object', availability);

          //let newUserAvailability = new UserAvailabilityController(availability, userID);

          _this._users2observe.push(availability);

          // When hyperty is disconnected set user availability status as unavailable
          if (_this._discoveries[hyperty.hypertyID])
          _this._discoveries[hyperty.hypertyID].onDisconnected(_this._url,()=>{
            console.log('[UserAvailabilityObserver.onDisconnected]: ', hyperty);

            availability.data.values[0].value = 'unavailable';
          });

          resolve(availability);
        });
      });
  }

/**
 * This function is used to stop the user availability observation for a certain user
 * @param  {string} availability       the UserAvailability Data Object Observer URL to be unobserved.
 */

  unobserve(availability)
    {
      let _this = this;

      _this._users2observe.forEach( (user, index) => {
        if (user.url === availability) {
          user.unsubscribe();
          _this._users2observe.splice(index, 1);
        }

      });
  }

}

export default function activate(hypertyURL, bus, configuration) {
  return {
    name: 'UserAvailabilityObserver',
    instance: new UserAvailabilityObserver(hypertyURL, bus, configuration)
  };
}
