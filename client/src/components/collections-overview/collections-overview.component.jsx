import React from 'react';

import CollectionPreview from '../collection-preview/collection-preview';
import { CollectionsOverviewWrapper } from './collections-overview.styles';

const CollectionsOverview = ({ collections }) => {
  return (
    <CollectionsOverviewWrapper>
      {
        collections.map(({ id, ...rest }) => (
          <CollectionPreview key={id} {...rest}></CollectionPreview>
        ))
      }
    </CollectionsOverviewWrapper>
  );
};

export default CollectionsOverview;