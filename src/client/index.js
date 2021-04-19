
import { createElement } from 'lwc';
import '@lwc/synthetic-shadow';
import '@fortawesome/fontawesome-free/js/all.js';
import '@fortawesome/fontawesome-free/js/fontawesome.js';
import MyApp from 'my/app';
import MyResume from 'my/resume';

const app = createElement('my-resume', { is: MyResume });
// eslint-disable-next-line @lwc/lwc/no-document-query
document.querySelector('#main').appendChild(app);
