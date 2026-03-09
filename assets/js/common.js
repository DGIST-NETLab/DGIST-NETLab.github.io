function sitemap_show(){
	$("#dhu-sitemap").show();
	$("#dhu-sitemap").addClass("show");
}

function sitemap_hide(){
	$("#dhu-sitemap").hide();
	$("#dhu-sitemap").removeClass("show");
}

jQuery(function($){
    $.datepicker.regional['ko'] = {
        closeText: '닫기',
        prevText: '이전달',
        nextText: '다음달',
        currentText: '오늘',
        monthNames: ['1월','2월','3월','4월','5월','6월',
        '7월','8월','9월','10월','11월','12월'],
        monthNamesShort: ['1월','2월','3월','4월','5월','6월',
        '7월','8월','9월','10월','11월','12월'],
        dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'],
        dayNamesShort: ['일','월','화','수','목','금','토'],
        dayNamesMin: ['일','월','화','수','목','금','토'],
        weekHeader: 'Wk',
        dateFormat: 'yy-mm-dd',
        firstDay: 0,
        isRTL: false,
		changeYear: true,
		changeMonth: true,
		yearRange:"1900:2050",
        showMonthAfterYear: true,
        yearSuffix: '년'};
    $.datepicker.setDefaults($.datepicker.regional['ko']);
});
$(document).ready(function(){
	$(".txtDate").datepicker({
		showOn: "both", //이미지로 사용 , both : 엘리먼트와 이미지 동시사용
		buttonImage: "../../img/cs_icon_calendar.gif", //버튼으로 사용할 이미지 경로
		buttonImageOnly: true //이미지만 보이기
	});
	$(".txtDate_focus").datepicker({
		showOn: "focus", //이미지로 사용 , both : 엘리먼트와 이미지 동시사용
		buttonImageOnly: false //이미지만 보이기
	});
	$("img.ui-datepicker-trigger").attr("style","margin-left:5px; vertical-align:middle; cursor:pointer;"); 
});

/* showhidelayer */
function MM_reloadPage(init) {  //reloads the window if Nav4 resized
  if (init==true) with (navigator) {if ((appName=="Netscape")&&(parseInt(appVersion)==4)) {
    document.MM_pgW=innerWidth; document.MM_pgH=innerHeight; onresize=MM_reloadPage; }}
  else if (innerWidth!=document.MM_pgW || innerHeight!=document.MM_pgH) location.reload();
}
MM_reloadPage(true);

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_showHideLayers() { //v6.0
  var i,p,v,obj,args=MM_showHideLayers.arguments;
  for (i=0; i<(args.length-2); i+=3) if ((obj=MM_findObj(args[i]))!=null) { v=args[i+2];
    if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v=='hide')?'hidden':v; }
    obj.visibility=v; }
}

/* 탭메뉴 */
function tabOn(containerId,a) {
	var tabContainer = document.getElementById(containerId);
	var tabid = (tabContainer)? tabContainer.id : "mtab"+containerId;
	var tabTagAll = document.getElementById(tabid).getElementsByTagName("*");
	var tabSum = 0;
	for(var i=0;i<tabTagAll.length;i++){
		
		var where = tabTagAll[i].id.indexOf(containerId);
		if(where!=-1) tabSum++;
	}
	tabSum = tabSum/2;
	for(var i=1;i<=tabSum;i++){
		if(i<10){inn="0"+i;} else {inn=""+i;}
		tabMenu = document.getElementById(tabid+"m"+i);
		tabContent = document.getElementById(tabid+"c"+i);
		if (tabMenu) { 
			if (tabMenu.tagName=="IMG") { 
				_imgtype = tabMenu.src.substr(tabMenu.src.length-3,tabMenu.src.length-1);
				tabMenu.src = tabMenu.src.replace("_on."+_imgtype, "."+_imgtype);
			}
			if (tabMenu.tagName=="A") { tabMenu.className=""; } 
		}
		if (tabContent) { tabContent.style.display="none"; }
	}
	if(a<10){ann="0"+a;} else {ann=""+a;}
	tabMenu = document.getElementById(tabid+"m"+a);
	tabContent = document.getElementById(tabid+"c"+a);

	if (tabMenu) { 
		if (tabMenu.tagName=="IMG") { 
			_imgtype = tabMenu.src.substr(tabMenu.src.length-3,tabMenu.src.length-1);
			tabMenu.src = tabMenu.src.replace("."+_imgtype, "_on."+_imgtype);
		}
		if (tabMenu.tagName=="A") { tabMenu.className="on"; } 
	}
	if (tabContent) { tabContent.style.display="block"; }
	tabMore = document.getElementById(tabid+"more");
}

