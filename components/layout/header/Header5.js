import Link from "next/link";
import MobileMenu from "../MobileMenu";
import SearchPopup from "../SearchPopup";

export default function Header5({
  scroll,
  isMobileMenu,
  handleMobileMenu,
  isSearch,
  handleSearch,
  isOffcanvus,
  handleOffcanvus,
}) {
  return (
    <>
      <header className="transparent-header">
        <div className="heder-top-wrap">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div className="header-top-left">
                  <ul className="list-wrap">
                    <li>
                      <i className="flaticon-location" />
                      Martin Disteli-Strasse 9 CH-4600 Olten. Switzerland
                    </li>
                    <li>
                      <i className="flaticon-mail" />
                      <Link href="mailto:gerow@gmail.com">
                        support@dynaskills-dynajobs.com
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="header-top-right">
                  <div className="header-contact">
                    <Link href="tel:0123456789">
                      <i className="flaticon-phone-call" />
                      +41 079 240 39 01
                    </Link>
                  </div>
                  <div className="header-social">
                    <ul className="list-wrap">
                      <li>
                        <Link
                          href="https://www.facebook.com/profile.php?id=100083337041229"
                          target="_blank"
                        >
                          <i className="fab fa-facebook-f" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://twitter.com/TinoSenoner"
                          target="_blank"
                        >
                          <i className="fab fa-twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://www.youtube.com/channel/UC0Ltsu_2FrfUneg0jk8ol2Q"
                          target="_blank"
                        >
                          <i className="fab fa-youtube" />
                        </Link>
                      </li>
                      <li>
                        <Link href="https://www.linkedin.com/company/dynaskills-llc/">
                          <i className="fab fa-linkedin" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="sticky-header"
          className={`menu-area ${scroll ? "sticky-menu" : ""}`}
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                  <i className="fas fa-bars" />
                </div>
                <div className="menu-wrap">
                  <nav className="menu-nav ">
                    <div className="logo">
                      <Link href="/">
                        <img src="/assets/img/logo/logo.png" alt="Logo" />
                      </Link>
                    </div>
                    <div className="navbar-wrap main-menu d-none d-lg-flex">
                      <ul className="navigation">
                        <li className="active ">
                          <Link href="#">Home</Link>
                          {/* <ul className="sub-menu">
                            <li>
                              <Link href="/">Finance</Link>
                            </li>
                            <li>
                              <Link href="/index-2">Consulting</Link>
                            </li>
                            <li>
                              <Link href="/index-3">Insurance</Link>
                            </li>
                            <li>
                              <Link href="/index-4">Digital Agency</Link>
                            </li>
                            <li>
                              <Link href="/index-5">Business</Link>
                            </li>
                          </ul> */}
                        </li>
                        <li>
                          <Link href="#">About Us</Link>
                          <ul className="sub-menu">
                            <li>
                              <Link href="/about">About One</Link>
                            </li>
                            <li>
                              <Link href="/about-2">About Two</Link>
                            </li>
                            <li>
                              <Link href="/about-3">About Three</Link>
                            </li>
                            <li>
                              <Link href="/about-4">About Four</Link>
                            </li>
                            <li>
                              <Link href="/about-5">About Five</Link>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <Link href="#">Our Services</Link>
                          <ul className="sub-menu">
                            <li className="menu-item-has-children">
                              <Link href="/services">Our Analysis</Link>
                              <ul className="sub-menu">
                                <li>
                                  <Link href="/services">Services One</Link>
                                </li>
                                <li>
                                  <Link href="/services-2">Services Two</Link>
                                </li>
                                <li>
                                  <Link href="/services-3">Services Three</Link>
                                </li>
                                <li>
                                  <Link href="/services-4">Services Four</Link>
                                </li>
                                <li>
                                  <Link href="/services-5">Services Five</Link>
                                </li>
                              </ul>
                            </li>
                            <li className="menu-item-has-children">
                              <Link href="/services-details">Our Products</Link>
                              <ul className="sub-menu">
                                <li>
                                  <Link href="/services-details">
                                    Dynaskills Platform
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/services-details-2">
                                    Dynaskills Trainings
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/services-details-3">
                                    Services Details Three
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/services-details-4">
                                    Services Details Four
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/services-details-5">
                                    Services Details Five
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <Link href="/project-details">
                                Portfolio Details
                              </Link>
                            </li>
                            <li>
                              <Link href="/team-details">Team Details</Link>
                            </li>
                            <li>
                              <Link href="/404">404 Error</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link href="#">FAQs</Link>
                          <ul className="sub-menu">
                            <li>
                              <Link href="/blog">Our Blog</Link>
                            </li>
                            <li>
                              <Link href="/blog-details">Blog Details</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link href="/contact">contacts</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="header-action d-none d-md-block">
                      <ul className="list-wrap">
                        <li className="header-search" onClick={handleSearch}>
                          <Link href="#">
                            <i className="flaticon-search" />
                          </Link>
                        </li>
                        <li className="header-btn">
                          <Link href="/contact" className="btn btn-two">
                            Register
                          </Link>
                        </li>
                        <li className="header-btn">
                          <Link
                            href="https://n1.dynaskills.com/auth/logint"
                            target="_target"
                            className="btn-sign-in transparent-btn-two"
                          >
                            Login
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
                {/* Mobile Menu  */}
                <div className="mobile-menu">
                  <nav className="menu-box">
                    <div className="close-btn" onClick={handleMobileMenu}>
                      <i className="fas fa-times" />
                    </div>
                    <div className="nav-logo">
                      <Link href="/">
                        <img src="/assets/img/logo/logo.png" alt="Logo" />
                      </Link>
                    </div>
                    <div className="mobile-search">
                      <form action="#">
                        <input type="text" placeholder="Search here..." />
                        <button>
                          <i className="flaticon-search" />
                        </button>
                      </form>
                    </div>
                    <div className="menu-outer">
                      <MobileMenu />
                    </div>
                    <div className="social-links">
                      <ul className="clearfix list-wrap">
                        <li>
                          <Link href="#">
                            <i className="fab fa-facebook-f" />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="fab fa-twitter" />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="fab fa-instagram" />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="fab fa-linkedin-in" />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="fab fa-youtube" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
                <div className="menu-backdrop" onClick={handleMobileMenu} />
              </div>
            </div>
          </div>
        </div>
        <SearchPopup isSearch={isSearch} handleSearch={handleSearch} />
      </header>
    </>
  );
}
