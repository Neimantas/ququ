# ququ.js
What is ququ? First of all it is a javascript framework. After that comes the part what it actually does. This framework is made with an idea that old websites should be easily refurbished and styles for new websites 
should be used with as little hassle as possible.

# The full idea
The story behind the idea: I was working on a website for my company and since I am more of a back-end developer than a front-end, I had to choose what technologies to use. Of course I used bootstrap before, also SASS
and the like, but there was something missing. My team and I brainstormed how to face-lift our 10 year old website, which is based on old .net technologies. First thing we did was to add bootstrap css to make
it better without doing anything at all. It didn't became more good looking, one could argue that it made it worse. Since the page had many controls, to go trough all of them and to add bootstrap classes would be a 
nightmare. Also, since some parts are shown and some are not, the columns would not help us either. The first thing I said was "Let's do styles in javascript!" and then we laughed. We did parts of the project by going
through the parts and adding news styles, then making a bunch of css rules and then it hit me. Seriously, why don't we use javascript as a future platform for styling websites? The friend of mine said, that the future
of styling is in good old fashioned css, but even now there are great frameworks like SASS. I thought it would be great if we could manipulate the website by saying something like this (in javascript
 of course) "make(element, padding: 10px).hover(styles).mobile().addTrigger().addEvent()". Well, now we can! This is work in progress, but if anyone wants to help me to make styling websites cool again, please join me.

# What ququ does
This framework can be used in places where jquery can't be. 
It is a lightweight framework. 
It doesn't need any additional programs, gems, whatnot to use it. 
It helps you, the developer to make changes to the website as quickly as possible.
It can be used as a replacements for your styles.css or all css files for that matter.
If follows functional programming paradigm.

# What ququ does not
It does not have a kitchen sink full of premade items like bootstrap.
It does not have a grid system (yet).
It does not have non mobile to mobile meniu conversion (yet).

# What ququ will be in the future?
My aim is not to make a javascript clone for css frameworks, but rather to make a platform for web developers to easily write css code and do much of the heavy lifting for the developers.
Future methods will be:
~ A way to work with brakepoints (media queries)
~ Automatic mobile interface
~ Triggers (onclick, etc) and events (on hover, etc) added to specific blocks
~ Container and/or grid
~ Conditional styles (condition? this_style : other_style)
~ Added support for more browsers, in e.g. older mozilla uses textContent(now it uses innerText) while chrome uses innerText
~ Control many elements at the same time

# How to use it?
Just download (for now) javasript files and add it to your projects javascript folder. Since it DOES NOT need any dependencies, you can add in any place you want (header is good though). First file must be ququ-core.js - 
this is were the logic behind this framework lies and ququ-cs.js - is the file for your use of ququ framework (you can by all means not add second js file at all and write your javascript code in <script> tags, but 
that would not be great a practice).

# The way of the framework
There are single methods and chained methods. Simple methods are for making 1 step manipulations, in e.g. "make('body', 'color: cyan')" will make all elements in body blue-ish.
Chained methods are called by writing "qq". You can do something like this "qq.make('body', 'color: cyan').dynamic()". This way the elements in body will be blue-ish and the framework will add mobile styles for you, in e.g.
if you don't want to go and write media queries and somehow calculate the distance from other elements, this will be done for you.

# Method list
qq - call chaing methods. qq.make('body', 'color: cyan').dynamic();
make(name, styles) - add styles for some element. make('body', 'color: cyan');