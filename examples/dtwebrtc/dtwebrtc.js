
let STATUS_DISCONNECTED;
let STATUS_CONNECTED;

let HYPERTY_NAME = "DTWebRTC";
let hyperty;
let runtimeLoader;
let autoConnect = false;
let status = STATUS_DISCONNECTED;


// ###################################################################################################################
// ################################## DTCallCenter ###################################################################
// ###################################################################################################################

function toggleSettings() {
	event.preventDefault();
    $("#settings").toggle();
}

function hypertyLoaded(result) {

  STATUS_DISCONNECTED = 0;
  STATUS_CONNECTED = 1;
  status = STATUS_DISCONNECTED;

  hyperty = result.instance;
  hyperty.myUrl = result.runtimeHypertyURL;
  // init some click handlers
  $('#gosearch').on('click', discoverEmail);
<<<<<<< HEAD
<<<<<<< HEAD
  $('#settings').on('submit', saveProfile);
=======
  $('#settings').on('submit', () => { saveProfile() });
>>>>>>> develop
=======
  $('#settings').on('submit', saveProfile);
>>>>>>> cd3f36a3f421da50f8e44d80296a2729ced25569
  $('#settings').on('submit', toggleSettings);

  fillResoultionSelector();
  loadProfile();

  $('#content').removeClass('hide');
  $('#hangup').on('click', hangup);
  $('#local-audio').on('click', () => {
    // let the hyperty switch stream-tracks
    hyperty.switchLocalAudio( $('#local-audio').is(":checked") )
  });
  $('#local-video').on('click', () => {
    // let the hyperty switch stream-tracks
    hyperty.switchLocalVideo( $('#local-video').is(":checked") )
  });

  $('#remote-audio').on('click', () => {
    console.log('[DTWebRTC] --> setting remote audio to: ' + $('#remote-audio').is(":checked"));
    let rv = document.getElementById('remoteVideo');
    rv.muted = $('#remote-audio').is(":checked");
  })
  ;
  $('#remote-video').on('click', () => {
    console.log('[DTWebRTC] --> setting remote video to: ' + $('#remote-video').is(":checked"));
    let rv = document.getElementById('remoteVideo');
    if ($('#remote-video').is(":checked"))
       rv.play();
    else
      rv.pause();
  });


  // get registered user
<<<<<<< HEAD
<<<<<<< HEAD
  hyperty.identityManager.discoverUserRegistered().then((identity) => {
=======
	hyperty.search.myIdentity().then(function(identity) {
>>>>>>> develop
=======
  hyperty.identityManager.discoverUserRegistered().then((identity) => {
>>>>>>> cd3f36a3f421da50f8e44d80296a2729ced25569
    console.log("[DTWebRTC.main]: registered user is: ", identity);
    hyperty.myIdentity = identity;
     let info = "Authenticated as:</br>" + identity.cn + ",  " + identity.username + '<img src="' + hyperty.myIdentity.avatar + '" class="logo" /></br>' +
                "Hyperty URL:</br>" + result.runtimeHypertyURL;
      $('.hyperty-panel').html( info );
  }).catch((reason) => {
    console.log("[DTWebRTC.main]: error while discovery of registered user. Error is ", reason);
    $('.hyperty-panel').html('<p>Hyperty URL:   ' + result.runtimeHypertyURL + '</p>');
  });

  initListeners();
  // $.getScript("../src/adapter.js");

  console.log("[DTWebRTC.main]:############ hyperty loaded, result is:", result);

}

function webrtcconnectToHyperty(event) {
  if (event) {
    event.preventDefault();
  }
  saveProfile();
  getIceServers();
  prepareMediaOptions();

  status = STATUS_DISCONNECTED;
  let toHyperty = $(event.currentTarget).find('.webrtc-hyperty-input').val();
  let connect_html = '<center><br><i style="color: #e20074;" class="center fa fa-cog fa-spin fa-5x fa-fw"></i></center><p>wait for answer...</p>';
  $('.invitation-panel').html(connect_html);

  setTimeout( () => {
    if ( status == STATUS_DISCONNECTED ) {
      $('.invitation-panel').append( '<button id="cancel"  class="btn btn-default btn-sm ">Cancel</button>' );
      $('#cancel').on('click', hangup );
    }
  }, 6000);

  console.log(toHyperty);
  $('.send-panel').addClass('hide');
  hyperty.connect(toHyperty).then((obj) => {
      console.log('Webrtc obj: ', obj);
    })
    .catch(function(reason) {
      console.error(reason);
    });
}

function hangup() {
  hyperty.disconnect();
}

function fillmodal(calleeInfo) {
  let picture = calleeInfo.infoToken ? calleeInfo.infoToken.picture : calleeInfo.userProfile ? calleeInfo.userProfile.avatar : "";
  let name = calleeInfo.infoToken ? calleeInfo.infoToken.name : calleeInfo.userProfile ? calleeInfo.userProfile.cn : "";
  let email = calleeInfo.infoToken ? calleeInfo.infoToken.email : calleeInfo.userProfile ? calleeInfo.userProfile.username : "";
  let locale = calleeInfo.infoToken ? calleeInfo.infoToken.locale : calleeInfo.userProfile ? calleeInfo.userProfile.locale : "";
  $('#modalinfo').html(
    '<div class="container-fluid"><div class="row"><div class="col-sm-2 avatar"><img src="' + picture + '" ></div>' +
    '<div class="col-sm-9 col-sm-offset-1"><div><span class=" black-text">Name: ' + name + '</span></div><div><span class=" black-text">Email: ' + email + '</span></div><div><span class=" black-text">Ort: ' + locale + '</span></div>' +
    '</div></div></div>');
}


// receiving code here
function initListeners() {

<<<<<<< HEAD
<<<<<<< HEAD
  hyperty.addEventListener('invitation', (identity) => {
    // preparing the modal dialog with the given identity info
=======
  hyperty.addEventListener('incomingcall', (identity) => {
		// preparing the modal dialog with the given identity info
>>>>>>> develop
=======
  hyperty.addEventListener('invitation', (identity) => {
    // preparing the modal dialog with the given identity info
>>>>>>> cd3f36a3f421da50f8e44d80296a2729ced25569
    console.log('incomingcall event received from:', identity);
    $('.invitation-panel').html('<p> Invitation received from:\n ' + identity.email ? identity.email : identity.username + '</p>');
    fillmodal(identity);
    prepareMediaOptions();
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cd3f36a3f421da50f8e44d80296a2729ced25569
  });

  hyperty.addEventListener('incomingcall', (data) => {
    $('#myModal').find('#btn-accept').on('click', () => {
      hyperty.invitationAccepted(data);
<<<<<<< HEAD
=======

    $('#myModal').find('#btn-accept').on('click', () => {
      hyperty.acceptCall();
>>>>>>> develop
=======
>>>>>>> cd3f36a3f421da50f8e44d80296a2729ced25569
    });
    $('#myModal').find('#btn-reject').on('click', () => {
      hangup();
    });
    $('#myModal').modal('show');
<<<<<<< HEAD
<<<<<<< HEAD

    // if (!confirm('Incoming call. Answer?')) return false;
    // hyperty.invitationAccepted(data);
=======
>>>>>>> develop
=======

    // if (!confirm('Incoming call. Answer?')) return false;
    // hyperty.invitationAccepted(data);
>>>>>>> cd3f36a3f421da50f8e44d80296a2729ced25569
  });

  hyperty.addEventListener('localvideo', (stream) => {
    console.log('local stream received');
    document.getElementById('localVideo').srcObject = stream;
  });

  hyperty.addEventListener('remotevideo', (stream) => {
    $('#info').addClass('hide');
    $('#video').removeClass('hide');
    let rv = document.getElementById('remoteVideo');
    let lv = document.getElementById('localVideo');
    rv.srcObject = stream;
    $('#remoteVideo').removeClass('smallVideo').addClass('fullVideo');
    $('#localVideo').removeClass('fullVideo').addClass('smallVideo');
    console.log('remotevideo received');
    $('.invitation-panel').empty();
    status = STATUS_CONNECTED;
  });

  hyperty.addEventListener('disconnected', () => {
    console.log('>>>disconnected');
    $('.send-panel').removeClass('hide');
    $('.webrtcconnect').empty();
    $('.invitation-panel').empty();
    $('#myModal').modal('hide');
    let rv = document.getElementById('remoteVideo');
    let lv = document.getElementById('localVideo');
    $('#localVideo').removeClass('smallVideo').addClass('fullVideo');
    $('#remoteVideo').removeClass('fullVideo').addClass('smallVideo');
    rv.src = "";
    lv.src = "";

    $('#info').removeClass('hide');
    $('#video').addClass('hide');
  });
}

function discoverEmail(event) {
  if (event) {
    event.preventDefault();
  }

  var email = $('.searchemail').find('.friend-email').val();
  var domain = $('.searchemail').find('.friend-domain').val();
  console.log('>>>email', email, domain);

  var msg = 'searching for:  ' + email + ' in domain:  ' + domain + ' ...';
  if ( ! domain )
    msg = 'searching for:  ' + email + ' in the own domain ...';

  $('.send-panel').html(msg);

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cd3f36a3f421da50f8e44d80296a2729ced25569
  hyperty.discovery.discoverHypertyPerUser(email, domain).then( (result) => {
      $('.send-panel').html(
        '<br><form class="webrtcconnect">' +
          '<input type="text" class="webrtc-hyperty-input form-control " style="font-size: 18px; font-size: bold;">' +
          '<button type="submit" class="btn btn-default btn-sm btn-block ">webRTC to Hyperty </button>' +
        '</form><br>');
      $('.send-panel').find('.webrtc-hyperty-input').val(result.hypertyURL);
      $('.webrtcconnect').on('submit', webrtcconnectToHyperty);
      $('.webrtcconnect').find("button").focus();
    }).catch((err) => {
      $('.send-panel').html(
        '<div>No hyperty found!</div>'
      );
      console.error('Email Discovered Error: ', err);
    });
<<<<<<< HEAD
=======
	hyperty.search.users([email], [domain], ['connection'], ['audio', 'video']).then( (result) => {
		if ( result.length == 0 ) {
			$('.send-panel').html(
	      '<div>No hyperty found!</div>'
	    );
		}
		else {
			$('.send-panel').html(
				'<br><form class="webrtcconnect">' +
				'<input type="text" class="webrtc-hyperty-input form-control " style="font-size: 18px; font-size: bold;">' +
				'<button type="submit" class="btn btn-default btn-sm btn-block ">webRTC to Hyperty </button>' +
				'</form><br>');
				$('.send-panel').find('.webrtc-hyperty-input').val(result[0].hypertyID);
				$('.webrtcconnect').on('submit', webrtcconnectToHyperty);
				$('.webrtcconnect').find("button").focus();
		}
  }).catch((err) => {
    $('.send-panel').html(
      '<div>No hyperty found!</div>'
    );
    console.error('Email Discovered Error: ', err);
  });
>>>>>>> develop
=======
>>>>>>> cd3f36a3f421da50f8e44d80296a2729ced25569
}

// ###################################################################################################################
// ################################## Profile-Settings ###################################################################
// ###################################################################################################################

var PROFILE_KEY = "WEBRTC-SIMPLE-SETTINGS";

function getIceServers() {
  var stun = $("#stun").val();
  var turn = $("#turn").val();
  var turn_user = $("#turn_user").val();
  var turn_pass = $("#turn_pass").val();
  var mode = $("#strictice").is(':checked') ? "strictice" : null;
  console.log('[DTWebRTC] IceServer mode:', mode);
  var iceServers = [];
  if (!turn || !turn_user || !turn_pass) {
    turn = "numb.viagenie.ca";
    turn_user = "steffen.druesedow@telekom.de";
    turn_pass = "w0nd3r";
  }
  if (stun)
    iceServers.push({
      urls: "stun:" + stun
    });
  if (turn)
    iceServers.push({
      urls: "turn:" + turn,
      username: turn_user,
      credential: turn_pass
    });
  hyperty.setIceServer(iceServers, mode);

}

function saveProfile() {
<<<<<<< HEAD
<<<<<<< HEAD
  event.preventDefault();
=======
>>>>>>> develop
=======
  event.preventDefault();
>>>>>>> cd3f36a3f421da50f8e44d80296a2729ced25569
  var profile = {};
  console.log("[DTWebRTC.main]:save profile " + PROFILE_KEY);
  // transfer all values from all text-inputs of the settings div to profile
  $("#settings :text").each(function(i) {
    profile[$(this).attr('id')] = $(this).val();
  });
  $("#settings  :password").each(function(i) {
    profile[$(this).attr('id')] = $(this).val();
  });
  $("#settings :checkbox").each(function(i) {
    profile[$(this).attr('id')] = $(this).is(':checked');
  });
  $("#settings #camResolution").each(function(i) {
    profile[$(this).attr('id')] = $(this).val();
  });

  localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
}

function loadProfile() {
  console.log("[DTWebRTC.main]:loading profile " + PROFILE_KEY);
  var profile = null;
  var s = localStorage.getItem(PROFILE_KEY);
  if (s) {
    try {
      profile = JSON.parse(s);
    } catch (e) {
      console.log("[DTWebRTC.main]:error while parsing settings from local storage");
    }
  }
  if (profile !== null) {
    var target;
    for (var key in profile) {
      target = $("#settings #" + key);
      if (target[0]) {
        target.attr('type') != "checkbox" ? target.val(profile[key]) : target.attr('checked', profile[key]);
      }
    }
  }
}

var resolutions = {
  "any": "--- any ---",
  "1920x1080": "FHD 16:9 1920x1080",
  "1680x1050": "WSXGA+ 16:10 1680x1050",
  "1600x1200": "UXGA 4:3 1600x1200",
  "1280x800": "WXGA 16:10 1280x800",
  "1280x720": "WXGA 16:9 1280x720",
  "800x600": "SVGA 4:3 800x600",
  "640x480": "VGA 4:3 640x480",
  "320x200": "CGA 8:5 320x200",
  "32x20": "CGA 8:5 32x20",
  "4096x2160": "4K 17:9 4096x2160"
};

function prepareMediaOptions() {
  var mediaOptions = {
    'audio': true,
    'video': true
  };
  var selectedRes = $("#camResolution").val();
  console.log("[DTWebRTC.main]:Selected Resolution: " + selectedRes);
  if (selectedRes !== "any") {
    var resolutionArr = selectedRes.split("x");
    console.log("[DTWebRTC.main]:minWidth: " + resolutionArr[0]);
    mediaOptions.video = {
      width: {
        exact: resolutionArr[0]
      },
      height: {
        exact: resolutionArr[1]
      }
    };
  }
  hyperty.setMediaOptions(mediaOptions);
}

function fillResoultionSelector() {
  $("#camResolution")
  var mySelect = $("#camResolution")
  $.each(resolutions, function(val, text) {
    mySelect.append(
      $('<option></option>').val(val).html(text)
    );
  });
}
