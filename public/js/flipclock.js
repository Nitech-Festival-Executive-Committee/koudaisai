var Base = function(){
	// dummy
};

Base.extend = function(_instance, _static){
	"use strict";
	var extend = Base.prototype.extend;
	Base._prototyping = true;
	var proto = new this();
	extend.call(proto, _instance);
	proto.base = function(){
	// call this method from any other method to invoke that method's ancestor
	};

	delete Base._prototyping;
	var constructor = proto.constructor;
	var klass = proto.constructor = function(){
		if (!Base._prototyping){
			if (this._constructing || this.constructor == klass){
				this._constructing = true;
				constructor.apply(this, arguments);
				delete this._constructing;
			} else if (arguments[0] !== null){ // casting
				return (arguments[0].extend || extend).call(arguments[0], proto);
			}
		}
	};
	klass.ancestor = this;
	klass.extend = this.extend;
	klass.forEach = this.forEach;
	klass.implement = this.implement;
	klass.prototype = proto;
	klass.toString = this.toString;
	klass.valueOf = function(type){
		return (type == "object") ? klass : constructor.valueOf();
	};
	extend.call(klass, _static);
	if (typeof klass.init == "function") klass.init();
	return klass;
};

Base.prototype = {	
	extend: function(source, value){
		if (arguments.length > 1){
			var ancestor = this[source];
			if (ancestor && (typeof value == "function") && (!ancestor.valueOf || ancestor.valueOf() != value.valueOf()) && /\bbase\b/.test(value)){
				var method = value.valueOf();
				value = function(){
					var previous = this.base || Base.prototype.base;
					this.base = ancestor;
					var returnValue = method.apply(this, arguments);
					this.base = previous;
					return returnValue;
				};
				value.valueOf = function(type){
					return (type == "object") ? value : method;
				};
				value.toString = Base.toString;
			}
			this[source] = value;
		} else if (source){
			var extend = Base.prototype.extend;
			if (!Base._prototyping && typeof this != "function"){
				extend = this.extend || extend;
			}
			var proto = {toSource: null};
			var hidden = ["constructor", "toString", "valueOf"];
			var i = Base._prototyping ? 0 : 1;
			while (key = hidden[i++]){
				if (source[key] != proto[key]){
					extend.call(this, key, source[key]);

				}
			}
			for (var key in source){
				if (!proto[key]) extend.call(this, key, source[key]);
			}
		}
		return this;
	}
};

Base = Base.extend({
	constructor: function(){
		this.extend(arguments[0]);
	}
}, {
	ancestor: Object,
	version: "1.1",
	
	forEach: function(object, block, context){
		for (var key in object){
			if (this.prototype[key] === undefined){
				block.call(context, object[key], key, object);
			}
		}
	},
		
	implement: function(){
		for (var i = 0; i < arguments.length; i++){
			if (typeof arguments[i] == "function"){
				// if it's a function, call it
				arguments[i](this.prototype);
			} else {
				// add the interface using the extend method
				this.prototype.extend(arguments[i]);
			}
		}
		return this;
	},
	
	toString: function(){
		return String(this.valueOf());
	}
});

var FlipClock;
	
/**
 * FlipClock.js
 *
 * @author     Justin Kimbrell
 * @copyright  2013 - Objective HTML, LLC
 * @licesnse   http://www.opensource.org/licenses/mit-license.php
 */
	
(function($){
	"use strict";
	FlipClock = function(obj, digit, options){
		if(digit instanceof Object && digit instanceof Date === false){
			options = digit;
			digit = 0;
		}

		return new FlipClock.Factory(obj, digit, options);
	};
	FlipClock.Lang = {};
	FlipClock.Base = Base.extend({
		buildDate: '2014-12-12',
		version: '0.7.7',
		constructor: function(_default, options){
			if(typeof _default !== "object"){
				_default = {};
			}
			if(typeof options !== "object"){
				options = {};
			}
			this.setOptions($.extend(true, {}, _default, options));
		},
		callback: function(method){
			if(typeof method === "function"){
				var args = [];
								
				for(var x = 1; x <= arguments.length; x++){
					if(arguments[x]){
						args.push(arguments[x]);
					}
				}
				
				method.apply(this, args);
			}
		},
		log: function(str){
			if(window.console && console.log){
				console.log(str);
			}
		},
		getOption: function(index){
			if(this[index]){
				return this[index];
			}
			return false;
		},
		getOptions: function(){
			return this;
		},
		setOption: function(index, value){
			this[index] = value;
		},
		setOptions: function(options){
			for(var key in options){
				if(typeof options[key] !== "undefined"){
					this.setOption(key, options[key]);
				}
			}
		}
		
	});
	
}(jQuery));

