import React from 'react';
import PropTypes from 'prop-types';
import { LazyBox } from './styled';

export const Loading = ({ loadWidth, loadHeight }) => (
  <LazyBox width={loadWidth} loadHeight={loadHeight} />
);

Loading.propTypes = {
  loadWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  loadHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Loading.defaultProps = {
  loadWidth: 100,
  loadHeight: 100,
};

export default Loading;
