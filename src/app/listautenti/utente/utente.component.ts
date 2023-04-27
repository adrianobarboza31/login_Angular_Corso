import { Component, Input } from '@angular/core';
import { user } from 'src/app/login/user.model';
import { UsersService } from 'src/app/login/users.service';
@Component({
  selector: 'app-utente',
  templateUrl: './utente.component.html',
  styleUrls: ['./utente.component.css'],
})
export class UtenteComponent {
  @Input() utente: user;
  @Input() ut: user;
  constructor(private UserService: UsersService) {}
  change() {
    this.UserService.change(this.utente || this.ut);
  }
}
