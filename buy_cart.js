'use strict';

console.log(object_name);

let gl=$('<div id="buy_cart" class="buy_cart"></div>').appendTo('#menu');
let buyCart=$('<img id="imBuy" class="imBuy" src="http://yoursmileys.ru/ismile/shoppingbasket/i53003.png"/>');
let endCart=$('<img id="imEnd" class="imEnd" src="'+object_name.a_value+'/images/update.png"/>');
endCart.appendTo(gl);
buyCart.appendTo('#menu');
let indikator=$('<p id="indic" class="indic" ></p>');
indikator.appendTo(gl);
arr_buy.on('change', function(event) { // handler
    if(event.type=="insert") {
            indikator.text(arr_buy.length);
            indikator.css('visibility','visible');
            endCart.css('visibility','visible');
    }
});
endCart.click(function(){
	arr_buy.length=0;
	indikator.text('0');
	setTimeout(function(){
		indikator.css('visibility','hidden');
    	endCart.css('visibility','hidden');
	},3500);
});
buyCart.click(function (event) {
    if(arr_buy.length<=0) {
        $('<p id="otv">Извините, корзина заказов пуста!</p>').appendTo("body");
        $('#otv').center();
        $(window).scroll(function () {
            if ($('#otv').length > 0) {
                $('#otv').center();
            }
        });
        setTimeout(massege, 4000);
        function massege() {
            $('#otv').remove();
        }
    }
    else{
        $('<div id="font">').css('width','100%').css('height','1000%').css('background','#000').css('margin','0')
            .css('opacity','0.7').css('position','absolute').css('top','0').css('left','0')
            .css('z-index','7768').appendTo("body");
       
            $('<div id="CArt">').css('width', '80%').css('height', '70%').css('animation', 'sky1 10s infinite linear')
                .css('z-index', '7770').css('overflow','scroll').appendTo("body");
            $('<img id="closeCart" src="'+object_name.a_value+'/images/CloseCart.png"/>').css('width', '30px').css('height', '30px')
                .appendTo('#CArt');

        let mytable = document.createElement('table');
        mytable.setAttribute('id', 'tableProduct');
        mytable.setAttribute('border', '1px');
        document.getElementById('CArt').appendChild(mytable);
        $('#tableProduct').attr('cellspacing','0');
        $('#tableProduct').attr('cellpadding','0');
            for (let i = 0; i < arr_buy.length; i++) {
                //console.log(document.getElementsByTagName('table')[0]);
                let elem=$('<tr><td>'+arr_buy[i].Name+'</td><td>'+arr_buy[i].Price+'</td><td>'+
                    '<img class="cI" src="'+arr_buy[i].Img+'"/>'+
                    '</td><td>'+arr_buy[i].Category+'</td><td>'+arr_buy[i].Info+'</td></tr>');
                $('#tableProduct').append(elem);
                console.log(arr_buy);
            }
            $('#tableProduct').appendTo('#CArt');
       // $('<img id="buttKup" src="images/buyCart.png"/>').appendTo('#CArt');
        $('<button id="buttKup1"/>').appendTo('#CArt');
        $('#buttKup1').text('Пoдтвердить заказ');


        $('#closeCart').click(function () {
            $('#font').remove();
            $('#CArt').remove();
        })
        $('#CArt').center();
        $('#CArt').addClass('scrol1Cart')
        $(window).scroll(() => {
            if($('#CArt').length>0){
             $('#CArt').center();
            }
        });
    }
});