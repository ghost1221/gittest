/**
 * 获取交易数据
 * @param obj
 * @param fn
 */
function getDataOfDeal(obj, fn) {
    var url = "json/deal.json";
    AjaxRequest(obj, url, fn);
}

/**
 * 获取商户数据
 * @param obj
 * @param fn
 */
function getDataOfSeller(obj, fn) {
    var url = "json/seller.json";
    AjaxRequest(obj, url, fn);
}

/**
 * 获取收益数据
 * @param obj
 * @param fn
 */
function getDataOfProfit(obj, fn) {
    var url = "json/profit.json";
    AjaxRequest(obj, url, fn);
}

/**
 * 修改密码
 * @param obj
 * @param fn
 */
function setNewPassw(obj, fn) {
    var url = "json/editPassw.json";
    AjaxRequest(obj, url, fn);
}

/**
 * 发送提现申请
 * @param obj
 * @param fn
 */
function getMoneyRequest(obj, fn) {
    var url = "json/getMoney.json";
    AjaxRequest(obj, url, fn);
}

/**
 * 获取提现记录
 * @param obj
 * @param fn
 */
function getMoneyRecordRequest(obj, fn) {
    var url = "json/getMoneyRecord.json";
    AjaxRequest(obj, url, fn);
}

/**
 * 登录
 * @param obj
 * @param fn
 */
function sendLoginRequest(obj, fn) {
    var url = "json/login.json";
    AjaxRequest(obj, url, fn);
}
/**
 * 发送AJAX请求
 * @param param
 * @param url
 * @param fn
 * @constructor
 */
function AjaxRequest(param, url, fn) {
    $.ajax({
        //请求方式
        type : "GET",
        //请求的媒体类型
        contentType: "application/json;charset=UTF-8",
        //请求地址
        url : url,
        //数据，json字符串
        data : JSON.stringify(param),
        //请求成功
        success : function(result) {
            console.log(result);
            fn && fn(result);
        },
        //请求失败，包含具体的错误信息
        error : function(e){
            console.log(e.status);
            console.log(e.responseText);
        }
    });
}


// 返回主页面
function returnMenu() {
    document.location.href = 'index.html';
}

// 控制台打印
function print(str) {
    var cont = '...... print ...... : ';
    console.log(cont + str);
}