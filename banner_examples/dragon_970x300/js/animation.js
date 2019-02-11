(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 970,
	height: 300,
	fps: 30,
	color: "#FFFFFF",
	manifest: [
		{src:"img/bodydragon.png?1470019016060", id:"bodydragon"},
		{src:"img/chip.png?1470019016060", id:"chip"},
		{src:"img/cta_bg.png?1470019016060", id:"cta_bg"},
		{src:"img/device1.png?1470019016060", id:"device1"},
		{src:"img/device211.png?1470019016060", id:"device211"},
		{src:"img/device2.png?1470019016060", id:"device2"},
		{src:"img/dragon3.png?1470019016060", id:"dragon3"},
		{src:"img/dragon_0005_head1.png?1470019016060", id:"dragon_0005_head1"},
		{src:"img/dragon_0008_neck_.png?1470019016060", id:"dragon_0008_neck_"},
		{src:"img/dragonbg.jpg?1470019016060", id:"dragonbg"},
		{src:"img/fire11.png?1470019016060", id:"fire11"},
		{src:"img/FIREBLAST.png?1470019016060", id:"FIREBLAST"},
		{src:"img/head2.png?1470019016060", id:"head2"},
		{src:"img/jaw.png?1470019016060", id:"jaw"},
		{src:"img/leg1.png?1470019016060", id:"leg1"},
		{src:"img/play.png?1470019016060", id:"play"},
		{src:"img/wingA.png?1470019016060", id:"wingA"},
		{src:"img/wingA_2.png?1470019016060", id:"wingA_2"},
		{src:"img/wingb.png?1470019016060", id:"wingb"},
		{src:"img/wingb2.png?1470019016060", id:"wingb2"}
	]
};



// symbols:



