import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@teparuiz69/styles/Home.module.css";
import Home from "@teparuiz69/pages/home/index";
const inter = Inter({ subsets: ["latin"] });

export default function App() {
  return (
    <div className={styles.home}>
      <Home />
    </div>
  );
}
