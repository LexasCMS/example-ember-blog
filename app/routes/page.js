import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class PageRoute extends Route {

  @service store;

  beforeModel() {
    // Get page number
    const { page_num } = this.paramsFor('page');
    // Redirect is this is page 1
    if (page_num === '1') {
      this.transitionTo('index');
    }
  }

  async model({ page_num }) {
    // Define variables
    const currentPage = parseInt(page_num, 10);
    const postsOnFirstPage = 10;
    const postsPerPage = 9;
    // Retrieve blog posts from LexasCMS
    const blogPosts = await this.store.query('blog-post', {
      page: {
        limit: postsPerPage,
        skip: (postsPerPage * (currentPage - 2)) + postsOnFirstPage
      },
      sort: '-publishedAt',
      include: 'coverImage'
    });
    // Calculate total pages
    const totalPages = Math.ceil((blogPosts.meta.total - postsOnFirstPage) / postsPerPage) + 1;
    // Return
    return {
      blogPosts,
      nextPage: currentPage < totalPages ? currentPage + 1 : undefined,
      prevPage: currentPage - 1
    };
  }

}