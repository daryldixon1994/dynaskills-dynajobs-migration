import Link from "next/link";

export default function Footer1() {
  return (
    <>
      <footer>
        <div
          className="footer-area footer-bg"
          data-background="/assets/img/bg/footer_bg.jpg"
        >
          <div className="container">
            <div className="footer-top">
              <div className="row">
                <div className="col-lg-3 col-md-7">
                  <div className="footer-widget">
                    <h4 className="fw-title">Information</h4>
                    <div className="footer-info">
                      <ul className="list-wrap">
                        <li>
                          <div className="icon">
                            <i className="flaticon-pin" />
                          </div>
                          <div className="content">
                            <p>
                              Martin Disteli-Strasse 9 CH-4600 Olten.
                              Switzerland
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="flaticon-phone-call" />
                          </div>
                          <div className="content">
                            <Link href="tel:0123456789">+41 079 240 39 01</Link>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="flaticon-clock" />
                          </div>
                          <div className="content">
                            <p>
                              Mon – Sat: 8 am – 5 pm, <br /> Sunday:{" "}
                              <span>CLOSED</span>
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-5 col-sm-6">
                  <div className="footer-widget">
                    <h4 className="fw-title">Menu</h4>
                    <div className="footer-link">
                      <ul className="list-wrap">
                        <li>
                          <Link href="/about">About Us</Link>
                        </li>
                        <li>
                          <Link href="/contact">Our Analyses</Link>
                        </li>
                        <li>
                          <Link href="/contact">FAQs</Link>
                        </li>
                        <li>
                          <Link href="/blog">Create an account</Link>
                        </li>
                        <li>
                          <Link href="/contact">Privacy Policy</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-5 col-sm-6">
                  <div className="footer-widget">
                    <h4 className="fw-title">Quick Links</h4>
                    <div className="footer-link">
                      <ul className="list-wrap">
                        <li>
                          <Link href="/contact">How it’s Work</Link>
                        </li>
                        <li>
                          <Link href="/contact">Partners</Link>
                        </li>
                        <li>
                          <Link href="/contact">Testimonials</Link>
                        </li>
                        <li>
                          <Link href="/contact">Case Studies</Link>
                        </li>
                        <li>
                          <Link href="/contact">Pricing</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-7">
                  <div className="footer-widget">
                    <h4 className="fw-title">Subscribe to Our Newsletter</h4>
                    <div className="footer-newsletter">
                      <p>
                        Sign up to Privitar’s weekly newsletter to get the
                        latest updates.
                      </p>
                      <form action="#">
                        <input type="email" placeholder="enter your e-mail" />
                        <button type="submit">Subscribe</button>
                      </form>
                      <span>We don’t send you any spam</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="left-sider">
                    <div className="f-logo">
                      <Link href="/">
                        <img src="/assets/img/logo/logoWhiteFinal.png" alt="" />
                      </Link>
                    </div>
                    <div className="copyright-text">
                      <p>Copyright ©2023 dynaskills.CH | All Right Reserved</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="footer-social">
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
                          href="https://www.linkedin.com/company/dynaskills-llc/"
                          target="_blank"
                        >
                          <i className="fab fa-linkedin" />
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
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
