import Head from "next/head";
import { Fragment, useContext, useEffect, useState } from "react";
import { getProductsBySkin } from "@utils/product";
import { FooterOne as Footer } from "@components/footer";
import { ProductsContext } from "@global/ProductsContext";
import { HeaderSeven as Header } from "@components/header";
import { HomePagesNavData as navContent } from "@data/navbar";
import { CategoriesTen as Categories } from "@components/categories";
import {
  HeroBannerFive as HeroBanner,
  HeroBannerTemp,
} from "@components/hero-banners";
import { ContentWrapperOne as ContentWrapper } from "@components/wrapper";
import { TendingProducts as Tending } from "@components/products";
import Card from "@components/cards/Card";
import { SliderOne as Slider } from "@components/slider";
import sliderData from "@data/slider/home-one.json";
import { Client } from "@elastic/elasticsearch";

export default function Home({
  aggregationbyProductType,
  footer,
  topdiscounted,
  toprated,
}) {
  // console.log(aggregationbyProductType?.aggregations?.langs?.buckets);
  // console.log(footer);
  // console.log(topdiscounted);
  // console.log(toprated);
  const { products } = useContext(ProductsContext);
  const productsFashion = getProductsBySkin(products, "fashion");
  const logo = "/assets/images/no-placeholder/logo.png";

  return (
    <Fragment>
      <Head>
        <title>PriceSure</title>
      </Head>
      <Header logo={logo} navData={navContent} containerFluid={false} />
      <ContentWrapper>
        {/* <HeroBanner className="tt-offset-20" /> */}
        <HeroBannerTemp className="tt-offset-20" />
        <Categories />
      </ContentWrapper>
      <ContentWrapper>
        <Slider
          dots={true}
          arrows={true}
          data={sliderData}
          className="nomargin"
        />
      </ContentWrapper>
      <h4 style={{ paddingLeft: "20px" }}>Deal Of the Day:</h4>
      <Tending products={productsFashion} data={topdiscounted?.hits?.hits} />
      <h4 style={{ paddingLeft: "20px", paddingTop: "20px" }}>Top Brands:</h4>
      <Card
        smallcardData={aggregationbyProductType?.aggregations?.langs?.buckets}
      />
      <Footer logo={logo} newsletter={false} />
    </Fragment>
  );
}
export async function getStaticProps() {
  const client = new Client({
    node: "http://43.251.253.107:2500",
  });
  client.ping();

  const navbarQuery = client.search({
    index: "pricechoice_v3",
    aggs: {
      langs: {
        terms: {
          field: "product_type",
          size: 500,
        },
      },
    },
  });

  const footerQery = client.search({
    index: "pricechoice_v3",
    aggs: {
      langs: {
        terms: {
          field: "domain.keyword",
          size: 500,
        },
      },
    },
  });
  const Rand = client.search({
    index: "pricechoice_v3",
    sort: [
      {
        discount: {
          order: "desc",
        },
      },
    ],
    size: 4,
  });
  const Fax = client.search({
    index: "pricechoice_v3",
    sort: [
      {
        rating: {
          order: "desc",
        },
      },
    ],
    size: 4,
  });
  const responses = await Promise.all([navbarQuery, footerQery, Rand, Fax]);

  return {
    props: {
      aggregationbyProductType: responses[0],
      footer: responses[1],
      topdiscounted: responses[2],
      toprated: responses[3],
    },
  };
}
