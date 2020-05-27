import Argentina from '../assets/images/argentina.png';
import Brazil from '../assets/images/brazil.png';
import Chile from '../assets/images/chile.png';
import Colombia from '../assets/images/colombia.png';
import Mexico from '../assets/images/mexico.png';

export const data = {
  time: {
    es: {
      plural: 'DÍAS',
      singular: 'DÍA',
    },
    pt: {
      plural: 'DIAS',
      singular: 'DIA',
    },
  },
  destinationLATAM: [
    {
      time: '4pm', name: 'mexico', flag: Mexico, country: 'México', date_es: '17 de agosto',
    },
    {
      time: '8:30pm', name: 'brasil', flag: Brazil, country: 'Brasil', date_es: '20 de agosto',
    },
    {
      time: '3pm', name: 'chile', flag: Chile, country: 'Chile', date_es: '23 de agosto',
    },
    {
      time: '3pm', name: 'argentina', flag: Argentina, country: 'Argentina', date_es: '24 de agosto',
    },
    {
      time: '6:50pm', name: 'colombia', flag: Colombia, country: 'Colombia', date_es: '27 de agosto',
    },
  ],
  destinationBrasil: [
    {
      time: '3pm', flag: Brazil, country: 'Brasil', date_es: '20 de agosto', date: 'August, 20, 2019',
    },
  ],
  headline: {
    es: 'Próximas transmisiones',
    pt: 'Irmãos a Obra no Brasil',
  },
  nextStop: 'Próxima parada',
  specialText: 'ver todo el especial',
};
