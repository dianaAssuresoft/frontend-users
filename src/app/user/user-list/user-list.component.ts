import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users:User[] = [];
  constructor(private userService: UserService) { }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.userService.list().subscribe(data => {
      this.users = data;
    });
  }


}
