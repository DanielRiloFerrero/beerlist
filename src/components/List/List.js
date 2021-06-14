import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Alert } from "react-bootstrap";

import ListItem from "../ListItem/ListItem";
import Loading from "../Loading/Loading";

import styles from "./List.module.scss";
import { API_URL } from "../../utils/js/const";

const List = () => {
  const [beerList, setBearList] = useState();
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState();
  const [showModal, setShowModal] = useState(false);
  const [elementToShow, setElementToShow] = useState(false);

  useEffect(() => {
    const getBeers = () => {
      fetch(`${API_URL}`)
        .then(async (response) => {
          if (response.ok) {
            const data = await response.json();
            setBearList(data);
          } else {
            throw new Error("There was an error with the Fetch");
          }
        })
        .catch((err) => setErrorMsg(err.message))
        .finally(() => setLoading(false));
    };

    getBeers();
  }, []);

  const handleShowModal = () => {
    setShowModal(false);
    setElementToShow("");
  };

  const btnShowModal = (el) => {
    setElementToShow(el);
    setShowModal(true);
  };

  return (
    <>
      {loading && <Loading />}

      <section className="pb-5">
        <Container>
          {errorMsg && (
            <Alert key={1} variant="danger">
              {errorMsg}
            </Alert>
          )}
          {beerList && (
            <Row>
              {beerList.map((el) => (
                <Col xs={12} sm={6} md={4} lg={3} key={el.id} className="mb-4">
                  <Card className={`${styles.cardWrapper} h-100 d-flex`}>
                    <Card.Img
                      src={el.image_url}
                      className={`${styles.image} py-2`}
                    />
                    <Card.Body className="d-flex flex-column justify-content-end">
                      <Card.Title>{el.name}</Card.Title>
                      <Card.Text>{el.tagline}</Card.Text>
                      <Button
                        variant="primary"
                        onClick={() => btnShowModal(el)}
                      >
                        Explore this beer!
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </Container>
        <ListItem
          show={showModal}
          toggleModal={handleShowModal}
          elementToShow={elementToShow}
        />
      </section>
    </>
  );
};

export default List;
