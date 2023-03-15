import React from "react";

const Career = () => {
  return (
    <>
      <div className="main-page-title">
        <div className="d-flex align-items-center">
          <div className="container text-center py-5">
            <h1 className="page-title">Career</h1>
            <p className="page-description">Passion And Dedication</p>
          </div>
        </div>
      </div>

      <section className="wrapper bg-silver py-5">
        <div className="container-fluid">
          <h1 className="stroke-text">Company</h1>
          <div className="row mb-5">
            <div className="col-12">
              <h2 className="section-heading">
                THE TREASURE OF THE COMPANY IS{" "}
                <span className="text-highlight">ITS PEOPLE</span>
              </h2>
              <div className="section-heading-line"></div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-4">
                <picture>
                  <source
                    media="(max-width:767px)"
                    src="images/mb-masterit-office.jpg"
                  />
                  <img
                    src="images/masterit-office.jpg"
                    alt="MasterIt Software Solutions & Services Pvt Ltd Office"
                    className="img-fluid w-100"
                  />
                </picture>
                <div className="blog-list">
                  <div className="blog-card-main w-100">
                    <div className="blog-post py-4">
                      <p>
                        The MasterIt is one of the fastest growing software
                        development company in India. In a short span, it has
                        also become one of the most preferred IT Company for job
                        seekers especially in Surat region. MasterIt team
                        believes that business sustains only when all
                        stakeholders are satisfied and delighted with your
                        services. Being a part of MasterIt team, you will be one
                        of our highly valuable stakeholders and appreciating
                        asset. We firmly believe that, employees are our
                        appreciative asset and all employees are unique in their
                        skills and contribution to the Company. We are looking
                        for people who have a desire to learn and have a zeal to
                        convert ideas to reality.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="wrapper d-flex align-items-center py-5">
        <div className="container-fluid">
          <h1 className="stroke-text">Benefits</h1>
          <div className="row mb-5">
            <div className="col-12">
              <h2 className="section-heading">
                EMPLOYEE <span className="text-highlight">BENEFITS</span>
              </h2>
              <div className="section-heading-line"></div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <picture>
                  <source
                    media="(max-width:767px)"
                    src="images/mb-employee.jpg"
                  />
                  <img
                    src="images/employee.jpg"
                    alt="Employee Benefits"
                    className="img-fluid w-100"
                  />
                </picture>
                <div className="blog-list right-side">
                  <div className="blog-card-main w-100">
                    <div className="blog-post py-4">
                      <p className="emp-icon emp-benefit fa-check">
                        5 Working Days in Week
                      </p>
                      <p className="emp-icon emp-benefit fa-check">
                        Competitive Salary Package
                      </p>
                      <p className="emp-icon emp-benefit fa-check">
                        Open Working Hours
                      </p>
                      <p className="emp-icon emp-benefit fa-check">
                        Paid Leave along with other Holidays
                      </p>
                      <p className="emp-icon emp-benefit fa-check">
                        Work From Home to balance professional and family life
                      </p>
                      <p className="emp-icon emp-benefit fa-check">PF</p>
                      <p className="emp-icon emp-benefit fa-check">Bonus</p>
                      <p className="emp-icon emp-benefit fa-check">
                        Compensatory Off
                      </p>
                      <p className="emp-icon emp-benefit fa-check">
                        Referral Bonus
                      </p>
                      <p className="emp-icon emp-benefit fa-check">
                        Project Bonus
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="wrapper py-5">
        <div className="container-fluid">
          <h1 className="stroke-text">Opening</h1>
          <div className="row mb-5">
            <div className="col-12">
              <h2 className="section-heading">
                CURRENT <span className="text-highlight">OPENING</span>
              </h2>
              <div className="section-heading-line"></div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-4">
                <picture>
                  <source
                    media="(max-width:767px)"
                    src="images/mb-masterit-room.jpg"
                  />
                  <img
                    src="images/masterit-room.jpg"
                    alt="MasterIt Software Solutions & Services Pvt Ltd Office"
                    className="img-fluid w-100"
                  />
                </picture>
                <div className="blog-list">
                  <div className="blog-card-main w-100">
                    <div className="blog-post py-4">
                      <h4>Join Our Team</h4>
                      <table className="table jointable">
                        <thead>
                          <tr>
                            <th>Position</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Sr. Business Development Executive</td>
                          </tr>
                          <tr>
                            <td>Business Analyst</td>
                          </tr>
                          <tr>
                            <td>Asp.Net core MVC Developer</td>
                          </tr>
                        </tbody>
                      </table>

                      <div className="mt-3 text-right">
                        <a href="jobs.html" className="btn btn-regular">
                          See All
                          <span className="btn-effect"></span>
                          <span className="btn-arrow">
                            <i className="fa fa-chevron-right"></i>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container-fluid py-5 bg-lifemasterit">
          <div className="container py-5">
            <div className="row">
              <div className="col-md-6 offset-md-1 col-lg-4 offset-lg-1">
                <div className="bg-white p-4">
                  <h1 className="mb-4">
                    Life &#64; <span className="text-highlight">MasterIt</span>
                  </h1>
                  <p>
                    {" "}
                    <br />{" "}
                  </p>
                  <div className="mt-5">
                    <a href="gallery.html" className="btn btn-regular">
                      View More
                      <span className="btn-effect"></span>
                      <span className="btn-arrow">
                        <i className="fa fa-chevron-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid bg-silver py-5">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12">
              <p className="section-heading">
                <span className="text-highlight">AWARDS</span> AND RECOGNITION
              </p>
              <div className="section-heading-line"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="row flex-column flex-md-row justify-content-around text-center text-md-left">
                <div className="awward-icon-option">
                  <a
                    className="d-inline-block"
                    href="https://www.microsoft.com/en-US/solution-providers"
                    target="_blank"
                    rel="noopener"
                  >
                    <img
                      src="images/siler-ms-logo.png"
                      alt="Silver Microsoft Partner"
                    />
                  </a>
                </div>
                <div className="awward-icon-option">
                  <img src="images/iso-logo.png" alt="ISO Logo" />
                </div>
                <div className="awward-icon-option">
                  <a
                    className="d-inline-block"
                    href="https://udyamregistration.gov.in/verifyudyambarcode.aspx?verifyudrn=NBzf+Jv+43B1s2YWeH5AHQ=="
                    target="_blank"
                    rel="noopener"
                  >
                    <img src="images/msme-logo.png" alt="msme logo" />
                  </a>
                </div>
                <div>
                  <a
                    href="https://clutch.co/profile/masterit"
                    target="_blank"
                    rel="noopener"
                  >
                    <div className="awward-icon">
                      <img src="images/clutch-logo.png" alt="Clutch Logo" />
                    </div>
                    <div className="rating">
                      <p className="text-dark">Clutch</p>
                      <div className="mt-2 text-orange">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-half-alt"></i>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Career;
