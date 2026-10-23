export type UserRole = 'Administrator' | 'Editor' | 'Viewer';
export type UserStatus = 'Active' | 'Invited' | 'Suspended';

export interface TeamUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  status: UserStatus;
  initials: string;
  color: string;
  joined: string;
}

export const USER_ROLES: UserRole[] = ['Administrator', 'Editor', 'Viewer'];