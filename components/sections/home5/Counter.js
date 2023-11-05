import CounterUp from "@/components/elements/CounterUp";

export default function Counter() {
  return (
    <>
      <section
        className="counter-area counter-bg"
        data-background="/assets/img/bg/counter_bg.jpg"
      >
        <div
          className="container"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "30px",
          }}
        >
          <h2 className="title tg-element-title">
            More than 10 years of success stories
          </h2>
          <p>
            dynaskills® is a platform, bringing all together in one main
            objective: Helping people to increase their job market value
            (employability).
          </p>
          <div
            className="row justify-content-space-between"
            style={{ width: "100%" }}
          >
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="counter-item">
                <h2 className="count">
                  +<CounterUp count={32} />K
                </h2>
                <p>Companies</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="counter-item">
                <h2 className="count">
                  +<CounterUp count={98} />K
                </h2>
                <p>Open jobs</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="counter-item">
                <h2 className="count">
                  +<CounterUp count={14} />K
                </h2>
                <p>Training providers</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="counter-item">
                <h2 className="count">
                  + <CounterUp count={53} />K
                </h2>
                <p>Trainings</p>
              </div>
            </div>
          </div>
        </div>
        <div className="counter-shape-wrap">
          <img
            src="/assets/img/images/counter_shape01.png"
            alt=""
            className="animationFramesOne"
          />
          <img
            src="/assets/img/images/counter_shape02.png"
            alt=""
            className="animationFramesOne"
          />
        </div>
      </section>
    </>
  );
}
