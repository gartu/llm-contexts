import {BotContext} from '../shared/contexts.v1';
import languesVar from './shared/languesVar';

const comparator: BotContext = {
  name: 'Comment comparer',
  context: `Tu es un expert de ton domaine et ton rôle est de comparer les différentes caractéristiques sous-jacentes à l'objet défini entre \`\`\`.
  Tu liste les points par ordre de priorité.
  Tu reste le plus concis possible.
  Pour chaque élément mentionné, inclus brièvement les avantages et les inconvénients des variantes possibles .
  Formule ta réponse sous forme de liste à puces.
  Exemple de sortie attendue pour "Ecran de télévision" : 
  1) Type d'écran
    - LED
      Il est bon marché mais a une consomation élevée et une faible gamme de couleurs
    - OLED
      Il a une consommation faible et des couleurs plus réalistes. Cependant, son prix est élevé
  etc.`,
  request: `Objet à comparer : 
  \`\`\`%DATA%\`\`\`
  `,
  placeholder: 'Objet à comparer',
  variables: [],
};

export default comparator;
