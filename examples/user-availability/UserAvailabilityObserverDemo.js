// jshint browser:true, jquery: true
// jshint varstmt: false

let observer;

function hypertyLoaded(result) {

  $('.selection-panel').hide();

  console.log('[UserAvailabilityObserverDemo] started ', result);

  let hypertyInfo = '<span class="white-text">' +
                    '<b>Name:</b> ' + result.name + '</br>' +
                    '<b>Status:</b> ' + result.status + '</br>' +
                    '<b>HypertyURL:</b> ' + result.runtimeHypertyURL + '</br>' +
                    '</span>';
  $('.card-panel').html(hypertyInfo);

  console.log('UserAvailabilityObserverDemo Waiting!!');

  observer = result.instance;

  observer.onResumeObserver((userAvailability) => {
    console.log('[UserAvailabilityObserverDemo - on Resume observers] :', userAvailability);

    if (userAvailability) {
      console.log('[UserAvailabilityObserverDemo - on Resume observers] resuming:', userAvailability);
      observeUserAvailability(observer, userAvailability);

    } else {
      console.log('[UserAvailabilityObserverDemo] Nothing to be resumed. Lets discover users availability to observer ');
      discoverUsers(observer);
    }
  });
  observer.start();
}

function discoverUsers(observer) {
  let email = $('.email-input');
  let domain = $('.domain-input');

  let searchForm = $('.search-form');
  let discoveryEl = $('.discover');

  observer = observer;

  discoveryEl.removeClass('hide');

  searchForm.on('submit', function(event) {

    event.preventDefault();

    observer.discovery(email.val(), domain.val()).then(function(result) {
      console.log('Result:', result[0]);

      let collection = $('.collection');
      let collectionItem;
      collection.empty();

      if (result[0].hasOwnProperty('userID')) {
        collectionItem = '<li data-url="' + result[0].userID + '" class="collection-item">' +
        '<span class="title"><b>UserURL: </b>' + result[0].userID + '</span>' +
        '<a title="Subscribe to ' + result[0].userID + '" class="waves-effect waves-light btn subscribe-btn secondary-content"><i class="material-icons">import_export</i></a>' +
        '<p><b>DescriptorURL: </b>' + result[0].descriptor + '<br><b>HypertyURL: </b>' + result[0].hypertyID +
        '<br><b>Resources: </b>' + JSON.stringify(result[0].resources) +
        '<br><b>DataSchemes: </b>' + JSON.stringify(result[0].dataSchemes) +
        '</p></li>';
      } else {
        collectionItem = '<li class="collection-item">' +
        '<span class="title">' + result[0] + '</span>' +
        '</li>';
      }

      collection.append(collectionItem);

      let subscribe = $('.subscribe-btn');

      subscribe.on('click', function(event) {
        console.log('[UserAvailabilityObserverDemo] ON SUBSCRIBE', event);

        event.preventDefault();

        observer.connect(result[0].hypertyID).then(function(urlDataObject) {
          console.log('[UserAvailabilityObserverDemo] Subscribed', urlDataObject);

          observer.observeAvailability(urlDataObject).then(observerDataObject => {

            observeUserAvailability(observer, observerDataObject);
          });
        });
      });
    });
  });
}

function observeUserAvailability(observer, userAvailability) {
  console.log('[UserAvailabilityObserverDemo.observeUserAvailability]: ', userAvailability);

  let msgPanel = $('.msg-panel');

  if (userAvailability.data && userAvailability.data.values && userAvailability.data.values.legth > 0) {
    let msg = `<p>  ` + userAvailability.data.values[0].value + `</p>`;
    msgPanel.append(msg);
  }

  observer.addEventListener('user-status', function(event) {

      console.log('User Status event received:', event);

      let msgPanel = $('.msg-panel');

      let msg = `<p>  ` + userAvailability.data.values[0].value + `</p>`;

      msgPanel.append(msg);

    });
}
