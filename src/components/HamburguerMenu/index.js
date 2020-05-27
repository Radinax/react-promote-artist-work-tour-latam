import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Flex, Heading } from 'rebass';
import MiniCard from '../MiniCard';
import {
  LinkClose, TopBar,
  WrapperFlex, WrapperMenu,
   WrapperBox, LinkBack,
  Backdrop,
} from './styled';

const Menu = ({
  channels, initialState, onChange, programmingText, seriesText,
}) => {
  const [more, setMore] = useState('normal');

  return (
    <div>
      <WrapperFlex className={initialState}>
        <Backdrop onClick={onChange} />
        <WrapperMenu>
          <WrapperBox flexDirection="row" className={more}>
            <Box width={['100vw', '100vw', '416px']}>
              <TopBar p={2} menuTheme="orange"><LinkClose onClick={onChange} /></TopBar>
              <Flex width={['100vw', '100vw', '416px']} flexDirection="row" flexWrap="wrap" py={4} px="4px">
                {channels && channels.length > 0 && channels.map((item, idx) => (
                  <Box key={item.shortname || idx} width={1 / 3} className={item.id_channel}>
                    <MiniCard
                      title={item.title}
                      logo={item.logo_svg_circle}
                      url={item.url}
                      shortname={item.shortname}
                      idChannel={item.id_channel}
                      series={!!item.series}
                      noflip={item.noflip}
                      urlProgramming={item.url_programming}
                      programmingText={programmingText}
                      seriesText={seriesText}
                      onClose={onChange}
                    />
                  </Box>
                ))}
              </Flex>
            </Box>
            <Box width={['100vw', '100vw', '416px', '416px']}>
              <TopBar p={2} menuTheme="orange">
                <LinkBack onClick={() => setMore('normal')} />
                <Heading fontSize={2} m="auto">
                  {seriesText}
                  {' '}
                </Heading>
              </TopBar>
            </Box>
          </WrapperBox>
        </WrapperMenu>
      </WrapperFlex>
    </div>
  );
};

Menu.propTypes = {
  channels: PropTypes.arrayOf(PropTypes.shape({
    logo_svg_circle: PropTypes.string,
    title: PropTypes.string,
    itemClicked: PropTypes.func,
    shortname: PropTypes.string,
    idChannel: PropTypes.string,
    url: PropTypes.string,
    series: PropTypes.array,
    url_programacion: PropTypes.string,
  })),
  onChange: PropTypes.func.isRequired,
  initialState: PropTypes.string.isRequired,
  programmingText: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  seriesText: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  menuTheme: PropTypes.string,
};

Menu.defaultProps = {
  programmingText: 'Programación',
  seriesText: 'Series',
  channels: [],
  menuTheme: 'default',
};

export default Menu;
