'use strict';

import { ZigBeeDriver } from 'homey-zigbeedriver';

module.exports = class ZS301ZDriver extends ZigBeeDriver {

  async onInit() {
    this.log('ZS-301Z Driver has been initialized');
  }

};
