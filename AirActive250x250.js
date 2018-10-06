(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.banka = function() {
	this.initialize(img.banka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,138,276);


(lib.bg_300x600_1 = function() {
	this.initialize(img.bg_300x600_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.bg_300x600_2 = function() {
	this.initialize(img.bg_300x600_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.bg_300x600_3 = function() {
	this.initialize(img.bg_300x600_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.Logo250x250 = function() {
	this.initialize(img.Logo250x250);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,250);


(lib.nano = function() {
	this.initialize(img.nano);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,51,55);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.nano();
	this.instance.parent = this;
	this.instance.setTransform(-25.5,-27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.5,-27.5,51,55);


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.banka();
	this.instance.parent = this;
	this.instance.setTransform(-44.5,-89,0.645,0.645);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.5,-89,89,178);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-5.6,6).curveTo(-7.7,3.9,-7.8,0.1).curveTo(-7.8,-3.6,-5.6,-5.8).curveTo(-3.4,-8.1,0.3,-8.1).curveTo(3.8,-8.1,5.8,-6).curveTo(7.7,-4,7.7,-0.5).lineTo(7.6,1.2).lineTo(-3.9,1.2).curveTo(-3.8,5.3,1.3,5.3).curveTo(4.1,5.3,6.9,4).lineTo(7.2,7).curveTo(4.2,8.1,0.9,8.1).curveTo(-3.3,8.1,-5.6,6).closePath().moveTo(4.2,-1.2).curveTo(4.2,-3.1,3.2,-4.2).curveTo(2.2,-5.3,0.5,-5.3).curveTo(-3.2,-5.3,-3.8,-1.2).lineTo(4.2,-1.2).lineTo(4.2,-1.2).closePath();
	this.shape.setTransform(100,-3.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-11.7,7.8).lineTo(-11.7,-7.8).lineTo(-7.8,-7.8).lineTo(-7.8,5.3).lineTo(-1.9,5.3).lineTo(-1.9,-7.8).lineTo(1.9,-7.8).lineTo(1.9,5.3).lineTo(7.8,5.3).lineTo(7.8,-7.8).lineTo(11.6,-7.8).lineTo(11.6,7.8).closePath();
	this.shape_1.setTransform(77.7,-3.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(3.5,7.8).lineTo(3.5,1.3).lineTo(-3.5,1.3).lineTo(-3.5,7.8).lineTo(-7.3,7.8).lineTo(-7.3,-7.8).lineTo(-3.5,-7.8).lineTo(-3.5,-1.4).lineTo(3.5,-1.4).lineTo(3.5,-7.8).lineTo(7.3,-7.8).lineTo(7.3,7.8).closePath();
	this.shape_2.setTransform(54.9,-3.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-5.6,6).curveTo(-7.7,3.9,-7.7,0.1).curveTo(-7.8,-3.6,-5.6,-5.8).curveTo(-3.4,-8.1,0.4,-8.1).curveTo(3.8,-8.1,5.8,-6).curveTo(7.8,-4,7.7,-0.5).lineTo(7.6,1.2).lineTo(-3.9,1.2).curveTo(-3.8,5.3,1.3,5.3).curveTo(4,5.3,6.9,4).lineTo(7.1,7).curveTo(4.2,8.1,0.8,8.1).curveTo(-3.3,8.1,-5.6,6).closePath().moveTo(4.2,-1.2).curveTo(4.2,-3.1,3.2,-4.2).curveTo(2.2,-5.3,0.5,-5.3).curveTo(-3.2,-5.3,-3.8,-1.2).lineTo(4.2,-1.2).lineTo(4.2,-1.2).closePath();
	this.shape_3.setTransform(36.9,-3.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FFFFFF").beginStroke().moveTo(5.8,7.8).lineTo(5.8,2.1).curveTo(5.8,-0.9,6,-3.5).lineTo(5.9,-3.5).lineTo(1.4,6.6).lineTo(-1.6,6.6).lineTo(-6.1,-3.5).lineTo(-6.2,-3.5).lineTo(-6.1,2.1).lineTo(-6.1,7.8).lineTo(-9.6,7.8).lineTo(-9.6,-7.8).lineTo(-4.4,-7.8).lineTo(0.1,2.3).lineTo(4.6,-7.8).lineTo(9.6,-7.8).lineTo(9.6,7.8).closePath();
	this.shape_4.setTransform(16.6,-3.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-9,11.4).lineTo(5.7,-11.4).lineTo(9,-11.4).lineTo(-5.8,11.4).closePath().moveTo(2.8,9.5).curveTo(1.5,8.2,1.5,5.9).curveTo(1.5,3.5,2.9,2.1).curveTo(4.2,0.7,6.5,0.7).curveTo(8.7,0.7,10,2.1).curveTo(11.3,3.5,11.3,5.8).curveTo(11.3,8.1,9.9,9.5).curveTo(8.6,10.9,6.4,10.9).curveTo(4.2,10.9,2.8,9.5).closePath().moveTo(5,3.9).curveTo(4.5,4.6,4.5,5.8).curveTo(4.5,7.1,5,7.8).curveTo(5.6,8.4,6.5,8.4).curveTo(7.3,8.4,7.8,7.8).curveTo(8.4,7.1,8.4,5.8).curveTo(8.4,4.6,7.8,3.9).curveTo(7.3,3.2,6.5,3.2).curveTo(5.6,3.2,5,3.9).closePath().moveTo(-10,-2.1).curveTo(-11.3,-3.5,-11.3,-5.8).curveTo(-11.3,-8.1,-10,-9.5).curveTo(-8.6,-10.9,-6.4,-10.9).curveTo(-4.2,-10.9,-2.8,-9.6).curveTo(-1.5,-8.2,-1.5,-5.8).curveTo(-1.5,-3.5,-2.9,-2.1).curveTo(-4.2,-0.8,-6.5,-0.8).curveTo(-8.7,-0.8,-10,-2.1).closePath().moveTo(-7.8,-7.7).curveTo(-8.4,-7,-8.4,-5.8).curveTo(-8.4,-4.5,-7.8,-3.9).curveTo(-7.3,-3.2,-6.4,-3.2).curveTo(-5.6,-3.2,-5.1,-3.9).curveTo(-4.5,-4.6,-4.5,-5.8).curveTo(-4.5,-7,-5.1,-7.7).curveTo(-5.6,-8.4,-6.4,-8.4).curveTo(-7.3,-8.4,-7.8,-7.7).closePath();
	this.shape_5.setTransform(-14.3,-6.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.4,9.8).lineTo(-7.1,6.5).curveTo(-4,7.8,-1.7,7.8).curveTo(1.6,7.8,3.2,5.6).curveTo(4.3,4,4.5,1).lineTo(4.5,0.1).curveTo(2.8,3.1,-1.4,3.1).curveTo(-4.6,3.1,-6.5,1.4).curveTo(-8.5,-0.4,-8.5,-3.6).curveTo(-8.5,-7,-6.3,-9).curveTo(-4,-10.8,-0.2,-10.8).curveTo(4.8,-10.8,7,-6.9).curveTo(8.6,-4.2,8.6,-0.3).curveTo(8.6,4.9,5.8,8.1).curveTo(3.4,10.8,-1.3,10.8).curveTo(-4.7,10.8,-7.4,9.8).closePath().moveTo(-3.2,-6.7).curveTo(-4.4,-5.6,-4.4,-3.7).curveTo(-4.4,-1.9,-3.3,-0.9).curveTo(-2.1,0.2,-0.2,0.2).curveTo(1.9,0.2,3,-1).curveTo(4.1,-2.1,4.1,-3.8).curveTo(4.1,-4.7,3.8,-5.4).curveTo(2.9,-7.8,-0.2,-7.8).curveTo(-2.1,-7.8,-3.2,-6.7).closePath();
	this.shape_6.setTransform(-36.3,-6.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.4,9.8).lineTo(-7,6.5).curveTo(-4,7.8,-1.7,7.8).curveTo(1.6,7.8,3.2,5.6).curveTo(4.3,4,4.5,1).lineTo(4.5,0.1).curveTo(2.9,3.1,-1.4,3.1).curveTo(-4.6,3.1,-6.5,1.4).curveTo(-8.6,-0.4,-8.5,-3.6).curveTo(-8.5,-7,-6.3,-9).curveTo(-4,-10.8,-0.3,-10.8).curveTo(4.8,-10.8,7,-6.9).curveTo(8.5,-4.2,8.6,-0.3).curveTo(8.5,4.9,5.8,8.1).curveTo(3.4,10.8,-1.3,10.8).curveTo(-4.7,10.8,-7.4,9.8).closePath().moveTo(-3.2,-6.7).curveTo(-4.4,-5.6,-4.3,-3.7).curveTo(-4.4,-1.9,-3.3,-0.9).curveTo(-2.2,0.2,-0.2,0.2).curveTo(1.8,0.2,3,-1).curveTo(4.1,-2.1,4.1,-3.8).curveTo(4.1,-4.7,3.8,-5.4).curveTo(2.9,-7.8,-0.2,-7.8).curveTo(-2.1,-7.8,-3.2,-6.7).closePath();
	this.shape_7.setTransform(-55.9,-6.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-8.6,3.3).curveTo(-8.6,0.6,-6.6,-0.6).curveTo(-4.9,-1.6,-1.3,-1.6).lineTo(2.1,-1.4).lineTo(2.1,-2.7).curveTo(2.1,-5.1,-1.3,-5.1).curveTo(-4.2,-5.1,-7.2,-4.1).lineTo(-7.5,-7.2).curveTo(-4.3,-8.1,-0.9,-8.1).curveTo(2.6,-8.1,4.2,-7).curveTo(5.9,-5.8,5.9,-2.8).lineTo(5.9,3.7).curveTo(5.9,4.9,7,4.9).curveTo(7.5,4.9,8.6,4.6).lineTo(8.6,7.6).curveTo(6.9,8,5.7,8).curveTo(2.8,8,2.4,5.8).curveTo(0.8,8.1,-3,8.1).curveTo(-8.6,8.1,-8.6,3.3).closePath().moveTo(-4.7,3.1).curveTo(-4.7,5.4,-1.9,5.4).curveTo(-0.1,5.4,0.9,4.6).curveTo(2.1,3.8,2.1,2.2).lineTo(2.1,0.9).lineTo(-0.7,0.8).curveTo(-4.7,0.8,-4.7,3.1).closePath();
	this.shape_8.setTransform(-81.3,-3.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#FFFFFF").beginStroke().moveTo(3.5,7.8).lineTo(3.5,1.3).lineTo(-3.5,1.3).lineTo(-3.5,7.8).lineTo(-7.3,7.8).lineTo(-7.3,-7.8).lineTo(-3.5,-7.8).lineTo(-3.5,-1.4).lineTo(3.5,-1.4).lineTo(3.5,-7.8).lineTo(7.3,-7.8).lineTo(7.3,7.8).closePath();
	this.shape_9.setTransform(-99.9,-3.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110.8,-19.7,221.5,33.5);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.9,4.8).lineTo(-0.6,1.1).lineTo(-3.7,3.3).lineTo(-4.7,1.6).lineTo(-1.2,-0).lineTo(-4.7,-1.6).lineTo(-3.7,-3.3).lineTo(-0.6,-1).lineTo(-0.9,-4.8).lineTo(0.9,-4.8).lineTo(0.6,-1).lineTo(3.7,-3.3).lineTo(4.7,-1.6).lineTo(1.2,-0).lineTo(4.7,1.6).lineTo(3.7,3.3).lineTo(0.6,1.1).lineTo(0.9,4.8).closePath();
	this.shape.setTransform(65.2,-12.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(4.1,10.1).lineTo(4.1,2.9).lineTo(4.2,-1.6).lineTo(4.1,-1.6).lineTo(-4,10.1).lineTo(-7.1,10.1).lineTo(-7.1,-5.5).lineTo(-4.1,-5.5).lineTo(-4.1,2.1).lineTo(-4.2,6.1).lineTo(-4.1,6.1).lineTo(4.1,-5.5).lineTo(7.1,-5.5).lineTo(7.1,10.1).closePath().moveTo(-4,-8.4).lineTo(-3.9,-10.1).curveTo(-1.8,-9.6,0.1,-9.5).curveTo(1.9,-9.6,4,-10.1).lineTo(4.1,-8.4).curveTo(2.1,-7.8,0.1,-7.8).curveTo(-1.9,-7.8,-4,-8.4).closePath();
	this.shape_1.setTransform(49.5,-5.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.1,10.6).lineTo(-0.1,-2.9).lineTo(-3,-2.9).lineTo(-3,-5).lineTo(2.8,-5).lineTo(2.8,10.6).closePath().moveTo(-0.5,-9).curveTo(-0.5,-10.7,1.2,-10.6).curveTo(3,-10.7,3,-9).curveTo(3,-7.5,1.2,-7.5).curveTo(-0.5,-7.5,-0.5,-9).closePath();
	this.shape_2.setTransform(35.3,-6.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.9,10.5).lineTo(-7.9,-10.3).lineTo(-5.4,-10.3).lineTo(-5.1,-7.8).curveTo(-3.3,-10.5,0.7,-10.5).curveTo(4.2,-10.5,6.1,-8.1).curveTo(7.9,-5.9,7.9,-2.5).curveTo(7.9,1,6.1,3.2).curveTo(4.1,5.6,0.7,5.6).curveTo(-3.1,5.6,-4.9,3.1).lineTo(-4.9,10.5).closePath().moveTo(-3.7,-6.6).curveTo(-5,-5.1,-5,-2.5).curveTo(-5,0.2,-3.7,1.7).curveTo(-2.3,3.3,-0.1,3.3).curveTo(2.2,3.3,3.5,1.8).curveTo(4.9,0.2,4.9,-2.5).curveTo(4.9,-5.1,3.5,-6.7).curveTo(2.2,-8.2,-0.1,-8.2).curveTo(-2.3,-8.2,-3.7,-6.6).closePath();
	this.shape_3.setTransform(23.1,-0.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-5.5,5.9).curveTo(-7.6,3.8,-7.6,0).curveTo(-7.6,-3.7,-5.5,-5.8).curveTo(-3.3,-8.1,0.4,-8.1).curveTo(3.8,-8.1,5.7,-5.9).curveTo(7.6,-3.9,7.6,-0.5).lineTo(7.5,0.9).lineTo(-4.6,0.9).curveTo(-4.6,3.3,-3,4.6).curveTo(-1.4,5.8,1.2,5.9).curveTo(3.9,5.9,6.8,4.5).lineTo(6.9,6.9).curveTo(4.2,8.1,0.9,8).curveTo(-3.2,8.1,-5.5,5.9).closePath().moveTo(4.8,-1).curveTo(4.8,-3.2,3.7,-4.5).curveTo(2.5,-5.9,0.5,-5.9).curveTo(-4,-5.9,-4.5,-1).lineTo(4.8,-1).lineTo(4.8,-1).closePath();
	this.shape_4.setTransform(4.3,-3.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.5,7.8).lineTo(-1.5,-5.8).lineTo(-7,-5.8).lineTo(-7,-7.8).lineTo(7,-7.8).lineTo(7,-5.8).lineTo(1.5,-5.8).lineTo(1.5,7.8).closePath();
	this.shape_5.setTransform(-11.7,-3.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#FFFFFF").beginStroke().moveTo(3.5,7.8).lineTo(-0.4,1.2).lineTo(-3.9,1.1).lineTo(-3.9,7.8).lineTo(-6.9,7.8).lineTo(-6.9,-7.8).lineTo(-3.9,-7.8).lineTo(-3.9,-1.2).lineTo(-0.4,-1.2).lineTo(3.4,-7.8).lineTo(6.7,-7.8).lineTo(2,-0.1).lineTo(6.9,7.8).closePath();
	this.shape_6.setTransform(-26.2,-3.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-8.5,3.3).curveTo(-8.5,0.6,-6.4,-0.5).curveTo(-4.6,-1.6,-1.2,-1.5).lineTo(2.8,-1.3).lineTo(2.8,-2.9).curveTo(2.8,-5.7,-1.2,-5.7).curveTo(-4,-5.8,-6.9,-4.8).lineTo(-7.1,-7.3).curveTo(-4,-8,-0.8,-8.1).curveTo(2.6,-8.1,4,-7).curveTo(5.7,-5.8,5.7,-3).lineTo(5.7,4.2).curveTo(5.7,5.5,6.9,5.5).lineTo(8.4,5.1).lineTo(8.5,7.7).curveTo(7,7.9,6,7.9).curveTo(3,7.9,3,5.8).curveTo(1.1,8,-2.8,8).curveTo(-8.5,8.1,-8.5,3.3).closePath().moveTo(-5.4,3.2).curveTo(-5.4,5.9,-2,6).curveTo(0.1,6,1.3,5).curveTo(2.8,3.9,2.8,2.1).lineTo(2.8,0.6).curveTo(0.7,0.3,-0.7,0.3).curveTo(-5.4,0.3,-5.4,3.2).closePath();
	this.shape_7.setTransform(-43.6,-3.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-5.7,9.3).curveTo(-7.6,7.1,-7.7,3.5).lineTo(-7.7,-1.7).curveTo(-7.7,-6.2,-5,-8.2).curveTo(-3.4,-9.4,0.2,-10).curveTo(3.1,-10.5,5,-11.4).lineTo(5.6,-9).curveTo(3.7,-8.2,0.6,-7.7).curveTo(-2.1,-7.2,-3.2,-6.5).curveTo(-5.1,-5.1,-5.1,-1.7).lineTo(-5.1,-0.4).curveTo(-3.4,-3.7,0.9,-3.7).curveTo(4.3,-3.7,6,-1.6).curveTo(7.7,0.4,7.7,3.7).curveTo(7.7,7.2,5.8,9.2).curveTo(3.8,11.4,0.1,11.4).curveTo(-3.6,11.4,-5.7,9.3).closePath().moveTo(-3.3,-0.2).curveTo(-4.6,1.2,-4.6,3.7).curveTo(-4.6,6.3,-3.4,7.7).curveTo(-2.2,9.2,-0,9.2).curveTo(2.2,9.2,3.4,7.7).curveTo(4.6,6.3,4.7,3.8).curveTo(4.6,1.3,3.4,-0.1).curveTo(2.2,-1.5,-0,-1.5).curveTo(-2.1,-1.5,-3.3,-0.2).closePath();
	this.shape_8.setTransform(-62,-6.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.3,-19.7,146.5,33.5);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(1.5,2.9).lineTo(1.5,0.2).lineTo(1.6,-1.5).lineTo(1.5,-1.5).lineTo(-1.5,2.9).lineTo(-2.6,2.9).lineTo(-2.6,-2.9).lineTo(-1.6,-2.9).lineTo(-1.6,-0.1).lineTo(-1.6,1.4).lineTo(1.5,-2.9).lineTo(2.7,-2.9).lineTo(2.7,2.9).closePath();
	this.shape.setTransform(87.5,-1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(2.3,2.9).lineTo(2.3,0.5).lineTo(2.4,-1.6).lineTo(2.4,-1.6).lineTo(0.4,2.4).lineTo(-0.5,2.4).lineTo(-2.4,-1.6).lineTo(-2.5,-1.6).lineTo(-2.4,0.4).lineTo(-2.4,2.9).lineTo(-3.4,2.9).lineTo(-3.4,-2.9).lineTo(-1.9,-2.9).lineTo(0,1.3).lineTo(2,-2.9).lineTo(3.4,-2.9).lineTo(3.4,2.9).closePath();
	this.shape_1.setTransform(79.8,-1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(1.6,2.9).lineTo(1.6,0.2).lineTo(1.6,-1.5).lineTo(1.6,-1.5).lineTo(-1.5,2.9).lineTo(-2.7,2.9).lineTo(-2.7,-2.9).lineTo(-1.6,-2.9).lineTo(-1.6,-0.1).lineTo(-1.6,1.4).lineTo(1.5,-2.9).lineTo(2.6,-2.9).lineTo(2.6,2.9).closePath();
	this.shape_2.setTransform(72.2,-1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.6,2.9).lineTo(-2.6,-2.9).lineTo(0.6,-2.9).curveTo(1.4,-2.9,1.9,-2.5).curveTo(2.3,-2.1,2.3,-1.4).curveTo(2.3,-0.5,1.3,-0.1).curveTo(1.8,-0,2.2,0.3).curveTo(2.6,0.7,2.6,1.3).curveTo(2.6,2.1,2.1,2.5).curveTo(1.6,2.9,0.8,2.9).closePath().moveTo(-1.5,2.2).lineTo(0.5,2.2).curveTo(0.9,2.2,1.2,2).curveTo(1.5,1.7,1.4,1.3).curveTo(1.5,0.8,1.2,0.5).curveTo(0.9,0.3,0.5,0.3).lineTo(-1.5,0.3).closePath().moveTo(-1.5,-0.4).lineTo(0.4,-0.4).curveTo(0.7,-0.4,1,-0.6).curveTo(1.2,-0.9,1.3,-1.3).curveTo(1.2,-1.7,1,-2).curveTo(0.8,-2.2,0.3,-2.2).lineTo(-1.5,-2.2).closePath();
	this.shape_3.setTransform(65.7,-1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.2,2.2).curveTo(-3,1.4,-3,-0).curveTo(-3,-1.4,-2.2,-2.2).curveTo(-1.4,-3,0,-3).curveTo(1.4,-3,2.2,-2.2).curveTo(3,-1.4,3,-0).curveTo(3,1.4,2.2,2.2).curveTo(1.4,3,0,3).curveTo(-1.4,3,-2.2,2.2).closePath().moveTo(-1.4,-1.6).curveTo(-1.9,-1,-1.9,-0).curveTo(-1.9,1,-1.4,1.6).curveTo(-0.9,2.1,-0,2.1).curveTo(0.9,2.1,1.4,1.6).curveTo(1.9,1,1.9,-0).curveTo(1.9,-1,1.4,-1.6).curveTo(0.9,-2.1,-0,-2.2).curveTo(-0.9,-2.1,-1.4,-1.6).closePath();
	this.shape_4.setTransform(58.8,-1.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FFFFFF").beginStroke().moveTo(1.3,2.9).lineTo(-0.1,0.4).lineTo(-1.5,0.4).lineTo(-1.5,2.9).lineTo(-2.6,2.9).lineTo(-2.6,-2.9).lineTo(-1.5,-2.9).lineTo(-1.5,-0.5).lineTo(-0.2,-0.5).lineTo(1.3,-2.9).lineTo(2.5,-2.9).lineTo(0.7,-0).lineTo(2.6,2.9).closePath();
	this.shape_5.setTransform(52.6,-1.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.2,3.8).lineTo(-0.5,2).lineTo(-2.9,-3.8).lineTo(-1.8,-3.8).lineTo(0.1,0.8).lineTo(1.8,-3.8).lineTo(2.9,-3.8).lineTo(-0.1,3.8).closePath();
	this.shape_6.setTransform(46.2,-0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.6,2.9).lineTo(-2.6,-2.9).lineTo(0.6,-2.9).curveTo(1.4,-2.9,1.9,-2.5).curveTo(2.3,-2.1,2.3,-1.4).curveTo(2.3,-0.5,1.3,-0.1).curveTo(1.8,-0,2.1,0.3).curveTo(2.6,0.7,2.6,1.3).curveTo(2.6,2.1,2.1,2.5).curveTo(1.6,2.9,0.8,2.9).closePath().moveTo(-1.5,2.2).lineTo(0.5,2.2).curveTo(0.9,2.2,1.2,2).curveTo(1.5,1.7,1.4,1.3).curveTo(1.5,0.8,1.2,0.5).curveTo(0.9,0.3,0.4,0.3).lineTo(-1.5,0.3).closePath().moveTo(-1.5,-0.4).lineTo(0.4,-0.4).curveTo(0.7,-0.4,1,-0.6).curveTo(1.2,-0.9,1.2,-1.3).curveTo(1.2,-1.7,1,-2).curveTo(0.8,-2.2,0.3,-2.2).lineTo(-1.5,-2.2).closePath();
	this.shape_7.setTransform(40.2,-1.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.3,2.6).lineTo(-2.2,1.7).lineTo(-1.4,2).lineTo(-0.3,2.1).curveTo(1.3,2.1,1.3,1.2).curveTo(1.3,0.3,-0.2,0.3).lineTo(-1.2,0.3).lineTo(-1.2,-0.4).lineTo(-0.2,-0.4).curveTo(1.1,-0.4,1.1,-1.3).curveTo(1.1,-2.2,-0.2,-2.2).curveTo(-0.8,-2.1,-2.1,-1.8).lineTo(-2.2,-2.6).curveTo(-1.1,-3,0,-3).curveTo(1,-3,1.6,-2.6).curveTo(2.2,-2.2,2.3,-1.5).curveTo(2.3,-0.4,1.2,-0).curveTo(2.4,0.2,2.4,1.3).curveTo(2.4,2.2,1.6,2.6).curveTo(1,3,-0.1,3).curveTo(-1.3,3,-2.3,2.6).closePath();
	this.shape_8.setTransform(33.9,-1.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.1,1.2).curveTo(-3.1,0.2,-2.4,-0.2).curveTo(-1.7,-0.5,-0.4,-0.6).lineTo(1,-0.5).lineTo(1,-1.1).curveTo(1,-2.1,-0.4,-2.2).curveTo(-1.5,-2.2,-2.6,-1.7).lineTo(-2.7,-2.7).curveTo(-1.5,-3,-0.3,-3).curveTo(0.9,-3,1.5,-2.6).curveTo(2.1,-2.1,2.1,-1.1).lineTo(2.1,1.6).curveTo(2.1,2,2.6,2.1).lineTo(3.1,1.9).lineTo(3.1,2.9).lineTo(2.2,3).curveTo(1.1,3,1.1,2.1).curveTo(0.4,3,-1,3).curveTo(-3.1,3,-3.1,1.2).closePath().moveTo(-2,1.2).curveTo(-2,2.2,-0.7,2.2).curveTo(0,2.2,0.5,1.9).curveTo(1,1.4,1,0.8).lineTo(1,0.2).lineTo(-0.3,0.1).curveTo(-2,0.1,-2,1.2).closePath();
	this.shape_9.setTransform(28.2,-1.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.9,3.9).lineTo(-2.9,-3.8).lineTo(-2,-3.8).lineTo(-1.9,-2.9).curveTo(-1.3,-3.9,0.2,-3.9).curveTo(1.5,-3.9,2.3,-3).curveTo(2.9,-2.2,2.9,-0.9).curveTo(2.9,0.4,2.3,1.2).curveTo(1.5,2.1,0.2,2.1).curveTo(-1.1,2.1,-1.9,1.2).lineTo(-1.9,3.9).closePath().moveTo(-1.3,-2.4).curveTo(-1.9,-1.9,-1.9,-0.9).curveTo(-1.9,0.1,-1.3,0.6).curveTo(-0.9,1.3,-0.1,1.2).curveTo(0.9,1.3,1.3,0.6).curveTo(1.8,0.1,1.8,-0.9).curveTo(1.8,-1.9,1.3,-2.5).curveTo(0.8,-3,0,-3.1).curveTo(-0.9,-3.1,-1.3,-2.4).closePath();
	this.shape_10.setTransform(21.3,-0.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.6,2.9).lineTo(-0.6,-2.2).lineTo(-2.6,-2.2).lineTo(-2.6,-2.9).lineTo(2.6,-2.9).lineTo(2.6,-2.2).lineTo(0.6,-2.2).lineTo(0.6,2.9).closePath();
	this.shape_11.setTransform(14.9,-1.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.6,2.9).lineTo(-2.6,-2.9).lineTo(-1.5,-2.9).lineTo(-1.5,-0.9).lineTo(0.7,-0.9).curveTo(1.5,-0.9,2,-0.4).curveTo(2.6,0.1,2.6,1).curveTo(2.6,1.8,2,2.4).curveTo(1.5,2.9,0.7,2.9).closePath().moveTo(-1.5,2.1).lineTo(0.3,2.1).curveTo(0.8,2.1,1.1,1.9).curveTo(1.4,1.6,1.5,1).curveTo(1.4,0.5,1.1,0.2).curveTo(0.8,-0.1,0.3,-0.2).lineTo(-1.5,-0.2).closePath();
	this.shape_12.setTransform(9.4,-1.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.8,2.9).lineTo(-2.8,2).lineTo(-2.5,2).curveTo(-2,2,-1.9,1.7).lineTo(-1.7,0.7).lineTo(-1.5,-2.9).lineTo(2.8,-2.9).lineTo(2.8,2.9).lineTo(1.7,2.9).lineTo(1.7,-2.2).lineTo(-0.5,-2.2).lineTo(-0.7,0.8).curveTo(-0.7,2,-1.1,2.4).curveTo(-1.4,2.9,-2.2,2.9).lineTo(-2.8,2.9).closePath();
	this.shape_13.setTransform(2.5,-1.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.2,3.8).lineTo(-0.5,2).lineTo(-2.9,-3.8).lineTo(-1.8,-3.8).lineTo(0.1,0.8).lineTo(1.8,-3.8).lineTo(2.9,-3.8).lineTo(-0.1,3.8).closePath();
	this.shape_14.setTransform(-3.4,-0.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.4,2.6).lineTo(-2.3,1.7).lineTo(-1.5,2).lineTo(-0.4,2.1).curveTo(1.2,2.1,1.2,1.2).curveTo(1.2,0.3,-0.3,0.3).lineTo(-1.2,0.3).lineTo(-1.2,-0.4).lineTo(-0.3,-0.4).curveTo(1.1,-0.4,1.2,-1.3).curveTo(1.1,-2.2,-0.3,-2.2).curveTo(-0.8,-2.1,-2.1,-1.8).lineTo(-2.2,-2.6).curveTo(-1.2,-3,-0,-3).curveTo(1.1,-3,1.6,-2.6).curveTo(2.3,-2.2,2.2,-1.5).curveTo(2.2,-0.4,1.2,-0).curveTo(2.3,0.2,2.3,1.3).curveTo(2.3,2.2,1.6,2.6).curveTo(0.9,3,-0.2,3).curveTo(-1.3,3,-2.4,2.6).closePath();
	this.shape_15.setTransform(-12,-1.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.1,3.9).lineTo(-0.1,-1).lineTo(-1.1,-1).lineTo(-1.1,-1.8).lineTo(1.1,-1.8).lineTo(1.1,3.9).closePath().moveTo(-0.2,-3.4).curveTo(-0.2,-3.9,0.4,-3.9).curveTo(1.1,-3.9,1.1,-3.4).curveTo(1.1,-2.8,0.4,-2.8).curveTo(-0.2,-2.8,-0.2,-3.4).closePath();
	this.shape_16.setTransform(-19.3,-2.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#FFFFFF").beginStroke().moveTo(1.5,2.9).lineTo(1.5,0.3).lineTo(-1.5,0.3).lineTo(-1.5,2.9).lineTo(-2.6,2.9).lineTo(-2.6,-2.9).lineTo(-1.5,-2.9).lineTo(-1.5,-0.4).lineTo(1.5,-0.4).lineTo(1.5,-2.9).lineTo(2.6,-2.9).lineTo(2.6,2.9).closePath();
	this.shape_17.setTransform(-23.9,-1.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#FFFFFF").beginStroke().moveTo(1.5,2.9).lineTo(1.5,0.3).lineTo(-1.5,0.3).lineTo(-1.5,2.9).lineTo(-2.6,2.9).lineTo(-2.6,-2.9).lineTo(-1.5,-2.9).lineTo(-1.5,-0.4).lineTo(1.5,-0.4).lineTo(1.5,-2.9).lineTo(2.6,-2.9).lineTo(2.6,2.9).closePath();
	this.shape_18.setTransform(-30.7,-1.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#FFFFFF").beginStroke().moveTo(1.5,2.9).lineTo(1.5,0.7).lineTo(-0.2,0.7).lineTo(-1.4,2.9).lineTo(-2.6,2.9).lineTo(-1.3,0.6).curveTo(-1.8,0.4,-2.1,-0).curveTo(-2.5,-0.5,-2.5,-1.1).curveTo(-2.5,-1.9,-2,-2.4).curveTo(-1.5,-2.9,-0.7,-2.9).lineTo(2.6,-2.9).lineTo(2.6,2.9).closePath().moveTo(-1.1,-1.9).curveTo(-1.4,-1.6,-1.4,-1.1).curveTo(-1.4,-0.6,-1.1,-0.3).curveTo(-0.8,-0,-0.3,-0).lineTo(1.5,-0).lineTo(1.5,-2.2).lineTo(-0.3,-2.2).curveTo(-0.8,-2.2,-1.1,-1.9).closePath();
	this.shape_19.setTransform(-37.6,-1.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#FFFFFF").beginStroke().moveTo(1.5,2.9).lineTo(1.5,0.3).lineTo(-1.5,0.3).lineTo(-1.5,2.9).lineTo(-2.6,2.9).lineTo(-2.6,-2.9).lineTo(-1.5,-2.9).lineTo(-1.5,-0.4).lineTo(1.5,-0.4).lineTo(1.5,-2.9).lineTo(2.6,-2.9).lineTo(2.6,2.9).closePath();
	this.shape_20.setTransform(-43.9,-1.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.6,2.9).lineTo(-2.6,-2.9).lineTo(0.6,-2.9).curveTo(1.4,-2.9,1.9,-2.5).curveTo(2.3,-2.1,2.3,-1.4).curveTo(2.3,-0.5,1.3,-0.1).curveTo(1.8,-0,2.2,0.3).curveTo(2.6,0.7,2.6,1.3).curveTo(2.6,2.1,2.1,2.5).curveTo(1.6,2.9,0.8,2.9).closePath().moveTo(-1.5,2.2).lineTo(0.5,2.2).curveTo(0.9,2.2,1.2,2).curveTo(1.5,1.7,1.4,1.3).curveTo(1.5,0.8,1.2,0.5).curveTo(0.9,0.3,0.4,0.3).lineTo(-1.5,0.3).closePath().moveTo(-1.5,-0.4).lineTo(0.4,-0.4).curveTo(0.7,-0.4,1,-0.6).curveTo(1.2,-0.9,1.3,-1.3).curveTo(1.2,-1.7,1,-2).curveTo(0.8,-2.2,0.3,-2.2).lineTo(-1.5,-2.2).closePath();
	this.shape_21.setTransform(-50.4,-1.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.1,3.9).lineTo(-0.1,-1).lineTo(-1.1,-1).lineTo(-1.1,-1.8).lineTo(1,-1.8).lineTo(1,3.9).closePath().moveTo(-0.2,-3.4).curveTo(-0.2,-3.9,0.5,-3.9).curveTo(1.1,-3.9,1.1,-3.4).curveTo(1.1,-2.8,0.5,-2.8).curveTo(-0.2,-2.8,-0.2,-3.4).closePath();
	this.shape_22.setTransform(-55.6,-2.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3,3.9).lineTo(-3,-3.8).lineTo(-2,-3.8).lineTo(-1.9,-2.9).curveTo(-1.3,-3.9,0.3,-3.9).curveTo(1.6,-3.9,2.2,-3).curveTo(3,-2.2,3,-0.9).curveTo(3,0.4,2.2,1.2).curveTo(1.6,2.1,0.3,2.1).curveTo(-1.2,2.1,-1.8,1.2).lineTo(-1.8,3.9).closePath().moveTo(-1.4,-2.4).curveTo(-1.8,-1.9,-1.8,-0.9).curveTo(-1.8,0.1,-1.4,0.6).curveTo(-0.9,1.3,-0,1.2).curveTo(0.8,1.3,1.3,0.6).curveTo(1.8,0.1,1.8,-0.9).curveTo(1.8,-1.9,1.3,-2.5).curveTo(0.8,-3,-0,-3.1).curveTo(-0.9,-3.1,-1.4,-2.4).closePath();
	this.shape_23.setTransform(-60.2,-0.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.2,2.2).curveTo(-3,1.4,-3,-0).curveTo(-3,-1.4,-2.2,-2.2).curveTo(-1.4,-3,0,-3).curveTo(1.4,-3,2.2,-2.2).curveTo(3,-1.4,3,-0).curveTo(3,1.4,2.2,2.2).curveTo(1.4,3,0,3).curveTo(-1.4,3,-2.2,2.2).closePath().moveTo(-1.4,-1.6).curveTo(-1.9,-1,-1.9,-0).curveTo(-1.9,1,-1.4,1.6).curveTo(-0.9,2.1,-0,2.1).curveTo(0.9,2.1,1.4,1.6).curveTo(1.9,1,1.9,-0).curveTo(1.9,-1,1.4,-1.6).curveTo(0.9,-2.1,-0,-2.2).curveTo(-0.9,-2.1,-1.4,-1.6).closePath();
	this.shape_24.setTransform(-67.4,-1.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.beginFill("#FFFFFF").beginStroke().moveTo(1.5,2.9).lineTo(1.5,-2.2).lineTo(-1.5,-2.2).lineTo(-1.5,2.9).lineTo(-2.6,2.9).lineTo(-2.6,-2.9).lineTo(2.6,-2.9).lineTo(2.6,2.9).closePath();
	this.shape_25.setTransform(-74.3,-1.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.6,2.9).lineTo(-2.6,-2.9).lineTo(0.6,-2.9).curveTo(1.4,-2.9,1.9,-2.5).curveTo(2.3,-2.1,2.3,-1.4).curveTo(2.3,-0.5,1.3,-0.1).curveTo(1.8,-0,2.1,0.3).curveTo(2.6,0.7,2.6,1.3).curveTo(2.6,2.1,2.1,2.5).curveTo(1.6,2.9,0.8,2.9).closePath().moveTo(-1.5,2.2).lineTo(0.5,2.2).curveTo(0.9,2.2,1.2,2).curveTo(1.5,1.7,1.4,1.3).curveTo(1.5,0.8,1.2,0.5).curveTo(0.9,0.3,0.4,0.3).lineTo(-1.5,0.3).closePath().moveTo(-1.5,-0.4).lineTo(0.3,-0.4).curveTo(0.7,-0.4,1,-0.6).curveTo(1.2,-0.9,1.2,-1.3).curveTo(1.2,-1.7,1,-2).curveTo(0.8,-2.2,0.3,-2.2).lineTo(-1.5,-2.2).closePath();
	this.shape_26.setTransform(-83.6,-1.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.4,1.8).lineTo(-0.2,0.4).lineTo(-1.4,1.3).lineTo(-1.7,0.6).lineTo(-0.5,-0).lineTo(-1.7,-0.5).lineTo(-1.4,-1.2).lineTo(-0.2,-0.4).lineTo(-0.4,-1.8).lineTo(0.3,-1.8).lineTo(0.2,-0.4).lineTo(1.3,-1.2).lineTo(1.8,-0.5).lineTo(0.4,-0).lineTo(1.8,0.6).lineTo(1.3,1.3).lineTo(0.2,0.4).lineTo(0.3,1.8).closePath();
	this.shape_27.setTransform(-89.2,-4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93.3,-8.4,186.1,14.6);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-6,8.2).curveTo(-7.6,6.1,-7.6,2.9).curveTo(-7.6,-0.4,-6,-2.5).curveTo(-4.1,-4.7,-0.9,-4.7).curveTo(2.5,-4.7,4.1,-2.5).lineTo(4.1,-10.5).lineTo(7.6,-10.5).lineTo(7.6,10.2).lineTo(4.3,10.2).lineTo(4.1,8.2).curveTo(2.5,10.5,-0.9,10.5).curveTo(-4.2,10.5,-6,8.2).closePath().moveTo(-2.9,-0.7).curveTo(-4,0.6,-4,2.9).curveTo(-4,5.2,-2.9,6.4).curveTo(-1.8,7.7,0.1,7.7).curveTo(1.9,7.7,3,6.4).curveTo(4.1,5.2,4.1,2.9).curveTo(4.1,0.6,3.1,-0.7).curveTo(2,-2,0.1,-2).curveTo(-1.8,-2,-2.9,-0.7).closePath();
	this.shape.setTransform(67,-6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-6.9,1.9).lineTo(-6.9,-7.5).lineTo(-3.3,-7.5).lineTo(-3.3,1.5).curveTo(-3.3,4.7,-0.4,4.7).curveTo(1.4,4.7,2.4,3.4).curveTo(3.3,2.2,3.2,0.4).lineTo(3.2,-7.5).lineTo(6.8,-7.5).lineTo(6.8,7.2).lineTo(3.8,7.2).lineTo(3.5,5).curveTo(1.8,7.5,-1.5,7.5).curveTo(-6.8,7.5,-6.9,1.9).closePath();
	this.shape_1.setTransform(49.7,-3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-5.6,5.6).curveTo(-7.8,3.6,-7.8,-0).curveTo(-7.8,-3.6,-5.6,-5.6).curveTo(-3.5,-7.6,-0,-7.6).curveTo(3.5,-7.6,5.7,-5.6).curveTo(7.8,-3.6,7.8,-0).curveTo(7.8,3.6,5.6,5.6).curveTo(3.6,7.6,-0,7.6).curveTo(-3.5,7.6,-5.6,5.6).closePath().moveTo(-3,-3.6).curveTo(-4.2,-2.3,-4.2,0).curveTo(-4.2,2.4,-3,3.6).curveTo(-2,4.9,-0,4.9).curveTo(2,4.9,3,3.6).curveTo(4.2,2.4,4.2,0).curveTo(4.2,-2.3,3,-3.6).curveTo(2,-4.9,-0,-4.9).curveTo(-2,-4.9,-3,-3.6).closePath();
	this.shape_2.setTransform(32.4,-3.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.2,7.3).lineTo(-3.2,-10.5).lineTo(0.3,-10.5).lineTo(0.3,6.6).curveTo(0.3,7.7,1.6,7.7).curveTo(2,7.7,3.2,7.4).lineTo(3.2,10.2).curveTo(1.7,10.5,0.3,10.5).curveTo(-3.2,10.5,-3.2,7.3).closePath();
	this.shape_3.setTransform(20.3,-6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-5.5,7.6).curveTo(-8.5,4.8,-8.5,0.1).curveTo(-8.6,-4.8,-5.4,-7.6).curveTo(-2.5,-10.3,2.4,-10.3).curveTo(5.7,-10.3,8.4,-9.3).lineTo(8,-5.9).curveTo(5.3,-7.1,2.9,-7.1).curveTo(-0.7,-7.1,-2.6,-5.1).curveTo(-4.5,-3.2,-4.5,0.1).curveTo(-4.5,3.3,-2.6,5.1).curveTo(-0.6,7.1,2.9,7.1).curveTo(5.1,7.1,8.2,5.8).lineTo(8.6,9.1).curveTo(5.7,10.3,2.1,10.3).curveTo(-2.6,10.3,-5.5,7.6).closePath();
	this.shape_4.setTransform(5.9,-5.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-5.6,5.6).curveTo(-7.8,3.6,-7.8,-0).curveTo(-7.8,-3.6,-5.6,-5.6).curveTo(-3.6,-7.6,0,-7.6).curveTo(3.5,-7.6,5.7,-5.6).curveTo(7.8,-3.6,7.8,-0).curveTo(7.8,3.6,5.6,5.6).curveTo(3.5,7.6,0,7.6).curveTo(-3.6,7.6,-5.6,5.6).closePath().moveTo(-3,-3.6).curveTo(-4.2,-2.3,-4.2,0).curveTo(-4.2,2.4,-3,3.6).curveTo(-2,4.9,0,4.9).curveTo(2,4.9,3,3.6).curveTo(4.2,2.4,4.2,0).curveTo(4.2,-2.3,3,-3.6).curveTo(2,-4.9,0,-4.9).curveTo(-2,-4.9,-3,-3.6).closePath();
	this.shape_5.setTransform(-12.5,-3.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#FFFFFF").beginStroke().moveTo(3.3,7.5).lineTo(3.3,-1.4).curveTo(3.3,-4.8,0.4,-4.8).curveTo(-1.4,-4.7,-2.4,-3.3).curveTo(-3.3,-2.1,-3.3,-0.4).lineTo(-3.3,7.5).lineTo(-6.8,7.5).lineTo(-6.8,-7.3).lineTo(-3.7,-7.3).lineTo(-3.5,-4.9).curveTo(-1.8,-7.5,1.5,-7.5).curveTo(6.9,-7.5,6.9,-1.9).lineTo(6.9,7.5).closePath();
	this.shape_6.setTransform(-29.9,-3.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-8.1,3.2).curveTo(-8.1,0.6,-6.2,-0.5).curveTo(-4.6,-1.5,-1.2,-1.5).lineTo(2,-1.4).lineTo(2,-2.5).curveTo(2,-4.8,-1.2,-4.8).curveTo(-3.9,-4.8,-6.8,-3.8).lineTo(-7.1,-6.8).curveTo(-4.1,-7.6,-0.8,-7.6).curveTo(2.5,-7.6,3.9,-6.6).curveTo(5.6,-5.4,5.6,-2.6).lineTo(5.6,3.5).curveTo(5.6,4.6,6.7,4.6).curveTo(7.1,4.6,8.1,4.3).lineTo(8.1,7.2).curveTo(6.5,7.5,5.4,7.5).curveTo(2.6,7.5,2.3,5.5).curveTo(0.8,7.6,-2.8,7.6).curveTo(-8.1,7.6,-8.1,3.2).closePath().moveTo(-4.5,3).curveTo(-4.5,5.1,-1.8,5.1).curveTo(-0.1,5.1,0.9,4.4).curveTo(2,3.5,2,2.1).lineTo(2,0.9).lineTo(-0.7,0.7).curveTo(-4.5,0.7,-4.5,3).closePath();
	this.shape_7.setTransform(-46.6,-3.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#FFFFFF").beginStroke().moveTo(4.5,9.9).lineTo(-4.9,-4.4).lineTo(-4.9,0.9).lineTo(-4.8,9.9).lineTo(-8.5,9.9).lineTo(-8.5,-9.9).lineTo(-4.4,-9.9).lineTo(4.9,4.1).lineTo(4.9,-1.1).lineTo(4.8,-9.9).lineTo(8.5,-9.9).lineTo(8.5,9.9).closePath();
	this.shape_8.setTransform(-66.1,-5.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.5,-18.7,156.9,31.8);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.7,3.6).curveTo(-2.9,2.4,-3.1,0.5).lineTo(-4.4,0.5).lineTo(-4.4,4.5).lineTo(-6.1,4.5).lineTo(-6.1,-4.5).lineTo(-4.4,-4.5).lineTo(-4.4,-0.6).lineTo(-3.1,-0.6).curveTo(-2.9,-2.5,-1.7,-3.6).curveTo(-0.4,-4.6,1.5,-4.6).curveTo(3.5,-4.6,4.8,-3.4).curveTo(6.1,-2.1,6.1,-0).curveTo(6.1,2.1,4.8,3.4).curveTo(3.5,4.6,1.5,4.6).curveTo(-0.4,4.6,-1.7,3.6).closePath().moveTo(-0.6,-2.5).curveTo(-1.4,-1.5,-1.4,-0).curveTo(-1.4,1.6,-0.6,2.5).curveTo(0.1,3.3,1.5,3.3).curveTo(2.8,3.3,3.5,2.5).curveTo(4.3,1.6,4.3,-0).curveTo(4.3,-1.5,3.5,-2.5).curveTo(2.8,-3.3,1.5,-3.3).curveTo(0.1,-3.3,-0.6,-2.5).closePath();
	this.shape.setTransform(115.9,5.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.5,3.4).curveTo(-3.8,2.1,-3.8,-0).curveTo(-3.8,-2.2,-2.5,-3.5).curveTo(-1.1,-4.6,1.1,-4.6).curveTo(2.6,-4.6,3.8,-4.2).lineTo(3.7,-2.7).curveTo(2.6,-3.3,1.3,-3.3).curveTo(-0.2,-3.3,-1,-2.6).curveTo(-1.9,-1.8,-2,-0.6).lineTo(2.1,-0.6).lineTo(2.1,0.4).lineTo(-2,0.4).curveTo(-1.9,1.8,-1,2.5).curveTo(-0.2,3.3,1.3,3.3).curveTo(2.4,3.3,3.7,2.7).lineTo(3.8,4).curveTo(2.5,4.6,1.1,4.6).curveTo(-1.1,4.6,-2.5,3.4).closePath();
	this.shape_1.setTransform(104.3,5.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.1,6.1).lineTo(-0.1,-1.6).lineTo(-1.7,-1.6).lineTo(-1.7,-2.9).lineTo(1.6,-2.9).lineTo(1.6,6.1).closePath().moveTo(-0.2,-5.1).curveTo(-0.2,-6.1,0.7,-6.1).curveTo(1.7,-6.1,1.7,-5.1).curveTo(1.7,-4.2,0.7,-4.2).curveTo(-0.2,-4.2,-0.2,-5.1).closePath();
	this.shape_2.setTransform(96.9,4.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.2,4.5).lineTo(-3.2,-4.5).lineTo(3.2,-4.5).lineTo(3.2,-3.3).lineTo(-1.5,-3.3).lineTo(-1.5,4.5).closePath();
	this.shape_3.setTransform(91.9,5.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.4,3.4).curveTo(-4.7,2.1,-4.6,-0).curveTo(-4.7,-2.1,-3.4,-3.4).curveTo(-2.1,-4.6,0,-4.6).curveTo(2.1,-4.6,3.4,-3.4).curveTo(4.6,-2.1,4.6,-0).curveTo(4.6,2.1,3.4,3.4).curveTo(2.1,4.6,0,4.6).curveTo(-2.1,4.6,-3.4,3.4).closePath().moveTo(-2.1,-2.5).curveTo(-3,-1.5,-2.9,-0).curveTo(-3,1.6,-2.1,2.5).curveTo(-1.4,3.3,0,3.3).curveTo(1.4,3.3,2.2,2.5).curveTo(2.9,1.6,2.9,-0).curveTo(2.9,-1.5,2.2,-2.5).curveTo(1.4,-3.3,0,-3.3).curveTo(-1.4,-3.3,-2.1,-2.5).closePath();
	this.shape_4.setTransform(82.1,5.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.3,4.4).lineTo(-4.3,3).lineTo(-3.8,3.1).curveTo(-3.2,3.1,-2.9,2.7).curveTo(-2.7,2.3,-2.6,1.1).lineTo(-2.3,-4.5).lineTo(4.3,-4.5).lineTo(4.3,4.4).lineTo(2.6,4.4).lineTo(2.6,-3.4).lineTo(-0.8,-3.4).lineTo(-1,1.3).curveTo(-1.1,3,-1.7,3.7).curveTo(-2.2,4.5,-3.5,4.5).lineTo(-4.3,4.4).closePath();
	this.shape_5.setTransform(71.2,5.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.4,3.4).curveTo(-4.6,2.1,-4.6,-0).curveTo(-4.6,-2.1,-3.4,-3.4).curveTo(-2.1,-4.6,-0,-4.6).curveTo(2.1,-4.6,3.3,-3.4).curveTo(4.6,-2.1,4.7,-0).curveTo(4.6,2.1,3.3,3.4).curveTo(2.1,4.6,-0,4.6).curveTo(-2.1,4.6,-3.4,3.4).closePath().moveTo(-2.2,-2.5).curveTo(-2.9,-1.5,-3,-0).curveTo(-2.9,1.6,-2.2,2.5).curveTo(-1.3,3.3,-0,3.3).curveTo(1.4,3.3,2.1,2.5).curveTo(3,1.6,2.9,-0).curveTo(3,-1.5,2.1,-2.5).curveTo(1.4,-3.3,-0,-3.3).curveTo(-1.3,-3.3,-2.2,-2.5).closePath();
	this.shape_6.setTransform(61.4,5.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#FFFFFF").beginStroke().moveTo(2.3,4.5).lineTo(2.3,0.6).lineTo(-2.3,0.6).lineTo(-2.3,4.5).lineTo(-4,4.5).lineTo(-4,-4.5).lineTo(-2.3,-4.5).lineTo(-2.3,-0.6).lineTo(2.3,-0.6).lineTo(2.3,-4.5).lineTo(4,-4.5).lineTo(4,4.5).closePath();
	this.shape_7.setTransform(50.8,5.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#FFFFFF").beginStroke().moveTo(2.4,4.5).lineTo(-0,1).lineTo(-2.6,4.5).lineTo(-4.3,4.5).lineTo(-1.1,0.1).lineTo(-4.3,-4.5).lineTo(-2.4,-4.5).lineTo(-0,-1.1).lineTo(2.5,-4.5).lineTo(4.2,-4.5).lineTo(1,-0.2).lineTo(4.3,4.5).closePath();
	this.shape_8.setTransform(41,5.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.1,3.4).curveTo(-4.4,2.2,-4.4,-0).curveTo(-4.4,-2.1,-3.2,-3.4).curveTo(-1.9,-4.6,0.2,-4.6).curveTo(2.2,-4.6,3.3,-3.4).curveTo(4.4,-2.2,4.4,-0.3).lineTo(4.3,0.6).lineTo(-2.6,0.6).curveTo(-2.6,1.9,-1.7,2.7).curveTo(-0.8,3.3,0.7,3.4).curveTo(2.2,3.3,3.9,2.6).lineTo(4,3.9).curveTo(2.4,4.6,0.5,4.6).curveTo(-1.8,4.6,-3.1,3.4).closePath().moveTo(2.8,-0.6).curveTo(2.8,-1.8,2.1,-2.6).curveTo(1.4,-3.4,0.3,-3.4).curveTo(-2.3,-3.4,-2.6,-0.6).lineTo(2.8,-0.6).lineTo(2.8,-0.6).closePath();
	this.shape_9.setTransform(31.5,5.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.9,4.5).lineTo(-0.9,-3.3).lineTo(-4,-3.3).lineTo(-4,-4.5).lineTo(4,-4.5).lineTo(4,-3.3).lineTo(0.8,-3.3).lineTo(0.8,4.5).closePath();
	this.shape_10.setTransform(22.3,5.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.6,4).lineTo(-3.5,2.6).lineTo(-2.2,3).curveTo(-1.3,3.4,-0.5,3.4).curveTo(1.9,3.4,1.9,1.8).curveTo(1.9,0.5,-0.4,0.4).lineTo(-1.8,0.4).lineTo(-1.8,-0.6).lineTo(-0.4,-0.6).curveTo(1.7,-0.6,1.7,-2).curveTo(1.7,-3.4,-0.4,-3.4).curveTo(-1.2,-3.3,-3.2,-2.8).lineTo(-3.4,-4.1).curveTo(-1.7,-4.6,-0,-4.6).curveTo(1.6,-4.6,2.5,-4.1).curveTo(3.5,-3.4,3.5,-2.3).curveTo(3.5,-0.6,1.8,-0.1).curveTo(3.6,0.3,3.6,2).curveTo(3.6,3.3,2.5,4).curveTo(1.5,4.6,-0.2,4.6).curveTo(-2,4.6,-3.6,4).closePath();
	this.shape_11.setTransform(9.5,5.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.5,4).lineTo(-3.4,2.6).curveTo(-1.6,3.4,-0.3,3.4).curveTo(1.8,3.4,1.8,2.1).curveTo(1.8,1.5,1.2,1.2).curveTo(0.8,1,-0.6,0.6).curveTo(-2,0.3,-2.6,-0.1).curveTo(-3.5,-0.8,-3.5,-2).curveTo(-3.6,-3.3,-2.5,-4).curveTo(-1.7,-4.6,-0,-4.6).curveTo(1.7,-4.6,3.1,-4).lineTo(3,-2.7).curveTo(1.3,-3.4,0.2,-3.4).curveTo(-1.8,-3.4,-1.8,-2.1).curveTo(-1.8,-1.5,-1.2,-1.2).lineTo(0.5,-0.7).curveTo(2,-0.3,2.6,0.1).curveTo(3.6,0.8,3.6,2).curveTo(3.6,3.3,2.5,4).curveTo(1.5,4.6,-0.1,4.6).curveTo(-2,4.6,-3.5,4).closePath();
	this.shape_12.setTransform(-2.9,5.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.5,6).lineTo(-4.5,-5.9).lineTo(-3,-5.9).lineTo(-2.9,-4.4).curveTo(-1.9,-6,0.4,-6).curveTo(2.4,-6,3.5,-4.6).curveTo(4.5,-3.4,4.5,-1.4).curveTo(4.5,0.6,3.5,1.9).curveTo(2.4,3.2,0.4,3.2).curveTo(-1.7,3.2,-2.8,1.7).lineTo(-2.8,6).closePath().moveTo(-2,-3.8).curveTo(-2.9,-2.9,-2.9,-1.4).curveTo(-2.8,0.1,-2.1,1).curveTo(-1.3,1.9,-0.1,1.9).curveTo(1.3,1.9,2,1).curveTo(2.8,0.1,2.8,-1.4).curveTo(2.8,-2.9,2,-3.8).curveTo(1.3,-4.7,0,-4.7).curveTo(-1.3,-4.7,-2,-3.8).closePath();
	this.shape_13.setTransform(-12.4,7.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.1,6.1).lineTo(-0.1,-1.6).lineTo(-1.7,-1.6).lineTo(-1.7,-2.9).lineTo(1.7,-2.9).lineTo(1.7,6.1).closePath().moveTo(-0.2,-5.1).curveTo(-0.2,-6.1,0.7,-6.1).curveTo(1.7,-6.1,1.7,-5.1).curveTo(1.7,-4.2,0.7,-4.2).curveTo(-0.2,-4.2,-0.2,-5.1).closePath();
	this.shape_14.setTransform(-21.1,4.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.7,4.6).lineTo(-1.7,-6.4).lineTo(-0,-6.4).lineTo(-0,4.3).curveTo(-0,5,0.7,5).curveTo(1.1,5,1.7,4.8).lineTo(1.7,6.1).curveTo(0.9,6.3,0.2,6.4).curveTo(-1.7,6.3,-1.7,4.6).closePath();
	this.shape_15.setTransform(-24.6,4.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.1,6.1).lineTo(-0.1,-1.6).lineTo(-1.7,-1.6).lineTo(-1.7,-2.9).lineTo(1.7,-2.9).lineTo(1.7,6.1).closePath().moveTo(-0.2,-5.1).curveTo(-0.2,-6.1,0.7,-6.1).curveTo(1.7,-6.1,1.7,-5.1).curveTo(1.7,-4.2,0.7,-4.2).curveTo(-0.2,-4.2,-0.2,-5.1).closePath();
	this.shape_16.setTransform(-30.5,4.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#FFFFFF").beginStroke().moveTo(2.3,6.3).lineTo(2.3,0.8).curveTo(2.3,-1.5,0.3,-1.5).curveTo(-1,-1.5,-1.8,-0.5).curveTo(-2.3,0.3,-2.3,1.5).lineTo(-2.3,6.3).lineTo(-4,6.3).lineTo(-4,-6.3).lineTo(-2.3,-6.3).lineTo(-2.3,-1.2).curveTo(-1.3,-2.8,0.7,-2.8).curveTo(4.1,-2.8,4.1,0.6).lineTo(4.1,6.3).closePath();
	this.shape_17.setTransform(-37.4,4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.8,6).lineTo(-4.8,-6).lineTo(0.8,-6).curveTo(2.6,-6,3.8,-4.9).curveTo(4.8,-3.8,4.8,-2.1).curveTo(4.8,-0.4,3.7,0.7).curveTo(2.6,1.8,0.8,1.8).lineTo(-3,1.8).lineTo(-3,6).closePath().moveTo(-3,0.4).lineTo(0.4,0.4).curveTo(1.5,0.4,2.3,-0.3).curveTo(3,-1,3,-2.1).curveTo(3,-3.2,2.3,-3.9).curveTo(1.5,-4.6,0.4,-4.6).lineTo(-3,-4.6).closePath();
	this.shape_18.setTransform(-48.1,4.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#FFFFFF").beginStroke().moveTo(2.2,4.5).lineTo(2.2,1.1).lineTo(-0.3,1.1).lineTo(-2.1,4.5).lineTo(-3.9,4.5).lineTo(-2,1).curveTo(-2.8,0.7,-3.4,0).curveTo(-3.8,-0.7,-3.8,-1.7).curveTo(-3.8,-2.9,-3,-3.7).curveTo(-2.3,-4.5,-1,-4.5).lineTo(3.9,-4.5).lineTo(3.9,4.5).closePath().moveTo(-1.7,-2.9).curveTo(-2.2,-2.5,-2.2,-1.7).curveTo(-2.2,-0.9,-1.8,-0.4).curveTo(-1.3,0,-0.5,0).lineTo(2.2,0).lineTo(2.2,-3.3).lineTo(-0.5,-3.3).curveTo(-1.2,-3.3,-1.7,-2.9).closePath();
	this.shape_19.setTransform(-63.9,5.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.5,6).lineTo(-4.5,-5.9).lineTo(-3,-5.9).lineTo(-2.9,-4.4).curveTo(-1.9,-6,0.4,-6).curveTo(2.4,-6,3.5,-4.6).curveTo(4.5,-3.4,4.5,-1.4).curveTo(4.5,0.6,3.5,1.9).curveTo(2.4,3.2,0.4,3.2).curveTo(-1.8,3.2,-2.8,1.7).lineTo(-2.8,6).closePath().moveTo(-2,-3.8).curveTo(-2.9,-2.9,-2.8,-1.4).curveTo(-2.8,0.1,-2.1,1).curveTo(-1.3,1.9,-0.1,1.9).curveTo(1.3,1.9,2,1).curveTo(2.8,0.1,2.8,-1.4).curveTo(2.8,-2.9,2,-3.8).curveTo(1.3,-4.7,0,-4.7).curveTo(-1.3,-4.7,-2,-3.8).closePath();
	this.shape_20.setTransform(-73.7,7.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.9,4.5).lineTo(-0.9,-3.3).lineTo(-4,-3.3).lineTo(-4,-4.5).lineTo(4,-4.5).lineTo(4,-3.3).lineTo(0.8,-3.3).lineTo(0.8,4.5).closePath();
	this.shape_21.setTransform(-83.5,5.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.1,6.1).lineTo(-0.1,-1.6).lineTo(-1.7,-1.6).lineTo(-1.7,-2.9).lineTo(1.6,-2.9).lineTo(1.6,6.1).closePath().moveTo(-0.3,-5.1).curveTo(-0.3,-6.1,0.7,-6.1).curveTo(1.7,-6.1,1.7,-5.1).curveTo(1.7,-4.2,0.7,-4.2).curveTo(-0.3,-4.2,-0.3,-5.1).closePath();
	this.shape_22.setTransform(-90.5,4.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4,4.5).lineTo(-4,-4.5).lineTo(1,-4.5).curveTo(2.1,-4.5,2.9,-3.9).curveTo(3.5,-3.2,3.6,-2.2).curveTo(3.6,-0.6,2,-0.1).curveTo(2.7,-0,3.3,0.4).curveTo(4,1,4,2.1).curveTo(4,3.2,3.2,3.8).curveTo(2.4,4.5,1.2,4.5).closePath().moveTo(-2.3,3.4).lineTo(0.7,3.4).curveTo(1.4,3.4,1.8,3).curveTo(2.2,2.6,2.2,1.9).curveTo(2.2,1.3,1.8,0.9).curveTo(1.4,0.5,0.6,0.5).lineTo(-2.3,0.5).closePath().moveTo(-2.3,-0.6).lineTo(0.5,-0.6).curveTo(1.1,-0.6,1.5,-1).curveTo(1.9,-1.4,1.9,-1.9).curveTo(1.9,-2.6,1.5,-3).curveTo(1.1,-3.4,0.4,-3.4).lineTo(-2.3,-3.4).closePath();
	this.shape_23.setTransform(-97,5.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.4,3.4).curveTo(-4.7,2.1,-4.6,-0).curveTo(-4.7,-2.1,-3.4,-3.4).curveTo(-2.1,-4.6,-0,-4.6).curveTo(2.1,-4.6,3.4,-3.4).curveTo(4.7,-2.1,4.6,-0).curveTo(4.7,2.1,3.4,3.4).curveTo(2.1,4.6,-0,4.6).curveTo(-2.1,4.6,-3.4,3.4).closePath().moveTo(-2.1,-2.5).curveTo(-2.9,-1.5,-2.9,-0).curveTo(-2.9,1.6,-2.1,2.5).curveTo(-1.4,3.3,-0,3.3).curveTo(1.4,3.3,2.1,2.5).curveTo(3,1.6,2.9,-0).curveTo(3,-1.5,2.1,-2.5).curveTo(1.4,-3.3,-0,-3.3).curveTo(-1.4,-3.3,-2.1,-2.5).closePath();
	this.shape_24.setTransform(-107.6,5.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.beginFill("#FFFFFF").beginStroke().moveTo(2.3,4.5).lineTo(2.3,-3.3).lineTo(-2.3,-3.3).lineTo(-2.3,4.5).lineTo(-4,4.5).lineTo(-4,-4.5).lineTo(4,-4.5).lineTo(4,4.5).closePath();
	this.shape_25.setTransform(-118.2,5.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.1,6.1).lineTo(-0.1,-1.6).lineTo(-1.7,-1.6).lineTo(-1.7,-2.9).lineTo(1.6,-2.9).lineTo(1.6,6.1).closePath().moveTo(-0.3,-5.2).curveTo(-0.3,-6.1,0.7,-6.1).curveTo(1.7,-6.1,1.7,-5.2).curveTo(1.7,-4.3,0.7,-4.3).curveTo(-0.3,-4.3,-0.3,-5.2).closePath();
	this.shape_26.setTransform(84,-14.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.beginFill("#FFFFFF").beginStroke().moveTo(2.2,4.5).lineTo(2.2,1).curveTo(0.8,1.8,-0.8,1.8).curveTo(-2.2,1.8,-3.1,1).curveTo(-3.9,0.2,-3.9,-1.3).lineTo(-3.9,-4.5).lineTo(-2.3,-4.5).lineTo(-2.3,-1.5).curveTo(-2.3,0.5,-0.3,0.5).curveTo(1,0.5,2.2,-0.2).lineTo(2.2,-4.5).lineTo(3.9,-4.5).lineTo(3.9,4.5).closePath();
	this.shape_27.setTransform(77,-13.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.8,1.9).curveTo(-4.8,0.3,-3.7,-0.3).curveTo(-2.7,-0.9,-0.7,-0.9).lineTo(1.5,-0.8).lineTo(1.5,-1.6).curveTo(1.5,-3.3,-0.7,-3.3).curveTo(-2.3,-3.3,-4,-2.7).lineTo(-4.1,-4.1).curveTo(-2.4,-4.6,-0.5,-4.6).curveTo(1.4,-4.6,2.3,-4).curveTo(3.2,-3.4,3.2,-1.7).lineTo(3.2,2.4).curveTo(3.2,3.1,3.9,3.1).lineTo(4.8,3).lineTo(4.8,4.3).lineTo(3.4,4.5).curveTo(1.7,4.5,1.7,3.2).curveTo(0.6,4.6,-1.6,4.6).curveTo(-4.8,4.6,-4.8,1.9).closePath().moveTo(-3.1,1.8).curveTo(-3.1,3.4,-1.1,3.4).curveTo(0,3.4,0.7,2.8).curveTo(1.5,2.2,1.5,1.2).lineTo(1.5,0.3).lineTo(-0.5,0.2).curveTo(-3.1,0.2,-3.1,1.8).closePath();
	this.shape_28.setTransform(67.7,-13);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4,4.5).lineTo(-4,-4.5).lineTo(0.9,-4.5).curveTo(2.2,-4.5,2.8,-3.9).curveTo(3.6,-3.2,3.6,-2.2).curveTo(3.5,-0.6,1.9,-0.1).curveTo(2.8,-0,3.3,0.4).curveTo(4,1,4,2.1).curveTo(4,3.2,3.2,3.8).curveTo(2.5,4.5,1.2,4.5).closePath().moveTo(-2.3,3.4).lineTo(0.7,3.4).curveTo(1.4,3.4,1.8,3).curveTo(2.2,2.6,2.2,1.9).curveTo(2.2,1.3,1.8,0.9).curveTo(1.4,0.5,0.7,0.5).lineTo(-2.3,0.5).closePath().moveTo(-2.3,-0.6).lineTo(0.5,-0.6).curveTo(1.1,-0.6,1.6,-1).curveTo(1.9,-1.4,1.9,-1.9).curveTo(1.9,-2.6,1.5,-3).curveTo(1.1,-3.4,0.5,-3.4).lineTo(-2.3,-3.4).closePath();
	this.shape_29.setTransform(57.7,-13.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.9,5.9).lineTo(-0.8,3.1).lineTo(-4.5,-5.9).lineTo(-2.7,-5.9).lineTo(0.2,1.4).lineTo(2.8,-5.9).lineTo(4.5,-5.9).lineTo(-0.1,5.9).closePath();
	this.shape_30.setTransform(47.8,-11.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.beginFill("#FFFFFF").beginStroke().moveTo(5,4.5).lineTo(2.9,0.6).lineTo(0.9,0.6).lineTo(0.9,4.5).lineTo(-0.9,4.5).lineTo(-0.9,0.6).lineTo(-2.9,0.6).lineTo(-5,4.5).lineTo(-6.9,4.5).lineTo(-4.2,-0.1).lineTo(-6.8,-4.5).lineTo(-4.9,-4.5).lineTo(-2.8,-0.7).lineTo(-0.9,-0.7).lineTo(-0.9,-4.5).lineTo(0.9,-4.5).lineTo(0.9,-0.7).lineTo(2.8,-0.7).lineTo(4.9,-4.5).lineTo(6.8,-4.5).lineTo(4.2,-0.1).lineTo(6.9,4.5).closePath();
	this.shape_31.setTransform(36,-13.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.3,3.4).curveTo(-4.7,2.2,-4.7,-0).curveTo(-4.7,-2.2,-3.3,-3.4).curveTo(-2.1,-4.6,-0,-4.6).curveTo(2.1,-4.6,3.3,-3.4).curveTo(4.7,-2.2,4.7,-0).curveTo(4.7,2.2,3.3,3.4).curveTo(2.1,4.6,-0,4.6).curveTo(-2.1,4.6,-3.3,3.4).closePath().moveTo(-2.2,-2.4).curveTo(-2.9,-1.6,-3,-0).curveTo(-2.9,1.6,-2.2,2.4).curveTo(-1.3,3.3,-0,3.3).curveTo(1.3,3.3,2.2,2.4).curveTo(2.9,1.6,3,-0).curveTo(2.9,-1.6,2.2,-2.4).curveTo(1.3,-3.3,-0,-3.3).curveTo(-1.3,-3.3,-2.2,-2.4).closePath();
	this.shape_32.setTransform(23.4,-13);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.3,4.4).lineTo(-4.3,3).lineTo(-3.8,3.1).curveTo(-3.2,3.1,-2.9,2.7).curveTo(-2.7,2.3,-2.6,1.1).lineTo(-2.3,-4.5).lineTo(4.3,-4.5).lineTo(4.3,4.4).lineTo(2.6,4.4).lineTo(2.6,-3.4).lineTo(-0.8,-3.4).lineTo(-1,1.3).curveTo(-1.1,3,-1.7,3.7).curveTo(-2.2,4.5,-3.5,4.5).lineTo(-4.3,4.4).closePath();
	this.shape_33.setTransform(12.5,-13);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.4,3.4).curveTo(-4.7,2.2,-4.6,-0).curveTo(-4.7,-2.2,-3.4,-3.4).curveTo(-2.1,-4.6,0,-4.6).curveTo(2.1,-4.6,3.4,-3.4).curveTo(4.7,-2.2,4.6,-0).curveTo(4.7,2.2,3.4,3.4).curveTo(2.1,4.6,0,4.6).curveTo(-2.1,4.6,-3.4,3.4).closePath().moveTo(-2.1,-2.4).curveTo(-3,-1.6,-2.9,-0).curveTo(-3,1.6,-2.1,2.4).curveTo(-1.4,3.3,0,3.3).curveTo(1.4,3.3,2.1,2.4).curveTo(2.9,1.6,2.9,-0).curveTo(2.9,-1.6,2.1,-2.4).curveTo(1.4,-3.3,0,-3.3).curveTo(-1.4,-3.3,-2.1,-2.4).closePath();
	this.shape_34.setTransform(2.8,-13);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4,4.5).lineTo(-4,-4.5).lineTo(0.9,-4.5).curveTo(2.2,-4.5,2.8,-3.9).curveTo(3.6,-3.2,3.6,-2.2).curveTo(3.5,-0.6,1.9,-0.1).curveTo(2.8,-0,3.3,0.4).curveTo(4,1,4,2.1).curveTo(4,3.2,3.2,3.8).curveTo(2.4,4.5,1.2,4.5).closePath().moveTo(-2.3,3.4).lineTo(0.7,3.4).curveTo(1.4,3.4,1.8,3).curveTo(2.2,2.6,2.2,1.9).curveTo(2.2,1.3,1.8,0.9).curveTo(1.4,0.5,0.7,0.5).lineTo(-2.3,0.5).closePath().moveTo(-2.3,-0.6).lineTo(0.5,-0.6).curveTo(1.1,-0.6,1.6,-1).curveTo(1.9,-1.4,1.9,-1.9).curveTo(1.9,-2.6,1.5,-3).curveTo(1.1,-3.4,0.4,-3.4).lineTo(-2.3,-3.4).closePath();
	this.shape_35.setTransform(-7.2,-13.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.6,4).lineTo(-3.5,2.6).lineTo(-2.2,3.1).curveTo(-1.3,3.3,-0.5,3.3).curveTo(1.9,3.3,1.9,1.8).curveTo(1.9,0.5,-0.4,0.4).lineTo(-1.8,0.4).lineTo(-1.8,-0.6).lineTo(-0.4,-0.6).curveTo(1.7,-0.6,1.7,-2).curveTo(1.7,-3.3,-0.4,-3.3).curveTo(-1.2,-3.4,-3.2,-2.8).lineTo(-3.4,-4.1).curveTo(-1.7,-4.6,-0,-4.6).curveTo(1.6,-4.6,2.5,-4.1).curveTo(3.5,-3.5,3.5,-2.3).curveTo(3.5,-0.6,1.8,-0.1).curveTo(3.6,0.2,3.6,2).curveTo(3.6,3.4,2.5,4).curveTo(1.5,4.6,-0.2,4.6).curveTo(-2,4.6,-3.6,4).closePath();
	this.shape_36.setTransform(-16.9,-13);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0,6.1).lineTo(-0,-1.6).lineTo(-1.7,-1.6).lineTo(-1.7,-2.9).lineTo(1.7,-2.9).lineTo(1.7,6.1).closePath().moveTo(-0.3,-5.2).curveTo(-0.3,-6.1,0.7,-6.1).curveTo(1.7,-6.1,1.7,-5.2).curveTo(1.7,-4.3,0.7,-4.3).curveTo(-0.3,-4.3,-0.3,-5.2).closePath();
	this.shape_37.setTransform(-28.1,-14.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.beginFill("#FFFFFF").beginStroke().moveTo(2.3,4.5).lineTo(2.3,0.6).lineTo(-2.3,0.6).lineTo(-2.3,4.5).lineTo(-4,4.5).lineTo(-4,-4.5).lineTo(-2.3,-4.5).lineTo(-2.3,-0.6).lineTo(2.3,-0.6).lineTo(2.3,-4.5).lineTo(4,-4.5).lineTo(4,4.5).closePath();
	this.shape_38.setTransform(-35.2,-13.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.beginFill("#FFFFFF").beginStroke().moveTo(2.4,5.8).lineTo(2.4,1.6).lineTo(2.4,-0.9).lineTo(2.4,-0.9).lineTo(-2.3,5.8).lineTo(-4.1,5.8).lineTo(-4.1,-3.2).lineTo(-2.4,-3.2).lineTo(-2.4,1.2).lineTo(-2.4,3.4).lineTo(-2.4,3.4).lineTo(2.3,-3.2).lineTo(4.1,-3.2).lineTo(4.1,5.8).closePath().moveTo(-2.3,-4.8).lineTo(-2.2,-5.8).curveTo(-1,-5.5,0,-5.5).curveTo(1.1,-5.5,2.3,-5.8).lineTo(2.3,-4.8).curveTo(1.2,-4.4,0,-4.4).curveTo(-1.1,-4.4,-2.3,-4.8).closePath();
	this.shape_39.setTransform(-45.8,-14.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.1,6.1).lineTo(-0.1,-1.6).lineTo(-1.7,-1.6).lineTo(-1.7,-2.9).lineTo(1.7,-2.9).lineTo(1.7,6.1).closePath().moveTo(-0.2,-5.2).curveTo(-0.2,-6.1,0.7,-6.1).curveTo(1.7,-6.1,1.7,-5.2).curveTo(1.7,-4.3,0.7,-4.3).curveTo(-0.2,-4.3,-0.2,-5.2).closePath();
	this.shape_40.setTransform(-53.9,-14.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.beginFill("#FFFFFF").beginStroke().moveTo(3.3,5.5).lineTo(3.3,3.4).lineTo(-4.7,3.4).lineTo(-4.7,-5.5).lineTo(-3,-5.5).lineTo(-3,2.3).lineTo(1.6,2.3).lineTo(1.6,-5.5).lineTo(3.3,-5.5).lineTo(3.3,2.3).lineTo(4.7,2.3).lineTo(4.7,5.5).closePath();
	this.shape_41.setTransform(-60.8,-12);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.8,1.9).curveTo(-4.8,0.3,-3.7,-0.3).curveTo(-2.7,-0.9,-0.7,-0.9).lineTo(1.5,-0.8).lineTo(1.5,-1.6).curveTo(1.5,-3.3,-0.7,-3.3).curveTo(-2.3,-3.3,-4,-2.7).lineTo(-4.1,-4.1).curveTo(-2.4,-4.6,-0.5,-4.6).curveTo(1.4,-4.6,2.3,-4).curveTo(3.2,-3.4,3.2,-1.7).lineTo(3.2,2.4).curveTo(3.2,3.1,3.9,3.1).lineTo(4.8,3).lineTo(4.8,4.3).lineTo(3.4,4.5).curveTo(1.7,4.5,1.7,3.2).curveTo(0.6,4.6,-1.6,4.6).curveTo(-4.8,4.6,-4.8,1.9).closePath().moveTo(-3.1,1.8).curveTo(-3.1,3.4,-1.1,3.4).curveTo(0,3.4,0.7,2.8).curveTo(1.5,2.2,1.5,1.2).lineTo(1.5,0.3).lineTo(-0.5,0.2).curveTo(-3.1,0.2,-3.1,1.8).closePath();
	this.shape_42.setTransform(-71.5,-13);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4,4.5).lineTo(-4,-4.5).lineTo(0.9,-4.5).curveTo(2.1,-4.5,2.9,-3.9).curveTo(3.5,-3.2,3.5,-2.2).curveTo(3.5,-0.6,2,-0.1).curveTo(2.7,-0,3.3,0.4).curveTo(4,1,4,2.1).curveTo(4,3.2,3.2,3.8).curveTo(2.5,4.5,1.3,4.5).closePath().moveTo(-2.3,3.4).lineTo(0.7,3.4).curveTo(1.4,3.4,1.8,3).curveTo(2.2,2.6,2.2,1.9).curveTo(2.2,1.3,1.8,0.9).curveTo(1.4,0.5,0.6,0.5).lineTo(-2.3,0.5).closePath().moveTo(-2.3,-0.6).lineTo(0.5,-0.6).curveTo(1.2,-0.6,1.5,-1).curveTo(1.9,-1.4,1.9,-1.9).curveTo(1.9,-2.6,1.5,-3).curveTo(1.1,-3.4,0.5,-3.4).lineTo(-2.3,-3.4).closePath();
	this.shape_43.setTransform(-81.5,-13.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.3,3.4).curveTo(-4.7,2.2,-4.7,-0).curveTo(-4.7,-2.2,-3.3,-3.4).curveTo(-2.1,-4.6,-0,-4.6).curveTo(2.1,-4.6,3.3,-3.4).curveTo(4.6,-2.2,4.7,-0).curveTo(4.6,2.2,3.3,3.4).curveTo(2.1,4.6,-0,4.6).curveTo(-2.1,4.6,-3.3,3.4).closePath().moveTo(-2.2,-2.4).curveTo(-2.9,-1.6,-3,-0).curveTo(-2.9,1.6,-2.2,2.4).curveTo(-1.3,3.3,-0,3.3).curveTo(1.3,3.3,2.1,2.4).curveTo(3,1.6,3,-0).curveTo(3,-1.6,2.1,-2.4).curveTo(1.3,-3.3,-0,-3.3).curveTo(-1.3,-3.3,-2.2,-2.4).closePath();
	this.shape_44.setTransform(-92.1,-13);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.beginFill("#FFFFFF").beginStroke().moveTo(2.3,4.5).lineTo(2.3,0.6).lineTo(-2.3,0.6).lineTo(-2.3,4.5).lineTo(-4,4.5).lineTo(-4,-4.5).lineTo(-2.3,-4.5).lineTo(-2.3,-0.6).lineTo(2.3,-0.6).lineTo(2.3,-4.5).lineTo(4,-4.5).lineTo(4,4.5).closePath();
	this.shape_45.setTransform(-102.8,-13.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.beginFill("#FFFFFF").beginStroke().moveTo(2.3,4.5).lineTo(2.3,0.6).lineTo(-2.3,0.6).lineTo(-2.3,4.5).lineTo(-4,4.5).lineTo(-4,-4.5).lineTo(-2.3,-4.5).lineTo(-2.3,-0.6).lineTo(2.3,-0.6).lineTo(2.3,-4.5).lineTo(4,-4.5).lineTo(4,4.5).closePath();
	this.shape_46.setTransform(-113.4,-13.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.9,6).lineTo(-0.9,-6).lineTo(0.9,-6).lineTo(0.9,6).closePath();
	this.shape_47.setTransform(-121,-14.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125.2,-23.2,249.8,39.5);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#214762").beginStroke().moveTo(4,8.8).lineTo(4,1.5).lineTo(4.1,-3.1).lineTo(4,-3.1).lineTo(-3.9,8.8).lineTo(-8.3,8.8).lineTo(-8.3,-8.9).lineTo(-4,-8.9).lineTo(-4,-1.5).lineTo(-4.1,2.8).lineTo(-4,2.8).lineTo(3.8,-8.9).lineTo(8.3,-8.9).lineTo(8.3,8.8).closePath();
	this.shape.setTransform(93.6,-7.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#214762").beginStroke().moveTo(-8.2,8.8).lineTo(-8.2,-8.8).lineTo(2.1,-8.8).curveTo(4.5,-8.8,5.9,-7.7).curveTo(7.4,-6.5,7.4,-4.3).curveTo(7.4,-1.3,4.1,-0.3).curveTo(5.7,-0.1,6.7,0.8).curveTo(8.2,2,8.2,4).curveTo(8.2,6.3,6.7,7.6).curveTo(5.2,8.8,2.8,8.8).closePath().moveTo(-3.9,6.1).lineTo(1.2,6.1).curveTo(2.3,6.1,3.1,5.4).curveTo(3.7,4.7,3.8,3.6).curveTo(3.8,2.5,3.1,1.8).curveTo(2.4,1.2,1.1,1.2).lineTo(-3.9,1.2).closePath().moveTo(-3.9,-1.5).lineTo(0.8,-1.5).curveTo(1.9,-1.5,2.5,-2.1).curveTo(3.2,-2.7,3.1,-3.7).curveTo(3.1,-4.8,2.5,-5.4).curveTo(1.8,-6.1,0.7,-6.1).lineTo(-3.9,-6.1).closePath();
	this.shape_1.setTransform(73.8,-7.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#214762").beginStroke().moveTo(-6.3,6.7).curveTo(-8.7,4.4,-8.7,0.1).curveTo(-8.7,-4.1,-6.4,-6.6).curveTo(-3.9,-9.1,0.4,-9.1).curveTo(4.3,-9.1,6.6,-6.8).curveTo(8.7,-4.6,8.7,-0.6).lineTo(8.6,1.3).lineTo(-4.4,1.3).curveTo(-4.3,6,1.4,6).curveTo(4.6,6,7.7,4.5).lineTo(8,7.9).curveTo(4.8,9.1,0.9,9.1).curveTo(-3.7,9.1,-6.3,6.7).closePath().moveTo(4.8,-1.4).curveTo(4.8,-3.5,3.6,-4.7).curveTo(2.6,-6,0.5,-6).curveTo(-3.6,-6,-4.3,-1.4).lineTo(4.8,-1.4).lineTo(4.8,-1.4).closePath();
	this.shape_2.setTransform(45.4,-7.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#214762").beginStroke().moveTo(-2.1,8.8).lineTo(-2.1,-5.9).lineTo(-8.1,-5.9).lineTo(-8.1,-8.8).lineTo(8.1,-8.8).lineTo(8.1,-5.9).lineTo(2.2,-5.9).lineTo(2.2,8.8).closePath();
	this.shape_3.setTransform(27.1,-7.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#214762").beginStroke().moveTo(-4.9,6.8).curveTo(-7.7,4.3,-7.7,0).curveTo(-7.7,-4.4,-4.9,-6.8).curveTo(-2.3,-9.1,2.2,-9.1).curveTo(5.2,-9.1,7.7,-8.2).lineTo(7.3,-4.7).curveTo(5.1,-5.8,2.8,-5.8).curveTo(-2.3,-5.8,-3.2,-1.5).lineTo(4.3,-1.5).lineTo(4.3,1.3).lineTo(-3.2,1.3).curveTo(-2.5,5.8,2.8,5.8).curveTo(4.9,5.8,7.3,4.7).lineTo(7.6,8.1).curveTo(5.1,9.1,2.2,9.1).curveTo(-2.3,9.1,-4.9,6.8).closePath();
	this.shape_4.setTransform(10.2,-7.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#214762").beginStroke().moveTo(-9.7,3.8).curveTo(-9.7,0.7,-7.5,-0.6).curveTo(-5.5,-1.8,-1.5,-1.8).lineTo(2.4,-1.6).lineTo(2.4,-3).curveTo(2.4,-5.8,-1.5,-5.8).curveTo(-4.7,-5.8,-8.1,-4.6).lineTo(-8.5,-8.1).curveTo(-4.9,-9.1,-0.9,-9.1).curveTo(3,-9.1,4.7,-7.9).curveTo(6.7,-6.5,6.7,-3.1).lineTo(6.7,4.2).curveTo(6.7,5.5,8,5.5).curveTo(8.5,5.5,9.7,5.2).lineTo(9.7,8.6).curveTo(7.8,9,6.5,9).curveTo(3.2,9,2.8,6.6).curveTo(1,9.1,-3.3,9.1).curveTo(-9.7,9.1,-9.7,3.8).closePath().moveTo(-5.3,3.5).curveTo(-5.3,6.1,-2.1,6.1).curveTo(-0.1,6.1,1.1,5.2).curveTo(2.4,4.2,2.4,2.5).lineTo(2.4,1).lineTo(-0.8,0.9).curveTo(-5.3,0.9,-5.3,3.5).closePath();
	this.shape_5.setTransform(-8.3,-7.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#214762").beginStroke().moveTo(3.9,8.8).lineTo(3.9,1.5).lineTo(-3.9,1.5).lineTo(-3.9,8.8).lineTo(-8.2,8.8).lineTo(-8.2,-8.8).lineTo(-3.9,-8.8).lineTo(-3.9,-1.6).lineTo(3.9,-1.6).lineTo(3.9,-8.8).lineTo(8.2,-8.8).lineTo(8.2,8.8).closePath();
	this.shape_6.setTransform(-29.3,-7.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#214762").beginStroke().moveTo(-7.4,7.9).lineTo(-7.1,4.5).lineTo(-4.7,5.5).curveTo(-2.9,6.1,-1.3,6.1).curveTo(3.1,6.1,3.1,3.5).curveTo(3.1,1.3,-1.2,1.3).lineTo(-3.9,1.3).lineTo(-3.9,-1.5).lineTo(-1.2,-1.5).curveTo(2.7,-1.5,2.7,-3.7).curveTo(2.7,-6,-0.9,-6).curveTo(-2.2,-6,-3.9,-5.6).lineTo(-6.6,-4.7).lineTo(-7,-8.1).curveTo(-4,-9.1,0,-9.1).curveTo(7.1,-9.1,7.1,-4.5).curveTo(7.2,-1.3,4,-0.2).curveTo(7.4,0.7,7.4,3.9).curveTo(7.4,6.7,5.1,8).curveTo(2.9,9.1,-0.5,9.1).curveTo(-4.2,9.1,-7.4,7.9).closePath();
	this.shape_7.setTransform(-48.3,-7.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#214762").beginStroke().moveTo(4,8.8).lineTo(4,1.5).lineTo(4.1,-3.1).lineTo(4,-3.1).lineTo(-3.9,8.8).lineTo(-8.3,8.8).lineTo(-8.3,-8.9).lineTo(-4,-8.9).lineTo(-4,-1.5).lineTo(-4.1,2.8).lineTo(-4,2.8).lineTo(3.8,-8.9).lineTo(8.3,-8.9).lineTo(8.3,8.8).closePath();
	this.shape_8.setTransform(-75.1,-7.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#214762").beginStroke().moveTo(5.2,11.9).lineTo(5.2,2.3).curveTo(2.3,4.6,-2,4.6).curveTo(-5.5,4.6,-7.5,2.9).curveTo(-9.8,1,-9.8,-2.9).lineTo(-9.8,-11.9).lineTo(-5.3,-11.9).lineTo(-5.3,-3.5).curveTo(-5.3,1.2,-0.5,1.2).curveTo(3.1,1.2,5.2,-1.2).lineTo(5.2,-11.9).lineTo(9.8,-11.9).lineTo(9.8,11.9).closePath();
	this.shape_9.setTransform(-98,-10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-111.5,-26.1,217.8,38.1);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#214762").beginStroke().moveTo(-2,6.5).curveTo(-2,5.3,-0.7,5.3).curveTo(0.6,5.3,0.6,6.5).curveTo(0.6,7.7,-0.7,7.7).curveTo(-2,7.7,-2,6.5).closePath().moveTo(-1.7,3.4).lineTo(-1.7,1.9).curveTo(-1.7,0.9,-1.1,0).curveTo(-0.7,-0.5,0.3,-1.2).lineTo(1.6,-2.4).curveTo(2.2,-3,2.2,-3.9).curveTo(2.2,-4.9,1.4,-5.5).curveTo(0.7,-6,-0.5,-6).curveTo(-2,-6,-4,-5.1).lineTo(-4.3,-6.8).curveTo(-2.4,-7.7,-0.4,-7.7).curveTo(1.6,-7.7,2.9,-6.8).curveTo(4.3,-5.9,4.3,-4).curveTo(4.3,-2.8,3.7,-1.9).curveTo(3.2,-1.3,2.3,-0.6).lineTo(0.9,0.5).curveTo(0.2,1.2,0.2,2.1).lineTo(0.2,3.4).closePath();
	this.shape.setTransform(117.4,-4.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#214762").beginStroke().moveTo(2.5,5.6).lineTo(-0.3,0.8).lineTo(-2.8,0.8).lineTo(-2.8,5.6).lineTo(-4.9,5.6).lineTo(-4.9,-5.6).lineTo(-2.8,-5.6).lineTo(-2.8,-0.9).lineTo(-0.3,-0.9).lineTo(2.4,-5.6).lineTo(4.8,-5.6).lineTo(1.4,-0.1).lineTo(4.9,5.6).closePath();
	this.shape_1.setTransform(107.4,-2.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#214762").beginStroke().moveTo(-2.1,4.5).curveTo(-3.6,3.1,-3.8,0.7).lineTo(-5.4,0.7).lineTo(-5.4,5.6).lineTo(-7.6,5.6).lineTo(-7.6,-5.5).lineTo(-5.4,-5.5).lineTo(-5.4,-0.8).lineTo(-3.8,-0.8).curveTo(-3.6,-3.1,-2,-4.4).curveTo(-0.5,-5.8,1.9,-5.8).curveTo(4.5,-5.7,6,-4.2).curveTo(7.6,-2.7,7.6,-0).curveTo(7.6,2.7,6,4.3).curveTo(4.4,5.8,1.9,5.7).curveTo(-0.5,5.8,-2.1,4.5).closePath().moveTo(-0.7,-3.1).curveTo(-1.7,-1.9,-1.7,0.1).curveTo(-1.7,1.9,-0.7,3).curveTo(0.2,4.1,1.9,4.1).curveTo(3.5,4.1,4.5,3).curveTo(5.5,1.9,5.5,0.1).curveTo(5.5,-1.9,4.5,-3.1).curveTo(3.5,-4.1,1.9,-4.1).curveTo(0.2,-4.1,-0.7,-3.1).closePath();
	this.shape_2.setTransform(92.4,-2.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#214762").beginStroke().moveTo(-5.4,5.5).lineTo(-5.4,3.8).lineTo(-4.7,3.9).curveTo(-3.9,3.9,-3.6,3.4).curveTo(-3.4,2.9,-3.3,1.3).lineTo(-2.8,-5.6).lineTo(5.4,-5.6).lineTo(5.4,5.5).lineTo(3.3,5.5).lineTo(3.3,-4.2).lineTo(-1,-4.2).lineTo(-1.3,1.6).curveTo(-1.4,3.8,-2.1,4.7).curveTo(-2.8,5.6,-4.3,5.6).lineTo(-5.4,5.5).closePath();
	this.shape_3.setTransform(76.3,-2.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#214762").beginStroke().moveTo(-6,2.4).curveTo(-6,0.5,-4.6,-0.4).curveTo(-3.3,-1.1,-0.8,-1.1).lineTo(2,-0.9).lineTo(2,-2).curveTo(2,-4.1,-0.8,-4.1).curveTo(-2.9,-4.1,-5,-3.4).lineTo(-5.1,-5.2).curveTo(-2.9,-5.7,-0.6,-5.8).curveTo(1.8,-5.8,2.9,-5).curveTo(4.1,-4.2,4,-2).lineTo(4,3).curveTo(4.1,4,4.9,3.9).lineTo(6,3.7).lineTo(6,5.5).curveTo(5,5.7,4.3,5.7).curveTo(2.1,5.7,2.1,4.1).curveTo(0.8,5.7,-2,5.7).curveTo(-6.1,5.7,-6,2.4).closePath().moveTo(-3.9,2.3).curveTo(-3.8,4.2,-1.4,4.3).curveTo(0.1,4.2,1,3.6).curveTo(1.9,2.8,2,1.6).lineTo(2,0.4).lineTo(-0.5,0.2).curveTo(-3.9,0.2,-3.9,2.3).closePath();
	this.shape_4.setTransform(64.8,-2.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#214762").beginStroke().moveTo(4.5,5.6).lineTo(4.5,0.9).curveTo(4.5,-1.1,4.7,-3.1).lineTo(4.6,-3.1).lineTo(0.8,4.6).lineTo(-1,4.6).lineTo(-4.7,-3.1).lineTo(-4.8,-3.1).lineTo(-4.7,0.8).lineTo(-4.7,5.6).lineTo(-6.6,5.6).lineTo(-6.6,-5.6).lineTo(-3.8,-5.6).lineTo(0.1,2.4).lineTo(3.9,-5.6).lineTo(6.6,-5.6).lineTo(6.6,5.6).closePath();
	this.shape_5.setTransform(50,-2.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#214762").beginStroke().moveTo(-8.2,5.6).lineTo(-8.2,-5.6).lineTo(-6,-5.6).lineTo(-6,4.2).lineTo(-1.1,4.2).lineTo(-1.1,-5.6).lineTo(1.1,-5.6).lineTo(1.1,4.2).lineTo(6.1,4.2).lineTo(6.1,-5.6).lineTo(8.2,-5.6).lineTo(8.2,5.6).closePath();
	this.shape_6.setTransform(26.7,-2.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#214762").beginStroke().moveTo(-6.1,2.4).curveTo(-6.1,0.5,-4.6,-0.4).curveTo(-3.4,-1.1,-0.9,-1.1).lineTo(1.9,-0.9).lineTo(1.9,-2).curveTo(1.9,-4.1,-0.9,-4.1).curveTo(-2.8,-4.1,-5,-3.4).lineTo(-5.2,-5.2).curveTo(-3,-5.7,-0.6,-5.8).curveTo(1.8,-5.8,2.8,-5).curveTo(4.1,-4.2,4.1,-2).lineTo(4.1,3).curveTo(4,4,4.9,3.9).lineTo(6,3.7).lineTo(6.1,5.5).curveTo(5,5.7,4.3,5.7).curveTo(2.2,5.7,2.1,4.1).curveTo(0.8,5.7,-1.9,5.7).curveTo(-6.1,5.7,-6.1,2.4).closePath().moveTo(-3.8,2.3).curveTo(-3.9,4.2,-1.4,4.3).curveTo(0.1,4.2,0.9,3.6).curveTo(1.9,2.8,1.9,1.6).lineTo(1.9,0.4).lineTo(-0.5,0.2).curveTo(-3.9,0.2,-3.8,2.3).closePath();
	this.shape_7.setTransform(11,-2.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#214762").beginStroke().moveTo(-5,5.6).lineTo(-5,-5.6).lineTo(1.2,-5.6).curveTo(2.7,-5.6,3.6,-4.9).curveTo(4.4,-4.1,4.5,-2.7).curveTo(4.5,-0.8,2.4,-0.2).curveTo(3.4,-0.1,4.1,0.5).curveTo(5,1.3,5,2.6).curveTo(5,4,4,4.8).curveTo(3.1,5.6,1.5,5.6).closePath().moveTo(-2.8,4.2).lineTo(0.9,4.2).curveTo(1.8,4.2,2.2,3.7).curveTo(2.8,3.2,2.8,2.4).curveTo(2.8,1.5,2.3,1.1).curveTo(1.7,0.6,0.9,0.6).lineTo(-2.8,0.6).closePath().moveTo(-2.8,-0.8).lineTo(0.6,-0.8).curveTo(1.5,-0.8,2,-1.2).curveTo(2.4,-1.7,2.4,-2.5).curveTo(2.4,-3.3,1.9,-3.7).curveTo(1.4,-4.2,0.6,-4.2).lineTo(-2.8,-4.2).closePath();
	this.shape_8.setTransform(-1.6,-2.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#214762").beginStroke().moveTo(-3,4.3).curveTo(-4.7,2.7,-4.7,-0).curveTo(-4.7,-2.7,-3,-4.3).curveTo(-1.4,-5.8,1.4,-5.8).curveTo(3.3,-5.8,4.7,-5.2).lineTo(4.6,-3.4).curveTo(3.2,-4.1,1.7,-4.1).curveTo(-0.2,-4.1,-1.3,-3.2).curveTo(-2.3,-2.3,-2.5,-0.8).lineTo(2.7,-0.8).lineTo(2.7,0.6).lineTo(-2.6,0.6).curveTo(-2.4,2.2,-1.3,3.1).curveTo(-0.2,4.1,1.7,4.1).curveTo(3.1,4.2,4.6,3.4).lineTo(4.7,5.2).curveTo(3.1,5.7,1.4,5.7).curveTo(-1.4,5.7,-3,4.3).closePath();
	this.shape_9.setTransform(-19,-2.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#214762").beginStroke().moveTo(-6,2.4).curveTo(-6,0.5,-4.6,-0.4).curveTo(-3.3,-1.1,-0.8,-1.1).lineTo(2,-0.9).lineTo(2,-2).curveTo(2,-4.1,-0.8,-4.1).curveTo(-2.9,-4.1,-5,-3.4).lineTo(-5.1,-5.2).curveTo(-2.9,-5.7,-0.6,-5.8).curveTo(1.8,-5.8,2.9,-5).curveTo(4.1,-4.2,4,-2).lineTo(4,3).curveTo(4.1,4,4.9,3.9).lineTo(6,3.7).lineTo(6,5.5).curveTo(5,5.7,4.3,5.7).curveTo(2.1,5.7,2.1,4.1).curveTo(0.8,5.7,-2,5.7).curveTo(-6.1,5.7,-6,2.4).closePath().moveTo(-3.9,2.3).curveTo(-3.8,4.2,-1.4,4.3).curveTo(0.1,4.2,1,3.6).curveTo(1.9,2.8,2,1.6).lineTo(2,0.4).lineTo(-0.5,0.2).curveTo(-3.9,0.2,-3.9,2.3).closePath();
	this.shape_10.setTransform(-30.6,-2.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#214762").beginStroke().moveTo(3,5.6).lineTo(-0.1,1.2).lineTo(-3.2,5.6).lineTo(-5.4,5.6).lineTo(-1.3,0.1).lineTo(-5.4,-5.6).lineTo(-3,-5.6).lineTo(0,-1.4).lineTo(3.1,-5.6).lineTo(5.3,-5.6).lineTo(1.3,-0.2).lineTo(5.4,5.6).closePath();
	this.shape_11.setTransform(-42.9,-2.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#214762").beginStroke().moveTo(3,5.6).lineTo(3,0.4).lineTo(3,-2.8).lineTo(3,-2.8).lineTo(-2.9,5.6).lineTo(-5.1,5.6).lineTo(-5.1,-5.6).lineTo(-3,-5.6).lineTo(-3,-0.2).lineTo(-3,2.7).lineTo(2.9,-5.6).lineTo(5.1,-5.6).lineTo(5.1,5.6).closePath();
	this.shape_12.setTransform(-55.3,-2.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#214762").beginStroke().moveTo(4.9,6.9).lineTo(4.8,4.3).lineTo(-4.8,4.3).lineTo(-4.9,6.9).lineTo(-6.6,6.9).lineTo(-6.6,2.8).lineTo(-5.2,2.8).curveTo(-3.7,1.2,-3.5,-6.9).lineTo(4.8,-6.9).lineTo(4.8,2.8).lineTo(6.6,2.8).lineTo(6.6,6.9).closePath().moveTo(-2.9,2.8).lineTo(2.6,2.8).lineTo(2.6,-5.5).lineTo(-1.5,-5.5).curveTo(-1.7,1.1,-2.9,2.8).closePath();
	this.shape_13.setTransform(-68.9,-1.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#214762").beginStroke().moveTo(4.5,5.6).lineTo(4.5,0.9).curveTo(4.5,-1.1,4.7,-3.1).lineTo(4.5,-3.1).lineTo(0.8,4.6).lineTo(-1,4.6).lineTo(-4.7,-3.1).lineTo(-4.8,-3.1).lineTo(-4.7,0.8).lineTo(-4.7,5.6).lineTo(-6.6,5.6).lineTo(-6.6,-5.6).lineTo(-3.8,-5.6).lineTo(0,2.4).lineTo(3.9,-5.6).lineTo(6.6,-5.6).lineTo(6.6,5.6).closePath();
	this.shape_14.setTransform(-89.2,-2.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#214762").beginStroke().moveTo(3,5.6).lineTo(3,0.4).lineTo(3,-2.8).lineTo(3,-2.8).lineTo(-2.9,5.6).lineTo(-5.1,5.6).lineTo(-5.1,-5.6).lineTo(-3,-5.6).lineTo(-3,-0.2).lineTo(-3,2.7).lineTo(2.9,-5.6).lineTo(5.1,-5.6).lineTo(5.1,5.6).closePath();
	this.shape_15.setTransform(-104,-2.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#214762").beginStroke().moveTo(2.8,5.6).lineTo(2.8,1.2).curveTo(0.9,2.2,-1,2.2).curveTo(-2.8,2.2,-3.8,1.3).curveTo(-4.9,0.2,-4.9,-1.7).lineTo(-4.9,-5.6).lineTo(-2.8,-5.6).lineTo(-2.8,-1.9).curveTo(-2.8,0.6,-0.4,0.6).curveTo(1.3,0.6,2.8,-0.3).lineTo(2.8,-5.6).lineTo(4.9,-5.6).lineTo(4.9,5.6).closePath();
	this.shape_16.setTransform(-117.1,-2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-124.5,-14.6,248.8,24.9);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#214762").beginStroke().moveTo(3.4,6.2).lineTo(-0,1.3).lineTo(-3.6,6.2).lineTo(-6.1,6.2).lineTo(-1.5,0.1).lineTo(-6,-6.2).lineTo(-3.3,-6.2).lineTo(0,-1.6).lineTo(3.5,-6.2).lineTo(5.9,-6.2).lineTo(1.5,-0.3).lineTo(6.1,6.2).closePath();
	this.shape.setTransform(72.7,-2.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#214762").beginStroke().moveTo(3.3,6.2).lineTo(3.3,0.4).lineTo(3.4,-3.1).lineTo(3.3,-3.1).lineTo(-3.2,6.2).lineTo(-5.7,6.2).lineTo(-5.7,-6.2).lineTo(-3.3,-6.2).lineTo(-3.3,-0.2).lineTo(-3.4,3).lineTo(-3.3,3).lineTo(3.2,-6.2).lineTo(5.7,-6.2).lineTo(5.7,6.2).closePath();
	this.shape_1.setTransform(58.9,-2.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#214762").beginStroke().moveTo(5.4,7.7).lineTo(5.4,4.8).lineTo(-5.4,4.8).lineTo(-5.4,7.7).lineTo(-7.3,7.7).lineTo(-7.3,3.2).lineTo(-5.9,3.2).curveTo(-4.2,1.3,-3.9,-7.7).lineTo(5.4,-7.7).lineTo(5.4,3.2).lineTo(7.3,3.2).lineTo(7.3,7.7).closePath().moveTo(-3.3,3.2).lineTo(3,3.2).lineTo(3,-6.1).lineTo(-1.8,-6.1).curveTo(-2,1.2,-3.3,3.2).closePath();
	this.shape_2.setTransform(43.6,-1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#214762").beginStroke().moveTo(-4.7,4.8).curveTo(-6.5,3,-6.5,-0).curveTo(-6.5,-3,-4.7,-4.8).curveTo(-3,-6.5,-0,-6.5).curveTo(3,-6.5,4.7,-4.8).curveTo(6.5,-3,6.5,-0).curveTo(6.5,3,4.7,4.8).curveTo(3,6.5,-0,6.5).curveTo(-3,6.5,-4.7,4.8).closePath().moveTo(-3,-3.4).curveTo(-4.1,-2.2,-4.1,0.1).curveTo(-4.1,2.2,-3,3.4).curveTo(-1.9,4.6,-0,4.6).curveTo(1.9,4.6,2.9,3.4).curveTo(4.1,2.2,4.1,0.1).curveTo(4.1,-2.2,2.9,-3.4).curveTo(1.9,-4.6,-0,-4.6).curveTo(-1.9,-4.6,-3,-3.4).closePath();
	this.shape_3.setTransform(28.7,-2.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#214762").beginStroke().moveTo(3.3,6.2).lineTo(3.3,-4.7).lineTo(-3.2,-4.7).lineTo(-3.2,6.2).lineTo(-5.7,6.2).lineTo(-5.7,-6.2).lineTo(5.7,-6.2).lineTo(5.7,6.2).closePath();
	this.shape_4.setTransform(13.8,-2.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#214762").beginStroke().moveTo(3.3,6.2).lineTo(3.3,0.7).lineTo(-3.2,0.7).lineTo(-3.2,6.2).lineTo(-5.6,6.2).lineTo(-5.6,-6.2).lineTo(-3.2,-6.2).lineTo(-3.2,-0.8).lineTo(3.3,-0.8).lineTo(3.3,-6.2).lineTo(5.6,-6.2).lineTo(5.6,6.2).closePath();
	this.shape_5.setTransform(-7,-2.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#214762").beginStroke().moveTo(-4.4,4.7).curveTo(-6.1,3.1,-6.1,0.1).curveTo(-6.1,-2.9,-4.4,-4.7).curveTo(-2.6,-6.5,0.3,-6.5).curveTo(3,-6.5,4.6,-4.8).curveTo(6.1,-3.1,6.1,-0.4).lineTo(6,0.7).lineTo(-3.7,0.7).curveTo(-3.6,2.7,-2.4,3.7).curveTo(-1.1,4.7,0.9,4.7).curveTo(3.1,4.7,5.4,3.6).lineTo(5.5,5.6).curveTo(3.4,6.4,0.7,6.5).curveTo(-2.5,6.5,-4.4,4.7).closePath().moveTo(3.8,-0.7).curveTo(3.8,-2.6,2.9,-3.6).curveTo(2,-4.7,0.4,-4.7).curveTo(-3.2,-4.7,-3.7,-0.7).lineTo(3.8,-0.7).lineTo(3.8,-0.7).closePath();
	this.shape_6.setTransform(-21.4,-2.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#214762").beginStroke().moveTo(6.9,6.2).lineTo(4,0.8).lineTo(1.2,0.8).lineTo(1.2,6.2).lineTo(-1.2,6.2).lineTo(-1.2,0.8).lineTo(-4,0.8).lineTo(-7,6.2).lineTo(-9.7,6.2).lineTo(-5.9,-0.2).lineTo(-9.6,-6.2).lineTo(-6.9,-6.2).lineTo(-3.9,-1).lineTo(-1.2,-1).lineTo(-1.2,-6.2).lineTo(1.2,-6.2).lineTo(1.2,-1).lineTo(3.9,-1).lineTo(6.9,-6.2).lineTo(9.6,-6.2).lineTo(5.9,-0.2).lineTo(9.7,6.2).closePath();
	this.shape_7.setTransform(-38.6,-2.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#214762").beginStroke().moveTo(-4.7,4.8).curveTo(-6.5,3,-6.5,-0).curveTo(-6.5,-3,-4.7,-4.8).curveTo(-3,-6.5,0,-6.5).curveTo(2.9,-6.5,4.7,-4.8).curveTo(6.5,-3,6.5,-0).curveTo(6.5,3,4.7,4.8).curveTo(2.9,6.5,0,6.5).curveTo(-3,6.5,-4.7,4.8).closePath().moveTo(-3,-3.4).curveTo(-4.1,-2.2,-4.1,0.1).curveTo(-4.1,2.2,-3,3.4).curveTo(-1.9,4.6,0,4.6).curveTo(1.9,4.6,2.9,3.4).curveTo(4.1,2.2,4.1,0.1).curveTo(4.1,-2.2,2.9,-3.4).curveTo(1.9,-4.6,0,-4.6).curveTo(-1.9,-4.6,-3,-3.4).closePath();
	this.shape_8.setTransform(-56.2,-2.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#214762").beginStroke().moveTo(3.6,8.4).lineTo(-0.9,1.1).lineTo(-4.1,1.1).lineTo(-4.1,8.4).lineTo(-6.6,8.4).lineTo(-6.6,-8.4).lineTo(-4.1,-8.4).lineTo(-4.1,-1.1).lineTo(-1,-1.1).lineTo(3.7,-8.4).lineTo(6.5,-8.4).lineTo(1.2,-0.2).lineTo(6.6,8.4).closePath();
	this.shape_9.setTransform(-70.6,-4.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.1,-16.1,162,27.5);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#214762").beginStroke().moveTo(4,8.9).lineTo(4,2.5).lineTo(-0.2,2.5).lineTo(-3.6,8.9).lineTo(-8.3,8.9).lineTo(-4.4,2.2).curveTo(-8,0.8,-8,-3.3).curveTo(-8,-5.8,-6.4,-7.4).curveTo(-4.8,-8.9,-2.1,-8.9).lineTo(8.3,-8.9).lineTo(8.3,8.9).closePath().moveTo(-3.9,-3.3).curveTo(-3.9,-1.9,-3,-1.1).curveTo(-2.1,-0.3,-0.7,-0.3).lineTo(4,-0.3).lineTo(4,-6.1).lineTo(-0.6,-6.1).curveTo(-3.9,-6.1,-3.9,-3.3).closePath();
	this.shape.setTransform(105.7,-3.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#214762").beginStroke().moveTo(4,8.9).lineTo(4,1.5).lineTo(-4,1.5).lineTo(-4,8.9).lineTo(-8.3,8.9).lineTo(-8.3,-8.9).lineTo(-4,-8.9).lineTo(-4,-1.6).lineTo(4,-1.6).lineTo(4,-8.9).lineTo(8.3,-8.9).lineTo(8.3,8.9).closePath();
	this.shape_1.setTransform(85.9,-3.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#214762").beginStroke().moveTo(4,8.9).lineTo(4,1.5).lineTo(-4,1.5).lineTo(-4,8.9).lineTo(-8.3,8.9).lineTo(-8.3,-8.9).lineTo(-4,-8.9).lineTo(-4,-1.6).lineTo(4,-1.6).lineTo(4,-8.9).lineTo(8.3,-8.9).lineTo(8.3,8.9).closePath();
	this.shape_2.setTransform(64.8,-3.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#214762").beginStroke().moveTo(-6.4,6.8).curveTo(-8.9,4.4,-8.9,0.1).curveTo(-8.9,-4.2,-6.4,-6.7).curveTo(-3.9,-9.2,0.5,-9.2).curveTo(4.4,-9.2,6.6,-6.9).curveTo(8.9,-4.6,8.8,-0.6).lineTo(8.8,1.4).lineTo(-4.4,1.4).curveTo(-4.3,6,1.5,6).curveTo(4.7,6,7.9,4.6).lineTo(8.1,8).curveTo(4.9,9.2,1,9.2).curveTo(-3.8,9.2,-6.4,6.8).closePath().moveTo(4.9,-1.4).curveTo(4.9,-3.5,3.7,-4.8).curveTo(2.6,-6.1,0.6,-6.1).curveTo(-3.7,-6.1,-4.3,-1.4).lineTo(4.9,-1.4).lineTo(4.9,-1.4).closePath();
	this.shape_3.setTransform(44.3,-3.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#214762").beginStroke().moveTo(3.8,8.9).lineTo(3.8,2.3).curveTo(0.9,3.7,-2,3.7).curveTo(-4.7,3.7,-6.3,2.3).curveTo(-8.1,0.7,-8.1,-2.5).lineTo(-8.1,-8.9).lineTo(-3.8,-8.9).lineTo(-3.8,-3.1).curveTo(-3.8,0.4,-0.6,0.4).curveTo(1.9,0.4,3.8,-0.8).lineTo(3.8,-8.9).lineTo(8.1,-8.9).lineTo(8.1,8.9).closePath();
	this.shape_4.setTransform(23.9,-3.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#214762").beginStroke().moveTo(-9.9,3.8).curveTo(-9.9,0.7,-7.5,-0.7).curveTo(-5.6,-1.8,-1.5,-1.8).lineTo(2.5,-1.7).lineTo(2.5,-3.1).curveTo(2.5,-5.9,-1.5,-5.9).curveTo(-4.8,-5.9,-8.2,-4.7).lineTo(-8.6,-8.3).curveTo(-4.9,-9.2,-0.9,-9.2).curveTo(3,-9.2,4.8,-8).curveTo(6.8,-6.6,6.8,-3.2).lineTo(6.8,4.2).curveTo(6.8,5.6,8.1,5.6).curveTo(8.6,5.6,9.8,5.3).lineTo(9.9,8.7).curveTo(7.9,9.1,6.5,9.1).curveTo(3.2,9.1,2.8,6.7).curveTo(1,9.2,-3.4,9.2).curveTo(-9.9,9.2,-9.9,3.8).closePath().moveTo(-5.4,3.6).curveTo(-5.4,6.2,-2.1,6.2).curveTo(-0.2,6.2,1.1,5.3).curveTo(2.5,4.3,2.5,2.5).lineTo(2.5,1).lineTo(-0.8,0.9).curveTo(-5.4,0.9,-5.4,3.6).closePath();
	this.shape_5.setTransform(4.9,-3.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#214762").beginStroke().moveTo(3.9,8.9).lineTo(3.9,1.5).lineTo(-4,1.5).lineTo(-4,8.9).lineTo(-8.3,8.9).lineTo(-8.3,-8.9).lineTo(-4,-8.9).lineTo(-4,-1.6).lineTo(3.9,-1.6).lineTo(3.9,-8.9).lineTo(8.3,-8.9).lineTo(8.3,8.9).closePath();
	this.shape_6.setTransform(-16.3,-3.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#214762").beginStroke().moveTo(-7.5,8).lineTo(-7.2,4.6).lineTo(-4.8,5.5).curveTo(-2.9,6.1,-1.3,6.1).curveTo(3.1,6.1,3.1,3.5).curveTo(3,1.3,-1.3,1.3).lineTo(-4,1.3).lineTo(-4,-1.5).lineTo(-1.2,-1.5).curveTo(2.7,-1.5,2.7,-3.8).curveTo(2.7,-6.1,-0.9,-6.1).curveTo(-2.2,-6.1,-4,-5.7).lineTo(-6.7,-4.8).lineTo(-7.1,-8.2).curveTo(-4,-9.2,0,-9.2).curveTo(7.1,-9.2,7.1,-4.5).curveTo(7.2,-1.4,4.1,-0.2).curveTo(7.5,0.7,7.5,4).curveTo(7.5,6.7,5.1,8.1).curveTo(3,9.2,-0.5,9.2).curveTo(-4.2,9.2,-7.5,8).closePath();
	this.shape_7.setTransform(-35.6,-3.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#214762").beginStroke().moveTo(-5,6.9).curveTo(-7.8,4.4,-7.8,0).curveTo(-7.8,-4.4,-5,-6.9).curveTo(-2.3,-9.2,2.3,-9.2).curveTo(5.4,-9.2,7.7,-8.4).lineTo(7.4,-4.8).curveTo(5.2,-5.9,2.9,-5.9).curveTo(-2.4,-5.9,-3.2,-1.5).lineTo(4.4,-1.5).lineTo(4.4,1.3).lineTo(-3.2,1.3).curveTo(-2.5,5.9,2.9,5.9).curveTo(5,5.9,7.4,4.8).lineTo(7.7,8.2).curveTo(5.2,9.2,2.3,9.2).curveTo(-2.3,9.2,-5,6.9).closePath();
	this.shape_8.setTransform(-61,-3.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#214762").beginStroke().moveTo(-9.8,3.8).curveTo(-9.9,0.7,-7.6,-0.7).curveTo(-5.5,-1.8,-1.4,-1.8).lineTo(2.4,-1.7).lineTo(2.4,-3.1).curveTo(2.4,-5.9,-1.5,-5.9).curveTo(-4.8,-5.9,-8.2,-4.7).lineTo(-8.6,-8.3).curveTo(-5,-9.2,-1,-9.2).curveTo(3,-9.2,4.8,-8).curveTo(6.8,-6.6,6.8,-3.2).lineTo(6.8,4.2).curveTo(6.8,5.6,8,5.6).curveTo(8.7,5.6,9.8,5.3).lineTo(9.8,8.7).curveTo(7.9,9.1,6.6,9.1).curveTo(3.2,9.1,2.8,6.7).curveTo(1,9.2,-3.3,9.2).curveTo(-9.8,9.2,-9.8,3.8).closePath().moveTo(-5.4,3.6).curveTo(-5.4,6.2,-2.2,6.2).curveTo(-0.1,6.2,1.1,5.3).curveTo(2.4,4.3,2.4,2.5).lineTo(2.4,1).lineTo(-0.8,0.9).curveTo(-5.4,0.9,-5.4,3.6).closePath();
	this.shape_9.setTransform(-79.6,-3.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#214762").beginStroke().moveTo(6.7,8.9).lineTo(6.7,2.4).curveTo(6.7,-1,6.9,-4).lineTo(6.8,-4).lineTo(1.6,7.5).lineTo(-1.8,7.5).lineTo(-7,-4).lineTo(-7.1,-4).curveTo(-7,-2,-7,2.3).lineTo(-7,8.9).lineTo(-10.9,8.9).lineTo(-10.9,-8.9).lineTo(-5.1,-8.9).lineTo(0.1,2.6).lineTo(5.3,-8.9).lineTo(10.9,-8.9).lineTo(10.9,8.9).closePath();
	this.shape_10.setTransform(-103.6,-3.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.4,-22.3,236.6,37.8);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.2,4.8,156.9,31.8);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.8,4).curveTo(-5,2.4,-5,0.2).curveTo(-5,-2.3,-3.7,-4).curveTo(-2.3,-5.9,0.1,-5.9).curveTo(2.9,-5.9,4.1,-3.3).curveTo(4.4,-2.6,4.5,-1.3).lineTo(-3.3,-1.3).curveTo(-3.1,0.5,-2.6,1.6).curveTo(-1.5,4.2,0.8,4.1).curveTo(2,4.1,3.2,3.2).curveTo(3.9,2.6,4.6,1.5).lineTo(5,1.6).curveTo(4.3,3.3,3.5,4.1).curveTo(1.9,5.9,-0.2,5.8).curveTo(-2.4,5.8,-3.8,4).closePath().moveTo(2,-2.1).curveTo(1.7,-4.9,-0.4,-5).curveTo(-2.7,-4.9,-3.2,-2.1).lineTo(2,-2.1).lineTo(2,-2.1).closePath();
	this.shape.setTransform(49.7,-3.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-9.2,5.6).lineTo(-9.2,5.2).curveTo(-8.2,5.2,-7.9,5).curveTo(-7.5,4.7,-7.5,3.9).lineTo(-7.5,-3.9).curveTo(-7.5,-4.7,-7.9,-5).curveTo(-8.2,-5.2,-9.2,-5.2).lineTo(-9.2,-5.6).lineTo(-3.9,-5.6).lineTo(-3.9,-5.2).curveTo(-5.1,-5.2,-5.3,-4.8).curveTo(-5.4,-4.5,-5.4,-3.9).lineTo(-5.4,3.5).curveTo(-5.4,4.5,-4.9,4.7).curveTo(-4.5,4.9,-3.1,4.9).curveTo(-1.5,4.9,-1.2,4.5).curveTo(-1.1,4.2,-1.1,3.5).lineTo(-1.1,-3.9).curveTo(-1.1,-4.7,-1.4,-5).curveTo(-1.7,-5.2,-2.7,-5.2).lineTo(-2.7,-5.6).lineTo(2.7,-5.6).lineTo(2.7,-5.2).curveTo(1.7,-5.2,1.4,-5).curveTo(1,-4.7,1,-3.9).lineTo(1,3.5).curveTo(1,4.5,1.5,4.7).curveTo(2,4.9,3.4,4.9).curveTo(5,4.9,5.2,4.5).curveTo(5.4,4.2,5.4,3.5).lineTo(5.4,-3.9).curveTo(5.4,-4.7,5.1,-5).curveTo(4.8,-5.2,3.9,-5.2).lineTo(3.9,-5.6).lineTo(9.2,-5.6).lineTo(9.2,-5.2).curveTo(8.2,-5.2,7.9,-5).curveTo(7.5,-4.7,7.5,-3.9).lineTo(7.5,3.9).curveTo(7.5,4.7,7.9,5).curveTo(8.3,5.2,9.2,5.2).lineTo(9.2,5.6).closePath();
	this.shape_1.setTransform(34.8,-3.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.9,8.5).lineTo(-2.9,8.2).curveTo(-2,8.1,-1.6,7.8).curveTo(-1,7.5,-1,6.5).lineTo(-1,0.5).lineTo(-1.1,-0.7).curveTo(-1.3,-1.4,-1.9,-1.4).lineTo(-2.9,-1.3).lineTo(-2.9,-1.6).lineTo(1.1,-2.9).lineTo(1.1,6.5).curveTo(1.1,7.5,1.6,7.8).curveTo(1.9,8.1,2.9,8.2).lineTo(2.9,8.5).closePath().moveTo(-1,-6.3).curveTo(-1.5,-6.7,-1.5,-7.2).curveTo(-1.5,-7.8,-1.1,-8.1).curveTo(-0.8,-8.5,-0.2,-8.5).curveTo(0.4,-8.5,0.7,-8.1).curveTo(1.1,-7.8,1.1,-7.2).curveTo(1.1,-6.7,0.7,-6.3).curveTo(0.4,-6,-0.2,-6).curveTo(-0.7,-6,-1,-6.3).closePath();
	this.shape_2.setTransform(22,-6.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(0.7,5.6).lineTo(0.7,5.2).curveTo(1.9,5.2,2.1,4.8).curveTo(2.3,4.5,2.2,3.9).lineTo(2.2,0.3).lineTo(-2.3,0.3).lineTo(-2.3,3.9).curveTo(-2.3,4.7,-2,5).curveTo(-1.6,5.2,-0.7,5.2).lineTo(-0.7,5.6).lineTo(-6,5.6).lineTo(-6,5.2).curveTo(-5.1,5.2,-4.8,5).curveTo(-4.3,4.7,-4.3,3.9).lineTo(-4.3,-3.9).curveTo(-4.3,-4.7,-4.8,-5).curveTo(-5.1,-5.2,-6,-5.2).lineTo(-6,-5.6).lineTo(-0.7,-5.6).lineTo(-0.7,-5.2).curveTo(-1.9,-5.2,-2.1,-4.8).curveTo(-2.2,-4.5,-2.3,-3.9).lineTo(-2.3,-0.6).lineTo(2.2,-0.6).lineTo(2.2,-3.9).curveTo(2.2,-4.7,1.9,-5).curveTo(1.6,-5.2,0.7,-5.2).lineTo(0.7,-5.6).lineTo(6,-5.6).lineTo(6,-5.2).curveTo(5,-5.2,4.8,-5).curveTo(4.4,-4.7,4.3,-3.9).lineTo(4.3,3.9).curveTo(4.4,4.7,4.8,5).curveTo(5,5.2,6,5.2).lineTo(6,5.6).closePath();
	this.shape_3.setTransform(12.3,-3.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-5.3,5.6).lineTo(-5.3,5.2).curveTo(-4.3,5.2,-4,5).curveTo(-3.6,4.7,-3.6,3.9).lineTo(-3.6,-3.9).curveTo(-3.6,-4.7,-4,-5).curveTo(-4.3,-5.2,-5.3,-5.2).lineTo(-5.3,-5.6).lineTo(0.1,-5.6).lineTo(0.1,-5.2).curveTo(-0.8,-5.2,-1.1,-5).curveTo(-1.6,-4.7,-1.6,-3.9).lineTo(-1.6,-0.5).lineTo(0.2,-0.5).curveTo(2.1,-0.6,3.5,0.1).curveTo(5.3,0.8,5.3,2.5).curveTo(5.3,4.1,3.9,5).curveTo(2.8,5.6,1.1,5.6).closePath().moveTo(-1.6,4.2).curveTo(-1.6,4.7,-1.1,4.8).lineTo(-0.3,4.9).curveTo(3,4.9,3,2.4).curveTo(3,1.2,1.9,0.6).curveTo(1,0.1,-0.4,0.2).lineTo(-1.6,0.2).closePath();
	this.shape_4.setTransform(0.3,-3.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-5.4,5.3).curveTo(-5.9,4.9,-6,4.1).curveTo(-5.9,3,-5,3).curveTo(-4.1,3,-3.9,3.9).curveTo(-3.7,4.5,-3.4,4.5).curveTo(-2.2,4.5,-2.3,-1.9).lineTo(-2.3,-2.9).curveTo(-2.3,-4.3,-2.5,-4.7).curveTo(-2.9,-5.3,-4.2,-5.4).lineTo(-4.2,-5.7).lineTo(6,-5.7).lineTo(6,-5.4).curveTo(5,-5.4,4.7,-5.1).curveTo(4.3,-4.9,4.3,-4).lineTo(4.3,3.7).curveTo(4.3,4.6,4.7,4.9).curveTo(5,5.1,6,5.1).lineTo(6,5.5).lineTo(0.4,5.5).lineTo(0.4,5.1).curveTo(1.4,5.1,1.8,4.9).curveTo(2.2,4.6,2.2,3.7).lineTo(2.2,-3.6).curveTo(2.2,-4.5,1.8,-4.8).curveTo(1.5,-5,0.4,-5).curveTo(-0.4,-5,-0.9,-4.6).curveTo(-1.2,-4.3,-1.3,-3.4).lineTo(-1.4,-1.4).lineTo(-1.5,1.5).curveTo(-1.6,3.1,-2,4.3).curveTo(-2.6,5.7,-4,5.7).curveTo(-4.8,5.7,-5.4,5.3).closePath();
	this.shape_5.setTransform(-11.7,-3.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#FFFFFF").beginStroke().moveTo(1.2,4).curveTo(0,4.9,-0.6,5.2).curveTo(-1.7,5.9,-2.5,5.8).curveTo(-3.6,5.8,-4.4,5.1).curveTo(-5,4.3,-5.1,3.2).curveTo(-5.1,1.5,-3.3,0.3).curveTo(-2.2,-0.5,0.1,-1.3).lineTo(1.1,-1.7).curveTo(1.1,-3.6,0.8,-4.4).curveTo(0.5,-5.3,-0.7,-5.3).curveTo(-2.5,-5.3,-2.5,-4.2).lineTo(-2.4,-3.7).lineTo(-2.4,-3.2).curveTo(-2.4,-2.7,-2.7,-2.3).curveTo(-3.1,-2.1,-3.6,-2.1).curveTo(-4.6,-2,-4.6,-3.1).curveTo(-4.6,-4.5,-3.1,-5.2).curveTo(-1.8,-5.9,-0.3,-5.9).curveTo(1.8,-5.9,2.6,-4.8).curveTo(3.2,-3.8,3.2,-1.6).lineTo(3.2,3.7).curveTo(3.2,4.4,3.7,4.4).curveTo(4.1,4.5,5.1,3.9).lineTo(5.1,4.6).curveTo(3.8,5.9,2.9,5.8).curveTo(1.3,5.8,1.2,4).closePath().moveTo(0.2,-0.7).curveTo(-1.5,-0,-2.1,0.5).curveTo(-2.9,1.2,-2.8,2.3).curveTo(-2.8,3.1,-2.5,3.8).curveTo(-2,4.4,-1.2,4.4).curveTo(-0.7,4.4,0,4).curveTo(0.7,3.8,1.1,3.3).lineTo(1.1,-1).closePath();
	this.shape_6.setTransform(-23,-3.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.9,5.6).lineTo(-2.9,5.2).curveTo(-1.9,5.2,-1.6,5).curveTo(-1,4.7,-1,3.9).lineTo(-1,-4.4).curveTo(-1.1,-4.9,-1.7,-4.9).curveTo(-4.4,-4.9,-4.8,-1.7).lineTo(-5.4,-1.7).lineTo(-5.3,-5.6).lineTo(5.2,-5.6).lineTo(5.4,-1.7).lineTo(4.8,-1.7).curveTo(4.5,-4.9,1.7,-4.9).curveTo(1,-4.9,1,-4.4).lineTo(1,3.9).curveTo(1,4.7,1.6,5).curveTo(1.9,5.2,2.9,5.2).lineTo(2.9,5.6).closePath();
	this.shape_7.setTransform(-34.7,-3.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.8,4).curveTo(-5,2.4,-5,0.2).curveTo(-5,-2.3,-3.7,-4).curveTo(-2.3,-5.9,0.1,-5.9).curveTo(2.9,-5.9,4.1,-3.3).curveTo(4.4,-2.6,4.5,-1.3).lineTo(-3.3,-1.3).curveTo(-3.1,0.5,-2.6,1.6).curveTo(-1.5,4.2,0.8,4.1).curveTo(2,4.1,3.2,3.2).curveTo(3.9,2.6,4.6,1.5).lineTo(5,1.6).curveTo(4.3,3.3,3.5,4.1).curveTo(1.9,5.9,-0.2,5.8).curveTo(-2.4,5.8,-3.8,4).closePath().moveTo(2,-2.1).curveTo(1.7,-4.9,-0.4,-5).curveTo(-2.7,-4.9,-3.2,-2.1).lineTo(2,-2.1).lineTo(2,-2.1).closePath();
	this.shape_8.setTransform(-46,-3.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#FFFFFF").beginStroke().moveTo(7.5,10.6).lineTo(6.8,8.6).curveTo(6.3,7,5.7,6.5).curveTo(5.1,6,3.6,6).lineTo(-3.7,6).curveTo(-5.4,6,-6,6.8).curveTo(-6.7,7.6,-7.5,10.6).lineTo(-8,10.6).lineTo(-8,5.5).lineTo(-7.7,5.5).curveTo(-6.5,5.5,-5.6,4.1).curveTo(-4.9,2.8,-4.7,1.1).curveTo(-4.4,-3.4,-4.4,-6).lineTo(-4.4,-8.1).curveTo(-4.3,-9.2,-5.1,-9.7).curveTo(-5.6,-10.1,-6.9,-10.1).lineTo(-6.9,-10.6).lineTo(7.6,-10.6).lineTo(7.6,-10.1).curveTo(5.5,-10,5.5,-8.5).lineTo(5.5,3.1).curveTo(5.5,4.5,6,5.1).curveTo(6.5,5.5,8,5.5).lineTo(8,10.6).closePath().moveTo(-2.6,-9.1).curveTo(-3.2,-8.6,-3.3,-6.3).lineTo(-3.5,-1.8).curveTo(-3.5,0.7,-3.7,1.7).curveTo(-4.1,3.5,-4.9,5.1).lineTo(0.8,5.1).curveTo(2,5.1,2.5,4.5).curveTo(2.8,4.1,2.8,2.7).lineTo(2.8,-7).curveTo(2.9,-8.6,2.3,-9.1).curveTo(1.8,-9.7,-0.4,-9.7).curveTo(-2,-9.7,-2.6,-9.1).closePath();
	this.shape_9.setTransform(-60,-4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#0076F5").beginStroke().moveTo(-80.5,19.5).curveTo(-84.6,19.5,-87.6,16.6).curveTo(-90.5,13.6,-90.5,9.5).lineTo(-90.5,-9.5).curveTo(-90.5,-13.7,-87.6,-16.6).curveTo(-84.6,-19.5,-80.5,-19.5).lineTo(80.5,-19.5).curveTo(84.6,-19.5,87.6,-16.6).curveTo(90.5,-13.7,90.5,-9.5).lineTo(90.5,9.5).curveTo(90.5,13.6,87.6,16.6).curveTo(84.6,19.5,80.5,19.5).closePath();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.5,-19.5,181,39);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bg_300x600_1();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-150,-300,300,600), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bg_300x600_2();
	this.instance.parent = this;
	this.instance.setTransform(-129,-287,0.956,0.956);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-129,-287,286.7,573.4), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bg_300x600_3();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-150,-300,300,600), null);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// чим дихає ваш малюк? copy
	this.instance = new lib.Symbol23("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,17);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({alpha:1},14).wait(71).to({startPosition:0},0).to({alpha:0},14).wait(1));

	// Чи знаєте ви ви copy
	this.instance_1 = new lib.Symbol24("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-13.1,-12.8);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},14).wait(70).to({startPosition:0},0).to({alpha:0},14).to({_off:true},1).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-124.6,-38.9,217.8,38.1);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Кожен подих
	this.instance = new lib.Symbol21("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-37.3,-19.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// має значення
	this.instance_1 = new lib.Symbol20("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,13);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.4,-35.3,236.6,63.8);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// *в порівнянні з ультразвуковими
	this.instance = new lib.Symbol27("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-17.5,36.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(84).to({startPosition:0},0).to({alpha:0},15).wait(1));

	// бактерій*
	this.instance_1 = new lib.Symbol28("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-37.5,9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(80).to({startPosition:0},0).to({alpha:0},15).wait(5));

	// на 99% менше
	this.instance_2 = new lib.Symbol29("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(75).to({startPosition:0},0).to({alpha:0},15).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110.8,-44.8,221.5,87.4);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol4();
	this.instance.parent = this;
	this.instance.setTransform(0,-332.1,1.727,1.727);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.99,scaleY:1.99,x:-9,y:-448.1,alpha:0.93},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-222.8,-827.9,495.3,990.6);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol5();
	this.instance.parent = this;
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_414 = function() {
		if (!this.alreadyExecuted) {
			this.alreadyExecuted = true;
			this.loopNum = 1;
		} else {
			this.loopNum++;
			if (this.loopNum == 2) {
				this.stop();
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(414).call(this.frame_414).wait(36));

	// Слой_3
	this.instance = new lib.Symbol15("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-11.8,49.2,0.842,0.811,0,0,0,-0.3,-1.8);
	this.instance.alpha = 0.801;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(190).to({_off:false},0).wait(1).to({regX:0,regY:0,scaleX:0.77,scaleY:0.75,x:-11.6,y:50.5,alpha:0.687,startPosition:1},0).wait(1).to({scaleX:0.71,scaleY:0.68,y:50.4,alpha:0.594,startPosition:2},0).wait(1).to({scaleX:0.65,scaleY:0.62,y:50.3,alpha:0.525,startPosition:3},0).wait(1).to({scaleX:0.59,scaleY:0.56,y:50.2,alpha:0.458,startPosition:4},0).wait(1).to({scaleX:0.53,scaleY:0.51,y:50.1,alpha:0.395,startPosition:5},0).wait(1).to({scaleX:0.47,scaleY:0.46,x:-11.7,y:50,alpha:0.336,startPosition:6},0).wait(1).to({scaleX:0.42,scaleY:0.41,y:49.9,alpha:0.279,startPosition:7},0).wait(1).to({scaleX:0.37,scaleY:0.36,y:49.8,alpha:0.226,startPosition:8},0).wait(1).to({scaleX:0.33,scaleY:0.32,alpha:0.196,startPosition:9},0).wait(1).to({scaleX:0.29,scaleY:0.28,y:49.7,alpha:0.18,startPosition:10},0).wait(1).to({scaleX:0.25,scaleY:0.24,y:49.6,alpha:0.16,startPosition:11},0).wait(1).to({scaleX:0.21,scaleY:0.2,alpha:0.139,startPosition:12},0).wait(1).to({scaleX:0.18,scaleY:0.17,y:49.5,alpha:0.119,startPosition:13},0).wait(1).to({scaleX:0.15,scaleY:0.14,x:-11.8,y:49.4,alpha:0.1,startPosition:14},0).wait(1).to({scaleX:0.12,scaleY:0.11,alpha:0.082,startPosition:15},0).wait(1).to({scaleX:0.09,scaleY:0.09,alpha:0.065,startPosition:16},0).wait(1).to({scaleX:0.07,scaleY:0.07,y:49.3,alpha:0.05,startPosition:17},0).wait(1).to({scaleX:0.05,scaleY:0.05,alpha:0.037,startPosition:18},0).wait(1).to({scaleX:0.04,scaleY:0.04,alpha:0.026,startPosition:19},0).wait(1).to({scaleX:0.02,scaleY:0.02,y:49.2,alpha:0.017,startPosition:20},0).wait(1).to({scaleX:0.01,scaleY:0.01,alpha:0.009,startPosition:21},0).wait(1).to({scaleX:0.01,scaleY:0.01,alpha:0.004,startPosition:22},0).wait(1).to({scaleX:0,scaleY:0,alpha:0.001,startPosition:23},0).wait(1).to({scaleX:0,scaleY:0,x:11.8,y:-49.2,alpha:0,startPosition:24},0).to({_off:true},1).wait(235));

	// Layer 11
	this.instance_1 = new lib.Symbol34("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-201.7,271,1.163,1.163);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(126).to({_off:false},0).to({regX:0.1,regY:0.2,scaleX:0.57,scaleY:0.57,x:97.1,y:100.6},16,cjs.Ease.get(1)).wait(53).to({regY:0.1,scaleX:0.65,scaleY:0.65,x:81.7,y:110.9},0).to({regX:-0.4,regY:0,scaleX:0.15,scaleY:0.15,x:38.3,y:159.1,alpha:0},14).to({_off:true},1).wait(145).to({_off:false,regX:0,scaleX:1.16,scaleY:1.16,x:-201.7,y:271,alpha:1},0).to({regY:-0.1,scaleX:0.57,scaleY:0.57,x:81.8,y:-59.5},16,cjs.Ease.get(1)).wait(79));

	// Layer 11 copy
	this.instance_2 = new lib.Symbol34("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-276.7,286,1.5,1.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(131).to({_off:false},0).to({regX:-0.2,regY:0.1,scaleX:0.54,scaleY:0.54,x:51.5,y:100.4},16,cjs.Ease.get(1)).wait(52).to({regX:0,regY:0,scaleX:0.51,scaleY:0.51,x:41.5,y:111},0).to({regY:0.2,scaleX:0.19,scaleY:0.19,x:28.6,y:161.1,alpha:0},14).to({_off:true},1).wait(145).to({_off:false,regY:0,scaleX:1.5,scaleY:1.5,x:-276.7,y:286,alpha:1},0).to({regX:-0.1,regY:-0.1,scaleX:0.91,scaleY:0.91,x:15.9,y:-36.6},16,cjs.Ease.get(1)).wait(75));

	// Logo
	this.instance_3 = new lib.Logo250x250();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-125,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(450));

	// Layer 9
	this.instance_4 = new lib.Symbol14("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-48.4,30.8,0.628,0.628,0,0,0,-0.1,0);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(355).to({_off:false},0).to({x:-35.8,y:37.8,alpha:1},9).wait(86));

	// Layer 6 copy 4
	this.instance_5 = new lib.Symbol19("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-14.9,89.3,0.763,0.763,0,0,0,-0.1,-0.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(323).to({_off:false},0).wait(127));

	// Layer 6 copy 2
	this.instance_6 = new lib.Symbol16("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-7,47.7,1.022,1.022,0,0,0,-0.1,0);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(211).to({_off:false},0).to({_off:true},100).wait(139));

	// Layer 6 copy
	this.instance_7 = new lib.Symbol25("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(30,-19);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(112).to({_off:false},0).to({regX:-0.1,regY:-0.2,scaleX:0.84,scaleY:0.84,x:-15.6,y:34.7,alpha:1},14,cjs.Ease.get(1)).wait(63).to({startPosition:0},0).to({_off:true},1).wait(260));

	// Layer 6
	this.instance_8 = new lib.Symbol22("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(0.2,90.6,0.817,0.817);

	this.instance_9 = new lib.Symbol26("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(-16.6,23.5);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[]},105).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_9}]},14).to({state:[{t:this.instance_9}]},68).to({state:[]},1).to({state:[]},169).wait(91));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(107).to({_off:false},0).to({regX:-0.2,regY:0.1,scaleX:0.82,scaleY:0.82,x:-55.4,y:67.9,alpha:1},14,cjs.Ease.get(1)).wait(68).to({startPosition:0},0).to({_off:true},1).wait(260));

	// Layer 12
	this.instance_10 = new lib.Symbol35("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(63,182);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(359).to({_off:false},0).to({alpha:1},9).wait(82));

	// bg_300x600_1.jpg
	this.instance_11 = new lib.Symbol6("synched",0,false);
	this.instance_11.parent = this;
	this.instance_11.setTransform(0,-6,0.95,0.95);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(299).to({_off:false},0).to({scaleX:1,scaleY:1,y:0,startPosition:14},115).wait(36));

	// bg_300x600_3.jpg
	this.instance_12 = new lib.Symbol8("synched",3,false);
	this.instance_12.parent = this;
	this.instance_12.setTransform(-75.4,97.3,1.158,1.158,0,0,0,-19.7,50.2);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(202).to({_off:false},0).to({regX:-19.6,scaleX:1,scaleY:1,x:-0.7,y:2.9,startPosition:14},112).to({_off:true},1).wait(135));

	// bg_300x600_2.jpg
	this.instance_13 = new lib.Symbol7("synched",14,false);
	this.instance_13.parent = this;
	this.instance_13.setTransform(-91.4,52.6,0.908,0.908,0,0,0,-70.9,19.2);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(106).to({_off:false},0).to({_off:true},107).wait(237));

	// bg_300x600_1.jpg
	this.instance_14 = new lib.Symbol6("synched",14,false);
	this.instance_14.parent = this;
	this.instance_14.setTransform(0,-15.1,0.95,0.95,0,0,0,0,31.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({_off:true},110).wait(340));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-142.4,-329.9,285,570);


// stage content:
(lib.AirActive250x250 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Logo
	this.instance = new lib.Logo250x250();
	this.instance.parent = this;
	this.instance.setTransform(1,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// Layer 3
	this.instance_1 = new lib.anim();
	this.instance_1.parent = this;
	this.instance_1.setTransform(126,126);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(108.5,-79,285,570);
// library properties:
lib.properties = {
	id: '93345DE45089194782649E4B9CA1B512',
	width: 250,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"banka.png", id:"banka"},
		{src:"bg_300x600_1.jpg", id:"bg_300x600_1"},
		{src:"bg_300x600_2.jpg", id:"bg_300x600_2"},
		{src:"bg_300x600_3.jpg", id:"bg_300x600_3"},
		{src:"Logo250x250.png", id:"Logo250x250"},
		{src:"nano.png", id:"nano"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['93345DE45089194782649E4B9CA1B512'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;