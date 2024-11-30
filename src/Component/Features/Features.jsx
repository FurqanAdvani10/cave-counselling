import './features.css'
import icon1 from '../../Assets/icon1.jpg'
import icon2 from '../../Assets/icon2.jpg'
import icon3 from '../../Assets/icon3.jpg'
import features from '../../Assets/features.png'

const Features = () => {
    return (
        <div className="features-main section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12 col-lg-6 col-xl-6">
                        <div className="features-img-container">
                            <img src={features} alt='' />
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 col-lg-6 col-xl-6">
                        <div className="features-content-container">
                            <div className="features-content-heading heading-with-sub">
                                <h6 className="p-0 m-0">Features</h6>
                                <h3 className="p-0 m-0">Good Qualification Services And Better Skills</h3>
                            </div>
                            <div className="features-content">
                                <p className="p-0 m-0">Our courses are designed to provide personalized coaching from experienced instructors, ensuring you receive the guidance you need to excel in your studies and achieve your goals.</p>
                                <div className="features-item-container">
                                    <div className="features-item-with-icon">
                                        <div className="features-item-icon">
                                            <img src={icon1} alt="" />
                                        </div>
                                        <div className="features-item">
                                            <h5 className="p-0 m-0">Skilled Instructors</h5>
                                            <p className="p-0 m-0">Distinctively provide acces mutfuncto users whereas communicate leveraged services</p>
                                        </div>
                                    </div>
                                    <div className="features-item-with-icon">
                                        <div className="features-item-icon">
                                            <img src={icon2} alt="" />
                                        </div>
                                        <div className="features-item">
                                            <h5 className="p-0 m-0">Get Certificate</h5>
                                            <p className="p-0 m-0">Distinctively provide acces mutfuncto users whereas communicate leveraged services</p>
                                        </div>
                                    </div>
                                    <div className="features-item-with-icon">
                                        <div className="features-item-icon">
                                            <img src={icon3} alt="" />
                                        </div>
                                        <div className="features-item">
                                            <h5 className="p-0 m-0">Online Classes</h5>
                                            <p className="p-0 m-0">Distinctively provide acces mutfuncto users whereas communicate leveraged services</p>
                                        </div>
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

export default Features
