import { Component } from '@angular/core';
import { UsersService } from './users.service';
import { user } from './user.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  nome: string;
  cognome: string;
  status: boolean;
  cambi: number = 0;
  constructor(private UsersService: UsersService) {}
  aggiungi() {
    let boolStatus = Boolean(this.status);

    let utente = new user(this.nome, this.cognome, boolStatus, this.cambi);
    this.UsersService.newUser(utente);
  }
}
