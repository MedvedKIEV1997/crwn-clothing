import React from "react";
import { Link, withRouter } from "react-router-dom";
import CollectionItem from "../collection-item/collection-item.component";

import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, items, match }) => (
  <div className="collection-preview">
    <Link className="title" to={`${match.url}/${title.toLowerCase()}`}>
      {title.toUpperCase()}
    </Link>

    <div className="preview">
      {items
        .filter((item, i) => i < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default withRouter(CollectionPreview);
