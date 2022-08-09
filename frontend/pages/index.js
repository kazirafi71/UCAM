import Head from "next/head";
import Image from "next/image";
import HomeComp from "../Components/UserComp/HomeComp/HomeComp";
import LayoutComp from "../Components/UserComp/LayoutComp/LayoutComp";
import styles from "../styles/Home.module.css";
import { checkTokenAction } from "../redux/token/tokenAction";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  return (
    <LayoutComp>
      <HomeComp />
    </LayoutComp>
  );
}
