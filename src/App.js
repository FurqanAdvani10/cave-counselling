import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Cloader, Footer, SubFooter } from './Component';
import Header from './Component/Navbar/Navbar';
import wtsp from './Assets/whatsapp.png'
import './App.css';

const Home = lazy(() => import('./Pages/Home'));
const Courses = lazy(() => import('./Pages/Courses/Courses'));
const ContactUs = lazy(() => import('./Pages/ContactUs/contactUs'));
const AboutUs = lazy(() => import('./Pages/AboutUs/AboutUs'));
const OurTeamPage = lazy(() => import('./Pages/ourTeam/OurTeam'));
const Details = lazy(() => import('./Pages/Details/Details'));


function App() {
  return (
    <div>
    <Header />
    <div style={{ height: '95px', padding: '0px' }}></div>
    <Suspense fallback={<Cloader />}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/contactUs' element={<ContactUs />} />
        <Route path='/ourTeam' element={<OurTeamPage />} />
        <Route path="/program-details/:id" element={<Details />} />
      </Routes>
    </Suspense>
    <SubFooter />
    <Footer />
    <div className='fixed-bottom right-100 p-4' style={{ zIndex: "6", left: "initial" }}>
      <a href='https://wa.me/923092626640?text=Hello I am interested in learning more about your coaching program. Could you please share more details on how I can join and what the course offers?' target='_blank'>
        <img src={wtsp} width="120" alt='Whatsapp' />
      </a>
    </div>
  </div>
  );
}

export default App;
