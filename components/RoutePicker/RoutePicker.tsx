import { TextField } from "@material-ui/core";
import React from "react";
import styles from "./_styles.module.scss";

type Props = {
  setRoute: (from: string, to: string) => void;
};

const RoutePicker = ({ setRoute }: Props) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Where to?</h2>

      <TextField label="From" className={styles.input} />
      <TextField label="To" className={styles.input} />
    </div>
  );
};

export default RoutePicker;
