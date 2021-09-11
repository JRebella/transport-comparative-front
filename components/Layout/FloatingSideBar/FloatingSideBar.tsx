import React, { ReactNode } from "react";
import styles from "./_styles.module.scss";

type Props = {
  children?: ReactNode;
};

const FloatingSideBar = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.bar}>{children}</div>
    </div>
  );
};

export default FloatingSideBar;
