import React, { ReactNode, useContext } from "react";
import Head from "next/head";
import styles from "./_styles.module.scss";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title }: Props) => {
  const { isLoading } = useContext(AuthContext);
  return (
    <div className={styles["app-layout"]}>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <div className={styles.body}>{isLoading ? <CircularProgress className={styles.spinner} /> : children}</div>
    </div>
  );
};

const Header = () => {
  const { userDetails } = useContext(AuthContext);
  return (
    <header className={`${styles.header}`}>
      <span className={styles["app-title"]}>Transport Comparator</span>
      <span className={styles["username"]}>Welcome, {userDetails?.username}</span>
    </header>
  );
};

export default Layout;
