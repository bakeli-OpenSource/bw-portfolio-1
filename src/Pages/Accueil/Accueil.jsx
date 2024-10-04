import React from "react";
import Banniere from "../../Components/Banniere/Banniere";
import CardInfo from "../../Components/Banniere/CardInfo";
import CardTestimonial from "../../Components/Banniere/CardTestimonial";
import Input from "../../Components/Banniere/Input";
import Footer from "../../Components/Banniere/Footer";

function Accueil() {
  return <div>
    <Banniere/>
    <CardInfo/>
    <CardTestimonial/>
    <Input/>
    <Footer/>
  </div>;
}

export default Accueil;
