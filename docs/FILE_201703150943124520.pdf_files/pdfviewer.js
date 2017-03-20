var textAreaList = {};
var pageAreaList = [];
var xml = "";
var ratio = 1;
var currentPage = 1;
//var PAGE_NUMBER = 9;
var scrollTopValue = 0;
var xmlPages = [];
var textXmlPages = [];
var thumWidth = 55;
var thumHeight = 75;
var loadedImgCount = 0;
var imgExt = "png";
//var AJAX_URL = '';
var enableScrollEvent = true;
var isFocus = false;
var movebar = 0;
var contentsRight = 0;
var AjaxNum = 99999;
var isAjaxCall = false;
var pageLayout = 1;
var ratioToOrigin = 1;

var RATIO_NUMBERS = {
	curIndex : 3,
	numbers : [0.25, 0.5, 0.75, 1, 1.5, 2, 2.5, 3, 4, 5],
	increaseRatio : function(){
		if (0 <= this.curIndex && this.curIndex < 9) {
			++this.curIndex;
		}
		return this.numbers[this.curIndex];
	},
	reduceRatio : function() {
		if (0 < this.curIndex && this.curIndex <= 9) {
			--this.curIndex;
		}
		return this.numbers[this.curIndex];
	},
	setRatioIndex : function(_ratio) {
		this.curIndex = this.numbers.length - 1;
		if (_ratio > this.numbers[this.numbers.length - 1]) {
			ratio = this.numbers[this.numbers.length - 1];
			return;
		}
		for (var i=0; i<this.numbers.length; i++) {
			if (this.numbers[i] > _ratio) {
				this.curIndex = i;
				break;
			}
		}
	}
};

var TEXT_SEARCH_INFO = {
	curIndex: -1,
	totalCnt: 0,
	searchText: "",
	
	clear : function() {
		this.curIndex = -1;
		this.totalCnt = 0;
		this.searchText = "";
		$(".search-highlight").detach();
	},

	forward : function() {
		if (this.curIndex >= (this.totalCnt - 1)) {
			this.curIndex = 0;
		} else {
			this.curIndex++;
		}
	},

	backward : function() {
		if (this.curIndex <= 0) {
			this.curIndex = (this.totalCnt - 1);
		} else {
			this.curIndex--;
		}
	}
};

function goSearch(moveFunc) {

	if( $("#search").val().length == 0) {
		return;
	}

	$('.fnPrevSearch, .fnNextSearch').addClass('enabled').removeClass('disabled');

	var userSearchText = $("#search")[0].value;
	if (userSearchText == '') { // 아무 문자도 없을 경우 처리
		TEXT_SEARCH_INFO.clear();
		$(".searchResultText").html("Not found");
		return;
	}

	if ( TEXT_SEARCH_INFO.searchText != userSearchText ) { // 새로운 키워드로 검색했을 경우
		TEXT_SEARCH_INFO.clear();
		TEXT_SEARCH_INFO.searchText = userSearchText;
		TEXT_SEARCH_INFO.totalCnt = allSearchTextVisible(userSearchText);

		if (TEXT_SEARCH_INFO.totalCnt > 0) {
			$(".searchResultText").html("<strong class='Color1'>" + TEXT_SEARCH_INFO.totalCnt + "</strong> found");
		}

	} else { // 검색된 키워드 이동시
		moveFunc.apply(TEXT_SEARCH_INFO);

		var searchHighList = $(".search-highlight");
		searchHighList.removeClass("selected-highlight");

		if ( TEXT_SEARCH_INFO.totalCnt > 0 ) { // 검색결과가 있을 경우
			var searchHigh = $(searchHighList[TEXT_SEARCH_INFO.curIndex]);
			searchHigh.addClass("selected-highlight");
			$(".searchResultText").html("<strong class='Color1'>" + (TEXT_SEARCH_INFO.curIndex + 1) + "</strong> of " + TEXT_SEARCH_INFO.totalCnt);
		        if (pageLayout == 3) {
					pageNum = parseInt(searchHigh.parent().parent().parent().parent().attr('id').substr(9), 10) + 1;
			    movePage(pageNum, false, true);
					thumbImageEmphasized(pageNum);
			}

			var searchTop = searchHigh[0].offsetTop + searchHigh.parent()[0].offsetTop - ($("body").width() / 4);
			$("#contentWrap").scrollTop(searchTop);
		} else { // 검색결과가 없을 경우
			$(".searchResultText").html("Not found");
		}

	}
}

function AjaxHandler() {
	if( isAjaxCall == false ) {
		isAjaxCall = true;
		if( AjaxNum < PAGE_NUMBER ) {
			AjaxImage(AJAX_URL, AjaxNum);
		}
	}
}

function initEvent() {
	$("#contentWrap").scroll(function(e) {
		if (enableScrollEvent && pageLayout != 3) {
			var pageChangeBaseHeight = $("#contentWrap").height()/2;
		  	for (var i=0; i<PAGE_NUMBER; i++) {
				var pageBottom = $("#page-area" + i).position().top + $("#page-area" + i).height();
				if ( pageBottom > pageChangeBaseHeight ) {
					changePaperPageNumber(i + 1);
					moveThumbPage(i + 1);

					if( i+INIT_IMAGE_LIMIT >= AjaxNum ) {
						AjaxHandler();
						AjaxNum = AjaxNum+INIT_IMAGE_LIMIT;
  				}
					break;
				}
			}
		}
		enableScrollEvent = true;
  });

  $("#thumbnail_list").scroll(function(e) {
  	var size = $("#thumbnail_center").outerHeight(true)/PAGE_NUMBER;
  	var num = parseInt($('#thumbnail_list').scrollTop()/size)+1;

  	if( num+INIT_IMAGE_LIMIT >= AjaxNum ) {
			AjaxHandler();
			AjaxNum = AjaxNum+INIT_IMAGE_LIMIT;
  	}
  });

}


