import React from 'react'
import './courses.css'
import { OurTeam, PageWrapper, Testimonials } from '../../Component'
import { useNavigate } from 'react-router-dom';
import { data, coursesData, tuition } from './data';

function Courses() {

  const navigate = useNavigate();

  return (
    <>
      <PageWrapper
        title={"Archives: Courses"}
        moveTo={"Home"}
        navigatePath={'/'}
        subtitle={"Courses"}
      />

      <div className='courses-card-container section-padding'>
        <div className='container'>
          <div className='row g-4 justify-content-center row-cols-xl-3 row-cols-md-2 row-cols-1'>
            {data.map((program, index) => (
              <div className='col' key={index}>
                <div className='course-card'>
                  <div className='course-card-body'>
                    <div className='course-card-img'>
                      <img
                        src={require(`../../Assets/${program?.image}`)}
                        alt={program.name}
                        className="img-fluid"
                      />
                    </div>
                    <div className='course-content'>
                      <div class="course-reiew">
                        <div className='ratting'>
                          <span>
                            <i className="icofont-ui-rating"></i>
                            <i className="icofont-ui-rating"></i>
                            <i className="icofont-ui-rating"></i>
                            <i className="icofont-ui-rating"></i>
                            <i className="icofont-ui-rating"></i>
                          </span>
                        </div>
                        <div className='ratting-count'>
                          <h6 className='p-0 m-0'> 03 reviews</h6>
                        </div>
                      </div>
                      <div className='course-card-title'>
                        <h3 className='m-0 p-0'>{program.name}</h3>
                      </div>
                      <div class="course-footer">
                        <div class="course-btn">
                          <a class="lab-btn-text" onClick={() => navigate(`/program-details/${program?.id}`)}>Read More <i class="icofont-external-link"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>



      <div className="category-box-main section-padding">
        <div className='container'>
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12">
              <div className='tuition-main-heading'>
                <h4 className='p-0 m-0'>Tuition <span>Classes</span></h4>
              </div>
            </div>
          </div>

          <div className="row d-flex justify-content-center align-items-center">
            {tuition.map((item, index) => (
              <div className="col-md-6 col-sm-12 col-lg-4 col-xl-4" key={index}>
                <div className="category-item-box d-flex justify-content-center align-items-center flex-column">
                  <div className="category-item tuition-item">
                    <div className='tuition-item-content'>
                      <h2>{item.name}</h2>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
      <OurTeam />
      <Testimonials />
    </>
  )
}

export default Courses