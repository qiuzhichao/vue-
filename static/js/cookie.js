/*用export把方法暴露出来*/

export function setCookie(name, value, days) {
	var value=JSON.stringify(value);
	var Days = days || 30; //此 cookie 将被保存 30 天
	var exp = new Date(); //new Date("December 31, 9998");
	exp.setTime(exp.getTime() + 60 * 60 * 1000 *24*30); 
	document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + "; path=/";
};
export function clearCookie(name) {  
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval=getCookie(name);
    if(cval!=null) document.cookie= name + "="+cval+";expires="+exp.toGMTString()+"; path=/";
};
export function getCookie(name) {  
	var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
	if (arr != null) return unescape(arr[2]);
	return null;
};
export function clearAllCookie(){ 
	var cookies = document.cookie.split(";");
	for (var i = 0; i < cookies.length; i++) {
		var cookie = cookies[i];
		var eqPos = cookie.indexOf("=");
		var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
		document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
	}
	if (cookies.length > 0) {
		for (var i = 0; i < cookies.length; i++) {
			var cookie = cookies[i];
			var eqPos = cookie.indexOf("=");
			var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
			var domain = location.host.substr(location.host.indexOf('.'));
			document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=" + domain;
		}
	}
} 