import Head from "next/head";
import { Fragment, useContext } from "react";
import { getProductsBySkin } from "@utils/product";
import { FooterOne as Footer } from "@components/footer";
import { ProductsContext } from "@global/ProductsContext";
import { HeaderThree as Header } from "@components/header";
import { HomePagesNavData as navContent } from "@data/navbar";
import { SliderOne as Slider } from "@components/slider";
import sliderData from "@data/slider/home-one.json";
import { ContentWrapperOne as ContentWrapper } from "@components/wrapper";
import { BrandsOne as Brands } from "@components/brands";
import { TendingProducts as Tending } from "@components/products";
import { Client } from "@elastic/elasticsearch";
import Card from "@components/cards/Card";
import Collectioncards from "@components/collectioncards/collectioncards";

const HomeFour = ({
  aggregationbyProductType,
  footer,
  topdiscounted,
  toprated,
}) => {
  const { products } = useContext(ProductsContext);
  const productsFashion = getProductsBySkin(products, "fashion");

  const logo = "/assets/images/no-placeholder/logo.png";

  return (
    <Fragment>
      <Head>
        <title>
          Home 04 - Wokiee :: React Next JS Multipurpose eCommerce Template
        </title>
      </Head>

      <Header logo={logo} navData={navContent} />
      <ContentWrapper>
        <Slider
          dots={true}
          arrows={true}
          data={sliderData}
          className="nomargin"
        />
        <Brands />
        <Tending products={productsFashion} data={topdiscounted?.hits?.hits} />
        <h2 style={{ paddingTop: "40px", textAlign: "center" }}>Top Brands</h2>
        <Card
          smallcardData={aggregationbyProductType?.aggregations?.langs?.buckets}
        />
        <h2 style={{ paddingTop: "40px", textAlign: "center" }}>Collections</h2>
        <Collectioncards />
      </ContentWrapper>

      <Footer logo={logo} />
    </Fragment>
  );
};
export default HomeFour;
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
