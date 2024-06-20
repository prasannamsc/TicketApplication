import { Component, OnInit } from '@angular/core';
import { Login } from '../login';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login:Login=new Login();
  constructor(private loginServ:LoginService,private router:Router){}

ngOnInit(): void {
  this.loginServ.canAuthenticate()
}



  onsubmit(){
 this.loginServ.validateUser(this.login).subscribe((data)=>{
if(data.body=="userLoggedSuccessfully"){
  this.loginServ.isStoredToken(this.login.emailId);
  this.router.navigate(['/dashboard'])
}
 })
}

  }


