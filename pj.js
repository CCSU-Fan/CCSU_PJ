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

//document.getElementById("tj").onclick();//触发提交函数

	////保存评教信息 function saveData(obj)
	var elements=window.Form1.elements;
	var count=0;
	var flag=false;
	var chooseColumn="";
	var val="";
	for(i=0;i<elements.length;i++){
		if(elements[i].type=="radio"){
			if(elements[i].checked==true){
				if(chooseColumn!=""&&chooseColumn!=elements[i].radioXh){
					flag=true;
				}
				count=count+1;
				chooseColumn=elements[i].radioXh;
				val+=elements[i].value+"*";
				
				
			}
		}
	}
	document.getElementById("type").value="2";
	window.Form1.action="/jwxt/jxpjgl.do?method=savePj&tjfs=2&val="+val.substring(0,val.length-1);
	window.Form1.submit();
