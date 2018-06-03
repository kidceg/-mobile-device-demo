window.onload = function(){


function setHtml() {
	// 获取设备宽度
	var client_width = document.body.clientWidth;
	// 以360PX的设计稿为基准，计算应该设置的html的font-size的值
	var html_font_size = (client_width / 360) * 100;
	// 设置值
	document.getElementsByTagName('html')[0].style['font-size'] = html_font_size + 'px';	
}

setHtml();
// 窗口大小发生变化时改变html的font-size值
window.onresize = function(){
setHtml();

}

// 获取购物模块
var screen_coupon = document.getElementById('screen_coupon');


// 购物券模块只弹出一次

// // 方法一：使用localstorage储存
// findstorage();
// function findstorage() {
// 	if (localStorage.firstLoad) {
// 		screen_coupon.style.display = 'none';
// 	}
// 	else if (!localStorage.firstLoad)	{
// 		screen_coupon.style.display = 'block';	
// 		localStorage.firstLoad = 1;	
// 	}
// }
// // localStorage.clear();

// 方法二：使用cookie储存
// 判断是否有对应cookie('firstLoad','yes')
// checkCookie();
// function checkCookie() {
// 	if(getCookie('firstLoad') == '') {
// 		alert('1');
// 		screen_coupon.style.display = 'block';	
// 		setCookie('firstLoad','yes','s20'); 
// 	}
// 	else { 	
// 		alert('2');
// 		screen_coupon.style.display = 'none';
// 	}
// }


// function setCookie(name,value,time) {
// 	var strsec = getsec(time);
// 	var exp = new Date();
// 	exp.setTime(exp.getTime() + strsec*1);
// 	document.cookie = name + "="+ escape(value) + ";expires=" + exp.toGMTString();
// }
// function getsec(str) {
// 	var str1 = str.substring(1,str.length)*1;
// 	var str2 = str.substring(0,1);
// 	if (str2 == "s") {
// 		return str1*1000;
// 	}
// 	else if (str2 == "h") {
// 		return str1*60*60*1000;
// 	}
// 	else if (str2 == "d") {
// 		return str1*24*60*60*1000;
// 	} } 
// 这是有设定过期时间的使用示例： 
// s20是代表20秒 
// h是指小时，如12小时则是：h12 
// d是天数，30天则：d30 


// function getCookie(cname) {
//   var name = cname + "=";
//   var ca = document.cookie.split(';');
//   for (var i = 0; i < ca.length; i++) {
//     var c = ca[i].trim();
//     if (c.indexOf(name) == 0) {
//     	return c.substring(name.length,c.length);
//     }
//   }
//   return "";
// }

// 删除cookie
// delCookie("firstLoad");
// 删除cookies
// function delCookie(name)
// {
//     var exp = new Date();
//     exp.setTime(exp.getTime() - 1);
//     var cval=getCookie(name);
//     if(cval!=null)
//         document.cookie= name + "="+cval+";expires="+exp.toGMTString();
// } 



// 获取购物券模块关闭按钮

var closeCoupon = document.getElementById('closeCoupon');
// 触摸购物模块关闭按钮，购物模块消失
closeCoupon.addEventListener('touchend', function () {
		screen_coupon.style.display = 'none';
});

closeCoupon.addEventListener('click', function () {
		screen_coupon.style.display = 'none';
});

// 获取优惠券价格的集合
var gift_price = document.getElementsByClassName('gift-price');
// 优惠价格大于3位数则更改字体大小
for (var i = 0; i < gift_price.length; i++) {
	var get_price = gift_price[i].innerHTML;
	if (get_price.length > 3) {
		gift_price[i].style['font-size'] = '.23rem';
	}
}









}








// // jQuery的写法
// $(document).ready(function () {
// // 窗口大小发生变化时改变html的font-size值
// $(window).resize(function (){

// // 获取设备宽度
// var client_width = $(window).width();

// // 以360PX的设计稿为基准，计算应该设置的html的font-size的值
// var html_font_size = (client_width / 360) * 100;
// // 设置值
// $('html').css('font-size', html_font_size + 'px');

// });
