import React, { useState, useEffect } from "react";

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
    <div>
      <h2>{about.name}</h2>
      <h3>{about.email}</h3>
      <p>{about.bio}</p>
    </div>
  );

  return about ? loaded() : <h1>Loading...</h1>;
};

export default About;
