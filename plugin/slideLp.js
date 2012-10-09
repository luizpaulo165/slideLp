(function($){
$.fn.slideLp = function(options){
	//var selector
	$this = $(this).children(".wrapHighlight");

/*=====================================================
	options
======================================================*/
	var defaults = {
		auto: true,
		timeBanner: "3000",
		timeDelay: "500",
		pagination: false,
		effects: "page" //or "slide", "fade"
	}
	options = $.extend(defaults, options);

/*=====================================================
	effects
======================================================*/
	function motion(effects){
		switch(effects){
			case 'page':
				/*=====================================================
					page
				======================================================*/
				//vars
				var $listCont = $this.children(".listCont");
				var $li = $listCont.find("li");
				var $liCont = $li.find(".cont");
				var $pagHighlihgt = $this.children(".pagHighlight");
				var $linkPag = $pagHighlihgt.find("a");
				i = 10;
				j = 10;

				$listCont.find("li:first .cont").css("width","100%");

				$li.each(function(e){
					$(this).css("z-index", --j)
				});

				$linkPag.bind({
					click: function(){
						var $self = $(this);
						var $selfPosition = $self.data("position");

						$linkPag.removeClass("active")
						$self.addClass("active");

						$listCont.find("li[data-position="+ $selfPosition +"] .cont").css({
							width: "0%"
						});

						$li.removeClass("active");

						$listCont.find("li[data-position="+ $selfPosition +"]").addClass("active").css("z-index", ++i);
						$listCont.find("li[data-position="+ $selfPosition +"] .cont").stop(true,true).animate({
							width: "100%"
						},1000);

						return false;
					}
				});
				/*=====================================================
					auto
				======================================================*/
				function anima(){
					var $self = $(".pagHighlight .active");

					if($self.next().length == "0"){
						$(".pagHighlight a:last").removeClass("active");
						$(".pagHighlight a:first").addClass("active");
					}

					$self.next().addClass("active").prev().removeClass("active");

					var $selfPosition = $(".pagHighlight .active").data("position");

					$listCont.find("li[data-position="+ $selfPosition +"] .cont").css({
						width: "0%"
					});

					$li.removeClass("active");

					$listCont.find("li[data-position="+ $selfPosition +"]").addClass("active").css("z-index", ++i);
					$listCont.find("li[data-position="+ $selfPosition +"] .cont").stop(true,true).animate({
						width: "100%"
					},1000);

					return false;
				}
				//auto
				if(options.auto){
					time = setInterval(anima, options.timeBanner);

					$(".pagHighlight a").click(function(){
						time = clearInterval(time);
						time = setInterval(anima, options.timeBanner);
					});
				}
			break;

			case 'fade':
				/*=====================================================
					fade
				======================================================*/
				//vars
				var $listCont = $this.children(".listCont");
				var $li = $listCont.find("li");
				var $liCont = $li.find(".cont");
				var $pagHighlihgt = $this.children(".pagHighlight");
				var $linkPag = $pagHighlihgt.find("a");

				$listCont.find("li:first").addClass("active");
				$listCont.find("li:first .cont").css("width","100%");
				$listCont.find("li").css("display","none");
				$listCont.find("li:first").css("display","block");

				$linkPag.bind({
					click: function(){
						var $self = $(this);
						var $selfPosition = $self.data("position");

						$linkPag.removeClass("active")
						$self.addClass("active");

						$li.fadeOut(options.timeBanner).removeClass("active");

						$listCont.find("li[data-position="+ $selfPosition +"] .cont").css("width","100%");
						$listCont.find("li[data-position="+ $selfPosition +"]").delay(options.timeDelay).fadeIn(options.timeBanner).addClass("active");
					
						return false;
					}
				});
				/*=====================================================
					auto
				======================================================*/
				function anima(){
					var $self = $(".pagHighlight .active");

					if($self.next().length == "0"){
						$(".pagHighlight a:last").removeClass("active");
						$(".pagHighlight a:first").addClass("active");
					}

					$self.next().addClass("active").prev().removeClass("active");

					var $selfPosition = $(".pagHighlight .active").data("position");

					$li.fadeOut(options.timeBanner).removeClass("active");

					$listCont.find("li[data-position="+ $selfPosition +"] .cont").css({
						width: "100%",
						display: "block"
					});
					$listCont.find("li[data-position="+ $selfPosition +"]").delay(options.timeDelay).fadeIn(options.timeBanner).addClass("active");

					return false;
				}
				//auto
				if(options.auto){
					//hover
					time = setInterval(anima, options.timeBanner);

					$(".pagHighlight a").click(function(){
						time = clearInterval(time);
						time = setInterval(anima, options.timeBanner);
					});
				}
			break;
		}
	}
	motion(options.effects);
/*=====================================================
	verifications
======================================================*/
	//pagination
	if(!options.pagination){
		$(".pagHighlight").css("display","none");
	}
}
})(jQuery);