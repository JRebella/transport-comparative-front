import type { NextPage } from "next";
import FloatingSideBar from "../components/Layout/FloatingSideBar/FloatingSideBar";
import RoutePicker from "../components/RoutePicker/RoutePicker";
import styles from "../styles/Home.module.css";
import PricesComparison from "../components/PricesComparison/component";

import { noop } from "lodash";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <FloatingSideBar>
        <RoutePicker setRoute={noop} />
        <PricesComparison/>
      </FloatingSideBar>
    </div>
  );
};

export default Home;
