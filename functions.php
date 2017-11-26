<?php 
/*
*Добавление записи в описание оваров из Записей Wordpress.
*/
function addDescription(){
	
}



/**
* Все загружаемые стили и скрипты.
**/
function load_style_script(){
	wp_enqueue_script('jquery', get_template_directory_uri() . '/jquery.js');
	wp_enqueue_script('TweenLite', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenLite.min.js',array( 'jquery' ), false);
	$translation_array = array( 
	 'some_string' => __( 'Some string to translate' ), 
	 'a_value' => get_template_directory_uri() 
	);
	wp_enqueue_script('Arr', get_template_directory_uri() . '/Arr.js',array( 'jquery','TweenLite' ), '5.1', true);

	wp_enqueue_script('product', get_template_directory_uri() . '/product.js?v=5.1.1',array( 'jquery','TweenLite','Arr' ), '5.1', true);
	wp_localize_script( 'product', 'object_name', $translation_array );

	wp_enqueue_script('pagesFunctions', get_template_directory_uri() . '/pagesFunctions.js',array( 'jquery','TweenLite','Arr','product' ), '5.1', true);
	wp_localize_script( 'pagesFunctions', 'object_name', $translation_array );

	wp_enqueue_script('category', get_template_directory_uri() . '/category.js',array( 'jquery','TweenLite','Arr','product','pagesFunctions' ), '5.1', true);
	wp_localize_script( 'category', 'object_name', $translation_array );

	wp_enqueue_script('localStorage', get_template_directory_uri() . '/localStorage.js',array( 'jquery','TweenLite','Arr','product','pagesFunctions','category' ), '5.1', true);
	wp_localize_script( 'localStorage', 'object_name', $translation_array );

	wp_enqueue_script('cart_array', get_template_directory_uri() . '/cart_array.js',array( 'jquery','TweenLite','Arr','product','pagesFunctions','category','localStorage' ), '5.2', true);
	wp_localize_script( 'cart_array', 'object_name', $translation_array );

	wp_enqueue_script('buy_cart', get_template_directory_uri() . '/buy_cart.js',array( 'jquery','TweenLite','Arr','product','pagesFunctions','category','localStorage','cart_array' ), '5.4', true);
	/**/
	wp_localize_script( 'buy_cart', 'object_name', $translation_array );

	wp_enqueue_script('plavayuchiy_effect', get_template_directory_uri() . '/plavayuchiy_effect.js',array( 'jquery','TweenLite','Arr','product','pagesFunctions','category','localStorage','cart_array','buy_cart' ), '5.4', true);
	wp_localize_script( 'plavayuchiy_effect', 'object_name', $translation_array );

	
	wp_enqueue_script('effects', get_template_directory_uri() . '/effects.js',array( 'jquery','TweenLite','Arr','product','pagesFunctions','category','localStorage','cart_array','buy_cart','plavayuchiy_effect' ), '5.1', true);
	wp_localize_script( 'effects', 'object_name', $translation_array );

	wp_enqueue_script('eff', get_template_directory_uri() . '/eff.js',array( 'jquery','TweenLite','Arr','product','pagesFunctions','category','localStorage','cart_array','buy_cart','plavayuchiy_effect','effects' ), '5.3', true);
	wp_localize_script( 'eff', 'object_name', $translation_array );

	wp_enqueue_script('animate_script', get_template_directory_uri() . '/animate_script.js',array( 'jquery','TweenLite','Arr','product','pagesFunctions','category','localStorage','cart_array','buy_cart','plavayuchiy_effect','effects','eff' ), '5.1', true);
	wp_localize_script( 'animate_script', 'object_name', $translation_array );
	

	wp_enqueue_script('fl_bot', get_template_directory_uri() . '/fl_bot.js',array( 'jquery','TweenLite','Arr','product','pagesFunctions','category','localStorage','cart_array','buy_cart','plavayuchiy_effect','effects','eff','animate_script' ), '5.1', true);
	wp_localize_script( 'fl_bot', 'object_name', $translation_array );

	/*
	* include styles.
	*/

	wp_enqueue_style('animate', get_template_directory_uri() . '/style css/animate.css');
	wp_enqueue_style('styles', get_template_directory_uri() . '/styles.css');
	wp_enqueue_style('fire', get_template_directory_uri() . '/style css/fire.css');
	wp_enqueue_style('fl_bot', get_template_directory_uri() . '/style css/fl_bot.css');
}


/**
* Загружаем стили и скрипты.
**/

add_action('wp_enqueue_scripts', 'load_style_script');

?>