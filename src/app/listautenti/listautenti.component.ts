import { Component } from '@angular/core';
import { UsersService } from '../login/users.service';
import { user } from '../login/user.model';
@Component({
  selector: 'app-listautenti',
  templateUrl: './listautenti.component.html',
  styleUrls: ['./listautenti.component.css'],
})
export class ListautentiComponent {
  constructor(private UsersService: UsersService) {}
  online: user[] = [];
  offline: user[] = [];
  stampa() {
    this.online = this.UsersService.activeUsers;
    this.offline = this.UsersService.inactiveUsers;
  }
}
