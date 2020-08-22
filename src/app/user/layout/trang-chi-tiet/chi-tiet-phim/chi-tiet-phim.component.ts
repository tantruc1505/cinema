import {
  Component,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';
import {
  Subscriber
} from 'rxjs/Subscriber';
import {
  Subscription
} from 'rxjs/Subscription';
import {
  Router,
  ActivatedRoute
} from '@angular/router';
import {
  MovieService
} from '../../../../Services/movie.service';

import {
  DomSanitizer
} from '@angular/platform-browser';
import { DanhSachPhimDangChieu, DanhSachPhimSapChieu } from '../../../../const/data';

declare var $: any;

@Component({
  selector: 'app-chi-tiet-phim',
  templateUrl: './chi-tiet-phim.component.html',
  styleUrls: ['./chi-tiet-phim.component.scss']
})
export class ChiTietPhimComponent implements OnInit {

  public MovieDetail: any = null
  private MovieID: number;



  private tenphim: any;
  public urlPhim: any;

  @Output() getMovieDetail = new EventEmitter();


  constructor(private router: Router, private activatedRoute: ActivatedRoute, private moviesService: MovieService, private doom: DomSanitizer) {}

  ngOnInit() {
    this.SetTopPage();
    this.SetThamSo();
    this.GetPhim();

    $("#Footer").css("margin-bottom","0");
  }

  //Set tham so de lay lich chieu
  SetThamSo() {
    this.activatedRoute.queryParams.subscribe(thamso => {
      this.MovieID = thamso['id'];
      const temp:Number = parseInt(thamso['id'])
      this.MovieDetail = temp < 5 ? DanhSachPhimDangChieu.filter(x => x.ID == this.MovieID)[0] : DanhSachPhimSapChieu.filter(x => x.ID == this.MovieID)[0]
      this.getMovieDetail.emit(this.MovieDetail)
    });
  }

  GetPhim() {


    // this.paramsSub2 = this.moviesService.LayChiTietPhim_LichChieuTheoNhom(this.MovieID, this.MaNhom).subscribe((result: any) => {
    //   console.log(result)
    //   this.MovieDetail = result;
    // }, error => {
    //   this.MovieDetail = error;
    // });
  }

  thongtin(title, url) {
    this.tenphim = title;
    this.urlPhim = this.doom.bypassSecurityTrustResourceUrl(url);
  }

  //Auto top
  SetTopPage() {
    $(".bookticket").on("click", function (e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
      }, 500, 'linear');
    })
  }

  ngOnDestroy() {
    // this.paramsSub1.unsubscribe();
    // this.paramsSub2.unsubscribe();
  }

}