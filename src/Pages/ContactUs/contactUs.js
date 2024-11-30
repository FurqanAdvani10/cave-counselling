import React from 'react';
import './contactUs.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGlobe } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { Formik, useFormik } from 'formik';
import { PageWrapper } from '../../Component';



const ContactUs = () => {

  const center = [24.8505366, 66.9950476]; // Latitude, Longitude

  const navigate = useNavigate()

  const infoCards = [
    { title: "Head Office", address: "Shop No. 3 & 4 Iqbal Plaza, Opposite Saylani Welfare,Near Saleh Ration Shop,Kharadar,Karachi.​", icon: <FaMapMarkerAlt /> },
    { title: "Phone Number", address: "0309 2626640", icon: <FaPhoneAlt /> },
    { title: "Send Email", address: "info@slcedu.com", icon: <FaEnvelope /> },
    { title: "Our Website", address: "www.stlcedu.com", icon: <FaGlobe /> },
  ];

  const initialValues = {
    name: "",
    lastname: "",
    email: "",
    message: "",
    country: "",
    interest: ""
  };

  const { values, errors, touched, handleChange, handleSubmit, setFieldTouched } = useFormik({
    initialValues: initialValues,
    // validationSchema: InquirySchema,
    country: '',
    onSubmit: (values, action) => {

      const emailBody = `
          Name: ${values.name} ${values.lastname}
          Email: ${values.email}
          Country: ${values.country}
          Interest: ${values.interest}
          Message: ${values.message}
  `;

      const mailtoLink = `mailto:info@slcedu.com?subject=Inquiry&body=${encodeURIComponent(emailBody)}`;

      window.location.href = mailtoLink;

      action.resetForm()
    },
  });
  return (
    <>

      <PageWrapper
        title={"Get In Touch With Us"}
        moveTo={"Home"}
        navigatePath={'/'}
        subtitle={"Contact Us"}
      />

      <div className="contact-us section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-xl-12 col-lg-12 col-sm-12">
              <div className="contact-us-heading heading-with-sub">
                <h6 className="p-0 m-0">Get in Touch with Us</h6>
                <h3 className="p-0 m-0">We're Always Eager To Hear From You!</h3>
              </div>
            </div>
          </div>

          <div className="contact-container">
            <div className="row">
              <div className="col-md-6 col-xl-8 col-lg-8 col-sm-12">
                <div className="map-section">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28951.33051514298!2d66.990182!3d24.8505366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb315f93b233de1%3A0x12b6fb4eaf403045!2sSunlight%20Tuition%20And%20Language%20Center%20(Est.2010)!5e0!3m2!1sen!2s!4v1699986456985!5m2!1sen!2s"
                    style={{
                      border: "0",
                      width: "100%", // Make the width responsive
                      height: "400px", // Fixed height
                    }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  >
                  </iframe>
                </div>
              </div>
              <div className="col-md-6 col-xl-4 col-lg-4 col-sm-12">
                <div className="info-cards-container">
                  <div className="info-cards">
                    {infoCards.map((card, index) => (
                      <div className="info-card" key={index}>
                        <div className="info-card-icon">
                          {card.icon}
                        </div>
                        <div className="info-card-content">
                          <h4>{card.title}</h4>
                          <p>{card.address}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='contact-us-form section-padding'>
        <div className='container'>
          <div className="row">
            <div className="col-md-12">
              <div className="contact-us-form-heading heading-with-sub">
                <h6 className="p-0 m-0">Get in touch with Contact us</h6>
                <h3 className="p-0 m-0">Fill The Form Below So We Can Get To Know You And Your Needs Better.</h3>
              </div>
            </div>
          </div>
          <div className='contact-us-form-container'>
            <div className="row align-items-center justify-content-center">
              <div className="col-md-12 col-sm-12 col-xl-8 col-lg-8">
                <div class="col-md-12">
                  <div class="row">

                    <div class="fst-lst col-md-6 col-12">
                      <input type="name"
                        name='name'
                        class="form-control"
                        id="John"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={() => setFieldTouched('name', true, true)}
                        placeholder="Your Name *" />
                      {errors.name && touched.name ? (
                        <p className="p_msg">
                          {errors.name}
                        </p>
                      ) : null}
                    </div>
                    <div class="col-6 col-md-6 col-12 email">
                      <input
                        type="name"

                        name='email'
                        value={values.email}
                        onChange={handleChange}
                        onBlur={() => setFieldTouched('email', true, true)}
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Your Email *" />
                      {errors.email && touched.email ? (
                        <p className="p_msg">
                          {errors.email}
                        </p>
                      ) : null}
                    </div>
                  </div>
                </div>

                <div class="col-md-12">
                  <div class="row">
                    <div class="fst-lst col-md-6 col-12">
                      <input
                        value={values.phone}
                        onChange={handleChange}
                        onBlur={() => setFieldTouched('phone', true, true)}
                        name='phone'
                        type="phone"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Phone Number *" />
                      {errors.phone && touched.phone ? (
                        <p className='p_msg'>{errors.phone}</p>
                      ) : null}
                    </div>
                    <div class="col-6 col-md-6 col-12 email">
                      <input
                        value={values.subject}
                        onChange={handleChange}
                        onBlur={() => setFieldTouched('email', true, true)}
                        name='subject'
                        type="text"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Your Subject *" />
                      {errors.email && touched.email ? (
                        <p className='p_msg'>{errors.email}</p>
                      ) : null}

                    </div>
                  </div>
                </div>


                <div class="text-section">
                  <textarea class="form-control"
                    name='message'
                    value={values.message}
                    onChange={handleChange}
                    onBlur={() => setFieldTouched('message', true, true)}
                    placeholder="Your Message"
                    id="exampleFormControlTextarea1" rows="8"></textarea>
                  {errors.message && touched.message ? (
                    <p className='p_msg msg'>
                      {errors.message}
                    </p>
                  ) : null}

                </div>
                <div class="contact-btn ">
                  {/* <button type="submit" onClick={handleSubmit}>Submit</button> */}
                  <button type="Submit" onClick={handleSubmit}>Send Your Message</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
};

export default ContactUs;
