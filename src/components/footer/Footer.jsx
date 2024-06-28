import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
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
  FooterParagraph
} from "./Footer.styles";

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterItemContainer>
          <FooterItemContent>
            <FooterHeader>Media</FooterHeader>
            <SocialIconsContainer>
              <SocialIcon href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </SocialIcon>
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
                <li>Projekt 1 - nazwa projektu</li>
                <li>Projekt 2 - nazwa projektu</li>
                <li>Projekt 3 - nazwa projektu"</li>
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
              <FooterParagraph>Adres: ul. Kwiatowa 15, 00-001 Warszawa</FooterParagraph>
            </FooterContent>
          </FooterItemContent>
        </FooterItemContainer>
      </FooterContainer>
    </FooterWrapper>
  );
}