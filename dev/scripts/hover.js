var hasClass = function(el, cn)
{
    return (' ' + el.className + ' ').indexOf(' ' + cn + ' ') !== -1;
};

var addClass = function(el, cn)
{
    if (!hasClass(el, cn)) {
        el.className = (el.className === '') ? cn : el.className + ' ' + cn;
    }
};

var removeClass = function(el, cn)
{
    if (hasClass(el,cn)) {
        var reg = new RegExp('(\\s|^)'+ cn +'(\\s|$)');
        el.className=el.className.replace(reg,' ');
    }
};

// The hoverintent way
///////////////////////////
var drop = document.getElementsByClassName('js-dropdown');

var hoverDelay = hoverintent(drop, function(e) {
  //this.addClass = 'on';
  addClass(drop, 'js-is-open');
}, function(e) {
  removeClass(drop, 'js-is-open');
}).options({
  timeout:1000
});

/*var hoverThree = hoverintent(third, function() {
  this.className = 'on';
}, function(e) {
  this.className = 'off';
}).options({
  timeout:500
});

*/
