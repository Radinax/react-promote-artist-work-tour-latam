import React from 'react';
import PropTypes from 'prop-types';
import { FacebookProvider, Page } from 'react-facebook';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import {
  Wrapper,
  SocialBox,
  SocialMediaName,
  Underline,
  FacebookContainer,
} from './styled';
import InstagramBox from '../InstagramBox';

const text = {
  facebook: 'FACEBOOK',
  instagram: 'INSTAGRAM',
  twitter: 'TWITTER',
};

const title = textTitle => (
  <SocialMediaName flexDirection="column">
    {textTitle}
    <Underline />
  </SocialMediaName>
);

const facebook = (innerWidth, account) => (
  <SocialBox order={2} flexDirection="column">
    {title(text.facebook)}
    <FacebookContainer>
      <div>
        <FacebookProvider appId="3018780734828799">
          <Page
            hideCover
            smallHeader
            width={innerWidth < 769 ? 340 : 365}
            href={`https://www.facebook.com/${account}`}
            tabs="timeline"
          />
        </FacebookProvider>
      </div>
    </FacebookContainer>
  </SocialBox>
);

const instagram = (innerWidth, account) => (
  <SocialBox order={0} flexDirection="column">
    {title(text.instagram)}
    <InstagramBox account={account} innerWidth={innerWidth} title={text.title} />
  </SocialBox>
);

const twitter = (innerWidth, account) => (
  <SocialBox order={2} noMargin flexDirection="column">
    {title(text.twitter)}
    <TwitterTimelineEmbed
      sourceType="profile"
      autoHeight
      noHeader
      screenName={account}
      options={{ height: 400, width: innerWidth < 769 ? 340 : 365 }}
      noBorders
    />
  </SocialBox>
);

const SocialMediaBox = (props) => {
  const { innerWidth, socialMedia } = props;
  const numberOfBoxes= Object.keys(socialMedia).length;
  return (
    <Wrapper numberOfBoxes={numberOfBoxes} innerWidth={innerWidth}>
      {instagram(innerWidth, socialMedia.instagram)}
      {facebook(innerWidth, socialMedia.facebook)}
      {socialMedia.twitter && twitter(innerWidth, socialMedia.twitter)}
    </Wrapper>
  );
};

SocialMediaBox.propTypes = {
  innerWidth: PropTypes.number.isRequired,
  socialMedia: PropTypes.shape({}),
};

export default SocialMediaBox;
