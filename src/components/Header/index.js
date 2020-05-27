import React, { useState } from "react";
import PropTypes from "prop-types";
// import { Flex, Image, Box, Link } from "rebass";
import { Flex, Image, Box } from "rebass";
import Headroom from "react-headroom";
// COMPONENT
import Menu from "../HamburguerMenu";
// STYLE
import {
  Root,
  Wrapper,
  CustomBox,
  // LogoBox,
  BoxChannel,
  MainLogo,
  Button,
  WrapperSearch,
  MainLink,
  // ImageChannel,
} from "./styled";
// ASSETS
import DiscoveryLogo from "../../assets/images/discovery logo.png";
import DiscoveryLogoBrazil from "../../assets/icons/discovery_logo_brazil.svg";
import IconMenu from "../../assets/icons/menu_white.svg";
// UTILS
// import { channels, channelsBrazil } from "../../utils/channels";
import { channels } from "../../utils/channels";
import { trackSimpleEvent } from "../../utils/analytics";

const Header = (props) => {
  const { order, innerWidth, country } = props;
  const [event, setEvent] = useState("closed");
  const search = false;
  const mainLink =
    country === "brazil"
      ? "https://www.discoverybrasil.com"
      : "https://www.tudiscovery.com";
  const logo = country === "brazil" ? DiscoveryLogoBrazil : DiscoveryLogo;
  // const countryData = country === "brazil" ? channelsBrazil : channels;
  /*
  const channel = countryData.filter(
    (channel) => channel.shortname === "discoveryhh"
  )[0];
    */
  return (
    <Box order={order} menuTheme="orange">
      {channels && channels.length > 0 && (
        <div>
          <Menu
            channels={channels}
            initialState={event}
            onChange={() => setEvent("closed")}
            menuTheme="orange"
          />
        </div>
      )}
      <Headroom
        style={{
          zIndex: 9,
        }}
      >
        <Wrapper menuTheme="orange">
          <CustomBox>
            <Root
              flexDirection="row"
              justifyContent="flex-end"
              py={2}
              m="auto"
              className={search ? "opened" : "closed"}
            >
              <Flex flexDirection="row" alignItems="center" flex="1">
                <Button
                  onClick={() => {
                    setEvent("opened");
                    trackSimpleEvent("Header", "DW - Menu", "Open Menu");
                  }}
                >
                  <Image src={IconMenu} />
                </Button>
                <BoxChannel innerWidth={innerWidth}>
                  <MainLink
                    href={mainLink}
                    onClick={() =>
                      trackSimpleEvent("Header", "DW - Logo", "Go To Home")
                    }
                    rel="noopener noreferrer"
                    target="_blank"
                    mt="3px"
                  >
                    <MainLogo src={logo} menuTheme="orange" />
                  </MainLink>
                  {/*channel && (
                    <LogoBox country={country} ml="16px" mt="0px">
                      <Link
                        href={channel.url || `/${channel.name.toLowerCase().replace(/\s/g, '-')}`}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <ImageChannel src={channel.logo} />
                      </Link>
                    </LogoBox>
                  )*/}
                </BoxChannel>
              </Flex>
              <WrapperSearch className="closed" />
            </Root>
          </CustomBox>
        </Wrapper>
      </Headroom>
    </Box>
  );
};

Header.propTypes = {
  searchPlaceHolder: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  logo: PropTypes.string,
  programmingText: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  seriesText: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  order: PropTypes.number,
  channel: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  menuTheme: PropTypes.string,
  innerWidth: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
};

Header.defaultProps = {
  searchPlaceHolder: "Buscar",
  logo: "",
  programmingText: "Programación",
  seriesText: "Series",
  order: 0,
  channel: null,
  menuTheme: "default",
};

export default Header;
