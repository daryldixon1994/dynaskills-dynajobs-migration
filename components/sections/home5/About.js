export default function About() {
  return (
    <>
      <section
        className="about-area about-bg"
        data-background="/assets/img/bg/about_bg.jpg"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="about-img-wrap">
                <img
                  src="/assets/img/images/about_img01-1.svg"
                  alt=""
                  className="main-img"
                />
                <img
                  //   src={`/assets/img/images/about_img_shape01.png`}

                  alt=""
                />
                <img src="/assets/img/images/about_img_shape02.png" alt="" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="about-content">
                <div className="section-title mb-25 tg-heading-subheading animation-style2">
                  <span className="sub-title tg-element-title">
                    Best Jobs and Trainings to boost your career.
                  </span>
                  <h2 className="title tg-element-title">
                    dynaskills® Platform
                  </h2>
                </div>
                <p>
                  Borem ipsum dolor sit amet, consectetur adipiscing elita
                  floraipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod temporincididunt ut labore et dolore magna aliqua Quis
                  suspendisse ultri ces gravida.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
