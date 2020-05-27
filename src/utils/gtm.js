import TagManager from 'react-gtm-module';

const initialize = (langcode) => {
  const gtmId = langcode === 'pt-BR' ? 'GTM-PHZFPCR' : 'GTM-N8NH9FD';
  TagManager.initialize({ gtmId });
};

const GoogleTagManager = {
  initialize,
};

export default GoogleTagManager;
