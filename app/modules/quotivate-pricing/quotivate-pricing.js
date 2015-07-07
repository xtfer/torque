/**
 * @file
 * Quotivate featuers
 */


Router.route('pricing', {
  path: 'pricing',
  yieldRegions: {
    'responsiveMenus': {region: 'top'},
    'defaultMasthead': {region: 'masthead'},
    'pricing': {region: 'main'},
    'defaultFooter': {region: 'footer'}
  }
});
