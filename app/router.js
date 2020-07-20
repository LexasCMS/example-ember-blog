import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('page', { path: '/page/:page_num' });
  this.route('post', { path: '/:post_slug' });
});
