import React from "react";

const BlogAreaList = () => {
  return (
    <section className="blog-area space-top space-extra-bottom">
      <div className="container">
        <div className="row gx-40">
          <div className="col-xxl-8 col-lg-7">
            <div className="blog-single-card">
              <div className="blog-thumb">
                <img src="assets/img/blog/blog_s1_1.png" alt="blog image" />
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <a href="blog.html">
                    <i className="fas fa-user" />
                    بواسطة المشرف
                  </a>
                  <a href="blog.html">
                    <i className="fas fa-comments" />
                    التعليقات (05)
                  </a>
                </div>
                <h3 className="blog-title">
                  <a href="blog-details.html">
                    حلول إصلاح السيارات التي يمكن الاعتماد عليها، إصلاح السيارات
                    الاحترافي خدمات
                  </a>
                </h3>
                <p className="blog-text">
                  في منشأتنا، نقدم مجموعة شاملة من الخدمات، بما في ذلك الصيانة
                  الروتينية، وتشخيص المحرك، وإصلاح الفرامل، وخدمة ناقل الحركة،
                  واستكشاف أخطاء النظام الكهربائي وإصلاحها، وغير ذلك الكثير.
                  سواء كانت سيارتك تحتاج إلى ضبط بسيط أو إصلاح معقد، يمكنك
                  الوثوق بمحترفينا المهرة لإنجاز المهمة بكفاءة وفعالية.
                </p>
                <a href="blog-details.html" className="btn style-border2">
                  {" "}
                  اقرأ أكثر <i className="fas fa-arrow-right" />
                </a>
                <div className="blog-date">
                  <a href="blog.html">
                    <span>17</span>Feb
                  </a>
                </div>
              </div>
            </div>
            <div className="blog-single-card">
              <div className="blog-thumb">
                <img src="assets/img/blog/blog_s1_2.png" alt="blog image" />
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <a href="blog.html">
                    <i className="fas fa-user" />
                    بواسطة المشرف
                  </a>
                  <a href="blog.html">
                    <i className="fas fa-comments" />
                    التعليقات (05)
                  </a>
                </div>
                <h3 className="blog-title">
                  <a href="blog-details.html">
                    الإصلاحات الدقيقة للخدمة الشخصية في بناء مفاتيح الربط يثق
                  </a>
                </h3>
                <p className="blog-text">
                  نحن ندرك أهمية سيارتك في حياتك اليومية، ولهذا السبب نسعى
                  جاهدين لتقليل وقت التوقف عن العمل وتوفير الحلول في الوقت
                  المناسب. باستخدام أحدث المعدات والتقنيات الرائدة في الصناعة،
                  نضمن إكمال كل إصلاح وفقًا لأعلى المعايير، بما يلبي مواصفات
                  الشركة المصنعة أو يتجاوزها.
                </p>
                <a href="blog-details.html" className="btn style-border2">
                  {" "}
                  اقرأ أكثر <i className="fas fa-arrow-right" />
                </a>
                <div className="blog-date">
                  <a href="blog.html">
                    <span>17</span>Feb
                  </a>
                </div>
              </div>
            </div>
            <div className="blog-single-card">
              <div className="blog-thumb">
                <img src="assets/img/blog/blog_s1_3.png" alt="blog image" />
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <a href="blog.html">
                    <i className="fas fa-user" />
                    بواسطة المشرف
                  </a>
                  <a href="blog.html">
                    <i className="fas fa-comments" />
                    التعليقات (05)
                  </a>
                </div>
                <h3 className="blog-title">
                  <a href="blog-details.html">
                    إصلاح السيارات لتحقيق الأحلام الاستعداد للقيادة السلسة{" "}
                  </a>
                </h3>
                <p className="blog-text">
                  نحن ندرك أهمية سيارتك في حياتك اليومية، ولهذا السبب نسعى
                  جاهدين لتقليل وقت التوقف عن العمل وتوفير الحلول في الوقت
                  المناسب. باستخدام أحدث المعدات والتقنيات الرائدة في الصناعة،
                  نضمن إكمال كل إصلاح وفقًا لأعلى المعايير، بما يلبي مواصفات
                  الشركة المصنعة أو يتجاوزها.
                </p>
                <a href="blog-details.html" className="btn style-border2">
                  {" "}
                  اقرأ أكثر <i className="fas fa-arrow-right" />
                </a>
                <div className="blog-date">
                  <a href="blog.html">
                    <span>17</span>Feb
                  </a>
                </div>
              </div>
            </div>
            <div className="pagination justify-content-center">
              <ul>
                <li>
                  <a href="blog.html">1</a>
                </li>
                <li>
                  <a href="blog.html">2</a>
                </li>
                <li>
                  <a href="blog.html">3</a>
                </li>
                <li>
                  <a href="blog.html">
                    <i className="fas fa-angle-right" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xxl-4 col-lg-5">
            <aside className="sidebar-area">
              <div className="widget widget_search">
                <h3 className="widget_title">يبحث</h3>
                <form className="search-form">
                  <input type="text" placeholder="يبحث" />
                  <button type="submit">
                    <i className="fas fa-search" />
                  </button>
                </form>
              </div>
              <div className="widget widget_categories">
                <h3 className="widget_title">فئة</h3>
                <ul>
                  <li>
                    <a href="blog.html">
                      الدقة لأعمال السيارات <span>(4)</span>
                    </a>
                  </li>
                  <li>
                    <a href="blog.html">
                      Mobile Car Repair <span>(5)</span>
                    </a>
                  </li>
                  <li>
                    <a href="blog.html">
                      النخبة لخدمة السيارات <span>(8)</span>
                    </a>
                  </li>
                  <li>
                    <a href="blog.html">
                      الإصلاح التلقائي الاحترافي <span>(4)</span>
                    </a>
                  </li>
                  <li>
                    <a href="blog.html">
                      مرآب للسيارات <span>(3)</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="widget">
                <h3 className="widget_title">منشور مشهور</h3>
                <div className="recent-post-wrap">
                  <div className="recent-post">
                    <div className="media-body">
                      <h4 className="post-title">
                        <a className="text-inherit" href="blog-details.html">
                          محركات الإصلاح السريع
                        </a>
                      </h4>
                      <div className="recent-post-meta">
                        <a href="blog.html">15 سبتمبر 2024</a>
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
                          خدمة احترافية
                        </a>
                      </h4>
                      <div className="recent-post-meta">
                        <a href="blog.html">25 يونيو 2024</a>
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
                          مفتاح ربط التروس التلقائي
                        </a>
                      </h4>
                      <div className="recent-post-meta">
                        <a href="blog.html">25 يونيو 2024</a>
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
                <h3 className="widget_title">العلامات</h3>
                <div className="tagcloud">
                  <a href="blog.html">ميكانيكي</a>
                  <a href="blog.html">المثبتات التلقائية</a>
                  <a href="blog.html">إصلاح السيارة</a>
                  <a href="blog.html">الإصلاح التلقائي الاحترافي</a>
                  <a href="blog.html">خدمة</a>
                  <a href="blog.html">تصليح ذاتي</a>
                  <a href="blog.html">إصلاح تلقائي</a>
                  <a href="blog.html">سادة</a>
                  <a href="blog.html">السيارات</a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogAreaList;
