import React from 'react';
import PropTypes from 'prop-types';
import { DFPSlotsProvider, AdSlot } from 'react-dfp';
import LazyLoad from 'react-lazyload';
import Loading from './ads-loading';
import LoadingComponent from '../LoadingComponents';
import { DfpBox } from './styled';

const networkId = '21756062855';

export const Dfp = ({ adSlot, loading }) => {
  const adArguments = adSlot.adArguments || {};
  if (process.env.NODE_ENV === 'development' && adSlot.adSlotTest) {
    adSlot.adUnitText = adSlot.adSlotTest;
  }
  
  const adSize = {
    width: adSlot.adSlotSize[0],
    height: adSlot.adSlotSize[1],
  };
  if (loading) {
    return <LoadingComponent type="ads" adSize={adSize} />;
  }

  return (
    <DfpBox>
      <LazyLoad
        width={adSlot.adSlotSize[0]}
        height={adSlot.adSlotSize[1]}
        offset={[-10, 0]}
        debounce={100}
        placeholder={(
          <Loading
            loadWidth={adSlot.adSlotSize[0]}
            loadHeight={adSlot.adSlotSize[1]}
          />
        )}
        once
      >
        <DFPSlotsProvider
          dfpNetworkId={networkId}
          adUnit={adSlot.adUnitText}
          targetingArguments={adArguments}
        >
          <AdSlot
            sizes={[adSlot.adSlotSize]}
            slotId={adSlot.adSlotId}
          />
        </DFPSlotsProvider>
      </LazyLoad>
    </DfpBox>
  );
};

Dfp.propTypes = {
  adSlot: PropTypes.shape({
    adSlotSize: PropTypes.arrayOf(PropTypes.number).isRequired,
    adSlotId: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
    // adSlotTest: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
    adUnitText: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
    adArguments: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  }).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Dfp;
