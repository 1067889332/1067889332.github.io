function text(parameter) {
	var arr;
	var obj;
	var typewriter = {
		str: parameter.str || "土地是以它的肥沃和收获而被估价的。才能也是土地，不过它生产的不是粮食，而是真理。如果只能滋生瞑想和幻想的话，即使再大的才能也只是砂地或盐池，那上面连小草也长不出来的。",
		effect: parameter.effect || "upBig",
		speed: parameter.speed || 200,
		box: parameter.conBox || "#text",
	}
	arr = [];
	for (var i = 0; i < typewriter.str.length; i++) {
		if (arr[i] == "") {
			arr[i] = " ";
		}
		arr[i] = typewriter.str[i];
	}
	console.log(arr);
	var num = 0;
	obj = setInterval(function () {
		var randomN = Math.floor(Math.random() * 4) + 1;
		var eff = null;
		if (randomN === 1) {
			eff = "fadeInRightBig";
		}
		if (randomN === 2) {
			eff = "fadeInLeftBig";
		}
		if (randomN === 3) {
			eff = "fadeInUpBig";
		}
		if (randomN === 4) {
			eff = "fadeInDownBig";
		}
		if (typewriter.effect === "normal") {
			$(typewriter.box).append('<span style="display: inline-block;" class="tip">' + arr[num] + '</span>');
		} else if (typewriter.effect === "rightBig") {
			$(typewriter.box).append('<span style="display: inline-block;" class="tip animated fadeInRightBig">' + arr[num] + '</span>');
		} else if (typewriter.effect === "right") {
			$(typewriter.box).append('<span style="display: inline-block;" class="tip animated fadeInRight">' + arr[num] + '</span>');
		} else if (typewriter.effect === "leftBig") {
			$(typewriter.box).append('<span style="display: inline-block;" class="tip animated fadeInLeftBig">' + arr[num] + '</span>');
		} else if (typewriter.effect === "left") {
			$(typewriter.box).append('<span style="display: inline-block;" class="tip animated fadeInLeft">' + arr[num] + '</span>');
		} else if (typewriter.effect === "downBig") {
			$(typewriter.box).append('<span style="display: inline-block;" class="tip animated fadeInDownBig">' + arr[num] + '</span>');
		} else if (typewriter.effect === "down") {
			$(typewriter.box).append('<span style="display: inline-block;" class="tip animated fadeInDown">' + arr[num] + '</span>');
		} else if (typewriter.effect === "upBig") {
			$(typewriter.box).append('<span style="display: inline-block;" class="tip animated fadeInUpBig">' + arr[num] + '</span>');
		} else if (typewriter.effect === "up") {
			$(typewriter.box).append('<span style="display: inline-block;" class="tip animated fadeInUp">' + arr[num] + '</span>');
		} else if (typewriter.effect === "random") {
			$(typewriter.box).append('<span style="display: inline-block;" class="tip animated ' + eff + '">' + arr[num] + '</span>');
		}
		num++
		if (num === arr.length) {
			clearInterval(obj);
		}
	}, typewriter.speed);
	return obj;
}