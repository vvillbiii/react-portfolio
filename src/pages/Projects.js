import React, { useState, useEffect } from "react";
import { Spinner, Button, Container, Row, Col, Figure } from "react-bootstrap";

const Projects = (props) => {
  const imgStyle = {
    width: "25%",
    height: "auto",
    margin: "auto",
  };

  const style = {
    display: "flex",
    flexDirection: "row",
  };
  // State to hold project data
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    //create function to make api call
    const getProjectsData = async () => {
      //make api call and get response
      const response = await fetch(props.URL + "projects");
      // turn response into javascript object
      const data = await response.json();
      // set the projects state to the data
      setProjects(data);
    };
    getProjectsData();
  }, []);

  // define a function that will return the JSX needed once we get the data
  const loaded = () => {
    return projects.map((project) => (
      <Container>
        <Row>
          <Col>
            <h3>{project.name}</h3>
            <Figure>
              <Figure.Image
                width={171}
                height={180}
                alt={project.name}
                src={project.image}
              />
            </Figure>
            <br />
            <a href={project.git}>
              <Button variant="secondary" className="mx-2 mt-2 mb-4">
                Github
              </Button>
            </a>
            <a href={project.live}>
              <Button variant="secondary" className="mt-2 mb-4">
                Live Site
              </Button>
            </a>
          </Col>
        </Row>
      </Container>
    ));
  };

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

  return (
    <div>
      <h1>Projects</h1>
      {projects ? loaded() : loading()}
    </div>
  );
};

export default Projects;
