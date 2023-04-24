import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  
  user = {
    email: '',
    password: '',
  }
  constructor(
    private userService: UserService,
    private router: Router,
  ){

  }
  ngOnInit(): void {
  }

  registerUser(){
    const user = new User(this.user.email, this.user.password);
    this.userService.save(user).subscribe(data => {
      console.log(data);
      this.router.navigate(['list']);
    });

    console.log(this.user);
  }
}
