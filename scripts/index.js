// JavaScript Document

//Begin:公告消息滚动
function scrolls(obj){
   var num=(obj.scrollLeft)++;
   if(obj.scrollLeft==num){
	   obj.innerHTML+=obj.innerHTML;	  
   }
   if(obj.scrollLeft>=obj.firstChild.offsetWidth)obj.scrollLeft=0;
}
var myMar=setInterval("scrolls(document.getElementById('gundong'))",20);
document.getElementById('gundong').onmousemove=function(){ clearInterval(myMar) };
document.getElementById('gundong').onmouseout=function(){ myMar=setInterval("scrolls(document.getElementById('gundong'))",20) };
//End:公告消息滚动

//登陆
function login(){
	var usrname=document.getElementById("usrname");
	var password=document.getElementById("password");
	usrname.value=usrname.value.replace(/\s{1,}/g,"");
	if (usrname.value=="请输入邮箱/会员账号/手机号"){
		alert("请输入账户！");
		usrname.focus();
		return;
	}
	if (password.value==""){
		alert("请输入密码！");
		password.focus();
		return;
	}
	location.href('home.html');
}

//输入时的动作
function OnEnter(field){
	field.focus();
	if(field.value == field.defaultValue){
		field.value = "";
	} 
}
function OnExit(field){
	if(field.value == ""){
		field.value = field.defaultValue;
	}
	field.focus();
}