/**
 * FlipClock.js
 *
 * @author     Justin Kimbrell
 * @copyright  2013 - Objective HTML, LLC
 * @licesnse   http://www.opensource.org/licenses/mit-license.php
 */
	
(function($){
	"use strict";
	FlipClock.Face = FlipClock.Base.extend({
		autoStart: true,
		dividers: [],
		factory: false,
		lists: [],
		constructor: function(factory, options){
			this.dividers = [];
			this.lists = [];
			this.base(options);
			this.factory = factory;
		},
		build: function(){
			if(this.autoStart){
				this.start();
			}
		},
		createDivider: function(label, css, excludeDots){
			if(typeof css == "boolean" || !css){
				excludeDots = css;
				css = label;
			}

			var dots = [
				'<span class="'+this.factory.classes.dot+' top"></span>',
				'<span class="'+this.factory.classes.dot+' bottom"></span>'
			].join('');

			if(excludeDots){
				dots = '';	
			}

			label = this.factory.localize(label);

			var html = [
				'<span class="'+this.factory.classes.divider+' '+(css ? css : '').toLowerCase()+'">',
					'<span class="'+this.factory.classes.label+'">'+(label ? label : '')+'</span>',
					dots,
				'</span>'
			];	
			
			var $html = $(html.join(''));

			this.dividers.push($html);

			return $html;
		},
		createList: function(digit, options){
			if(typeof digit === "object"){
				options = digit;
				digit = 0;
			}

			var obj = new FlipClock.List(this.factory, digit, options);
		
			this.lists.push(obj);

			return obj;
		},
		reset: function(){
			this.factory.time = new FlipClock.Time(
				this.factory, 
				this.factory.original ? Math.round(this.factory.original) : 0,
				{
					minimumDigits: this.factory.minimumDigits
				}
			);

			this.flip(this.factory.original, false);
		},
		appendDigitToClock: function(obj){
			obj.$el.append(false);
		},
		addDigit: function(digit){
			var obj = this.createList(digit, {
				classes: {
					active: this.factory.classes.active,
					before: this.factory.classes.before,
					flip: this.factory.classes.flip
				}
			});

			this.appendDigitToClock(obj);
		},
		start: function(){},
		stop: function(){},
		autoIncrement: function(){
			if(!this.factory.countdown){
				this.increment();
			}
			else {
				this.decrement();
			}
		},
		increment: function(){
			this.factory.time.addSecond();
		},
		decrement: function(){
			if(this.factory.time.getTimeSeconds() == 0){
				this.factory.stop()
			}
			else {
				this.factory.time.subSecond();
			}
		},
		flip: function(time, doNotAddPlayClass){
			var t = this;

			$.each(time, function(i, digit){
				var list = t.lists[i];

				if(list){
					if(!doNotAddPlayClass && digit != list.digit){
						list.play();	
					}

					list.select(digit);
				}	
				else {
					t.addDigit(digit);
				}
			});
		}
					
	});
	
}(jQuery));

/**
 * FlipClock.js
 *
 * @author     Justin Kimbrell
 * @copyright  2013 - Objective HTML, LLC
 * @licesnse   http://www.opensource.org/licenses/mit-license.php
 */
	
