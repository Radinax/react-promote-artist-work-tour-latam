import React from 'react';
import PropTypes from 'prop-types';
import InstagramEmbed from 'react-instagram-embed';

class InstagramBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    const { account } = this.props;
    fetch(`https://www.instagram.com/${account}?__a=1`)
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  render() {
    const { data } = this.state;
    const { innerWidth } = this.props;
    const postData = data.graphql
      && data.graphql.user && data.graphql.user.edge_owner_to_timeline_media.edges;
    const postComponent = url => (
      <InstagramEmbed
        url={`https://instagr.am/p/${url}/`}
        maxWidth={365}
        hideCaption={false}
        containerTagName="div"
        protocol=""
        injectScript
        onLoading={() => {}}
        onSuccess={() => {}}
        onAfterRender={() => {}}
        onFailure={() => {}}
        key={url}
      />
    );
    return (
      <div style={{ overflow: 'auto', width: innerWidth < 769 ? '340px' : '365px' }}>
        <div style={{ overflow: 'hidden' }}>
          {postData !== undefined && postData.map((post) => {
            const url = post.node.shortcode;
            return postComponent(url);
          })}
        </div>
      </div>
    );
  }
}

InstagramBox.propTypes = {
  innerWidth: PropTypes.number.isRequired,
  account: PropTypes.string.isRequired,
};

export default InstagramBox;
