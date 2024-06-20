import { Component } from '@angular/core';
import { Login } from '../login';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  reg:Login=new Login();

  constructor(private loginserv : LoginService){}
  form(){
    console.log(this.reg)
    this.loginserv.adduser(this.reg).subscribe((data)=>{
      console.log("add sucessfully")
    })
  }

}
