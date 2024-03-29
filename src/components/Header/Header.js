import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href='/'>
        <a style={{ display: "flex" , alignItems: "center" , color:"white" , marginBottom:"20px" }}>
           <DiCssdeck  sixe="3 rem" /> <Span>Ahad khan</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
        <SocialIcons href="https://github.com/ahadkhan9991/">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/ahad-khan-993726193">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.instagram.com/ahadkhan_/">
          <AiFillInstagram size="3rem"/>
        </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
