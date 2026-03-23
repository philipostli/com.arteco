'use strict';

import Homey from 'homey';

module.exports = class ArtecoApp extends Homey.App {

  /**
   * onInit is called when the app is initialized.
   */
  async onInit() {
    this.log('Arteco for Homey has been initialized');
  }

};
