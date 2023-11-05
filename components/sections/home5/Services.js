import Link from "next/link";
import { useState } from "react";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  //   autoplay: true,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
};

export default function Services() {
  const [grab, setGrab] = useState(false);
  return (
    <>
      <section
        className="services-area services-bg"
        data-background="/assets/img/bg/services_bg.jpg"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div className="section-title white-title text-center mb-50 tg-heading-subheading animation-style2">
                <span className="sub-title tg-element-title">Our Plans</span>
                <h2 className="title tg-element-title">dynaskills® 2030</h2>
                <p>The digital transformation is progressing!</p>
                <p>Stay updated on the latest trends.</p>
              </div>
            </div>
          </div>
          <Slider {...settings} className="row services-active">
            {/* 1 */}
            <div className="col-lg-4">
              <div className="services-item">
                <div className="services-content">
                  <div className="content-top">
                    <div className="icon">
                      <i className="flaticon-briefcase" />
                    </div>
                    <h2 className="title">1</h2>
                  </div>
                  <div className="services-thumb">
                    <img src="/assets/img/services/Studying-amico.png" alt="" />
                    <Link
                      href="/services-details"
                      className="btn transparent-btn"
                    >
                      Trends
                    </Link>
                  </div>
                  <ul className="list-wrap">
                    <li>seusmeyd tempose atidim area</li>
                    <li>aliquam duhipsum is simply free</li>
                    <li>Get Life Time Access</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* 2 */}
            <div className="col-lg-4">
              <div className="services-item">
                <div className="services-content">
                  <div className="content-top">
                    <div className="icon">
                      <i className="flaticon-taxes" />
                    </div>
                    <h2 className="title">2</h2>
                  </div>
                  <div className="services-thumb">
                    <img
                      src="/assets/img/services/Web-search-rafiki.png"
                      alt=""
                    />
                    <Link
                      href="/services-details"
                      className="btn transparent-btn"
                    >
                      Trends
                    </Link>
                  </div>
                  <ul className="list-wrap">
                    <li>seusmeyd tempose atidim area</li>
                    <li>aliquam duhipsum is simply free</li>
                    <li>Get Life Time Access</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* 3 */}
            <div className="col-lg-4">
              <div className="services-item">
                <div className="services-content">
                  <div className="content-top">
                    <div className="icon">
                      <i className="flaticon-money" />
                    </div>
                    <h2 className="title">3</h2>
                  </div>
                  <div className="services-thumb">
                    <img
                      src="/assets/img/services/Code-typing-bro.png"
                      alt=""
                    />
                    <Link
                      href="/services-details"
                      className="btn transparent-btn"
                    >
                      Trends
                    </Link>
                  </div>
                  <ul className="list-wrap">
                    <li>seusmeyd tempose atidim area</li>
                    <li>aliquam duhipsum is simply free</li>
                    <li>Get Life Time Access</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* 4 */}
            <div className="col-lg-4">
              <div className="services-item">
                <div className="services-content">
                  <div className="content-top">
                    <div className="icon">
                      <i className="flaticon-taxes" />
                    </div>
                    <h2 className="title">4</h2>
                  </div>
                  <div className="services-thumb">
                    <img src="/assets/img/services/Doctors-amico.png" alt="" />
                    <Link
                      href="/services-details"
                      className="btn transparent-btn"
                    >
                      Trends
                    </Link>
                  </div>
                  <ul className="list-wrap">
                    <li>seusmeyd tempose atidim area</li>
                    <li>aliquam duhipsum is simply free</li>
                    <li>Get Life Time Access</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* 5 */}
            <div className="col-lg-4">
              <div className="services-item">
                <div className="services-content">
                  <div className="content-top">
                    <div className="icon">
                      <i className="flaticon-taxes" />
                    </div>
                    <h2 className="title">5</h2>
                  </div>
                  <div className="services-thumb">
                    <img src="/assets/img/services/Finance-leader.png" alt="" />
                    <Link
                      href="/services-details"
                      className="btn transparent-btn"
                    >
                      Trends
                    </Link>
                  </div>
                  <ul className="list-wrap">
                    <li>seusmeyd tempose atidim area</li>
                    <li>aliquam duhipsum is simply free</li>
                    <li>Get Life Time Access</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* 6 */}
            <div className="col-lg-4">
              <div className="services-item">
                <div className="services-content">
                  <div className="content-top">
                    <div className="icon">
                      <i className="flaticon-taxes" />
                    </div>
                    <h2 className="title">6</h2>
                  </div>
                  <div className="services-thumb">
                    <img
                      src="/assets/img/services/Electrician-amico.png"
                      alt=""
                    />
                    <Link
                      href="/services-details"
                      className="btn transparent-btn"
                    >
                      Trends
                    </Link>
                  </div>
                  <ul className="list-wrap">
                    <li>seusmeyd tempose atidim area</li>
                    <li>aliquam duhipsum is simply free</li>
                    <li>Get Life Time Access</li>
                  </ul>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
}
