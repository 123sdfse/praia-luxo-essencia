
import React, { useEffect } from "react";
import IntroSlider from "@/components/IntroSlider";

const Intro = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return <IntroSlider />;
};

export default Intro;
