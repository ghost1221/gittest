$(document).ready(function(){
    // 设置查询日期
    var date = new Date().toLocaleDateString();
    setDate(date, date);
    // 获取交易数据
    getDealDate();

    // 查询日期添加点击事件
    searchDateEvent();
    // 排序按钮添加点击事件
    listOrderEvent();
    // 重置和确定按钮添加点击事件
    searchBtnEvent();
});

var dealData = {};  // 页面数据存储
// 重置和确定按钮添加点击事件
function searchBtnEvent() {
    $('.reset-btn').click(function (e) {
        $('.panel-date-select a:eq(0)').click();
        $('.panel-date-order a:eq(1)').click();
    });
    $('.confirm-btn').click(function (e) {
        getDealDate();
        $('#panelCloseBtn').click();
    });
}
// 查询日期添加点击事件
function searchDateEvent() {
    $('.panel-date-select a').click(function (e) {
        $('.panel-date-select a').removeClass('btnfocus');
        $(this).addClass('btnfocus');
        var num = $(this).attr('data-value');
        var date = new Date(),
            startDate = '',
            endDate = date.toLocaleDateString();
        if (num == 1) { // 近1日
            startDate = date;
        } else if (num == 2) { // 近3日
            date.setDate(date.getDate() - 2);
        } else if (num == 3) { // 近1周
            date.setDate(date.getDate() - 6);
        } else if (num == 4) { // 近1月
            date.setDate(date.getDate() - 29);
        }
        startDate = date.toLocaleDateString();
        setDate(startDate, endDate);
    });
}

// 数据排序按钮添加点击事件
var listOrderNum = 2;   // 默认降序
function listOrderEvent() {
    $('.panel-date-order a').click(function (e) {
        $('.panel-date-order a').removeClass('btnfocus');
        $(this).addClass('btnfocus');
        var num = $(this).attr('data-value');
        listOrderNum = num;
    });
}

// 设置查询日期
function setDate(start, end) {
    start = start.replace(/\//g,'-');
    end = end.replace(/\//g,'-');
    $('#dealDateStart').val(start);
    $('#dealDateEnd').val(end);
}

// 获取交易数据
function getDealDate() {
    var start = $('#dealDateStart').val();
    var end = $('#dealDateEnd').val();
    print('start time = ' + start + ', end time = ' + end);
    print('listOrderNum = ' + listOrderNum);
    var dataObject = {"start": start, "end": end};
    getDataOfDeal(dataObject, function (data) {
        showDealHtml(data);
    });
}

// 列表点击进入明细
function openDealInfo(index) {
    print('index = ' + index);
    var listData = dealData.data;
    var curData = listData[index];

    $('.deal-info-head-name').html(curData['company']);   // 商户名称
    $('.deal-info-head-price').html(curData['price']);  // 交易金额
    $('.deal-info-head-status').html(curData['status']) // 交易状态

    var valueAry = $('.deal-info-body-value');
    $(valueAry[0]).html(curData['order_num']); // 订单号
    $(valueAry[1]).html(curData['order_id'])   // 交易流水号
    $(valueAry[2]).html(curData['date'])   // 交易时间
    $(valueAry[3]).html(curData['receive_name'])   // 收款人姓名
    $(valueAry[4]).html(curData['receive_account'])    // 收款账号
    $.mobile.changePage('#pageOther');
}
// 渲染交易数据
function showDealHtml(data) {
    dealData = data;
    var dealList = data.data;
    var total = dealList.length;

    var html = '<ul>';
    for (var i=0; i<total; i++) {
        html += '<li onclick="openDealInfo('+i+')">\n' +
            '                        <div class="result-li-left">\n' +
            '                            <ul>\n' +
            '                                <li class="fontcolor-name">'+dealList[i]["company"]+'</li>\n' +
            '                                <li class="fontcolor-name">订单号：'+dealList[i]["order_num"]+'</li>\n' +
            '                                <li class="fontcolor-date">'+dealList[i]["date"]+'</li>\n' +
            '                            </ul>\n' +
            '                        </div>\n' +
            '                        <div class="result-li-right">\n' +
            '                            <ul>\n' +
            '                                <li class="fontcolor-price-up">'+dealList[i]["price"]+'</li>\n' +
            '                                <li class="fontcolor-status-ing">'+dealList[i]["status"]+'</li>\n' +
            '                            </ul>\n' +
            '                        </div>\n' +
            '                    </li>';
    }

    html += '</ul>';
    $('#search_list').html(html);
}
