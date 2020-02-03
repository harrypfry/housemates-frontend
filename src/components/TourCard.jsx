import React from "react";

import { Item, Image } from "semantic-ui-react";

import { FaStar } from "react-icons/fa";

const TourCard = props => {
  return (
    <div>
      <Item className="tour-card-item">
        <div className="tour-card-col1">
          <div className="tour-card-row1">
            <Item.Header className="tour-card-header">
              {props.data.name}
            </Item.Header>
            <Item.Extra className="tour-card-rating">
              {props.data.score.toFixed(2)}&nbsp;
              <FaStar className="rating-star" />
            </Item.Extra>
          </div>
          <Item.Description className="tour-card-vendor">
            by&nbsp;{props.data.booking_info.vendor}
          </Item.Description>
          <Item.Description className="tour-card-intro">
            {props.data.intro}
          </Item.Description>
          <Item.Description className="tour-card-price">
            ${props.data.booking_info.price.amount}
          </Item.Description>
        </div>
        <div className="tour-card-row2">
          <img
            className="tour-card-image"
            src={props.data.images[0].sizes.thumbnail.url}
            alt="tour-card"
          />
        </div>
      </Item>
    </div>
  );
};

export default TourCard;
