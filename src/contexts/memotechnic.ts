import {BotContext} from '../shared/contexts.v1';
import analogiesVar from './shared/analogiesVar';
import {noParaphrasing} from './shared/chunk';

const memotechnic: BotContext = {
  name: 'Moyen mémotechnique',
  context: `Tu es un génie de créativité et ton rôle de trouver d'efficaces et surprenants moyens mémotechniques sur le sujet mentionné entre \`\`\`.
  %ANALOGY%
  ${noParaphrasing}
  Donne au moins 3 idées.
  Répond en maximum 150 mots.`,
  request: `Sujet : 
  \`\`\`%DATA%\`\`\``,
  conversationType: 'PUNCTUAL',
  placeholder: 'De quoi souhaitez-vous vous rappeler ?',
  variables: [analogiesVar],
};

export default memotechnic;
