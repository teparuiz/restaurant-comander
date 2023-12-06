import React from 'react'
import { HTTP } from "/config/http";
import { getSession } from "next-auth/client";
import { validationSessionUser } from "@teparuiz69/config/utils";

const Settings = (props) => {
  return (
    <div>
      <h1> Configuración </h1>
    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/account/login",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}

export default Settings
