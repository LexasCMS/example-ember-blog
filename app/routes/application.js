import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class ApplicationRoute extends Route {

  @action
  didTransition() {
    // Reset scroll position when route changes
    window.scrollTo(0, 0);
  }

}