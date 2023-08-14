import HeadComponent from "@teparuiz69/components/HeadComponent";
import React from "react";
import ButtonComander from "@teparuiz69/components/ButtonComander";
import { useRouter } from "next/router";
const Home = (props) => {
  const router = useRouter();
  return (
    <>
      <div
        style={{
          padding: "50px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <HeadComponent name="WIP Burguers Co" />
        <h1> WIP Burguers</h1>
        <div className="row">
          <div className="d-flex justify-content-around">
            <div className="col-4">
              <ButtonComander
                name="Hacer pedido"
                icon="check"
                onClick={() => router.push("/orders")}
              />
            </div>
            <div className="col-4">
              <button type="button" onClick={() => router.push("/list")}>
                <ButtonComander name="Lista" icon="list" />
              </button>
            </div>

            <div className="col-4">
              <button type="button" onClick={() => router.push("/orders")}>
                <ButtonComander name="Usuario" icon="person" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
