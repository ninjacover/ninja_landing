import React from "react";
import Link from "../../utils/ActiveLink";

const NavbarFour = () => {
  const [menu, setMenu] = React.useState(true);
  const [sidebarModal, setSidebar] = React.useState(false);
  const [searchModal, setSearch] = React.useState(false);
  const toggleSidebarModal = () => {
    setSidebar(!sidebarModal);
  };
  const toggleSearchModal = () => {
    setSearch(!searchModal);
  };
  const toggleNavbar = () => {
    setMenu(!menu);
  };
  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      // if (window.scrollY > 170) {
      //   elementId.classList.add("is-sticky");
      // } else {
      //   elementId.classList.remove("is-sticky");
      // }
    });
  });
  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";
  return (
    <>
      <div id="navbar" className="nav-area nav-style-four fixed-top">
        <div className="navbar-area">
          <div className="main-nav">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container">
                <Link href="/">
                  <a onClick={toggleNavbar} className="navbar-brand">
                    <img src="/images/logo.png" alt="logo" />
                  </a>
                </Link>

                <button
                  onClick={toggleNavbar}
                  className={classTwo}
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="icon-bar top-bar"></span>
                  <span className="icon-bar middle-bar"></span>
                  <span className="icon-bar bottom-bar"></span>
                </button>

                <div className={classOne} id="navbarSupportedContent">
                  <ul className="navbar-nav m-auto">
                    <li className="nav-item">
                      <Link href="#" activeClassName="active">
                        <a
                          onClick={(e) => e.preventDefault()}
                          className="nav-link"
                        >
                          Home
                        </a>
                      </Link>
                    </li>


                    <li className="nav-item">
                      <Link href="#">
                        <a
                          onClick={(e) => e.preventDefault()}
                          className="nav-link"
                        >
                          Insurance services{" "}
                          <i className="bx bx-chevron-down"></i>
                        </a>
                      </Link>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link
                            href="/health-insurance"
                            activeClassName="active"
                          >
                            <a onClick={toggleNavbar} className="nav-link">
                              Ninja ChatBOT
                            </a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            href="/health-insurance"
                            activeClassName="active"
                          >
                            <a onClick={toggleNavbar} className="nav-link">
                              Individual Health Insurance
                            </a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link href="/car-insurance" activeClassName="active">
                            <a onClick={toggleNavbar} className="nav-link">
                              SME Insurance
                            </a>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/car-insurance" activeClassName="active">
                            <a onClick={toggleNavbar} className="nav-link">
                              Property Insurance
                            </a>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/car-insurance" activeClassName="active">
                            <a onClick={toggleNavbar} className="nav-link">
                              Motor Insurance
                            </a>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/car-insurance" activeClassName="active">
                            <a onClick={toggleNavbar} className="nav-link">
                              Brokers to Brokers service
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <a href="/blog-grid">Blogs</a>
                    </li>

                    <li className="nav-item">
                      <Link href="/contact" activeClassName="active">
                        <a onClick={toggleNavbar} className="nav-link">
                          Contact
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="others-option">
                  <div className="option-item">
                    <i
                      className="search-btn bx bx-search"
                      onClick={(e) => {
                        e.preventDefault();
                        toggleSearchModal();
                      }}
                    ></i>
                  </div>

                  <div className="sidebar-menu">
                    <Link href="#">
                      <a
                        onClick={(e) => {
                          e.preventDefault();
                          toggleSidebarModal();
                        }}
                      >
                        <i className="bx bx-grid-alt"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Search Overlay */}
      <div
        className={`search-overlay ${
          searchModal ? "search-overlay-active" : null
        }`}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="search-overlay-layer"></div>
            <div className="search-overlay-layer"></div>
            <div className="search-overlay-layer"></div>

            <div
              className="search-overlay-close"
              onClick={(e) => {
                e.preventDefault();
                toggleSearchModal();
              }}
            >
              <span className="search-overlay-close-line"></span>
              <span className="search-overlay-close-line"></span>
            </div>

            <div className="search-overlay-form">
              <form>
                <input
                  type="text"
                  className="input-search"
                  placeholder="Search here..."
                />
                <button type="submit">
                  <i className="bx bx-search"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar Modal */}
      <div className={`sidebar-modal ${sidebarModal ? "active" : null}`}>
        <div className="modal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h2 className="modal-title">
                  <Link href="/">
                    <a>
                      <img src="/images/logo2.png" alt="Logo" />
                    </a>
                  </Link>
                </h2>

                <button
                  type="button"
                  className="close"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleSidebarModal();
                  }}
                >
                  <span aria-hidden="true">
                    <i className="bx bx-x"></i>
                  </span>
                </button>
              </div>

              <div className="modal-body">
                <div className="sidebar-modal-widget">
                  <h3 className="title">About Us</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Commodi, asperiores doloribus eum laboriosam praesentium
                    delectus unde magni aut perspiciatis cumque deserunt dolore
                    voluptate, autem pariatur.
                  </p>
                </div>

                <div className="sidebar-modal-widget">
                  <h3 className="title">Additional Links</h3>

                  <ul>
                    <li>
                      <Link href="/sign-up">
                        <a>Sign Up</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/log-in">
                        <a>Log In</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/faq">
                        <a>FAQ</a>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="sidebar-modal-widget">
                  <h3 className="title">Contact Info</h3>

                  <ul className="contact-info">
                    <li>
                      <i className="bx bx-location-plus"></i>
                      Address
                      <span>123, Western Road, Melbourne Australia</span>
                    </li>
                    <li>
                      <i className="bx bx-envelope"></i>
                      Email
                      <a href="mailto:hello@flexa.com">hello@flexa.com</a>
                    </li>
                    <li>
                      <i className="bx bxs-phone-call"></i>
                      Phone
                      <a href="tel:+822456974">+822456974</a>
                    </li>
                  </ul>
                </div>

                <div className="sidebar-modal-widget">
                  <h3 className="title">Connect With Us</h3>

                  <ul className="social-list">
                    <li>
                      <a href="https://twitter.com/" target="_blank">
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/" target="_blank">
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/" target="_blank">
                        <i className="bx bxl-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/" target="_blank">
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/" target="_blank">
                        <i className="bx bxl-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarFour;
