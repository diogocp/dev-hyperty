/**
* Copyright 2016 PT Inovação e Sistemas SA
* Copyright 2016 INESC-ID
* Copyright 2016 QUOBIS NETWORKS SL
* Copyright 2016 FRAUNHOFER-GESELLSCHAFT ZUR FOERDERUNG DER ANGEWANDTEN FORSCHUNG E.V
* Copyright 2016 ORANGE SA
* Copyright 2016 Deutsche Telekom AG
* Copyright 2016 Apizee
* Copyright 2016 TECHNISCHE UNIVERSITAT BERLIN
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
**/

/**
* The Group Chat API is used to control a Group Chat instance.
* @author Vitor Silva [vitor-t-silva@telecom.pt]
* @version 0.1.0
*/

import { UserInfo } from './UserInfo';

class ChatController {

  constructor(syncher, discovery, domain, search, identity, manager) {

    if (!syncher) throw Error('Syncher is a necessary dependecy');
    if (!discovery) throw Error('Discover is a necessary dependecy');
    if (!domain) throw Error('Domain is a necessary dependecy');
    if (!search) throw Error('Search is a necessary dependecy');

    let _this = this;
    _this._syncher = syncher;
    _this.discovery = discovery;
    _this.search = search;
    _this.myIdentity = identity;
    _this.controllerMode = 'reporter';
    _this.child_cseq = 0;
    _this.domain = domain;

    _this._manager = manager;

    _this._objectDescURL = 'hyperty-catalogue://catalogue.' + domain + '/.well-known/dataschema/Communication';
  }

  set dataObjectReporter(dataObjectReporter) {

    if (!dataObjectReporter) throw new Error('The data object reporter is necessary parameter ');
    let _this = this;

    _this.controllerMode = 'reporter';

    dataObjectReporter.onSubscription(function(event) {

      switch (event.type) {
        case 'subscribe': _this._onSubscribe(event); break;
        case 'unsubscribe': _this._onUnsubscribe(event); break;
      }
    });

    dataObjectReporter.onAddChild(function(child) {
      _this.child_cseq +=1;
      console.info('[GroupChatManager.ChatController]Reporter - Add Child:', child);
      // dataObjectReporter.data.lastModified = new Date().toJSON();
      if (_this._onMessage) _this._onMessage(child);
    });

    dataObjectReporter.onRead((event) => {
      event.accept();
    });

    _this._dataObjectReporter = dataObjectReporter;
  }

  get dataObjectReporter() {
    let _this = this;
    return _this._dataObjectReporter;
  }

  set dataObjectObserver(dataObjectObserver) {
    let _this = this;

    _this.controllerMode = 'observer';

    _this._dataObjectObserver = dataObjectObserver;

    dataObjectObserver.onChange('*', function(event) {
      console.info('[GroupChatManager.ChatController]Observer - onChange', event);

      if (event.field.includes('participants')) {
        switch (event.cType) {
          case 'add':
            if (_this._onUserAdded) _this._onUserAdded(event);
            break;

          case 'remove':
            if (_this._onUserRemoved) _this._onUserRemoved(event);
            break;
        }
      }

      if (_this._onChange) _this._onChange(event);

    });

    dataObjectObserver.onAddChild(function(child) {
      _this.child_cseq +=1;
      console.info('[GroupChatManager.ChatController]Observer - Add Child: ', child);
      if (_this._onMessage) _this._onMessage(child);
    });

    // let childrens = dataObjectObserver.childrens;
    // Object.keys(childrens).forEach((child) => {
    //   if (_this._onMessage) _this._onMessage({
    //     childId: child,
    //     identity: childrens[child].identity,
    //     value: childrens[child].data
    //   });
    // })

  }

  get dataObjectObserver() {
    let _this = this;
    return _this._dataObjectObserver;
  }

  get dataObject() {
    return this.controllerMode === 'reporter' ? this.dataObjectReporter : this.dataObjectObserver;
  }

  set closeEvent(event) {
    let _this = this;
    _this._closeEvent = event;

    if (_this._onClose) _this._onClose(event);
  }

  get closeEvent() {
    let _this = this;
    return _this._closeEvent;
  }

