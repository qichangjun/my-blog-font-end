import { Component, OnInit } from '@angular/core';
import { UserService } from './user/user.service';
import { AuthService } from '../../core/service/auth.service';

declare var moment:any;
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers:[UserService]
})
export class MainComponent implements OnInit {
  userInfo  = {
    userName : null,
    email : null,
    registerTime : null,
    role : null,
    message : []
  }
  mydate : Date;
  constructor(
    private _UserService : UserService,
    public _AuthService : AuthService
  ) { }

  ngOnInit() {
    this.getUserInfo()
    console.log (new Date())
    console.log (moment().add(10,'d').format("YYYY-MM-DD HH:mm:ss"));
  }

  testDate(){
    console.log (moment(this.mydate).format("YYYY-MM-DD HH:mm:ss"))
  }

  async getUserInfo(){
    this.userInfo = await this._UserService.getUserInfo(this._AuthService.getCurrentUserInfo().userName)
  }

  async deleteMessage(id){
    this.userInfo.message = await this._UserService.deleteMessage(id)
  }
}
