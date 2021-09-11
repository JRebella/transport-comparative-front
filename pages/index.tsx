import type { NextPage } from "next";
import FloatingSideBar from "../components/Layout/FloatingSideBar/FloatingSideBar";
import RoutePicker from "../components/RoutePicker/RoutePicker";
import styles from "../styles/Home.module.css";

import { noop } from "lodash";
import { queryGeolocation } from "../api/AppPrices";

queryGeolocation("26 de marzo 3394");

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <FloatingSideBar>
        <RoutePicker setRoute={noop} />
        otro componente aca
      </FloatingSideBar>
    </div>
  );
};

export default Home;
