  import { Component, OnInit } from '@angular/core';
import { UserModel } from '../models/user.model';

@Component({
  selector: 'app-redister',
  templateUrl: './redister.component.html',
  styleUrls: ['./redister.component.css']
})
export class RedisterComponent implements OnInit {
  userModel: UserModel;
  myform;


  constructor() { 
    this.userModel = <UserModel>{}
  }

  ngOnInit() {

  }
  registerUser() {
    /*
    this.userName = f.userName.value;
    this.userAge = f.userAge.value;
    this.userGender = f.userGender.value;
    this.userCell = f.userCell.value;
    */
  }

}
