import {
  Component,
  OnInit,
  Sanitizer,
  ViewChild
} from '@angular/core';
import {
  Movie
} from '../../../../Models/Movie';
import {
  MovieService
} from '../../../../Services/movie.service';
import {
  Router
} from '@angular/router';

import {
  DomSanitizer
} from '@angular/platform-browser';
import { OwlCarousel } from 'ngx-owl-carousel';
import { resolve } from 'url';
import { DanhSachPhimSapChieu, DanhSachPhimDangChieu } from '../../../../const/data';




declare var $: any;

@Component({
  selector: 'app-slide-list-movie',
  templateUrl: './slide-list-movie.component.html',
  styleUrls: ['./slide-list-movie.component.scss']
})
export class SlideListMovieComponent implements OnInit {

  // private MaNhom: string = 'GP07';

  //url hinh anh

  //Đối tượng nhận dữ liệu trả về khi gọi đến server
 

  private DanhSachPhimDangChieu = DanhSachPhimDangChieu
  private DanhSachPhimSapChieu = DanhSachPhimSapChieu

  private tenphim: any;
  public urlPhim: any;
  private url: any;

  public check: boolean = false;

  customOptions: any = {
    margin: 20,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    nav: true,
    responsive: {
      0: {
        items: 2
      },
      550: {
        items: 3
      },
      940: {
        items: 4
      }
    },
  }



  constructor(private servicePhim: MovieService, private router: Router, private doom: DomSanitizer) {
  }

  ngOnInit() {
    // this.GetPhim();
    const arrPhim = [...this.DanhSachPhimDangChieu,...this.DanhSachPhimSapChieu]
    this.SetStorage(arrPhim)
  }

  activeSlide() {
    this.check = true;
  }

  promiseFunc(func) {
    return new Promise((resolve, reject) => {
      func.subscribe(result => {
        resolve(result)
      })
    })
  }

  async GetPhim() {
    // const res = await this.promiseFunc(this.servicePhim.LayDanhSachPhim())
    // console.log(res)
  }


  XemChiTiet(phimID, groupID) {
    this.router.navigate(['Home/ChiTietPhim'], {
      queryParams: {
        id: phimID
      }
    });
  }

  thongtin(title, url) {
    url = url.replace("watch?v=", "embed/");
    this.tenphim = title;
    this.urlPhim = this.doom.bypassSecurityTrustResourceUrl(url);
  }

  SetStorage(result) {
    localStorage.removeItem("DanhSachPhim");
    localStorage.setItem("DanhSachPhim", JSON.stringify(result));
  }










}