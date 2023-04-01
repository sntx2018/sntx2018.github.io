// 代码高亮
hljs.initHighlightingOnLoad();
$(document).ready(function () {
    $('#sidebar').stickySidebar({
        topSpacing: 60,
        bottomSpacing: 60
    });

    // 图片放大
    $('p img').zoomify();

    // back to top
    $('.to-top').toTop({
        //以下是选项默认参数，您可以根据自己的需求修改
        autohide: true,  // 是否自动隐藏
        offset: 420,     // 距离顶部多少距离时自动隐藏按钮
        speed: 200,      // 滚动持续时间
        position: true,  // 如果设置为 false，则需要手动在 css 中设置“按钮”的位置
        right: 20,       // 右侧距离
        bottom: 120      // 底部距离
    });

});

function showLoginModal() {
    $('#loginModal').modal('show');
}

function ajaxLogin() {
    var formParam = $('#login-form').serialize();
    $.ajax({
        type: "post",
        async: true,
        url: "/login",
        data: formParam,
        success: function (response) {
            if (response.success == true) {
                $('#loginModal').modal('hide');
                window.location.reload();
            } else {
                layer.msg(response.errorMessage);
            }
        },
        // http status not 200
        error: function(response) {
            layer.msg('登录失败 !!!');
        }
    });
}

(function(){
    var bp = document.createElement('script');
    var curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https') {
        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
    }
    else {
        bp.src = 'http://push.zhanzhang.baidu.com/push.js';
    }
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
})();

var title = location.pathname.substr(0, 50);
var gitalk = new Gitalk({
    clientID: '6b60cd901e2b1f07d766',
    clientSecret: 'aaef1f960ce2a6c0bec583e1e1393b8f173b672b',
    repo: 'weiwosuoai.github.io',
    owner: 'weiwosuoai',
    admin: ['weiwosuoai'],
    id: title,      // Ensure uniqueness and length less than 50
    distractionFreeMode: false
})

gitalk.render('gitalk-container')