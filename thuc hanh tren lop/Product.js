var id = 0;

function sell() {
    id++;

    var pname = document.getElementById("pname").value;
    var qty = document.getElementById("qty").value;
    var up = document.getElementById("up").value;
    var dc = document.getElementById("dc").value;

    var subtotal = qty * up - (qty * up * dc);

    var row = "<tr>";
    row += "<td>" + id + "</td>";
    row += "<td>" + pname + "</td>";
    row += "<td>" + qty + "</td>";
    row += "<td>" + up + "</td>";
    row += "<td>" + dc + "</td>";
    row += "<td>" + subtotal + "</td>";
    row += "</tr>";

    document.getElementById("tbl").innerHTML += row;
}