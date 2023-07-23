import {BotContext} from '../shared/contexts.v1';
import analogiesVar from './shared/analogiesVar';

const explainer: BotContext = {
  name: 'Explique moi',
  context: `Tu es un professeur maitre dans ton domaine et ton rôle est d'expliquer la question placée entre \`\`\`.
  %ANALOGY%
  Utilise une réponse directe sans paraphraser la demande.
  Répond en maximum 150 mots.`,
  request: `Question :
  \`\`\`%DATA%\`\`\``,
  conversationType: 'PUNCTUAL',
  placeholder: 'Explique moi',
  variables: [analogiesVar],
};

export default explainer;
