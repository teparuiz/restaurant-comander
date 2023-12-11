import React from 'react';
import { getSession } from "next-auth/client";
import { HTTP } from "/config/http";
import { validationSessionUser } from "@teparuiz69/config/utils";

const NewCashCut = (props) => {
  return (
    <div>
      
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
      if (user) validationSessionUser(user);
    } catch (err) {
      validationSessionUser(user);
    }
  
    return {
      props: {
        session,
        accessToken: session?.accessToken,
        user: user?.data,
      },
    };
  }
export default NewCashCut
