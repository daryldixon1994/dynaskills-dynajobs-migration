import Link from "next/link";
import Slider from "react-slick";

const settings = {
  autoplay: true,
  autoplaySpeed: 3000,
  dots: false,
  fade: true,
  arrows: false,
  responsive: [{ breakpoint: 767, settings: { dots: false, arrows: false } }],
};

export default function MainSlider() {
  return (
    <>
      <section className="slider-area">
        <Slider {...settings} className="slider-active">
          <div
            className="single-slider slider-bg"
            data-background="/assets/img/banner/banner_bg.jpg"
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="slider-content">
                    <span
                      className="sub-title"
                      data-animation="fadeInUp"
                      data-delay=".2s"
                    >
                      We Are Expert In This Field
                    </span>
                    <h2
                      className="title"
                      data-animation="fadeInUp"
                      data-delay=".4s"
                    >
                      Upskilling
                    </h2>
                    <p data-animation="fadeInUp" data-delay=".6s">
                      "My team is performing well!" <br /> "What do I need to do
                      to keep it that way?" <br /> "Keep the course with"
                    </p>
                    <Link
                      href="/services"
                      className="btn"
                      data-animation="fadeInUp"
                      data-delay=".8s"
                    >
                      <span
                        style={{
                          textTransform: "lowercase",
                          marginRight: "5px",
                        }}
                      >
                        dynaskills®{" "}
                      </span>{" "}
                      <span> Trainings</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="slider-shape">
              <img
                src="/assets/img/banner/banner_shape.png"
                alt=""
                data-animation="zoomIn"
                data-delay=".8s"
              />
            </div>
          </div>

          <div
            className="single-slider slider-bg"
            data-background="/assets/img/banner/banner_bg02.jpg"
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="slider-content">
                    <span
                      className="sub-title"
                      data-animation="fadeInUp"
                      data-delay=".2s"
                    >
                      We Are Expert In This Field
                    </span>
                    <h2
                      className="title"
                      data-animation="fadeInUp"
                      data-delay=".4s"
                    >
                      dynaskills® 2030
                    </h2>
                    <p data-animation="fadeInUp" data-delay=".6s">
                      How can I lead my team into the future? <br /> "How can we
                      increase our efficiency?" <br /> "Recognize and use the
                      latest trends with "
                    </p>
                    <Link
                      href="/services"
                      className="btn"
                      data-animation="fadeInUp"
                      data-delay=".8s"
                    >
                      <span
                        style={{
                          textTransform: "lowercase",
                          marginRight: "5px",
                        }}
                      >
                        dynaskills®{" "}
                      </span>{" "}
                      2030
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="slider-shape">
              <img
                src="/assets/img/banner/banner_shape.png"
                alt=""
                data-animation="zoomIn"
                data-delay=".8s"
              />
            </div>
          </div>

          <div
            className="single-slider slider-bg"
            data-background="/assets/img/banner/banner_bg.jpg"
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="slider-content">
                    <span
                      className="sub-title"
                      data-animation="fadeInUp"
                      data-delay=".2s"
                    >
                      We Are Expert In This Field
                    </span>
                    <h2
                      className="title"
                      data-animation="fadeInUp"
                      data-delay=".4s"
                    >
                      Industry 4.0
                    </h2>
                    <p data-animation="fadeInUp" data-delay=".6s">
                      The digital transformation is advancing! <br />
                      What do I need to do to ensure my team keeps up? <br />
                      Use the best tools with the
                    </p>
                    <Link
                      href="/services"
                      className="btn"
                      data-animation="fadeInUp"
                      data-delay=".8s"
                    >
                      Industry 4.0
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="slider-shape">
              <img
                src="/assets/img/banner/banner_shape.png"
                alt=""
                data-animation="zoomIn"
                data-delay=".8s"
              />
            </div>
          </div>
        </Slider>
      </section>
    </>
  );
}
