const API_URL = `http://localhost:3000`;
type TDichVu = { 
    id:number; 
    ten:string; 
    hinh:string; } 
type TKhachHang = { 
    id:number;  
    ten:string; 
    hinh:string; }
type TChiNhanh = { 
    id:number;  
    ten:string; 
    hinh:string; }
type TBangGia = { 
    id:number;  
    ten:string; 
    gia:number; }
const showlistdichvu = async ()=>{
        let arr:TDichVu[] = await fetch(API_URL + "/dich_vu")
        .then (res => res.json())
        .then (data => data as TDichVu[]);
        let str=``;
        arr.forEach ( row => str+= show1dichvu(row) )
        return str;
    }
 const show1dichvu = (dv:TDichVu) => {
        return `<div>
        <img src="${dv.hinh}">
        <h4>${dv.ten}</h4>
        </div> `;
    }
const showlistkhachhang = async ()=>{
        let arr:TKhachHang[] = await fetch(API_URL + "/khach_hang")
        .then (res => res.json())
        .then (data => data as TKhachHang[]);
        let str=``;
        arr.forEach ( row => str+= show1khachhang(row) )
        return str;
    }
const show1khachhang = (kh:TKhachHang) => {
        return `<div>
        <img src="${kh.hinh}">
        <h4>${kh.ten}</h4>
        </div> `;
    }
const showlistchinhanh = async ()=>{
        let arr:TChiNhanh[] = await fetch(API_URL + "/chi_nhanh")
        .then (res => res.json())
        .then (data => data as TChiNhanh[]);
        let str=``;
        arr.forEach ( row => str+= show1chinhanh(row) )
        return str;
    }
const show1chinhanh = (cn:TChiNhanh) => {
        return `<div>
        <img src="${cn.hinh}">
        <h4>${cn.ten}</h4>
        </div> `;
    }
const showbanggia = async ()=>{
        let arr:TBangGia[] = await fetch(API_URL + "/bang_gia")
        .then (res => res.json())
        .then (data => data as TBangGia[]);
        let str=``;
        arr.forEach ( row => str+= show1gia(row) )
        return str;
    }
const show1gia = (g:TBangGia) => { 
        return `<div>
         <p>${g.ten}</p>
         <p>${Number(g.gia).toLocaleString("vi")} VNĐ</p>
        </div> `;
    }
export {showlistdichvu, showlistkhachhang, showlistchinhanh , showbanggia}
    