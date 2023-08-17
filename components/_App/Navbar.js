import React from "react";
import Link from "../../utils/ActiveLink";
import TopHeader from "./TopHeader";

const Navbar = () => {
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
    let element = document.querySelector('.top-header-area.header-area.fixed-top');
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        element.classList.add("is-sticky");
      } else {
        element.classList.remove("is-sticky");
      }
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
      <header>
        {/* TopHeader */}
        <TopHeader />

        <div id="navbar" className="navbar-area">
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
                      <Link href="/sign-in" activeClassName="active">
                        <a onClick={toggleNavbar} className="nav-link">
                          Sign In
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
                       The conflict in the code occurs when merging the changes from the `Omnia` branch into the current branch. The conflict arises because both branches have made changes to the same lines of code.

To resolve the conflict, you need to manually edit the code and choose which changes to keep. Here's an example of how you can resolve the conflict:

```javascript
import React from 'react';
import Link from 'next/link';
import TopHeader from './TopHeader';

const Navbar = () => {
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
    let element = document.querySelector('.top-header-area.header-area.fixed-top');
    document.addEventListener('scroll', () => {
      if (window.scrollY > 170) {
        element.classList.add('is-sticky');
      } else {
        element.classList.remove('is-sticky');
      }
    });
  }, []);

  const classOne = menu ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
  const classTwo = menu ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

  return (
    <>
      <header>
        {/* TopHeader */}
        <TopHeader />

        <div id="navbar" className="navbar-area">
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
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>

                <div className={classOne} id="navbarSupportedContent">
                  <ul className="navbar-nav m-auto">
                    <li className="nav-item">
                      <Link href="#" activeClassName="active">
                        <a onClick={(e) => e.preventDefault()} className="nav-link">
                          Home
                        </a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/sign-in" activeClassName="active">
                        <a onClick={toggleNavbar} className="nav-link">
                          Sign In
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="#">
                        <a onClick={(e) => e.preventDefault()} className="nav-link">
                          Insurance services <i className="bx bx-chevron-down"></i>
                        </a>
                      </Link>

                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link href="/health-insurance" activeClassName="active">
                            <a onClick={toggleNavbar} className="nav-link">
                              Ninja ChatBOT
                            </a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link href="/health-insurance" activeClassName="active">
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
                      <Link href="/contact" activeClassName="active````