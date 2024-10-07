import React from "react";
import CardInfo from "../Banniere/CardInfo";
import { ContainElements, ContainerParent, Img,
    ContainPaddingT
 } from "../../Style/styleAccueil";
import Card from "../Banniere/Card";
import Fintech from "../../assets/Images/fintech.png"
import Edtech from "../../assets/Images/edtech.png"
import Pharma from "../../assets/Images/pharma.png"
import Tag from "../Banniere/Tag"

function CaseStudies() {
  return <ContainerParent>
        <CardInfo titre={"Case Studies"} 
        description={"Solving user & business problems since last 15+ years.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
        />
        <ContainPaddingT>
        <ContainElements>
            <Card titre={"Work name here"}
            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna."}
            nameButton={"View case study"} bgColor={"#FFA217"}
            >
                <Tag name={"Fintech"} bgTag="#FFF6E9" colorTag="#FFA217"/>
            </Card>
            <Img src={Fintech} alt="Une image" />
        </ContainElements>
        </ContainPaddingT>
        <ContainPaddingT>
        <ContainElements>
            <Img src={Edtech} alt="Une image" />
            <Card titre={"Work name here"}
            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna."}
            nameButton={"View case study"} bgColor={"#000AFF"}
            >
                <Tag name={"EdTech"} bgTag="#D0E6FF" colorTag="#000AFF"/>
            </Card>
        </ContainElements>
        </ContainPaddingT>
        <ContainPaddingT>
        <ContainElements>
            <Card titre={"Work name here"}
            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna."}
            nameButton={"View case study"} bgColor={"#2AB090"}
            >
                <Tag name={"Pharma"} bgTag="#E0FFF8" colorTag="#2AB090"/>
            </Card>
            <Img src={Pharma} alt="Une image" />
        </ContainElements>
        </ContainPaddingT>
    </ContainerParent>;
}

export default CaseStudies;
