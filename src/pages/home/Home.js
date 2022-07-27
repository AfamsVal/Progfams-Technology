import React from "react";
import BlogSection from "./BlogSection";
import CardSection from "./CardSection";
import HeroSection from "./HeroSection";
import Partners from "./Partners";

const Home = () => {
  return <div className="containter-fluid "style={{paddingTop:"70px", backgroundColor: "#0E1924",paddingBottom:"120px"}}>
    
   <HeroSection/>
   <CardSection/>
   <Partners/>
   <BlogSection/>
    </div>;
};

export default Home;
