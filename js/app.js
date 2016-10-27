/**
 * Created by cmh on 2016/10/18.
 */
Zepto(function () {
    //点透处理
    $(function() {
        FastClick.attach(document.body);
    });
    //调用轮播图模块
    var mySwiper = new Swiper('.swiper-container', {
        autoplay: 2500,//可选选项，滑动时间 毫秒
        // 如果需要分页器
        pagination: '.swiper-pagination'

    });
    //调用滑动快捷入口模块
    var mySwiperNav = new Swiper('.swiper-container_nav', {
        // 如果需要分页器
        pagination: '.swiper-pagination_nav'

    });
    //全部
    $('.foodAll').tap(function () {
        $(".foodAllBox").toggle();

        $(this).find(".selectTy").toggleClass("selectTyTr");
        $(this).find(".text").toggleClass("textActive");
    });
    $(".footAllItem").tap(function () {//下拉选项选中操作
        //UI
        $(".footAllItem").css({
            "background": "#fff",
            "color": "#666"
        });
        $(this).css({
            "background": "#f2f2f2",
            "color": "#06c1ae"
        });
        //设值
        $(".foodAll").find(".text").text($(this).text());
        $(".foodAllBox").hide();
        $(".foodAll").find(".selectTy").removeClass("selectTyTr");
        $(".foodAll").find(".text").removeClass("textActive");
    });
    //附近
    $('.footFuJin').tap(function () {
        $(".footFuJinBox").toggle();
        $(this).find(".selectTy").toggleClass("selectTyTr");
        $(this).find(".text").toggleClass("textActive");
    });
    $(".footFuJinBoxItem").tap(function () {//下拉选项选中操作
        //UI
        $(".footFuJinBoxItem").css({
            "background": "#fff",
            "color": "#666"
        });
        $(this).css({
            "background": "#f2f2f2",
            "color": "#06c1ae"
        });
        //设值
        $(".footFuJin").find(".text").text($(this).text());
        $(".footFuJinBox").hide();
        $(".footFuJin").find(".selectTy").removeClass("selectTyTr");
        $(".footFuJin").find(".text").removeClass("textActive");
    });
    //排序
    $('.foodPaiXu').tap(function () {
        $(".footPaiXuBox").toggle();
        $(this).find(".selectTy").toggleClass("selectTyTr");
        $(this).find(".text").toggleClass("textActive");
    });
    $(".footPaiXuItem").tap(function () {//下拉选项选中操作
        //UI
        $(".footPaiXuItem").css({
            "background": "#fff",
            "color": "#666"
        });
        $(this).css({
            "background": "#f2f2f2",
            "color": "#06c1ae"
        });
        //设值
        $(".foodPaiXu").find(".text").text($(this).text());
        $(".footPaiXuBox").hide();
        $(".foodPaiXu").find(".selectTy").removeClass("selectTyTr");
        $(".foodPaiXu").find(".text").removeClass("textActive");
    });
    //筛选
    $('.foodSaiXuan').tap(function () {
        $(".footSaiXuanBox").toggle();
        $(this).find(".selectTy").toggleClass("selectTyTr");
        $(this).find(".text").toggleClass("textActive");
    });
    $(".footSaiXuanItem").tap(function () {//下拉选项选中操作
        //UI
        $(".footSaiXuanItem").css({
            "background": "#fff",
            "color": "#666"
        });
        $(this).css({
            "background": "#f2f2f2",
            "color": "#06c1ae"
        });
        //设值
        $(".foodSaiXuan").find(".text").text($(this).text());
        $(".footSaiXuanBox").hide();
        $(".foodSaiXuan").find(".selectTy").removeClass("selectTyTr");
        $(".foodSaiXuan").find(".text").removeClass("textActive");
    });

    //添加收货地址JS
    $("#defaultAddress").tap(function () {
        debugger;
       $(this).toggleClass("defaultY");
    });
    $(".defaultN").tap(function(){
        $(".defaultN").removeClass("defaultY");
       $(this).addClass("defaultY");
    });
    //帮助中心js
    $(".helpBox .title").tap(function(){
        $(".helpBox .title").siblings(".content").hide();
        $(".helpBox .title").children(".icon-back3").removeClass("icon-back3Active");
       $(this).siblings(".content").toggle();
        $(this).children(".icon-back3").toggleClass("icon-back3Active");

    });
    //新增卡券js
    $(".discountType label").tap(function(){
        $(".discountType label").children("span").removeClass("on");
        $(this).children("span").addClass("on");
    });
    //返回上一页
    $(".back").tap(function(){
        window.history.go(-1);
    });
    //美食秒杀模块js
   var seckillScreenH = $(".seckillScreenC").offset().top;

    window.onscroll = function () {//锁定筛选区域
        var t = document.documentElement.scrollTop || document.body.scrollTop;
        if (t >= seckillScreenH) {
            $(".seckillScreenC").addClass("seckillScreenFixed");
            $(".footItemsBox").addClass("footItemsBoxFixed");
        } else {
            $(".seckillScreenC").removeClass("seckillScreenFixed");
            $(".footItemsBox").removeClass("footItemsBoxFixed");
        }
    }

});
