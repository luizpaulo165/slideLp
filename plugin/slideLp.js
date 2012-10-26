(function($){
$.fn.slideLp = function(options){
	//var selector
	$this = $(this).children(".wrapHighlight");

/*=====================================================
	options
======================================================*/
	var defaults = {
		auto: true,
		timeBanner: 3000,
		timeDelay: 500,
		timeDelayIn: 500,
		pagination: true,
		navButtons: true,
		prevName: "<",
		nextName: ">",
		effects: "pageCenter" //"pageHoriz", "slide", "fade", "pageVert"
	}
	options = $.extend(defaults, options);

/*=====================================================
	pagination
======================================================*/
if(options.pagination){
	var $pages = '<nav class="pagHighlight">';
	$.each($this.find(".listCont li"),function(index){
		$pages += '<a href="javascript:void()" data-position='+ index +'></a>\n';
	});
	$pages += "</nav>";
	//add before section wrapHighlight
	$this.append($pages);
	$(".pagHighlight a:first").addClass("active");
}else{
	null;
}

/*=====================================================
	navButtons
======================================================*/
if(options.navButtons){
	var $prevButton = '<a href="javascript:void()" class="prevButton">'+ options.prevName +'</a>';
	var $nextButton = '<a href="javascript:void()" class="nextButton">'+ options.nextName +'</a>';
	//add buttons in html
	$this.append($prevButton);
	$this.append($nextButton);

	//action nextButton
	$(".nextButton").bind({
		click: function(){
			var $self = $(".pagHighlight .active");

			if($self.next().length == "0"){
				$(".pagHighlight a:last").removeClass("active");
				$(".pagHighlight a:first").addClass("active").click();
			}

			$self.next().addClass("active").click().prev().removeClass("active");

			return false;
		}
	});

	//action prevButton
	$(".prevButton").bind({
		click: function(){
			var $self = $(".pagHighlight .active");

			if($self.prev().length == "0"){
				$(".pagHighlight a:first").removeClass("active");
				$(".pagHighlight a:last").addClass("active").click();
			}

			$self.prev().addClass("active").click().next().removeClass("active");

			return false;
		}
	});

}else{	
	null;
}

/*=====================================================
	effects
======================================================*/
	function motion(effects){
		switch(effects){
			case 'pageHoriz':
				/*=====================================================
					pageHoriz
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
						},options.timeDelay);

						return false;
					}
				});
				/*=====================================================
					auto
				======================================================*/
				function animaPageHoriz(){
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
					},options.timeDelay);

					return false;
				}
				//auto
				if(options.auto){
					time = setInterval(animaPageHoriz, options.timeBanner);

					$(".pagHighlight a").click(function(){
						time = clearInterval(time);
						time = setInterval(animaPageHoriz, options.timeBanner);
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
						$listCont.find("li[data-position="+ $selfPosition +"]").delay(options.timeDelay).fadeIn(options.timeDelayIn).addClass("active");
					
						return false;
					}
				});
				/*=====================================================
					auto
				======================================================*/
				function animaFade(){
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
					$listCont.find("li[data-position="+ $selfPosition +"]").delay(options.timeDelay).fadeIn(options.timeDelayIn).addClass("active");

					return false;
				}
				//auto
				if(options.auto){
					//hover
					time = setInterval(animaFade, options.timeBanner);

					$(".pagHighlight a").click(function(){
						time = clearInterval(time);
						time = setInterval(animaFade, options.timeBanner);
					});
				}
			break;

			case 'pageVert':
			/*=====================================================
				pageVert
			======================================================*/
			//vars
			var $listCont = $this.children(".listCont");
			var $li = $listCont.find("li");
			var $liCont = $li.find(".cont");
			var $pagHighlihgt = $this.children(".pagHighlight");
			var $linkPag = $pagHighlihgt.find("a");
			i = 10;
			j = 10;

			$listCont.find("li .cont").css({
				width: "100%",
				height: "0",
				"border-bottom": "1px solid #CCCCCC",
				"box-shadow": "0px 2px 4px #000000",
				"-mozbox-shadow": "0px 2px 4px #000000",
				"-webkit-box-shadow": "0px 2px 4px #000000",
				"-o-box-shadow": "0px 2px 4px #000000",
				"-ms-box-shadow": "0px 2px 4px #000000"
			});
			$listCont.find("li:first .cont").css("height","100%");

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
						height: "0%"
					});

					$li.removeClass("active");

					$listCont.find("li[data-position="+ $selfPosition +"]").addClass("active").css("z-index", ++i);
					$listCont.find("li[data-position="+ $selfPosition +"] .cont").stop(true,true).animate({
						height: "100%"
					},options.timeDelay);

					return false;
				}
			});
			/*=====================================================
				auto
			======================================================*/
			function animaPageVert(){
				var $self = $(".pagHighlight .active");

				if($self.next().length == "0"){
					$(".pagHighlight a:last").removeClass("active");
					$(".pagHighlight a:first").addClass("active");
				}

				$self.next().addClass("active").prev().removeClass("active");

				var $selfPosition = $(".pagHighlight .active").data("position");

				$listCont.find("li[data-position="+ $selfPosition +"] .cont").css({
					height: "0%"
				});

				$li.removeClass("active");

				$listCont.find("li[data-position="+ $selfPosition +"]").addClass("active").css("z-index", ++i);
				$listCont.find("li[data-position="+ $selfPosition +"] .cont").stop(true,true).animate({
					height: "100%"
				},options.timeDelay);

				return false;
			}
			//auto
			if(options.auto){
				time = setInterval(animaPageVert, options.timeBanner);

				$(".pagHighlight a").click(function(){
					time = clearInterval(time);
					time = setInterval(animaPageVert, options.timeBanner);
				});
			}
			break;

			case 'pageCenter':
			//vars
			var $listCont = $this.children(".listCont");
			var $li = $listCont.find("li");
			var $liCont = $li.find(".cont");
			var $pagHighlihgt = $this.children(".pagHighlight");
			var $linkPag = $pagHighlihgt.find("a");
			i = 10;
			j = 10;

			$listCont.find("li .cont").css({
				width: "100%",
				height: "100%",
				margin: "0 auto",
				top: "50%",
				left: "-1px",
				"border": "1px solid #CCCCCC",
				"box-shadow": "0 0px 5px #000000",
				"-mozbox-shadow": "0 0px 5px #000000",
				"-webkit-box-shadow": "0 0px 5px #000000",
				"-o-box-shadow": "0 0px 5px #000000",
				"-ms-box-shadow": "0 0px 5px #000000"
			});

			$listCont.find("li:first .cont").css({
				height: "100%",
				top: "-1px",
				left: "-1px"
			});

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
						width: "0%",
						height: "0%",
						top: "50%"
					});

					$li.removeClass("active");

					$listCont.find("li[data-position="+ $selfPosition +"]").addClass("active").css("z-index", ++i);
					$listCont.find("li[data-position="+ $selfPosition +"] .cont").stop(true,true).animate({
						width: "100%",
						height: "100%",
						top: "-1px"
					},options.timeDelay);

					return false;
				}
			});
			/*=====================================================
				auto
			======================================================*/
			function animaPageCenter(){
				var $self = $(".pagHighlight .active");

				if($self.next().length == "0"){
					$(".pagHighlight a:last").removeClass("active");
					$(".pagHighlight a:first").addClass("active");
				}

				$self.next().addClass("active").prev().removeClass("active");

				var $selfPosition = $(".pagHighlight .active").data("position");

				$listCont.find("li[data-position="+ $selfPosition +"] .cont").css({
						width: "0%",
						height: "0%",
						top: "50%"
					});

					$li.removeClass("active");

					$listCont.find("li[data-position="+ $selfPosition +"]").addClass("active").css("z-index", ++i);
					$listCont.find("li[data-position="+ $selfPosition +"] .cont").stop(true,true).animate({
						width: "100%",
						height: "100%",
						top: "-1px"
					},options.timeDelay);

				return false;
			}
			//auto
			if(options.auto){
				time = setInterval(animaPageCenter, options.timeBanner);

				$(".pagHighlight a").click(function(){
					time = clearInterval(time);
					time = setInterval(animaPageCenter, options.timeBanner);
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