(function($){
	"use strict";
	FlipClock.Factory = FlipClock.Base.extend({
		animationRate: 1000,
		autoStart: true,
		callbacks: {
			destroy: false,
			create: false,
			init: false,
			interval: false,
			start: false,
			stop: false,
			reset: false
		},
		classes: {
			active: 'flip-clock-active',
			before: 'flip-clock-before',
			divider: 'flip-clock-divider',
			dot: 'flip-clock-dot',
			label: 'flip-clock-label',
			flip: 'flip',
			play: 'play',
			wrapper: 'flip-clock-wrapper'
		},
		clockFace: 'HourlyCounter',
		countdown: false,
		defaultClockFace: 'HourlyCounter',
		defaultLanguage: 'english',
		$el: false,
		face: true,
		lang: false,
		language: 'english',
		minimumDigits: 0,
		original: false,
		running: false,
		time: false,
		timer: false,
		$wrapper: false,
		constructor: function(obj, digit, options){

			if(!options){
				options = {};
			}

			this.lists = [];
			this.running = false;
			this.base(options);	

			this.$el = $(obj).addClass(this.classes.wrapper);

			this.$wrapper = this.$el;

			this.original = (digit instanceof Date) ? digit : (digit ? Math.round(digit) : 0);

			this.time = new FlipClock.Time(this, this.original, {
				minimumDigits: this.minimumDigits,
				animationRate: this.animationRate 
			});

			this.timer = new FlipClock.Timer(this, options);

			this.loadLanguage(this.language);
			
			this.loadClockFace(this.clockFace, options);

			if(this.autoStart){
				this.start();
			}

		},
		loadClockFace: function(name, options){	
			var face, suffix = 'Face', hasStopped = false;
			
			name = name.ucfirst()+suffix;

			if(this.face.stop){
				this.stop();
				hasStopped = true;
			}

			this.$el.html('');

			this.time.minimumDigits = this.minimumDigits;
			
			if(FlipClock[name]){
				face = new FlipClock[name](this, options);
			}
			else {
				face = new FlipClock[this.defaultClockFace+suffix](this, options);
			}
			
			face.build();

			this.face = face

			if(hasStopped){
				this.start();
			}
			
			return this.face;
		},
		loadLanguage: function(name){	
			var lang;
			
			if(FlipClock.Lang[name.ucfirst()]){
				lang = FlipClock.Lang[name.ucfirst()];
			}
			else if(FlipClock.Lang[name]){
				lang = FlipClock.Lang[name];
			}
			else {
				lang = FlipClock.Lang[this.defaultLanguage];
			}
			
			return this.lang = lang;
		},
		localize: function(index, obj){
			var lang = this.lang;

			if(!index){
				return null;
			}

			var lindex = index.toLowerCase();

			if(typeof obj == "object"){
				lang = obj;
			}

			if(lang && lang[lindex]){
				return lang[lindex];
			}

			return index;
		},
		start: function(callback){
			var t = this;

			if(!t.running && (!t.countdown || t.countdown && t.time.time > 0)){
				t.face.start(t.time);
				t.timer.start(function(){
					t.flip();
					
					if(typeof callback === "function"){
						callback();
					}	
				});
			}
			else {
				t.log('Trying to start timer when countdown already at 0');
			}
		},
		stop: function(callback){
			this.face.stop();
			this.timer.stop(callback);
			
			for(var x in this.lists){
				if (this.lists.hasOwnProperty(x)){
					this.lists[x].stop();
				}
			}	
		},
		reset: function(callback){
			this.timer.reset(callback);
			this.face.reset();
		},
		setTime: function(time){
			this.time.time = time;
			this.flip(true);		
		},
		getTime: function(time){
			return this.time;		
		},
		setCountdown: function(value){
			var running = this.running;
			
			this.countdown = value ? true : false;
				
			if(running){
				this.stop();
				this.start();
			}
		},
		flip: function(doNotAddPlayClass){	
			this.face.flip(false, doNotAddPlayClass);
		}
		
	});
		
}(jQuery));

/**
 * FlipClock.js
 *
 * @author     Justin Kimbrell
 * @copyright  2013 - Objective HTML, LLC
 * @licesnse   http://www.opensource.org/licenses/mit-license.php
 */
	
