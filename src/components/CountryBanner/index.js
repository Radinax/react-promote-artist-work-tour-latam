import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Flex, Link, Image as IconImage } from 'rebass';
import Picture from '../../assets/images/Countdown-avatar-pb.png';
import ChevronRight from '../../assets/icons/icon_chevron_right.svg'
import intl from '../../utils/intl';
import showCountryInBanner from '../../utils/filterCountry';
import {
  Container,
  CountdownBanner,
  CountryContainer,
  Flag,
  FlagContainer,
  Image,
  ImageContainer,
  MobileBanner,
  MobileCountries,
  TextHeadline,
  WhiteBanner,
  FlagText,
  Line,
  SpecialBox,
  NextButton
} from './styled';
// utils
import { data } from '../../utils/bannerText';

const headlineText = data.headline.es;
const specialText = intl('WatchSpecial');

class CountryBanner extends PureComponent {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      hideLeftButton: true,
    }
  };

  moveRight = (component) => {
    const { width } = this.props;
    const bannerStep = width > 768 ? 300 : 260;
    this.sideScroll(component, 'right', 10, 100, bannerStep);
  };

  moveLeft = (component) => {
    const { width } = this.props;
    const bannerStep = width > 768 ? 300 : 260;
    this.sideScroll(component, 'left', 10, 100, bannerStep);
  };

  sideScroll = (element, direction, speed, distance, step) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      if (direction === 'left') {
        element.current.scrollLeft  -= step;
      };
      if (direction === 'right') {
        element.current.scrollLeft += step;
      };
      scrollAmount = scrollAmount + step;
      if (element.current.scrollLeft > 0) {
        this.setState({ hideLeftButton: false });
      }
      if (element.current.scrollLeft === 0) {
        this.setState({ hideLeftButton: true });
      }
      if (scrollAmount >= distance) {
        window.clearInterval(slideTimer);
      }
    }, speed)
  };

  render() {
    const { width, country } = this.props;
    const { hideLeftButton } = this.state;
    const countriesInBanner = showCountryInBanner(country, data.destinationLATAM);
    const hideRightButton = countriesInBanner.length < 3 && width > 1025;
    const hideSpecialBox = width < 1350;
    // Country flags
    const flagComponent = (flagIcon, destiny) => (
      <FlagContainer flexDirection="row" alignItems="center">
        <Flag>
          <LazyLoadImage src={flagIcon} height="24px" width="25px" />
        </Flag>
        <FlagText>{destiny}</FlagText>
      </FlagContainer>
    );
    // Box with text VER ESPECIAL
    const specialBox = (
      <SpecialBox justifyContent="center" alignItems="center">
        <Link
          href="https://tudiscovery.com/special/hermanos-la-obra-tour"
          style={{ textDecoration: 'none', color: 'white' }}
        >
          {specialText}
        </Link>
      </SpecialBox>
    );
    // Box containing circular profile picture
    const profileBox = (
      <ImageContainer isMobile alignItems="center">
        <Image>
          <LazyLoadImage src={Picture} height="72px" width="73.47px" />
        </Image>
        <TextHeadline isMobile>{headlineText}</TextHeadline>
      </ImageContainer>
    );
    // Mapping all countries in the white banner
    const countries = countriesInBanner.map((o, index) => {
        const hideLine = index !== (countriesInBanner.length - 1);
        return (
          <React.Fragment key={o.name}>
            <CountryContainer flexDirection="row">
              {flagComponent(o.flag, o.country)}
              <Flex flexDirection="row">
                <FlagText>{'|'}</FlagText>
                <FlagText>{o.date_es}</FlagText>
                <FlagText>{'|'}</FlagText>
                <FlagText>{o.time}</FlagText>
              </Flex>
            </CountryContainer>
            <Line key={o.country} hide={hideLine} />
          </React.Fragment>
        );
      });
    // Right button which control white banner
    const rightButton = (
      <NextButton type="right" innerWidth={width} onClick={() => this.moveRight(this.myRef)}>
        <IconImage style={{ height: '12px' }} src={ChevronRight} />
      </NextButton>
    );
    // Left button which control white banner
    const leftButton = !hideLeftButton && (
      <NextButton type="left" innerWidth={width} onClick={() => this.moveLeft(this.myRef)}>
        <IconImage style={{ height: '12px', transform: 'rotateX(180deg)' }} src={ChevronRight} />
      </NextButton>
    );
    // Represents the white banner for >= 768px
    const whiteBannerComponent = (
      <WhiteBanner innerWidth={width} ref={this.myRef} alignItems="center">
        {countries}
      </WhiteBanner>
    );
    // Represents the whole banner for mobile
    const mobileBanner = (
      <ImageContainer flexDirection="row" alignItems="center">
        <Image>
          <LazyLoadImage src={Picture} height="72px" width="72px" />
        </Image>
        <MobileBanner ref={this.myRef}>
          <TextHeadline sticky>{headlineText}</TextHeadline>
          <MobileCountries>{countries}</MobileCountries>
        </MobileBanner>
        {leftButton}
        {rightButton}
      </ImageContainer>
    );
    // Represents the whole banner for DESKTOP
    const banner = (
      <Flex style={{ position: 'relative' }}>
        <Flex flexDirection="row">
          <Container innerWidth={width}>
            <CountdownBanner>
              {profileBox}
              {whiteBannerComponent}
            </CountdownBanner>
          </Container>
          {!hideSpecialBox && specialBox}
        </Flex>
        {leftButton}
        {!hideRightButton && rightButton}
      </Flex>
    );
    return (
      <>
        {width > 768 && banner}
        {width < 769 && mobileBanner}
      </>
    );
  }
}

CountryBanner.propTypes = {
  width: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
};

export default CountryBanner;
