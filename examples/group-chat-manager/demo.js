// jshint browser:true, jquery: true
// jshint varstmt: false
/* global Handlebars */
/* global Materialize */

var chatGroupManager;

function hypertyLoaded(result) {

  $('.modal').modal();
  $('.modal.preview').modal({
    complete: function() {
      $('.modal.preview').find('.modal-content').empty();
    }
  });

  $('.modal.download').modal({
    complete: function() {
      $('.modal.download').find('.modal-content').empty();
    }
  });

  // Prepare to discover email:
  var search = result.instance.search;

  search.myIdentity().then(function(identity) {
    hypertyReady(result, identity);
  });
}

function hypertyReady(result, identity) {

  let $cardPanel = $('.card-panel');
  let hypertyInfo = '<div class="row"><span class="white-text">' +
                    '<b>Name:</b> ' + result.name + '</br>' +
                    '<b>Status:</b> ' + result.status + '</br>' +
                    '<b>HypertyURL:</b> ' + result.runtimeHypertyURL + '</br>' +
                    '</span></div>';

  let userInfo = '<div class="row"><span class="white-text">' +
                 '<span class="col s2">' +
                 '<img width="48" height="48" src="' + identity.avatar + '" alt="" class="circle">' +
                 '</span><span class="col s10">' +
                 '<b>Name:</b> ' + identity.cn + '</br>' +
                 '<b>Email:</b> ' + identity.username + '</br>' +
                 '<b>UserURL:</b> ' + identity.userURL +
                 '</span></div>';

  $cardPanel.append(userInfo);
  $cardPanel.append(hypertyInfo);

  /*$('.create-room-btn').hide();
  $('.join-room-btn').hide();*/

  chatGroupManager = result.instance;
  chatGroupManager.onInvitation((event) => {
    onInvitation(event);
  });

  chatGroupManager.onResumeObserver((chatControllers) => {


    getSectionTpl().then(() => {
      console.log('[GroupChatManagerDemo - on Resume observers] - Section Template ready:', chatControllers);

      let groupChats = Object.values(chatControllers);

      if (groupChats.length >= 0) {
        $('.create-room-btn').hide();
        $('.join-room-btn').hide();

        let messageChat = $('.chat');
        messageChat.removeClass('hide');

        let chatSection = $('.chat-section');
        chatSection.removeClass('hide');
        groupChats.forEach((chatController) => {

          chatManagerReady(chatController, false);
          prepareChat(chatController);

        });
      }
    })
  });

  chatGroupManager.onResumeReporter((chatControllers) => {

    getSectionTpl().then(() => {
      console.log('[GroupChatManagerDemo - on Resume reporters] - Section Template ready:', chatControllers);

      let groupChats = Object.values(chatControllers);

      if (groupChats.length >= 0) {
        $('.create-room-btn').hide();
        $('.join-room-btn').hide();


        groupChats.forEach((chatController) => {
          chatManagerReady(chatController, true);
          prepareChat(chatController);

        });

      }

    });

  });
  let messageChat = $('.chat');
  messageChat.removeClass('hide');

  let chatSection = $('.chat-section');
  chatSection.removeClass('hide');

  let createBtn = $('.create-room-btn');
  let joinBtn = $('.join-room-btn');

  createBtn.on('click', createRoom);
  joinBtn.on('click', joinRoom);

}

/*function enableCreationJoin() {

  let createBtn = $('.create-room-btn');
  let joinBtn = $('.join-room-btn');

  createBtn.on('click', createRoom);
  joinBtn.on('click', joinRoom);
}*/


function onInvitation(event) {
  console.log('On Invitation: ', event);

  getSectionTpl().then(() => {
    console.log('[GroupChatManagerDemo - On Invitation] - Section Template ready', event);
    return chatGroupManager.join(event.url)
  }).then((chatController) => {
    $('.create-room-btn').hide();
    $('.join-room-btn').hide();
    chatManagerReady(chatController, false);
    prepareChat(chatController);
  }).catch(function(reason) {
    console.error('Error connecting to', reason);
  });

}

/*
  Create Room actions
 */
