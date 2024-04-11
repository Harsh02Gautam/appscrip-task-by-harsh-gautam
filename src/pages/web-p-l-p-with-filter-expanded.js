import PatternDetector from "../components/pattern-detector";
import ErrorHandlerChain from "../components/error-handler-chain";
import DepthFirstSearch from "../components/depth-first-search";
import Footer from "../components/footer";
import "./web-p-l-p-with-filter-expanded.css";

const WebPLPWithFilterExpanded = () => {
  return (
    <div className="webplpwith-filter-expanded">
      <img
        className="webplpwith-filter-expanded-child"
        alt=""
        src="/rectangle-29437@2x.png"
      />
      <div className="filter-5">
        <div className="title">
          <div className="name">
            <div className="jacket-material">jacket material</div>
            <img
              className="vuesaxlineararrow-left-icon"
              alt=""
              src="/vuesaxlineararrowleft@2x.png"
            />
          </div>
          <div className="all">All</div>
        </div>
        <div className="values">
          <div className="unselect-all">Unselect All</div>
          <div className="value-1">
            <div className="checkbox" />
            <div className="velvet-5">Velvet (5)</div>
          </div>
          <div className="value-2">
            <div className="checkbox1" />
            <div className="cotton-7">Cotton (7)</div>
          </div>
          <div className="value-3">
            <div className="checkbox2" />
            <div className="leather-13">Leather (13)</div>
          </div>
        </div>
      </div>
      <div className="filter-6">
        <div className="title1">
          <div className="name1">
            <div className="sleeve-length">sleeve length</div>
            <img
              className="vuesaxlineararrow-left-icon1"
              alt=""
              src="/vuesaxlineararrowleft@2x.png"
            />
          </div>
          <div className="all1">All</div>
        </div>
        <div className="values1">
          <div className="unselect-all1">Unselect All</div>
          <div className="value-11">
            <div className="checkbox3" />
            <div className="half-sleeve-2">Half Sleeve (2)</div>
          </div>
          <div className="value-21">
            <div className="checkbox4" />
            <div className="cap-sleeve-10">Cap Sleeve (10)</div>
          </div>
        </div>
      </div>
      <div className="filter-9">
        <div className="title2">
          <div className="name2">
            <div className="sleeve">sleeve</div>
            <img
              className="vuesaxlineararrow-left-icon2"
              alt=""
              src="/vuesaxlineararrowleft@2x.png"
            />
          </div>
          <div className="all2">All</div>
        </div>
        <div className="values2">
          <div className="unselect-all2">Unselect All</div>
          <div className="value-12">
            <div className="checkbox5" />
            <div className="roll-up-sleeve-1">Roll-Up Sleeve (1)</div>
          </div>
          <div className="value-22">
            <div className="checkbox6" />
            <div className="regular-sleeves-1">Regular Sleeves (1)</div>
          </div>
          <div className="value-31">
            <div className="checkbox7" />
            <div className="long-sleeve-1">Long Sleeve (1)</div>
          </div>
          <div className="value-4">
            <div className="checkbox8" />
            <div className="full-sleeve-5">Full Sleeve (5)</div>
          </div>
        </div>
      </div>
      <div className="explore-this-skill">Explore this skill</div>
      <div className="grey-strip">
        <div className="tree-branch">
          <img
            className="vuesaxlinearelement-4-icon"
            alt=""
            src="/vuesaxlinearelement4.svg"
          />
          <div className="lorem-ipsum-dolor-wrapper">
            <div className="lorem-ipsum-dolor">Lorem ipsum dolor</div>
          </div>
        </div>
        <div className="tree-branch1">
          <img
            className="vuesaxlinearelement-4-icon1"
            alt=""
            src="/vuesaxlinearelement4.svg"
          />
          <div className="lorem-ipsum-dolor-container">
            <div className="lorem-ipsum-dolor1">Lorem ipsum dolor</div>
          </div>
        </div>
        <div className="tree-branch2">
          <img
            className="vuesaxlinearelement-4-icon2"
            alt=""
            src="/vuesaxlinearelement4.svg"
          />
          <div className="lorem-ipsum-dolor-frame">
            <div className="lorem-ipsum-dolor2">Lorem ipsum dolor</div>
          </div>
        </div>
      </div>
      <PatternDetector vuesaxlineararrowLeft1="/vuesaxlineararrowleft@2x.png" />
      <main className="main-content">
        <section className="content-container">
          <div className="content-area">
            <div className="data-sorter">
              <div className="filter-chain">
                <h1 className="discover-our-products">Discover our products</h1>
              </div>
              <div className="lorem-ipsum-dolor3">
                Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
                scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
                dolor.
              </div>
            </div>
          </div>
          <ErrorHandlerChain />
          <DepthFirstSearch />
        </section>
      </main>
      <div className="webplpwith-filter-expanded-item" />
      <div className="filter-parent">
        <div className="filter">Filter</div>
        <div className="frame-child" />
        <div className="frame-wrapper">
          <div className="lorem-parent">
            <b className="lorem">Lorem</b>
            <img
              className="vuesaxlineararrow-left-icon3"
              alt=""
              src="/vuesaxlineararrowleft@2x.png"
            />
          </div>
        </div>
        <div className="frame-item" />
        <div className="lorem-group">
          <b className="lorem1">Lorem</b>
          <img
            className="vuesaxlineararrow-left-icon4"
            alt=""
            src="/vuesaxlineararrowleft@2x.png"
          />
        </div>
        <div className="frame-inner" />
        <div className="lorem-container">
          <b className="lorem2">Lorem</b>
          <img
            className="vuesaxlineararrow-left-icon5"
            alt=""
            src="/vuesaxlineararrowleft@2x.png"
          />
        </div>
        <div className="line-div" />
        <div className="frame-div">
          <b className="lorem3">Lorem</b>
          <img
            className="vuesaxlineararrow-left-icon6"
            alt=""
            src="/vuesaxlineararrowleft@2x.png"
          />
        </div>
        <div className="frame-child1" />
        <div className="lorem-parent1">
          <b className="lorem4">LOREM</b>
          <img
            className="vuesaxlineararrow-left-icon7"
            alt=""
            src="/vuesaxlineararrowleft@2x.png"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WebPLPWithFilterExpanded;
