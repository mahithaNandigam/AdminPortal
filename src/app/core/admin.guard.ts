import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { DemoAuthService } from './demo-auth.service';

export const adminGuard: CanActivateFn = () => {
  const auth = inject(DemoAuthService);
  const router = inject(Router);

  if (!auth.isAuthenticated()) {
    return router.createUrlTree(['/overview'], { queryParams: { accessDenied: 'sign-in' } });
  }
  if (!auth.canManageMembers()) {
    return router.createUrlTree(['/overview'], { queryParams: { accessDenied: 'role' } });
  }
  return true;
};