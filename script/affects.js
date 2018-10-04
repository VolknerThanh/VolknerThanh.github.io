window.onscroll = function() {scrollEffect()};

function scrollEffect () {
	var scrollLocation = document.documentElement.scrollTop;
	var btns = $('#play_animate');
	if(scrollLocation >= 2500 && scrollLocation <= 3500){
    btns.show();
	}
  else{
  	btns.hide();
  }
}
var index = 0;
var isNext = false;
var isBack = false;
function next () {
	if (!isNext){
		var str = Number(index+1) + "th";
		console.info(str);
		var arr = document.getElementsByClassName(str);
		$.each(arr, function(index, val) {
			 val.classList.remove('disappear');
		});
	
		index+=1;
	}
}
function back () {
	if (!isBack){
		var str = Number(index) + "th";
		console.info(str);
		var arr = document.getElementsByClassName(str);
		$.each(arr, function(index, val) {
			 val.classList.add('disappear');
		});	
		if(index != 0)
			index -= 1;
	}
}