import React from "react";

import CollectionItem from "../../components/collection-item/collection-item.component";
import { useSelector } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";
import { useParams } from "react-router-dom";
import {
  CollectionItemsContainer,
  CollectionPageContainer,
  CollectionTitle,
} from "./collection.styles";

const CollectionPage = () => {
  const { collectionId } = useParams();
  const collection = useSelector(selectCollection(collectionId));
  const { title, items } = collection;

  return (
    <CollectionPageContainer>
      <CollectionTitle className="title">{title}</CollectionTitle>

      <CollectionItemsContainer className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

export default CollectionPage;
