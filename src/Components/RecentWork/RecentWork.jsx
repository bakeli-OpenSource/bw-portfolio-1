import React from "react";
import CardInfo from "../Banniere/CardInfo";
import { ContainerParent, ImgRecentWork,
    ContainPaddingT
 } from "../../Style/styleAccueil";
import Card from "../Banniere/Card";
import Slider from "react-slick";
import { TestimonialsData } from "../../data/banniere";

function RecentWork() {
    let settings = {
        dots: false,
        infinite: false,
        // speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
      };

    return <ContainerParent>
    <CardInfo titre={"Recent Work"} 
    description={"Solving user & business problems since last 15+ years.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
    />
    <ContainPaddingT>
    <Slider {...settings}>
        {
          TestimonialsData.map((item,index)=>{
            return(
                <Card margin titre={item?.title} key={index}
                description={item?.description}
                nameButton={item?.nameButton}
                >
                <ImgRecentWork src={item?.image} alt="Une image" />
                </Card>
            )
          })
        }
      </Slider>
    </ContainPaddingT>
</ContainerParent>;
}

export default RecentWork;
