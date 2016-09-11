function loadCompleted(){
	var iTime = new Date().getTime();
	var oW = s("#welcome");
	var arr = [""];
	var bImgLoad = true;
	var bTime = false;
	if(bImgLoad && bTime){

	}
	var timer = setInterval(function(){
		if(new Date().getTime() - iTime >= 2000){
			bTime = true;
		}
		if(bImgLoad && bTime){
			clearInterval(timer);
			s("#welcome").animate({opacity: 0, speed: 2, callback: function(){
				console.log(this);
				this.style.display = 'none';
			}});
		}
	}, 1000);
	for(var i=0;i<arr.length;i++){
		var oImg = new Image();
		oImg.src = arr[i];
		oImg.onload = function(){

		}
	}
}

s(function(){
	loadCompleted();
})