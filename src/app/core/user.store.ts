import { computed, Injectable, signal } from '@angular/core';
import { TeamUser, UserRole, UserStatus } from './user.model';

@Injectable({ providedIn: 'root' })
export class UserStore {
  private readonly userState = signal<TeamUser[]>([
    { id: 'u-01', name: 'Olivia Chen', email: 'olivia.chen@northstar.io', role: 'Administrator', status: 'Active', initials: 'OC', color: 'sage', joined: 'Mar 12, 2024' },
    { id: 'u-02', name: 'Marcus Johnson', email: 'marcus.j@northstar.io', role: 'Editor', status: 'Active', initials: 'MJ', color: 'blue', joined: 'Apr 03, 2024' },
    { id: 'u-03', name: 'Priya Sharma', email: 'priya.s@northstar.io', role: 'Editor', status: 'Active', initials: 'PS', color: 'lavender', joined: 'Apr 18, 2024' },
    { id: 'u-04', name: 'Ethan Williams', email: 'ethan.w@northstar.io', role: 'Viewer', status: 'Invited', initials: 'EW', color: 'peach', joined: 'May 02, 2024' },
    { id: 'u-05', name: 'Sofia Rodriguez', email: 'sofia.r@northstar.io', role: 'Administrator', status: 'Active', initials: 'SR', color: 'rose', joined: 'May 11, 2024' },
    { id: 'u-06', name: 'Noah Kim', email: 'noah.k@northstar.io', role: 'Viewer', status: 'Suspended', initials: 'NK', color: 'blue', joined: 'Jun 24, 2024' },
    { id: 'u-07', name: 'Amara Okafor', email: 'amara.o@northstar.io', role: 'Editor', status: 'Active', initials: 'AO', color: 'peach', joined: 'Jul 08, 2024' },
    { id: 'u-08', name: 'Lucas Martin', email: 'lucas.m@northstar.io', role: 'Viewer', status: 'Active', initials: 'LM', color: 'sage', joined: 'Aug 14, 2024' },
  ]);

  readonly users = this.userState.asReadonly();
  readonly activeCount = computed(() => this.userState().filter((user) => user.status === 'Active').length);
  readonly invitedCount = computed(() => this.userState().filter((user) => user.status === 'Invited').length);

  addUser(user: Pick<TeamUser, 'name' | 'email' | 'role'>): void {
    const initials = user.name.split(' ').map((part) => part[0]).slice(0, 2).join('').toUpperCase();
    this.userState.update((users) => [{
      ...user,
      id: crypto.randomUUID(),
      status: 'Invited',
      initials,
      color: 'sage',
      joined: new Intl.DateTimeFormat('en', { month: 'short', day: '2-digit', year: 'numeric' }).format(new Date()),
    }, ...users]);
  }

  setStatus(userId: string, status: UserStatus): void {
    this.userState.update((users) => users.map((user) => user.id === userId ? { ...user, status } : user));
  }

  setRole(userId: string, role: UserRole): void {
    this.userState.update((users) => users.map((user) => user.id === userId ? { ...user, role } : user));
  }
}