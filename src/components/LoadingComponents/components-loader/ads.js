import React from 'react';
import PropTypes from 'prop-types';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { LoaderContainer } from './styled';

const AdsLoader = ({ baseOptions, adSize }) => (
  <SkeletonTheme {...baseOptions}>
    <LoaderContainer>
      <Skeleton duration={baseOptions.duration} width={adSize.width} height={adSize.height} />
    </LoaderContainer>
  </SkeletonTheme>
);

AdsLoader.propTypes = {
  baseOptions: PropTypes.shape({
    color: PropTypes.string.isRequired,
    highlightColor: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
  }).isRequired,
  adSize: PropTypes.shape({
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  }).isRequired,
};

export default AdsLoader;
