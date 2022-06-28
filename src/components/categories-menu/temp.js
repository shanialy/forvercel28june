import Link from "next/link";
import { useState } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { Col, Row } from "react-bootstrap";

// Icons Import
import Shoe from "@assets/images/svg/shoe.svg";
import MenIcon from "@assets/images/svg/men.svg";
import BuyTemplate from "@assets/images/svg/buy.svg";
import WomenIcon from "@assets/images/svg/women.svg";
import GiftCard from "@assets/images/svg/gift-card.svg";
import Clearance from "@assets/images/svg/clearance.svg";
import Accessories from "@assets/images/svg/accessories.svg";
import NewArrivals from "@assets/images/svg/new-arrivals.svg";
import SpecialOffers from "@assets/images/svg/special-offers.svg";

const CategoriesMenu = ({ className, initialVisibility }) => {
  const [dropdownToggle, setDropdownToggle] = useState(initialVisibility);
  const router = useRouter();
  const productype = "trouser";
  const onToggleHandler = () => {
    setDropdownToggle((prevState) => !prevState);
  };

  return (
    <div className={`tt-menu-categories ${className ? className : ""}`}>
      <button
        className={`tt-dropdown-toggle ${dropdownToggle ? "active" : ""}`}
        onClick={onToggleHandler}
      >
        CATEGORIES
      </button>
      <div className={`tt-dropdown-menu ${dropdownToggle ? "active" : ""}`}>
        <nav>
          <ul>
            {/* ////////////////ELECTRONIC-DEVICES///////////////// */}
            <li className="tt-submenu">
              <Link href="/product/category/women">
                <a>
                  <WomenIcon />
                  <span>Electronic Devices</span>
                </a>
              </Link>
              <div
                className="dropdown-menu size-md "
                style={{ width: "250px", height: "100%" }}
              >
                <div className="dropdown-menu-wrapper p-0">
                  <ul className="tt-megamenu-submenu">
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "15px",
                            paddingBottom: "8px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Smart Phones
                        </a>
                      </Link>
                      <ul
                        className="tt-megamenu-submenu"
                        style={{ marginLeft: "65%", height: "500px"}}
                      >
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Nokia Mobiles
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Apple iPhones
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Xiaomi Mi Mobiles
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Redmi Mobiles
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Realme Mobiles
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Oppo Mobile Phones
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Oneplus Mobiles
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Infinix Mobiles
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Honor Mobiles
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Tecno Mobiles
                            </a>
                          </Link>
                        </li>
                        {/* <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Samsung Mobile Phones
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Vivo Mobiles
                            </a>
                          </Link>
                        </li> */}
                        {/* <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Asus Mobiles
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Gfive Mobiles
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Huawei Mobiles
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "18px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Lenovo Mobiles
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Itel Mobiles
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              ZTE Mobiles
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Motorola Mobiles
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Google Mobiles
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Qmobile Mobiles
                            </a>
                          </Link>
                        </li> */}
                      </ul>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "15px",
                            paddingBottom: "8px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Feature Phones
                        </a>
                      </Link>
                      <ul
                        className="tt-megamenu-submenu"
                        style={{
                          marginLeft: "65%",
                          height: "500px",
                          marginTop: "-25%",
                        }}
                      >
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Feature Phones
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "15px",
                            paddingBottom: "8px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Tablets
                        </a>
                      </Link>
                      <ul
                        className="tt-megamenu-submenu"
                        style={{
                          marginLeft: "65%",
                          height: "500px",
                          marginTop: "-55%",
                        }}
                      >
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Tablets
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              IOS Tablet
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Windows Tablets
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Android Tablets
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Amazon Tablets
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "15px",
                            paddingBottom: "10px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Laptops
                        </a>
                      </Link>
                      <ul
                        className="tt-megamenu-submenu"
                        style={{
                          marginLeft: "65%",
                          height: "500px",
                          marginTop: "-80%",
                        }}
                      >
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Gaming Laptops
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Refurbished Laptops
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Traditional Laptops
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Notebooks
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Reversible Laptops
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Detechable Laptops
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "15px",
                            paddingBottom: "8px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Desktops
                        </a>
                      </Link>
                      <ul
                        className="tt-megamenu-submenu"
                        style={{
                          marginLeft: "65%",
                          height: "500px",
                          marginTop: "-110%",
                        }}
                      >
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Gaming Desktops
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              All-In-One
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              DIY
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "15px",
                            paddingBottom: "8px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Smart Watches
                        </a>
                      </Link>
                      <ul
                        className="tt-megamenu-submenu"
                        style={{
                          marginLeft: "65%",
                          height: "500px",
                          marginTop: "-135%",
                        }}
                      >
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Smart Watches
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "15px",
                            paddingBottom: "8px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Gaming Consoles
                        </a>
                      </Link>
                      <ul
                        className="tt-megamenu-submenu"
                        style={{
                          marginLeft: "65%",
                          height: "500px",
                          marginTop: "-160%",
                        }}
                      >
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              PlayStation Consoles
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Playstation Games
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Playstation Controllers
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Nintendo Games
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Xbox Games
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "15px",
                            paddingBottom: "8px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Cameras & Drones
                        </a>
                      </Link>
                      <ul
                        className="tt-megamenu-submenu"
                        style={{
                          marginLeft: "65%",
                          height: "500px",
                          marginTop: "-190%",
                        }}
                      >
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Video Camera
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              DSLR
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Drones
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Point & Shoot
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Instant Cameras
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "15px",
                            paddingBottom: "10px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Security Cameras
                        </a>
                      </Link>
                      <ul
                        className="tt-megamenu-submenu"
                        style={{
                          marginLeft: "65%",
                          height: "500px",
                          marginTop: "-210%",
                        }}
                      >
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              IP Security Cameras
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "15px",
                            paddingBottom: "8px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Apple
                        </a>
                      </Link>
                      <ul
                        className="tt-megamenu-submenu"
                        style={{
                          marginLeft: "65%",
                          height: "500px",
                          marginTop: "-245%",
                        }}
                      >
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Apple Display
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Mac Mini
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Macbook Pro Retina Display
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",

                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Mac Desktop
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            {/* ////////////ELECTRONIC-ACCESORIES//////////////////////?? */}
            <li className="tt-submenu">
              <Link href="/product/category/women">
                <a>
                  <Accessories />
                  <span>Electronic Accessories</span>
                </a>
              </Link>
              <div
                className="dropdown-menu size-md "
                style={{ width: "250px", height: "100%" }}
              >
                <div className="dropdown-menu-wrapper p-0">
                  <ul className="tt-megamenu-submenu">
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "15px",
                            paddingBottom: "8px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Mobile Accessories
                        </a>
                      </Link>
                      <ul
                        className="tt-megamenu-submenu"
                        style={{ marginLeft: "31%", height: "500px" }}
                      >
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Power Banks
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Screen Protectors
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Cases & Covers
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Handsfree
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Chargers & Cables
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Wireless Chargers
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Gadgets & Accessories
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Memory Cards
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Phone Cases
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Cables & Converters
                            </a>
                          </Link>
                        </li>
                        {/* <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Wall Chargers
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Tablet Accessories
                            </a>
                          </Link>
                        </li> */}
                        {/* <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Parts & Tools
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Car Chargers
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Phone Camera Flash Lights
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "18px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Selfie Sticks
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Docks & Stands
                            </a>
                          </Link>
                        </li> */}
                      </ul>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "15px",
                            paddingBottom: "8px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Headphones & Headsets
                        </a>
                      </Link>
                      <ul
                        className="tt-megamenu-submenu"
                        style={{
                          marginLeft: "31%",
                          height: "500px",
                          marginTop: "-20%",
                        }}
                      >
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Bluetooth Headsets
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Headphones & Headsets Access
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              In-Ear Headphones
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Mono Headsets
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Over-The-Ear Headphones
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Wired Headsets
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Wireless Earbuds
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "15px",
                            paddingBottom: "8px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Camera Accessories
                        </a>
                      </Link>
                      <ul
                        className="tt-megamenu-submenu"
                        style={{
                          marginLeft: "31%",
                          height: "500px",
                          marginTop: "-45%",
                        }}
                      >
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Memory Cards
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Lenses
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Tripods & Monopods
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Camera Cases, Covers and Bags
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Action Camera Accessories
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Lighting & Studio Equipment
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Batteries
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Gimbals & Stabilizers
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Bags & Cases
                            </a>
                          </Link>
                        </li>
                        {/* <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Camera & Rigs Supports
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              GoPro
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Lighting & Studio
                            </a>
                          </Link>
                        </li> */}
                        {/* <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Tripods
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Blackmagic Accessories
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Digital Voice Recorder
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "18px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Digital Photo Frame
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Camera Battery Charger
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Camera Battery
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Camera Straps
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              DSLR Screen Protectors
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Lens Cap
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Battery Grip
                            </a>
                          </Link>
                        </li> */}
                      </ul>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "15px",
                            paddingBottom: "8px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Computer Accessories
                        </a>
                      </Link>
                      <ul
                        className="tt-megamenu-submenu"
                        style={{
                          marginLeft: "31%",
                          height: "500px",
                          marginTop: "-70%",
                        }}
                      >
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Cooling Pads/Cooling Stands
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Keyboards
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Mice
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Adapters & Cables
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              PC Audio
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Gaming Headsets
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Gaming Mice
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Gaming Keyboards
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Mac Accessories
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Printers & Scanners
                            </a>
                          </Link>
                        </li>
                        {/* <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Laptop Accessories
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Hard Drives & SSD
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Charger & Cables
                            </a>
                          </Link>
                        </li> */}
                        {/* <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Processors
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              MotherBoards
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Desktops
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Keyboard / Mouse Combo
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Network Products
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Flash Drives & Hub
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Power Supply
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Mouse
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Mouse Pads
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Speakers
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Headphones & Mic
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Projectors
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Webcames
                            </a>
                          </Link>
                        </li> */}
                      </ul>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "15px",
                            paddingBottom: "8px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Storage
                        </a>
                      </Link>
                      <ul
                        className="tt-megamenu-submenu"
                        style={{
                          marginLeft: "31%",
                          height: "500px",
                          marginTop: "-90%",
                        }}
                      >
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              External Hard Drives
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Internal Hard Drives
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Flash Drives
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              OTG Drives
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Storage for Mac
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "15px",
                            paddingBottom: "8px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Computer Components
                        </a>
                      </Link>
                      <ul
                        className="tt-megamenu-submenu"
                        style={{
                          marginLeft: "31%",
                          height: "500px",
                          marginTop: "-110%",
                        }}
                      >
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Graphic Cards
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Desktop Casings
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Motherboards
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Fans & Heatsinks
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Processors
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "15px",
                            paddingBottom: "8px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Portable Speakers
                        </a>
                      </Link>
                      <ul
                        className="tt-megamenu-submenu"
                        style={{
                          marginLeft: "31%",
                          height: "500px",
                          marginTop: "-130%",
                        }}
                      >
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Portable Speakers
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            {/* /////////////////HEALTH & BEAUTY////////////////////// */}
            <li className="tt-submenu">
              <Link href="/product/category/women">
                <a>
                  <Accessories />
                  <span>Health & Beauty</span>
                </a>
              </Link>
              <div
                className="dropdown-menu size-md "
                style={{ width: "250px", height: "100%" }}
              >
                <div className="dropdown-menu-wrapper p-0">
                  <ul className="tt-megamenu-submenu">
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "15px",
                            paddingBottom: "8px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Bath & Body
                        </a>
                      </Link>
                      <ul
                        className="tt-megamenu-submenu"
                        style={{
                          marginLeft: "121%",
                          height: "500px",
                        }}
                      >
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Body & Massage Oils
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Body Soaps & Shower Gels
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Foot Care
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Hair Removal
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Hand Care
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Body Moisturizers
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Breast Care
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Talcum Powder
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Bath & Body Accessories
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "15px",
                            paddingBottom: "8px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Fragrances
                        </a>
                      </Link>
                      <ul
                        className="tt-megamenu-submenu"
                        style={{
                          marginLeft: "121%",
                          height: "500px",
                          marginTop: "-35%",
                        }}
                      >
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Women Fragrances
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Men Fragrances
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Unisex
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "15px",
                            paddingBottom: "8px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Hair Care
                        </a>
                      </Link>
                      <ul
                        className="tt-megamenu-submenu"
                        style={{
                          marginLeft: "121%",
                          height: "500px",
                          marginTop: "-80%",
                        }}
                      >
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Shampoo
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Hair Treatments
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Hair Accessories
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Hair Care Accessories
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Hair Brushes & Combs
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Hair Coloring
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Hair Conditioner
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Hair Styling
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Wig & Hair Extensions & Pads
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "15px",
                            paddingBottom: "8px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Makeup
                        </a>
                      </Link>
                      <ul
                        className="tt-megamenu-submenu"
                        style={{
                          marginLeft: "121%",
                          height: "500px",
                          marginTop: "-110%",
                        }}
                      >
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Foundation
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Lips
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Eyes
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Nails
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Brushes & Sets
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Makeup Accessories
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Makeup Removers
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Body
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Makeup Palettes & Sets
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "15px",
                            paddingBottom: "8px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Men's Care
                        </a>
                      </Link>
                      <ul
                        className="tt-megamenu-submenu"
                        style={{
                          marginLeft: "121%",
                          height: "500px",
                          marginTop: "-145%",
                        }}
                      >
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Bath & Body
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Hair Care
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Hair Dryers
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Shaving & Grooming
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Sports Nutrition
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "15px",
                            paddingBottom: "8px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Skin Care
                        </a>
                      </Link>
                      <ul
                        className="tt-megamenu-submenu"
                        style={{
                          marginLeft: "121%",
                          height: "500px",
                          marginTop: "-180%",
                        }}
                      >
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Serum & Essence
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Dermacare
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Face Scrubs & Exfoliators
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Facial Cleansers
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Sunscreen & Aftersun
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Eye Care
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Face Mask & Packs
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Moisturizers and Cream
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Toner & Mists
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            {/* ////////////////WOMENS FASHION//////////////////////////// */}
            <li className="tt-submenu">
              <Link href="/product/category/women">
                <a>
                  <Accessories />
                  <span>Women's Fashion</span>
                </a>
              </Link>
              <div
                className="dropdown-menu size-md "
                style={{ width: "250px", height: "100%" }}
              >
                <div className="dropdown-menu-wrapper p-0">
                  <ul className="tt-megamenu-submenu">
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "15px",
                            paddingBottom: "8px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Unstitched Fabric
                        </a>
                      </Link>
                      <ul
                        className="tt-megamenu-submenu"
                        style={{
                          marginLeft: "27%",
                          height: "500px",
                        }}
                      >
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Branded Unstitched
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Sarees
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "15px",
                            paddingBottom: "8px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Kurtas & Shalwar Kameez
                        </a>
                      </Link>
                      <ul
                        className="tt-megamenu-submenu"
                        style={{
                          marginLeft: "27%",
                          height: "500px",
                          marginTop: "-23%",
                        }}
                      >
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Kurtis
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Shalwar Kameez
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Branded Pret
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Trousers & Palazzos
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "15px",
                            paddingBottom: "8px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Muslim Wear
                        </a>
                      </Link>
                      <ul
                        className="tt-megamenu-submenu"
                        style={{
                          marginLeft: "27%",
                          height: "500px",
                          marginTop: "-43%",
                        }}
                      >
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Abayas & Hijabs
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Dupattas, Stoles & Shawls
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Scarves
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Hair Accessories
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "15px",
                            paddingBottom: "8px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Tops
                        </a>
                      </Link>
                      <ul
                        className="tt-megamenu-submenu"
                        style={{
                          marginLeft: "27%",
                          height: "500px",
                          marginTop: "-63%",
                        }}
                      >
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Blouses & Shirts
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Tunics
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              T-Shirts
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "15px",
                            paddingBottom: "8px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Pants, Jeans & Leggings
                        </a>
                      </Link>
                      <ul
                        className="tt-megamenu-submenu"
                        style={{
                          marginLeft: "27%",
                          height: "500px",
                          marginTop: "-83%",
                        }}
                      >
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Pants
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Leggings
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Jeans
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Shorts
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Jeggings
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "15px",
                            paddingBottom: "8px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Winter Clothing
                        </a>
                      </Link>
                      <ul
                        className="tt-megamenu-submenu"
                        style={{
                          marginLeft: "27%",
                          height: "500px",
                          marginTop: "-103%",
                        }}
                      >
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Jackets & Coats
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Hoodies & Sweatshirts
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Sweaters & Cardigans
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Shawls and Poncho's
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Shrugs
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "15px",
                            paddingBottom: "8px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Shoes
                        </a>
                      </Link>
                      <ul
                        className="tt-megamenu-submenu"
                        style={{
                          marginLeft: "27%",
                          height: "500px",
                          marginTop: "-123%",
                        }}
                      >
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Sandals
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Flat Shoes
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Heels
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Khussa & Kohlapuri
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Slides & Flip FLops
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Wedges
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Sneakers
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Boots
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Shoes Accessories
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            {/* /////////////MENS FASHION////////////////// */}
            <li className="tt-submenu">
              <Link href="/product/category/women">
                <a>
                  <Accessories />
                  <span>Men's Fashion</span>
                </a>
              </Link>
              <div
                className="dropdown-menu size-md "
                style={{ width: "250px", height: "100%" }}
              >
                <div className="dropdown-menu-wrapper p-0">
                  <ul className="tt-megamenu-submenu">
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "15px",
                            paddingBottom: "8px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          T-Shirts & Tanks
                        </a>
                      </Link>
                      <ul
                        className="tt-megamenu-submenu"
                        style={{
                          marginLeft: "27%",
                          height: "500px",
                        }}
                      >
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              V Neck
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Round Neck
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Graphic tees
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Top Rated
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "15px",
                            paddingBottom: "8px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Shirts & Polo
                        </a>
                      </Link>
                      <ul
                        className="tt-megamenu-submenu"
                        style={{
                          marginLeft: "27%",
                          height: "500px",
                          marginTop: "-23%",
                        }}
                      >
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Casual Shirts
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Formal Shirts
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Polos
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "15px",
                            paddingBottom: "8px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Pants & Jeans
                        </a>
                      </Link>
                      <ul
                        className="tt-megamenu-submenu"
                        style={{
                          marginLeft: "27%",
                          height: "500px",
                          marginTop: "-43%",
                        }}
                      >
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Chinos
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Cargo
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Jeans
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "15px",
                            paddingBottom: "8px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Shorts, Joggers & Sweats
                        </a>
                      </Link>
                      <ul
                        className="tt-megamenu-submenu"
                        style={{
                          marginLeft: "27%",
                          height: "500px",
                          marginTop: "-63%",
                        }}
                      >
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Shorts
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Joggers & Sweats
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "15px",
                            paddingBottom: "8px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Kurtas & Shalwar Kameez
                        </a>
                      </Link>
                      <ul
                        className="tt-megamenu-submenu"
                        style={{
                          marginLeft: "27%",
                          height: "500px",
                          marginTop: "-83%",
                        }}
                      >
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Unstitched Fabric
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Kurtas
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Shalwar
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Shawls
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "15px",
                            paddingBottom: "8px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Winter Clothing
                        </a>
                      </Link>
                      <ul
                        className="tt-megamenu-submenu"
                        style={{
                          marginLeft: "27%",
                          height: "500px",
                          marginTop: "-103%",
                        }}
                      >
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Jackets & Coats
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Hoodies & Sweatshirts
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Sweaters & Cardigans
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "15px",
                            paddingBottom: "8px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Inner Wear
                        </a>
                      </Link>
                      <ul
                        className="tt-megamenu-submenu"
                        style={{
                          marginLeft: "27%",
                          height: "500px",
                          marginTop: "-123%",
                        }}
                      >
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Briefs
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Trunk & Boxers
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Nightwear
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Vests
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Thermal
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Socks
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "15px",
                            paddingBottom: "8px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Shoes
                        </a>
                      </Link>
                      <ul
                        className="tt-megamenu-submenu"
                        style={{
                          marginLeft: "27%",
                          height: "500px",
                          marginTop: "-143%",
                        }}
                      >
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Slip-Ons & Loafers
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Flip Flops & Sandals
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Sneakers
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Formal Shoes
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Boots
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Khusa & Kolapuri
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Shoes Accessories
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "15px",
                            paddingBottom: "8px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Men's Accessories
                        </a>
                      </Link>
                      <ul
                        className="tt-megamenu-submenu"
                        style={{
                          marginLeft: "27%",
                          height: "500px",
                          marginTop: "-163%",
                        }}
                      >
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Belts
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Sunglasses
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Ties & Bow Ties
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Hats & Caps
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            {/* /////////////////TV & Home Appliances//////////////////////////// */}
            <li className="tt-submenu">
              <Link href="/product/category/women">
                <a>
                  <Accessories />
                  <span>TV & Home Appliances</span>
                </a>
              </Link>
              <div
                className="dropdown-menu size-md "
                style={{ width: "250px", height: "100%" }}
              >
                <div className="dropdown-menu-wrapper p-0">
                  <ul className="tt-megamenu-submenu">
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "15px",
                            paddingBottom: "8px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          LED Televisions
                        </a>
                      </Link>
                      <ul
                        className="tt-megamenu-submenu"
                        style={{
                          marginLeft: "29%",
                          height: "500px",
                        }}
                      >
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              LED Televisions
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "15px",
                            paddingBottom: "8px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Smart Televisions
                        </a>
                      </Link>
                      <ul
                        className="tt-megamenu-submenu"
                        style={{
                          marginLeft: "29%",
                          height: "500px",
                          marginTop: "-25%",
                        }}
                      >
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              OLED Televisions
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Laser Televisions
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              4K Televisions
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              ULED Televisions
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "15px",
                            paddingBottom: "8px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Home Audio
                        </a>
                      </Link>
                      <ul
                        className="tt-megamenu-submenu"
                        style={{
                          marginLeft: "29%",
                          height: "500px",
                          marginTop: "-40%",
                        }}
                      >
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Home Entertainment
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Portable Players
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Live Sound & Stage Equipment
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Home Theater Systems
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "15px",
                            paddingBottom: "8px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          TV Accessories
                        </a>
                      </Link>
                      <ul
                        className="tt-megamenu-submenu"
                        style={{
                          marginLeft: "29%",
                          height: "500px",
                          marginTop: "-63%",
                        }}
                      >
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              TV Receivers
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Wall Mounts & Protectors
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "15px",
                            paddingBottom: "8px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          TV Adapters
                        </a>
                      </Link>
                      <ul
                        className="tt-megamenu-submenu"
                        style={{
                          marginLeft: "29%",
                          height: "500px",
                          marginTop: "-85%",
                        }}
                      >
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              TV Remote Controllers
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              3D Glasses
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Antennas
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Cables
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "15px",
                            paddingBottom: "8px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Home Audio & Theater
                        </a>
                      </Link>
                      <ul
                        className="tt-megamenu-submenu"
                        style={{
                          marginLeft: "29%",
                          height: "500px",
                          marginTop: "-105%",
                        }}
                      >
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Bookshelf Speakers
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Center-Channel Speakers
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Floorstanding Speakers
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Satellite Speakers
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Soundbar Speakers
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Subwoofers
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "15px",
                            paddingBottom: "8px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Kitchen Appliances
                        </a>
                      </Link>
                      <ul
                        className="tt-megamenu-submenu"
                        style={{
                          marginLeft: "29%",
                          height: "500px",
                          marginTop: "-129%",
                        }}
                      >
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Refrigerators
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Microwave
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Oven
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Freezer
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Cooktop & Range
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Water Generators
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Water Dispensers
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Dishwashers
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "15px",
                            paddingBottom: "8px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Small Kitchen Appliances
                        </a>
                      </Link>
                      <ul
                        className="tt-megamenu-submenu"
                        style={{
                          marginLeft: "29%",
                          height: "500px",
                          marginTop: "-149%",
                        }}
                      >
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Rice Cooker
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Blender, Mixer & Grinder
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Electric Kettle
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Juicer & Fruit Extraction
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Fryer
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Water Purifier
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Pressure Cookers
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Specialty Cookware
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "15px",
                            paddingBottom: "8px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Cooling & Heating
                        </a>
                      </Link>
                      <ul
                        className="tt-megamenu-submenu"
                        style={{
                          marginLeft: "29%",
                          height: "500px",
                          marginTop: "-169%",
                        }}
                      >
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Fan
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Air Conditioner
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Air Cooler
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Air Purifier
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Dehumidifier
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Humidifier
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Air Purifier
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "15px",
                            paddingBottom: "8px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Irons & Garment Care
                        </a>
                      </Link>
                      <ul
                        className="tt-megamenu-submenu"
                        style={{
                          marginLeft: "29%",
                          height: "500px",
                          marginTop: "-189%",
                        }}
                      >
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Irons
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Garment Steamer
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Sewing Machine
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    {/* <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "15px",
                            paddingBottom: "8px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Vacuums & Floor Care
                        </a>
                      </Link>
                      <ul
                        className="tt-megamenu-submenu"
                        style={{
                          marginLeft: "29%",
                          height: "500px",
                          marginTop: "-213%",
                        }}
                      >
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Vacuum Cleaner
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Floor Polisher
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Steam Mops
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Electric Brooms
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "15px",
                            paddingBottom: "8px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Washers & Dryers
                        </a>
                      </Link>
                      <ul
                        className="tt-megamenu-submenu"
                        style={{
                          marginLeft: "29%",
                          height: "500px",
                          marginTop: "-233%",
                        }}
                      >
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Washing Machine
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Twin Tub Washer & Dryers
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Washers & Dryers
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li> */}
                  </ul>
                </div>
              </div>
            </li>

            {/* ///////////////Sports & Outdoor//////////// */}
            <li className="tt-submenu">
              <Link href="/product/category/women">
                <a>
                  <Accessories />
                  <span>Sports & Outdoor</span>
                </a>
              </Link>
              <div
                className="dropdown-menu size-md "
                style={{ width: "250px", height: "100%" }}
              >
                <div className="dropdown-menu-wrapper p-0">
                  <ul className="tt-megamenu-submenu">
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "15px",
                            paddingBottom: "8px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Supplements
                        </a>
                      </Link>
                      <ul
                        className="tt-megamenu-submenu"
                        style={{
                          marginLeft: "114%",
                          height: "500px",
                        }}
                      >
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Proteins
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Post Workouts and recovery
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Pre Workouts
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Fat Burners
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "15px",
                            paddingBottom: "8px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Team Sports
                        </a>
                      </Link>
                      <ul
                        className="tt-megamenu-submenu"
                        style={{
                          marginLeft: "114%",
                          height: "500px",
                          marginTop: "-40%",
                        }}
                      >
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Cricket
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Football
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Hockey
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Basket Ball
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Volley balls
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Baseballs
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            {/* //////////////Watches, Bags & Jewellery////////////////////////// */}
            <li className="tt-submenu">
              <Link href="/product/category/women">
                <a>
                  <Accessories />
                  <span>Watches,Bags & Jewellery</span>
                </a>
              </Link>
              <div
                className="dropdown-menu size-md "
                style={{ width: "250px", height: "100%" }}
              >
                <div className="dropdown-menu-wrapper p-0">
                  <ul className="tt-megamenu-submenu">
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "15px",
                            paddingBottom: "8px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Men's Watches
                        </a>
                      </Link>
                      <ul
                        className="tt-megamenu-submenu"
                        style={{
                          marginLeft: "43%",
                          height: "500px",
                        }}
                      >
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Chronograph
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Branded Watches
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Analog
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Digital
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Accessories
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Smart Watches
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "15px",
                            paddingBottom: "8px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Women's Watches
                        </a>
                      </Link>
                      <ul
                        className="tt-megamenu-submenu"
                        style={{
                          marginLeft: "43%",
                          height: "500px",
                          marginTop: "-31%",
                        }}
                      >
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Chronograph
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Branded Watches
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Analog
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Digital
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Accessories
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Smart Watches
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "15px",
                            paddingBottom: "8px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Womens Bags
                        </a>
                      </Link>
                      <ul
                        className="tt-megamenu-submenu"
                        style={{
                          marginLeft: "43%",
                          height: "500px",
                          marginTop: "-51%",
                        }}
                      >
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Cross Body & Shoulder Bags
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Top-Handle Bags
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Tote Bags
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Backpacks
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Clutches
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Wallets & Accessories
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Wristlets
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "15px",
                            paddingBottom: "8px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Mens Bags
                        </a>
                      </Link>
                      <ul
                        className="tt-megamenu-submenu"
                        style={{
                          marginLeft: "43%",
                          height: "500px",
                          marginTop: "-71%",
                        }}
                      >
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Wallets & Cardholders
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Backpacks
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Backpacks
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Crossbody Bags
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Business Bags
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Messenger Bags
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Cardholders & Keychains
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "15px",
                            paddingBottom: "8px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Sunglasses & Eyewear
                        </a>
                      </Link>
                      <ul
                        className="tt-megamenu-submenu"
                        style={{
                          marginLeft: "43%",
                          height: "500px",
                          marginTop: "-91%",
                        }}
                      >
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Men Sunglasses
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Women Eyeglasses
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Women Sunglasses
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Men Eyeglasses
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Lenses
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            {/* //////////////Automative//////////////// */}
            <li className="tt-submenu">
              <Link href="/product/category/women">
                <a>
                  <Accessories />
                  <span>Automotive</span>
                </a>
              </Link>
              <div
                className="dropdown-menu size-md "
                style={{ width: "250px", height: "100%" }}
              >
                <div className="dropdown-menu-wrapper p-0">
                  <ul className="tt-megamenu-submenu">
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "15px",
                            paddingBottom: "8px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Car Accessories
                        </a>
                      </Link>
                      <ul
                        className="tt-megamenu-submenu"
                        style={{
                          marginLeft: "48%",
                          height: "500px",
                        }}
                      >
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Car Accessories
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Car Electronics
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Modification Accessories
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Audio & Video Accessories
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Security Gadgets
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Exterior Accessories
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              LED & Lightening
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Interior Accessories
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "15px",
                            paddingBottom: "8px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Car Parts & Spares
                        </a>
                      </Link>
                      <ul
                        className="tt-megamenu-submenu"
                        style={{
                          marginLeft: "48%",
                          height: "500px",
                          marginTop: "-23%",
                        }}
                      >
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Car Oils & Fluids
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Car Tires & Wheels
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Car Tools & Equipment
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Car Parts & Spares
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "15px",
                            paddingBottom: "8px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Car Care
                        </a>
                      </Link>
                      <ul
                        className="tt-megamenu-submenu"
                        style={{
                          marginLeft: "48%",
                          height: "500px",
                          marginTop: "-49%",
                        }}
                      >
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Car Care
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Top Covers
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Perfume & Fragrances
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Mats
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Car Care Accessories
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "15px",
                            paddingBottom: "8px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Car Safety & Security
                        </a>
                      </Link>
                      <ul
                        className="tt-megamenu-submenu"
                        style={{
                          marginLeft: "48%",
                          height: "500px",
                          marginTop: "-73%",
                        }}
                      >
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Car Safety & Security
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            {/* ////////////////health-and-care////////////////// */}
            <li className="tt-submenu">
              <Link href="/product/category/women">
                <a>
                  <Accessories />
                  <span>Health & Care</span>
                </a>
              </Link>
              <div
                className="dropdown-menu size-md "
                style={{ width: "250px", height: "100%" }}
              >
                <div className="dropdown-menu-wrapper p-0">
                  <ul className="tt-megamenu-submenu">
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "15px",
                            paddingBottom: "8px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Medical Equipment
                        </a>
                      </Link>
                      <ul
                        className="tt-megamenu-submenu"
                        style={{
                          marginLeft: "54%",
                          height: "500px",
                        }}
                      >
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Heating Pad
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Nebulizer
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Hearing Amplifier
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Air Dehumidifier
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Air Purifier
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Hygrometer
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              ECG Monitor
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "15px",
                            paddingBottom: "8px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Medical Accessories
                        </a>
                      </Link>
                      <ul
                        className="tt-megamenu-submenu"
                        style={{
                          marginLeft: "54%",
                          height: "500px",
                          marginTop: "-24%",
                        }}
                      >
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Thermometer
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Pillow
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Blanket
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Test Strips
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Pulse Oximeter
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Weighing Scale
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Adult Diapers & Pads
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "15px",
                            paddingBottom: "8px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Drugs
                        </a>
                      </Link>
                      <ul
                        className="tt-megamenu-submenu"
                        style={{
                          marginLeft: "54%",
                          height: "500px",
                          marginTop: "-55%",
                        }}
                      >
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Blood Pressure
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Body Temperature
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Blood Glucose
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Sleep & Rest
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Hemoglobin
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

CategoriesMenu.defaultProps = {
  initialVisibility: false,
};

CategoriesMenu.propTypes = {
  initialVisibility: PropTypes.bool,
};

export default CategoriesMenu;
