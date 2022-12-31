(function () {
    // Click Menu
	document.getElementsByClassName('block_menu_mobile')[0].addEventListener('click',function(){
		if(document.getElementsByClassName('block_open_menu')[0].style.display == 'block')
		{
			document.getElementsByClassName('block_open_menu')[0].style.display = 'none';
			document.getElementsByClassName('block_menu_mobile')[0].innerHTML = '<i class="icon-bar"></i><i class="icon-bar"></i><span>MENU</span>';
			document.getElementsByClassName('block_open_menu')[0].className = 'block_open_menu';
		}
		else
		{
			document.getElementsByClassName('block_open_menu')[0].style.display = 'block';
			document.getElementsByClassName('block_menu_mobile')[0].innerHTML = '<i class="icon-close"></i>';
			document.getElementsByClassName('block_open_menu')[0].className = 'block_open_menu active';
		}
	});
	var els = document.getElementsByClassName('block_menu_item');
	for (var i = 0; i < els.length; i++) {
			els[i].addEventListener('click', handler, false)
	}
	function handler(){
		if(this.getAttribute('class') === 'block_top block_menu_item active')
		{
			this.className = 'block_top block_menu_item';
		}
		else
		{
			this.className = 'block_top block_menu_item active';
		}
	}
	var els2 = document.getElementsByClassName('block_menu_item_2');
	for (var i = 0; i < els2.length; i++) {
			els2[i].addEventListener('click', handler2, false)
	}
	function handler2(){
		if(this.getAttribute('class') === 'block_menu_item_2 active')
		{
			this.className = 'block_menu_item_2';
		}
		else
		{
			this.className = 'block_menu_item_2 active';
		}
	}
	// Sticky Header
	window.onscroll = function() {scrollFunction()};
	function scrollFunction() {
	  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
	    document.getElementById("block_sticky_header").className = "position";
	  } else {
	    document.getElementById("block_sticky_header").className = "";
	  }
	}
	
	
	// Google Map
	let map;
	document.addEventListener("DOMContentLoaded",() => {
		let s = document.createElement("script");
		document.head.appendChild(s);
		s.addEventListener("load",() => {
      var myposition = {lat: -34.397, lng: 150.644};
			map = new google.maps.Map(document.getElementById('block_map'), {
			center: myposition,
			zoom: 8,
			mapTypeId: google.maps.MapTypeId.ROADMAP
			});
      var contentString = '<div class="content_map"><h3>THEODORE ALEXANDER</h3><p>'+
        '411 Tomlinson St, High Point North Calrolina, 27260 United States'+
				'</p></div>';
       var infowindow = new google.maps.InfoWindow({
        content: contentString
      });

      var marker = new google.maps.Marker({
        position: myposition,
        map: map,
        title: 'Theodore Alexander'
      });
      marker.addListener('click', function() {
        infowindow.open(map, marker);
      });
		});
		s.addEventListener("load",() => {
      var myposition = {lat: -34.397, lng: 150.644};
			map = new google.maps.Map(document.getElementById('block_map_desktop'), {
			center: myposition,
			zoom: 8,
			mapTypeId: google.maps.MapTypeId.ROADMAP
			});
      var contentString = '<div class="content_map"><h3>THEODORE ALEXANDER</h3><p>'+
        '411 Tomlinson St, High Point North Calrolina, 27260 United States'+
				'</p></div>';
       var infowindow = new google.maps.InfoWindow({
        content: contentString
      });

      var marker = new google.maps.Marker({
        position: myposition,
        map: map,
        title: 'Theodore Alexander'
      });
      marker.addListener('click', function() {
        infowindow.open(map, marker);
      });
		});	 
		s.src='https://maps.googleapis.com/maps/api/js?key=AIzaSyCQQ_JBNIzJv_au-RLszU12TYMmNN36LZM';
	});
	
	
	// Menu Brands dropdown 
	var brands = document.getElementsByClassName('brand_item');
	for (var i = 0; i < brands.length; i++) {
		brands[i].addEventListener('click', menubrands, false)
	}
	function menubrands()
	{
		var _id = this.getAttribute('id');
		var brands_open = document.getElementsByClassName('brand_open');
		for (var i = 0; i < brands_open.length; i++) {
			brands_open[i].style.display = 'none';
		}
		document.getElementsByClassName(_id)[0].style.display = 'block';
	}
	// Menu News dropdown
	var news = document.getElementsByClassName('news_item');
	for (var i = 0; i < news.length; i++) {
		news[i].addEventListener('click', menunews, false)
	}
	function menunews()
	{
		var _id = this.getAttribute('id');
		var news_open = document.getElementsByClassName('news_open');
		for (var i = 0; i < news_open.length; i++) {
			news_open[i].style.display = 'none';
		}
		document.getElementsByClassName(_id)[0].style.display = 'block';
	}
	
	
	// Sidebar Category
	var _level1 = document.getElementsByClassName('_level1');
	for (var i = 0; i < _level1.length; i++) {
		_level1[i].addEventListener('click', openlevel1, false)
	}
	function openlevel1()
	{
		this.classList.toggle('active');
		if(this.classList.contains("active"))
		{
			this.querySelector('span').innerHTML = ' - ';
		}
		else
		{
			this.querySelector('span').innerHTML = ' + ';	
		}
	}
	
	var _level2 = document.getElementsByClassName('_level2');
	for (var i = 0; i < _level2.length; i++) {
		_level2[i].addEventListener('click', openlevel2, false)
	}
	
	function openlevel2()
	{
		this.classList.toggle('active');
		if(this.classList.contains("active"))
		{
			this.querySelector('i').classList.remove('icon-arrow_menu_mobile');
			this.querySelector('i').classList.add('icon-arrow_dropdown');
		}
		else
		{
			this.querySelector('i').classList.remove('icon-arrow_dropdown');
			this.querySelector('i').classList.add('icon-arrow_menu_mobile');
		}
	}

	
	// Click Change Style Products
	var _list_icon = document.querySelector('.icon-grid_vertical');
	_list_icon.addEventListener('click',function(){
		document.getElementsByClassName('_product_list')[0].style.display = 'block';
		document.getElementsByClassName('_product_gird')[0].style.display = 'none';
	},false);
	var _grid_icon = document.querySelector('.icon-grid_horizontal');
	_grid_icon.addEventListener('click',function(){
		document.getElementsByClassName('_product_list')[0].style.display = 'none';
		document.getElementsByClassName('_product_gird')[0].style.display = 'block';
	},false);
	
	
	// Click filter mobile
	var _filter_mobile = document.querySelector('._filter_mobile .icon-filter');
	_filter_mobile.addEventListener('click', function(){
		document.querySelector('._open_filter_mobile').classList.add('active')
	},false);
	var _close_filter = document.querySelector('._open_filter_mobile ._close_filter');
	_close_filter.addEventListener('click', function(){
		document.querySelector('._open_filter_mobile').classList.remove('active')
	},false);
	

}());

