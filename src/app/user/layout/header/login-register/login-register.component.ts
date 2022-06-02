import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../Services/user.service';

declare var $:any;

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent implements OnInit {

  constructor(public userService:UserService) { }

  public statusLogin:boolean = false;
  public TenUser:any;


  ngOnInit() {
    this.CheckLogin();
  }

  ThongTinUser(thongtin){
    if(thongtin != null){
      this.statusLogin = true;
      this.TenUser = thongtin.FullName;
      localStorage.setItem('localUser',JSON.stringify(thongtin));
    }
    else{
      this.statusLogin = false;
    }
  }

 
  DangXuat(event)
  {
    this.userService.DangXuat();
    event.preventDefault();
  }

  CheckLogin()
  {
    if(this.userService.CheckLogin() == true)
    {
      this.statusLogin = true;
      let ThongTinUser = this.userService.LayThongTinUser();
      this.TenUser = ThongTinUser.FullName;
    }
    else
    {
      this.statusLogin = false;
    }
  }

}
