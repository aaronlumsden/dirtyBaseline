function dirtyBaseline(number, color) {


    var self = this;
    var baseline;
    var baselineSpan;

    this.number = (typeof number == 'undefined') ? 12 : number;
    this.color = (typeof color == 'undefined') ? '#0ff' : color;


    this.init = function() {

        var body = document.getElementsByTagName('body')[0];

        body.style.position = "relative";

        var div = document.createElement('div');
        div.id = 'baseline';

        div.style.height = '100%';
        div.style.display = 'block';
        div.style.width = '100%';
        div.style.background = "-webkit-linear-gradient(top," + self.color + " 0,rgba(255,255,255,0)1px)";
        div.style.background = "-moz-linear-gradient(top," + self.color + " 0,rgba(255,255,255,0)1px)";
        div.style.background = "-o-linear-gradient(top," + self.color + " 0,rgba(255,255,255,0)1px)";
        div.style.background = "linear-gradient(to bottom," + self.color + " 0,rgba(255,255,255,0)1px)";
        div.style.position = "absolute";
        div.style.top = "0px";
        div.style.left = "0px";
        div.style.backgroundRepeat = "repeat-y";
        div.style.backgroundSize = "100% " + this.number + "px";
        div.style.zIndex = "-1";

        body.appendChild(div);

        baseline = document.getElementById("baseline");

        var span = document.createElement('span');
        span.id = 'baseline_span';
        span.innerHTML = self.number + 'px';
        span.style.position = "fixed";
        span.style.bottom = "0px";
        span.style.right = "0px";
        span.style.fontWeight = "bold";
        span.style.color = "white";
        span.style.padding = "10px";
        span.style.background = '#333';
        span.style.fontFamily = "arial,helvetica,sans-serif";
        span.style.fontSize = "12px";
        span.style.zIndex = "5000";

        baseline.appendChild(span);
        baselineSpan = document.getElementById("baseline_span");

        self.addEvents();

    };

    this.addEvents = function() {

        window.onkeydown = function(e) {
            e = e || window.event;
            var keyCode = e.keyCode || e.which,
                arrow = {
                    left: 37,
                    up: 38,
                    right: 39,
                    down: 40,
                    show: 84
                };
            if (e.shiftKey) {
                switch (keyCode) {
                    case arrow.up:
                    e.preventDefault();
                        self.number++;
                        self.change(self.number);
                        break;
                    case arrow.down:
                    e.preventDefault();
                        self.number--;
                        self.change(self.number);
                        break;
                    case arrow.show:
                    e.preventDefault();
                        self.toggle(self.number);
                        break;
                }
            }
        };


    };


    this.change = function(number) {
        baseline.style.backgroundSize = "100% " + number + "px";
        baselineSpan.innerHTML = number + "px";
    };

    this.toggle = function() {

        return (baseline.style.display == 'block') ? baseline.style.display = 'none' : baseline.style.display = 'block';

    };

    this.init();

}
