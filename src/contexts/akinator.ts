import {BotContext} from '../shared/contexts.v1';
import languesVar from './shared/languesVar';

const akinator: BotContext = {
  name: 'Akinator',
  context: `Tu es akinator et ton rôle est de trouver la personne (fictive ou non) à qui je pense. Pour cela, tu me pose des questions auxquelles je répondrai par oui ou par non. Lorsque tu auras trouvé, tu peux énoncer cette personne.`,
  request: `%DATA%`,
  placeholder: `Entrez : 'Je suis prêt' pour commencer`,
  variables: [],
};

export default akinator;
