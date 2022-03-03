import React, { useState, useEffect } from "react";
import { Container, Col, Row, Spinner } from "react-bootstrap";

const About = (props) => {
  // state to hold about data
  const [about, setAbout] = useState(null);

  //   console.log(props);

  useEffect(() => {
    // create function to make api call
    const getAboutData = async () => {
      // make api call and get response
      const response = await fetch(props.URL + "about");
      // turn response into javascript object
      const data = await response.json();
      // set the about state to the data
      setAbout(data);
    };

    getAboutData();
  }, []);

  // define a function that will return the JSX needed once we get the data
  const loaded = () => (
    <Container fluid="sm">
      <Row>
        <Col className="align-self-center" md={{ span: 6, offset: 3 }}>
          <div>
            <h2>{about.name}</h2>
            <h3>{about.email}</h3>
            <section>
              <p>{about.bio}</p>
            </section>
          </div>
        </Col>
      </Row>
    </Container>
  );

  const loading = () => {
    return (
      <Spinner
        animation="border"
        role="status"
        className="position-absolute top-50 start-50"
      >
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  };

  return about ? loaded() : loading();
};

export default About;
