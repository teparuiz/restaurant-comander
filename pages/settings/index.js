import React from 'react'
import { HTTP } from "/config/http";
import { getSession } from "next-auth/client";

const Settings = (props) => {
  return (
    <div>
      <h1> Configuración </h1>
    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  let user;

  if (!session) {
    return {
      redirect: {
        destination: "/account/login",
        permanent: false,
      },
    };
  }



  try {
    user = await HTTP("GET", "/user", {}, session.accessToken);
  } catch (err) {
    console.error("Error al obtener al usuario", err);
  }

  return {
    props: {
      session,
      accessToken: session?.accessToken,
      user: user?.data,
    },
  };
}

export default Settings
