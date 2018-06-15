(function ( $ ) {

/* sortlist - Sort list and flagged by header letter (jQuery plugin) | https://codepen.io/tsurule/pen/xzLdZP - here the demo
 *
 * <ul class="some-list js-sortlist">				apply to list this plugin
 *   <li class="some-list__item">Marijn Haverbeke</li>
 *   <li class="some-list__item">Eric Elliott</li>
 *   <li class="some-list__item">Nicholas C. Zakas</li>
 *   <li class="some-list__item">Kyle Simpson</li>
 *   <li class="some-list__item">Addy Osmani</li>
 *   <li class="some-list__item">Axel Rauschmayer</li>
 *   <li class="some-list__item">Richard E. Silverman</li>
 *   <li class="some-list__item">Glenn Block, et al.</li>
 * </ul>
 *
 * <script>
 *   $(function() {
 *     $('.js-sortlist').sortList();
 *   });
 * </script>
 *
 * <ul class="some-list js-sortlist">				that is what you will got after
 *   <div class="sortlist__head">A</div> - label by letter
 *   <li class="some-list__item">Addy Osmani</li>
 *   <li class="some-list__item">Axel Rauschmayer</li>
 *   <div class="sortlist__head">E</div>
 *   <li class="some-list__item">Eric Elliott</li>
 *   <div class="sortlist__head">G</div>
 *   <li class="some-list__item">Glenn Block, et al.</li>
 *   <div class="sortlist__head">K</div>
 *   <li class="some-list__item">Kyle Simpson</li>
 *   <div class="sortlist__head">M</div>
 *   <li class="some-list__item">Marijn Haverbeke</li>
 *   <div class="sortlist__head">N</div>
 *   <li class="some-list__item">Nicholas C. Zakas</li>
 *   <div class="sortlist__head">R</div>
 *   <li class="some-list__item">Richard E. Silverman</li>
 * </ul>
 * 
 * V.Tsurule
 */
	$.fn.sortList = function (options) {

	"use strict";

		this.each(function() {

			var element = $(this),
				customClass	= 'sortlist',
				sortItems = $('li', element),				
				sortedItems = sortItems.get().sort(function(a, b) {
					var aText = $.trim($(a).text().toUpperCase()),
						bText = $.trim($(b).text().toUpperCase());

					return aText.localeCompare(bText);
				}),
				settings = $.extend({
					mainClass: customClass
				}, options );
			
			element.append(sortedItems); 

			// create the titles
			var lastLetter = '';
			element.find('li').each(function() {
				var $this = $(this),
					text = $.trim($this.text()),
					firstLetter = text[0];

				if (firstLetter != lastLetter) {
					$this.before('<div class="'+settings.mainClass+'__head">' + firstLetter);
					lastLetter = firstLetter;
				}
			});

		});

		return this;
	};

}(jQuery));
