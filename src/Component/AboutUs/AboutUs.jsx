import aboutImg from '../../Assets/aboutus1.jpg'
import './aboutus.css'


const CAboutUs = () => {
  return (
    <div className='about-us-main section-padding'>
        <div className="container">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-6 col-sm-12 col-xl-6 col-lg-12">
                    <div className="aboutus-img-container">
                            <img src={aboutImg} alt="" />
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 col-xl-6 col-lg-12">
                    <div className="aboutus-content-container ">
                        <div className="aboutus-heading heading-with-sub">
                        <h6 className='p-0 m-0'>About Our STLCEDU</h6>
                        <h3 className='p-0 m-0'>A Decade of Academic Growth</h3>
                        </div>
                        <div className="aboutus-para">
                            <p>Sunlight Tuition and Language Center opened its doors on 15th September 2010, with a commitment to nurturing academic excellence and empowering students with the skills they need to thrive in an ever-evolving world. Founded with the vision of creating an inclusive and supportive learning environment, the center started as a small initiative, offering personalized coaching to students from various academic backgrounds.</p>
                            <p>Over the years, Sunlight Tuition has grown into a trusted educational institution, known for its dedicated faculty, innovative teaching methods, and a track record of academic success. Our growth reflects our unwavering focus on quality education and our passion for inspiring students to unlock their potential. From early grades to higher-level courses, we have continuously expanded our offerings to meet the evolving needs of our students.</p>
                            <p>Today, Sunlight Tuition and Language Center stands as a beacon of learning, proudly supporting students across Karachi and beyond, with both in-person and online education options.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CAboutUs