function initialResize() {

  var bodyElem = $("body");
  ratioToOrigin = $(xmlPages[currentPage - 1]).attr("imgW") / $($(textXmlPages)[currentPage - 1]).attr("w");
  ratio = 1;
  /*
  if( pageLayout == 0 ) {
  	w = ($("#contentWrap").width() - 40) / $(xmlPages[currentPage - 1]).attr("w");
  	if( w > 0.5) {
  		ratio = w-0.5;
  	}else{
  		ratio = w;
  	}
  }else if( pageLayout == 1 ) {
  	w = ($("#contentWrap").width() - 40) / $(xmlPages[currentPage - 1]).attr("w");
  	if( w > 0.06) {
  		ratio = w-0.06;
  	}else{
  		ratio = w;
  	}
  }else if( pageLayout == 2 ) {
  	w = (($("#contentWrap").width()) - 80) / $(xmlPages[currentPage - 1]).attr("w") / 2;
  	if( w > 0.04) {
  		ratio = w-0.04;
  	}else{
  		ratio = w;
  	}
  }
  */
  RATIO_NUMBERS.setRatioIndex(ratio);
}

function resizeView() {
	clearDragSelection();
	clearSearchSelection();
	initialResize();
	loadPage();
    //goSearch(TEXT_SEARCH_INFO.forward);
}

function clearDragSelection() {
	$(pageAreaList).each(function(pageIdx, pageArea) {
		$("#highlight_pane" + pageIdx).empty();
	});
}

function clearSearchSelection() {
	TEXT_SEARCH_INFO.clear();
	$($("#search_result")[0]).text("0");
}

function createPageElement(idNum) {
	var imgpath = "";
	var display = "";
	//if( idNum < INIT_IMAGE_LIMIT ) {
		// PDFium 수정
		// imgpath = PATH+'/' + (idNum + 1) +'.jpg';
		imgpath = PATH+'/' + (idNum + 1) +'.'+imgExt;
	//}else{
		//display = 'display:none';
	//}
	var html = '<div id="page-area' + idNum + '" class="page-element goog-inline-block">';
	html += '<div><div id="content_area'+idNum+'" class="content_area" style='+display+'><div class="pageImage"><div id="highlight_pane'+idNum+'"></div>';
	html +='<img id="page' + idNum +'" name="'+idNum+'" src="'+imgpath+'" unselectable="on" onerror="image_error(this)" onload="onLoadImg('+ (idNum + 1) +')" title="page'+ (idNum + 1) +'" alt="page'+ (idNum + 1) +'" />';
	html +='</div></div></div>';
	//onError="javascript:image_error(this);" onerror="onErrorImg(this)" onload="onLoadImg('+ (idNum + 1) +')"
	return html;
}

function loadImage(pageNum) {
	for (var i=0; i<pageNum; i++) {
		$("#img-center-pane").append(createPageElement(i));
	}
}

function createThumbElement(idNum) {
	var pageNum = idNum + 1;
	var margin='50%';
	var thumbHeight = 75 / parseInt($(xmlPages[idNum]).attr('imgW'), 10) * parseInt($(xmlPages[idNum]).attr('imgH'), 10);
	var html = '<div class="imgBox"><em class="icon txt">' + pageNum + '</em><div id="thumb-area' + idNum + '" class="left_thum" onclick="enableScrollEvent=false; movePage(' + pageNum + '); thumbImageEmphasized(' + pageNum +')">';
/*
	if( $(xmlPages[idNum]).attr("w") == undefined || $(xmlPages[idNum]).attr("w") < $(xmlPages[idNum]).attr("h")) {
		html += 'style="width:'+thumWidth+'px;height:'+thumHeight+'px" >';
	}else{
		html += 'style="width:'+thumHeight+'px;height:'+thumWidth+'px" >';
		margin='20%';
	}*/

	var imgpath = "";
	var loading = "none";
	//if( idNum < INIT_IMAGE_LIMIT ) {
		// PDFium 수정
		// imgpath = PATH+'/' + (idNum + 1) +'.jpg';
		imgpath = PATH+'/' + (idNum + 1) +'.'+imgExt;
	//}else{
	//	loading = "";
	//}
	html += '<img id="thumb' + idNum +'" name="'+idNum+'" src="'+imgpath+'" style="height:' + thumbHeight + 'px;width:100%" unselectable="on" onerror="image_thum_error(this)" title="page'+ (idNum + 1) +'" alt="page'+ (idNum + 1) +'"/>'
	html += '<div id="thumb' + (idNum) +'loading" style="display: '+loading+';width:100%;height:100%;">';
	html += '<div id="loading" style="margin-top:'+margin+'">';
	html += '</div> </div></div>';
	return html;
}

function loadThumbImage(pageNum) {
	for (var i=0; i<pageNum; i++) {
		$("#thumbnail_center").append(createThumbElement(i));
	}
}

function getTextAreaList(pageIndex) {
	var pageElements = textXmlPages[pageIndex];
	var textList = [];
	$(pageElements).find("text").each(function(textIndex, element) {
		var blockElem = $(element);

		if( blockElem.attr("p") != undefined ) {
			var pArr = blockElem.attr("p").split(",");
			var pDataList = [];
			var pData = {};

			var id = "#page" + pageIndex;
			var imgElem = $(id);
			if ( imgElem.length == 0 ) {
				return;
			}

			var imgElemPos = imgElem.position();

			$(pArr).each(function(pIndex, data) {
          if (pIndex % 2 == 0) {
  					pData.l = (parseInt(data) * ratio);
          } else {
  					pData.w = parseInt(data) * ratio;
	  				pDataList.push(pData);
		  			pData = {};
          }
			});

			var orgLeft = parseInt(blockElem.attr("l") * ratioToOrigin);
			var orgTop = parseInt(blockElem.attr('t') * ratioToOrigin);
			var orgWidth = Math.abs(parseInt(blockElem.attr("w") * ratioToOrigin));
			var orgHeight = Math.abs(parseInt(blockElem.attr("h") * ratioToOrigin));

			var left = Math.round(orgLeft * ratio);
			var top = Math.round(orgTop * ratio);
			var width = Math.round(orgWidth * ratio);
			var height = Math.round(orgHeight * ratio);
			textList.push({
				page: pageIndex,
				l: left,
				t: top,
				w: width,
				h: height,
				r: left + width,
				b: top + height,
				pList: pDataList,
				textIdx: textIndex,
				textContent: blockElem.text()
			});
		}
	});

	return textList;
}


