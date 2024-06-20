import { HttpClient ,HttpResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from './login';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
   
  private basicUrl="http://localhost:9091/demo"

  constructor(private httpclient:HttpClient,private router:Router) { }

  public adduser(reg : Login):Observable<any>{

    return this.httpclient.post<any>(`${this.basicUrl}/addlogin`,reg);
  }
  public validateUser(reg : Login):Observable<any>{
    return this.httpclient.post<any>(`${this.basicUrl}/validateUser`,reg,{observe:'response',responseType:'text' as 'json'})
  }
 isAuthenticate(){

  if(sessionStorage.getItem('token')!=null){
    return true
  }
  else{
    return false;
  }

 }

 isStoredToken(id:string){
  if(id!=null&&id!=undefined){
  sessionStorage.setItem('token',id)
  }
 }

 isremovedToken(){
  sessionStorage.removeItem('token')
 }

 canAccess(){
  if(!this.isAuthenticate()){
    this.router.navigate(['/login'])
  }
 }
 canAuthenticate(){
  if(this.isAuthenticate()){
    this.router.navigate(['/dashboard'])
  }
 }

}
