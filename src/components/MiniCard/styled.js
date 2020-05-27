import { LazyLoadImage } from 'react-lazy-load-image-component';
import styled from 'styled-components';
import {
  Box, Heading, Flex, Link as RebassLink,
} from 'rebass';
import Back from '../../assets/icons/back.svg';

export const EffectBox = styled(Box)`
  position: relative;
  margin: 8px 4px;
  transition: all .2s ease-out;

  @media (min-width: 1024px) {
    &:hover {
      transform: scale(1.02) perspective(1px) translateZ(0);
      -webkit-font-smoothing: subpixel-antialiased;
    }
  }
`;
export const Card = styled(Box)`
  font-family: Fira Sans, sans-serif;
  font-weight: 600;
  height: 155px;
  position: relative;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  perspective: 1000px;
  &.flipped {
    transform: rotateY(180deg);
  }

  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
    &.flipped {
      transform: rotateY(0deg);
    }
  }
`;
const Wrapper = styled(Flex)`
  backface-visibility: hidden;
  transform-origin: center;
  height: 100%;
  padding-left: 4px;
  padding-right: 4px;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;
export const WrapperFront = styled(Wrapper)`
  background: #ececec;
  border-radius: 8px;
  overflow: hidden;
  transform: rotateY(0deg);
  transition: transform .2s ease-out;
  z-index: 2;

  @media (min-width: 1024px) {
    &:hover {
      background:white;
      box-shadow: 0 6px 6px 0 rgba(0,0,0,0.20), 0 10px 20px 0 rgba(0,0,0,0.13);
      transform: scale(1);
    }
  }

  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {

    &.flipped {
      display: none;
    }
  }
  
`;
export const WrapperBack = styled(Wrapper)`
  background: #0F0F84;
  border-radius: 8px;
  overflow: hidden;
  transform: rotateY(180deg);

  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
    display: none;
    transform: rotateY(0deg);

    &.flipped {
      display: block;
    }
  }
  &.discoveryhh {
    background: #F24B0E;
  }
  &.discovery {
    background: #0F0F84;
  }
  &.tlc {
    background: #EB122B;
  }
  &.kids {
    background: #03B795;
  }
  &.animalPlanet {
    background: #0073FF;
  }
  &.turbo {
    background: #CE001E;
  }
  &.discoveryScience {
    background: #151515;
  }
  &.discoveryCivilization {
    background: #FE9123;
  }
  &.discoveryTheater {
    background: #0099CC;
  }
  &.discoveryWorld {
    background: #0AEAAA;
  }
  &.id {
    background: #353535;
  }
  &.food {
    background: #C5093D;
  }
  &.hgtv {
    background: #11adc4;
  }

  @media (min-width: 1024px) {
    &:hover {
      box-shadow: 0 6px 6px 0 rgba(0,0,0,0.20), 0 10px 20px 0 rgba(0,0,0,0.13);
    }
  }
`;

export const LinkWrapper = styled.a`
  color: #001534;
  display: block;
  text-decoration: none;
`;

export const ExternalLinkWrapper = styled(RebassLink)`
  color: #001534;
  display: block;
  text-decoration: none;
`;

const BaseButton = styled.button`
  align-self: flex-end;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  &:focus {
    outline: none;
  }
`;
export const LinkOptions = styled(BaseButton)`
  color: #d2d2d2;
  font-size: 21px;
  font-weight: bold;
  transform: rotate(-90deg);
  width: 24px;
`;
export const LinkBack = styled(BaseButton)`
  background: url(${Back}) no-repeat;
  background-size: cover;
  filter: invert(100%);
  height: 20px;
  width: 20px;
`;
export const ImgWrapper = styled(Flex)`
  background: #0F0F84;
  border-radius: 50%;
  height: 72px;
  width: 72px;
  &.discoveryhh {
    background: #F24B0E;
  }
  &.discovery {
    background: #0F0F84;
  }
  &.tlc {
    background: #EB122B;
  }
  &.kids {
    background: #03B795;
  }
  &.animalPlanet {
    background: #0073FF;
  }
  &.turbo {
    background: #CE001E;
  }
  &.discoveryScience {
    background: #151515;
  }
  &.discoveryCivilization {
    background: #FE9123;
  }
  &.discoveryTheater {
    background: #0099CC;
  }
  &.discoveryWorld {
    background: #0AEAAA;
  }
  &.id {
    background: #353535;
  }
  &.food {
    background: #C5093D;
  }
  &.hgtv {
    background: #11adc4;
  }
`;

export const ImgLogo = styled(LazyLoadImage)`
  display: block;
  height: auto;
  width: 72px;
`;
export const TextNav = styled(Heading)`
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  text-align: center;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

export const OptionLink = styled.a`
  background: white;
  border-radius: 8px;
  cursor: pointer;
  flex-align: baseline;
  color: #001534;
  font-size: 11px;
  line-height: 21px;
  padding: 9px;
  margin: 6px 9px;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;

  @media (max-width: 414px) {
    margin-left: 0;
    margin-right: 0;
  }
`;
export const OptionButton = styled(Box)`
  background: white;
  border-radius: 8px;
  cursor: pointer;
  flex-align: baseline;
  color: #001534;
  font-size: 11px;
  line-height: 21px;
  padding-left: 4px;
  padding-right: 4px;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;

  @media (max-width: 414px) {
    margin-left: 0;
    margin-right: 0;
  }
`;
