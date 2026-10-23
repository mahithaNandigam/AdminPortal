import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { DemoAccess, DemoAuthService } from './core/demo-auth.service';
import { WorkspaceApi } from './core/workspace-api';

@Component({
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App implements OnInit, OnDestroy {
  protected readonly demoAuth = inject(DemoAuthService);
  protected readonly healthStatus = signal<'checking' | 'operational' | 'unavailable'>('checking');
  private readonly workspaceApi = inject(WorkspaceApi);
  private healthSubscription = new Subscription();
  protected readonly navigation = [
    { label: 'Overview', path: '/overview', icon: 'grid' },
    { label: 'Team members', path: '/users', icon: 'users' },
  ];

  protected setDemoAccess(value: string): void {
    this.demoAuth.setMode(value as DemoAccess);
  }

  ngOnInit(): void {
    this.healthSubscription = this.workspaceApi.getHealth().subscribe({
      next: () => this.healthStatus.set('operational'),
      error: () => this.healthStatus.set('unavailable'),
    });
  }

  ngOnDestroy(): void {
    this.healthSubscription.unsubscribe();
  }
}
