import { Box, Flex, Image, Link } from 'rebass';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Root = styled(Flex)`
  background-color: #F24B0E;
  font-family: Fira Sans, sans-serif;
  margin: 0 auto;
  overflow: hidden;
  max-height: auto;
  text-align: center;
  width: 100%;
  @media (max-width: 414px) {
    margin-bottom: 34px;
  }
`;

export const Card = styled(Box)`
  font-family: Fira Sans, sans-serif;
  overflow: hidden;
  color: white;
  font-size: 12px;
  margin: 0 auto;
  text-align: center;
  justify-content: center;
  max-width: 1440px;
`;

export const LinkWrapper = styled.a`
  background-color: transparent;
  color: white;
  display: block;
  text-decoration: none;
  position: relative;
`;

export const ImgLogo = styled(Image)`
  display: inline-block;
  max-width: 100%;
  height: 35px;
  filter: grayscale(100%) brightness(200%);
`;

export const TermsLink = styled(Link)`
  display: inline-block;
  color: white;
  font-size: 12px;
  text-decoration: none;
  text-transform: uppercase;

  &:not(:last-child):after {
    content: "/";
    margin-right: 5px;
    margin-left: 5px;
  }
`;
