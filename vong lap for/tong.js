   function Tinhtong() {
        let sum = 0;
        let i = 1;

        while (i < 6) {
            sum = sum + i;
            i++;
        }

        document.getElementById("kq").innerHTML = "Kết quả: " + sum;
    }