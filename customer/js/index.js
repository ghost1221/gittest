$(document).ready(function () {
    $('.link-list-content li').click(function (e) {
        var index = $(this).index();
        var url = '';
        if (index == 0) {
            url = 'seller.html';
        } else if (index == 1) {
            url = 'deal.html';
        } else if (index == 2) {
            url = 'profit.html';
        } else if (index == 3) {
            url = 'editPassword.html';
        } else if (index == 4) {
            url = 'getMoney.html';
        }

        document.location.href = url;
        //$.mobile.changePage(url);
    });
})