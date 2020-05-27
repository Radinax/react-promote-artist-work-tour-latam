import React from "react";
import PropTypes from "prop-types";
import { Root, Card, LinkWrapper, ImgLogo, TermsLink } from "./styled";
// import ChannelList from './ChannelList';
import DiscoveryLogo from "../../assets/images/discovery logo.png";
import DiscoveryLogoBrazil from "../../assets/icons/discovery_logo_brazil.svg";
import { trackSimpleEvent } from "../../utils/analytics";

const Footer = ({
  copyright,
  mainLinkLogo,
  order,
  footerTheme,
  country,
  terms,
}) => (
  <Root
    flexDirection="column"
    p={4}
    m="auto"
    order={order}
    footerTheme={footerTheme}
  >
    <Card alignItems="center">
      <LinkWrapper
        href={
          country === "brazil"
            ? "https://www.discoverybrasil.com"
            : mainLinkLogo
        }
        onClick={() =>
          trackSimpleEvent("Footer", "DW - Footer Top", "Logo Go To Home")
        }
        rel="noopener noreferrer"
        target="_blank"
      >
        <ImgLogo
          src={country === "brazil" ? DiscoveryLogoBrazil : DiscoveryLogo}
          alt="Discovery"
          mx="auto"
          footerTheme={footerTheme}
        />
      </LinkWrapper>
    </Card>
    {/*<ChannelList
      country={country}
      py={4}
    /> */}

    <Card p={1}>
      {terms.map((term) => (
        <TermsLink
          href={term.url}
          key={term.url}
          onClick={() =>
            trackSimpleEvent("Footer", "DW - Footer Lower", term.text)
          }
        >
          {term.text}
        </TermsLink>
      ))}
    </Card>
    <Card p={1}>{copyright}</Card>
  </Root>
);

Footer.propTypes = {
  terms: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  copyright: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  mainLinkLogo: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  order: PropTypes.number,
  footerTheme: PropTypes.string,
  country: PropTypes.string.isRequired,
};

Footer.defaultProps = {
  copyright: `© ${new Date().getFullYear()} Discovery Networks International. All rights reserved.`,
  mainLinkLogo: "https://www.tudiscovery.com",
  order: 20,
  footerTheme: "orange",
};

export default React.memo(Footer);
