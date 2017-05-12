// jshint browser:true, jquery: true
// jshint varstmt: true

import {getTemplate, serialize} from './utils';

let loading = false;

export function hypertyDeployed(hyperty) {

  let $el = $('.main-content .notification');
  removeLoader($el);

  // Add some utils
  serialize();

  let $mainContent = $('.main-content').find('.row');

  let template = '';
  let script = '';

  console.info('[main.hypertyDeployed] loading demo for Hyperty: ', hyperty.name)

  switch (hyperty.name) {
    case 'HelloWorldObserver':
      template = 'hello-world/helloWorld';
      script = 'hello-world/helloObserver.js';
      break;

    case 'HelloWorldReporter':
      template = 'hello-world/helloWorld';
      script = 'hello-world/helloReporter.js';
      break;
    case 'Location':
      template = 'location/location';
      script = 'location/location.js';
      break;

    case 'UserAvailabilityObserver':
      template = 'user-availability/userAvailabilityObserver';
      script = 'user-availability/UserAvailabilityObserverDemo.js';
      break;

    case 'UserAvailabilityReporter':
      template = 'user-availability/userAvailabilityReporter';
      script = 'user-availability/UserAvailabilityReporterDemo.js';
      break;


    case 'MyContext':
      template = 'myContext/myContext';
      script = 'myContext/MyContext.js';
      break;


  }

  if (!template) {
    throw Error('You must specify the template for your example: ', hyperty.name);
  }

  getTemplate(template, script).then(function(template) {
    let html = template();
    $mainContent.html(html);

    if (typeof hypertyLoaded === 'function') {
      hypertyLoaded(hyperty);
    } else {
      let msg = 'If you need to pass the hyperty to your template, create a function called hypertyLoaded';
      console.info(msg);
      notification(msg, 'warn');
    }

    loading = false;
  });

}

export function hypertyFail(reason) {
  console.error(reason);
  notification(reason, 'error');
}

function removeLoader(el) {
  el.find('.preloader').remove();
  el.removeClass('center');
}

function notification(msg, type) {

  let $el = $('.main-content .notification');
  let color = type === 'error' ? 'red' : 'black';

  removeLoader($el);
  $el.append('<span class="' + color + '-text">' + msg + '</span>');
}
