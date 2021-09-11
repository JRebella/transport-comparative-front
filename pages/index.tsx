import type { NextPage } from "next";
import { useState } from "react";
import { Route } from "../api/AppPrices";
import FloatingSideBar from "../components/Layout/FloatingSideBar/FloatingSideBar";
import PricesComparison from "../components/PricesComparison/component";
import RoutePicker from "../components/RoutePicker/RoutePicker";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [routeQuery, setRouteQuery] = useState<Route | null>(null);

  return (
    <div className={styles.container}>
      <FloatingSideBar>
        <RoutePicker setRoute={setRouteQuery} />
        <PricesComparison />
      </FloatingSideBar>
    </div>
  );
};

export default Home;