  _onSubscribe(event) {

    let dataObjectReporter = this._dataObjectReporter;

    event.accept();

    console.log('[GroupChatManager.ChatController.onSubscribe] event', event, dataObjectReporter.url);
    console.log('[GroupChatManager.ChatController.onSubscribe] New user has subscribe this object: ', dataObjectReporter.data, event.identity);

    let identity = JSON.parse(JSON.stringify(event.identity));

    if (identity.hasOwnProperty('assertion')) {
      delete identity.assertion
    }

    let userInfo = {
      hypertyURL: event.url,
      domain: event.domain,
      identity: identity
    }
    let userURL = event.identity.userProfile.userURL;

    console.log('[GroupChatManager.ChatController.onSubscribe]  new participant', userInfo);
    if (event.identity.legacy) {
     userInfo.legacy = event.identity.legacy;
    }

    dataObjectReporter.data.participants[userURL] = userInfo;

    console.log('[GroupChatManager.ChatController.onSubscribe] communicationObject OBJ chatcontroller', dataObjectReporter.data.participants);
    console.log('[GroupChatManager.ChatController.onSubscribe - onSubscription] ', userInfo);
    // console.log('[GroupChatManager.ChatController.onSubscribe - this._onUserAdded] ', this._onUserAdded);

    if (this._onUserAdded) this._onUserAdded(userInfo);
  }

  _onUnsubscribe(event) {
    let dataObjectReporter = this._dataObjectReporter;

    console.log('[GroupChatManager.ChatController.onUnsubscribe] event', event, dataObjectReporter.url);

    let participant = event.identity.userProfile;

    console.log('[GroupChatManager.ChatController.onUnsubscribe]  participant left', participant);
    if (event.identity.legacy) {
      participant.legacy = event.identity.legacy;
    }

    delete dataObjectReporter.data.participants[participant.userURL];

    console.log('[GroupChatManager.ChatController.onUnsubscribe - this._onUserRemoved] ', this.onUserRemoved);
    if (this._onUserRemoved) this._onUserRemoved(participant);
  }
  /**
   * This function is used to send a chat message.
   * @param  {string}     message                        Is the ChatMessage to be sent.
   * @return {Promise<Communication.ChatMessage>}        It returns the ChatMessage child object created by the Syncher as a Promise.
   */
  send(message) {

    let _this = this;
    let mode = _this.controllerMode;
    let dataObject = mode === 'reporter' ? _this.dataObjectReporter : _this.dataObjectObserver;

    return new Promise(function(resolve, reject) {

      let _dataObjectChild;
      _this.child_cseq += 1;
      let msg = {
/*        url: dataObject.data.url,
        cseq: _this.child_cseq,
        reporter: dataObject.data.reporter,
        schema: dataObject.data.schema,
        name: dataObject.data.name,
        created : new Date().toJSON(),*/
        type : "chat",
        content : message
      }


      // TODO: change chatmessages to resource - chat, file
      // TODO: change message to hypertyResource - https://github.com/reTHINK-project/dev-service-framework/tree/develop/docs/datamodel/data-objects/hyperty-resource
      // TODO: handle with multiple resources - if the "message" will be different for each type of resources
      dataObject.addChild('resources', msg).then(function(dataObjectChild) {
        console.log('[GroupChatManager.ChatController][addChild - Chat Message]: ', dataObjectChild);
        //resolve(dataObjectChild);

        let msg = {
          childId: dataObjectChild._childId,
          from: dataObjectChild._owner,
          value: dataObjectChild.data,
          type: 'create',
          identity: {
            userProfile: _this.myIdentity
          }
        };
        resolve(msg);

      }).catch(function(reason) {
        console.error('Reason:', reason);
        reject(reason);
      });

    });

  }

  /**
   * [onChange description]
   * @param  {Function} callback [description]
   * @return {[type]}            [description]
   */
  onChange(callback) {
    let _this = this;
    _this._onChange = callback;
  }

  /**
   * This function is used to receive new messages.
   * @param  {Function} callback Function to handle with new messages
   * @return {Communication.ChatMessage} m
   */
  onMessage(callback) {
    let _this = this;
    _this._onMessage = callback;
  }

  /**
   * [onUserAdded description]
   * @param  {Function} callback [description]
   * @return {[type]}            [description]
   */
  onUserAdded(callback) {
    let _this = this;
    _this._onUserAdded = callback;
  }

