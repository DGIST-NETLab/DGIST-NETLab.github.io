var mobile = 0;
var pc = 0;
var pc_menu = "";
var mobile_menu = "";

$(function(){
	/**
	 *	GNB Initialize
	 */
	var fe_gnbInit = function(){
		var $gnb = $("#gnbmn");
		
		//1depth control
		//alert(max_2menu);
		if(max_2menu > 0) {
			h_px = (max_2menu * 27);
			$gnb.find("> nav > ul > li > a")
				//mouseover
				.bind("mouseenter", function(){ 
					//console.log("ff");
					$(".depth2").show().stop().animate({opacity:'1',height:h_px+40},400);
					$("#id_gnb_bg").stop().animate({opacity:'1',height:h_px+40},200);
				})


			$gnb.mouseleave(function(){
				$(".depth2").stop().animate({height:'0px',opacity:'1'},200,function() {$(".depth2").hide();});
				$("#id_gnb_bg").stop().animate({height:'0px',opacity:'1'},400);
			});
		}
	}
	fe_gnbInit(); //excute
});

function initTopMenu(d1,d2) {//1,2차메뉴초기화,마우스키보드이벤트할당
	//2차메뉴활성
	top2MenuCurrAct = document.getElementById("top2m"+d1+"m"+d2);
	if (top2MenuCurrAct) { top2MenuCurrAct.getElementsByTagName("a")[0].className="on"; }
}

/* snb */
function initsnbMenu(a,b) //2차3차메뉴보기
{
	for(var i=0;i<=20;i++){ //전체메뉴비활성
		snb2Menu = document.getElementById("snb2m"+i);
		snb3Menu = document.getElementById("snb3m"+i);
		if(snb3Menu){
			snb3Menu.style.display="none";//비활성으로 수정함.
		}
	}

	if(a<10){ann="0"+a;} else {ann=""+a;}
	if(b<10){bnn="0"+b;} else {bnn=""+b;}
	snb2MenuCurr = document.getElementById("snb2m"+a);
	snb3Menu = document.getElementById("snb3m"+a);
	snb3MenuCurr = document.getElementById("snb3m"+a+"m"+b);
	if(snb2MenuCurr){
		snb2MenuCurr.firstChild.className="on";
		snb2MenuCurr.className="on";
	}
	if(snb3Menu){ snb3Menu.style.display="block"; }
	if(snb3MenuCurr){
		snb3MenuCurr.firstChild.className="on";
		snb3MenuCurr.className="on";
	}
}

$(document).ready(function(){
	
	var width = window.outerWidth;
	if(width < 1040) {
		$("#mobile-navicon").show();
	} else {
		$("#mobile-navicon").hide();
	}
});

$(window).resize(function(){

	var width = window.outerWidth;
	if(width < 1040) {
		$("#mobile-navicon").show();
	} else {
		$("#mobile-navicon").hide();
		var API = jQuery("#menu").data( "mmenu" );
		API.close();
	}
});