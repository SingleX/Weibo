// JavaScript Document

function yanzheng(){
	var nm = document.getElementById("myname").value;
	var pw = document.getElementById("password").value; 
	var kid = document.getElementById("nickname").value;
	var ym = document.getElementById("check").value;
	
	if(null == nm||"" == nm || nm >16 || nm <6){
		alert("用户名不合法！！");
		return;
		
		}
	if(null == pw ||""==pw||pw>12||pw<4){
	alert("密码不合法！！");
	return;
	
	}
	
	if(kid==""){alert("昵称不合法！！");return;}
    if("cm2hq" != ym){
		alert("验证码不正确！！");
		return;
		}
	alert("数据已提交，注册成功！！");
	
	}