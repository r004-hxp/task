/* 1、写一个事件系统，实现如下功能： const event = new Event();
 *    event.on("change", value => console.log(value)) 
 *    //5
 *    event.emit("change", 5)
 *
*/

//构造函数 Event

function Event() {
    this._events = {};
}

Event.prototype.on = function (type, fn) {
    if (!this._events[type]) {
        this._events[type] = [];
    }
    this._events[type].push(fn);
}

Event.prototype.once = function(type, fn) {
    let fire = false;
    function magic() {
        this.off(type, fn);
        if (!fire) {
            fire = true;
            fn.apply(this, arguments);
        }
    }
    this.on(type, magic);
}

Event.prototype.off = function (type, fn) {
    let _events = this._events[type];
    if (!_events) {
        return;
    }
    let count = _events.length;
    for(let i = 0; i < count; i ++) {
        if (_events[i] === fn) {
            _events[i] = undefined;
        }
    }
}

Event.prototype.emit = function(type) {
    let _event = this._events[type];
    if (!_event) {
        return;
    }
    let len = _event.length;
    for (let i = 0; i < len; i++) {
        let fn = _event[i];
        if (fn) {
            fn.apply(this, [].slice.call(arguments , 1))
        }
    }
}


const event = new Event();
event.on("change", value => console.log(value));
event.emit("change", 5);



