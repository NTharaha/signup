import { Component, OnInit } from '@angular/core';
import { PopupMessageComponent } from './popup-message/popup-message.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'signup';

  signupUsers: any[] = [];

  signupObj: any = {
    userName: '',
    email: '',
    password: ''
  
  };
  loginObj: any = {
    userName: '',
    password: ''
  }

  ngOnInit(): void {
    const localData = localStorage.getItem('signupUsers');
    if(localData != null ) {
      this.signupUsers = JSON.parse(localData);

    }
  }

  onSignUp(){
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signupUsers',JSON.stringify(this.signupUsers));
 

  }
  onLogin(){
    debugger
    const isUserExist = this.signupUsers.find(m => m.email == this.loginObj.email && m.password == this.loginObj.password);

    if(isUserExist != undefined) {
      alert('User Login Successfully');
    }
    else {
      alert('Wrong credentials');

    }

  }
}
