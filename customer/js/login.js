function onloadFn() {
    document.getElementById("loginBtn").onclick = function (e) {
        var accId = document.getElementById("accountId").value;
        var pwId = document.getElementById("passwordId").value;
        var checkId = document.getElementById("checkNumId").value;
        login(accId, pwId, checkId);
    }
}

function login(accId, pwId, checkId) {
    var obj = {"account": accId, "password": pwId, "checkNum": checkId};
    sendLoginRequest(obj, function (data) {
        alert(data.msg);
    });
}