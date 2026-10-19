function checkdiem() {
    let hk1 = parseFloat(document.getElementById("hk1").value);
    let hk2 = parseFloat(document.getElementById("hk2").value);

    if (isNaN(hk1) || isNaN(hk2)) {
        alert("Vui lòng nhập số hợp lệ!");
        return;
    }
    if((hk1>=0 && hk1<=10)&&(hk2>=0 && hk2<=10)){
    let diemTB = (hk1 + hk2) / 2;
    let xl = "";

    // if (diemTB >= 9) {
    //     xl = "Xuất sắc";
    // } 
    // else if (diemTB >= 8) {
    //     xl = "Giỏi";
    // } 
    // else if (diemTB >= 7) {
    //     xl = "Khá";
    // } 
    // else if (diemTB >= 5) {
    //     xl = "Trung bình";
    // } 
    // else {
    //     xl = "Yếu";
    // }
    switch(true){
        case(diemTB>=9):
            xl = "Xuất sắc";
        break;
        case(diemTB>=7):
            xl= "khá";
        break;
        case(diemTB>=6,4):
            xl= "trung bình";
        break;
        default:
            xl= "yếu";

  
    }


    document.getElementById("diemTB").textContent = diemTB.toFixed(2);
    document.getElementById("xl").style.color = "red";
    document.getElementById("xl").textContent = xl;
    document.getElementById("diemTB").style.bakground = "yellow";
}
}
