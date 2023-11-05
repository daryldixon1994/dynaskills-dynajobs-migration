import Link from "next/link";

export default function Blog() {
  return (
    <>
      <section className="blog-post-area">
        <div className="blog-bg" data-background="/assets/img/bg/blog_bg.jpg" />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div className="section-title text-center mb-60 tg-heading-subheading animation-style2">
                <Link href="#">
                  <span className="sub-title tg-element-title">
                    See reportage
                    <i className="flaticon-right-arrow" />
                  </span>
                </Link>
                <h2 className="title tg-element-title">
                  What does media say about dynaskills®2030 prognostics?
                </h2>
                <p>By 2025 we will be missing 365,000 skilled workers!</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {/* 1 */}
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="blog-post-item">
                <div className="blog-post-thumb">
                  <Link href="/blog-details">
                    <img
                      src="/assets/img/blog/Picture1.png"
                      alt=""
                      height="350px"
                    />
                  </Link>
                  {/* <span className="date">
                    <strong>25</strong>Jan
                  </span> */}
                </div>
                <div className="blog-post-content">
                  <div>
                    <Link href="#" className="tag">
                      Jan 22: Our prognostics
                    </Link>
                    <h2 className="title">
                      <Link href="/blog-details">
                        In 2022, shortage of skilled workers will transform to
                        resource bottleneck
                      </Link>
                    </h2>
                  </div>
                  {/* <p>
                    Everything you need to start building area atching presence
                    for your business.
                  </p> */}
                  <Link href="/blog-details" className="link-btn">
                    See reportage
                    <i className="flaticon-right-arrow" />
                  </Link>
                </div>
              </div>
            </div>
            {/* 2 */}
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="blog-post-item">
                <div className="blog-post-thumb">
                  <Link href="/blog-details">
                    <img
                      src="/assets/img/blog/Picture2.png"
                      alt=""
                      height="350px"
                    />
                  </Link>
                  {/* <span className="date">
                    <strong>25</strong>Jan
                  </span> */}
                </div>
                <div className="blog-post-content">
                  <div>
                    <Link href="#" className="tag">
                      Nov 22: Confirmation
                    </Link>
                    <h2 className="title">
                      <Link href="/blog-details">
                        Shortage of skilled workers reaches new dimensions
                      </Link>
                    </h2>
                  </div>
                  {/* <p>
                    Everything you need to start building area atching presence
                    for your business.
                  </p> */}
                  <Link href="/blog-details" className="link-btn">
                    Read reportage <i className="flaticon-right-arrow" />
                  </Link>
                </div>
              </div>
            </div>
            {/* 3 */}
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="blog-post-item">
                <div className="blog-post-thumb">
                  <Link href="/blog-details">
                    <img
                      src="/assets/img/blog/Picture3.png"
                      alt=""
                      height="350px"
                    />
                  </Link>
                  {/* <span className="date">
                    <strong>25</strong>Jan
                  </span> */}
                </div>
                <div className="blog-post-content">
                  <div>
                    <Link href="#" className="tag">
                      Jan 23: Prognostics 2023-2025
                    </Link>
                    <h2 className="title">
                      <Link href="/blog-details">
                        Health Area, Supply Chains and Construction most
                        concerned
                      </Link>
                    </h2>
                    <p>
                      Everything you need to start building area atching
                      presence for your business.
                    </p>
                  </div>
                  <Link href="/blog-details" className="link-btn">
                    See reportage
                    <i className="flaticon-right-arrow" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
