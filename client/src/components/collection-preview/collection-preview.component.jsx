import React from "react";
import { Link, withRouter } from "react-router-dom";
import CollectionItem from "../collection-item/collection-item.component";
import {
  CollectionPreviewContainer,
  PreviewContainer,
  TitleContainer,
} from "./collection-preview.styles";

const CollectionPreview = ({ title, items, match }) => (
  <CollectionPreviewContainer>
    <TitleContainer to={`${match.url}/${title.toLowerCase()}`}>
      {title.toUpperCase()}
    </TitleContainer>

    <PreviewContainer>
      {items
        .filter((item, i) => i < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
);

export default withRouter(CollectionPreview);