//메인화면 게시판 해당 탭메뉴 보이기
function onNoticeShow(n) {
	for(i=1;i<=8;i++) {
		if(document.getElementById('notice0'+i+'_menu') != null) {
			if(n == i) {
				document.getElementById('notice0'+i+'_menu').style.visibility = 'visible';
				if(document.getElementById('notice0'+i+'_add')){
					document.getElementById('notice0'+i+'_add').style.visibility = 'visible';
				}
				if(document.getElementById('notice0'+i) != null) {
					var re = new RegExp('_off');
					tabMenu = document.getElementById('noticeimg0'+i);
					if(tabMenu){
						if (tabMenu.tagName=="IMG") { 
							_imgtype = tabMenu.src.substr(tabMenu.src.length-3,tabMenu.src.length-1);
							var where = tabMenu.src.indexOf("_on."+_imgtype,0);
							if(where==-1){ tabMenu.src = tabMenu.src.replace("."+_imgtype, "_on."+_imgtype);}
						}else{
						document.getElementById('notice0'+i).className = document.getElementById('notice0'+i).className.replace(re,'_on');
						}
					}else{
						document.getElementById('notice0'+i).className = document.getElementById('notice0'+i).className.replace(re,'_on');					
					}
				}
			}else{
				document.getElementById('notice0'+i+'_menu').style.visibility = 'hidden';
				if(document.getElementById('notice0'+i+'_add')){
					document.getElementById('notice0'+i+'_add').style.visibility = 'hidden';
				}
				if(document.getElementById('notice0'+i) != null) {
					var re = new RegExp('_on');
					tabMenu = document.getElementById('noticeimg0'+i);
					if(tabMenu){
						if (tabMenu.tagName=="IMG") { 
							_imgtype = tabMenu.src.substr(tabMenu.src.length-3,tabMenu.src.length-1);
							var where = tabMenu.src.indexOf("_on."+_imgtype,0);
							if(where!=-1){ tabMenu.src = tabMenu.src.replace("_on."+_imgtype, "."+_imgtype);}
						}else{
						document.getElementById('notice0'+i).className = document.getElementById('notice0'+i).className.replace(re,'_off');
						}
					}else{
						document.getElementById('notice0'+i).className = document.getElementById('notice0'+i).className.replace(re,'_off');					
					}
				}
			}
		}
	}		
}

//메인화면 게시판 해당 탭메뉴 보이기(자동생성)
function onNoticeShowAuto(mst,n) {
	for(i=1;i<=8;i++) {
		if(document.getElementById('notice'+mst+'0'+i+'_menu') != null) {
			if(n == i) {
				document.getElementById('notice'+mst+'0'+i+'_menu').style.visibility = 'visible';
				if(document.getElementById('notice'+mst+'0'+i+'_add')){
					document.getElementById('notice'+mst+'0'+i+'_add').style.visibility = 'visible';
				}
				if(document.getElementById('notice'+mst+'0'+i) != null) {
					var re = new RegExp('_off');
					tabMenu = document.getElementById('noticeimg0'+i);
					if(tabMenu){
						if (tabMenu.tagName=="IMG") { 
							_imgtype = tabMenu.src.substr(tabMenu.src.length-3,tabMenu.src.length-1);
							var where = tabMenu.src.indexOf("_on."+_imgtype,0);
							if(where==-1){ tabMenu.src = tabMenu.src.replace("."+_imgtype, "_on."+_imgtype);}
						}else{
						document.getElementById('notice'+mst+'0'+i).className = document.getElementById('notice'+mst+'0'+i).className.replace(re,'_on');
						}
					}else{
						document.getElementById('notice'+mst+'0'+i).className = document.getElementById('notice'+mst+'0'+i).className.replace(re,'_on');					
					}
				}
			}else{
				document.getElementById('notice'+mst+'0'+i+'_menu').style.visibility = 'hidden';
				if(document.getElementById('notice'+mst+'0'+i+'_add')){
					document.getElementById('notice'+mst+'0'+i+'_add').style.visibility = 'hidden';
				}
				if(document.getElementById('notice'+mst+'0'+i) != null) {
					var re = new RegExp('_on');
					tabMenu = document.getElementById('noticeimg0'+i);
					if(tabMenu){
						if (tabMenu.tagName=="IMG") { 
							_imgtype = tabMenu.src.substr(tabMenu.src.length-3,tabMenu.src.length-1);
							var where = tabMenu.src.indexOf("_on."+_imgtype,0);
							if(where!=-1){ tabMenu.src = tabMenu.src.replace("_on."+_imgtype, "."+_imgtype);}
						}else{
						document.getElementById('notice'+mst+'0'+i).className = document.getElementById('notice'+mst+'0'+i).className.replace(re,'_off');
						}
					}else{
						document.getElementById('notice'+mst+'0'+i).className = document.getElementById('notice'+mst+'0'+i).className.replace(re,'_off');					
					}
				}
			}
		}
	}		
}

