import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, provideRouter, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { adminGuard } from './admin.guard';
import { DemoAuthService } from './demo-auth.service';

describe('adminGuard', () => {
  let auth: DemoAuthService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideRouter([])] });
    auth = TestBed.inject(DemoAuthService);
    router = TestBed.inject(Router);
  });

  function checkGuard(): true | UrlTree {
    return TestBed.runInInjectionContext(() => adminGuard(
      {} as ActivatedRouteSnapshot,
      {} as RouterStateSnapshot,
    )) as true | UrlTree;
  }

  it('allows administrators to manage members', () => {
    expect(checkGuard()).toBe(true);
  });

  it('redirects viewers with a role-denied reason', () => {
    auth.setMode('Viewer');

    const result = checkGuard();

    expect(result instanceof UrlTree).toBe(true);
    expect(router.serializeUrl(result as UrlTree)).toContain('accessDenied=role');
  });

  it('redirects signed-out users to sign-in', () => {
    auth.setMode('Signed out');

    const result = checkGuard();

    expect(result instanceof UrlTree).toBe(true);
    expect(router.serializeUrl(result as UrlTree)).toContain('accessDenied=sign-in');
  });
});