function initLayout() {

	var maxWidth = 0;
	var maxHeight = 0;

	for(i=1; i<=PAGE_NUMBER; i++) {
		var width = $(xmlPages[i - 1]).attr("imgW")
		var height = $(xmlPages[i - 1]).attr("imgH")
		if( maxWidth < width ) {
			maxWidth = width;
			maxHeight = height;
		}
	}
}




function loadPage(resizeThumbFunc) {

	textAreaList = {};
	pageAreaList = [];

	$(xmlPages).each(function(pageIndex, element) {

		var pageElem = $(element);
		var width = pageElem.attr("imgW") * ratio;
		var height = pageElem.attr("imgH") * ratio;

		var id = "#page" + pageIndex;
		var imgElem = $(id);
		if ( imgElem.length == 0 ) {
			return;
		}
		imgElem.width(width).height(height);

		if( $.browser.msie && $.browser.version.substring(0, 1) === "6") {
			$("#page-area" + pageIndex).width(width);
		}else{
			$("#page-area" + pageIndex).css('min-width', width);
		}
	});

	$(textXmlPages).each(function(pageIndex, element) {

		var id = "#page" + pageIndex;
		var imgElem = $(id);
		if ( imgElem.length == 0 ) {
			return;
		}

		if ( !$("#content_area" + pageIndex).attr('class') ) { // 이미지가 아직 로딩되지 않았으면 글자영역을 계산하지 않는다.
			return;
		}

		var imgElemPos = imgElem.position();
		pageAreaList.push({
			t: imgElemPos.top,
			l: imgElemPos.left,
			w: parseInt(imgElem.width()),
			h: parseInt(imgElem.height()),
			b: imgElemPos.top + parseInt(imgElem.height()),
			r: imgElemPos.left + parseInt(imgElem.width())
		});

		textAreaList[pageIndex] = [];

		if (resizeThumbFunc) {
			resizeThumbFunc(pageIndex);
		}
	});
}

function resizeThumb(pageIndex) {
	var thumbId = "#thumb-area" + pageIndex;
	var thumbElem = $(thumbId);

	if ( thumbElem.length == 0  ) {
		return;
	}
}

function initLoadPage() {
	loadPage(resizeThumb);
}

function getImgPositionData(addr)
{
	var xmlData;
	$.ajax(
		{
			type: "GET",
			url: addr,
			async: false,
			dataType: ($.browser.msie) ? "text" : "xml",
			error: function(data){
	  			//alert('Error occurred loading the XML');
	 		},
			success:function(data) {

				if (typeof data === "string") {
					xml = new ActiveXObject("Microsoft.XMLDOM");
					xml.async = false;
					xml.loadXML(data);
				} else {
					xml = data;
				}

				xmlData = $(xml).find("page");
			}
		}
	);
	return xmlData;

// 크롬 지원을 위한 부분
//	if ($.browser.msie) {
//			var xml = new ActiveXObject("Microsoft.XMLDOM");
//			xml.loadXML(xmlData);
//			xmlPages = $(xml).find("page");
//	} else {
//		xmlPages = $(xmlData).find("page");	
//	}
}



// 마우스 영역과 텍스트 영역이 겹치는지 여부
function isOverlap(m, t) {

	m.r = m.l + m.w;
	m.b = m.t + m.h;
	t.r = t.l + t.w;
	t.b = t.t + t.h;

	/*
		(마우스 아래 > 글자 위 && 마우스 위 < 글자 아래) && (마우스 오른쪽 > 글자 왼쪽 && 마우스 왼쪽 < 글자 오른쪽) 
	*/
	if ( (m.b > t.t && m.t < t.b) && (m.r > t.l && m.l < t.r)) {
		return true;
	}
	return false;
}

// 마우스 영역과 텍스트 영역이 수직 방향만 겹치는지 여부
function isVerticalOverlap(m, t) {

	m.r = m.l + m.w;
	m.b = m.t + m.h;
	t.r = t.l + t.w;
	t.b = t.t + t.h;

	if ( m.b > t.t && m.t < t.b ) {
		return true;
	}
	return false;
}

// 마우스 영역과 텍스트 영역이 겹치는 첫번째 줄인지 여부
function isFirstRow(m, t) {
	if ( (t.t < m.t) && (m.t < t.b) ) {
		return true;
	}
	return false;
}

// 마우스 영역과 텍스트 영역이 겹치는 마지막 줄인지 여부
function isLastRow(m, t) {
	if ( (t.t < m.b) && (m.b < t.b) ) {
		return true;
	}
	return false;
}

var mousePosition =
{
	startX : 0,
	startY : 0,
	endX : 0,
	endY : 0
};

// 마우스 영역을 가져온다.
function getMouseArea(event) {

	var rectWidth = mousePosition.startX - mousePosition.endX;
	if (rectWidth < 0) {
		rectWidth = -rectWidth;
	}

	var rectHeight = mousePosition.startY - mousePosition.endY;
	if (rectHeight < 0) {
		rectHeight = -rectHeight;
	}

	var rectLeft = 0;
	if (mousePosition.startX <= mousePosition.endX) {
		rectLeft = mousePosition.startX;
	} else {
		rectLeft = mousePosition.endX;
	}

	var rectTop = 0;
	if (mousePosition.startY <= mousePosition.endY) {
		rectTop = mousePosition.startY;
	} else {
		rectTop = mousePosition.endY;
	}

	return {l:rectLeft, t:rectTop, w:rectWidth, h:rectHeight, r: rectLeft + rectWidth, b: rectTop + rectHeight};
}


