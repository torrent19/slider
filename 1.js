document.getElementById('slider-left').onclick = sliderLeft;
var left = 0;

function sliderLeft(){
	var polosa = document.getElementById('polosa');
	left = left - 128;
	if (left < -512) {
		left = 0;
	}
	polosa.style.left = left +'px';
}
document.querySelector('#slider-right').addEventListener('click',function () {

	var polosa = document.getElementById('polosa');
	left = left + 128;
	if (left > 0) {
		left = -512;
	}
	polosa.style.left = left +'px';
})