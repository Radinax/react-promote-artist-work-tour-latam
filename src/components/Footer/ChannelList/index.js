import React from 'react';
import PropTypes from 'prop-types';
import {
  Root, Card, LinkWrapper, ExternalLinkWrapper, ImgLogo,
} from './styled';
import { channels, channelsBrazil } from '../../../utils/channels';

export const ChannelList = ({ py, country }) => {
  const setIconHeight = ({ target: img }) => {
    const image = img;
    const dimensions = {
      height: image.offsetHeight,
      width: image.offsetWidth,
    };
    const size = dimensions.width - dimensions.height;
    image.className += Math.abs(size) < 25 ? ' square' : ' normal';
  };
  const channelInfo = country === 'brazil' ? channelsBrazil : channels;

  return (
    <Root flexDirection="row" flexWrap="wrap" flex={1} py={py}>
      {channelInfo && channelInfo.length > 0 && channelInfo.map((channel) => {
        const baseWrapper = {
          title: channel.title,
        };

        const logo = (
          <ImgLogo
            effect="opacity"
            className={channel.id_channel}
            onLoad={setIconHeight}
            src={channel.id_channel === 'food' ? channel.logo_svg : channel.logo_svg_circle || channel.logo_svg}
            title={channel.title}
            mx="auto"
          />
        );

        let content = <LinkWrapper {...baseWrapper} to={channel.url}>{logo}</LinkWrapper>;

        if (channel.url.includes('.com')) {
          content = (
            <ExternalLinkWrapper
              {...baseWrapper}
              href={channel.url}
              rel="noopener noreferrer"
              target="_blank"
            >
              {logo}
            </ExternalLinkWrapper>
          );
        }

        return <Card p={[1, 2]} key={channel.title} className={channel.id_channel}>{content}</Card>;
      })}
    </Root>
  );
};

ChannelList.propTypes = {
  py: PropTypes.number,
  country: PropTypes.string.isRequired,
};

ChannelList.defaultProps = {
  py: 0,
};

export default ChannelList;
