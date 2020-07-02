import React from "react";

import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import PlaceItem from "./PlaceItem";
import classes from "./PlaceList.module.css";

const renderPlacesList = (items) => {
  return items.map((place) => (
    <PlaceItem
      key={place.id}
      id={place.id}
      image={place.imageUrl}
      title={place.title}
      description={place.description}
      address={place.address}
      creatorId={place.creator}
      coordinates={place.location}
    />
  ));
};

const PlaceList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className={`${classes.PlaceList} center`}>
        <Card>
          <h2>No places found. Maybe create one?</h2>
          <Button>Share Place</Button>
        </Card>
      </div>
    );
  }

  return <ul className={classes.PlaceList}>{renderPlacesList(props.items)}</ul>;
};

export default PlaceList;
