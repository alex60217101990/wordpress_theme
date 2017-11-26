'use strict';
function SaveAllProducts(array){
    localStorage.setItem("lengthOfProducts", /*JSON.stringify(array.length)*/ array.length);
    for(let i=0; i<array.length; i++){
        localStorage.setItem("product"+i, JSON.stringify(array[i]));
    }
};

function SaveAllCategory(cat_arr) {
    localStorage.setItem("countOfCategory", cat_arr.length);
    for(let q=0; q<cat_arr.length; q++){
        localStorage.setItem("category"+q, JSON.stringify(cat_arr[q]));
    }
};

function delAll(){
    let size=localStorage.getItem("lengthOfProducts");
    for(let u=0; u<size; u++){
        localStorage.removeItem("product"+u);
    }
    localStorage.removeItem("lengthOfProducts");
    size=localStorage.getItem("countOfCategory");
    for(let t=0; t<size; t++){
        localStorage.removeItem("category"+t);
    }
    localStorage.removeItem("countOfCategory");
};
let str;
function  GetAllProducts(){
    let name, price, catId;
    let arr=new Arr();
    let length=localStorage.getItem("lengthOfProducts");
        for(let j=0; j<length;j++){
        	str=JSON.parse(localStorage.getItem("product"+j));
            arr.push(Product.fromJson(str));
	    }
	    console.log(arr[0]);
	    return arr;
}
function  GetAllCategorys(){
    let arr=new Arr();
    let length=localStorage.getItem("countOfCategory");
        for(let j=0; j<length;j++){
        	str=JSON.parse(localStorage.getItem("category"+j));
            arr.push(Category.fromJson(str));
	    }
	    console.log(arr[0]);
	    return arr;
}










/*


JSON.parse(localStorage.getItem("product"+j), function(key, value){
                if(key=='name') return value; }),JSON.parse(localStorage.getItem("product"+j), function(key,value){
                    if(key=='price') return value;}), JSON.parse(localStorage.getItem("product"+j), function (key, value) {
                        if (key=='image') return value;}), JSON.parse(localStorage.getItem("product"+j), function (key, value) {
                    if (key=='dopInfo') return value;}),
                JSON.parse(localStorage.getItem("product"+j), function(key, value){
                        if(key=='catId') {
                            let cat= new Category(JSON.parse(localStorage.getItem("product"+j), function(key, value){
                                if(key=='Id') return value;
                            }), JSON.parse(localStorage.getItem("product"+j), function(key, value){
                                if(key=='name') return value;
                            })); return cat;}}))
            )//);*/