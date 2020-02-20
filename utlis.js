
/**
 * Pad a Number with Leading Zeros 
 * ex) pad(2, 4); -> "0002"
 *  
 * @param {Number} n 
 * @param {Number} width Leading Zeros number
 * @returns {String} 
 */
function pad(n, width) {
	n = n + '';
	return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
}

/**
 * 
 * @param {CanvasRenderingContext2D} ctx
 * @param {HTMLImageElement} image
 * @param {float} angle Degree to rotation angle.
 * @param {float} x center X position
 * @param {float} y center Y position
 */
function rotateAndDrawPosition(ctx, image, angle, x, y) {
	var cnW = image.width;
	var cnH = image.height;
	ctx.save();
	ctx.translate(x, y);
	ctx.rotate(angle * (Math.PI / 180));
	ctx.drawImage(image, -(cnW / 2), -(cnH / 2));
	ctx.restore();
}

/**
 * get random number 
 * @param {Number} min
 * @param {Number} max
 * @returns Number
 */
function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

/**
 * 
 * @param degrees
 * @returns {float}
 */
function degreeToRadian(degrees) {return degrees * Math.PI / 180;}

/**
 * 
 * @param radians
 * @returns {float}
 */
function radianToDegree(radians) {return radians * 180 / Math.PI;}

/**
 * 
 * @param {float} cx center x
 * @param {float} cy center y
 * @param {float} x
 * @param {float} y
 * @returns {Number} degree angle
 */
function getAngle(cx, cy, x, y) {return radianToDegree(Math.atan2(y - cy, x - cx));}

/**
 * 
 * @param {float} degreeAngle
 * @param {float} radius
 * @param {float} centerX
 * @returns {float} X position
 */
function getPointX(degreeAngle, radius, centerX) {return Math.cos(degreeToRadian(degreeAngle)) * radius + centerX;}

/**
 * 
 * @param {float} degreeAngle
 * @param {float} radius
 * @param {float} centerY
 * @returns {float} Y position
 */
function getPointY(degreeAngle, radius, centerY) {return Math.sin(degreeToRadian(degreeAngle)) * radius + centerY;}

/**
 * 
 * @param cx
 * @param cy
 * @param x
 * @param y
 * @returns
 */
function getAngleRadian(cx, cy, x, y) {return Math.atan2(y - cy, x - cx);}

/**
 * 
 * @param radianAngle
 * @param radius
 * @param centerX
 * @returns
 */
function getPointXRadian(radianAngle, radius, centerX) {return Math.cos(radianAngle) * radius + centerX;}

/**
 * 
 * @param radianAngle
 * @param radius
 * @param centerY
 * @returns
 */
function getPointYRadian(radianAngle, radius, centerY) {return Math.sin(radianAngle) * radius + centerY;}

/**
 * get distance between (x1,y1) (x2,y2)
 * @param x1
 * @param y1
 * @param x2
 * @param y2
 * @returns
 */
function distance(x1, y1, x2, y2) {return Math.hypot(x2-x1, y2-y1);}