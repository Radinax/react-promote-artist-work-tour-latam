import { LazyLoadImage } from 'react-lazy-load-image-component';
import {
  Box, Link as RebassLink, Flex,
} from 'rebass';
import styled from 'styled-components';

export const Root = styled(Flex)`
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  max-width: 1440px;
  align-items: center;
`;

export const Card = styled(Box)`
  font-family: Fira Sans, sans-serif;
  color: white;
  /* overflow: hidden; */
  font-size: 12px;
`;

export const LinkWrapper = styled.a`
  background-color: transparent;
  color: white;
  display: block;
  text-decoration: none;
  position: relative;
  line-height: 0;
  max-width: 100px;
  width: auto;
`;
export const ExternalLinkWrapper = styled(RebassLink)`
  background-color: transparent;
  color: white;
  display: block;
  text-decoration: none;
  position: relative;
  line-height: 0;
  max-width: 100px;
  width: auto;
`;

export const ImgLogo = styled(LazyLoadImage)`
  display: inline-block;
  height: 30px;  
  max-width: 100%;
  
  
  &.square {
    height: 65px;
  }

  &.food {
    height: 38px;  
  }

  &.discovery {
    height: 85px;
  }

  &.turbo {
    height: 24px;
  }
`;
