import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { WorkspaceHealth } from './workspace-api';

const demoHealth: WorkspaceHealth = {
  status: 'operational',
  region: 'local-demo',
  checkedAt: '2026-10-23T00:00:00.000Z',
};

export const requestIdInterceptor: HttpInterceptorFn = (request, next) => {
  if (!request.url.startsWith('/api/')) {
    return next(request);
  }

  return next(request.clone({
    setHeaders: { 'X-Request-Id': globalThis.crypto.randomUUID() },
  }));
};

export const demoApiInterceptor: HttpInterceptorFn = (request, next) => {
  if (request.method === 'GET' && request.url === '/api/workspace/health') {
    return of(new HttpResponse({ status: 200, body: demoHealth }));
  }

  return next(request);
};