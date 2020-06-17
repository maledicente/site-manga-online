var imgs=[];
var slider;
var imgAtual;
var maxImg;
var tmp;
var tempoTroca;
var vtempo;

function preLoad(){
	var s=1;
	
	for(var i=0;i<5;i++){
		imgs[i]= new Image();
		imgs[i].src="imagens/banner/s"+s+".jpg";
			s++;
	}
}

function loadImg(img){
	slider.style.backgroundImage = "url('"+imgs[img].src+"')";
}

function start(){
	preLoad();
	imgAtual=0;
	maxImg=imgs.length-1;
	slider=document.getElementsByClassName("banner")[0];
	loadImg(imgAtual);
	tempoTroca=0;
	anima();
}

function troca(dir){
	tempoTroca=0;
	imgAtual+=dir; 
	if(imgAtual > maxImg){
		imgAtual=0;
	}else if(imgAtual < 0){
		imgAtual=maxImg;
	}
	loadImg(imgAtual);
}

function anima(){
	tempoTroca++;
	if(tempoTroca >= 1000){
		tempoTroca=0;
		troca(1);
	}
	vtempo=tempoTroca/5;
	window.requestAnimationFrame(anima);
}

window.addEventListener("load", start);
