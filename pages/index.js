import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@teparuiz69/styles/Home.module.css";
import Home from "@teparuiz69/pages/home/index";
import { useSession, signIn, signOut } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export default function App() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <Home />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }

  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}> Sign in</button>
    </>
  );
}

{
  /* <div className={styles.home}>
<Home />
</div> */
}