//메인화면 탭 컨텐츠 보이기(자동생성)
function ontabAuto(mst,n) {
	ii = 0;
	for(i=1;i<=20;i++) {
		if(i<10){ii="0"+i;} else {ii=""+i;}
		if(document.getElementById(mst+ii+'_menu') != null) {
			if(n == i) {
				document.getElementById(mst+ii+'_menu').style.visibility = 'visible';
				if(document.getElementById(mst+ii+'_add')){
					document.getElementById(mst+ii+'_add').style.visibility = 'visible';
				}
				if(document.getElementById(mst+ii) != null) {
					var re = new RegExp('_off');
					tabMenu = document.getElementById(mst+'img'+ii);
					if(tabMenu){
						if (tabMenu.tagName=="IMG") { 
							_imgtype = tabMenu.src.substr(tabMenu.src.length-3,tabMenu.src.length-1);
							var where = tabMenu.src.indexOf("_on."+_imgtype,0);
							if(where==-1){ tabMenu.src = tabMenu.src.replace("."+_imgtype, "_on."+_imgtype);}
						}else{
						document.getElementById(mst+ii).className = document.getElementById(mst+ii).className.replace(re,'_on');
						}
					}else{
						document.getElementById(mst+ii).className = document.getElementById(mst+ii).className.replace(re,'_on');					
					}
				}
			}else{
				document.getElementById(mst+ii+'_menu').style.visibility = 'hidden';
				if(document.getElementById(mst+ii+'_add')){
					document.getElementById(mst+ii+'_add').style.visibility = 'hidden';
				}
				if(document.getElementById(mst+ii) != null) {
					var re = new RegExp('_on');
					tabMenu = document.getElementById(mst+'img'+ii);
					if(tabMenu){
						if (tabMenu.tagName=="IMG") { 
							_imgtype = tabMenu.src.substr(tabMenu.src.length-3,tabMenu.src.length-1);
							var where = tabMenu.src.indexOf("_on."+_imgtype,0);
							if(where!=-1){ tabMenu.src = tabMenu.src.replace("_on."+_imgtype, "."+_imgtype);}
						}else{
						document.getElementById(mst+ii).className = document.getElementById(mst+ii).className.replace(re,'_off');
						}
					}else{
						document.getElementById(mst+ii).className = document.getElementById(mst+ii).className.replace(re,'_off');					
					}
				}
			}
		}
	}		
}

