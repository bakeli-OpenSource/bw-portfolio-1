import React from 'react';
import Banniere from '../../Components/Banniere/Banniere';
import Footer from '../../Components/Banniere/Footer';
import CaseStudies from '../../Components/CaseStudies/CaseStudies';
import Testimonial from '../../Components/Testimonial/Testimonial';
import RecentWork from '../../Components/RecentWork/RecentWork';
import GetInTouch from '../../Components/GetInTouch/GetInTouch';

function Accueil() {
  return (
    <div>
      <div id="home">
        <Banniere />
      </div>
      <div id="caseStudies">
        <CaseStudies />
      </div>
      <div id="testimonial">
        <Testimonial />
      </div>
      <div id="recentwork">
        <RecentWork />
      </div>
      <div id="getInTouch">
        <GetInTouch />
      </div>
      <Footer />
    </div>
  );
}

export default Accueil;
