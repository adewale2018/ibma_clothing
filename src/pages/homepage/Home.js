import React from "react";

// import "./Home.css";
import Directory from "../../components/directory/Directory";
import { HomepageContainer } from './home.styles';

function Home() {
  return (
    <HomepageContainer>
      <Directory />
    </HomepageContainer>
  );
}

export default Home;
