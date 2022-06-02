webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Models/DSGheSeDat.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DSGheSeDat; });
var DSGheSeDat = /** @class */ (function () {
    function DSGheSeDat() {
        this.Tickets = new Array();
    }
    return DSGheSeDat;
}());



/***/ }),

/***/ "./src/app/Models/GioChieu.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GioChieu; });
var GioChieu = /** @class */ (function () {
    function GioChieu() {
    }
    return GioChieu;
}());



/***/ }),

/***/ "./src/app/Models/LichChieu.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LichChieu; });
var LichChieu = /** @class */ (function () {
    function LichChieu() {
        this.Suat = [];
    }
    return LichChieu;
}());



/***/ }),

/***/ "./src/app/Models/ThongTinCheckout.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThongTinCheckout; });
var ThongTinCheckout = /** @class */ (function () {
    function ThongTinCheckout() {
        this.MaGD = "No.1032005012";
    }
    return ThongTinCheckout;
}());



/***/ }),

/***/ "./src/app/Models/Tickets.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tickets; });
var Tickets = /** @class */ (function () {
    function Tickets() {
        this.Tickets = new Array();
    }
    return Tickets;
}());



/***/ }),

/***/ "./src/app/Models/UserLogin.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserLogin; });
var UserLogin = /** @class */ (function () {
    function UserLogin() {
    }
    return UserLogin;
}());



/***/ }),

/***/ "./src/app/RouteConfig/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_user_component__ = __webpack_require__("./src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_layout_trang_chu_trang_chu_component__ = __webpack_require__("./src/app/user/layout/trang-chu/trang-chu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_layout_trang_chi_tiet_trang_chi_tiet_component__ = __webpack_require__("./src/app/user/layout/trang-chi-tiet/trang-chi-tiet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_layout_trang_dat_ve_trang_dat_ve_component__ = __webpack_require__("./src/app/user/layout/trang-dat-ve/trang-dat-ve.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_layout_trang_checkout_trang_checkout_component__ = __webpack_require__("./src/app/user/layout/trang-checkout/trang-checkout.component.ts");






var routing = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__user_user_component__["a" /* UserComponent */], children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_2__user_layout_trang_chu_trang_chu_component__["a" /* TrangChuComponent */] },
            { path: 'Home', component: __WEBPACK_IMPORTED_MODULE_2__user_layout_trang_chu_trang_chu_component__["a" /* TrangChuComponent */] }
        ] },
    { path: 'Home', component: __WEBPACK_IMPORTED_MODULE_1__user_user_component__["a" /* UserComponent */], children: [
            { path: 'ChiTietPhim', component: __WEBPACK_IMPORTED_MODULE_3__user_layout_trang_chi_tiet_trang_chi_tiet_component__["a" /* TrangChiTietComponent */] },
            { path: 'DatVe', component: __WEBPACK_IMPORTED_MODULE_4__user_layout_trang_dat_ve_trang_dat_ve_component__["a" /* TrangDatVeComponent */] },
            { path: 'Checkout', component: __WEBPACK_IMPORTED_MODULE_5__user_layout_trang_checkout_trang_checkout_component__["a" /* TrangCheckoutComponent */] }
        ] },
];
var appRoutes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(routing, { useHash: true });


/***/ }),

/***/ "./src/app/Services/check-login.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckLoginGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("./src/app/Services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CheckLoginGuard = /** @class */ (function () {
    function CheckLoginGuard(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    CheckLoginGuard.prototype.canActivate = function () {
        if (this.userService.CheckLogin() == false) {
            return false;
        }
        return true;
    };
    CheckLoginGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]])
    ], CheckLoginGuard);
    return CheckLoginGuard;
}());



/***/ }),

/***/ "./src/app/Services/movie.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MovieService = /** @class */ (function () {
    //khởi tạo 1 đối tượng http để thực hiện các phương thức post, get về server
    function MovieService(_http) {
        this._http = _http;
        this.MaNhom = 'GP07';
        //Link trỏ đến api backend lấy danh sách phim
        this.apiUrlGetMovie = 'http://svcy.myclass.vn/api/movie/getmovie';
        //Link trỏ đến api backend lấy thông tin phim, lịch chiếu, ...
        this.apiUrlGetMovieDetail = 'http://svcy.myclass.vn/api/movie/GetMovieDetail';
        //Link trỏ đến api backend lấy thông tin phim, lịch chiếu, ... theo nhóm
        this.apiUrlGetMovieDetailByGroup = 'http://svcy.myclass.vn/api/movie/GetMovieDetailByGroup';
        this.apiLoadGhe = "http://svcy.myclass.vn/api/movie/GetCinimaRoomDetail";
        //Link trỏ đến api backend post thông tin danh sách ghế ngồi đã đặt , ... theo nhóm, theo người dùng
        this.apiUrlPostBookingTickets = 'http://svcy.myclass.vn/api/movie/BookingTickets';
    }
    //Gọi service lấy danh sách phim từ server backend về
    MovieService.prototype.LayDanhSachPhim = function () {
        //get(): goi phương thức get gửi đến server yêu cầu lấy dữ liệu.
        /*map(): để đưa kiểu dữ liệu 1 chuỗi về dạng đối tượng response => từ reponse ta có thể parse ra
                kiểu dữ liệu json */
        var obServe;
        obServe = this._http.get(this.apiUrlGetMovie).map(function (result) { return result.json(); });
        return obServe;
    };
    //Lấy thông tin chi tiết của 1 phim dựa trên mã phim 
    MovieService.prototype.LayChiTietPhim_LichChieu = function (MaPhim) {
        //map(): để đưa kiểu dữ liệu 1 chuỗi về dạng đối tượng response => từ reponse ta có thể parse ra kiểu dữ liệu json
        var obServe = this._http.get(this.apiUrlGetMovieDetail + "?id=" + MaPhim).map(function (result) { return result.json(); });
        return obServe;
    };
    //Lấy thông tin chi tiết của 1 phim dựa trên mã phim và mã nhóm
    MovieService.prototype.LayChiTietPhim_LichChieuTheoNhom = function (MaPhim, MaNhom) {
        //map(): để đưa kiểu dữ liệu 1 chuỗi về dạng đối tượng response => từ reponse ta có thể parse ra kiểu dữ liệu json
        var obServe = this._http.get(this.apiUrlGetMovieDetailByGroup + "?id=" + MaPhim + "&groupID=" + MaNhom)
            .map(function (result) { return result.json(); });
        return obServe;
    };
    MovieService.prototype.LayDanhSachGhe = function (ShowTimeID) {
        var obServe = this._http.get(this.apiLoadGhe + "?ShowTimeID=" + ShowTimeID).map(function (result) { return result.json(); });
        return obServe;
    };
    MovieService.prototype.DatVe = function (lstVe) {
        //Để post được json lên server phải có header và body : tùy backend quy định khác nhau
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        header.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        //Body là nội dung tham số gửi lên server ở đây là chuỗi json với tên tham số là data (server quy định)
        // lstVe = {ShowTimeID:3,Tickets:[{SeatID:'GP01_Rap01_A02',Price:85},{SeatID:'GP01_Rap01_A03',Price:85}],UserID:'khai123',GroupID:'GP01'};
        var body = "data=" + JSON.stringify(lstVe);
        var obServe = this._http.post(this.apiUrlPostBookingTickets, body, { headers: header }).map(function (result) { return result.json(); });
        return obServe;
    };
    MovieService.prototype.SearchPhim = function (dsphim, tenphim) {
        var dsphimsearch = [];
        if (tenphim == "") {
            var mangRong = [];
            return mangRong;
        }
        else {
            for (var i = 0; i < dsphim.length; i++) {
                if (dsphim[i].Title.toLowerCase().indexOf(tenphim.toLowerCase()) > -1) {
                    dsphimsearch.push(dsphim[i]);
                }
            }
            return dsphimsearch;
        }
    };
    MovieService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], MovieService);
    return MovieService;
}());



/***/ }),

/***/ "./src/app/Services/movie.services.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoviesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MoviesService = /** @class */ (function () {
    //khởi tạo 1 đối tượng http để thực hiện các phương thức post, get về server
    function MoviesService(_http) {
        this._http = _http;
        this.MaNhom = 'GP07';
        //Link trỏ đến api backend lấy danh sách phim
        this.apiUrlGetMovie = 'http://svcy.myclass.vn/api/movie/getmovie';
        //Link trỏ đến api backend lấy thông tin phim, lịch chiếu, ...
        this.apiUrlGetMovieDetail = 'http://svcy.myclass.vn/api/movie/GetMovieDetail';
        //Link trỏ đến api backend lấy thông tin phim, lịch chiếu, ... theo nhóm
        this.apiUrlGetMovieDetailByGroup = 'http://svcy.myclass.vn/api/movie/GetMovieDetailByGroup';
        this.apiLoadGhe = "http://svcy.myclass.vn/api/movie/GetCinimaRoomDetail";
        //Link trỏ đến api backend post thông tin danh sách ghế ngồi đã đặt , ... theo nhóm, theo người dùng
        this.apiUrlPostBookingTickets = 'http://svcy.myclass.vn/api/movie/BookingTickets';
    }
    //Gọi service lấy danh sách phim từ server backend về
    MoviesService.prototype.LayDanhSachPhim = function () {
        //get(): goi phương thức get gửi đến server yêu cầu lấy dữ liệu.
        /*map(): để đưa kiểu dữ liệu 1 chuỗi về dạng đối tượng response => từ reponse ta có thể parse ra
                kiểu dữ liệu json */
        var obServe = this._http.get(this.apiUrlGetMovie).map(function (result) { return result.json(); });
        return obServe;
    };
    //Lấy thông tin chi tiết của 1 phim dựa trên mã phim 
    MoviesService.prototype.LayChiTietPhim_LichChieu = function (MaPhim) {
        //map(): để đưa kiểu dữ liệu 1 chuỗi về dạng đối tượng response => từ reponse ta có thể parse ra kiểu dữ liệu json
        var obServe = this._http.get(this.apiUrlGetMovieDetail + "?id=" + MaPhim).map(function (result) { return result.json(); });
        return obServe;
    };
    //Lấy thông tin chi tiết của 1 phim dựa trên mã phim và mã nhóm
    MoviesService.prototype.LayChiTietPhim_LichChieuTheoNhom = function (MaPhim, MaNhom) {
        //map(): để đưa kiểu dữ liệu 1 chuỗi về dạng đối tượng response => từ reponse ta có thể parse ra kiểu dữ liệu json
        var obServe = this._http.get(this.apiUrlGetMovieDetailByGroup + "?id=" + MaPhim + "&groupID=" + MaNhom)
            .map(function (result) { return result.json(); });
        return obServe;
    };
    MoviesService.prototype.LayDanhSachGhe = function (ShowTimeID) {
        var obServe = this._http.get(this.apiLoadGhe + "?ShowTimeID=" + ShowTimeID).map(function (result) { return result.json(); });
        return obServe;
    };
    MoviesService.prototype.DatVe = function (lstVe) {
        //Để post được json lên server phải có header và body : tùy backend quy định khác nhau
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        header.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        //Body là nội dung tham số gửi lên server ở đây là chuỗi json với tên tham số là data (server quy định)
        // lstVe = {ShowTimeID:3,Tickets:[{SeatID:'GP01_Rap01_A02',Price:85},{SeatID:'GP01_Rap01_A03',Price:85}],UserID:'khai123',GroupID:'GP01'};
        var body = "data=" + JSON.stringify(lstVe);
        var obServe = this._http.post(this.apiUrlPostBookingTickets, body, { headers: header }).map(function (result) { return result.json(); });
        return obServe;
    };
    MoviesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], MoviesService);
    return MoviesService;
}());



/***/ }),

/***/ "./src/app/Services/thong-bao.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThongBaoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ThongBaoService = /** @class */ (function () {
    function ThongBaoService() {
        this.Setting();
    }
    ThongBaoService.prototype.Success = function (title, message) {
        toastr.success(title, message);
    };
    ThongBaoService.prototype.Error = function (title, message) {
        toastr.error(title, message);
    };
    ThongBaoService.prototype.clear = function () {
        toastr.clear();
    };
    ThongBaoService.prototype.Setting = function () {
        toastr.options = {
            "allowHtml": true,
            "closeButton": true,
            "debug": false,
            "newestOnTop": false,
            "progressBar": false,
            "positionClass": "toast-top-center",
            "preventDuplicates": false,
            "onclick": null,
            "showDuration": "1000",
            "hideDuration": "1000",
            "timeOut": "2000",
            "extendedTimeOut": "2000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut",
            "tapToDismiss": false
        };
    };
    ThongBaoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ThongBaoService);
    return ThongBaoService;
}());



/***/ }),

/***/ "./src/app/Services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Models_UserLogin__ = __webpack_require__("./src/app/Models/UserLogin.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function () {
    function UserService(_http) {
        this._http = _http;
        this.apiRegister = 'http://sv.myclass.vn/api/user/registeruser';
        this.apiLogin = 'http://sv.myclass.vn/api/user/login';
    }
    UserService.prototype.TaoTaiKhoan = function (user) {
        // de post dc json len server phai co header va body: tuy backend qui dinh khac nhau
        var header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        // phan nay do server qui dinh la json hay x-www
        header.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        //Body la noi dung tham so dc gui len server o day la chuoi json voi ten tham so la data(serve qui dinh)
        var body = "data=" + JSON.stringify(user);
        var obServe = this._http.post(this.apiRegister, body, { headers: header }).map(function (result) { return result.json(); });
        return obServe;
    };
    UserService.prototype.DangNhap = function (userLogin) {
        var header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        header.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        var body = "data=" + JSON.stringify(userLogin);
        // goi service dang nhap
        var userResult = new __WEBPACK_IMPORTED_MODULE_1__Models_UserLogin__["a" /* UserLogin */]();
        var obServe = this._http.post(this.apiLogin, body, { headers: header }).map(function (result) { return result.json(); });
        obServe.subscribe(function (result) {
            // lay ve kq => kt ket qua
            var kq = result;
            if (kq == 'The account or password is incorrect') {
            }
            else {
                // Dang nhap thanh cong luu thong tin vao localstorage
                userResult.UserName = kq.UserName;
                userResult.FullName = kq.FullName;
                userResult.Email = kq.Email;
                userResult.Status = kq.Status;
                userResult.GroupID = kq.GroupID;
                // Xoa local storage dang nhap roi xet lai
                localStorage.removeItem('localUser');
                localStorage.setItem('localUser', JSON.stringify(userResult));
                location.reload();
            }
        });
        return obServe;
    };
    UserService.prototype.DangNhap2 = function (userLogin) {
        var header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        header.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        var body = "data=" + JSON.stringify(userLogin);
        // goi service dang nhap
        var userResult = new __WEBPACK_IMPORTED_MODULE_1__Models_UserLogin__["a" /* UserLogin */]();
        var obServe = this._http.post(this.apiLogin, body, { headers: header }).map(function (result) { return result.json(); });
        obServe.subscribe(function (result) {
            // lay ve kq => kt ket qua
            var kq = result;
            if (kq == 'The account or password is incorrect') {
            }
            else {
                // Dang nhap thanh cong luu thong tin vao localstorage
                userResult.UserName = kq.UserName;
                userResult.FullName = kq.FullName;
                userResult.Email = kq.Email;
                userResult.Status = kq.Status;
                userResult.GroupID = kq.GroupID;
                // Xoa local storage dang nhap roi xet lai
                localStorage.removeItem('localUser');
                localStorage.setItem('localUser', JSON.stringify(userResult));
            }
        });
        return obServe;
    };
    UserService.prototype.CheckLogin = function () {
        var user = localStorage.getItem("localUser");
        if (!user) {
            return false;
        }
        else {
            return true;
        }
    };
    UserService.prototype.LayThongTinUser = function () {
        if (this.CheckLogin() == true) {
            var user = JSON.parse(localStorage.getItem("localUser"));
            return user;
        }
        return null;
    };
    UserService.prototype.DangXuat = function () {
        localStorage.removeItem('localUser');
        location.reload();
    };
    UserService.prototype.getUrl = function () {
        var url = window.location.href;
        return url;
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  admin works!\n</p>\n"

/***/ }),

/***/ "./src/app/admin/admin.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__("./src/app/admin/admin.component.html"),
            styles: [__webpack_require__("./src/app/admin/admin.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_admin_component__ = __webpack_require__("./src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_user_component__ = __webpack_require__("./src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_layout_layout_module__ = __webpack_require__("./src/app/user/layout/layout.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__RouteConfig_app_routes__ = __webpack_require__("./src/app/RouteConfig/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Services_movie_service__ = __webpack_require__("./src/app/Services/movie.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Services_user_service__ = __webpack_require__("./src/app/Services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Services_check_login_guard__ = __webpack_require__("./src/app/Services/check-login.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Services_thong_bao_service__ = __webpack_require__("./src/app/Services/thong-bao.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__admin_admin_component__["a" /* AdminComponent */],
                __WEBPACK_IMPORTED_MODULE_4__user_user_component__["a" /* UserComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__user_layout_layout_module__["a" /* LayoutModule */],
                __WEBPACK_IMPORTED_MODULE_6__RouteConfig_app_routes__["a" /* appRoutes */],
                __WEBPACK_IMPORTED_MODULE_7__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_http__["c" /* HttpModule */],
            ],
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_13__angular_common__["LocationStrategy"], useClass: __WEBPACK_IMPORTED_MODULE_13__angular_common__["HashLocationStrategy"] }, __WEBPACK_IMPORTED_MODULE_9__Services_movie_service__["a" /* MovieService */], __WEBPACK_IMPORTED_MODULE_10__Services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_11__Services_check_login_guard__["a" /* CheckLoginGuard */], __WEBPACK_IMPORTED_MODULE_12__Services_thong_bao_service__["a" /* ThongBaoService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/const/data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DanhSachPhimSapChieu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DanhSachPhimDangChieu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GheNgoi; });
var DanhSachPhimSapChieu = [
    {
        Description: "Fearing the actions of a god-like Super Hero left unchecked, Gotham City's own formidable, forceful vigilante takes on Metropolis most revered, modern-day savior, while the world wrestles with what sort of hero it really needs. And with Batman and Superman at war with one another, a new threat quickly arises, putting mankind in greater danger than it's ever known before.",
        Director: "Zack Snyder",
        Genre: "Sci-fi",
        GenreName: "Sci-fi",
        ID: 5,
        Image: "batmanvssuperman.jpg",
        Producer: "Wesley Coller",
        Rating: 4,
        ReleaseDate: "2015-03-25T00:00:00",
        Title: "Batman v Superman: Dawn of Justice",
        TrailerURI: "https://www.youtube.com/watch?v=0WWzgGyAH6Y",
        Writer: "Chris Terrio",
        ShowTimes: []
    },
    {
        Description: "Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will save the world.",
        Director: "Payton Reed",
        Genre: "Sci-fi",
        GenreName: "Sci-fi",
        ID: 6,
        Image: "antman.jpg",
        Producer: "Victoria Alonso",
        Rating: 5,
        ReleaseDate: "2015-07-17T00:00:00",
        Title: "Ant-Man",
        TrailerURI: "https://www.youtube.com/watch?v=1HpZevFifuo",
        Writer: "Edgar Wright",
        ShowTimes: []
    }
];
var DanhSachPhimDangChieu = [
    {
        Description: "Minions Stuart, Kevin and Bob are recruited by Scarlet Overkill, a super-villain who, alongside her inventor husband Herb, hatches a plot to take over the world.",
        Director: "Kyle Bald",
        Genre: "Comedy",
        GenreName: "Comedy",
        ID: 1,
        Image: "minions.jpg",
        Producer: "Janet Healy",
        Rating: 3,
        ReleaseDate: "2015-07-10T00:00:00",
        Title: "Minions",
        TrailerURI: "https://www.youtube.com/watch?v=Wfql_DoHRKc",
        Writer: "Brian Lynch",
        ShowTimes: [
            {
                CinimaRoom: { CinimaRoomID: "Rap01", CinimaRoomName: "Rạp 01", NumberOfSeats: 30 },
                CinimaRoomID: "Rap01",
                DateReady: "2017-12-01T00:00:00",
                EndDate: "12:00:00",
                Price: "85",
                ShowTimeID: 111,
                StartDate: "10:00:00",
            },
            {
                CinimaRoom: { CinimaRoomID: "Rap01", CinimaRoomName: "Rạp 01", NumberOfSeats: 30 },
                CinimaRoomID: "Rap01",
                DateReady: "2017-12-02T00:00:00",
                EndDate: "12:00:00",
                Price: "85",
                ShowTimeID: 112,
                StartDate: "10:00:00",
            },
            {
                CinimaRoom: { CinimaRoomID: "Rap01", CinimaRoomName: "Rạp 01", NumberOfSeats: 30 },
                CinimaRoomID: "Rap01",
                DateReady: "2017-12-03T00:00:00",
                EndDate: "12:00:00",
                Price: "85",
                ShowTimeID: 113,
                StartDate: "10:00:00",
            }
        ]
    },
    {
        Description: "After young Riley is uprooted from her Midwest life and moved to San Francisco, her emotions - Joy, Fear, Anger, Disgust and Sadness - conflict on how best to navigate a new city, house, and school.",
        Director: "Pete Docter",
        Genre: "Comedy",
        GenreName: "Comedy",
        ID: 2,
        Image: "insideout.jpg",
        Producer: "John Lasseter",
        Rating: 4,
        ReleaseDate: "2015-06-19T00:00:00",
        Title: "Inside Out",
        TrailerURI: "https://www.youtube.com/watch?v=seMwpP0yeu4",
        Writer: "Pete Docter",
        ShowTimes: [
            {
                CinimaRoom: { CinimaRoomID: "Rap02", CinimaRoomName: "Rạp 02", NumberOfSeats: 30 },
                CinimaRoomID: "Rap02",
                DateReady: "2017-12-01T00:00:00",
                EndDate: "15:30:00",
                Price: "85",
                ShowTimeID: 211,
                StartDate: "13:30:00",
            },
            {
                CinimaRoom: { CinimaRoomID: "Rap02", CinimaRoomName: "Rạp 02", NumberOfSeats: 30 },
                CinimaRoomID: "Rap02",
                DateReady: "2017-12-02T00:00:00",
                EndDate: "15:30:00",
                Price: "85",
                ShowTimeID: 212,
                StartDate: "13:30:00",
            },
            {
                CinimaRoom: { CinimaRoomID: "Rap02", CinimaRoomName: "Rạp 02", NumberOfSeats: 30 },
                CinimaRoomID: "Rap02",
                DateReady: "2017-12-03T00:00:00",
                EndDate: "15:30:00",
                Price: "85",
                ShowTimeID: 213,
                StartDate: "13:30:00",
            }
        ]
    },
    {
        Description: "Oh, an alien on the run from his own people, lands on Earth and makes friends with the adventurous Tip, who is on a quest of her own.",
        Director: "Tim Johnson",
        Genre: "Comedy",
        GenreName: "Comedy",
        ID: 3,
        Image: "home.jpg",
        Producer: "Suzanne Buirgy",
        Rating: 4,
        ReleaseDate: "2015-05-27T00:00:00",
        Title: "Home",
        TrailerURI: "https://www.youtube.com/watch?v=MyqZf8LiWvM",
        Writer: "Tom J. Astle",
        ShowTimes: [
            {
                CinimaRoom: { CinimaRoomID: "Rap04", CinimaRoomName: "Rạp 04", NumberOfSeats: 30 },
                CinimaRoomID: "Rap04",
                DateReady: "2017-12-01T00:00:00",
                EndDate: "15:30:00",
                Price: "85",
                ShowTimeID: 311,
                StartDate: "13:30:00",
            },
            {
                CinimaRoom: { CinimaRoomID: "Rap04", CinimaRoomName: "Rạp 04", NumberOfSeats: 30 },
                CinimaRoomID: "Rap04",
                DateReady: "2017-12-02T00:00:00",
                EndDate: "15:30:00",
                Price: "85",
                ShowTimeID: 312,
                StartDate: "13:30:00",
            },
            {
                CinimaRoom: { CinimaRoomID: "Rap04", CinimaRoomName: "Rạp 04", NumberOfSeats: 30 },
                CinimaRoomID: "Rap04",
                DateReady: "2017-12-03T00:00:00",
                EndDate: "15:30:00",
                Price: "85",
                ShowTimeID: 313,
                StartDate: "13:30:00",
            }
        ]
    },
    {
        Description: "Having thought that monogamy was never possible, a commitment-phobic career woman may have to face her fears when she meets a good guy.",
        Director: "Judd Apatow",
        Genre: "Sci-fi",
        GenreName: "Sci-fi",
        ID: 4,
        Image: "trainwreck.jpg",
        Producer: "Judd Apatow",
        Rating: 0,
        ReleaseDate: "2018-05-18T00:00:00",
        Title: "Trainwreck",
        TrailerURI: "https://www.youtube.com/watch?v=2MxnhBPoIx4",
        Writer: "Amy Schumer",
        ShowTimes: [
            {
                CinimaRoom: { CinimaRoomID: "Rap03", CinimaRoomName: "Rạp 03", NumberOfSeats: 30 },
                CinimaRoomID: "Rap03",
                DateReady: "2017-12-01T00:00:00",
                EndDate: "12:00:00",
                Price: "85",
                ShowTimeID: 411,
                StartDate: "10:00:00",
            },
            {
                CinimaRoom: { CinimaRoomID: "Rap03", CinimaRoomName: "Rạp 03", NumberOfSeats: 30 },
                CinimaRoomID: "Rap03",
                DateReady: "2017-12-02T00:00:00",
                EndDate: "12:00:00",
                Price: "85",
                ShowTimeID: 412,
                StartDate: "10:00:00",
            },
            {
                CinimaRoom: { CinimaRoomID: "Rap03", CinimaRoomName: "Rạp 03", NumberOfSeats: 30 },
                CinimaRoomID: "Rap03",
                DateReady: "2017-12-03T00:00:00",
                EndDate: "12:00:00",
                Price: "85",
                ShowTimeID: 413,
                StartDate: "10:00:00",
            },
        ]
    }
];
var GheNgoi = [];
for (var i = 0; i < DanhSachPhimDangChieu.length; i++) {
    for (var j = 0; j < DanhSachPhimDangChieu[i].ShowTimes.length; j++) {
        var ShowTime = DanhSachPhimDangChieu[i].ShowTimes[j];
        var Seats = {
            ShowTimeID: ShowTime.ShowTimeID,
            Seats: []
        };
        var b = 1;
        var c = 1;
        for (var u = 0; u < 30; u++) {
            if (u <= 9) {
                Seats.Seats.push({
                    CinimaRoomID: ShowTime.CinimaRoomID,
                    LoaiGhe: "A",
                    NumOrder: u + 1,
                    Price: 85,
                    SeatID: ShowTime.CinimaRoomID + "_A" + (u + 1 === 10 ? u + 1 : "0" + (u + 1)),
                    SeatName: "A" + (u + 1 === 10 ? u + 1 : "0" + (u + 1)),
                    SeatType: "normal",
                    SoThuTu: u + 1,
                    Status: false,
                    UserName: "",
                });
            }
            if (u > 9 && u <= 19) {
                Seats.Seats.push({
                    CinimaRoomID: ShowTime.CinimaRoomID,
                    LoaiGhe: "B",
                    NumOrder: u + 1,
                    Price: 85,
                    SeatID: ShowTime.CinimaRoomID + "_B" + (b === 10 ? b : "0" + b),
                    SeatName: "B" + (b === 10 ? b : "0" + b),
                    SeatType: "normal",
                    SoThuTu: u + 1,
                    Status: false,
                    UserName: "",
                });
                b++;
            }
            if (u > 19) {
                Seats.Seats.push({
                    CinimaRoomID: ShowTime.CinimaRoomID,
                    LoaiGhe: "C",
                    NumOrder: u + 1,
                    Price: 85,
                    SeatID: ShowTime.CinimaRoomID + "_C" + (c === 10 ? c : "0" + c),
                    SeatName: "C" + (c === 10 ? c : "0" + c),
                    SeatType: "normal",
                    SoThuTu: u + 1,
                    Status: false,
                    UserName: "",
                });
                c++;
            }
        }
        GheNgoi.push(Seats);
    }
}
console.log();


/***/ }),

/***/ "./src/app/user/layout/HoverButton/ani-hover.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AniHoverDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AniHoverDirective = /** @class */ (function () {
    function AniHoverDirective(elementRef, render) {
        this.elementRef = elementRef;
        this.render = render;
    }
    AniHoverDirective.prototype.SuKienEnter = function (eventData) {
        this.render.addClass(this.elementRef.nativeElement, "animated");
        this.render.addClass(this.elementRef.nativeElement, "swing");
    };
    AniHoverDirective.prototype.SuKienLeave = function (eventData) {
        this.render.removeClass(this.elementRef.nativeElement, "animated");
        this.render.removeClass(this.elementRef.nativeElement, "swing");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])("mouseenter"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], AniHoverDirective.prototype, "SuKienEnter", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])("mouseleave"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], AniHoverDirective.prototype, "SuKienLeave", null);
    AniHoverDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appAniHover]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]])
    ], AniHoverDirective);
    return AniHoverDirective;
}());



/***/ }),

/***/ "./src/app/user/layout/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"Footer\">\n  <div class=\"container text-center\">\n          \n                  © 2018 Cyber Cinema\n          \n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/user/layout/footer/footer.component.scss":
/***/ (function(module, exports) {

module.exports = ".bodycontent {\n  background-attachment: scroll !important; }\n\n@-webkit-keyframes sk-cubemove {\n  25% {\n    -webkit-transform: translateX(12px) rotate(-90deg) scale(0.5); }\n  50% {\n    -webkit-transform: translateX(12px) translateY(12px) rotate(-180deg); }\n  75% {\n    -webkit-transform: translateX(0px) translateY(12px) rotate(-270deg) scale(0.5); }\n  100% {\n    -webkit-transform: rotate(-360deg); } }\n\n@keyframes sk-cubemove {\n  25% {\n    transform: translateX(12px) rotate(-90deg) scale(0.5);\n    -webkit-transform: translateX(12px) rotate(-90deg) scale(0.5); }\n  50% {\n    transform: translateX(12px) translateY(12px) rotate(-179deg);\n    -webkit-transform: translateX(12px) translateY(12px) rotate(-179deg); }\n  50.1% {\n    transform: translateX(12px) translateY(12px) rotate(-180deg);\n    -webkit-transform: translateX(12px) translateY(12px) rotate(-180deg); }\n  75% {\n    transform: translateX(0px) translateY(12px) rotate(-270deg) scale(0.5);\n    -webkit-transform: translateX(0px) translateY(12px) rotate(-270deg) scale(0.5); }\n  100% {\n    transform: rotate(-360deg);\n    -webkit-transform: rotate(-360deg); } }\n\ntextarea:focus,\ninput[type=\"text\"]:focus,\ninput[type=\"password\"]:focus,\ninput[type=\"datetime\"]:focus,\ninput[type=\"datetime-local\"]:focus,\ninput[type=\"date\"]:focus,\ninput[type=\"month\"]:focus,\ninput[type=\"time\"]:focus,\ninput[type=\"week\"]:focus,\ninput[type=\"number\"]:focus,\ninput[type=\"email\"]:focus,\ninput[type=\"url\"]:focus,\ninput[type=\"search\"]:focus,\ninput[type=\"tel\"]:focus,\ninput[type=\"color\"]:focus,\n.uneditable-input:focus {\n  border-color: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  outline: 0 none; }\n\na {\n  color: white; }\n\na:hover {\n  color: #81d8d0; }\n\n#Footer {\n  color: #8e959e;\n  background: #1f2531;\n  padding: 20px 0;\n  margin-bottom: 75px;\n  position: relative !important; }\n"

/***/ }),

/***/ "./src/app/user/layout/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/user/layout/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/user/layout/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/user/layout/header-new/header-new.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"HeaderNew\">\n    <div class=\"container\">\n        <nav class=\"navbar navbar-expand-lg\">\n            <div class=\"navbar-brand\">\n                <a (click)=\"chuyentrang()\">CYBER</a>\n            </div>\n            <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo02\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                    <i class=\"fas fa-bars\"></i>            \n                </button>\n          \n            <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo02\">\n              <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n                \n                <li class=\"nav-item\">\n                  <a class=\"nav-link\" href=\"#SlideListMovie\">Phim Mới</a>\n                </li>\n               \n                <li class=\"nav-item\">\n                    <a class=\"nav-link\"  href=\"#events\">Ưu Đãi</a>\n                </li>\n\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\"  href=\"#news\">Tin Tức</a>\n                </li>\n              </ul>\n              <form class=\"form-inline my-2 my-lg-0\">\n\n                  <div class=\"d-flex justify-content-end w-100 align-items-center\">\n                    <app-login-register></app-login-register>\n                    <app-search></app-search>\n                  </div>\n\n              </form>\n            </div>\n          </nav>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/user/layout/header-new/header-new.component.scss":
/***/ (function(module, exports) {

module.exports = ".bodycontent {\n  background-attachment: scroll !important; }\n\n@-webkit-keyframes sk-cubemove {\n  25% {\n    -webkit-transform: translateX(12px) rotate(-90deg) scale(0.5); }\n  50% {\n    -webkit-transform: translateX(12px) translateY(12px) rotate(-180deg); }\n  75% {\n    -webkit-transform: translateX(0px) translateY(12px) rotate(-270deg) scale(0.5); }\n  100% {\n    -webkit-transform: rotate(-360deg); } }\n\n@keyframes sk-cubemove {\n  25% {\n    transform: translateX(12px) rotate(-90deg) scale(0.5);\n    -webkit-transform: translateX(12px) rotate(-90deg) scale(0.5); }\n  50% {\n    transform: translateX(12px) translateY(12px) rotate(-179deg);\n    -webkit-transform: translateX(12px) translateY(12px) rotate(-179deg); }\n  50.1% {\n    transform: translateX(12px) translateY(12px) rotate(-180deg);\n    -webkit-transform: translateX(12px) translateY(12px) rotate(-180deg); }\n  75% {\n    transform: translateX(0px) translateY(12px) rotate(-270deg) scale(0.5);\n    -webkit-transform: translateX(0px) translateY(12px) rotate(-270deg) scale(0.5); }\n  100% {\n    transform: rotate(-360deg);\n    -webkit-transform: rotate(-360deg); } }\n\ntextarea:focus,\ninput[type=\"text\"]:focus,\ninput[type=\"password\"]:focus,\ninput[type=\"datetime\"]:focus,\ninput[type=\"datetime-local\"]:focus,\ninput[type=\"date\"]:focus,\ninput[type=\"month\"]:focus,\ninput[type=\"time\"]:focus,\ninput[type=\"week\"]:focus,\ninput[type=\"number\"]:focus,\ninput[type=\"email\"]:focus,\ninput[type=\"url\"]:focus,\ninput[type=\"search\"]:focus,\ninput[type=\"tel\"]:focus,\ninput[type=\"color\"]:focus,\n.uneditable-input:focus {\n  border-color: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  outline: 0 none; }\n\na {\n  color: white; }\n\na:hover {\n  color: #81d8d0; }\n\n#HeaderNew {\n  background: #1f2531;\n  -webkit-box-shadow: 0px 2px 20px 3px rgba(0, 0, 0, 0.75);\n          box-shadow: 0px 2px 20px 3px rgba(0, 0, 0, 0.75);\n  z-index: 2000; }\n\ni {\n  color: white;\n  padding-top: 4px;\n  -webkit-transition: all 0.2s;\n  transition: all 0.2s;\n  cursor: pointer; }\n\ni:hover {\n  color: #81d8d0; }\n\n.navbar {\n  background: #1f2531;\n  padding: 0; }\n\n.navbar-brand a {\n  color: #81d8d0;\n  font-size: 2.1em;\n  text-shadow: 0px 0px 10px #81d8d0;\n  cursor: pointer; }\n\n.nav-link {\n  -webkit-transition: all 0.2s;\n  transition: all 0.2s;\n  cursor: pointer; }\n\n.nav-link label {\n    cursor: pointer;\n    color: white; }\n\n.nav-link:hover {\n  color: #81d8d0; }\n\n.SearchPhim {\n  padding-left: 25px; }\n\n#navbarTogglerDemo02 {\n  padding: 25px 0; }\n\n.navbar-expand-lg .navbar-nav .nav-link {\n  padding-right: 1.5rem;\n  padding-left: 1.5rem;\n  font-weight: 500; }\n\n@media (min-width: 992px) {\n  .navbar-expand-lg .navbar-nav .nav-link {\n    padding-right: 1.5rem;\n    padding-left: 1.5rem; }\n  .navbar-expand-lg .navbar-nav {\n    padding-left: 50px; } }\n\n@media (max-width: 1024px) {\n  #navbarTogglerDemo02 {\n    font-size: 13px !important; } }\n"

/***/ }),

/***/ "./src/app/user/layout/header-new/header-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderNewComponent = /** @class */ (function () {
    function HeaderNewComponent(router) {
        this.router = router;
    }
    HeaderNewComponent.prototype.chuyentrang = function () {
        this.router.navigate(['/Home']);
    };
    HeaderNewComponent.prototype.ngOnInit = function () {
    };
    HeaderNewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header-new',
            template: __webpack_require__("./src/app/user/layout/header-new/header-new.component.html"),
            styles: [__webpack_require__("./src/app/user/layout/header-new/header-new.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], HeaderNewComponent);
    return HeaderNewComponent;
}());



/***/ }),

/***/ "./src/app/user/layout/header-new/login-register2/login-register2.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"LoginRegister2\">\n  <div *ngIf=\"statusLogin == false; else Logout\">\n      <div id=\"login\" class=\"d-flex\" (click)=\"login\" data-toggle=\"modal\" data-target=\"#LoginModal2\">\n        <div style=\"align-items: center; justify-content: center; padding:8px 0 21px 0\" >\n          <i class=\"fas fa-user\"></i>\n          <!-- Button to Open the Modal -->\n          <span id=\"login2\" class=\"login ml-2\">\n            Đăng Nhập\n          </span>\n        </div>\n          \n      </div>\n  </div>\n  \n  <ng-template #Logout>\n    <div class=\"d-flex\" style=\"padding:8px 21px\">\n            <div class=\"d-inline\">\n              <a id=\"logout\" class=\"logout\">\n                  <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\n                  <span id=\"name\" class=\"ml-1\">Hello, {{TenUser}}</span>\n              </a>\n            </div>\n            <div class=\"d-inline ml-4\">\n              <a id=\"logout2\" (click)=\"DangXuat($event)\" class=\"logout\">\n                  <i class=\"fas fa-sign-out-alt\"></i>\n                  <span>Logout</span>             \n              </a>\n            </div>\n    \n    </div>\n  </ng-template>\n\n    <div class=\"modal left fade\" id=\"LoginModal2\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-body bodycontent\">\n                <button type=\"button\" class=\"close dong\" data-dismiss=\"modal\">&times;</button>\n                <div class=\"background\">\n                  </div>\n                  <!-- <app-login></app-login> -->\n                  <app-login2 (ThongTinUser)=\"ThongTinUser($event)\"></app-login2>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    \n  \n</div>\n"

/***/ }),

/***/ "./src/app/user/layout/header-new/login-register2/login-register2.component.scss":
/***/ (function(module, exports) {

module.exports = ".bodycontent {\n  background-attachment: scroll !important; }\n\n@-webkit-keyframes sk-cubemove {\n  25% {\n    -webkit-transform: translateX(12px) rotate(-90deg) scale(0.5); }\n  50% {\n    -webkit-transform: translateX(12px) translateY(12px) rotate(-180deg); }\n  75% {\n    -webkit-transform: translateX(0px) translateY(12px) rotate(-270deg) scale(0.5); }\n  100% {\n    -webkit-transform: rotate(-360deg); } }\n\n@keyframes sk-cubemove {\n  25% {\n    transform: translateX(12px) rotate(-90deg) scale(0.5);\n    -webkit-transform: translateX(12px) rotate(-90deg) scale(0.5); }\n  50% {\n    transform: translateX(12px) translateY(12px) rotate(-179deg);\n    -webkit-transform: translateX(12px) translateY(12px) rotate(-179deg); }\n  50.1% {\n    transform: translateX(12px) translateY(12px) rotate(-180deg);\n    -webkit-transform: translateX(12px) translateY(12px) rotate(-180deg); }\n  75% {\n    transform: translateX(0px) translateY(12px) rotate(-270deg) scale(0.5);\n    -webkit-transform: translateX(0px) translateY(12px) rotate(-270deg) scale(0.5); }\n  100% {\n    transform: rotate(-360deg);\n    -webkit-transform: rotate(-360deg); } }\n\ntextarea:focus,\ninput[type=\"text\"]:focus,\ninput[type=\"password\"]:focus,\ninput[type=\"datetime\"]:focus,\ninput[type=\"datetime-local\"]:focus,\ninput[type=\"date\"]:focus,\ninput[type=\"month\"]:focus,\ninput[type=\"time\"]:focus,\ninput[type=\"week\"]:focus,\ninput[type=\"number\"]:focus,\ninput[type=\"email\"]:focus,\ninput[type=\"url\"]:focus,\ninput[type=\"search\"]:focus,\ninput[type=\"tel\"]:focus,\ninput[type=\"color\"]:focus,\n.uneditable-input:focus {\n  border-color: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  outline: 0 none; }\n\na {\n  color: white; }\n\na:hover {\n  color: #81d8d0; }\n\n#LoginRegister2 {\n  color: white;\n  cursor: pointer;\n  font-size: 12px; }\n\na {\n  -webkit-transition: all 0.1s linear;\n  transition: all 0.1s linear; }\n\na:hover {\n  color: #81d8d0 !important; }\n\n.modal.left .modal-dialog {\n  position: fixed;\n  margin: auto;\n  width: 550px;\n  height: 100%;\n  -webkit-transform: translate3d(0%, 0, 0);\n  transform: translate3d(0%, 0, 0); }\n\n.modal.left .modal-content {\n  height: 100%;\n  border-radius: 0;\n  overflow-y: auto; }\n\n.modal.left.fade .modal-dialog {\n  right: -550px;\n  -webkit-transition: opacity 0.3s linear, right 0.3s ease-out;\n  transition: opacity 0.3s linear, right 0.3s ease-out; }\n\n.modal.left.fade.show .modal-dialog {\n  right: -1px; }\n\n.bodycontent {\n  background: url('cool-twitter-backgrounds.aacc58f1db23f81d5bc6.jpg') !important;\n  /* Create the parallax scrolling effect */\n  background-attachment: scroll !important;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 100%;\n  height: 100%;\n  -webkit-box-shadow: -1px 2px 23px 7px rgba(0, 0, 0, 0.4);\n          box-shadow: -1px 2px 23px 7px rgba(0, 0, 0, 0.4);\n  z-index: 1;\n  padding: 0; }\n\n.background {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  padding: 45px 55px;\n  padding-bottom: 10px; }\n\n.dong {\n  font-size: 1.9rem;\n  font-weight: 700;\n  line-height: 1;\n  color: white;\n  opacity: .5;\n  position: absolute;\n  right: 1000;\n  right: 5px;\n  z-index: 5000; }\n\n@media (max-width: 414px) {\n  .modal-dialog {\n    width: 100% !important; } }\n\n@media (max-width: 320px) {\n  #LoginRegister2 {\n    font-size: 80%; } }\n"

/***/ }),

/***/ "./src/app/user/layout/header-new/login-register2/login-register2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginRegister2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_user_service__ = __webpack_require__("./src/app/Services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginRegister2Component = /** @class */ (function () {
    function LoginRegister2Component(userService) {
        this.userService = userService;
        this.statusLogin = false;
    }
    LoginRegister2Component.prototype.ngOnInit = function () {
        this.CheckLogin();
    };
    LoginRegister2Component.prototype.ThongTinUser = function (thongtin) {
        if (thongtin != null) {
            this.statusLogin = true;
            this.TenUser = thongtin.FullName;
            localStorage.setItem('localUser', JSON.stringify(thongtin));
        }
        else {
            this.statusLogin = false;
        }
    };
    LoginRegister2Component.prototype.DangXuat = function (event) {
        this.userService.DangXuat();
        event.preventDefault();
    };
    LoginRegister2Component.prototype.CheckLogin = function () {
        if (this.userService.CheckLogin() == true) {
            this.statusLogin = true;
            var ThongTinUser = this.userService.LayThongTinUser();
            this.TenUser = ThongTinUser.FullName;
        }
        else {
            this.statusLogin = false;
        }
    };
    LoginRegister2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login-register2',
            template: __webpack_require__("./src/app/user/layout/header-new/login-register2/login-register2.component.html"),
            styles: [__webpack_require__("./src/app/user/layout/header-new/login-register2/login-register2.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Services_user_service__["a" /* UserService */]])
    ], LoginRegister2Component);
    return LoginRegister2Component;
}());



/***/ }),

/***/ "./src/app/user/layout/header-new/login2/login2.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"Login2\">\n    <!-- Nav pills -->\n    <ul class=\"nav nav-pills\">\n\n        <li class=\"nav-item pr-3\">\n            <a class=\"nav-link active lbdangnhap\" data-toggle=\"pill\" href=\"#dangnhap2\">\n                <h5>Đăng Nhập</h5>\n                <div class=\"mt-3\">\n                    <small style=\"color:#8e959e\" class=\"d-block\">Username: test</small>\n                    <small style=\"color:#8e959e\" class=\"d-block\">Password: test</small>\n                </div>\n               \n            </a>\n        </li>\n\n        <!-- <li class=\"nav-item pl-3\">\n            <a class=\"nav-link lbdangky\" data-toggle=\"pill\" href=\"#dangky2\">\n                <h5>Đăng Ký</h5>\n            </a>\n        </li> -->\n\n    </ul>\n\n    <!-- Tab panes -->\n    <div class=\"tab-content mt-3\">\n\n        <div class=\"tab-pane container active\" id=\"dangnhap2\">\n\n\n            <form [formGroup]=\"myform\" #loginForm=\"ngForm\" (ngSubmit)=\"Login(loginForm.value,$event)\">\n\n                <div class=\"group\">\n                    <input type=\"text\" formControlName=\"UserName\" name=\"UserName\" ngModel required [ngClass]=\"{'thatbai': UserName.invalid && (UserName.dirty)}\">\n                    <label class=\"label\">Tài Khoản</label>\n                    <div class=\"bar\" [ngClass]=\"{'thatbai': UserName.invalid && (UserName.dirty)}\"></div>\n                    <div class=\"loi mt-1\" *ngIf=\"UserName.errors && (UserName.dirty)\">\n                        <p>Không được để trống!</p>\n                    </div>\n                </div>\n\n                <div class=\"group\">\n                    <input type=\"password\" formControlName=\"PassWord\" name=\"PassWord\" ngModel required [ngClass]=\"{'thatbai': PassWord.errors && (PassWord.dirty)}\">\n                    <label class=\"label\">Mật Khẩu</label>\n                    <div class=\"bar\" [ngClass]=\"{'thatbai': PassWord.invalid && (PassWord.dirty)}\"></div>\n                    <div class=\"loi mt-1\" *ngIf=\"PassWord.errors && (PassWord.dirty)\">\n                        <p>Không được để trống!</p>\n                    </div>\n                </div>\n\n                <div class=\"d-flex\">\n                    <button class=\"btnLogin mb-4 d-flex\">\n                        <div class=\"spinner\">\n                            <div class=\"cube1\"></div>\n                            <div class=\"cube2\"></div>\n                        </div>\n                        Đăng Nhập</button>\n                    <small class=\"ml-3 mt-3\">Bạn quên mật khẩu?</small>\n                </div>\n\n            </form>\n\n\n        </div>\n\n        <div class=\"tab-pane container fade\" id=\"dangky2\">\n            <app-register2></app-register2>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/user/layout/header-new/login2/login2.component.scss":
/***/ (function(module, exports) {

module.exports = ".bodycontent {\n  background-attachment: scroll !important; }\n\n@-webkit-keyframes sk-cubemove {\n  25% {\n    -webkit-transform: translateX(12px) rotate(-90deg) scale(0.5); }\n  50% {\n    -webkit-transform: translateX(12px) translateY(12px) rotate(-180deg); }\n  75% {\n    -webkit-transform: translateX(0px) translateY(12px) rotate(-270deg) scale(0.5); }\n  100% {\n    -webkit-transform: rotate(-360deg); } }\n\n@keyframes sk-cubemove {\n  25% {\n    transform: translateX(12px) rotate(-90deg) scale(0.5);\n    -webkit-transform: translateX(12px) rotate(-90deg) scale(0.5); }\n  50% {\n    transform: translateX(12px) translateY(12px) rotate(-179deg);\n    -webkit-transform: translateX(12px) translateY(12px) rotate(-179deg); }\n  50.1% {\n    transform: translateX(12px) translateY(12px) rotate(-180deg);\n    -webkit-transform: translateX(12px) translateY(12px) rotate(-180deg); }\n  75% {\n    transform: translateX(0px) translateY(12px) rotate(-270deg) scale(0.5);\n    -webkit-transform: translateX(0px) translateY(12px) rotate(-270deg) scale(0.5); }\n  100% {\n    transform: rotate(-360deg);\n    -webkit-transform: rotate(-360deg); } }\n\ntextarea:focus,\ninput[type=\"text\"]:focus,\ninput[type=\"password\"]:focus,\ninput[type=\"datetime\"]:focus,\ninput[type=\"datetime-local\"]:focus,\ninput[type=\"date\"]:focus,\ninput[type=\"month\"]:focus,\ninput[type=\"time\"]:focus,\ninput[type=\"week\"]:focus,\ninput[type=\"number\"]:focus,\ninput[type=\"email\"]:focus,\ninput[type=\"url\"]:focus,\ninput[type=\"search\"]:focus,\ninput[type=\"tel\"]:focus,\ninput[type=\"color\"]:focus,\n.uneditable-input:focus {\n  border-color: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  outline: 0 none; }\n\na {\n  color: white; }\n\na:hover {\n  color: #81d8d0; }\n\ninput, select, textarea {\n  border-radius: 0;\n  -webkit-appearance: none; }\n\na:hover {\n  color: white; }\n\nsmall {\n  color: white; }\n\n#Login2 {\n  padding: 45px 55px;\n  padding-bottom: 10px;\n  position: relative;\n  z-index: 1200; }\n\n#dangnhap2 {\n  color: silver;\n  padding: 0;\n  padding-top: 30px; }\n\n#dangky2 {\n  color: silver;\n  padding: 0;\n  padding-top: 30px; }\n\na {\n  position: relative;\n  color: #8e959e; }\n\n.nav-pills .nav-link.active, .nav-pills .show > .nav-link {\n  background: none;\n  color: white;\n  border-radius: 0;\n  padding: 0; }\n\n.nav-pills .nav-link {\n  padding: 0; }\n\n.spinner {\n  display: none;\n  width: 35px;\n  position: relative; }\n\n.cube1, .cube2 {\n  background-color: #81d8d0;\n  width: 8px;\n  height: 8px;\n  position: absolute;\n  top: 0px;\n  left: -15px;\n  -webkit-animation: sk-cubemove 1.4s infinite ease-in-out;\n  animation: sk-cubemove 1.4s infinite ease-in-out; }\n\n.cube2 {\n  -webkit-animation-delay: -0.7s;\n  animation-delay: -0.7s; }\n\n.btnLogin {\n  background: transparent;\n  padding: 10px 30px;\n  border: 3px solid #81d8d0;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  color: white; }\n\n.group {\n  position: relative;\n  margin-bottom: 45px; }\n\ninput[type=\"text\"], input[type=\"password\"], input[type=\"number\"], input[type=\"email\"], input[type=\"phone\"], select {\n  color: white;\n  width: 100%;\n  background: none;\n  font-size: 16px;\n  padding: 5px 10px 5px 0px;\n  display: block;\n  border: none;\n  border-bottom: 1px solid #8e959e; }\n\ninput:focus, select:focus {\n  outline: none; }\n\n.label {\n  color: white;\n  font-size: 15px;\n  font-weight: normal;\n  position: absolute;\n  pointer-events: none;\n  left: 0px;\n  top: 5px;\n  -webkit-transition: all 0.4s;\n  transition: all 0.4s; }\n\ninput:focus ~ .label, input:valid ~ .label, select:focus ~ .label, select:valid ~ .label {\n  top: -20px;\n  font-size: 12px;\n  color: #81d8d0;\n  -webkit-transition: all 0.4s;\n  transition: all 0.4s; }\n\n.bar {\n  position: relative;\n  display: block;\n  width: 100%; }\n\n.bar:before, .bar:after {\n  content: '';\n  height: 2px;\n  width: 0;\n  bottom: -1px;\n  position: absolute;\n  background: #81d8d0;\n  -webkit-transition: all 0.4s;\n  transition: all 0.4s; }\n\ninput:focus ~ .bar:before, input:focus ~ .bar:after, select:focus ~ .bar:before, select:focus ~ .bar:after {\n  width: 100%; }\n\n.lbdangnhap::before {\n  display: block;\n  content: '';\n  position: absolute;\n  width: 1px;\n  height: 21px;\n  background: red;\n  right: -16px;\n  background: #8e959e;\n  top: 2px; }\n\n.thatbai {\n  border-bottom: 1px solid #ea1c47 !important; }\n\n.thatbai::after, .thatbai::before {\n  background: #ea1c47 !important; }\n\n.thatbai:focus ~ .label, .thatbai:valid ~ .label {\n  color: #ea1c47 !important; }\n\n.loi {\n  color: #ea1c47 !important; }\n\n.disablebtn {\n  cursor: no-drop !important; }\n\n@media (max-width: 414px) {\n  #Login {\n    padding: 35px 35px; } }\n"

/***/ }),

/***/ "./src/app/user/layout/header-new/login2/login2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_user_service__ = __webpack_require__("./src/app/Services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Services_thong_bao_service__ = __webpack_require__("./src/app/Services/thong-bao.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Login2Component = /** @class */ (function () {
    function Login2Component(router, userService, thongbao) {
        this.router = router;
        this.userService = userService;
        this.thongbao = thongbao;
        this.ThongTinUser = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.Groups = "GP07";
    }
    Login2Component.prototype.ngOnInit = function () {
        this.createFormControl();
        this.createForm();
    };
    Login2Component.prototype.Login = function (userLogin, event) {
        var _this = this;
        if (this.myform.valid) {
            $(".spinner").show();
            setTimeout(function () {
                if (userLogin.UserName !== "test" && userLogin.PassWord !== "test") {
                    _this.thongbao.Error("Sai tài khoản hoặc mật khẩu!");
                }
                else {
                    _this.ThongTinUser.emit({
                        FullName: 'Test',
                        UserName: 'Test',
                        Email: 'test@gmail.com'
                    });
                    $(".close").trigger("click");
                }
                $(".spinner").hide();
            }, 1000);
        }
        else {
            this.validateAllFormFields(this.myform);
        }
    };
    // validate when submit
    Login2Component.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]) {
                control.markAsDirty({ onlySelf: true });
            }
            else if (control instanceof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormGroup */]) {
                _this.validateAllFormFields(control);
            }
        });
    };
    Login2Component.prototype.createFormControl = function () {
        this.UserName = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required,
        ]),
            this.PassWord = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required
            ]);
    };
    Login2Component.prototype.createForm = function () {
        this.myform = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormGroup */]({
            UserName: this.UserName,
            PassWord: this.PassWord,
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], Login2Component.prototype, "ThongTinUser", void 0);
    Login2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login2',
            template: __webpack_require__("./src/app/user/layout/header-new/login2/login2.component.html"),
            styles: [__webpack_require__("./src/app/user/layout/header-new/login2/login2.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__Services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_4__Services_thong_bao_service__["a" /* ThongBaoService */]])
    ], Login2Component);
    return Login2Component;
}());



/***/ }),

/***/ "./src/app/user/layout/header-new/register2/register2.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"Register2\">\n\n    <form [formGroup]=\"myformRes\" #RegisterForm=\"ngForm\" (ngSubmit)=\"Register(RegisterForm.value,DateOfBirth2.value)\">\n        \n            <div class=\"row\">\n                <div class=\"col-6\">\n                        <div class=\"group\">\n                                <input type=\"text\"\n                                       formControlName=\"FirstName\" \n                                       name=\"FirstName\"\n                                       ngModel\n                                       required\n                                       [ngClass]=\"{'thatbai': FirstName.invalid && (FirstName.dirty || FirstName.touched)}\">\n                                <label class=\"label\">Họ</label>\n                                <div class=\"bar\" [ngClass]=\"{'thatbai': FirstName.invalid && (FirstName.dirty || FirstName.touched)}\"></div>\n                                <div class=\"loi mt-1\" *ngIf=\"FirstName.errors && (FirstName.dirty || FirstName.touched)\">\n                                    <p *ngIf=\"FirstName.errors.required\" class=\"m-0\">Không được để trống!</p>\n                                    <p *ngIf=\"FirstName.errors.minlength || FirstName.errors.maxlength\" class=\"m-0\">Tối đa 4 - 8 kí tự</p>\n                                    <p *ngIf=\"FirstName.errors.pattern\">Không đúng định dạng</p>\n                                </div>\n                            </div>\n                </div>\n                <div class=\"col-6\">\n                        <div class=\"group\">\n                                <input type=\"text\"\n                                       formControlName=\"LastName\" \n                                       name=\"LastName\"\n                                       ngModel\n                                       required\n                                       [ngClass]=\"{'thatbai': LastName.invalid && (LastName.dirty || LastName.touched)}\">\n                                <label class=\"label\">Tên</label>\n                                <div class=\"bar\" [ngClass]=\"{'thatbai': LastName.invalid && (LastName.dirty || LastName.touched)}\"></div>\n                                <div class=\"loi mt-1\" *ngIf=\"LastName.errors && (LastName.dirty || LastName.touched)\">\n                                    <p *ngIf=\"LastName.errors.required\" class=\"m-0\">Không được để trống!</p>\n                                    <p *ngIf=\"LastName.errors.minlength || LastName.errors.maxlength\" class=\"m-0\">Tối đa 4 - 8 kí tự</p>\n                                    <p *ngIf=\"LastName.errors.pattern\">Không đúng định dạng</p>\n                                </div>\n                            </div>\n                </div>\n            </div>\n   \n            <div class=\"group\">\n                <input type=\"text\"\n                       formControlName=\"UserName\" \n                       name=\"UserName\"\n                       ngModel\n                       required\n                       [ngClass]=\"{'thatbai': UserName.invalid && (UserName.dirty || UserName.touched)}\">\n                <label class=\"label\">Tài Khoản</label>\n                <div class=\"bar\" [ngClass]=\"{'thatbai': UserName.invalid && (UserName.dirty || UserName.touched)}\"></div>\n                <div class=\"loi mt-1\" *ngIf=\"UserName.errors && (UserName.dirty || UserName.touched)\">\n                    <p *ngIf=\"UserName.errors.required\" class=\"m-0\">Không được để trống!</p>\n                    <p *ngIf=\"UserName.errors.minlength || UserName.errors.maxlength\" class=\"m-0\">Tối đa 8 - 15 kí tự</p>\n                    <p *ngIf=\"UserName.errors.pattern\">Không chứa kí tự đặc biệt</p>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-6\">\n                        <div class=\"group\">\n                                <input type=\"password\"\n                                       formControlName=\"PassWord\" \n                                       name=\"PassWord\"\n                                       ngModel\n                                       required \n                                       [ngClass]=\"{'thatbai': PassWord.errors && (PassWord.dirty || PassWord.touched)}\">                \n                                <label class=\"label\">Mật Khẩu</label>\n                                <div class=\"bar\" [ngClass]=\"{'thatbai': PassWord.invalid && (PassWord.dirty || PassWord.touched)}\"></div>\n                                <div class=\"loi mt-1\" *ngIf=\"PassWord.errors && (PassWord.dirty || PassWord.touched)\">\n                                    <p *ngIf=\"PassWord.errors.required\" class=\"m-0\">Không được để trống!</p>\n                                    <p *ngIf=\"PassWord.errors.minlength || PassWord.errors.maxlength\">Tối đa 4 - 8 kí tự</p>\n                                </div>\n                            </div>\n                </div>\n                <div class=\"col-6\">\n                        <div class=\"group\">\n                                <input type=\"password\"\n                                       formControlName=\"RePass\" \n                                       name=\"RePass\"\n                                       ngModel\n                                       required \n                                       [ngClass]=\"{\n                                           'thatbai': RePass.errors && (RePass.dirty || RePass.touched),\n                                           'thatbai2': RePass.value != PassWord.value && (RePass.dirty)\n                                        }\">\n                                <label class=\"label\">Nhập lại Mật Khẩu</label>\n                                <div class=\"bar\" [ngClass]=\"{'thatbai': RePass.invalid && (RePass.dirty || RePass.touched),'thatbai3': RePass.value != PassWord.value && (RePass.dirty)}\"></div>\n                                <div class=\"loi mt-1\" *ngIf=\"RePass.errors && (RePass.dirty || RePass.touched)\">\n                                    <p class=\"m-0\" *ngIf=\"RePass.errors.required\">Không được để trống!</p>\n                                </div>\n                                <div class=\"loi mt-1\" *ngIf=\"RePass.value != PassWord.value && (RePass.dirty)\">\n                                    <p class=\"repass m-0\" *ngIf=\"RePass.value != PassWord.value\">Mật khẩu nhập lại không chính xác!</p>\n                                </div>\n                            </div>\n                </div>\n\n            </div>\n\n            <div class=\"group\">\n                    <input type=\"text\"\n                           formControlName=\"Email\" \n                           name=\"Email\"\n                           ngModel\n                           required\n                           [ngClass]=\"{'thatbai': Email.invalid && (Email.dirty || Email.touched)}\">\n                    <label class=\"label\">Email</label>\n                    <div class=\"bar\" [ngClass]=\"{'thatbai': Email.invalid && (Email.dirty || Email.touched)}\"></div>\n                    <div class=\"loi mt-1\" *ngIf=\"Email.errors && (Email.dirty || Email.touched)\">\n                        <p *ngIf=\"Email.errors.required\">Không được để trống!</p>\n                        <p *ngIf=\"Email.errors.pattern\">Không đúng định dạng!</p>\n                    </div>\n            </div>\n\n            <div class=\"group\">\n                    <input type=\"text\"\n                           #DateOfBirth2\n                           id=\"DateOfBirth2\"\n                           name=\"DateOfBirth2\"\n                           class=\"input datepicker-here\"\n                           data-language='vn'\n                           data-multiple-dates=\"1\"\n                           data-multiple-dates-separator=\", \"\n                           data-position='top left'\n                           data-date-format=\"mm/dd/yyyy\"\n                           required\n                           (blur)=\"validateDate()\"\n                           >\n                    <label class=\"label label2\">Sinh Nhật</label>\n                    <div class=\"bar bar2\"></div> \n                    <p class=\"loi loi1 m-0 pt-1\">Không được để trống!</p>\n                    <p class=\"loi2\">Không đúng định dạng! (MM/DD/YYYY)</p>\n            </div>\n\n            <div class=\"group\">\n                <input type=\"text\"\n                       formControlName=\"Phone\" \n                       name=\"Phone\"\n                       ngModel\n                       required \n                       [ngClass]=\"{'thatbai': Phone.errors && (Phone.dirty || Phone.touched)}\">\n                <label class=\"label\">Điện Thoại</label>\n                <div class=\"bar\" [ngClass]=\"{'thatbai': Phone.invalid && (Phone.dirty || Phone.touched)}\"></div>\n                <div class=\"loi mt-1\" *ngIf=\"Phone.errors && (Phone.dirty || Phone.touched)\">\n                    <p>Không được để trống!</p>\n                </div>\n            </div>\n        \n        \n              \n                <button class=\"btnDangky mb-4 d-flex\">\n                        <div class=\"spinner\">\n                                <div class=\"cube1\"></div>\n                                <div class=\"cube2\"></div>\n                              </div>\n                        Đăng Ký\n                </button>\n        \n        </form>\n\n<!-- <form role=\"form\" #registerForm=\"ngForm\" (ngSubmit)=\"RegisterUser(registerForm.value,thamso.value)\">\n  <div class=\"row\">\n      <div class=\"col-6\">\n          <div class=\"group\">      \n              <input type=\"text\" name=\"FirstName\" id=\"FirstName\" #FirstName=\"ngModel\" ngModel required>\n              <span class=\"highlight\"></span>\n              <span class=\"bar\"></span>\n              <label class=\"label\">Họ</label>\n          </div>\n      </div>\n      <div class=\"col-6\">\n          <div class=\"group\">      \n              <input type=\"text\" name=\"LastName\" id=\"LastName\" #LastName=\"ngModel\" ngModel required>\n              <span class=\"highlight\"></span>\n              <span class=\"bar\"></span>\n              <label class=\"label\">Tên</label>\n          </div>\n      </div>\n  </div>\n\n  <div class=\"group\">      \n      <input type=\"text\" name=\"UserName\" id=\"UserName\" #UserName=\"ngModel\" ngModel required>\n      <span class=\"highlight\"></span>\n      <span class=\"bar\"></span>\n      <label class=\"label\">Tài khoản</label>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-6\">\n        <div class=\"group\">      \n            <input type=\"text\" name=\"Password\" id=\"Password\" #Password=\"ngModel\" ngModel required>\n            <span class=\"highlight\"></span>\n            <span class=\"bar\"></span>\n            <label class=\"label\">Mật khẩu</label>\n        </div>\n    </div>\n    <div class=\"col-6\">\n        <div class=\"group\">      \n            <input type=\"text\" required>\n            <span class=\"highlight\"></span>\n            <span class=\"bar\"></span>\n            <label class=\"label\">Nhập lại mật khẩu</label>\n        </div>\n    </div>\n  </div>\n\n  <div class=\"group\">      \n      <input type=\"text\" name=\"Email\" id=\"Email\" #Email=\"ngModel\" ngModel required>\n      <span class=\"highlight\"></span>\n      <span class=\"bar\"></span>\n      <label class=\"label\">Email</label>\n  </div>\n\n  <div class=\"group\">      \n      <input type=\"text\" #thamso name=\"DateOfBirth\" #DateOfBirth=\"ngModel\" id=\"DateOfBirth\"\n      class=\"input datepicker-here\"\n      data-language='vn'\n      data-multiple-dates=\"1\"\n      data-multiple-dates-separator=\", \"\n      data-position='bottom left'\n      data-date-format=\"mm/dd/yyyy\"\n      ngModel required>\n      <span class=\"highlight\"></span>\n      <span class=\"bar\"></span>\n      <label class=\"label\">Ngày sinh</label>\n  </div>\n\n  <div class=\"group\">      \n      <input type=\"number\" name=\"Phone\" id=\"Phone\" #Phone=\"ngModel\" ngModel required>\n      <span class=\"highlight\"></span>\n      <span class=\"bar\"></span>\n      <label class=\"label\">Số điện thoại</label>\n  </div>\n\n  <div class=\"group\">\n        <select #GroupID=\"ngModel\" name=\"GroupID\" required ngModel>\n            <option >Chọn nhóm</option>\n            <option *ngFor=\"let group of Groups\" [value]=\"group.Id\">{{group.Name}}</option>\n        </select>\n        <span class=\"bar\"></span>\n        <label class=\"label\">Nhóm</label>\n  </div>  \n\n  <button class=\"btnDangky mt-4 mb-5\">Đăng ký</button>\n</form> -->\n\n\n\n</div>"

/***/ }),

/***/ "./src/app/user/layout/header-new/register2/register2.component.scss":
/***/ (function(module, exports) {

module.exports = ".bodycontent {\n  background-attachment: scroll !important; }\n\n@-webkit-keyframes sk-cubemove {\n  25% {\n    -webkit-transform: translateX(12px) rotate(-90deg) scale(0.5); }\n  50% {\n    -webkit-transform: translateX(12px) translateY(12px) rotate(-180deg); }\n  75% {\n    -webkit-transform: translateX(0px) translateY(12px) rotate(-270deg) scale(0.5); }\n  100% {\n    -webkit-transform: rotate(-360deg); } }\n\n@keyframes sk-cubemove {\n  25% {\n    transform: translateX(12px) rotate(-90deg) scale(0.5);\n    -webkit-transform: translateX(12px) rotate(-90deg) scale(0.5); }\n  50% {\n    transform: translateX(12px) translateY(12px) rotate(-179deg);\n    -webkit-transform: translateX(12px) translateY(12px) rotate(-179deg); }\n  50.1% {\n    transform: translateX(12px) translateY(12px) rotate(-180deg);\n    -webkit-transform: translateX(12px) translateY(12px) rotate(-180deg); }\n  75% {\n    transform: translateX(0px) translateY(12px) rotate(-270deg) scale(0.5);\n    -webkit-transform: translateX(0px) translateY(12px) rotate(-270deg) scale(0.5); }\n  100% {\n    transform: rotate(-360deg);\n    -webkit-transform: rotate(-360deg); } }\n\ntextarea:focus,\ninput[type=\"text\"]:focus,\ninput[type=\"password\"]:focus,\ninput[type=\"datetime\"]:focus,\ninput[type=\"datetime-local\"]:focus,\ninput[type=\"date\"]:focus,\ninput[type=\"month\"]:focus,\ninput[type=\"time\"]:focus,\ninput[type=\"week\"]:focus,\ninput[type=\"number\"]:focus,\ninput[type=\"email\"]:focus,\ninput[type=\"url\"]:focus,\ninput[type=\"search\"]:focus,\ninput[type=\"tel\"]:focus,\ninput[type=\"color\"]:focus,\n.uneditable-input:focus {\n  border-color: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  outline: 0 none; }\n\na {\n  color: white; }\n\na:hover {\n  color: #81d8d0; }\n\n#Register2 {\n  padding-bottom: 10px;\n  position: relative;\n  z-index: 1200; }\n\n.btnDangky {\n  background: transparent;\n  padding: 10px 30px;\n  border: 3px solid #81d8d0;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  color: white;\n  padding: 10px 45px; }\n\ninput, select, textarea {\n  border-radius: 0;\n  -webkit-appearance: none; }\n\n.spinner {\n  display: none;\n  width: 35px;\n  position: relative; }\n\n.cube1, .cube2 {\n  background-color: #81d8d0;\n  width: 8px;\n  height: 8px;\n  position: absolute;\n  top: 0px;\n  left: -15px;\n  -webkit-animation: sk-cubemove 1.4s infinite ease-in-out;\n  animation: sk-cubemove 1.4s infinite ease-in-out; }\n\n.cube2 {\n  -webkit-animation-delay: -0.7s;\n  animation-delay: -0.7s; }\n\n.group {\n  position: relative;\n  margin-bottom: 45px; }\n\ninput[type=\"text\"], input[type=\"password\"], input[type=\"number\"], input[type=\"email\"], select {\n  color: white;\n  width: 100%;\n  background: none;\n  font-size: 16px;\n  padding: 5px 10px 5px 0px;\n  display: block;\n  border: none;\n  border-bottom: 1px solid #8e959e; }\n\ninput:focus, select:focus {\n  outline: none; }\n\n.label {\n  color: white;\n  font-size: 15px;\n  font-weight: normal;\n  position: absolute;\n  pointer-events: none;\n  left: 0px;\n  top: 5px;\n  -webkit-transition: all 0.4s;\n  transition: all 0.4s; }\n\n.label2 {\n  color: white;\n  font-size: 15px;\n  font-weight: normal;\n  position: absolute;\n  pointer-events: none;\n  left: 0px;\n  top: 5px;\n  -webkit-transition: all 0.4s;\n  transition: all 0.4s; }\n\ninput:focus ~ .label, input:valid ~ .label, select:focus ~ .label, select:valid ~ .label {\n  top: -20px;\n  font-size: 12px;\n  color: #81d8d0;\n  -webkit-transition: all 0.4s;\n  transition: all 0.4s; }\n\n.uptop {\n  top: -20px;\n  font-size: 12px;\n  color: #81d8d0;\n  -webkit-transition: all 0.4s;\n  transition: all 0.4s; }\n\n.bar {\n  position: relative;\n  display: block;\n  width: 100%; }\n\n.bar:before, .bar:after {\n  content: '';\n  height: 2px;\n  width: 0;\n  bottom: -1px;\n  position: absolute;\n  background: #81d8d0;\n  -webkit-transition: all 0.4s;\n  transition: all 0.4s; }\n\ninput:focus ~ .bar:before, input:focus ~ .bar:after, select:focus ~ .bar:before, select:focus ~ .bar:after {\n  width: 100%; }\n\n.thatbai {\n  border-bottom: 1px solid #ea1c47 !important; }\n\n.thatbai::after, .thatbai::before {\n  background: #ea1c47 !important; }\n\n.thatbai:focus ~ .label, .thatbai:valid ~ .label {\n  color: #ea1c47 !important; }\n\n.thatbai2 {\n  border-bottom: 1px solid #ea1c47 !important;\n  border-bottom: 0 !important; }\n\n.thatbai2::after, .thatbai2::before {\n  background: #ea1c47 !important; }\n\n.thatbai2:focus ~ .label, .thatbai2:valid ~ .label {\n  color: #ea1c47 !important; }\n\n.thatbai3 {\n  border-bottom: 1px solid #ea1c47 !important;\n  border-bottom: 1px solid #ea1c47; }\n\n.thatbai3::after, .thatbai2::before {\n  background: #ea1c47 !important; }\n\n.thatbai3:focus ~ .label, .thatbai2:valid ~ .label {\n  color: #ea1c47 !important; }\n\n.loi {\n  color: #ea1c47 !important; }\n\n.disablebtn {\n  cursor: no-drop !important; }\n\n.repass {\n  color: #ea1c47; }\n\n.colorLoi {\n  color: #ea1c47; }\n\n.colorOk {\n  color: #81d8d0; }\n\n.loi2 {\n  color: #ea1c47; }\n"

/***/ }),

/***/ "./src/app/user/layout/header-new/register2/register2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Register2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_user_service__ = __webpack_require__("./src/app/Services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Services_thong_bao_service__ = __webpack_require__("./src/app/Services/thong-bao.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Register2Component = /** @class */ (function () {
    function Register2Component(userService, thongbao) {
        this.userService = userService;
        this.thongbao = thongbao;
        this.Group = "GP07";
    }
    Register2Component.prototype.ngOnInit = function () {
        this.createFormControl();
        this.createForm();
        $(".loi2").hide();
        $(".loi1").hide();
    };
    Register2Component.prototype.validateDate = function () {
        var regex = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
        var date = $("#DateOfBirth2");
        date.on("blur", function () {
            if (date.val() != "") {
                $(".loi1").hide();
            }
            if (regex.test(date.val()) == false) {
                $(".loi2").show();
                date.addClass("thatbai");
                $(".bar2").addClass("thatbai");
                $(".label2").addClass("thatbai2");
                $(".loi2").show();
            }
            else {
                $(".loi2").hide();
                date.removeClass("thatbai");
                $(".bar2").removeClass("thatbai");
                $(".label2").removeClass("thatbai2");
                $(".loi2").hide();
            }
        });
    };
    Register2Component.prototype.getToday = function () {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        today = mm + '/' + dd + '/' + yyyy;
        return today;
    };
    //Form register value
    Register2Component.prototype.Register = function (user, sinhnhat) {
        var _this = this;
        if (this.myformRes.valid) {
            user.DateRegister = this.getToday();
            user.DateOfBirth = sinhnhat;
            user.GroupID = this.Group;
            $(".spinner").show();
            setTimeout(function () {
                _this.userService.TaoTaiKhoan(user).subscribe(function (result) {
                    _this.userRegister = result;
                    $(".spinner").hide();
                    if (result == "Username already exists") {
                        _this.thongbao.Error("Tài khoản đã tồn tại!");
                    }
                    else {
                        _this.thongbao.Success("Đăng Ký thành công!");
                        setTimeout(function () {
                            _this.myformRes.reset();
                            $("#DateOfBirth2").val("");
                            $(".lbdangnhap").trigger("click");
                        }, 1000);
                    }
                });
            }, 2000);
        }
        else {
            this.validateAllFormFields(this.myformRes);
        }
        // validate Date
        var date = $("#DateOfBirth2");
        if (date.val() == "") {
            $(".loi1").show();
            date.addClass("thatbai");
            $(".bar2").addClass("thatbai");
            $(".label2").addClass("thatbai2");
        }
    };
    // validate when submit
    Register2Component.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]) {
                _this.validateAllFormFields(control);
            }
        });
    };
    Register2Component.prototype.createFormControl = function () {
        this.FirstName = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(4),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(8),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$")
        ]),
            this.LastName = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(4),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(8),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$")
            ]),
            this.UserName = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern("^[a-zA-Z0-9]+$"),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(8),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(15),
            ]),
            this.PassWord = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(4),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(8),
            ]),
            this.RePass = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,
            ]);
        this.Email = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
        ]),
            // this.DateOfBirth = new FormControl();
            // this.DateOfBirth =  new FormControl('',[
            // Validators.required,
            // Validators.pattern("^(?:(?:10|12|0?[13578])/(?:3[01]|[12][0-9]|0?[1-9])/(?:1[8-9]\\d{2}|[2-9]\\d{3})|(?:11|0?[469])/(?:30|[12][0-9]|0?[1-9])/(?:1[8-9]\\d{2}|[2-9]\\d{3})|0?2/(?:2[0-8]|1[0-9]|0?[1-9])/(?:1[8-9]\\d{2}|[2-9]\\d{3})|0?2/29/[2468][048]00|0?2/29/[3579][26]00|0?2/29/[1][89][0][48]|0?2/29/[2-9][0-9][0][48]|0?2/29/1[89][2468][048]|0?2/29/[2-9][0-9][2468][048]|0?2/29/1[89][13579][26]|0?2/29/[2-9][0-9][13579][26])$"),
            // ]),
            this.Phone = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
            ]);
    };
    Register2Component.prototype.createForm = function () {
        this.myformRes = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            FirstName: this.FirstName,
            LastName: this.LastName,
            UserName: this.UserName,
            PassWord: this.PassWord,
            RePass: this.RePass,
            Email: this.Email,
            // DateOfBirth: this.DateOfBirth,
            Phone: this.Phone,
        });
    };
    Register2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register2',
            template: __webpack_require__("./src/app/user/layout/header-new/register2/register2.component.html"),
            styles: [__webpack_require__("./src/app/user/layout/header-new/register2/register2.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__Services_thong_bao_service__["a" /* ThongBaoService */]])
    ], Register2Component);
    return Register2Component;
}());



/***/ }),

/***/ "./src/app/user/layout/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"headerTop\">\n  <div class=\"container clearfix\">\n\n\n      <div class=\"float-left headerleft\">\n        <ul class=\"p-0\">\n          <li class=\"d-inline\">\n            <a href=\"\">Giới thiệu</a>\n          </li>\n          <li class=\"d-inline\">\n            <a href=\"\">Tuyển dụng</a>\n          </li>\n          <li class=\"d-inline\">\n            <a href=\"\">FAQS</a>\n          </li>\n        </ul>\n      </div>\n\n      <div class=\"float-right headerright\">\n        <app-login-register></app-login-register>\n      </div>\n    \n  </div>\n</div>\n\n    <!-- Brand -->\n      <div class=\"text-center brand\">\n        <a id=\"logoMovie\" routerLink=\"/\">\n          <h1 (click)=\"chuyentrang\">CYBER</h1>\n          <small>Best of Cinema</small>\n        </a>\n      </div>\n  \n\n<!-- Navbar navigation-->\n<nav class=\"navbar navbar-expand-md sticky-top m-0\" id=\"myNav\">\n  <div class=\"container\">\n\n    <!-- Brand -->\n    <div id=\"logo2\" class=\"text-center\">\n        <a id=\"logoMovie2\" class=\"\" href=\"#\">\n          <h1>CYBER</h1>\n          <small>Best of Cinema</small>\n        </a>\n    </div>\n  \n\n    <!-- Button Collapse -->\n    <div class=\"navbarMenu\">\n\n        <div class=\"text-right\">\n            <div class=\"navbar-header\">\n              <button id=\"sidebarCollapse\" class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n                <span></span>\n                <span></span>\n                <span></span>\n              </button>\n            </div>\n          </div>\n\n      <div class=\"okNav\">\n        <!-- navigation-->\n        <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n          <div class=\"decorate\"></div>\n          <ul class=\"navbar-nav\">\n            <div class=\"mx-auto menu\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" href='#GroupCinema'>LỊCH CHIẾU</a>\n                  </li>\n      \n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\".carousel-indicators\">PHIM</a>\n                  </li>\n      \n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"#GroupCinema\">CỤM RẠP</a>\n                  </li>\n      \n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"#\">ƯU ĐÃI</a>\n                  </li>\n            </div>\n\n            <!-- Popover Search1 -->\n           <div id=\"Search\" data-placement=\"bottom\" data-toggle=\"popover\" data-container=\"body\" data-html=\"true\">\n              <i class=\"fa fa-search\" href=\"#\" id=\"searchok\"></i>\n              <div id=\"popover-content\">\n                <form action=\"\" method=\"GET\" class=\"form-inline\" role=\"form\">\n                  <div class=\"form-group\">\n                    <input class=\"searchInput\" type=\"text\" placeholder=\"Bạn muốn xem phim gì hôm nay?\">\n                  </div>\n                </form>\n                <!-- <div id=\"load\" class=\"text-center pt-1\">\n                <div class=\"pr-1 preloader2\">\n                  <div class=\"loader2\">\n                    <span style=\"visibility:hidden\">L</span>\n                  </div>\n                </div>\n              </div> -->\n              </div>\n            </div>\n            <!-- /Popover Search -->\n            \n          </ul>\n\n           \n\n        </div>\n        <!-- /navigation-->\n      </div>\n    </div>\n    <!-- /Button Collapse -->\n\n\n\n\n\n\n  </div>\n  <!-- /Container -->\n</nav>\n<!-- /Navbar navigation-->\n"

/***/ }),

/***/ "./src/app/user/layout/header/header.component.scss":
/***/ (function(module, exports) {

module.exports = ".bodycontent {\n  background-attachment: scroll !important; }\n\n@-webkit-keyframes sk-cubemove {\n  25% {\n    -webkit-transform: translateX(12px) rotate(-90deg) scale(0.5); }\n  50% {\n    -webkit-transform: translateX(12px) translateY(12px) rotate(-180deg); }\n  75% {\n    -webkit-transform: translateX(0px) translateY(12px) rotate(-270deg) scale(0.5); }\n  100% {\n    -webkit-transform: rotate(-360deg); } }\n\n@keyframes sk-cubemove {\n  25% {\n    transform: translateX(12px) rotate(-90deg) scale(0.5);\n    -webkit-transform: translateX(12px) rotate(-90deg) scale(0.5); }\n  50% {\n    transform: translateX(12px) translateY(12px) rotate(-179deg);\n    -webkit-transform: translateX(12px) translateY(12px) rotate(-179deg); }\n  50.1% {\n    transform: translateX(12px) translateY(12px) rotate(-180deg);\n    -webkit-transform: translateX(12px) translateY(12px) rotate(-180deg); }\n  75% {\n    transform: translateX(0px) translateY(12px) rotate(-270deg) scale(0.5);\n    -webkit-transform: translateX(0px) translateY(12px) rotate(-270deg) scale(0.5); }\n  100% {\n    transform: rotate(-360deg);\n    -webkit-transform: rotate(-360deg); } }\n\ntextarea:focus,\ninput[type=\"text\"]:focus,\ninput[type=\"password\"]:focus,\ninput[type=\"datetime\"]:focus,\ninput[type=\"datetime-local\"]:focus,\ninput[type=\"date\"]:focus,\ninput[type=\"month\"]:focus,\ninput[type=\"time\"]:focus,\ninput[type=\"week\"]:focus,\ninput[type=\"number\"]:focus,\ninput[type=\"email\"]:focus,\ninput[type=\"url\"]:focus,\ninput[type=\"search\"]:focus,\ninput[type=\"tel\"]:focus,\ninput[type=\"color\"]:focus,\n.uneditable-input:focus {\n  border-color: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  outline: 0 none; }\n\na {\n  color: white; }\n\na:hover {\n  color: #81d8d0; }\n\n/* Header Top */\n\n.headerleft li {\n  margin-right: 33px;\n  padding-bottom: 7px; }\n\n.headerright li {\n  padding-bottom: 7px; }\n\n.link1 li {\n  padding: 10px 15px; }\n\n#headerTop {\n  padding-top: 15px;\n  padding-bottom: 3px;\n  background: #1a202c;\n  z-index: 1;\n  width: 100%;\n  margin-bottom: -2px; }\n\n#headerTop a {\n  color: #8e959e; }\n\n#headerTop i {\n  padding-right: 4px; }\n\n#headerTop .col-md-6 {\n  padding-top: 10px; }\n\n#headerTop li {\n  position: relative; }\n\n#headerTop li::before {\n  content: '';\n  position: absolute;\n  width: 0;\n  left: 50%;\n  border-radius: 5px;\n  height: 1px;\n  bottom: 0;\n  background-color: #81d8d0;\n  -webkit-transition: all ease-in-out .2s;\n  transition: all ease-in-out .2s; }\n\n#headerTop li:hover::before {\n  width: 100%;\n  left: 0; }\n\n.link2 li {\n  padding: 10px 15px !important; }\n\n.link2 li {\n  position: relative; }\n\n.link2 li::before {\n  content: '';\n  position: absolute;\n  width: 0;\n  left: 50%;\n  border-radius: 5px;\n  height: 3px;\n  bottom: 0;\n  background-color: #81d8d0;\n  -webkit-transition: all ease-in-out .2s;\n  transition: all ease-in-out .2s; }\n\n.link2 li:hover::before {\n  width: 100%;\n  left: 0; }\n\n/* Logo */\n\n.brand {\n  background: #1a202c; }\n\n#logoMovie {\n  padding-top: 30px;\n  padding-bottom: 30px;\n  display: block;\n  width: 100%;\n  color: #81d8d0;\n  text-shadow: 0px 0px 10px #81d8d0; }\n\n#logoMovie h1 {\n  position: relative;\n  top: 0; }\n\n#logoMovie small {\n  position: relative;\n  top: -13px;\n  left: 4px;\n  letter-spacing: 5px; }\n\n#logoMovie h1 {\n  font-size: 3em; }\n\n#logo2 {\n  opacity: 0; }\n\n#logoMovie2 {\n  display: block;\n  width: 100%;\n  color: #81d8d0;\n  text-shadow: 0px 0px 10px #81d8d0;\n  height: 57px; }\n\n.showLogo {\n  display: block;\n  color: #81d8d0;\n  text-shadow: 0px 0px 10px #81d8d0;\n  -webkit-animation: myanim 0.5s linear forwards;\n          animation: myanim 0.5s linear forwards;\n  height: 61px;\n  width: 110px; }\n\n@-webkit-keyframes myanim {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes myanim {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n#logoMovie2 h1 {\n  position: relative;\n  top: 0;\n  font-size: 2em; }\n\n#logoMovie2 small {\n  position: relative;\n  top: -13px;\n  letter-spacing: 1.2px;\n  font-size: 70%; }\n\n/* Navbar */\n\n.navbarMenu {\n  width: 103%; }\n\n.sticky {\n  position: fixed !important;\n  top: 0 !important;\n  width: 100%; }\n\n.navbar {\n  padding: 5px 0;\n  width: 100%;\n  background: #1f2531; }\n\n#myNavbar {\n  position: relative;\n  padding: 5px 0; }\n\n#Search {\n  position: absolute;\n  right: 0;\n  top: 18px; }\n\n#myNavbar a {\n  color: white; }\n\n#myNavbar li {\n  position: relative;\n  display: inline-block; }\n\n#myNavbar a:hover {\n  color: #81d8d0;\n  -webkit-transition: all 0.1s linear;\n  transition: all 0.1s linear; }\n\n.navbar i {\n  color: #81d8d0; }\n\n.navbar .navbar-nav {\n  width: 92%; }\n\n.navbar li.nav-item {\n  padding: 5px 21px; }\n\n.navbar li.nav-item > a {\n  font-weight: 500; }\n\n.navbar #sidebarCollapse span {\n  width: 30px;\n  height: 3px;\n  margin-top: 8px !important;\n  margin-bottom: 8px !important;\n  display: block;\n  background: white;\n  -webkit-transition: all 0.8s cubic-bezier(0.81, -0.33, 0.345, 1.375);\n  transition: all 0.8s cubic-bezier(0.81, -0.33, 0.345, 1.375); }\n\n.navbar #sidebarCollapse.active span:nth-of-type(1) {\n  -webkit-transform: rotate(315deg) translate(-9px, 9px);\n          transform: rotate(315deg) translate(-9px, 9px); }\n\n.navbar #sidebarCollapse.active span:nth-of-type(2) {\n  opacity: 0; }\n\n.navbar #sidebarCollapse.active span:nth-of-type(3) {\n  -webkit-transform: rotate(-315deg) translate(-6px, -6px);\n          transform: rotate(-315deg) translate(-6px, -6px); }\n\n/* Search Icon */\n\n#login {\n  cursor: pointer; }\n\n.searchInput {\n  border: none;\n  width: 245px; }\n\n.searchInput:focus {\n  border: none !important; }\n\n.form-inline {\n  width: 250px !important; }\n"

/***/ }),

/***/ "./src/app/user/layout/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_user_service__ = __webpack_require__("./src/app/Services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(userSerivce, router) {
        this.userSerivce = userSerivce;
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        $("#myNavbar").css("top", "0px");
        this.PopoverSearch();
        this.StickyTop();
    };
    HeaderComponent.prototype.chuyentrang = function () {
        this.router.navigate(['/Home']);
    };
    HeaderComponent.prototype.StickyTop = function () {
        // Sticky top
        window.onscroll = function () {
            myFunction();
        };
        // Sticky top
        var header = document.getElementById("myNav");
        var sticky = header.offsetTop;
        function myFunction() {
            if (window.pageYOffset >= sticky) {
                $("#logo2").addClass("showLogo");
                $(".navbar").css("box-shadow", "0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12)");
                $("#myNav").css("background", "#1f2531");
            }
            else {
                $("#logo2").removeClass("showLogo");
                $(".navbar").css("box-shadow", "none");
                $("#myNav").css("background", "#1f2531");
            }
        }
    };
    HeaderComponent.prototype.PopoverSearch = function () {
        // Popover Search
        $('#popover-content').hide();
        $("[data-toggle=popover]").popover({
            html: true,
            content: function () {
                return $('#popover-content').html();
            }
        });
        $("body").delegate("#searchok", "click", function () {
            $(".popover-body").css("border", "4px solid #81d8d0");
            $(".arrow").css("margin-top", "4px");
            $(".popover .fade .bs-popover-bottom .show").css("margin-top", "40px");
            $(".popover").css("z-index", "3000");
            $(".popover").css("margin-top", "14px");
        });
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/user/layout/header/header.component.html"),
            styles: [__webpack_require__("./src/app/user/layout/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/user/layout/header/login-register/login-register.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"LoginRegister\">\n    <div class=\"d-flex\" *ngIf=\"statusLogin == false; else Logout\">\n        <a id=\"login\">\n            <i class=\"fas fa-user\"></i>\n            <!-- Button to Open the Modal -->\n            <span class=\"login ml-2\" (click)=\"login\" data-toggle=\"modal\" data-target=\"#LoginModal\">\n              Đăng Nhập\n            </span>\n        </a>\n    </div>\n    \n    <ng-template #Logout>\n      <div class=\"d-flex\">\n              <div class=\"d-inline\">\n                <a id=\"logout\" class=\"logout\">\n                    <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\n                    <span id=\"name\" class=\"ml-1\">Hello, {{TenUser}}</span>\n                </a>\n              </div>\n              <div class=\"d-inline ml-4\">\n                <a id=\"logout2\" (click)=\"DangXuat($event)\" class=\"logout\">\n                    <i class=\"fas fa-sign-out-alt\"></i>\n                    <span>Logout</span>             \n                </a>\n              </div>\n      \n      </div>\n    </ng-template>\n\n      <div class=\"modal left fade\" id=\"LoginModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n          <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n              <div class=\"modal-body bodycontent\">\n                  <button type=\"button\" class=\"close dong\" data-dismiss=\"modal\">&times;</button>\n                  <div class=\"background\">\n                    </div>\n                    <app-login (ThongTinUser)=\"ThongTinUser($event)\"></app-login>\n              </div>\n            </div>\n          </div>\n        </div>\n\n      \n    \n</div>\n"

/***/ }),

/***/ "./src/app/user/layout/header/login-register/login-register.component.scss":
/***/ (function(module, exports) {

module.exports = ".bodycontent {\n  background-attachment: scroll !important; }\n\n@-webkit-keyframes sk-cubemove {\n  25% {\n    -webkit-transform: translateX(12px) rotate(-90deg) scale(0.5); }\n  50% {\n    -webkit-transform: translateX(12px) translateY(12px) rotate(-180deg); }\n  75% {\n    -webkit-transform: translateX(0px) translateY(12px) rotate(-270deg) scale(0.5); }\n  100% {\n    -webkit-transform: rotate(-360deg); } }\n\n@keyframes sk-cubemove {\n  25% {\n    transform: translateX(12px) rotate(-90deg) scale(0.5);\n    -webkit-transform: translateX(12px) rotate(-90deg) scale(0.5); }\n  50% {\n    transform: translateX(12px) translateY(12px) rotate(-179deg);\n    -webkit-transform: translateX(12px) translateY(12px) rotate(-179deg); }\n  50.1% {\n    transform: translateX(12px) translateY(12px) rotate(-180deg);\n    -webkit-transform: translateX(12px) translateY(12px) rotate(-180deg); }\n  75% {\n    transform: translateX(0px) translateY(12px) rotate(-270deg) scale(0.5);\n    -webkit-transform: translateX(0px) translateY(12px) rotate(-270deg) scale(0.5); }\n  100% {\n    transform: rotate(-360deg);\n    -webkit-transform: rotate(-360deg); } }\n\ntextarea:focus,\ninput[type=\"text\"]:focus,\ninput[type=\"password\"]:focus,\ninput[type=\"datetime\"]:focus,\ninput[type=\"datetime-local\"]:focus,\ninput[type=\"date\"]:focus,\ninput[type=\"month\"]:focus,\ninput[type=\"time\"]:focus,\ninput[type=\"week\"]:focus,\ninput[type=\"number\"]:focus,\ninput[type=\"email\"]:focus,\ninput[type=\"url\"]:focus,\ninput[type=\"search\"]:focus,\ninput[type=\"tel\"]:focus,\ninput[type=\"color\"]:focus,\n.uneditable-input:focus {\n  border-color: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  outline: 0 none; }\n\na {\n  color: white; }\n\na:hover {\n  color: #81d8d0; }\n\n#LoginRegister {\n  color: white;\n  cursor: pointer;\n  font-size: 12px; }\n\na {\n  -webkit-transition: all 0.1s linear;\n  transition: all 0.1s linear; }\n\na:hover {\n  color: #81d8d0 !important; }\n\n.modal.left .modal-dialog {\n  position: fixed;\n  margin: auto;\n  width: 550px;\n  height: 100%;\n  -webkit-transform: translate3d(0%, 0, 0);\n  transform: translate3d(0%, 0, 0); }\n\n.modal.left .modal-content {\n  height: 100%;\n  border-radius: 0;\n  overflow-y: auto; }\n\n.modal.left.fade .modal-dialog {\n  right: -550px;\n  -webkit-transition: opacity 0.3s linear, right 0.3s ease-out;\n  transition: opacity 0.3s linear, right 0.3s ease-out; }\n\n.modal.left.fade.show .modal-dialog {\n  right: -1px; }\n\n.bodycontent {\n  padding: 0;\n  background: url('cool-twitter-backgrounds.aacc58f1db23f81d5bc6.jpg');\n  /* Create the parallax scrolling effect */\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 100%;\n  height: 100%;\n  -webkit-box-shadow: -1px 2px 23px 7px rgba(0, 0, 0, 0.4);\n          box-shadow: -1px 2px 23px 7px rgba(0, 0, 0, 0.4);\n  z-index: 1; }\n\n.background {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  padding: 45px 55px;\n  padding-bottom: 10px; }\n\n.dong {\n  font-size: 1.9rem;\n  font-weight: 700;\n  line-height: 1;\n  color: white;\n  opacity: .5;\n  position: absolute;\n  right: 1000;\n  right: 5px;\n  z-index: 5000; }\n\n@media (max-width: 414px) {\n  .modal-dialog {\n    width: 100% !important; } }\n"

/***/ }),

/***/ "./src/app/user/layout/header/login-register/login-register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginRegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_user_service__ = __webpack_require__("./src/app/Services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginRegisterComponent = /** @class */ (function () {
    function LoginRegisterComponent(userService) {
        this.userService = userService;
        this.statusLogin = false;
    }
    LoginRegisterComponent.prototype.ngOnInit = function () {
        this.CheckLogin();
    };
    LoginRegisterComponent.prototype.ThongTinUser = function (thongtin) {
        if (thongtin != null) {
            this.statusLogin = true;
            this.TenUser = thongtin.FullName;
            localStorage.setItem('localUser', JSON.stringify(thongtin));
        }
        else {
            this.statusLogin = false;
        }
    };
    LoginRegisterComponent.prototype.DangXuat = function (event) {
        this.userService.DangXuat();
        event.preventDefault();
    };
    LoginRegisterComponent.prototype.CheckLogin = function () {
        if (this.userService.CheckLogin() == true) {
            this.statusLogin = true;
            var ThongTinUser = this.userService.LayThongTinUser();
            this.TenUser = ThongTinUser.FullName;
        }
        else {
            this.statusLogin = false;
        }
    };
    LoginRegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login-register',
            template: __webpack_require__("./src/app/user/layout/header/login-register/login-register.component.html"),
            styles: [__webpack_require__("./src/app/user/layout/header/login-register/login-register.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Services_user_service__["a" /* UserService */]])
    ], LoginRegisterComponent);
    return LoginRegisterComponent;
}());



/***/ }),

/***/ "./src/app/user/layout/header/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"Login\">\n    <!-- Nav pills -->\n    <ul class=\"nav nav-pills\">\n\n        <li class=\"nav-item pr-3\">\n            <a class=\"nav-link active lbdangnhap\" data-toggle=\"pill\" href=\"#dangnhap\">\n                <h5>Đăng Nhập</h5>\n                <div class=\"mt-3\">\n                    <small style=\"color:#8e959e\" class=\"d-block\">Username: test</small>\n                    <small style=\"color:#8e959e\" class=\"d-block\">Password: test</small>\n                </div>\n            </a>\n        </li>\n\n        <li class=\"nav-item pl-3\">\n            <a class=\"nav-link lbdangky\" data-toggle=\"pill\" href=\"#dangky\">\n                <h5>Đăng Ký</h5>\n            </a>\n        </li>\n\n    </ul>\n\n    <!-- Tab panes -->\n    <div class=\"tab-content mt-3\">\n\n        <div class=\"tab-pane container active\" id=\"dangnhap\">\n\n\n            <form [formGroup]=\"myform\" #loginForm=\"ngForm\" (ngSubmit)=\"Login(loginForm.value,$event)\">\n                <div class=\"group\">\n                    <input type=\"text\" formControlName=\"UserName\" name=\"UserName\" ngModel required [ngClass]=\"{'thatbai': UserName.invalid && (UserName.dirty)}\">\n                    <label class=\"label\">Tài Khoản</label>\n                    <div class=\"bar\" [ngClass]=\"{'thatbai': UserName.invalid && (UserName.dirty)}\"></div>\n                    <div class=\"loi mt-1\" *ngIf=\"UserName.errors && (UserName.dirty)\">\n                        <p>Không được để trống!</p>\n                    </div>\n                </div>\n\n                <div class=\"group\">\n                    <input type=\"password\" formControlName=\"PassWord\" name=\"PassWord\" ngModel required [ngClass]=\"{'thatbai': PassWord.errors && (PassWord.dirty)}\">\n                    <label class=\"label\">Mật Khẩu</label>\n                    <div class=\"bar\" [ngClass]=\"{'thatbai': PassWord.invalid && (PassWord.dirty)}\"></div>\n                    <div class=\"loi mt-1\" *ngIf=\"PassWord.errors && (PassWord.dirty)\">\n                        <p>Không được để trống!</p>\n                    </div>\n                </div>\n\n                <div class=\"d-flex\">\n                    <button class=\"btnLogin mb-4 d-flex\">\n                        <div class=\"spinner\">\n                            <div class=\"cube1\"></div>\n                            <div class=\"cube2\"></div>\n                        </div>\n                        Đăng Nhập</button>\n                    <small class=\"ml-3 mt-3\">Bạn quên mật khẩu?</small>\n                </div>\n\n            </form>\n\n\n        </div>\n\n        <div class=\"tab-pane container fade\" id=\"dangky\">\n            <app-register></app-register>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/user/layout/header/login/login.component.scss":
/***/ (function(module, exports) {

module.exports = ".bodycontent {\n  background-attachment: scroll !important; }\n\n@-webkit-keyframes sk-cubemove {\n  25% {\n    -webkit-transform: translateX(12px) rotate(-90deg) scale(0.5); }\n  50% {\n    -webkit-transform: translateX(12px) translateY(12px) rotate(-180deg); }\n  75% {\n    -webkit-transform: translateX(0px) translateY(12px) rotate(-270deg) scale(0.5); }\n  100% {\n    -webkit-transform: rotate(-360deg); } }\n\n@keyframes sk-cubemove {\n  25% {\n    transform: translateX(12px) rotate(-90deg) scale(0.5);\n    -webkit-transform: translateX(12px) rotate(-90deg) scale(0.5); }\n  50% {\n    transform: translateX(12px) translateY(12px) rotate(-179deg);\n    -webkit-transform: translateX(12px) translateY(12px) rotate(-179deg); }\n  50.1% {\n    transform: translateX(12px) translateY(12px) rotate(-180deg);\n    -webkit-transform: translateX(12px) translateY(12px) rotate(-180deg); }\n  75% {\n    transform: translateX(0px) translateY(12px) rotate(-270deg) scale(0.5);\n    -webkit-transform: translateX(0px) translateY(12px) rotate(-270deg) scale(0.5); }\n  100% {\n    transform: rotate(-360deg);\n    -webkit-transform: rotate(-360deg); } }\n\ntextarea:focus,\ninput[type=\"text\"]:focus,\ninput[type=\"password\"]:focus,\ninput[type=\"datetime\"]:focus,\ninput[type=\"datetime-local\"]:focus,\ninput[type=\"date\"]:focus,\ninput[type=\"month\"]:focus,\ninput[type=\"time\"]:focus,\ninput[type=\"week\"]:focus,\ninput[type=\"number\"]:focus,\ninput[type=\"email\"]:focus,\ninput[type=\"url\"]:focus,\ninput[type=\"search\"]:focus,\ninput[type=\"tel\"]:focus,\ninput[type=\"color\"]:focus,\n.uneditable-input:focus {\n  border-color: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  outline: 0 none; }\n\na {\n  color: white; }\n\na:hover {\n  color: #81d8d0; }\n\ninput, select, textarea {\n  border-radius: 0;\n  -webkit-appearance: none; }\n\na:hover {\n  color: white; }\n\nsmall {\n  color: white; }\n\n#Login {\n  padding: 45px 55px;\n  padding-bottom: 10px;\n  position: relative;\n  z-index: 1200; }\n\n#dangnhap {\n  color: silver;\n  padding: 0;\n  padding-top: 30px; }\n\n#dangky {\n  color: silver;\n  padding: 0;\n  padding-top: 30px; }\n\na {\n  position: relative;\n  color: #8e959e; }\n\n.nav-pills .nav-link.active, .nav-pills .show > .nav-link {\n  background: none;\n  color: white;\n  border-radius: 0;\n  padding: 0; }\n\n.nav-pills .nav-link {\n  padding: 0; }\n\n.spinner {\n  display: none;\n  width: 35px;\n  position: relative; }\n\n.cube1, .cube2 {\n  background-color: #81d8d0;\n  width: 8px;\n  height: 8px;\n  position: absolute;\n  top: 0px;\n  left: -15px;\n  -webkit-animation: sk-cubemove 1.4s infinite ease-in-out;\n  animation: sk-cubemove 1.4s infinite ease-in-out; }\n\n.cube2 {\n  -webkit-animation-delay: -0.7s;\n  animation-delay: -0.7s; }\n\n.btnLogin {\n  background: transparent;\n  padding: 10px 30px;\n  border: 3px solid #81d8d0;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  color: white; }\n\n.group {\n  position: relative;\n  margin-bottom: 45px; }\n\ninput[type=\"text\"], input[type=\"password\"], input[type=\"number\"], input[type=\"email\"], input[type=\"phone\"], select {\n  color: white;\n  width: 100%;\n  background: none;\n  font-size: 16px;\n  padding: 5px 10px 5px 0px;\n  display: block;\n  border: none;\n  border-bottom: 1px solid #8e959e; }\n\ninput:focus, select:focus {\n  outline: none; }\n\n.label {\n  color: white;\n  font-size: 15px;\n  font-weight: normal;\n  position: absolute;\n  pointer-events: none;\n  left: 0px;\n  top: 5px;\n  -webkit-transition: all 0.4s;\n  transition: all 0.4s; }\n\ninput:focus ~ .label, input:valid ~ .label, select:focus ~ .label, select:valid ~ .label {\n  top: -20px;\n  font-size: 12px;\n  color: #81d8d0;\n  -webkit-transition: all 0.4s;\n  transition: all 0.4s; }\n\n.bar {\n  position: relative;\n  display: block;\n  width: 100%; }\n\n.bar:before, .bar:after {\n  content: '';\n  height: 2px;\n  width: 0;\n  bottom: -1px;\n  position: absolute;\n  background: #81d8d0;\n  -webkit-transition: all 0.4s;\n  transition: all 0.4s; }\n\ninput:focus ~ .bar:before, input:focus ~ .bar:after, select:focus ~ .bar:before, select:focus ~ .bar:after {\n  width: 100%; }\n\n.lbdangnhap::before {\n  display: block;\n  content: '';\n  position: absolute;\n  width: 1px;\n  height: 21px;\n  background: red;\n  right: -16px;\n  background: #8e959e;\n  top: 2px; }\n\n.thatbai {\n  border-bottom: 1px solid #ea1c47 !important; }\n\n.thatbai::after, .thatbai::before {\n  background: #ea1c47 !important; }\n\n.thatbai:focus ~ .label, .thatbai:valid ~ .label {\n  color: #ea1c47 !important; }\n\n.loi {\n  color: #ea1c47 !important; }\n\n.disablebtn {\n  cursor: no-drop !important; }\n\n@media (max-width: 414px) {\n  #Login {\n    padding: 35px 35px; } }\n"

/***/ }),

/***/ "./src/app/user/layout/header/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_user_service__ = __webpack_require__("./src/app/Services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Services_thong_bao_service__ = __webpack_require__("./src/app/Services/thong-bao.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, userService, thongbao) {
        this.router = router;
        this.userService = userService;
        this.thongbao = thongbao;
        this.ThongTinUser = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.Groups = "GP07";
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.createFormControl();
        this.createForm();
    };
    LoginComponent.prototype.Login = function (userLogin, event) {
        var _this = this;
        if (this.myform.valid) {
            $(".spinner").show();
            setTimeout(function () {
                if (userLogin.UserName !== "test" && userLogin.PassWord !== "test") {
                    _this.thongbao.Error("Sai tài khoản hoặc mật khẩu!");
                }
                else {
                    _this.ThongTinUser.emit({
                        FullName: 'Test',
                        UserName: 'Test',
                        Email: 'test@gmail.com'
                    });
                    $(".close").trigger("click");
                }
                $(".spinner").hide();
            }, 1000);
        }
        else {
            this.validateAllFormFields(this.myform);
        }
    };
    // validate when submit
    LoginComponent.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]) {
                control.markAsDirty({ onlySelf: true });
            }
            else if (control instanceof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormGroup */]) {
                _this.validateAllFormFields(control);
            }
        });
    };
    LoginComponent.prototype.createFormControl = function () {
        this.UserName = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required,
        ]),
            this.PassWord = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required
            ]);
    };
    LoginComponent.prototype.createForm = function () {
        this.myform = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormGroup */]({
            UserName: this.UserName,
            PassWord: this.PassWord,
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], LoginComponent.prototype, "ThongTinUser", void 0);
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/user/layout/header/login/login.component.html"),
            styles: [__webpack_require__("./src/app/user/layout/header/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__Services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_4__Services_thong_bao_service__["a" /* ThongBaoService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/user/layout/header/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"Register\">\n\n        <form [formGroup]=\"myformRes\" #RegisterForm=\"ngForm\" (ngSubmit)=\"Register(RegisterForm.value,DateOfBirth.value)\">\n            \n                <div class=\"row\">\n                    <div class=\"col-6\">\n                            <div class=\"group\">\n                                    <input type=\"text\"\n                                           formControlName=\"FirstName\" \n                                           name=\"FirstName\"\n                                           ngModel\n                                           required\n                                           [ngClass]=\"{'thatbai': FirstName.invalid && (FirstName.dirty || FirstName.touched)}\">\n                                    <label class=\"label\">Họ</label>\n                                    <div class=\"bar\" [ngClass]=\"{'thatbai': FirstName.invalid && (FirstName.dirty || FirstName.touched)}\"></div>\n                                    <div class=\"loi mt-1\" *ngIf=\"FirstName.errors && (FirstName.dirty || FirstName.touched)\">\n                                        <p *ngIf=\"FirstName.errors.required\" class=\"m-0\">Không được để trống!</p>\n                                        <p *ngIf=\"FirstName.errors.minlength || FirstName.errors.maxlength\" class=\"m-0\">Tối đa 4 - 8 kí tự</p>\n                                        <p *ngIf=\"FirstName.errors.pattern\">Không đúng định dạng</p>\n                                    </div>\n                                </div>\n                    </div>\n                    <div class=\"col-6\">\n                            <div class=\"group\">\n                                    <input type=\"text\"\n                                           formControlName=\"LastName\" \n                                           name=\"LastName\"\n                                           ngModel\n                                           required\n                                           [ngClass]=\"{'thatbai': LastName.invalid && (LastName.dirty || LastName.touched)}\">\n                                    <label class=\"label\">Tên</label>\n                                    <div class=\"bar\" [ngClass]=\"{'thatbai': LastName.invalid && (LastName.dirty || LastName.touched)}\"></div>\n                                    <div class=\"loi mt-1\" *ngIf=\"LastName.errors && (LastName.dirty || LastName.touched)\">\n                                        <p *ngIf=\"LastName.errors.required\" class=\"m-0\">Không được để trống!</p>\n                                        <p *ngIf=\"LastName.errors.minlength || LastName.errors.maxlength\" class=\"m-0\">Tối đa 4 - 8 kí tự</p>\n                                        <p *ngIf=\"LastName.errors.pattern\">Không đúng định dạng</p>\n                                    </div>\n                                </div>\n                    </div>\n                </div>\n       \n                <div class=\"group\">\n                    <input type=\"text\"\n                           formControlName=\"UserName\" \n                           name=\"UserName\"\n                           ngModel\n                           required\n                           [ngClass]=\"{'thatbai': UserName.invalid && (UserName.dirty || UserName.touched)}\">\n                    <label class=\"label\">Tài Khoản</label>\n                    <div class=\"bar\" [ngClass]=\"{'thatbai': UserName.invalid && (UserName.dirty || UserName.touched)}\"></div>\n                    <div class=\"loi mt-1\" *ngIf=\"UserName.errors && (UserName.dirty || UserName.touched)\">\n                        <p *ngIf=\"UserName.errors.required\" class=\"m-0\">Không được để trống!</p>\n                        <p *ngIf=\"UserName.errors.minlength || UserName.errors.maxlength\" class=\"m-0\">Tối đa 8 - 15 kí tự</p>\n                        <p *ngIf=\"UserName.errors.pattern\">Không chứa kí tự đặc biệt</p>\n                    </div>\n                </div>\n\n                <div class=\"row\">\n                    <div class=\"col-6\">\n                            <div class=\"group\">\n                                    <input type=\"password\"\n                                           formControlName=\"PassWord\" \n                                           name=\"PassWord\"\n                                           ngModel\n                                           required \n                                           [ngClass]=\"{'thatbai': PassWord.errors && (PassWord.dirty || PassWord.touched)}\">                \n                                    <label class=\"label\">Mật Khẩu</label>\n                                    <div class=\"bar\" [ngClass]=\"{'thatbai': PassWord.invalid && (PassWord.dirty || PassWord.touched)}\"></div>\n                                    <div class=\"loi mt-1\" *ngIf=\"PassWord.errors && (PassWord.dirty || PassWord.touched)\">\n                                        <p *ngIf=\"PassWord.errors.required\" class=\"m-0\">Không được để trống!</p>\n                                        <p *ngIf=\"PassWord.errors.minlength || PassWord.errors.maxlength\">Tối đa 4 - 8 kí tự</p>\n                                    </div>\n                                </div>\n                    </div>\n                    <div class=\"col-6\">\n                            <div class=\"group\">\n                                    <input type=\"password\"\n                                           formControlName=\"RePass\" \n                                           name=\"RePass\"\n                                           ngModel\n                                           required \n                                           [ngClass]=\"{\n                                               'thatbai': RePass.errors && (RePass.dirty || RePass.touched),\n                                               'thatbai2': RePass.value != PassWord.value && (RePass.dirty)\n                                            }\">\n                                    <label class=\"label\">Nhập lại Mật Khẩu</label>\n                                    <div class=\"bar\" [ngClass]=\"{'thatbai': RePass.invalid && (RePass.dirty || RePass.touched),'thatbai3': RePass.value != PassWord.value && (RePass.dirty)}\"></div>\n                                    <div class=\"loi mt-1\" *ngIf=\"RePass.errors && (RePass.dirty || RePass.touched)\">\n                                        <p class=\"m-0\" *ngIf=\"RePass.errors.required\">Không được để trống!</p>\n                                    </div>\n                                    <div class=\"loi mt-1\" *ngIf=\"RePass.value != PassWord.value && (RePass.dirty)\">\n                                        <p class=\"repass m-0\" *ngIf=\"RePass.value != PassWord.value\">Mật khẩu nhập lại không chính xác!</p>\n                                    </div>\n                                </div>\n                    </div>\n\n                </div>\n\n                <div class=\"group\">\n                        <input type=\"text\"\n                               formControlName=\"Email\" \n                               name=\"Email\"\n                               ngModel\n                               required\n                               [ngClass]=\"{'thatbai': Email.invalid && (Email.dirty || Email.touched)}\">\n                        <label class=\"label\">Email</label>\n                        <div class=\"bar\" [ngClass]=\"{'thatbai': Email.invalid && (Email.dirty || Email.touched)}\"></div>\n                        <div class=\"loi mt-1\" *ngIf=\"Email.errors && (Email.dirty || Email.touched)\">\n                            <p *ngIf=\"Email.errors.required\">Không được để trống!</p>\n                            <p *ngIf=\"Email.errors.pattern\">Không đúng định dạng!</p>\n                        </div>\n                </div>\n\n                <div class=\"group\">\n                        <input type=\"text\"\n                               #DateOfBirth\n                               id=\"DateOfBirth\"\n                               name=\"DateOfBirth\"\n                               class=\"input datepicker-here\"\n                               data-language='vn'\n                               data-multiple-dates=\"1\"\n                               data-multiple-dates-separator=\", \"\n                               data-position='bottom left'\n                               data-date-format=\"mm/dd/yyyy\"\n                               required\n                               (blur)=\"validateDate()\"\n                               >\n                        <label class=\"label label2\">Sinh Nhật</label>\n                        <div class=\"bar bar2\"></div> \n                        <p class=\"loi loi1 m-0 pt-1\">Không được để trống!</p>\n                        <p class=\"loi2\">Không đúng định dạng! (MM/DD/YYYY)</p>\n                </div>\n\n                <div class=\"group\">\n                    <input type=\"text\"\n                           formControlName=\"Phone\" \n                           name=\"Phone\"\n                           ngModel\n                           required \n                           [ngClass]=\"{'thatbai': Phone.errors && (Phone.dirty || Phone.touched)}\">\n                    <label class=\"label\">Điện Thoại</label>\n                    <div class=\"bar\" [ngClass]=\"{'thatbai': Phone.invalid && (Phone.dirty || Phone.touched)}\"></div>\n                    <div class=\"loi mt-1\" *ngIf=\"Phone.errors && (Phone.dirty || Phone.touched)\">\n                        <p>Không được để trống!</p>\n                    </div>\n                </div>\n            \n            \n                  \n                    <button class=\"btnDangky mb-4 d-flex\">\n                            <div class=\"spinner\">\n                                    <div class=\"cube1\"></div>\n                                    <div class=\"cube2\"></div>\n                                  </div>\n                            Đăng Ký\n                    </button>\n            \n            </form>\n\n  <!-- <form role=\"form\" #registerForm=\"ngForm\" (ngSubmit)=\"RegisterUser(registerForm.value,thamso.value)\">\n      <div class=\"row\">\n          <div class=\"col-6\">\n              <div class=\"group\">      \n                  <input type=\"text\" name=\"FirstName\" id=\"FirstName\" #FirstName=\"ngModel\" ngModel required>\n                  <span class=\"highlight\"></span>\n                  <span class=\"bar\"></span>\n                  <label class=\"label\">Họ</label>\n              </div>\n          </div>\n          <div class=\"col-6\">\n              <div class=\"group\">      \n                  <input type=\"text\" name=\"LastName\" id=\"LastName\" #LastName=\"ngModel\" ngModel required>\n                  <span class=\"highlight\"></span>\n                  <span class=\"bar\"></span>\n                  <label class=\"label\">Tên</label>\n              </div>\n          </div>\n      </div>\n    \n      <div class=\"group\">      \n          <input type=\"text\" name=\"UserName\" id=\"UserName\" #UserName=\"ngModel\" ngModel required>\n          <span class=\"highlight\"></span>\n          <span class=\"bar\"></span>\n          <label class=\"label\">Tài khoản</label>\n      </div>\n  \n      <div class=\"row\">\n        <div class=\"col-6\">\n            <div class=\"group\">      \n                <input type=\"text\" name=\"Password\" id=\"Password\" #Password=\"ngModel\" ngModel required>\n                <span class=\"highlight\"></span>\n                <span class=\"bar\"></span>\n                <label class=\"label\">Mật khẩu</label>\n            </div>\n        </div>\n        <div class=\"col-6\">\n            <div class=\"group\">      \n                <input type=\"text\" required>\n                <span class=\"highlight\"></span>\n                <span class=\"bar\"></span>\n                <label class=\"label\">Nhập lại mật khẩu</label>\n            </div>\n        </div>\n      </div>\n  \n      <div class=\"group\">      \n          <input type=\"text\" name=\"Email\" id=\"Email\" #Email=\"ngModel\" ngModel required>\n          <span class=\"highlight\"></span>\n          <span class=\"bar\"></span>\n          <label class=\"label\">Email</label>\n      </div>\n\n      <div class=\"group\">      \n          <input type=\"text\" #thamso name=\"DateOfBirth\" #DateOfBirth=\"ngModel\" id=\"DateOfBirth\"\n          class=\"input datepicker-here\"\n          data-language='vn'\n          data-multiple-dates=\"1\"\n          data-multiple-dates-separator=\", \"\n          data-position='bottom left'\n          data-date-format=\"mm/dd/yyyy\"\n          ngModel required>\n          <span class=\"highlight\"></span>\n          <span class=\"bar\"></span>\n          <label class=\"label\">Ngày sinh</label>\n      </div>\n  \n      <div class=\"group\">      \n          <input type=\"number\" name=\"Phone\" id=\"Phone\" #Phone=\"ngModel\" ngModel required>\n          <span class=\"highlight\"></span>\n          <span class=\"bar\"></span>\n          <label class=\"label\">Số điện thoại</label>\n      </div>\n\n      <div class=\"group\">\n            <select #GroupID=\"ngModel\" name=\"GroupID\" required ngModel>\n                <option >Chọn nhóm</option>\n                <option *ngFor=\"let group of Groups\" [value]=\"group.Id\">{{group.Name}}</option>\n            </select>\n            <span class=\"bar\"></span>\n            <label class=\"label\">Nhóm</label>\n      </div>  \n  \n      <button class=\"btnDangky mt-4 mb-5\">Đăng ký</button>\n  </form> -->\n\n    \n\n</div>"

/***/ }),

/***/ "./src/app/user/layout/header/register/register.component.scss":
/***/ (function(module, exports) {

module.exports = ".bodycontent {\n  background-attachment: scroll !important; }\n\n@-webkit-keyframes sk-cubemove {\n  25% {\n    -webkit-transform: translateX(12px) rotate(-90deg) scale(0.5); }\n  50% {\n    -webkit-transform: translateX(12px) translateY(12px) rotate(-180deg); }\n  75% {\n    -webkit-transform: translateX(0px) translateY(12px) rotate(-270deg) scale(0.5); }\n  100% {\n    -webkit-transform: rotate(-360deg); } }\n\n@keyframes sk-cubemove {\n  25% {\n    transform: translateX(12px) rotate(-90deg) scale(0.5);\n    -webkit-transform: translateX(12px) rotate(-90deg) scale(0.5); }\n  50% {\n    transform: translateX(12px) translateY(12px) rotate(-179deg);\n    -webkit-transform: translateX(12px) translateY(12px) rotate(-179deg); }\n  50.1% {\n    transform: translateX(12px) translateY(12px) rotate(-180deg);\n    -webkit-transform: translateX(12px) translateY(12px) rotate(-180deg); }\n  75% {\n    transform: translateX(0px) translateY(12px) rotate(-270deg) scale(0.5);\n    -webkit-transform: translateX(0px) translateY(12px) rotate(-270deg) scale(0.5); }\n  100% {\n    transform: rotate(-360deg);\n    -webkit-transform: rotate(-360deg); } }\n\ntextarea:focus,\ninput[type=\"text\"]:focus,\ninput[type=\"password\"]:focus,\ninput[type=\"datetime\"]:focus,\ninput[type=\"datetime-local\"]:focus,\ninput[type=\"date\"]:focus,\ninput[type=\"month\"]:focus,\ninput[type=\"time\"]:focus,\ninput[type=\"week\"]:focus,\ninput[type=\"number\"]:focus,\ninput[type=\"email\"]:focus,\ninput[type=\"url\"]:focus,\ninput[type=\"search\"]:focus,\ninput[type=\"tel\"]:focus,\ninput[type=\"color\"]:focus,\n.uneditable-input:focus {\n  border-color: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  outline: 0 none; }\n\na {\n  color: white; }\n\na:hover {\n  color: #81d8d0; }\n\n#Register {\n  padding-bottom: 10px;\n  position: relative;\n  z-index: 1200; }\n\n.btnDangky {\n  background: transparent;\n  padding: 10px 30px;\n  border: 3px solid #81d8d0;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  color: white;\n  padding: 10px 45px; }\n\ninput, select, textarea {\n  border-radius: 0;\n  -webkit-appearance: none; }\n\n.spinner {\n  display: none;\n  width: 35px;\n  position: relative; }\n\n.cube1, .cube2 {\n  background-color: #81d8d0;\n  width: 8px;\n  height: 8px;\n  position: absolute;\n  top: 0px;\n  left: -15px;\n  -webkit-animation: sk-cubemove 1.4s infinite ease-in-out;\n  animation: sk-cubemove 1.4s infinite ease-in-out; }\n\n.cube2 {\n  -webkit-animation-delay: -0.7s;\n  animation-delay: -0.7s; }\n\n.group {\n  position: relative;\n  margin-bottom: 45px; }\n\ninput[type=\"text\"], input[type=\"password\"], input[type=\"number\"], input[type=\"email\"], select {\n  color: white;\n  width: 100%;\n  background: none;\n  font-size: 16px;\n  padding: 5px 10px 5px 0px;\n  display: block;\n  border: none;\n  border-bottom: 1px solid #8e959e; }\n\ninput:focus, select:focus {\n  outline: none; }\n\n.label {\n  color: white;\n  font-size: 15px;\n  font-weight: normal;\n  position: absolute;\n  pointer-events: none;\n  left: 0px;\n  top: 5px;\n  -webkit-transition: all 0.4s;\n  transition: all 0.4s; }\n\n.label2 {\n  color: white;\n  font-size: 15px;\n  font-weight: normal;\n  position: absolute;\n  pointer-events: none;\n  left: 0px;\n  top: 5px;\n  -webkit-transition: all 0.4s;\n  transition: all 0.4s; }\n\ninput:focus ~ .label, input:valid ~ .label, select:focus ~ .label, select:valid ~ .label {\n  top: -20px;\n  font-size: 12px;\n  color: #81d8d0;\n  -webkit-transition: all 0.4s;\n  transition: all 0.4s; }\n\n.uptop {\n  top: -20px;\n  font-size: 12px;\n  color: #81d8d0;\n  -webkit-transition: all 0.4s;\n  transition: all 0.4s; }\n\n.bar {\n  position: relative;\n  display: block;\n  width: 100%; }\n\n.bar:before, .bar:after {\n  content: '';\n  height: 2px;\n  width: 0;\n  bottom: -1px;\n  position: absolute;\n  background: #81d8d0;\n  -webkit-transition: all 0.4s;\n  transition: all 0.4s; }\n\ninput:focus ~ .bar:before, input:focus ~ .bar:after, select:focus ~ .bar:before, select:focus ~ .bar:after {\n  width: 100%; }\n\n.thatbai {\n  border-bottom: 1px solid #ea1c47 !important; }\n\n.thatbai::after, .thatbai::before {\n  background: #ea1c47 !important; }\n\n.thatbai:focus ~ .label, .thatbai:valid ~ .label {\n  color: #ea1c47 !important; }\n\n.thatbai2 {\n  border-bottom: 1px solid #ea1c47 !important;\n  border-bottom: 0 !important; }\n\n.thatbai2::after, .thatbai2::before {\n  background: #ea1c47 !important; }\n\n.thatbai2:focus ~ .label, .thatbai2:valid ~ .label {\n  color: #ea1c47 !important; }\n\n.thatbai3 {\n  border-bottom: 1px solid #ea1c47 !important;\n  border-bottom: 1px solid #ea1c47; }\n\n.thatbai3::after, .thatbai2::before {\n  background: #ea1c47 !important; }\n\n.thatbai3:focus ~ .label, .thatbai2:valid ~ .label {\n  color: #ea1c47 !important; }\n\n.loi {\n  color: #ea1c47 !important; }\n\n.disablebtn {\n  cursor: no-drop !important; }\n\n.repass {\n  color: #ea1c47; }\n\n.colorLoi {\n  color: #ea1c47; }\n\n.colorOk {\n  color: #81d8d0; }\n\n.loi2 {\n  color: #ea1c47; }\n"

/***/ }),

/***/ "./src/app/user/layout/header/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_user_service__ = __webpack_require__("./src/app/Services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Services_thong_bao_service__ = __webpack_require__("./src/app/Services/thong-bao.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(userService, thongbao) {
        this.userService = userService;
        this.thongbao = thongbao;
        this.Group = "GP07";
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.createFormControl();
        this.createForm();
        $(".loi2").hide();
        $(".loi1").hide();
    };
    RegisterComponent.prototype.validateDate = function () {
        var regex = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
        var date = $("#DateOfBirth");
        date.on("blur", function () {
            if (date.val() != "") {
                $(".loi1").hide();
            }
            if (regex.test(date.val()) == false) {
                $(".loi2").show();
                date.addClass("thatbai");
                $(".bar2").addClass("thatbai");
                $(".label2").addClass("thatbai2");
                $(".loi2").show();
            }
            else {
                $(".loi2").hide();
                date.removeClass("thatbai");
                $(".bar2").removeClass("thatbai");
                $(".label2").removeClass("thatbai2");
                $(".loi2").hide();
            }
        });
    };
    RegisterComponent.prototype.getToday = function () {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        today = mm + '/' + dd + '/' + yyyy;
        return today;
    };
    //Form register value
    RegisterComponent.prototype.Register = function (user, sinhnhat) {
        var _this = this;
        if (this.myformRes.valid) {
            user.DateRegister = this.getToday();
            user.DateOfBirth = sinhnhat;
            user.GroupID = this.Group;
            $(".spinner").show();
            setTimeout(function () {
                _this.userService.TaoTaiKhoan(user).subscribe(function (result) {
                    _this.userRegister = result;
                    $(".spinner").hide();
                    if (result == "Username already exists") {
                        _this.thongbao.Error("Tài khoản đã tồn tại!");
                    }
                    else {
                        _this.thongbao.Success("Đăng Ký thành công!");
                        setTimeout(function () {
                            _this.myformRes.reset();
                            $("#DateOfBirth").val("");
                            $(".lbdangnhap").trigger("click");
                        }, 1000);
                    }
                });
            }, 2000);
        }
        else {
            this.validateAllFormFields(this.myformRes);
        }
        // validate Date
        var date = $("#DateOfBirth");
        if (date.val() == "") {
            $(".loi1").show();
            date.addClass("thatbai");
            $(".bar2").addClass("thatbai");
            $(".label2").addClass("thatbai2");
        }
    };
    // validate when submit
    RegisterComponent.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]) {
                _this.validateAllFormFields(control);
            }
        });
    };
    RegisterComponent.prototype.createFormControl = function () {
        this.FirstName = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(4),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(8),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$")
        ]),
            this.LastName = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(4),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(8),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$")
            ]),
            this.UserName = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern("^[a-zA-Z0-9]+$"),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(8),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(15),
            ]),
            this.PassWord = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(4),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(8),
            ]),
            this.RePass = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,
            ]);
        this.Email = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
        ]),
            // this.DateOfBirth = new FormControl();
            // this.DateOfBirth =  new FormControl('',[
            // Validators.required,
            // Validators.pattern("^(?:(?:10|12|0?[13578])/(?:3[01]|[12][0-9]|0?[1-9])/(?:1[8-9]\\d{2}|[2-9]\\d{3})|(?:11|0?[469])/(?:30|[12][0-9]|0?[1-9])/(?:1[8-9]\\d{2}|[2-9]\\d{3})|0?2/(?:2[0-8]|1[0-9]|0?[1-9])/(?:1[8-9]\\d{2}|[2-9]\\d{3})|0?2/29/[2468][048]00|0?2/29/[3579][26]00|0?2/29/[1][89][0][48]|0?2/29/[2-9][0-9][0][48]|0?2/29/1[89][2468][048]|0?2/29/[2-9][0-9][2468][048]|0?2/29/1[89][13579][26]|0?2/29/[2-9][0-9][13579][26])$"),
            // ]),
            this.Phone = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
            ]);
    };
    RegisterComponent.prototype.createForm = function () {
        this.myformRes = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            FirstName: this.FirstName,
            LastName: this.LastName,
            UserName: this.UserName,
            PassWord: this.PassWord,
            RePass: this.RePass,
            Email: this.Email,
            // DateOfBirth: this.DateOfBirth,
            Phone: this.Phone,
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/user/layout/header/register/register.component.html"),
            styles: [__webpack_require__("./src/app/user/layout/header/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__Services_thong_bao_service__["a" /* ThongBaoService */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/user/layout/header/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"SearchPhim\">\n\n\n  <!-- Button to Open the Modal -->\n  <a class=\"icon\" data-toggle=\"modal\" data-target=\"#searchModal\">\n    <i class=\"fas fa-search\"></i>\n  </a>\n\n  <!-- The Modal -->\n\n  <div class=\"modal left fade\" id=\"searchModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-body bodycontent\">\n            <button type=\"button\" class=\"close dong\" data-dismiss=\"modal\">&times;</button>\n            <div class=\"background\">\n              </div>\n\n              <div id=\"SearchPhim\">\n                  <h4 class=\"mb-5\">Tìm kiếm</h4>\n                  <div class=\"group\">\n                      <i class=\"fa fa-search iconSearchnha\" aria-hidden=\"true\"></i>\n                      <input class=\"inputSearch\" (keyup)=\"SearchPhim()\" type=\"text\"\n                             required placeholder=\"Bạn muốn xem phim gì hôm nay?\">\n                      <div class=\"bar\"></div>\n                  </div>\n\n                  <div class=\"kqSearch\" *ngIf=\"dschon != []\">\n                    <div *ngIf=\"trangthai==false; else nguoclai\">\n                    </div>\n                    <ng-template #nguoclai>\n                      <p class=\"kqsoluong mb-3\">Tìm thấy {{dschon.length}} kết quả!</p> \n                    </ng-template>\n                    <ng-container *ngFor=\"let kq of dschon\">\n                        <div class=\"thongtinPhim\" (click)=\"XemChiTiet(kq.ID,$event)\">\n                            <span class=\"title\">{{kq.Title}}</span>\n                        </div>\n                    </ng-container>\n                  </div>\n              </div>\n             \n          \n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/user/layout/header/search/search.component.scss":
/***/ (function(module, exports) {

module.exports = ".bodycontent {\n  background-attachment: scroll !important; }\n\n@-webkit-keyframes sk-cubemove {\n  25% {\n    -webkit-transform: translateX(12px) rotate(-90deg) scale(0.5); }\n  50% {\n    -webkit-transform: translateX(12px) translateY(12px) rotate(-180deg); }\n  75% {\n    -webkit-transform: translateX(0px) translateY(12px) rotate(-270deg) scale(0.5); }\n  100% {\n    -webkit-transform: rotate(-360deg); } }\n\n@keyframes sk-cubemove {\n  25% {\n    transform: translateX(12px) rotate(-90deg) scale(0.5);\n    -webkit-transform: translateX(12px) rotate(-90deg) scale(0.5); }\n  50% {\n    transform: translateX(12px) translateY(12px) rotate(-179deg);\n    -webkit-transform: translateX(12px) translateY(12px) rotate(-179deg); }\n  50.1% {\n    transform: translateX(12px) translateY(12px) rotate(-180deg);\n    -webkit-transform: translateX(12px) translateY(12px) rotate(-180deg); }\n  75% {\n    transform: translateX(0px) translateY(12px) rotate(-270deg) scale(0.5);\n    -webkit-transform: translateX(0px) translateY(12px) rotate(-270deg) scale(0.5); }\n  100% {\n    transform: rotate(-360deg);\n    -webkit-transform: rotate(-360deg); } }\n\ntextarea:focus,\ninput[type=\"text\"]:focus,\ninput[type=\"password\"]:focus,\ninput[type=\"datetime\"]:focus,\ninput[type=\"datetime-local\"]:focus,\ninput[type=\"date\"]:focus,\ninput[type=\"month\"]:focus,\ninput[type=\"time\"]:focus,\ninput[type=\"week\"]:focus,\ninput[type=\"number\"]:focus,\ninput[type=\"email\"]:focus,\ninput[type=\"url\"]:focus,\ninput[type=\"search\"]:focus,\ninput[type=\"tel\"]:focus,\ninput[type=\"color\"]:focus,\n.uneditable-input:focus {\n  border-color: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  outline: 0 none; }\n\na {\n  color: white; }\n\na:hover {\n  color: #81d8d0; }\n\ni {\n  color: white; }\n\nh4 {\n  position: relative;\n  color: white; }\n\n.icon {\n  position: relative;\n  margin-left: 30px;\n  cursor: pointer; }\n\n.icon::before {\n  position: absolute;\n  content: '';\n  width: 1px;\n  background: #5a5353;\n  height: 20px;\n  left: -15px;\n  top: -1px; }\n\n.modal.left .modal-dialog {\n  position: fixed;\n  margin: auto;\n  width: 550px;\n  height: 100%;\n  -webkit-transform: translate3d(0%, 0, 0);\n  transform: translate3d(0%, 0, 0); }\n\n.modal.left .modal-content {\n  height: 100%;\n  border-radius: 0;\n  overflow-y: auto; }\n\n.modal.left.fade .modal-dialog {\n  right: -550px;\n  -webkit-transition: opacity 0.3s linear, right 0.3s ease-out;\n  transition: opacity 0.3s linear, right 0.3s ease-out; }\n\n.modal.left.fade.show .modal-dialog {\n  right: -1px; }\n\n.bodycontent {\n  padding: 0;\n  background: url('cool-twitter-backgrounds.aacc58f1db23f81d5bc6.jpg');\n  /* Create the parallax scrolling effect */\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 100%;\n  height: 100%;\n  -webkit-box-shadow: -1px 2px 23px 7px rgba(0, 0, 0, 0.4);\n          box-shadow: -1px 2px 23px 7px rgba(0, 0, 0, 0.4);\n  z-index: 1; }\n\n.background {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background: #000000a1;\n  padding: 45px 55px;\n  padding-bottom: 10px; }\n\n.dong {\n  font-size: 1.9rem;\n  font-weight: 700;\n  line-height: 1;\n  color: white;\n  opacity: .5;\n  position: absolute;\n  right: 1000;\n  right: 5px;\n  z-index: 2; }\n\n#SearchPhim {\n  padding: 45px 55px; }\n\n.iconSearchnha {\n  position: absolute;\n  right: 0;\n  top: 8px;\n  color: #8e959e; }\n\n.kqSearch {\n  position: relative;\n  z-index: 2000;\n  width: 100%; }\n\n.thongtinPhim {\n  color: white;\n  padding-bottom: 15px;\n  margin-top: 15px;\n  border-bottom: 1px solid rgba(73, 79, 86, 0.97);\n  cursor: pointer; }\n\n.title:hover {\n  color: #81d8d0; }\n\n.kqsoluong {\n  color: #6f6f6f; }\n\n.group {\n  position: relative;\n  margin-bottom: 15px; }\n\ninput[type=\"text\"], input[type=\"password\"], input[type=\"number\"], input[type=\"email\"], input[type=\"phone\"], select {\n  color: white;\n  width: 100%;\n  background: none;\n  font-size: 16px;\n  padding: 5px 10px 5px 0px;\n  display: block;\n  border: none;\n  border-bottom: 1px solid #8e959e; }\n\ninput:focus, select:focus {\n  outline: none; }\n\n.label {\n  color: white;\n  font-size: 15px;\n  font-weight: normal;\n  position: absolute;\n  pointer-events: none;\n  left: 0px;\n  top: 5px;\n  -webkit-transition: all 0.4s;\n  transition: all 0.4s; }\n\ninput:focus ~ .label, input:valid ~ .label, select:focus ~ .label, select:valid ~ .label {\n  top: -20px;\n  font-size: 12px;\n  color: #81d8d0;\n  -webkit-transition: all 0.4s;\n  transition: all 0.4s; }\n\n.bar {\n  position: relative;\n  display: block;\n  width: 100%; }\n\n.bar:before, .bar:after {\n  content: '';\n  height: 2px;\n  width: 0;\n  bottom: -1px;\n  position: absolute;\n  background: #81d8d0;\n  -webkit-transition: all 0.4s;\n  transition: all 0.4s; }\n\ninput:focus ~ .bar:before, input:focus ~ .bar:after, select:focus ~ .bar:before, select:focus ~ .bar:after {\n  width: 100%; }\n\n@media (max-width: 414px) {\n  .modal-dialog {\n    width: 100% !important; }\n  #SearchPhim {\n    padding: 35px 35px; } }\n"

/***/ }),

/***/ "./src/app/user/layout/header/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_movie_service__ = __webpack_require__("./src/app/Services/movie.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchComponent = /** @class */ (function () {
    function SearchComponent(servicePhim, router) {
        this.servicePhim = servicePhim;
        this.router = router;
        this.dsPhim = [];
        this.urlHost = 'http://sv.myclass.vn/Images/Movies/';
        this.MaNhom = 'GP07';
        this.dschon = [];
        this.trangthai = false;
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.GetLocalPhim();
        function search() {
            alert("a");
        }
    };
    SearchComponent.prototype.SearchPhim = function () {
        var kq = $(".inputSearch").val();
        var kqsearch = this.servicePhim.SearchPhim(this.dsPhim, kq);
        this.dschon = kqsearch;
        if (kqsearch == []) {
            this.trangthai = false;
        }
        else {
            this.trangthai = true;
        }
    };
    SearchComponent.prototype.XemChiTiet = function (phimID, event) {
        $(".modal").trigger("click");
        this.router.navigate(['Home/ChiTietPhim'], {
            queryParams: {
                id: phimID,
                groupid: this.MaNhom
            }
        });
        // location.reload();
        event.preventDefault();
    };
    SearchComponent.prototype.GetLocalPhim = function () {
        var StoPhim = localStorage.getItem("DanhSachPhim");
        this.dsPhim = JSON.parse(StoPhim);
        $(".bodycontent").niceScroll({
            cursorcolor: 'silver',
            cursorwidth: 4,
            cursorborder: 'none'
        });
    };
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-search',
            template: __webpack_require__("./src/app/user/layout/header/search/search.component.html"),
            styles: [__webpack_require__("./src/app/user/layout/header/search/search.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Services_movie_service__["a" /* MovieService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/user/layout/layout.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mydatepicker__ = __webpack_require__("./node_modules/mydatepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_owl_carousel__ = __webpack_require__("./node_modules/ngx-owl-carousel/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_owl_carousel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ngx_owl_carousel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__header_header_component__ = __webpack_require__("./src/app/user/layout/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__footer_footer_component__ = __webpack_require__("./src/app/user/layout/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__trang_chu_trang_chu_component__ = __webpack_require__("./src/app/user/layout/trang-chu/trang-chu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__trang_chu_slide_banner_slide_banner_component__ = __webpack_require__("./src/app/user/layout/trang-chu/slide-banner/slide-banner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__trang_chu_slide_list_movie_slide_list_movie_component__ = __webpack_require__("./src/app/user/layout/trang-chu/slide-list-movie/slide-list-movie.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__trang_chu_group_cinema_group_cinema_component__ = __webpack_require__("./src/app/user/layout/trang-chu/group-cinema/group-cinema.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__trang_chi_tiet_trang_chi_tiet_component__ = __webpack_require__("./src/app/user/layout/trang-chi-tiet/trang-chi-tiet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__HoverButton_ani_hover_directive__ = __webpack_require__("./src/app/user/layout/HoverButton/ani-hover.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__trang_chi_tiet_lich_chieu_lich_chieu_component__ = __webpack_require__("./src/app/user/layout/trang-chi-tiet/lich-chieu/lich-chieu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__trang_chi_tiet_chi_tiet_phim_chi_tiet_phim_component__ = __webpack_require__("./src/app/user/layout/trang-chi-tiet/chi-tiet-phim/chi-tiet-phim.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__trang_dat_ve_trang_dat_ve_component__ = __webpack_require__("./src/app/user/layout/trang-dat-ve/trang-dat-ve.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__trang_dat_ve_tong_tien_tong_tien_component__ = __webpack_require__("./src/app/user/layout/trang-dat-ve/tong-tien/tong-tien.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__trang_dat_ve_chon_so_luong_ve_chon_so_luong_ve_component__ = __webpack_require__("./src/app/user/layout/trang-dat-ve/chon-so-luong-ve/chon-so-luong-ve.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__trang_dat_ve_detail_showtime_detail_showtime_component__ = __webpack_require__("./src/app/user/layout/trang-dat-ve/detail-showtime/detail-showtime.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__trang_dat_ve_danh_sach_ghe_danh_sach_ghe_component__ = __webpack_require__("./src/app/user/layout/trang-dat-ve/danh-sach-ghe/danh-sach-ghe.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__trang_dat_ve_danh_sach_ghe_ghe_ghe_component__ = __webpack_require__("./src/app/user/layout/trang-dat-ve/danh-sach-ghe/ghe/ghe.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__trang_dat_ve_thanh_toan_thanh_toan_component__ = __webpack_require__("./src/app/user/layout/trang-dat-ve/thanh-toan/thanh-toan.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__header_login_login_component__ = __webpack_require__("./src/app/user/layout/header/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__header_register_register_component__ = __webpack_require__("./src/app/user/layout/header/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__header_login_register_login_register_component__ = __webpack_require__("./src/app/user/layout/header/login-register/login-register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__trang_checkout_trang_checkout_component__ = __webpack_require__("./src/app/user/layout/trang-checkout/trang-checkout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__header_new_header_new_component__ = __webpack_require__("./src/app/user/layout/header-new/header-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__header_search_search_component__ = __webpack_require__("./src/app/user/layout/header/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__trang_chu_news_news_component__ = __webpack_require__("./src/app/user/layout/trang-chu/news/news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__trang_chu_events_events_component__ = __webpack_require__("./src/app/user/layout/trang-chu/events/events.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__quick_book_quick_book_component__ = __webpack_require__("./src/app/user/layout/quick-book/quick-book.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__header_new_login_register2_login_register2_component__ = __webpack_require__("./src/app/user/layout/header-new/login-register2/login-register2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__header_new_login2_login2_component__ = __webpack_require__("./src/app/user/layout/header-new/login2/login2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__header_new_register2_register2_component__ = __webpack_require__("./src/app/user/layout/header-new/register2/register2.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


































var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2_mydatepicker__["MyDatePickerModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4_ngx_owl_carousel__["OwlModule"]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_6__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_7__trang_chu_trang_chu_component__["a" /* TrangChuComponent */],
                __WEBPACK_IMPORTED_MODULE_8__trang_chu_slide_banner_slide_banner_component__["a" /* SlideBannerComponent */],
                __WEBPACK_IMPORTED_MODULE_9__trang_chu_slide_list_movie_slide_list_movie_component__["a" /* SlideListMovieComponent */],
                __WEBPACK_IMPORTED_MODULE_10__trang_chu_group_cinema_group_cinema_component__["a" /* GroupCinemaComponent */],
                __WEBPACK_IMPORTED_MODULE_11__trang_chi_tiet_trang_chi_tiet_component__["a" /* TrangChiTietComponent */],
                __WEBPACK_IMPORTED_MODULE_13__trang_chi_tiet_lich_chieu_lich_chieu_component__["a" /* LichChieuComponent */],
                __WEBPACK_IMPORTED_MODULE_14__trang_chi_tiet_chi_tiet_phim_chi_tiet_phim_component__["a" /* ChiTietPhimComponent */],
                __WEBPACK_IMPORTED_MODULE_15__trang_dat_ve_trang_dat_ve_component__["a" /* TrangDatVeComponent */],
                __WEBPACK_IMPORTED_MODULE_16__trang_dat_ve_tong_tien_tong_tien_component__["a" /* TongTienComponent */],
                __WEBPACK_IMPORTED_MODULE_17__trang_dat_ve_chon_so_luong_ve_chon_so_luong_ve_component__["a" /* ChonSoLuongVeComponent */],
                __WEBPACK_IMPORTED_MODULE_18__trang_dat_ve_detail_showtime_detail_showtime_component__["a" /* DetailShowtimeComponent */],
                __WEBPACK_IMPORTED_MODULE_19__trang_dat_ve_danh_sach_ghe_danh_sach_ghe_component__["a" /* DanhSachGheComponent */],
                __WEBPACK_IMPORTED_MODULE_20__trang_dat_ve_danh_sach_ghe_ghe_ghe_component__["a" /* GheComponent */],
                __WEBPACK_IMPORTED_MODULE_21__trang_dat_ve_thanh_toan_thanh_toan_component__["a" /* ThanhToanComponent */],
                __WEBPACK_IMPORTED_MODULE_22__header_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_23__header_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_24__header_login_register_login_register_component__["a" /* LoginRegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_25__trang_checkout_trang_checkout_component__["a" /* TrangCheckoutComponent */],
                __WEBPACK_IMPORTED_MODULE_26__header_new_header_new_component__["a" /* HeaderNewComponent */],
                __WEBPACK_IMPORTED_MODULE_27__header_search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_28__trang_chu_news_news_component__["a" /* NewsComponent */],
                __WEBPACK_IMPORTED_MODULE_29__trang_chu_events_events_component__["a" /* EventsComponent */],
                __WEBPACK_IMPORTED_MODULE_30__quick_book_quick_book_component__["a" /* QuickBookComponent */],
                __WEBPACK_IMPORTED_MODULE_31__header_new_login_register2_login_register2_component__["a" /* LoginRegister2Component */],
                __WEBPACK_IMPORTED_MODULE_32__header_new_login2_login2_component__["a" /* Login2Component */],
                __WEBPACK_IMPORTED_MODULE_33__header_new_register2_register2_component__["a" /* Register2Component */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_6__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_7__trang_chu_trang_chu_component__["a" /* TrangChuComponent */],
                __WEBPACK_IMPORTED_MODULE_8__trang_chu_slide_banner_slide_banner_component__["a" /* SlideBannerComponent */],
                __WEBPACK_IMPORTED_MODULE_9__trang_chu_slide_list_movie_slide_list_movie_component__["a" /* SlideListMovieComponent */],
                __WEBPACK_IMPORTED_MODULE_10__trang_chu_group_cinema_group_cinema_component__["a" /* GroupCinemaComponent */],
                __WEBPACK_IMPORTED_MODULE_11__trang_chi_tiet_trang_chi_tiet_component__["a" /* TrangChiTietComponent */],
                __WEBPACK_IMPORTED_MODULE_12__HoverButton_ani_hover_directive__["a" /* AniHoverDirective */],
                __WEBPACK_IMPORTED_MODULE_13__trang_chi_tiet_lich_chieu_lich_chieu_component__["a" /* LichChieuComponent */],
                __WEBPACK_IMPORTED_MODULE_14__trang_chi_tiet_chi_tiet_phim_chi_tiet_phim_component__["a" /* ChiTietPhimComponent */],
                __WEBPACK_IMPORTED_MODULE_15__trang_dat_ve_trang_dat_ve_component__["a" /* TrangDatVeComponent */],
                __WEBPACK_IMPORTED_MODULE_16__trang_dat_ve_tong_tien_tong_tien_component__["a" /* TongTienComponent */],
                __WEBPACK_IMPORTED_MODULE_17__trang_dat_ve_chon_so_luong_ve_chon_so_luong_ve_component__["a" /* ChonSoLuongVeComponent */],
                __WEBPACK_IMPORTED_MODULE_18__trang_dat_ve_detail_showtime_detail_showtime_component__["a" /* DetailShowtimeComponent */],
                __WEBPACK_IMPORTED_MODULE_19__trang_dat_ve_danh_sach_ghe_danh_sach_ghe_component__["a" /* DanhSachGheComponent */],
                __WEBPACK_IMPORTED_MODULE_20__trang_dat_ve_danh_sach_ghe_ghe_ghe_component__["a" /* GheComponent */],
                __WEBPACK_IMPORTED_MODULE_21__trang_dat_ve_thanh_toan_thanh_toan_component__["a" /* ThanhToanComponent */],
                __WEBPACK_IMPORTED_MODULE_22__header_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_23__header_register_register_component__["a" /* RegisterComponent */], __WEBPACK_IMPORTED_MODULE_24__header_login_register_login_register_component__["a" /* LoginRegisterComponent */], __WEBPACK_IMPORTED_MODULE_25__trang_checkout_trang_checkout_component__["a" /* TrangCheckoutComponent */], __WEBPACK_IMPORTED_MODULE_26__header_new_header_new_component__["a" /* HeaderNewComponent */], __WEBPACK_IMPORTED_MODULE_27__header_search_search_component__["a" /* SearchComponent */], __WEBPACK_IMPORTED_MODULE_28__trang_chu_news_news_component__["a" /* NewsComponent */], __WEBPACK_IMPORTED_MODULE_29__trang_chu_events_events_component__["a" /* EventsComponent */], __WEBPACK_IMPORTED_MODULE_30__quick_book_quick_book_component__["a" /* QuickBookComponent */], __WEBPACK_IMPORTED_MODULE_31__header_new_login_register2_login_register2_component__["a" /* LoginRegister2Component */], __WEBPACK_IMPORTED_MODULE_32__header_new_login2_login2_component__["a" /* Login2Component */], __WEBPACK_IMPORTED_MODULE_33__header_new_register2_register2_component__["a" /* Register2Component */],
            ],
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "./src/app/user/layout/quick-book/quick-book.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"BookNhanh\">\n    <div class=\"color clearfix\">\n      <div class=\"float-left colorchinh\">\n        <div class=\"triangle-down\"></div>\n        <h5 class=\"labelbook text-right\">QUICK BOOKING</h5>\n      </div>\n\n      <div class=\"float-right colorphu\">\n        <div class=\"dong clearfix\">\n          <form [formGroup]=\"formBooking\" #FormBooking=\"ngForm\">\n              <div class=\"group float-left\">\n                  <select required  formControlName=\"TenRap\" name=\"TenRap\" ngModel>\n                      <option selected disabled>Chọn rạp</option>\n                        <option class=\"pt-5\" *ngFor=\"let rap of dsrap\" [value]=\"rap.ten\">{{rap.ten}}</option>\n                  </select>\n                  <label class=\"label\">Tên Rạp</label>\n                  <div class=\"bar\"></div>             \n              </div>\n              <div class=\"group float-left\">\n                  <select required formControlName=\"TenPhim\" name=\"TenPhim\" ngModel>  \n                      <option selected disabled>Chọn Phim</option> \n                      <option *ngFor=\"let phim of dsphim\" [value]=\"phim.ID\">{{phim.Title}}</option>\n                  </select>\n                  <label class=\"label\">Tên Phim</label>\n                  <div class=\"bar\"></div>             \n              </div>\n              <div class=\"group float-left\">\n                  <select required formControlName=\"NgayChieu\" name=\"NgayChieu\" ngModel> \n                      <option selected disabled>Chọn Ngày</option>  \n                      <option *ngFor=\"let ngay of arrLichChieu\" [value]=\"ngay.NgayChieu\">{{ngay.NgayChieu | date:'EEEE, MMMM d'}}</option>\n                  </select>\n                  <label class=\"label\">Ngày Chiếu</label>\n                  <div class=\"bar\"></div>             \n              </div>\n              <div class=\"group float-left\">\n                  <select required formControlName=\"SuatChieu\" name=\"SuatChieu\" ngModel>   \n                      <option selected disabled>Chọn Suất</option>\n                      <option *ngFor=\"let suat of SuatTheoNgay\" [value]=\"suat.ShowTimeID\">{{suat.GioChieu | slice:0:5}}</option>\n                  </select>\n                  <label class=\"label\">Suất Chiếu</label>\n                  <div class=\"bar\"></div>             \n              </div>\n          </form>\n      </div>\n\n\n    </div>\n</div>\n</div>\n\n<div class=\"BookResponsive\">\n    <h1 class=\"text-center\" data-toggle=\"modal\" data-target=\"#QuickBook\">Quick Booking</h1>\n</div>\n\n\n\n<div class=\"modal left fade\" id=\"QuickBook\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-body bodycontent\">\n                <button type=\"button\" class=\"close dong\" data-dismiss=\"modal\">&times;</button>\n                <div class=\"background\">\n                  </div>\n\n\n                  <form [formGroup]=\"formBooking\" #FormBooking=\"ngForm\">\n                      <div class=\"row\">\n                          <div class=\"col-12\">\n                                <div class=\"group\">\n                                        <select required  formControlName=\"TenRap\" name=\"TenRap\" ngModel>\n                                            <option selected disabled>Chọn rạp</option>\n                                              <option *ngFor=\"let rap of dsrap\" [value]=\"rap.ten\">{{rap.ten}}</option>\n                                        </select>\n                                        <label class=\"label\">Tên Rạp</label>\n                                        <div class=\"bar\"></div>             \n                                    </div>\n                          </div>\n\n                          <div class=\"col-12\">\n                                <div class=\"group\">\n                                        <select required formControlName=\"TenPhim\" name=\"TenPhim\" ngModel>  \n                                            <option selected disabled>Chọn Phim</option> \n                                            <option *ngFor=\"let phim of dsphim\" [value]=\"phim.ID\">{{phim.Title}}</option>\n                                        </select>\n                                        <label class=\"label\">Tên Phim</label>\n                                        <div class=\"bar\"></div>             \n                                    </div>\n                          </div>\n                          <div class=\"col-12\">\n                                <div class=\"group\">\n                                        <select required formControlName=\"NgayChieu\" name=\"NgayChieu\" ngModel> \n                                            <option selected disabled>Chọn Ngày</option>  \n                                            <option *ngFor=\"let ngay of arrLichChieu\" [value]=\"ngay.NgayChieu\">{{ngay.NgayChieu | date:'EEEE, MMMM d'}}</option>\n                                        </select>\n                                        <label class=\"label\">Ngày Chiếu</label>\n                                        <div class=\"bar\"></div>             \n                                    </div>\n                          </div>\n                          <div class=\"col-12\">\n                                <div class=\"group\">\n                                        <select required formControlName=\"SuatChieu\" name=\"SuatChieu\" ngModel>   \n                                            <option selected disabled>Chọn Suất</option>\n                                            <option *ngFor=\"let suat of SuatTheoNgay\" [value]=\"suat.ShowTimeID\">{{suat.GioChieu | slice:0:5}}</option>\n                                        </select>\n                                        <label class=\"label\">Suất Chiếu</label>\n                                        <div class=\"bar\"></div>             \n                                    </div>\n                          </div>\n                      </div>\n                    </form>\n            </div>\n          </div>\n        </div>\n      </div>"

/***/ }),

/***/ "./src/app/user/layout/quick-book/quick-book.component.scss":
/***/ (function(module, exports) {

module.exports = ".bodycontent {\n  background-attachment: scroll !important; }\n\n@-webkit-keyframes sk-cubemove {\n  25% {\n    -webkit-transform: translateX(12px) rotate(-90deg) scale(0.5); }\n  50% {\n    -webkit-transform: translateX(12px) translateY(12px) rotate(-180deg); }\n  75% {\n    -webkit-transform: translateX(0px) translateY(12px) rotate(-270deg) scale(0.5); }\n  100% {\n    -webkit-transform: rotate(-360deg); } }\n\n@keyframes sk-cubemove {\n  25% {\n    transform: translateX(12px) rotate(-90deg) scale(0.5);\n    -webkit-transform: translateX(12px) rotate(-90deg) scale(0.5); }\n  50% {\n    transform: translateX(12px) translateY(12px) rotate(-179deg);\n    -webkit-transform: translateX(12px) translateY(12px) rotate(-179deg); }\n  50.1% {\n    transform: translateX(12px) translateY(12px) rotate(-180deg);\n    -webkit-transform: translateX(12px) translateY(12px) rotate(-180deg); }\n  75% {\n    transform: translateX(0px) translateY(12px) rotate(-270deg) scale(0.5);\n    -webkit-transform: translateX(0px) translateY(12px) rotate(-270deg) scale(0.5); }\n  100% {\n    transform: rotate(-360deg);\n    -webkit-transform: rotate(-360deg); } }\n\ntextarea:focus,\ninput[type=\"text\"]:focus,\ninput[type=\"password\"]:focus,\ninput[type=\"datetime\"]:focus,\ninput[type=\"datetime-local\"]:focus,\ninput[type=\"date\"]:focus,\ninput[type=\"month\"]:focus,\ninput[type=\"time\"]:focus,\ninput[type=\"week\"]:focus,\ninput[type=\"number\"]:focus,\ninput[type=\"email\"]:focus,\ninput[type=\"url\"]:focus,\ninput[type=\"search\"]:focus,\ninput[type=\"tel\"]:focus,\ninput[type=\"color\"]:focus,\n.uneditable-input:focus {\n  border-color: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  outline: 0 none; }\n\na {\n  color: white; }\n\na:hover {\n  color: #81d8d0; }\n\n#BookNhanh {\n  height: 80px;\n  -webkit-box-shadow: 10px -1px 15px -3px rgba(0, 0, 0, 0.75);\n          box-shadow: 10px -1px 15px -3px rgba(0, 0, 0, 0.75); }\n\n.dong {\n  margin-top: 30px;\n  padding-left: 55px; }\n\n.color {\n  height: 100%; }\n\n.colorchinh {\n  background: black;\n  width: 28%;\n  height: 100%;\n  position: absolute; }\n\n.colorphu {\n  background: #1a202c;\n  width: 72%;\n  height: 100%; }\n\n.triangle-down {\n  width: 0;\n  height: 0;\n  border-left: 50px solid transparent;\n  border-right: 38px solid transparent;\n  border-top: 73px solid black;\n  position: absolute;\n  right: -38px; }\n\n.labelbook {\n  color: white;\n  margin-top: 31px;\n  margin-right: 30px; }\n\nselect {\n  border-radius: 0;\n  -webkit-appearance: none; }\n\n::-webkit-input-placeholder {\n  color: #8e959e;\n  padding-left: 0; }\n\n.group {\n  position: relative;\n  width: 15%;\n  margin-right: 45px; }\n\ninput[type=\"text\"],\ninput[type=\"password\"],\ninput[type=\"number\"],\ninput[type=\"email\"],\ninput[type=\"phone\"],\nselect {\n  color: white;\n  width: 100%;\n  background: transparent;\n  font-size: 13px;\n  padding: 4px 10px 4px 0px;\n  display: block;\n  border: none;\n  border-bottom: 1px solid #c0c0c05e; }\n\ninput[type=\"text\"] option,\n  input[type=\"password\"] option,\n  input[type=\"number\"] option,\n  input[type=\"email\"] option,\n  input[type=\"phone\"] option,\n  select option {\n    background: #1a202c; }\n\ninput:focus,\nselect:focus {\n  outline: none; }\n\n.label {\n  color: white;\n  font-size: 12px;\n  font-weight: normal;\n  position: absolute;\n  pointer-events: none;\n  left: 0px;\n  top: 3px;\n  -webkit-transition: all 0.4s;\n  transition: all 0.4s; }\n\ninput:focus ~ .label,\ninput:valid ~ .label,\nselect:focus ~ .label,\nselect:valid ~ .label {\n  top: -15px;\n  font-size: 10px;\n  color: #81d8d0;\n  -webkit-transition: all 0.4s;\n  transition: all 0.4s; }\n\n.bar {\n  position: relative;\n  display: block;\n  width: 100%; }\n\n.bar:before,\n.bar:after {\n  content: '';\n  height: 2px;\n  width: 0;\n  bottom: -1px;\n  position: absolute;\n  background: #81d8d0;\n  -webkit-transition: all 0.4s;\n  transition: all 0.4s; }\n\ninput:focus ~ .bar:before,\ninput:focus ~ .bar:after,\nselect:focus ~ .bar:before,\nselect:focus ~ .bar:after {\n  width: 100%; }\n\n@media (max-width: 414px) {\n  #BookNhanh {\n    display: none; }\n  .BookResponsive {\n    position: relative;\n    z-index: 2000;\n    cursor: pointer;\n    display: block !important;\n    color: white;\n    background: black;\n    height: 72px;\n    -webkit-box-shadow: 10px -1px 15px -3px rgba(0, 0, 0, 0.75);\n            box-shadow: 10px -1px 15px -3px rgba(0, 0, 0, 0.75); }\n    .BookResponsive h1 {\n      font-size: 21px;\n      padding-top: 25px;\n      font-weight: 500; }\n  .modal.left .modal-dialog {\n    position: fixed;\n    margin: auto;\n    width: 100%;\n    height: 100%;\n    -webkit-transform: translate3d(0%, 0, 0);\n    transform: translate3d(0%, 0, 0); }\n  .modal.left .modal-content {\n    height: 100%;\n    border-radius: 0;\n    overflow-y: auto; }\n  .modal.left.fade .modal-dialog {\n    right: -550px;\n    -webkit-transition: opacity 0.3s linear, right 0.3s ease-out;\n    transition: opacity 0.3s linear, right 0.3s ease-out; }\n  .modal.left.fade.show .modal-dialog {\n    right: -1px; }\n  .bodycontent {\n    padding: 0;\n    background: url('cool-twitter-backgrounds.aacc58f1db23f81d5bc6.jpg');\n    /* Create the parallax scrolling effect */\n    background-attachment: fixed;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    width: 100%;\n    height: 100%;\n    -webkit-box-shadow: -1px 2px 23px 7px rgba(0, 0, 0, 0.4);\n            box-shadow: -1px 2px 23px 7px rgba(0, 0, 0, 0.4);\n    z-index: 1; }\n  .background {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    background: #000000a1;\n    padding: 45px 55px;\n    padding-bottom: 10px; }\n  .dong {\n    font-size: 1.9rem;\n    font-weight: 700;\n    line-height: 1;\n    color: white;\n    opacity: .5;\n    position: absolute;\n    right: 1000;\n    right: 5px;\n    z-index: 5000;\n    margin-top: 0 !important; }\n  .group {\n    width: 100%;\n    margin-top: 50px; }\n  form {\n    padding: 55px 30px; } }\n"

/***/ }),

/***/ "./src/app/user/layout/quick-book/quick-book.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuickBookComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_movie_service__ = __webpack_require__("./src/app/Services/movie.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Models_LichChieu__ = __webpack_require__("./src/app/Models/LichChieu.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Models_GioChieu__ = __webpack_require__("./src/app/Models/GioChieu.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__const_data__ = __webpack_require__("./src/app/const/data.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var QuickBookComponent = /** @class */ (function () {
    function QuickBookComponent(moviesService, router) {
        this.moviesService = moviesService;
        this.router = router;
        // public MaNhom = "GP07";
        this.MovieID = 0;
        this.arrLichChieu = [];
        this.LichChieu = new __WEBPACK_IMPORTED_MODULE_3__Models_LichChieu__["a" /* LichChieu */]();
        this.GioChieu = new __WEBPACK_IMPORTED_MODULE_4__Models_GioChieu__["a" /* GioChieu */]();
        this.dsrap = [
            { ten: "GALAXY" },
            { ten: "CGV" },
            { ten: "LOTTE" },
            { ten: "MEGASTAR" },
        ];
    }
    QuickBookComponent.prototype.ngOnInit = function () {
        this.createFormControl();
        this.createForm();
        this.getStorage();
        this.onChange();
        $(".BookResponsive").hide();
    };
    QuickBookComponent.prototype.onChange = function () {
        var _this = this;
        //Lấy ID phim khi giá trị thay đổi
        this.formBooking.get('TenPhim').valueChanges.subscribe(function (id) {
            _this.MovieID = id;
            //Reset form khi tên phim thay đổi
            _this.formBooking.get('NgayChieu').reset();
            _this.formBooking.get('SuatChieu').reset();
            _this.arrLichChieu = [];
            _this.LichChieu = new __WEBPACK_IMPORTED_MODULE_3__Models_LichChieu__["a" /* LichChieu */]();
            _this.GioChieu = new __WEBPACK_IMPORTED_MODULE_4__Models_GioChieu__["a" /* GioChieu */]();
            if (_this.MovieID != 0) {
                //Mỗi lần thay đổi phim sẽ thay đổi lịch chiếu
                // this.moviesService.LayChiTietPhim_LichChieuTheoNhom(this.MovieID, this.MaNhom).subscribe((result: any) => {
                var result = __WEBPACK_IMPORTED_MODULE_6__const_data__["a" /* DanhSachPhimDangChieu */].find(function (x) { return x.ID == _this.MovieID; });
                console.log(_this.MovieID, result);
                if (result.ShowTimes.length > 0) {
                    for (var i = 0; i < result.ShowTimes.length; i++) {
                        var ShowTimes = result.ShowTimes[i];
                        if (i == 0) {
                            _this.LichChieu.NgayChieu = ShowTimes.DateReady;
                            _this.GioChieu.GioChieu = ShowTimes.StartDate;
                            _this.GioChieu.ShowTimeID = ShowTimes.ShowTimeID;
                            _this.GioChieu.IDRap = ShowTimes.CinimaRoom.CinimaRoomID;
                            _this.GioChieu.TenRap = ShowTimes.CinimaRoom.CinimaRoomName;
                            _this.LichChieu.Suat.push(_this.GioChieu);
                            _this.arrLichChieu.push(_this.LichChieu);
                        }
                        else {
                            if (_this.LichChieu.NgayChieu == ShowTimes.DateReady) {
                                _this.GioChieu = new __WEBPACK_IMPORTED_MODULE_4__Models_GioChieu__["a" /* GioChieu */]();
                                _this.GioChieu.GioChieu = ShowTimes.StartDate;
                                _this.GioChieu.ShowTimeID = ShowTimes.ShowTimeID;
                                _this.GioChieu.IDRap = ShowTimes.CinimaRoom.CinimaRoomID;
                                _this.GioChieu.TenRap = ShowTimes.CinimaRoom.CinimaRoomName;
                                _this.LichChieu.Suat.push(_this.GioChieu);
                            }
                            else {
                                _this.LichChieu = new __WEBPACK_IMPORTED_MODULE_3__Models_LichChieu__["a" /* LichChieu */]();
                                _this.GioChieu = new __WEBPACK_IMPORTED_MODULE_4__Models_GioChieu__["a" /* GioChieu */]();
                                _this.LichChieu.NgayChieu = ShowTimes.DateReady;
                                _this.GioChieu.GioChieu = ShowTimes.StartDate;
                                _this.GioChieu.ShowTimeID = ShowTimes.ShowTimeID;
                                _this.GioChieu.IDRap = ShowTimes.CinimaRoom.CinimaRoomID;
                                _this.GioChieu.TenRap = ShowTimes.CinimaRoom.CinimaRoomName;
                                _this.LichChieu.Suat.push(_this.GioChieu);
                                _this.arrLichChieu.push(_this.LichChieu);
                            }
                        }
                    }
                }
                // });
                //Mỗi lần thay đổi phim sẽ thay đổi lịch chiếu
            }
            //if
        });
        // Lấy ID phim
        //Lấy suất chiếu
        this.formBooking.get('NgayChieu').valueChanges.subscribe(function (suat) {
            _this.ngaychieu = suat;
            for (var i = 0; i < _this.arrLichChieu.length; i++) {
                if (suat == _this.arrLichChieu[i].NgayChieu) {
                    _this.SuatTheoNgay = _this.arrLichChieu[i].Suat;
                }
            }
        });
        //Lấy suất chiếu
        //Lấy thông tin của Suất chiếu
        this.formBooking.get('SuatChieu').valueChanges.subscribe(function (ttsuat) {
            if (_this.SuatTheoNgay != undefined) {
                for (var i = 0; i < _this.SuatTheoNgay.length; i++) {
                    if (ttsuat == _this.SuatTheoNgay[i].ShowTimeID) {
                        _this.tenrap = _this.SuatTheoNgay[i].TenRap;
                        _this.idrap = _this.SuatTheoNgay[i].IDRap;
                    }
                }
            }
        });
        // Khi form hợp lệ sẽ tiến hành qua trang đặt vé
        this.formBooking.valueChanges.subscribe(function (val) {
            if (_this.formBooking.valid == true) {
                var ShowTimeID_1 = _this.formBooking.get('SuatChieu').value;
                for (var i = 0; i < _this.SuatTheoNgay.length; i++) {
                    if (ShowTimeID_1 == _this.SuatTheoNgay[i].ShowTimeID) {
                        _this.giochieu = _this.SuatTheoNgay[i].GioChieu;
                    }
                }
                setTimeout(function () {
                    _this.DatVe(ShowTimeID_1, _this.ngaychieu, _this.giochieu);
                }, 500);
            }
        });
    };
    QuickBookComponent.prototype.DatVe = function (ShowTimeID, ngaychieu, giochieu) {
        $(".close").trigger("click");
        this.router.navigate(['Home/DatVe'], {
            queryParams: {
                idShow: ShowTimeID,
                idPhim: this.MovieID,
                ngaychieu: ngaychieu,
                giochieu: giochieu,
                tenrap: this.tenrap
            }
        });
    };
    QuickBookComponent.prototype.getStorage = function () {
        var storage = localStorage.getItem("DanhSachPhim");
        this.dsphim = JSON.parse(storage);
    };
    QuickBookComponent.prototype.createFormControl = function () {
        this.TenRap = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]),
            this.TenPhim = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]),
            this.NgayChieu = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]),
            this.SuatChieu = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]);
    };
    QuickBookComponent.prototype.createForm = function () {
        this.formBooking = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            TenRap: this.TenRap,
            TenPhim: this.TenPhim,
            NgayChieu: this.NgayChieu,
            SuatChieu: this.SuatChieu,
        });
    };
    QuickBookComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-quick-book',
            template: __webpack_require__("./src/app/user/layout/quick-book/quick-book.component.html"),
            styles: [__webpack_require__("./src/app/user/layout/quick-book/quick-book.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__Services_movie_service__["a" /* MovieService */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]])
    ], QuickBookComponent);
    return QuickBookComponent;
}());



/***/ }),

/***/ "./src/app/user/layout/trang-checkout/trang-checkout.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"CheckoutPage\">\n    <div class=\"container\">\n            <h3>CHECK OUT</h3>\n\n            <div class=\"d-flex\">\n                    <div class=\"divCheckout\" style=\"width:100%\">\n                            <div class=\"TenPhim\">\n                                <small>Tên Phim</small>\n                                <h1 class=\"labelPhim m-0\">{{ThongTinCheckOut.TenPhim}}</h1>\n                            </div>\n        \n                            <div class=\"thoigiandiadiem mt-4 mb-4 \">\n                                <div class=\"row\">\n                                        <div class=\"col-4\">\n                                                <div class=\"tenrap\">\n                                                        <small>Tên rạp</small>\n                                                        <p>{{ThongTinCheckOut.TenRap}}</p>\n                                                    </div>\n                                        </div>\n                                        <div class=\"col-4\">\n                                                <div class=\"ngaychieu\">\n                                                        <small>Ngày chiếu</small>\n                                                        <p>{{ThongTinCheckOut.NgayChieu | date:'MM/dd/yyyy' }}</p>\n                                                    </div>\n                                        </div>\n                                        <div class=\"col-4\">\n                                                <div class=\"lichchieu\">\n                                                        <small>Suất</small>\n                                                        <p>{{ThongTinCheckOut.Suat | slice:0:5}}</p>\n                                                    </div>\n                                        </div>\n                                </div>\n                              \n                               <div class=\"row mt-3\">\n                                    <div class=\"col-4\">\n                                            <div class=\"loaicombo\">\n                                                    <small>Loại Combo</small>\n                                                    <p>1 Bắp + 1 Nước</p>\n                                                </div>\n                                    </div>\n                                    <div class=\"col-4\">\n                                            <div class=\"slcombo\">\n                                                    <small>SL Combo</small>\n                                                    <p>1</p>\n                                                </div>\n                                    </div>\n                                    <div class=\"col-4\">\n                                            <div class=\"lichchieu\">\n                                                    <small>Ghế</small><br>\n                                                    <span *ngFor=\"let kq of ThongTinCheckOut.GheNgoi\">{{kq.SeatName}}</span>\n                                                </div>\n                                    </div>\n                               </div>     \n        \n                               <span class=\"lineok\"></span>\n                            </div>\n                            <!-- thoigiandiadiem -->\n        \n                            <div class=\"magiaodich mt-4 mb-4\">\n                                    <div class=\"row\">\n                                            <div class=\"col-4\">\n                                                    <div class=\"magd\">\n                                                            <small>Mã GD</small>\n                                                            <p>{{ThongTinCheckOut.MaGD}}</p>\n                                                        </div>\n                                            </div>\n                                            <div class=\"col-4\">\n                                                   \n                                            </div>\n                                            <div class=\"col-4\">\n                                                    <div class=\"tongtien\">\n                                                            <small>Tổng tiền</small>\n                                                            <p>{{ThongTinCheckOut.TongTien}}.000</p>\n                                                        </div>\n                                            </div>\n                                            <div class=\"col-4 mt-2\">\n                                                <img src=\"../../../../assets/images/barcode.png\" alt=\"\" style=\"width:100px; height:100px\">\n                                            </div>\n                                    </div>\n                            </div>\n                    </div>\n                    <!-- divCheckout -->\n\n                    <!-- <div class=\"thongbao\" style=\"width:40%\">\n                        <i class=\"far fa-check-circle text-success\"></i>\n                    </div> -->\n            </div>\n            \n\n           \n            \n    </div>\n</div>"

/***/ }),

/***/ "./src/app/user/layout/trang-checkout/trang-checkout.component.scss":
/***/ (function(module, exports) {

module.exports = ".bodycontent {\n  background-attachment: scroll !important; }\n\n@-webkit-keyframes sk-cubemove {\n  25% {\n    -webkit-transform: translateX(12px) rotate(-90deg) scale(0.5); }\n  50% {\n    -webkit-transform: translateX(12px) translateY(12px) rotate(-180deg); }\n  75% {\n    -webkit-transform: translateX(0px) translateY(12px) rotate(-270deg) scale(0.5); }\n  100% {\n    -webkit-transform: rotate(-360deg); } }\n\n@keyframes sk-cubemove {\n  25% {\n    transform: translateX(12px) rotate(-90deg) scale(0.5);\n    -webkit-transform: translateX(12px) rotate(-90deg) scale(0.5); }\n  50% {\n    transform: translateX(12px) translateY(12px) rotate(-179deg);\n    -webkit-transform: translateX(12px) translateY(12px) rotate(-179deg); }\n  50.1% {\n    transform: translateX(12px) translateY(12px) rotate(-180deg);\n    -webkit-transform: translateX(12px) translateY(12px) rotate(-180deg); }\n  75% {\n    transform: translateX(0px) translateY(12px) rotate(-270deg) scale(0.5);\n    -webkit-transform: translateX(0px) translateY(12px) rotate(-270deg) scale(0.5); }\n  100% {\n    transform: rotate(-360deg);\n    -webkit-transform: rotate(-360deg); } }\n\ntextarea:focus,\ninput[type=\"text\"]:focus,\ninput[type=\"password\"]:focus,\ninput[type=\"datetime\"]:focus,\ninput[type=\"datetime-local\"]:focus,\ninput[type=\"date\"]:focus,\ninput[type=\"month\"]:focus,\ninput[type=\"time\"]:focus,\ninput[type=\"week\"]:focus,\ninput[type=\"number\"]:focus,\ninput[type=\"email\"]:focus,\ninput[type=\"url\"]:focus,\ninput[type=\"search\"]:focus,\ninput[type=\"tel\"]:focus,\ninput[type=\"color\"]:focus,\n.uneditable-input:focus {\n  border-color: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  outline: 0 none; }\n\na {\n  color: white; }\n\na:hover {\n  color: #81d8d0; }\n\n#CheckoutPage {\n  background: #1a202c;\n  color: white; }\n\nsmall {\n  color: #8e959e;\n  font-size: 75% !important; }\n\nh3 {\n  position: relative;\n  margin-top: 75px;\n  margin-bottom: 75px; }\n\nh3::before {\n  content: '';\n  position: absolute;\n  width: 40px;\n  height: 2px;\n  background: #81d8d0;\n  top: -10px; }\n\n.labelPhim {\n  position: relative; }\n\n.labelPhim::before {\n  position: absolute;\n  content: '';\n  width: 100%;\n  height: 1px;\n  background: #c0c0c026;\n  bottom: -11px; }\n\n.thoigiandiadiem {\n  position: relative; }\n\n.lineok::after {\n  position: absolute;\n  content: '';\n  width: 100%;\n  height: 1px;\n  background: #c0c0c026; }\n\n.thongbao {\n  position: relative; }\n\n.thongbao i {\n    position: absolute;\n    top: 35%;\n    left: 60%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    font-size: 14em; }\n\n@media (max-width: 414px) {\n  #CheckoutPage h3 {\n    margin: 50px 0; } }\n\n@media (max-width: 414px) {\n  .thongbao {\n    display: none; }\n  .divCheckout {\n    width: 100% !important; } }\n"

/***/ }),

/***/ "./src/app/user/layout/trang-checkout/trang-checkout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrangCheckoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Models_ThongTinCheckout__ = __webpack_require__("./src/app/Models/ThongTinCheckout.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TrangCheckoutComponent = /** @class */ (function () {
    function TrangCheckoutComponent() {
        this.ThongTinCheckOut = new __WEBPACK_IMPORTED_MODULE_1__Models_ThongTinCheckout__["a" /* ThongTinCheckout */];
        this.dsghengoi = [];
    }
    TrangCheckoutComponent.prototype.ngOnInit = function () {
        this.ShowComponent();
        this.LocalStorage();
        $("#Footer").css({
            "position": "absolute",
            "bottom": "0",
            "width": "100%"
        });
    };
    TrangCheckoutComponent.prototype.LocalStorage = function () {
        var json = localStorage.getItem("ThongTinCheckout");
        var kq = JSON.parse(json);
        this.ThongTinCheckOut = kq;
        for (var i = 1; i < this.ThongTinCheckOut.GheNgoi.length; i++) {
            var string = ",";
            var kq = this.ThongTinCheckOut.GheNgoi[0].SeatName.concat(string);
            this.ThongTinCheckOut.GheNgoi[0].SeatName = kq;
            break;
        }
    };
    TrangCheckoutComponent.prototype.ShowComponent = function () {
        $("#HeaderNew").show();
        $("#HeaderNew").css({
            "box-shadow": "none"
        });
        $("#Footer").show();
        $("#Footer").css({
            "margin-bottom": "0"
        });
    };
    TrangCheckoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-trang-checkout',
            template: __webpack_require__("./src/app/user/layout/trang-checkout/trang-checkout.component.html"),
            styles: [__webpack_require__("./src/app/user/layout/trang-checkout/trang-checkout.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TrangCheckoutComponent);
    return TrangCheckoutComponent;
}());



/***/ }),

/***/ "./src/app/user/layout/trang-chi-tiet/chi-tiet-phim/chi-tiet-phim.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"MovieDetail\">\n  \n  <div class=\"container\">\n\n      <div class=\"row rowImage\">\n              <img src=\"../../../../../assets/images/{{MovieDetail.Image}}\" class=\"img-fluid bgImage\" [alt]=\"MovieDetail.Title\" />\n              <div class=\"bgGradian\"></div>\n          \n          <div class=\"col-md-5 col-12 infoimage\">\n                  <img style=\"width:90% ; height:auto\" src=\"../../../../../assets/images/{{MovieDetail.Image}}\" class=\"img-fluid imgMovie\" [alt]=\"MovieDetail.Title\" />\n          </div>\n\n          <div class=\"col-md-7 col-12 chitietphim\" style=\"padding-top:40px; padding-left:20px;\">\n\n              <div class=\"gioithieu\">\n                  <h2>{{MovieDetail.Title}}</h2>\n                  <p class=\"description\">{{MovieDetail.Description}}. Spoiled billionaire playboy Oliver Queen is missing and presumed dead when his yacht is lost at sea.</p>\n              </div>\n\n              <div class=\"thongtinphim\">\n                  <ul class=\"list-unstyled\">\n                      <li><span class=\"name\">Đạo diễn</span>    <span class=\"valuename\">{{MovieDetail.Director}}</span></li>\n                      <li><span class=\"name\">Diễn viên</span>    <span class=\"valuename\">{{MovieDetail.Producer}}</span></li>\n                      <li><span class=\"name\">Thể loại</span>    <span class=\"valuename\">{{MovieDetail.Genre}}</span></li>\n                      <li><span class=\"name\">Đánh giá</span>    <span class=\"valuename\">{{MovieDetail.Rating}}</span></li>\n                      <li><span class=\"name\">Ngày chiếu</span>    <span class=\"valuename\">{{MovieDetail.ReleaseDate | date:'longDate'}}</span></li>\n                      <li><span class=\"name\">Thời lượng</span>    <span class=\"valuename\">120 phút</span></li>\n                  </ul>\n              </div>\n\n              <div class=\"sukienbutton mt-5\">\n                <button type=\"button\" class=\"trailer\" data-toggle=\"modal\" data-target=\"#myModal2\"  (click)=\"thongtin(MovieDetail.Title,MovieDetail.TrailerURI)\">Xem Trailer</button>\n                <button href=\"#LichChieu\" class=\"bookticket ml-3\" appAniHover>ĐẶT VÉ NGAY</button>\n              </div>\n                  \n          </div>\n\n      </div>\n      <!-- row -->\n\n      <div class=\"lichchieu\">\n\n      </div>\n      \n  </div>\n\n  <!-- The Modal -->\n<div class=\"modal fade\" id=\"myModal2\">\n        <div class=\"modal-dialog\">\n          <div class=\"modal-content\">\n      \n            <!-- Modal body -->\n            <div class=\"modal-body\">\n    \n                <iframe class=\"video\" *ngIf=\"urlPhim != null\" height=\"600px\" width=\"100%\" [src]=\"urlPhim\">\n                </iframe>\n                \n            </div>\n      \n            <!-- Modal footer -->\n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\n            </div>\n      \n          </div>\n        </div>\n      </div>\n</div>\n\n\n\n    "

/***/ }),

/***/ "./src/app/user/layout/trang-chi-tiet/chi-tiet-phim/chi-tiet-phim.component.scss":
/***/ (function(module, exports) {

module.exports = ".bodycontent {\n  background-attachment: scroll !important; }\n\n@-webkit-keyframes sk-cubemove {\n  25% {\n    -webkit-transform: translateX(12px) rotate(-90deg) scale(0.5); }\n  50% {\n    -webkit-transform: translateX(12px) translateY(12px) rotate(-180deg); }\n  75% {\n    -webkit-transform: translateX(0px) translateY(12px) rotate(-270deg) scale(0.5); }\n  100% {\n    -webkit-transform: rotate(-360deg); } }\n\n@keyframes sk-cubemove {\n  25% {\n    transform: translateX(12px) rotate(-90deg) scale(0.5);\n    -webkit-transform: translateX(12px) rotate(-90deg) scale(0.5); }\n  50% {\n    transform: translateX(12px) translateY(12px) rotate(-179deg);\n    -webkit-transform: translateX(12px) translateY(12px) rotate(-179deg); }\n  50.1% {\n    transform: translateX(12px) translateY(12px) rotate(-180deg);\n    -webkit-transform: translateX(12px) translateY(12px) rotate(-180deg); }\n  75% {\n    transform: translateX(0px) translateY(12px) rotate(-270deg) scale(0.5);\n    -webkit-transform: translateX(0px) translateY(12px) rotate(-270deg) scale(0.5); }\n  100% {\n    transform: rotate(-360deg);\n    -webkit-transform: rotate(-360deg); } }\n\ntextarea:focus,\ninput[type=\"text\"]:focus,\ninput[type=\"password\"]:focus,\ninput[type=\"datetime\"]:focus,\ninput[type=\"datetime-local\"]:focus,\ninput[type=\"date\"]:focus,\ninput[type=\"month\"]:focus,\ninput[type=\"time\"]:focus,\ninput[type=\"week\"]:focus,\ninput[type=\"number\"]:focus,\ninput[type=\"email\"]:focus,\ninput[type=\"url\"]:focus,\ninput[type=\"search\"]:focus,\ninput[type=\"tel\"]:focus,\ninput[type=\"color\"]:focus,\n.uneditable-input:focus {\n  border-color: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  outline: 0 none; }\n\na {\n  color: white; }\n\na:hover {\n  color: #81d8d0; }\n\n#MovieDetail {\n  color: white;\n  background: #1a202c;\n  padding-bottom: 100px;\n  padding-top: 100px; }\n\n#MovieDetail .rowImage {\n    position: relative; }\n\n#MovieDetail .rowImage .bgImage {\n      width: 70%;\n      height: 100%;\n      position: absolute;\n      opacity: 0.3;\n      z-index: 0; }\n\n#MovieDetail .rowImage .bgGradian {\n      background: radial-gradient(ellipse at center, rgba(28, 35, 47, 0.6) 0%, rgba(28, 35, 47, 0.6) 10%, #1a202c 65%, #1a202c 100%);\n      width: 70%;\n      height: 100%;\n      position: absolute;\n      z-index: 0; }\n\n#MovieDetail .description {\n    color: #8e959e;\n    padding: 20px 0; }\n\n#MovieDetail li {\n    margin-top: 15px;\n    font-size: 14px; }\n\n#MovieDetail .name {\n    display: inline-block;\n    width: 75px; }\n\n#MovieDetail .valuename {\n    padding-left: 25px;\n    color: #8e959e; }\n\n#MovieDetail button {\n    cursor: pointer; }\n\n#MovieDetail .trailer {\n    text-decoration: none;\n    display: inline-block;\n    position: relative;\n    text-align: center;\n    color: white;\n    border: 1px solid #81d8d0;\n    -webkit-box-shadow: 0 0 0 0 transparent;\n            box-shadow: 0 0 0 0 transparent;\n    -webkit-transition: all 0.2s ease-in;\n    transition: all 0.2s ease-in;\n    background: none;\n    padding: 10px 30px;\n    border: none;\n    color: white;\n    font-size: 14px;\n    font-weight: 500;\n    cursor: pointer;\n    border: 2px solid #81d8d0; }\n\n#MovieDetail .trailer:hover {\n      color: white;\n      background-color: #81d8d0;\n      -webkit-transition: all 0.2s ease-out;\n      transition: all 0.2s ease-out; }\n\n#MovieDetail .trailer:hover:before {\n        -webkit-animation: shine 0.5s 0s linear;\n                animation: shine 0.5s 0s linear; }\n\n#MovieDetail .trailer:active {\n      -webkit-box-shadow: 0 0 0 0 transparent;\n              box-shadow: 0 0 0 0 transparent;\n      -webkit-transition: -webkit-box-shadow 0.2s ease-in;\n      transition: -webkit-box-shadow 0.2s ease-in;\n      transition: box-shadow 0.2s ease-in;\n      transition: box-shadow 0.2s ease-in, -webkit-box-shadow 0.2s ease-in; }\n\n#MovieDetail .trailer:before {\n      content: '';\n      display: block;\n      width: 0px;\n      height: 86%;\n      position: absolute;\n      top: 7%;\n      left: 0%;\n      opacity: 0;\n      background: white;\n      -webkit-box-shadow: 0 0 15px 3px white;\n              box-shadow: 0 0 15px 3px white;\n      -webkit-transform: skewX(-20deg);\n              transform: skewX(-20deg); }\n\n@-webkit-keyframes shine {\n  from {\n    opacity: 0;\n    left: 0%; }\n  50% {\n    opacity: 1; }\n  to {\n    opacity: 0;\n    left: 100%; } }\n\n@keyframes shine {\n  from {\n    opacity: 0;\n    left: 0%; }\n  50% {\n    opacity: 1; }\n  to {\n    opacity: 0;\n    left: 100%; } }\n\n#MovieDetail .bookticket {\n    background: #ea1c47;\n    padding: 10px 30px;\n    border: none;\n    color: #fff;\n    font-size: 14px;\n    font-weight: 500;\n    cursor: pointer;\n    cursor: pointer; }\n\n.imgMovie {\n  -webkit-box-shadow: -23px 23px 23px -5px rgba(0, 0, 0, 0.4);\n          box-shadow: -23px 23px 23px -5px rgba(0, 0, 0, 0.4); }\n\n/* Modal */\n\n@media (min-width: 576px) {\n  .modal-dialog {\n    max-width: 1000px;\n    margin: 1.75rem auto; } }\n\n.modal-content {\n  background: none; }\n\nbutton.close {\n  text-shadow: none;\n  color: #81d8d0;\n  font-size: 40px;\n  background: none;\n  opacity: 1; }\n\n.modal-footer {\n  border-top: none; }\n\n.video {\n  border: 1px solid black; }\n\na {\n  -webkit-transition: all .2s linear;\n  transition: all .2s linear; }\n\nimg {\n  width: 98%;\n  height: 350px; }\n\na:hover {\n  color: #81d8d0; }\n\n@media (max-width: 1024px) {\n  .rowImage .col-7 {\n    padding-top: 0px !important; }\n  .infoimage {\n    padding-top: 40px; }\n  #MovieDetail {\n    padding-top: 50px; } }\n\n@media (max-width: 768px) {\n  .chitietphim {\n    padding-top: 5px !important; }\n  .infoimage {\n    padding-top: 10px; } }\n\n@media (max-width: 414px) {\n  .gioithieu h2 {\n    margin-top: 20px !important; }\n  .imgMovie {\n    width: 100% !important; } }\n"

/***/ }),

/***/ "./src/app/user/layout/trang-chi-tiet/chi-tiet-phim/chi-tiet-phim.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChiTietPhimComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_movie_service__ = __webpack_require__("./src/app/Services/movie.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__const_data__ = __webpack_require__("./src/app/const/data.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChiTietPhimComponent = /** @class */ (function () {
    function ChiTietPhimComponent(router, activatedRoute, moviesService, doom) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.moviesService = moviesService;
        this.doom = doom;
        this.MovieDetail = null;
        this.getMovieDetail = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ChiTietPhimComponent.prototype.ngOnInit = function () {
        this.SetTopPage();
        this.SetThamSo();
        this.GetPhim();
        $("#Footer").css("margin-bottom", "0");
    };
    //Set tham so de lay lich chieu
    ChiTietPhimComponent.prototype.SetThamSo = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (thamso) {
            _this.MovieID = thamso['id'];
            var temp = parseInt(thamso['id']);
            _this.MovieDetail = temp < 5 ? __WEBPACK_IMPORTED_MODULE_4__const_data__["a" /* DanhSachPhimDangChieu */].filter(function (x) { return x.ID == _this.MovieID; })[0] : __WEBPACK_IMPORTED_MODULE_4__const_data__["b" /* DanhSachPhimSapChieu */].filter(function (x) { return x.ID == _this.MovieID; })[0];
            _this.getMovieDetail.emit(_this.MovieDetail);
        });
    };
    ChiTietPhimComponent.prototype.GetPhim = function () {
        // this.paramsSub2 = this.moviesService.LayChiTietPhim_LichChieuTheoNhom(this.MovieID, this.MaNhom).subscribe((result: any) => {
        //   console.log(result)
        //   this.MovieDetail = result;
        // }, error => {
        //   this.MovieDetail = error;
        // });
    };
    ChiTietPhimComponent.prototype.thongtin = function (title, url) {
        this.tenphim = title;
        this.urlPhim = this.doom.bypassSecurityTrustResourceUrl(url);
    };
    //Auto top
    ChiTietPhimComponent.prototype.SetTopPage = function () {
        $(".bookticket").on("click", function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top
            }, 500, 'linear');
        });
    };
    ChiTietPhimComponent.prototype.ngOnDestroy = function () {
        // this.paramsSub1.unsubscribe();
        // this.paramsSub2.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ChiTietPhimComponent.prototype, "getMovieDetail", void 0);
    ChiTietPhimComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chi-tiet-phim',
            template: __webpack_require__("./src/app/user/layout/trang-chi-tiet/chi-tiet-phim/chi-tiet-phim.component.html"),
            styles: [__webpack_require__("./src/app/user/layout/trang-chi-tiet/chi-tiet-phim/chi-tiet-phim.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__Services_movie_service__["a" /* MovieService */], __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */]])
    ], ChiTietPhimComponent);
    return ChiTietPhimComponent;
}());



/***/ }),

/***/ "./src/app/user/layout/trang-chi-tiet/lich-chieu/lich-chieu.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"LichChieu\">\n    <div class=\"container\">\n        <h3 class=\"\">LỊCH CHIẾU PHIM</h3>\n\n        <ng-template #oknguoclai>\n            <h5 class=\"soon\">Comming Soon...</h5>\n        </ng-template>\n\n\n        <div class=\"row tableRow d-flex mt-2 pt-1 pb-1 pl-1\" *ngIf=\"trangthai == true; else oknguoclai\">\n\n                <div class=\"col-lg-3 col-md-4 tenrap\">\n                    <!-- Nav tabs -->\n                    <ul class=\"nav nav-tabs\">\n      \n                        <li class=\"nav-item\">\n                            <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#homecon\">\n                                <img class=\"imgLogo\" src=\"https://s3img.vcdn.vn/123phim/2017/11/433007c685123da4226af33de215e38a.png\" alt=\"\"><span class=\"nameCinema\">Cinestar</span>\n                            </a>\n                        </li>\n      \n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" data-toggle=\"tab\" href=\"#menucon\">\n                                <img class=\"imgLogo\" src=\"https://s3img.vcdn.vn/123phim/2018/02/854e065ed5dfd5441965c99c5e197d56.png\" alt=\"\"><span class=\"nameCinema\">Lotte Cinema</span>\n                            </a>\n                        </li>\n\n                        <li class=\"nav-item\">\n                                <a class=\"nav-link\" data-toggle=\"tab\" href=\"#menucon1\">\n                                    <img class=\"imgLogo\" src=\"https://s3img.vcdn.vn/123phim/2017/11/526c679660edac88b195a9008590b1e8.png\" alt=\"\"><span class=\"nameCinema\">Mega GS</span>\n                                </a>\n                        </li>\n\n                        <li class=\"nav-item\">\n                                <a class=\"nav-link\" data-toggle=\"tab\" href=\"#menucon2\">\n                                    <img class=\"imgLogo\" src=\"https://s3img.vcdn.vn/123phim/2014/04/b216b21c3fbc33d5c60f2b504a7506cd.png\" alt=\"\"><span class=\"nameCinema\">CGV Cinema</span>\n                                </a>\n                        </li>\n\n                        \n      \n                    </ul>\n                    <!-- Nav tabs -->\n                </div>\n      \n      \n                <div class=\"col-lg-2 col-md-3 diachirap\">\n                    <!-- Tab panes 1 -->\n                    <div class=\"tab-content\">\n      \n                        <div class=\"tab-pane active container\" id=\"homecon\">\n                            <ul class=\"nav nav-tabs\">\n      \n                                <li class=\"nav-item ngaychieu\" *ngFor=\"let ngaychieu of arrLichChieu, let i = index\">\n                                   \n                                        <a class=\"nav-link\" data-toggle=\"tab\" href=\"#homechau{{i+1}}\">{{ngaychieu.NgayChieu | date:'EEEE, MMMM d'}}</a>\n                                    \n                                </li>\n      \n      \n                            </ul>\n                        </div>\n      \n                        <div class=\"tab-pane container\" id=\"menucon\">\n                            <ul class=\"nav nav-tabs\">\n      \n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#menuchau1\">July 11</a>\n                                </li>\n      \n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" data-toggle=\"tab\" href=\"#menuchau2\">June 12</a>\n                                </li>\n      \n                            </ul>\n                        </div>\n      \n                    </div>\n                    <!-- Tab panes 1 -->\n                </div>\n      \n      \n      \n                <div class=\"col-lg-7 col-md-5 lichchieu\">\n                    <div class=\"tab-content container divlichchieu\">\n                        \n                        <ng-container *ngFor=\"let ngaychieu of arrLichChieu, let i = index\">\n                        <div class=\"tab-pane container pl-0\" id=\"homechau{{i+1}}\">\n                                <a class=\"nav-link d-flex\" data-toggle=\"tab\" href=\"#\">\n                                    <img class=\"imgAddress\" src=\"https://s3img.vcdn.vn/123phim/2017/08/cinestar-hai-ba-trung-15021640992901.jpg\" alt=\"\">\n                                    <div class=\"ml-2 chitiet\">\n                                        <b class=\"cns\">CNS</b> - Hai Bà Trưng\n                                        <br>\n                                        <small>123 Hai Bà Trưng</small>\n                                    </div>\n                                </a>\n\n                                \n                                <div class=\"row thoigian\">\n                                    <div class=\"col-2\">\n                                        <img class=\"mt-2\" src=\"http://www.123phim.vn/app/assets/img/icons/typeSession/2_0.png\" alt=\"\">\n                                    </div>\n                                    <div class=\"col-10\">\n                                            <ng-container *ngFor=\"let giochieu of ngaychieu.Suat\">\n                                                <a target=\"_blank\" class=\"thoigianchieu\" (click)=\"DatVe(giochieu.ShowTimeID,ngaychieu.NgayChieu,giochieu.GioChieu,giochieu.TenRap)\" >\n                                                    {{giochieu.GioChieu | slice:0:5}}\n                                                </a>\n                                            </ng-container>\n                                    </div>\n                                </div>   \n                        </div>\n                        </ng-container>\n\n      \n                        <div class=\"tab-pane container\" id=\"menuchau1\">Menu Chau 1</div>\n                        <div class=\"tab-pane container\" id=\"menuchau2\">Menu Chau 2</div>\n      \n                    </div>\n                </div>\n      \n      \n            </div>\n            <!-- row -->\n\n\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/user/layout/trang-chi-tiet/lich-chieu/lich-chieu.component.scss":
/***/ (function(module, exports) {

module.exports = ".bodycontent {\n  background-attachment: scroll !important; }\n\n@-webkit-keyframes sk-cubemove {\n  25% {\n    -webkit-transform: translateX(12px) rotate(-90deg) scale(0.5); }\n  50% {\n    -webkit-transform: translateX(12px) translateY(12px) rotate(-180deg); }\n  75% {\n    -webkit-transform: translateX(0px) translateY(12px) rotate(-270deg) scale(0.5); }\n  100% {\n    -webkit-transform: rotate(-360deg); } }\n\n@keyframes sk-cubemove {\n  25% {\n    transform: translateX(12px) rotate(-90deg) scale(0.5);\n    -webkit-transform: translateX(12px) rotate(-90deg) scale(0.5); }\n  50% {\n    transform: translateX(12px) translateY(12px) rotate(-179deg);\n    -webkit-transform: translateX(12px) translateY(12px) rotate(-179deg); }\n  50.1% {\n    transform: translateX(12px) translateY(12px) rotate(-180deg);\n    -webkit-transform: translateX(12px) translateY(12px) rotate(-180deg); }\n  75% {\n    transform: translateX(0px) translateY(12px) rotate(-270deg) scale(0.5);\n    -webkit-transform: translateX(0px) translateY(12px) rotate(-270deg) scale(0.5); }\n  100% {\n    transform: rotate(-360deg);\n    -webkit-transform: rotate(-360deg); } }\n\ntextarea:focus,\ninput[type=\"text\"]:focus,\ninput[type=\"password\"]:focus,\ninput[type=\"datetime\"]:focus,\ninput[type=\"datetime-local\"]:focus,\ninput[type=\"date\"]:focus,\ninput[type=\"month\"]:focus,\ninput[type=\"time\"]:focus,\ninput[type=\"week\"]:focus,\ninput[type=\"number\"]:focus,\ninput[type=\"email\"]:focus,\ninput[type=\"url\"]:focus,\ninput[type=\"search\"]:focus,\ninput[type=\"tel\"]:focus,\ninput[type=\"color\"]:focus,\n.uneditable-input:focus {\n  border-color: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  outline: 0 none; }\n\na {\n  color: white; }\n\na:hover {\n  color: #81d8d0; }\n\n#LichChieu {\n  color: white;\n  background: #1a202c;\n  padding-top: 60px;\n  padding-bottom: 60px;\n  padding-top: 0;\n  margin-bottom: 65px; }\n\n#LichChieu .thoigianchieu {\n    display: inline-block;\n    border: 2px solid #81d8d0;\n    padding: 5px 20px;\n    margin-top: 9px;\n    cursor: pointer;\n    -webkit-transition: all .1s linear;\n    transition: all .1s linear; }\n\n#LichChieu .thoigianchieu:hover {\n    border: 2px solid #ea1c47; }\n\n#LichChieu .cns {\n    color: #662d91; }\n\n#LichChieu .overlay {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background: black;\n    z-index: -1; }\n\n#LichChieu h3 {\n    padding-top: 0;\n    margin-top: 65px;\n    margin-bottom: 35px;\n    display: inline-block;\n    position: relative; }\n\n#LichChieu h3::before {\n    content: '';\n    position: absolute;\n    width: 40px;\n    height: 2px;\n    background: #81d8d0;\n    top: -10px; }\n\n#LichChieu .imgLogo {\n    width: 50px;\n    height: 50px; }\n\n#LichChieu .imgAddress {\n    width: 50px;\n    height: 50px; }\n\n#LichChieu a {\n    padding-left: 0;\n    padding-right: 0;\n    padding: 15px 0;\n    color: white; }\n\n#LichChieu .chitiet {\n    color: white; }\n\n#LichChieu .tableRow {\n    margin: 0;\n    border: 1px solid #8e959e; }\n\n#LichChieu .tenrap,\n  #LichChieu .diachirap,\n  #LichChieu .lichchieu {\n    border-right: 1px solid #8e959e; }\n\n#LichChieu #GroupCinema {\n    background: black;\n    padding-top: 60px;\n    padding-bottom: 60px;\n    color: white; }\n\n#LichChieu .nav-tabs {\n    border: none !important; }\n\n#LichChieu .nav-item {\n    width: 100%;\n    border-bottom: 1px solid rgba(142, 149, 158, 0.25); }\n\n#LichChieu .nav-item:last-child {\n    border-bottom: none; }\n\n#LichChieu .nav-tabs .nav-link.active,\n  #LichChieu .nav-tabs .show > .nav-link {\n    background: none;\n    opacity: 1; }\n\n#LichChieu .nav-tabs .nav-link {\n    opacity: 0.3;\n    -webkit-transition: all 0.3s linear;\n    transition: all 0.3s linear;\n    border: none; }\n\n#LichChieu .nav-tabs .nav-link:hover {\n    opacity: 1; }\n\n#LichChieu .nameCinema {\n    font-weight: 500;\n    padding-left: 10px; }\n\n.thoigian {\n  -webkit-animation: slide-down 0.5s ease-out;\n          animation: slide-down 0.5s ease-out; }\n\n.thoigian .col-2 {\n    padding-right: 0; }\n\n.thoigian .col-10 {\n    padding-left: 0; }\n\n@-webkit-keyframes slide-down {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(50%);\n            transform: translateY(50%); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n            transform: translateY(0); } }\n\n@keyframes slide-down {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(50%);\n            transform: translateY(50%); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n            transform: translateY(0); } }\n\n.soon {\n  color: #8e959e; }\n\n@media (max-width: 1024px) {\n  .thoigianchieu {\n    margin-left: 0px !important; }\n  .thoigian .col-10 {\n    padding: 0 !important; } }\n\n@media (max-width: 812px) {\n  .thoigian .col-10 {\n    margin-left: 16px; } }\n\n@media (max-width: 768px) {\n  .thoigianchieu {\n    margin-left: 30px !important; } }\n\n@media (max-width: 736px) {\n  .thoigian .col-10 {\n    margin-left: 0; }\n  .thoigianchieu:last-of-type {\n    margin-left: 5px !important; }\n  .lichchieu {\n    margin-bottom: 40px; } }\n\n@media (max-width: 414px) {\n  .tenrap {\n    border-bottom: 1px solid #8e959e !important; }\n  #homecon {\n    padding: 0 !important;\n    margin: 20px 0 !important; }\n  .diachirap {\n    border-bottom: 1px solid #8e959e !important; }\n  .divlichchieu {\n    padding: 0 !important;\n    margin: 20px 0 !important; }\n  .thoigian .col-10 {\n    margin-left: 0; }\n  .thoigianchieu:last-of-type {\n    margin-left: 5px !important; } }\n\n@media (max-width: 375px) {\n  .thoigian .col-10 {\n    margin-left: 0; }\n  .thoigianchieu:last-of-type {\n    margin-left: 5px !important; } }\n"

/***/ }),

/***/ "./src/app/user/layout/trang-chi-tiet/lich-chieu/lich-chieu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LichChieuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_movie_service__ = __webpack_require__("./src/app/Services/movie.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Models_LichChieu__ = __webpack_require__("./src/app/Models/LichChieu.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Models_GioChieu__ = __webpack_require__("./src/app/Models/GioChieu.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LichChieuComponent = /** @class */ (function () {
    function LichChieuComponent(router, activatedRoute, moviesService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.moviesService = moviesService;
        this.arrLichChieu = [];
        this.LichChieu = new __WEBPACK_IMPORTED_MODULE_3__Models_LichChieu__["a" /* LichChieu */]();
        this.GioChieu = new __WEBPACK_IMPORTED_MODULE_4__Models_GioChieu__["a" /* GioChieu */]();
    }
    LichChieuComponent.prototype.DatVe = function (ShowTimeID, ngaychieu, giochieu, tenrap, event) {
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
    };
    //Lấy chi tiết phim lịch chiếu dựa vào 2 tham số
    LichChieuComponent.prototype.SetThamSo = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (thamso) {
            _this.MovieID = thamso['id'];
            // const temp:Number = parseInt(thamso['id'])
            // this.MovieDetail = temp < 5 ? DanhSachPhimDangChieu.filter(x => x.ID == this.MovieID)[0] : DanhSachPhimSapChieu.filter(x => x.ID == this.MovieID)[0]
        });
    };
    LichChieuComponent.prototype.GetLichChieu = function () {
        if (this.MovieDetail.ShowTimes.length > 0) {
            this.trangthai = true;
            for (var i = 0; i < this.MovieDetail.ShowTimes.length; i++) {
                var ShowTimes = this.MovieDetail.ShowTimes[i];
                if (i == 0) {
                    this.LichChieu.NgayChieu = ShowTimes.DateReady;
                    this.GioChieu.GioChieu = ShowTimes.StartDate;
                    this.GioChieu.ShowTimeID = ShowTimes.ShowTimeID;
                    this.GioChieu.IDRap = ShowTimes.CinimaRoom.CinimaRoomID;
                    this.GioChieu.TenRap = ShowTimes.CinimaRoom.CinimaRoomName;
                    this.LichChieu.Suat.push(this.GioChieu);
                    this.arrLichChieu.push(this.LichChieu);
                }
                else {
                    if (this.LichChieu.NgayChieu == ShowTimes.DateReady) {
                        this.GioChieu = new __WEBPACK_IMPORTED_MODULE_4__Models_GioChieu__["a" /* GioChieu */]();
                        this.GioChieu.GioChieu = ShowTimes.StartDate;
                        this.GioChieu.ShowTimeID = ShowTimes.ShowTimeID;
                        this.GioChieu.IDRap = ShowTimes.CinimaRoom.CinimaRoomID;
                        this.GioChieu.TenRap = ShowTimes.CinimaRoom.CinimaRoomName;
                        this.LichChieu.Suat.push(this.GioChieu);
                    }
                    else {
                        this.LichChieu = new __WEBPACK_IMPORTED_MODULE_3__Models_LichChieu__["a" /* LichChieu */]();
                        this.GioChieu = new __WEBPACK_IMPORTED_MODULE_4__Models_GioChieu__["a" /* GioChieu */]();
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
        }
        else {
            this.trangthai = false;
        }
        //Auto active first li a
        setTimeout(function () {
            var a = $("a[href='#homechau1']");
            a.trigger('click');
        }, 1);
    };
    LichChieuComponent.prototype.ngOnInit = function () {
        this.SetThamSo();
        this.GetLichChieu();
    };
    LichChieuComponent.prototype.ngOnChanges = function () {
        this.GetLichChieu();
    };
    LichChieuComponent.prototype.ngOnDestroy = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], LichChieuComponent.prototype, "MovieDetail", void 0);
    LichChieuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-lich-chieu',
            template: __webpack_require__("./src/app/user/layout/trang-chi-tiet/lich-chieu/lich-chieu.component.html"),
            styles: [__webpack_require__("./src/app/user/layout/trang-chi-tiet/lich-chieu/lich-chieu.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__Services_movie_service__["a" /* MovieService */]])
    ], LichChieuComponent);
    return LichChieuComponent;
}());



/***/ }),

/***/ "./src/app/user/layout/trang-chi-tiet/trang-chi-tiet.component.html":
/***/ (function(module, exports) {

module.exports = "<app-chi-tiet-phim (getMovieDetail)=\"getMovieDetail($event)\"></app-chi-tiet-phim>\n<app-lich-chieu [MovieDetail]=\"movieDetail\"></app-lich-chieu>"

/***/ }),

/***/ "./src/app/user/layout/trang-chi-tiet/trang-chi-tiet.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/layout/trang-chi-tiet/trang-chi-tiet.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrangChiTietComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TrangChiTietComponent = /** @class */ (function () {
    function TrangChiTietComponent() {
    }
    TrangChiTietComponent.prototype.getMovieDetail = function (data) {
        this.movieDetail = data;
    };
    TrangChiTietComponent.prototype.ngOnInit = function () {
    };
    TrangChiTietComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-trang-chi-tiet',
            template: __webpack_require__("./src/app/user/layout/trang-chi-tiet/trang-chi-tiet.component.html"),
            styles: [__webpack_require__("./src/app/user/layout/trang-chi-tiet/trang-chi-tiet.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TrangChiTietComponent);
    return TrangChiTietComponent;
}());



/***/ }),

/***/ "./src/app/user/layout/trang-chu/events/events.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"events\">\n    <div class=\"container\">\n        <h3>KHUYẾN MÃI</h3>\n\n        <div class=\"row\">\n          <div class=\"col-md-3 col-6 text-center mt-4\">\n            <img class=\"img-fluid\" src=\"../../../../../assets/images/event1.jpg\" alt=\"\">\n          </div>\n          <div class=\"col-md-3 col-6 text-center mt-4\">\n              <img class=\"img-fluid\" src=\"../../../../../assets/images/event2.jpg\" alt=\"\">\n          </div>\n          <div class=\"col-md-3 col-6 text-center mt-4\">\n              <img class=\"img-fluid\" src=\"../../../../../assets/images/event3.jpg\" alt=\"\">\n          </div>\n          <div class=\"col-md-3 col-6 text-center mt-4\">\n              <img class=\"img-fluid\" src=\"../../../../../assets/images/event4.jpg\" alt=\"\">\n\n          </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/user/layout/trang-chu/events/events.component.scss":
/***/ (function(module, exports) {

module.exports = ".bodycontent {\n  background-attachment: scroll !important; }\n\n@-webkit-keyframes sk-cubemove {\n  25% {\n    -webkit-transform: translateX(12px) rotate(-90deg) scale(0.5); }\n  50% {\n    -webkit-transform: translateX(12px) translateY(12px) rotate(-180deg); }\n  75% {\n    -webkit-transform: translateX(0px) translateY(12px) rotate(-270deg) scale(0.5); }\n  100% {\n    -webkit-transform: rotate(-360deg); } }\n\n@keyframes sk-cubemove {\n  25% {\n    transform: translateX(12px) rotate(-90deg) scale(0.5);\n    -webkit-transform: translateX(12px) rotate(-90deg) scale(0.5); }\n  50% {\n    transform: translateX(12px) translateY(12px) rotate(-179deg);\n    -webkit-transform: translateX(12px) translateY(12px) rotate(-179deg); }\n  50.1% {\n    transform: translateX(12px) translateY(12px) rotate(-180deg);\n    -webkit-transform: translateX(12px) translateY(12px) rotate(-180deg); }\n  75% {\n    transform: translateX(0px) translateY(12px) rotate(-270deg) scale(0.5);\n    -webkit-transform: translateX(0px) translateY(12px) rotate(-270deg) scale(0.5); }\n  100% {\n    transform: rotate(-360deg);\n    -webkit-transform: rotate(-360deg); } }\n\ntextarea:focus,\ninput[type=\"text\"]:focus,\ninput[type=\"password\"]:focus,\ninput[type=\"datetime\"]:focus,\ninput[type=\"datetime-local\"]:focus,\ninput[type=\"date\"]:focus,\ninput[type=\"month\"]:focus,\ninput[type=\"time\"]:focus,\ninput[type=\"week\"]:focus,\ninput[type=\"number\"]:focus,\ninput[type=\"email\"]:focus,\ninput[type=\"url\"]:focus,\ninput[type=\"search\"]:focus,\ninput[type=\"tel\"]:focus,\ninput[type=\"color\"]:focus,\n.uneditable-input:focus {\n  border-color: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  outline: 0 none; }\n\na {\n  color: white; }\n\na:hover {\n  color: #81d8d0; }\n\n#events {\n  color: white;\n  padding-top: 60px;\n  padding-bottom: 60px;\n  padding-top: 0; }\n\n#events h3 {\n    margin-bottom: 30px !important;\n    display: inline-table;\n    margin: 0 auto;\n    position: relative; }\n\n#events h3::before {\n    content: '';\n    position: absolute;\n    width: 40px;\n    height: 2px;\n    background: #81d8d0;\n    top: -10px; }\n"

/***/ }),

/***/ "./src/app/user/layout/trang-chu/events/events.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EventsComponent = /** @class */ (function () {
    function EventsComponent() {
    }
    EventsComponent.prototype.ngOnInit = function () {
    };
    EventsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-events',
            template: __webpack_require__("./src/app/user/layout/trang-chu/events/events.component.html"),
            styles: [__webpack_require__("./src/app/user/layout/trang-chu/events/events.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EventsComponent);
    return EventsComponent;
}());



/***/ }),

/***/ "./src/app/user/layout/trang-chu/group-cinema/group-cinema.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"banner\">\n    <img src=\"../../../../../assets/images/imgad.jpeg\" style=\"width:100%\" alt=\"\">\n</div>\n\n<div id=\"GroupCinema\">\n  <div class=\"container\">\n      <h3 class=\"mt-3\">LỊCH CHIẾU PHIM</h3>\n\n      <div class=\"row d-flex pt-1 pb-1\" id=\"rowCumRap\">\n\n            <div class=\"col-3 tenrap\">\n                    <!-- Nav tabs -->\n                    <ul class=\"nav nav-tabs\">\n      \n                        <li class=\"nav-item\">\n                            <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#homecon\">\n                                <img class=\"imgLogo\" src=\"https://s3img.vcdn.vn/123phim/2017/11/433007c685123da4226af33de215e38a.png\" alt=\"\"><span class=\"nameCinema\">Cinestar</span>\n                            </a>\n                        </li>\n      \n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" data-toggle=\"tab\" href=\"#menucon\">\n                                <img class=\"imgLogo\" src=\"https://s3img.vcdn.vn/123phim/2018/02/854e065ed5dfd5441965c99c5e197d56.png\" alt=\"\"><span class=\"nameCinema\">Lotte Cinema</span>\n                            </a>\n                        </li>\n\n                        <li class=\"nav-item\">\n                                <a class=\"nav-link\" data-toggle=\"tab\" href=\"#menucon1\">\n                                    <img class=\"imgLogo\" src=\"https://s3img.vcdn.vn/123phim/2017/11/526c679660edac88b195a9008590b1e8.png\" alt=\"\"><span class=\"nameCinema\">Mega GS</span>\n                                </a>\n                        </li>\n\n                        <li class=\"nav-item\">\n                                <a class=\"nav-link\" data-toggle=\"tab\" href=\"#menucon2\">\n                                    <img class=\"imgLogo\" src=\"https://s3img.vcdn.vn/123phim/2014/04/b216b21c3fbc33d5c60f2b504a7506cd.png\" alt=\"\"><span class=\"nameCinema\">CGV Cinema</span>\n                                </a>\n                        </li>\n\n                        \n      \n                    </ul>\n                    <!-- Nav tabs -->\n                </div>\n\n\n          <div class=\"col-4 diachirap\">\n              <!-- Tab panes 1 -->\n              <div class=\"tab-content\">\n\n                  <div class=\"tab-pane active container\" id=\"homecon\">\n                      <ul class=\"nav nav-tabs\">\n\n                          <li class=\"nav-item\">\n                              <a class=\"nav-link active d-flex\" data-toggle=\"tab\" href=\"#homechau1\">\n                                  <img class=\"imgAddress\" src=\"https://s3img.vcdn.vn/123phim/2017/08/cinestar-hai-ba-trung-15021640992901.jpg\" alt=\"\">\n                                  <div class=\"ml-2 chitiet\">\n                                      <b class=\"cns\">CNS</b> - Hai Bà Trưng\n                                      <br>\n                                      <small>123 Hai Bà Trưng</small>\n                                      <br>\n                                      <small class=\"btnchitiet\">[Chi tiết]</small>\n                                  </div>\n                              </a>\n                          </li>\n\n                          <li class=\"nav-item\">\n                              <a class=\"nav-link d-flex\" data-toggle=\"tab\" href=\"#homechau2\">\n                                  <img class=\"imgAddress\" src=\"https://s3img.vcdn.vn/123phim/2015/03/9fae6901cdcf6f3a82dd85aa4d07f8a3.jpg\" alt=\"\">\n                                  <div class=\"ml-2 chitiet\">\n                                      <b class=\"cns\">CNS</b> - Quang Trung\n                                      <br>\n                                      <small>123 Quang Trung</small>\n                                      <br>\n                                      <small class=\"btnchitiet\">[Chi tiết]</small>\n                                  </div>\n                              </a>\n                          </li>\n\n                          <li class=\"nav-item\">\n                                <a class=\"nav-link d-flex\" data-toggle=\"tab\" href=\"#homechau3\">\n                                        <img class=\"imgAddress\" src=\"https://s3img.vcdn.vn/123phim/2014/12/b975e06fd7c3762f0d40efaaea5395d7.jpg\" alt=\"\">\n                                        <div class=\"ml-2 chitiet\">\n                                            <b class=\"cns\">CNS</b> - Quang Trung\n                                            <br>\n                                            <small>123 Quang Trung</small>\n                                            <br>\n                                            <small class=\"btnchitiet\">[Chi tiết]</small>\n                                        </div>\n                                    </a>\n                          </li>\n\n                      </ul>\n                  </div>\n\n                  <div class=\"tab-pane container\" id=\"menucon\">\n                      <ul class=\"nav nav-tabs\">\n\n                          <li class=\"nav-item\">\n                                <a class=\"nav-link d-flex active\" data-toggle=\"tab\" href=\"#menuchau1\">\n                                        <img class=\"imgAddress\" src=\"https://s3img.vcdn.vn/123phim/2017/08/lotte-cinema-go-vap-15020967440969.jpg\" alt=\"\">\n                                        <div class=\"ml-2 chitiet\">\n                                            <b class=\"lotte\">LOTTE</b> - Bùi Viện\n                                            <br>\n                                            <small>123 Bùi Viện</small>\n                                            <br>\n                                            <small class=\"btnchitiet\">[Chi tiết]</small>\n                                        </div>\n                                    </a>\n                          </li>\n\n                          <li class=\"nav-item\">\n                                <a class=\"nav-link d-flex\" data-toggle=\"tab\" href=\"#meuchau2\">\n                                        <img class=\"imgAddress\" src=\"https://s3img.vcdn.vn/123phim/2014/12/cec7b8397ba6f0eac24bf9be0f8f10d7.jpg\" alt=\"\">\n                                        <div class=\"ml-2 chitiet\">\n                                            <b class=\"lotte\">LOTTE</b> - Phú Thọ\n                                            <br>\n                                            <small>123 Phú Thọ</small>\n                                            <br>\n                                            <small class=\"btnchitiet\">[Chi tiết]</small>\n                                        </div>\n                                    </a>\n                          </li>\n\n                      </ul>\n                  </div>\n\n              </div>\n              <!-- Tab panes 1 -->\n          </div>\n\n\n\n          <div class=\"col-5 lichchieu\">\n              <div class=\"tab-content container\">\n\n                  <div class=\"tab-pane container p-0 active\" id=\"homechau1\">\n                      <div class=\"p-0 pb-3 mb-2 divthongtin\" *ngFor=\"let ds of DanhSachPhim\">\n                            <a class=\"nav-link d-flex\" data-toggle=\"tab\" href=\"#\">\n                                    <img class=\"imgAddress\" [src]=\"urlHost + ds.Image\" [alt]=\"ds.Title\">\n                                    <div class=\"ml-2 chitiet\">\n                                        <b>{{ds.Title}}</b>\n                                        <br>\n                                        <small>120 phút - 8.5 IMDB</small>\n                                    </div>\n                            </a>\n\n                            <div class=\"row rowtable\">\n                                    <div class=\"col-1 pl-0\">\n                                        <img class=\"mt-2\" src=\"http://www.123phim.vn/app/assets/img/icons/typeSession/2_0.png\" alt=\"\">\n                                    </div>\n                                    <div class=\"col-11\">\n                                            <a class=\"thoigianchieu\" href=\"#\">\n                                                10:00\n                                            </a>\n                                            <a class=\"thoigianchieu\" href=\"#\">\n                                                    10:00\n                                            </a>\n                                            <a class=\"thoigianchieu\" href=\"#\">\n                                                    10:00\n                                            </a>\n                                            <a class=\"thoigianchieu\" href=\"#\">\n                                                    10:00\n                                            </a>\n                                            <a class=\"thoigianchieu\" href=\"#\">\n                                                    10:00\n                                            </a>\n                                            <a class=\"thoigianchieu\" href=\"#\">\n                                                    10:00\n                                            </a>\n                                    </div>\n                            </div>   \n                      </div>\n                        \n                  </div>\n\n\n                  <div class=\"tab-pane container\" id=\"homechau2\">Lịch chiếu 2</div>\n                  <div class=\"tab-pane container\" id=\"homechau3\">Lịch chiếu 3</div>\n\n                  <div class=\"tab-pane container\" id=\"menuchau1\">Menu Chau 1</div>\n                  <div class=\"tab-pane container\" id=\"menuchau2\">Menu Chau 2</div>\n\n              </div>\n          </div>\n\n\n      </div>\n      <!-- row -->\n   <div>\n   <!-- Container -->\n</div>\n<!-- /div GroupCinema -->"

/***/ }),

/***/ "./src/app/user/layout/trang-chu/group-cinema/group-cinema.component.scss":
/***/ (function(module, exports) {

module.exports = ".bodycontent {\n  background-attachment: scroll !important; }\n\n@-webkit-keyframes sk-cubemove {\n  25% {\n    -webkit-transform: translateX(12px) rotate(-90deg) scale(0.5); }\n  50% {\n    -webkit-transform: translateX(12px) translateY(12px) rotate(-180deg); }\n  75% {\n    -webkit-transform: translateX(0px) translateY(12px) rotate(-270deg) scale(0.5); }\n  100% {\n    -webkit-transform: rotate(-360deg); } }\n\n@keyframes sk-cubemove {\n  25% {\n    transform: translateX(12px) rotate(-90deg) scale(0.5);\n    -webkit-transform: translateX(12px) rotate(-90deg) scale(0.5); }\n  50% {\n    transform: translateX(12px) translateY(12px) rotate(-179deg);\n    -webkit-transform: translateX(12px) translateY(12px) rotate(-179deg); }\n  50.1% {\n    transform: translateX(12px) translateY(12px) rotate(-180deg);\n    -webkit-transform: translateX(12px) translateY(12px) rotate(-180deg); }\n  75% {\n    transform: translateX(0px) translateY(12px) rotate(-270deg) scale(0.5);\n    -webkit-transform: translateX(0px) translateY(12px) rotate(-270deg) scale(0.5); }\n  100% {\n    transform: rotate(-360deg);\n    -webkit-transform: rotate(-360deg); } }\n\ntextarea:focus,\ninput[type=\"text\"]:focus,\ninput[type=\"password\"]:focus,\ninput[type=\"datetime\"]:focus,\ninput[type=\"datetime-local\"]:focus,\ninput[type=\"date\"]:focus,\ninput[type=\"month\"]:focus,\ninput[type=\"time\"]:focus,\ninput[type=\"week\"]:focus,\ninput[type=\"number\"]:focus,\ninput[type=\"email\"]:focus,\ninput[type=\"url\"]:focus,\ninput[type=\"search\"]:focus,\ninput[type=\"tel\"]:focus,\ninput[type=\"color\"]:focus,\n.uneditable-input:focus {\n  border-color: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  outline: 0 none; }\n\na {\n  color: white; }\n\na:hover {\n  color: #81d8d0; }\n\n.cns {\n  color: #662d91; }\n\n.lotte {\n  color: #ed1b25; }\n\n.btnchitiet {\n  color: #81d8d0; }\n\n.thoigianchieu {\n  display: inline-block;\n  border: 1px solid #81d8d0;\n  padding: 5px 20px;\n  margin-left: 10px;\n  margin-top: 9px; }\n\n.nameCinema {\n  padding-left: 10px; }\n\n.divthongtin {\n  border-bottom: 1px solid rgba(142, 149, 158, 0.25); }\n\n.rowtable {\n  border: none !important; }\n\n.imgLogo {\n  width: 50px;\n  height: 50px; }\n\n.imgAddress {\n  width: 65px;\n  height: 65px; }\n\nh3 {\n  margin-bottom: 30px !important;\n  padding-bottom: 7px;\n  display: inline-table;\n  margin: 0 auto;\n  position: relative; }\n\nh3::before {\n  content: '';\n  position: absolute;\n  width: 40px;\n  height: 2px;\n  background: #81d8d0;\n  top: -10px; }\n\na {\n  padding-left: 0;\n  padding-right: 0;\n  padding: 15px 0;\n  color: white; }\n\n.chitiet {\n  color: white; }\n\n.row {\n  margin: 0;\n  border: 1px solid #8e959e; }\n\n.tenrap, .diachirap, .lichchieu {\n  border-right: 1px solid #8e959e; }\n\n.lichchieu {\n  height: 500px; }\n\n#GroupCinema {\n  background: #1a202c;\n  padding-top: 60px;\n  padding-bottom: 60px;\n  color: white; }\n\n.nav-tabs {\n  border: none !important; }\n\n.nav-item {\n  width: 100%;\n  border-bottom: 1px solid rgba(142, 149, 158, 0.25); }\n\n.nav-item:last-child {\n  border-bottom: none !important; }\n\n.nav-tabs .nav-link.active, .nav-tabs .show > .nav-link {\n  background: none;\n  opacity: 1; }\n\n.nav-tabs .nav-link {\n  opacity: 0.3;\n  -webkit-transition: all 0.3s linear;\n  transition: all 0.3s linear;\n  border: none; }\n\n.nav-tabs .nav-link:hover {\n  opacity: 1; }\n\n.nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active {\n  color: white; }\n"

/***/ }),

/***/ "./src/app/user/layout/trang-chu/group-cinema/group-cinema.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupCinemaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_movie_service__ = __webpack_require__("./src/app/Services/movie.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GroupCinemaComponent = /** @class */ (function () {
    function GroupCinemaComponent(servicePhim, router) {
        this.servicePhim = servicePhim;
        this.router = router;
        this.MaNhom = 'GP07';
        //url hinh anh
        this.urlHost = 'http://sv.myclass.vn/Images/Movies/';
    }
    GroupCinemaComponent.prototype.XemChiTiet = function (phimID, groupID) {
        this.router.navigate(['Home/ChiTietPhim'], { queryParams: { id: phimID, groupid: groupID } });
    };
    GroupCinemaComponent.prototype.ngOnInit = function () {
        this.GetPhim();
        this.ScrollBar();
    };
    GroupCinemaComponent.prototype.GetPhim = function () {
        var _this = this;
        this.servicePhim.LayDanhSachPhim().subscribe(function (result) {
            _this.DanhSachPhim = result;
        }, function (error) {
            _this.DanhSachPhim = error;
        });
    };
    // Tạo Scroll Sidebar Left
    GroupCinemaComponent.prototype.ScrollBar = function () {
        $(".lichchieu").niceScroll({
            cursorcolor: 'silver',
            cursorwidth: 4,
            cursorborder: 'none'
        });
    };
    GroupCinemaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-group-cinema',
            template: __webpack_require__("./src/app/user/layout/trang-chu/group-cinema/group-cinema.component.html"),
            styles: [__webpack_require__("./src/app/user/layout/trang-chu/group-cinema/group-cinema.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Services_movie_service__["a" /* MovieService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], GroupCinemaComponent);
    return GroupCinemaComponent;
}());



/***/ }),

/***/ "./src/app/user/layout/trang-chu/news/news.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"news\">\n  <div class=\"img\">\n      <img class=\"banner\" src=\"../../../../../assets/images/3.jpg\" alt=\"\">\n      <div class=\"bgcover\"></div>\n  </div>\n\n  <div class=\"container mt-5 pt-5\">\n      <div class=\"row\">\n        \n          <div class=\"col-md-6\">\n              <h3>REVIEW PHIM</h3>\n\n              <div class=\"d-flex blog\">\n                <div class=\"row\">\n                    <div class=\"col-md-12 col-lg-6 pr-0 paddingright\">\n                            <img class=\"img-fluid\" src=\"../../../../../assets/images/deadpool22_1526356258379.jpg\" alt=\"\">\n                    </div>\n                    <div class=\"col-md-12 col-lg-6\">\n                            <div class=\"titleblog\">\n                                    <h5>[Review] Deadpool 2: Không Có Bá Đạo Nhất, Chỉ Có Bá Đạo Hơn</h5>\n                                    <div class=\"icon d-flex\">\n                                        <div class=\"likefb\">\n                                            <i class=\"far fa-thumbs-up\"></i>\n                                            <small>Thích 1</small>\n                                        </div>\n                                        <div class=\"view ml-2\">\n                                            <i class=\"fas fa-eye\"></i>       \n                                            <small>435</small>\n                                        </div>\n                                    </div>\n                                    <p>Deadpool đã trở lại. Liệu “thánh bựa” của giới dị nhân vẫn còn chất như 2 năm về trước?</p>\n                                  </div>\n                    </div>\n                </div>\n                \n              </div>\n\n              <div class=\"d-flex blog\">\n                  <div class=\"row\">\n                      <div class=\"col-md-12 col-lg-6 pr-0 paddingright\">\n                            <img class=\"img-fluid\" src=\"../../../../../assets/images/lovesimon3_1525406149801.jpg\" alt=\"\">\n                      </div>\n                      <div class=\"col-md-12 col-lg-6\">\n                            <div class=\"titleblog\">\n                                    <h5>[Review] Love, Simon: Dễ Thương Và Ấm Áp</h5>\n                                    <div class=\"icon d-flex\">\n                                        <div class=\"likefb\">\n                                            <i class=\"far fa-thumbs-up\"></i>\n                                            <small>Thích 1</small>\n                                        </div>\n                                        <div class=\"view ml-2\">\n                                            <i class=\"fas fa-eye\"></i>       \n                                            <small>435</small>\n                                        </div>\n                                    </div>\n                                    <p>Love, Simon chắc chắn sẽ mang đến cho khán giả một câu chuyện tình yêu đồng tính...</p>\n                                  </div>\n                      </div>\n                  </div>\n                \n                </div>\n\n                <div class=\"d-flex blog\">\n                    <div class=\"row pr-0\">\n                        <div class=\"col-md-12 col-lg-6 pr-0 paddingright\">\n                                <img class=\"img-fluid\" src=\"../../../../../assets/images/mv5bmjqwntgxmtewnl5bml5banbnxkftztgwndc4mjkzntm--v1-sx1500-cr0-0-1500-999-al-_1524926872517.jpg\" alt=\"\">\n\n                        </div>\n                        <div class=\"col-md-12 col-lg-6\">\n                                <div class=\"titleblog\">\n                                        <h5>[Review] Avengers Infinity War: MCU Nay Đã Vượt Xa Các Vũ Trụ Điện Ảnh Khác</h5>\n                                        <div class=\"icon d-flex\">\n                                            <div class=\"likefb\">\n                                                <i class=\"far fa-thumbs-up\"></i>\n                                                <small>Thích 1</small>\n                                            </div>\n                                            <div class=\"view ml-2\">\n                                                <i class=\"fas fa-eye\"></i>       \n                                                <small>435</small>\n                                            </div>\n                                        </div>\n                                        <p>Năm 2012, không ai nghĩ The Avengers có thể thành công khi một bộ phim tận sáu...</p>\n                                      </div>\n                        </div>\n                    </div>\n                   \n                  </div>\n              \n          </div>\n\n\n\n\n\n          <div class=\"col-md-6\">\n              <h3>BLOG ĐIỆN ẢNH</h3>\n              <div class=\"d-flex blog\">\n                  <div class=\"row\">\n                      <div class=\"col-md-12 col-lg-6 pr-0 paddingright\">\n                            <img class=\"img-fluid\" src=\"../../../../../assets/images/deadpool-fox-marvel-01-0-0_1524215199595.jpg\" alt=\"\">\n\n                      </div>\n                      <div class=\"col-md-12 col-lg-6\">\n                            <div class=\"titleblog\">\n                                    <h5>\n                                        Bóc Phốt Trailer, Lật Mặt Deadpool</h5>\n                                    <div class=\"icon d-flex\">\n                                        <div class=\"likefb\">\n                                            <i class=\"far fa-thumbs-up\"></i>\n                                            <small>Thích 1</small>\n                                        </div>\n                                        <div class=\"view ml-2\">\n                                            <i class=\"fas fa-eye\"></i>       \n                                            <small>435</small>\n                                        </div>\n                                    </div>\n                                    <p>Deadpool 2 có gì hot? Có chứ, chỉ cần có Pool - Mọi thứ đều sẽ hot, cùng các bạn đón xem!</p>\n                                  </div>\n                      </div>\n                  </div>\n                 \n                </div>\n\n                <div class=\"d-flex blog\">\n                    <div class=\"row\">\n                        <div class=\"col-md-12 col-lg-6 pr-0 paddingright\">\n                                <img class=\"img-fluid\" src=\"../../../../../assets/images/deadpool2_1526374198507.jpg\" alt=\"\">\n                        </div>\n                        <div class=\"col-md-12 col-lg-6\">\n                                <div class=\"titleblog\">\n                                        <h5>\n                                            Kẻ Phản Diện Trong Deadpool 2: Cable, Hắn Là Ai?</h5>\n                                        <div class=\"icon d-flex\">\n                                            <div class=\"likefb\">\n                                                <i class=\"far fa-thumbs-up\"></i>\n                                                <small>Thích 1</small>\n                                            </div>\n                                            <div class=\"view ml-2\">\n                                                <i class=\"fas fa-eye\"></i>       \n                                                <small>435</small>\n                                            </div>\n                                        </div>\n                                        <p>Đến tận thời điểm này thì ai cũng biết kẻ phản diện trong “Deadpool 2” có tên là Cable...</p>\n                                      </div>\n                        </div>\n                    </div>\n                \n                  </div>\n\n                  <div class=\"d-flex blog\">\n                      <div class=\"row\">\n                          <div class=\"col-md-12 col-lg-6 pr-0 paddingright\">\n                                <img class=\"img-fluid\" src=\"../../../../../assets/images/lovesimon3_1525406149801.jpg\" alt=\"\">\n\n                          </div>\n                          <div class=\"col-md-12 col-lg-6\">\n                                <div class=\"titleblog\">\n                                        <h5>\n                                            Love, Simon: Bước Đột Phá Của Phim Đồng Tính</h5>\n                                        <div class=\"icon d-flex\">\n                                            <div class=\"likefb\">\n                                                <i class=\"far fa-thumbs-up\"></i>\n                                                <small>Thích 1</small>\n                                            </div>\n                                            <div class=\"view ml-2\">\n                                                <i class=\"fas fa-eye\"></i>       \n                                                <small>435</small>\n                                            </div>\n                                        </div>\n                                        <p>Love, Simon đã xuất hiện, đốn tim người xem mà không cần quan tâm tới những giải thưởng.</p>\n                                      </div>\n                          </div>\n                      </div>\n                   \n                    </div>\n          </div>\n\n      </div>  \n  </div>\n\n\n</div>"

/***/ }),

/***/ "./src/app/user/layout/trang-chu/news/news.component.scss":
/***/ (function(module, exports) {

module.exports = ".bodycontent {\n  background-attachment: scroll !important; }\n\n@-webkit-keyframes sk-cubemove {\n  25% {\n    -webkit-transform: translateX(12px) rotate(-90deg) scale(0.5); }\n  50% {\n    -webkit-transform: translateX(12px) translateY(12px) rotate(-180deg); }\n  75% {\n    -webkit-transform: translateX(0px) translateY(12px) rotate(-270deg) scale(0.5); }\n  100% {\n    -webkit-transform: rotate(-360deg); } }\n\n@keyframes sk-cubemove {\n  25% {\n    transform: translateX(12px) rotate(-90deg) scale(0.5);\n    -webkit-transform: translateX(12px) rotate(-90deg) scale(0.5); }\n  50% {\n    transform: translateX(12px) translateY(12px) rotate(-179deg);\n    -webkit-transform: translateX(12px) translateY(12px) rotate(-179deg); }\n  50.1% {\n    transform: translateX(12px) translateY(12px) rotate(-180deg);\n    -webkit-transform: translateX(12px) translateY(12px) rotate(-180deg); }\n  75% {\n    transform: translateX(0px) translateY(12px) rotate(-270deg) scale(0.5);\n    -webkit-transform: translateX(0px) translateY(12px) rotate(-270deg) scale(0.5); }\n  100% {\n    transform: rotate(-360deg);\n    -webkit-transform: rotate(-360deg); } }\n\ntextarea:focus,\ninput[type=\"text\"]:focus,\ninput[type=\"password\"]:focus,\ninput[type=\"datetime\"]:focus,\ninput[type=\"datetime-local\"]:focus,\ninput[type=\"date\"]:focus,\ninput[type=\"month\"]:focus,\ninput[type=\"time\"]:focus,\ninput[type=\"week\"]:focus,\ninput[type=\"number\"]:focus,\ninput[type=\"email\"]:focus,\ninput[type=\"url\"]:focus,\ninput[type=\"search\"]:focus,\ninput[type=\"tel\"]:focus,\ninput[type=\"color\"]:focus,\n.uneditable-input:focus {\n  border-color: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  outline: 0 none; }\n\na {\n  color: white; }\n\na:hover {\n  color: #81d8d0; }\n\n#news {\n  color: white;\n  padding-top: 60px;\n  padding-bottom: 60px; }\n\n#news .img {\n    position: relative; }\n\n#news .banner {\n    width: 100%; }\n\n.bgcover {\n  position: absolute;\n  background: #00000038;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  top: 0; }\n\nh3 {\n  margin-bottom: 30px !important;\n  padding-bottom: 7px;\n  display: inline-table;\n  margin: 0 auto;\n  position: relative; }\n\nh3::before {\n  content: '';\n  position: absolute;\n  width: 40px;\n  height: 2px;\n  background: #81d8d0;\n  top: -10px; }\n\n.blog {\n  margin-bottom: 15px; }\n\n.blog h5 {\n    color: white;\n    font-weight: 400;\n    font-size: 18px;\n    margin-bottom: 8px;\n    text-transform: capitalize;\n    display: block;\n    display: -webkit-box;\n    max-width: 100%;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    max-height: 58px;\n    line-height: 25px; }\n\n.blog p {\n    color: #8e959e;\n    margin-top: 17px; }\n\n.blog .icon {\n    font-size: 13px;\n    margin-top: 17px; }\n\n.blog .likefb {\n    background: #365899;\n    padding: 1px 8px;\n    border-radius: 4px; }\n\n.blog .view {\n    background: #5d5f63;\n    padding: 1px 8px;\n    border-radius: 4px; }\n\n@media (max-width: 414px) {\n  .blog img {\n    height: 160px;\n    margin-right: 0px;\n    width: 100%; }\n  .blog h5 {\n    margin-top: 13px; }\n  .blogdienanh {\n    margin-top: 30px; }\n  .paddingright {\n    padding-right: 15px !important; } }\n\n@media (max-width: 768px) {\n  .titleblog h5 {\n    margin-top: 10px; } }\n"

/***/ }),

/***/ "./src/app/user/layout/trang-chu/news/news.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewsComponent = /** @class */ (function () {
    function NewsComponent() {
    }
    NewsComponent.prototype.ngOnInit = function () {
    };
    NewsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-news',
            template: __webpack_require__("./src/app/user/layout/trang-chu/news/news.component.html"),
            styles: [__webpack_require__("./src/app/user/layout/trang-chu/news/news.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NewsComponent);
    return NewsComponent;
}());



/***/ }),

/***/ "./src/app/user/layout/trang-chu/slide-banner/slide-banner.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"mySlider\" class=\"carousel slide\" data-ride=\"carousel\">\n  <!-- Indicators -->\n  <ul class=\"carousel-indicators\">\n    <li data-target=\"#mySlider\" data-slide-to=\"0\" class=\"active\"></li>\n    <li data-target=\"#mySlider\" data-slide-to=\"1\"></li>\n    <li data-target=\"#mySlider\" data-slide-to=\"2\"></li>\n  </ul>\n\n  <!-- The slideshow -->\n  <div class=\"carousel-inner\">\n    <!-- <div class=\"carousel-item active\">\n      <img src=\"../../../../../assets/images/1.jpg\" alt=\"1\">\n    </div>\n    <div class=\"carousel-item\">\n      <img src=\"../../../../../assets/images/2.jpg\" alt=\"2\">\n    </div> -->\n    <div class=\"carousel-item active\">\n      <img src=\"../../../../../assets/images/4.jpg\" alt=\"3\">\n    </div>\n    <div class=\"carousel-item\">\n      <img src=\"../../../../../assets/images/5.jpg\" alt=\"4\">\n    </div>\n  </div>\n\n  <!-- Left and right controls -->\n  <a class=\"carousel-control-prev\" href=\"#mySlider\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\"></span>\n  </a>\n  <a class=\"carousel-control-next\" href=\"#mySlider\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon\"></span>\n  </a>\n\n</div>"

/***/ }),

/***/ "./src/app/user/layout/trang-chu/slide-banner/slide-banner.component.scss":
/***/ (function(module, exports) {

module.exports = "/* Make the image fully responsive */\n.carousel-inner img {\n  width: 100%;\n  height: auto;\n  max-height: 700px; }\n.carousel-indicators {\n  bottom: 40px; }\n"

/***/ }),

/***/ "./src/app/user/layout/trang-chu/slide-banner/slide-banner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlideBannerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SlideBannerComponent = /** @class */ (function () {
    function SlideBannerComponent() {
    }
    SlideBannerComponent.prototype.ngOnInit = function () {
    };
    SlideBannerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-slide-banner',
            template: __webpack_require__("./src/app/user/layout/trang-chu/slide-banner/slide-banner.component.html"),
            styles: [__webpack_require__("./src/app/user/layout/trang-chu/slide-banner/slide-banner.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SlideBannerComponent);
    return SlideBannerComponent;
}());



/***/ }),

/***/ "./src/app/user/layout/trang-chu/slide-list-movie/slide-list-movie.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"SlideListMovie\">\n\n\n  <div class=\"container\">\n    <!-- Nav pills -->\n    <ul class=\"nav nav-pills\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link active linkDangChieu\" data-toggle=\"pill\" href=\"#dangchieu\">PHIM ĐANG\n          CHIẾU</a>\n      </li>\n      <li class=\"nav-item nav2\">\n        <a class=\"nav-link linkSapChieu\" data-toggle=\"pill\" href=\"#sapchieu\" (click)=\"activeSlide()\">PHIM SẮP CHIẾU</a>\n      </li>\n      <li lass=\"line\">\n\n      </li>\n\n    </ul>\n\n\n    <!-- Tab panes -->\n    <div class=\"tab-content\">\n      <div class=\"tab-pane active\" id=\"dangchieu\">\n        <div class=\"dangchieu\">\n\n          <!-- <owl-carousel [options]=\"customOptions\" [items]=\"images\" [carouselClasses]=\"['owl-theme','sliding']\">\n            <div> <img src=\"../../../../../assets/images/1.jpg\" class=\"img-fluid\">\n            </div>\n            <div> <img src=\"../../../../../assets/images/2.jpg\" class=\"img-fluid\">\n            </div>\n            <div> <img src=\"../../../../../assets/images/3.jpg\" class=\"img-fluid\">\n            </div>\n            <div> <img src=\"../../../../../assets/images/4.jpg\" class=\"img-fluid\">\n            </div>\n            <div> <img src=\"../../../../../assets/images/5.jpg\" class=\"img-fluid\">\n            </div>\n          </owl-carousel> -->\n          <ng-container *ngIf=\"DanhSachPhimDangChieu.length > 0\"> \n\n            <owl-carousel #owlElement [options]=\"customOptions\" [items]=\"images\" [carouselClasses]=\"['owl-theme','sliding']\">\n              <div class=\"imgMovie\" *ngFor=\"let phim of DanhSachPhimDangChieu\">\n                <div class=\"imageHover\">\n                  <img src=\"../../../../../assets/images/{{phim.Image}}\" [alt]=\"phim.Title\" class=\"img-fluid\">\n                  <div class=\"overplay\">\n                    <button type=\"button\" class=\"chitietphim\" data-toggle=\"modal\" data-target=\"#myModal\" (click)=\"thongtin(phim.Title,phim.TrailerURI)\">Trailer</button>\n                    <button type=\"button\" class=\"datve\" (click)=\"XemChiTiet(phim.ID,MaNhom)\" appAniHover>Đặt Vé</button>\n                  </div>\n                </div>\n                <div class=\"d-flex\">\n                  <h5 class=\"mt-3 mb-0 title\">{{phim.Title}}</h5>\n                </div>\n                <div class=\"d-flex\">\n                  <div class=\"ok1\">\n                    <span class=\"imdb\">IMDB</span>\n                    <span class=\"diem pl-1\">8.0</span>\n                  </div>\n                  <div class=\"ok2 ml-3\">\n                    <span class=\"time\">\n                      <i class=\"fas fa-clock\"></i>\n                    </span>\n                    <span class=\"thoigian pl-1\">1h 50min</span>\n                  </div>\n                </div>\n              </div>\n            </owl-carousel>\n          </ng-container> -->\n\n\n        </div>\n      </div>\n\n      <div class=\"tab-pane container\" id=\"sapchieu\">\n        <div class=\"sapchieu\">\n          <ng-container *ngIf=\"check === true\">\n            <owl-carousel [options]=\"customOptions\" [items]=\"images\" [carouselClasses]=\"['owl-theme','sliding']\">\n              <div class=\"imgMovie\" *ngFor=\"let phim of DanhSachPhimSapChieu\">\n                <div class=\"imageHover\">\n                  <img src=\"../../../../../assets/images/{{phim.Image}}\" [alt]=\"phim.Title\" class=\"img-fluid\">\n                  <div class=\"overplay\">\n                    <button type=\"button\" class=\"datve\" (click)=\"XemChiTiet(phim.ID,MaNhom)\" appAniHover>Đặt Vé</button>\n                    <button type=\"button\" class=\"chitietphim\" data-toggle=\"modal\" data-target=\"#myModal\" (click)=\"thongtin(phim.Title,phim.TrailerURI)\">Trailer</button>\n                  </div>\n                </div>\n                <div class=\"d-flex\">\n                  <h5 class=\"mt-3 mb-0 title\">{{phim.Title}}</h5>\n                </div>\n                <div class=\"d-flex\">\n                  <div class=\"ok1\">\n                    <span class=\"imdb\">IMDB</span>\n                    <span class=\"diem pl-1\">8.0</span>\n                  </div>\n                  <div class=\"ok2 ml-3\">\n                    <span class=\"time\">\n                      <i class=\"fas fa-clock\"></i>\n                    </span>\n                    <span class=\"thoigian pl-1\">1h 50min</span>\n                  </div>\n                </div>\n              </div>\n            </owl-carousel>\n          </ng-container>\n        </div>\n      </div>\n\n\n\n      <!-- The Modal -->\n      <div class=\"modal fade\" id=\"myModal\">\n        <div class=\"modal-dialog\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n\n\n            <!-- Modal body -->\n            <div class=\"modal-body\">\n\n\n              <iframe class=\"video\" *ngIf=\"urlPhim != null\" height=\"600px\" width=\"100%\" [src]=\"urlPhim\">\n              </iframe>\n\n            </div>\n\n            <!-- Modal footer -->\n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\n            </div>\n\n          </div>\n        </div>\n      </div>\n\n\n\n    </div>\n\n  </div>"

/***/ }),

/***/ "./src/app/user/layout/trang-chu/slide-list-movie/slide-list-movie.component.scss":
/***/ (function(module, exports) {

module.exports = ".bodycontent {\n  background-attachment: scroll !important; }\n\n@-webkit-keyframes sk-cubemove {\n  25% {\n    -webkit-transform: translateX(12px) rotate(-90deg) scale(0.5); }\n  50% {\n    -webkit-transform: translateX(12px) translateY(12px) rotate(-180deg); }\n  75% {\n    -webkit-transform: translateX(0px) translateY(12px) rotate(-270deg) scale(0.5); }\n  100% {\n    -webkit-transform: rotate(-360deg); } }\n\n@keyframes sk-cubemove {\n  25% {\n    transform: translateX(12px) rotate(-90deg) scale(0.5);\n    -webkit-transform: translateX(12px) rotate(-90deg) scale(0.5); }\n  50% {\n    transform: translateX(12px) translateY(12px) rotate(-179deg);\n    -webkit-transform: translateX(12px) translateY(12px) rotate(-179deg); }\n  50.1% {\n    transform: translateX(12px) translateY(12px) rotate(-180deg);\n    -webkit-transform: translateX(12px) translateY(12px) rotate(-180deg); }\n  75% {\n    transform: translateX(0px) translateY(12px) rotate(-270deg) scale(0.5);\n    -webkit-transform: translateX(0px) translateY(12px) rotate(-270deg) scale(0.5); }\n  100% {\n    transform: rotate(-360deg);\n    -webkit-transform: rotate(-360deg); } }\n\ntextarea:focus,\ninput[type=\"text\"]:focus,\ninput[type=\"password\"]:focus,\ninput[type=\"datetime\"]:focus,\ninput[type=\"datetime-local\"]:focus,\ninput[type=\"date\"]:focus,\ninput[type=\"month\"]:focus,\ninput[type=\"time\"]:focus,\ninput[type=\"week\"]:focus,\ninput[type=\"number\"]:focus,\ninput[type=\"email\"]:focus,\ninput[type=\"url\"]:focus,\ninput[type=\"search\"]:focus,\ninput[type=\"tel\"]:focus,\ninput[type=\"color\"]:focus,\n.uneditable-input:focus {\n  border-color: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  outline: 0 none; }\n\na {\n  color: white; }\n\na:hover {\n  color: #81d8d0; }\n\n.modal-dialog {\n  width: 98%;\n  margin: 4px; }\n\nbutton.close {\n  font-size: 33px; }\n\n.modal-content {\n  background: none; }\n\n.modal-body {\n  padding: 0 !important; }\n\n.modal-header {\n  border: 0; }\n\nbutton.close {\n  text-shadow: none;\n  color: white;\n  font-size: 40px;\n  background: none;\n  opacity: 1;\n  z-index: 1000;\n  margin-top: -40px; }\n\n.modal-footer {\n  border-top: none; }\n\n.video {\n  border: 1px solid black; }\n\na {\n  -webkit-transition: all .2s linear;\n  transition: all .2s linear; }\n\nimg {\n  width: 100%;\n  height: 350px; }\n\na:hover {\n  color: #81d8d0; }\n\n#SlideListMovie {\n  background: #1a202c;\n  padding-top: 60px;\n  padding-bottom: 60px;\n  padding-bottom: 0; }\n\n.nav {\n  margin-bottom: 30px !important;\n  font-size: 1.35em;\n  font-weight: 500;\n  line-height: 1.2; }\n\n.nav-link {\n  padding: 0;\n  font-size: 20px; }\n\n.nav-pills .nav-link.active, .nav-pills .show > .nav-link {\n  background: none;\n  border-radius: 0;\n  padding-bottom: 7px;\n  position: relative; }\n\n.nav-item {\n  position: relative;\n  margin: .5rem 0;\n  margin-right: 30px; }\n\n.linkDangChieu.active::before {\n  content: '';\n  position: absolute;\n  width: 40px;\n  height: 2px;\n  background: #81d8d0;\n  top: -10px; }\n\n.linkSapChieu.active::before {\n  content: '';\n  position: absolute;\n  width: 40px;\n  height: 2px;\n  background: #81d8d0;\n  top: -10px; }\n\n.imgMovie {\n  color: white; }\n\nh5 {\n  font-size: 1.20rem; }\n\n.imageHover {\n  position: relative; }\n\n.overplay {\n  -webkit-transition: all .3s ease-in-out;\n  transition: all .3s ease-in-out;\n  position: absolute;\n  opacity: 0;\n  top: 0;\n  max-width: 100%;\n  max-height: 100%;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.85); }\n\n.overplay:hover {\n  opacity: 1; }\n\nbutton {\n  cursor: pointer; }\n\nbutton.chitietphim {\n  position: absolute;\n  top: calc(48% + 70px);\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  width: 65%;\n  text-decoration: none;\n  display: inline-block;\n  position: relative;\n  text-align: center;\n  color: white;\n  border: 1px solid #81d8d0;\n  -webkit-box-shadow: 0 0 0 0 transparent;\n          box-shadow: 0 0 0 0 transparent;\n  -webkit-transition: all 0.2s ease-in;\n  transition: all 0.2s ease-in;\n  background: none;\n  padding: 10px 30px;\n  border: none;\n  color: white;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  border: 2px solid #81d8d0; }\n\nbutton.chitietphim:hover {\n    color: white;\n    background-color: #81d8d0;\n    -webkit-transition: all 0.2s ease-out;\n    transition: all 0.2s ease-out; }\n\nbutton.chitietphim:hover:before {\n      -webkit-animation: shine 0.5s 0s linear;\n              animation: shine 0.5s 0s linear; }\n\nbutton.chitietphim:active {\n    -webkit-box-shadow: 0 0 0 0 transparent;\n            box-shadow: 0 0 0 0 transparent;\n    -webkit-transition: -webkit-box-shadow 0.2s ease-in;\n    transition: -webkit-box-shadow 0.2s ease-in;\n    transition: box-shadow 0.2s ease-in;\n    transition: box-shadow 0.2s ease-in, -webkit-box-shadow 0.2s ease-in; }\n\nbutton.chitietphim:before {\n    content: '';\n    display: block;\n    width: 0px;\n    height: 86%;\n    position: absolute;\n    top: 7%;\n    left: 0%;\n    opacity: 0;\n    background: white;\n    -webkit-box-shadow: 0 0 15px 3px white;\n            box-shadow: 0 0 15px 3px white;\n    -webkit-transform: skewX(-20deg);\n            transform: skewX(-20deg); }\n\n@-webkit-keyframes shine {\n  from {\n    opacity: 0;\n    left: 0%; }\n  50% {\n    opacity: 1; }\n  to {\n    opacity: 0;\n    left: 100%; } }\n\n@keyframes shine {\n  from {\n    opacity: 0;\n    left: 0%; }\n  50% {\n    opacity: 1; }\n  to {\n    opacity: 0;\n    left: 100%; } }\n\nbutton.datve {\n  background: #ea1c47;\n  position: absolute;\n  top: 48%;\n  left: 18%;\n  width: 65%;\n  border: 2px solid #ea1c47;\n  color: white;\n  padding: 6px 0; }\n\n.ok1, .ok2 {\n  font-size: 75%;\n  padding-top: 10px; }\n\n.imdb {\n  padding: 1px 4px;\n  background: #8e959e;\n  height: 19px;\n  color: #1a202c;\n  font-weight: 700;\n  margin-top: 16px; }\n\n.time {\n  color: silver; }\n\n.fas {\n  color: #8e959e; }\n\n@media (max-width: 1024px) {\n  .imageHover img {\n    height: 320px; } }\n\n/* Modal */\n\n@media (min-width: 576px) {\n  .modal-dialog {\n    max-width: 1000px;\n    margin: 1.75rem auto; } }\n\n@media (max-width: 414px) {\n  .modal-content {\n    height: 658px; }\n  #SlideListMovie {\n    padding-top: 40px; }\n  .tab-content {\n    margin-left: 9px; }\n  .imgMovie {\n    padding-right: 0;\n    margin-bottom: 0; }\n  .nav-item {\n    margin-right: 0;\n    width: 50%;\n    text-align: center; }\n  .nav-link {\n    font-size: 16px; } }\n\n@media (max-width: 414px) {\n  .imageHover img {\n    height: 250px;\n    width: 100%; } }\n"

/***/ }),

/***/ "./src/app/user/layout/trang-chu/slide-list-movie/slide-list-movie.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlideListMovieComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_movie_service__ = __webpack_require__("./src/app/Services/movie.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__const_data__ = __webpack_require__("./src/app/const/data.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var SlideListMovieComponent = /** @class */ (function () {
    function SlideListMovieComponent(servicePhim, router, doom) {
        this.servicePhim = servicePhim;
        this.router = router;
        this.doom = doom;
        // private MaNhom: string = 'GP07';
        //url hinh anh
        //Đối tượng nhận dữ liệu trả về khi gọi đến server
        this.DanhSachPhimDangChieu = __WEBPACK_IMPORTED_MODULE_4__const_data__["a" /* DanhSachPhimDangChieu */];
        this.DanhSachPhimSapChieu = __WEBPACK_IMPORTED_MODULE_4__const_data__["b" /* DanhSachPhimSapChieu */];
        this.check = false;
        this.customOptions = {
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
        };
    }
    SlideListMovieComponent.prototype.ngOnInit = function () {
        // this.GetPhim();
        var arrPhim = this.DanhSachPhimDangChieu.concat(this.DanhSachPhimSapChieu);
        this.SetStorage(arrPhim);
    };
    SlideListMovieComponent.prototype.activeSlide = function () {
        this.check = true;
    };
    SlideListMovieComponent.prototype.promiseFunc = function (func) {
        return new Promise(function (resolve, reject) {
            func.subscribe(function (result) {
                resolve(result);
            });
        });
    };
    SlideListMovieComponent.prototype.GetPhim = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    SlideListMovieComponent.prototype.XemChiTiet = function (phimID, groupID) {
        this.router.navigate(['Home/ChiTietPhim'], {
            queryParams: {
                id: phimID
            }
        });
    };
    SlideListMovieComponent.prototype.thongtin = function (title, url) {
        url = url.replace("watch?v=", "embed/");
        this.tenphim = title;
        this.urlPhim = this.doom.bypassSecurityTrustResourceUrl(url);
    };
    SlideListMovieComponent.prototype.SetStorage = function (result) {
        localStorage.removeItem("DanhSachPhim");
        localStorage.setItem("DanhSachPhim", JSON.stringify(result));
    };
    SlideListMovieComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-slide-list-movie',
            template: __webpack_require__("./src/app/user/layout/trang-chu/slide-list-movie/slide-list-movie.component.html"),
            styles: [__webpack_require__("./src/app/user/layout/trang-chu/slide-list-movie/slide-list-movie.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Services_movie_service__["a" /* MovieService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */]])
    ], SlideListMovieComponent);
    return SlideListMovieComponent;
}());



/***/ }),

/***/ "./src/app/user/layout/trang-chu/trang-chu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"trangchu\">\n        <app-slide-banner></app-slide-banner>\n        <app-slide-list-movie></app-slide-list-movie>\n        <!-- <app-group-cinema></app-group-cinema> -->\n        <app-news></app-news>\n        <app-events></app-events>\n        \n        <div class=\"fixed-bottom booking\">\n                <app-quick-book></app-quick-book>\n        </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/user/layout/trang-chu/trang-chu.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/layout/trang-chu/trang-chu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrangChuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TrangChuComponent = /** @class */ (function () {
    function TrangChuComponent() {
    }
    TrangChuComponent.prototype.ngOnInit = function () {
        $("#myNav").show();
        $("#logoMovie").show();
        $("#Footer").show();
        $(".ThanhToan").show();
        $(".ThanhToan2").show();
    };
    TrangChuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-trang-chu',
            template: __webpack_require__("./src/app/user/layout/trang-chu/trang-chu.component.html"),
            styles: [__webpack_require__("./src/app/user/layout/trang-chu/trang-chu.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TrangChuComponent);
    return TrangChuComponent;
}());



/***/ }),

/***/ "./src/app/user/layout/trang-dat-ve/chon-so-luong-ve/chon-so-luong-ve.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"chonSoLuong\">\n    <div class=\"ok\">\n\n        <div class=\"SoLuongVe\">\n        <table>\n            <tr class=\"clearfix\">\n                <td class=\"td1\">               \n                     <label class=\"text-center\">Vé người lớn</label><br>\n                     <small>(Vé 2D)</small>\n                </td>\n                <td class=\"td2\">                \n                    <label class=\"giatien1\">{{GiaVe}}.000</label>\n                </td>\n                <td class=\"float-right\"> \n                    <div class=\"count1 d-flex\">\n                        <i class=\"fas fa-minus giamsl1 pt-2\" (click)=\"giamsl1()\"></i>\n                        <input class=\"countnumber1\" type=\"number\" disabled [value]=\"SoLuongVe\">\n                        <i class=\"fas fa-plus tangsl1 pt-2\" (click)=\"tangsl1()\"></i>\n                    </div>\n                </td>\n            </tr>\n        </table> \n        </div>\n\n        <div class=\"SoLuongCombo mt-5\">\n       <table>\n           <tr class=\"clearfix\">\n                <td class=\"td1\">\n                    <label class=\"text-center\">Combo 1</label><br>\n                    <small>(1 Bắp + 1 Nước)</small>\n                </td>\n                <td class=\"td2\">\n                    <label class=\"giatien2\">{{GiaCombo}}.000</label>\n                </td>\n                <td class=\"float-right\">\n                        <div class=\"count2 d-flex\">\n                                <i class=\"fas fa-minus giamsl2 pt-2\" (click)=\"giamsl2()\"></i>\n                                <input class=\"countnumber2\" type=\"number\" disabled [value]=\"SoLuongCombo\">\n                                <i class=\"fas fa-plus tangsl2 pt-2\" (click)=\"tangsl2()\"></i>\n                        </div>\n                </td>\n           </tr>\n       </table>\n            \n        </div>\n\n    </div>\n\n\n    <div class=\"mt-5\">\n        <button class=\"btnclick mt-2\" (click)='next()'>Chọn Ghế <i class=\"fas fa-arrow-right ml-2 arrow\"></i></button>\n    </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/user/layout/trang-dat-ve/chon-so-luong-ve/chon-so-luong-ve.component.scss":
/***/ (function(module, exports) {

module.exports = ".bodycontent {\n  background-attachment: scroll !important; }\n\n@-webkit-keyframes sk-cubemove {\n  25% {\n    -webkit-transform: translateX(12px) rotate(-90deg) scale(0.5); }\n  50% {\n    -webkit-transform: translateX(12px) translateY(12px) rotate(-180deg); }\n  75% {\n    -webkit-transform: translateX(0px) translateY(12px) rotate(-270deg) scale(0.5); }\n  100% {\n    -webkit-transform: rotate(-360deg); } }\n\n@keyframes sk-cubemove {\n  25% {\n    transform: translateX(12px) rotate(-90deg) scale(0.5);\n    -webkit-transform: translateX(12px) rotate(-90deg) scale(0.5); }\n  50% {\n    transform: translateX(12px) translateY(12px) rotate(-179deg);\n    -webkit-transform: translateX(12px) translateY(12px) rotate(-179deg); }\n  50.1% {\n    transform: translateX(12px) translateY(12px) rotate(-180deg);\n    -webkit-transform: translateX(12px) translateY(12px) rotate(-180deg); }\n  75% {\n    transform: translateX(0px) translateY(12px) rotate(-270deg) scale(0.5);\n    -webkit-transform: translateX(0px) translateY(12px) rotate(-270deg) scale(0.5); }\n  100% {\n    transform: rotate(-360deg);\n    -webkit-transform: rotate(-360deg); } }\n\ntextarea:focus,\ninput[type=\"text\"]:focus,\ninput[type=\"password\"]:focus,\ninput[type=\"datetime\"]:focus,\ninput[type=\"datetime-local\"]:focus,\ninput[type=\"date\"]:focus,\ninput[type=\"month\"]:focus,\ninput[type=\"time\"]:focus,\ninput[type=\"week\"]:focus,\ninput[type=\"number\"]:focus,\ninput[type=\"email\"]:focus,\ninput[type=\"url\"]:focus,\ninput[type=\"search\"]:focus,\ninput[type=\"tel\"]:focus,\ninput[type=\"color\"]:focus,\n.uneditable-input:focus {\n  border-color: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  outline: 0 none; }\n\na {\n  color: white; }\n\na:hover {\n  color: #81d8d0; }\n\n.disable {\n  cursor: no-drop;\n  opacity: 0.5; }\n\n#SoLuongVeDat {\n  max-width: 900px;\n  border: 1px solid #8e959e;\n  margin: 0 auto; }\n\n#chonSoLuong {\n  margin-top: 25px; }\n\n#chonSoLuong .ok {\n    border-top: 1px solid rgba(204, 204, 204, 0.18);\n    border-bottom: 1px solid rgba(204, 204, 204, 0.18);\n    padding: 35px 0; }\n\n.countnumber1, .countnumber2 {\n  width: 40px;\n  padding-left: 10px;\n  margin: 0 10px; }\n\ntable {\n  width: 100%; }\n\ntable .td1 {\n    width: 50%; }\n\ntable .td2 {\n    width: 30%; }\n\n.SoLuongVe small, .SoLuongCombo small {\n  color: #8e959e; }\n\n.giatien1, .giatien2 {\n  color: #81d8d0; }\n\n.giamsl1, .tangsl1, .giamsl2, .tangsl2 {\n  cursor: pointer; }\n\n.btnclick {\n  background: #ea1c47;\n  padding: 10px 30px;\n  border: none;\n  color: white;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  cursor: pointer;\n  opacity: 0.8;\n  -webkit-transition: all 0.2s linear;\n  transition: all 0.2s linear; }\n\n.arrow {\n  position: relative; }\n\n.animRun {\n  -webkit-animation: run 0.7s linear infinite;\n          animation: run 0.7s linear infinite; }\n\n@-webkit-keyframes run {\n  0% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); }\n  50% {\n    -webkit-transform: translateX(10px);\n            transform: translateX(10px); }\n  100% {\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px); } }\n\n@keyframes run {\n  0% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); }\n  50% {\n    -webkit-transform: translateX(10px);\n            transform: translateX(10px); }\n  100% {\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px); } }\n\n.btnclick:hover {\n  opacity: 1; }\n\n.disable {\n  pointer-events: none;\n  opacity: 0.4; }\n\n@media (max-width: 1024px) {\n  .count1, .count2 {\n    margin-top: 6px; } }\n"

/***/ }),

/***/ "./src/app/user/layout/trang-dat-ve/chon-so-luong-ve/chon-so-luong-ve.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChonSoLuongVeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_movie_service__ = __webpack_require__("./src/app/Services/movie.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChonSoLuongVeComponent = /** @class */ (function () {
    function ChonSoLuongVeComponent(movieService, activatedRoute) {
        this.movieService = movieService;
        this.activatedRoute = activatedRoute;
        this.SoLuongVe = 0;
        this.SoLuongCombo = 0;
        this.GiaVe = 85;
        this.GiaCombo = 40;
        this.LaySoLuongVe = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.LaySoLuongCombo = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ChonSoLuongVeComponent.prototype.ngOnInit = function () {
        $(".btnclick").addClass("disable");
        this.SetThamSo();
        this.GetDanhSachGhe();
        this.GetImage();
        this.DisableClick();
    };
    ChonSoLuongVeComponent.prototype.next = function () {
        $(".ThanhToan").show();
        $(".menu2").removeClass("disable");
        $(".menu2").trigger("click");
        this.TimeLeft();
    };
    ChonSoLuongVeComponent.prototype.TimeLeft = function () {
        // Clear all timeout
        var id = window.setTimeout(function () { }, 0);
        while (id--) {
            window.clearTimeout(id);
        }
        // Time Left
        countdown(5);
        function countdown(minutes) {
            var seconds = 60;
            var mins = minutes;
            tick();
            function tick() {
                var counter = $("#counter");
                var current_minutes = mins - 1;
                seconds--;
                counter.text(current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds));
                if (seconds > 0) {
                    setTimeout(tick, 1000);
                }
                else {
                    if (mins > 1) {
                        countdown(mins - 1);
                    }
                }
            }
        }
    };
    ChonSoLuongVeComponent.prototype.tangsl1 = function () {
        this.SoLuongVe++;
        if (this.SoLuongVe >= 4) {
            $(".tangsl1").addClass("disable");
        }
        else {
            $(".tangsl1").removeClass("disable");
        }
        if (this.SoLuongVe == 0) {
            $(".giamsl1").addClass("disable");
            $(".btnclick").addClass("disable");
            $(".arrow").removeClass("animRun");
        }
        else {
            $(".giamsl1").removeClass("disable");
            $(".btnclick").removeClass("disable");
            $(".arrow").addClass("animRun");
        }
        this.LaySoLuongVe.emit(this.SoLuongVe);
    };
    ChonSoLuongVeComponent.prototype.giamsl1 = function () {
        this.SoLuongVe--;
        if (this.SoLuongVe >= 4) {
            $(".tangsl1").addClass("disable");
        }
        else {
            $(".tangsl1").removeClass("disable");
        }
        if (this.SoLuongVe == 0) {
            $(".giamsl1").addClass("disable");
            $(".btnclick").addClass("disable");
            $(".arrow").removeClass("animRun");
        }
        else {
            $(".giamsl1").removeClass("disable");
            $(".btnclick").removeClass("disable");
            $(".arrow").addClass("animRun");
        }
        this.LaySoLuongVe.emit(this.SoLuongVe);
    };
    ChonSoLuongVeComponent.prototype.tangsl2 = function () {
        this.SoLuongCombo++;
        if (this.SoLuongCombo >= 4) {
            $(".tangsl2").addClass("disable");
        }
        else {
            $(".tangsl2").removeClass("disable");
        }
        if (this.SoLuongCombo == 0) {
            $(".giamsl2").addClass("disable");
        }
        else {
            $(".giamsl2").removeClass("disable");
        }
        this.LaySoLuongCombo.emit(this.SoLuongCombo);
    };
    ChonSoLuongVeComponent.prototype.giamsl2 = function () {
        this.SoLuongCombo--;
        if (this.SoLuongCombo >= 4) {
            $(".tangsl2").addClass("disable");
        }
        else {
            $(".tangsl2").removeClass("disable");
        }
        if (this.SoLuongCombo == 0) {
            $(".giamsl2").addClass("disable");
        }
        else {
            $(".giamsl2").removeClass("disable");
        }
        this.LaySoLuongCombo.emit(this.SoLuongCombo);
    };
    ChonSoLuongVeComponent.prototype.SetThamSo = function () {
        var _this = this;
        this.paramsSub1 = this.activatedRoute.queryParams.subscribe(function (thamso) {
            _this.IDShowTime = thamso['idShow'];
            _this.IDMovie = thamso['idPhim'];
            _this.MaNhom = thamso['group'];
        });
    };
    ChonSoLuongVeComponent.prototype.GetDanhSachGhe = function () {
        var _this = this;
        // Lay danh sach ghe
        this.paramsSub2 = this.movieService.LayDanhSachGhe(this.IDShowTime).subscribe(function (result) {
            _this.dsGhe = result;
        }, function (error) {
            _this.dsGhe = error;
        });
    };
    ChonSoLuongVeComponent.prototype.GetImage = function () {
        //Lay Image phim
        // this.paramsSub3 = this.movieService.LayChiTietPhim_LichChieuTheoNhom(this.IDMovie, this.MaNhom).subscribe((result: any) => {
        //   this.MovieDetailImage = result;
        // }, error => {
        //   this.MovieDetailImage = error;
        // });
    };
    ChonSoLuongVeComponent.prototype.DisableClick = function () {
        // Disable click 
        if (this.SoLuongVe == 0 || this.SoLuongCombo == 0) {
            $(".giamsl1").addClass("disable");
            $(".giamsl2").addClass("disable");
        }
        else {
            $(".giamsl1").removeClass("disable");
            $(".giamsl2").removeClass("disable");
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ChonSoLuongVeComponent.prototype, "LaySoLuongVe", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ChonSoLuongVeComponent.prototype, "LaySoLuongCombo", void 0);
    ChonSoLuongVeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chon-so-luong-ve',
            template: __webpack_require__("./src/app/user/layout/trang-dat-ve/chon-so-luong-ve/chon-so-luong-ve.component.html"),
            styles: [__webpack_require__("./src/app/user/layout/trang-dat-ve/chon-so-luong-ve/chon-so-luong-ve.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Services_movie_service__["a" /* MovieService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], ChonSoLuongVeComponent);
    return ChonSoLuongVeComponent;
}());



/***/ }),

/***/ "./src/app/user/layout/trang-dat-ve/danh-sach-ghe/danh-sach-ghe.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"ChonGhe\">  \n\n    <!-- Man Hinh -->\n    <img class=\"screen\" src=\"../../../../../assets/images/Screen Shot 2018-04-29 at 4.58.59 PM.png\" alt=\"\">\n\n    <!-- Danh Sach Ghe -->\n    <div class=\"dsGhe\">\n        <div class=\"rowghe\">\n            <ng-container *ngIf=\"dsGhe != null\">\n            <div class=\"tungghe\" *ngFor=\"let ghe of dsGhe.Seats\">\n                            <app-ghe         \n                            (eventChonGhe)=\"ChonGheOutput($event,ghe.SeatName)\"\n                            [ghe]=\"ghe\"\n                            >\n                            </app-ghe><br/>\n            </div>\n            </ng-container>\n        </div>\n    </div>\n\n    <!-- Chu Thich  -->\n    <div class=\"clearfix\" id=\"chuthich\">\n            <div class=\"float-left d-flex mt-3 chuthich\">\n    \n                <div class=\"d-flex\">\n                        <p class=\"nut btnduocdat\"></p>\n                        <small>Đã Đặt</small>\n                </div>\n                <div class=\"ml-4 d-flex\">\n                        <p class=\"nut btndangtrong\"></p>\n                        <small>Đang Trống</small>\n                </div>\n                <div class=\"ml-4 d-flex\">\n                        <p class=\"nut btndangchon\"></p>\n                        <small>Đã Chọn</small>\n                </div>\n                \n            </div>\n            <div class=\"float-right\"> \n                <small class=\"timeleft\">Time Left</small><br>\n                <span class=\"ml-4 count\" id=\"counter\"></span>\n            </div>\n        </div>   \n</div>"

/***/ }),

/***/ "./src/app/user/layout/trang-dat-ve/danh-sach-ghe/danh-sach-ghe.component.scss":
/***/ (function(module, exports) {

module.exports = ".bodycontent {\n  background-attachment: scroll !important; }\n\n@-webkit-keyframes sk-cubemove {\n  25% {\n    -webkit-transform: translateX(12px) rotate(-90deg) scale(0.5); }\n  50% {\n    -webkit-transform: translateX(12px) translateY(12px) rotate(-180deg); }\n  75% {\n    -webkit-transform: translateX(0px) translateY(12px) rotate(-270deg) scale(0.5); }\n  100% {\n    -webkit-transform: rotate(-360deg); } }\n\n@keyframes sk-cubemove {\n  25% {\n    transform: translateX(12px) rotate(-90deg) scale(0.5);\n    -webkit-transform: translateX(12px) rotate(-90deg) scale(0.5); }\n  50% {\n    transform: translateX(12px) translateY(12px) rotate(-179deg);\n    -webkit-transform: translateX(12px) translateY(12px) rotate(-179deg); }\n  50.1% {\n    transform: translateX(12px) translateY(12px) rotate(-180deg);\n    -webkit-transform: translateX(12px) translateY(12px) rotate(-180deg); }\n  75% {\n    transform: translateX(0px) translateY(12px) rotate(-270deg) scale(0.5);\n    -webkit-transform: translateX(0px) translateY(12px) rotate(-270deg) scale(0.5); }\n  100% {\n    transform: rotate(-360deg);\n    -webkit-transform: rotate(-360deg); } }\n\ntextarea:focus,\ninput[type=\"text\"]:focus,\ninput[type=\"password\"]:focus,\ninput[type=\"datetime\"]:focus,\ninput[type=\"datetime-local\"]:focus,\ninput[type=\"date\"]:focus,\ninput[type=\"month\"]:focus,\ninput[type=\"time\"]:focus,\ninput[type=\"week\"]:focus,\ninput[type=\"number\"]:focus,\ninput[type=\"email\"]:focus,\ninput[type=\"url\"]:focus,\ninput[type=\"search\"]:focus,\ninput[type=\"tel\"]:focus,\ninput[type=\"color\"]:focus,\n.uneditable-input:focus {\n  border-color: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  outline: 0 none; }\n\na {\n  color: white; }\n\na:hover {\n  color: #81d8d0; }\n\n#ChonGhe {\n  margin-top: 40px;\n  margin-left: -11px; }\n\n.screen {\n  margin-top: 30px;\n  width: 100%; }\n\n.timeleft {\n  color: #8e959e; }\n\n.count {\n  color: #1cea2c; }\n\n.rowghe {\n  padding: 50px 20px;\n  width: 744px;\n  max-width: 744px;\n  margin: 0 auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n.dsGhe {\n  background: #1c222e;\n  width: 97%;\n  margin: 0 auto;\n  margin-top: 20px; }\n\n.nut {\n  background: none;\n  border: 1px solid #8e959e;\n  color: #8e959e;\n  padding: 7px; }\n\n.btndangtrong {\n  background: #8e959e; }\n\n.btndangchon {\n  background: #81d8d0;\n  border: 1px solid #81d8d0; }\n\n.chuthich small {\n  color: #8e959e;\n  margin-left: 12px;\n  margin-top: -1px; }\n\n#chuthich {\n  padding: 0 13px;\n  margin-top: 20px; }\n\n.tungghe {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 5px 5px; }\n\n@media (max-width: 1366px) {\n  .rowghe {\n    max-width: 616px;\n    width: 616px; } }\n\n@media (max-width: 1024px) {\n  .rowghe {\n    margin: 0 auto;\n    width: 507px; }\n  .tungghe {\n    width: 36px;\n    margin: 2px 5px; } }\n\n@media (max-width: 768px) {\n  .rowghe {\n    max-width: 100%;\n    width: 100%;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n  .tungghe {\n    width: 50px; } }\n\n@media (max-width: 414px) {\n  .rowghe {\n    margin: 0;\n    padding: 0; }\n  .tungghe {\n    width: 23px;\n    margin-bottom: 0; }\n  .chuthich {\n    width: 100%;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; } }\n\n@media (max-width: 375px) {\n  .tungghe {\n    margin-left: 4px !important;\n    width: 22px; } }\n\n@media (max-width: 320px) {\n  .rowghe {\n    margin: 0 auto; }\n  .tungghe {\n    width: 20px !important; } }\n\n@media (max-width: 360px) {\n  .tungghe {\n    width: 23px; }\n  .chuthich {\n    font-size: 65%; } }\n"

/***/ }),

/***/ "./src/app/user/layout/trang-dat-ve/danh-sach-ghe/danh-sach-ghe.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DanhSachGheComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_movie_service__ = __webpack_require__("./src/app/Services/movie.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Services_thong_bao_service__ = __webpack_require__("./src/app/Services/thong-bao.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__const_data__ = __webpack_require__("./src/app/const/data.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DanhSachGheComponent = /** @class */ (function () {
    function DanhSachGheComponent(movieService, activatedRoute, thongbao) {
        this.movieService = movieService;
        this.activatedRoute = activatedRoute;
        this.thongbao = thongbao;
        this.default_dsGhe = [];
        this.dsGhe = [];
        this.dsGheChon = [];
        this.dsGheDaDat = [];
        this.dsGheCheckSpace = [];
        this.duration = 60 * 5;
        this.stt = 0;
        this.tong = 0;
        this.checklength = 0;
        this.kebenphai2 = 0;
        this.kebentrai2 = 0;
        this.khoangcachtrai2 = 0;
        this.khoangcachphai2 = 0;
        this.kebenphaitrai = 0;
        this.hientai = 0;
        this.errors = true;
        this.ThongTinGhe = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.TrangThai = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.Loi = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    DanhSachGheComponent.prototype.ChonGheOutput = function (ghe) {
        var sove = this.SoLuongVe;
        if (ghe.selected == true) {
            if (this.dsGheChon.length >= sove) {
                var xoaghe_1 = this.dsGheChon.splice(0, 1);
                this.dsGhe.Seats.forEach(function (ghe) {
                    if (xoaghe_1[0].SeatName == ghe.SeatName) {
                        ghe.selected = false;
                    }
                });
            }
            this.dsGheChon.push(ghe);
        }
        else {
            for (var j = 0; j < this.dsGheChon.length; j++) {
                if (this.dsGheChon[j].SeatName == ghe.SeatName) {
                    this.dsGheChon.splice(j, 1);
                }
            }
        }
        this.CheckKhoangTrong();
        var objson = JSON.stringify(this.dsGheChon);
        this.ThongTinGhe.emit(objson);
    };
    DanhSachGheComponent.prototype.CheckKhoangTrong = function () {
        var errors = 0;
        var khoangcachphai = 0;
        var khoangcachtrai = 0;
        var loaitruoc;
        var sttloaitruoc;
        this.dsGheCheckSpace = [];
        for (var j = 0; j < this.dsGheDaDat.length; j++) {
            this.dsGheCheckSpace.push(this.dsGheDaDat[j]);
        }
        for (var i = 0; i < this.dsGheChon.length; i++) {
            this.dsGheCheckSpace.push(this.dsGheChon[i]);
        }
        this.dsGheCheckSpace.sort(function (a, b) { return a.NumOrder - b.NumOrder; });
        console.log(this.dsGheCheckSpace);
        for (var i = 0; i < this.dsGheCheckSpace.length; i++) {
            var stthientai = this.dsGheCheckSpace[i].SoThuTu;
            var loaihientai = this.dsGheCheckSpace[i].LoaiGhe;
            var tenghehientai = this.dsGheCheckSpace[i].SeatName;
            if (i == 0) {
                khoangcachphai = stthientai + 2;
                loaitruoc = this.dsGheCheckSpace[i].LoaiGhe;
                sttloaitruoc = stthientai;
                //Check lần đầu có khoảng trống đầu dãy
                if (stthientai == 2) {
                    errors = 2;
                }
            }
            else {
                khoangcachtrai = stthientai - 2;
                //Check khoảng trắng đầu mỗi dãy 
                if (loaihientai != loaitruoc) {
                    if (stthientai == 2) {
                        errors = 2;
                    }
                    if (sttloaitruoc == 9) {
                        errors = 2;
                    }
                    sttloaitruoc = stthientai;
                }
                else {
                    sttloaitruoc = stthientai;
                }
                //Check khoảng cách trái phải
                if (tenghehientai == loaitruoc + this.khoangcach(khoangcachphai)) {
                    khoangcachphai = stthientai + 2;
                    loaitruoc = loaihientai;
                    errors = 1;
                }
                else {
                    khoangcachphai = stthientai + 2;
                    loaitruoc = loaihientai;
                }
                if (stthientai == khoangcachtrai) {
                    errors = 1;
                }
            }
            if (i == this.dsGheCheckSpace.length - 1) {
                //Check lần đầu có khoảng trống cuối dãy
                if (stthientai == 9) {
                    errors = 2;
                }
                if (stthientai == 2) {
                    errors = 2;
                }
            }
        }
        if (errors == 1) {
            this.thongbao.Error("Không để 1 chỗ trống ở giữa!");
        }
        else if (errors == 2) {
            this.thongbao.Error("Không để 1 chỗ trống ở đầu dãy!");
        }
        else {
            this.thongbao.clear();
        }
        this.Loi.emit(errors);
    };
    DanhSachGheComponent.prototype.khoangcach = function (so) {
        if (so < 10) {
            return "0" + so;
        }
        else {
            return so;
        }
    };
    DanhSachGheComponent.prototype.SetThamSo = function () {
        var _this = this;
        //Lấy danh sach ghe  dựa vào 1 tham số
        this.paramsSub1 = this.activatedRoute.queryParams.subscribe(function (thamso) {
            _this.IDShowTime = thamso['idShow'];
        });
    };
    DanhSachGheComponent.prototype.GetDanhSachGhe = function () {
        var _this = this;
        // Lay danh sach ghe
        var ghengoi = JSON.parse(JSON.stringify(__WEBPACK_IMPORTED_MODULE_4__const_data__["c" /* GheNgoi */]));
        this.default_dsGhe = ghengoi.filter(function (x) { return x.ShowTimeID == _this.IDShowTime; })[0];
        // check ghe da dat
        if (localStorage.getItem("GheNgoiDaDat")) {
            var ghedadat = JSON.parse(localStorage.getItem("GheNgoiDaDat"));
            var dataGheDaDat = ghedadat.find(function (x) { return parseInt(x.ShowTimeID) === parseInt(_this.default_dsGhe.ShowTimeID); });
            var count = 0;
            if (dataGheDaDat) {
                var length_1 = dataGheDaDat.Seats.length;
                for (var _i = 0, _a = this.default_dsGhe.Seats; _i < _a.length; _i++) {
                    var val = _a[_i];
                    if (count !== length_1) {
                        for (var _b = 0, _c = dataGheDaDat.Seats; _b < _c.length; _b++) {
                            var val2 = _c[_b];
                            if (parseInt(val.NumOrder) === parseInt(val2.NumOrder)) {
                                val.Status = true;
                                count++;
                            }
                        }
                    }
                    else {
                        break;
                    }
                }
            }
        }
        this.default_dsGhe = JSON.stringify(this.default_dsGhe);
        this.dsGhe = JSON.parse(this.default_dsGhe);
        var sttA = 1;
        var sttB = 1;
        var sttC = 1;
        for (var i = 0; i < this.dsGhe.Seats.length; i++) {
            //Phan loai 
            var getString = this.dsGhe.Seats[i].SeatName.charAt(0);
            if (getString == "A") {
                this.dsGhe.Seats[i].LoaiGhe = "A";
                this.dsGhe.Seats[i].SoThuTu = sttA;
                sttA++;
            }
            if (getString == "B") {
                this.dsGhe.Seats[i].LoaiGhe = "B";
                this.dsGhe.Seats[i].SoThuTu = sttB;
                sttB++;
            }
            if (getString == "C") {
                this.dsGhe.Seats[i].LoaiGhe = "C";
                this.dsGhe.Seats[i].SoThuTu = sttC;
                sttC++;
            }
            //Check ghe da dat
            if (this.dsGhe.Seats[i].Status === true) {
                this.dsGheDaDat.push(this.dsGhe.Seats[i]);
            }
        }
        // console.log("DSG_DaDat: ", this.dsGheDaDat);
        // console.log("DSG_ChuaDat: ", this.dsGhe);
        // console.log("Default: ", result)
    };
    DanhSachGheComponent.prototype.ngOnInit = function () {
        // console.log(GheNgoi)
        this.SetThamSo();
        this.GetDanhSachGhe();
    };
    DanhSachGheComponent.prototype.ngOnChanges = function () {
        if (this.flag > 0) {
            this.dsGhe = JSON.parse(this.default_dsGhe);
            this.dsGheChon = [];
            this.dsGheCheckSpace = [];
        }
    };
    DanhSachGheComponent.prototype.ngOnDestroy = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], DanhSachGheComponent.prototype, "ThongTinGhe", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], DanhSachGheComponent.prototype, "TrangThai", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], DanhSachGheComponent.prototype, "Loi", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], DanhSachGheComponent.prototype, "SoLuongVe", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], DanhSachGheComponent.prototype, "flag", void 0);
    DanhSachGheComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-danh-sach-ghe',
            template: __webpack_require__("./src/app/user/layout/trang-dat-ve/danh-sach-ghe/danh-sach-ghe.component.html"),
            styles: [__webpack_require__("./src/app/user/layout/trang-dat-ve/danh-sach-ghe/danh-sach-ghe.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Services_movie_service__["a" /* MovieService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__Services_thong_bao_service__["a" /* ThongBaoService */]])
    ], DanhSachGheComponent);
    return DanhSachGheComponent;
}());



/***/ }),

/***/ "./src/app/user/layout/trang-dat-ve/danh-sach-ghe/ghe/ghe.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"ghe.Status===true; else GheChuaDat\">\n    <button disabled style=\"cursor: no-drop;\" class=\"ghe duocdat\"><small>{{ghe.SeatName}}</small></button>\n</ng-container>\n\n\n<ng-template #GheChuaDat>\n    <button (click)=\"ChonGhe()\" class=\"ghe\" [ngClass]=\"{dachon:ghe.selected}\"><small>{{ghe.SeatName}}</small></button>\n</ng-template>"

/***/ }),

/***/ "./src/app/user/layout/trang-dat-ve/danh-sach-ghe/ghe/ghe.component.scss":
/***/ (function(module, exports) {

module.exports = ".bodycontent {\n  background-attachment: scroll !important; }\n\n@-webkit-keyframes sk-cubemove {\n  25% {\n    -webkit-transform: translateX(12px) rotate(-90deg) scale(0.5); }\n  50% {\n    -webkit-transform: translateX(12px) translateY(12px) rotate(-180deg); }\n  75% {\n    -webkit-transform: translateX(0px) translateY(12px) rotate(-270deg) scale(0.5); }\n  100% {\n    -webkit-transform: rotate(-360deg); } }\n\n@keyframes sk-cubemove {\n  25% {\n    transform: translateX(12px) rotate(-90deg) scale(0.5);\n    -webkit-transform: translateX(12px) rotate(-90deg) scale(0.5); }\n  50% {\n    transform: translateX(12px) translateY(12px) rotate(-179deg);\n    -webkit-transform: translateX(12px) translateY(12px) rotate(-179deg); }\n  50.1% {\n    transform: translateX(12px) translateY(12px) rotate(-180deg);\n    -webkit-transform: translateX(12px) translateY(12px) rotate(-180deg); }\n  75% {\n    transform: translateX(0px) translateY(12px) rotate(-270deg) scale(0.5);\n    -webkit-transform: translateX(0px) translateY(12px) rotate(-270deg) scale(0.5); }\n  100% {\n    transform: rotate(-360deg);\n    -webkit-transform: rotate(-360deg); } }\n\ntextarea:focus,\ninput[type=\"text\"]:focus,\ninput[type=\"password\"]:focus,\ninput[type=\"datetime\"]:focus,\ninput[type=\"datetime-local\"]:focus,\ninput[type=\"date\"]:focus,\ninput[type=\"month\"]:focus,\ninput[type=\"time\"]:focus,\ninput[type=\"week\"]:focus,\ninput[type=\"number\"]:focus,\ninput[type=\"email\"]:focus,\ninput[type=\"url\"]:focus,\ninput[type=\"search\"]:focus,\ninput[type=\"tel\"]:focus,\ninput[type=\"color\"]:focus,\n.uneditable-input:focus {\n  border-color: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  outline: 0 none; }\n\na {\n  color: white; }\n\na:hover {\n  color: #81d8d0; }\n\n.ghe {\n  width: 55px;\n  height: 55px;\n  border: none;\n  cursor: pointer;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  background: #8e959e;\n  color: none;\n  position: relative; }\n\n.ghe small {\n    position: absolute !important;\n    top: 50% !important;\n    left: 50% !important;\n    -webkit-transform: translate(-50%, -50%) !important;\n            transform: translate(-50%, -50%) !important; }\n\n.duocdat {\n  background: none;\n  border: 1px solid #8e959e;\n  color: #8e959e; }\n\n.dachon {\n  background: #81d8d0; }\n\n@media (max-width: 1366px) {\n  .ghe {\n    width: 43px;\n    height: 45px;\n    font-size: 12px; } }\n\n@media (max-width: 1024px) {\n  .ghe {\n    height: 42px; }\n    .ghe small {\n      font-size: 10px; } }\n\n@media (max-width: 768px) {\n  .ghe {\n    height: 50px;\n    width: 54px; } }\n\n@media (max-width: 414px) {\n  .ghe {\n    height: 28px;\n    width: 28px; }\n    .ghe small {\n      position: relative;\n      top: -2px;\n      left: 0px;\n      font-size: 7px; } }\n\n@media (max-width: 320px) {\n  .ghe {\n    height: 23px; }\n  small {\n    top: -1px !important;\n    left: -3px !important;\n    font-size: 6px !important; } }\n\n@media (max-width: 360px) {\n  .ghe {\n    height: 25px; } }\n"

/***/ }),

/***/ "./src/app/user/layout/trang-dat-ve/danh-sach-ghe/ghe/ghe.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GheComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GheComponent = /** @class */ (function () {
    function GheComponent() {
        this.TrangThaiGheChon = true;
        this.eventChonGhe = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    GheComponent.prototype.ChonGhe = function () {
        this.ghe.selected = !this.ghe.selected;
        this.eventChonGhe.emit(this.ghe);
    };
    GheComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], GheComponent.prototype, "ghe", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], GheComponent.prototype, "eventChonGhe", void 0);
    GheComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ghe',
            template: __webpack_require__("./src/app/user/layout/trang-dat-ve/danh-sach-ghe/ghe/ghe.component.html"),
            styles: [__webpack_require__("./src/app/user/layout/trang-dat-ve/danh-sach-ghe/ghe/ghe.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], GheComponent);
    return GheComponent;
}());



/***/ }),

/***/ "./src/app/user/layout/trang-dat-ve/detail-showtime/detail-showtime.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"detailPhim d-flex\">\n    <h1>{{titleMovie}}</h1>\n\n    <div class=\"ok1\">\n        <span class=\"imdb\">IMDB</span>\n        <span class=\"diem pl-1\">8.0</span>\n    </div>\n\n    <div class=\"ok2 ml-4\">\n      <span class=\"time\">\n          <i class=\"fas fa-clock\"></i>\n      </span>\n      <span class=\"thoigian pl-1\">1h 50min</span>\n    </div>\n    \n</div>\n<small class=\"description mt-2\">{{desMovie}}</small>\n\n<div class=\"thoigiandiadiem mt-5 d-flex justify-content-between\">\n    <div class=\"tenrap\">\n        <small>Tên rạp</small>\n        <p class=\"mt-1\">{{TenRap}}</p>\n    </div>\n\n    <div class=\"ngaychieu\">\n        <small>Ngày chiếu</small>\n        <p class=\"mt-1\">{{NgayChieu | date:'EEEE, MMMM d' }}</p>\n    </div>\n\n    <div class=\"lichchieu\">\n        <small>Suất</small>\n        <p class=\"mt-1\">{{GioChieu | slice:0:5}}</p>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/user/layout/trang-dat-ve/detail-showtime/detail-showtime.component.scss":
/***/ (function(module, exports) {

module.exports = ".bodycontent {\n  background-attachment: scroll !important; }\n\n@-webkit-keyframes sk-cubemove {\n  25% {\n    -webkit-transform: translateX(12px) rotate(-90deg) scale(0.5); }\n  50% {\n    -webkit-transform: translateX(12px) translateY(12px) rotate(-180deg); }\n  75% {\n    -webkit-transform: translateX(0px) translateY(12px) rotate(-270deg) scale(0.5); }\n  100% {\n    -webkit-transform: rotate(-360deg); } }\n\n@keyframes sk-cubemove {\n  25% {\n    transform: translateX(12px) rotate(-90deg) scale(0.5);\n    -webkit-transform: translateX(12px) rotate(-90deg) scale(0.5); }\n  50% {\n    transform: translateX(12px) translateY(12px) rotate(-179deg);\n    -webkit-transform: translateX(12px) translateY(12px) rotate(-179deg); }\n  50.1% {\n    transform: translateX(12px) translateY(12px) rotate(-180deg);\n    -webkit-transform: translateX(12px) translateY(12px) rotate(-180deg); }\n  75% {\n    transform: translateX(0px) translateY(12px) rotate(-270deg) scale(0.5);\n    -webkit-transform: translateX(0px) translateY(12px) rotate(-270deg) scale(0.5); }\n  100% {\n    transform: rotate(-360deg);\n    -webkit-transform: rotate(-360deg); } }\n\ntextarea:focus,\ninput[type=\"text\"]:focus,\ninput[type=\"password\"]:focus,\ninput[type=\"datetime\"]:focus,\ninput[type=\"datetime-local\"]:focus,\ninput[type=\"date\"]:focus,\ninput[type=\"month\"]:focus,\ninput[type=\"time\"]:focus,\ninput[type=\"week\"]:focus,\ninput[type=\"number\"]:focus,\ninput[type=\"email\"]:focus,\ninput[type=\"url\"]:focus,\ninput[type=\"search\"]:focus,\ninput[type=\"tel\"]:focus,\ninput[type=\"color\"]:focus,\n.uneditable-input:focus {\n  border-color: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  outline: 0 none; }\n\na {\n  color: white; }\n\na:hover {\n  color: #81d8d0; }\n\n.detailPhim .ok1, .detailPhim .ok2 {\n  font-size: 75%;\n  padding-top: 20px; }\n\n.detailPhim .imdb {\n  margin-left: 35px;\n  padding: 1px 4px;\n  background: #62666e;\n  height: 19px;\n  color: #1a202c;\n  font-weight: 700;\n  margin-top: 16px; }\n\n.detailPhim .time {\n  color: #62666e; }\n\n.description {\n  color: #8e959e;\n  width: 70%;\n  display: block; }\n\n.thoigiandiadiem {\n  width: 60%; }\n\n.thoigiandiadiem small {\n    font-size: 75% !important;\n    color: #8e959e; }\n\n@media (max-width: 1024px) {\n  .description {\n    width: 100% !important; }\n  .thoigiandiadiem {\n    width: 75%; } }\n\n@media (max-width: 414px) {\n  .thoigiandiadiem {\n    width: 95%; }\n  .detailPhim h1 {\n    font-size: 1.8em; }\n  .detailPhim .ok1, .detailPhim .ok2 {\n    padding-top: 13px;\n    font-size: 50%; } }\n\n@media (max-width: 360px) {\n  .detailPhim {\n    font-size: 90%; }\n    .detailPhim .ok1, .detailPhim .ok2 {\n      padding-top: 11px; } }\n\n@media (max-width: 320px) {\n  .imdb {\n    margin-left: 20px !important; }\n  .ok2 {\n    margin-left: 15px !important; }\n  .ok1, .ok2 {\n    padding-top: 5px !important; } }\n"

/***/ }),

/***/ "./src/app/user/layout/trang-dat-ve/detail-showtime/detail-showtime.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailShowtimeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_movie_service__ = __webpack_require__("./src/app/Services/movie.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Models_ThongTinCheckout__ = __webpack_require__("./src/app/Models/ThongTinCheckout.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__const_data__ = __webpack_require__("./src/app/const/data.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DetailShowtimeComponent = /** @class */ (function () {
    function DetailShowtimeComponent(router, movieService, activatedRoute) {
        this.router = router;
        this.movieService = movieService;
        this.activatedRoute = activatedRoute;
        this.ThongTinCheckout = new __WEBPACK_IMPORTED_MODULE_3__Models_ThongTinCheckout__["a" /* ThongTinCheckout */]();
    }
    DetailShowtimeComponent.prototype.ngOnInit = function () {
        this.GetThamSo();
        this.GetDSGhe();
        this.GetImage();
    };
    DetailShowtimeComponent.prototype.GetThamSo = function () {
        var _this = this;
        //Lấy danh sach ghe  dựa vào 1 tham số
        this.paramsSub1 = this.activatedRoute.queryParams.subscribe(function (thamso) {
            _this.IDShowTime = thamso['idShow'];
            _this.IDMovie = thamso['idPhim'];
            _this.NgayChieu = thamso['ngaychieu'];
            _this.GioChieu = thamso['giochieu'];
            _this.TenRap = thamso['tenrap'];
        });
    };
    DetailShowtimeComponent.prototype.GetDSGhe = function () {
        var _this = this;
        // Lay danh sach ghe
        // this.paramsSub2 = this.movieService.LayDanhSachGhe(this.IDShowTime).subscribe(result=>{
        //   this.dsGhe = result;
        // });
        __WEBPACK_IMPORTED_MODULE_4__const_data__["c" /* GheNgoi */].find(function (x) { return x.ShowTimeID == _this.IDShowTime; });
        this.dsGhe = JSON.parse(JSON.stringify(__WEBPACK_IMPORTED_MODULE_4__const_data__["c" /* GheNgoi */]));
    };
    DetailShowtimeComponent.prototype.GetImage = function () {
        //Lay Image phim
        this.imgMovie = this.MovieDetail.Image;
        this.titleMovie = this.MovieDetail.Title;
        this.desMovie = this.MovieDetail.Description;
    };
    DetailShowtimeComponent.prototype.ngOnDestroy = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DetailShowtimeComponent.prototype, "MovieDetail", void 0);
    DetailShowtimeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-detail-showtime',
            template: __webpack_require__("./src/app/user/layout/trang-dat-ve/detail-showtime/detail-showtime.component.html"),
            styles: [__webpack_require__("./src/app/user/layout/trang-dat-ve/detail-showtime/detail-showtime.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__Services_movie_service__["a" /* MovieService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], DetailShowtimeComponent);
    return DetailShowtimeComponent;
}());



/***/ }),

/***/ "./src/app/user/layout/trang-dat-ve/thanh-toan/thanh-toan.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"ThanhToan\">\n    <div class=\"ThongTinThanhToan\">\n\n        <form [formGroup]=\"formThanhToan\" #FormThanhToan=\"ngForm\">\n            \n                <div class=\"group\">\n                        <select formControlName=\"PhuongThuc\"\n                                name=\"PhuongThuc\"\n                                ngModel\n                                required \n                                [ngClass]=\"{'thatbai': PhuongThuc.invalid && (PhuongThuc.touched || PhuongThuc.dirty)}\">\n                            <option disabled>Vui lòng chọn</option>\n                            <option>Thẻ ATM nội địa</option>\n                            <option>Thẻ VISA/MASTER/JCB</option>\n                        </select>\n                        <label class=\"label\">Phương thức</label>\n                        <div class=\"bar\" [ngClass]=\"{'thatbai': PhuongThuc.invalid && (PhuongThuc.touched || PhuongThuc.dirty)}\"></div>\n                        <div class=\"loi mt-1\" *ngIf=\"PhuongThuc.errors && (PhuongThuc.touched || PhuongThuc.dirty)\">\n                            <p>Vui lòng chọn phương thức thanh toán!</p>\n                        </div>\n                    </div>\n\n                    <div class=\"group\">\n                            <input type=\"text\"\n                                   formControlName=\"SoThe\" \n                                   name=\"SoThe\"\n                                   ngModel\n                                   required\n                                   [ngClass]=\"{'thatbai': SoThe.invalid && (SoThe.touched || SoThe.dirty)}\">\n                            <label class=\"label\">Số thẻ</label>\n                            <div class=\"bar\" [ngClass]=\"{'thatbai': SoThe.invalid && (SoThe.touched || SoThe.dirty)}\"></div>\n                            <div class=\"loi mt-1\" *ngIf=\"SoThe.errors && (SoThe.touched || SoThe.dirty)\">\n                                <p>Không được để trống!</p>\n                            </div>\n                    </div>\n\n                    <div class=\"group\">\n                            <input type=\"text\"\n                                   formControlName=\"TenChuThe\" \n                                   name=\"TenChuThe\"\n                                   ngModel\n                                   required\n                                   [ngClass]=\"{'thatbai': TenChuThe.invalid && (TenChuThe.touched || TenChuThe.dirty)}\">\n                            <label class=\"label\">Tên chủ thẻ</label>\n                            <div class=\"bar\" [ngClass]=\"{'thatbai': TenChuThe.invalid && (TenChuThe.touched || TenChuThe.dirty)}\"></div>\n                            <div class=\"loi mt-1\" *ngIf=\"TenChuThe.errors && (TenChuThe.touched || TenChuThe.dirty)\">\n                                <p>Không được để trống!</p>\n                            </div>\n                    </div>\n                    \n                    <div class=\"group\">\n                            <input type=\"text\"\n                                   formControlName=\"NgayHetHan\" \n                                   name=\"NgayHetHan\"\n                                   ngModel\n                                   required\n                                   class=\"ngayhethan\" (click)=\"ngayhethan()\"\n                                   [ngClass]=\"{'thatbai': NgayHetHan.invalid && (NgayHetHan.touched || NgayHetHan.dirty)}\">\n                            <label class=\"label\">Ngày hết hạn</label>\n                            <div class=\"bar\" [ngClass]=\"{'thatbai': NgayHetHan.invalid && (NgayHetHan.touched || NgayHetHan.dirty)}\"></div>\n                            <div class=\"loi mt-1\" *ngIf=\"NgayHetHan.errors && (NgayHetHan.touched || NgayHetHan.dirty)\">\n                                <p>Không được để trống!</p>\n                            </div>\n                    </div>\n\n                    <div class=\"group\">\n                            <input type=\"text\"\n                                   formControlName=\"CVV\" \n                                   name=\"CVV\"\n                                   ngModel\n                                   required\n                                   [ngClass]=\"{'thatbai': CVV.invalid && (CVV.touched || CVV.dirty)}\">\n                            <label class=\"label\">CVV/CVC2</label>\n                            <div class=\"bar\" [ngClass]=\"{'thatbai': CVV.invalid && (CVV.touched || CVV.dirty)}\"></div>\n                            <div class=\"loi mt-1\" *ngIf=\"CVV.errors && (CVV.touched || CVV.dirty)\">\n                                <p>Không được để trống!</p>\n                            </div>\n                    </div>        \n            \n                <!-- <div class=\"form-group mb-5\">\n                        <select class=\"form-control\">\n                            <option disabled>Chọn phương thức</option>\n                            <option>Thẻ ATM nội địa</option>\n                            <option>Thẻ VISA/MASTER/JCB</option>\n                        </select>\n                        <span class=\"bar\"></span>\n                    </div>\n            \n                    <div class=\"group\">      \n                        <input type=\"text\" required>\n                        <span class=\"highlight\"></span>\n                        <span class=\"bar\"></span>\n                        <label>Số thẻ</label>\n                    </div>\n            \n                    <div class=\"group\">      \n                        <input type=\"text\" required>\n                        <span class=\"highlight\"></span>\n                        <span class=\"bar\"></span>\n                        <label>Họ tên chủ thẻ</label>\n                    </div>\n            \n                    <div class=\"group\">      \n                        <input type=\"text\" class=\"ngayhethan\" (click)=\"ngayhethan()\" required>\n                        <span class=\"highlight\"></span>\n                        <span class=\"bar\"></span>\n                        <label>Ngày hết hạn</label>\n                    </div>\n            \n                    <div class=\"group\">      \n                        <input type=\"text\" required>\n                        <span class=\"highlight\"></span>\n                        <span class=\"bar\"></span>\n                        <label>CVV/CVC2</label>\n                    </div>             -->\n        </form>\n\n\n        \n    </div>\n</div>"

/***/ }),

/***/ "./src/app/user/layout/trang-dat-ve/thanh-toan/thanh-toan.component.scss":
/***/ (function(module, exports) {

module.exports = ".bodycontent {\n  background-attachment: scroll !important; }\n\n@-webkit-keyframes sk-cubemove {\n  25% {\n    -webkit-transform: translateX(12px) rotate(-90deg) scale(0.5); }\n  50% {\n    -webkit-transform: translateX(12px) translateY(12px) rotate(-180deg); }\n  75% {\n    -webkit-transform: translateX(0px) translateY(12px) rotate(-270deg) scale(0.5); }\n  100% {\n    -webkit-transform: rotate(-360deg); } }\n\n@keyframes sk-cubemove {\n  25% {\n    transform: translateX(12px) rotate(-90deg) scale(0.5);\n    -webkit-transform: translateX(12px) rotate(-90deg) scale(0.5); }\n  50% {\n    transform: translateX(12px) translateY(12px) rotate(-179deg);\n    -webkit-transform: translateX(12px) translateY(12px) rotate(-179deg); }\n  50.1% {\n    transform: translateX(12px) translateY(12px) rotate(-180deg);\n    -webkit-transform: translateX(12px) translateY(12px) rotate(-180deg); }\n  75% {\n    transform: translateX(0px) translateY(12px) rotate(-270deg) scale(0.5);\n    -webkit-transform: translateX(0px) translateY(12px) rotate(-270deg) scale(0.5); }\n  100% {\n    transform: rotate(-360deg);\n    -webkit-transform: rotate(-360deg); } }\n\ntextarea:focus,\ninput[type=\"text\"]:focus,\ninput[type=\"password\"]:focus,\ninput[type=\"datetime\"]:focus,\ninput[type=\"datetime-local\"]:focus,\ninput[type=\"date\"]:focus,\ninput[type=\"month\"]:focus,\ninput[type=\"time\"]:focus,\ninput[type=\"week\"]:focus,\ninput[type=\"number\"]:focus,\ninput[type=\"email\"]:focus,\ninput[type=\"url\"]:focus,\ninput[type=\"search\"]:focus,\ninput[type=\"tel\"]:focus,\ninput[type=\"color\"]:focus,\n.uneditable-input:focus {\n  border-color: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  outline: 0 none; }\n\na {\n  color: white; }\n\na:hover {\n  color: #81d8d0; }\n\n#ThanhToan {\n  margin-top: 80px; }\n\nselect {\n  border-radius: 0;\n  -webkit-appearance: none; }\n\n::-webkit-input-placeholder {\n  color: #8e959e;\n  padding-left: 0; }\n\n.group {\n  position: relative;\n  margin-bottom: 45px; }\n\ninput[type=\"text\"], input[type=\"password\"], input[type=\"number\"], input[type=\"email\"], input[type=\"phone\"], select {\n  color: white;\n  width: 100%;\n  background: none;\n  font-size: 16px;\n  padding: 5px 10px 5px 0px;\n  display: block;\n  border: none;\n  border-bottom: 1px solid #8e959e; }\n\ninput:focus, select:focus {\n  outline: none; }\n\n.label {\n  color: white;\n  font-size: 15px;\n  font-weight: normal;\n  position: absolute;\n  pointer-events: none;\n  left: 0px;\n  top: 5px;\n  -webkit-transition: all 0.4s;\n  transition: all 0.4s; }\n\ninput:focus ~ .label, input:valid ~ .label, select:focus ~ .label, select:valid ~ .label {\n  top: -20px;\n  font-size: 12px;\n  color: #81d8d0;\n  -webkit-transition: all 0.4s;\n  transition: all 0.4s; }\n\n.bar {\n  position: relative;\n  display: block;\n  width: 100%; }\n\n.bar:before, .bar:after {\n  content: '';\n  height: 2px;\n  width: 0;\n  bottom: -1px;\n  position: absolute;\n  background: #81d8d0;\n  -webkit-transition: all 0.4s;\n  transition: all 0.4s; }\n\ninput:focus ~ .bar:before, input:focus ~ .bar:after, select:focus ~ .bar:before, select:focus ~ .bar:after {\n  width: 100%; }\n\n.thatbai {\n  border-bottom: 1px solid #ea1c47 !important; }\n\n.thatbai::after, .thatbai::before {\n  background: #ea1c47 !important; }\n\n.thatbai:focus ~ .label, .thatbai:valid ~ .label {\n  color: #ea1c47 !important; }\n\n.loi {\n  color: #ea1c47 !important; }\n\n.disablebtn {\n  cursor: no-drop !important; }\n"

/***/ }),

/***/ "./src/app/user/layout/trang-dat-ve/thanh-toan/thanh-toan.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThanhToanComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ThanhToanComponent = /** @class */ (function () {
    function ThanhToanComponent() {
        this.checkTrangThai = [];
        this.ThongTinThanhToan = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"];
        this.TenNguoiGD = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"];
    }
    ThanhToanComponent.prototype.ngOnInit = function () {
        this.createFormControl();
        this.createForm();
        this.onChange();
    };
    ThanhToanComponent.prototype.onChange = function () {
        var _this = this;
        this.formThanhToan.valueChanges.subscribe(function (val) {
            _this.ThongTinThanhToan.emit(_this.formThanhToan.valid);
            _this.TenNguoiGD.emit(_this.formThanhToan.get('TenChuThe'));
        });
    };
    ThanhToanComponent.prototype.createFormControl = function () {
        this.PhuongThuc = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required,
        ]),
            this.SoThe = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required
            ]),
            this.TenChuThe = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required
            ]),
            this.NgayHetHan = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required
            ]);
        this.CVV = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required
        ]);
    };
    ThanhToanComponent.prototype.createForm = function () {
        this.formThanhToan = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            PhuongThuc: this.PhuongThuc,
            SoThe: this.SoThe,
            TenChuThe: this.TenChuThe,
            NgayHetHan: this.NgayHetHan,
            CVV: this.CVV
        });
    };
    ThanhToanComponent.prototype.ngayhethan = function () {
        var value = $(".ngayhethan").val();
        if (value == "") {
            $(".ngayhethan").attr("placeholder", "MM/YY");
        }
        else {
            $(".ngayhethan").attr("placeholder", "");
        }
        $(".ngayhethan").blur(function () {
            $(".ngayhethan").attr("placeholder", "");
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ThanhToanComponent.prototype, "ThongTinThanhToan", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ThanhToanComponent.prototype, "TenNguoiGD", void 0);
    ThanhToanComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-thanh-toan',
            template: __webpack_require__("./src/app/user/layout/trang-dat-ve/thanh-toan/thanh-toan.component.html"),
            styles: [__webpack_require__("./src/app/user/layout/trang-dat-ve/thanh-toan/thanh-toan.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ThanhToanComponent);
    return ThanhToanComponent;
}());



/***/ }),

/***/ "./src/app/user/layout/trang-dat-ve/tong-tien/tong-tien.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/layout/trang-dat-ve/tong-tien/tong-tien.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/layout/trang-dat-ve/tong-tien/tong-tien.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TongTienComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_movie_services__ = __webpack_require__("./src/app/Services/movie.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TongTienComponent = /** @class */ (function () {
    function TongTienComponent(movieService, activatedRoute) {
        this.movieService = movieService;
        this.activatedRoute = activatedRoute;
        this.urlHost = 'http://sv.myclass.vn/Images/Movies/';
    }
    TongTienComponent.prototype.ngOnInit = function () {
    };
    TongTienComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tong-tien',
            template: __webpack_require__("./src/app/user/layout/trang-dat-ve/tong-tien/tong-tien.component.html"),
            styles: [__webpack_require__("./src/app/user/layout/trang-dat-ve/tong-tien/tong-tien.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Services_movie_services__["a" /* MoviesService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], TongTienComponent);
    return TongTienComponent;
}());



/***/ }),

/***/ "./src/app/user/layout/trang-dat-ve/trang-dat-ve.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"TrangDatVe\">\n\n    <div id=\"headerDatVe\" class=\"headerDatVe d-flex pt-3 container-fluid\">\n\n        <!-- Button Quay lai -->\n        <div class=\"QuayLai\" (click)=\"quaylai()\">\n            <i class=\"fas fa-chevron-left\"></i>\n            <span>Back</span>\n        </div>\n\n        <!-- Nav pills -->\n        <ul class=\"nav nav-pills\" id=\"myTab\">\n            <li class=\"nav-item\">\n                <a class=\"nav-link menu1 active\" (click)=\"previous()\" data-toggle=\"pill\" href=\"#home\">1. CHỌN VÉ +\n                    COMBO</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link menu2\" data-toggle=\"pill\" href=\"#menu1\">2. CHỌN GHẾ</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link menu3\" data-toggle=\"pill\" href=\"#menu2\">3. THANH TOÁN</a>\n            </li>\n        </ul>\n\n        <!-- Button Dang Nhap -->\n        <div class=\"TaiKhoan ml-auto\">\n            <app-login-register2></app-login-register2>\n        </div>\n\n\n\n    </div>\n    <!-- Header -->\n\n    <div class=\"bodyTrangDatVe\">\n\n\n        <img class=\"imgOk\" src=\"../../../../assets/images/{{imgMovie}}\">\n        <div class=\"bgGuardian\"></div>\n        <!-- <div class=\"bgGuardian1\"></div> -->\n        <!-- <div class=\"bgGuardian2\"></div> -->\n        <div class=\"bgGuardian3\"></div>\n        <div class=\"bgGuardian4\"></div>\n        <div class=\"bgGuardian5\"></div>\n        <div class=\"bgGuardian6\"></div>\n\n        <div class=\"divpadding\">\n            <div class=\"row body2 mr-0\">\n            <div class=\"col-xl-8 col-lg-7\">\n                <div class=\"container-fluid\">\n                    <div class=\"bodycontent\">\n\n\n                        <!-- Thong tin chi tiet lich chieu -->\n                        <app-detail-showtime [MovieDetail]=\"MovieDetail\"></app-detail-showtime>\n\n\n                        <!-- Tab panes -->\n                        <div class=\"tab-content\">\n                            <div class=\"tab-pane active\" id=\"home\">\n\n\n                                <!-- Chon so luong ve -->\n                                <app-chon-so-luong-ve (LaySoLuongVe)='GetQtyVe($event)' (LaySoLuongCombo)='GetQtyCombo($event)'></app-chon-so-luong-ve>\n\n\n                            </div>\n                            <div class=\"tab-pane\" id=\"menu1\">\n\n                                <!-- Danh Sach Ghe -->\n                                <app-danh-sach-ghe [flag]=\"flag\" [SoLuongVe]=\"SoLuongVe\" (Loi)=\"CheckLoi($event)\" (ThongTinGhe)=\"thongtinghe($event)\"></app-danh-sach-ghe>\n\n                            </div>\n                            <div class=\"tab-pane\" id=\"menu2\">\n\n                                <!-- Thanh Toan -->\n                                <app-thanh-toan (ThongTinThanhToan)=\"ThongTinThanhToan($event)\" (TenNguoiGD)=\"TenNguoiGD($event)\"></app-thanh-toan>\n\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xl-4 col-lg-5 TongTien\">\n                <div class=\"container-fluid\">\n\n\n                    <!-- Tinh Tong Tien -->\n                    <div id=\"TongTienCom\">\n                        <!-- <div class=\"imgTongTien\">\n                            <div class=\"background\"></div>\n                            <img class=\"imgTongTien\" [src]=\"urlHost + imgMovie\" alt=\"\">\n                        </div> -->\n\n                        <div class=\"TongTienThanhToan\">\n\n                            <div class=\"SoLuongVe  clearfix\">\n                                <span class=\"float-left label\">Số lượng vé</span>\n                                <span class=\"float-right price\" *ngIf=\"GiaVe == 0; else NguocLai\">{{GiaVe}}</span>\n                                <ng-template #NguocLai>\n                                    <span class=\"float-right price\">{{GiaVe}}.000</span>\n                                </ng-template>\n                                <span class=\"float-right qttVe\">{{SoLuongVe}}</span>\n                            </div>\n\n                            <div class=\"Combo clearfix\">\n                                <span class=\"float-left label\">Số lượng combo</span>\n                                <span class=\"float-right price\" *ngIf=\"GiaCombo == 0; else NguocLai2\">{{GiaCombo}}</span>\n                                <ng-template #NguocLai2>\n                                    <span class=\"float-right price\">{{GiaCombo}}.000</span>\n                                </ng-template>\n                                <span class=\"float-right qttCombo\">{{SoLuongCombo}}</span>\n                            </div>\n\n                            <div class=\"TenGhe clearfix\">\n                                <span class=\"float-left label\">Ghế ngồi</span>\n                                <span class=\"float-right\" *ngIf=\"dsThongTinGhe == undefined; else DaChonGhe\">\n                                    <label class=\"float-right m-0\">Chưa chọn</label>\n                                </span>\n                                <ng-template #DaChonGhe>\n                                    <label class=\"float-right m-0\" *ngFor=\"let kq of dsThongTinGhe\">{{kq.SeatName}}</label>\n                                </ng-template>\n                            </div>\n\n                            <div class=\"line\"></div>\n\n                            <div class=\"kqTongTien clearfix\">\n                                <span class=\"float-left labelTong mt-2\">TỔNG CỘNG</span>\n                                <span class=\"float-right kqTong\" *ngIf=\"TongTien == 0; else NguocLai3\">{{TongTien}}</span>\n                                <ng-template #NguocLai3>\n                                    <span class=\"float-right kqTong\">{{TongTien}}.000</span>\n                                </ng-template>\n                            </div>\n\n                            <button class=\"ThanhToan\" (click)=\"thanhtoan()\">THANH TOÁN</button>\n                            <button class=\"ThanhToan2\" (click)=\"thanhtoan2()\">\n                                <div class=\"spinner\">\n                                    <div class=\"cube1\"></div>\n                                    <div class=\"cube2\"></div>\n                                </div>\n                                THANH TOÁN\n                            </button>\n\n\n                        </div>\n                    </div>\n\n\n\n                </div>\n            </div>\n\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/user/layout/trang-dat-ve/trang-dat-ve.component.scss":
/***/ (function(module, exports) {

module.exports = ".bodycontent {\n  background-attachment: scroll !important; }\n\n@-webkit-keyframes sk-cubemove {\n  25% {\n    -webkit-transform: translateX(12px) rotate(-90deg) scale(0.5); }\n  50% {\n    -webkit-transform: translateX(12px) translateY(12px) rotate(-180deg); }\n  75% {\n    -webkit-transform: translateX(0px) translateY(12px) rotate(-270deg) scale(0.5); }\n  100% {\n    -webkit-transform: rotate(-360deg); } }\n\n@keyframes sk-cubemove {\n  25% {\n    transform: translateX(12px) rotate(-90deg) scale(0.5);\n    -webkit-transform: translateX(12px) rotate(-90deg) scale(0.5); }\n  50% {\n    transform: translateX(12px) translateY(12px) rotate(-179deg);\n    -webkit-transform: translateX(12px) translateY(12px) rotate(-179deg); }\n  50.1% {\n    transform: translateX(12px) translateY(12px) rotate(-180deg);\n    -webkit-transform: translateX(12px) translateY(12px) rotate(-180deg); }\n  75% {\n    transform: translateX(0px) translateY(12px) rotate(-270deg) scale(0.5);\n    -webkit-transform: translateX(0px) translateY(12px) rotate(-270deg) scale(0.5); }\n  100% {\n    transform: rotate(-360deg);\n    -webkit-transform: rotate(-360deg); } }\n\ntextarea:focus,\ninput[type=\"text\"]:focus,\ninput[type=\"password\"]:focus,\ninput[type=\"datetime\"]:focus,\ninput[type=\"datetime-local\"]:focus,\ninput[type=\"date\"]:focus,\ninput[type=\"month\"]:focus,\ninput[type=\"time\"]:focus,\ninput[type=\"week\"]:focus,\ninput[type=\"number\"]:focus,\ninput[type=\"email\"]:focus,\ninput[type=\"url\"]:focus,\ninput[type=\"search\"]:focus,\ninput[type=\"tel\"]:focus,\ninput[type=\"color\"]:focus,\n.uneditable-input:focus {\n  border-color: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  outline: 0 none; }\n\na {\n  color: white; }\n\na:hover {\n  color: #81d8d0; }\n\nsection {\n  color: white; }\n\n#TrangDatVe {\n  min-height: 100vh; }\n\n.body2 {\n  color: white;\n  padding: 73px 0; }\n\n.TongTien {\n  color: white;\n  z-index: 1; }\n\n.bodyTrangDatVe {\n  background: #1a202c;\n  position: relative;\n  z-index: 0;\n  top: 70px; }\n\n.divpadding {\n  padding: 0 137px; }\n\n.headerDatVe {\n  position: fixed;\n  z-index: 1500;\n  top: 0;\n  -webkit-transition: all .2s linear;\n  transition: all .2s linear;\n  padding: 0 30px; }\n\n.bodycontent {\n  position: relative;\n  z-index: 1;\n  max-width: 1000px;\n  padding-right: 50px; }\n\n.QuayLai {\n  cursor: pointer;\n  padding-top: 9px;\n  color: #8e959e;\n  display: block; }\n\n.QuayLai span {\n    margin-left: 10px;\n    font-weight: 300; }\n\n.nav {\n  margin-left: 67px; }\n\n.TaiKhoan {\n  cursor: pointer;\n  color: #8e959e; }\n\n.TaiKhoan span {\n    margin-left: 10px;\n    font-weight: 300; }\n\n.nav-pills .nav-link.active,\n.nav-pills .show > .nav-link {\n  background: none;\n  padding: 0;\n  padding-top: 10px;\n  border-bottom: 2px solid #81d8d0;\n  border-radius: 0;\n  padding-bottom: 45px; }\n\n.nav-link {\n  padding: 0;\n  color: #8e959e;\n  height: 50px;\n  padding-top: 10px;\n  padding-bottom: 45px; }\n\n.nav-item {\n  margin-right: 70px; }\n\na {\n  -webkit-transition: all 0.2s linear;\n  transition: all 0.2s linear; }\n\n.spinner {\n  display: none;\n  width: 35px;\n  position: relative;\n  left: 100px; }\n\n.cube1, .cube2 {\n  background-color: white;\n  width: 8px;\n  height: 8px;\n  position: absolute;\n  top: 0px;\n  left: -15px;\n  -webkit-animation: sk-cubemove 1.4s infinite ease-in-out;\n  animation: sk-cubemove 1.4s infinite ease-in-out; }\n\n.cube2 {\n  -webkit-animation-delay: -0.7s;\n  animation-delay: -0.7s; }\n\n.tab-pane, .tab-content {\n  overflow: hidden; }\n\n.tab-pane.active {\n  -webkit-animation: slide-down3 1s ease-out;\n          animation: slide-down3 1s ease-out; }\n\n@-webkit-keyframes slide-down3 {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-20%);\n            transform: translateY(-20%); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0%);\n            transform: translateY(0%); } }\n\n@keyframes slide-down3 {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-20%);\n            transform: translateY(-20%); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0%);\n            transform: translateY(0%); } }\n\n.imgOk {\n  position: absolute;\n  opacity: 1;\n  z-index: -2;\n  right: 15%;\n  width: 70%;\n  height: 1400px;\n  top: -600px; }\n\n.bgGuardian {\n  right: 15%;\n  width: 100%;\n  height: 1400px;\n  top: -600px;\n  position: absolute;\n  z-index: 1;\n  background: -webkit-gradient(linear, left top, left bottom, from(rgba(26, 32, 44, 0)), color-stop(42%, rgba(26, 32, 44, 0)), color-stop(62%, #1a202c), to(#1a202c));\n  background: linear-gradient(180deg, rgba(26, 32, 44, 0) 0%, rgba(26, 32, 44, 0) 42%, #1a202c 62%, #1a202c 100%);\n  /* w3c */\n  /* w3c */ }\n\n.bgGuardian1 {\n  right: 15%;\n  width: 70%;\n  height: 1400px;\n  top: -600px;\n  position: absolute;\n  z-index: 1;\n  background: -webkit-gradient(linear, right top, left top, from(rgba(26, 32, 44, 0)), color-stop(40%, rgba(26, 32, 44, 0)), color-stop(96%, #1a202c), to(#1a202c));\n  background: linear-gradient(270deg, rgba(26, 32, 44, 0) 0%, rgba(26, 32, 44, 0) 40%, #1a202c 96%, #1a202c 100%);\n  /* w3c */\n  /* w3c */ }\n\n.bgGuardian2 {\n  right: 15%;\n  width: 70%;\n  height: 1400px;\n  top: -600px;\n  position: absolute;\n  z-index: 1;\n  background: -webkit-gradient(linear, left top, right top, from(rgba(26, 32, 44, 0)), color-stop(40%, rgba(26, 32, 44, 0)), color-stop(96%, #1a202c), to(#1a202c));\n  background: linear-gradient(90deg, rgba(26, 32, 44, 0) 0%, rgba(26, 32, 44, 0) 40%, #1a202c 96%, #1a202c 100%);\n  /* w3c */\n  /* w3c */ }\n\n.bgGuardian3 {\n  right: 15%;\n  width: 70%;\n  height: 1400px;\n  top: -600px;\n  position: absolute;\n  z-index: 1;\n  background: -webkit-gradient(linear, left bottom, left top, from(rgba(26, 32, 44, 0)), color-stop(40%, rgba(26, 32, 44, 0)), color-stop(96%, #1a202c), to(#1a202c));\n  background: linear-gradient(0deg, rgba(26, 32, 44, 0) 0%, rgba(26, 32, 44, 0) 40%, #1a202c 96%, #1a202c 100%);\n  /* w3c */\n  /* w3c */ }\n\n.bgGuardian4 {\n  right: 15%;\n  width: 70%;\n  height: 1400px;\n  top: -600px;\n  position: absolute;\n  z-index: 1;\n  background: rgba(26, 32, 44, 0.8); }\n\n.bgGuardian5 {\n  position: absolute;\n  width: 95%;\n  height: 424px;\n  top: -71px;\n  left: 0;\n  background: -webkit-gradient(linear, right top, left top, from(rgba(26, 32, 44, 0)), color-stop(50%, rgba(26, 32, 44, 0)), color-stop(67%, #1a202c), to(#1a202c));\n  background: linear-gradient(270deg, rgba(26, 32, 44, 0) 0%, rgba(26, 32, 44, 0) 50%, #1a202c 67%, #1a202c 100%); }\n\n.bgGuardian6 {\n  position: absolute;\n  width: 95%;\n  height: 465px;\n  top: -77px;\n  right: 0;\n  background: -webkit-gradient(linear, left top, right top, from(rgba(26, 32, 44, 0)), color-stop(50%, rgba(26, 32, 44, 0)), color-stop(71%, #1a202c), to(#1a202c));\n  background: linear-gradient(90deg, rgba(26, 32, 44, 0) 0%, rgba(26, 32, 44, 0) 50%, #1a202c 71%, #1a202c 100%); }\n\n.disable {\n  pointer-events: none;\n  opacity: 0.4 !important; }\n\n.disable2 {\n  pointer-events: none;\n  opacity: 0.4 !important; }\n\n#TongTienCom {\n  -webkit-box-shadow: -1px 2px 20px -1px rgba(0, 0, 0, 0.4);\n          box-shadow: -1px 2px 20px -1px rgba(0, 0, 0, 0.4);\n  width: 100%;\n  height: auto;\n  padding: 20px 30px 36px;\n  background: #0000005e; }\n\n.imgTongTien img {\n  width: 100%;\n  height: 500px;\n  -webkit-box-shadow: -1px 2px 23px 7px rgba(0, 0, 0, 0.4);\n          box-shadow: -1px 2px 23px 7px rgba(0, 0, 0, 0.4); }\n\n.imgTongTien {\n  position: relative; }\n\n.background {\n  background: rgba(0, 0, 0, 0.3);\n  width: 100%;\n  height: 500px;\n  position: absolute;\n  z-index: 1; }\n\n.trailer {\n  position: absolute;\n  bottom: -55px;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%); }\n\n.trailer small {\n    display: block;\n    margin-top: 15px;\n    color: #8e959e; }\n\n.TongTienThanhToan p {\n  color: #8e959e;\n  font-size: 1.1rem; }\n\n.TongTienThanhToan .SoLuongVe, .TongTienThanhToan .Combo, .TongTienThanhToan .TenGhe {\n  margin-top: 25px; }\n\n.TongTienThanhToan .qttVe, .TongTienThanhToan .qttCombo {\n  margin-right: 80px; }\n\n.TongTienThanhToan .line::after {\n  content: '';\n  width: 100%;\n  height: 2px;\n  background: #262c38;\n  display: block;\n  margin-top: 30px; }\n\n.TongTienThanhToan .kqTongTien {\n  margin-top: 10px; }\n\n.TongTienThanhToan .kqTongTien .kqTong {\n    font-size: 1.5rem; }\n\n.TongTienThanhToan .kqTongTien .labelTong {\n    color: #ea1c47; }\n\n.TongTienThanhToan .price {\n  width: 61px;\n  text-align: right; }\n\n.label {\n  color: #8e959e; }\n\n.ThanhToan, .ThanhToan2 {\n  background: #ea1c47;\n  padding: 10px 30px;\n  border: none;\n  color: white;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  margin-top: 35px;\n  width: 100%;\n  padding: 15px 0;\n  opacity: 0.8;\n  cursor: pointer;\n  -webkit-transition: all .2s linear;\n  transition: all .2s linear; }\n\n.ThanhToan:hover, .ThanhToan2:hover {\n  opacity: 1; }\n\n@media (max-width: 1366px) {\n  .TongTienThanhToan .qttVe, .TongTienThanhToan .qttCombo {\n    margin-right: 0 !important; } }\n\n@media (max-width: 1024px) {\n  #headerDatVe {\n    font-size: 80%; }\n  .divpadding {\n    padding: 0; }\n  .body2 .col-1 {\n    display: none; }\n  .body2 .bodycontent {\n    padding-left: 20px;\n    padding-right: 0; }\n  .QuayLai {\n    padding-left: 5px; }\n  .nav-item {\n    margin-right: 50px; }\n  .nav-link {\n    padding-bottom: 38px !important; }\n  #TongTienCom {\n    width: 372px; } }\n\n@media (max-width: 812px) {\n  #TongTienCom {\n    width: 100%;\n    position: relative;\n    top: 100px; }\n  .TongTienThanhToan .price {\n    width: 110px; } }\n\n@media (max-width: 768px) {\n  #TongTienCom {\n    top: 50px;\n    width: 100%; }\n  .divpadding {\n    padding: 0; }\n  .nav-link {\n    font-size: 12px; }\n  .TongTien .container-fluid {\n    padding: 0; }\n  .QuayLai {\n    width: 85px; }\n  .nav {\n    margin-left: 10px; }\n  .nav-link {\n    font-size: 12px; }\n  .nav-item {\n    margin-right: 25px; }\n  .TaiKhoan {\n    font-size: 10px; } }\n\n@media (max-width: 414px) {\n  #myTab {\n    display: none; }\n  .TaiKhoan {\n    padding-right: 0px; }\n  .body2 {\n    padding: 30px 0; }\n  .TongTien {\n    padding: 0 30px !important;\n    padding-left: 50px !important;\n    margin-top: 48px !important; }\n  #headerDatVe {\n    padding: 0 !important;\n    padding: 10px 28px !important; }\n  #TongTienCom {\n    width: 100%;\n    top: -10px; } }\n\n@media (max-width: 375px) {\n  .TongTienThanhToan .price {\n    width: 80px; } }\n\n@media (max-width: 320px) {\n  #TrangDatVe {\n    font-size: 70%; }\n  .qttVe, .qttCombo {\n    margin-right: 50px !important; } }\n"

/***/ }),

/***/ "./src/app/user/layout/trang-dat-ve/trang-dat-ve.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrangDatVeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_movie_service__ = __webpack_require__("./src/app/Services/movie.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Models_Tickets__ = __webpack_require__("./src/app/Models/Tickets.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Models_DSGheSeDat__ = __webpack_require__("./src/app/Models/DSGheSeDat.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Models_ThongTinCheckout__ = __webpack_require__("./src/app/Models/ThongTinCheckout.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__const_data__ = __webpack_require__("./src/app/const/data.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TrangDatVeComponent = /** @class */ (function () {
    function TrangDatVeComponent(router, movieService, activatedRoute) {
        this.router = router;
        this.movieService = movieService;
        this.activatedRoute = activatedRoute;
        this.dsThongTinGheSeDat = new __WEBPACK_IMPORTED_MODULE_4__Models_DSGheSeDat__["a" /* DSGheSeDat */]();
        this.tickets = new __WEBPACK_IMPORTED_MODULE_3__Models_Tickets__["a" /* Tickets */]();
        this.ThongTinCheckout = new __WEBPACK_IMPORTED_MODULE_5__Models_ThongTinCheckout__["a" /* ThongTinCheckout */]();
        this.SoLuongVe = 0;
        this.SoLuongCombo = 0;
        this.GiaVe = 0;
        this.GiaCombo = 0;
        this.TongTien = 0;
        this.flag = 0;
        this.arrGheDuocChon = new Array();
        this.eventSoLuongVe = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"];
    }
    TrangDatVeComponent.prototype.GetQtyVe = function (soluongVe) {
        this.SoLuongVe = soluongVe;
        this.GiaVe = soluongVe * 85;
        this.TongTien = this.GiaCombo + this.GiaVe;
        this.eventSoLuongVe.emit(soluongVe);
    };
    TrangDatVeComponent.prototype.GetQtyCombo = function (soluongCombo) {
        this.SoLuongCombo = soluongCombo;
        this.GiaCombo = soluongCombo * 40;
        this.TongTien = this.GiaCombo + this.GiaVe;
    };
    TrangDatVeComponent.prototype.ngOnInit = function () {
        //Disable menu 
        $(".menu2").addClass("disable");
        $(".menu3").addClass("disable");
        // Animation when scroll
        $("body").on('scroll', function () {
            $(".headerDatVe").css("box-shadow", "0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12)");
        });
        this.StickyTop();
        this.HideComponent();
        this.GetThamSo();
        this.GetDanhSachGhe();
        this.GetImagePhim();
        //disable ThanhToan1
        if (this.dsThongTinGhe == undefined) {
            $(".ThanhToan").addClass("disable");
        }
        //Disable ThanhToan2
        $(".ThanhToan2").addClass("disable");
    };
    TrangDatVeComponent.prototype.ThongTinThanhToan = function (value) {
        if (value == false) {
            $(".ThanhToan2").addClass("disable");
        }
        else {
            $(".ThanhToan2").removeClass("disable");
        }
    };
    TrangDatVeComponent.prototype.CheckLoi = function (loi) {
        if (loi != 0) {
            $(".ThanhToan").addClass("disable2");
        }
        else {
            $(".ThanhToan").removeClass("disable2");
        }
    };
    TrangDatVeComponent.prototype.thongtinghe = function (dsGheDuocChon) {
        var json = JSON.parse(dsGheDuocChon);
        this.dsThongTinGhe = json;
        // console.log(this.dsThongTinGhe);
        for (var i = 1; i < this.dsThongTinGhe.length; i++) {
            var string = ",";
            var kq = this.dsThongTinGhe[i].SeatName.concat(string);
            this.dsThongTinGhe[i].SeatName = kq;
        }
        if (this.dsThongTinGhe.length == this.SoLuongVe) {
            $(".ThanhToan").removeClass("disable");
        }
        else {
            $(".ThanhToan").addClass("disable");
        }
    };
    TrangDatVeComponent.prototype.quaylai = function () {
        this.router.navigate(['']);
    };
    TrangDatVeComponent.prototype.thanhtoan = function () {
        var kqJson = localStorage.getItem("localUser");
        if (kqJson == null || kqJson == undefined) {
            $("#login2").trigger("click");
        }
        else {
            $(".menu3").removeClass("disable");
            $(".menu3").trigger("click");
            $(".menu1").addClass("disable");
            $(".menu2").addClass("disable");
            $(".ThanhToan").hide();
            $(".ThanhToan2").show();
        }
    };
    TrangDatVeComponent.prototype.thanhtoan2 = function () {
        var _this = this;
        $(".spinner").show();
        var kqJson = localStorage.getItem("localUser");
        if (kqJson == null || kqJson == undefined) {
            $(".login").trigger("click");
        }
        else {
            setTimeout(function () {
                var ttUser = JSON.parse(kqJson);
                _this.dsThongTinGhe.forEach(function (ghe) {
                    _this.dsThongTinGheSeDat.Tickets.push({ SeatID: ghe.SeatID, Price: ghe.Price });
                });
                _this.tickets = { GroupID: ttUser.GroupID, ShowTimeID: _this.IDShowTime, UserID: ttUser.UserName, Tickets: _this.dsThongTinGheSeDat.Tickets };
                // console.log(this.tickets);
                // this.movieService.DatVe(this.tickets).subscribe(result => {
                //   console.log(result);
                //  
                // });
                $(".spinner").hide();
                _this.ThongTinCheckOut();
                _this.router.navigate(["Home/Checkout"]);
            }, 2000);
        }
    };
    TrangDatVeComponent.prototype.ThongTinCheckOut = function () {
        var _this = this;
        localStorage.removeItem("ThongTinCheckout");
        this.ThongTinCheckout.TenPhim = this.titleMovie;
        this.ThongTinCheckout.TenRap = this.TenRap;
        this.ThongTinCheckout.NgayChieu = this.NgayChieu;
        this.ThongTinCheckout.Suat = this.GioChieu;
        this.ThongTinCheckout.GheNgoi = this.dsThongTinGhe;
        this.ThongTinCheckout.TongTien = this.TongTien;
        this.ThongTinCheckout.TenNguoiGD = this.TenChuThe;
        var json = JSON.stringify(this.ThongTinCheckout);
        localStorage.setItem("ThongTinCheckout", json);
        var ghedadat = [{
                ShowTimeID: parseInt(this.IDShowTime),
                Seats: this.dsThongTinGhe
            }];
        if (localStorage.getItem("GheNgoiDaDat")) {
            var flag_1 = false;
            var dataGheDaDat = JSON.parse(localStorage.getItem("GheNgoiDaDat"));
            dataGheDaDat.filter(function (x) {
                if (parseInt(x.ShowTimeID) !== parseInt(_this.IDShowTime)) {
                    return true;
                }
                else {
                    flag_1 = true;
                    x.Seats = x.Seats.concat(ghedadat[0].Seats);
                }
            });
            !flag_1 ? dataGheDaDat = dataGheDaDat.concat(ghedadat) : null;
            localStorage.setItem("GheNgoiDaDat", JSON.stringify(dataGheDaDat));
        }
        else {
            localStorage.setItem("GheNgoiDaDat", JSON.stringify(ghedadat));
        }
    };
    TrangDatVeComponent.prototype.TenNguoiGD = function (kq) {
        this.TenChuThe = kq.value;
    };
    TrangDatVeComponent.prototype.previous = function () {
        this.flag = this.flag + 1;
        $(".menu2").addClass("disable");
        $("#counter").text("");
        $("button.ThanhToan").hide();
    };
    TrangDatVeComponent.prototype.StickyTop = function () {
        // Sticky top
        window.onscroll = function () {
            myFunction();
        };
        // Sticky top
        var header = document.getElementById("headerDatVe");
        var sticky = header.offsetTop;
        function myFunction() {
            var a = $(".headerDatVe");
            if (window.pageYOffset > sticky) {
                a.css("box-shadow", "0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12)");
                a.css("background", "#1a202c");
            }
            else {
                a.css("box-shadow", "none");
                a.css("background", "transparent");
            }
        }
    };
    TrangDatVeComponent.prototype.HideComponent = function () {
        $("#myNav").hide();
        $("#logoMovie").hide();
        $("#Footer").hide();
        $(".ThanhToan").hide();
        $(".ThanhToan2").hide();
        $("#HeaderNew").hide();
    };
    TrangDatVeComponent.prototype.ShowComponent = function () {
        $("#myNav").show();
        $("#logoMovie").show();
        $("#Footer").show();
        $(".ThanhToan").show();
        $(".ThanhToan2").show();
    };
    TrangDatVeComponent.prototype.GetThamSo = function () {
        var _this = this;
        this.paramsSub1 = this.activatedRoute.queryParams.subscribe(function (thamso) {
            _this.IDShowTime = thamso['idShow'];
            _this.IDMovie = thamso['idPhim'];
            _this.NgayChieu = thamso['ngaychieu'];
            _this.GioChieu = thamso['giochieu'];
            _this.TenRap = thamso['tenrap'];
        });
    };
    TrangDatVeComponent.prototype.GetDanhSachGhe = function () {
        var _this = this;
        this.paramsSub2 = this.movieService.LayDanhSachGhe(this.IDShowTime).subscribe(function (result) {
            _this.dsGhe = result;
        }, function (error) {
            _this.dsGhe = error;
        });
    };
    TrangDatVeComponent.prototype.GetImagePhim = function () {
        var _this = this;
        this.MovieDetail = __WEBPACK_IMPORTED_MODULE_6__const_data__["a" /* DanhSachPhimDangChieu */].filter(function (x) { return x.ID == _this.IDMovie; })[0];
        this.imgMovie = this.MovieDetail.Image;
        this.titleMovie = this.MovieDetail.Title;
        this.desMovie = this.MovieDetail.Description;
        //Lay Image phim
        // this.paramsSub3 = this.movieService.LayChiTietPhim_LichChieuTheoNhom(this.IDMovie, this.MaNhom).subscribe((result: any) => {
        //   this.MovieDetail = result;
        //   this.imgMovie = result.Image;
        //   this.titleMovie = result.Title;
        //   this.desMovie = result.Description;
        // }, error => {
        //   this.MovieDetail = error;
        // });
    };
    TrangDatVeComponent.prototype.ngOnDestroy = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], TrangDatVeComponent.prototype, "eventSoLuongVe", void 0);
    TrangDatVeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-trang-dat-ve',
            template: __webpack_require__("./src/app/user/layout/trang-dat-ve/trang-dat-ve.component.html"),
            styles: [__webpack_require__("./src/app/user/layout/trang-dat-ve/trang-dat-ve.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__Services_movie_service__["a" /* MovieService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], TrangDatVeComponent);
    return TrangDatVeComponent;
}());



/***/ }),

/***/ "./src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <app-header></app-header> -->\n<app-header-new></app-header-new>\n\n<router-outlet (activate)=\"onActivate($event)\"></router-outlet>\n<button id=\"myBtn\" title=\"Go to top\">\n        <i class=\"fa fa-arrow-up\"></i>\n      </button>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/user/user.component.scss":
/***/ (function(module, exports) {

module.exports = "#myBtn {\n  display: none;\n  position: fixed;\n  bottom: 93px;\n  right: 30px;\n  z-index: 99;\n  border: none;\n  outline: none;\n  background-color: rgba(39, 167, 154, 0.4);\n  color: white;\n  cursor: pointer;\n  padding: 15px;\n  border-radius: 0px;\n  -webkit-transition: all 0.2s linear;\n  transition: all 0.2s linear; }\n"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    //scroll display button
    UserComponent.prototype.onWindowScroll = function () {
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            $("#myBtn").show();
        }
        else {
            $("#myBtn").hide();
        }
    };
    //auto uptop when redirect
    UserComponent.prototype.onActivate = function (event) {
        window.scrollTo(0, 0);
    };
    UserComponent.prototype.ngOnInit = function () {
        //click scroll smooth
        $('.navbar-nav a.nav-link').on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 500, 'linear');
        });
        // upto smooth
        $('#myBtn').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])("window:scroll", []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], UserComponent.prototype, "onWindowScroll", null);
    UserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user',
            template: __webpack_require__("./src/app/user/user.component.html"),
            styles: [__webpack_require__("./src/app/user/user.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map