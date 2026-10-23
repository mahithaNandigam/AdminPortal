import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { HttpClient, provideHttpClient, withInterceptors } from '@angular/common/http';
import { demoApiInterceptor, requestIdInterceptor } from './http.interceptors';
import { WorkspaceApi } from './workspace-api';

describe('WorkspaceApi and HTTP interceptors', () => {
  let api: WorkspaceApi;
  let http: HttpClient;
  let httpTesting: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(withInterceptors([requestIdInterceptor, demoApiInterceptor])),
        provideHttpClientTesting(),
      ],
    });
    api = TestBed.inject(WorkspaceApi);
    http = TestBed.inject(HttpClient);
    httpTesting = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpTesting.verify());

  it('returns the local demo health response without a network request', () => {
    api.getHealth().subscribe((health) => {
      expect(health.status).toBe('operational');
      expect(health.region).toBe('local-demo');
    });

    expect(httpTesting.match('/api/workspace/health')).toHaveLength(0);
  });

  it('adds a request id to API calls passed to the backend', () => {
    let received = false;
    http.get('/api/example').subscribe(() => received = true);
    const request = httpTesting.expectOne('/api/example');

    expect(request.request.headers.get('X-Request-Id')).toMatch(/^[0-9a-f-]{36}$/);
    request.flush({});
    expect(received).toBe(true);
  });
});