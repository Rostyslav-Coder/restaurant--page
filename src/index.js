// INDEX.JS

import _ from 'lodash';
import { HEADER } from "./js/header";
import { HOME_PAGE } from './js/home';
import { MENU_PAGE } from './js/menu';
import { DELIVERY_PAGE } from './js/delivery';
import { CONTACT_PAGE } from './js/contact';
import { ABOUT_PAGE } from './js/about';
import { FOOTER } from './js/footer';

function component(_page = HOME_PAGE) {
  const PAGE = document.querySelector('#content')

  // Clear the page content before updating
  PAGE.innerHTML = '';

  // Lodash, now imported by this script
  PAGE.innerHTML = HEADER;
  PAGE.innerHTML += _page;
  PAGE.innerHTML += FOOTER;

  const home = document.querySelector('#home');
  const menu = document.querySelector('#menu');
  const delivery = document.querySelector('#delivery');
  const contact = document.querySelector('#contact');
  const about = document.querySelector('#about');

  const buttons = [home, menu, delivery, contact, about];
  const pages = [HOME_PAGE, MENU_PAGE, DELIVERY_PAGE, CONTACT_PAGE, ABOUT_PAGE];

  const buttonPageMap = {};
  buttons.forEach((button, index) => {
    buttonPageMap[button.id] = pages[index];
  });

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      component(buttonPageMap[button.id]);
    });
  });

  return PAGE;
}

document.body.appendChild(component());
