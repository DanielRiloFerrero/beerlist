import { Modal, Row, Col, Image } from "react-bootstrap";

import styles from "./ListItem.module.scss";

const ListItem = (props) => {
  console.log("props: ", props);

  return (
    <>
      {props.elementToShow && (
        <Modal show={props.show} onHide={props.toggleModal}>
          <Modal.Header closeButton className="py-2">
            <Modal.Title>{props.elementToShow.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="d-flex justify-content-center mb-5">
              <Image
                src={props.elementToShow.image_url}
                rounded
                className={styles.image}
              />
            </div>
            <Row>
              {props.elementToShow.description ? (
                <Col xs={12} className="mb-4">{props.elementToShow.description}</Col>
              ) : (
                ""
              )}

              <Col xs={12} md={6}>
                <span className="font-weight-bold">Fisrt Brewed:</span>{" "}
                {props.elementToShow.first_brewed
                  ? props.elementToShow.first_brewed
                  : "N/A"}
              </Col>
              <Col xs={12} md={6}>
                <span className="font-weight-bold">PH:</span>{" "}
                {props.elementToShow.ph ? props.elementToShow.ph : "N/A"}
              </Col>
              <Col xs={12} md={6}>
                <span className="font-weight-bold">ABV:</span>{" "}
                {props.elementToShow.abv ? props.elementToShow.abv : "N/A"}
              </Col>
              <Col xs={12} md={6}>
                <span className="font-weight-bold">IBU:</span>{" "}
                {props.elementToShow.ibu ? props.elementToShow.ibu : "N/A"}
              </Col>
            </Row>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};

export default ListItem;
