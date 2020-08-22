import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-trang-chi-tiet',
  templateUrl: './trang-chi-tiet.component.html',
  styleUrls: ['./trang-chi-tiet.component.scss']
})
export class TrangChiTietComponent implements OnInit {
  
  public movieDetail:any;

  constructor() { }

  getMovieDetail(data){
    this.movieDetail = data
  }

  ngOnInit() {    
   
  }


}
