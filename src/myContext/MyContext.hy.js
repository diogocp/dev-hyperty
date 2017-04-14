import IdentityManager from 'service-framework/dist/IdentityManager';
import {Syncher} from 'service-framework/dist/Syncher';
import Discovery from 'service-framework/dist/Discovery';
import {divideURL} from '../utils/utils';
import Search from '../utils/Search';
import EventEmitter from '../utils/EventEmitter';

class MyContext extends EventEmitter {

  constructor(hypertyURL, bus, configuration) {
    if (!hypertyURL) throw new Error('The hypertyURL is a needed parameter');
    if (!bus) throw new Error('The MiniBus is a needed parameter');
    if (!configuration) throw new Error('The configuration is a needed parameter');

    super();

    let _this = this;
    let identityManager = new IdentityManager(hypertyURL, configuration.runtimeURL, bus);
    console.log('hypertyURL->', hypertyURL);
    _this._domain = divideURL(hypertyURL).domain;
    _this._objectDescURL = 'hyperty-catalogue://catalogue.' + _this._domain + '/.well-known/dataschema/Context';

    console.log('[MyContext Hyperty] Init : ', hypertyURL);
    _this._syncher = new Syncher(hypertyURL, bus, configuration);
    let discovery = new Discovery(hypertyURL, configuration.runtimeURL, bus);
    _this._discovery = discovery;
    _this.identityManager = identityManager;
    _this.search = new Search(discovery, identityManager);
    window.discovery = _this._discovery;
  }

  discovery(email,domain)
  {
    let _this = this;
    return new Promise(function(resolve,reject) {
      _this.search.users([email], [domain], ['context'], ['availability']).then(function(a) {
        console.log('result search users->', a);
        resolve(a);
      });
    });
  }

  connect(hypertyID)
  {
    let _this = this;
    return new Promise(function(resolve,reject) {
        _this._discovery.discoverDataObjectsPerReporter(hypertyID, ['context'], ['availability'],  _this._domain).then(function(dataObjects) {
          console.log('[MyContext] discovered user status objects ', dataObjects);
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
        resolve(url);
      } else {
        reject ('Invalid DataObjecs ', dataObjects);
      }
    });
  });
}

  observeAvailability(url) {
    let _this = this;
    return new Promise(function(resolve,reject) {
        _this._syncher.subscribe(_this._objectDescURL, url).then((observer) => {
          console.log('[MyContxt.observeAvailability] observer object', observer);

          resolve(observer);

          observer.onChange('*', (event) => {
            console.log('event->->->->->:', event);

            _this.trigger('user-status', event.data);

            if (_this._onChange) _this.onChange(event);
          });
        });
      });

  }

  onChange(callback) {
    let _this = this;
    _this._onChange = callback;
  }
}

export default function activate(hypertyURL, bus, configuration) {
  return {
    name: 'MyContext',
    instance: new MyContext(hypertyURL, bus, configuration)
  };
}
