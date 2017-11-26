'use strict';
jQuery.fn.center = function () {
    	this.css("position","absolute");
    	this.css("top", (($(window).height() - this.outerHeight()) / 2) + $(window).scrollTop() + "px");
    	this.css("left", (($(window).width() - this.outerWidth()) / 2) + $(window).scrollLeft() + "px");
    return this;
}
jQuery.fn.bottom = function(){
    this.css("position","absolute");
    this.css("top", (($(window).height() - this.height()))+ "px");
    return this;
}

jQuery.fn.center_right = function(){
    	this.css("position","absolute");
    	this.css("top", (($(window).height() - this.outerHeight()) / 1.6) + $(window).scrollTop() + "px");
    	this.css("left", ($(window).width() - (this.outerWidth()) / 0.89) + $(window).scrollLeft() + "px");
    return this;
}
jQuery.fn.center_right_1 = function(){
    this.css("position","absolute");
    this.css("top", (($(window).height() - this.outerHeight()) / 1.47) + $(window).scrollTop() + "px");
    this.css("left", ($('body').width() - (this.outerWidth()) / 0.78)+ "px");
    //console.log('111111')
    return this;
}


jQuery.fn.center_menu = function(){
    this.css("position","absolute");
    this.css("top", (($(window).height() - this.outerHeight()) / 2.0) + $(window).scrollTop() + "px");
   // this.css("left", ($(window).width() - (this.outerWidth()) / 0.88) + $(window).scrollLeft() + "px");
    return this;
}

let toppp=$('<canvas id="c"></canvas>');
//$('#mon_canvas').appendTo($('.container')).css('opacity','1').css('width','120%').css('height','120%');
//$('body').css('opacity','1');


toppp.prependTo($('#menu'));
//let head=$('#header');
//head.appendTo('body');
$(window).scroll(()=>{
	//$('.allcart').center_right();
	let buff=[];
	buff.push($('.container'));
	buff.push($('div.fire'));
	buff.push($('div.smoke'));
	if($(window).scrollTop()>head.height()){
		for(let r=0; r<buff.length; r++){
			buff[r].empty();
		}
		$('#footer').css('visibility','visible');
		$('div.container').remove();
		$('body').css('animation','sky1 10s infinite linear');
		$('#pixie').css('visibility','visible');
		$('.allcart').center_right_1();

		head.removeClass('scrol1');
        head.addClass('scrol');
        head.css('top','0px');

        indikator.removeClass('indic');
		indikator.addClass('indic_1');
		endCart.removeClass('imEnd');
		endCart.addClass('imEnd_1');

		$('#menu').removeClass('menu');
		$('#menu').removeClass('menu_start');
		$('#menu').addClass('menu_scroll');
		$('#mon_canvas').remove();

		toppp.css('visibility','visible');
		
		let s=head.height();
		$('#menu').css('top','0');

		gl.removeClass('buy_cart');gl.addClass('buy_cart_1');
		buyCart.removeClass('imBuy');buyCart.addClass('imBuy_1');
		for(let h=0; h<menu_arr.length; h++){
			menu_arr[h].removeClass('menu_el');
			menu_arr[h].addClass('menu_el_1');
		}
	}
	else{
		$('#footer').css('visibility','hidden');
		toppp.css('visibility','hidden');
		$('.allcart').center_right();
		head.removeClass('scrol');
        head.addClass('scrol1');
        head.css('top','0px');
        gl.removeClass('buy_cart_1'); gl.addClass('buy_cart');
        buyCart.removeClass('imBuy_1');buyCart.addClass('imBuy');
        indikator.removeClass('indic_1');
		indikator.addClass('indic');
		endCart.removeClass('imEnd_1');
		endCart.addClass('imEnd');
		$('#menu').removeClass('menu_scroll');
		$('#menu').addClass('menu_start');
		//$('#menu').css('top','0 px');
		for(let h=0; h<menu_arr.length; h++){
			menu_arr[h].removeClass('menu_el_1');
			menu_arr[h].addClass('menu_el');
		}
	}
	if($(window).scrollTop()>=1000){
		toppp.css('visibility','hidden');
		$('.allcart').center_right();
		$('.allcart').css('top','0px');
		head.removeClass('scrol');
        head.addClass('scrol1');
        head.css('top','0px');
        gl.removeClass('buy_cart_1'); gl.addClass('buy_cart');
        buyCart.removeClass('imBuy_1');buyCart.addClass('imBuy');
        indikator.removeClass('indic_1');
		indikator.addClass('indic');
		endCart.removeClass('imEnd_1');
		endCart.addClass('imEnd');
		$('#menu').removeClass('menu_scroll');
		$('#menu').addClass('menu_start');
		for(let h=0; h<menu_arr.length; h++){
			menu_arr[h].removeClass('menu_el_1');
			menu_arr[h].addClass('menu_el');
		}
	}
});

let p=0;
$('.fab.child').hover(function(){
	if(p%2==0){$(this).css('animation','spinner 2s linear 1'); p++;}
	else {$(this).css('animation','spinner1 2s linear 1'); p++;}
});