$(window).resize(function() {
	resizeView();
});


function changePaperPageBtn(pageNum, PAGE_NUMBER) {

	if( pageNum == 1 ) {
    $('.fnPrevPage').addClass('disabled').removeClass('enabled');
	}else{
    $('.fnPrevPage').removeClass('disabled').addClass('enabled');
	}

	if( pageNum == PAGE_NUMBER) {
		$('.fnNextPage').addClass('disabled').removeClass('enabled');
	}else{
		$('.fnNextPage').removeClass('disabled').addClass('enabled');
	}
}


function changePaperPageNumber(pageNum) {
	//$("#paper-page-number").html(pageNum + ' / ' + PAGE_NUMBER);
	$(".navCurPage").html(pageNum);
	$(".navTotalPage").html(PAGE_NUMBER);

	changePaperPageBtn(pageNum, PAGE_NUMBER);

	currentPage = pageNum;
}

function image_error(obj)
{
	obj.style.display = 'none';
	var num = parseInt($(obj)[0].name);
	$('#content_area'+num).removeClass("content_area");
}

function image_thum_error(obj)
{
	//obj.style.display = 'none';
	var name = $(obj)[0].id;
	var num = parseInt($(obj)[0].name);
	if(AjaxNum > num) {
		AjaxNum = num+1;
	}

	$('#'+name).hide();
	$('#'+name+'loading').show();
}

function AjaxImage(addr, pageNum) {

	$.ajax(
			{
				type: "POST",
				url: addr,
				async: true,
				data: {pdf:FILENAME, sp:pageNum},
				dataType: "text",
				error: function(data){
					//alert('error')		  			
		 		},
		 		complate : function(data){
		 			//alert('complate')
		 		},
				success:function(data) {
					imageReload(addr, pageNum);
					//AjaxNum = AjaxNum+9;
					//setTimeout( imageReload(addr, pageNum),5);
				}
			}
		);
}

function imageReload(addr, pageNum) {
		var end = pageNum+INIT_IMAGE_LIMIT;
		end = end > PAGE_NUMBER ? PAGE_NUMBER+1 : end;
		//console.log("pageNum::"+pageNum+" end::"+end+" AjaxNum::"+AjaxNum);
		for( var i = pageNum; i < end; i++ ){
			var number = Date.parse(new Date().toString());
			var elImg = document.getElementById('page'+(i-1));
			var elThumb = document.getElementById('thumb'+(i-1));
			// PDFium 수정함
			//var src = PATH + '/'+i+'.jpg?c='+number;
			var src = PATH + '/'+i+'.'+imgExt+'?c='+number;

			elThumb.src = src;
			elImg.src = src;

			var name = $(elThumb)[0].id;
			var num = $(elThumb)[0].name;

			$('#content_area'+num).addClass("content_area");
			$('#content_area'+num).show();

			$('#'+name+'loading').hide();
			$('#'+name).show();

			elImg.style.display = 'block';
			elThumb.style.display = 'block';
		}

		if( end <= PAGE_NUMBER && pageNum-INIT_IMAGE_LIMIT < AjaxNum ) {
			AjaxImage(AJAX_URL, end);
		}else{
			if( end >= PAGE_NUMBERx ) {
				AjaxNum =  PAGE_NUMBER;
			}
			isAjaxCall = false;
		}
}
function layoutButtonUpdate() {
	if (pageLayout == 0) {
		$('.fnFitPage, .fnSinglePage, .fnThumbPage').removeClass('selected');
		return;
	} else if (pageLayout == 1) {
		$('.fnFitPage').addClass('selected');
		$('.fnSinglePage, .fnThumbPage').removeClass('selected');
	} else if (pageLayout == 2) {
		$('.fnThumbPage').addClass('selected');
		$('.fnFitPage, .fnSinglePage').removeClass('selected');
	} else if (pageLayout == 3) {
		$('.fnSinglePage').addClass('selected');
		$('.fnFitPage, .fnThumbPage').removeClass('selected');
	}
	$('.fnZoomIn').removeClass('disabled').addClass('enabled');
	if (RATIO_NUMBERS.curIndex != 9) {
		$('.fnZoomOut').removeClass('disabled').addClass('enabled');
	}
}
// 본문 화면이 해당 페이지로 이동한다.
function movePage(pageNum, force, search) {
	layoutButtonUpdate();
	if (pageLayout != 3) {
		var contPos = $("#page0").parent().position();
		enableScrollEvent = false;
		scrollTopValue = parseInt( $("#page" + (pageNum - 1)).parent().position().top) - contPos.top;
		$("#contentWrap").scrollTop(scrollTopValue);
	} else {
		if ((currentPage != pageNum && force !== true) || force === true) {
			if (search !== true) {
				clearDragSelection();
				clearSearchSelection();
			}
			$("div[id^=page-area]").hide();
			$("#page-area" + (pageNum - 1)).show();
			$('#contentWrap').scrollTop(0);
		}
	}
	changePaperPageNumber(pageNum);
}

// 썸네일을 해당 페이지로 이동한다.
function moveThumbPage(pageNum) {
	var contPos = $("#thumb-area0").position();
	scrollTopValue = parseInt( $("#thumb-area" + (pageNum - 1)).position().top) - contPos.top;
	$("#thumbnail_center").scrollTop(scrollTopValue - ($("#thumbnail_center").height() / 3));
	thumbImageEmphasized(pageNum);
}

// 현재 페이지에 해당하는 썸네일 이미지에 테두리를 친다.
function thumbImageEmphasized(pageNum) {
	$(".imgBox.selected").removeClass("selected");
	$("#thumb-area" + (pageNum - 1)).parent().addClass("selected");
}

