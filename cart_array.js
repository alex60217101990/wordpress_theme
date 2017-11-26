'use strict';

$('<div class="allcart"><div class="cart"></div></div>').appendTo('body');
function create_fone(){
let newEff=$('<div class="container fire"></div>');
let newEff1=$('<div class="container smoke"></div>');
for(let e=0; e<16; e++){
	$('<div class="spark"></div>').appendTo(newEff);
	$('<div class="dust"></div>').appendTo(newEff1);
};
newEff.prependTo('body');
newEff1.prependTo('body');
};
create_fone();
$('#pixie').css('visibility','hidden');





/*let fl_bot=$('<div class="backdrop"></div><div class="fab child" data-subitem="1"><span>C</span></div><div class="fab child" data-subitem="2">'+
	'<span>B</span></div><div class="fab child" data-subitem="3"><span>A</span></div><div class="fab" id="masterfab"><span>+</span></div>');*/
	let fl_bot=$('<div class="backdrop"></div><div class="fab child" data-subitem="1"><span>C</span></div><div class="fab child" data-subitem="2">'+
	'<span><img src="'+object_name.a_value+'/images/admin.png" id="subFlBot2" class="subFlBot"/></span></div><div class="fab child" data-subitem="3"><span><img src="'+object_name.a_value+'/images/fl_bot1.png" id="subFlBot1" class="subFlBot"/></span></div><div class="fab" id="masterfab"><span>'+
	'<img id="im777" src="'+object_name.a_value+'/images/fl_bot.png"/>'+'</span></div>');
fl_bot.appendTo('body');



//localStorage.removeItem("GlobalCounter");

let u=[]; let counter=0;
let category_arr1=[];
if(null==localStorage.getItem("GlobalCounter")){
  	// нету
  	//delAll();
  	CreateAllData();
  	SaveAllProducts(u);
	SaveAllCategory(category_arr1);
}
else{
	// есть
	u=GetAllProducts();
	category_arr1=GetAllCategorys();
	console.log(category_arr1);
}

for(let q=0; q<category_arr1.length; q++){
	category_arr1[q].createElMenu();
}


