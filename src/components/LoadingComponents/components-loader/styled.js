import { Box, Flex } from 'rebass';
import styled from 'styled-components';
import get from 'lodash/get';

const baseCss = {
  marginLeft: 'auto',
  marginRight: 'auto',
  opacity: '0.5',
  span: {
    borderRadius: '0',
    lineHeight: '0',
    fontSize: '0',
  },
};

export const LoaderContainer = styled(Box)`
  ${baseCss}
  max-width: ${props => get(props, 'theme.breakpoints.3', '')};
`;

export const ContentCardContainer = styled(Box)`
  ${baseCss}
  max-width: ${props => get(props, 'theme.breakpoints.3', '')};
  opacity: 1;

  [class^='css-'],
  [class*=' css-'] {
    padding-top: calc(100% * (170 / 300));
  }

  h2,
  p {
    [class^='css-'],
    [class*=' css-'] {
      padding-top: 0;
    }
  }
  
  h2 {
    margin: ${props => get(props, 'theme.space.1', '')}px 0px 4px;
  }

  p {
    margin: 0;
    span {
      font-size: ${props => get(props, 'theme.fontSizes.2', '')}px;
      line-height: 16px;
    }
  }

  h2,
  h2 [class^='css-'],
  h2 [class*=' css-'] {
    font-size: ${props => get(props, 'theme.fontSizes.3', '')}px;
    line-height: 20px;
  }

  &.in-line {
    display: flex;
    flex-direction: row;
    opacity: 1;

    .image-card { 
      max-width: 192px;
      margin-right: ${props => get(props, 'theme.space.1', '')}px;
      width: 50%;
    }

    .content-card {
      width: 50%;
    }
  }
`;

export const PanoramicLoaderContainer = styled(Box)`
  ${baseCss}
  max-width: ${props => get(props, 'theme.breakpoints.3', '')};

  [class^='css-'],
  [class*=' css-'] {
    padding-top: calc(100% + 70px);

    @media (min-width: ${props => get(props, 'theme.breakpoints.1', '768px')}) {
      padding-top: calc(100% * (640 / 1440));
    }
  }
`;

export const FourItemsContainer = styled(Flex)`
  ${baseCss}
  max-width: ${props => get(props, 'theme.breakpoints.3', '')};

  [class^='css-'],
  [class*=' css-'] {
    padding-top: calc(100% * (170 / 300));
  }
`;

export const VideoClipContainer = styled(Flex)`
  ${baseCss}
  max-width: ${props => get(props, 'theme.breakpoints.3', '')};
  line-height: 0;

  @media (min-width: ${props => get(props, 'theme.breakpoints.1', '768px')}) {
    padding-left: 96px;
    padding-right: 96px;
  }

  .video-container {
    [class^='css-'],
    [class*=' css-'] {
      padding-top: calc(100% * (416 / 739));
    }
  }
`;

export const ArticleImage = styled(Box)`
  ${baseCss}
  max-width: ${props => get(props, 'theme.breakpoints.3', '')};
  opacity: 1;

  [class^='css-'],
  [class*=' css-'] {
    padding-top: calc(100% * (590 / 1047));
  }
`;

export const ArticleBox = styled(Box)`
  max-width: ${props => get(props, 'theme.breakpoints.3', '')};
`;

export const GalleryCardContainer = styled(Box)`
  ${baseCss}
  opacity: 1;
  
  .image-card {
    [class^='css-'],
    [class*=' css-'] {
      padding-top: calc(100% * (618 / 833));
    }
  }
`;

export const ProgrammingCard = styled(Flex)`
  ${baseCss}
  max-width: ${props => get(props, 'theme.breakpoints.3', '')};
  
  .date-box {
    width: 50%;
    height: 106px;
    margin-right: ${props => get(props, 'theme.space[1]', '')}px;

    @media (min-width: ${props => get(props, 'theme.breakpoints.0', '')}) {
      margin-right: ${props => get(props, 'theme.space[3]', '')}px;
      height: 109px;
      width: 190px;
    }
  }

  .info-box {
    flex: 1;
    flex-direction: column;
    align-items: flex-start;
    max-width: 47%;

    @media (min-width: ${props => get(props, 'theme.breakpoints.0', '')}) {
      max-width: 100%;
    }
  }

  &.programming-slider {
    justify-content: center;

    ${Box} {
      padding: 0 4px;
      width: 120px;

      @media (max-width: ${props => get(props, 'theme.breakpoints.0', '')}) {
        width: 100px;

        &:nth-child(n+4) {
          display: none;
        }
      }
    }
  }
`;

export const CharactersHiglight = styled(Box)`
  ${baseCss}
  max-width: ${props => get(props, 'theme.breakpoints.3', '')};
  position: relative;

  .characters-icon {
    position: absolute;
    left: 5%;
    top: 0px;
    font-size: 0;
    line-height: 0;
  }

  .characters-info {
    padding-top: 46px;

    [class^='css-'],
    [class*=' css-'] {
      padding-top: calc(100% * (469 / 1248));
    }
  }
`;
