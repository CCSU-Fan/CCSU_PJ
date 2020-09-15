var Lists = document.getElementsByTagName("input");//获取所有input组件
	for (i=0; i<Lists.length; i++) {
		
		var name = Lists[i].getAttribute("name");//不同的name
		var radioxh = Lists[i].getAttribute("radioxh");//0-非常满意 1-满意
		if( radioxh=="0")
		{
		      Lists[i].checked = true;//选择
		}
		
		if(name=="radio3" && radioxh=="1")//不能全部选择同一选项，改选一个
		{
		       Lists[i].checked = true;
		}

		
		
	}

document.getElementById("tj").onclick();//触发提交函数
