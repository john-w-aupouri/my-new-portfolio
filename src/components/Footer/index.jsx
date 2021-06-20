import React from 'react'
import {IconContext} from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll'

import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa'
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink,
  WebsiteRights
} from './FooterElements'

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop()
  }
  return (
    <IconContext.Provider value={{ color: '#fff'}}>
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>

            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to="/login">How it works</FooterLink>
                <FooterLink to="/login">Testimonials</FooterLink>
                <FooterLink to="/login">Careers</FooterLink>
                <FooterLink to="/login">Investors</FooterLink>
                <FooterLink to="/login">Terms of service</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Contact Us</FooterLinkTitle>
                <FooterLink to="/login">Contact</FooterLink>
                <FooterLink to="/login">Support</FooterLink>
                <FooterLink to="/login">Destinations</FooterLink>
                <FooterLink to="/login">Sponsorship</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>

            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>Videos</FooterLinkTitle>
                <FooterLink to="/login">Submit Videos</FooterLink>
                <FooterLink to="/login">Ambassadors</FooterLink>
                <FooterLink to="/login">Agency</FooterLink>
                <FooterLink to="/login">Influencer</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Social Media</FooterLinkTitle>
                <FooterLink to="/login">Instagram</FooterLink>
                <FooterLink to="/login">Facebook</FooterLink>
                <FooterLink to="/login">Youtube</FooterLink>
                <FooterLink to="/login">Twitter</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>

          </FooterLinksContainer>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to='/' onClick={toggleHome}>
                $$$
              </SocialLogo>
              <WebsiteRights> ©{new Date().getFullYear()} All rights reserved.</WebsiteRights>
              <SocialIcons>
                <SocialIconLink href='/' target='_blank' aria-label="Facebook">
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink href='/' target='_blank' aria-label="Instagram">
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink href='/' target='_blank' aria-label="Youtube">
                  <FaYoutube />
                </SocialIconLink>
                <SocialIconLink href='/' target='_blank' aria-label="Twitter">
                  <FaTwitter />
                </SocialIconLink>
                <SocialIconLink href='/' target='_blank' aria-label="Linkedin">
                  <FaLinkedin />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </IconContext.Provider>
  )
}

export default Footer
