/* eslint-disable no-unused-vars */
import React from "react";
import { Flex, Link, Box } from "rebass";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Helmet } from "react-helmet";
// COMPONENTS
import Footer from "./components/Footer";
import Header from "./components/Header";
import SocialMediaBox from "./components/SocialMediaBox";
import YoutubePlayer from "./components/YoutubePlayer";
import Sponsor from "./components/Sponsor";
import CountryBanner from "./components/CountryBanner";
import Share from "./components/Share";
import Ads from "./components/Ads";
// STYLE
import { Wrapper, GradientBackground, ShareModule, SpecialBox } from "./styled";
// ASSETS
import faviconLATAM from "./assets/images/favicon.ico";
import faviconBrazil from "./assets/images/favicon-brasil.ico";
import Preview from "./assets/images/preview.jpg";
// UTILS
import control from "./utils/control";
import GoogleTagManager from "./utils/gtm";
import { esCodes, ptCodes } from "./utils/tagCodes";
import { terms } from "./utils/terms";
import { links, titleText, tags, metaDescription } from "./utils/text.js";

const viewSpecial = (portuguese) => (
  <SpecialBox
    brazilBox={portuguese}
    justifyContent="center"
    alignItems="center"
  >
    <Link
      href={portuguese ? links.pt : links.es}
      rel="noopener noreferrer"
      target="_blank"
      style={{ textDecoration: "none", color: "white" }}
    >
      {portuguese
        ? "Confira a turnê dos Irmãos à Obra"
        : "Ver todo el especial"}
    </Link>
  </SpecialBox>
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
    const script = document.createElement("script");
    script.src = "https://static.netshow.me/integration/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    this.setState({
      width: window.innerWidth,
    });
  };

  render() {
    const { width } = this.state;
    const langCode = process.env.REACT_APP_LANGCODE;
    const redirect = false;
    const showPreview = false;
    const adUnitPre =
      langCode === "pt-BR" ? "discoverybrasil" : "discoverylatam";
    const adText = langCode === "pt-BR" ? "publicidade" : "publicidad";
    const adLangCode = langCode === "pt-BR" ? "br" : "lat";
    GoogleTagManager.initialize(langCode);
    // eslint-disable-next-line no-undef
    dataLayer.push({
      name: "live stream (property brothers)",
      id: "lv1",
      brand: "home & health",
      category: "live stream",
    });
    const country = langCode === "pt-BR" ? control.brazil : control.colombia;
    const showBrazilData = country.name === "brazil";
    const showSpecialBox = width < 1281 || showBrazilData;
    const brazilPlayer = (
      <iframe
        title="Brazil Player"
        allowFullScreen="yes"
        frameBorder="0"
        scrolling="no"
        src="https://embed-videos.netshow.me/t/i1wxOsiTp9w"
        width={width}
        height="1000px"
      />
    );
    const previewComponent = <LazyLoadImage src={Preview} />;
    /*
    const youtubeP = (
      <iframe width="827" title="playerTube" height="466" src="https://www.youtube.com/embed/qvTNnEPvfVw?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    )
    */
    const youtubePlayer = showPreview ? (
      previewComponent
    ) : (
      <YoutubePlayer account={country.youtube} />
    );
    const shareTitle = country.portuguese ? "Compartilhar" : "Comparte";
    const favicon = showBrazilData ? faviconBrazil : faviconLATAM;
    const pageTitle = showBrazilData ? titleText.pt : titleText.es;
    const pageDescription = showBrazilData
      ? metaDescription.pt
      : metaDescription.es;
    const keywords = showBrazilData ? tags.pt : tags.es;
    const adsIdTop = showBrazilData ? ptCodes.static_top : esCodes.static_top;
    const adsIdBottom = showBrazilData
      ? ptCodes.static_bottom
      : esCodes.static_bottom;
    return (
      <Wrapper noBackground={showBrazilData} className="App">
        <Helmet>
          <link rel="shortcut icon" href={favicon} />
          <meta name="description" content={pageDescription}></meta>
          <meta name="keywords" content={keywords}></meta>
          {showBrazilData && (
            <script>
              window.location.href =
              "https://www.discoverybrasil.com/special/irmaos-obra-no-brasil";
            </script>
          )}
          {redirect && !showBrazilData && (
            <script>
              window.location.href =
              "https://tudiscovery.com/special/hermanos-la-obra-tour";
            </script>
          )}
          <meta
            name="twitter:card"
            content="summary_large_image"
            data-react-helmet="true"
          />
          <meta
            name="twitter:site"
            content="@discoverymujer"
            data-react-helmet="true"
          />
          <meta
            name="twitter:title"
            content="#HermanosALaObraTour En Vivo | Discovery H%26H"
            data-react-helmet="true"
          />
          <meta
            name="twitter:description"
            content="Transmisión oficial de Hermanos a la Obra Tour en YouTube. #hhlatinoamerica #hermanosalaobratour"
            data-react-helmet="true"
          />
          <meta
            name="twitter:creator"
            content="@discoverymujer"
            data-react-helmet="true"
          />
          <meta
            name="twitter:image:src"
            content="https://www.tudiscovery.com"
            data-react-helmet="true"
          />
          <meta
            property="og:title"
            content="#HermanosALaObraTour En Vivo | Discovery H%26H"
            data-react-helmet="true"
          />
          <meta property="og:type" content="website" data-react-helmet="true" />
          <meta
            property="og:url"
            content=" https://www.tudiscovery.com/special/hermanos-la-obra-tour-en-vivo"
            data-react-helmet="true"
          />
          <meta
            property="og:image"
            content="https://www.tudiscovery.com"
            data-react-helmet="true"
          />
          <meta
            property="og:description"
            content=" Transmisión oficial de Hermanos a la Obra Tour en YouTube. #hhlatinoamerica #hermanosalaobratour"
            data-react-helmet="true"
          />
          <meta
            property="og:site_name"
            content="Discovery Latinoamérica"
            data-react-helmet="true"
          />
          <title>{pageTitle}</title>
        </Helmet>
        <Header country={country.name} innerWidth={width} />
        {!showBrazilData && <GradientBackground />}
        {country.sponsor && (
          <Sponsor country={country} mobile={width < 1025} innerWidth={width} />
        )}
        <ShareModule showBrazilData={showBrazilData}>
          <Share
            portuguese={country.portuguese}
            title={shareTitle}
            shareDescription={country.description}
            mobile={width < 1025}
          />
        </ShareModule>
        {!showBrazilData && (
          <CountryBanner country={country.name} width={width} />
        )}
        <Flex mt={showBrazilData ? "68px" : "24px"} justifyContent="center">
          {showBrazilData ? brazilPlayer : youtubePlayer}
        </Flex>
        {!showBrazilData && (
          <Box mt="40px" mb="40px">
            <Ads
              adTitle={adText}
              bgColor="ads-alpha"
              adSlotConfig={[
                {
                  adSlotSize: [728, 90],
                  adUnitText: `${adUnitPre}/propertybrothers_${adLangCode}_tour_top`,
                  adSlotId: adsIdTop,
                },
                {
                  adSlotSize: [320, 50],
                  adUnitText: `${adUnitPre}/propertybrothers_${adLangCode}_tour_top`,
                  adSlotId: adsIdTop,
                },
              ]}
            />
          </Box>
        )}
        {showSpecialBox && (
          <Flex justifyContent="center">{viewSpecial(showBrazilData)}</Flex>
        )}
        <SocialMediaBox socialMedia={country.socialMedia} innerWidth={width} />
        <Box mt="40px" mb="40px">
          <Ads
            adTitle={adText}
            bgColor="ads-alpha"
            adSlotConfig={[
              {
                adSlotSize: [728, 90],
                adUnitText: `${adUnitPre}/propertybrothers_${adLangCode}_tour_bottom`,
                adSlotId: adsIdBottom,
              },
              {
                adSlotSize: [320, 50],
                adUnitText: `${adUnitPre}/propertybrothers_${adLangCode}_tour_bottom`,
                adSlotId: adsIdBottom,
              },
            ]}
          />
        </Box>
        <Footer terms={terms} country={country.name} />
      </Wrapper>
    );
  }
}

export default App;