//네이버지도API
function naver_map_api(Lat,Lng,mapid, maptitle,level,width_s,height_s){
	var oSeoulCityPoint = new nhn.api.map.LatLng(Lat, Lng);
	var defaultLevel = level;
	var oMap = new nhn.api.map.Map(document.getElementById(mapid), {
					point : oSeoulCityPoint,
					zoom : defaultLevel,
					enableWheelZoom : true,
					enableDragPan : true,
					enableDblClickZoom : false,
					mapMode : 0,
					activateTrafficMap : false,
					activateBicycleMap : false,
					minMaxLevel : [ 1, 14 ],
					size : new nhn.api.map.Size(width_s, height_s)           });

	var oSlider = new nhn.api.map.ZoomControl();
	oMap.addControl(oSlider);
	oSlider.setPosition({
		top : 10,
		left : 10
	});

	var oMapTypeBtn = new nhn.api.map.MapTypeBtn();
	oMap.addControl(oMapTypeBtn);
	oMapTypeBtn.setPosition({
		bottom : 10,
		right : 80
	});

	var oThemeMapBtn = new nhn.api.map.ThemeMapBtn();
	oThemeMapBtn.setPosition({
		bottom : 10,
		right : 10
	});
	oMap.addControl(oThemeMapBtn);

	var trafficButton = new nhn.api.map.TrafficMapBtn();
	trafficButton.setPosition({
		bottom:10,
		right:150
	}); 
	oMap.addControl(trafficButton);


   
   var oSize = new nhn.api.map.Size(28, 37);
   var oOffset = new nhn.api.map.Size(14, 37);
   var oIcon = new nhn.api.map.Icon('http://static.naver.com/maps2/icons/pin_spot2.png', oSize, oOffset);

   var oMarker = new nhn.api.map.Marker(oIcon, { title : maptitle }); 
   oMarker.setPoint(oSeoulCityPoint);
   oMap.addOverlay(oMarker);

   var oLabel1 = new nhn.api.map.MarkerLabel(); 
   oMap.addOverlay(oLabel1);
   oLabel1.setVisible(true, oMarker);
}

// 글자크기
//var defaultFontSize = 13;
var defaultFontSize = 100;
function zoomFont(val){
	/*
	var bodyArea = document.getElementById("body_content");
	//var bodyArea = document.getElementsByTagName("body").item(0);
	

	if(val == 0)
	{
		defaultFontSize = 13;
		bodyArea.style.fontSize = defaultFontSize + "px";
	}
	else
	{
		defaultFontSize += val;
		//alert(defaultFontSize);
		bodyArea.style.fontSize = defaultFontSize + "px";
	}
	*/

	defaultFontSize += val*10;
	$("#body_content").css("zoom",defaultFontSize+"%");
}

function zoomFont_ctnr(val){
	defaultFontSize += val*10;
	$("#pnb_per").html(defaultFontSize+"%");
	$(".sub-section").css("zoom",defaultFontSize+"%");
}

//서브페이지 텝활성화
function viewTabDiv(tab,num){
	for(var i=1;i<=20;i++){ //전체메뉴비활성
		tabli = document.getElementById(tab+""+i);
		tabdiv = document.getElementById(tab+""+i+"div");
		if(tabli && tabdiv){
			if(num == i){
				tabdiv.style.display="";
				tabli.className="on";
			}else{
				tabdiv.style.display="none";
				tabli.className="";
			}
		}
	}	
}

//프린트(새창)
function contentPrint(section) {
	cont_width = $("#content").width();
	var windowLeft = (screen.width-cont_width)/2;
//	var windowTop = (screen.height-480)/2;
	var windowTop = 20;
	var printURL = "../data/printPage.htm?section="+section;
	window.open(printURL,"contents",'width=' + cont_width + ', height=620, menubar=no, scrollbars=yes,status=no,resizable=yes,top=' + windowTop + ',left=' + windowLeft + '');
}

function boardPrint(section) {
	cont_width = $("#content").width();
	var windowLeft = (screen.width-cont_width)/2;
//	var windowTop = (screen.height-480)/2;
	var windowTop = 20;
	var printURL = "../data/printBoard.htm?section="+section;
	window.open(printURL,"printBoard",'width=' + cont_width + ', height=620, menubar=no, scrollbars=yes,status=no,resizable=yes,top=' + windowTop + ',left=' + windowLeft + '');
}

function login_show(){
	$("#login_layer_bg").toggle();
	$("#login_layer").toggle();
}

function login_close(){
	$("#login_layer_bg").toggle();
	$("#login_layer").toggle();
}

function logout(data){
	 if (confirm("로그아웃 하시겠습니까?")) {
		location.href="../bbs/logout.htm?logout="+data;
	 }
	 else if (i == false)
	 {
		 return;
	 }
}

function sso_logout(data){
	 if (confirm("로그아웃 하시겠습니까?")) {
		location.href="../../sso/logout.php?reUrl="+data;
	 }
	 else if (i == false)
	 {
		 return;
	 }
}

