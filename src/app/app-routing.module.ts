import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule,Form } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LearnmoreComponent } from './learnmore/learnmore.component';
import { MsgComponent } from './msg/msg.component';
import { DashbordComponent } from './dashbord/dashbord.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"dashboard",component:DashbordComponent},
  {path:"home",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"contact",component:ContactComponent},
  {path:"learnmore",component:LearnmoreComponent},
  {path:"msg",component:MsgComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)   
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
