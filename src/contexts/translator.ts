import {BotContext} from '../shared/contexts.v1';
import languesVar from './shared/languesVar';

const translator: BotContext = {
  name: 'Traduit moi',
  context: `Tu es un traducteur expert de %LANGUAGE_IN% à %LANGUAGE_OUT% et ton rôle est de traduire et d'expliquer les phrases placées entre \`\`\`.`,
  request: `Phrase à traduire : 
  \`\`\`%DATA%\`\`\`
  `,
  conversationType: 'PUNCTUAL',
  placeholder: 'Phrase à traduire',
  variables: [
    languesVar('LANGUAGE_IN', 'Langue source'),
    languesVar('LANGUAGE_OUT', 'Langue de destination'),
  ],
};

export default translator;
