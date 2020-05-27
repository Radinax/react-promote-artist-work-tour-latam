import {
  Flex, Text, Link, Image,
} from 'rebass';
import styled from 'styled-components';

export const WrapperSponsor = styled(Flex)`
  position: ${props => (props.absolute ? 'absolute' : 'relative')};
  left: 0;
  top: 55px;
  z-index: 1;
  justify-content: ${props => (props.center ? 'center' : 'flex-start')};
  @media (max-width: 1920px) {
    margin-left: 0px;
    left: 17.5%;
    top: 75px;
  }
  @media (max-width: 1680px) {
    margin-left: 0px;
    left: 13%;
  }
  @media (max-width: 1600px) {
    margin-left: 0px;
    left: 11%;
  }
  @media (max-width: 1440px) {
    margin: 24px 0px 24px 96px;
    left: 0;
    top: 55px;
  }
  @media (max-width: 768px) {
    margin: 24px 0px 24px 9px;
    justify-content: center;
    width: ${props => props.innerWidth - 18}px;
    top: 40px;
  }
  ${Image} {
    align-self: flex-start;
    background: transparent;
    width: auto;
    max-height: 40px;
    max-width: 85px;
    margin: 0px;
    @media (max-width: 400px) {
      max-width: 75px;
      max-height: 36px;
    }
  }
`;

export const SponsorLink = styled(Link)`
  display: flex;
`;

export const Line = styled.span`
  display: inline-block;
  height: 20px;
  width: 1px;
  margin-left: 15px;
  margin-right: 15px;
  background-color: #FFFFFF;
  @media (max-width: 414px) {  
    background: none;
    margin-left: 8px;
    margin-right: 8px;
  }
  @media (max-width: 350px) {  
    margin-left: 0px;
    margin-right: 0px;
  }
`;

export const SponsorText = styled(Text)`
  margin: 7px ${props => props.margin} 8px 0px;
  color: ${props => (props.backtheme === 'dark' ? 'white' : 'black')};
  font-size: 11px;
  @media (max-width: 768px) {  
    margin: 4px ${props => props.margin} 8px 0px;
  }
  @media (max-width: 414px) {  
    margin: 4px 0px 8px 0px;
  }
`;

export const BoxSponsor = styled(Flex)`
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
`;

export const SponsorContainer = styled(Flex)`
  @media (max-width: 768px) {  
    width: min-content;
  }
  @media (max-width: 414px) {  
    width: 100%;
  }
`;
