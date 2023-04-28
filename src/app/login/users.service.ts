import { Injectable } from '@angular/core';
import { user } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {}
  activeUsers: user[] = [
    new user('adri', 'barbo', true, 0),
    new user('gio', 'bianchi', true, 0),
    new user('ale', 'rossi', true, 0),
    new user('samu', 'verdi', true, 0),
  ];
  inactiveUsers: user[] = [
    new user('leo', 'poz', false, 0),
    new user('davide', 'calabria', false, 0),
    new user('rafael', 'leao', false, 0),
    new user('mike', 'maignan', false, 0),
  ];

  newUser(users: user) {
    let nuovoUtente = new user(
      users.nome,
      users.cognome,
      users.status,
      users.cambi
    );
    if (users.status == true) {
      this.activeUsers.push(nuovoUtente);
    } else {
      this.inactiveUsers.push(nuovoUtente);
    }
    console.log(this.activeUsers);
    console.log(this.inactiveUsers);
  }
  change(users: user) {
    users.cambi += 1;
    if (users.status == true) {
      users.status = !users.status;
      let index = this.activeUsers.indexOf(users);
      this.activeUsers.splice(index, 1);
      this.inactiveUsers.push(users);
    } else if (users.status == false) {
      users.status = !users.status;
      let index = this.inactiveUsers.indexOf(users);
      this.inactiveUsers.splice(index, 1);
      this.activeUsers.push(users);
    } else {
      users.status = !users.status;
      let index = this.inactiveUsers.indexOf(users);
      this.inactiveUsers.splice(index, 1);
      this.activeUsers.push(users);
    }
    console.log(this.activeUsers);
    console.log(this.inactiveUsers);
  }
}
