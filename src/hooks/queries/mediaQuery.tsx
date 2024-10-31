import { useQuery } from '@apollo/client';
import MEDIA_LIST_PAGINATED_QUERY from '../../graphql/queries/mediaList';

export function useMediaQuery(page?: number, perPage?: number) {
  const { loading, error, data } = useQuery(MEDIA_LIST_PAGINATED_QUERY, {
    variables: {
      page,
      perPage,
    },
  });

  return { loading, error, data };
}
