import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi There ! <br />
          I'm Ahad Khan
        </SectionTitle>
        <SectionText>
          
        <p>welcome to my personal Portfolio ! </p>
         
        </SectionText>
        <Button onClick={()=> window.location ='https://drive.google.com/file/d/1DMUyOZuyCzdk-LB5kzRz6_5gKQq5C-qC/view?usp=sharing'}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;