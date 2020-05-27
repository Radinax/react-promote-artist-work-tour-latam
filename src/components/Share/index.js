import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import ShareItem from './share-item';
// ASSETS
import Facebook from '../../assets/icons/facebook.svg';
import Twitter from '../../assets/icons/twitter.svg';
import Email from '../../assets/icons/email.svg';
import Whatsapp from '../../assets/icons/whatsapp.svg';
// STYLES
import { Root, Title } from './styled';
// UTILS
import { trackSimpleEvent } from '../../utils/analytics';

const Share = ({
  mobile,
  shareList,
  title,
  backTheme,
  shareDirection,
  shareUrl,
  shareDescription,
  twitterAccount,
  portuguese,
}) => {
  const [width, setWidth] = useState(window.innerWidth);
  const componentUrl = shareUrl ? window.location.origin + shareUrl : null;
  const url = componentUrl || window.location;
  const titleSplit = document.title.split('|');
  const discoveryTitle = titleSplit.length > 1 ? titleSplit[1] : titleSplit[0];
  const compDescription = shareDescription ? `${shareDescription} | ${discoveryTitle}` : null;
  const urlTitle = compDescription || document.title;

  const shareListDefault = [
    {
      id: 'Facebook',
      icon: Facebook,
      background: '#486bb4',
      title: portuguese ? 'Compartilhar' : 'Comparte',
      shareUrl: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    },
    {
      id: 'Twitter',
      icon: Twitter,
      background: '#63acfc',
      shareUrl: `https://twitter.com/intent/tweet?text=${urlTitle.replace('|', '')} ${twitterAccount}&url=${url}`,
    },
    {
      id: 'Email',
      icon: Email,
      background: '#d44638',
      shareUrl: `mailto:?body=${urlTitle} ${url}`,
    },
    {
      id: 'Whatsapp',
      icon: Whatsapp,
      background: '#25d366',
      shareUrl: `https://api.whatsapp.com/send?text=${urlTitle} ${url}`,
    },
  ];
  const shareListComp = !isEmpty(shareList) ? shareList : shareListDefault;

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <Root alignItems="center" mobile={width < 1025 ? mobile : false} flexDirection={shareDirection}>
      {title && (
        <Title
          backTheme={backTheme}
          mobile={width < 1025 ? mobile : false}
          direction={shareDirection}
        >
            {title}
        </Title>
      )}
      {shareListComp.map((buttonInfo, key) => (
        <ShareItem
          {...buttonInfo}
          key={buttonInfo.id || key}
          backTheme={backTheme}
          mobile={width < 1025 ? mobile : false}
          direction={shareDirection}
          url={`${buttonInfo.shareUrl}`}
          onClick={() => {
            trackSimpleEvent('Content', `DW - Share ${document.title}`, `Share in: ${buttonInfo.id}`);
          }}
        />
      ))}
    </Root>
  );
};

Share.propTypes = {
  title: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  mobile: PropTypes.bool,
  backTheme: PropTypes.string,
  shareList: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  shareDirection: PropTypes.string,
  shareUrl: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  shareDescription: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  twitterAccount: PropTypes.string,
  portuguese: PropTypes.bool.isRequired,
};

Share.defaultProps = {
  title: 'Comparte',
  backTheme: 'dark',
  shareDirection: 'row',
  mobile: true,
  shareList: [],
  shareUrl: null,
  shareDescription: null,
  twitterAccount: '',
};

Share.displayName = 'Share';

export default Share;
