import CounterUp from "@/components/elements/CounterUp";
import SocialToggle from "@/components/elements/SocialToggle";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";

export default function About3() {
  const [isToggled, setToggled] = useState(false);
  const handleToggle = () => setToggled(!isToggled);
  return (
    <>
      <Layout headerStyle={6} footerStyle={1} breadcrumbTitle="About Us">
        <div>
          <section className="about-area-nine pt-120 pb-120">
            <div className="container">
              <div className="row align-items-start justify-content-center">
                <div className="col-lg-7 col-md-10 order-0 order-lg-2">
                  <div className="about-img-wrap-four">
                    <div className="mask-img-wrap">
                      <img src="/assets/img/images/h3_about_img01.jpg" alt="" />
                    </div>
                    <div className="icon">
                      <i className="flaticon-business-presentation" />
                    </div>
                    <img
                      src="/assets/img/images/h3_about_img02.jpg"
                      alt=""
                      className="img-two"
                    />
                    <div className="about-shape-wrap-three">
                      <img
                        src="/assets/img/images/h3_about_shape01.png"
                        alt=""
                      />
                      <img
                        src="/assets/img/images/h3_about_shape02.png"
                        alt=""
                      />
                      <img
                        src="/assets/img/images/h3_about_shape03.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="about-content-four">
                    <div className="section-title-two mb-30">
                      <span className="sub-title">Get To know US</span>
                      <h2 className="title">WE MAKE THE DREAMS COME TRUE</h2>
                    </div>
                    <p>
                      Dynajobs AG Dynajobs AG in Brugg analyzes the job market
                      with a view to the future: HR analysts have been
                      collecting huge amounts of data since 2004 and evaluating
                      them with the help of artificial intelligence. The systems
                      are managed according to the high European security
                      standards in the field of cyber security and data
                      protection (GDPR)
                    </p>
                    <p>
                      dynaskills GmbH The dynaskills GmbH team offers the
                      following services:- International monitoring of labor
                      markets via evaluations of online job advertisements-
                      Support for companies and states in the implementation of
                      HR digitization.-Platforms for further training for
                      specialists based on further training databases. The
                      customers of dynaskills AG(governments, companies, as well
                      as employee and employer associations) have a workforce or
                      population with a wide variety of qualifications of
                      employees, members or residents. It is important to make
                      better use of these resources by promoting mobility and
                      further training. Dynajobs AG has been making forecasts
                      regarding the development of labor market needs based on
                      its own AI-based evaluations for years. The accuracy of
                      the forecasts and the early detection of trend changes can
                      be checked using historical data. From January 1st, 2023,
                      the new organization dynaskills GmbH in Olten will take
                      over the promotion of the transformation process around
                      the challenges of the transformation process under the
                      label dynaskills®2030.
                    </p>
                    {/* <div className="about-list-three">
                      <ul className="list-wrap">
                        <li>
                          <div className="icon">
                            <i className="flaticon-profit" />
                          </div>
                          <div className="content">
                            <div className="section-title-two mb-30">
                              <span className="sub-title">Our Project</span>
                            </div>

                            <h2 className="title">dynaskills® Trainings</h2>
                            <p>
                              eiusmod temporincididunt ut labore magna aliqua
                              Quisery.
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="flaticon-mission" />
                          </div>
                          <div className="content">
                            <h2 className="title">dynaskills® Trainings</h2>
                            <p>
                              eiusmod temporincididunt ut labore magna aliqua
                              Quisery.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* about-area-end */}
          {/* cta-area */}
          <section className="cta-area-five">
            <div className="container">
              <div
                className="cta-inner-wrap-two"
                data-background="/assets/img/bg/cta_bg02.jpg"
              >
                <div className="row align-items-center">
                  <div className="col-lg-9">
                    <div className="cta-content">
                      <div className="cta-info-wrap">
                        <div className="icon">
                          <i className="flaticon-phone-call" />
                        </div>
                        <div className="content">
                          <span>Call For More Info</span>
                          <Link href="tel:0123456789">+123 8989 444</Link>
                        </div>
                      </div>
                      <h2 className="title">
                        Let’s Request a Schedule For Free Consultation
                      </h2>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="cta-btn text-end">
                      <Link href="/contact" className="btn btn-three">
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* cta-area-end */}
          {/* counter-area */}
          <section className="counter-area-four">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="counter-content-four">
                    <div className="section-title-two mb-30">
                      <span className="sub-title">Top Features</span>
                      <h2 className="title">
                        We assist individuals in increasing their labor market
                        value (employability)
                      </h2>
                    </div>
                    <p>
                      We're constructing the world's most powerful and greatest
                      career booster site to assist you in finding the job you
                      want. We pave the way and empower Job_seekers with the
                      tools and analysis they need in order to stand out and
                      build a Successful career.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="counter-item-wrap-four">
                    <ul className="list-wrap">
                      <li>
                        <div className="counter-item-three">
                          <div className="counter-icon">
                            <i className="flaticon-trophy " />
                          </div>
                          <div className="counter-content">
                            <h2 className="count">
                              {/* <CounterUp count={23} />k */}
                              Upskilling
                            </h2>
                            {/* <p></p> */}
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="counter-item-three">
                          <div className="counter-icon">
                            <i className="flaticon-inspiration" />
                          </div>
                          <div className="counter-content">
                            <h2 className="count">Pronostics</h2>
                            {/* <p>Happy Clients</p> */}
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="counter-item-three">
                          <div className="counter-icon">
                            <i className="flaticon-rocket" />
                          </div>
                          <div className="counter-content">
                            <h2 className="count">Career Boost</h2>
                            {/* <p>Projects Done</p> */}
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="counter-item-three">
                          <div className="counter-icon">
                            <i className="flaticon-code" />
                          </div>
                          <div className="counter-content">
                            <h2 className="count">Digitalization</h2>
                            {/* <p>Expert People</p> */}
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="counter-item-three">
                          <div className="counter-icon">
                            <i className="flaticon-round-table" />
                          </div>
                          <div className="counter-content">
                            <h2 className="count">HR Sourcing</h2>
                            {/* <p>Expert People</p> */}
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="counter-item-three">
                          <div className="counter-icon">
                            <i className="flaticon-rating" />
                            {/* <i className="flaticon-save-money" /> */}
                          </div>
                          <div className="counter-content">
                            <h2 className="count">Human Capital</h2>
                            {/* <p>Expert People</p> */}
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="inner-counter-shape">
              <img
                src="/assets/img/images/inner_counter_shape.png"
                alt=""
                data-aos="fade-left"
                data-aos-delay={0}
              />
            </div>
          </section>
          {/* counter-area-end */}
          {/* team-area */}
          <section className="features-area-six">
            <div className="container">
              <div className="features-item-wrap-four features-item-wrap-six">
                <div className="row justify-content-center">
                  <div className="section-title-two text-center mb-50">
                    <span className="sub-title">Discover more</span>
                    <h2 className="title">Our Projects</h2>
                    {/* <p>
                      Ever find yourself staring at your computer screen a good
                      consulting slogan to come to mind? Oftentimes.
                    </p> */}
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="features-item-four">
                      <div className="features-icon-four">
                        <i className="flaticon-puzzle-piece" />
                      </div>
                      <div className="features-content-four">
                        <h4 className="title">dynaskills® Trainings</h4>
                        <p>
                          Finance helps you to convert into a strategic asset
                          get.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="features-item-four">
                      <div className="features-icon-four">
                        <i className="flaticon-mission" />
                      </div>
                      <div className="features-content-four">
                        <h4 className="title">dynaskills®2030</h4>
                        <p>
                          Finance helps you to convert into a strategic asset
                          get.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* <div className="col-lg-4 col-md-6">
                    <div className="features-item-four">
                      <div className="features-icon-four">
                        <i className="flaticon-money" />
                      </div>
                      <div className="features-content-four">
                        <h4 className="title">Faster benefits</h4>
                        <p>
                          Finance helps you to convert into a strategic asset
                          get.
                        </p>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </section>
          {/* <section className="team-area-four pt-120 pb-90">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-6">
                  <div className="section-title-two text-center mb-50">
                    <span className="sub-title">Discover more</span>
                    <h2 className="title">Our Projects</h2>
                    <p>
                      Ever find yourself staring at your computer screen a good
                      consulting slogan to come to mind? Oftentimes.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                  <div className="team-item-four">
                    <div className="team-thumb-four">
                      <img src="/assets/img/team/h4_team_img01.jpg" alt="" />
                      <SocialToggle />
                    </div>
                    <div className="team-content-four">
                      <h2 className="title">
                        <Link href="/team-details">Brooklyn Simmons</Link>
                      </h2>
                      <span>Finance Advisor</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                  <div className="team-item-four">
                    <div className="team-thumb-four">
                      <img src="/assets/img/team/h4_team_img02.jpg" alt="" />
                      <SocialToggle />
                    </div>
                    <div className="team-content-four">
                      <h2 className="title">
                        <Link href="/team-details">dynaskills® Trainings</Link>
                      </h2>
                      <Link href="#">Read More</Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                  <div className="team-item-four">
                    <div className="team-thumb-four">
                      <img src="/assets/img/team/h4_team_img03.jpg" alt="" />
                      <SocialToggle />
                    </div>
                    <div className="team-content-four">
                      <h2 className="title">
                        <Link href="/team-details">dynaskills® 2030</Link>
                      </h2>
                      <Link href="#">Sign in</Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                  <div className="team-item-four">
                    <div className="team-thumb-four">
                      <img src="/assets/img/team/h4_team_img04.jpg" alt="" />
                      <SocialToggle />
                    </div>
                    <div className="team-content-four">
                      <h2 className="title">
                        <Link href="/team-details">Guy Hawkins</Link>
                      </h2>
                      <span>Finance Advisor</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
          {/* team-area-end */}
          {/* pricing-area */}
          {/* <section className="pricing-area-three">
              <div className="pricing-shape">
                <img
                  src="/assets/img/images/pricing_shape.png"
                  alt=""
                  data-aos="fade-left"
                  data-aos-delay={200}
                />
              </div>
              <div className="container">
                <div className="row align-items-center justify-content-center">
                  <div className="col-lg-6">
                    <div className="section-title-two mb-50">
                      <span className="sub-title">Flexible Pricing Plan</span>
                      <h2 className="title">
                        We’ve offered the best <br /> pricing for you
                      </h2>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-10">
                    <div className="section-top-content mb-30">
                      <p>
                        Ever find yourself staring at your computer screen a
                        good consulting slogan to come to mind? Oftentimes.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pricing-item-wrap">
                  <div className={`pricing-tab ${isToggled ? "selected" : ""}`}>
                    <span
                      className={`tab-btn monthly_tab_title ${
                        isToggled ? "active" : ""
                      }`}
                    >
                      Monthly
                    </span>
                    <span
                      className={`pricing-tab-switcher ${
                        isToggled ? "active" : ""
                      }`}
                      onClick={handleToggle}
                    />
                    <span
                      className={`tab-btn annual_tab_title ${
                        isToggled ? "active" : ""
                      }`}
                    >
                      Yearly
                    </span>
                  </div>
                  <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 col-sm-10">
                      <div className="pricing-box-three">
                        <div className="pricing-icon">
                          <i className="flaticon-rocket" />
                        </div>
                        <div className="pricing-plan">
                          <h4 className="title">Basic Plan</h4>
                        </div>
                        <div className="pricing-price-two">
                          <h2 className="price">
                            <strong>$</strong>
                            {isToggled ? "119" : "19"}
                            <span>/{isToggled ? "year" : "month"}</span>
                          </h2>
                        </div>
                        <div className="pricing-list">
                          <ul className="list-wrap">
                            <li>
                              <img
                                src="/assets/img/icons/check_icon03.svg"
                                alt=""
                              />
                              5000 User Activities
                            </li>
                            <li>
                              <img
                                src="/assets/img/icons/check_icon03.svg"
                                alt=""
                              />
                              Unlimited Access
                            </li>
                            <li>
                              <img
                                src="/assets/img/icons/check_icon03.svg"
                                alt=""
                              />
                              No Hidden Charge
                            </li>
                            <li>
                              <img
                                src="/assets/img/icons/check_icon03.svg"
                                alt=""
                              />
                              03 Time Updates
                            </li>
                            <li>
                              <img
                                src="/assets/img/icons/check_icon03.svg"
                                alt=""
                              />
                              Figma Source File
                            </li>
                          </ul>
                        </div>
                        <div className="pricing-btn-two">
                          <Link
                            href="/contact"
                            className="btn transparent-btn-two"
                          >
                            Get The Plan Now
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-10">
                      <div className="pricing-box-three">
                        <div className="pricing-icon">
                          <i className="flaticon-inspiration" />
                        </div>
                        <div className="pricing-plan">
                          <h4 className="title">Standard</h4>
                        </div>
                        <div className="pricing-price-two">
                          <h2 className="price">
                            <strong>$</strong>
                            {isToggled ? "339" : "39"}
                            <span>/{isToggled ? "year" : "month"}</span>
                          </h2>
                        </div>
                        <div className="pricing-list">
                          <ul className="list-wrap">
                            <li>
                              <img
                                src="/assets/img/icons/check_icon03.svg"
                                alt=""
                              />
                              5000 User Activities
                            </li>
                            <li>
                              <img
                                src="/assets/img/icons/check_icon03.svg"
                                alt=""
                              />
                              Unlimited Access
                            </li>
                            <li>
                              <img
                                src="/assets/img/icons/check_icon03.svg"
                                alt=""
                              />
                              No Hidden Charge
                            </li>
                            <li>
                              <img
                                src="/assets/img/icons/check_icon03.svg"
                                alt=""
                              />
                              03 Time Updates
                            </li>
                            <li>
                              <img
                                src="/assets/img/icons/check_icon03.svg"
                                alt=""
                              />
                              Figma Source File
                            </li>
                          </ul>
                        </div>
                        <div className="pricing-btn-two">
                          <Link
                            href="/contact"
                            className="btn transparent-btn-two"
                          >
                            Get The Plan Now
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-10">
                      <div className="pricing-box-three">
                        <div className="pricing-icon">
                          <i className="flaticon-briefcase-1" />
                        </div>
                        <div className="pricing-plan">
                          <h4 className="title">Enterprise</h4>
                        </div>
                        <div className="pricing-price-two">
                          <h2 className="price">
                            <strong>$</strong>
                            {isToggled ? "899" : "89"}
                            <span>/{isToggled ? "year" : "month"}</span>
                          </h2>
                        </div>
                        <div className="pricing-list">
                          <ul className="list-wrap">
                            <li>
                              <img
                                src="/assets/img/icons/check_icon03.svg"
                                alt=""
                              />
                              5000 User Activities
                            </li>
                            <li>
                              <img
                                src="/assets/img/icons/check_icon03.svg"
                                alt=""
                              />
                              Unlimited Access
                            </li>
                            <li>
                              <img
                                src="/assets/img/icons/check_icon03.svg"
                                alt=""
                              />
                              No Hidden Charge
                            </li>
                            <li>
                              <img
                                src="/assets/img/icons/check_icon03.svg"
                                alt=""
                              />
                              03 Time Updates
                            </li>
                            <li>
                              <img
                                src="/assets/img/icons/check_icon03.svg"
                                alt=""
                              />
                              Figma Source File
                            </li>
                          </ul>
                        </div>
                        <div className="pricing-btn-two">
                          <Link
                            href="/contact"
                            className="btn transparent-btn-two"
                          >
                            Get The Plan Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section> */}
          <section className="about-area-six about-area-twelve">
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div className="col-lg-6 col-md-10">
                  <div className="about-img-six about-img-twelve">
                    <img src="/assets/img/images/h5_about_img.png" alt="" />
                    <img
                      src="/assets/img/images/inner_about_shape03.png"
                      alt=""
                    />
                    <img src="/assets/img/images/h5_about_shape02.png" alt="" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="about-content-six">
                    <div className="section-title-two section-title-three mb-30">
                      <span className="sub-title">Our Main Focus</span>
                      <h2 className="title">dynaskills®</h2>
                    </div>
                    <p>
                      🎯 dynaskills® , a Swiss certified innovation company,
                      analyzes labor market developments to predict future needs
                    </p>
                    <p>
                      🎯 We have been collecting a large amount of data in
                      Switzerland, Europe and overseas for 15 years.
                    </p>
                    <p>
                      🎯 We evaluate them using proprietary artificial
                      intelligence (AI) tools and big data analysis methods.
                    </p>
                    <p>
                      🎯 Our systems are operated according to the high European
                      security standards in the field of cyber security and data
                      protection (GDPR).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
