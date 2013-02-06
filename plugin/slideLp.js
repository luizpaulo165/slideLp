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
		timeSlide: 800,
		timeDelayIn: 500,
		timeDelayOut: 700,
		pagination: true,
		navButtons: true,
		keyboard: true,
		touch: true,
		prevName: "<",
		nextName: ">",
		paginationThumb: false,
		thumbSizeWidth: "150px",
		thumbSizeHeight: "100px",
		effects: "slide" //"pageHoriz", "slide", "fade", "pageVert"
	}
	options = $.extend(defaults, options);
/*=====================================================
	Geral
======================================================*/
	var $heightThis = $this.height();
	var $widthThis = $this.width();

	$(".wrapHighlight").css({
		width: ""+ $widthThis +"px",
		height: ""+ $heightThis +"px"
	});
/*=====================================================
	pagination
======================================================*/
if(options.pagination){
	var $pages = '<nav class="pagHighlight">';
	var $contBanner = $this.find(".listCont li .cont").html();

	$.each($this.find(".listCont li"),function(index){
		$pages += '<a href="javascript:void(0)" data-position='+ index +'>'+ $(this).find(".cont").html() +'</a>\n';
	});
	$pages += "</nav>";
	//add before section wrapHighlight
	$this.parent().append($pages);
	$(".pagHighlight a:first").addClass("active");
}else{
	var $pages = '<nav class="pagHighlight">';
	var $contBanner = $this.find(".listCont li .cont").html();

	$.each($this.find(".listCont li"),function(index){
		$pages += '<a href="javascript:void(0)" data-position='+ index +'>'+ $(this).find(".cont").html() +'</a>\n';
	});
	$pages += "</nav>";
	//add before section wrapHighlight
	$this.parent().append($pages);
	$(".pagHighlight a:first").addClass("active");

	$(".pagHighlight").css({
		display: "none"
	});
}
/*=====================================================
	paginationThumb
======================================================*/
if(options.paginationThumb){
	$(".pagHighlight").css({
		height: options.thumbSizeHeight
	});
	$(".pagHighlight a").css({
		textIndent: "0",
		textAlign: "center",
		width: options.thumbSizeWidth,
		height: options.thumbSizeHeight,
		"border-radius": "0",
		"-moz-border-radius": "0",
		"-webkit-border-radius": "0",
		"-o-border-radius": "0",
		"-ms-border-radius": "0"
	});
	$(".pagHighlight a *").css({
		textIndent: "0",
		textAlign: "center",
		width: "100%",
		height: "100%"
	});
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
	$this.parent().append($prevButton);
	$this.parent().append($nextButton);

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
if(options.keyboard){
	//action keyboard
	$(window).keydown(function(e){
		if (e.which == 39) {
     		var $self = $(".pagHighlight .active");

			if($self.next().length == "0"){
				$(".pagHighlight a:last").removeClass("active");
				$(".pagHighlight a:first").addClass("active").click();
			}

			$self.next().addClass("active").click().prev().removeClass("active");

			return false;
   		}else if(e.which == 37){
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

//action touch
if(options.touch){

	var hammer = new Hammer(document.getElementById("container"));

	$this.find(".wrapHighlight ul li").bind("dragstart", function() { 
        return false; 
    });

	hammer.onswipe = function(ev){
		// determine which direction we need to show the preview
	    if (ev.direction == "left") {
	  		var $self = $(".pagHighlight .active");

			if($self.next().length == "0"){
				$(".pagHighlight a:last").removeClass("active");
				$(".pagHighlight a:first").addClass("active").click();
			}

			$self.next().addClass("active").click().prev().removeClass("active");

			return false;	
	      }else if (ev.direction == "right") {
	  		var $self = $(".pagHighlight .active");

			if($self.prev().length == "0"){
				$(".pagHighlight a:first").removeClass("active");
				$(".pagHighlight a:last").addClass("active").click();
			}

			$self.prev().addClass("active").click().next().removeClass("active");

			return false;	
	      }
	}
   
}else{
	null;
}
/*=====================================================
	effects
======================================================*/
	function motion(effects){
		switch(effects){
			case 'fade':
				/*=====================================================
					fade
				======================================================*/
				//vars
				var $listCont = $this.children(".listCont");
				var $li = $listCont.find("li");
				var $liCont = $li.find(".cont");
				var $linkPag = $(".pagHighlight a");

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

						$li.fadeOut(options.timeDelayOut).removeClass("active");

						$listCont.find("li[data-position="+ $selfPosition +"] .cont").css("width","100%");
						$listCont.find("li[data-position="+ $selfPosition +"]").fadeIn(options.timeDelayIn).addClass("active");
					
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

					$li.fadeOut(options.timeDelayOut).removeClass("active");

					$listCont.find("li[data-position="+ $selfPosition +"] .cont").css({
						width: "100%",
						display: "block"
					});
					$listCont.find("li[data-position="+ $selfPosition +"]").fadeIn(options.timeDelayIn).addClass("active");

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

			case 'pageHoriz':
				/*=====================================================
					pageHoriz
				======================================================*/
				//vars
				var $listCont = $this.children(".listCont");
				var $li = $listCont.find("li");
				var $liCont = $li.find(".cont");
				var $linkPag = $(".pagHighlight a");
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

			case 'pageVert':
			/*=====================================================
				pageVert
			======================================================*/
			//vars
			var $listCont = $this.children(".listCont");
			var $li = $listCont.find("li");
			var $liCont = $li.find(".cont");
			var $linkPag = $(".pagHighlight a");
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

			case 'slide':
			/*=====================================================
				Slide
			======================================================*/
			//vars
			var $listCont = $this.children(".listCont");
			var $li = $listCont.find("li");
			var $liCont = $li.find(".cont");
			var $linkPag = $(".pagHighlight a");

			$liCont.css({
				width: "100%",
				height: "100%"
			});	

			$li.css({
				float: "left",
				position: "relative",
				width: $this.width()
			});

			//width $listCont
			var $liLenghtWidth = $listCont.find("li").outerWidth();
			var $widthUl = $liLenghtWidth * $li.length;

			$listCont.css({
				width: $widthUl + "px"
			});

			$listCont.find("li:first").addClass("active");

			$linkPag.bind({
				click: function(){
					var $self = $(this);
					var $selfPosition = $self.data("position");

					$linkPag.removeClass("active")
					$self.addClass("active");

					$li.removeClass("active");
					$listCont.find("li[data-position="+ $selfPosition +"]").addClass("active");

					var $positionActive = $listCont.find("li.active").position();

					$listCont.find("li").stop(true,true).animate({
						left: "-="+ $positionActive.left +"px"
					},options.timeSlide);

					return false;
				}
			});
			/*=====================================================
				auto
			======================================================*/
			function animaSlide(){
				var $self = $(".pagHighlight .active");

				if($self.next().length == "0"){
					$(".pagHighlight a:last").removeClass("active");
					$(".pagHighlight a:first").addClass("active");
				}

				$self.next().addClass("active").prev().removeClass("active");

				var $selfPosition = $(".pagHighlight .active").data("position");
				var $positionActive = $listCont.find("li[data-position="+ $selfPosition +"]").position();

				console.log($positionActive)

				$listCont.find("li").stop(true,true).animate({
					left: "-="+ $positionActive.left +"px"
				},options.timeSlide);

				return false;
			}
			//auto
			if(options.auto){
				time = setInterval(animaSlide, options.timeBanner);

				$(".pagHighlight a").click(function(){
					time = clearInterval(time);
					time = setInterval(animaSlide, options.timeBanner);
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