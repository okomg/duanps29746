const API_URL = `http://localhost:3000`;
const showlistdichvu = async () => {
    let arr = await fetch(API_URL + "/dich_vu")
        .then(res => res.json())
        .then(data => data);
    let str = ``;
    arr.forEach(row => str += show1dichvu(row));
    return str;
};
const show1dichvu = (dv) => {
    return `<div>
        <img src="${dv.hinh}">
        <h4>${dv.ten}</h4>
        </div> `;
};
const showlistkhachhang = async () => {
    let arr = await fetch(API_URL + "/khach_hang")
        .then(res => res.json())
        .then(data => data);
    let str = ``;
    arr.forEach(row => str += show1khachhang(row));
    return str;
};
const show1khachhang = (kh) => {
    return `<div>
        <img src="${kh.hinh}">
        <h4>${kh.ten}</h4>
        </div> `;
};
const showlistchinhanh = async () => {
    let arr = await fetch(API_URL + "/chi_nhanh")
        .then(res => res.json())
        .then(data => data);
    let str = ``;
    arr.forEach(row => str += show1chinhanh(row));
    return str;
};
const show1chinhanh = (cn) => {
    return `<div>
        <img src="${cn.hinh}">
        <h4>${cn.ten}</h4>
        </div> `;
};
const showbanggia = async () => {
    let arr = await fetch(API_URL + "/bang_gia")
        .then(res => res.json())
        .then(data => data);
    let str = ``;
    arr.forEach(row => str += show1gia(row));
    return str;
};
const show1gia = (g) => {
    return `<div>
         <p>${g.ten}</p>
         <p>${Number(g.gia).toLocaleString("vi")} VNĐ</p>
        </div> `;
};
export { showlistdichvu, showlistkhachhang, showlistchinhanh, showbanggia };