// 배너 로테이션
function cls_bannerRotation(){
	this.n =- 1; // 방 번호 (줄)
	this.delay = 5000; // 딜레이
	this.active = true;		
	this.rotationObj;
	this.instance;

	this.rotation = function(){
		if(!this.active){
			setTimeout(this.instance + ".rotation()",this.delay);
			return;
		}
		this.n++;
		if(this.n>=this.rotationObj.length){
			this.n =0;
		}		
		this.display();
		setTimeout(this.instance + ".rotation()",this.delay);
	}
	
	// 레이어 표시 
	this.display = function() {
		for(var i=0 ;i< this.rotationObj.length;i++){
			this.rotationObj[i].style.display="none";
		}					
		this.rotationObj[this.n].style.display="block";		
	}
	
	// 이전으로 가기
	this.prev = function(){
		this.n--;
		if(this.n < 0){
			this.n =  this.rotationObj.length - 1;
		}
		this.display();
	}

	// 이후로  가기
	this.next = function(){
		this.n++;
		if(this.n >= this.rotationObj.length){
			this.n = 0;
		}
		this.display();
	}

	// 시작
	this.start = function(){
		this.rotation();
	}

	// 재시작
	this.play = function(){
		this.active = true;
	}

	// 멈춤
	this.stop = function(){
		this.active = false;
	}
}

//다이알로그 호출 함수
function modal_layer_add(div_id){
	if(div_id==""){//지정한 레이어가 없을때
		var modal_defaults_pop = "<div id='modal_defaults_pop'></div>";
		if($("#modal_defaults_pop").length < 1 ){//modal_defaults_pop 레이어가 없을때에는 BODY에 넣어준다
			$("body").prepend(modal_defaults_pop);
		}

	}else{//지정한 레이어가 있을때
		var modal_pop = "<div id='"+div_id+"'></div>";
		if($("#"+div_id).length < 1 ){//해당하는 레이어가 없을때 BODY에 넣어준다
			$("body").prepend(modal_pop);
		}
	}
}

/* placeholder(IE처럼 크롬에서도 focus이동시 placeholder 사라지도록) */
$(document).ready(function()  
{  
	$('input, textarea').on('focus',function(){
		if ( $(this).attr('placeholder') ) $(this).data('placeholder', $(this).attr('placeholder')).removeAttr('placeholder');
	}).on('blur', function(){
		if ( $(this).data('placeholder') ) $(this).attr('placeholder', $(this).data('placeholder')).removeData('placeholder');
	});
});  

function common_mem_login(site_code){
	if(site_code!=""){
		modal_layer_add("modal_mem_login_pop");
		$.ajax({
			url: "../data/inc/inc_login.htm?site_code="+site_code,
			success: function(html){
				$("#modal_mem_login_pop").html(html);
			},error: function(html){
			}
		});	
		$("#modal_mem_login_pop").dialog({
			resizable: true,
			height: 400,
			width: 600,
			title: "로그인",
			modal: true,
			buttons: {
				"닫기": function() {
					$( this ).dialog( "close" );
				}
			},
			close: function( event, ui ) {
				$("#modal_mem_login_pop").remove();
			}
		});
	}else{
		alert('필수정보가 존재하지 않습니다.');
	}
}

function common_mem_join(site_code,agreement_accept,private_accept){
	if(site_code!=""){
		modal_layer_add("modal_mem_join_pop");
		$.ajax({
			url: "../data/inc/inc_mem_join.htm?site_code="+site_code+"&agreement_accept="+agreement_accept+"&private_accept="+private_accept,
			success: function(html){
				$("#modal_mem_join_pop").html(html);
			},error: function(html){
			}
		});	
		$("#modal_mem_join_pop").dialog({
			resizable: true,
			height: 600,
			width: 800,
			title: "회원가입",
			modal: true,
			buttons: {
				"닫기": function() {
					$( this ).dialog( "close" );
				}
			},
			close: function( event, ui ) {
				$("#modal_mem_join_pop").remove();
			}
		});
	}else{
		alert('필수정보가 존재하지 않습니다.');
	}
}

$(function(){
	$(".sharing_btn").addClass("_on");
	$(".sharing_btn").click(function() {
		if($(".sharing_btn").hasClass("_on")) {
			$(".sharing_btn").removeClass("_on");
			$(".sharing_icon").show();
		} else {
			$(".sharing_btn").addClass("_on");
			$(".sharing_icon").hide();
		}
	});
});

/*팝업*/
function winpopup(url,width,height,left,top){
	window.open(url,'',"scrollbars=yes,width=" + width + ",height=" + height + ",left=" + left + ",top=" + top + "");
}

