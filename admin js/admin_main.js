'use strict';


let fl_bot=$('<div class="backdrop"></div><div class="fab child" data-subitem="1"><span>C</span></div><div class="fab child" data-subitem="2">'+
	'<span><img src="images/admin.png" id="subFlBot2" class="subFlBot"/></span></div><div class="fab child" data-subitem="3"><span><img src="images/fl_bot1.png" id="subFlBot1" class="subFlBot"/></span></div><div class="fab" id="masterfab"><span>'+
	'<img id="im777" src="images/fl_bot.png"/>'+'</span></div>');
fl_bot.appendTo($('body'));
let p=0;
$('.fab.child').hover(function(){
	if(p%2==0)
		{$(this).css('animation','spinner 2s linear 1'); p++;}
	else {$(this).css('animation','spinner1 2s linear 1'); p++;}
});

let array1=[];
let array2=[];

$('#subFlBot1').click(function(){
	let data1,data2;
	if( array1.length>0 && array2.length>0 ){
		//JSON.stringify(array[i])
		data1=JSON.stringify(array1);
	    data2=JSON.stringify(array2);
	}else{
		data1=JSON.stringify(GetAllProducts());
		data2=JSON.stringify(GetAllCategorys());
	}
	let json_prod=()=>{
			let t;
			for(let j=0; j<array1.length; j++){
				t+=$.toJSON(array1[j]);
			}
			return t;
		}
		$.ajax({
			url:'ajax.php',
			type:'POST',
			dataType: 'JSON',
			data:'products_array=' + json_prod,
			success: (res, code) => {
				if (code==200){
					messageOfForm('Данные отправлены:');
				}else{
                    messageOfForm('Request error:'); // возникла ошибка, возвращаем код ошибки
                }
				//parser JSON;
                messageOfForm(res);
            },
            error:  (xhr, str) => {
                messageOfForm('Критическая ошибка'); 
            }
		});
		let json_cat=()=>{
			let t;
			for(let j=0; j<array2.length; j++){
				t+=$.toJSON(array2[j]);
			}
			return t;
		}
		$.ajax({
			url:'ajax.php',
			type:'POST',
			dataType: 'JSON',
			data:'category_array=' + json_cat,
			success: (res, code) => {
				if (code==200){
					messageOfForm('Данные отправлены:');
				}else{
                    messageOfForm('Request error:'); // возникла ошибка, возвращаем код ошибки
                }
				//parser JSON;
                messageOfForm(res);
            },
            error:  (xhr, str) => {
                messageOfForm('Критическая ошибка'); 
            }
		});
});



let sost=0;
jQuery.fn.center = function () {
    this.css("position","absolute");
    this.css("top", (($(window).height() - this.outerHeight()) / 2) + $(window).scrollTop() + "px");
    this.css("left", (($(window).width() - this.outerWidth()) / 2) + $(window).scrollLeft() + "px");
    return this;
}

let str1='<form name="add" method="#"><div id="fountainTextG"><div id="fountainTextG_1" class="fountainTextG">'+
'Н</div><div id="fountainTextG_2" class="fountainTextG">о</div><div id="fountainTextG_3" class="fountainTextG">в</div>'+
'<div id="fountainTextG_4" class="fountainTextG">ы</div>'+
'<div id="fountainTextG_5" class="fountainTextG">й&nbsp</div><div id="fountainTextG_6" class="fountainTextG">'+
 '</div><div id="fountainTextG_7" class="fountainTextG">п</div><div id="fountainTextG_8" class="fountainTextG">'+
 'р</div><div id="fountainTextG_9" class="fountainTextG">о</div><div id="fountainTextG_10"'+
 ' class="fountainTextG">д</div><div id="fountainTextG_11" class="fountainTextG">у</div><div id="fountainTextG_12"'+
 ' class="fountainTextG">к</div><div id="fountainTextG_13" class="fountainTextG">т</div><div id="fountainTextG_14"'+
 ' class="fountainTextG">:</div></div>'+
 '<input id="input1" class="name_product input2" type="text" maxlength="80" placeholder="Название" >'+
 '<div id="fountainTextG1"><div id="fountainTextG_11" class="fountainTextG">У</div><div id="fountainTextG_21"'+ 
