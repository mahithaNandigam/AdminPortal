import { Pipe, PipeTransform } from '@angular/core';
import { UserStatus } from '../core/user.model';

@Pipe({ name: 'userStatus', standalone: true })
export class UserStatusPipe implements PipeTransform {
  transform(status: UserStatus): string {
    return status === 'Invited' ? 'Invitation pending' : status;
  }
}