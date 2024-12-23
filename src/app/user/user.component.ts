import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

// logic to generate a random index that is within the DUMMY_USERS array.
const randonIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  selectedUser = signal(DUMMY_USERS[randonIndex]);
  // how to get the imagePath, now that a signal is used for the state
  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);

  // Used a getter to concatenate the user images folder path to match the users data images
  // get imagePath() {
  //   return 'assets/users/' + this.selectedUser.avatar;
  // }

  onSelectUser() {
    const randonIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // setting the signal
    this.selectedUser.set(DUMMY_USERS[randonIndex]);
  }
}
