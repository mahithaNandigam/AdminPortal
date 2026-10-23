import { Component, computed, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TeamUser, USER_ROLES, UserRole, UserStatus } from '../../core/user.model';
import { UserStore } from '../../core/user.store';
import { FocusOnOpenDirective } from '../../shared/focus-on-open.directive';
import { MemberRowComponent } from '../../shared/member-row';
import { PageHeaderComponent } from '../../shared/page-header';

@Component({
  imports: [FocusOnOpenDirective, MemberRowComponent, PageHeaderComponent, ReactiveFormsModule],
  selector: 'app-users-page',
  styleUrl: './users.css',
  templateUrl: './users.html',
})
export class UsersPage {
  protected readonly store = inject(UserStore);
  protected readonly searchTerm = signal('');
  protected readonly statusFilter = signal<'All' | UserStatus>('All');
  protected readonly showInviteForm = signal(false);
  protected readonly roles = USER_ROLES;
  protected readonly filteredUsers = computed(() => {
    const query = this.searchTerm().trim().toLowerCase();
    return this.store.users().filter((user) => {
      const matchesSearch = !query || `${user.name} ${user.email} ${user.role}`.toLowerCase().includes(query);
      return matchesSearch && (this.statusFilter() === 'All' || user.status === this.statusFilter());
    });
  });
  protected readonly inviteForm = new FormGroup({
    name: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(2)] }),
    email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
    role: new FormControl<UserRole>('Editor', { nonNullable: true }),
  });

  protected onSearch(value: string): void {
    this.searchTerm.set(value);
  }

  protected setFilter(value: string): void {
    this.statusFilter.set(value as 'All' | UserStatus);
  }

  protected inviteUser(): void {
    if (this.inviteForm.invalid) {
      this.inviteForm.markAllAsTouched();
      return;
    }
    this.store.addUser(this.inviteForm.getRawValue());
    this.inviteForm.reset({ name: '', email: '', role: 'Editor' });
    this.showInviteForm.set(false);
  }

  protected toggleStatus(user: TeamUser): void {
    this.store.setStatus(user.id, user.status === 'Suspended' ? 'Active' : 'Suspended');
  }

  protected changeRole(userId: string, role: string): void {
    this.store.setRole(userId, role as UserRole);
  }
}