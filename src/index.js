 import _ from 'lodash';
 import printMe from './print.js'

 function component() {
     var element = document.createElement('div');
     var button = document.createElement('button');
     // Lodash, currently included via a script, is required for this line to work
     // Lodash, now imported by this script
     element.innerHTML = _.join(['你好', 'webpack'], ' ');
     button.innerHTML = "click me to show log";
     button.onclick =  printMe;
     element.appendChild(button);
     return element;
 }

 document.body.appendChild(component());