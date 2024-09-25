'use strict';

/**
 * blogs-new service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::blogs-new.blogs-new');
