import React from "react";

const BlogDetails = () => {
  return (
    <section className="blog-area space-top space-extra-bottom">
      <div className="container">
        <div className="row gx-40">
          <div className="col-xxl-8 col-lg-7">
            <div className="blog-details-card">
              <div className="blog-thumb">
                <img src="assets/img/blog/blog_details1_1.png" alt="img" />
                <div className="blog-meta">
                  <a href="blog-details.html">
                    <i className="far fa-comments" />
                    Comments (05)
                  </a>
                  <a href="blog.html">
                    <i className="far fa-user" />
                    By admin
                  </a>
                </div>
                <a href="blog-details.html" className="blog-date">
                  15 DEC
                </a>
              </div>
              <div className="blog-content">
                <h2 className="blog-title h3">
                  Your Go-To Roofing Contractors for All Your{" "}
                </h2>
                <p className="mb-15">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when thr looking at its
                  layout. The point of using Lorem Ipsum is that it has a
                  more-or-less normal the a distribution of letters, as opposed
                  to using 'Content her the design made by man who is jenius
                </p>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when thr looking at its
                  layout. The point of using Lorem Ipsum is that it has a
                  more-or-less normal
                </p>
                <blockquote>
                  <p>
                    Lorem Ipsum is simply dummy text of the printin and type
                    setting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled loren ipsum
                    dummy text holder write the most
                  </p>
                  <cite>Robert Fox</cite>
                </blockquote>
                <p className="mb-40">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when thr looking at its
                  layout. The point of using Lorem Ipsum is that it has a
                  more-or-less normal the a distribution of letters, as opposed
                  to using 'Content her the design made by man who is jenius
                </p>
                <div className="row gy-4">
                  <div className="col-sm-6">
                    <div className="blog-thumb mb-sm-0 mb-30">
                      <img
                        src="assets/img/blog/blog_details1_2.png"
                        alt="img"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="blog-details-single-card bg-title">
                      <h4 className="text-white">
                        Roofing Contractor All Your{" "}
                      </h4>
                      <p className="text-white">
                        It is a long established fact that a reader will be
                        distracted the readable content of a page a whe looking
                        at its layout It is a established fact that a reader the
                        main man
                      </p>
                      <p className="text-white mb-n2">
                        It is a long established fact that a reader will be
                        distracted the readable content
                      </p>
                    </div>
                  </div>
                </div>
                <h3 className="blog-inner-title mt-70">
                  Your Go-To Roofing Contractors for All Your{" "}
                </h3>
                <div className="row gy-3">
                  <div className="col-lg-6">
                    <div className="checklist style2">
                      <ul>
                        <li>
                          <i className="fas fa-check-circle" />
                          Professional Car Repair Services Dependable Car
                        </li>
                        <li>
                          <i className="fas fa-check-circle" />
                          Dependable Car Repair Solutions
                        </li>
                        <li>
                          <i className="fas fa-check-circle" />
                          Your One-Stop Car Repair Shop
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="checklist style2">
                      <ul>
                        <li>
                          <i className="fas fa-check-circle" />
                          Professional Car Repair Services Dependable Car
                        </li>
                        <li>
                          <i className="fas fa-check-circle" />
                          Dependable Car Repair Solutions
                        </li>
                        <li>
                          <i className="fas fa-check-circle" />
                          Your One-Stop Car Repair Shop
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <p className="mt-40">
                  A car repair is a service provided to fix any issues or
                  damages with your vehicle. It involves diagnosing the problem,
                  repairing or replacing the necessary parts, and ensuring that
                  the car is in proper working condition A car repair is a
                  service provided to fix any issues or damages with your
                  vehicle. It involves diagnosing{" "}
                </p>
              </div>
              <div className="share-links clearfix ">
                <span className="share-links-title">Tags:</span>
                <div className="tagcloud">
                  <a href="blog.html">All Project</a>
                  <a href="blog.html">Car Repair</a>
                  <a href="blog.html">Repair Services</a>
                </div>
              </div>
            </div>
            <div className="comments-wrap">
              {/* Comment Form */}
              <h3 className="blog-inner-title"> Leave a comment</h3>
              <div className="comment-form bg-smoke mb-30">
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="form-control style-white"
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      placeholder="Your Email"
                      className="form-control style-white"
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      placeholder="Phone Number"
                      className="form-control style-white"
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <select
                      name="subject"
                      id="subject"
                      className="form-select style-white"
                    >
                      <option value="" disabled="" selected="" hidden="">
                        Select Subject*
                      </option>
                      <option value="Construction">Auto Repair</option>
                      <option value="Real Estate">Car Repair</option>
                      <option value="Industry">Automotive</option>
                    </select>
                    <i className="fas fa-angle-down" />
                  </div>
                  <div className="col-12 form-group">
                    <textarea
                      placeholder="Message here.."
                      className="form-control style-white"
                      defaultValue={""}
                    />
                  </div>
                  <div className="col-12 form-group mb-0">
                    <button className="btn style2">Send now</button>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* Comment end */}
          </div>
          <div className="col-xxl-4 col-lg-5">
            <aside className="sidebar-area">
              <div className="widget widget_search">
                <h3 className="widget_title">Search</h3>
                <form className="search-form">
                  <input type="text" placeholder="Search" />
                  <button type="submit">
                    <i className="fas fa-search" />
                  </button>
                </form>
              </div>
              <div className="widget widget_categories">
                <h3 className="widget_title">Category</h3>
                <ul>
                  <li>
                    <a href="blog.html">
                      Precision Auto Works <span>(4)</span>
                    </a>
                  </li>
                  <li>
                    <a href="blog.html">
                      Mobile Car Repair <span>(5)</span>
                    </a>
                  </li>
                  <li>
                    <a href="blog.html">
                      Elite Automotive Service <span>(8)</span>
                    </a>
                  </li>
                  <li>
                    <a href="blog.html">
                      Pro Auto Fix <span>(4)</span>
                    </a>
                  </li>
                  <li>
                    <a href="blog.html">
                      Drive-In Garage <span>(3)</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="widget">
                <h3 className="widget_title">Popular post</h3>
                <div className="recent-post-wrap">
                  <div className="recent-post">
                    <div className="media-body">
                      <h4 className="post-title">
                        <a className="text-inherit" href="blog-details.html">
                          Quick Fix Motors
                        </a>
                      </h4>
                      <div className="recent-post-meta">
                        <a href="blog.html">Sep 15, 2024</a>
                      </div>
                    </div>
                    <div className="media-img">
                      <a href="blog-details.html">
                        <img
                          src="assets/img/blog/recent-post1.png"
                          alt="Blog Image"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="recent-post">
                    <div className="media-body">
                      <h4 className="post-title">
                        <a className="text-inherit" href="blog-details.html">
                          Professional Service
                        </a>
                      </h4>
                      <div className="recent-post-meta">
                        <a href="blog.html">Jun 25, 2024</a>
                      </div>
                    </div>
                    <div className="media-img">
                      <a href="blog-details.html">
                        <img
                          src="assets/img/blog/recent-post2.png"
                          alt="Blog Image"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="recent-post">
                    <div className="media-body">
                      <h4 className="post-title">
                        <a className="text-inherit" href="blog-details.html">
                          Gear Wrench Auto
                        </a>
                      </h4>
                      <div className="recent-post-meta">
                        <a href="blog.html">Jun 25, 2024</a>
                      </div>
                    </div>
                    <div className="media-img">
                      <a href="blog-details.html">
                        <img
                          src="assets/img/blog/recent-post3.png"
                          alt="Blog Image"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="widget widget_tag_cloud">
                <h3 className="widget_title">Tags</h3>
                <div className="tagcloud">
                  <a href="blog.html">Mechanic</a>
                  <a href="blog.html">Auto Fixers</a>
                  <a href="blog.html">Car Fix</a>
                  <a href="blog.html">Pro Auto Fix</a>
                  <a href="blog.html">Service</a>
                  <a href="blog.html">Auto Fix</a>
                  <a href="blog.html">Auto Repair</a>
                  <a href="blog.html">Masters</a>
                  <a href="blog.html">Automotive</a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