(function($){
	"use strict";
	FlipClock.List = FlipClock.Base.extend({
		digit: 0,
		classes: {
			active: 'flip-clock-active',
			before: 'flip-clock-before',
			flip: 'flip'
		},
		$el: false,
		$obj: false,
		items: [],
		lastDigit: 0,
		constructor: function(factory, digit, options){
			this.factory = factory;
			this.digit = digit;
			this.lastDigit = digit;
			this.$el = this.createList();
			this.$obj = this.$el;

			if(digit > 0){
				this.select(digit);
			}

			this.factory.$el.append(this.$el);
		},
		select: function(digit){
			if(typeof digit === "undefined"){
				digit = this.digit;
			}
			else {
				this.digit = digit;
			}

			if(this.digit != this.lastDigit){
				var $delete = this.$el.find('.'+this.classes.before).removeClass(this.classes.before);

				this.$el.find('.'+this.classes.active).removeClass(this.classes.active).addClass(this.classes.before);

				this.appendListItem(this.classes.active, this.digit);

				$delete.remove();

				this.lastDigit = this.digit;
			}	
		},
		play: function(){
			this.$el.addClass(this.factory.classes.play);
		},
		stop: function(){
			var t = this;

			setTimeout(function(){
				t.$el.removeClass(t.factory.classes.play);
			}, this.factory.timer.interval);
		},
		createListItem: function(css, value){
			return [
				'<li class="'+(css ? css : '')+'">',
					'<a href="#">',
						'<div class="up">',
							'<div class="shadow"></div>',
							'<div class="inn">'+(value ? value : '')+'</div>',
						'</div>',
						'<div class="down">',
							'<div class="shadow"></div>',
							'<div class="inn">'+(value ? value : '')+'</div>',
						'</div>',
					'</a>',
				'</li>'
			].join('');
		},
		appendListItem: function(css, value){
			var html = this.createListItem(css, value);

			this.$el.append(html);
		},
		createList: function(){

			var lastDigit = this.getPrevDigit() ? this.getPrevDigit() : this.digit;

			var html = $([
				'<ul class="'+this.classes.flip+' '+(this.factory.running ? this.factory.classes.play : '')+'">',
					this.createListItem(this.classes.before, lastDigit),
					this.createListItem(this.classes.active, this.digit),
				'</ul>'
			].join(''));
					
			return html;
		},

		getNextDigit: function(){
			return this.digit == 9 ? 0 : this.digit + 1;
		},

		getPrevDigit: function(){
			return this.digit == 0 ? 9 : this.digit - 1;
		}

	});
	
	
}(jQuery));

/**
 * FlipClock.js
 *
 * @author     Justin Kimbrell
 * @copyright  2013 - Objective HTML, LLC
 * @licesnse   http://www.opensource.org/licenses/mit-license.php
 */
	
