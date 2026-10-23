import { computed, Injectable, signal } from '@angular/core';

export type DemoAccess = 'Administrator' | 'Viewer' | 'Signed out';

@Injectable({ providedIn: 'root' })
export class DemoAuthService {
  private readonly accessState = signal<DemoAccess>('Administrator');

  readonly mode = this.accessState.asReadonly();
  readonly isAuthenticated = computed(() => this.accessState() !== 'Signed out');
  readonly canManageMembers = computed(() => this.accessState() === 'Administrator');

  setMode(mode: DemoAccess): void {
    this.accessState.set(mode);
  }
}