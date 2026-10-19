function chuVi(a,b)
    {return (a + b) * 2;}
function dienTich(a,b)
    {return (a*b);}

var a = parseInt(prompt("Nhap so nguyen a: ","0"));
var b = parseInt(prompt("Nhap so nguyen b: ","0"));

var cv = chuVi(a,b);
var dt = dienTich(a,b);

document.write("Chu vi hinh chu nhat la:"+ cv + "<br>");
document.write("Dien tich hinh chu nhat la:"+ dt);
