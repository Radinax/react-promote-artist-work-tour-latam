import React from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import AdsLoader from './components-loader/ads';

const LoadingComponent = ({
  type, color, highlightColor, adSize,
}) => {
  const baseOptions = {
    color,
    highlightColor,
    duration: 2,
  };

  switch (type) {
    case 'ads':
      return <AdsLoader baseOptions={baseOptions} adSize={adSize} />;
    default:
      return <Skeleton />;
  }
};

LoadingComponent.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
  highlightColor: PropTypes.string,
  adSize: PropTypes.shape({
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  }),
};

LoadingComponent.defaultProps = {
  type: '',
  color: '#011e49',
  highlightColor: '#032f70',
  adSize: {
    width: '720',
    height: '90',
  },
};

export default LoadingComponent;
