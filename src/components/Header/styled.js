import styled from 'styled-components';
import {
  Button as ButtonBase, Flex, Box, Image, Link,
} from 'rebass';

export const Wrapper = styled(Box)`
  background-color: #F24B0E;
`;

export const MainLink = styled(Link)`
  // padding-left: 16px;
  height: 24px;
  @media (max-width: 768px) {
    // padding-left: 24px;
  }
  @media (max-width: 640px) {
    width: 123.69px;
  }
`;

export const CustomBox = styled(Box)`
  max-width: 1440px;
  margin: 0 auto;
  padding-right: 96px;
  padding-left: 96px;
  @media (max-width: 1024px) {
    padding-left: 67px;
  }
  @media (max-width: 768px) {
    padding: 0 18px;
  }
`;

export const BoxChannel = styled(Box)`
  display: flex;
  align-items: center;
  width: 236px;
  // display: ${props => props.innerWidth < 639 ? 'none' : 'box'};
`;

export const WrapperSearch = styled(Box)`
  align-items: center;
  display: flex;
  height: 56px;
  overflow: hidden;
  overflow-y: auto;
  position: absolute;
  right: 0;
  top: 0;
  width: 0;
  transition: all 0.5s;
  &.opened{
    right: 0%;
    width: 100%;
  }
`;

export const MainLogo = styled(Image)`
  filter: grayscale(100%) brightness(200%);
  height: 24px;
  width: auto;
  margin-left: 16px;
  @media (max-width: 640px) {
    width: fit-content;
  }
`;

export const ImageChannel = styled(Image)`
  height: 24px;
`;

export const Root = styled(Flex)`
  max-width: 1440px;
  min-height: 56px;
  padding-top: 10px;
  padding-bottom: 10px;
  position: relative;

  &.opened {
    flex-direction: row-reverse;
    
  }
`;

export const Input = styled.input`
  font-family: Fira Sans, sans-serif;
  width: 100%;
  border: 0;
  border-bottom: 1px solid white;
  text-align: center;
  background-color: transparent;
  text-align: left;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: white;
  
  &:focus {
    outline: 0;
  }
  &::-webkit-input-placeholder {
    color: #d2d2d2;
  }
  &::-moz-placeholder {
    color: #d2d2d2;
  }
  &:-ms-input-placeholder {
    color: #d2d2d2;
  }
  &:-moz-placeholder {
    color: #d2d2d2;
  }
`;

export const Button = styled(ButtonBase)`
  background-color: transparent;
  padding: 0;
  cursor: pointer;
  &:focus {
    outline: 0;
  }
`;

export const LogoBox = styled(Box)`
  position: relative;
  display: inline-block;
  padding-left: 16px;
  margin-left: ${props => props.country === 'brazil' ? 24 : 16}px;
  height: 24px;
  @media (max-width: 768px) {
    margin-left: 32px;
  }
  
  &:before {
    content: '';
    border-right: 1px solid white;
    position: absolute;
    left: 0;
    height: 24px;
    top: 0;
  }
`;
