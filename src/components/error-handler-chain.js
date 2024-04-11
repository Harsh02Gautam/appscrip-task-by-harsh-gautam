import { useCallback } from "react";
import ProductCard1 from "./product-card1";
import ProductCard from "./product-card";
import { useNavigate } from "react-router-dom";
import "./error-handler-chain.css";

const ErrorHandlerChain = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="error-handler-chain">
      <input className="checkbox9" type="checkbox" />
      <b className="customizble">Customizble</b>
      <div className="seperator" />
      <div className="name3">
        <b className="ideal-for">IDEAL FOR</b>
        <div className="vuesaxlineararrow-left-wrapper">
          <img
            className="vuesaxlineararrow-left-icon10"
            alt=""
            src="/vuesaxlineararrowleft-5@2x.png"
          />
        </div>
      </div>
      <div className="all3">All</div>
      <div className="unselect-all3">Unselect all</div>
      <input className="checkbox10" type="checkbox" />
      <div className="men">Men</div>
      <input className="checkbox11" type="checkbox" />
      <div className="women">Women</div>
      <input className="checkbox12" type="checkbox" />
      <div className="baby-kids">{`Baby & Kids`}</div>
      <div className="seperator1" />
      <div className="filter-2">
        <div className="title3">
          <div className="name4">
            <b className="occasion">occasion</b>
            <img
              className="vuesaxlineararrow-left-icon11"
              alt=""
              src="/vuesaxlineararrowleft@2x.png"
            />
          </div>
          <div className="all4">All</div>
        </div>
        <div className="values3">
          <div className="unselect-all4">Unselect All</div>
          <div className="value-13">
            <div className="checkbox13" />
            <div className="rainy-season-1">Rainy Season (1)</div>
          </div>
          <div className="value-23">
            <div className="checkbox14" />
            <div className="casual-3">Casual (3)</div>
          </div>
          <div className="value-32">
            <div className="checkbox15" />
            <div className="wedding-1">Wedding (1)</div>
          </div>
          <div className="value-41">
            <div className="checkbox16" />
            <div className="party-10">Party (10)</div>
          </div>
          <div className="value-5">
            <div className="checkbox17" />
            <div className="regular-2">Regular (2)</div>
          </div>
        </div>
      </div>
      <div className="seperator2" />
      <div className="filter-3">
        <div className="title4">
          <div className="name5">
            <b className="work">work</b>
            <img
              className="vuesaxlineararrow-left-icon12"
              alt=""
              src="/vuesaxlineararrowleft@2x.png"
            />
          </div>
          <div className="all5">All</div>
        </div>
        <div className="values4">
          <div className="unselect-all5">Unselect All</div>
          <div className="value-14">
            <div className="checkbox18" />
            <div className="french-knot-2">French Knot (2)</div>
          </div>
          <div className="value-24">
            <div className="checkbox19" />
            <div className="zardosi-2">Zardosi (2)</div>
          </div>
          <div className="value-33">
            <div className="checkbox20" />
            <div className="fancy-1">Fancy (1)</div>
          </div>
          <div className="value-42">
            <div className="checkbox21" />
            <div className="embroidery-1">Embroidery (1)</div>
          </div>
        </div>
      </div>
      <b className="product-name">Product Name</b>
      <div className="sign-in-or-container2">
        <span className="sign-in2">Sign in</span> or Create an account to see
        pricing
      </div>
      <img
        className="vuesaxlinearheart-icon3"
        alt=""
        src="/vuesaxlinearheart-1.svg"
      />
      <ProductCard1 />
      <ProductCard />
      <div className="frame-container">
        <div className="vuesaxlineararrow-left-parent">
          <img
            className="vuesaxlineararrow-left-icon13"
            alt=""
            src="/vuesaxlineararrowleft-8.svg"
          />
          <div className="hide-filter">HIDE FILTER</div>
        </div>
        <div className="frame-child5" />
        <div className="line-parent">
          <div className="frame-child6" />
          <div className="frame-child7" />
        </div>
        <div className="frame-parent1">
          <div className="header-container-parent">
            <div className="header-container">
              
              <b className="items1">3425 Items</b>
            </div>
            <div className="child-links-parent">
              <div className="child-links">
                <img
                  className="vuesaxlineararrow-left-icon14"
                  alt=""
                  src="/vuesaxlineararrowleft-8.svg"
                />
              </div>
              <div className="hide-filter1">HIDE FILTER</div>
            </div>
          </div>
          <div className="rectangle-container" onClick={onGroupContainerClick}>
            <div className="frame-child8" />
            <div className="sort">Sort</div>
            <div className="frame-child9" />
            <b className="recommended">RECOMMENDED</b>
            <div className="child-links1">
              <img
                className="vuesaxlineararrow-left-icon15"
                alt=""
                src="/vuesaxlineararrowleft@2x.png"
              />
            </div>
            <div className="newest-first">Newest first</div>
            <div className="price-high">Price : high to low</div>
            <div className="popular">popular</div>
            <div className="price-low">Price : low ot high</div>
          </div>
        </div>
        <div className="filter-group">
          <div className="filter1">Filter</div>
          <div className="frame-child10" />
          <div className="group-div">
            <div className="lorem-parent2">
              <b className="lorem5">Lorem</b>
              <img
                className="vuesaxlineararrow-left-icon16"
                alt=""
                src="/vuesaxlineararrowleft@2x.png"
              />
            </div>
          </div>
          <div className="frame-child11" />
          <div className="lorem-parent3">
            <b className="lorem6">Lorem</b>
            <img
              className="vuesaxlineararrow-left-icon17"
              alt=""
              src="/vuesaxlineararrowleft@2x.png"
            />
          </div>
          <div className="frame-child12" />
          <div className="lorem-parent4">
            <b className="lorem7">Lorem</b>
            <img
              className="vuesaxlineararrow-left-icon18"
              alt=""
              src="/vuesaxlineararrowleft@2x.png"
            />
          </div>
          <div className="frame-child13" />
          <div className="lorem-parent5">
            <b className="lorem8">Lorem</b>
            <img
              className="vuesaxlineararrow-left-icon19"
              alt=""
              src="/vuesaxlineararrowleft@2x.png"
            />
          </div>
          <div className="frame-child14" />
          <div className="lorem-parent6">
            <b className="lorem9">LOREM</b>
            <img
              className="vuesaxlineararrow-left-icon20"
              alt=""
              src="/vuesaxlineararrowleft@2x.png"
            />
          </div>
        </div>
        <div className="line-group">
          <div className="frame-child15" />
          <div className="frame-child16" />
        </div>
      </div>
      <div className="rectangle-parent1">
        <img className="rectangle-icon" alt="" src="/rectangle-29438@2x.png" />
        <div className="rectangle-parent2">
          <div className="frame-child17" />
          <div className="sort1">Sort</div>
          <div className="frame-child18" />
          <div className="shortest-path">
            <div className="nearest-neighbor">
              <img
                className="material-symbolscheck-small-r-icon"
                loading="lazy"
                alt=""
                src="/materialsymbolschecksmallrounded.svg"
              />
            </div>
            <b className="recommended1">recommended</b>
          </div>
          <div className="newest-first1">Newest first</div>
          <div className="popular1">popular</div>
          <div className="price-high1">Price : high to low</div>
          <div className="price-low1">Price : low to high</div>
        </div>
      </div>
    </div>
  );
};

export default ErrorHandlerChain;
