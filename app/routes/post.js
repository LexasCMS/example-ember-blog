import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class PostRoute extends Route {

  @service store;

  async model({ post_slug }) {
    // Query for blog post by slug
    const blogPost = await this.store.query('blog-post', {
      page: { limit: 1 },
      filter: {
        slug: { _eq: post_slug }
      },
      include: 'author,coverImage'
    });
    // Return blog post
    return blogPost.firstObject;
  }

}