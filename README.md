jquery.sortlist
==============

What is this?
-------------
`.sortlist()` sortlist.js is a small jQuery plugin to sort list by alphabetical order and flagged each start letter with header/tag letter. [view a demo][1] on [codepen.io][1].

[1]: https://codepen.io/tsurule/pen/xzLdZP


How do I use it?
----------------

HTML structure:
```html
<ul class="some-list js-sortlist">
  <li class="some-list__item">Marijn Haverbeke</li>
  <li class="some-list__item">Eric Elliott</li>
  <li class="some-list__item">Nicholas C. Zakas</li>
  <li class="some-list__item">Kyle Simpson</li>
  <li class="some-list__item">Addy Osmani</li>
  <li class="some-list__item">Axel Rauschmayer</li>
  <li class="some-list__item">Richard E. Silverman</li>
  <li class="some-list__item">Glenn Block, et al.</li>
</ul>
```
And then apply the plugin to your list:

	$('.js-sortlist').sortList();

Nothing more, then you will get modifying HTML structure: 

```html
<ul class="some-list js-sortlist">
  <div class="sortlist__head">A</div>
  <li class="some-list__item">Addy Osmani</li>
  <li class="some-list__item">Axel Rauschmayer</li>
  <div class="sortlist__head">E</div>
  <li class="some-list__item">Eric Elliott</li>
  <div class="sortlist__head">G</div>
  <li class="some-list__item">Glenn Block, et al.</li>
  <div class="sortlist__head">K</div>
  <li class="some-list__item">Kyle Simpson</li>
  <div class="sortlist__head">M</div>
  <li class="some-list__item">Marijn Haverbeke</li>
  <div class="sortlist__head">N</div>
  <li class="some-list__item">Nicholas C. Zakas</li>
  <div class="sortlist__head">R</div>
  <li class="some-list__item">Richard E. Silverman</li>
</ul>
```

Additional configuration is class modification for flagged head:

	$('.js-sortlist').sortList({
	  classMain: 'some-list',
	  classModificator: '__flag'
	});

It will looks like:

```html
<ul class="some-list js-sortlist">
  <div class="some-list__flag">A</div> <!-- it will help to follow your structure and css methodologies -->
  <li class="some-list__item">Addy Osmani</li>
  <li class="some-list__item">Axel Rauschmayer</li>
  	...
</ul>
```