function createRoom(event) {
  event.preventDefault();

  let createRoomModal = $('.create-chat');
  let createRoomBtn = createRoomModal.find('.btn-create');
  let cancelRoomBtn = createRoomModal.find('.btn-cancel');

  let addParticipantBtn = createRoomModal.find('.btn-add');

  addParticipantBtn.on('click', addParticipantEvent);
  createRoomBtn.on('click', createRoomEvent);
  createRoomModal.modal('open');
  cancelRoomBtn.on('click', cancelRoomEvent);
}

function cancelRoomEvent(event) {
  event.preventDefault();

  let createRoomModal = $('.create-chat');
  let createRoomBtn = createRoomModal.find('.btn-create');
  let cancelRoomBtn = createRoomModal.find('.btn-cancel');
  let addParticipantBtn = createRoomModal.find('.btn-add');
  let participantsForm = createRoomModal.find('.participants-form');

  participantsForm[0].reset();
  createRoomModal.find('.input-name').val('');

  createRoomBtn.off('click');
  cancelRoomBtn.off('click');
  addParticipantBtn.off('click');
}

function addParticipantEvent(event) {

  event.preventDefault();

  let createRoomModal = $('.create-chat');
  let participants = createRoomModal.find('.participants-form');
  let countParticipants = participants.length - 1;

  countParticipants++;

  let participantEl = '<div class="row">' +
    '<div class="input-field col s8">' +
    '  <input class="input-email" name="email" id="email-' + countParticipants + '" required aria-required="true" type="text" >' +
    '  <label for="email-' + countParticipants + '">Participant Email</label>' +
    '</div>' +
    '<div class="input-field col s4">' +
    '  <input class="input-domain" name="domain" id="domain-' + countParticipants + '" type="text"">' +
    '  <label for="domain-' + countParticipants + '">Participant domain</label>' +
    '</div>' +
  '</div>';

  participants.append(participantEl);

}

function createRoomEvent(event) {
  event.preventDefault();

  let createRoomModal = $('.create-chat');
  let participantsForm = createRoomModal.find('.participants-form');
  let serializedObject = $(participantsForm).serializeArray();

  let createRoomBtn = createRoomModal.find('.btn-create');
  createRoomBtn.off('click');

  let users = [];
  let domains = [];

  if (serializedObject) {

    let emailsObject = serializedObject.filter((field) => { if (field.value !== '') return field.name === 'email';});
    users = emailsObject.map((emailObject) => { return emailObject.value;});
    let domainObject = serializedObject.filter((field) => {
      return field.name === 'domain';
      /*if (field.value !== '') {
        return field.name === 'domain';
      }*/
    });

    domainObject.forEach((domain)=>{
      if (!domain.value)
       domain.value = chatGroupManager._domain;
    });
    domains = domainObject.map((domainObject) => {
      if (domainObject.value) { return domainObject.value; }
      //else return chatGroupManager._domain;
    });
  }

  // Prepare the chat
  let name = createRoomModal.find('.input-name').val();

  console.log('Participants: ', users, ' domain: ', domains);

  getSectionTpl().then(() => {
    console.log('[GroupChatManagerDemo - Create Room] - Section Template ready:', name, users);
    return chatGroupManager.create(name, users, domains);
  }).then((chatController) => {

    let isOwner = true;
    chatManagerReady(chatController, isOwner);
    prepareChat(chatController, isOwner);
    participantsForm[0].reset();
    createRoomModal.find('.input-name').val('');
    let createBtn = $('.create-room-btn');
    let joinBtn = $('.join-room-btn');
    createBtn.addClass('hide');
    joinBtn.addClass('hide');

  }).catch(function(reason) {
    console.error(reason);
  });
}

/*
  Join to an existent chat room
 */
function joinRoom(event) {
  event.preventDefault();

  let joinModal = $('.join-chat');
  let joinBtn = joinModal.find('.btn-join');
  joinBtn.on('click', function(event) {

    event.preventDefault();

    let resource = joinModal.find('.input-name').val();

    getSectionTpl().then(() => {
      console.log('[GroupChatManagerDemo - JoinRoom] - Section Template ready:', resource);
      return chatGroupManager.join(resource)
    }).then(function(chatController) {
      chatManagerReady(chatController, false);
      prepareChat(chatController);
    }).catch(function(reason) {
      console.error(reason);
    });
  });

  joinModal.modal('open');

}

