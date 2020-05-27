import styled from 'styled-components';
import { Flex, Box, Link } from 'rebass';
import Back from '../../assets/icons/back.svg';
import Close from '../../assets/icons/close.svg';

const backgroundColorChannel = (theme) => {
  if (theme === 'orange') return '#F24B0E';
  return '#001534';
};

export const Backdrop = styled(Box)`
  display: none;
  margin: 0 auto;
  background: rgba(0,0,0,0.5);
  left: 0;
  height: 100%;
  position: fixed;
  top: 0;
  transition: all 0.8s;
  width: 100%;
  z-index: 14;
`;

export const WrapperFlex = styled.div`
  font-family: Fira Sans, sans-serif;
  &.opened { 
    ${Backdrop} {
      display: block;
    }
  }
`;

export const WrapperMenu = styled.div`
  background: #d6dbda;
  display: block;
  height: 100%;
  overflow: hidden;
  overflow-y: auto;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  max-width: 414px;
  transition: left 0.8s;
  z-index: 15;

  @media (max-width: 767px) {
    width: 100vw;
    max-width: 100vw;
  }

  &{WrapperFlex}.closed & {
    left: -100%;
  }

`;

export const WrapperBox = styled(Flex)`
  left: 0;
  position: relative;
  transition: left 0.8s;
  width: 828px;
  @media (max-width: 414px) {
    width: 640px;
  }

  &.show {
    left: -100%;
  }
`;

export const DataChannel = styled.div`
  width: 100vw;
  @media (min-width: 1024px) {
    max-width: 414px;
  }
`;

export const TopBar = styled(Flex)`
  background-color: ${props => backgroundColorChannel(props.menuTheme)};
  color: white;
  font-family: Fira Sans, sans-serif;
  height: 56px;
  text-transform: uppercase;
  align-items: center;
`;

const BaseButton = styled.button`
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: cover;
  border: none;
  cursor: pointer;
  padding: 0;
  height: 24px;
  width: 24px;
`;

export const LinkClose = styled(BaseButton)`
  background-image: url(${Close});
  background-position: center;
  background-size: 65%;
  filter: brightness(100%);
`;

export const LinkBack = styled(BaseButton)`
  background-image: url(${Back});
  filter: invert(100%);
`;

export const LinkSeries = styled(Link)`
  border-bottom: 1px solid #ececec;
  color: black;
  display: block;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  text-decoration: none;
  margin: 0 16px;
  padding: 16px 0; 
`;
