import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';


// logic to generate a random index that is within the DUMMY_USERS array.
const randonIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectedUser = DUMMY_USERS[randonIndex];
}
