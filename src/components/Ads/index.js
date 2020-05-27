import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import isEqual from 'lodash/isEqual';
import Dfp from './dfp';
import {
  Root, Title,
} from './styled';

export const Ads = ({
  adTitle,
  bgColor,
  adSlotConfig,
  loading,
}) => {
  const [showMobile, setShowMobile] = useState(false);
  const [showDesktop, setShowDesktop] = useState(false);
  const [adWidth, setAdWidth] = useState('auto');
  const [adClass, setAdClass] = useState(bgColor);
  const adSizes = [[300, 250], [320, 50], [728, 90]];
  let setBoxWidth = {
    width: adWidth,
  };

  useEffect(() => {
    setAdClass(bgColor);
    const setComponentWidth = () => {
      for (let i = 0; i < adSlotConfig.length; i += 1) {
        if (isEqual(adSizes[0], adSlotConfig[i].adSlotSize)) {
          setAdWidth(adSlotConfig[i].adSlotSize[0] + 32);
          setAdClass(`${bgColor} ad-height`);
          break;
        }
      }

      return {
        width: adWidth,
      };
    };

    const handleMediaQueryChangeMobile = (event) => {
      setShowMobile(!!event.matches);
    };

    const handleMediaQueryChangeDesktop = (event) => {
      setShowDesktop(!!event.matches);
    };

    const mediaQueryList = window.matchMedia('(max-width: 767px)');
    const mediaQueryListD = window.matchMedia('(min-width: 768px)');

    // Adding listeners to init media queries with matchMedia
    mediaQueryList.addListener(handleMediaQueryChangeMobile);
    mediaQueryListD.addListener(handleMediaQueryChangeDesktop);
    handleMediaQueryChangeMobile(mediaQueryList);
    handleMediaQueryChangeDesktop(mediaQueryListD);
    // eslint-disable-next-line
    setBoxWidth = setComponentWidth();

    return () => {
      // Removing listeners to media queries with matchMedia
      mediaQueryList.removeListener(handleMediaQueryChangeMobile);
      mediaQueryListD.removeListener(handleMediaQueryChangeDesktop);
    };
  });

  return (
    <Root flexDirection="column" className={adClass} style={setBoxWidth}>
      {adTitle && <Title>{adTitle}</Title>}
      {adSlotConfig.map((adSlot) => {
        if (isEqual(adSizes[0], adSlot.adSlotSize)) {
          return <Dfp adSlot={adSlot} key={adSlot.adSlotId} loading={loading} />;
        }
        if (showMobile && isEqual(adSizes[1], adSlot.adSlotSize)) {
          return <Dfp adSlot={adSlot} key={adSlot.adSlotId} loading={loading} />;
        }
        if (showDesktop && isEqual(adSizes[2], adSlot.adSlotSize)) {
          return <Dfp adSlot={adSlot} key={adSlot.adSlotId} loading={loading} />;
        }
        return null;
      })}
    </Root>
  );
};

Ads.propTypes = {
  adTitle: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  bgColor: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  adSlotConfig: PropTypes.arrayOf(PropTypes.shape({
    adSlotSize: PropTypes.arrayOf(PropTypes.number).isRequired,
    adSlotId: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
    adUnitText: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  })).isRequired,
  loading: PropTypes.bool,
};

Ads.defaultProps = {
  bgColor: 'ads-dark', // ads-light
  loading: false,
};

export default Ads;