'class="fountainTextG">к</div><div id="fountainTextG_31" class="fountainTextG">а</div><div id="fountainTextG_41"'+ 
'class="fountainTextG">ж</div><div id="fountainTextG_51" class="fountainTextG">и</div><div id="fountainTextG_61" '+
'class="fountainTextG">т</div><div id="fountainTextG_71" class="fountainTextG">е&nbsp</div><div id="fountainTextG_81" '+
'class="fountainTextG"> </div><div id="fountainTextG_91" class="fountainTextG">ц</div><div id="fountainTextG_101"'+
'class="fountainTextG">е</div><div id="fountainTextG_111" class="fountainTextG">н'+
'</div><div id="fountainTextG_121" class="fountainTextG">у</div><div id="fountainTextG_131" class="fountainTextG">:</div></div>'+
 '<input id="input2" class="price_product input2" type="text" maxlength="80" placeholder="Цена" >'+
 '<div id="fountainTextG2"><div id="fountainTextG_12" class="fountainTextG">У</div>'+
'<div id="fountainTextG_22" class="fountainTextG">к</div><div id="fountainTextG_32" class="fountainTextG">'+
'а</div><div id="fountainTextG_42" class="fountainTextG">ж</div><div id="fountainTextG_52" class="fountainTextG">'+
'и</div><div id="fountainTextG_62" class="fountainTextG">т</div><div id="fountainTextG_72" class="fountainTextG">'+
'е&nbsp</div><div id="fountainTextG_82" class="fountainTextG"> </div><div id="fountainTextG_92" class="fountainTextG">'+
'U</div><div id="fountainTextG_102" class="fountainTextG">R</div><div id="fountainTextG_112" class="fountainTextG">'+
'L&nbsp</div><div id="fountainTextG_122" class="fountainTextG"> </div><div id="fountainTextG_132" class="fountainTextG">'+
'и</div><div id="fountainTextG_142" class="fountainTextG">з</div><div id="fountainTextG_152" class="fountainTextG">'+
'о</div><div id="fountainTextG_162" class="fountainTextG">б</div><div id="fountainTextG_172" class="fountainTextG">'+
'р</div><div id="fountainTextG_182" class="fountainTextG">а</div><div id="fountainTextG_192" class="fountainTextG">'+
'ж</div><div id="fountainTextG_202" class="fountainTextG">е</div><div id="fountainTextG_212" class="fountainTextG">'+
'н</div><div id="fountainTextG_222" class="fountainTextG">и</div><div id="fountainTextG_232" class="fountainTextG">'+
'я</div><div id="fountainTextG_242" class="fountainTextG">:</div></div>'+
'<input id="input3" class="price_product input2" type="text" maxlength="80" placeholder="URL" >'+
'<div id="fountainTextG3"><div id="fountainTextG_13" class="fountainTextG">В</div>'+
'<div id="fountainTextG_23" class="fountainTextG">в</div><div id="fountainTextG_33" class="fountainTextG">'+
'е</div><div id="fountainTextG_43" class="fountainTextG">д</div><div id="fountainTextG_53" class="fountainTextG">'+
'и</div><div id="fountainTextG_63" class="fountainTextG">т</div><div id="fountainTextG_73" class="fountainTextG">'+
'е</div><div id="fountainTextG_83" class="fountainTextG">&nbsp </div><div id="fountainTextG_93" class="fountainTextG">'+
'д</div><div id="fountainTextG_103" class="fountainTextG">о</div><div id="fountainTextG_113" class="fountainTextG">'+
'п</div><div id="fountainTextG_123" class="fountainTextG">о</div><div id="fountainTextG_133" class="fountainTextG">'+
'л</div><div id="fountainTextG_143" class="fountainTextG">н</div><div id="fountainTextG_153" class="fountainTextG">'+
'и</div><div id="fountainTextG_163" class="fountainTextG">т</div><div id="fountainTextG_173" class="fountainTextG">'+
'е</div><div id="fountainTextG_183" class="fountainTextG">л</div><div id="fountainTextG_193" class="fountainTextG">'+
'ь</div><div id="fountainTextG_203" class="fountainTextG">н</div><div id="fountainTextG_213" class="fountainTextG">'+
'у</div><div id="fountainTextG_223" class="fountainTextG">ю &nbsp</div><div id="fountainTextG_233" class="fountainTextG"> '+ 
'</div><div id="fountainTextG_243" class="fountainTextG">и</div><div id="fountainTextG_253" class="fountainTextG">'+
'н-</div><div id="fountainTextG_263" class="fountainTextG">ф</div><div id="fountainTextG_273" class="fountainTextG">'+
'о</div><div id="fountainTextG_283" class="fountainTextG">р</div><div id="fountainTextG_293" class="fountainTextG">'+
'м</div><div id="fountainTextG_303" class="fountainTextG">а</div><div id="fountainTextG_313" class="fountainTextG">'+
'ц</div><div id="fountainTextG_323" class="fountainTextG">и</div><div id="fountainTextG_333" class="fountainTextG">'+
'ю &nbsp</div><div id="fountainTextG_343" class="fountainTextG"> </div><div id="fountainTextG_353" class="fountainTextG">'+
'&nbspо&nbsp</div><div id="fountainTextG_363" class="fountainTextG"> </div><div id="fountainTextG_373" class="fountainTextG">'+
'т</div><div id="fountainTextG_383" class="fountainTextG">о</div><div id="fountainTextG_393" class="fountainTextG">'+
'в</div><div id="fountainTextG_403" class="fountainTextG">а</div><div id="fountainTextG_413" class="fountainTextG">'+
'р</div><div id="fountainTextG_423" class="fountainTextG">е</div><div id="fountainTextG_433" class="fountainTextG">'+
':</div></div>'+
'<textarea maxlength="400" class="input2" name="dopinf" rows="4" id="input5" placeholder="Дополнительная информация"></textarea>'+
'<div id="fountainTextG4"><div id="fountainTextG_14" '+
'class="fountainTextG">У</div><div id="fountainTextG_24" '+
'class="fountainTextG">к</div><div id="fountainTextG_34" class="fountainTextG">а</div>'+
'<div id="fountainTextG_44" class="fountainTextG">ж</div><div id="fountainTextG_54" '+
'class="fountainTextG">и</div><div id="fountainTextG_64" class="fountainTextG">т</div>'+
'<div id="fountainTextG_74" class="fountainTextG">е&nbsp</div><div id="fountainTextG_84" '+
'class="fountainTextG"> </div><div id="fountainTextG_94" class="fountainTextG">I</div>'+
'<div id="fountainTextG_104" class="fountainTextG">D&nbsp</div><div id="fountainTextG_114" class="fountainTextG">'+
':</div></div>'+
'<input id="input4" class="price_product input2" type="text" maxlength="80" placeholder="ID" >'+
 '</form>';
