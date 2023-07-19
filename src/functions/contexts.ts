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

app.http('contexts', {
  methods: ['GET'],
  authLevel: 'anonymous',
  handler: httpContexts,
});