  /**
   * When the an user was removed
   * @param  {Function} callback Function handle with the removed user
   * @return {[type]}            [description]
   */
  onUserRemoved(callback) {
    let _this = this;
    _this._onUserRemoved = callback;
  }

  /**
   * This function is used to receive requests to close the Group Chat instance.
   * @return {DeleteEvent} The DeleteEvent fired by the Syncher when the Chat is closed.
   */
  onClose(callback) {
    let _this = this;
    _this._onClose = callback;
  }

  /**
   * This function is used to add / invite new user on an existing Group Chat instance.
   * Only the Reporter, i.e. the Hyperty that has created the Group Chat, is allowed to use this function.
   * @param {URL.UserURL}  users  User to be invited to join the Group Chat that is identified with reTHINK User URL.
   * @return {Promise<boolean>}   It returns as a Promise true if successfully invited or false otherwise.
   */
  addUser(users, domains) {

    let _this = this;

    let haveEmptyElements = (element) => {
      console.log('Element:', element.length);
      return element.length !== 0;
    };

    let notFoundElements = (element) => {
      console.log('user not found: ', element);
      return !(element instanceof String);
    }

    return new Promise(function(resolve, reject) {

      if (users.filter(haveEmptyElements).length === 0) {
        return reject('Don\'t have users to invite');
      }

      console.info('[GroupChatManager.ChatController]----------------------- Inviting users -------------------- \n');
      console.info('[GroupChatManager.ChatController]Users: ', users, '\nDomains:', domains);
      _this.search.users(users, domains, ['comm'], ['chat'])
      .then((hypertiesIDs) => {

        if (hypertiesIDs.filter(notFoundElements).length === 0) {
          throw 'User(s) not found';
        }

        let selectedHyperties = hypertiesIDs.map((hyperty) => {
          return hyperty.hypertyID;
        });

        console.info('[GroupChatManager.ChatController]------------------------ Syncher Create ---------------------- \n');
        console.info('[GroupChatManager.ChatController]Selected Hyperties: !!! ', selectedHyperties);
        console.info(`Have ${selectedHyperties.length} users;`);
        console.info('[GroupChatManager] HypertiesIDs ', hypertiesIDs);

        let dataObject = _this.controllerMode === 'reporter' ? _this.dataObjectReporter : _this.dataObjectObserver;
        return dataObject.inviteObservers(selectedHyperties);
      })
      .then(() => {
        console.info('[GroupChatManager.ChatController]Are invited with success ' + users.length + ' users;');
        resolve(true);
      }).catch((reason) => {
        console.error('An error occurred when trying to invite users;\n', reason);
        reject(reason);
      });

    });

  }

  /**
   * This function is used to remove a user from an existing Group Chat instance.
   * Only the Reporter, i.e. the Hyperty that has created the Group Chat, is allowed to use this function.
   * @return {<Promise> boolean} Promise with the status
   */

  /**
   * This function is used to remove a user from an existing Group Chat instance.
   * Only the Reporter, i.e. the Hyperty that has created the Group Chat, is allowed to use this function.
   * @param  {URL.UserURL} user       User to be removed from the Group Chat that is identified with reTHINK User URL.
   * @return {<Promise> boolean}      It returns as a Promise true if successfully removed or false otherwise.
   */
  removeUser(user) {

    // TODO: implement the removeUser;
    console.log('[GroupChatManager.ChatController]Not yet implemented: ', user);

  }

  /**
   * This function is used to close an existing Group Chat instance.
   * Only available to Chat Group Reporters i.e. the Hyperty instance that created the Group Chat.
   * @return {<Promise>Boolean} It returns as a Promise true if successfully closed or false otherwise.
   */
  close() {
    // TODO: the dataObjectReporter.delete should be an Promise;

    let _this = this;

    return new Promise(function(resolve, reject) {

      if (_this.controllerMode === 'reporter') {
        try {
          delete _this._manager._reportersControllers[_this.dataObjectReporter.url];
          _this.dataObjectReporter.delete();
          resolve(true);
        } catch (e) {
          reject(false);
        }
      } else {
        try {
          delete _this._manager._observersControllers[_this.dataObjectObserver.url];
          _this.dataObjectObserver.unsubscribe();
          resolve(true);
        } catch (e) {
          reject(false);
        }
      }
    });

  }

}

export default ChatController;
