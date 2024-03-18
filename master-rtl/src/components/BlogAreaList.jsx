import React from "react";
import { Link } from "react-router-dom";

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
                  <Link to="/blog">
                    <i className="fas fa-user" />
                    بواسطة المشرف
                  </Link>
                  <Link to="/blog">
                    <i className="fas fa-comments" />
                    التعليقات (05)
                  </Link>
                </div>
                <h3 className="blog-title">
                  <Link to="/blog-details">
                    حلول إصلاح السيارات التي يمكن الاعتماد عليها، إصلاح السيارات
                    الاحترافي خدمات
                  </Link>
                </h3>
                <p className="blog-text">
                  في منشأتنا، نقدم مجموعة شاملة من الخدمات، بما في ذلك الصيانة
                  الروتينية، وتشخيص المحرك، وإصلاح الفرامل، وخدمة ناقل الحركة،
                  واستكشاف أخطاء النظام الكهربائي وإصلاحها، وغير ذلك الكثير.
                  سواء كانت سيارتك تحتاج إلى ضبط بسيط أو إصلاح معقد، يمكنك
                  الوثوق بمحترفينا المهرة لإنجاز المهمة بكفاءة وفعالية.
                </p>
                <Link to="/blog-details" className="btn style-border2">
                  {" "}
                  اقرأ أكثر <i className="fas fa-arrow-right" />
                </Link>
                <div className="blog-date">
                  <Link to="/blog">
                    <span>17</span>Feb
                  </Link>
                </div>
              </div>
            </div>
            <div className="blog-single-card">
              <div className="blog-thumb">
                <img src="assets/img/blog/blog_s1_2.png" alt="blog image" />
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <Link to="/blog">
                    <i className="fas fa-user" />
                    بواسطة المشرف
                  </Link>
                  <Link to="/blog">
                    <i className="fas fa-comments" />
                    التعليقات (05)
                  </Link>
                </div>
                <h3 className="blog-title">
                  <Link to="/blog-details">
                    الإصلاحات الدقيقة للخدمة الشخصية في بناء مفاتيح الربط يثق
                  </Link>
                </h3>
                <p className="blog-text">
                  نحن ندرك أهمية سيارتك في حياتك اليومية، ولهذا السبب نسعى
                  جاهدين لتقليل وقت التوقف عن العمل وتوفير الحلول في الوقت
                  المناسب. باستخدام أحدث المعدات والتقنيات الرائدة في الصناعة،
                  نضمن إكمال كل إصلاح وفقًا لأعلى المعايير، بما يلبي مواصفات
                  الشركة المصنعة أو يتجاوزها.
                </p>
                <Link to="/blog-details" className="btn style-border2">
                  {" "}
                  اقرأ أكثر <i className="fas fa-arrow-right" />
                </Link>
                <div className="blog-date">
                  <Link to="/blog">
                    <span>17</span>Feb
                  </Link>
                </div>
              </div>
            </div>
            <div className="blog-single-card">
              <div className="blog-thumb">
                <img src="assets/img/blog/blog_s1_3.png" alt="blog image" />
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <Link to="/blog">
                    <i className="fas fa-user" />
                    بواسطة المشرف
                  </Link>
                  <Link to="/blog">
                    <i className="fas fa-comments" />
                    التعليقات (05)
                  </Link>
                </div>
                <h3 className="blog-title">
                  <Link to="/blog-details">
                    إصلاح السيارات لتحقيق الأحلام الاستعداد للقيادة السلسة{" "}
                  </Link>
                </h3>
                <p className="blog-text">
                  نحن ندرك أهمية سيارتك في حياتك اليومية، ولهذا السبب نسعى
                  جاهدين لتقليل وقت التوقف عن العمل وتوفير الحلول في الوقت
                  المناسب. باستخدام أحدث المعدات والتقنيات الرائدة في الصناعة،
                  نضمن إكمال كل إصلاح وفقًا لأعلى المعايير، بما يلبي مواصفات
                  الشركة المصنعة أو يتجاوزها.
                </p>
                <Link to="/blog-details" className="btn style-border2">
                  {" "}
                  اقرأ أكثر <i className="fas fa-arrow-right" />
                </Link>
                <div className="blog-date">
                  <Link to="/blog">
                    <span>17</span>Feb
                  </Link>
                </div>
              </div>
            </div>
            <div className="pagination justify-content-center">
              <ul>
                <li>
                  <Link to="/blog">1</Link>
                </li>
                <li>
                  <Link to="/blog">2</Link>
                </li>
                <li>
                  <Link to="/blog">3</Link>
                </li>
                <li>
                  <Link to="/blog">
                    <i className="fas fa-angle-right" />
                  </Link>
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
              <div className="widget widget_categories rtl">
                <h3 className="widget_title">فئة</h3>
                <ul>
                  <li>
                    <Link to="/blog">
                      الدقة لأعمال السيارات <span>(4)</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog">
                      Mobile Car Repair <span>(5)</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog">
                      النخبة لخدمة السيارات <span>(8)</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog">
                      الإصلاح التلقائي الاحترافي <span>(4)</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog">
                      مرآب للسيارات <span>(3)</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="widget">
                <h3 className="widget_title">منشور مشهور</h3>
                <div className="recent-post-wrap">
                  <div className="recent-post">
                    <div className="media-body">
                      <h4 className="post-title">
                        <Link className="text-inherit" to="/blog-details">
                          محركات الإصلاح السريع
                        </Link>
                      </h4>
                      <div className="recent-post-meta">
                        <Link to="/blog">15 سبتمبر 2024</Link>
                      </div>
                    </div>
                    <div className="media-img">
                      <Link to="/blog-details">
                        <img
                          src="assets/img/blog/recent-post1.png"
                          alt="fixturbo_img"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="recent-post">
                    <div className="media-body">
                      <h4 className="post-title">
                        <Link className="text-inherit" to="/blog-details">
                          خدمة احترافية
                        </Link>
                      </h4>
                      <div className="recent-post-meta">
                        <Link to="/blog">25 يونيو 2024</Link>
                      </div>
                    </div>
                    <div className="media-img">
                      <Link to="/blog-details">
                        <img
                          src="assets/img/blog/recent-post2.png"
                          alt="fixturbo_img"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="recent-post">
                    <div className="media-body">
                      <h4 className="post-title">
                        <Link className="text-inherit" to="/blog-details">
                          مفتاح ربط التروس التلقائي
                        </Link>
                      </h4>
                      <div className="recent-post-meta">
                        <Link to="/blog">25 يونيو 2024</Link>
                      </div>
                    </div>
                    <div className="media-img">
                      <Link to="/blog-details">
                        <img
                          src="assets/img/blog/recent-post3.png"
                          alt="fixturbo_img"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="widget widget_tag_cloud">
                <h3 className="widget_title">العلامات</h3>
                <div className="tagcloud">
                  <Link to="/blog">ميكانيكي</Link>
                  <Link to="/blog">المثبتات التلقائية</Link>
                  <Link to="/blog">إصلاح السيارة</Link>
                  <Link to="/blog">الإصلاح التلقائي الاحترافي</Link>
                  <Link to="/blog">خدمة</Link>
                  <Link to="/blog">تصليح ذاتي</Link>
                  <Link to="/blog">إصلاح تلقائي</Link>
                  <Link to="/blog">سادة</Link>
                  <Link to="/blog">السيارات</Link>
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
