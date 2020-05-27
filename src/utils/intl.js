const translations = {
  es : {
    TermsText: 'TÉRMINOS Y CONDICIONES',
    PrivacyText: 'POLÍTICA DE PRIVACIDAD',
    WatchSpecial: 'ver todo el especial',
  },
  'pt-BR': {
    TermsText: 'POLÍTICA DE PRIVACIDADE',
    PrivacyText: 'TERMOS DE USO',
    WatchSpecial: 'Confira a turnê dos Irmãos à Obra',
  }
};

const langcode = process.env.REACT_APP_LANGCODE || 'es';

const intl = key => translations[langcode][key] || '####';

export default intl;