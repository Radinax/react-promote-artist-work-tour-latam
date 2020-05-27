import styled from 'styled-components';
import { Flex } from 'rebass';

export const FacebookContainer = styled(Flex)`
  position: relative;
`;

export const Wrapper = styled(Flex)`
  display: -webkit-box;
  display: -moz-box;
  display: box;
  background-color: #7955FB;
  height: 515px;
  width: ${props => (props.numberOfBoxes > 2 ? '1248px' : 'fit-content')};
  padding: 16px 16px 16px 16px;
  margin: 40px auto 0px auto;
  overflow: hidden;
  @media (max-width: 1440px) {
    margin: ${props => (props.numberOfBoxes > 2
      ? `40px 96px 0px ${props.innerWidth * 96 / 1440}px` : '40px auto 0px auto')}
  };
  @media (max-width: 1024px) {
    width: ${props => (props.numberOfBoxes > 2 ? '1014px' : 'fit-content')};
    overflow-y: hidden;
    overflow-x: scroll;
  };
  @media (max-width: 768px) {
    margin: 40px 0px 0px 18px;
    width: ${props => props.innerWidth - 18}px;
    -webkit-overflow-scrolling: touch;
  };
  @media (max-width: 414px) {
    margin: 40px 0px 0px 0px;
    width: ${props => props.innerWidth}px;
  };
`;

const marginHandler = (order, mobile) => {
  if (order === 0) {
    return 'margin-left: 0px';
  }
  if (order === 1 && mobile) {
    return 'margin-left: 16px';
  }
  if (order === 1 && !mobile) {
    return 'margin-left: 24px';
  }
  if (order === 2 && mobile) {
    return 'margin-left: 16px';
  }
  if (order === 2 && !mobile) {
    return 'margin-left: 24px';
  }
};

export const SocialBox = styled(Flex)`
  background-color: white;
  z-index: 1;
  height: 483px;
  width: 389px;
  overflow-y: hidden;
  padding: 16px 12px 0px 12px;
  ${props => marginHandler(props.order, false)};
  @media (max-width: 1024px) {
    ${props => marginHandler(props.order, true)};
  };
  @media (max-width: 768px) {
    width: 365px;
  };
  @media (max-width: 500px) {
    width: 365px;
  };
`;

export const SocialMediaName = styled(Flex)`
  border-bottom: 1px solid rgba(151, 151, 151, .4);
  z-index: 1;
  flex-shrink: 0;
  justify-content: center;
  background-color: white;
  box-sizing: border-box;
  font-family: Fira Sans, sans-serif;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  margin-bottom: 16px;
  font-weight: bold;
`;

export const Underline = styled.hr`
  width: 14%;
  margin: auto;
  border-top: 2px solid black;
  margin-bottom: 22px;
`;

export const Title = styled(Flex)`
  color: #292F32;
  font-family: Fira Sans, sans-serif;
  font-size: 22px;
  line-height: 27px;
  margin-bottom: 5px;
`;

export const CuratedTweets = styled(Flex)`
  font-family: Fira Sans, sans-serif;
  font-size: 12px;
  line-height: 16px;
  margin-bottom: 2px;
  color: #667886;
`;

export const CuratedAccount = styled.span`
  font-family: Fira Sans, sans-serif;
  font-size: 12px;
  line-height: 16px;
  color: #38A1F3;
`;

export const Collection = styled.span`
  color: #667886;
  font-family: Fira Sans, sans-serif;
  font-size: 12px;
  line-height: 16px;
`;
