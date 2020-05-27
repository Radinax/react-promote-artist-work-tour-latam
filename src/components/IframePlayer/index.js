import React from 'react';

class IframePlayer extends React.Component {
  componentDidMount() {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.onload = () => {
      this.setState({
          isLoaded: true
      });
    };
    script.src = 'https://static.netshow.me/integration/embed.js';
    document.head.appendChild(script);
  }
  render() {
    return (
      <iframe
        allowfullscreen='yes'
        frameborder='0'
        scrolling='yes'
        src='https://embed-videos.netshow.me/t/i1wxOsiTp9w'
        width='100%'
        height='100%'
      />
    );
  }
}

export default IframePlayer;
