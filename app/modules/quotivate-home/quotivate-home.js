/**
 * @file
 * Contains the quotivate-home configuration
 */
/* globals Router */

Router.route('home', {
  path: '/',
  yieldRegions: {
    'responsiveMenus': {region: 'top'},
    'homeMasthead': {region: 'masthead'},
    'home': {region: 'main'},
    'defaultFooter': {region: 'footer'}
  }
});
