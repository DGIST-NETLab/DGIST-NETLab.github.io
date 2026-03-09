/*
개발 진행시 사용 개발완료 후 HOME/data/js/common.js에 통합예정
*/
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



function doImgPop(img){ 
 img1= new Image(); 
 img1.src=(img); 
 imgControll(img); 
} 
  
function imgControll(img){
	if((img1.width!=0)&&(img1.height!=0)){
		viewImage(img);
	}else{
		controller="imgControll('"+img+"')"; 
		intervalID=setTimeout(controller,20); 
	}
}
function viewImage(img){
 W=img1.width; 
 H=img1.height; 
 O="width="+W+",height="+H+",scrollbars=yes"; 
 imgWin=window.open("","",O); 
 imgWin.document.write("<html><head><title>이미지상세보기</title></head>");
 imgWin.document.write("<body topmargin=0 leftmargin=0>");
 imgWin.document.write("<img src="+img+" onclick='self.close()' style='cursor:pointer;' title ='클릭하시면 창이 닫힙니다.'>");
 imgWin.document.close();
}