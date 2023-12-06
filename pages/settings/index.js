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
  const {} = context.query;
  const session = await getSession(context);
  let user;
  if (!session)
    return {
      redirect: {
        destination: "/account/login",
        permanent: false,
      },
    };
  try {
    user = await HTTP("GET", "/list", {}, session.accessToken);
    if (validationSessionUser(user)) return validationSessionUser(user);
  } catch (err) {
    return validationSessionUser(err);
  }
  let data;
  try {
    data = await HTTP(
      "GET",
      `user/all`,
      { ...context.query },
      session?.accessToken
    );
  } catch (err) {
    return validationSessionUser(err);
  }

  return {
    props: {
      session: session,
      accessToken: session.accessToken,
      layout: "admin",
      user: user,
      data: data,
      params: {
        ...context.query,
        s,
      },
      rol: rol,
    },
  };
}

export default Settings