let forma=$('<div id="cont">'+str1+'</div>');





let bot1=$('<div id="enter1Bot" class="btn btn-blob">'+/*'&times;*/'Enter'+'</div>');
bot1.appendTo(forma);

forma.appendTo($('body'));

$(document).ready(function () {
setInterval(function(){
  $('#string>span').addClass('blink_on');
  setTimeout(function(){$('#string>span').removeClass('blink_on')},500);
},1000)
});



$(document).ready(function() {
  $('.btn-blob').click(function() {
    $(this).toggleClass('blob');
  });
});

let products=[]; //=new Arr();
let categorys=[]; //=new Arr();
let counter_admin=0;
$('#enter1Bot').click(function(){
	let name = $('#input1').val();
	console.log(name);
		if($('#input1').val().length>0&&$('#input2').val()&&$('#input3').val()&&$('#input5').val()&&
			$('#input4').val()){
			try{
			let name = $('#input1').val().match(/^([A-Za-zа-яёА-ЯЁ][a-zа-яё]+ ?){1,}$/)[0];
			let price = $('#input2').val().match(/(\d+[.,]\d{1,2})/g);
			//match(/^[1-9][0-9]{0,2}(?:\.?[0-9]{3}){0,3}(,[0-9]{2})?$/i)[0];
			let image = $('#input3').val().match(/^(?:([a-z]+):(?:([a-z]*):)?\/\/)?(?:([^:@]*)(?::([^:@]*))?@)?((?:[a-z0-9_-]+\.)+[a-z]{2,}|localhost|(?:(?:[01]?\d\d?|2[0-4]\d|25[0-5])\.){3}(?:(?:[01]?\d\d?|2[0-4]\d|25[0-5])))(?::(\d+))?(?:([^:\?\#]+))?(?:\?([^\#]+))?(?:\#([^\s]+))?$/i)[0];
			let dopInfo = $('#input5').val();
			let id = $('#input4').val().match(/^[1-9]+ ?$/)[0];
			console.log(name+'   '+price+'      '+image+'      '+dopInfo+'      '+id);
/*------------------------------------------------------------------------------------------------*/
		try{
		products=GetAllProducts();
		categorys=GetAllCategorys();
		if(categorys.length>0 && products.length>0){
			for(let i=0; i<categorys.length; i++){
				if(categorys[i].id==id){
					products.push(new Product(name, price, image, dopInfo, parseInt(id,10)));
					SaveAllProducts(products);
					counter_admin++;
					return;
				}
			}
			if(counter_admin==0){
				categorys.push(new Category(parseInt(id,10), "Unknown"));
				products.push(new Product(name, price, image, dopInfo, parseInt(id,10)));
				SaveAllProducts(products);
				SaveAllCategory(categorys);
				array2=products;
				console.log(categorys);
				return;
			}
		}else new SyntaxError("Данные некорректны");
		}catch(e){
			console.log('ERROR1:')
		}
/*-----------------------------------------------------------------------------------------------*/
			}catch(e){
				console.log('error in form');
			}
		}else{
			messageOfForm('Одно из полей не заполнено.');
		}
	
	/**/
	$('#input1').val('');
	$('#input2').val('');
	$('#input3').val('');
	$('#input5').val('');
	$('#input4').val('');
});

let str2='<form name="add1" method="#"><div id="fountainTextG7"><div id="fountainTextG_17" class="fountainTextG">'+
'Н</div><div id="fountainTextG_27" class="fountainTextG">о</div><div id="fountainTextG_37" class="fountainTextG">в</div>'+
'<div id="fountainTextG_47" class="fountainTextG">а</div>'+
'<div id="fountainTextG_57" class="fountainTextG">я&nbsp</div><div id="fountainTextG_67" class="fountainTextG">'+
 '</div><div id="fountainTextG_77" class="fountainTextG">к</div><div id="fountainTextG_87" class="fountainTextG">'+
 'а</div><div id="fountainTextG_97" class="fountainTextG">т</div><div id="fountainTextG_107"'+
 ' class="fountainTextG">е</div><div id="fountainTextG_117" class="fountainTextG">г</div><div id="fountainTextG_127"'+
 ' class="fountainTextG">о</div><div id="fountainTextG_137" class="fountainTextG">и</div><div id="fountainTextG_147"'+
 ' class="fountainTextG">я:</div></div>'+
 '<input id="input7" class="name_product input2" type="text" maxlength="80" placeholder="Название категории" >'+

 '<div id="fountainTextG8"><div id="fountainTextG_18" class="fountainTextG">I</div>'+
'<div id="fountainTextG_28" class="fountainTextG">D&nbsp</div><div id="fountainTextG_38" class="fountainTextG">'+
':&nbsp</div><div id="fountainTextG_48" class="fountainTextG">К</div><div id="fountainTextG_58" class="fountainTextG">'+
'а</div><div id="fountainTextG_68" class="fountainTextG">т</div><div id="fountainTextG_78" class="fountainTextG">'+
'е&nbsp</div><div id="fountainTextG_88" class="fountainTextG"> </div><div id="fountainTextG_98" class="fountainTextG">'+
'г</div><div id="fountainTextG_108" class="fountainTextG">о</div><div id="fountainTextG_118" class="fountainTextG">'+
'р</div><div id="fountainTextG_128" class="fountainTextG">и</div><div id="fountainTextG_138" class="fountainTextG">'+
'и</div><div id="fountainTextG_148" class="fountainTextG"></div></div>'+

'<input id="input8" class="price_product input2" type="text" maxlength="80" placeholder="Номер категории" >'+
'</form>';
let forma1=$('<div id="cont1">'+str2+'</div>');
forma1.appendTo('body');
let bot2=$('<div id="enter1Bot1" class="btn btn-blob">'+/*'&times;*/'Enter'+'</div>');

bot2.appendTo(forma1);
$('#enter1Bot').css('top','21%');
$('#enter1Bot1').css('top','25%').click(()=>{
	let global_counter=0;
	if($('#input7').val().length>0 && $('#input8').val()){
		console.log('12345');
		try{
			let name2 = $('#input7').val().match(/^([А-ЯЁа-яёa-zA-Z]{1,} ?)*$/g);
			let id2 = $('#input8').val().match(/^[1-9]([0-9]+)? ?$/g);
			let name1, id1;
			if(name2.length>0) name1=name2[0]; else name1=name2;
			if(id2.length>0) id1=id2[0]; else id1=id2;
			console.log(name1+'   '+id1);
		if(name1.length>0 && id1.length>0){
			try{
				categorys=GetAllCategorys();
				if(categorys.length>0){
					for(let i=0; i<categorys.length; i++){
						if(categorys[i].name==name1 && categorys[i].id1==id1){
							global_counter++;
						}
						if((categorys[i].name==name1 && categorys[i].id!=id1)||
							(categorys[i].name!=name1 && categorys[i].id==id1)){
							throw new MyError('error1',"error of input data:");
						}
					}
					if(global_counter==0){
						try{
							console.log(name1);
							categorys.push(new Category(parseInt(id1,10), name1));
							categorys.sort((ObjA, ObjB)=>{return ObjA.id-ObjB.id;});
							console.dir(categorys);
							SaveAllCategory(categorys);
							array1=categorys;
						}catch(e){
							messageOfForm('Ошибka парсинга ID.');
						}
					}else{ throw new MyError('error2',"error of input data:"); }
				}
			}
			catch(e){
				if(typeof(e)===MyError)
				messageOfForm(e.Message());
			else console.log('error11');
			}
		}else{
			messageOfForm('Ошибочно введено одно из полей.');
		}
		}catch(e){
			console.log('ERROR2:');
		}finally{
			$('#input7').val('');
			$('#input8').val('');
		}
	}else{
		messageOfForm('Одно из полей не заполнено.');
	}
	$('#input7').val('');
	$('#input8').val('');
});

function messageOfForm(body_message){
	if(sost==0){
				sost++;
			$('<p id="otv">'+body_message+'</p>').css('z-index','1001')
			.css('background','linear-gradient(60deg, '+gl_color1[0]+' 38%, '+gl_color1[1]+' 65%)')
			.css('color',gl_color1[2]).appendTo("body");

        	$('#otv').center();
        	$(window).scroll(()=>{
            	if ($('#otv').length > 0) {
                	$('#otv').center();
            	}
        	});
        	setTimeout(()=>{
        		sost=0;
        	    $('#otv').remove();
    	    }, 4000);
    }
};

