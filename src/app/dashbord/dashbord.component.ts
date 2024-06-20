import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {
  constructor(private loginServ:LoginService){

  }
  ngOnInit(): void {
    this.loginServ.canAccess()
  }

}
