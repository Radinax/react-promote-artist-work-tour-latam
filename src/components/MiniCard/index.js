import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Flex } from 'rebass';
import {
  Card, LinkWrapper, ImgLogo, ExternalLinkWrapper,
  TextNav, WrapperFront, WrapperBack, OptionLink,
  LinkBack, EffectBox, ImgWrapper, OptionButton,
} from './styled';

const MiniCard = ({
  logo,
  title,
  url = '/',
  itemClicked,
  shortname,
  idChannel,
  series,
  urlProgramming,
  programmingText,
  seriesText,
  onClose,
}) => {
  const [effect, setEffect] = useState('normal');

  const imgWrapper = (
    <>
      <ImgWrapper className={idChannel} alignItems="center" mx="auto">
        <ImgLogo effect="opacity" src={logo} />
      </ImgWrapper>
      <TextNav mt={1} w={[1]}>{title}</TextNav>
    </>
  );

  const linkWrapper = url.includes('.com')
    ? (
      <ExternalLinkWrapper
        href={url}
        target="_blank"
      >
        {imgWrapper}

      </ExternalLinkWrapper>
    )
    : (
      <LinkWrapper
        to={url}
        onClick={() => {
          onClose();
        }}
      >
        {imgWrapper}
      </LinkWrapper>
    );


  return (
    <div>
      <EffectBox>
        <Card className={effect}>
          <WrapperFront flexDirection="column" py={1} className={effect}>
            <Box pt={24} />
            {linkWrapper}
          </WrapperFront>
          <WrapperBack flexDirection="column" className={[idChannel, effect]}>
            <Box alignSelf="flex-end" my={1}>
              <LinkBack p={2} onClick={() => setEffect('normal')} />
            </Box>
            {series === true
              ? (
                <Flex flexDirection="column">
                  <OptionLink
                    py={1}
                    m={1}
                    to={urlProgramming}
                    onClick={() => {
                      onClose();
                      setEffect('normal');
                    }}
                  >
                    {programmingText}
                  </OptionLink>
                  <OptionButton
                    py={1}
                    m={1}
                    onClick={() => {
                      setEffect('normal');
                      itemClicked(shortname);
                    }}
                  >
                    {seriesText}
                  </OptionButton>
                </Flex>
              ) : (
                <OptionLink
                  py={1}
                  m={1}
                  to={urlProgramming}
                  onClick={() => {
                    onClose();
                    setEffect('normal');
                  }}
                >
                  {programmingText}
                </OptionLink>
              )
            }
          </WrapperBack>
        </Card>
      </EffectBox>
    </div>
  );
};

MiniCard.propTypes = {
  logo: PropTypes.string,
  title: PropTypes.string.isRequired,
  itemClicked: PropTypes.func,
  shortname: PropTypes.string,
  idChannel: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  series: PropTypes.bool.isRequired,
  noflip: PropTypes.bool.isRequired,
  urlProgramming: PropTypes.string.isRequired,
  programmingText: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  seriesText: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  onClose: PropTypes.func.isRequired,
};

MiniCard.defaultProps = {
  logo: '',
  programmingText: 'Programación',
  seriesText: 'Series',
  shortname: '',
  itemClicked: () => {},
};

export default MiniCard;
