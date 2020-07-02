import React, { useState } from "react";

import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import Modal from "../../shared/components/UIElements/Modal";
import Map from "../../shared/components/UIElements/Map";
import classes from "./PlaceItem.module.css";

const PlaceItem = (props) => {
  const [showMap, setShowMap] = useState(false);

  const openMapHandler = () => setShowMap(true);
  const closeMapHandler = () => setShowMap(false);

  return (
    <React.Fragment>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={props.address}
        contentClass={classes.PlaceItemModalContent}
        footerClass={classes.PlaceItemModalActions}
        footer={<Button onClick={closeMapHandler}>Close</Button>}
      >
        <div className={classes.MapContainer}>
          <Map center={props.coordinates} zoom={16} />
        </div>
      </Modal>
      <li className={classes.PlaceItem}>
        <Card className={classes.PlaceItemContent}>
          <div className={classes.PlaceItemImg}>
            <img src={props.image} alt={props.title} />
          </div>
          <div className={classes.PlaceItemInfo}>
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>
          <div className={classes.PlaceItemActions}>
            <Button inverse onClick={openMapHandler}>
              View On Map
            </Button>
            <Button to={`/places/${props.id}`}>Edit</Button>
            <Button danger>Delete</Button>
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default PlaceItem;
