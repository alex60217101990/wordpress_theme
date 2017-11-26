'use strict';
let category_arr=[];
function size_of_pages(category_arr){
	if(category_arr.length==0){
		if(array_products.length%3==0) return array_products.length/3;
		else {
			return Math.ceil(array_products.length/3);
		}
	}
	else{
		if(category_arr.length%3==0) return category_arr.length/3;
		else {
			return Math.ceil(category_arr.length/3);
		}
	}
};
let P=$('<div id="pages"></div>');
function pererisovka_okna(category_nomber){
	//P.deleteContents();
	for(let y=0; y<3; y++){
		array_products[y].createDom();
	};
	console.log('InfoSize:'+array_products.length);
	if(category_nomber==0){
		let r=[];
		let start=0;
		let size=size_of_pages(r);
		for(let j=0; j<size; j++){
			$('.cart').empty();
			for(let c=0; c<3; c++){
				array_products[c].createDom();
			}
			start=0;
			let p=$('<div class="page"></div>');
			p.text(''+(j+1)).appendTo(P);
			P.css('top',($('div.cart').height()+10)+'px');
			P.appendTo('.allcart');
			
			/*p.click(function(){
				$('.cart').empty();
			//1 variant
				for(let n=0; n<3; n++){
					array_products[start++].createDom();
					if(start>=array_products.length) {
						start=0;
						//array_products[j].createDom();
					}
				}
			});*/

			/*2 variant*/
			p.click(function(){
				$('.cart').empty();
			//1 variant
				for(let n=j*3; n<j*3+3; n++){
					if(n>=array_products.length) {
						break;
					}else{
						array_products[n].createDom();
					}
				}
			});
			//*/
		}
	}
	else{
		let start=0;
		let size=size_of_pages(category_arr);
		for(let j=0; j<size; j++){
			$('.cart').empty();
			for(let c=0; c<3; c++){
				category_arr[c].createDom();
			}
			start=0;
			let p=$('<div class="page"></div>');
			p.text(''+(j+1)).appendTo(P);
			P.css('top',($('div.cart').height()+10)+'px');
			P.appendTo('.allcart');



			/*p.click(function(){
				$('.cart').empty();
			//1 variant
				for(let n=0; n<3; n++){
					array_products[start++].createDom();
					if(start>=array_products.length) {
						start=0;
						//array_products[j].createDom();
					}
				}
			});*/



			//2 variant
			p.click(function(){
				$('.cart').empty();
			//1 variant
				for(let n=j*3; n<j*3+3; n++){
					if(n>=category_arr.length) {
						break;
					}else{
						category_arr[n].createDom();
					}
				}
			});
			//*/
		}
	}
}

let head=$('#header');
head.appendTo('body');


/*let head=$('#header');
head.appendTo('body');
/*$(window).scroll(function() {
    if ($(window).scrollTop() > head.height()) {
        head.removeClass('scrol1');
        head.addClass('scrol');
    }else if ($(window).scrollTop() <  head.height()) {
        head.removeClass('scrol');
        head.addClass('scrol1');
    }
});*/


/*eto iz category.js samiy verch*/
let menu = $('<div id="menu" class="menu"><canvas id="mon_canvas"></canvas></div>');
MenU=menu;
let menu_arr=new Arr();
menu.appendTo('body');