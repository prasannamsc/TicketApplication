import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(public loginserv:LoginService,private router:Router){

  }

signout(){
 this.loginserv.isremovedToken()
 this.router.navigate(['/login'])
}
}