(lib.bodydragon = function() {
	this.initialize(img.bodydragon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,130,162);


(lib.chip = function() {
	this.initialize(img.chip);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,99);


(lib.cta_bg = function() {
	this.initialize(img.cta_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,241,42);


(lib.device1 = function() {
	this.initialize(img.device1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,353,248);


(lib.device211 = function() {
	this.initialize(img.device211);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,367,260);


(lib.device2 = function() {
	this.initialize(img.device2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,367,260);


(lib.dragon3 = function() {
	this.initialize(img.dragon3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,350,247);


(lib.dragon_0005_head1 = function() {
	this.initialize(img.dragon_0005_head1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,99,94);


(lib.dragon_0008_neck_ = function() {
	this.initialize(img.dragon_0008_neck_);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,62,63);


(lib.dragonbg = function() {
	this.initialize(img.dragonbg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,970,300);


(lib.fire11 = function() {
	this.initialize(img.fire11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,383,150);


(lib.FIREBLAST = function() {
	this.initialize(img.FIREBLAST);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,224,200);


(lib.head2 = function() {
	this.initialize(img.head2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,196);


(lib.jaw = function() {
	this.initialize(img.jaw);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,68,48);


(lib.leg1 = function() {
	this.initialize(img.leg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,60,112);


(lib.play = function() {
	this.initialize(img.play);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,46,49);


(lib.wingA = function() {
	this.initialize(img.wingA);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,234,130);


(lib.wingA_2 = function() {
	this.initialize(img.wingA_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,390,125);


(lib.wingb = function() {
	this.initialize(img.wingb);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,231,75);


(lib.wingb2 = function() {
	this.initialize(img.wingb2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,309,90);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgiCAc2MAAAg5rMBaRAAAMAAAA5rg");
	mask.setTransform(359.9,-7.6);

	// Layer 3
	this.instance = new lib.dragonbg();
	this.instance.setTransform(844.6,-178.2,1.18,1.18,0,0,180);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("Eg6XAf5MAAAg/xMB0vAAAMAAAA/xg");
	mask_1.setTransform(-230.6,5.4);

	// Layer 1
	this.instance_1 = new lib.dragonbg();
	this.instance_1.setTransform(-572.3,-177,1.18,1.18);

	this.instance_1.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-572.3,-178.2,1292.2,355.2);


(lib.wingR2copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AwjsSMAhHAK1IkNHcI6AGUg");
	mask.setTransform(84.7,108.5);

	// Layer 1
	this.instance = new lib.dragon3();

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,29.7,190.8,157.5);


(lib.wingR2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.wingA_2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,390,125);


(lib.wingR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.wingA();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,234,130);


(lib.wingl2copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AtYmnIBdmVIZTipInefLg");
	mask.setTransform(304.9,192.4);

	// Layer 1
	this.instance = new lib.dragon3();

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(219.2,92.6,130.9,154.5);


(lib.wingL2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.wingb2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,309,90);


(lib.wingL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.wingb();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,231,75);


(lib.tailnew = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AFXG/QlTgakkhhQjGhOhHgeIglgTQkYiNjdjTQhZhXhPhhID0h1QBIBAB9BcQD5C2EMCPQNVHLLMhhQhlAZimAUQjLAZjIAAQh+AAh9gKgAnhD6QgngRglgRQBHAeDGBOQhjghhegpg");
	mask.setTransform(191.7,-23.2);

	// Layer 1
	this.instance = new lib.dragon_0008_neck_();
	this.instance.setTransform(224.1,15.4,1,1,-45);

	this.instance_1 = new lib.dragon_0008_neck_();
	this.instance_1.setTransform(185.9,5,1,1,-45);

	this.instance_2 = new lib.dragon_0008_neck_();
	this.instance_2.setTransform(151,5,1,1,-45);

	this.instance_3 = new lib.dragon_0008_neck_();
	this.instance_3.setTransform(114.6,-7.1,1,1,-45);

	this.instance_4 = new lib.dragon_0008_neck_();
	this.instance_4.setTransform(91.2,-43.7,1,1,-15);

	this.instance_5 = new lib.dragon_0008_neck_();
	this.instance_5.setTransform(58.3,-66.7,1,1,-15);

	this.instance.mask = this.instance_1.mask = this.instance_2.mask = this.instance_3.mask = this.instance_4.mask = this.instance_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(65.3,-68.9,247.2,128.9);


(lib.neck = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.dragon_0008_neck_();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,62,63);


(lib.midground = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhOkAJwIgylUIC0g8QWUi0W+isUAt5gFeADVAAZIiDHUIP9BZId1mNIgyjwIAehGIR+i0IhQYfg");
	mask.setTransform(492,246.5);

	// Layer 1
	this.instance = new lib.dragonbg();

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,168,970,132);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.chip();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,99);


(lib.light = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,114.4).s().p("AshMiQlMlNgBnVQABnVFMlMQFMlMHVgBQHVABFNFMQFMFMAAHVQAAHVlMFNQlNFMnVAAQnVAAlMlMg");
	this.shape.setTransform(113.5,113.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,227,227);


(lib.legL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.leg1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,60,112);


(lib.legal_ex_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0079CD").s().p("A5xV3MAAAgruMAzjAAAMAAAArug");
	this.shape.setTransform(485,150,2.939,1.071);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,970,300);


(lib.jawa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.jaw();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,68,48);


(lib.jaw2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ApGInIg6gDIAvuVIAvDRIAmCnIApgHIEfgvIAPAMQAUAOAcAKQBYAdCAgaIAYAEQAYAEABAIIATAJQAVAHACgKIALANIAFgEIAFgEIAEAFIAFAFIAMgOIAPAUIAMAEQAPAEAPAAQAxgDAdgxIABAlIAAAAIAAAAIAUAFQAZAEAUgEQBCgNAChXIBin5IAHggIAjACIgCAkIgJCtIgzPrgAoLphIDyAMIhGAtIi1B0g");
	mask.setTransform(50.5,65.1);

	// Layer 1
	this.instance = new lib.head2();
	this.instance.setTransform(0,0,0.628,0.628);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100.4,123);


(lib.innerfire = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.fire11();
	this.instance.setTransform(308.3,0,0.963,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(308.3,0,369,150);


(lib.hotspot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape.setTransform(485,150,6.063,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,970,300);


(lib.headTop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.dragon_0005_head1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,99,94);


(lib.head2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AEIGFIgMgEIgPgUIgMAOIgGgFIgDgFIgFAEIgFAEIgMgNQgBAKgVgHIgTgJQgBgJgYgFIgZgEQh/AchZgfQgbgKgUgOIgQgMIlHA4IhtngQABABDSiHIDSiHIMkB9IhrIkQgCBZhCANQgVAEgYgEIgUgFIgBgnQgeAzgwADIgDAAQgOAAgNgEgAF0F6IABAAIAAAAIgBAAg");
	mask.setTransform(55.5,35.6);

	// Layer 1
	this.instance = new lib.head2();
	this.instance.setTransform(0,0,0.681,0.681);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,255,255,0)").ss(1,1,1).p("AiQgIIEhAR");
	this.shape.setTransform(53.2,68.3);

	this.instance.mask = this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,109,74.9);


(lib.firebreath21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.FIREBLAST();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,224,200);


(lib.device2back = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnCNMUAABAAAAD6ggSICrAuMAHfAlfIAAAAQgCAAuDl7gAnCNMIAAAAIAAAAIAAAAg");
	mask.setTransform(51.7,121.6);

	// Layer 1
	this.instance = new lib.device2();

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.5,0,90.4,244);


(lib.device1_screen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AQkQOIAAAAIAAAAgAwHKlIgos5Qgns7ABgBMAirgA9QABAAgaQNQgaQLABADUgAEgACggngFng");
	mask.setTransform(242.3,93.8);

	// Layer 1
	this.instance = new lib.device1();

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(131.3,0,221.7,197.6);


(lib.device1_keyboard = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A9wk5IZwi4MAhxAGKIznJZMgn6gMrg");
	mask.setTransform(161.1,208.4);

	// Layer 1
	this.instance = new lib.device1();

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,158.6,351.7,89.4);


(lib.cta_bg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cta_bg();
	this.instance.setTransform(0,0,0.921,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,222,42);


(lib.copy5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,48.5,12.5);


(lib.copy4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,76.1,31.1);


(lib.copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,340,118);


(lib.copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.5,-24,278,150);


(lib.copy1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,366.7,74.7);


(lib.copy_legal_ex = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.9,-300,716.9,472.3);


(lib.copy_legal_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,39,14.1);


(lib.copy_cta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,154,25);


(lib.close = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAAIIgXAYIgIgIIAZgYIgZgXIAIgIIAXAZIAYgZIAIAIIgYAXIAYAYIgIAIg");
	this.shape.setTransform(646.5,7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhEBGIAAiLICKAAIAACLgAg7A7IB2AAIAAh2Ih2AAg");
	this.shape_1.setTransform(646.5,7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0)").s().p("AiFCCIAAkDIELAAIAAEDg");
	this.shape_2.setTransform(648.6,5.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(635.2,-7.6,26.9,26);


(lib.castle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg6kAYJILLigIAugaQA9gdBHgVQDihADwAyIEYgpIAaglQAigwApguQCDiYCXhfQDUiFDegBQEVgCEUDNIB+g0QCLgvBBATICghTQCthQA+AMIAXk7IAjgEIA3vmIAegZIAorBIAygZIAjAdIBFgdQBXgfBZgNQEdgnDICtIgKAxIKFAGQAygKBzhlQA6gzAvgwICRgPIFohuIC+AKIBGAdIhLBBIAUBCIgKCuIAeAtIgPCNIAKFyIAZAnIAKHMIDhE5IgFBgIgVAmQgYAygPAxQgvCdA+BlIE1AGQFogBEAgoIg3Ohg");
	mask.setTransform(604,147.5);

	// Layer 1
	this.instance = new lib.dragonbg();

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(229,0,741,300);


(lib.body2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A33UqQACgChFkqIhFktQAAABENAHIELAIIAEAAQIoAjAmgEQIrlWACgSIAxlFQAylAABABQEIgfACAFIF0xbQOGEZAAABQiYDtiaDuQk2HcgOACQgPAChrAmQhrAmABACQhaGIABACQgBABA4BSIA3BRIjFG6IjEG4gA33UqIAAAAIAAAAIAAAAgA5/LRIAAAAIAAAAgA5/LRIAAAAIAAAAg");
	mask.setTransform(149.2,118.4);

	// Layer 3
	this.instance = new lib.dragon3();

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,315.7,247);


(lib.body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AACJHQgjgFgigPIgbgOQAAABn5kIIiUiNIFPlsIFQlvQLZDTAAACQABAAAvDJIAuDGQACABoeHqQhKBGhbAAQgUAAgUgEgArrCRIAAAAIAAAAIAAAAg");
	mask.setTransform(57.5,40.9);

	// Layer 3
	this.instance = new lib.bodydragon();
	this.instance.setTransform(1.4,0.7);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.4,0.7,130,98.9);


(lib.blue_bkg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// blue_solid
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004A87").s().p("EhLxAXbMAAAgu2MCXjAAAMAAAAu2g");
	this.shape.setTransform(485,150);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,970,300);


(lib.bkg_glow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#56AADF","#004A87"],[0,1],0,0,0,0,0,300.3).s().p("EggyAgzQtntlAAzOQAAzNNntlQNltnTNAAQTOAANlNnQNnNlAATNQAATOtnNlQtlNnzOAAQzNAAtltng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-297,-297,594,594);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhLxAK7IAAzqMBfYAAAIgVCDIgjAEIgZE7Qg+gMitBQIigBRQhCgTiKAvIh+A0QkUjLkUACQjdABjUCDQiXBfiDCYQgpAugiAwIgaAlIkYApQjxgyjhBAQhHAVg9AdIguAaIpyCLgEA+ugCoQg/hlAwjFQAPg9AYhBIAVgzIMXg3IAAH7QjkAckrABg");
	mask.setTransform(485,230);

	// Layer 4
	this.instance = new lib.dragonbg();

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("EAodAAzIBz0wIBcgaQBwgcBsgLQFWgjCcCWEg25AVGMBepgMVIAtn+");
	this.shape.setTransform(349.5,142.9);

	this.instance.mask = this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,160,970,140);


(lib.arrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.7,3.7,5.7,5.9);


(lib.sky = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween1("synched",0);
	this.instance.setTransform(572.3,178.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1292.2,355.2);


(lib.legal_ex = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"in":1,out:11});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_10 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10).call(this.frame_10).wait(11));

	// Layer 4
	this.copy_legal_ex = new lib.copy_legal_ex();
	this.copy_legal_ex.setTransform(170,155.6,1,1,0,0,0,139,31.6);
	this.copy_legal_ex.alpha = 0;
	this.copy_legal_ex._off = true;

	this.timeline.addTween(cjs.Tween.get(this.copy_legal_ex).wait(1).to({_off:false},0).to({alpha:1},9).wait(1).to({alpha:0},9).wait(1));

	// Layer 1
	this.instance = new lib.legal_ex_bg();
	this.instance.setTransform(165,140,1,1,0,0,0,165,140);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({alpha:1},9).wait(1).to({alpha:0},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.legal_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"in":1,"out":11});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_10 = function() {
		this.stop();
	}
	this.frame_20 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10).call(this.frame_10).wait(10).call(this.frame_20).wait(1));

	// Layer 1
	this.copy_legal_btn = new lib.copy_legal_btn();
	this.copy_legal_btn.setTransform(19.5,7,1,1,0,0,0,19.5,7);
	this.copy_legal_btn.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.copy_legal_btn).wait(1).to({alpha:1},9).wait(1).to({alpha:0.602},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.firebreath1anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.firebreath21();
	this.instance.setTransform(20.1,17.2,0.193,0.193,0,0,0,103.9,89.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:103.8,regY:89.2,scaleX:1,scaleY:1,x:103.8,y:78.2},4,cjs.Ease.get(-1)).wait(1));

	// Layer 2
	this.instance_1 = new lib.firebreath21();
	this.instance_1.setTransform(103.8,101.2,1.134,1.134,0,0,0,103.8,89.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.35,scaleY:1.35,x:209.2,y:215.6},4,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.9,0,254.1,226.9);


(lib.fireball1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.innerfire();
	this.instance.setTransform(145.6,55.7,1,1,0,0,0,485.3,55.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.5,-1,374,156);


(lib.fire1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 10
	this.instance = new lib.fireball1();
	this.instance.setTransform(375.4,136.2,0.068,0.068,-18.2,0,0,161.2,149.7);
	this.instance.alpha = 0.789;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:161.1,regY:149.9,scaleX:1.73,scaleY:1.73,rotation:1.5,x:411.8,y:104,alpha:1},25,cjs.Ease.get(-0.5)).to({regY:150,scaleX:3.31,scaleY:3.31,rotation:9.2,x:423.1,y:138.1},58,cjs.Ease.get(1)).to({_off:true},32).wait(15));

	// Layer 11
	this.instance_1 = new lib.fireball1();
	this.instance_1.setTransform(375.4,185.8,0.063,0.063,-18.2,0,0,161,150.8);
	this.instance_1.alpha = 0.789;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:161.1,regY:150.1,scaleX:1.4,scaleY:1.4,rotation:1.5,x:431.1,y:176.5,alpha:1},20,cjs.Ease.get(-0.5)).to({regY:150,scaleX:2.74,scaleY:2.8,rotation:0,skewX:28.4,skewY:16.5,x:429.1,y:277.5},70,cjs.Ease.get(1)).to({_off:true},25).wait(15));

	// Layer 9
	this.instance_2 = new lib.fireball1();
	this.instance_2.setTransform(172.2,177,0.061,0.061,0,18.2,-161.8,161.5,150);
	this.instance_2.alpha = 0.789;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:161.2,regY:150.1,scaleX:1.56,scaleY:1.56,skewX:1.5,skewY:-178.5,x:93.1,y:175.3,alpha:1},16,cjs.Ease.get(-0.5)).to({regX:161.1,regY:150,scaleX:3.02,scaleY:3.02,skewX:9.7,skewY:-170.3,x:-6.1,y:265.9},63,cjs.Ease.get(1)).to({_off:true},36).wait(15));

	// Layer 6
	this.instance_3 = new lib.fireball1();
	this.instance_3.setTransform(107,117,0.09,0.09,0,0,0,161.2,150.1);
	this.instance_3.alpha = 0.789;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:150,scaleX:1.51,scaleY:1.51,rotation:19.7,x:134,y:121.4,alpha:1},23,cjs.Ease.get(-0.5)).to({regX:161.1,regY:149.9,scaleX:3,scaleY:3,rotation:24.2,x:62.7,y:187.9},61,cjs.Ease.get(1)).wait(46));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(88.7,102.5,303.1,91.9);


(lib.dragon3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.wingl2copy();
	this.instance.setTransform(175,123.5,1,1,0,0,0,175,123.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.instance_1 = new lib.wingR2copy();
	this.instance_1.setTransform(175,123,1,1,-10.9,0,0,175,123.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 1
	this.instance_2 = new lib.body2();
	this.instance_2.setTransform(175,123.5,1,1,0,0,0,175,123.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.5,-31.5,426.1,323.8);


(lib.device2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{rolloff:0,rollover:1});

	// timeline functions:
	this.frame_0 = function() {
		this.aniDevice = true;
		this.stop();
	}
	this.frame_1 = function() {
		this.aniDevice = false;
	}
	this.frame_35 = function() {
		//console.log("aniDevice true")
		this.aniDevice = true;
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(34).call(this.frame_35).wait(1));

	// Layer 7
	this.instance = new lib.play();
	this.instance.setTransform(189.3,82.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(34).to({_off:false},0).wait(1));

	// Layer 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_1 = new cjs.Graphics().p("A3ixjIT8gVIJyNHIC9gjQAlATAgAJIAHg0IAahlIAUq3IEXgFIIKb4MgoRAIjg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:208.6,y:124.5}).wait(35));

	// Layer 3
	this.instance_1 = new lib.firebreath1anim("synched",0);
	this.instance_1.setTransform(303,156.2,0.504,0.686,0,0,0,113,113.5);
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(35));

	// Layer 1 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AwHUEIg7hRMgHpgmgQAAgBUWgKQUVgJAAgCIIseJI0bE/Q0SE/gGAAIAAAAg");
	var mask_1_graphics_1 = new cjs.Graphics().p("AwHUEIg7hRMgHpgmgQAAgBUWgKQUVgJAAgCIIseJI0bE/Q0SE/gGAAIAAAAg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:205.7,y:126.4}).wait(1).to({graphics:mask_1_graphics_1,x:205.7,y:126.4}).wait(35));

	// Layer 2
	this.instance_2 = new lib.device211();

	this.instance_2.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(47.6,0,316.2,254.9);


(lib.CTA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"in":16,"out":34});

	// timeline functions:
	this.frame_0 = function() {
		this.aniCom = false;
	}
	this.frame_15 = function() {
		this.stop();
		this.aniCom = true;
	}
	this.frame_16 = function() {
		this.aniCom = false;
	}
	this.frame_33 = function() {
		this.stop();
		this.aniCom = true;
	}
	this.frame_34 = function() {
		this.aniCom = false;
	}
	this.frame_52 = function() {
		this.stop();
		this.aniCom = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(15).call(this.frame_15).wait(1).call(this.frame_16).wait(17).call(this.frame_33).wait(1).call(this.frame_34).wait(18).call(this.frame_52).wait(1));

	// arrow
	this.arrow = new lib.arrow();
	this.arrow.setTransform(102.8,18.1,1,1,0,0,0,2.8,3.1);

	this.timeline.addTween(cjs.Tween.get(this.arrow).wait(53));

	// copy_cta
	this.copy_cta = new lib.copy_cta();
	this.copy_cta.setTransform(12,15);

	this.timeline.addTween(cjs.Tween.get(this.copy_cta).wait(53));

	// msk (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Au+jRId9AAIAAGjI99AAg");
	mask.setTransform(96,21);

	// light_cta
	this.instance = new lib.light();
	this.instance.setTransform(-49.7,18.8,0.306,1,15,0,0,114,113.4);
	this.instance.alpha = 0.148;
	this.instance.compositeOperation = "lighter";
	this.instance.filters = [new cjs.BlurFilter(35, 35, 1)];
	this.instance.cache(-2,-2,231,231);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(17).to({regX:113.5,regY:113.5,x:-48.4,y:18.9},0).wait(1).to({x:-43.9},0).wait(1).to({x:-35.3},0).wait(1).to({x:-21.3},0).wait(1).to({x:-0.1},0).wait(1).to({x:30.5},0).wait(1).to({x:72.4},0).wait(1).to({x:122.1},0).wait(1).to({x:169.3},0).wait(1).to({x:206.3},0).wait(1).to({x:232.3},0).wait(1).to({x:249.8},0).wait(1).to({x:260.9},0).wait(1).to({regX:114,regY:113.4,x:267.4,y:18.8},0).wait(4).to({x:-49.7},0).wait(1).to({regX:113.5,regY:113.5,x:-48.4,y:18.9},0).wait(1).to({x:-43.9},0).wait(1).to({x:-35.3},0).wait(1).to({x:-21.3},0).wait(1).to({x:-0.1},0).wait(1).to({x:30.5},0).wait(1).to({x:72.4},0).wait(1).to({x:122.1},0).wait(1).to({x:169.3},0).wait(1).to({x:206.3},0).wait(1).to({x:232.3},0).wait(1).to({x:249.8},0).wait(1).to({x:260.9},0).wait(1).to({regX:114,regY:113.4,x:267.4,y:18.8},0).wait(5));

	// cta_bg
	this.instance_1 = new lib.cta_bg_1();
	this.instance_1.setTransform(65.3,19.5,0.865,1,0,0,0,75.5,19.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(53));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,192,42);


(lib.copy_left = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_53 = function() {
		this.dispatchEvent('copy2GO');
		console.log('dispatchEvent copyholder.copy2GO');
	}
	this.frame_121 = function() {
		this.dispatchEvent('copy2END');
		console.log('dispatchEvent copyholder.copy2END');
	}
	this.frame_217 = function() {
		this.dispatchEvent('copy5GO');
		console.log('dispatchEvent copyholder.copy5GO');
	}
	this.frame_220 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(53).call(this.frame_53).wait(68).call(this.frame_121).wait(96).call(this.frame_217).wait(3).call(this.frame_220).wait(1));

	// logo
	this.instance = new lib.logo();
	this.instance.setTransform(1232.6,66.5,1,1,0,0,0,45.5,42.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(207).to({_off:false},0).to({x:878.6,alpha:1},8).wait(6));

	// copy5
	this.copy5 = new lib.copy5();
	this.copy5.setTransform(374.3,157.3,1,1,0,0,0,24.2,6.2);
	this.copy5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.copy5).wait(217).to({_off:false},0).wait(4));

	// copy4
	this.copy4 = new lib.copy4();
	this.copy4.setTransform(1603.6,77.5,1,1,0,0,0,181.5,22.5);
	this.copy4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.copy4).wait(199).to({_off:false},0).to({x:533.5},18,cjs.Ease.get(1)).wait(4));

	// copy3
	this.copy3 = new lib.copy3();
	this.copy3.setTransform(1775.2,113.5,1,1,0,0,0,172,24.5);
	this.copy3.alpha = 0;
	this.copy3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.copy3).wait(125).to({_off:false},0).to({x:635,alpha:1},18,cjs.Ease.get(1)).wait(49).to({x:1773.3,alpha:0},22).wait(7));

	// copy2
	this.copy2 = new lib.copy2();
	this.copy2.setTransform(370,82);
	this.copy2.alpha = 0;
	this.copy2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.copy2).wait(53).to({_off:false},0).to({alpha:1},2).wait(66).to({alpha:0},18).to({_off:true},7).wait(75));

	// copy1
	this.copy1 = new lib.copy1();
	this.copy1.setTransform(1785.7,138.4,1,1,0,0,0,183.3,37.4);

	this.timeline.addTween(cjs.Tween.get(this.copy1).wait(8).to({x:678.2},10,cjs.Ease.get(1)).wait(35).to({x:1602,y:136.4,alpha:0},21).to({_off:true},21).wait(126));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.close_anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"in":1,"out":11});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_10 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10).call(this.frame_10).wait(11));

	// Layer 5
	this.instance = new lib.close();
	this.instance.setTransform(317,13,1,1,0,0,0,7,7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({alpha:1},9).wait(1).to({alpha:0},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.head = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{firebreath:61});

	// timeline functions:
	this.frame_60 = function() {
		this.gotoAndPlay("1");
	}
	this.frame_94 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(60).call(this.frame_60).wait(34).call(this.frame_94).wait(1));

	// Layer 10
	this.instance = new lib.firebreath1anim("synched",0);
	this.instance.setTransform(34.6,112.5,1,1,0,0,0,-14.7,25.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(65).to({_off:false},0).wait(29).to({mode:"independent"},0).wait(1));

	// head2
	this.instance_1 = new lib.head2_1();
	this.instance_1.setTransform(40.1,71.1,1,1,27.2,0,0,54.5,66.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(64).to({_off:false},0).to({regY:66.7,rotation:7.5,x:49.1,y:72.4},6,cjs.Ease.get(1)).to({regX:54.4,rotation:0.3,x:49},24).wait(1));

	// Layer 6
	this.instance_2 = new lib.jaw2();
	this.instance_2.setTransform(30.6,46.2,1,1,-2.8,0,0,50.1,61.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(64).to({_off:false},0).to({rotation:11.7,x:38.6,y:58.1},6,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:15.8},24).wait(1));

	// head1
	this.instance_3 = new lib.headTop();
	this.instance_3.setTransform(50,39,1,1,0,0,0,49.5,47);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(60).to({rotation:11.5,x:48.3,y:42.6},3,cjs.Ease.get(-1)).to({_off:true},1).wait(31));

	// jaw1
	this.instance_4 = new lib.jawa();
	this.instance_4.setTransform(33.1,57.5,1,1,-8.5,0,0,9,6.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:6,rotation:-2,x:33},29).wait(7).to({regY:6.1,rotation:-8.5,x:33.1},24).to({regY:6,rotation:12.5,x:28,y:57.3},3,cjs.Ease.get(-1)).to({_off:true},1).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.5,-8,99,108.3);


(lib.dragonFlight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{glide:17,glideloop:45});

	// timeline functions:
	this.frame_37 = function() {
		this.head.gotoAndPlay("firebreath");
	}
	this.frame_72 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(37).call(this.frame_37).wait(35).call(this.frame_72).wait(16));

	// head
	this.head = new lib.head();
	this.head.setTransform(508.5,85.9,0.999,0.999,7.5,0,0,39.8,46.5);

	this.timeline.addTween(cjs.Tween.get(this.head).wait(39).to({regX:40,scaleX:1,scaleY:1,rotation:-7.6,x:496.4,y:74.5},33).to({_off:true},1).wait(15));

	// neck
	this.instance = new lib.neck();
	this.instance.setTransform(491.5,63.9,1,1,-19.7,0,0,18,8.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:18.1,regY:8.6,scaleX:1,scaleY:1,rotation:-23.8,x:480.7,y:64},39,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:-24,x:482.3,y:65.9},33).to({_off:true},1).wait(15));

	// wingA_2.png
	this.instance_1 = new lib.wingR2();
	this.instance_1.setTransform(293.3,-1.3,0.969,0.869,0,0,0,373.8,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:14.8,scaleY:1.17,rotation:-26.8,x:259.7,y:119.7},39,cjs.Ease.get(1)).to({regX:373.7,rotation:-28.4,x:255.6,y:85.9},33).to({_off:true},1).wait(15));

	// wingA.png
	this.instance_2 = new lib.wingR();
	this.instance_2.setTransform(437.5,43.2,0.999,0.942,24.8,0,0,218.6,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleY:1.3,rotation:-9.1,x:424.2,y:61.1},39,cjs.Ease.get(1)).to({regY:12.1,rotation:4.4,x:429.4,y:67.3},33).to({_off:true},1).wait(15));

	// body
	this.instance_3 = new lib.body();
	this.instance_3.setTransform(472,60.8,1,1,0,0,0,72,49.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-24.8,x:460,y:67.9},39,cjs.Ease.get(1)).wait(33).to({_off:true},1).wait(15));

	// wingb.png
	this.instance_4 = new lib.wingL();
	this.instance_4.setTransform(510.1,51.7,0.999,0.996,-8.5,0,0,7,13.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:13.6,scaleY:1.32,rotation:-3.1,x:500.8,y:54.1},39,cjs.Ease.get(1)).to({rotation:-27.3,x:499.9,y:61.3},33).to({_off:true},1).wait(15));

	// wingb2.png
	this.instance_5 = new lib.wingL2();
	this.instance_5.setTransform(703.3,22.6,0.989,1.14,19,0,0,54.5,31.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleY:1.99,rotation:0,skewX:36.5,skewY:34.4,x:695.9,y:43.5},39,cjs.Ease.get(1)).to({regX:54.6,skewX:27.3,skewY:25.2,x:673.6,y:-28.5},33).to({_off:true},1).wait(15));

	// leg1.png
	this.instance_6 = new lib.legL();
	this.instance_6.setTransform(422.7,83.8,1,1,1.8,0,0,21.6,13.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regY:13.5,scaleY:0.89,rotation:0,skewX:-18.3,skewY:-13.2,x:423,y:106},39,cjs.Ease.get(1)).to({skewX:-8.8,skewY:-3.7,x:421.9,y:102.2},33).to({_off:true},1).wait(15));

	// leg2.png
	this.instance_7 = new lib.legL();
	this.instance_7.setTransform(482.8,83.4,0.999,0.999,0,-21.3,158.7,16.9,5.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleY:0.85,skewX:-38.3,skewY:141.7,x:468.6,y:89.6},39,cjs.Ease.get(1)).to({x:466.9,y:78.1},33).to({_off:true},1).wait(15));

	// Layer 5
	this.instance_8 = new lib.tailnew();
	this.instance_8.setTransform(465.1,66.1,0.736,1,0,-14.9,165.1,79.3,-37.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:79.4,regY:-37.7,scaleX:0.7,skewX:-120,skewY:60,x:439.9,y:68.7},16,cjs.Ease.get(1)).to({regY:-37.8,scaleX:0.37,skewX:-150,skewY:30,x:439.8},7).wait(1).to({scaleX:0.3,rotation:158.8,skewX:0,skewY:0,x:442.1,y:70.1},0).to({regX:79.2,scaleX:0.61,rotation:149.5,x:442,y:70},4).to({scaleX:0.79,rotation:155.3},1).to({regX:79.4,rotation:114.3},6).wait(4).to({regX:79.2,regY:-37.6,scaleX:0.67,scaleY:0.75,rotation:107.5,x:441.9,y:58.8},33).to({_off:true},1).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.9,-58.8,1021.9,278.8);


