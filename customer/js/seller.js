$(document).ready(function(){
    // 获取交易数据
    getSellerDate();
});

var sellerData = {};  // 页面数据存储
// 获取交易数据
function getSellerDate() {
    var dataObject = {};
    getDataOfSeller(dataObject, function (data) {
        showDealHtml(data);
    });
}

// 显示商户总数
function setSellerTotal(num) {
    $('.head-title-desc').html('商户数：'+num);
}

// 列表点击进入明细
function openSellerInfo(index) {
    print('index = ' + index);
    var listData = sellerData.data;
    var curData = listData[index];

    $('.deal-info-head-name').html(curData['company']);   // 商户名称
    $('.deal-info-head-price').html(curData['price']);  // 交易金额
    $('.deal-info-head-status').html(curData['status']) // 交易状态

    var elemAry = $('.deal-info-body-value');
    var valueAry = [
        curData['businessNo'],
        curData['taxNo'],
        curData['organizationCode'],
        curData['bankName'],
        curData['bankAccount'],
        curData['serverPoint'],
        curData['maxPay'],
        curData['minPay']
    ];
    valueAry.forEach(function (item, index) {
        $(elemAry[index]).html(item);
    });
    $(valueAry[4]).html(curData['receive_account'])    // 收款账号
    $.mobile.changePage('#pageOther');
}
// 渲染交易数据
function showDealHtml(data) {
    sellerData = data;
    var sellerList = data.data;
    var total = sellerList.length;
    setSellerTotal(total);
    var html = '<ul>';
    for (var i=0; i<total; i++) {
        html += '<li onclick="openSellerInfo('+i+')">\n' +
            '                        <div class="result-li-left">\n' +
            '                            <ul>\n' +
            '                                <li class="fontcolor-name">'+sellerList[i]["company"]+'</li>\n' +
            '                                <li class="fontcolor-name">联系人：'+sellerList[i]["Contacts"]+'</li>\n' +
            '                                <li class="fontcolor-date">电话：'+sellerList[i]["phone"]+'</li>\n' +
            '                            </ul>\n' +
            '                        </div>\n' +
            '                        <div class="result-li-right">\n' +
            '                            <ul>\n' +
            '                                <li class="fontcolor-price-up">'+sellerList[i]["serverPoint"]+'</li>\n' +
            '                                <li class="fontcolor-status-ing">'+sellerList[i]["city"]+'</li>\n' +
            '                            </ul>\n' +
            '                        </div>\n' +
            '                    </li>';
    }

    html += '</ul>';
    $('#search_list').html(html);
}
