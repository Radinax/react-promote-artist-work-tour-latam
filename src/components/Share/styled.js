import { Flex, Link, Box } from 'rebass';
import styled from 'styled-components';
import get from 'lodash/get';

export const Root = styled(Flex)`
  font-family: ${props => get(props, 'theme.fonts.sans', '')};
  text-align: center;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 8;
  ${(props) => {
    if (props.flexDirection === 'column' && !props.mobile) {
      return 'position: relative';
    } if (props.mobile) {
      return 'position: fixed';
    }
    return '';
  }};
`;

export const Title = styled(Flex)`
  align-items: center;
  background: ${props => (props.mobile === true ? '#486bb4'
    : 'transparent')};
  font-size: 14px;
  justify-content: center;
  height: ${props => (props.mobile === true ? '60px' : 'auto')};
  padding: ${props => (props.mobile === true ? '0 0 0 16px' : '0 16px')};
  display: ${props => (props.direction === 'column' ? 'none' : 'flex')};
  &&& {
    color: ${props => (props.backTheme === 'dark' ? 'white' : 'black')};
  }
  ${(props) => {
    if (props.mobile) {
      return `@media (max-width: 768px) {
      color: white;
      }`;
    }
    return `color: white;`;
  }};
`;

export const LinkItem = styled(Link)`
  align-items: center;
  background-color: ${props => (props.mobile === true ? props.background
    : 'transparent')};
  display: flex;
  justify-content: center;
  height: ${props => (props.mobile === true ? '60px' : '20px')};
  flex: ${props => (props.mobile === true ? '1' : 'inherit')};
  margin: ${props => (props.mobile === true ? 'auto' : '0 16px 0 0')};
  width: ${props => (props.mobile === true ? '20px' : 'auto')};

  ${(props) => {
    if (props.direction === 'column' && !props.mobile) {
      return 'margin: 0 0 20px';
    } if (props.mobile) {
      return 'margin: auto';
    }
    return 'margin: 0 16px 0 0';
  }};
`;

const fillColor = (props) => {
  let color;
  if (props.backTheme === 'dark') {
    color = 'white';
  } else if (props.colorIcon === 'Facebook') {
    color = '#486bb4';
  } else if (props.colorIcon === 'Twitter') {
    color = '#63acfc';
  } else if (props.colorIcon === 'Email') {
    color = '#d44638';
  } else if (props.colorIcon === 'Whatsapp') {
    color = '#25d366';
  } else {
    color = 'black';
  }
  return color;
};

export const ImageIcon = styled(Box)`
    height: 20px;
    svg {
      height: 20px;
      width: 20px;
      fill: ${fillColor}
    }
    @media (max-width: 1024px) {
      svg {
        fill: white;
      }
    }

    @media (min-width: 1024px) {
      display: ${(props) => {
        if (props.colorIcon === 'Whatsapp') {
          return 'none';
        }
        return '';
      }};
    } 
`;
