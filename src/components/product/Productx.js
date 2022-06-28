import React from "react";
import Link from "next/link";
import cogoToast from "cogo-toast";
import PropTypes from "prop-types";
import { useProductx } from "@hooks";
import { CURRENCY } from "@utils/constant";
import { Fragment, useContext } from "react";
import { CartContext } from "@global/CartContext";
import { toCapitalize } from "@utils/toCapitalize";
import ProductSize from "./elements/ProductSize";
import ProductColor from "./elements/ProductColor";
import ProductThumb from "./elements/ProductThumb";
import ProductAction from "./elements/ProductAction";
import ProductRatings from "./elements/ProductRatings";
import ProductMaterial from "./elements/ProductMaterial";
import { CartNotification, QuickView } from "@components/modal";
import ProductSaleCountdown from "./elements/ProductSaleCountdown";
import { getCartProductQuantity, getCartProduct } from "@utils/product";
import WishlistProductAction from "@components/product/elements/WishlistProductAction";

const Productx = ({ product, page, showVariant, className }) => {
  // const {
  //   badge,
  //   discount,
  //   discountDuration,
  //   name,
  //   ratings,
  //   thumbs,
  //   variations,
  //   vendor,
  // } = product;

  const productStock = 20;
  const cartProductQuantity = 10;
  return (
    <Fragment>
      <div className={`tt-product thumbprod-center ${className}`}>
        <div className="tt-image-box">
          {page === "wishlist" ? (
            <WishlistProductAction product={product} />
          ) : (
            <ProductAction
              product={product}
              // modalQuickViewHandler={modalQuickViewHandler}
            />
          )}

          <Link href={"/"}>
            <a>
              <ProductThumb
                thumbs={[product._source.image]}
                productName={product._source.title}
              />
              <div className="tt-label-location">
                {product._source.discount && (
                  <span className={`tt-label-sale`}>
                    Sale {parseInt(product._source.discount)}%
                  </span>
                )}
              </div>
            </a>
          </Link>
          <div className={`tt-description`}>
            <div className="tt-row">
              <ul className="tt-add-info">
                <li>
                  <Link href="/">
                    <a>{product._source.vendor}</a>
                  </Link>
                </li>
              </ul>

              <ProductRatings ratings={product._source.rating} />
            </div>

            <h2 className="tt-title">
              <Link href={"/"}>{product._source.title}</Link>
            </h2>

            <div className="tt-price mt-1">
              <Fragment>
                <span className="new-price">{product._source.price}</span>
                <span className="old-price">
                  {product._source.price_before_sale}
                </span>
              </Fragment>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
    // <Fragment>
    //   <div className={`tt-product thumbprod-center ${className}`}>
    //     <div className="tt-image-box">
    //       {page === "wishlist" ? (
    //         <WishlistProductAction product={product} />
    //       ) : (
    //         <ProductAction
    //           product={product}
    //           // modalQuickViewHandler={modalQuickViewHandler}
    //         />
    //       )}

    //       <Link href={"/"}>
    //         <a>
    //           <ProductThumb thumbs={thumbs} productName={name} />

    //           <div className="tt-label-location">
    //             {discount && (
    //               <span className={`tt-label-sale`}>Sale {discount}%</span>
    //             )}
    //           </div>
    //         </a>
    //       </Link>
    //     </div>

    //     <div className={`tt-description active `}>
    //       {/* {discount && discountDuration && (
    //         <div className="tt-countdown_box"></div>
    //       )} */}

    //       <div className="tt-row">
    //         <ul className="tt-add-info">
    //           <li>
    //             <Link href="/">
    //               <a>{vendor}</a>
    //             </Link>
    //           </li>
    //         </ul>

    //         <ProductRatings ratings={ratings} />
    //       </div>

    //       <h2 className="tt-title">
    //         <Link href={"/"}>{name}</Link>
    //       </h2>

    //       {/* <div className="tt-price mt-1">
    //         <Fragment>
    //           <span className="new-price">{"Rs:1000"}</span>
    //           <span className="old-price">{"Rs:2000"}</span>
    //         </Fragment>
    //       </div> */}

    //       <div className="tt-product-inside-hover">
    //         <div className="tt-row-btn d-md-none">
    //           {page === "wishlist" ? (
    //             <WishlistProductAction product={product} />
    //           ) : (
    //             <ProductAction product={product} />
    //           )}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </Fragment>
  );
};

Productx.propTypes = {
  product: PropTypes.object.isRequired,
  showVariant: PropTypes.bool.isRequired,
  page: PropTypes.string,
};

Productx.defaultProps = {
  showVariant: true,
};

export default Productx;
