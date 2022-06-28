import React from "react";
import { Fragment } from "react";
import Head from "next/head";
import CartContextProvider from "@global/CartContext";
import CompareContextProvider from "@global/CompareContext";
import ProductsContextProvider from "@global/ProductsContext";
import WishlistContextProvider from "@global/WishlistContext";
import "react-tippy/dist/tippy.css";
import "@assets/scss/style.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../components/cards/cards.css";
import "../components/slider/SliderOne.css";
import "../components/categories-menu/temp.css";

const Wokiee = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <Head>
        <title>Wokiee - React Next JS Multipurpose eCommerce Template</title>
      </Head>

      <CartContextProvider>
        <CompareContextProvider>
          <WishlistContextProvider>
            <ProductsContextProvider>
              <Component {...pageProps} />
            </ProductsContextProvider>
          </WishlistContextProvider>
        </CompareContextProvider>
      </CartContextProvider>
    </Fragment>
  );
};

export default Wokiee;