(function($){
	String.prototype.ucfirst = function(){
		return this.substr(0, 1).toUpperCase() + this.substr(1);
	};
	$.fn.FlipClock = function(digit, options){	
		return new FlipClock($(this), digit, options);
	};
	$.fn.flipClock = function(digit, options){
		return $.fn.FlipClock(digit, options);
	};
}(jQuery));
(function($){
	"use strict";
	FlipClock.Time = FlipClock.Base.extend({
		time: 0,
		factory: false,
		minimumDigits: 0,
		constructor: function(factory, time, options){
			if(typeof options != "object"){
				options = {};
			}

			if(!options.minimumDigits){
				options.minimumDigits = factory.minimumDigits;
			}

			this.base(options);
			this.factory = factory;

			if(time){
				this.time = time;
			}
		},
		convertDigitsToArray: function(str){
			var data = [];
			
			str = str.toString();
			
			for(var x = 0;x < str.length; x++){
				if(str[x].match(/^\d*$/g)){
					data.push(str[x]);	
				}
			}
			
			return data;
		},
		digit: function(i){
			var timeStr = this.toString();
			var length  = timeStr.length;
			
			if(timeStr[length - i])	 {
				return timeStr[length - i];
			}
			
			return false;
		},
		digitize: function(obj){
			var data = [];

			$.each(obj, function(i, value){
				value = value.toString();
				
				if(value.length == 1){
					value = '0'+value;
				}
				
				for(var x = 0; x < value.length; x++){
					data.push(value.charAt(x));
				}				
			});

			if(data.length > this.minimumDigits){
				this.minimumDigits = data.length;
			}
			
			if(this.minimumDigits > data.length){
				for(var x = data.length; x < this.minimumDigits; x++){
					data.unshift('0');
				}
			}

			return data;
		},
		getDateObject: function(){
			if(this.time instanceof Date){
				return this.time;
			}

			return new Date((new Date()).getTime() + this.getTimeSeconds() * 1000);
		},
		getDayCounter: function(includeSeconds){
			var digits = [
				this.getDays(),
				this.getHours(true),
				this.getMinutes(true)
			];

			if(includeSeconds){
				digits.push(this.getSeconds(true));
			}

			return this.digitize(digits);
		},
		getDays: function(mod){
			var days = this.getTimeSeconds() / 60 / 60 / 24;
			
			if(mod){
				days = days % 7;
			}
			
			return Math.floor(days);
		},
		getHourCounter: function(){
			var obj = this.digitize([
				this.getHours(),
				this.getMinutes(true),
				this.getSeconds(true)
			]);
			
			return obj;
		},
		getHourly: function(){
			return this.getHourCounter();
		},
		getHours: function(mod){
			var hours = this.getTimeSeconds() / 60 / 60;
			
			if(mod){
				hours = hours % 24;	
			}
			
			return Math.floor(hours);
		},
		getMilitaryTime: function(date, showSeconds){
			if(typeof showSeconds === "undefined"){
				showSeconds = true;
			}

			if(!date){
				date = this.getDateObject();
			}

			var data  = [
				date.getHours(),
				date.getMinutes()			
			];

			if(showSeconds === true){
				data.push(date.getSeconds());
			}

			return this.digitize(data);
		},
		getMinutes: function(mod){
			var minutes = this.getTimeSeconds() / 60;
			
			if(mod){
				minutes = minutes % 60;
			}
			
			return Math.floor(minutes);
		},
		getMinuteCounter: function(){
			var obj = this.digitize([
				this.getMinutes(),
				this.getSeconds(true)
			]);

			return obj;
		},

		getTimeSeconds: function(date){
			if(!date){
				date = new Date();
			}

			if (this.time instanceof Date){
				if (this.factory.countdown){
					return Math.max(this.time.getTime()/1000 - date.getTime()/1000,0);
				} else {
					return date.getTime()/1000 - this.time.getTime()/1000 ;
				}
			} else {
				return this.time;
			}
		},
		getTime: function(date, showSeconds){
			if(typeof showSeconds === "undefined"){
				showSeconds = true;
			}

			if(!date){
				date = this.getDateObject();
			}

			console.log(date);

			
			var hours = date.getHours();
			var merid = hours > 12 ? 'PM' : 'AM';
			var data   = [
				hours > 12 ? hours - 12 : (hours === 0 ? 12 : hours),
				date.getMinutes()			
			];

			if(showSeconds === true){
				data.push(date.getSeconds());
			}

			return this.digitize(data);
		},
		getSeconds: function(mod){
			var seconds = this.getTimeSeconds();
			
			if(mod){
				if(seconds == 60){
					seconds = 0;
				}
				else {
					seconds = seconds % 60;
				}
			}
			
			return Math.ceil(seconds);
		},
		getWeeks: function(mod){
			var weeks = this.getTimeSeconds() / 60 / 60 / 24 / 7;
			
			if(mod){
				weeks = weeks % 52;
			}
			
			return Math.floor(weeks);
		},
		removeLeadingZeros: function(totalDigits, digits){
			var total    = 0;
			var newArray = [];
			
			$.each(digits, function(i, digit){
				if(i < totalDigits){
					total += parseInt(digits[i], 10);
				}
				else {
					newArray.push(digits[i]);
				}
			});
			
			if(total === 0){
				return newArray;
			}
			
			return digits;
		},
		addSeconds: function(x){
			if(this.time instanceof Date){
				this.time.setSeconds(this.time.getSeconds() + x);
			}
			else {
				this.time += x;
			}
		},
		addSecond: function(){
			this.addSeconds(1);
		},
		subSeconds: function(x){
			if(this.time instanceof Date){
				this.time.setSeconds(this.time.getSeconds() - x);
			}
			else {
				this.time -= x;
			}
		},
		subSecond: function(){
			this.subSeconds(1);
		},
		toString: function(){
			return this.getTimeSeconds().toString();
		}
	});

}(jQuery));
(function($){
	"use strict";
	FlipClock.Timer = FlipClock.Base.extend({
		callbacks: {
			destroy: false,
			create: false,
			init: false,
			interval: false,
			start: false,
			stop: false,
			reset: false
		},
		count: 0,
		factory: false,
		interval: 1000,
		animationRate: 1000,
		constructor: function(factory, options){
			this.base(options);
			this.factory = factory;
			this.callback(this.callbacks.init);	
			this.callback(this.callbacks.create);
		},
		getElapsed: function(){
			return this.count * this.interval;
		},
		getElapsedTime: function(){
			return new Date(this.time + this.getElapsed());
		},
		reset: function(callback){
			clearInterval(this.timer);
			this.count = 0;
			this._setInterval(callback);			
			this.callback(this.callbacks.reset);
		},
		start: function(callback){		
			this.factory.running = true;
			this._createTimer(callback);
			this.callback(this.callbacks.start);
		},
		stop: function(callback){
			this.factory.running = false;
			this._clearInterval(callback);
			this.callback(this.callbacks.stop);
			this.callback(callback);
		},
		_clearInterval: function(){
			clearInterval(this.timer);
		},
		_createTimer: function(callback){
			this._setInterval(callback);		
		},
		_destroyTimer: function(callback){
			this._clearInterval();			
			this.timer = false;
			this.callback(callback);
			this.callback(this.callbacks.destroy);
		},
		_interval: function(callback){
			this.callback(this.callbacks.interval);
			this.callback(callback);
			this.count++;
		},
		_setInterval: function(callback){
			var t = this;
	
			t._interval(callback);

			t.timer = setInterval(function(){		
				t._interval(callback);
			}, this.interval);
		}
			
	});
	
}(jQuery));

