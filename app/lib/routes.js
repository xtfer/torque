/**
 * @file
 * Global router configuration
 */
/* global Router */

Router.configure({
  layoutTemplate: 'layoutMain',
  yieldRegions: {
    'responsiveMenus': {region: 'top'},
    'defaultMasthead': {region: 'masthead'},
    'defaultFooter': {region: 'footer'}
  }
});





