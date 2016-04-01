; (function (document, window, undefined) {
    'use strict';

    var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
    var isArrayLike = function (collection) {
        var length = collection && collection.length;
        return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
    };

    var isFunction = function (fn) {
        return Object.prototype.toString.call(fn) === '[object Function]';
    }


    if (!Array.of) {
        Array.of = function () {
            return Array.prototype.slice.call(arguments);
        };
    }

    if (!Array.isArray) {
        Array.isArray = function (Obj) {
            return Object.prototype.toString.call(Obj) === "[object Array]";
        }
    }

    if (!Array.from) {
        Array.from = function (arrayLike, mapFn, thisArg) {
            if (!isArrayLike(arrayLike)) {
                throw new TypeError("被转换的对象不是一个类数组对象或可迭代对象");
            }

            mapFn = isFunction(mapFn) ? mapFn : function (val, key) {
                return val;
            }

            var result = [];
            for (var i = 0, length = arrayLike.length; i < length; i++) {
                result.push(mapFn.call(thisArg, arrayLike[i], i));
            }
            return result;
        }
    }

    if (!Array.prototype.every) {
        Array.prototype.every = function (fn, thisArg) {

            var arr = this;

            for (var i = 0, length = arr.length; i < length; i++) {

                if (!fn.call(thisArg, arr[i], i)) {
                    return false;
                }
            }

            return true;
        };
    }

    if (!Array.prototype.some) {
        Array.prototype.some = function (fn, thisArg) {

            var arr = this;

            for (var i = 0, length = arr.length; i < length; i++) {

                if (fn.call(thisArg, arr[i], i)) {
                    return true;
                }
            }

            return false;
        };
    }

    if (!Array.prototype.indexOf) {
        Array.prototype.indexOf = function (element, fromIndex) {
            if (this.length === 0 || this.length < fromIndex) {
                return -1;
            }

            var index = fromIndex || 0;
            var length = this.length;
            if (fromIndex < 0) {
                index = length + fromIndex;
            }

            for (; index < length; index++) {
                if (this[index] === element) {
                    return index;
                }
            }

            return -1;
        }
    }

    if (!Array.prototype.lastIndexOf) {
        Array.prototype.lastIndexOf = function (element, fromIndex) {
            if (this.length === 0 || (fromIndex < 0 && this.length < Math.abs(fromIndex))) {
                return -1;
            }

            var length = this.length;
            var index = fromIndex || length - 1;
            if (fromIndex < 0) {
                index = length + fromIndex;
            }

            for (; index > -1; index--) {
                if (this[index] === element) {
                    return index;
                }
            }

            return -1;
        }
    }

    if (!Array.prototype.findIndex) {
        Array.prototype.findIndex = function (fn, thisArg) {

            if (!isFunction(fn)) {
                throw new TypeError("fn不是一个有效的函数");
            }

            var arr = this;
            for (var i = 0, length = arr.length; i < length; i++) {
                if (fn.call(thisArg, arr[i], i, arr)) {
                    return i;
                }
            }

            return -1;
        }
    }

    if (!Array.prototype.find) {
        Array.prototype.find = function (fn, thisArg) {

            if (!isFunction(fn)) {
                throw new TypeError("fn不是一个有效的函数");
            }

            var arr = this;
            for (var i = 0, length = arr.length; i < length; i++) {
                if (fn.call(thisArg, arr[i], i, arr)) {
                    return arr[i];
                }
            }

        }
    }

    if (!Array.prototype.filter) {
        Array.prototype.filter = function (fn, thisArg) {
            if (!isFunction(fn)) {
                throw new TypeError("fn不是一个有效的函数");
            }

            var arr = this;
            var result = [];

            for (var i = 0, length = arr.length; i < length; i++) {
                if (fn.call(thisArg, arr[i], i, arr)) {
                    result.push(arr[i]);
                }
            }

            return result;
        }
    }

    if (!Array.prototype.forEach) {
        Array.prototype.forEach = function (fn, thisArg) {
            if (!isFunction(fn)) {
                throw new TypeError("fn不是一个有效的函数");
            }

            var arr = this;

            for (var i = 0, length = arr.length; i < length; i++) {
                fn.call(thisArg, arr[i], i, arr);
            }

        }
    }

    if (!Array.prototype.reduce) {
        Array.prototype.reduce = function (fn, initialValue) {

            if (!isFunction(fn)) {
                throw new TypeError("fn不是一个有效的函数");
            }

            var arr = this;
            var result = initialValue || arr[0];
            var index = !!initialValue ? -1 : 0;

            for (var length = arr.length - 1; index < length; index++) {
                result = fn(result, arr[index + 1], index + 1, arr);
            }
            return result;
        }
    }

    if (!Array.prototype.reduceRight) {
        Array.prototype.reduceRight = function (fn, initialValue) {

            if (!isFunction(fn)) {
                throw new TypeError("fn不是一个有效的函数");
            }

            var arr = this;
            var result = initialValue || arr[arr.length - 1];
            var index = !!initialValue ? arr.length : arr.length - 1;

            for (; index > 0; index--) {
                result = fn(result, arr[index - 1], index - 1, arr);
            }
            return result;
        }
    }

    if (!Array.prototype.map) {
        Array.prototype.map = function (fn, thisArg) {

            if (!isFunction(fn)) {
                throw new TypeError("fn不是一个有效的函数");
            }

            var arr = this;
            var result = [];

            for (var i = 0, length = arr.length; i < length; i++) {
                result.push(fn.call(thisArg, arr[i], i, arr));
            }

            return result;
        }
    }

})(document, window)