function getSectionTpl() {

  return new Promise((resolve, reject) => {

    Handlebars.getTemplate('group-chat-manager/chat-section').then(function(html) {

      $('.chat-section').append(html);

      resolve();

    });

  })

}

function prepareChat(chatController, isOwner) {

  console.log('[GroupChatManagerDemo prepareChat] Chat Group Controller: ', chatController);

  let dataObject = chatController.dataObjectObserver || chatController.dataObjectReporter || {};
  console.log('[GroupChatManagerDemo prepareChat] - dataObject: ', dataObject);
  let users = dataObject.data.participants || {};
  let msgs = dataObject.childrens || {};

  Object.keys(users).forEach(function(objectKey, index) {
    var user = users[objectKey];
    processNewUser(user);
  });

  Object.keys(msgs).forEach(function(objectKey, index) {
    var msg = msgs[objectKey];
    console.log('ProcessMessage: ', msg);
    processMessage({
      value: msgs[objectKey].data,
      identity: msgs[objectKey].identity
    });
  });

  chatController.onMessage(function(message) {
    console.info('[GroupChatManagerDemo ] new message received: ', message);
    processMessage(message);
  });

  chatController.onChange(function(event) {
    console.log('[GroupChatManagerDemo ] OnChange Event:', event);
  });

  chatController.onUserAdded(function(event) {
    console.log('[GroupChatManagerDemo ] onUserAdded Event:', event);
    processNewUser(event);
  });

  chatController.onUserRemoved(function(event) {
    console.log('[GroupChatManagerDemo ] onUserRemoved Event:', event);
    removeParticipant(event.userURL);
  });

  chatController.onClose(function(event) {
    console.log('[GroupChatManagerDemo ] onClose Event:', event);
    $('.chat-section').html('');

    $('.create-room-btn').show();
    $('.join-room-btn').show();
  });

  $('.modal').modal();

  let inviteBtn = $('.invite-btn');
  inviteBtn.on('click', function(event) {

      event.preventDefault();

      inviteParticipants(chatController, isOwner);
    });

}

function inviteParticipants(chatController, isOwner) {

  let inviteModal = $('.invite-chat');
  let inviteBtn = inviteModal.find('.btn-modal-invite');

  inviteBtn.on('click', function(event) {

    event.preventDefault();

    let userID = inviteModal.find('.input-emails').val();
    let domain = inviteModal.find('.input-domains').val();

    if (!domain) { domain = chatController.domain; }

    console.log('[GroupChatManagerDemo.inviteParticipants]: ', userID, ' @ ', domain);

    /*let usersIDsParsed = [];
    if (usersIDs.includes(',')) {
      usersIDsParsed = usersIDs.split(',');
    } else {
      usersIDsParsed.push(usersIDs);
    }

    let domainsParsed = [];
    if (domains.includes(',')) {
      domainsParsed = domains.split(',');
    } else {
      domainsParsed.push(domains);
    }*/

    if (isOwner) chatController.addUser([userID], [domain]).then(function(result) {
      console.log('[GroupChatManager.demo.inviteParticipants] Invitation result: ', result);
    }).catch(function(reason) {
      console.log('Error:', reason);
    });
    else chatController.addUserReq([userID], [domain]).then(function(result) {
      console.log('[GroupChatManager.demo.inviteParticipants] Request to Reporter result: ', result);
    }).catch(function(reason) {
      console.log('Error:', reason);
    });

    inviteBtn.off('click');

  });

  inviteModal.modal('open');

}

