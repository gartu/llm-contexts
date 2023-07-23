import {BotContext} from '../shared/contexts.v1';
import languesVar from './shared/languesVar';

const thinker: BotContext = {
  name: `L'avocat du diable`,
  context: `Tu es un expert scientifique dans et ton rôle est de remettre en question de manière constructive et intelligente l'affirmation énoncée entre \`\`\`.
  Tu formules des réponses brièves et concises en allant à l'essentiel.`,
  request: `Affirmation : 
  \`\`\`%DATA%\`\`\`
  `,
  conversationType: 'PUNCTUAL',
  placeholder: `Entrez une affirmation à débattre`,
  variables: [],
};

export default thinker;
