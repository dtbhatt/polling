import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

import { Router, ActivatedRoute, Routes, RouterModule } from '@angular/router';
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-enter',
  templateUrl: './enter.component.html',
  styleUrls: ['./enter.component.css']
})

export class EnterComponent implements OnInit {

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private router: Router
  ) { }
  name = ''

  enter(){
    this._httpService.updateUser(this.name)
    this.router.navigate(["/questions"])
  }

  ngOnInit() {

    // this._httpService.questionAll()
    // .then( data => {
    //     console.log(data)
    //  } )
    // .catch( err => {
    //   console.log("oquestionAll error")
    //   console.log(err);
    // })
    //
    // this._httpService.questionNew("data")
    // .then( data => {
    //     console.log(data)
    //  } )
    // .catch( err => {
    //   console.log("questionNew error")
    //   console.log(err);
    // })
    //
    //
    // this._httpService.questionShow("data")
    // .then( data => {
    //     console.log(data)
    //  } )
    // .catch( err => {
    //   console.log("questionNew error")
    //   console.log(err);
    // })
    //
    //
    // this._httpService.optionVote("data")
    // .then( data => {
    //     console.log(data)
    //  } )
    // .catch( err => {
    //   console.log("questionNew error")
    //   console.log(err);
    // })


  }

}
