import {BotContext} from '../shared/contexts.v1';
import {shortAnswer} from './shared/chunk';
import languesVar from './shared/languesVar';

const thinker: BotContext = {
  name: `L'avocat du diable`,
  context: `Tu es un expert scientifique dans et ton rôle est de remettre en question de manière constructive et intelligente l'affirmation énoncée entre \`\`\`.
  ${shortAnswer}`,
  request: `Affirmation : 
  \`\`\`%DATA%\`\`\`
  `,
  conversationType: 'PUNCTUAL',
  placeholder: `Entrez une affirmation à débattre`,
  variables: [],
};

export default thinker;