function allSearchTextVisible(searchText) {
	var searchTextCount = 0;

	$(pageAreaList).each(function(pageIdx) {
		if (textAreaList[pageIdx].length == 0) {
			textAreaList[pageIdx] = getTextAreaList(pageIdx);
		}

		var textArea = $(textAreaList[pageIdx]);
		textArea.each(function(index, element) {
			var textElem = $(element);
			var text = $(element).attr("textContent");

			splitTextList = $(text.split(/\s+/));
			splitTextList.each(function(tIdx, splitText) {
				if (splitText.indexOf(searchText) >= 0) { // 검색에 걸렸을 경우
					var searchDiv = document.createElement("div");
					$("#content_area" + element.page + "> .pageImage").append(searchDiv);
					$(searchDiv).addClass("search-highlight")
					.css("left", element.pList[tIdx].l)
					.css("top", element.t)
					.width(element.pList[tIdx].w)
					.height(element.h);
					searchTextCount++;
				}
			});
		});
	});

	return searchTextCount;
}

// ie select 막기
function returnEventFalse(e){
    var event = e || window.event ;
    event.returnValue = false;
}
function returnEventTrue(e){
    var event = e || window.event ;
    event.returnValue = true;
}


$(document).ready(function() {
	//AjaxNum = INIT_IMAGE_LIMIT+1;
	$("#search").focus();
	document.ondragstart = returnEventFalse;
  document.onselectstart = returnEventFalse;
	xmlPages = getImgPositionData(PATH+"/"+FILENAME+".xml");
	textXmlPages = getImgPositionData(PATH+"/"+FILENAME+".text.xml");
	initLayout();

	initialResize();
	initEvent();
	loadImage(PAGE_NUMBER);
	loadThumbImage(PAGE_NUMBER);

	initLoadPage();
	movePage(currentPage);
	moveThumbPage(currentPage);
	var mouseIsDown = false;
	var mouseStartX = 0;
	var mouseStartY = 0;
	var isHighlightSet = false;

	$("#contentWrap").mousedown(function(event) {
		if (event.preventDefault) { // 파이어폭스/크롬에서 이미지 마우스로 끌어지는 현상제거를 위해
			event.preventDefault();
		}

		mouseIsDown = true;
		var contOff = $("#contentWrap").offset();
		var contPos = $("#contentWrap").position();

		mousePosition.startX = event.pageX - contOff.left + $("#contentWrap").scrollLeft();
		if (contPos.left < 0) {
			mousePosition.startX -= contPos.left;
		}
		mousePosition.startY = event.pageY - contOff.top + $("#contentWrap").scrollTop();
		$(".highlight").detach();
	});

	$("#contentWrap").mouseup(function() {
		mouseIsDown = false;
		$("#mouse_rect").hide();
		$("#mouse_rect").removeClass("rubberband");
	});

	$("#contentWrap").mousemove(function(event) {
		if (mouseIsDown) {

			var contOff = $("#contentWrap").offset();
			var contPos = $("#contentWrap").position();
			mousePosition.endX = event.pageX - contOff.left + $("#contentWrap").scrollLeft();
			if (contPos.left < 0) {
				mousePosition.endX -= contPos.left;
			}
			mousePosition.endY = event.pageY - contOff.top + $("#contentWrap").scrollTop();

			var mouseArea = getMouseArea(event);

			var mouseRect = $("#mouse_rect");
			mouseRect.css("left", mouseArea.l);
			mouseRect.css("top", mouseArea.t);
			mouseRect.width(mouseArea.w);
			mouseRect.height(mouseArea.h);

			mouseRect.show();
			mouseRect.addClass("rubberband");

			var isCharOverlap = false; // 마우스 드래그 영역이 글자 영역과 겹치는지 여부
		        var contentWrap = $('#contentWrap')
		        var scrollPos = {'t':contentWrap.scrollTop() - contOff.top, 'l':contentWrap.scrollLeft() - contOff.left}
			$(pageAreaList).each(function(pageIdx, pageArea) {
			    if ($('#page-area' + pageIdx + ':visible').length == 0) {
				return true;
			    }
			    var page = $('#page' + pageIdx).offset(),
			        offset = {'l':pageArea['l'] + scrollPos['l'] + page.left, 't':pageArea['t'] + scrollPos['t'] + page.top},
			        realPageArea = {'b':pageArea['b'] + offset['t'], 'r':pageArea['r'] + offset['l'], 'h':pageArea['h'],'w':pageArea['w'],'l':offset['l'],'t':offset['t']};
				if (isOverlap(mouseArea, realPageArea)) {
				//if (true) {
					if (textAreaList[pageIdx].length == 0) {
						textAreaList[pageIdx] = getTextAreaList(pageIdx);
					}

					$(textAreaList[pageIdx]).each(function(idx, textArea) {
					        var adjustedTextArea = $.extend(true, {}, textArea);
					        adjustedTextArea['b'] += offset['t'];
					        adjustedTextArea['t'] += offset['t'];
					        adjustedTextArea['l'] += offset['l'];
					        adjustedTextArea['r'] += offset['l'];

						var idValue = adjustedTextArea.page + "_" + adjustedTextArea.textIdx;
						var idElem = document.getElementById(idValue);

						if ( !idElem ) { // 아직 색이 입혀지지 않은 텍스트 영역 처리
							if ( isOverlap(mouseArea, adjustedTextArea) ) {
								isCharOverlap = true;

								var highlightDiv = document.createElement("div");

								var viewLeft = 0;
								var viewWidth = 0;
								if (isFirstRow(mouseArea, adjustedTextArea)) { // 겹치는 맨 위 ROW일 경우
									$(highlightDiv).attr("line", "first");

									var isFirstCharOverlap = true;
									$(adjustedTextArea.pList).each(function(index, data) {
										if (isOverlap(mouseArea, {l:data.l, t:adjustedTextArea.t, w:data.w, h:textArea.h})) {

											$(highlightDiv).attr("lastcharidx", index);
											if (isFirstCharOverlap) { // 겹치는 맨 앞부분 글자영역일 경우
												$(highlightDiv).attr("firstcharidx", index);
												isFirstCharOverlap = false;
												viewLeft = data.l;
											}

											viewWidth = (data.l - viewLeft) + data.w;

											if (isOverlap(mouseArea, {l:data.l, t:(adjustedTextArea.t + textArea.h), w:data.w, h:textArea.h})) { // ?�음 row ?� 겹치?��? ?�인

												viewWidth = textArea.w - (viewLeft - textArea.l);
											}

										}
									});

								} else { // 겹쳐지는 두번째 줄 이후 영역 처리
									if (isLastRow(mouseArea, adjustedTextArea)) { // 마지막으로 겹쳐지는 줄 처리
										$(highlightDiv).attr("line", "last");

										$(adjustedTextArea.pList).each(function(index, data) {

											if (isOverlap(mouseArea, {l:data.l, t:adjustedTextArea.t, w:data.w, h:textArea.h})) {
												$(highlightDiv).attr("lastcharidx", index);
												viewLeft = textArea.l;
												viewWidth = (data.l - viewLeft) + data.w;
											}
										});
									} else { // 중간 줄 처리
										viewLeft = textArea.l;
										viewWidth = textArea.w;
									}

								}

								$("#highlight_pane" + pageIdx).append(highlightDiv);
								$(highlightDiv).addClass("highlight selection-highlight")
								.attr("id", idValue)
								.css("left", viewLeft)
								.css("top", textArea.t)
							        .css("z-index", 10)
								.width(viewWidth)
								.height(textArea.h);
							} else { // 이미 색이 입혀진 텍스트 영역 처리
								// adjustedTextArea에 직접적으로 드래그 영역이 겹치지는 않으나 아래 또는 위가 드래그 영역에 속할 때 처리
								// TODO : 블락 단위로 처리해야 함
//								if (isCharOverlap && isVerticalOverlap(mouseArea, adjustedTextArea)) {
//									 
//								} else { // 겹치지 않은 글자 영역은 없앤다.
									$("#" + idValue).detach();
//								}

							}
						} else { // 이미 색이 입혀진 텍스트 영역 처리 (width와 left를 조절한다.)
							if ( isOverlap(mouseArea, adjustedTextArea) ) {
								isCharOverlap = true;
								// 글자 영역 left, width 변경

								var viewLeft = 0;
								var viewWidth = 0;

								if (isFirstRow(mouseArea, adjustedTextArea)) { // 겹치는 맨 위 ROW일 경우
									$(idElem).attr("line", "first");

									viewLeft = parseInt($(idElem).css("left"));
									viewWidth = parseInt($(idElem).width());
									var dataWidth = 0;

									var isFirstCharOverlap = true;
									$(adjustedTextArea.pList).each(function(index, data) {
										if (isOverlap(mouseArea, {l:data.l, t:adjustedTextArea.t, w:data.w, h:textArea.h})) {

											$(idElem).attr("lastcharidx", index);
											if (isFirstCharOverlap) { // 겹치는 맨 앞부분 글자영역일 경우
												$(idElem).attr("firstcharidx", index);
												viewLeft = data.l;
												isFirstCharOverlap = false;
											}

											viewWidth = (data.l - viewLeft) + data.w;

											if (isOverlap(mouseArea, {l:data.l, t:(adjustedTextArea.t + textArea.h), w:data.w, h:textArea.h})) {
												viewWidth = textArea.w - (viewLeft - textArea.l);
											}
										}
									});

								} else {
									$(idElem).attr("line", "");
									if (isLastRow(mouseArea, adjustedTextArea)) { // 마지막으로 겹쳐지는 줄 처리
										$(idElem).attr("line", "last");

										$(adjustedTextArea.pList).each(function(index, data) {
											if (isOverlap(mouseArea, {l:data.l, t:adjustedTextArea.t, w:data.w, h:textArea.h})) {
												$(idElem).attr("lastcharidx", index);
												viewLeft = textArea.l;
												viewWidth = (data.l - viewLeft) + data.w;
											}
										});
									} else {
										viewLeft = textArea.l;
										viewWidth = textArea.w;
									}
								}

								$(idElem).css("left", viewLeft).width(viewWidth);
							} else {
								//if ( isVerticalOverlap(mouseArea, adjustedTextArea)) {

								//} else { // 겹치지 않은 글자 영역은 없앤다.
									$("#" + idValue).detach();
								//}
							} // else
						} // else
					});
				} else {
					$("#highlight_pane" + pageIdx).empty();
				}
			});
		}
	});

	$(document).keydown(function(event){
		var eventWhich = event.which;
		if (eventWhich == 67 && event.ctrlKey) { // ctrl + c
			copyText();
		} else if (eventWhich == 36) { // HOME 키
			if ( !isFocus ) {
				$("#contentWrap").scrollTop(0);
			}
		} else if (eventWhich == 35) { // END 키
			if ( !isFocus ) {
				$("#contentWrap").scrollTop(9999999);
			}
		} else if (eventWhich  == 33) { // Page Up 키
			$("#contentWrap").scrollTop( $("#contentWrap").scrollTop() - ($("#contentWrap").height()/2) );
		} else if (eventWhich == 34) { // Page Down 키
			$("#contentWrap").scrollTop( $("#contentWrap").scrollTop() + ($("#contentWrap").height()/2) );
		} else {
			isCtrl = false;
		}
	});

	$(document).keyup(function(event){
		isCtrl = false;
	});

	$(".fnPrevPage, .navPrev").click(function(event) {
    event.preventDefault();
		if (currentPage > 1) {
			clearDragSelection();
			movePage(currentPage - 1);
			moveThumbPage(currentPage);
		}

	});

	$(".fnNextPage, .navNext").click(function(event) {
    event.preventDefault();
		if (currentPage < PAGE_NUMBER) {
			clearDragSelection();
			movePage(currentPage + 1);
			moveThumbPage(currentPage);
		}
	});

	if( $("#search").val().length == 0 ) {
		$('.fnPrevSearch, .fnNextSearch').addClass('disabled').removeClass('enabled');
	}else{
		$('.fnPrevSearch, .fnNextSearch').removeClass('disabled').addClass('enabled');
	}


	$('#search').focusout(function() {
  		isFocus = false;
	});

	$('#search').focus(function() {
  		isFocus = true;
	});

	var isShift = false;
	$("#search").keydown(function(event) {
		if (event.which == 13) { // 엔터키를 눌렀을 경우
			$(".searchResultArea").hide();
			$(".searchResultArea").show();
			if (isShift) {
				$(".fnPrevSearch").click();
			} else {
				$(".fnNextSearch").click();
			}
			return false;
		} else if (event.which == 16) { // SHIFT 키를 눌렀을 경우
			isShift = true;
		}
	});

	$("#search").keyup(function(event) {
		if (event.which == 16) { // SHIFT 키를 떼었을 경우
			isShift = false;
		}
	});

	$(".fnPrevSearch").click(function(event) {
		goSearch(TEXT_SEARCH_INFO.backward);
	});

	$(".fnSearch").click(function(event) {
		$(".searchResultArea").show();
		goSearch(TEXT_SEARCH_INFO.forward);
	});

	$(".fnNextSearch").click(function(event) {
		goSearch(TEXT_SEARCH_INFO.forward);
	});

	var pageLayoutClear = function() {
		if (pageLayout != 3) {
			pageLayout = 0;
			layoutButtonUpdate();
		}
	}

	$(".fnZoomOut").click(function(event) {
		event.preventDefault();
		clearDragSelection();
		clearSearchSelection();

		// vertical scroll
		/******************************************************************/
		var contentHeight = $("#contentWrap").height();

		var prevScrollH = $("#contentWrap").get(0).scrollHeight;
		var prevScrollT = $("#contentWrap").scrollTop();
		var scrollTopRatio = (prevScrollT / (prevScrollH - contentHeight));
		/******************************************************************/

		// horizontal scroll
		/******************************************************************/
		var contentWidth = $("#contentWrap").width();

		var prevScrollW = $("#contentWrap").get(0).scrollWidth;
		var prevScrollL = $("#contentWrap").scrollLeft();
		var scrollLeftRatio = (prevScrollL / (prevScrollW - contentWidth));
		/******************************************************************/

		ratio = RATIO_NUMBERS.reduceRatio();
		loadPage();

		/**************************************************************************************************************/

		min = RATIO_NUMBERS.numbers[0];
		max = RATIO_NUMBERS.numbers[RATIO_NUMBERS.numbers.length-1];

		if( ratio == min ) {
			$('.fnZoomOut').addClass('disabled').removeClass('enabled');
		}
		if( ratio != min && ratio != max ){
			$('.fnZoomOut, .fnZoomIn').removeClass('disabled').addClass('enabled');
		}
		/**************************************************************************************************************/


		// vertical scroll
		/******************************************************************/
		var newScrollH = $("#contentWrap").get(0).scrollHeight;
		var newScrollTop = (newScrollH - contentHeight) * scrollTopRatio;
		$("#contentWrap").scrollTop(newScrollTop);
		/******************************************************************/

		// horizontal scroll
		/******************************************************************/
		var newScrollW = $("#contentWrap").get(0).scrollWidth;
		var newScrollLeft = (newScrollW - contentWidth) * scrollLeftRatio;
		$("#contentWrap").scrollLeft(newScrollLeft);
		/******************************************************************/
		pageLayoutClear();
	});

	$(".fnZoomIn").click(function(event) {
		event.preventDefault();
		clearDragSelection();
		clearSearchSelection();

		// vertical scroll
		/******************************************************************/
		var contentHeight = $("#contentWrap").height();

		var prevScrollH = $("#contentWrap").get(0).scrollHeight;
		var prevScrollT = $("#contentWrap").scrollTop();
		var scrollTopRatio = (prevScrollT / (prevScrollH - contentHeight));
		/******************************************************************/

		// horizontal scroll
		/******************************************************************/
		var contentWidth = $("#contentWrap").width();

		var prevScrollW = $("#contentWrap").get(0).scrollWidth;
		var prevScrollL = $("#contentWrap").scrollLeft();
		var scrollLeftRatio = (prevScrollL / (prevScrollW - contentWidth));
		/******************************************************************/

		ratio = RATIO_NUMBERS.increaseRatio();
		loadPage();

		min = RATIO_NUMBERS.numbers[0];
		max = RATIO_NUMBERS.numbers[RATIO_NUMBERS.numbers.length-1];

		if( ratio == max) {
      $('.fnZoomIn').removeClass('enabled').addClass('disabled');
		}
    if( ratio != min && ratio != max ){
      $('.fnZoomIn, .fnZoomOut').addClass('enabled').removeClass('disabled');
		}

		// vertical scroll
		/******************************************************************/
		var newScrollH = $("#contentWrap").get(0).scrollHeight;
		var newScrollTop = (newScrollH - contentHeight) * scrollTopRatio;
		$("#contentWrap").scrollTop(newScrollTop);
		/******************************************************************/

		// horizontal scroll
		/******************************************************************/
		var newScrollW = $("#contentWrap").get(0).scrollWidth;
		var newScrollLeft = (newScrollW - contentWidth) * scrollLeftRatio;
		$("#contentWrap").scrollLeft(newScrollLeft);
		/******************************************************************/
		pageLayoutClear();
	});

	$(".fnFitPage").click(function(event) { // 페이지 맞춤
		event.preventDefault();
		pageLayout = 1;
		clearDragSelection();
		clearSearchSelection();
		$('div[id^=page-area]').show();
		ratio = ( ($("#contentWrap").width() - 40) / $(xmlPages[currentPage - 1]).attr("imgW"))-0.06;
		RATIO_NUMBERS.setRatioIndex(ratio);
		loadPage();
		movePage(currentPage);
		moveThumbPage(currentPage);
	});

	$(".fnThumbPage").click(function(event) { // 썸네일 보기
		event.preventDefault();
		pageLayout = 2;
		clearDragSelection();
		clearSearchSelection();
		$('div[id^=page-area]').show();
		currentW = $(xmlPages[currentPage - 1]).attr("imgW");
		contentW = $("#contentWrap").width();
		ratio = ((contentW - 80) / currentW / 2)-0.06;
		RATIO_NUMBERS.setRatioIndex(ratio);
		loadPage();
		movePage(currentPage);
		moveThumbPage(currentPage);
	});

	$(".fnSinglePage").click(function(event) { // 썸네일 보기
		event.preventDefault();
		pageLayout = 3;
		clearDragSelection();
		clearSearchSelection();
		ratio = ( ($("#contentWrap").width() - 40) / $(xmlPages[currentPage - 1]).attr("imgW"))-0.06;
		RATIO_NUMBERS.setRatioIndex(ratio);
		loadPage();
		movePage(currentPage, true);
		moveThumbPage(currentPage);
	});

});


