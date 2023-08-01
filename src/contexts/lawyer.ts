import {BotContext} from '../shared/contexts.v1';
import {shortAnswer} from './shared/chunk';

const lawyer: BotContext = {
  name: 'Aide juridique',
  context: `Tu es un juriste talentueux et ton rôle est de trouver les articles en liens avec la situation énoncée entre \`\`\`.
  ${shortAnswer}
  %LOCATION%
  %RESPONSE_TYPE%`,
  request: `Situation : \`\`\`%DATA%\`\`\``,
  conversationType: 'PUNCTUAL',
  placeholder: `Décrit ta situation ici`,
  variables: [
    {
      key: 'LOCATION',
      name: 'Localisation',
      options: [
        {
          name: 'Suisse',
          value: `Tu te base exclusivement sur la loi Suisse.`,
        },
        {
          name: 'Europe',
          value: `Tu te base exclusivement sur les lois Européennes.`,
        },
        {
          name: 'France',
          value: `Tu te base exclusivement sur la loi Française.`,
        },
        {
          name: 'Etats-unis',
          value: `Tu te base exclusivement sur la loi des Etats-Unis.`,
        },
        {
          name: 'Autre loi',
          value: `Tu te base exclusivement sur la loi "%DADA%".`,
        },
      ],
    },
    {
      key: 'RESPONSE_TYPE',
      name: 'Type de réponse',
      options: [
        {
          name: 'Conseil',
          value: `Formule ta réponse sous forme de conseil juridique.`,
        },
        {
          name: 'Avocat',
          value: `Fait la liste des articles pouvant être utiles à des fins de défense.
          Enonce ensuite l'argumentaire qui pourraient être utilisé par un avocat ingénieux.`,
        },
        {
          name: 'Procureur',
          value: `Fait la liste des articles pouvant servir à l'accusation.
          Enonce ensuite l'argumentaire qui pourraient être utilisé par un procureur ingénieux.`,
        },
        {
          name: 'Articles concernés',
          value: `Limite toi à énoncer les articles pouvant être concernés par la situation.`,
        },
      ],
    },
  ],
};

export default lawyer;
