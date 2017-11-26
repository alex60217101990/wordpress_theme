'use strict';

class Category {
    constructor(catId, name) {
        this.Id = catId;
        this.name = name;
    }
    createElMenu(){
        let el_menu=$('<div class="menu_el"></div>');
        el_menu.text(this.name);
        el_menu.appendTo('.menu');
        let Context_menu=this;
        el_menu.click(function(){
            let time_arr=[];
       /*     if($(this).hasClass('menu_el_active')){
                console.log(menu_arr);
                for(let o=0; o<category_arr.length; o++){
                    if(menu_arr[o].hasClass('menu_el_active')
                        && menu_arr[o].id==Context_menu.id) return;
                }
            
                $(this).removeClass('menu_el_active');
            //zapolnenie cnranic
            $('.cart').empty();
            $('#pages').empty();
            pererisovka_okna(0);
            //zapolnenie cnranic

            }else{
                for(let o=0; o<category_arr.length; o++){
                    if(menu_arr[o].hasClass('menu_el_active')) return;
                }  //console.log(2);
                $(this).addClass('menu_el_active');
            //zapolnenie cnranic
            for(let w=0; w<array_products.length; w++){
                if(array_products[w].Category==Context_menu.id)
                    time_arr.push(array_products[w]);
            }
            category_arr=time_arr;
            $('.cart').empty();
            $('#pages').empty();
            pererisovka_okna(Context_menu.id);
            //zapolnenie cnranic
            }
*/

            if($(this).hasClass('menu_el_active')){
                    $('.cart').empty();
                    $('#pages').empty();
                    $(this).removeClass('menu_el_active');
                    pererisovka_okna(0);
            }else{
                let counter=0;
                    for(let u=0; u<menu_arr.length; u++){
                        if(menu_arr[u].hasClass('menu_el_active')/*&&menu_arr[u].id==Context_menu.id*/) counter++ ;
                    }
                    if(counter==0){
                    $('.cart').empty();
                    $('#pages').empty();
                    $(this).addClass('menu_el_active');
                    for(let w=0; w<array_products.length; w++){
                        if(array_products[w].Category==Context_menu.id)
                        time_arr.push(array_products[w]);
                    }
                    category_arr=time_arr;
                    pererisovka_okna(Context_menu.id);
                }
            }

            /*  for(let w=0; w<array_products.length; w++){
                if(array_products[w].Category==Context_menu.id)
                    time_arr.push(array_products[w]);
            }
            category_arr=time_arr;
            $('.cart').empty();
            $('#pages').empty();
            pererisovka_okna(Context_menu.id);  */
        });
        menu_arr.push(el_menu);
    };
    get id() {
        return (this.Id);
    }
    get Name() {
        return (this.name);
    }

    set id(newValue1) {
        this.Id = newValue1;
    }
    set Name(newValue2) {
        this.name = newValue2;
    }
    static fromJson(json) {
    var data = json; // Парсим поля
    return new Category(data.Id, data.name); // Создаем новый инстанс
  }
};