function copyText(){
	var textContent = "";
	textXmlPages.each(function(pageIndex, element){
		var highlightDivs = $("#highlight_pane" + pageIndex).children();
		$(element).find("text").each(function(textIndex, textObj){

			var divLen = highlightDivs.length;
			for (var i = 0; i < divLen; i++) {

				var div = highlightDivs[i];
				var id = $(div).attr("id");
				var pointArr = id.split('_');
				var divPageIndex = pointArr[0];
				var divTextIndex = pointArr[1];
//					var left = pointArr[0];
//					var top = pointArr[1];
//					var width = pointArr[2];
//					var height = pointArr[3];

//					if (left == $(textObj).attr("l") && top == $(textObj).attr("t") &&
//					width == $(textObj).attr("w") &&
//					height == $(textObj).attr("h")) {
				if (pageIndex == divPageIndex && textIndex == divTextIndex) {

					var text = $(textObj).text();
					var line = $(div).attr("line");
					var firstCharIdx = $(div).attr("firstcharidx");
					firstCharIdx = firstCharIdx ? parseInt(firstCharIdx) : 0;
					var lastCharIdx = $(div).attr("lastcharidx");
					lastCharIdx = lastCharIdx ? parseInt(lastCharIdx) : 0;

					if (line == 'first') { // 첫번째 줄이면
						var textArr = text.split(/\s/);
						if (divLen == 1) { // 한줄만 선택했을 경우
							textContent += textArr.slice(firstCharIdx, lastCharIdx + 1).join(" ");
						} else {
							textContent += textArr.slice(firstCharIdx).join(" ") + "\n";
						}
					} else if (line == 'last') {
						var textArr = text.split(/\s/);
						textContent += textArr.slice(0, lastCharIdx + 1).join(" ");
					} else {
						textContent += text + "\n";
					}
					break;
				}
			}
		});
	});

	toclipboard(textContent);

}

