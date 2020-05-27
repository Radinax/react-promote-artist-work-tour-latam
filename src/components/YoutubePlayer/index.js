import React from "react";
import PropTypes from "prop-types";
import { trackYouTube } from "../../utils/analytics";
// import { youtubeReady } from '../../utils/youtubeApi';

// https://www.youtube.com/watch?v=bepP2OPHKEg

const width = window.innerWidth;
const playerHeight = `${(width * 466) / 1440}`;
const playerWidth = `${(width * 827) / 1440}`;
const playerHeightMobile = `${(width * 234) / 414}`;
let loadYT;
class YoutubePlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: width < 769 ? width : playerWidth,
      height: width < 769 ? playerHeightMobile : playerHeight,
    };
  }

  componentDidMount() {
    const { width, height } = this.state;
    const { account } = this.props;
    window.addEventListener("resize", this.handleResize);
    if (!loadYT) {
      loadYT = new Promise((resolve) => {
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName("script")[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        window.onYouTubeIframeAPIReady = () => resolve(window.YT);
      });
    }
    loadYT.then((YT) => {
      this.player = new YT.Player("player", {
        height: height,
        width: width,
        videoId: account,
        playerVars: { autoplay: 0 },
        events: {
          onReady: this.onPlayerReady,
          onStateChange: this.onPlayerStateChange,
        },
      });
    });
  }

  onPlayerStateChange = (e) => {
    switch (e.data) {
      case 0:
        return trackYouTube("ENDED");
      case 1:
        return trackYouTube("PLAY");
      case 2:
        return trackYouTube("PAUSED");
      default:
        return "";
    }
  };

  onPlayerReady = (e) => {
    const title = e.target.m.videoData.title;
    trackYouTube(title, "START");
  };

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    const handlerWidth = window.innerWidth;
    const playerHeight = `${(handlerWidth * 466) / 1440}`;
    const playerHeightMobile = `${(handlerWidth * 234) / 414}`;
    const playerWidth = `${(handlerWidth * 827) / 1440}`;
    this.setState({
      width: handlerWidth < 415 ? handlerWidth : playerWidth,
      height: handlerWidth < 415 ? playerHeightMobile : playerHeight,
    });
  };

  render() {
    const { width, height } = this.state;
    return (
      <iframe
        width={width}
        title="playerTube"
        height={height}
        src="https://www.youtube.com/embed/RN1UVIv07QM?autoplay=0"
        frameborder="0"
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    );
  }
}

YoutubePlayer.propTypes = {
  account: PropTypes.string.isRequired,
};

export default YoutubePlayer;