function chatManagerReady(chatController, isOwner) {

  let chatSection = $('.chat-section');
  let addParticipantModal = $('.add-participant');
  let btnAdd = addParticipantModal.find('.btn-add');
  let btnCancel = addParticipantModal.find('.btn-cancel');

  let messageForm = chatSection.find('.message-form');
  let textArea = messageForm.find('.materialize-textarea');

  Handlebars.getTemplate('group-chat-manager/chat-header').then(function(template) {
    let name = chatController.dataObject.metadata.name;
    let resource = chatController.dataObject.url;

    let html = template({name: name, resource: resource});
    $('.chat-header').append(html);

/*    if (!isOwner) {
      $('.invite-btn').hide();
    }*/
    let closeBtn = $('.close-btn');
    closeBtn.removeClass('hide');
    closeBtn.on('click', function(event) {

      event.preventDefault();

      closeChat(chatController);
    });

  });

  textArea.on('keyup', function(event) {

    if (event.keyCode === 13 && !event.shiftKey) {
      messageForm.submit();
    }

  });

  messageForm.on('submit', function(event) {

    event.preventDefault();

    let object = $(this).serializeObject();
    let message = object.message;

    chatController.send(message).then(function(result) {
      console.log('message sent', result);
      processMessage(result);
      messageForm[0].reset();
    }).catch(function(reason) {
      console.error('message error', reason);
    });

  });

  btnAdd.on('click', function(event) {
    event.preventDefault();

    let emailValue = addParticipantModal.find('.input-name').val();
    chatController.addParticipant(emailValue).then(function(result) {
      console.log('[GroupChatManager.demo.addParticipant]', result);
    }).catch(function(reason) {
      console.error(reason);
    });
  });

  btnCancel.on('click', function(event) {
    event.preventDefault();
  });

}

function processMessage(message) {

  console.log('[GroupChatManager - processMessage] - msg ', message);

  let chatSection = $('.chat-section');
  let messagesList = chatSection.find('.messages .collection');
  let avatar = '';
  let from = '';

  if (message.identity) {
    avatar = message.identity.userProfile.avatar;
    from = message.identity.userProfile.cn;
  }
  if (message.value.content) {
    let list = `<li class="collection-item avatar">
      <img src="` + avatar + `" alt="" class="circle">
      <span class="title">` + from + `</span>
      <p>` + message.value.content.replace(/\n/g, '<br>') + `</p>
    </li>`;

    console.log('[GroupChatManager - processMessage] - ', messagesList, message, list);

    messagesList.append(list);
  }
}

function processNewUser(event) {

  console.log('[GroupChatManager.demo.processNewUser] ', event);

  let section = $('.conversations');
  let collection = section.find('.participant-list');
  let user;

  if (event.hasOwnProperty('data') && event.data) {
    user = event.data;
  } else {
    user = event;
  }
  console.log('[GroupChatManager.demo.processNewUser]user', user, collection);
  if (collection.find('[data-name="' + user.identity.userProfile.userURL + '"]').length == 0) {
    collection.append(`
      <li class="chip" data-name="${ user.identity.userProfile.userURL }">
        <img src="${ user.identity.userProfile.avatar }" alt="Contact Person">${ user.identity.userProfile.cn }
        <i class="material-icons close">close</i>
      </li>`);
    collection.removeClass('center-align');

    let closeBtn = collection.find('.close');
    closeBtn.on('click', function(e) {
      e.preventDefault();

      let item = $(e.currentTarget).parent().attr('data-name');
      removeParticipant(item);
    });
  }

}

function removeParticipant(item) {
  let section = $('.conversations');
  let collection = section.find('.participant-list');
  let element = collection.find('li[data-name="' + item + '"]');
  element.remove();
}

function closeChat(chatController) {

  chatController.close().then(function(result) {
    console.log('Chat closed: ', result);

    let createRoomModal = $('.create-chat');
    let createRoomBtn = createRoomModal.find('.btn-create');
    let addParticipantBtn = createRoomModal.find('.btn-add');

    addParticipantBtn.off('click', addParticipantEvent);
    createRoomBtn.off('click', createRoomEvent);
    let createBtn = $('.create-room-btn');
    let joinBtn = $('.join-room-btn');
    createBtn.removeClass('hide');
    joinBtn.removeClass('hide');
    createBtn.show();
    joinBtn.show();

    $('.chat-section').html('');
  }).catch(function(reason) {
    console.log('An error occured:', reason);
  });

}

Handlebars.getTemplate = function(name) {

  return new Promise(function(resolve, reject) {

    if (Handlebars.templates === undefined || Handlebars.templates[name] === undefined) {
      Handlebars.templates = {};
    } else {
      resolve(Handlebars.templates[name]);
    }

    $.ajax({
      url: name + '.hbs',
      success: function(data) {
        Handlebars.templates[name] = Handlebars.compile(data);
        resolve(Handlebars.templates[name]);
      },

      fail: function(reason) {
        reject(reason);
      }
    });

  });

};
