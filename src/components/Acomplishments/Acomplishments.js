import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 20, text: 'Trained New Assotiated In my currect organization'},
  { number: 1000, text: 'Awarded Tcs Gems For Employee of the month', },
  { number: 1900, text: 'Won District level Football Tournament ', },
  { number: 5000, text: 'Completed Az-900 learning path (LinkedIn)', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
