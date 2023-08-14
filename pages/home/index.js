import HeadComponent from "@teparuiz69/components/HeadComponent";
import React from "react";
import ButtonComander from "@teparuiz69/components/ButtonComander";
const Home = (props) => {
  return (
    <>
      <div style={{padding: '50px', justifyContent: 'center', alignItems: 'center'}}>
        <HeadComponent name="WIP Burguers Co" />
        <h1> Esta es mi página</h1>
        <div className="row">
        <div className="d-flex justify-content-around">
          
          <ButtonComander name="Pedidos" href="/orders"/>
         
          <ButtonComander name="Usuario" />
         
          <ButtonComander name="Corte de caja"/>
          <ButtonComander name="Ajustes" />
        </div>
      </div>
      </div>
    
    </>
  );
};

export default Home;
