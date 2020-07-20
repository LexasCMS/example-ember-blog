import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {

  @service store;

  async model() {
    // Define page size
    const pageSize = 10;
    // Retrieve blog posts from LexasCMS
    const blogPosts = await this.store.query('blog-post', {
      page: { limit: pageSize },
      sort: '-publishedAt',
      include: 'coverImage'
    });
    // Return
    return {
      featured: blogPosts.firstObject,
      blogPosts: blogPosts.slice(1),
      hasNextPage: blogPosts.meta.total > pageSize
    }
  }

}