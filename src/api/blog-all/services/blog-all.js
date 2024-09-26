'use strict';

/**
 * blog-all service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::blog-all.blog-all');
