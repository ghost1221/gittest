$(document).ready(function(){
    $("#submitBtn").click(function (e) {

        checkPasswordAndNum();
    });
});

function checkPasswordAndNum() {
    var oldPw = $("#oldPswd").val();
    var newPw = $("#newPswd").val();
    var twoNewPw = $("#twoNewPswd").val();
    var checkNum = $("#checkNum").val();
    print("oldPw = " + oldPw + ", newPw = " + newPw + ", twoNewPw = " + twoNewPw + ", checkNum = " + checkNum);
    if (oldPw == "" || newPw == "" || twoNewPw == "") {
        alert("密码不能为空！");
    } else if (newPw == twoNewPw) {
        var obj = {"newPw": newPw, "oldPw": oldPw, "checkNum": checkNum};
        setNewPassw(obj, function (data) {
            alert(data.msg);
        });
    } else {
        alert("新密码两次输入不同，请重新输入！");
    }
}