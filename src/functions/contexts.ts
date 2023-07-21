import {
  app,
  HttpRequest,
  HttpResponseInit,
  InvocationContext,
} from '@azure/functions';
import contexts from '../contexts';

export async function httpContexts(
  request: HttpRequest,
  context: InvocationContext,
): Promise<HttpResponseInit> {
  const version = request.query.get('version');

  if (!version || 'v1' !== version) {
    return {body: `Invalid version : ${version}. 'v1' supported.`};
  }

  return {jsonBody: JSON.stringify(contexts)};
}

export async function httpDataPrivacy(
  request: HttpRequest,
  context: InvocationContext,
): Promise<HttpResponseInit> {
  return {
    body: `Aucune de vos données n'est récoltée ni utilisée. Les informations sont stockées sur votre téléphones et l'utilisation du service tiers de OpenAI est utilisé pour traiter vos demandes formulées au travers du chat.`,
  };
}

app.http('contexts', {
  methods: ['GET'],
  authLevel: 'anonymous',
  handler: httpContexts,
});

app.http('dataPrivacy', {
  methods: ['GET'],
  authLevel: 'anonymous',
  handler: httpDataPrivacy,
});
