$(document).ready(function(){
    $("#img_preview").click(function (e) {
        $("#file_update").click();
    });
    $("#getMoneyBtn").click(function (e) {
        var account = $("#bankAccount").val();
        var money = $("#getMoney").val();
        var phone = $("#userPhone").val();
        var imgSrc = $("#img_preview").attr("src");
        var obj = {"money": money, "account": account, "phone": phone, "img": imgSrc};
        // 点击提现
        getMoneyRequest(obj, function (data) {
            alert(data.msg);
        })
    });
    //上传图片选择文件改变后刷新预览图
    $(function() {
        $('#file_update').change(function() {
            var file = this.files[0];
            var r = new FileReader();
            r.readAsDataURL(file);
            $(r).load(function() {
                //$('#photo').html('<img src="' + this.result + '" alt="" />');
                $("#img_preview").attr("src", this.result);
            })
        })
    });
    getMoneyRecord();
});

function getMoneyRecord() {
    var obj = {};
    getMoneyRecordRequest(obj, function (data) {
        var recordAry = data.data;
        var html = '';
        recordAry.forEach(function (item, index) {
            html += '<div class="ui-grid-c">' +
                '<div class="ui-block-a list-date-style">'+item['date']+'</div>' +
                '<div class="ui-block-b">'+item['price']+'</div>' +
                '<div class="ui-block-c">'+item['type']+'</div>' +
                '<div class="ui-block-d">'+item['status']+'</div>' +
                '</div>'
        });
        $("#list_record").html(html);
    });
}