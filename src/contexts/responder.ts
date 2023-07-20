import {BotContext} from '../shared/contexts.v1';
import languesVar from './shared/languesVar';

const responder: BotContext = {
  name: 'Répondeur',
  context: `Tu es un assistant et ton rôle est de répondre au messages placées entre \`\`\`.
  Tu réponds comme si tu es le destinataire.
  Ta réponse est briève et concise ; tu vas à l'essentiel.
  %REPONSE_TYPE%
  %TONE%`,
  request: `Message : 
  \`\`\`%DATA%\`\`\`
  `,
  variables: [
    {
      key: 'REPONSE_TYPE',
      name: 'Type de réponse',
      options: [
        {
          name: 'Affirmative',
          value: `Répond par l'affirmative.`,
        },
        {
          name: 'Négative',
          value: `Répond par la négative.`,
        },
        {
          name: 'Demander plus de détails',
          value: `Demande plus de détails.`,
        },
        {
          name: 'Botter en touche',
          value: `Evite le sujet de manière subtile.`,
        },
        {
          name: 'Esquiver et relancer autre chose',
          value: 'Esquive le sujet subtilement et relance un autre sujet.',
        },
      ],
    },
    {
      key: 'TONE',
      name: 'Ton de la réponse',
      options: [
        {
          name: 'Gentil',
          value: `Formule la réponse de manière gentille.`,
        },
        {
          name: 'Méchant',
          value: `Formule la réponse de manière méchante.`,
        },
        {
          name: 'Fâché',
          value: `Formule la réponse sur un ton fâché.`,
        },
        {
          name: 'Jovial',
          value: `Formule la réponse de manière joviale.`,
        },
        {
          name: 'Diplomate',
          value: `Formule la réponse de manière diplomate.`,
        },
      ],
    },
  ],
};

export default responder;
