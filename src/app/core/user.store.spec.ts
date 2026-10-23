import { TestBed } from '@angular/core/testing';
import { UserStore } from './user.store';

describe('UserStore', () => {
  let store: UserStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    store = TestBed.inject(UserStore);
  });

  it('derives member counts from signal state', () => {
    expect(store.users().length).toBe(8);
    expect(store.activeCount()).toBe(6);
    expect(store.invitedCount()).toBe(1);
  });

  it('adds invited members and updates status and role', () => {
    store.addUser({ name: 'Jamie Rivera', email: 'jamie@example.com', role: 'Editor' });
    const addedUser = store.users()[0];

    expect(addedUser.name).toBe('Jamie Rivera');
    expect(addedUser.initials).toBe('JR');
    expect(addedUser.status).toBe('Invited');
    expect(store.invitedCount()).toBe(2);

    store.setRole(addedUser.id, 'Administrator');
    store.setStatus(addedUser.id, 'Active');

    expect(store.users()[0].role).toBe('Administrator');
    expect(store.activeCount()).toBe(7);
    expect(store.invitedCount()).toBe(1);
  });
});