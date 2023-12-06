import React from "react";
import Head from "next/head";
const HeadComponent = (props) => {
  const { name = "" } = props;

  return (
    <Head>
      <title> {name} </title>
    </Head>
  );
};

export default HeadComponent;