(function($){
	FlipClock.TwentyFourHourClockFace = FlipClock.Face.extend({
		constructor: function(factory, options){
			this.base(factory, options);
		},
		build: function(time){
			var t        = this;
			var children = this.factory.$el.find('ul');

			if(!this.factory.time.time){
				this.factory.original = new Date();

				this.factory.time = new FlipClock.Time(this.factory, this.factory.original);
			}

			var time = time ? time : this.factory.time.getMilitaryTime(false, this.showSeconds);

			if(time.length > children.length){
				$.each(time, function(i, digit){
					t.createList(digit);
				});
			}
			
			this.createDivider();
			this.createDivider();

			$(this.dividers[0]).insertBefore(this.lists[this.lists.length - 2].$el);
			$(this.dividers[1]).insertBefore(this.lists[this.lists.length - 4].$el);
			
			this.base();
		},
		flip: function(time, doNotAddPlayClass){
			this.autoIncrement();
			
			time = time ? time : this.factory.time.getMilitaryTime(false, this.showSeconds);
			
			this.base(time, doNotAddPlayClass);	
		}
	});
	
}(jQuery));
(function($){
	FlipClock.CounterFace = FlipClock.Face.extend({
		shouldAutoIncrement: false,
		constructor: function(factory, options){

			if(typeof options != "object"){
				options = {};
			}

			factory.autoStart = options.autoStart ? true : false;

			if(options.autoStart){
				this.shouldAutoIncrement = true;
			}

			factory.increment = function(){
				factory.countdown = false;
				factory.setTime(factory.getTime().getTimeSeconds() + 1);
			};

			factory.decrement = function(){
				factory.countdown = true;
				var time = factory.getTime().getTimeSeconds();
				if(time > 0){
					factory.setTime(time - 1);
				}
			};

			factory.setValue = function(digits){
				factory.setTime(digits);
			};

			factory.setCounter = function(digits){
				factory.setTime(digits);
			};

			this.base(factory, options);
		},
		build: function(){
			var t        = this;
			var children = this.factory.$el.find('ul');
			var time 	 = this.factory.getTime().digitize([this.factory.getTime().time]);
			if(time.length > children.length){
				$.each(time, function(i, digit){
					var list = t.createList(digit);
					list.select(digit);
				});
			
			}
			$.each(this.lists, function(i, list){
				list.play();
			});
			this.base();
		},
		flip: function(time, doNotAddPlayClass){			
			if(this.shouldAutoIncrement){
				this.autoIncrement();
			}
			if(!time){		
				time = this.factory.getTime().digitize([this.factory.getTime().time]);
			}
			this.base(time, doNotAddPlayClass);
		},
		reset: function(){
			this.factory.time = new FlipClock.Time(
				this.factory, 
				this.factory.original ? Math.round(this.factory.original) : 0
			);

			this.flip();
		}
	});
	
}(jQuery));
(function($){
	FlipClock.DailyCounterFace = FlipClock.Face.extend({
		showSeconds: true,
		constructor: function(factory, options){
			this.base(factory, options);
		},
		build: function(time){
			var t = this;
			var children = this.factory.$el.find('ul');
			var offset = 0;
			time = time ? time : this.factory.time.getDayCounter(this.showSeconds);
			if(time.length > children.length){
				$.each(time, function(i, digit){
					t.createList(digit);
				});
			}
			if(this.showSeconds){
				$(this.createDivider('Seconds')).insertBefore(this.lists[this.lists.length - 2].$el);
			}
			else
			{
				offset = 2;
			}
			$(this.createDivider('Minutes')).insertBefore(this.lists[this.lists.length - 4 + offset].$el);
			$(this.createDivider('Hours')).insertBefore(this.lists[this.lists.length - 6 + offset].$el);
			$(this.createDivider('Days', true)).insertBefore(this.lists[0].$el);
			this.base();
		},
		flip: function(time, doNotAddPlayClass){
			if(!time){
				time = this.factory.time.getDayCounter(this.showSeconds);
			}
			this.autoIncrement();
			this.base(time, doNotAddPlayClass);
		}
	});

}(jQuery));
(function($){
	FlipClock.HourlyCounterFace = FlipClock.Face.extend({
		constructor: function(factory, options){
			this.base(factory, options);
		},
		build: function(excludeHours, time){
			var t = this;
			var children = this.factory.$el.find('ul');
			time = time ? time : this.factory.time.getHourCounter();
			if(time.length > children.length){
				$.each(time, function(i, digit){
					t.createList(digit);
				});
			}
			$(this.createDivider('Seconds')).insertBefore(this.lists[this.lists.length - 2].$el);
			$(this.createDivider('Minutes')).insertBefore(this.lists[this.lists.length - 4].$el);
			if(!excludeHours){
				$(this.createDivider('Hours', true)).insertBefore(this.lists[0].$el);
			}
			this.base();
		},
		flip: function(time, doNotAddPlayClass){
			if(!time){
				time = this.factory.time.getHourCounter();
			}
			this.autoIncrement();
			this.base(time, doNotAddPlayClass);
		},
		appendDigitToClock: function(obj){
			this.base(obj);
			this.dividers[0].insertAfter(this.dividers[0].next());
		}
	});
}(jQuery));
(function($){
	FlipClock.MinuteCounterFace = FlipClock.HourlyCounterFace.extend({
		clearExcessDigits: false,
		constructor: function(factory, options){
			this.base(factory, options);
		},
		build: function(){
			this.base(true, this.factory.time.getMinuteCounter());
		},
		flip: function(time, doNotAddPlayClass){
			if(!time){
				time = this.factory.time.getMinuteCounter();
			}
			this.base(time, doNotAddPlayClass);
		}
	});
}(jQuery));
(function($){
	FlipClock.TwelveHourClockFace = FlipClock.TwentyFourHourClockFace.extend({
		meridium: false,
		meridiumText: 'AM',
		build: function(){
			var t = this;
			var time = this.factory.time.getTime(false, this.showSeconds);
			this.base(time);			
			this.meridiumText = this.getMeridium();			
			this.meridium = $([
				'<ul class="flip-clock-meridium">',
					'<li>',
						'<a href="#">'+this.meridiumText+'</a>',
					'</li>',
				'</ul>'
			].join(''));
			this.meridium.insertAfter(this.lists[this.lists.length-1].$el);
		},
		flip: function(time, doNotAddPlayClass){			
			if(this.meridiumText != this.getMeridium()){
				this.meridiumText = this.getMeridium();
				this.meridium.find('a').html(this.meridiumText);	
			}
			this.base(this.factory.time.getTime(false, this.showSeconds), doNotAddPlayClass);	
		},
		getMeridium: function(){
			return new Date().getHours() >= 12 ? 'PM' : 'AM';
		},
		isPM: function(){
			return this.getMeridium() == 'PM' ? true : false;
		},
		isAM: function(){
			return this.getMeridium() == 'AM' ? true : false;
		}
	});
	
}(jQuery));

(function($){
	FlipClock.Lang.English = {
		'years'   : 'Years',
		'months'  : 'Months',
		'days'    : 'Days',
		'hours'   : 'Hours',
		'minutes' : 'Minutes',
		'seconds' : 'Seconds'
	};
	FlipClock.Lang['en']      = FlipClock.Lang.English;
	FlipClock.Lang['en-us']   = FlipClock.Lang.English;
	FlipClock.Lang['english'] = FlipClock.Lang.English;

}(jQuery));
(function($){
	FlipClock.Lang.Japanese = {
		'years'   : '年',
		'months'  : '月',
		'days'    : '日',
		'hours'   : '時間',
		'minutes' : '分',
		'seconds' : '秒'
	};
	FlipClock.Lang['ja']      = FlipClock.Lang.Japanese;
	FlipClock.Lang['JA']   = FlipClock.Lang.Japanese;
	FlipClock.Lang['Japanese'] = FlipClock.Lang.Japanese;

}(jQuery));