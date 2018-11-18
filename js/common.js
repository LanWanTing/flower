jQuery(document).ready(function(e) {
  // Menu    
	jQuery('.iMenu li.menuLi').hover(function(e) {
		var $cEle = jQuery(this);
		$cEle.find('li.menuLi a.link').addClass('');    
		$cEle.children('div.navSub').stop(false, true).fadeIn(300);
	}, function(e) {
		var $cEle = jQuery(this);
		$cEle.find('li.menuLi a.link').removeClass('');  
		$cEle.children('div.navSub').stop(false, true).fadeOut(300);  
	});
});


