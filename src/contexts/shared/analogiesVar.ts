import {Variable} from '../../shared/contexts.v1';

const analogiesVar: Variable = {
  key: 'ANALOGY',
  name: 'Analogie',
  options: [
    {
      name: 'Cookies',
      value: 'Utilise une analogie à des cookies et un verre de lait.',
    },
    {
      name: 'Cinématographique',
      value: 'Utilise une analogie cinématographique.',
    },
    {
      name: 'Film spécifique',
      value: 'Utilise une analogie au film `%DATA%`.',
    },
    {
      name: 'Jeux vidéo spécifique',
      value: 'Utilise une analogie au jeu vidéo `%DATA%`.',
    },
    {
      name: 'Suprenante',
      value: 'Utilise une analogie particulièrement suprenante.',
    },
    {
      name: 'Autre',
      value: 'Utilise une analogie de `%DATA%`.',
    },
  ],
};
export default analogiesVar;
