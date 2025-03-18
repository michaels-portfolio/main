
function toggleDarkMode() {
	let isDark = document.body.classList.toggle('dark-mode');
/**const element = document.querySelector(".symbol");
	element.classList.toggle("hidden");*/
}

(function($) {
	
	$(document).ready(function() {
		$(".snow1").let_it_snow({
		speed: 0,
		interaction: true,
		size: 2,
		count: 200,
		opacity: 0,
		color: "#ffffff",
		windPower: 1,
		image: false 
		});
	
		var $snow = $(".flakes").find("svg");
		$(".snow2").let_it_snow({
		speed: 0,
		interaction: true,
		size: 6,
		cunt: 50,
		opacity: 0,
		color: "#ffffff",
		windPower: 0,
		image: "https://3.bp.blogspot.com/-LWSCSuSZ9qw/VLkSYiICCUI/AAAAAAADaAs/Exw-xb0znkg/s1600/hf_shimmer_flake20.png"
		});
		});
		
		// let it snow plugin from https://github.com/peachananr/let_it_snow
		!function(e){var t={speed:0,interaction:true,size:2,count:200,opacity:0,color:"#ffffff",windPower:0,image:false};e.fn.let_it_snow=function(n){function c(){u.clearRect(0,0,o.width,o.height);for(var t=0;t<a;t++){var n=s[t],i=f,p=l,d=100,v=n.x,m=n.y;var g=Math.sqrt((v-i)*(v-i)+(m-p)*(m-p)),y=v-i,b=m-p;if(g<d){var w=d/(g*g),E=(i-v)/g,S=(p-m)/g,x=w/2;n.velX-=x*E;n.velY-=x*S}else{n.velX*=.98;if(n.velY<=n.speed){n.velY=n.speed}switch(r.windPower){case false:n.velX+=Math.cos(n.step+=.05)*n.stepSize;break;case 0:n.velX+=Math.cos(n.step+=.05)*n.stepSize;break;default:n.velX+=.01+r.windPower/100}}var T=r.color;var N=/^#([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})$/;var C=N.exec(T);var k=parseInt(C[1],16)+","+parseInt(C[2],16)+","+parseInt(C[3],16);n.y+=n.velY;n.x+=n.velX;if(n.y>=o.height||n.y<=0){h(n)}if(n.x>=o.width||n.x<=0){h(n)}if(r.image==false){u.fillStyle="rgba("+k+","+n.opacity+")";u.beginPath();u.arc(n.x,n.y,n.size,0,Math.PI*2);u.fill()}else{u.drawImage(e("img#lis_flake").get(0),n.x,n.y,n.size*2,n.size*2)}}requestAnimationFrame(c)}function h(e){if(r.windPower==false||r.windPower==0){e.x=Math.floor(Math.random()*o.width);e.y=0}else{if(r.windPower>0){var t=Array(Math.floor(Math.random()*o.width),0);var n=Array(0,Math.floor(Math.random()*o.height));var i=Array(t,n);var s=i[Math.floor(Math.random()*i.length)];e.x=s[0];e.y=s[1]}else{var t=Array(Math.floor(Math.random()*o.width),0);var n=Array(o.width,Math.floor(Math.random()*o.height));var i=Array(t,n);var s=i[Math.floor(Math.random()*i.length)];e.x=s[0];e.y=s[1]}}e.size=Math.random()*3+r.size;e.speed=Math.random()*1+r.speed;e.velY=e.speed;e.velX=0;e.opacity=Math.random()*.5+r.opacity}function p(){for(var e=0;e<a;e++){var t=Math.floor(Math.random()*o.width),n=Math.floor(Math.random()*o.height),i=Math.random()*3+r.size,u=Math.random()*1+r.speed,f=Math.random()*.5+r.opacity;s.push({speed:u,velY:u,velX:0,x:t,y:n,size:i,stepSize:Math.random()/30,step:0,angle:180,opacity:f})}c()}var r=e.extend({},t,n),i=e(this),s=[],o=i.get(0),u=o.getContext("2d"),a=r.count,f=-100,l=-100;o.width=window.innerWidth;o.height=window.innerHeight;(function(){var e=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)};window.requestAnimationFrame=e})();if(r.image!=false){e("<img src='"+r.image+"' style='display: none' id='lis_flake'>").prependTo("body")}p();e(window).resize(function(){if(this.resizeTO)clearTimeout(this.resizeTO);this.resizeTO=setTimeout(function(){el2=i.clone();el2.insertAfter(i);i.remove();el2.let_it_snow(r)},200)});if(r.interaction==true){o.addEventListener("mousemove",function(e){f=e.clientX,l=e.clientY})}}}(window.jQuery)
	

	/**
	 * Generate an indented list of links from a nav. Meant for use with panel().
	 * @return {jQuery} jQuery object.
	 */
	$.fn.navList = function() {

		var	$this = $(this);
			$a = $this.find('a'),
			b = [];

		$a.each(function() {

			var	$this = $(this),
				indent = Math.max(0, $this.parents('li').length - 1),
				href = $this.attr('href'),
				target = $this.attr('target');

			b.push(
				'<a ' +
					'class="link depth-' + indent + '"' +
					( (typeof target !== 'undefined' && target != '') ? ' target="' + target + '"' : '') +
					( (typeof href !== 'undefined' && href != '') ? ' href="' + href + '"' : '') +
				'>' +
					'<span class="indent-' + indent + '"></span>' +
					$this.text() +
				'</a>'
			);

		});

		return b.join('');

	};

	$('a[href^="#"]').click(function (event) {
		event.preventDefault(); // Prevent default link behavior
	
		let target = $('[name="' + $.attr(this, 'href').substr(1) + '"]');
		
		if (target.length) {
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 500);
		}
	});
	
	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
		anchor.addEventListener('click', function (e) {
			e.preventDefault();
	
			document.querySelector(this.getAttribute('href')).scrollIntoView({
				behavior: 'smooth'
			});
		});
	});

	/**
	 * Panel-ify an element.
	 * @param {object} userConfig User config.
	 * @return {jQuery} jQuery object.
	 */
	$.fn.panel = function(userConfig) {

		// No elements?
			if (this.length == 0)
				return $this;

		// Multiple elements?
			if (this.length > 1) {

				for (var i=0; i < this.length; i++)
					$(this[i]).panel(userConfig);

				return $this;

			}

		// Vars.
			var	$this = $(this),
				$body = $('body'),
				$window = $(window),
				id = $this.attr('id'),
				config;

		// Config.
			config = $.extend({

				// Delay.
					delay: 0,

				// Hide panel on link click.
					hideOnClick: false,

				// Hide panel on escape keypress.
					hideOnEscape: false,

				// Hide panel on swipe.
					hideOnSwipe: false,

				// Reset scroll position on hide.
					resetScroll: false,

				// Reset forms on hide.
					resetForms: false,

				// Side of viewport the panel will appear.
					side: null,

				// Target element for "class".
					target: $this,

				// Class to toggle.
					visibleClass: 'visible'

			}, userConfig);

			// Expand "target" if it's not a jQuery object already.
				if (typeof config.target != 'jQuery')
					config.target = $(config.target);

		// Panel.

			// Methods.
				$this._hide = function(event) {

					// Already hidden? Bail.
						if (!config.target.hasClass(config.visibleClass))
							return;

					// If an event was provided, cancel it.
						if (event) {

							event.preventDefault();
							event.stopPropagation();

						}

					// Hide.
						config.target.removeClass(config.visibleClass);

					// Post-hide stuff.
						window.setTimeout(function() {

							// Reset scroll position.
								if (config.resetScroll)
									$this.scrollTop(0);

							// Reset forms.
								if (config.resetForms)
									$this.find('form').each(function() {
										this.reset();
									});

						}, config.delay);

				};
	

			// Vendor fixes.
				$this
					.css('-ms-overflow-style', '-ms-autohiding-scrollbar')
					.css('-webkit-overflow-scrolling', 'touch');

			// Hide on click.
				if (config.hideOnClick) {

					$this.find('a')
						.css('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');

					$this
						.on('click', 'a', function(event) {

							var $a = $(this),
								href = $a.attr('href'),
								target = $a.attr('target');

							if (!href || href == '#' || href == '' || href == '#' + id)
								return;

							// Cancel original event.
								event.preventDefault();
								event.stopPropagation();

							// Hide panel.
								$this._hide();

							// Redirect to href.
								window.setTimeout(function() {

									if (target == '_blank')
										window.open(href);
									else
										window.location.href = href;

								}, config.delay + 10);

						});

				}

			// Event: Touch stuff.
				$this.on('touchstart', function(event) {

					$this.touchPosX = event.originalEvent.touches[0].pageX;
					$this.touchPosY = event.originalEvent.touches[0].pageY;

				})

				$this.on('touchmove', function(event) {

					if ($this.touchPosX === null
					||	$this.touchPosY === null)
						return;

					var	diffX = $this.touchPosX - event.originalEvent.touches[0].pageX,
						diffY = $this.touchPosY - event.originalEvent.touches[0].pageY,
						th = $this.outerHeight(),
						ts = ($this.get(0).scrollHeight - $this.scrollTop());

					// Hide on swipe?
						if (config.hideOnSwipe) {

							var result = false,
								boundary = 20,
								delta = 50;

							switch (config.side) {

								case 'left':
									result = (diffY < boundary && diffY > (-1 * boundary)) && (diffX > delta);
									break;

								case 'right':
									result = (diffY < boundary && diffY > (-1 * boundary)) && (diffX < (-1 * delta));
									break;

								case 'top':
									result = (diffX < boundary && diffX > (-1 * boundary)) && (diffY > delta);
									break;

								case 'bottom':
									result = (diffX < boundary && diffX > (-1 * boundary)) && (diffY < (-1 * delta));
									break;

								default:
									break;

							}

							if (result) {

								$this.touchPosX = null;
								$this.touchPosY = null;
								$this._hide();

								return false;

							}

						}

					// Prevent vertical scrolling past the top or bottom.
						if (($this.scrollTop() < 0 && diffY < 0)
						|| (ts > (th - 2) && ts < (th + 2) && diffY > 0)) {

							event.preventDefault();
							event.stopPropagation();

						}

				});

			// Event: Prevent certain events inside the panel from bubbling.
				$this.on('click touchend touchstart touchmove', function(event) {
					event.stopPropagation();
				});

			// Event: Hide panel if a child anchor tag pointing to its ID is clicked.
				$this.on('click', 'a[href="#' + id + '"]', function(event) {

					event.preventDefault();
					event.stopPropagation();

					config.target.removeClass(config.visibleClass);

				});

		// Body.

			// Event: Hide panel on body click/tap.
				$body.on('click touchend', function(event) {
					$this._hide(event);
				});

			// Event: Toggle.
				$body.on('click', 'a[href="#' + id + '"]', function(event) {

					event.preventDefault();
					event.stopPropagation();

					config.target.toggleClass(config.visibleClass);

				});

		// Window.

			// Event: Hide on ESC.
				if (config.hideOnEscape)
					$window.on('keydown', function(event) {

						if (event.keyCode == 27)
							$this._hide(event);

					});

		return $this;

	};

	/**
	 * Apply "placeholder" attribute polyfill to one or more forms.
	 * @return {jQuery} jQuery object.
	 */
	$.fn.placeholder = function() {

		// Browser natively supports placeholders? Bail.
			if (typeof (document.createElement('input')).placeholder != 'undefined')
				return $(this);

		// No elements?
			if (this.length == 0)
				return $this;

		// Multiple elements?
			if (this.length > 1) {

				for (var i=0; i < this.length; i++)
					$(this[i]).placeholder();

				return $this;

			}

		// Vars.
			var $this = $(this);

		// Text, TextArea.
			$this.find('input[type=text],textarea')
				.each(function() {

					var i = $(this);

					if (i.val() == ''
					||  i.val() == i.attr('placeholder'))
						i
							.addClass('polyfill-placeholder')
							.val(i.attr('placeholder'));

				})
				.on('blur', function() {

					var i = $(this);

					if (i.attr('name').match(/-polyfill-field$/))
						return;

					if (i.val() == '')
						i
							.addClass('polyfill-placeholder')
							.val(i.attr('placeholder'));

				})
				.on('focus', function() {

					var i = $(this);

					if (i.attr('name').match(/-polyfill-field$/))
						return;

					if (i.val() == i.attr('placeholder'))
						i
							.removeClass('polyfill-placeholder')
							.val('');

				});

		// Password.
			$this.find('input[type=password]')
				.each(function() {

					var i = $(this);
					var x = $(
								$('<div>')
									.append(i.clone())
									.remove()
									.html()
									.replace(/type="password"/i, 'type="text"')
									.replace(/type=password/i, 'type=text')
					);

					if (i.attr('id') != '')
						x.attr('id', i.attr('id') + '-polyfill-field');

					if (i.attr('name') != '')
						x.attr('name', i.attr('name') + '-polyfill-field');

					x.addClass('polyfill-placeholder')
						.val(x.attr('placeholder')).insertAfter(i);

					if (i.val() == '')
						i.hide();
					else
						x.hide();

					i
						.on('blur', function(event) {

							event.preventDefault();

							var x = i.parent().find('input[name=' + i.attr('name') + '-polyfill-field]');

							if (i.val() == '') {

								i.hide();
								x.show();

							}

						});

					x
						.on('focus', function(event) {

							event.preventDefault();

							var i = x.parent().find('input[name=' + x.attr('name').replace('-polyfill-field', '') + ']');

							x.hide();

							i
								.show()
								.focus();

						})
						.on('keypress', function(event) {

							event.preventDefault();
							x.val('');

						});

				});

		// Events.
			$this
				.on('submit', function() {

					$this.find('input[type=text],input[type=password],textarea')
						.each(function(event) {

							var i = $(this);

							if (i.attr('name').match(/-polyfill-field$/))
								i.attr('name', '');

							if (i.val() == i.attr('placeholder')) {

								i.removeClass('polyfill-placeholder');
								i.val('');

							}

						});

				})
				.on('reset', function(event) {

					event.preventDefault();

					$this.find('select')
						.val($('option:first').val());

					$this.find('input,textarea')
						.each(function() {

							var i = $(this),
								x;

							i.removeClass('polyfill-placeholder');

							switch (this.type) {

								case 'submit':
								case 'reset':
									break;

								case 'password':
									i.val(i.attr('defaultValue'));

									x = i.parent().find('input[name=' + i.attr('name') + '-polyfill-field]');

									if (i.val() == '') {
										i.hide();
										x.show();
									}
									else {
										i.show();
										x.hide();
									}

									break;

								case 'checkbox':
								case 'radio':
									i.attr('checked', i.attr('defaultValue'));
									break;

								case 'text':
								case 'textarea':
									i.val(i.attr('defaultValue'));

									if (i.val() == '') {
										i.addClass('polyfill-placeholder');
										i.val(i.attr('placeholder'));
									}

									break;

								default:
									i.val(i.attr('defaultValue'));
									break;

							}
						});

				});

		return $this;

	};

	/**
	 * Moves elements to/from the first positions of their respective parents.
	 * @param {jQuery} $elements Elements (or selector) to move.
	 * @param {bool} condition If true, moves elements to the top. Otherwise, moves elements back to their original locations.
	 */
	$.prioritize = function($elements, condition) {

		var key = '__prioritize';

		// Expand $elements if it's not already a jQuery object.
			if (typeof $elements != 'jQuery')
				$elements = $($elements);

		// Step through elements.
			$elements.each(function() {

				var	$e = $(this), $p,
					$parent = $e.parent();

				// No parent? Bail.
					if ($parent.length == 0)
						return;

				// Not moved? Move it.
					if (!$e.data(key)) {

						// Condition is false? Bail.
							if (!condition)
								return;

						// Get placeholder (which will serve as our point of reference for when this element needs to move back).
							$p = $e.prev();

							// Couldn't find anything? Means this element's already at the top, so bail.
								if ($p.length == 0)
									return;

						// Move element to top of parent.
							$e.prependTo($parent);

						// Mark element as moved.
							$e.data(key, $p);

					}

				// Moved already?
					else {

						// Condition is true? Bail.
							if (condition)
								return;

						$p = $e.data(key);

						// Move element back to its original location (using our placeholder).
							$e.insertAfter($p);

						// Unmark element as moved.
							$e.removeData(key);

					}

			});

	};

})(jQuery);