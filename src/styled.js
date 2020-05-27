import styled from 'styled-components';
import Background from './assets/images/background.png';
import { Flex, Box } from 'rebass';

export const Wrapper = styled.div`
  background: ${props => props.noBackground ? '#2c885c' : `url(${Background})`};
  overflow: hidden;
`;

export const GradientBackground = styled(Flex)`
  flex-direction: row;
  position: relative;
  background: linear-gradient(0deg,rgba(0,15,36,0) 0%,rgb(0, 0, 0) 100%);
  height: 72px;
  opacity: 0.53;
  @media (max-width: 768px) {
    opacity: 0.9;
    height: 88px;
  }
`;

export const ShareModule = styled(Box)`
  position: absolute;
  @media (max-width: 1920px) {
    left: 74.2%;
  }
  @media (max-width: 1680px) {
    left: 77.3%;
  }
  @media (max-width: 1440px) {
    left:${props => props.mobile ? '-35px' : '82%'};
  }
  top: ${props => props.showBrazilData ? '78px' : '90px'};
`;

export const SpecialBox = styled(Flex)`
  text-transform: uppercase;
  text-decoration: none;
  font-size: 12px;
  font-family: Fira Sans, sans-serif;
  line-height: 24px;
  margin-top: 20px;
  width: ${props => props.brazilBox ? '270px' : '219px'};
  height: 48px;
  background-color: #7955FB;
  cursor: pointer;
  box-shadow: 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.2);
  &:hover {
    background: #5337B8;
    box-shadow: 0 8px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.2);
  }
`;
