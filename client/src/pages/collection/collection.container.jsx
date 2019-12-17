import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import Spinner from '../../components/spinner/spinner.component';
import CollectionPage from './collection.component';

const GET_COLLECTION_BY_TITLE = gql`
  query getCollectionsByTitle($title: String!) {
    getCollectionsByTitle(title: $title) {
      id
      title
      items { id name price imageUrl }
    }
  }
`;

export const CollectionPageContainer = ({ match: { params: { collectionId } } }) => (
  <Query query={GET_COLLECTION_BY_TITLE} variables={{ title: collectionId }}>
    {
      ({ loading, data }) => loading
        ? <Spinner/>
        : <CollectionPage collection={data.getCollectionsByTitle}/>
    }
  </Query>
);
