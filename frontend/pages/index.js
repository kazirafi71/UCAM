import Head from "next/head";
import Image from "next/image";
import HomeComp from "../Components/UserComp/HomeComp/HomeComp";
import LayoutComp from "../Components/UserComp/LayoutComp/LayoutComp";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <LayoutComp>
      <HomeComp />
    </LayoutComp>
  );
}
