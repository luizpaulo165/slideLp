(function($){
$.fn.slideLp = function(options){
	//var selector
	var $this = $(this);

	$this.each(function(){
		$this = $(this).find(".wrapHighlight");	
	});
/*=====================================================
	options
======================================================*/
	var defaults = {
		auto: true,
		timeBanner: 7000,
		timeDelay: 500,
		timeSlide: 800,
		timeDelayIn: 500,
		timeDelayOut: 700,
		barCounter: true,
		pagination: true,
		navButtons: true,
		keyboard: false,
		touch: true,
		thresholdX: 100,
		thresholdY: 100,
		touchName: "",
		prevName: "<",
		nextName: ">",
		paginationThumb: true,
		thumbSizeWidth: "150px",
		thumbSizeHeight: "100px",
		effects: "fade" //"pageHoriz", "slide", "fade", "pageVert"
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

	//ie
	if (document.all && (!document.documentMode || (document.documentMode && document.documentMode == 8))) {
	    options.touch = false;
	    alert(options.touch)
	}else if(document.all && (!document.documentMode || (document.documentMode && document.documentMode == 7))){
		options.touch = false;
		alert(options.touch)
	}else if(document.all && (!document.documentMode || (document.documentMode && document.documentMode == 6))){
		options.touch = false;
		alert(options.touch)
	}
/*=====================================================
	pagination
======================================================*/
if(options.pagination){
	var $pages = '<nav class="pagHighlight">';
	var $contBanner = $this.find(".listCont li .cont").html();

	/*=====================================================
	paginationThumb
	======================================================*/
	if(options.paginationThumb){
		$.each($this.find(".listCont li"),function(index){
		$pages += '<a href="javascript:void(0)" data-position='+ index +'>'+ $(this).find(".cont").html() +'</a>\n';
		});
		$pages += "</nav>";
		//add before section wrapHighlight
		$this.parent().append($pages);
		$this.parent().find(".pagHighlight a:first").addClass("active");


		$this.parent().find(".pagHighlight").css({
			height: options.thumbSizeHeight
		});
		$this.parent().find(".pagHighlight a").css({
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
		$this.parent().find(".pagHighlight a *").css({
			textIndent: "0",
			textAlign: "center",
			width: "100%",
			height: "100%"
		});
	}else{
		$.each($this.find(".listCont li"),function(index){
		$pages += '<a href="javascript:void(0)" data-position='+ index +'>'+ index +'</a>\n';
		});
		$pages += "</nav>";
		//add before section wrapHighlight
		$this.parent().append($pages);
		$this.parent().find(".pagHighlight a:first").addClass("active");
	}
}else{
	var $pages = '<nav class="pagHighlight">';
	var $contBanner = $this.find(".listCont li .cont").html();

	$.each($this.find(".listCont li"),function(index){
		$pages += '<a href="javascript:void(0)" data-position='+ index +'>'+index +'</a>\n';
	});
	$pages += "</nav>";
	//add before section wrapHighlight
	$this.parent().append($pages);
	$this.parent().find(".pagHighlight a:first").addClass("active");

	$this.parent().find(".pagHighlight").css({
		display: "none"
	});
}
/*=====================================================
	barCounter
======================================================*/
if(options.barCounter && options.auto){
	var $wrapCounter = "<div id='wrapCounter'><div class='counterLine'>1</div></div>";

	$this.parent().append($wrapCounter);

	function animaCounter(){
		$("#wrapCounter .counterLine").css({
			width: "0%"
		});

		$("#wrapCounter .counterLine").stop(true,true).animate({
			width: "100%"
		},options.timeBanner,function(){
			animaCounter();
		});
	}
	animaCounter();

	$this.parent().find(".pagHighlight a").bind({
		click: function(){
			animaCounter();
		}
	});

}else{
	var $wrapCounter = "<div id='wrapCounter'><div class='counterLine'>1</div></div>";

	$this.parent().append($wrapCounter);
	$("#wrapCounter").css({
		display: "none"
	});
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
	$this.parent().find(".nextButton").bind({
		click: function(){
			var $self = $this.parent().find(".pagHighlight .active");

			if($self.next().length == "0"){
				$this.parent().find(".pagHighlight a:last").removeClass("active");
				$this.parent().find(".pagHighlight a:first").addClass("active").click();
			}

			$self.next().addClass("active").click().prev().removeClass("active");

			return false;
		}
	});

	//action prevButton
	$this.parent().find(".prevButton").bind({
		click: function(){
			var $self = $this.parent().find(".pagHighlight .active");

			if($self.prev().length == "0"){
				$this.parent().find(".pagHighlight a:first").removeClass("active");
				$this.parent().find(".pagHighlight a:last").addClass("active").click();
			}

			$self.prev().addClass("active").click().next().removeClass("active");

			return false;
		}
	});

}else{	
	null;
}
/*=====================================================
	keyboard
======================================================*/
if(options.keyboard){
	//action keyboard
	$(window).keydown(function(e){
		if (e.which == 39) {
     		var $self = $this.parent().find(".pagHighlight .active");

			if($self.next().length == "0"){
				$this.parent().find(".pagHighlight a:last").removeClass("active");
				$this.parent().find(".pagHighlight a:first").addClass("active").click();
			}

			$self.next().addClass("active").click().prev().removeClass("active");

			return false;
   		}else if(e.which == 37){
   			var $self = $this.parent().find(".pagHighlight .active");

			if($self.prev().length == "0"){
				$this.parent().find(".pagHighlight a:first").removeClass("active");
				$this.parent().find(".pagHighlight a:last").addClass("active").click();
			}

			$self.prev().addClass("active").click().next().removeClass("active");

			return false;
   		}
	});

}else{
	null;
}

/*=====================================================
	touch
======================================================*/
var $thisWrap = $this.parent();
if(options.touch){
    $thisWrap.each(function () {
    	var originalCoord = {
	        x: 0,
	        y: 0
	    }
	    var finalCoord = {
	        x: 0,
	        y: 0
	    }
		function touchStart(event) {
	        originalCoord.x = event.targetTouches[0].pageX
	        originalCoord.y = event.targetTouches[0].pageY
	    }

	    function touchMove(event) {
	        event.preventDefault();
	        finalCoord.x = event.targetTouches[0].pageX
	        finalCoord.y = event.targetTouches[0].pageY
	    }

	    function touchEnd(event) {
	        var changeY = originalCoord.y - finalCoord.y;
	        if (changeY < options.thresholdY && changeY > (options.thresholdY * -1)) {
	            changeX = originalCoord.x - finalCoord.x;
	            if (changeX > options.thresholdX) {
	                var $self = $this.parent().find(".pagHighlight .active");

					if($self.next().length == "0"){
						$this.parent().find(".pagHighlight a:last").removeClass("active");
						$this.parent().find(".pagHighlight a:first").addClass("active").click();
					}

					$self.next().addClass("active").click().prev().removeClass("active");

	            }
	            if (changeX < (options.thresholdX * -1)) {
	                var $self = $this.parent().find(".pagHighlight .active");

					if($self.prev().length == "0"){
						$this.parent().find(".pagHighlight a:first").removeClass("active");
						$this.parent().find(".pagHighlight a:last").addClass("active").click();
					}

					$self.prev().addClass("active").click().next().removeClass("active");
	            }
	        }
	    }

	    function touchStart(event) {
	        originalCoord.x = event.targetTouches[0].pageX
	        originalCoord.y = event.targetTouches[0].pageY
	        finalCoord.x = originalCoord.x
	        finalCoord.y = originalCoord.y
	    }

	    function touchCancel(event) {}
	    this.addEventListener("touchstart", touchStart, false);
	    this.addEventListener("touchmove", touchMove, false);
	    this.addEventListener("touchend", touchEnd, false);
	    this.addEventListener("touchcancel", touchCancel, false);
    });
	
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
				var $linkPag = $this.parent().find(".pagHighlight a");

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
					var $self = $this.parent().find(".pagHighlight .active");
					
					if($self.next().length == "0"){
						$this.parent().find(".pagHighlight a:last").removeClass("active");
						$this.parent().find(".pagHighlight a:first").addClass("active");
					}

					$self.next().addClass("active").prev().removeClass("active");

					var $selfPosition = $this.parent().find(".pagHighlight .active").data("position");

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

					$this.parent().find(".pagHighlight a").click(function(){
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
				var $linkPag = $this.parent().find(".pagHighlight a");
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
					var $self = $this.parent().find(".pagHighlight .active");

					if($self.next().length == "0"){
						$this.parent().find(".pagHighlight a:last").removeClass("active");
						$this.parent().find(".pagHighlight a:first").addClass("active");
					}

					$self.next().addClass("active").prev().removeClass("active");

					var $selfPosition = $this.parent().find(".pagHighlight .active").data("position");

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

					$this.parent().find(".pagHighlight a").click(function(){
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
			var $linkPag = $this.parent().find(".pagHighlight a");
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
				var $self = $this.parent().find(".pagHighlight .active");

				if($self.next().length == "0"){
					$this.parent().find(".pagHighlight a:last").removeClass("active");
					$this.parent().find(".pagHighlight a:first").addClass("active");
				}

				$self.next().addClass("active").prev().removeClass("active");

				var $selfPosition = $this.parent().find(".pagHighlight .active").data("position");

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

				$this.parent().find(".pagHighlight a").click(function(){
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
			var $linkPag = $this.parent().find(".pagHighlight a");

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
				var $self = $this.parent().find(".pagHighlight .active");

				if($self.next().length == "0"){
					$this.parent().find(".pagHighlight a:last").removeClass("active");
					$this.parent().find(".pagHighlight a:first").addClass("active");
				}

				$self.next().addClass("active").prev().removeClass("active");

				var $selfPosition = $this.parent().find(".pagHighlight .active").data("position");
				var $positionActive = $listCont.find("li[data-position="+ $selfPosition +"]").position();

				$listCont.find("li").stop(true,true).animate({
					left: "-="+ $positionActive.left +"px"
				},options.timeSlide);

				return false;
			}
			//auto
			if(options.auto){
				time = setInterval(animaSlide, options.timeBanner);

				$this.parent().find(".pagHighlight a").click(function(){
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
		$this.parent().find(".pagHighlight").css("display","none");
	}
}
})(jQuery);