'use strict';

import characters from "./modules/characters.js";
import header from "./modules/header.js";

const documentReady = () => {
  header();
  characters();
};

document.addEventListener('DOMContentLoaded', documentReady);