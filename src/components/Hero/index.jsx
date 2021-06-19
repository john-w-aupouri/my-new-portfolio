import React, { useState } from 'react';
import { Button } from '../ButtonElements';
import {
  HeroContainer,
  HeroBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight
} from './HeroElements';

const Hero = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer>
      <HeroContent>
        <HeroH1>Kia ora world</HeroH1>
        <HeroP>My name is John Aupouri and I design difference</HeroP>
        <HeroBtnWrapper>
          <Button
            to='/signup'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary='true'
            dark='true'
            big='true'>
            Let's Talk {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
