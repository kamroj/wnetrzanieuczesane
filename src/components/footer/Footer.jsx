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
              <SocialIcon href="https://instagram.com" target="_blank" rel="noopener noreferrer">
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
                <li>Renowacja Pałacu Kultury</li>
                <li>Osiedle Zielone Wzgórze</li>
                <li>Centrum handlowe "Galeria Nowoczesna"</li>
              </FooterList>
            </FooterContent>
          </FooterItemContent>
        </FooterItemContainer>
        <FooterItemContainer>
          <FooterItemContent>
            <FooterHeader>Kontakt</FooterHeader>
            <FooterContent>
              <FooterParagraph>Tel: 880 171 161</FooterParagraph>
              <FooterParagraph>Email: kontakt@example.com</FooterParagraph>
              <FooterParagraph>Adres: ul. Kwiatowa 15, 00-001 Warszawa</FooterParagraph>
            </FooterContent>
          </FooterItemContent>
        </FooterItemContainer>
      </FooterContainer>
    </FooterWrapper>
  );
}