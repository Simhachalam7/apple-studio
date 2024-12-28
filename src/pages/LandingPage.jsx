import React, { useState } from 'react';
import { color, motion, useAnimation } from 'framer-motion';
import Header from '../components/Header'
import CollectionModal from '../components/CollectionModal';
import '../styles/LandingPage.css';
import { IoWatchOutline } from "react-icons/io5";
import { PiResizeLight } from "react-icons/pi";
import { CiBandage } from "react-icons/ci";
import watch from './watch.png';
import sideview from './sideview.png'

const LandingPage = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [isToggle, toggle] = useState(true);
  const [navToggle, setNavbar] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const controls = useAnimation();

  const handleGetStarted = () => {
    controls.start({
      y: '50vh',
      x: '-50%',
      scale: 1.5,
      transition: { duration: 1 }
    });
    setIsStarted(true);
    setNavbar(true)
  };

  const handleCollectionClick = () => { setShowModal(true); }; 
  const handleCloseModal = () => { setShowModal(false); };


  const image = isToggle ? watch : sideview;

  return (
    <div className="landing-page">
      <Header navToggle={navToggle} onCollectionClick={handleCollectionClick}/>
      <CollectionModal show={showModal} onClose={handleCloseModal} />
      {!isStarted && (
        <motion.div
          className="hero"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.5 }}
        >
          <p>Apple Watch Studio</p>
          <h1 className="main-heading">
            Choose a case. <br /> Pick a band. <br /> Create your own style.
          </h1>
          <button className="cta-button" onClick={handleGetStarted}>
            Get Started
          </button>
          <motion.img
            src={watch}
            alt="Apple Watch"
            className="landing-page-img"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
          />
        </motion.div>
      )}
      {isStarted && (
        <motion.div
          className="product-details"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
        >
          <div className='cus-img-con'>
            <div>
          <img
            src= {image}
            alt="Apple Watch"
            className="landing-page-img2"
          />
          </div>
          <p className='watch-view' onClick={() => toggle(!isToggle)}>{isToggle? 'side view' : 'front view'}</p>
          </div>
          <p style={{color:'#6e6e73',size:'8px'}}>APPLE WATCH SERIES 10</p>
          <p style={{color:'#1d1d1f',size:'12px',fontWeight:'600'}}>46mm Jet Black Aluminum Case with Black Solo Loop</p>
          <p style={{color:'#1d1d1f',size:'10px'}}>From $429</p>
          <div className="customization-options">
            <button><PiResizeLight /> Size</button>
            <button><IoWatchOutline /> Case</button>
            <button><CiBandage/> Band</button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default LandingPage;
