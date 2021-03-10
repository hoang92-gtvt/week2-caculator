

    //function for displaying values
    function dis(val)
    {
        document.getElementById("ketqua1").value+=val
    }
    //function for evaluation
    function solve()
    {
        let x = document.getElementById("ketqua1").value
        let y = eval(x) //hàm tính toan gia tri bieu thuc
        document.getElementById("ketqua1").value = y
    }
    //function for clearing the display
    function clr()
    {
        document.getElementById("ketqua1").value = ""
    }
