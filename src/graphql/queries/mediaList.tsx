import { graphql } from '../codegen';

const MEDIA_LIST_PAGINATED_QUERY = graphql(`
  query MEDIA_LIST_PAGINATED_QUERY($page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      mediaList {
        id
        media {
          bannerImage
          coverImage {
            color
            large
            medium
            extraLarge
          }
          title {
            english
            native
            romaji
          }
          description
        }
      }
    }
  }
`);

export default MEDIA_LIST_PAGINATED_QUERY;
