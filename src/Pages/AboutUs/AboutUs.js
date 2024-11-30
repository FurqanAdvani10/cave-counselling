import { Achieve, CAboutUs, Features, FounderComponent, Gallery, OurTeam, PageWrapper, Testimonials } from '../../Component'
import { useNavigate } from 'react-router-dom'
import director from '../../Assets/FTYbBM.png'
import './aboutUs.css'

function AboutUs() {

    const navigate = useNavigate()

    return (
        <>
            <PageWrapper
                title={"About Our Sunlight Tuition"}
                moveTo={"Home"}
                navigatePath={'/'}
                subtitle={"About Us"}
            />

            <div className='about-us-msg section-padding'>
                <div className='container'>
                    <div className='row d-flex justify-content-center align-items-center'>

                        <div className='col-md-6 col-sm-12 col-lg-6 col-xl-6'>
                            <div className='msg-container'>
                                <div className='msg-heading heading-with-sub'>
                                    <h3 className="p-0 m-0">Message from the Director</h3>
                                    <h6 className="p-0 m-0">Dear Students and Parents</h6>
                                </div>
                                <div className='msg-content'>
                                    <p>At Sunlight Tuition and Language Center, we believe in the power of education to transform lives. Since our inception in 2010, our focus has been on providing students with the tools and guidance necessary to achieve their academic goals and realize their full potential.</p>
                                    <p>Our approach is centered around individualized attention, as we understand that every student has unique strengths and challenges. By offering a supportive and nurturing environment, we aim to inspire confidence, encourage curiosity, and foster a love for learning in each of our students.</p>
                                    <p>As an educator, it is my mission to ensure that Sunlight Tuition and Language Center continues to serve as a place where students not only succeed academically but also grow as individuals. We are committed to helping them navigate their educational journeys and prepare for the opportunities and challenges that lie ahead.</p>
                                    <p>I extend my heartfelt thanks to the parents for entrusting us with their children's education and to the students for their dedication and hard work. Together, we will continue to strive for excellence.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 col-sm-12 col-lg-6 col-xl-6'>
                            <div className='msg-img-container d-flex justify-content-center align-items-center flex-column'>
                                <div className='msg-img'></div>
                                <div className='msg-img-content'>
                                    <h6>Sir Abdul Wahab</h6>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FounderComponent />
            <CAboutUs />

            <Gallery />
            <Features />
            <Achieve />
            <Testimonials />
            <OurTeam />
        </>

    )
}

export default AboutUs