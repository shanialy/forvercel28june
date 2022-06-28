import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import { getProducts } from "@utils/product";
import sliderConfig from "@utils/sliderConfig";
import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "@components/ui/section-title";
import Productx from "@components/product/Productx";

const TendingProducts = ({ data, products, layout, containerFluid }) => {
  const tendingProducts = getProducts(products, "tending", 4);

  const sliderOptions = {
    ...sliderConfig,
    slidesToShow: containerFluid ? 6 : 4,
  };
  //   console.log(tendingProducts);
  return (
    <div className="container-indent">
      <Container
        fluid={containerFluid}
        className="container-fluid-custom-mobile-padding"
      >
        <SectionTitle title="TRENDING" content="TOP ON SALE & TOP DISCOUNTED" />

        {layout === "grid" && (
          <Row className="tt-layout-product-item">
            {data?.map((product) => (
              <Col key={product._id} sm={6} md={4} lg={3}>
                <Productx page={"shop"} product={product} showVariant={true} />
              </Col>
            ))}
          </Row>
        )}

        {layout === "slider" && (
          <Slider
            {...sliderOptions}
            className="tt-carousel-products row arrow-location-tab arrow-location-tab01 tt-alignment-img tt-layout-product-item"
          >
            {data?.map((product) => (
              <Col key={product._id}>
                <Productx page={"shop"} product={product} showVariant={true} />
              </Col>
            ))}
          </Slider>
        )}
      </Container>
    </div>
  );
};

TendingProducts.propTypes = {
  products: PropTypes.array.isRequired,
};

TendingProducts.defaultProps = {
  layout: "grid",
  containerFluid: false,
};

export default TendingProducts;
