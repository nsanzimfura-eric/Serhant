import "@/styles/globals.css";
import "@/styles/DesignSystem.css";
import axios from "axios";
import App from "next/app";
import { NextSeo } from "next-seo";
import WebsiteLayout from "@/layouts/WebsiteLayout";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.patch["Content-Type"] = "application/json";
axios.defaults.withCredentials = true;

function MyApp({ Component, pageProps, globalData }) {
  return (
    <>
      <NextSeo
        title={"rizz realty"}
        description={"rizz realty"}
        openGraph={{
          url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/[SLUG]`,
          title: ["rizz realty"],
          description: ["rizz realty"],
        }}
      />
      <WebsiteLayout globalData={globalData}>
        <Component {...pageProps} globalData={globalData} />
      </WebsiteLayout>
    </>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);

  const [header, footer] = await Promise.all([
    axios(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/globals/header`).then(
      (res) => res?.data
    ),
    axios(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/globals/footer`).then(
      (res) => res?.data
    ),
  ]);

  return {
    ...appProps,
    globalData: {
      header,
      footer,
    },
  };
};

export default MyApp;
