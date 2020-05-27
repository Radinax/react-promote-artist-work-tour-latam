import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Image } from 'rebass';
import Easy from '../../assets/images/logo easy.png';
import Einhell from '../../assets/images/logo einhell.png';
import Scotiabank from '../../assets/images/logo scotiabank.png';
import Sinteplast from '../../assets/images/logo sinteplast.png';
import Movistar from '../../assets/images/Movistar logo_.png';
import Vida from '../../assets/images/vida_security.png';
import Claro from '../../assets/images/claro.png';
import Hc from '../../assets/images/hc.png';
import Renault from '../../assets/images/renault.png';
import Tito from '../../assets/images/tito.png';
import {
  WrapperSponsor,
  SponsorText,
  SponsorLink,
  Line,
  SponsorContainer,
} from './styled';

const data = {
  chile: {
    url: 'https://www.easy.cl',
    logo: Easy,
    secondary_logo: Movistar,
    secondary_url: 'https://ww2.movistar.cl/servicios-digitales/movistar-play/',
    tertiary_logo: Scotiabank,
    tertiary_url: 'https://www.scotiabankchile.cl/',
    quaternary_logo: Vida,
    quaternary_url: 'https://www.vidasecurity.cl/',
  },
  colombia: {
    url: 'https://www.claro.com.co/personas/',
    logo: Claro,
    secondary_logo: Tito,
    secondary_url: 'https://www.pinturastitopabon.com',
    tertiary_logo: Hc,
    tertiary_url: 'https://www.homecenter.com.co',
    quaternary_logo: Renault,
    quaternary_url: 'https://www.renault.com.co/',
  },
  argentina: {
    url: 'https://www.easy.ar',
    logo: Easy,
    secondary_logo: Einhell,
    secondary_url: 'https://www.einhell.com.ar/',
    tertiary_logo: Sinteplast,
    tertiary_url: 'https://www.sinteplast.com.ar/',
  },
};

const selectCountry = (name, data) => {
  if (name === 'chile') return data.chile;
  if (name === 'argentina') return data.argentina;
  if (name === 'colombia') return data.colombia;
}

const Sponsor = ({
  title, backtheme, absolute, center, innerWidth, country
}) => {
  // const selectedCountry = country.name === 'chile' ? data.chile : data.argentina;
  const selectedCountry = selectCountry(country.name, data);
  const numberOfSponsors = Object.keys(selectedCountry).length / 2;
  const flexDirection = numberOfSponsors > 3 ? "column" : "row";
  const leftMarginText = numberOfSponsors > 3 ? "8px" : "8px";
  const long = (
    <WrapperSponsor
      innerWidth={innerWidth}
      absolute={absolute}
      center={center}
    >
      <Flex flexDirection={innerWidth > 768 ? 'row' : flexDirection} alignItems="center">
        <SponsorText margin={leftMarginText} backtheme={backtheme}>{title}</SponsorText>
        <SponsorContainer alignItems="center" flexDirection="row" justifyContent="space-between">
          <SponsorLink
            href={selectedCountry.url}
            rel="nofollow"
            target="_blank"
          >
            <Image mx={3} src={selectedCountry.logo} />
          </SponsorLink>
          {(selectedCountry.secondary_logo)
            && (
              <>
                <Line />
                <SponsorLink
                  href={selectedCountry.secondary_url}
                  rel="nofollow"
                  target="_blank"
                >
                  <Image ml={3} src={selectedCountry.secondary_logo} />
                </SponsorLink>
              </>
            )
          }
          {(selectedCountry.tertiary_logo)
            && (
              <>
                <Line />
                <SponsorLink
                  href={selectedCountry.tertiary_url}
                  rel="nofollow"
                  target="_blank"
                >
                  <Image ml={3} src={selectedCountry.tertiary_logo} />
                </SponsorLink>
              </>
            )
          }
          {(selectedCountry.quaternary_logo)
            && (
              <>
                <Line />
                <SponsorLink
                  href={selectedCountry.quaternary_url}
                  rel="nofollow"
                  target="_blank"
                >
                  <Image ml={3} src={selectedCountry.quaternary_logo} />
                </SponsorLink>
              </>
            )
          }
        </SponsorContainer>
      </Flex>
    </WrapperSponsor>
  );

  return (
    <div>
      {long}
    </div>
  );
};

Sponsor.propTypes = {
  data: PropTypes.shape({
    url: PropTypes.string,
    circular_logo: PropTypes.string,
    secondary_logo_svg: PropTypes.string,
    secondary_logo: PropTypes.string,
    secondary_url: PropTypes.string,
    tertiary_logo_svg: PropTypes.string,
    tertiary_logo: PropTypes.string,
    tertiary_url: PropTypes.string,
    logo_svg: PropTypes.string,
    logo: PropTypes.string,
  }),
  title: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  variation: PropTypes.string,
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.element, PropTypes.string]),
  position: PropTypes.number,
  backtheme: PropTypes.string,
  absolute: PropTypes.bool,
  center: PropTypes.bool,
  innerWidth: PropTypes.number.isRequired,
  country: PropTypes.shape({}).isRequired,
};

Sponsor.defaultProps = {
  title: 'Patrocinado por:',
  data: {},
  variation: 'long',
  component: '',
  position: 0,
  backtheme: 'dark',
  absolute: true,
  center: false,
};

export default Sponsor;
