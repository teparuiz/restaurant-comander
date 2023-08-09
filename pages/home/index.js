import { Button } from "@teparuiz69/components/Button";
import HeadComponent from "@teparuiz69/components/HeadComponent";
import React from "react";

const Home = (props) => {
  return (
    <div>
      <HeadComponent name="WIP Burguers Co" />
      <h1> Esta es mi página</h1>
      <Button name="Button comandero" onClick={() => console.log('Hola')} />
    </div>
  );
};

export default Home;
