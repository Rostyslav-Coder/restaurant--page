import _ from 'lodash';
import { HEADER } from "./js/header";
import { HOME_PAGE } from './js/home';

function component() {
  const PAGE = document.querySelector('#content')

  // Lodash, now imported by this script
  PAGE.innerHTML = HEADER;
  PAGE.innerHTML += HOME_PAGE;

  return PAGE;
}

document.body.appendChild(component());