(lib.dragonScene = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_165 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(165).call(this.frame_165).wait(1));

	// Layer 2
	this.instance = new lib.dragon3_1();
	this.instance.setTransform(223.7,1671.1,5.115,5.115,0,0,0,350,246.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(90).to({_off:false},0).wait(1).to({regX:167.7,regY:123.5,scaleX:5.12,scaleY:5.12,x:-700,y:1027.4},0).wait(1).to({scaleX:5.13,scaleY:5.13,x:-689.9,y:1010.6},0).wait(1).to({scaleX:5.14,scaleY:5.14,x:-678.4,y:991.5},0).wait(1).to({scaleX:5.14,scaleY:5.14,x:-665.5,y:970},0).wait(1).to({scaleX:5.15,scaleY:5.15,x:-651.1,y:946.2},0).wait(1).to({scaleX:5.16,scaleY:5.16,x:-635.4,y:920},0).wait(1).to({scaleX:5.17,scaleY:5.17,x:-618.1,y:891.3},0).wait(1).to({scaleX:5.19,scaleY:5.19,x:-599.4,y:860.3},0).wait(1).to({scaleX:5.2,scaleY:5.2,x:-579.3,y:826.8},0).wait(1).to({scaleX:5.21,scaleY:5.21,x:-557.7,y:791},0).wait(1).to({scaleX:5.23,scaleY:5.23,x:-534.8,y:752.9},0).wait(1).to({scaleX:5.24,scaleY:5.24,x:-510.5,y:712.6},0).wait(1).to({scaleX:5.26,scaleY:5.26,x:-485,y:670.2},0).wait(1).to({scaleX:5.28,scaleY:5.28,x:-458.2,y:625.8},0).wait(1).to({scaleX:5.3,scaleY:5.3,x:-430.4,y:579.6},0).wait(1).to({scaleX:5.31,scaleY:5.31,x:-401.5,y:531.6},0).wait(1).to({scaleX:5.33,scaleY:5.33,x:-371.8,y:482.3},0).wait(1).to({scaleX:5.35,scaleY:5.35,x:-341.2,y:431.5},0).wait(1).to({scaleX:5.37,scaleY:5.37,x:-310.1,y:379.8},0).wait(1).to({scaleX:5.39,scaleY:5.39,x:-278.4,y:327.2},0).wait(1).to({scaleX:5.42,scaleY:5.42,x:-246.4,y:274},0).wait(1).to({scaleX:5.44,scaleY:5.44,x:-214.1,y:220.4},0).wait(1).to({scaleX:5.46,scaleY:5.46,x:-181.8,y:166.8},0).wait(1).to({scaleX:5.48,scaleY:5.48,x:-149.5,y:113.1},0).wait(1).to({scaleX:5.5,scaleY:5.5,x:-117.4,y:59.9},0).wait(1).to({scaleX:5.52,scaleY:5.52,x:-85.7,y:7.1},0).wait(1).to({scaleX:5.54,scaleY:5.54,x:-54.3,y:-45},0).wait(1).to({scaleX:5.56,scaleY:5.56,x:-23.5,y:-96.3},0).wait(1).to({scaleX:5.58,scaleY:5.58,x:6.8,y:-146.5},0).wait(1).to({scaleX:5.6,scaleY:5.6,x:36.3,y:-195.6},0).wait(1).to({scaleX:5.62,scaleY:5.62,x:65.2,y:-243.4},0).wait(1).to({scaleX:5.64,scaleY:5.64,x:93.1,y:-289.9},0).wait(1).to({scaleX:5.65,scaleY:5.65,x:120.3,y:-335},0).wait(1).to({scaleX:5.67,scaleY:5.67,x:146.5,y:-378.5},0).wait(1).to({scaleX:5.69,scaleY:5.69,x:171.8,y:-420.6},0).wait(1).to({scaleX:5.7,scaleY:5.7,x:196.2,y:-461.1},0).wait(1).to({scaleX:5.72,scaleY:5.72,x:219.6,y:-500},0).wait(1).to({scaleX:5.73,scaleY:5.73,x:242.1,y:-537.3},0).wait(1).to({scaleX:5.75,scaleY:5.75,x:263.6,y:-573},0).wait(1).to({scaleX:5.76,scaleY:5.76,x:284.1,y:-607.1},0).wait(1).to({scaleX:5.77,scaleY:5.77,x:303.7,y:-639.6},0).wait(1).to({scaleX:5.78,scaleY:5.78,x:322.4,y:-670.6},0).wait(1).to({scaleX:5.8,scaleY:5.8,x:340.1,y:-700},0).wait(1).to({scaleX:5.81,scaleY:5.81,x:356.8,y:-727.8},0).wait(1).to({scaleX:5.82,scaleY:5.82,x:372.7,y:-754.2},0).wait(1).to({scaleX:5.83,scaleY:5.83,x:387.7,y:-779.1},0).wait(1).to({scaleX:5.84,scaleY:5.84,x:401.8,y:-802.6},0).wait(1).to({scaleX:5.84,scaleY:5.84,x:415.1,y:-824.6},0).wait(1).to({scaleX:5.85,scaleY:5.85,x:427.6,y:-845.3},0).wait(1).to({scaleX:5.86,scaleY:5.86,x:439.2,y:-864.6},0).wait(1).to({scaleX:5.87,scaleY:5.87,x:450.1,y:-882.6},0).wait(1).to({scaleX:5.87,scaleY:5.87,x:460.1,y:-899.4},0).wait(1).to({scaleX:5.88,scaleY:5.88,x:469.4,y:-914.8},0).wait(1).to({scaleX:5.88,scaleY:5.88,x:478,y:-929.1},0).wait(1).to({scaleX:5.89,scaleY:5.89,x:485.9,y:-942.2},0).wait(1).to({scaleX:5.89,scaleY:5.89,x:493.1,y:-954.1},0).wait(1).to({scaleX:5.9,scaleY:5.9,x:499.6,y:-965},0).wait(1).to({scaleX:5.9,scaleY:5.9,x:505.4,y:-974.6},0).wait(1).to({scaleX:5.91,scaleY:5.91,x:510.6,y:-983.3},0).wait(1).to({scaleX:5.91,scaleY:5.91,x:515.2,y:-991},0).wait(1).to({scaleX:5.91,scaleY:5.91,x:519.2,y:-997.5},0).wait(1).to({scaleX:5.91,scaleY:5.91,x:522.6,y:-1003.2},0).wait(1).to({scaleX:5.92,scaleY:5.92,x:525.5,y:-1007.9},0).wait(1).to({scaleX:5.92,scaleY:5.92,x:527.8,y:-1011.7},0).wait(1).to({scaleX:5.92,scaleY:5.92,x:529.4,y:-1014.5},0).wait(1).to({regX:350,regY:246.5,x:1609.5,y:-288.6},0).wait(10));

	// fire1
	this.instance_1 = new lib.fire1("synched",0);
	this.instance_1.setTransform(46.7,71.5,1.248,1.248,0,0,0,34,128.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(76).to({_off:false},0).wait(90));

	// fire1
	this.instance_2 = new lib.fire1("synched",0);
	this.instance_2.setTransform(279.8,218.4,1.298,1.298,0,0,180,34,128.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(72).to({_off:false},0).wait(94));

	// fire1
	this.instance_3 = new lib.fire1("synched",0);
	this.instance_3.setTransform(-374.1,171.2,1,1,0,0,0,34,128.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(68).to({_off:false},0).wait(98));

	// dragon
	this.instance_4 = new lib.dragonFlight();
	this.instance_4.setTransform(-414.6,-44.7,0.346,0.346,0,0,0,485.1,150.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:484.9,regY:150.2,scaleX:1.61,scaleY:1.61,x:532,y:80.5},126).to({_off:true},1).wait(39));

	// fire1
	this.instance_5 = new lib.fire1("synched",0);
	this.instance_5.setTransform(-387.1,86.5,1,1,0,0,0,34,128.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(82).to({_off:false},0).wait(84));

	// fire1
	this.instance_6 = new lib.fire1("synched",0);
	this.instance_6.setTransform(-143.1,211.2,1,1,0,0,0,34,128.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(77).to({_off:false},0).wait(89));

	// fire1
	this.instance_7 = new lib.fire1("synched",0);
	this.instance_7.setTransform(-302.3,129.2,1,1,0,0,0,34,128.1);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(82).to({_off:false},0).wait(84));

	// fire1
	this.instance_8 = new lib.fire1("synched",0);
	this.instance_8.setTransform(33.9,200.2,1,1,0,0,0,34,128.1);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(44).to({_off:false},0).wait(122));

	// fire1
	this.instance_9 = new lib.fire1("synched",0);
	this.instance_9.setTransform(-73,227.1,1,1,0,0,0,34,128.1);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(37).to({_off:false},0).wait(129));

	// castle
	this.instance_10 = new lib.castle();
	this.instance_10.setTransform(9.6,-6.8,1.567,1.567,0,0,0,485.1,150);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({regX:485,scaleX:1,scaleY:1,x:0,y:0},95,cjs.Ease.get(1)).wait(71));

	// Layer 10
	this.instance_11 = new lib.midground();
	this.instance_11.setTransform(50.8,8.3,1.467,1.467,0,0,0,485,150.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({regY:150,scaleX:1,scaleY:1,x:36,y:1},95,cjs.Ease.get(1)).wait(71));

	// Layer 11
	this.instance_12 = new lib.bg();
	this.instance_12.setTransform(50.9,15.2,1.455,1.455,0,0,0,485,150);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({scaleX:1,scaleY:1,x:23.1,y:23.6},95,cjs.Ease.get(1)).wait(71));

	// Layer 12
	this.instance_13 = new lib.sky();
	this.instance_13.setTransform(105.8,23.3,1.085,1.085,0,0,0,692.2,183.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({regY:183.6,scaleX:1,scaleY:1,x:105.9,y:23.4},95,cjs.Ease.get(1)).wait(71));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-750.5,-254.4,1642.8,520);


