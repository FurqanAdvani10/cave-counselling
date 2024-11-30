import './achieve.css'
import cardimg from '../../Assets/cardimg.png'
import data from './data.json';

const Achieve = () => {
    return (
        <div className='achieve-main section-padding'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12">
                        <div className="achieve-heading heading-with-sub">
                            <h6 className="p-0 m-0">START TO SUCCESS</h6>
                            <h3 className="p-0 m-0">Achieve Your Goals With <span>SunLight Tuition</span></h3>
                        </div>
                    </div>
                </div>
                <div className="achieve-container">
                    <div className="row d-flex justify-content-center align-items-center">
                        {data.map((item, index) => (
                            <div className="col-md-6 col-sm-12 col-lg-4 col-xl-4" key={index}>
                                <div className="achieve-item-box d-flex justify-content-center align-items-center flex-column">
                                    <div className="achieve-item-icon">
                                        <i className={`fa ${item.icon}`}></i>
                                    </div>
                                    <div className="achieve-item">
                                        <h2>{item.count}</h2>
                                        <p>{item.title}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="achieve-cards">
                    <div className="row g-4 row-cols-1 row-cols-lg-2 d-flex justify-content-center align-items-center">
                        <div className="col">
                            <div className="achieve-card-box d-flex justify-content-center align-items-start flex-column">
                                <div className="achieve-card">
                                    <div className="achieve-card-content">
                                        <h5 className="p-0 m-0">If You Join Our Course</h5>
                                        <p className="p-0 m-0">Seamlessly engage technically sound <br />coaborative reintermed goal oriented <br />content rather than ethica</p>
                                    </div>
                                    <div className="achieve-btn join">
                                        <button>Register For Free</button>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="achieve-card-box d-flex justify-content-center align-items-start flex-column">
                                <div className="achieve-card">
                                    <div className="achieve-card-content">
                                        <h5 className="p-0 m-0">Start Teaching Today</h5>
                                        <p className="p-0 m-0">Seamlessly engage technically sound <br />coaborative reintermed goal oriented <br />content rather than ethica</p>
                                    </div>
                                    <div className="achieve-btn teaching">
                                        <button>Become A Instructor </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Achieve