function CreateAllData(){
	category_arr1.push(new Category(1,'Clothes'));
	category_arr1.push(new Category(2,'Footwear'));
	category_arr1.push(new Category(3,'Accessories'));
	category_arr1.push(new Category(4,'Perfumery'));
	category_arr1.push(new Category(5,'Clock'));

	/*for(let i = 0; i < 6; i++){
		for(let g=1; g<=5; g++){
			u.push(new Product('product'+(counter++),'4000 ghn','images/Close1.jpg','fdjfjfbgbgbgjkgjbgnjkbngjkgbngbgb fjkbngjbkgb'+ 
			'fkjnbgjkbgb fkjnbgfbng fkjbngjkbng fkjbjkg fkjbjfkbfb fkjbjkfbkfb fkbfkjbkfjbk', g));
		}
	}*/





u.push(new Product('шорты','400 ghn','https://i2.rozetka.ua/goods/2019239/nike_876651_010_m_images_2019239981.jpg','здесь будет любая дополнительная информация..., здесь будет любая дополнительная информация...,'+
' здесь будет любая дополнительная информация...', 1));
u.push(new Product('брюки','700 ghn','https://pi2.lmcdn.ru/img236x341/O/O/OO001EMNXJ52_4063145_1_v1.jpg','здесь будет любая дополнительная информация..., здесь будет любая дополнительная информация...,'+
' здесь будет любая дополнительная информация...', 1));
u.push(new Product('рубашка','750 ghn','https://gloimg.rowcdn.com/ROSE/2015/201511/source-img/1448672585790-P-3524659.jpg','здесь будет любая дополнительная информация..., здесь будет любая дополнительная информация...,'+
' здесь будет любая дополнительная информация...', 1));
u.push(new Product('свитер','820 ghn','http://www.mhealth.ru/upload/iblock/1eb/1ebbd0df0ad04e6c9d3b16a19b4d369e.jpg','здесь будет любая дополнительная информация..., здесь будет любая дополнительная информация...,'+
' здесь будет любая дополнительная информация...', 1));
u.push(new Product('куртка','2820 ghn','http://admin.sunshouse.com.ua/uploads/fotos/muzhskie-kurtki-zima.jpg','здесь будет любая дополнительная информация..., здесь будет любая дополнительная информация...,'+
' здесь будет любая дополнительная информация...', 1));
u.push(new Product('туфли','1820 ghn','http://stepland.ru/images/ut000008157.jpg','здесь будет любая дополнительная информация..., здесь будет любая дополнительная информация...,'+
' здесь будет любая дополнительная информация...', 2));
u.push(new Product('сандали','1020 ghn','https://street-shoes.com.ua/images/M_images/%D0%A4%D0%BE%D1%82%D0%BE3.jpg555503399df91.jpg','здесь будет любая дополнительная информация..., здесь будет любая дополнительная информация...,'+
' здесь будет любая дополнительная информация...', 2));
u.push(new Product('ботинки','3740 ghn','https://shoessale.com.ua/public/360/4/1/2/41227/41227_0.jpg','здесь будет любая дополнительная информация..., здесь будет любая дополнительная информация...,'+
' здесь будет любая дополнительная информация...', 2));
u.push(new Product('кросовки','3000 ghn','http://chevli.com.ua/image/cache/data/Nike/Thea%20ai%20max/%D0%9A%D1%83%D0%BF%D0%B8%D1%82%D1%8C%20%D0%B1%D0%B5%D0%BB%D0%BE' +
    '-%D1%81%D0%B8%D0%BD%D0%B8%D0%B5%20%D0%BC%D1%83%D0%B6%D1%81%D0%BA%D0%B8%D0%B5%20%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8%20Nike%20Air%20Max%20Thea(%D0%9D%D0%B0%D0%B9%D0%BA%20%D0%90%D0%B8%D1%80%20%D0%9C%D0%B0%D0%BA%'+
'D1%81%20%D0%A2%D0%B5%D0%B0)%20%D0%BD%D0%B5%D0%B4%D0%BE%D1%80%D0%BE%D0%B3%D0%BE%20%D0%B2%20%D0%9A%D0%B8%D0'+
'%B5%D0%B2%D0%B5,%D0%A5%D0%B0%D1%80%D1%8C%D0%BA%D0%BE%D0%B2%D0%B5%20%D0%B8%20%D0%A3%D0%BA%D1%80%D0%B0%'+
'D0%B8%D0%BD%D0%B5!-500x500.jpg','здесь будет любая дополнительная информация..., здесь будет любая дополнительная информация...,'+
' здесь будет любая дополнительная информация...', 2));
u.push(new Product('кеды','2555 ghn','http://trainers-shop.ru/image/data/Kategorii/krossovki-mujskie-cena-nedorogo-yalta-simferopol.jpg','здесь будет любая дополнительная информация..., здесь будет любая дополнительная информация...,'+
' здесь будет любая дополнительная информация...', 2));
u.push(new Product('галстук','980 ghn','https://bohenon.com/uploads/images/pages/d80b25153708c5192175866384e85f04963ed846.jpeg','здесь будет любая дополнительная информация..., здесь будет любая дополнительная информация...,'+
' здесь будет любая дополнительная информация...', 3));
u.push(new Product('запанки','2980 ghn','http://avtograf22.ru/wp-content/uploads/2015/02/zolotye-zaponki.jpg','здесь будет любая дополнительная информация..., здесь будет любая дополнительная информация...,'+
' здесь будет любая дополнительная информация...', 3));
u.push(new Product('перчатки','1100 ghn','http://fh.kiev.ua/wp-content/uploads/2013/12/modnye-muzhskie-perchatki.jpg','здесь будет любая дополнительная информация..., здесь будет любая дополнительная информация...,'+
' здесь будет любая дополнительная информация...', 3));
u.push(new Product('сумка','1400 ghn','http://nedvigo.net/images/2-kakie-muzskie-sumki-modnie.jpg','здесь будет любая дополнительная информация..., здесь будет любая дополнительная информация...,'+
' здесь будет любая дополнительная информация...', 3));
u.push(new Product('шапка','1400 ghn','http://tossy.ru/pics/2017/02/1486551031_5583.jpg','здесь будет любая дополнительная информация..., здесь будет любая дополнительная информация...,'+
' здесь будет любая дополнительная информация...', 3));
u.push(new Product('бользам после бритья','800 ghn','https://m.onlinetrade.ru/img/items/b/balzam_posle_britya_loreal_men_expert_gidra_sensitiv_100_ml_163819_2.jpg','здесь будет любая дополнительная информация..., здесь будет любая дополнительная информация...,'+
' здесь будет любая дополнительная информация...', 4));
u.push(new Product('туалетна вода','1400 ghn','http://www.laromat.ru/pics/253421.jpg','здесь будет любая дополнительная информация..., здесь будет любая дополнительная информация...,'+
' здесь будет любая дополнительная информация...', 4));
u.push(new Product('гель для душа','300 ghn','http://ic.pics.livejournal.com/be_ba_bu/20549744/389175/389175_original.jpg','здесь будет любая дополнительная информация..., здесь будет любая дополнительная информация...,'+
' здесь будет любая дополнительная информация...', 4));
u.push(new Product('одеколон','1100 ghn','https://img.klubok.com/img/used/2016/04/11/9481/9481802_2.jpg','здесь будет любая дополнительная информация..., здесь будет любая дополнительная информация...,'+
' здесь будет любая дополнительная информация...', 4));
u.push(new Product('дезодорант','350 ghn','https://www.piluli.ru/images/smacs_images/products/000/464/976/original_dezodorant_sprej_Adidas_Get_Ready_muzhskoj_150_ml_www_piluli_ru_eapt241864.jpg','здесь будет любая дополнительная информация..., здесь будет любая дополнительная информация...,'+
' здесь будет любая дополнительная информация...', 4));
u.push(new Product('карманные часы','5350 ghn','http://www.hollinsandhollinshead.com/ekmps/shops/hollins123/images/royal-london-full-hunter-quartz-pocket-watch-with-chain-90021-02-194333-p.jpg','здесь будет любая дополнительная информация..., здесь будет любая дополнительная информация...,'+
' здесь будет любая дополнительная информация...', 5));
u.push(new Product('туристические часы','7550 ghn','http://www.milcamp.eu/image/data/Blogs/Suunto-Traverse-Alpha-2016-photo-4.jpg','здесь будет любая дополнительная информация..., здесь будет любая дополнительная информация...,'+
' здесь будет любая дополнительная информация...', 5));
u.push(new Product('спортивный хронометр','9770 ghn','https://lv3.pigugroup.eu/colours/125/712/8/1257128/9256ceaadc0066c14a865962a9129267_large.jpg','здесь будет любая дополнительная информация..., здесь будет любая дополнительная информация...,'+
' здесь будет любая дополнительная информация...', 5));
u.push(new Product('механические часы','17430 ghn','http://www.alltime.ru/obj/catalog/watch/orient/img/normal/ET0P002B.jpg','здесь будет любая дополнительная информация..., здесь будет любая дополнительная информация...,'+
' здесь будет любая дополнительная информация...', 5));
u.push(new Product('кварцевые','10300 ghn','http://timebar.ua/uploads/images/tovar/%D0%9D%D0%95%D0%A1%D0%A2%D0%95%D0%A0%D0%9E%D0%92/Neasterov-H056202-05E.jpg','здесь будет любая дополнительная информация..., здесь будет любая дополнительная информация...,'+
' здесь будет любая дополнительная информация...', 5));



    localStorage.setItem("GlobalCounter", "1");
}
$('#subFlBot1').click(function(){
	SaveAllProducts(u);
	SaveAllCategory(category_arr1);
	//localStorage.removeItem("GlobalCounter");
$('<p id="otv" class="otv">Данные сохранены.</p>').appendTo("body");

        $('#otv').center();
        $(window).scroll(function () {
            if ($('#otv').length > 0) {
                $('#otv').center();
            }
        });
        setTimeout(()=>{
        		if($('#otv').hasClass('otv')){
        		$('#otv').removeClass('otv');
        		$('#otv').addClass('otv1');
        	}
    	}
        , 4000);
        setTimeout(massege, 7000);
        function massege() {
            $('#otv').remove();
        }
});

$('#subFlBot2').click(function(){
	window.open('admin.html');
});
pererisovka_okna(0);



