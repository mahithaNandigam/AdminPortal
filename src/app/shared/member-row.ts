import { Component, input, output } from '@angular/core';
import { TeamUser, UserRole } from '../core/user.model';
import { UserStatusPipe } from './user-status.pipe';

@Component({
  imports: [UserStatusPipe],
  selector: 'tr[appMemberRow]',
  styleUrl: './member-row.css',
  templateUrl: './member-row.html',
})
export class MemberRowComponent {
  readonly user = input.required<TeamUser>();
  readonly statusChange = output<TeamUser>();
  readonly roleChange = output<{ userId: string; role: UserRole }>();

  protected changeRole(role: string): void {
    this.roleChange.emit({ userId: this.user().id, role: role as UserRole });
  }
}