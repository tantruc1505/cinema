import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  MovieService
} from '../../../../Services/movie.service';

import {
  Router,
  ActivatedRoute
} from '@angular/router';

import {
  LichChieu
} from "../../../../Models/LichChieu";
import {
  GioChieu
} from "../../../../Models/GioChieu";

declare var $: any;

@Component({
  selector: 'app-lich-chieu',
  templateUrl: './lich-chieu.component.html',
  styleUrls: ['./lich-chieu.component.scss']
})
export class LichChieuComponent implements OnInit {

  private MovieID: number;
  private MaNhom: any;

  public trangthai:boolean;

  private arrLichChieu: any = [];
  private LichChieu = new LichChieu();
  private GioChieu = new GioChieu();

  @Input() MovieDetail;


  constructor(private router: Router, private activatedRoute: ActivatedRoute, private moviesService: MovieService) {}


  DatVe(ShowTimeID, ngaychieu, giochieu,tenrap,event) {
    this.router.navigate(['Home/DatVe'], {
      queryParams: {
        idShow: ShowTimeID,
        idPhim: this.MovieID,
        group: this.MaNhom,
        ngaychieu: ngaychieu,
        giochieu: giochieu,
        tenrap: tenrap,
      }
    });
  }


  //Lấy chi tiết phim lịch chiếu dựa vào 2 tham số
  SetThamSo() {
    this.activatedRoute.queryParams.subscribe(thamso => {
      this.MovieID = thamso['id'];
      // const temp:Number = parseInt(thamso['id'])
      // this.MovieDetail = temp < 5 ? DanhSachPhimDangChieu.filter(x => x.ID == this.MovieID)[0] : DanhSachPhimSapChieu.filter(x => x.ID == this.MovieID)[0]
    });
  }

  GetLichChieu() {
      if(this.MovieDetail.ShowTimes.length > 0)
      {
        this.trangthai = true;
  
        for (let i = 0; i < this.MovieDetail.ShowTimes.length; i++) {
          let ShowTimes = this.MovieDetail.ShowTimes[i];
          if(i == 0){
            this.LichChieu.NgayChieu = ShowTimes.DateReady;
            this.GioChieu.GioChieu = ShowTimes.StartDate;
            this.GioChieu.ShowTimeID = ShowTimes.ShowTimeID;
            this.GioChieu.IDRap = ShowTimes.CinimaRoom.CinimaRoomID;
            this.GioChieu.TenRap = ShowTimes.CinimaRoom.CinimaRoomName;
            this.LichChieu.Suat.push(this.GioChieu);
            this.arrLichChieu.push(this.LichChieu);
          } else {
            if(this.LichChieu.NgayChieu == ShowTimes.DateReady){
              this.GioChieu = new GioChieu();
              this.GioChieu.GioChieu = ShowTimes.StartDate;
              this.GioChieu.ShowTimeID = ShowTimes.ShowTimeID;
              this.GioChieu.IDRap = ShowTimes.CinimaRoom.CinimaRoomID;
              this.GioChieu.TenRap = ShowTimes.CinimaRoom.CinimaRoomName;
              this.LichChieu.Suat.push(this.GioChieu);
            } else {
              this.LichChieu = new LichChieu();
              this.GioChieu = new GioChieu();
              this.LichChieu.NgayChieu = ShowTimes.DateReady;
              this.GioChieu.GioChieu = ShowTimes.StartDate;
              this.GioChieu.ShowTimeID = ShowTimes.ShowTimeID;
              this.GioChieu.IDRap = ShowTimes.CinimaRoom.CinimaRoomID;
              this.GioChieu.TenRap = ShowTimes.CinimaRoom.CinimaRoomName;
              this.LichChieu.Suat.push(this.GioChieu);
              this.arrLichChieu.push(this.LichChieu);
            }
          }
        }
      }else{
        this.trangthai = false;
      }

      //Auto active first li a
      setTimeout(function () {
        var a = $("a[href='#homechau1']");
        a.trigger('click');
      }, 1);

  
  }

  ngOnInit() {
    this.SetThamSo()
    this.GetLichChieu();
  }

  ngOnChanges(){
    this.GetLichChieu();
  }


  ngOnDestroy() {
   
  }

}