// stage content:



(lib.dragon_masthead_970x300 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var hotspot = this.hotspot;
		var CTA = this.CTA;
		var legal_btn = this.legal_btn;
		var legal_ex = this.legal_ex;
		var close_anim = this.close_anim;
		var beOver = false;
		var beOut = false;
		var hasTouch = ('ontouchstart' in window);
		console.log(hotspot);
		console.log(CTA);
		
		var uid = setInterval(checkStage,1);
		function checkStage(){
			if(this.stage){
				this.stage.enableMouseOver(10);
				clearInterval(uid);
			}
		}
		
		
		this.handleOver = function (event){
			if(CTA.stage){
				//console.log(">>>>>in");
				beOver = true;
				beOut = false;
			}
		}
		
		this.handleOut = function (event){
			if(CTA.stage){
			
				beOver = false;
				beOut = true;
			}
		}
		
		this.legalOver = function (event)
		{
		  if(legal_btn.stage)
		    {
		      legal_btn.gotoAndPlay('in');
		    }
		}
		  
		this.legalOut = function (event)
		{
		  if(legal_btn.stage)
		    {
		      legal_btn.gotoAndPlay('out');
		    }
		}
		this.legalClick = function (event)
		{
		  if(legal_btn.stage)
		    {
		      legal_ex.gotoAndPlay('in');
		      close_anim.gotoAndPlay('in');
		    }
		}
		
		this.closeClick = function (event)
		{
		  if(legal_btn.stage&&legal_ex.currentLabel=='in')
		    {
		      legal_ex.gotoAndPlay('out');
		      close_anim.gotoAndPlay('out');
				
		    }
		}
		
		
		//this.device2.gotoAndPlay("rollover");
		
		
		var thisStage = this;
		var device2 = this.device2;
		
		this.playGame = function(){
			thisStage.device2.gotoAndPlay("rollover");
		}
		
		
		var sid = setInterval(checkState,10);
		
		function checkState(){
			if(!CTA.stage) return;
			//console.log("CTA.aniCom:"+CTA.aniCom);
			
			if(device2.stage){
				if(beOver){
					//console.log('over');
					//console.log(device2.aniDevice)
					if(device2.aniDevice == true){
						console.log('everything is a go')
						thisStage.playGame();
					}
				}
			}
				
			if(beOver)
			{
				if(CTA.aniCom && CTA.currentLabel != 'in')
				{
					CTA.gotoAndPlay("in");
					beOver = false;
					return;
				}
			}
			if(beOut)
			{
				if(CTA.aniCom && CTA.currentLabel == 'in')
				{
					CTA.gotoAndPlay("out");
					beOut = false;
					return;
				}
			}
		}
		var stage = this;
		/*var stage = this;
		
		this.playTimeLine = function(){
			stage.gotoAndPlay(1);
		}
		        
		this.stop();*/
	}
	this.frame_123 = function() {
		//this.dispatchEvent('copy2GO');
		//console.log('dispatchEvent copy2GO');
	}
	this.frame_356 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(123).call(this.frame_123).wait(233).call(this.frame_356).wait(1));

	// close_anim
	this.close_anim = new lib.close_anim();
	this.close_anim._off = true;

	this.timeline.addTween(cjs.Tween.get(this.close_anim).wait(356).to({_off:false},0).wait(1));

	// legal_ex
	this.legal_ex = new lib.legal_ex();
	this.legal_ex.setTransform(165,140,1,1,0,0,0,165,140);
	this.legal_ex._off = true;

	this.timeline.addTween(cjs.Tween.get(this.legal_ex).wait(356).to({_off:false},0).wait(1));

	// legal
	this.legal_btn = new lib.legal_btn();
	this.legal_btn.setTransform(20.2,287.5,1,1,0,0,0,11.2,3.5);
	this.legal_btn.alpha = 0;
	this.legal_btn._off = true;

	this.timeline.addTween(cjs.Tween.get(this.legal_btn).wait(337).to({_off:false},0).wait(1).to({regX:0,regY:0,x:9,y:284,alpha:0.111},0).wait(1).to({alpha:0.223},0).wait(1).to({alpha:0.334},0).wait(1).to({alpha:0.442},0).wait(1).to({alpha:0.543},0).wait(1).to({alpha:0.635},0).wait(1).to({alpha:0.715},0).wait(1).to({alpha:0.782},0).wait(1).to({alpha:0.836},0).wait(1).to({alpha:0.88},0).wait(1).to({alpha:0.913},0).wait(1).to({alpha:0.939},0).wait(1).to({alpha:0.959},0).wait(1).to({alpha:0.974},0).wait(1).to({alpha:0.984},0).wait(1).to({alpha:0.992},0).wait(1).to({alpha:0.997},0).wait(1).to({alpha:0.999},0).wait(1).to({regX:11.2,regY:3.5,x:20.2,y:287.5,alpha:1},0).wait(1));

	// CTA
	this.CTA = new lib.CTA();
	this.CTA.setTransform(737,241);
	this.CTA.alpha = 0;
	this.CTA._off = true;

	this.timeline.addTween(cjs.Tween.get(this.CTA).wait(325).to({_off:false},0).wait(1).to({regX:96,regY:21,x:833,y:262,alpha:0.106},0).wait(1).to({alpha:0.212},0).wait(1).to({alpha:0.318},0).wait(1).to({alpha:0.421},0).wait(1).to({alpha:0.518},0).wait(1).to({alpha:0.609},0).wait(1).to({alpha:0.688},0).wait(1).to({alpha:0.757},0).wait(1).to({alpha:0.813},0).wait(1).to({alpha:0.859},0).wait(1).to({alpha:0.896},0).wait(1).to({alpha:0.925},0).wait(1).to({alpha:0.947},0).wait(1).to({alpha:0.964},0).wait(1).to({alpha:0.977},0).wait(1).to({alpha:0.986},0).wait(1).to({alpha:0.993},0).wait(1).to({alpha:0.997},0).wait(1).to({alpha:0.999},0).wait(1).to({regX:0,regY:0,x:737,y:241,alpha:1},0).wait(12));

	// hotspot
	this.hotspot = new lib.hotspot();
	this.hotspot.setTransform(45,36.4,1,1,0,0,0,45,36.4);
	this.hotspot.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.hotspot).wait(357));

	// copyHolder
	this.copyHolder = new lib.copy_left();
	this.copyHolder.setTransform(-4,8);
	this.copyHolder._off = true;

	this.timeline.addTween(cjs.Tween.get(this.copyHolder).wait(99).to({_off:false},0).wait(258));

	// devicescreen2
	this.device2 = new lib.device2_1();
	this.device2.setTransform(209,171.7,0.089,1.124,0,0,0,183.7,129.9);
	this.device2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.device2).wait(146).to({_off:false},0).wait(1).to({regX:205.7,regY:127.4,scaleX:0.22,scaleY:1.11,x:213.6,y:167.8},0).wait(1).to({scaleX:0.33,scaleY:1.11,x:216.1,y:166.9},0).wait(1).to({scaleX:0.43,scaleY:1.1,x:218.2,y:166},0).wait(1).to({scaleX:0.52,scaleY:1.09,x:220.2,y:165.3},0).wait(1).to({scaleX:0.6,scaleY:1.09,x:221.9,y:164.6},0).wait(1).to({scaleX:0.68,scaleY:1.08,x:223.5,y:164},0).wait(1).to({scaleX:0.74,scaleY:1.08,x:225,y:163.4},0).wait(1).to({scaleX:0.81,scaleY:1.07,x:226.3,y:162.9},0).wait(1).to({scaleX:0.86,scaleY:1.07,x:227.6,y:162.4},0).wait(1).to({scaleX:0.92,scaleY:1.06,x:228.7,y:162},0).wait(1).to({scaleX:0.96,scaleY:1.06,x:229.7,y:161.6},0).wait(1).to({scaleX:1,scaleY:1.06,x:230.5,y:161.3},0).wait(1).to({regX:183.7,regY:129.9,scaleX:1.04,scaleY:1.05,x:208.5,y:163.6},0).to({regX:183.5,regY:130.1,scaleX:1.05,scaleY:1.05,x:208.4,y:163.5},1).wait(137).to({regX:205.7,regY:127.4,scaleX:1.05,scaleY:1.05,x:231.3,y:160.6},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:230.1},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:228.4},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:226.1},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:223.5},0).wait(1).to({scaleX:1,scaleY:1,x:220.7},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:217.7},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:214.6},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:211.5},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:208.4},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:205.3},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:202.5},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:199.8},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:197.4},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:195.4},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:193.9,y:160.5},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:192.8,y:160.6},0).wait(1).to({regX:183.6,regY:130,scaleX:0.88,scaleY:0.88,x:172.9,y:162.9},0).wait(43));

	// deviceback2
	this.instance = new lib.device2back();
	this.instance.setTransform(203.6,42.2,0.53,1.212,4,0,0,56.8,11.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(146).to({_off:false},0).wait(1).to({regX:51.7,regY:122,scaleX:0.6,scaleY:1.19,rotation:3.5,x:175.7,y:173.1},0).wait(1).to({scaleX:0.66,scaleY:1.17,rotation:3,x:161.8,y:170.6},0).wait(1).to({scaleX:0.72,scaleY:1.16,rotation:2.6,x:149.5,y:168.4},0).wait(1).to({scaleX:0.76,scaleY:1.14,rotation:2.2,x:138.3,y:166.4},0).wait(1).to({scaleX:0.81,scaleY:1.13,rotation:1.9,x:128,y:164.5},0).wait(1).to({scaleX:0.85,scaleY:1.12,rotation:1.6,x:118.7,y:162.8},0).wait(1).to({scaleX:0.89,scaleY:1.11,rotation:1.3,x:110.2,y:161.3},0).wait(1).to({scaleX:0.92,scaleY:1.1,rotation:1,x:102.3,y:159.9},0).wait(1).to({scaleX:0.95,scaleY:1.09,rotation:0.8,x:95.2,y:158.6},0).wait(1).to({scaleX:0.98,scaleY:1.08,rotation:0.6,x:88.6,y:157.4},0).wait(1).to({scaleX:1.01,scaleY:1.07,rotation:0.4,x:82.8,y:156.4},0).wait(1).to({scaleX:1.03,scaleY:1.06,rotation:0.2,x:77.7,y:155.5},0).wait(1).to({scaleX:1.05,scaleY:1.06,rotation:0.1,x:73.6,y:154.7},0).wait(1).to({regX:56.6,regY:11.3,scaleX:1.06,scaleY:1.06,rotation:0,x:76.8,y:37.5},0).wait(136).to({y:38.8},0).wait(1).to({regX:51.7,regY:122,scaleX:1.05,scaleY:1.05,x:71.5,y:155.6},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:71},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:70.4,y:155.7},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:69.7},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:68.8},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:67.8,y:155.8},0).wait(1).to({scaleX:1,scaleY:1,x:66.8,y:155.9},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:65.7,y:156},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:64.6},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:63.5,y:156.1},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:62.5},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:61.5,y:156.2},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:60.6,y:156.3},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:59.8},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:59.1,y:156.4},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:58.5},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:58.1},0).wait(1).to({regX:56.6,regY:11.3,scaleX:0.89,scaleY:0.89,x:62.4,y:58.3},0).wait(43));

	// device1
	this.instance_1 = new lib.device1_keyboard();
	this.instance_1.setTransform(234,328.5,5.08,5.08,0,0,0,176.5,124);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(99).to({_off:false},0).to({scaleX:1,scaleY:1,y:156.5},18,cjs.Ease.get(1)).wait(19).to({regX:201.2,regY:172.9,x:258.7,y:205.4},0).to({scaleX:0.95,scaleY:2.77,skewX:4.3,skewY:-39.9,x:224.6,y:104.1},6,cjs.Ease.get(-1)).to({scaleY:3.55,skewX:5.8,skewY:-54.4,x:211.1,y:62.7},1).to({regX:221.6,regY:175.4,scaleX:0.87,scaleY:4.18,skewX:7.7,skewY:-71.2,x:200.7,y:23.9},1).to({_off:true},1).wait(212));

	// devicescreen1
	this.instance_2 = new lib.device1_screen();
	this.instance_2.setTransform(226.2,338.3,5.002,5.002,0,0,0,176.5,124);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(99).to({_off:false},0).to({scaleX:1,scaleY:1,x:234,y:157.9},18,cjs.Ease.get(1)).wait(19).to({regX:234.5,regY:177.6,x:292,y:211.5},0).to({scaleX:0.99,scaleY:0.99,skewX:1.7,skewY:-0.3,x:287.9,y:206},1,cjs.Ease.get(-0.72)).to({regX:234.4,scaleX:1,scaleY:0.97,skewX:4.2,skewY:-1.1,x:286.3,y:197.3},1).to({regX:234.5,scaleX:0.94,scaleY:1,skewX:7.4,skewY:-6,x:277,y:184.2},1).to({regX:234.6,scaleX:0.93,scaleY:0.86,skewX:12.7,skewY:-8.6,x:274.5,y:162.2},1).to({regX:234.5,regY:177.7,scaleX:0.82,skewX:6.5,skewY:-14.9,x:265.7,y:135.4},1).to({_off:true},1).wait(215));

	// Layer 12
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#999999","#333333"],[0,1],-23.7,3.7,6.3,3.7).s().p("Ag9UJMAAAgnGIB7hLMAAAAoRg");
	this.shape.setTransform(215.3,146.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(145).to({_off:false},0).to({_off:true},1).wait(211));

	// Layer 10
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#999999").ss(3,1,1).p("AUMpfMghsAMIImrG3");
	this.shape_1.setTransform(335.3,105.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#666666").ss(3,1,1).p("A0LJgIAqmRITfm5IUOl1");
	this.shape_2.setTransform(335.3,105.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AzhDPITfm5IUOl1MghsAMIImrG3g");
	this.shape_3.setTransform(335.3,105.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#999999").ss(3,1,1).p("AUHi+MggNACoIoADV");
	this.shape_4.setTransform(309,96.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#666666").ss(3,1,1).p("A0GF1IAtmjIOVlGIZLFs");
	this.shape_5.setTransform(309,78.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#666666","#999999"],[0.192,1],-128.7,0,128.8,0).s().p("AzZguIOVlGIZLFsMggNACmIoADXg");
	this.shape_6.setTransform(309,78.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#999999").ss(3,1,1).p("AqEt2IUJbt");
	this.shape_7.setTransform(290.5,106.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#666666").ss(3,1,1).p("AgTEiIiQl4IFHjL");
	this.shape_8.setTransform(209.5,46.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#999999","#333333"],[0,1],80.4,9.2,-93.7,-9.2).s().p("AmbEkIj9pVIiQl6IFJjLIUIbsg");
	this.shape_9.setTransform(274,106.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#999999").ss(3,1,1).p("AmMzoMAMZAnR");
	this.shape_10.setTransform(265.7,143.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#666666").ss(3,1,1).p("AgHEiIhdl4IDJjL");
	this.shape_11.setTransform(215.8,46.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#999999","#333333"],[0,1],98.9,-27.8,-75.2,-46.2).s().p("AAwNrInE4PIhel6IDMjKMAMZAnRg");
	this.shape_12.setTransform(255.5,143.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},142).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},1).to({state:[]},1).wait(211));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_99 = new cjs.Graphics().p("EhRuAu4MADdhzoMCgAgHMMgCMCX5g");
	var mask_graphics_100 = new cjs.Graphics().p("EhKoAq1MADIhpmMCSJgGnMgCACKxg");
	var mask_graphics_101 = new cjs.Graphics().p("EhD8AnAMAC1hgJMCFEgGDMgB1B+ag");
	var mask_graphics_102 = new cjs.Graphics().p("Eg9qAjaMACkhXRMB4xgFhMgBqByxg");
	var mask_graphics_103 = new cjs.Graphics().p("Eg3yAgCMACThO8MBtSgFDMgBgBn7g");
	var mask_graphics_104 = new cjs.Graphics().p("EgyUAc6MACEhHNMBilgEmMgBWBdzg");
	var mask_graphics_105 = new cjs.Graphics().p("EgtPAaBMAB0hADMBYsgEMMgBOBUdg");
	var mask_graphics_106 = new cjs.Graphics().p("EgolAXXMABng5eMBPkgDyMgBFBLzg");
	var mask_graphics_107 = new cjs.Graphics().p("EgkVAU6MABbgzcMBHQgDcMgA/BD9g");
	var mask_graphics_108 = new cjs.Graphics().p("EggeASuMABQguAMA/tgDIMgA3A81g");
	var mask_graphics_109 = new cjs.Graphics().p("A9CQvMABGgpIMA4/gC1MgAyA2dg");
	var mask_graphics_110 = new cjs.Graphics().p("A5/PAMAA+gk1MAzBgClMgAsAw1g");
	var mask_graphics_111 = new cjs.Graphics().p("A3WNgMAA2ghHMAt3gCYMgAnAr+g");
	var mask_graphics_112 = new cjs.Graphics().p("A1IMOIAw99MAphgCMMgAkAn3g");
	var mask_graphics_113 = new cjs.Graphics().p("AzTLMIAr7YMAl9gCDMgAiAkfg");
	var mask_graphics_114 = new cjs.Graphics().p("Ax5KXIAn5XMAjMgB7MgAfAh3g");
	var mask_graphics_115 = new cjs.Graphics().p("Aw4JzIAk38MAhNgB2Igdf/g");
	var mask_graphics_116 = new cjs.Graphics().p("AwRJcIAi3EMAgBgBzIgce3g");
	var mask_graphics_117 = new cjs.Graphics().p("AwEJVIAi2zIfnhxIgcefg");
	var mask_graphics_136 = new cjs.Graphics().p("AwEJVIAZ2zIfwhxIgcefg");
	var mask_graphics_137 = new cjs.Graphics().p("AwRJZIBQ2fIfThiIhadRg");
	var mask_graphics_138 = new cjs.Graphics().p("AwnJlICK1rIfFh8IiLcFg");
	var mask_graphics_139 = new cjs.Graphics().p("AwVLnIDP2LIdcjrIj2cfg");
	var mask_graphics_140 = new cjs.Graphics().p("AwpMRIEgzPIczllIlvZHg");
	var mask_graphics_141 = new cjs.Graphics().p("ArTltIZOn7IjVasI4fAlg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(99).to({graphics:mask_graphics_99,x:562.7,y:204.1}).wait(1).to({graphics:mask_graphics_100,x:534.4,y:196.5}).wait(1).to({graphics:mask_graphics_101,x:507.8,y:189.4}).wait(1).to({graphics:mask_graphics_102,x:482.7,y:182.7}).wait(1).to({graphics:mask_graphics_103,x:459.3,y:176.5}).wait(1).to({graphics:mask_graphics_104,x:437.5,y:170.6}).wait(1).to({graphics:mask_graphics_105,x:417.3,y:165.2}).wait(1).to({graphics:mask_graphics_106,x:398.7,y:160.3}).wait(1).to({graphics:mask_graphics_107,x:381.8,y:155.7}).wait(1).to({graphics:mask_graphics_108,x:366.4,y:151.6}).wait(1).to({graphics:mask_graphics_109,x:352.7,y:148}).wait(1).to({graphics:mask_graphics_110,x:340.6,y:144.7}).wait(1).to({graphics:mask_graphics_111,x:330.1,y:141.9}).wait(1).to({graphics:mask_graphics_112,x:321.2,y:139.5}).wait(1).to({graphics:mask_graphics_113,x:314,y:137.6}).wait(1).to({graphics:mask_graphics_114,x:308.3,y:136.1}).wait(1).to({graphics:mask_graphics_115,x:304.3,y:135}).wait(1).to({graphics:mask_graphics_116,x:301.8,y:134.3}).wait(1).to({graphics:mask_graphics_117,x:301,y:134.1}).wait(19).to({graphics:mask_graphics_136,x:301,y:134.1}).wait(1).to({graphics:mask_graphics_137,x:299.8,y:126.6}).wait(1).to({graphics:mask_graphics_138,x:302.1,y:117.6}).wait(1).to({graphics:mask_graphics_139,x:298.1,y:98.4}).wait(1).to({graphics:mask_graphics_140,x:301.9,y:81.7}).wait(1).to({graphics:mask_graphics_141,x:282.8,y:49.8}).wait(1).to({graphics:null,x:0,y:0}).wait(215));

	// dragonscene1
	this.instance_3 = new lib.dragonScene("synched",0);
	this.instance_3.setTransform(551.1,165.8,1,1,0,0,0,109.8,17.8);

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(99).to({mode:"independent"},0).to({regX:109.7,regY:17.9,scaleX:0.39,scaleY:0.39,rotation:6.7,x:325,y:117.5},18,cjs.Ease.get(1)).wait(19).to({x:362.4,y:43.3},5).to({_off:true},1).wait(215));

	// Layer 1
	this.instance_4 = new lib.bkg_glow();
	this.instance_4.setTransform(234.6,145.6,0.781,0.681,-7.9,0,0,0.1,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(101).to({x:282.6},0).wait(45).to({x:212.6},14,cjs.Ease.get(1)).wait(136).to({x:182.6},18).wait(43));

	// blue
	this.instance_5 = new lib.blue_bkg();
	this.instance_5.setTransform(485,150,1,1,0,0,0,485,150);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#004A87").s().p("EhLxAXbMAAAgu2MCXjAAAMAAAAu2g");
	this.shape_13.setTransform(485,150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.instance_5}]}).to({state:[{t:this.shape_13},{t:this.instance_5}]},108).wait(249));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(265.4,56.1,1430.3,475.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;