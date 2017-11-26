'use ctrict'
let arr_buy=new Arr();
let array_products=new Arr();
let count=0;
let MenU;
console.log('////////////////////////'+object_name.a_value+'////////////////////////////')
class Product /*extends Category*/{
    constructor(Aname, Aprice,img,DopInfo,ACategory) {
        this.name = Aname;
        this.price = Aprice;
        this.image=img;
        this.catId=ACategory;
        this.dopInfo=DopInfo;
        array_products.push(this);
    }
    createDom(){
    	let el=$('<div class="product">');
    	let text1=$('<p class="price"></p>').text(this.name);
		el.append(text1);
		let im=$('<img src="'+this.image+'" class="img_for_product">'); el.append(im);
		let dop_inf=$('<div class="dInNN"></p><span class="sp">Name: </span>' + ' - ' + this.name + '</p>' +
                                    '<p><span class="sp">Information: </span>' + this.dopInfo + '</div>').appendTo(el);
		let n=this.name;		
		im.click(function(){
			if(dop_inf.hasClass('dInN')||dop_inf.hasClass('dInNN')){
                console.log('dopinf')
				dop_inf.removeClass('dInNN');
				dop_inf.removeClass('dInN');
				dop_inf.addClass('dIn');
				dop_inf.css('top',(el.height()+20)+'px');
			}
			else{
				dop_inf.removeClass('dIn');
				dop_inf.addClass('dInN');
			}
			console.log(name);
    	});

    	let text2=$('<p class="price price1"></p>').text(this.price);
    	el.append(text2);
    	let buy_im=$('<img class="buy1" src="'+object_name.a_value+'/images/buy.png"/>'); 
        text2.append(buy_im);
    	let Context=this;
    	//console.log(Context);
    	buy_im.click(function (){
    		if(/*sessionStorage.getItem('add'+count)%2==0*/$(this).hasClass('buy1')){
    			$(this).removeClass('buy1');
    			$(this).addClass('buy');
    		}
    		else{
    			$(this).removeClass('buy');
    			$(this).addClass('buy1');
    		}
    		arr_buy.push(Context);
    		console.log(arr_buy);
    		});

    	/*dobavlenie uglovogo krestica udaleniya.*/
    		let close_bot=$('<img class="close" src="'+object_name.a_value+'/images/close.png"/>');
    		close_bot.mouseover(function(){
    			if($(this).hasClass('open')){
    				$(this).removeClass('open');
    				$(this).addClass('close');
    			}else{
    				$(this).removeClass('close');
    				$(this).addClass('open');
    			}
    		});
    		close_bot.mouseout(function(){
    			if($(this).hasClass('close')){
    				$(this).removeClass('close');
    				$(this).addClass('open');
    			}else{
    				$(this).removeClass('open');
    				$(this).addClass('close');
    			}
    		});
    		close_bot.click(function(){
    			el.remove();
    		});
    		close_bot.appendTo(el);
    	/*dobavlenie uglovogo krestica udaleniya.*/

    	/*buy_im.mouseout(function(){
    		if($(this).hasClass('buy')){
    				$(this).removeClass('buy');
    				$(this).addClass('buy1');
    		};
    	});*/
    	console.log('new el')
    	el.appendTo('div.cart');
    
    	count++;
    }
    get Name(){
        return (this.name);
    }
    get Img(){
        return (this.image);
    }
    get Price(){
        return (this.price);
    }
    get Info(){
        return (this.dopInfo);
    }
    get Category(){
        return (this.catId);
    }
    set Image(Image){
        this.image=Image;
    }
    set Name(Aname){
        this.name = Aname;
    }
    set Price(Aprice){
        this.price = Aprice;
    }
    set Info(Info){
        this.dopInfo=Info;
    }
    set Category(ACategory){
        this.catId = ACategory;
    }
    static fromJson(json) {
    var data = json; // Парсим поля
    return new Product(data.name, data.price, data.image, data.dopInfo, data.catId); // Создаем новый инстанс
  }
}
Product.prototype.valueOf = function () {
    return JSON.stringify(this);
}