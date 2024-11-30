import './hero.css'
import hero from '../../Assets/01.png'

const HeroSection = () => {
    return (
        <div className='hero-main'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 col-sm-12 col-lg-6 col-xl-6">
                        <div className="hero-content">
                            <div className="hero-content-heading">
                                <h4 className='p-0 m-0'>Online education</h4>
                                <h1 className='p-0 m-0'>Learn The Skills You Need To Succeed</h1>
                            </div>
                            <p className='p-0 m-0'>At Sunlight, we illuminate the path to academic and linguistic success. Our dedicated team of experienced educators is passionate about fostering a love for learning and empowering students to reach their full potential.</p>
                            <div className="hero-content-btn">
                                <button>REGISTER NOW</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 col-lg-6 col-xl-6">
                        <div className="hero-img-container">
                            <img src={hero} alt="" />
                        </div>
                        {/* <div className="all-shapes"></div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
