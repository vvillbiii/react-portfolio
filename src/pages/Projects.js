import React, { useState, useEffect } from "react";

const Projects = (props) => {
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
      <div>
        <h1>{project.name}</h1>
        <img src={project.image} />
        <a href={project.git}>
          <button>Github</button>
        </a>
        <a href={project.live}>
          <button>Live Site</button>
        </a>
      </div>
    ));
  };

  return projects ? loaded() : <h1>Loading...</h1>;
};

export default Projects;
