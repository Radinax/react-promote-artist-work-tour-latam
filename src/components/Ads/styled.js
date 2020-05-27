import {
  Flex, Text, Box,
} from 'rebass';
import styled from 'styled-components';

export const Root = styled(Flex)`
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: Fira Sans, sans-serif;
  padding: 16px;

  &.ads-dark {
    background-color: #000f24;
    color: white;
  }

  &.ads-light {
    background-color: white;
    color: black;
  }

  &.ads-alpha {
    background-color: rgba(255, 255, 255, 0.05);
    color: white;
  }

  &.ads-alpha-border {
    border-top: 1px solid #f9f9f9;
    border-bottom: 1px solid #f9f9f9;
    background-color: rgba(255, 255, 255, 0.05);
    color: white;
  }

  &.ads-grey {
    background-color: #ececec;
  }

  &.ad-height {
    height: 100%;
    margin: auto;
  }

  @media (max-width: 414px) {
    padding-left: 0;
    padding-right: 0;
    max-width: 100%;
  }
`;

export const Title = styled(Text)`
  font-size: 11px;
  margin-bottom: 7px;
`;

export const DfpBox = styled(Box)`
  position: relative;
`;

export const LazyBox = styled(Box)`
  background-color: #e3e6e8;
  height: ${props => props.loadHeight}px;
  display: block;
  position: relative;
`;