/*팝업(스크롤)*/
function winpopupScroll(url,width,height,left,top){
	window.open(url,'',"scrollbars=1,width=" + width + ",height=" + height + ",left=" + left + ",top=" + top + "");
}

function login_pop(site_code,nav_code){
	if(site_code!=""){
		modal_layer_add("modal_mem_login");
		$.ajax({
			url: "../data/inc/login.php?site_code="+site_code+"&nav_code="+nav_code,
			success: function(html){
				$("#modal_mem_login").html(html);
			},error: function(html){
			}
		});	
	}else{
		alert('필수정보가 존재하지 않습니다.');
	}
}

function login_company_pop(site_code,nav_code){
	if(site_code!=""){
		modal_layer_add("modal_mem_login");
		$.ajax({
			url: "../data/inc/login_job_company.php?site_code="+site_code+"&nav_code="+nav_code,
			success: function(html){
				$("#modal_mem_login").html(html);
			},error: function(html){
			}
		});	
	}else{
		alert('필수정보가 존재하지 않습니다.');
	}
}

function login_type_pop(site_code,nav_code){
	if(site_code!=""){
		modal_layer_add("modal_mem_login");
		$.ajax({
			url: "../data/inc/login_type.php?site_code="+site_code+"&nav_code="+nav_code,
			success: function(html){
				$("#modal_mem_login").html(html);
			},error: function(html){
			}
		});	
	}else{
		alert('필수정보가 존재하지 않습니다.');
	}
}

function closeLogin(){
	$("#modal_mem_login").html("");
}

$(document).ready(function(){
	$(document).keyup(function(e) {
		 if (e.keyCode == 27) { // escape key maps to keycode `27`
			closeLogin();
		}
	});
});

function popLoginSend() {
	var form=document.Login_Frm;
	if(form.userid.value=="") {
		alert("아이디를 입력해 주십시오.");
		form.userid.focus();
	} else if(form.passwd.value=="") {
		alert("패스워드를 입력해 주십시오.");
		form.passwd.focus();
	
	} else {
	form.submit();
	}
}	

function main_cal_modal_view(data){
	modal_layer_add("view_pop");
	$.ajax({
		url: "../bbs/bbs_calendar_view_Ajax.php?mv_data="+data,
		success: function(html){
			$("#view_pop").html(html);
		},error: function(html){
		}
	});	

	$("#view_pop").dialog({
		resizable: true,
		height: 550,
		width: 920,
		title: "일정 상세보기",
		modal: true,
		buttons: {
			"닫기": function() {
				$( this ).dialog( "close" );
			}
		},
		close: function( event, ui ) {
			$("#view_pop").remove();
		}
	});
}

function main_cal_modal_view2(data){
	modal_layer_add("view_pop");
	$.ajax({
		url: "../bbs/bbs_calendar_view2_Ajax.php?mv_data="+data,
		success: function(html){
			$("#view_pop").html(html);
		},error: function(html){
		}
	});	

	$("#view_pop").dialog({
		resizable: true,
		height: 550,
		width: 920,
		title: "일정 상세보기",
		modal: true,
		buttons: {
			"닫기": function() {
				$( this ).dialog( "close" );
			}
		},
		close: function( event, ui ) {
			$("#view_pop").remove();
		}
	});
}
$(document).ready(function(){
	var size = $(window).width();
	var width = 1600;
	if(typeof win != 'undefined'){
		width = win;
	}

	const zoom = Math.min(window.innerWidth / width, 1);
	if(size < width){
		document.body.style.zoom = zoom;
	}else{
		document.body.style.zoom = "100%";
	}
});
$(window).resize(function(){
	var size = $(window).width();
	var width = 1600;
	if(typeof win != 'undefined'){
		width = win;
	}

	const zoom = Math.min(window.innerWidth / width, 1);
	if(size < width){
		document.body.style.zoom = zoom;
	}else{
		document.body.style.zoom = "100%";
	}
});

//연락처 하이픈
$(document).on("keyup", ".phoneNumber", function() { $(this).val( $(this).val().replace(/[^0-9]/g, "").replace(/(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/,"$1-$2-$3").replace("--", "-") ); });
//숫자만
$(document).on("keyup", ".onlyNumber", function() { $(this).val($(this).val().replace(/[^0-9]/g,"")); });
