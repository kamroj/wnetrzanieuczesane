// src/components/footer/Footer.jsx
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { FaInstagram } from "react-icons/fa";
import sanityClient from '../../SanityClient';
import {
  FooterWrapper,
  FooterContainer,
  FooterItemContainer,
  FooterItemContent,
  FooterHeader,
  FooterContent,
  SocialIconsContainer,
  SocialIcon,
  FooterList,
  FooterParagraph,
  LatestProjectLink
} from "./Footer.styles";

function Footer() {
  const { data: latestProjects } = useQuery({
    queryKey: ["latestProjects"],
    queryFn: () => sanityClient.fetch(`
      *[_type == "portfolio"] | order(createdAt desc)[0...3] {
        title,
        slug,
        createdAt
      }
    `),
  });

  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterItemContainer>
          <FooterItemContent>
            <FooterHeader>Media</FooterHeader>
            <SocialIconsContainer>
              <SocialIcon href="https://www.instagram.com/wnetrza_nieuczesane/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </SocialIcon>
            </SocialIconsContainer>
          </FooterItemContent>
        </FooterItemContainer>
        <FooterItemContainer>
          <FooterItemContent>
            <FooterHeader>Ostatnie projekty</FooterHeader>
            <FooterContent>
              <FooterList>
                {latestProjects && latestProjects.map((project) => (
                  <li key={project.slug.current}>
                    <LatestProjectLink to={`/portfolio/${project.slug.current}`}>
                      {project.title}
                    </LatestProjectLink>
                  </li>
                ))}
              </FooterList>
            </FooterContent>
          </FooterItemContent>
        </FooterItemContainer>
        <FooterItemContainer>
          <FooterItemContent>
            <FooterHeader>Kontakt</FooterHeader>
            <FooterContent>
              <FooterParagraph>Tel: +48 668 108 426</FooterParagraph>
              <FooterParagraph>Email: kontakt@wnetrzanieuczesane.pl</FooterParagraph>
            </FooterContent>
          </FooterItemContent>
        </FooterItemContainer>
      </FooterContainer>
    </FooterWrapper>
  );
}

export default Footer;