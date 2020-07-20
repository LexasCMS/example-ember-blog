import Model, { attr, belongsTo } from '@ember-data/model';

export default class BlogPostModel extends Model {

  @attr slug;
  @attr title;
  @attr publishedAt;
  @attr excerpt;
  @attr mainContent;
  
  @belongsTo('author') author;
  @belongsTo('core-image') coverImage;

}