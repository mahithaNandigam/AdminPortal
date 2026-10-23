import { Routes } from '@angular/router';
import { adminGuard } from './core/admin.guard';

export const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'overview' },
	{
		path: 'overview',
		loadComponent: () => import('./pages/dashboard/dashboard').then((page) => page.DashboardPage),
	},
	{
		path: 'users',
		canActivate: [adminGuard],
		loadComponent: () => import('./pages/users/users').then((page) => page.UsersPage),
	},
	{ path: '**', redirectTo: 'overview' },
];
