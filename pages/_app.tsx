import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { AuthProvider } from "../context/AuthContext";
import Layout from "../components/Layout/Layout";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { green, blue } from "@material-ui/core/colors";

const theme = createTheme({
  // palette: {
  //   primary: {
  //     main: green[500],
  //   },
  //   secondary: {
  //     main: green[500],
  //   },
  // },
});
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      </Head>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <Layout title="Transport Comparator">
            <link rel="stylesheet" href="https://use.typekit.net/sgw3rmg.css"></link>
            <Component {...pageProps} />
          </Layout>
        </AuthProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
