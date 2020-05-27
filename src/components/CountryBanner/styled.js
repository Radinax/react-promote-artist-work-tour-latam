import styled from 'styled-components';
import { Flex, Text, Button } from 'rebass';

export const Container = styled(Flex)`
  margin-top: 24px;
  margin-right: 0px;
  margin-bottom: 0px;
  justify-content: center;
  display: ${props => (props.closeBanner ? 'none' : 'flex')};
  @media (max-width: 1920px) {
    margin-left: 330px;
  }
  @media (max-width: 1800px) {
    margin-left: 260px;
  }
  /*
  @media (max-width: 1680px) {
    margin-left: 215px;
  }
  @media (max-width: 1600px) {
    margin-left: 172px;
  }
  */
  @media (max-width: 1440px) {
    margin: 24px 0px 0px 90px;
  }
  @media (max-width: 768px) {
    margin: 24px 8px 0px 9px;
  }
  @media (max-width: 330px) {
    margin: 24px 0px 0px 0px;
  }
`;

export const WhiteBanner = styled(Flex)`
  width: 100%;
  transition: all .3s ease-in-out;
  overflow: hidden;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: white;
  @media (max-width: 1920px) {
    max-width: ${props => props.innerWidth*703/1920}px;
  }
  /*
  @media (max-width: 1680px) {
    max-width: 37.5%;
  }
  */
  @media (max-width: 1440px) {
    max-width: ${props => props.innerWidth*712/1440}px;
  }
  @media (max-width: 768px) {
    margin-left: 4px;
  }
  @media (max-width: 414px) {
    max-width: 214px;
  }
  @media (max-width: 400px) {
    width: 60%;
  }
  @media (max-width: 330px) {
    width: 100%;
  }
`;

export const MobileBanner = styled(Flex)`
  overflow: hidden;
  flex-direction: column;
  transition: all .3s ease-in-out;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
`;

export const MobileCountries = styled(Flex)`
  width: fit-content;
  margin-left: 32px;
  flex-direction: row;
`;

export const NextButton = styled(Button)`
  @media (max-width: 1920px) {
    left: ${props => props.type === "right"
    ? props.innerWidth*703/1920 + 605 + 'px'
    : '610px' };
  }
  @media (max-width: 1800px) {
    left: ${props => props.type === "right"
    ? props.innerWidth*703/1920 + 541 + 'px'
    : '539px' };
  }
  /*
  @media (max-width: 1680px) {
    left: ${props => props.type === "right"
    ? props.innerWidth*703/1920 + 580 + 'px'
    : '494px' };
  }
  @media (max-width: 1600px) {
    left: ${props => props.type === "right"
    ? props.innerWidth*703/1920 + 580 - 15 + 'px'
    : '450px' };
  }
  */
  @media (max-width: 1440px) {
    left: ${props => props.type === "right"
    ? (712*props.innerWidth/1440) + 366 + 'px'
    : '370px' };
  }
  position: absolute;
  top: 32px;
  padding-left: 0px;
  padding-right: 0px
  height: 32px;
  width: 32px;
  background-color: #7955FB;
  border-radius: 50%;
  outline: none;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    left: ${props => props.type === "right" ? '95%' : '94px' };
    top: 160px;
  }
  @media (max-width: 600px) {
    left: ${props => props.type === "right" ? '93%' : '94px' };
  }
  @media (max-width: 500px) {
    left: ${props => props.type === "right" ? '92%' : '94px' };
  }
  @media (max-width: 440px) {
    left: ${props => props.type === "right" ? '90%' : '94px' };
  }
  @media (max-width: 414px) {
    left: ${props => props.type === "right" ? '90%' : '94px' };
  }
  @media (max-width: 350px) {
    left: ${props => props.type === "right" ? '88%' : '94px' };
  }
  ${props => props.type === "left" && 'transform: rotate(180deg);'}
`;

export const SpecialBox = styled(Flex)`
  text-transform: uppercase;
  text-decoration: none;
  font-size: 12px;
  font-family: Fira Sans, sans-serif;
  line-height: 24px;
  margin-top: ${props => props.positionSwitched ? '20px': 'unset'};
  width: 219px;
  height: 48px;
  background-color: #7955FB;
  cursor: pointer;
  position: absolute;
  top: 24px;
  left: 80%;
  @media (max-width: 1920px) {
    left: 72.5%;
  }
  @media (max-width: 1680px) {
    left: 75.5%;
  }
  @media (max-width: 1440px) {
    left: 80%;
  }
  box-shadow: 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.2);
  &:hover {
    background: #5337B8;
    box-shadow: 0 8px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.2);
  }
`;

export const FlagText = styled.span`
  color: #393939;
  font-family: Fira Sans, sans-serif;
  font-size: 18px;
  font-weight: bold;
  line-height: 20px;
  width: max-content;
  margin-right: 5px;
  @media (max-width: 414px) {
    font-size: 16px;
  }
  @media (max-width: 400px) {
    font-size: 12px;
  }
`;

export const Line = styled.span`
  display: inline-block;
  height: 32px;
  border: ${props => !props.hide ? '.5px solid white' : '.5px solid black'};
  margin-left: 15px;
  margin-right: 15px;
  @media (max-width: 768px) {
    margin-top: 20px;
    margin-left: 10px;
    margin-right: 10px;
  }
`;

export const CountdownBanner = styled(Flex)`
  height: 48px;
  border-radius: 8px;
  
  @media (max-width: 414px) {
    max-width: 400px;
    margin: 0;
  }
`;

export const CountryContainer = styled(Flex)`
  align-items: center;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

export const FlagContainer = styled(Flex)`
  flex-direction: row;
  margin-left: 16px;
  @media (max-width: 768px) {
    margin-left: 0px;
    justify-content: flex-start;
    width: 100%;
  }
`;

export const Image = styled.div`
  margin: 4px 16px 0px 0px;
  border-radius: 50%;
  @media (max-width: 768px) {
    margin-left: 0px;
    margin-right: 8px;
  }
`;

export const ImageContainer = styled(Flex)`
  background-color: #7955FB;
  height: 100%;
  width: 100%;
  max-width: 300px;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  @media (max-width: 768px) {
    height: 64px;
    width: auto;
    background-color: white;
    // margin-top: 24px;
    color: black;
    max-width: unset;
    margin-right: 24px;
    margin-left: 18px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
  @media (max-width:  400px) {  
    min-width: auto;
  }
`;

export const TextHeadline = styled(Text)`
  color: white;
  font-family: Fira Sans, sans-serif;
  font-size: 16px;
  font-weight: bold;
  margin-right: 17px;
  line-height: 20px;
  @media (max-width: 768px) {
    margin-left: 32px;
    color: black;
    ${props => props.sticky ? `
      position: absolute;
      top: 148px;
      left: 99px;
    ` : ''};
  }
  @media (max-width:  400px) {  
    font-size: 12px;
  }
`;

export const Flag = styled.div`
  margin-right: 8px;
  @media (max-width: 414px) {
    height: 25px;
  }
`;
