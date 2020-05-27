import React from 'react';
import PropTypes from 'prop-types';
import ReactSVG from 'react-svg';
import {
  LinkItem,
  ImageIcon,
} from './styled';

const ShareItem = ({
  icon,
  url,
  id,
  background,
  backTheme,
  mobile,
  direction,
  onClick,
}) => (
  <LinkItem
    alignItems="center"
    justifyContent="center"
    background={background}
    mobile={mobile}
    href={url}
    direction={direction}
    target={id !== 'Email' ? '_blank' : null}
    onClick={() => onClick()}
  >
    <ImageIcon colorIcon={id} backTheme={backTheme}>
      <ReactSVG src={icon} />
    </ImageIcon>
  </LinkItem>
);

ShareItem.propTypes = {
  id: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  backTheme: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  mobile: PropTypes.bool,
  direction: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

ShareItem.defaultProps = {
  mobile: false,
  onClick: () => {},
};

ShareItem.displayName = 'ShareItem';

export default ShareItem;