function toclipboard(src){
	if(window.clipboardData){
		window.clipboardData.setData("text",src);
	}else if(window.netscape){
		// add by mobidic for firefox		
		var ni = document.getElementById('hidclip');
		if(ni!=null){
			document.body.removeChild(ni);
		}
		var elm = document.createElement("input");
		document.body.appendChild(elm);
		//elm.id = "hidclip";
		elm.setAttribute("id", "hidclip");
		elm.value = src;
		elm.focus();
		elm.select();
	} else{
		// add by mobidic for chrome, etc.
		var ni = document.getElementById('hidclip');
		if(ni!=null){
			document.body.removeChild(ni);
		}
		var elm = document.createElement("input");
		document.body.appendChild(elm);
		elm.value = src;
		elm.setAttribute("id", "hidclip");
		elm.focus();
		elm.select();
		document.execCommand('Copy');
	}
}

var loadedImg = [];
var startNum = 0;
var endNum = 0;

var onErrorImg = function(obj){
	setTimeout(function(){
		var number = Date.parse(new Date().toString());
		obj.src = PATH + '/'+obj.name+'.jpg?c='+number;
	},200);
}

var onLoadImg = function(index){
	loadedImg[index] = true;
	if (++loadedImgCount == PAGE_NUMBER) {
		loadPage();
	}
}

var checkLoadedGroup = function(start, end){
	var bLoaded = true;
	if( end === 0 ){
			bLoaded = true;
	}else{
		for(var i = start; i<= end; i++ ){
			bLoaded = bLoaded && !!(loadedImg[i])
		}
	}

	return bLoaded;
}

var findNextStartEnd = function(start){
	var result = [];
	for(var i=start; i <= PAGE_NUMBER; i += 10){
		var end = i+9;
		if( end > PAGE_NUMBER ){
			end = PAGE_NUMBER;
		}
		var bLoaded = this.checkLoadedGroup(i, end);
		if( bLoaded === false ){
			return i;
		}
	}

	return null;
}

// chrome offset problem
$(window).load(function(){
	if( $.browser.webkit )
		initialResize();
});

//window.onload = loadImg;
/************** for ipad ****************/
//function loaded() {
//	scrollContent = new iScroll('thumbnail_center');
//	scrollSide = new iScroll('img-center-pane');
//}
//
//document.addEventListener('touchmove', function(e){ e.preventDefault(); }, false);
//document.addEventListener('DOMContentLoaded', loaded, false);
/****************************************/

