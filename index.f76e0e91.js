
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $a2113ee7da1c19d1$exports = {};
/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */ (function(global, factory) {
    "use strict";
    if (typeof $a2113ee7da1c19d1$exports === "object") // For CommonJS and CommonJS-like environments where a proper `window`
    // is present, execute the factory and get jQuery.
    // For environments that do not have a `window` with a `document`
    // (such as Node.js), expose a factory as module.exports.
    // This accentuates the need for the creation of a real `window`.
    // e.g. var jQuery = require("jquery")(window);
    // See ticket trac-14549 for more info.
    $a2113ee7da1c19d1$exports = global.document ? factory(global, true) : function(w) {
        if (!w.document) throw new Error("jQuery requires a window with a document");
        return factory(w);
    };
    else factory(global);
// Pass this if window is not defined yet
})(typeof window !== "undefined" ? window : $a2113ee7da1c19d1$exports, function(window1, noGlobal) {
    // Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
    // throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
    // arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
    // enough that all such attempts are guarded in a try block.
    "use strict";
    var arr = [];
    var getProto = Object.getPrototypeOf;
    var slice = arr.slice;
    var flat = arr.flat ? function(array) {
        return arr.flat.call(array);
    } : function(array) {
        return arr.concat.apply([], array);
    };
    var push = arr.push;
    var indexOf = arr.indexOf;
    var class2type = {};
    var toString = class2type.toString;
    var hasOwn = class2type.hasOwnProperty;
    var fnToString = hasOwn.toString;
    var ObjectFunctionString = fnToString.call(Object);
    var support = {};
    var isFunction = function isFunction(obj) {
        // Support: Chrome <=57, Firefox <=52
        // In some browsers, typeof returns "function" for HTML <object> elements
        // (i.e., `typeof document.createElement( "object" ) === "function"`).
        // We don't want to classify *any* DOM node as a function.
        // Support: QtWeb <=3.8.5, WebKit <=534.34, wkhtmltopdf tool <=0.12.5
        // Plus for old WebKit, typeof returns "function" for HTML collections
        // (e.g., `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)
        return typeof obj === "function" && typeof obj.nodeType !== "number" && typeof obj.item !== "function";
    };
    var isWindow = function isWindow(obj) {
        return obj != null && obj === obj.window;
    };
    var document = window1.document;
    var preservedScriptAttributes = {
        type: true,
        src: true,
        nonce: true,
        noModule: true
    };
    function DOMEval(code, node, doc) {
        doc = doc || document;
        var i, val, script = doc.createElement("script");
        script.text = code;
        if (node) for(i in preservedScriptAttributes){
            // Support: Firefox 64+, Edge 18+
            // Some browsers don't support the "nonce" property on scripts.
            // On the other hand, just using `getAttribute` is not enough as
            // the `nonce` attribute is reset to an empty string whenever it
            // becomes browsing-context connected.
            // See https://github.com/whatwg/html/issues/2369
            // See https://html.spec.whatwg.org/#nonce-attributes
            // The `node.getAttribute` check was added for the sake of
            // `jQuery.globalEval` so that it can fake a nonce-containing node
            // via an object.
            val = node[i] || node.getAttribute && node.getAttribute(i);
            if (val) script.setAttribute(i, val);
        }
        doc.head.appendChild(script).parentNode.removeChild(script);
    }
    function toType(obj) {
        if (obj == null) return obj + "";
        // Support: Android <=2.3 only (functionish RegExp)
        return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
    }
    /* global Symbol */ // Defining this global in .eslintrc.json would create a danger of using the global
    // unguarded in another place, it seems safer to define global only for this module
    var version = "3.7.1", rhtmlSuffix = /HTML$/i, // Define a local copy of jQuery
    jQuery = function(selector, context) {
        // The jQuery object is actually just the init constructor 'enhanced'
        // Need init if jQuery is called (just allow error to be thrown if not included)
        return new jQuery.fn.init(selector, context);
    };
    jQuery.fn = jQuery.prototype = {
        // The current version of jQuery being used
        jquery: version,
        constructor: jQuery,
        // The default length of a jQuery object is 0
        length: 0,
        toArray: function() {
            return slice.call(this);
        },
        // Get the Nth element in the matched element set OR
        // Get the whole matched element set as a clean array
        get: function(num) {
            // Return all the elements in a clean array
            if (num == null) return slice.call(this);
            // Return just the one element from the set
            return num < 0 ? this[num + this.length] : this[num];
        },
        // Take an array of elements and push it onto the stack
        // (returning the new matched element set)
        pushStack: function(elems) {
            // Build a new jQuery matched element set
            var ret = jQuery.merge(this.constructor(), elems);
            // Add the old object onto the stack (as a reference)
            ret.prevObject = this;
            // Return the newly-formed element set
            return ret;
        },
        // Execute a callback for every element in the matched set.
        each: function(callback) {
            return jQuery.each(this, callback);
        },
        map: function(callback) {
            return this.pushStack(jQuery.map(this, function(elem, i) {
                return callback.call(elem, i, elem);
            }));
        },
        slice: function() {
            return this.pushStack(slice.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        even: function() {
            return this.pushStack(jQuery.grep(this, function(_elem, i) {
                return (i + 1) % 2;
            }));
        },
        odd: function() {
            return this.pushStack(jQuery.grep(this, function(_elem, i) {
                return i % 2;
            }));
        },
        eq: function(i) {
            var len = this.length, j = +i + (i < 0 ? len : 0);
            return this.pushStack(j >= 0 && j < len ? [
                this[j]
            ] : []);
        },
        end: function() {
            return this.prevObject || this.constructor();
        },
        // For internal use only.
        // Behaves like an Array's method, not like a jQuery method.
        push: push,
        sort: arr.sort,
        splice: arr.splice
    };
    jQuery.extend = jQuery.fn.extend = function() {
        var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = false;
        // Handle a deep copy situation
        if (typeof target === "boolean") {
            deep = target;
            // Skip the boolean and the target
            target = arguments[i] || {};
            i++;
        }
        // Handle case when target is a string or something (possible in deep copy)
        if (typeof target !== "object" && !isFunction(target)) target = {};
        // Extend jQuery itself if only one argument is passed
        if (i === length) {
            target = this;
            i--;
        }
        for(; i < length; i++){
            // Only deal with non-null/undefined values
            if ((options = arguments[i]) != null) // Extend the base object
            for(name in options){
                copy = options[name];
                // Prevent Object.prototype pollution
                // Prevent never-ending loop
                if (name === "__proto__" || target === copy) continue;
                // Recurse if we're merging plain objects or arrays
                if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
                    src = target[name];
                    // Ensure proper type for the source value
                    if (copyIsArray && !Array.isArray(src)) clone = [];
                    else if (!copyIsArray && !jQuery.isPlainObject(src)) clone = {};
                    else clone = src;
                    copyIsArray = false;
                    // Never move original objects, clone them
                    target[name] = jQuery.extend(deep, clone, copy);
                // Don't bring in undefined values
                } else if (copy !== undefined) target[name] = copy;
            }
        }
        // Return the modified object
        return target;
    };
    jQuery.extend({
        // Unique for each copy of jQuery on the page
        expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
        // Assume jQuery is ready without the ready module
        isReady: true,
        error: function(msg) {
            throw new Error(msg);
        },
        noop: function() {},
        isPlainObject: function(obj) {
            var proto, Ctor;
            // Detect obvious negatives
            // Use toString instead of jQuery.type to catch host objects
            if (!obj || toString.call(obj) !== "[object Object]") return false;
            proto = getProto(obj);
            // Objects with no prototype (e.g., `Object.create( null )`) are plain
            if (!proto) return true;
            // Objects with prototype are plain iff they were constructed by a global Object function
            Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
            return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
        },
        isEmptyObject: function(obj) {
            var name;
            for(name in obj)return false;
            return true;
        },
        // Evaluates a script in a provided context; falls back to the global one
        // if not specified.
        globalEval: function(code, options, doc) {
            DOMEval(code, {
                nonce: options && options.nonce
            }, doc);
        },
        each: function(obj, callback) {
            var length, i = 0;
            if (isArrayLike(obj)) {
                length = obj.length;
                for(; i < length; i++){
                    if (callback.call(obj[i], i, obj[i]) === false) break;
                }
            } else for(i in obj){
                if (callback.call(obj[i], i, obj[i]) === false) break;
            }
            return obj;
        },
        // Retrieve the text value of an array of DOM nodes
        text: function(elem) {
            var node, ret = "", i = 0, nodeType = elem.nodeType;
            if (!nodeType) // If no nodeType, this is expected to be an array
            while(node = elem[i++])// Do not traverse comment nodes
            ret += jQuery.text(node);
            if (nodeType === 1 || nodeType === 11) return elem.textContent;
            if (nodeType === 9) return elem.documentElement.textContent;
            if (nodeType === 3 || nodeType === 4) return elem.nodeValue;
            // Do not include comment or processing instruction nodes
            return ret;
        },
        // results is for internal usage only
        makeArray: function(arr, results) {
            var ret = results || [];
            if (arr != null) {
                if (isArrayLike(Object(arr))) jQuery.merge(ret, typeof arr === "string" ? [
                    arr
                ] : arr);
                else push.call(ret, arr);
            }
            return ret;
        },
        inArray: function(elem, arr, i) {
            return arr == null ? -1 : indexOf.call(arr, elem, i);
        },
        isXMLDoc: function(elem) {
            var namespace = elem && elem.namespaceURI, docElem = elem && (elem.ownerDocument || elem).documentElement;
            // Assume HTML when documentElement doesn't yet exist, such as inside
            // document fragments.
            return !rhtmlSuffix.test(namespace || docElem && docElem.nodeName || "HTML");
        },
        // Support: Android <=4.0 only, PhantomJS 1 only
        // push.apply(_, arraylike) throws on ancient WebKit
        merge: function(first, second) {
            var len = +second.length, j = 0, i = first.length;
            for(; j < len; j++)first[i++] = second[j];
            first.length = i;
            return first;
        },
        grep: function(elems, callback, invert) {
            var callbackInverse, matches = [], i = 0, length = elems.length, callbackExpect = !invert;
            // Go through the array, only saving the items
            // that pass the validator function
            for(; i < length; i++){
                callbackInverse = !callback(elems[i], i);
                if (callbackInverse !== callbackExpect) matches.push(elems[i]);
            }
            return matches;
        },
        // arg is for internal usage only
        map: function(elems, callback, arg) {
            var length, value, i = 0, ret = [];
            // Go through the array, translating each of the items to their new values
            if (isArrayLike(elems)) {
                length = elems.length;
                for(; i < length; i++){
                    value = callback(elems[i], i, arg);
                    if (value != null) ret.push(value);
                }
            // Go through every key on the object,
            } else for(i in elems){
                value = callback(elems[i], i, arg);
                if (value != null) ret.push(value);
            }
            // Flatten any nested arrays
            return flat(ret);
        },
        // A global GUID counter for objects
        guid: 1,
        // jQuery.support is not used in Core but other projects attach their
        // properties to it so it needs to exist.
        support: support
    });
    if (typeof Symbol === "function") jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
    // Populate the class2type map
    jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(_i, name) {
        class2type["[object " + name + "]"] = name.toLowerCase();
    });
    function isArrayLike(obj) {
        // Support: real iOS 8.2 only (not reproducible in simulator)
        // `in` check used to prevent JIT error (gh-2145)
        // hasOwn isn't used here due to false negatives
        // regarding Nodelist length in IE
        var length = !!obj && "length" in obj && obj.length, type = toType(obj);
        if (isFunction(obj) || isWindow(obj)) return false;
        return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
    }
    function nodeName(elem, name) {
        return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
    }
    var pop = arr.pop;
    var sort = arr.sort;
    var splice = arr.splice;
    var whitespace = "[\\x20\\t\\r\\n\\f]";
    var rtrimCSS = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g");
    // Note: an element does not contain itself
    jQuery.contains = function(a, b) {
        var bup = b && b.parentNode;
        return a === bup || !!(bup && bup.nodeType === 1 && // Support: IE 9 - 11+
        // IE doesn't have `contains` on SVG.
        (a.contains ? a.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
    };
    // CSS string/identifier serialization
    // https://drafts.csswg.org/cssom/#common-serializing-idioms
    var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
    function fcssescape(ch, asCodePoint) {
        if (asCodePoint) {
            // U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
            if (ch === "\x00") return "\uFFFD";
            // Control characters and (dependent upon position) numbers get escaped as code points
            return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
        }
        // Other potentially-special ASCII characters get backslash-escaped
        return "\\" + ch;
    }
    jQuery.escapeSelector = function(sel) {
        return (sel + "").replace(rcssescape, fcssescape);
    };
    var preferredDoc = document, pushNative = push;
    (function() {
        var i, Expr, outermostContext, sortInput, hasDuplicate, push = pushNative, // Local document vars
        document, documentElement, documentIsHTML, rbuggyQSA, matches, // Instance-specific data
        expando = jQuery.expando, dirruns = 0, done = 0, classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(), nonnativeSelectorCache = createCache(), sortOrder = function(a, b) {
            if (a === b) hasDuplicate = true;
            return 0;
        }, booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", // Regular expressions
        // https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
        identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\x00-\\x7f])+", // Attribute selectors: https://www.w3.org/TR/selectors/#attribute-selectors
        attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + // Operator (capture 2)
        "*([*^$|!~]?=)" + whitespace + // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]", pseudos = ":(" + identifier + ")(?:\\((" + // To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
        // 1. quoted (capture 3; capture 4 or capture 5)
        "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + // 2. simple (capture 6)
        "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" + // 3. anything else (capture 2)
        ".*" + ")\\)|)", // Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
        rwhitespace = new RegExp(whitespace + "+", "g"), rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"), rleadingCombinator = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"), rdescend = new RegExp(whitespace + "|>"), rpseudo = new RegExp(pseudos), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = {
            ID: new RegExp("^#(" + identifier + ")"),
            CLASS: new RegExp("^\\.(" + identifier + ")"),
            TAG: new RegExp("^(" + identifier + "|[*])"),
            ATTR: new RegExp("^" + attributes),
            PSEUDO: new RegExp("^" + pseudos),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + booleans + ")$", "i"),
            // For use in libraries implementing .is()
            // We use this for POS matching in `select`
            needsContext: new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
        }, rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, // Easily-parseable/retrievable ID or TAG or CLASS selectors
        rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rsibling = /[+~]/, // CSS escapes
        // https://www.w3.org/TR/CSS21/syndata.html#escaped-characters
        runescape = new RegExp("\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g"), funescape = function(escape, nonHex) {
            var high = "0x" + escape.slice(1) - 0x10000;
            if (nonHex) // Strip the backslash prefix from a non-hex escape sequence
            return nonHex;
            // Replace a hexadecimal escape sequence with the encoded Unicode code point
            // Support: IE <=11+
            // For values outside the Basic Multilingual Plane (BMP), manually construct a
            // surrogate pair
            return high < 0 ? String.fromCharCode(high + 0x10000) : String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
        }, // Used for iframes; see `setDocument`.
        // Support: IE 9 - 11+, Edge 12 - 18+
        // Removing the function wrapper causes a "Permission Denied"
        // error in IE/Edge.
        unloadHandler = function() {
            setDocument();
        }, inDisabledFieldset = addCombinator(function(elem) {
            return elem.disabled === true && nodeName(elem, "fieldset");
        }, {
            dir: "parentNode",
            next: "legend"
        });
        // Support: IE <=9 only
        // Accessing document.activeElement can throw unexpectedly
        // https://bugs.jquery.com/ticket/13393
        function safeActiveElement() {
            try {
                return document.activeElement;
            } catch (err) {}
        }
        // Optimize for push.apply( _, NodeList )
        try {
            push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes);
            // Support: Android <=4.0
            // Detect silently failing push.apply
            // eslint-disable-next-line no-unused-expressions
            arr[preferredDoc.childNodes.length].nodeType;
        } catch (e) {
            push = {
                apply: function(target, els) {
                    pushNative.apply(target, slice.call(els));
                },
                call: function(target) {
                    pushNative.apply(target, slice.call(arguments, 1));
                }
            };
        }
        function find(selector, context, results, seed) {
            var m, i, elem, nid, match, groups, newSelector, newContext = context && context.ownerDocument, // nodeType defaults to 9, since context defaults to document
            nodeType = context ? context.nodeType : 9;
            results = results || [];
            // Return early from calls with invalid selector or context
            if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) return results;
            // Try to shortcut find operations (as opposed to filters) in HTML documents
            if (!seed) {
                setDocument(context);
                context = context || document;
                if (documentIsHTML) {
                    // If the selector is sufficiently simple, try using a "get*By*" DOM method
                    // (excepting DocumentFragment context, where the methods don't exist)
                    if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {
                        // ID selector
                        if (m = match[1]) {
                            // Document context
                            if (nodeType === 9) {
                                if (elem = context.getElementById(m)) // Support: IE 9 only
                                // getElementById can match elements by name instead of ID
                                {
                                    if (elem.id === m) {
                                        push.call(results, elem);
                                        return results;
                                    }
                                } else return results;
                            // Element context
                            } else // Support: IE 9 only
                            // getElementById can match elements by name instead of ID
                            if (newContext && (elem = newContext.getElementById(m)) && find.contains(context, elem) && elem.id === m) {
                                push.call(results, elem);
                                return results;
                            }
                        // Type selector
                        } else if (match[2]) {
                            push.apply(results, context.getElementsByTagName(selector));
                            return results;
                        // Class selector
                        } else if ((m = match[3]) && context.getElementsByClassName) {
                            push.apply(results, context.getElementsByClassName(m));
                            return results;
                        }
                    }
                    // Take advantage of querySelectorAll
                    if (!nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
                        newSelector = selector;
                        newContext = context;
                        // qSA considers elements outside a scoping root when evaluating child or
                        // descendant combinators, which is not what we want.
                        // In such cases, we work around the behavior by prefixing every selector in the
                        // list with an ID selector referencing the scope context.
                        // The technique has to be used as well when a leading combinator is used
                        // as such selectors are not recognized by querySelectorAll.
                        // Thanks to Andrew Dupont for this technique.
                        if (nodeType === 1 && (rdescend.test(selector) || rleadingCombinator.test(selector))) {
                            // Expand context for sibling selectors
                            newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
                            // We can use :scope instead of the ID hack if the browser
                            // supports it & if we're not changing the context.
                            // Support: IE 11+, Edge 17 - 18+
                            // IE/Edge sometimes throw a "Permission denied" error when
                            // strict-comparing two documents; shallow comparisons work.
                            // eslint-disable-next-line eqeqeq
                            if (newContext != context || !support.scope) {
                                // Capture the context ID, setting it first if necessary
                                if (nid = context.getAttribute("id")) nid = jQuery.escapeSelector(nid);
                                else context.setAttribute("id", nid = expando);
                            }
                            // Prefix every selector in the list
                            groups = tokenize(selector);
                            i = groups.length;
                            while(i--)groups[i] = (nid ? "#" + nid : ":scope") + " " + toSelector(groups[i]);
                            newSelector = groups.join(",");
                        }
                        try {
                            push.apply(results, newContext.querySelectorAll(newSelector));
                            return results;
                        } catch (qsaError) {
                            nonnativeSelectorCache(selector, true);
                        } finally{
                            if (nid === expando) context.removeAttribute("id");
                        }
                    }
                }
            }
            // All others
            return select(selector.replace(rtrimCSS, "$1"), context, results, seed);
        }
        /**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */ function createCache() {
            var keys = [];
            function cache(key, value) {
                // Use (key + " ") to avoid collision with native prototype properties
                // (see https://github.com/jquery/sizzle/issues/157)
                if (keys.push(key + " ") > Expr.cacheLength) // Only keep the most recent entries
                delete cache[keys.shift()];
                return cache[key + " "] = value;
            }
            return cache;
        }
        /**
 * Mark a function for special use by jQuery selector module
 * @param {Function} fn The function to mark
 */ function markFunction(fn) {
            fn[expando] = true;
            return fn;
        }
        /**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */ function assert(fn) {
            var el = document.createElement("fieldset");
            try {
                return !!fn(el);
            } catch (e) {
                return false;
            } finally{
                // Remove from its parent by default
                if (el.parentNode) el.parentNode.removeChild(el);
                // release memory in IE
                el = null;
            }
        }
        /**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */ function createInputPseudo(type) {
            return function(elem) {
                return nodeName(elem, "input") && elem.type === type;
            };
        }
        /**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */ function createButtonPseudo(type) {
            return function(elem) {
                return (nodeName(elem, "input") || nodeName(elem, "button")) && elem.type === type;
            };
        }
        /**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */ function createDisabledPseudo(disabled) {
            // Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
            return function(elem) {
                // Only certain elements can match :enabled or :disabled
                // https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
                // https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
                if ("form" in elem) {
                    // Check for inherited disabledness on relevant non-disabled elements:
                    // * listed form-associated elements in a disabled fieldset
                    //   https://html.spec.whatwg.org/multipage/forms.html#category-listed
                    //   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
                    // * option elements in a disabled optgroup
                    //   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
                    // All such elements have a "form" property.
                    if (elem.parentNode && elem.disabled === false) {
                        // Option elements defer to a parent optgroup if present
                        if ("label" in elem) {
                            if ("label" in elem.parentNode) return elem.parentNode.disabled === disabled;
                            else return elem.disabled === disabled;
                        }
                        // Support: IE 6 - 11+
                        // Use the isDisabled shortcut property to check for disabled fieldset ancestors
                        return elem.isDisabled === disabled || // Where there is no isDisabled, check manually
                        elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled;
                    }
                    return elem.disabled === disabled;
                // Try to winnow out elements that can't be disabled before trusting the disabled property.
                // Some victims get caught in our net (label, legend, menu, track), but it shouldn't
                // even exist on them, let alone have a boolean value.
                } else if ("label" in elem) return elem.disabled === disabled;
                // Remaining elements are neither :enabled nor :disabled
                return false;
            };
        }
        /**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */ function createPositionalPseudo(fn) {
            return markFunction(function(argument) {
                argument = +argument;
                return markFunction(function(seed, matches) {
                    var j, matchIndexes = fn([], seed.length, argument), i = matchIndexes.length;
                    // Match elements found at the specified indexes
                    while(i--)if (seed[j = matchIndexes[i]]) seed[j] = !(matches[j] = seed[j]);
                });
            });
        }
        /**
 * Checks a node for validity as a jQuery selector context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */ function testContext(context) {
            return context && typeof context.getElementsByTagName !== "undefined" && context;
        }
        /**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [node] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */ function setDocument(node) {
            var subWindow, doc = node ? node.ownerDocument || node : preferredDoc;
            // Return early if doc is invalid or already selected
            // Support: IE 11+, Edge 17 - 18+
            // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
            // two documents; shallow comparisons work.
            // eslint-disable-next-line eqeqeq
            if (doc == document || doc.nodeType !== 9 || !doc.documentElement) return document;
            // Update global variables
            document = doc;
            documentElement = document.documentElement;
            documentIsHTML = !jQuery.isXMLDoc(document);
            // Support: iOS 7 only, IE 9 - 11+
            // Older browsers didn't support unprefixed `matches`.
            matches = documentElement.matches || documentElement.webkitMatchesSelector || documentElement.msMatchesSelector;
            // Support: IE 9 - 11+, Edge 12 - 18+
            // Accessing iframe documents after unload throws "permission denied" errors
            // (see trac-13936).
            // Limit the fix to IE & Edge Legacy; despite Edge 15+ implementing `matches`,
            // all IE 9+ and Edge Legacy versions implement `msMatchesSelector` as well.
            if (documentElement.msMatchesSelector && // Support: IE 11+, Edge 17 - 18+
            // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
            // two documents; shallow comparisons work.
            // eslint-disable-next-line eqeqeq
            preferredDoc != document && (subWindow = document.defaultView) && subWindow.top !== subWindow) // Support: IE 9 - 11+, Edge 12 - 18+
            subWindow.addEventListener("unload", unloadHandler);
            // Support: IE <10
            // Check if getElementById returns elements by name
            // The broken getElementById methods don't pick up programmatically-set names,
            // so use a roundabout getElementsByName test
            support.getById = assert(function(el) {
                documentElement.appendChild(el).id = jQuery.expando;
                return !document.getElementsByName || !document.getElementsByName(jQuery.expando).length;
            });
            // Support: IE 9 only
            // Check to see if it's possible to do matchesSelector
            // on a disconnected node.
            support.disconnectedMatch = assert(function(el) {
                return matches.call(el, "*");
            });
            // Support: IE 9 - 11+, Edge 12 - 18+
            // IE/Edge don't support the :scope pseudo-class.
            support.scope = assert(function() {
                return document.querySelectorAll(":scope");
            });
            // Support: Chrome 105 - 111 only, Safari 15.4 - 16.3 only
            // Make sure the `:has()` argument is parsed unforgivingly.
            // We include `*` in the test to detect buggy implementations that are
            // _selectively_ forgiving (specifically when the list includes at least
            // one valid selector).
            // Note that we treat complete lack of support for `:has()` as if it were
            // spec-compliant support, which is fine because use of `:has()` in such
            // environments will fail in the qSA path and fall back to jQuery traversal
            // anyway.
            support.cssHas = assert(function() {
                try {
                    document.querySelector(":has(*,:jqfake)");
                    return false;
                } catch (e) {
                    return true;
                }
            });
            // ID filter and find
            if (support.getById) {
                Expr.filter.ID = function(id) {
                    var attrId = id.replace(runescape, funescape);
                    return function(elem) {
                        return elem.getAttribute("id") === attrId;
                    };
                };
                Expr.find.ID = function(id, context) {
                    if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                        var elem = context.getElementById(id);
                        return elem ? [
                            elem
                        ] : [];
                    }
                };
            } else {
                Expr.filter.ID = function(id) {
                    var attrId = id.replace(runescape, funescape);
                    return function(elem) {
                        var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
                        return node && node.value === attrId;
                    };
                };
                // Support: IE 6 - 7 only
                // getElementById is not reliable as a find shortcut
                Expr.find.ID = function(id, context) {
                    if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                        var node, i, elems, elem = context.getElementById(id);
                        if (elem) {
                            // Verify the id attribute
                            node = elem.getAttributeNode("id");
                            if (node && node.value === id) return [
                                elem
                            ];
                            // Fall back on getElementsByName
                            elems = context.getElementsByName(id);
                            i = 0;
                            while(elem = elems[i++]){
                                node = elem.getAttributeNode("id");
                                if (node && node.value === id) return [
                                    elem
                                ];
                            }
                        }
                        return [];
                    }
                };
            }
            // Tag
            Expr.find.TAG = function(tag, context) {
                if (typeof context.getElementsByTagName !== "undefined") return context.getElementsByTagName(tag);
                else return context.querySelectorAll(tag);
            };
            // Class
            Expr.find.CLASS = function(className, context) {
                if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) return context.getElementsByClassName(className);
            };
            /* QSA/matchesSelector
	---------------------------------------------------------------------- */ // QSA and matchesSelector support
            rbuggyQSA = [];
            // Build QSA regex
            // Regex strategy adopted from Diego Perini
            assert(function(el) {
                var input;
                documentElement.appendChild(el).innerHTML = "<a id='" + expando + "' href='' disabled='disabled'></a>" + "<select id='" + expando + "-\r\\' disabled='disabled'>" + "<option selected=''></option></select>";
                // Support: iOS <=7 - 8 only
                // Boolean attributes and "value" are not treated correctly in some XML documents
                if (!el.querySelectorAll("[selected]").length) rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
                // Support: iOS <=7 - 8 only
                if (!el.querySelectorAll("[id~=" + expando + "-]").length) rbuggyQSA.push("~=");
                // Support: iOS 8 only
                // https://bugs.webkit.org/show_bug.cgi?id=136851
                // In-page `selector#id sibling-combinator selector` fails
                if (!el.querySelectorAll("a#" + expando + "+*").length) rbuggyQSA.push(".#.+[+~]");
                // Support: Chrome <=105+, Firefox <=104+, Safari <=15.4+
                // In some of the document kinds, these selectors wouldn't work natively.
                // This is probably OK but for backwards compatibility we want to maintain
                // handling them through jQuery traversal in jQuery 3.x.
                if (!el.querySelectorAll(":checked").length) rbuggyQSA.push(":checked");
                // Support: Windows 8 Native Apps
                // The type and name attributes are restricted during .innerHTML assignment
                input = document.createElement("input");
                input.setAttribute("type", "hidden");
                el.appendChild(input).setAttribute("name", "D");
                // Support: IE 9 - 11+
                // IE's :disabled selector does not pick up the children of disabled fieldsets
                // Support: Chrome <=105+, Firefox <=104+, Safari <=15.4+
                // In some of the document kinds, these selectors wouldn't work natively.
                // This is probably OK but for backwards compatibility we want to maintain
                // handling them through jQuery traversal in jQuery 3.x.
                documentElement.appendChild(el).disabled = true;
                if (el.querySelectorAll(":disabled").length !== 2) rbuggyQSA.push(":enabled", ":disabled");
                // Support: IE 11+, Edge 15 - 18+
                // IE 11/Edge don't find elements on a `[name='']` query in some cases.
                // Adding a temporary attribute to the document before the selection works
                // around the issue.
                // Interestingly, IE 10 & older don't seem to have the issue.
                input = document.createElement("input");
                input.setAttribute("name", "");
                el.appendChild(input);
                if (!el.querySelectorAll("[name='']").length) rbuggyQSA.push("\\[" + whitespace + "*name" + whitespace + "*=" + whitespace + "*(?:''|\"\")");
            });
            if (!support.cssHas) // Support: Chrome 105 - 110+, Safari 15.4 - 16.3+
            // Our regular `try-catch` mechanism fails to detect natively-unsupported
            // pseudo-classes inside `:has()` (such as `:has(:contains("Foo"))`)
            // in browsers that parse the `:has()` argument as a forgiving selector list.
            // https://drafts.csswg.org/selectors/#relational now requires the argument
            // to be parsed unforgivingly, but browsers have not yet fully adjusted.
            rbuggyQSA.push(":has");
            rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
            /* Sorting
	---------------------------------------------------------------------- */ // Document order sorting
            sortOrder = function(a, b) {
                // Flag for duplicate removal
                if (a === b) {
                    hasDuplicate = true;
                    return 0;
                }
                // Sort on method existence if only one input has compareDocumentPosition
                var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
                if (compare) return compare;
                // Calculate position if both inputs belong to the same document
                // Support: IE 11+, Edge 17 - 18+
                // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                // two documents; shallow comparisons work.
                // eslint-disable-next-line eqeqeq
                compare = (a.ownerDocument || a) == (b.ownerDocument || b) ? a.compareDocumentPosition(b) : // Otherwise we know they are disconnected
                1;
                // Disconnected nodes
                if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {
                    // Choose the first element that is related to our preferred document
                    // Support: IE 11+, Edge 17 - 18+
                    // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                    // two documents; shallow comparisons work.
                    // eslint-disable-next-line eqeqeq
                    if (a === document || a.ownerDocument == preferredDoc && find.contains(preferredDoc, a)) return -1;
                    // Support: IE 11+, Edge 17 - 18+
                    // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                    // two documents; shallow comparisons work.
                    // eslint-disable-next-line eqeqeq
                    if (b === document || b.ownerDocument == preferredDoc && find.contains(preferredDoc, b)) return 1;
                    // Maintain original order
                    return sortInput ? indexOf.call(sortInput, a) - indexOf.call(sortInput, b) : 0;
                }
                return compare & 4 ? -1 : 1;
            };
            return document;
        }
        find.matches = function(expr, elements) {
            return find(expr, null, null, elements);
        };
        find.matchesSelector = function(elem, expr) {
            setDocument(elem);
            if (documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyQSA || !rbuggyQSA.test(expr))) try {
                var ret = matches.call(elem, expr);
                // IE 9's matchesSelector returns false on disconnected nodes
                if (ret || support.disconnectedMatch || // As well, disconnected nodes are said to be in a document
                // fragment in IE 9
                elem.document && elem.document.nodeType !== 11) return ret;
            } catch (e) {
                nonnativeSelectorCache(expr, true);
            }
            return find(expr, document, null, [
                elem
            ]).length > 0;
        };
        find.contains = function(context, elem) {
            // Set document vars if needed
            // Support: IE 11+, Edge 17 - 18+
            // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
            // two documents; shallow comparisons work.
            // eslint-disable-next-line eqeqeq
            if ((context.ownerDocument || context) != document) setDocument(context);
            return jQuery.contains(context, elem);
        };
        find.attr = function(elem, name) {
            // Set document vars if needed
            // Support: IE 11+, Edge 17 - 18+
            // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
            // two documents; shallow comparisons work.
            // eslint-disable-next-line eqeqeq
            if ((elem.ownerDocument || elem) != document) setDocument(elem);
            var fn = Expr.attrHandle[name.toLowerCase()], // Don't get fooled by Object.prototype properties (see trac-13807)
            val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;
            if (val !== undefined) return val;
            return elem.getAttribute(name);
        };
        find.error = function(msg) {
            throw new Error("Syntax error, unrecognized expression: " + msg);
        };
        /**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */ jQuery.uniqueSort = function(results) {
            var elem, duplicates = [], j = 0, i = 0;
            // Unless we *know* we can detect duplicates, assume their presence
            //
            // Support: Android <=4.0+
            // Testing for detecting duplicates is unpredictable so instead assume we can't
            // depend on duplicate detection in all browsers without a stable sort.
            hasDuplicate = !support.sortStable;
            sortInput = !support.sortStable && slice.call(results, 0);
            sort.call(results, sortOrder);
            if (hasDuplicate) {
                while(elem = results[i++])if (elem === results[i]) j = duplicates.push(i);
                while(j--)splice.call(results, duplicates[j], 1);
            }
            // Clear input after sorting to release objects
            // See https://github.com/jquery/sizzle/pull/225
            sortInput = null;
            return results;
        };
        jQuery.fn.uniqueSort = function() {
            return this.pushStack(jQuery.uniqueSort(slice.apply(this)));
        };
        Expr = jQuery.expr = {
            // Can be adjusted by the user
            cacheLength: 50,
            createPseudo: markFunction,
            match: matchExpr,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: true
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: true
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(match) {
                    match[1] = match[1].replace(runescape, funescape);
                    // Move the given value to match[3] whether quoted or unquoted
                    match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
                    if (match[2] === "~=") match[3] = " " + match[3] + " ";
                    return match.slice(0, 4);
                },
                CHILD: function(match) {
                    /* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/ match[1] = match[1].toLowerCase();
                    if (match[1].slice(0, 3) === "nth") {
                        // nth-* requires argument
                        if (!match[3]) find.error(match[0]);
                        // numeric x and y parameters for Expr.filter.CHILD
                        // remember that false/true cast respectively to 0/1
                        match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
                        match[5] = +(match[7] + match[8] || match[3] === "odd");
                    // other types prohibit arguments
                    } else if (match[3]) find.error(match[0]);
                    return match;
                },
                PSEUDO: function(match) {
                    var excess, unquoted = !match[6] && match[2];
                    if (matchExpr.CHILD.test(match[0])) return null;
                    // Accept quoted arguments as-is
                    if (match[3]) match[2] = match[4] || match[5] || "";
                    else if (unquoted && rpseudo.test(unquoted) && // Get excess from tokenize (recursively)
                    (excess = tokenize(unquoted, true)) && // advance to the next closing parenthesis
                    (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
                        // excess is a negative index
                        match[0] = match[0].slice(0, excess);
                        match[2] = unquoted.slice(0, excess);
                    }
                    // Return only captures needed by the pseudo filter method (type and argument)
                    return match.slice(0, 3);
                }
            },
            filter: {
                TAG: function(nodeNameSelector) {
                    var expectedNodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                    return nodeNameSelector === "*" ? function() {
                        return true;
                    } : function(elem) {
                        return nodeName(elem, expectedNodeName);
                    };
                },
                CLASS: function(className) {
                    var pattern = classCache[className + " "];
                    return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)"), classCache(className, function(elem) {
                        return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
                    }));
                },
                ATTR: function(name, operator, check) {
                    return function(elem) {
                        var result = find.attr(elem, name);
                        if (result == null) return operator === "!=";
                        if (!operator) return true;
                        result += "";
                        if (operator === "=") return result === check;
                        if (operator === "!=") return result !== check;
                        if (operator === "^=") return check && result.indexOf(check) === 0;
                        if (operator === "*=") return check && result.indexOf(check) > -1;
                        if (operator === "$=") return check && result.slice(-check.length) === check;
                        if (operator === "~=") return (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1;
                        if (operator === "|=") return result === check || result.slice(0, check.length + 1) === check + "-";
                        return false;
                    };
                },
                CHILD: function(type, what, _argument, first, last) {
                    var simple = type.slice(0, 3) !== "nth", forward = type.slice(-4) !== "last", ofType = what === "of-type";
                    return first === 1 && last === 0 ? // Shortcut for :nth-*(n)
                    function(elem) {
                        return !!elem.parentNode;
                    } : function(elem, _context, xml) {
                        var cache, outerCache, node, nodeIndex, start, dir = simple !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType, diff = false;
                        if (parent) {
                            // :(first|last|only)-(child|of-type)
                            if (simple) {
                                while(dir){
                                    node = elem;
                                    while(node = node[dir]){
                                        if (ofType ? nodeName(node, name) : node.nodeType === 1) return false;
                                    }
                                    // Reverse direction for :only-* (if we haven't yet done so)
                                    start = dir = type === "only" && !start && "nextSibling";
                                }
                                return true;
                            }
                            start = [
                                forward ? parent.firstChild : parent.lastChild
                            ];
                            // non-xml :nth-child(...) stores cache data on `parent`
                            if (forward && useCache) {
                                // Seek `elem` from a previously-cached index
                                outerCache = parent[expando] || (parent[expando] = {});
                                cache = outerCache[type] || [];
                                nodeIndex = cache[0] === dirruns && cache[1];
                                diff = nodeIndex && cache[2];
                                node = nodeIndex && parent.childNodes[nodeIndex];
                                while(node = ++nodeIndex && node && node[dir] || // Fallback to seeking `elem` from the start
                                (diff = nodeIndex = 0) || start.pop())// When found, cache indexes on `parent` and break
                                if (node.nodeType === 1 && ++diff && node === elem) {
                                    outerCache[type] = [
                                        dirruns,
                                        nodeIndex,
                                        diff
                                    ];
                                    break;
                                }
                            } else {
                                // Use previously-cached element index if available
                                if (useCache) {
                                    outerCache = elem[expando] || (elem[expando] = {});
                                    cache = outerCache[type] || [];
                                    nodeIndex = cache[0] === dirruns && cache[1];
                                    diff = nodeIndex;
                                }
                                // xml :nth-child(...)
                                // or :nth-last-child(...) or :nth(-last)?-of-type(...)
                                if (diff === false) {
                                    // Use the same loop as above to seek `elem` from the start
                                    while(node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop())if ((ofType ? nodeName(node, name) : node.nodeType === 1) && ++diff) {
                                        // Cache the index of each encountered element
                                        if (useCache) {
                                            outerCache = node[expando] || (node[expando] = {});
                                            outerCache[type] = [
                                                dirruns,
                                                diff
                                            ];
                                        }
                                        if (node === elem) break;
                                    }
                                }
                            }
                            // Incorporate the offset, then check against cycle size
                            diff -= last;
                            return diff === first || diff % first === 0 && diff / first >= 0;
                        }
                    };
                },
                PSEUDO: function(pseudo, argument) {
                    // pseudo-class names are case-insensitive
                    // https://www.w3.org/TR/selectors/#pseudo-classes
                    // Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
                    // Remember that setFilters inherits from pseudos
                    var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || find.error("unsupported pseudo: " + pseudo);
                    // The user may use createPseudo to indicate that
                    // arguments are needed to create the filter function
                    // just as jQuery does
                    if (fn[expando]) return fn(argument);
                    // But maintain support for old signatures
                    if (fn.length > 1) {
                        args = [
                            pseudo,
                            pseudo,
                            "",
                            argument
                        ];
                        return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches) {
                            var idx, matched = fn(seed, argument), i = matched.length;
                            while(i--){
                                idx = indexOf.call(seed, matched[i]);
                                seed[idx] = !(matches[idx] = matched[i]);
                            }
                        }) : function(elem) {
                            return fn(elem, 0, args);
                        };
                    }
                    return fn;
                }
            },
            pseudos: {
                // Potentially complex pseudos
                not: markFunction(function(selector) {
                    // Trim the selector passed to compile
                    // to avoid treating leading and trailing
                    // spaces as combinators
                    var input = [], results = [], matcher = compile(selector.replace(rtrimCSS, "$1"));
                    return matcher[expando] ? markFunction(function(seed, matches, _context, xml) {
                        var elem, unmatched = matcher(seed, null, xml, []), i = seed.length;
                        // Match elements unmatched by `matcher`
                        while(i--)if (elem = unmatched[i]) seed[i] = !(matches[i] = elem);
                    }) : function(elem, _context, xml) {
                        input[0] = elem;
                        matcher(input, null, xml, results);
                        // Don't keep the element
                        // (see https://github.com/jquery/sizzle/issues/299)
                        input[0] = null;
                        return !results.pop();
                    };
                }),
                has: markFunction(function(selector) {
                    return function(elem) {
                        return find(selector, elem).length > 0;
                    };
                }),
                contains: markFunction(function(text) {
                    text = text.replace(runescape, funescape);
                    return function(elem) {
                        return (elem.textContent || jQuery.text(elem)).indexOf(text) > -1;
                    };
                }),
                // "Whether an element is represented by a :lang() selector
                // is based solely on the element's language value
                // being equal to the identifier C,
                // or beginning with the identifier C immediately followed by "-".
                // The matching of C against the element's language value is performed case-insensitively.
                // The identifier C does not have to be a valid language name."
                // https://www.w3.org/TR/selectors/#lang-pseudo
                lang: markFunction(function(lang) {
                    // lang value must be a valid identifier
                    if (!ridentifier.test(lang || "")) find.error("unsupported lang: " + lang);
                    lang = lang.replace(runescape, funescape).toLowerCase();
                    return function(elem) {
                        var elemLang;
                        do if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                            elemLang = elemLang.toLowerCase();
                            return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
                        }
                        while ((elem = elem.parentNode) && elem.nodeType === 1);
                        return false;
                    };
                }),
                // Miscellaneous
                target: function(elem) {
                    var hash = window1.location && window1.location.hash;
                    return hash && hash.slice(1) === elem.id;
                },
                root: function(elem) {
                    return elem === documentElement;
                },
                focus: function(elem) {
                    return elem === safeActiveElement() && document.hasFocus() && !!(elem.type || elem.href || ~elem.tabIndex);
                },
                // Boolean properties
                enabled: createDisabledPseudo(false),
                disabled: createDisabledPseudo(true),
                checked: function(elem) {
                    // In CSS3, :checked should return both checked and selected elements
                    // https://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
                    return nodeName(elem, "input") && !!elem.checked || nodeName(elem, "option") && !!elem.selected;
                },
                selected: function(elem) {
                    // Support: IE <=11+
                    // Accessing the selectedIndex property
                    // forces the browser to treat the default option as
                    // selected when in an optgroup.
                    if (elem.parentNode) // eslint-disable-next-line no-unused-expressions
                    elem.parentNode.selectedIndex;
                    return elem.selected === true;
                },
                // Contents
                empty: function(elem) {
                    // https://www.w3.org/TR/selectors/#empty-pseudo
                    // :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
                    //   but not by others (comment: 8; processing instruction: 7; etc.)
                    // nodeType < 6 works because attributes (2) do not appear as children
                    for(elem = elem.firstChild; elem; elem = elem.nextSibling){
                        if (elem.nodeType < 6) return false;
                    }
                    return true;
                },
                parent: function(elem) {
                    return !Expr.pseudos.empty(elem);
                },
                // Element/input types
                header: function(elem) {
                    return rheader.test(elem.nodeName);
                },
                input: function(elem) {
                    return rinputs.test(elem.nodeName);
                },
                button: function(elem) {
                    return nodeName(elem, "input") && elem.type === "button" || nodeName(elem, "button");
                },
                text: function(elem) {
                    var attr;
                    return nodeName(elem, "input") && elem.type === "text" && // Support: IE <10 only
                    // New HTML5 attribute values (e.g., "search") appear
                    // with elem.type === "text"
                    ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
                },
                // Position-in-collection
                first: createPositionalPseudo(function() {
                    return [
                        0
                    ];
                }),
                last: createPositionalPseudo(function(_matchIndexes, length) {
                    return [
                        length - 1
                    ];
                }),
                eq: createPositionalPseudo(function(_matchIndexes, length, argument) {
                    return [
                        argument < 0 ? argument + length : argument
                    ];
                }),
                even: createPositionalPseudo(function(matchIndexes, length) {
                    var i = 0;
                    for(; i < length; i += 2)matchIndexes.push(i);
                    return matchIndexes;
                }),
                odd: createPositionalPseudo(function(matchIndexes, length) {
                    var i = 1;
                    for(; i < length; i += 2)matchIndexes.push(i);
                    return matchIndexes;
                }),
                lt: createPositionalPseudo(function(matchIndexes, length, argument) {
                    var i;
                    if (argument < 0) i = argument + length;
                    else if (argument > length) i = length;
                    else i = argument;
                    for(; --i >= 0;)matchIndexes.push(i);
                    return matchIndexes;
                }),
                gt: createPositionalPseudo(function(matchIndexes, length, argument) {
                    var i = argument < 0 ? argument + length : argument;
                    for(; ++i < length;)matchIndexes.push(i);
                    return matchIndexes;
                })
            }
        };
        Expr.pseudos.nth = Expr.pseudos.eq;
        // Add button/input type pseudos
        for(i in {
            radio: true,
            checkbox: true,
            file: true,
            password: true,
            image: true
        })Expr.pseudos[i] = createInputPseudo(i);
        for(i in {
            submit: true,
            reset: true
        })Expr.pseudos[i] = createButtonPseudo(i);
        // Easy API for creating new setFilters
        function setFilters() {}
        setFilters.prototype = Expr.filters = Expr.pseudos;
        Expr.setFilters = new setFilters();
        function tokenize(selector, parseOnly) {
            var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
            if (cached) return parseOnly ? 0 : cached.slice(0);
            soFar = selector;
            groups = [];
            preFilters = Expr.preFilter;
            while(soFar){
                // Comma and first run
                if (!matched || (match = rcomma.exec(soFar))) {
                    if (match) // Don't consume trailing commas as valid
                    soFar = soFar.slice(match[0].length) || soFar;
                    groups.push(tokens = []);
                }
                matched = false;
                // Combinators
                if (match = rleadingCombinator.exec(soFar)) {
                    matched = match.shift();
                    tokens.push({
                        value: matched,
                        // Cast descendant combinators to space
                        type: match[0].replace(rtrimCSS, " ")
                    });
                    soFar = soFar.slice(matched.length);
                }
                // Filters
                for(type in Expr.filter)if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
                    matched = match.shift();
                    tokens.push({
                        value: matched,
                        type: type,
                        matches: match
                    });
                    soFar = soFar.slice(matched.length);
                }
                if (!matched) break;
            }
            // Return the length of the invalid excess
            // if we're just parsing
            // Otherwise, throw an error or return tokens
            if (parseOnly) return soFar.length;
            return soFar ? find.error(selector) : // Cache the tokens
            tokenCache(selector, groups).slice(0);
        }
        function toSelector(tokens) {
            var i = 0, len = tokens.length, selector = "";
            for(; i < len; i++)selector += tokens[i].value;
            return selector;
        }
        function addCombinator(matcher, combinator, base) {
            var dir = combinator.dir, skip = combinator.next, key = skip || dir, checkNonElements = base && key === "parentNode", doneName = done++;
            return combinator.first ? // Check against closest ancestor/preceding element
            function(elem, context, xml) {
                while(elem = elem[dir]){
                    if (elem.nodeType === 1 || checkNonElements) return matcher(elem, context, xml);
                }
                return false;
            } : // Check against all ancestor/preceding elements
            function(elem, context, xml) {
                var oldCache, outerCache, newCache = [
                    dirruns,
                    doneName
                ];
                // We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
                if (xml) {
                    while(elem = elem[dir])if (elem.nodeType === 1 || checkNonElements) {
                        if (matcher(elem, context, xml)) return true;
                    }
                } else {
                    while(elem = elem[dir])if (elem.nodeType === 1 || checkNonElements) {
                        outerCache = elem[expando] || (elem[expando] = {});
                        if (skip && nodeName(elem, skip)) elem = elem[dir] || elem;
                        else if ((oldCache = outerCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) // Assign to newCache so results back-propagate to previous elements
                        return newCache[2] = oldCache[2];
                        else {
                            // Reuse newcache so results back-propagate to previous elements
                            outerCache[key] = newCache;
                            // A match means we're done; a fail means we have to keep checking
                            if (newCache[2] = matcher(elem, context, xml)) return true;
                        }
                    }
                }
                return false;
            };
        }
        function elementMatcher(matchers) {
            return matchers.length > 1 ? function(elem, context, xml) {
                var i = matchers.length;
                while(i--){
                    if (!matchers[i](elem, context, xml)) return false;
                }
                return true;
            } : matchers[0];
        }
        function multipleContexts(selector, contexts, results) {
            var i = 0, len = contexts.length;
            for(; i < len; i++)find(selector, contexts[i], results);
            return results;
        }
        function condense(unmatched, map, filter, context, xml) {
            var elem, newUnmatched = [], i = 0, len = unmatched.length, mapped = map != null;
            for(; i < len; i++){
                if (elem = unmatched[i]) {
                    if (!filter || filter(elem, context, xml)) {
                        newUnmatched.push(elem);
                        if (mapped) map.push(i);
                    }
                }
            }
            return newUnmatched;
        }
        function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
            if (postFilter && !postFilter[expando]) postFilter = setMatcher(postFilter);
            if (postFinder && !postFinder[expando]) postFinder = setMatcher(postFinder, postSelector);
            return markFunction(function(seed, results, context, xml) {
                var temp, i, elem, matcherOut, preMap = [], postMap = [], preexisting = results.length, // Get initial elements from seed or context
                elems = seed || multipleContexts(selector || "*", context.nodeType ? [
                    context
                ] : context, []), // Prefilter to get matcher input, preserving a map for seed-results synchronization
                matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems;
                if (matcher) {
                    // If we have a postFinder, or filtered seed, or non-seed postFilter
                    // or preexisting results,
                    matcherOut = postFinder || (seed ? preFilter : preexisting || postFilter) ? // ...intermediate processing is necessary
                    [] : // ...otherwise use results directly
                    results;
                    // Find primary matches
                    matcher(matcherIn, matcherOut, context, xml);
                } else matcherOut = matcherIn;
                // Apply postFilter
                if (postFilter) {
                    temp = condense(matcherOut, postMap);
                    postFilter(temp, [], context, xml);
                    // Un-match failing elements by moving them back to matcherIn
                    i = temp.length;
                    while(i--)if (elem = temp[i]) matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
                }
                if (seed) {
                    if (postFinder || preFilter) {
                        if (postFinder) {
                            // Get the final matcherOut by condensing this intermediate into postFinder contexts
                            temp = [];
                            i = matcherOut.length;
                            while(i--)if (elem = matcherOut[i]) // Restore matcherIn since elem is not yet a final match
                            temp.push(matcherIn[i] = elem);
                            postFinder(null, matcherOut = [], temp, xml);
                        }
                        // Move matched elements from seed to results to keep them synchronized
                        i = matcherOut.length;
                        while(i--)if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf.call(seed, elem) : preMap[i]) > -1) seed[temp] = !(results[temp] = elem);
                    }
                } else {
                    matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
                    if (postFinder) postFinder(null, results, matcherOut, xml);
                    else push.apply(results, matcherOut);
                }
            });
        }
        function matcherFromTokens(tokens) {
            var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i = leadingRelative ? 1 : 0, // The foundational matcher ensures that elements are reachable from top-level context(s)
            matchContext = addCombinator(function(elem) {
                return elem === checkContext;
            }, implicitRelative, true), matchAnyContext = addCombinator(function(elem) {
                return indexOf.call(checkContext, elem) > -1;
            }, implicitRelative, true), matchers = [
                function(elem, context, xml) {
                    // Support: IE 11+, Edge 17 - 18+
                    // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                    // two documents; shallow comparisons work.
                    // eslint-disable-next-line eqeqeq
                    var ret = !leadingRelative && (xml || context != outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
                    // Avoid hanging onto element
                    // (see https://github.com/jquery/sizzle/issues/299)
                    checkContext = null;
                    return ret;
                }
            ];
            for(; i < len; i++)if (matcher = Expr.relative[tokens[i].type]) matchers = [
                addCombinator(elementMatcher(matchers), matcher)
            ];
            else {
                matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);
                // Return special upon seeing a positional matcher
                if (matcher[expando]) {
                    // Find the next relative operator (if any) for proper handling
                    j = ++i;
                    for(; j < len; j++){
                        if (Expr.relative[tokens[j].type]) break;
                    }
                    return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(// If the preceding token was a descendant combinator, insert an implicit any-element `*`
                    tokens.slice(0, i - 1).concat({
                        value: tokens[i - 2].type === " " ? "*" : ""
                    })).replace(rtrimCSS, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
                }
                matchers.push(matcher);
            }
            return elementMatcher(matchers);
        }
        function matcherFromGroupMatchers(elementMatchers, setMatchers) {
            var bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0, superMatcher = function(seed, context, xml, results, outermost) {
                var elem, j, matcher, matchedCount = 0, i = "0", unmatched = seed && [], setMatched = [], contextBackup = outermostContext, // We must always have either seed elements or outermost context
                elems = seed || byElement && Expr.find.TAG("*", outermost), // Use integer dirruns iff this is the outermost matcher
                dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1, len = elems.length;
                if (outermost) // Support: IE 11+, Edge 17 - 18+
                // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                // two documents; shallow comparisons work.
                // eslint-disable-next-line eqeqeq
                outermostContext = context == document || context || outermost;
                // Add elements passing elementMatchers directly to results
                // Support: iOS <=7 - 9 only
                // Tolerate NodeList properties (IE: "length"; Safari: <number>) matching
                // elements by id. (see trac-14142)
                for(; i !== len && (elem = elems[i]) != null; i++){
                    if (byElement && elem) {
                        j = 0;
                        // Support: IE 11+, Edge 17 - 18+
                        // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                        // two documents; shallow comparisons work.
                        // eslint-disable-next-line eqeqeq
                        if (!context && elem.ownerDocument != document) {
                            setDocument(elem);
                            xml = !documentIsHTML;
                        }
                        while(matcher = elementMatchers[j++])if (matcher(elem, context || document, xml)) {
                            push.call(results, elem);
                            break;
                        }
                        if (outermost) dirruns = dirrunsUnique;
                    }
                    // Track unmatched elements for set filters
                    if (bySet) {
                        // They will have gone through all possible matchers
                        if (elem = !matcher && elem) matchedCount--;
                        // Lengthen the array for every element, matched or not
                        if (seed) unmatched.push(elem);
                    }
                }
                // `i` is now the count of elements visited above, and adding it to `matchedCount`
                // makes the latter nonnegative.
                matchedCount += i;
                // Apply set filters to unmatched elements
                // NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
                // equals `i`), unless we didn't visit _any_ elements in the above loop because we have
                // no element matchers and no seed.
                // Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
                // case, which will result in a "00" `matchedCount` that differs from `i` but is also
                // numerically zero.
                if (bySet && i !== matchedCount) {
                    j = 0;
                    while(matcher = setMatchers[j++])matcher(unmatched, setMatched, context, xml);
                    if (seed) {
                        // Reintegrate element matches to eliminate the need for sorting
                        if (matchedCount > 0) {
                            while(i--)if (!(unmatched[i] || setMatched[i])) setMatched[i] = pop.call(results);
                        }
                        // Discard index placeholder values to get only actual matches
                        setMatched = condense(setMatched);
                    }
                    // Add matches to results
                    push.apply(results, setMatched);
                    // Seedless set matches succeeding multiple successful matchers stipulate sorting
                    if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) jQuery.uniqueSort(results);
                }
                // Override manipulation of globals by nested matchers
                if (outermost) {
                    dirruns = dirrunsUnique;
                    outermostContext = contextBackup;
                }
                return unmatched;
            };
            return bySet ? markFunction(superMatcher) : superMatcher;
        }
        function compile(selector, match /* Internal Use Only */ ) {
            var i, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
            if (!cached) {
                // Generate a function of recursive functions that can be used to check each element
                if (!match) match = tokenize(selector);
                i = match.length;
                while(i--){
                    cached = matcherFromTokens(match[i]);
                    if (cached[expando]) setMatchers.push(cached);
                    else elementMatchers.push(cached);
                }
                // Cache the compiled function
                cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
                // Save selector and tokenization
                cached.selector = selector;
            }
            return cached;
        }
        /**
 * A low-level selection function that works with jQuery's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with jQuery selector compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */ function select(selector, context, results, seed) {
            var i, tokens, token, type, find, compiled = typeof selector === "function" && selector, match = !seed && tokenize(selector = compiled.selector || selector);
            results = results || [];
            // Try to minimize operations if there is only one selector in the list and no seed
            // (the latter of which guarantees us context)
            if (match.length === 1) {
                // Reduce context if the leading compound selector is an ID
                tokens = match[0] = match[0].slice(0);
                if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
                    context = (Expr.find.ID(token.matches[0].replace(runescape, funescape), context) || [])[0];
                    if (!context) return results;
                    else if (compiled) context = context.parentNode;
                    selector = selector.slice(tokens.shift().value.length);
                }
                // Fetch a seed set for right-to-left matching
                i = matchExpr.needsContext.test(selector) ? 0 : tokens.length;
                while(i--){
                    token = tokens[i];
                    // Abort if we hit a combinator
                    if (Expr.relative[type = token.type]) break;
                    if (find = Expr.find[type]) // Search, expanding context for leading sibling combinators
                    {
                        if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {
                            // If seed is empty or no tokens remain, we can return early
                            tokens.splice(i, 1);
                            selector = seed.length && toSelector(tokens);
                            if (!selector) {
                                push.apply(results, seed);
                                return results;
                            }
                            break;
                        }
                    }
                }
            }
            // Compile and execute a filtering function if one is not provided
            // Provide `match` to avoid retokenization if we modified the selector above
            (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
            return results;
        }
        // One-time assignments
        // Support: Android <=4.0 - 4.1+
        // Sort stability
        support.sortStable = expando.split("").sort(sortOrder).join("") === expando;
        // Initialize against the default document
        setDocument();
        // Support: Android <=4.0 - 4.1+
        // Detached nodes confoundingly follow *each other*
        support.sortDetached = assert(function(el) {
            // Should return 1, but returns 4 (following)
            return el.compareDocumentPosition(document.createElement("fieldset")) & 1;
        });
        jQuery.find = find;
        // Deprecated
        jQuery.expr[":"] = jQuery.expr.pseudos;
        jQuery.unique = jQuery.uniqueSort;
        // These have always been private, but they used to be documented as part of
        // Sizzle so let's maintain them for now for backwards compatibility purposes.
        find.compile = compile;
        find.select = select;
        find.setDocument = setDocument;
        find.tokenize = tokenize;
        find.escape = jQuery.escapeSelector;
        find.getText = jQuery.text;
        find.isXML = jQuery.isXMLDoc;
        find.selectors = jQuery.expr;
        find.support = jQuery.support;
        find.uniqueSort = jQuery.uniqueSort;
    /* eslint-enable */ })();
    var dir = function(elem, dir, until) {
        var matched = [], truncate = until !== undefined;
        while((elem = elem[dir]) && elem.nodeType !== 9)if (elem.nodeType === 1) {
            if (truncate && jQuery(elem).is(until)) break;
            matched.push(elem);
        }
        return matched;
    };
    var siblings = function(n, elem) {
        var matched = [];
        for(; n; n = n.nextSibling)if (n.nodeType === 1 && n !== elem) matched.push(n);
        return matched;
    };
    var rneedsContext = jQuery.expr.match.needsContext;
    var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    // Implement the identical functionality for filter and not
    function winnow(elements, qualifier, not) {
        if (isFunction(qualifier)) return jQuery.grep(elements, function(elem, i) {
            return !!qualifier.call(elem, i, elem) !== not;
        });
        // Single element
        if (qualifier.nodeType) return jQuery.grep(elements, function(elem) {
            return elem === qualifier !== not;
        });
        // Arraylike of elements (jQuery, arguments, Array)
        if (typeof qualifier !== "string") return jQuery.grep(elements, function(elem) {
            return indexOf.call(qualifier, elem) > -1 !== not;
        });
        // Filtered directly for both simple and complex selectors
        return jQuery.filter(qualifier, elements, not);
    }
    jQuery.filter = function(expr, elems, not) {
        var elem = elems[0];
        if (not) expr = ":not(" + expr + ")";
        if (elems.length === 1 && elem.nodeType === 1) return jQuery.find.matchesSelector(elem, expr) ? [
            elem
        ] : [];
        return jQuery.find.matches(expr, jQuery.grep(elems, function(elem) {
            return elem.nodeType === 1;
        }));
    };
    jQuery.fn.extend({
        find: function(selector) {
            var i, ret, len = this.length, self = this;
            if (typeof selector !== "string") return this.pushStack(jQuery(selector).filter(function() {
                for(i = 0; i < len; i++){
                    if (jQuery.contains(self[i], this)) return true;
                }
            }));
            ret = this.pushStack([]);
            for(i = 0; i < len; i++)jQuery.find(selector, self[i], ret);
            return len > 1 ? jQuery.uniqueSort(ret) : ret;
        },
        filter: function(selector) {
            return this.pushStack(winnow(this, selector || [], false));
        },
        not: function(selector) {
            return this.pushStack(winnow(this, selector || [], true));
        },
        is: function(selector) {
            return !!winnow(this, // If this is a positional/relative selector, check membership in the returned set
            // so $("p:first").is("p:last") won't return true for a doc with two "p".
            typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
        }
    });
    // Initialize a jQuery object
    // A central reference to the root jQuery(document)
    var rootjQuery, // A simple way to check for HTML strings
    // Prioritize #id over <tag> to avoid XSS via location.hash (trac-9521)
    // Strict HTML recognition (trac-11290: must start with <)
    // Shortcut simple #id case for speed
    rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, init = jQuery.fn.init = function(selector, context, root) {
        var match, elem;
        // HANDLE: $(""), $(null), $(undefined), $(false)
        if (!selector) return this;
        // Method init() accepts an alternate rootjQuery
        // so migrate can support jQuery.sub (gh-2101)
        root = root || rootjQuery;
        // Handle HTML strings
        if (typeof selector === "string") {
            if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) // Assume that strings that start and end with <> are HTML and skip the regex check
            match = [
                null,
                selector,
                null
            ];
            else match = rquickExpr.exec(selector);
            // Match html or make sure no context is specified for #id
            if (match && (match[1] || !context)) {
                // HANDLE: $(html) -> $(array)
                if (match[1]) {
                    context = context instanceof jQuery ? context[0] : context;
                    // Option to run scripts is true for back-compat
                    // Intentionally let the error be thrown if parseHTML is not present
                    jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true));
                    // HANDLE: $(html, props)
                    if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
                        for(match in context)// Properties of context are called as methods if possible
                        if (isFunction(this[match])) this[match](context[match]);
                        else this.attr(match, context[match]);
                    }
                    return this;
                // HANDLE: $(#id)
                } else {
                    elem = document.getElementById(match[2]);
                    if (elem) {
                        // Inject the element directly into the jQuery object
                        this[0] = elem;
                        this.length = 1;
                    }
                    return this;
                }
            } else if (!context || context.jquery) return (context || root).find(selector);
            else return this.constructor(context).find(selector);
        // HANDLE: $(DOMElement)
        } else if (selector.nodeType) {
            this[0] = selector;
            this.length = 1;
            return this;
        // HANDLE: $(function)
        // Shortcut for document ready
        } else if (isFunction(selector)) return root.ready !== undefined ? root.ready(selector) : // Execute immediately if ready is not present
        selector(jQuery);
        return jQuery.makeArray(selector, this);
    };
    // Give the init function the jQuery prototype for later instantiation
    init.prototype = jQuery.fn;
    // Initialize central reference
    rootjQuery = jQuery(document);
    var rparentsprev = /^(?:parents|prev(?:Until|All))/, // Methods guaranteed to produce a unique set when starting from a unique set
    guaranteedUnique = {
        children: true,
        contents: true,
        next: true,
        prev: true
    };
    jQuery.fn.extend({
        has: function(target) {
            var targets = jQuery(target, this), l = targets.length;
            return this.filter(function() {
                var i = 0;
                for(; i < l; i++){
                    if (jQuery.contains(this, targets[i])) return true;
                }
            });
        },
        closest: function(selectors, context) {
            var cur, i = 0, l = this.length, matched = [], targets = typeof selectors !== "string" && jQuery(selectors);
            // Positional selectors never match, since there's no _selection_ context
            if (!rneedsContext.test(selectors)) for(; i < l; i++){
                for(cur = this[i]; cur && cur !== context; cur = cur.parentNode)// Always skip document fragments
                if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : // Don't pass non-elements to jQuery#find
                cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
                    matched.push(cur);
                    break;
                }
            }
            return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
        },
        // Determine the position of an element within the set
        index: function(elem) {
            // No argument, return index in parent
            if (!elem) return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
            // Index in selector
            if (typeof elem === "string") return indexOf.call(jQuery(elem), this[0]);
            // Locate the position of the desired element
            return indexOf.call(this, // If it receives a jQuery object, the first element is used
            elem.jquery ? elem[0] : elem);
        },
        add: function(selector, context) {
            return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))));
        },
        addBack: function(selector) {
            return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
        }
    });
    function sibling(cur, dir) {
        while((cur = cur[dir]) && cur.nodeType !== 1);
        return cur;
    }
    jQuery.each({
        parent: function(elem) {
            var parent = elem.parentNode;
            return parent && parent.nodeType !== 11 ? parent : null;
        },
        parents: function(elem) {
            return dir(elem, "parentNode");
        },
        parentsUntil: function(elem, _i, until) {
            return dir(elem, "parentNode", until);
        },
        next: function(elem) {
            return sibling(elem, "nextSibling");
        },
        prev: function(elem) {
            return sibling(elem, "previousSibling");
        },
        nextAll: function(elem) {
            return dir(elem, "nextSibling");
        },
        prevAll: function(elem) {
            return dir(elem, "previousSibling");
        },
        nextUntil: function(elem, _i, until) {
            return dir(elem, "nextSibling", until);
        },
        prevUntil: function(elem, _i, until) {
            return dir(elem, "previousSibling", until);
        },
        siblings: function(elem) {
            return siblings((elem.parentNode || {}).firstChild, elem);
        },
        children: function(elem) {
            return siblings(elem.firstChild);
        },
        contents: function(elem) {
            if (elem.contentDocument != null && // Support: IE 11+
            // <object> elements with no `data` attribute has an object
            // `contentDocument` with a `null` prototype.
            getProto(elem.contentDocument)) return elem.contentDocument;
            // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
            // Treat the template element as a regular one in browsers that
            // don't support it.
            if (nodeName(elem, "template")) elem = elem.content || elem;
            return jQuery.merge([], elem.childNodes);
        }
    }, function(name, fn) {
        jQuery.fn[name] = function(until, selector) {
            var matched = jQuery.map(this, fn, until);
            if (name.slice(-5) !== "Until") selector = until;
            if (selector && typeof selector === "string") matched = jQuery.filter(selector, matched);
            if (this.length > 1) {
                // Remove duplicates
                if (!guaranteedUnique[name]) jQuery.uniqueSort(matched);
                // Reverse order for parents* and prev-derivatives
                if (rparentsprev.test(name)) matched.reverse();
            }
            return this.pushStack(matched);
        };
    });
    var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;
    // Convert String-formatted options into Object-formatted ones
    function createOptions(options) {
        var object = {};
        jQuery.each(options.match(rnothtmlwhite) || [], function(_, flag) {
            object[flag] = true;
        });
        return object;
    }
    /*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */ jQuery.Callbacks = function(options) {
        // Convert options from String-formatted to Object-formatted if needed
        // (we check in cache first)
        options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);
        var firing, // Last fire value for non-forgettable lists
        memory, // Flag to know if list was already fired
        fired, // Flag to prevent firing
        locked, // Actual callback list
        list = [], // Queue of execution data for repeatable lists
        queue = [], // Index of currently firing callback (modified by add/remove as needed)
        firingIndex = -1, // Fire callbacks
        fire = function() {
            // Enforce single-firing
            locked = locked || options.once;
            // Execute callbacks for all pending executions,
            // respecting firingIndex overrides and runtime changes
            fired = firing = true;
            for(; queue.length; firingIndex = -1){
                memory = queue.shift();
                while(++firingIndex < list.length)// Run callback and check for early termination
                if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
                    // Jump to end and forget the data so .add doesn't re-fire
                    firingIndex = list.length;
                    memory = false;
                }
            }
            // Forget the data if we're done with it
            if (!options.memory) memory = false;
            firing = false;
            // Clean up if we're done firing for good
            if (locked) {
                // Keep an empty list if we have data for future add calls
                if (memory) list = [];
                else list = "";
            }
        }, // Actual Callbacks object
        self = {
            // Add a callback or a collection of callbacks to the list
            add: function() {
                if (list) {
                    // If we have memory from a past run, we should fire after adding
                    if (memory && !firing) {
                        firingIndex = list.length - 1;
                        queue.push(memory);
                    }
                    (function add(args) {
                        jQuery.each(args, function(_, arg) {
                            if (isFunction(arg)) {
                                if (!options.unique || !self.has(arg)) list.push(arg);
                            } else if (arg && arg.length && toType(arg) !== "string") // Inspect recursively
                            add(arg);
                        });
                    })(arguments);
                    if (memory && !firing) fire();
                }
                return this;
            },
            // Remove a callback from the list
            remove: function() {
                jQuery.each(arguments, function(_, arg) {
                    var index;
                    while((index = jQuery.inArray(arg, list, index)) > -1){
                        list.splice(index, 1);
                        // Handle firing indexes
                        if (index <= firingIndex) firingIndex--;
                    }
                });
                return this;
            },
            // Check if a given callback is in the list.
            // If no argument is given, return whether or not list has callbacks attached.
            has: function(fn) {
                return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
            },
            // Remove all callbacks from the list
            empty: function() {
                if (list) list = [];
                return this;
            },
            // Disable .fire and .add
            // Abort any current/pending executions
            // Clear all callbacks and values
            disable: function() {
                locked = queue = [];
                list = memory = "";
                return this;
            },
            disabled: function() {
                return !list;
            },
            // Disable .fire
            // Also disable .add unless we have memory (since it would have no effect)
            // Abort any pending executions
            lock: function() {
                locked = queue = [];
                if (!memory && !firing) list = memory = "";
                return this;
            },
            locked: function() {
                return !!locked;
            },
            // Call all callbacks with the given context and arguments
            fireWith: function(context, args) {
                if (!locked) {
                    args = args || [];
                    args = [
                        context,
                        args.slice ? args.slice() : args
                    ];
                    queue.push(args);
                    if (!firing) fire();
                }
                return this;
            },
            // Call all the callbacks with the given arguments
            fire: function() {
                self.fireWith(this, arguments);
                return this;
            },
            // To know if the callbacks have already been called at least once
            fired: function() {
                return !!fired;
            }
        };
        return self;
    };
    function Identity(v) {
        return v;
    }
    function Thrower(ex) {
        throw ex;
    }
    function adoptValue(value, resolve, reject, noValue) {
        var method;
        try {
            // Check for promise aspect first to privilege synchronous behavior
            if (value && isFunction(method = value.promise)) method.call(value).done(resolve).fail(reject);
            else if (value && isFunction(method = value.then)) method.call(value, resolve, reject);
            else // Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
            // * false: [ value ].slice( 0 ) => resolve( value )
            // * true: [ value ].slice( 1 ) => resolve()
            resolve.apply(undefined, [
                value
            ].slice(noValue));
        // For Promises/A+, convert exceptions into rejections
        // Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
        // Deferred#then to conditionally suppress rejection.
        } catch (value) {
            // Support: Android 4.0 only
            // Strict mode functions invoked without .call/.apply get global-object context
            reject.apply(undefined, [
                value
            ]);
        }
    }
    jQuery.extend({
        Deferred: function(func) {
            var tuples = [
                // action, add listener, callbacks,
                // ... .then handlers, argument index, [final state]
                [
                    "notify",
                    "progress",
                    jQuery.Callbacks("memory"),
                    jQuery.Callbacks("memory"),
                    2
                ],
                [
                    "resolve",
                    "done",
                    jQuery.Callbacks("once memory"),
                    jQuery.Callbacks("once memory"),
                    0,
                    "resolved"
                ],
                [
                    "reject",
                    "fail",
                    jQuery.Callbacks("once memory"),
                    jQuery.Callbacks("once memory"),
                    1,
                    "rejected"
                ]
            ], state = "pending", promise = {
                state: function() {
                    return state;
                },
                always: function() {
                    deferred.done(arguments).fail(arguments);
                    return this;
                },
                "catch": function(fn) {
                    return promise.then(null, fn);
                },
                // Keep pipe for back-compat
                pipe: function() {
                    var fns = arguments;
                    return jQuery.Deferred(function(newDefer) {
                        jQuery.each(tuples, function(_i, tuple) {
                            // Map tuples (progress, done, fail) to arguments (done, fail, progress)
                            var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]];
                            // deferred.progress(function() { bind to newDefer or newDefer.notify })
                            // deferred.done(function() { bind to newDefer or newDefer.resolve })
                            // deferred.fail(function() { bind to newDefer or newDefer.reject })
                            deferred[tuple[1]](function() {
                                var returned = fn && fn.apply(this, arguments);
                                if (returned && isFunction(returned.promise)) returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                                else newDefer[tuple[0] + "With"](this, fn ? [
                                    returned
                                ] : arguments);
                            });
                        });
                        fns = null;
                    }).promise();
                },
                then: function(onFulfilled, onRejected, onProgress) {
                    var maxDepth = 0;
                    function resolve(depth, deferred, handler, special) {
                        return function() {
                            var that = this, args = arguments, mightThrow = function() {
                                var returned, then;
                                // Support: Promises/A+ section 2.3.3.3.3
                                // https://promisesaplus.com/#point-59
                                // Ignore double-resolution attempts
                                if (depth < maxDepth) return;
                                returned = handler.apply(that, args);
                                // Support: Promises/A+ section 2.3.1
                                // https://promisesaplus.com/#point-48
                                if (returned === deferred.promise()) throw new TypeError("Thenable self-resolution");
                                // Support: Promises/A+ sections 2.3.3.1, 3.5
                                // https://promisesaplus.com/#point-54
                                // https://promisesaplus.com/#point-75
                                // Retrieve `then` only once
                                then = returned && // Support: Promises/A+ section 2.3.4
                                // https://promisesaplus.com/#point-64
                                // Only check objects and functions for thenability
                                (typeof returned === "object" || typeof returned === "function") && returned.then;
                                // Handle a returned thenable
                                if (isFunction(then)) {
                                    // Special processors (notify) just wait for resolution
                                    if (special) then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special));
                                    else {
                                        // ...and disregard older resolution values
                                        maxDepth++;
                                        then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special), resolve(maxDepth, deferred, Identity, deferred.notifyWith));
                                    }
                                } else {
                                    // Only substitute handlers pass on context
                                    // and multiple values (non-spec behavior)
                                    if (handler !== Identity) {
                                        that = undefined;
                                        args = [
                                            returned
                                        ];
                                    }
                                    // Process the value(s)
                                    // Default process is resolve
                                    (special || deferred.resolveWith)(that, args);
                                }
                            }, // Only normal processors (resolve) catch and reject exceptions
                            process = special ? mightThrow : function() {
                                try {
                                    mightThrow();
                                } catch (e) {
                                    if (jQuery.Deferred.exceptionHook) jQuery.Deferred.exceptionHook(e, process.error);
                                    // Support: Promises/A+ section 2.3.3.3.4.1
                                    // https://promisesaplus.com/#point-61
                                    // Ignore post-resolution exceptions
                                    if (depth + 1 >= maxDepth) {
                                        // Only substitute handlers pass on context
                                        // and multiple values (non-spec behavior)
                                        if (handler !== Thrower) {
                                            that = undefined;
                                            args = [
                                                e
                                            ];
                                        }
                                        deferred.rejectWith(that, args);
                                    }
                                }
                            };
                            // Support: Promises/A+ section 2.3.3.3.1
                            // https://promisesaplus.com/#point-57
                            // Re-resolve promises immediately to dodge false rejection from
                            // subsequent errors
                            if (depth) process();
                            else {
                                // Call an optional hook to record the error, in case of exception
                                // since it's otherwise lost when execution goes async
                                if (jQuery.Deferred.getErrorHook) process.error = jQuery.Deferred.getErrorHook();
                                else if (jQuery.Deferred.getStackHook) process.error = jQuery.Deferred.getStackHook();
                                window1.setTimeout(process);
                            }
                        };
                    }
                    return jQuery.Deferred(function(newDefer) {
                        // progress_handlers.add( ... )
                        tuples[0][3].add(resolve(0, newDefer, isFunction(onProgress) ? onProgress : Identity, newDefer.notifyWith));
                        // fulfilled_handlers.add( ... )
                        tuples[1][3].add(resolve(0, newDefer, isFunction(onFulfilled) ? onFulfilled : Identity));
                        // rejected_handlers.add( ... )
                        tuples[2][3].add(resolve(0, newDefer, isFunction(onRejected) ? onRejected : Thrower));
                    }).promise();
                },
                // Get a promise for this deferred
                // If obj is provided, the promise aspect is added to the object
                promise: function(obj) {
                    return obj != null ? jQuery.extend(obj, promise) : promise;
                }
            }, deferred = {};
            // Add list-specific methods
            jQuery.each(tuples, function(i, tuple) {
                var list = tuple[2], stateString = tuple[5];
                // promise.progress = list.add
                // promise.done = list.add
                // promise.fail = list.add
                promise[tuple[1]] = list.add;
                // Handle state
                if (stateString) list.add(function() {
                    // state = "resolved" (i.e., fulfilled)
                    // state = "rejected"
                    state = stateString;
                }, // rejected_callbacks.disable
                // fulfilled_callbacks.disable
                tuples[3 - i][2].disable, // rejected_handlers.disable
                // fulfilled_handlers.disable
                tuples[3 - i][3].disable, // progress_callbacks.lock
                tuples[0][2].lock, // progress_handlers.lock
                tuples[0][3].lock);
                // progress_handlers.fire
                // fulfilled_handlers.fire
                // rejected_handlers.fire
                list.add(tuple[3].fire);
                // deferred.notify = function() { deferred.notifyWith(...) }
                // deferred.resolve = function() { deferred.resolveWith(...) }
                // deferred.reject = function() { deferred.rejectWith(...) }
                deferred[tuple[0]] = function() {
                    deferred[tuple[0] + "With"](this === deferred ? undefined : this, arguments);
                    return this;
                };
                // deferred.notifyWith = list.fireWith
                // deferred.resolveWith = list.fireWith
                // deferred.rejectWith = list.fireWith
                deferred[tuple[0] + "With"] = list.fireWith;
            });
            // Make the deferred a promise
            promise.promise(deferred);
            // Call given func if any
            if (func) func.call(deferred, deferred);
            // All done!
            return deferred;
        },
        // Deferred helper
        when: function(singleValue) {
            var // count of uncompleted subordinates
            remaining = arguments.length, // count of unprocessed arguments
            i = remaining, // subordinate fulfillment data
            resolveContexts = Array(i), resolveValues = slice.call(arguments), // the primary Deferred
            primary = jQuery.Deferred(), // subordinate callback factory
            updateFunc = function(i) {
                return function(value) {
                    resolveContexts[i] = this;
                    resolveValues[i] = arguments.length > 1 ? slice.call(arguments) : value;
                    if (!--remaining) primary.resolveWith(resolveContexts, resolveValues);
                };
            };
            // Single- and empty arguments are adopted like Promise.resolve
            if (remaining <= 1) {
                adoptValue(singleValue, primary.done(updateFunc(i)).resolve, primary.reject, !remaining);
                // Use .then() to unwrap secondary thenables (cf. gh-3000)
                if (primary.state() === "pending" || isFunction(resolveValues[i] && resolveValues[i].then)) return primary.then();
            }
            // Multiple arguments are aggregated like Promise.all array elements
            while(i--)adoptValue(resolveValues[i], updateFunc(i), primary.reject);
            return primary.promise();
        }
    });
    // These usually indicate a programmer mistake during development,
    // warn about them ASAP rather than swallowing them by default.
    var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    // If `jQuery.Deferred.getErrorHook` is defined, `asyncError` is an error
    // captured before the async barrier to get the original error cause
    // which may otherwise be hidden.
    jQuery.Deferred.exceptionHook = function(error, asyncError) {
        // Support: IE 8 - 9 only
        // Console exists when dev tools are open, which can happen at any time
        if (window1.console && window1.console.warn && error && rerrorNames.test(error.name)) window1.console.warn("jQuery.Deferred exception: " + error.message, error.stack, asyncError);
    };
    jQuery.readyException = function(error) {
        window1.setTimeout(function() {
            throw error;
        });
    };
    // The deferred used on DOM ready
    var readyList = jQuery.Deferred();
    jQuery.fn.ready = function(fn) {
        readyList.then(fn)// Wrap jQuery.readyException in a function so that the lookup
        // happens at the time of error handling instead of callback
        // registration.
        .catch(function(error) {
            jQuery.readyException(error);
        });
        return this;
    };
    jQuery.extend({
        // Is the DOM ready to be used? Set to true once it occurs.
        isReady: false,
        // A counter to track how many items to wait for before
        // the ready event fires. See trac-6781
        readyWait: 1,
        // Handle when the DOM is ready
        ready: function(wait) {
            // Abort if there are pending holds or we're already ready
            if (wait === true ? --jQuery.readyWait : jQuery.isReady) return;
            // Remember that the DOM is ready
            jQuery.isReady = true;
            // If a normal DOM Ready event fired, decrement, and wait if need be
            if (wait !== true && --jQuery.readyWait > 0) return;
            // If there are functions bound, to execute
            readyList.resolveWith(document, [
                jQuery
            ]);
        }
    });
    jQuery.ready.then = readyList.then;
    // The ready event handler and self cleanup method
    function completed() {
        document.removeEventListener("DOMContentLoaded", completed);
        window1.removeEventListener("load", completed);
        jQuery.ready();
    }
    // Catch cases where $(document).ready() is called
    // after the browser event has already occurred.
    // Support: IE <=9 - 10 only
    // Older IE sometimes signals "interactive" too soon
    if (document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll) // Handle it asynchronously to allow scripts the opportunity to delay ready
    window1.setTimeout(jQuery.ready);
    else {
        // Use the handy event callback
        document.addEventListener("DOMContentLoaded", completed);
        // A fallback to window.onload, that will always work
        window1.addEventListener("load", completed);
    }
    // Multifunctional method to get and set values of a collection
    // The value/s can optionally be executed if it's a function
    var access = function(elems, fn, key, value, chainable, emptyGet, raw) {
        var i = 0, len = elems.length, bulk = key == null;
        // Sets many values
        if (toType(key) === "object") {
            chainable = true;
            for(i in key)access(elems, fn, i, key[i], true, emptyGet, raw);
        // Sets one value
        } else if (value !== undefined) {
            chainable = true;
            if (!isFunction(value)) raw = true;
            if (bulk) {
                // Bulk operations run against the entire set
                if (raw) {
                    fn.call(elems, value);
                    fn = null;
                // ...except when executing function values
                } else {
                    bulk = fn;
                    fn = function(elem, _key, value) {
                        return bulk.call(jQuery(elem), value);
                    };
                }
            }
            if (fn) for(; i < len; i++)fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
        }
        if (chainable) return elems;
        // Gets
        if (bulk) return fn.call(elems);
        return len ? fn(elems[0], key) : emptyGet;
    };
    // Matches dashed string for camelizing
    var rmsPrefix = /^-ms-/, rdashAlpha = /-([a-z])/g;
    // Used by camelCase as callback to replace()
    function fcamelCase(_all, letter) {
        return letter.toUpperCase();
    }
    // Convert dashed to camelCase; used by the css and data modules
    // Support: IE <=9 - 11, Edge 12 - 15
    // Microsoft forgot to hump their vendor prefix (trac-9572)
    function camelCase(string) {
        return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
    }
    var acceptData = function(owner) {
        // Accepts only:
        //  - Node
        //    - Node.ELEMENT_NODE
        //    - Node.DOCUMENT_NODE
        //  - Object
        //    - Any
        return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
    };
    function Data() {
        this.expando = jQuery.expando + Data.uid++;
    }
    Data.uid = 1;
    Data.prototype = {
        cache: function(owner) {
            // Check if the owner object already has a cache
            var value = owner[this.expando];
            // If not, create one
            if (!value) {
                value = {};
                // We can accept data for non-element nodes in modern browsers,
                // but we should not, see trac-8335.
                // Always return an empty object.
                if (acceptData(owner)) {
                    // If it is a node unlikely to be stringify-ed or looped over
                    // use plain assignment
                    if (owner.nodeType) owner[this.expando] = value;
                    else Object.defineProperty(owner, this.expando, {
                        value: value,
                        configurable: true
                    });
                }
            }
            return value;
        },
        set: function(owner, data, value) {
            var prop, cache = this.cache(owner);
            // Handle: [ owner, key, value ] args
            // Always use camelCase key (gh-2257)
            if (typeof data === "string") cache[camelCase(data)] = value;
            else // Copy the properties one-by-one to the cache object
            for(prop in data)cache[camelCase(prop)] = data[prop];
            return cache;
        },
        get: function(owner, key) {
            return key === undefined ? this.cache(owner) : // Always use camelCase key (gh-2257)
            owner[this.expando] && owner[this.expando][camelCase(key)];
        },
        access: function(owner, key, value) {
            // In cases where either:
            //
            //   1. No key was specified
            //   2. A string key was specified, but no value provided
            //
            // Take the "read" path and allow the get method to determine
            // which value to return, respectively either:
            //
            //   1. The entire cache object
            //   2. The data stored at the key
            //
            if (key === undefined || key && typeof key === "string" && value === undefined) return this.get(owner, key);
            // When the key is not a string, or both a key and value
            // are specified, set or extend (existing objects) with either:
            //
            //   1. An object of properties
            //   2. A key and value
            //
            this.set(owner, key, value);
            // Since the "set" path can have two possible entry points
            // return the expected data based on which path was taken[*]
            return value !== undefined ? value : key;
        },
        remove: function(owner, key) {
            var i, cache = owner[this.expando];
            if (cache === undefined) return;
            if (key !== undefined) {
                // Support array or space separated string of keys
                if (Array.isArray(key)) // If key is an array of keys...
                // We always set camelCase keys, so remove that.
                key = key.map(camelCase);
                else {
                    key = camelCase(key);
                    // If a key with the spaces exists, use it.
                    // Otherwise, create an array by matching non-whitespace
                    key = key in cache ? [
                        key
                    ] : key.match(rnothtmlwhite) || [];
                }
                i = key.length;
                while(i--)delete cache[key[i]];
            }
            // Remove the expando if there's no more data
            if (key === undefined || jQuery.isEmptyObject(cache)) {
                // Support: Chrome <=35 - 45
                // Webkit & Blink performance suffers when deleting properties
                // from DOM nodes, so set to undefined instead
                // https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
                if (owner.nodeType) owner[this.expando] = undefined;
                else delete owner[this.expando];
            }
        },
        hasData: function(owner) {
            var cache = owner[this.expando];
            return cache !== undefined && !jQuery.isEmptyObject(cache);
        }
    };
    var dataPriv = new Data();
    var dataUser = new Data();
    //	Implementation Summary
    //
    //	1. Enforce API surface and semantic compatibility with 1.9.x branch
    //	2. Improve the module's maintainability by reducing the storage
    //		paths to a single mechanism.
    //	3. Use the same single mechanism to support "private" and "user" data.
    //	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
    //	5. Avoid exposing implementation details on user objects (eg. expando properties)
    //	6. Provide a clear path for implementation upgrade to WeakMap in 2014
    var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, rmultiDash = /[A-Z]/g;
    function getData(data) {
        if (data === "true") return true;
        if (data === "false") return false;
        if (data === "null") return null;
        // Only convert to a number if it doesn't change the string
        if (data === +data + "") return +data;
        if (rbrace.test(data)) return JSON.parse(data);
        return data;
    }
    function dataAttr(elem, key, data) {
        var name;
        // If nothing was found internally, try to fetch any
        // data from the HTML5 data-* attribute
        if (data === undefined && elem.nodeType === 1) {
            name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
            data = elem.getAttribute(name);
            if (typeof data === "string") {
                try {
                    data = getData(data);
                } catch (e) {}
                // Make sure we set the data so it isn't changed later
                dataUser.set(elem, key, data);
            } else data = undefined;
        }
        return data;
    }
    jQuery.extend({
        hasData: function(elem) {
            return dataUser.hasData(elem) || dataPriv.hasData(elem);
        },
        data: function(elem, name, data) {
            return dataUser.access(elem, name, data);
        },
        removeData: function(elem, name) {
            dataUser.remove(elem, name);
        },
        // TODO: Now that all calls to _data and _removeData have been replaced
        // with direct calls to dataPriv methods, these can be deprecated.
        _data: function(elem, name, data) {
            return dataPriv.access(elem, name, data);
        },
        _removeData: function(elem, name) {
            dataPriv.remove(elem, name);
        }
    });
    jQuery.fn.extend({
        data: function(key, value) {
            var i, name, data, elem = this[0], attrs = elem && elem.attributes;
            // Gets all values
            if (key === undefined) {
                if (this.length) {
                    data = dataUser.get(elem);
                    if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
                        i = attrs.length;
                        while(i--)// Support: IE 11 only
                        // The attrs elements can be null (trac-14894)
                        if (attrs[i]) {
                            name = attrs[i].name;
                            if (name.indexOf("data-") === 0) {
                                name = camelCase(name.slice(5));
                                dataAttr(elem, name, data[name]);
                            }
                        }
                        dataPriv.set(elem, "hasDataAttrs", true);
                    }
                }
                return data;
            }
            // Sets multiple values
            if (typeof key === "object") return this.each(function() {
                dataUser.set(this, key);
            });
            return access(this, function(value) {
                var data;
                // The calling jQuery object (element matches) is not empty
                // (and therefore has an element appears at this[ 0 ]) and the
                // `value` parameter was not undefined. An empty jQuery object
                // will result in `undefined` for elem = this[ 0 ] which will
                // throw an exception if an attempt to read a data cache is made.
                if (elem && value === undefined) {
                    // Attempt to get data from the cache
                    // The key will always be camelCased in Data
                    data = dataUser.get(elem, key);
                    if (data !== undefined) return data;
                    // Attempt to "discover" the data in
                    // HTML5 custom data-* attrs
                    data = dataAttr(elem, key);
                    if (data !== undefined) return data;
                    // We tried really hard, but the data doesn't exist.
                    return;
                }
                // Set the data...
                this.each(function() {
                    // We always store the camelCased key
                    dataUser.set(this, key, value);
                });
            }, null, value, arguments.length > 1, null, true);
        },
        removeData: function(key) {
            return this.each(function() {
                dataUser.remove(this, key);
            });
        }
    });
    jQuery.extend({
        queue: function(elem, type, data) {
            var queue;
            if (elem) {
                type = (type || "fx") + "queue";
                queue = dataPriv.get(elem, type);
                // Speed up dequeue by getting out quickly if this is just a lookup
                if (data) {
                    if (!queue || Array.isArray(data)) queue = dataPriv.access(elem, type, jQuery.makeArray(data));
                    else queue.push(data);
                }
                return queue || [];
            }
        },
        dequeue: function(elem, type) {
            type = type || "fx";
            var queue = jQuery.queue(elem, type), startLength = queue.length, fn = queue.shift(), hooks = jQuery._queueHooks(elem, type), next = function() {
                jQuery.dequeue(elem, type);
            };
            // If the fx queue is dequeued, always remove the progress sentinel
            if (fn === "inprogress") {
                fn = queue.shift();
                startLength--;
            }
            if (fn) {
                // Add a progress sentinel to prevent the fx queue from being
                // automatically dequeued
                if (type === "fx") queue.unshift("inprogress");
                // Clear up the last queue stop function
                delete hooks.stop;
                fn.call(elem, next, hooks);
            }
            if (!startLength && hooks) hooks.empty.fire();
        },
        // Not public - generate a queueHooks object, or return the current one
        _queueHooks: function(elem, type) {
            var key = type + "queueHooks";
            return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
                empty: jQuery.Callbacks("once memory").add(function() {
                    dataPriv.remove(elem, [
                        type + "queue",
                        key
                    ]);
                })
            });
        }
    });
    jQuery.fn.extend({
        queue: function(type, data) {
            var setter = 2;
            if (typeof type !== "string") {
                data = type;
                type = "fx";
                setter--;
            }
            if (arguments.length < setter) return jQuery.queue(this[0], type);
            return data === undefined ? this : this.each(function() {
                var queue = jQuery.queue(this, type, data);
                // Ensure a hooks for this queue
                jQuery._queueHooks(this, type);
                if (type === "fx" && queue[0] !== "inprogress") jQuery.dequeue(this, type);
            });
        },
        dequeue: function(type) {
            return this.each(function() {
                jQuery.dequeue(this, type);
            });
        },
        clearQueue: function(type) {
            return this.queue(type || "fx", []);
        },
        // Get a promise resolved when queues of a certain type
        // are emptied (fx is the type by default)
        promise: function(type, obj) {
            var tmp, count = 1, defer = jQuery.Deferred(), elements = this, i = this.length, resolve = function() {
                if (!--count) defer.resolveWith(elements, [
                    elements
                ]);
            };
            if (typeof type !== "string") {
                obj = type;
                type = undefined;
            }
            type = type || "fx";
            while(i--){
                tmp = dataPriv.get(elements[i], type + "queueHooks");
                if (tmp && tmp.empty) {
                    count++;
                    tmp.empty.add(resolve);
                }
            }
            resolve();
            return defer.promise(obj);
        }
    });
    var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
    var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
    var cssExpand = [
        "Top",
        "Right",
        "Bottom",
        "Left"
    ];
    var documentElement = document.documentElement;
    var isAttached = function(elem) {
        return jQuery.contains(elem.ownerDocument, elem);
    }, composed = {
        composed: true
    };
    // Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
    // Check attachment across shadow DOM boundaries when possible (gh-3504)
    // Support: iOS 10.0-10.2 only
    // Early iOS 10 versions support `attachShadow` but not `getRootNode`,
    // leading to errors. We need to check for `getRootNode`.
    if (documentElement.getRootNode) isAttached = function(elem) {
        return jQuery.contains(elem.ownerDocument, elem) || elem.getRootNode(composed) === elem.ownerDocument;
    };
    var isHiddenWithinTree = function(elem, el) {
        // isHiddenWithinTree might be called from jQuery#filter function;
        // in that case, element will be second argument
        elem = el || elem;
        // Inline style trumps all
        return elem.style.display === "none" || elem.style.display === "" && // Otherwise, check computed style
        // Support: Firefox <=43 - 45
        // Disconnected elements can have computed display: none, so first confirm that elem is
        // in the document.
        isAttached(elem) && jQuery.css(elem, "display") === "none";
    };
    function adjustCSS(elem, prop, valueParts, tween) {
        var adjusted, scale, maxIterations = 20, currentValue = tween ? function() {
            return tween.cur();
        } : function() {
            return jQuery.css(elem, prop, "");
        }, initial = currentValue(), unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"), // Starting value computation is required for potential unit mismatches
        initialInUnit = elem.nodeType && (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));
        if (initialInUnit && initialInUnit[3] !== unit) {
            // Support: Firefox <=54
            // Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
            initial = initial / 2;
            // Trust units reported by jQuery.css
            unit = unit || initialInUnit[3];
            // Iteratively approximate from a nonzero starting point
            initialInUnit = +initial || 1;
            while(maxIterations--){
                // Evaluate and update our best guess (doubling guesses that zero out).
                // Finish if the scale equals or crosses 1 (making the old*new product non-positive).
                jQuery.style(elem, prop, initialInUnit + unit);
                if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) maxIterations = 0;
                initialInUnit = initialInUnit / scale;
            }
            initialInUnit = initialInUnit * 2;
            jQuery.style(elem, prop, initialInUnit + unit);
            // Make sure we update the tween properties later on
            valueParts = valueParts || [];
        }
        if (valueParts) {
            initialInUnit = +initialInUnit || +initial || 0;
            // Apply relative offset (+=/-=) if specified
            adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
            if (tween) {
                tween.unit = unit;
                tween.start = initialInUnit;
                tween.end = adjusted;
            }
        }
        return adjusted;
    }
    var defaultDisplayMap = {};
    function getDefaultDisplay(elem) {
        var temp, doc = elem.ownerDocument, nodeName = elem.nodeName, display = defaultDisplayMap[nodeName];
        if (display) return display;
        temp = doc.body.appendChild(doc.createElement(nodeName));
        display = jQuery.css(temp, "display");
        temp.parentNode.removeChild(temp);
        if (display === "none") display = "block";
        defaultDisplayMap[nodeName] = display;
        return display;
    }
    function showHide(elements, show) {
        var display, elem, values = [], index = 0, length = elements.length;
        // Determine new display value for elements that need to change
        for(; index < length; index++){
            elem = elements[index];
            if (!elem.style) continue;
            display = elem.style.display;
            if (show) {
                // Since we force visibility upon cascade-hidden elements, an immediate (and slow)
                // check is required in this first loop unless we have a nonempty display value (either
                // inline or about-to-be-restored)
                if (display === "none") {
                    values[index] = dataPriv.get(elem, "display") || null;
                    if (!values[index]) elem.style.display = "";
                }
                if (elem.style.display === "" && isHiddenWithinTree(elem)) values[index] = getDefaultDisplay(elem);
            } else if (display !== "none") {
                values[index] = "none";
                // Remember what we're overwriting
                dataPriv.set(elem, "display", display);
            }
        }
        // Set the display of the elements in a second loop to avoid constant reflow
        for(index = 0; index < length; index++)if (values[index] != null) elements[index].style.display = values[index];
        return elements;
    }
    jQuery.fn.extend({
        show: function() {
            return showHide(this, true);
        },
        hide: function() {
            return showHide(this);
        },
        toggle: function(state) {
            if (typeof state === "boolean") return state ? this.show() : this.hide();
            return this.each(function() {
                if (isHiddenWithinTree(this)) jQuery(this).show();
                else jQuery(this).hide();
            });
        }
    });
    var rcheckableType = /^(?:checkbox|radio)$/i;
    var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
    var rscriptType = /^$|^module$|\/(?:java|ecma)script/i;
    (function() {
        var fragment = document.createDocumentFragment(), div = fragment.appendChild(document.createElement("div")), input = document.createElement("input");
        // Support: Android 4.0 - 4.3 only
        // Check state lost if the name is set (trac-11217)
        // Support: Windows Web Apps (WWA)
        // `name` and `type` must use .setAttribute for WWA (trac-14901)
        input.setAttribute("type", "radio");
        input.setAttribute("checked", "checked");
        input.setAttribute("name", "t");
        div.appendChild(input);
        // Support: Android <=4.1 only
        // Older WebKit doesn't clone checked state correctly in fragments
        support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
        // Support: IE <=11 only
        // Make sure textarea (and checkbox) defaultValue is properly cloned
        div.innerHTML = "<textarea>x</textarea>";
        support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
        // Support: IE <=9 only
        // IE <=9 replaces <option> tags with their contents when inserted outside of
        // the select element.
        div.innerHTML = "<option></option>";
        support.option = !!div.lastChild;
    })();
    // We have to close these tags to support XHTML (trac-13200)
    var wrapMap = {
        // XHTML parsers do not magically insert elements in the
        // same way that tag soup parsers do. So we cannot shorten
        // this by omitting <tbody> or other required elements.
        thead: [
            1,
            "<table>",
            "</table>"
        ],
        col: [
            2,
            "<table><colgroup>",
            "</colgroup></table>"
        ],
        tr: [
            2,
            "<table><tbody>",
            "</tbody></table>"
        ],
        td: [
            3,
            "<table><tbody><tr>",
            "</tr></tbody></table>"
        ],
        _default: [
            0,
            "",
            ""
        ]
    };
    wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
    wrapMap.th = wrapMap.td;
    // Support: IE <=9 only
    if (!support.option) wrapMap.optgroup = wrapMap.option = [
        1,
        "<select multiple='multiple'>",
        "</select>"
    ];
    function getAll(context, tag) {
        // Support: IE <=9 - 11 only
        // Use typeof to avoid zero-argument method invocation on host objects (trac-15151)
        var ret;
        if (typeof context.getElementsByTagName !== "undefined") ret = context.getElementsByTagName(tag || "*");
        else if (typeof context.querySelectorAll !== "undefined") ret = context.querySelectorAll(tag || "*");
        else ret = [];
        if (tag === undefined || tag && nodeName(context, tag)) return jQuery.merge([
            context
        ], ret);
        return ret;
    }
    // Mark scripts as having already been evaluated
    function setGlobalEval(elems, refElements) {
        var i = 0, l = elems.length;
        for(; i < l; i++)dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
    }
    var rhtml = /<|&#?\w+;/;
    function buildFragment(elems, context, scripts, selection, ignored) {
        var elem, tmp, tag, wrap, attached, j, fragment = context.createDocumentFragment(), nodes = [], i = 0, l = elems.length;
        for(; i < l; i++){
            elem = elems[i];
            if (elem || elem === 0) {
                // Add nodes directly
                if (toType(elem) === "object") // Support: Android <=4.0 only, PhantomJS 1 only
                // push.apply(_, arraylike) throws on ancient WebKit
                jQuery.merge(nodes, elem.nodeType ? [
                    elem
                ] : elem);
                else if (!rhtml.test(elem)) nodes.push(context.createTextNode(elem));
                else {
                    tmp = tmp || fragment.appendChild(context.createElement("div"));
                    // Deserialize a standard representation
                    tag = (rtagName.exec(elem) || [
                        "",
                        ""
                    ])[1].toLowerCase();
                    wrap = wrapMap[tag] || wrapMap._default;
                    tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];
                    // Descend through wrappers to the right content
                    j = wrap[0];
                    while(j--)tmp = tmp.lastChild;
                    // Support: Android <=4.0 only, PhantomJS 1 only
                    // push.apply(_, arraylike) throws on ancient WebKit
                    jQuery.merge(nodes, tmp.childNodes);
                    // Remember the top-level container
                    tmp = fragment.firstChild;
                    // Ensure the created nodes are orphaned (trac-12392)
                    tmp.textContent = "";
                }
            }
        }
        // Remove wrapper from fragment
        fragment.textContent = "";
        i = 0;
        while(elem = nodes[i++]){
            // Skip elements already in the context collection (trac-4087)
            if (selection && jQuery.inArray(elem, selection) > -1) {
                if (ignored) ignored.push(elem);
                continue;
            }
            attached = isAttached(elem);
            // Append to fragment
            tmp = getAll(fragment.appendChild(elem), "script");
            // Preserve script evaluation history
            if (attached) setGlobalEval(tmp);
            // Capture executables
            if (scripts) {
                j = 0;
                while(elem = tmp[j++])if (rscriptType.test(elem.type || "")) scripts.push(elem);
            }
        }
        return fragment;
    }
    var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
    function returnTrue() {
        return true;
    }
    function returnFalse() {
        return false;
    }
    function on(elem, types, selector, data, fn, one) {
        var origFn, type;
        // Types can be a map of types/handlers
        if (typeof types === "object") {
            // ( types-Object, selector, data )
            if (typeof selector !== "string") {
                // ( types-Object, data )
                data = data || selector;
                selector = undefined;
            }
            for(type in types)on(elem, type, selector, data, types[type], one);
            return elem;
        }
        if (data == null && fn == null) {
            // ( types, fn )
            fn = selector;
            data = selector = undefined;
        } else if (fn == null) {
            if (typeof selector === "string") {
                // ( types, selector, fn )
                fn = data;
                data = undefined;
            } else {
                // ( types, data, fn )
                fn = data;
                data = selector;
                selector = undefined;
            }
        }
        if (fn === false) fn = returnFalse;
        else if (!fn) return elem;
        if (one === 1) {
            origFn = fn;
            fn = function(event) {
                // Can use an empty set, since event contains the info
                jQuery().off(event);
                return origFn.apply(this, arguments);
            };
            // Use same guid so caller can remove using origFn
            fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
        }
        return elem.each(function() {
            jQuery.event.add(this, types, fn, data, selector);
        });
    }
    /*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */ jQuery.event = {
        global: {},
        add: function(elem, types, handler, data, selector) {
            var handleObjIn, eventHandle, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.get(elem);
            // Only attach events to objects that accept data
            if (!acceptData(elem)) return;
            // Caller can pass in an object of custom data in lieu of the handler
            if (handler.handler) {
                handleObjIn = handler;
                handler = handleObjIn.handler;
                selector = handleObjIn.selector;
            }
            // Ensure that invalid selectors throw exceptions at attach time
            // Evaluate against documentElement in case elem is a non-element node (e.g., document)
            if (selector) jQuery.find.matchesSelector(documentElement, selector);
            // Make sure that the handler has a unique ID, used to find/remove it later
            if (!handler.guid) handler.guid = jQuery.guid++;
            // Init the element's event structure and main handler, if this is the first
            if (!(events = elemData.events)) events = elemData.events = Object.create(null);
            if (!(eventHandle = elemData.handle)) eventHandle = elemData.handle = function(e) {
                // Discard the second event of a jQuery.event.trigger() and
                // when an event is called after a page has unloaded
                return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : undefined;
            };
            // Handle multiple events separated by a space
            types = (types || "").match(rnothtmlwhite) || [
                ""
            ];
            t = types.length;
            while(t--){
                tmp = rtypenamespace.exec(types[t]) || [];
                type = origType = tmp[1];
                namespaces = (tmp[2] || "").split(".").sort();
                // There *must* be a type, no attaching namespace-only handlers
                if (!type) continue;
                // If event changes its type, use the special event handlers for the changed type
                special = jQuery.event.special[type] || {};
                // If selector defined, determine special event api type, otherwise given type
                type = (selector ? special.delegateType : special.bindType) || type;
                // Update special based on newly reset type
                special = jQuery.event.special[type] || {};
                // handleObj is passed to all event handlers
                handleObj = jQuery.extend({
                    type: type,
                    origType: origType,
                    data: data,
                    handler: handler,
                    guid: handler.guid,
                    selector: selector,
                    needsContext: selector && jQuery.expr.match.needsContext.test(selector),
                    namespace: namespaces.join(".")
                }, handleObjIn);
                // Init the event handler queue if we're the first
                if (!(handlers = events[type])) {
                    handlers = events[type] = [];
                    handlers.delegateCount = 0;
                    // Only use addEventListener if the special events handler returns false
                    if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
                        if (elem.addEventListener) elem.addEventListener(type, eventHandle);
                    }
                }
                if (special.add) {
                    special.add.call(elem, handleObj);
                    if (!handleObj.handler.guid) handleObj.handler.guid = handler.guid;
                }
                // Add to the element's handler list, delegates in front
                if (selector) handlers.splice(handlers.delegateCount++, 0, handleObj);
                else handlers.push(handleObj);
                // Keep track of which events have ever been used, for event optimization
                jQuery.event.global[type] = true;
            }
        },
        // Detach an event or set of events from an element
        remove: function(elem, types, handler, selector, mappedTypes) {
            var j, origCount, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
            if (!elemData || !(events = elemData.events)) return;
            // Once for each type.namespace in types; type may be omitted
            types = (types || "").match(rnothtmlwhite) || [
                ""
            ];
            t = types.length;
            while(t--){
                tmp = rtypenamespace.exec(types[t]) || [];
                type = origType = tmp[1];
                namespaces = (tmp[2] || "").split(".").sort();
                // Unbind all events (on this namespace, if provided) for the element
                if (!type) {
                    for(type in events)jQuery.event.remove(elem, type + types[t], handler, selector, true);
                    continue;
                }
                special = jQuery.event.special[type] || {};
                type = (selector ? special.delegateType : special.bindType) || type;
                handlers = events[type] || [];
                tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
                // Remove matching events
                origCount = j = handlers.length;
                while(j--){
                    handleObj = handlers[j];
                    if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
                        handlers.splice(j, 1);
                        if (handleObj.selector) handlers.delegateCount--;
                        if (special.remove) special.remove.call(elem, handleObj);
                    }
                }
                // Remove generic event handler if we removed something and no more handlers exist
                // (avoids potential for endless recursion during removal of special event handlers)
                if (origCount && !handlers.length) {
                    if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) jQuery.removeEvent(elem, type, elemData.handle);
                    delete events[type];
                }
            }
            // Remove data and the expando if it's no longer used
            if (jQuery.isEmptyObject(events)) dataPriv.remove(elem, "handle events");
        },
        dispatch: function(nativeEvent) {
            var i, j, ret, matched, handleObj, handlerQueue, args = new Array(arguments.length), // Make a writable jQuery.Event from the native event object
            event = jQuery.event.fix(nativeEvent), handlers = (dataPriv.get(this, "events") || Object.create(null))[event.type] || [], special = jQuery.event.special[event.type] || {};
            // Use the fix-ed jQuery.Event rather than the (read-only) native event
            args[0] = event;
            for(i = 1; i < arguments.length; i++)args[i] = arguments[i];
            event.delegateTarget = this;
            // Call the preDispatch hook for the mapped type, and let it bail if desired
            if (special.preDispatch && special.preDispatch.call(this, event) === false) return;
            // Determine handlers
            handlerQueue = jQuery.event.handlers.call(this, event, handlers);
            // Run delegates first; they may want to stop propagation beneath us
            i = 0;
            while((matched = handlerQueue[i++]) && !event.isPropagationStopped()){
                event.currentTarget = matched.elem;
                j = 0;
                while((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped())// If the event is namespaced, then each handler is only invoked if it is
                // specially universal or its namespaces are a superset of the event's.
                if (!event.rnamespace || handleObj.namespace === false || event.rnamespace.test(handleObj.namespace)) {
                    event.handleObj = handleObj;
                    event.data = handleObj.data;
                    ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
                    if (ret !== undefined) {
                        if ((event.result = ret) === false) {
                            event.preventDefault();
                            event.stopPropagation();
                        }
                    }
                }
            }
            // Call the postDispatch hook for the mapped type
            if (special.postDispatch) special.postDispatch.call(this, event);
            return event.result;
        },
        handlers: function(event, handlers) {
            var i, handleObj, sel, matchedHandlers, matchedSelectors, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;
            // Find delegate handlers
            if (delegateCount && // Support: IE <=9
            // Black-hole SVG <use> instance trees (trac-13180)
            cur.nodeType && // Support: Firefox <=42
            // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
            // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
            // Support: IE 11 only
            // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
            !(event.type === "click" && event.button >= 1)) {
                for(; cur !== this; cur = cur.parentNode || this)// Don't check non-elements (trac-13208)
                // Don't process clicks on disabled elements (trac-6911, trac-8165, trac-11382, trac-11764)
                if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
                    matchedHandlers = [];
                    matchedSelectors = {};
                    for(i = 0; i < delegateCount; i++){
                        handleObj = handlers[i];
                        // Don't conflict with Object.prototype properties (trac-13203)
                        sel = handleObj.selector + " ";
                        if (matchedSelectors[sel] === undefined) matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [
                            cur
                        ]).length;
                        if (matchedSelectors[sel]) matchedHandlers.push(handleObj);
                    }
                    if (matchedHandlers.length) handlerQueue.push({
                        elem: cur,
                        handlers: matchedHandlers
                    });
                }
            }
            // Add the remaining (directly-bound) handlers
            cur = this;
            if (delegateCount < handlers.length) handlerQueue.push({
                elem: cur,
                handlers: handlers.slice(delegateCount)
            });
            return handlerQueue;
        },
        addProp: function(name, hook) {
            Object.defineProperty(jQuery.Event.prototype, name, {
                enumerable: true,
                configurable: true,
                get: isFunction(hook) ? function() {
                    if (this.originalEvent) return hook(this.originalEvent);
                } : function() {
                    if (this.originalEvent) return this.originalEvent[name];
                },
                set: function(value) {
                    Object.defineProperty(this, name, {
                        enumerable: true,
                        configurable: true,
                        writable: true,
                        value: value
                    });
                }
            });
        },
        fix: function(originalEvent) {
            return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
        },
        special: {
            load: {
                // Prevent triggered image.load events from bubbling to window.load
                noBubble: true
            },
            click: {
                // Utilize native event to ensure correct state for checkable inputs
                setup: function(data) {
                    // For mutual compressibility with _default, replace `this` access with a local var.
                    // `|| data` is dead code meant only to preserve the variable through minification.
                    var el = this || data;
                    // Claim the first handler
                    if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) // dataPriv.set( el, "click", ... )
                    leverageNative(el, "click", true);
                    // Return false to allow normal processing in the caller
                    return false;
                },
                trigger: function(data) {
                    // For mutual compressibility with _default, replace `this` access with a local var.
                    // `|| data` is dead code meant only to preserve the variable through minification.
                    var el = this || data;
                    // Force setup before triggering a click
                    if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) leverageNative(el, "click");
                    // Return non-false to allow normal event-path propagation
                    return true;
                },
                // For cross-browser consistency, suppress native .click() on links
                // Also prevent it if we're currently inside a leveraged native-event stack
                _default: function(event) {
                    var target = event.target;
                    return rcheckableType.test(target.type) && target.click && nodeName(target, "input") && dataPriv.get(target, "click") || nodeName(target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(event) {
                    // Support: Firefox 20+
                    // Firefox doesn't alert if the returnValue field is not set.
                    if (event.result !== undefined && event.originalEvent) event.originalEvent.returnValue = event.result;
                }
            }
        }
    };
    // Ensure the presence of an event listener that handles manually-triggered
    // synthetic events by interrupting progress until reinvoked in response to
    // *native* events that it fires directly, ensuring that state changes have
    // already occurred before other listeners are invoked.
    function leverageNative(el, type, isSetup) {
        // Missing `isSetup` indicates a trigger call, which must force setup through jQuery.event.add
        if (!isSetup) {
            if (dataPriv.get(el, type) === undefined) jQuery.event.add(el, type, returnTrue);
            return;
        }
        // Register the controller as a special universal handler for all event namespaces
        dataPriv.set(el, type, false);
        jQuery.event.add(el, type, {
            namespace: false,
            handler: function(event) {
                var result, saved = dataPriv.get(this, type);
                if (event.isTrigger & 1 && this[type]) {
                    // Interrupt processing of the outer synthetic .trigger()ed event
                    if (!saved) {
                        // Store arguments for use when handling the inner native event
                        // There will always be at least one argument (an event object), so this array
                        // will not be confused with a leftover capture object.
                        saved = slice.call(arguments);
                        dataPriv.set(this, type, saved);
                        // Trigger the native event and capture its result
                        this[type]();
                        result = dataPriv.get(this, type);
                        dataPriv.set(this, type, false);
                        if (saved !== result) {
                            // Cancel the outer synthetic event
                            event.stopImmediatePropagation();
                            event.preventDefault();
                            return result;
                        }
                    // If this is an inner synthetic event for an event with a bubbling surrogate
                    // (focus or blur), assume that the surrogate already propagated from triggering
                    // the native event and prevent that from happening again here.
                    // This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
                    // bubbling surrogate propagates *after* the non-bubbling base), but that seems
                    // less bad than duplication.
                    } else if ((jQuery.event.special[type] || {}).delegateType) event.stopPropagation();
                // If this is a native event triggered above, everything is now in order
                // Fire an inner synthetic event with the original arguments
                } else if (saved) {
                    // ...and capture the result
                    dataPriv.set(this, type, jQuery.event.trigger(saved[0], saved.slice(1), this));
                    // Abort handling of the native event by all jQuery handlers while allowing
                    // native handlers on the same element to run. On target, this is achieved
                    // by stopping immediate propagation just on the jQuery event. However,
                    // the native event is re-wrapped by a jQuery one on each level of the
                    // propagation so the only way to stop it for jQuery is to stop it for
                    // everyone via native `stopPropagation()`. This is not a problem for
                    // focus/blur which don't bubble, but it does also stop click on checkboxes
                    // and radios. We accept this limitation.
                    event.stopPropagation();
                    event.isImmediatePropagationStopped = returnTrue;
                }
            }
        });
    }
    jQuery.removeEvent = function(elem, type, handle) {
        // This "if" is needed for plain objects
        if (elem.removeEventListener) elem.removeEventListener(type, handle);
    };
    jQuery.Event = function(src, props) {
        // Allow instantiation without the 'new' keyword
        if (!(this instanceof jQuery.Event)) return new jQuery.Event(src, props);
        // Event object
        if (src && src.type) {
            this.originalEvent = src;
            this.type = src.type;
            // Events bubbling up the document may have been marked as prevented
            // by a handler lower down the tree; reflect the correct value.
            this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined && // Support: Android <=2.3 only
            src.returnValue === false ? returnTrue : returnFalse;
            // Create target properties
            // Support: Safari <=6 - 7 only
            // Target should not be a text node (trac-504, trac-13143)
            this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;
            this.currentTarget = src.currentTarget;
            this.relatedTarget = src.relatedTarget;
        // Event type
        } else this.type = src;
        // Put explicitly provided properties onto the event object
        if (props) jQuery.extend(this, props);
        // Create a timestamp if incoming event doesn't have one
        this.timeStamp = src && src.timeStamp || Date.now();
        // Mark it as fixed
        this[jQuery.expando] = true;
    };
    // jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
    // https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
    jQuery.Event.prototype = {
        constructor: jQuery.Event,
        isDefaultPrevented: returnFalse,
        isPropagationStopped: returnFalse,
        isImmediatePropagationStopped: returnFalse,
        isSimulated: false,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = returnTrue;
            if (e && !this.isSimulated) e.preventDefault();
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = returnTrue;
            if (e && !this.isSimulated) e.stopPropagation();
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = returnTrue;
            if (e && !this.isSimulated) e.stopImmediatePropagation();
            this.stopPropagation();
        }
    };
    // Includes all common event props including KeyEvent and MouseEvent specific props
    jQuery.each({
        altKey: true,
        bubbles: true,
        cancelable: true,
        changedTouches: true,
        ctrlKey: true,
        detail: true,
        eventPhase: true,
        metaKey: true,
        pageX: true,
        pageY: true,
        shiftKey: true,
        view: true,
        "char": true,
        code: true,
        charCode: true,
        key: true,
        keyCode: true,
        button: true,
        buttons: true,
        clientX: true,
        clientY: true,
        offsetX: true,
        offsetY: true,
        pointerId: true,
        pointerType: true,
        screenX: true,
        screenY: true,
        targetTouches: true,
        toElement: true,
        touches: true,
        which: true
    }, jQuery.event.addProp);
    jQuery.each({
        focus: "focusin",
        blur: "focusout"
    }, function(type, delegateType) {
        function focusMappedHandler(nativeEvent) {
            if (document.documentMode) {
                // Support: IE 11+
                // Attach a single focusin/focusout handler on the document while someone wants
                // focus/blur. This is because the former are synchronous in IE while the latter
                // are async. In other browsers, all those handlers are invoked synchronously.
                // `handle` from private data would already wrap the event, but we need
                // to change the `type` here.
                var handle = dataPriv.get(this, "handle"), event = jQuery.event.fix(nativeEvent);
                event.type = nativeEvent.type === "focusin" ? "focus" : "blur";
                event.isSimulated = true;
                // First, handle focusin/focusout
                handle(nativeEvent);
                // ...then, handle focus/blur
                //
                // focus/blur don't bubble while focusin/focusout do; simulate the former by only
                // invoking the handler at the lower level.
                if (event.target === event.currentTarget) // The setup part calls `leverageNative`, which, in turn, calls
                // `jQuery.event.add`, so event handle will already have been set
                // by this point.
                handle(event);
            } else // For non-IE browsers, attach a single capturing handler on the document
            // while someone wants focusin/focusout.
            jQuery.event.simulate(delegateType, nativeEvent.target, jQuery.event.fix(nativeEvent));
        }
        jQuery.event.special[type] = {
            // Utilize native event if possible so blur/focus sequence is correct
            setup: function() {
                var attaches;
                // Claim the first handler
                // dataPriv.set( this, "focus", ... )
                // dataPriv.set( this, "blur", ... )
                leverageNative(this, type, true);
                if (document.documentMode) {
                    // Support: IE 9 - 11+
                    // We use the same native handler for focusin & focus (and focusout & blur)
                    // so we need to coordinate setup & teardown parts between those events.
                    // Use `delegateType` as the key as `type` is already used by `leverageNative`.
                    attaches = dataPriv.get(this, delegateType);
                    if (!attaches) this.addEventListener(delegateType, focusMappedHandler);
                    dataPriv.set(this, delegateType, (attaches || 0) + 1);
                } else // Return false to allow normal processing in the caller
                return false;
            },
            trigger: function() {
                // Force setup before trigger
                leverageNative(this, type);
                // Return non-false to allow normal event-path propagation
                return true;
            },
            teardown: function() {
                var attaches;
                if (document.documentMode) {
                    attaches = dataPriv.get(this, delegateType) - 1;
                    if (!attaches) {
                        this.removeEventListener(delegateType, focusMappedHandler);
                        dataPriv.remove(this, delegateType);
                    } else dataPriv.set(this, delegateType, attaches);
                } else // Return false to indicate standard teardown should be applied
                return false;
            },
            // Suppress native focus or blur if we're currently inside
            // a leveraged native-event stack
            _default: function(event) {
                return dataPriv.get(event.target, type);
            },
            delegateType: delegateType
        };
        // Support: Firefox <=44
        // Firefox doesn't have focus(in | out) events
        // Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
        //
        // Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
        // focus(in | out) events fire after focus & blur events,
        // which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
        // Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
        //
        // Support: IE 9 - 11+
        // To preserve relative focusin/focus & focusout/blur event order guaranteed on the 3.x branch,
        // attach a single handler for both events in IE.
        jQuery.event.special[delegateType] = {
            setup: function() {
                // Handle: regular nodes (via `this.ownerDocument`), window
                // (via `this.document`) & document (via `this`).
                var doc = this.ownerDocument || this.document || this, dataHolder = document.documentMode ? this : doc, attaches = dataPriv.get(dataHolder, delegateType);
                // Support: IE 9 - 11+
                // We use the same native handler for focusin & focus (and focusout & blur)
                // so we need to coordinate setup & teardown parts between those events.
                // Use `delegateType` as the key as `type` is already used by `leverageNative`.
                if (!attaches) {
                    if (document.documentMode) this.addEventListener(delegateType, focusMappedHandler);
                    else doc.addEventListener(type, focusMappedHandler, true);
                }
                dataPriv.set(dataHolder, delegateType, (attaches || 0) + 1);
            },
            teardown: function() {
                var doc = this.ownerDocument || this.document || this, dataHolder = document.documentMode ? this : doc, attaches = dataPriv.get(dataHolder, delegateType) - 1;
                if (!attaches) {
                    if (document.documentMode) this.removeEventListener(delegateType, focusMappedHandler);
                    else doc.removeEventListener(type, focusMappedHandler, true);
                    dataPriv.remove(dataHolder, delegateType);
                } else dataPriv.set(dataHolder, delegateType, attaches);
            }
        };
    });
    // Create mouseenter/leave events using mouseover/out and event-time checks
    // so that event delegation works in jQuery.
    // Do the same for pointerenter/pointerleave and pointerover/pointerout
    //
    // Support: Safari 7 only
    // Safari sends mouseenter too often; see:
    // https://bugs.chromium.org/p/chromium/issues/detail?id=470258
    // for the description of the bug (it existed in older Chrome versions as well).
    jQuery.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(orig, fix) {
        jQuery.event.special[orig] = {
            delegateType: fix,
            bindType: fix,
            handle: function(event) {
                var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;
                // For mouseenter/leave call the handler if related is outside the target.
                // NB: No relatedTarget if the mouse left/entered the browser window
                if (!related || related !== target && !jQuery.contains(target, related)) {
                    event.type = handleObj.origType;
                    ret = handleObj.handler.apply(this, arguments);
                    event.type = fix;
                }
                return ret;
            }
        };
    });
    jQuery.fn.extend({
        on: function(types, selector, data, fn) {
            return on(this, types, selector, data, fn);
        },
        one: function(types, selector, data, fn) {
            return on(this, types, selector, data, fn, 1);
        },
        off: function(types, selector, fn) {
            var handleObj, type;
            if (types && types.preventDefault && types.handleObj) {
                // ( event )  dispatched jQuery.Event
                handleObj = types.handleObj;
                jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
                return this;
            }
            if (typeof types === "object") {
                // ( types-object [, selector] )
                for(type in types)this.off(type, selector, types[type]);
                return this;
            }
            if (selector === false || typeof selector === "function") {
                // ( types [, fn] )
                fn = selector;
                selector = undefined;
            }
            if (fn === false) fn = returnFalse;
            return this.each(function() {
                jQuery.event.remove(this, types, fn, selector);
            });
        }
    });
    var // Support: IE <=10 - 11, Edge 12 - 13 only
    // In IE/Edge using regex groups here causes severe slowdowns.
    // See https://connect.microsoft.com/IE/feedback/details/1736512/
    rnoInnerhtml = /<script|<style|<link/i, // checked="checked" or checked
    rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, rcleanScript = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
    // Prefer a tbody over its parent table for containing new rows
    function manipulationTarget(elem, content) {
        if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) return jQuery(elem).children("tbody")[0] || elem;
        return elem;
    }
    // Replace/restore the type attribute of script elements for safe DOM manipulation
    function disableScript(elem) {
        elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
        return elem;
    }
    function restoreScript(elem) {
        if ((elem.type || "").slice(0, 5) === "true/") elem.type = elem.type.slice(5);
        else elem.removeAttribute("type");
        return elem;
    }
    function cloneCopyEvent(src, dest) {
        var i, l, type, pdataOld, udataOld, udataCur, events;
        if (dest.nodeType !== 1) return;
        // 1. Copy private data: events, handlers, etc.
        if (dataPriv.hasData(src)) {
            pdataOld = dataPriv.get(src);
            events = pdataOld.events;
            if (events) {
                dataPriv.remove(dest, "handle events");
                for(type in events)for(i = 0, l = events[type].length; i < l; i++)jQuery.event.add(dest, type, events[type][i]);
            }
        }
        // 2. Copy user data
        if (dataUser.hasData(src)) {
            udataOld = dataUser.access(src);
            udataCur = jQuery.extend({}, udataOld);
            dataUser.set(dest, udataCur);
        }
    }
    // Fix IE bugs, see support tests
    function fixInput(src, dest) {
        var nodeName = dest.nodeName.toLowerCase();
        // Fails to persist the checked state of a cloned checkbox or radio button.
        if (nodeName === "input" && rcheckableType.test(src.type)) dest.checked = src.checked;
        else if (nodeName === "input" || nodeName === "textarea") dest.defaultValue = src.defaultValue;
    }
    function domManip(collection, args, callback, ignored) {
        // Flatten any nested arrays
        args = flat(args);
        var fragment, first, scripts, hasScripts, node, doc, i = 0, l = collection.length, iNoClone = l - 1, value = args[0], valueIsFunction = isFunction(value);
        // We can't cloneNode fragments that contain checked, in WebKit
        if (valueIsFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) return collection.each(function(index) {
            var self = collection.eq(index);
            if (valueIsFunction) args[0] = value.call(this, index, self.html());
            domManip(self, args, callback, ignored);
        });
        if (l) {
            fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
            first = fragment.firstChild;
            if (fragment.childNodes.length === 1) fragment = first;
            // Require either new content or an interest in ignored elements to invoke the callback
            if (first || ignored) {
                scripts = jQuery.map(getAll(fragment, "script"), disableScript);
                hasScripts = scripts.length;
                // Use the original fragment for the last item
                // instead of the first because it can end up
                // being emptied incorrectly in certain situations (trac-8070).
                for(; i < l; i++){
                    node = fragment;
                    if (i !== iNoClone) {
                        node = jQuery.clone(node, true, true);
                        // Keep references to cloned scripts for later restoration
                        if (hasScripts) // Support: Android <=4.0 only, PhantomJS 1 only
                        // push.apply(_, arraylike) throws on ancient WebKit
                        jQuery.merge(scripts, getAll(node, "script"));
                    }
                    callback.call(collection[i], node, i);
                }
                if (hasScripts) {
                    doc = scripts[scripts.length - 1].ownerDocument;
                    // Re-enable scripts
                    jQuery.map(scripts, restoreScript);
                    // Evaluate executable scripts on first document insertion
                    for(i = 0; i < hasScripts; i++){
                        node = scripts[i];
                        if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) {
                            if (node.src && (node.type || "").toLowerCase() !== "module") // Optional AJAX dependency, but won't run scripts if not present
                            {
                                if (jQuery._evalUrl && !node.noModule) jQuery._evalUrl(node.src, {
                                    nonce: node.nonce || node.getAttribute("nonce")
                                }, doc);
                            } else // Unwrap a CDATA section containing script contents. This shouldn't be
                            // needed as in XML documents they're already not visible when
                            // inspecting element contents and in HTML documents they have no
                            // meaning but we're preserving that logic for backwards compatibility.
                            // This will be removed completely in 4.0. See gh-4904.
                            DOMEval(node.textContent.replace(rcleanScript, ""), node, doc);
                        }
                    }
                }
            }
        }
        return collection;
    }
    function remove(elem, selector, keepData) {
        var node, nodes = selector ? jQuery.filter(selector, elem) : elem, i = 0;
        for(; (node = nodes[i]) != null; i++){
            if (!keepData && node.nodeType === 1) jQuery.cleanData(getAll(node));
            if (node.parentNode) {
                if (keepData && isAttached(node)) setGlobalEval(getAll(node, "script"));
                node.parentNode.removeChild(node);
            }
        }
        return elem;
    }
    jQuery.extend({
        htmlPrefilter: function(html) {
            return html;
        },
        clone: function(elem, dataAndEvents, deepDataAndEvents) {
            var i, l, srcElements, destElements, clone = elem.cloneNode(true), inPage = isAttached(elem);
            // Fix IE cloning issues
            if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
                // We eschew jQuery#find here for performance reasons:
                // https://jsperf.com/getall-vs-sizzle/2
                destElements = getAll(clone);
                srcElements = getAll(elem);
                for(i = 0, l = srcElements.length; i < l; i++)fixInput(srcElements[i], destElements[i]);
            }
            // Copy the events from the original to the clone
            if (dataAndEvents) {
                if (deepDataAndEvents) {
                    srcElements = srcElements || getAll(elem);
                    destElements = destElements || getAll(clone);
                    for(i = 0, l = srcElements.length; i < l; i++)cloneCopyEvent(srcElements[i], destElements[i]);
                } else cloneCopyEvent(elem, clone);
            }
            // Preserve script evaluation history
            destElements = getAll(clone, "script");
            if (destElements.length > 0) setGlobalEval(destElements, !inPage && getAll(elem, "script"));
            // Return the cloned set
            return clone;
        },
        cleanData: function(elems) {
            var data, elem, type, special = jQuery.event.special, i = 0;
            for(; (elem = elems[i]) !== undefined; i++)if (acceptData(elem)) {
                if (data = elem[dataPriv.expando]) {
                    if (data.events) {
                        for(type in data.events)if (special[type]) jQuery.event.remove(elem, type);
                        else jQuery.removeEvent(elem, type, data.handle);
                    }
                    // Support: Chrome <=35 - 45+
                    // Assign undefined instead of using delete, see Data#remove
                    elem[dataPriv.expando] = undefined;
                }
                if (elem[dataUser.expando]) // Support: Chrome <=35 - 45+
                // Assign undefined instead of using delete, see Data#remove
                elem[dataUser.expando] = undefined;
            }
        }
    });
    jQuery.fn.extend({
        detach: function(selector) {
            return remove(this, selector, true);
        },
        remove: function(selector) {
            return remove(this, selector);
        },
        text: function(value) {
            return access(this, function(value) {
                return value === undefined ? jQuery.text(this) : this.empty().each(function() {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) this.textContent = value;
                });
            }, null, value, arguments.length);
        },
        append: function() {
            return domManip(this, arguments, function(elem) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var target = manipulationTarget(this, elem);
                    target.appendChild(elem);
                }
            });
        },
        prepend: function() {
            return domManip(this, arguments, function(elem) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var target = manipulationTarget(this, elem);
                    target.insertBefore(elem, target.firstChild);
                }
            });
        },
        before: function() {
            return domManip(this, arguments, function(elem) {
                if (this.parentNode) this.parentNode.insertBefore(elem, this);
            });
        },
        after: function() {
            return domManip(this, arguments, function(elem) {
                if (this.parentNode) this.parentNode.insertBefore(elem, this.nextSibling);
            });
        },
        empty: function() {
            var elem, i = 0;
            for(; (elem = this[i]) != null; i++)if (elem.nodeType === 1) {
                // Prevent memory leaks
                jQuery.cleanData(getAll(elem, false));
                // Remove any remaining nodes
                elem.textContent = "";
            }
            return this;
        },
        clone: function(dataAndEvents, deepDataAndEvents) {
            dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
            deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
            return this.map(function() {
                return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
            });
        },
        html: function(value) {
            return access(this, function(value) {
                var elem = this[0] || {}, i = 0, l = this.length;
                if (value === undefined && elem.nodeType === 1) return elem.innerHTML;
                // See if we can take a shortcut and just use innerHTML
                if (typeof value === "string" && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || [
                    "",
                    ""
                ])[1].toLowerCase()]) {
                    value = jQuery.htmlPrefilter(value);
                    try {
                        for(; i < l; i++){
                            elem = this[i] || {};
                            // Remove element nodes and prevent memory leaks
                            if (elem.nodeType === 1) {
                                jQuery.cleanData(getAll(elem, false));
                                elem.innerHTML = value;
                            }
                        }
                        elem = 0;
                    // If using innerHTML throws an exception, use the fallback method
                    } catch (e) {}
                }
                if (elem) this.empty().append(value);
            }, null, value, arguments.length);
        },
        replaceWith: function() {
            var ignored = [];
            // Make the changes, replacing each non-ignored context element with the new content
            return domManip(this, arguments, function(elem) {
                var parent = this.parentNode;
                if (jQuery.inArray(this, ignored) < 0) {
                    jQuery.cleanData(getAll(this));
                    if (parent) parent.replaceChild(elem, this);
                }
            // Force callback invocation
            }, ignored);
        }
    });
    jQuery.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(name, original) {
        jQuery.fn[name] = function(selector) {
            var elems, ret = [], insert = jQuery(selector), last = insert.length - 1, i = 0;
            for(; i <= last; i++){
                elems = i === last ? this : this.clone(true);
                jQuery(insert[i])[original](elems);
                // Support: Android <=4.0 only, PhantomJS 1 only
                // .get() because push.apply(_, arraylike) throws on ancient WebKit
                push.apply(ret, elems.get());
            }
            return this.pushStack(ret);
        };
    });
    var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
    var rcustomProp = /^--/;
    var getStyles = function(elem) {
        // Support: IE <=11 only, Firefox <=30 (trac-15098, trac-14150)
        // IE throws on elements created in popups
        // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
        var view = elem.ownerDocument.defaultView;
        if (!view || !view.opener) view = window1;
        return view.getComputedStyle(elem);
    };
    var swap = function(elem, options, callback) {
        var ret, name, old = {};
        // Remember the old values, and insert the new ones
        for(name in options){
            old[name] = elem.style[name];
            elem.style[name] = options[name];
        }
        ret = callback.call(elem);
        // Revert the old values
        for(name in options)elem.style[name] = old[name];
        return ret;
    };
    var rboxStyle = new RegExp(cssExpand.join("|"), "i");
    (function() {
        // Executing both pixelPosition & boxSizingReliable tests require only one layout
        // so they're executed at the same time to save the second computation.
        function computeStyleTests() {
            // This is a singleton, we need to execute it only once
            if (!div) return;
            container.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
            div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
            documentElement.appendChild(container).appendChild(div);
            var divStyle = window1.getComputedStyle(div);
            pixelPositionVal = divStyle.top !== "1%";
            // Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
            reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12;
            // Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
            // Some styles come back with percentage values, even though they shouldn't
            div.style.right = "60%";
            pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36;
            // Support: IE 9 - 11 only
            // Detect misreporting of content dimensions for box-sizing:border-box elements
            boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36;
            // Support: IE 9 only
            // Detect overflow:scroll screwiness (gh-3699)
            // Support: Chrome <=64
            // Don't get tricked when zoom affects offsetWidth (gh-4029)
            div.style.position = "absolute";
            scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12;
            documentElement.removeChild(container);
            // Nullify the div so it wouldn't be stored in the memory and
            // it will also be a sign that checks already performed
            div = null;
        }
        function roundPixelMeasures(measure) {
            return Math.round(parseFloat(measure));
        }
        var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal, reliableTrDimensionsVal, reliableMarginLeftVal, container = document.createElement("div"), div = document.createElement("div");
        // Finish early in limited (non-browser) environments
        if (!div.style) return;
        // Support: IE <=9 - 11 only
        // Style of cloned element affects source element cloned (trac-8908)
        div.style.backgroundClip = "content-box";
        div.cloneNode(true).style.backgroundClip = "";
        support.clearCloneStyle = div.style.backgroundClip === "content-box";
        jQuery.extend(support, {
            boxSizingReliable: function() {
                computeStyleTests();
                return boxSizingReliableVal;
            },
            pixelBoxStyles: function() {
                computeStyleTests();
                return pixelBoxStylesVal;
            },
            pixelPosition: function() {
                computeStyleTests();
                return pixelPositionVal;
            },
            reliableMarginLeft: function() {
                computeStyleTests();
                return reliableMarginLeftVal;
            },
            scrollboxSize: function() {
                computeStyleTests();
                return scrollboxSizeVal;
            },
            // Support: IE 9 - 11+, Edge 15 - 18+
            // IE/Edge misreport `getComputedStyle` of table rows with width/height
            // set in CSS while `offset*` properties report correct values.
            // Behavior in IE 9 is more subtle than in newer versions & it passes
            // some versions of this test; make sure not to make it pass there!
            //
            // Support: Firefox 70+
            // Only Firefox includes border widths
            // in computed dimensions. (gh-4529)
            reliableTrDimensions: function() {
                var table, tr, trChild, trStyle;
                if (reliableTrDimensionsVal == null) {
                    table = document.createElement("table");
                    tr = document.createElement("tr");
                    trChild = document.createElement("div");
                    table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
                    tr.style.cssText = "box-sizing:content-box;border:1px solid";
                    // Support: Chrome 86+
                    // Height set through cssText does not get applied.
                    // Computed height then comes back as 0.
                    tr.style.height = "1px";
                    trChild.style.height = "9px";
                    // Support: Android 8 Chrome 86+
                    // In our bodyBackground.html iframe,
                    // display for all div elements is set to "inline",
                    // which causes a problem only in Android 8 Chrome 86.
                    // Ensuring the div is `display: block`
                    // gets around this issue.
                    trChild.style.display = "block";
                    documentElement.appendChild(table).appendChild(tr).appendChild(trChild);
                    trStyle = window1.getComputedStyle(tr);
                    reliableTrDimensionsVal = parseInt(trStyle.height, 10) + parseInt(trStyle.borderTopWidth, 10) + parseInt(trStyle.borderBottomWidth, 10) === tr.offsetHeight;
                    documentElement.removeChild(table);
                }
                return reliableTrDimensionsVal;
            }
        });
    })();
    function curCSS(elem, name, computed) {
        var width, minWidth, maxWidth, ret, isCustomProp = rcustomProp.test(name), // Support: Firefox 51+
        // Retrieving style before computed somehow
        // fixes an issue with getting wrong values
        // on detached elements
        style = elem.style;
        computed = computed || getStyles(elem);
        // getPropertyValue is needed for:
        //   .css('filter') (IE 9 only, trac-12537)
        //   .css('--customProperty) (gh-3144)
        if (computed) {
            // Support: IE <=9 - 11+
            // IE only supports `"float"` in `getPropertyValue`; in computed styles
            // it's only available as `"cssFloat"`. We no longer modify properties
            // sent to `.css()` apart from camelCasing, so we need to check both.
            // Normally, this would create difference in behavior: if
            // `getPropertyValue` returns an empty string, the value returned
            // by `.css()` would be `undefined`. This is usually the case for
            // disconnected elements. However, in IE even disconnected elements
            // with no styles return `"none"` for `getPropertyValue( "float" )`
            ret = computed.getPropertyValue(name) || computed[name];
            if (isCustomProp && ret) // Support: Firefox 105+, Chrome <=105+
            // Spec requires trimming whitespace for custom properties (gh-4926).
            // Firefox only trims leading whitespace. Chrome just collapses
            // both leading & trailing whitespace to a single space.
            //
            // Fall back to `undefined` if empty string returned.
            // This collapses a missing definition with property defined
            // and set to an empty string but there's no standard API
            // allowing us to differentiate them without a performance penalty
            // and returning `undefined` aligns with older jQuery.
            //
            // rtrimCSS treats U+000D CARRIAGE RETURN and U+000C FORM FEED
            // as whitespace while CSS does not, but this is not a problem
            // because CSS preprocessing replaces them with U+000A LINE FEED
            // (which *is* CSS whitespace)
            // https://www.w3.org/TR/css-syntax-3/#input-preprocessing
            ret = ret.replace(rtrimCSS, "$1") || undefined;
            if (ret === "" && !isAttached(elem)) ret = jQuery.style(elem, name);
            // A tribute to the "awesome hack by Dean Edwards"
            // Android Browser returns percentage for some values,
            // but width seems to be reliably pixels.
            // This is against the CSSOM draft spec:
            // https://drafts.csswg.org/cssom/#resolved-values
            if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {
                // Remember the original values
                width = style.width;
                minWidth = style.minWidth;
                maxWidth = style.maxWidth;
                // Put in the new values to get a computed value out
                style.minWidth = style.maxWidth = style.width = ret;
                ret = computed.width;
                // Revert the changed values
                style.width = width;
                style.minWidth = minWidth;
                style.maxWidth = maxWidth;
            }
        }
        return ret !== undefined ? // Support: IE <=9 - 11 only
        // IE returns zIndex value as an integer.
        ret + "" : ret;
    }
    function addGetHookIf(conditionFn, hookFn) {
        // Define the hook, we'll check on the first run if it's really needed.
        return {
            get: function() {
                if (conditionFn()) {
                    // Hook not needed (or it's not possible to use it due
                    // to missing dependency), remove it.
                    delete this.get;
                    return;
                }
                // Hook needed; redefine it so that the support test is not executed again.
                return (this.get = hookFn).apply(this, arguments);
            }
        };
    }
    var cssPrefixes = [
        "Webkit",
        "Moz",
        "ms"
    ], emptyStyle = document.createElement("div").style, vendorProps = {};
    // Return a vendor-prefixed property or undefined
    function vendorPropName(name) {
        // Check for vendor prefixed names
        var capName = name[0].toUpperCase() + name.slice(1), i = cssPrefixes.length;
        while(i--){
            name = cssPrefixes[i] + capName;
            if (name in emptyStyle) return name;
        }
    }
    // Return a potentially-mapped jQuery.cssProps or vendor prefixed property
    function finalPropName(name) {
        var final = jQuery.cssProps[name] || vendorProps[name];
        if (final) return final;
        if (name in emptyStyle) return name;
        return vendorProps[name] = vendorPropName(name) || name;
    }
    var // Swappable if display is none or starts with table
    // except "table", "table-cell", or "table-caption"
    // See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
    rdisplayswap = /^(none|table(?!-c[ea]).+)/, cssShow = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, cssNormalTransform = {
        letterSpacing: "0",
        fontWeight: "400"
    };
    function setPositiveNumber(_elem, value, subtract) {
        // Any relative (+/-) values have already been
        // normalized at this point
        var matches = rcssNum.exec(value);
        return matches ? // Guard against undefined "subtract", e.g., when used as in cssHooks
        Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value;
    }
    function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
        var i = dimension === "width" ? 1 : 0, extra = 0, delta = 0, marginDelta = 0;
        // Adjustment may not be necessary
        if (box === (isBorderBox ? "border" : "content")) return 0;
        for(; i < 4; i += 2){
            // Both box models exclude margin
            // Count margin delta separately to only add it after scroll gutter adjustment.
            // This is needed to make negative margins work with `outerHeight( true )` (gh-3982).
            if (box === "margin") marginDelta += jQuery.css(elem, box + cssExpand[i], true, styles);
            // If we get here with a content-box, we're seeking "padding" or "border" or "margin"
            if (!isBorderBox) {
                // Add padding
                delta += jQuery.css(elem, "padding" + cssExpand[i], true, styles);
                // For "border" or "margin", add border
                if (box !== "padding") delta += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
                else extra += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
            // If we get here with a border-box (content + padding + border), we're seeking "content" or
            // "padding" or "margin"
            } else {
                // For "content", subtract padding
                if (box === "content") delta -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
                // For "content" or "padding", subtract border
                if (box !== "margin") delta -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
            }
        }
        // Account for positive content-box scroll gutter when requested by providing computedVal
        if (!isBorderBox && computedVal >= 0) // offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
        // Assuming integer scroll gutter, subtract the rest and round down
        delta += Math.max(0, Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - 0.5)) || 0;
        return delta + marginDelta;
    }
    function getWidthOrHeight(elem, dimension, extra) {
        // Start with computed style
        var styles = getStyles(elem), // To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
        // Fake content-box until we know it's needed to know the true value.
        boxSizingNeeded = !support.boxSizingReliable() || extra, isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box", valueIsBorderBox = isBorderBox, val = curCSS(elem, dimension, styles), offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1);
        // Support: Firefox <=54
        // Return a confounding non-pixel value or feign ignorance, as appropriate.
        if (rnumnonpx.test(val)) {
            if (!extra) return val;
            val = "auto";
        }
        // Support: IE 9 - 11 only
        // Use offsetWidth/offsetHeight for when box sizing is unreliable.
        // In those cases, the computed value can be trusted to be border-box.
        if ((!support.boxSizingReliable() && isBorderBox || // Support: IE 10 - 11+, Edge 15 - 18+
        // IE/Edge misreport `getComputedStyle` of table rows with width/height
        // set in CSS while `offset*` properties report correct values.
        // Interestingly, in some cases IE 9 doesn't suffer from this issue.
        !support.reliableTrDimensions() && nodeName(elem, "tr") || // Fall back to offsetWidth/offsetHeight when value is "auto"
        // This happens for inline elements with no explicit setting (gh-3571)
        val === "auto" || // Support: Android <=4.1 - 4.3 only
        // Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
        !parseFloat(val) && jQuery.css(elem, "display", false, styles) === "inline") && // Make sure the element is visible & connected
        elem.getClientRects().length) {
            isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box";
            // Where available, offsetWidth/offsetHeight approximate border box dimensions.
            // Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
            // retrieved value as a content box dimension.
            valueIsBorderBox = offsetProp in elem;
            if (valueIsBorderBox) val = elem[offsetProp];
        }
        // Normalize "" and auto
        val = parseFloat(val) || 0;
        // Adjust for the element's box model
        return val + boxModelAdjustment(elem, dimension, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles, // Provide the current computed size to request scroll gutter calculation (gh-3589)
        val) + "px";
    }
    jQuery.extend({
        // Add in style property hooks for overriding the default
        // behavior of getting and setting a style property
        cssHooks: {
            opacity: {
                get: function(elem, computed) {
                    if (computed) {
                        // We should always get a number back from opacity
                        var ret = curCSS(elem, "opacity");
                        return ret === "" ? "1" : ret;
                    }
                }
            }
        },
        // Don't automatically add "px" to these possibly-unitless properties
        cssNumber: {
            animationIterationCount: true,
            aspectRatio: true,
            borderImageSlice: true,
            columnCount: true,
            flexGrow: true,
            flexShrink: true,
            fontWeight: true,
            gridArea: true,
            gridColumn: true,
            gridColumnEnd: true,
            gridColumnStart: true,
            gridRow: true,
            gridRowEnd: true,
            gridRowStart: true,
            lineHeight: true,
            opacity: true,
            order: true,
            orphans: true,
            scale: true,
            widows: true,
            zIndex: true,
            zoom: true,
            // SVG-related
            fillOpacity: true,
            floodOpacity: true,
            stopOpacity: true,
            strokeMiterlimit: true,
            strokeOpacity: true
        },
        // Add in properties whose names you wish to fix before
        // setting or getting the value
        cssProps: {},
        // Get and set the style property on a DOM Node
        style: function(elem, name, value, extra) {
            // Don't set styles on text and comment nodes
            if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) return;
            // Make sure that we're working with the right name
            var ret, type, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name), style = elem.style;
            // Make sure that we're working with the right name. We don't
            // want to query the value if it is a CSS custom property
            // since they are user-defined.
            if (!isCustomProp) name = finalPropName(origName);
            // Gets hook for the prefixed version, then unprefixed version
            hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
            // Check if we're setting a value
            if (value !== undefined) {
                type = typeof value;
                // Convert "+=" or "-=" to relative numbers (trac-7345)
                if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
                    value = adjustCSS(elem, name, ret);
                    // Fixes bug trac-9237
                    type = "number";
                }
                // Make sure that null and NaN values aren't set (trac-7116)
                if (value == null || value !== value) return;
                // If a number was passed in, add the unit (except for certain CSS properties)
                // The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
                // "px" to a few hardcoded values.
                if (type === "number" && !isCustomProp) value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
                // background-* props affect original clone's values
                if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) style[name] = "inherit";
                // If a hook was provided, use that value, otherwise just set the specified value
                if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
                    if (isCustomProp) style.setProperty(name, value);
                    else style[name] = value;
                }
            } else {
                // If a hook was provided get the non-computed value from there
                if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) return ret;
                // Otherwise just get the value from the style object
                return style[name];
            }
        },
        css: function(elem, name, extra, styles) {
            var val, num, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name);
            // Make sure that we're working with the right name. We don't
            // want to modify the value if it is a CSS custom property
            // since they are user-defined.
            if (!isCustomProp) name = finalPropName(origName);
            // Try prefixed name followed by the unprefixed name
            hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
            // If a hook was provided get the computed value from there
            if (hooks && "get" in hooks) val = hooks.get(elem, true, extra);
            // Otherwise, if a way to get the computed value exists, use that
            if (val === undefined) val = curCSS(elem, name, styles);
            // Convert "normal" to computed value
            if (val === "normal" && name in cssNormalTransform) val = cssNormalTransform[name];
            // Make numeric if forced or a qualifier was provided and val looks numeric
            if (extra === "" || extra) {
                num = parseFloat(val);
                return extra === true || isFinite(num) ? num || 0 : val;
            }
            return val;
        }
    });
    jQuery.each([
        "height",
        "width"
    ], function(_i, dimension) {
        jQuery.cssHooks[dimension] = {
            get: function(elem, computed, extra) {
                if (computed) // Certain elements can have dimension info if we invisibly show them
                // but it must have a current display style that would benefit
                return rdisplayswap.test(jQuery.css(elem, "display")) && // Support: Safari 8+
                // Table columns in Safari have non-zero offsetWidth & zero
                // getBoundingClientRect().width unless display is changed.
                // Support: IE <=11 only
                // Running getBoundingClientRect on a disconnected node
                // in IE throws an error.
                (!elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function() {
                    return getWidthOrHeight(elem, dimension, extra);
                }) : getWidthOrHeight(elem, dimension, extra);
            },
            set: function(elem, value, extra) {
                var matches, styles = getStyles(elem), // Only read styles.position if the test has a chance to fail
                // to avoid forcing a reflow.
                scrollboxSizeBuggy = !support.scrollboxSize() && styles.position === "absolute", // To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
                boxSizingNeeded = scrollboxSizeBuggy || extra, isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box", subtract = extra ? boxModelAdjustment(elem, dimension, extra, isBorderBox, styles) : 0;
                // Account for unreliable border-box dimensions by comparing offset* to computed and
                // faking a content-box to get border and padding (gh-3699)
                if (isBorderBox && scrollboxSizeBuggy) subtract -= Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem, dimension, "border", false, styles) - 0.5);
                // Convert to pixels if value adjustment is needed
                if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
                    elem.style[dimension] = value;
                    value = jQuery.css(elem, dimension);
                }
                return setPositiveNumber(elem, value, subtract);
            }
        };
    });
    jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function(elem, computed) {
        if (computed) return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, {
            marginLeft: 0
        }, function() {
            return elem.getBoundingClientRect().left;
        })) + "px";
    });
    // These hooks are used by animate to expand properties
    jQuery.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(prefix, suffix) {
        jQuery.cssHooks[prefix + suffix] = {
            expand: function(value) {
                var i = 0, expanded = {}, // Assumes a single number if not a string
                parts = typeof value === "string" ? value.split(" ") : [
                    value
                ];
                for(; i < 4; i++)expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
                return expanded;
            }
        };
        if (prefix !== "margin") jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
    });
    jQuery.fn.extend({
        css: function(name, value) {
            return access(this, function(elem, name, value) {
                var styles, len, map = {}, i = 0;
                if (Array.isArray(name)) {
                    styles = getStyles(elem);
                    len = name.length;
                    for(; i < len; i++)map[name[i]] = jQuery.css(elem, name[i], false, styles);
                    return map;
                }
                return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
            }, name, value, arguments.length > 1);
        }
    });
    function Tween(elem, options, prop, end, easing) {
        return new Tween.prototype.init(elem, options, prop, end, easing);
    }
    jQuery.Tween = Tween;
    Tween.prototype = {
        constructor: Tween,
        init: function(elem, options, prop, end, easing, unit) {
            this.elem = elem;
            this.prop = prop;
            this.easing = easing || jQuery.easing._default;
            this.options = options;
            this.start = this.now = this.cur();
            this.end = end;
            this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
        },
        cur: function() {
            var hooks = Tween.propHooks[this.prop];
            return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
        },
        run: function(percent) {
            var eased, hooks = Tween.propHooks[this.prop];
            if (this.options.duration) this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
            else this.pos = eased = percent;
            this.now = (this.end - this.start) * eased + this.start;
            if (this.options.step) this.options.step.call(this.elem, this.now, this);
            if (hooks && hooks.set) hooks.set(this);
            else Tween.propHooks._default.set(this);
            return this;
        }
    };
    Tween.prototype.init.prototype = Tween.prototype;
    Tween.propHooks = {
        _default: {
            get: function(tween) {
                var result;
                // Use a property on the element directly when it is not a DOM element,
                // or when there is no matching style property that exists.
                if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) return tween.elem[tween.prop];
                // Passing an empty string as a 3rd parameter to .css will automatically
                // attempt a parseFloat and fallback to a string if the parse fails.
                // Simple values such as "10px" are parsed to Float;
                // complex values such as "rotate(1rad)" are returned as-is.
                result = jQuery.css(tween.elem, tween.prop, "");
                // Empty strings, null, undefined and "auto" are converted to 0.
                return !result || result === "auto" ? 0 : result;
            },
            set: function(tween) {
                // Use step hook for back compat.
                // Use cssHook if its there.
                // Use .style if available and use plain properties where available.
                if (jQuery.fx.step[tween.prop]) jQuery.fx.step[tween.prop](tween);
                else if (tween.elem.nodeType === 1 && (jQuery.cssHooks[tween.prop] || tween.elem.style[finalPropName(tween.prop)] != null)) jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
                else tween.elem[tween.prop] = tween.now;
            }
        }
    };
    // Support: IE <=9 only
    // Panic based approach to setting things on disconnected nodes
    Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
        set: function(tween) {
            if (tween.elem.nodeType && tween.elem.parentNode) tween.elem[tween.prop] = tween.now;
        }
    };
    jQuery.easing = {
        linear: function(p) {
            return p;
        },
        swing: function(p) {
            return 0.5 - Math.cos(p * Math.PI) / 2;
        },
        _default: "swing"
    };
    jQuery.fx = Tween.prototype.init;
    // Back compat <1.8 extension point
    jQuery.fx.step = {};
    var fxNow, inProgress, rfxtypes = /^(?:toggle|show|hide)$/, rrun = /queueHooks$/;
    function schedule() {
        if (inProgress) {
            if (document.hidden === false && window1.requestAnimationFrame) window1.requestAnimationFrame(schedule);
            else window1.setTimeout(schedule, jQuery.fx.interval);
            jQuery.fx.tick();
        }
    }
    // Animations created synchronously will run synchronously
    function createFxNow() {
        window1.setTimeout(function() {
            fxNow = undefined;
        });
        return fxNow = Date.now();
    }
    // Generate parameters to create a standard animation
    function genFx(type, includeWidth) {
        var which, i = 0, attrs = {
            height: type
        };
        // If we include width, step value is 1 to do all cssExpand values,
        // otherwise step value is 2 to skip over Left and Right
        includeWidth = includeWidth ? 1 : 0;
        for(; i < 4; i += 2 - includeWidth){
            which = cssExpand[i];
            attrs["margin" + which] = attrs["padding" + which] = type;
        }
        if (includeWidth) attrs.opacity = attrs.width = type;
        return attrs;
    }
    function createTween(value, prop, animation) {
        var tween, collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]), index = 0, length = collection.length;
        for(; index < length; index++){
            if (tween = collection[index].call(animation, prop, value)) // We're done with this property
            return tween;
        }
    }
    function defaultPrefilter(elem, props, opts) {
        var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display, isBox = "width" in props || "height" in props, anim = this, orig = {}, style = elem.style, hidden = elem.nodeType && isHiddenWithinTree(elem), dataShow = dataPriv.get(elem, "fxshow");
        // Queue-skipping animations hijack the fx hooks
        if (!opts.queue) {
            hooks = jQuery._queueHooks(elem, "fx");
            if (hooks.unqueued == null) {
                hooks.unqueued = 0;
                oldfire = hooks.empty.fire;
                hooks.empty.fire = function() {
                    if (!hooks.unqueued) oldfire();
                };
            }
            hooks.unqueued++;
            anim.always(function() {
                // Ensure the complete handler is called before this completes
                anim.always(function() {
                    hooks.unqueued--;
                    if (!jQuery.queue(elem, "fx").length) hooks.empty.fire();
                });
            });
        }
        // Detect show/hide animations
        for(prop in props){
            value = props[prop];
            if (rfxtypes.test(value)) {
                delete props[prop];
                toggle = toggle || value === "toggle";
                if (value === (hidden ? "hide" : "show")) {
                    // Pretend to be hidden if this is a "show" and
                    // there is still data from a stopped show/hide
                    if (value === "show" && dataShow && dataShow[prop] !== undefined) hidden = true;
                    else continue;
                }
                orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
            }
        }
        // Bail out if this is a no-op like .hide().hide()
        propTween = !jQuery.isEmptyObject(props);
        if (!propTween && jQuery.isEmptyObject(orig)) return;
        // Restrict "overflow" and "display" styles during box animations
        if (isBox && elem.nodeType === 1) {
            // Support: IE <=9 - 11, Edge 12 - 15
            // Record all 3 overflow attributes because IE does not infer the shorthand
            // from identically-valued overflowX and overflowY and Edge just mirrors
            // the overflowX value there.
            opts.overflow = [
                style.overflow,
                style.overflowX,
                style.overflowY
            ];
            // Identify a display type, preferring old show/hide data over the CSS cascade
            restoreDisplay = dataShow && dataShow.display;
            if (restoreDisplay == null) restoreDisplay = dataPriv.get(elem, "display");
            display = jQuery.css(elem, "display");
            if (display === "none") {
                if (restoreDisplay) display = restoreDisplay;
                else {
                    // Get nonempty value(s) by temporarily forcing visibility
                    showHide([
                        elem
                    ], true);
                    restoreDisplay = elem.style.display || restoreDisplay;
                    display = jQuery.css(elem, "display");
                    showHide([
                        elem
                    ]);
                }
            }
            // Animate inline elements as inline-block
            if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
                if (jQuery.css(elem, "float") === "none") {
                    // Restore the original display value at the end of pure show/hide animations
                    if (!propTween) {
                        anim.done(function() {
                            style.display = restoreDisplay;
                        });
                        if (restoreDisplay == null) {
                            display = style.display;
                            restoreDisplay = display === "none" ? "" : display;
                        }
                    }
                    style.display = "inline-block";
                }
            }
        }
        if (opts.overflow) {
            style.overflow = "hidden";
            anim.always(function() {
                style.overflow = opts.overflow[0];
                style.overflowX = opts.overflow[1];
                style.overflowY = opts.overflow[2];
            });
        }
        // Implement show/hide animations
        propTween = false;
        for(prop in orig){
            // General show/hide setup for this element animation
            if (!propTween) {
                if (dataShow) {
                    if ("hidden" in dataShow) hidden = dataShow.hidden;
                } else dataShow = dataPriv.access(elem, "fxshow", {
                    display: restoreDisplay
                });
                // Store hidden/visible for toggle so `.stop().toggle()` "reverses"
                if (toggle) dataShow.hidden = !hidden;
                // Show elements before animating them
                if (hidden) showHide([
                    elem
                ], true);
                /* eslint-disable no-loop-func */ anim.done(function() {
                    /* eslint-enable no-loop-func */ // The final step of a "hide" animation is actually hiding the element
                    if (!hidden) showHide([
                        elem
                    ]);
                    dataPriv.remove(elem, "fxshow");
                    for(prop in orig)jQuery.style(elem, prop, orig[prop]);
                });
            }
            // Per-property setup
            propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
            if (!(prop in dataShow)) {
                dataShow[prop] = propTween.start;
                if (hidden) {
                    propTween.end = propTween.start;
                    propTween.start = 0;
                }
            }
        }
    }
    function propFilter(props, specialEasing) {
        var index, name, easing, value, hooks;
        // camelCase, specialEasing and expand cssHook pass
        for(index in props){
            name = camelCase(index);
            easing = specialEasing[name];
            value = props[index];
            if (Array.isArray(value)) {
                easing = value[1];
                value = props[index] = value[0];
            }
            if (index !== name) {
                props[name] = value;
                delete props[index];
            }
            hooks = jQuery.cssHooks[name];
            if (hooks && "expand" in hooks) {
                value = hooks.expand(value);
                delete props[name];
                // Not quite $.extend, this won't overwrite existing keys.
                // Reusing 'index' because we have the correct "name"
                for(index in value)if (!(index in props)) {
                    props[index] = value[index];
                    specialEasing[index] = easing;
                }
            } else specialEasing[name] = easing;
        }
    }
    function Animation(elem, properties, options) {
        var result, stopped, index = 0, length = Animation.prefilters.length, deferred = jQuery.Deferred().always(function() {
            // Don't match elem in the :animated selector
            delete tick.elem;
        }), tick = function() {
            if (stopped) return false;
            var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), // Support: Android 2.3 only
            // Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (trac-12497)
            temp = remaining / animation.duration || 0, percent = 1 - temp, index = 0, length = animation.tweens.length;
            for(; index < length; index++)animation.tweens[index].run(percent);
            deferred.notifyWith(elem, [
                animation,
                percent,
                remaining
            ]);
            // If there's more to do, yield
            if (percent < 1 && length) return remaining;
            // If this was an empty animation, synthesize a final progress notification
            if (!length) deferred.notifyWith(elem, [
                animation,
                1,
                0
            ]);
            // Resolve the animation and report its conclusion
            deferred.resolveWith(elem, [
                animation
            ]);
            return false;
        }, animation = deferred.promise({
            elem: elem,
            props: jQuery.extend({}, properties),
            opts: jQuery.extend(true, {
                specialEasing: {},
                easing: jQuery.easing._default
            }, options),
            originalProperties: properties,
            originalOptions: options,
            startTime: fxNow || createFxNow(),
            duration: options.duration,
            tweens: [],
            createTween: function(prop, end) {
                var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
                animation.tweens.push(tween);
                return tween;
            },
            stop: function(gotoEnd) {
                var index = 0, // If we are going to the end, we want to run all the tweens
                // otherwise we skip this part
                length = gotoEnd ? animation.tweens.length : 0;
                if (stopped) return this;
                stopped = true;
                for(; index < length; index++)animation.tweens[index].run(1);
                // Resolve when we played the last frame; otherwise, reject
                if (gotoEnd) {
                    deferred.notifyWith(elem, [
                        animation,
                        1,
                        0
                    ]);
                    deferred.resolveWith(elem, [
                        animation,
                        gotoEnd
                    ]);
                } else deferred.rejectWith(elem, [
                    animation,
                    gotoEnd
                ]);
                return this;
            }
        }), props = animation.props;
        propFilter(props, animation.opts.specialEasing);
        for(; index < length; index++){
            result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
            if (result) {
                if (isFunction(result.stop)) jQuery._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
                return result;
            }
        }
        jQuery.map(props, createTween, animation);
        if (isFunction(animation.opts.start)) animation.opts.start.call(elem, animation);
        // Attach callbacks from options
        animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
        jQuery.fx.timer(jQuery.extend(tick, {
            elem: elem,
            anim: animation,
            queue: animation.opts.queue
        }));
        return animation;
    }
    jQuery.Animation = jQuery.extend(Animation, {
        tweeners: {
            "*": [
                function(prop, value) {
                    var tween = this.createTween(prop, value);
                    adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
                    return tween;
                }
            ]
        },
        tweener: function(props, callback) {
            if (isFunction(props)) {
                callback = props;
                props = [
                    "*"
                ];
            } else props = props.match(rnothtmlwhite);
            var prop, index = 0, length = props.length;
            for(; index < length; index++){
                prop = props[index];
                Animation.tweeners[prop] = Animation.tweeners[prop] || [];
                Animation.tweeners[prop].unshift(callback);
            }
        },
        prefilters: [
            defaultPrefilter
        ],
        prefilter: function(callback, prepend) {
            if (prepend) Animation.prefilters.unshift(callback);
            else Animation.prefilters.push(callback);
        }
    });
    jQuery.speed = function(speed, easing, fn) {
        var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
            complete: fn || !fn && easing || isFunction(speed) && speed,
            duration: speed,
            easing: fn && easing || easing && !isFunction(easing) && easing
        };
        // Go to the end state if fx are off
        if (jQuery.fx.off) opt.duration = 0;
        else if (typeof opt.duration !== "number") {
            if (opt.duration in jQuery.fx.speeds) opt.duration = jQuery.fx.speeds[opt.duration];
            else opt.duration = jQuery.fx.speeds._default;
        }
        // Normalize opt.queue - true/undefined/null -> "fx"
        if (opt.queue == null || opt.queue === true) opt.queue = "fx";
        // Queueing
        opt.old = opt.complete;
        opt.complete = function() {
            if (isFunction(opt.old)) opt.old.call(this);
            if (opt.queue) jQuery.dequeue(this, opt.queue);
        };
        return opt;
    };
    jQuery.fn.extend({
        fadeTo: function(speed, to, easing, callback) {
            // Show any hidden elements after setting opacity to 0
            return this.filter(isHiddenWithinTree).css("opacity", 0).show()// Animate to the value specified
            .end().animate({
                opacity: to
            }, speed, easing, callback);
        },
        animate: function(prop, speed, easing, callback) {
            var empty = jQuery.isEmptyObject(prop), optall = jQuery.speed(speed, easing, callback), doAnimation = function() {
                // Operate on a copy of prop so per-property easing won't be lost
                var anim = Animation(this, jQuery.extend({}, prop), optall);
                // Empty animations, or finishing resolves immediately
                if (empty || dataPriv.get(this, "finish")) anim.stop(true);
            };
            doAnimation.finish = doAnimation;
            return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
        },
        stop: function(type, clearQueue, gotoEnd) {
            var stopQueue = function(hooks) {
                var stop = hooks.stop;
                delete hooks.stop;
                stop(gotoEnd);
            };
            if (typeof type !== "string") {
                gotoEnd = clearQueue;
                clearQueue = type;
                type = undefined;
            }
            if (clearQueue) this.queue(type || "fx", []);
            return this.each(function() {
                var dequeue = true, index = type != null && type + "queueHooks", timers = jQuery.timers, data = dataPriv.get(this);
                if (index) {
                    if (data[index] && data[index].stop) stopQueue(data[index]);
                } else {
                    for(index in data)if (data[index] && data[index].stop && rrun.test(index)) stopQueue(data[index]);
                }
                for(index = timers.length; index--;)if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
                    timers[index].anim.stop(gotoEnd);
                    dequeue = false;
                    timers.splice(index, 1);
                }
                // Start the next in the queue if the last step wasn't forced.
                // Timers currently will call their complete callbacks, which
                // will dequeue but only if they were gotoEnd.
                if (dequeue || !gotoEnd) jQuery.dequeue(this, type);
            });
        },
        finish: function(type) {
            if (type !== false) type = type || "fx";
            return this.each(function() {
                var index, data = dataPriv.get(this), queue = data[type + "queue"], hooks = data[type + "queueHooks"], timers = jQuery.timers, length = queue ? queue.length : 0;
                // Enable finishing flag on private data
                data.finish = true;
                // Empty the queue first
                jQuery.queue(this, type, []);
                if (hooks && hooks.stop) hooks.stop.call(this, true);
                // Look for any active animations, and finish them
                for(index = timers.length; index--;)if (timers[index].elem === this && timers[index].queue === type) {
                    timers[index].anim.stop(true);
                    timers.splice(index, 1);
                }
                // Look for any animations in the old queue and finish them
                for(index = 0; index < length; index++)if (queue[index] && queue[index].finish) queue[index].finish.call(this);
                // Turn off finishing flag
                delete data.finish;
            });
        }
    });
    jQuery.each([
        "toggle",
        "show",
        "hide"
    ], function(_i, name) {
        var cssFn = jQuery.fn[name];
        jQuery.fn[name] = function(speed, easing, callback) {
            return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
        };
    });
    // Generate shortcuts for custom animations
    jQuery.each({
        slideDown: genFx("show"),
        slideUp: genFx("hide"),
        slideToggle: genFx("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(name, props) {
        jQuery.fn[name] = function(speed, easing, callback) {
            return this.animate(props, speed, easing, callback);
        };
    });
    jQuery.timers = [];
    jQuery.fx.tick = function() {
        var timer, i = 0, timers = jQuery.timers;
        fxNow = Date.now();
        for(; i < timers.length; i++){
            timer = timers[i];
            // Run the timer and safely remove it when done (allowing for external removal)
            if (!timer() && timers[i] === timer) timers.splice(i--, 1);
        }
        if (!timers.length) jQuery.fx.stop();
        fxNow = undefined;
    };
    jQuery.fx.timer = function(timer) {
        jQuery.timers.push(timer);
        jQuery.fx.start();
    };
    jQuery.fx.interval = 13;
    jQuery.fx.start = function() {
        if (inProgress) return;
        inProgress = true;
        schedule();
    };
    jQuery.fx.stop = function() {
        inProgress = null;
    };
    jQuery.fx.speeds = {
        slow: 600,
        fast: 200,
        // Default speed
        _default: 400
    };
    // Based off of the plugin by Clint Helfers, with permission.
    jQuery.fn.delay = function(time, type) {
        time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
        type = type || "fx";
        return this.queue(type, function(next, hooks) {
            var timeout = window1.setTimeout(next, time);
            hooks.stop = function() {
                window1.clearTimeout(timeout);
            };
        });
    };
    (function() {
        var input = document.createElement("input"), select = document.createElement("select"), opt = select.appendChild(document.createElement("option"));
        input.type = "checkbox";
        // Support: Android <=4.3 only
        // Default value for a checkbox should be "on"
        support.checkOn = input.value !== "";
        // Support: IE <=11 only
        // Must access selectedIndex to make default options select
        support.optSelected = opt.selected;
        // Support: IE <=11 only
        // An input loses its value after becoming a radio
        input = document.createElement("input");
        input.value = "t";
        input.type = "radio";
        support.radioValue = input.value === "t";
    })();
    var boolHook, attrHandle = jQuery.expr.attrHandle;
    jQuery.fn.extend({
        attr: function(name, value) {
            return access(this, jQuery.attr, name, value, arguments.length > 1);
        },
        removeAttr: function(name) {
            return this.each(function() {
                jQuery.removeAttr(this, name);
            });
        }
    });
    jQuery.extend({
        attr: function(elem, name, value) {
            var ret, hooks, nType = elem.nodeType;
            // Don't get/set attributes on text, comment and attribute nodes
            if (nType === 3 || nType === 8 || nType === 2) return;
            // Fallback to prop when attributes are not supported
            if (typeof elem.getAttribute === "undefined") return jQuery.prop(elem, name, value);
            // Attribute hooks are determined by the lowercase version
            // Grab necessary hook if one is defined
            if (nType !== 1 || !jQuery.isXMLDoc(elem)) hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : undefined);
            if (value !== undefined) {
                if (value === null) {
                    jQuery.removeAttr(elem, name);
                    return;
                }
                if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) return ret;
                elem.setAttribute(name, value + "");
                return value;
            }
            if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) return ret;
            ret = jQuery.find.attr(elem, name);
            // Non-existent attributes return null, we normalize to undefined
            return ret == null ? undefined : ret;
        },
        attrHooks: {
            type: {
                set: function(elem, value) {
                    if (!support.radioValue && value === "radio" && nodeName(elem, "input")) {
                        var val = elem.value;
                        elem.setAttribute("type", value);
                        if (val) elem.value = val;
                        return value;
                    }
                }
            }
        },
        removeAttr: function(elem, value) {
            var name, i = 0, // Attribute names can contain non-HTML whitespace characters
            // https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
            attrNames = value && value.match(rnothtmlwhite);
            if (attrNames && elem.nodeType === 1) while(name = attrNames[i++])elem.removeAttribute(name);
        }
    });
    // Hooks for boolean attributes
    boolHook = {
        set: function(elem, value, name) {
            if (value === false) // Remove boolean attributes when set to false
            jQuery.removeAttr(elem, name);
            else elem.setAttribute(name, name);
            return name;
        }
    };
    jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(_i, name) {
        var getter = attrHandle[name] || jQuery.find.attr;
        attrHandle[name] = function(elem, name, isXML) {
            var ret, handle, lowercaseName = name.toLowerCase();
            if (!isXML) {
                // Avoid an infinite loop by temporarily removing this function from the getter
                handle = attrHandle[lowercaseName];
                attrHandle[lowercaseName] = ret;
                ret = getter(elem, name, isXML) != null ? lowercaseName : null;
                attrHandle[lowercaseName] = handle;
            }
            return ret;
        };
    });
    var rfocusable = /^(?:input|select|textarea|button)$/i, rclickable = /^(?:a|area)$/i;
    jQuery.fn.extend({
        prop: function(name, value) {
            return access(this, jQuery.prop, name, value, arguments.length > 1);
        },
        removeProp: function(name) {
            return this.each(function() {
                delete this[jQuery.propFix[name] || name];
            });
        }
    });
    jQuery.extend({
        prop: function(elem, name, value) {
            var ret, hooks, nType = elem.nodeType;
            // Don't get/set properties on text, comment and attribute nodes
            if (nType === 3 || nType === 8 || nType === 2) return;
            if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
                // Fix name and attach hooks
                name = jQuery.propFix[name] || name;
                hooks = jQuery.propHooks[name];
            }
            if (value !== undefined) {
                if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) return ret;
                return elem[name] = value;
            }
            if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) return ret;
            return elem[name];
        },
        propHooks: {
            tabIndex: {
                get: function(elem) {
                    // Support: IE <=9 - 11 only
                    // elem.tabIndex doesn't always return the
                    // correct value when it hasn't been explicitly set
                    // Use proper attribute retrieval (trac-12072)
                    var tabindex = jQuery.find.attr(elem, "tabindex");
                    if (tabindex) return parseInt(tabindex, 10);
                    if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) return 0;
                    return -1;
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    });
    // Support: IE <=11 only
    // Accessing the selectedIndex property
    // forces the browser to respect setting selected
    // on the option
    // The getter ensures a default option is selected
    // when in an optgroup
    // eslint rule "no-unused-expressions" is disabled for this code
    // since it considers such accessions noop
    if (!support.optSelected) jQuery.propHooks.selected = {
        get: function(elem) {
            /* eslint no-unused-expressions: "off" */ var parent = elem.parentNode;
            if (parent && parent.parentNode) parent.parentNode.selectedIndex;
            return null;
        },
        set: function(elem) {
            /* eslint no-unused-expressions: "off" */ var parent = elem.parentNode;
            if (parent) {
                parent.selectedIndex;
                if (parent.parentNode) parent.parentNode.selectedIndex;
            }
        }
    };
    jQuery.each([
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable"
    ], function() {
        jQuery.propFix[this.toLowerCase()] = this;
    });
    // Strip and collapse whitespace according to HTML spec
    // https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
    function stripAndCollapse(value) {
        var tokens = value.match(rnothtmlwhite) || [];
        return tokens.join(" ");
    }
    function getClass(elem) {
        return elem.getAttribute && elem.getAttribute("class") || "";
    }
    function classesToArray(value) {
        if (Array.isArray(value)) return value;
        if (typeof value === "string") return value.match(rnothtmlwhite) || [];
        return [];
    }
    jQuery.fn.extend({
        addClass: function(value) {
            var classNames, cur, curValue, className, i, finalValue;
            if (isFunction(value)) return this.each(function(j) {
                jQuery(this).addClass(value.call(this, j, getClass(this)));
            });
            classNames = classesToArray(value);
            if (classNames.length) return this.each(function() {
                curValue = getClass(this);
                cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
                if (cur) {
                    for(i = 0; i < classNames.length; i++){
                        className = classNames[i];
                        if (cur.indexOf(" " + className + " ") < 0) cur += className + " ";
                    }
                    // Only assign if different to avoid unneeded rendering.
                    finalValue = stripAndCollapse(cur);
                    if (curValue !== finalValue) this.setAttribute("class", finalValue);
                }
            });
            return this;
        },
        removeClass: function(value) {
            var classNames, cur, curValue, className, i, finalValue;
            if (isFunction(value)) return this.each(function(j) {
                jQuery(this).removeClass(value.call(this, j, getClass(this)));
            });
            if (!arguments.length) return this.attr("class", "");
            classNames = classesToArray(value);
            if (classNames.length) return this.each(function() {
                curValue = getClass(this);
                // This expression is here for better compressibility (see addClass)
                cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
                if (cur) {
                    for(i = 0; i < classNames.length; i++){
                        className = classNames[i];
                        // Remove *all* instances
                        while(cur.indexOf(" " + className + " ") > -1)cur = cur.replace(" " + className + " ", " ");
                    }
                    // Only assign if different to avoid unneeded rendering.
                    finalValue = stripAndCollapse(cur);
                    if (curValue !== finalValue) this.setAttribute("class", finalValue);
                }
            });
            return this;
        },
        toggleClass: function(value, stateVal) {
            var classNames, className, i, self, type = typeof value, isValidValue = type === "string" || Array.isArray(value);
            if (isFunction(value)) return this.each(function(i) {
                jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
            });
            if (typeof stateVal === "boolean" && isValidValue) return stateVal ? this.addClass(value) : this.removeClass(value);
            classNames = classesToArray(value);
            return this.each(function() {
                if (isValidValue) {
                    // Toggle individual class names
                    self = jQuery(this);
                    for(i = 0; i < classNames.length; i++){
                        className = classNames[i];
                        // Check each className given, space separated list
                        if (self.hasClass(className)) self.removeClass(className);
                        else self.addClass(className);
                    }
                // Toggle whole class name
                } else if (value === undefined || type === "boolean") {
                    className = getClass(this);
                    if (className) // Store className if set
                    dataPriv.set(this, "__className__", className);
                    // If the element has a class name or if we're passed `false`,
                    // then remove the whole classname (if there was one, the above saved it).
                    // Otherwise bring back whatever was previously saved (if anything),
                    // falling back to the empty string if nothing was stored.
                    if (this.setAttribute) this.setAttribute("class", className || value === false ? "" : dataPriv.get(this, "__className__") || "");
                }
            });
        },
        hasClass: function(selector) {
            var className, elem, i = 0;
            className = " " + selector + " ";
            while(elem = this[i++]){
                if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) return true;
            }
            return false;
        }
    });
    var rreturn = /\r/g;
    jQuery.fn.extend({
        val: function(value) {
            var hooks, ret, valueIsFunction, elem = this[0];
            if (!arguments.length) {
                if (elem) {
                    hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
                    if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) return ret;
                    ret = elem.value;
                    // Handle most common string cases
                    if (typeof ret === "string") return ret.replace(rreturn, "");
                    // Handle cases where value is null/undef or number
                    return ret == null ? "" : ret;
                }
                return;
            }
            valueIsFunction = isFunction(value);
            return this.each(function(i) {
                var val;
                if (this.nodeType !== 1) return;
                if (valueIsFunction) val = value.call(this, i, jQuery(this).val());
                else val = value;
                // Treat null/undefined as ""; convert numbers to string
                if (val == null) val = "";
                else if (typeof val === "number") val += "";
                else if (Array.isArray(val)) val = jQuery.map(val, function(value) {
                    return value == null ? "" : value + "";
                });
                hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
                // If set returns undefined, fall back to normal setting
                if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) this.value = val;
            });
        }
    });
    jQuery.extend({
        valHooks: {
            option: {
                get: function(elem) {
                    var val = jQuery.find.attr(elem, "value");
                    return val != null ? val : // Support: IE <=10 - 11 only
                    // option.text throws exceptions (trac-14686, trac-14858)
                    // Strip and collapse whitespace
                    // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
                    stripAndCollapse(jQuery.text(elem));
                }
            },
            select: {
                get: function(elem) {
                    var value, option, i, options = elem.options, index = elem.selectedIndex, one = elem.type === "select-one", values = one ? null : [], max = one ? index + 1 : options.length;
                    if (index < 0) i = max;
                    else i = one ? index : 0;
                    // Loop through all the selected options
                    for(; i < max; i++){
                        option = options[i];
                        // Support: IE <=9 only
                        // IE8-9 doesn't update selected after form reset (trac-2551)
                        if ((option.selected || i === index) && // Don't return options that are disabled or in a disabled optgroup
                        !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
                            // Get the specific value for the option
                            value = jQuery(option).val();
                            // We don't need an array for one selects
                            if (one) return value;
                            // Multi-Selects return an array
                            values.push(value);
                        }
                    }
                    return values;
                },
                set: function(elem, value) {
                    var optionSet, option, options = elem.options, values = jQuery.makeArray(value), i = options.length;
                    while(i--){
                        option = options[i];
                        /* eslint-disable no-cond-assign */ if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) optionSet = true;
                    /* eslint-enable no-cond-assign */ }
                    // Force browsers to behave consistently when non-matching value is set
                    if (!optionSet) elem.selectedIndex = -1;
                    return values;
                }
            }
        }
    });
    // Radios and checkboxes getter/setter
    jQuery.each([
        "radio",
        "checkbox"
    ], function() {
        jQuery.valHooks[this] = {
            set: function(elem, value) {
                if (Array.isArray(value)) return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1;
            }
        };
        if (!support.checkOn) jQuery.valHooks[this].get = function(elem) {
            return elem.getAttribute("value") === null ? "on" : elem.value;
        };
    });
    // Return jQuery for attributes-only inclusion
    var location = window1.location;
    var nonce = {
        guid: Date.now()
    };
    var rquery = /\?/;
    // Cross-browser xml parsing
    jQuery.parseXML = function(data) {
        var xml, parserErrorElem;
        if (!data || typeof data !== "string") return null;
        // Support: IE 9 - 11 only
        // IE throws on parseFromString with invalid input.
        try {
            xml = new window1.DOMParser().parseFromString(data, "text/xml");
        } catch (e) {}
        parserErrorElem = xml && xml.getElementsByTagName("parsererror")[0];
        if (!xml || parserErrorElem) jQuery.error("Invalid XML: " + (parserErrorElem ? jQuery.map(parserErrorElem.childNodes, function(el) {
            return el.textContent;
        }).join("\n") : data));
        return xml;
    };
    var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, stopPropagationCallback = function(e) {
        e.stopPropagation();
    };
    jQuery.extend(jQuery.event, {
        trigger: function(event, data, elem, onlyHandlers) {
            var i, cur, tmp, bubbleType, ontype, handle, special, lastElement, eventPath = [
                elem || document
            ], type = hasOwn.call(event, "type") ? event.type : event, namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
            cur = lastElement = tmp = elem = elem || document;
            // Don't do events on text and comment nodes
            if (elem.nodeType === 3 || elem.nodeType === 8) return;
            // focus/blur morphs to focusin/out; ensure we're not firing them right now
            if (rfocusMorph.test(type + jQuery.event.triggered)) return;
            if (type.indexOf(".") > -1) {
                // Namespaced trigger; create a regexp to match event type in handle()
                namespaces = type.split(".");
                type = namespaces.shift();
                namespaces.sort();
            }
            ontype = type.indexOf(":") < 0 && "on" + type;
            // Caller can pass in a jQuery.Event object, Object, or just an event type string
            event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === "object" && event);
            // Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
            event.isTrigger = onlyHandlers ? 2 : 3;
            event.namespace = namespaces.join(".");
            event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
            // Clean up the event in case it is being reused
            event.result = undefined;
            if (!event.target) event.target = elem;
            // Clone any incoming data and prepend the event, creating the handler arg list
            data = data == null ? [
                event
            ] : jQuery.makeArray(data, [
                event
            ]);
            // Allow special events to draw outside the lines
            special = jQuery.event.special[type] || {};
            if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) return;
            // Determine event propagation path in advance, per W3C events spec (trac-9951)
            // Bubble up to document, then to window; watch for a global ownerDocument var (trac-9724)
            if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
                bubbleType = special.delegateType || type;
                if (!rfocusMorph.test(bubbleType + type)) cur = cur.parentNode;
                for(; cur; cur = cur.parentNode){
                    eventPath.push(cur);
                    tmp = cur;
                }
                // Only add window if we got to document (e.g., not plain obj or detached DOM)
                if (tmp === (elem.ownerDocument || document)) eventPath.push(tmp.defaultView || tmp.parentWindow || window1);
            }
            // Fire handlers on the event path
            i = 0;
            while((cur = eventPath[i++]) && !event.isPropagationStopped()){
                lastElement = cur;
                event.type = i > 1 ? bubbleType : special.bindType || type;
                // jQuery handler
                handle = (dataPriv.get(cur, "events") || Object.create(null))[event.type] && dataPriv.get(cur, "handle");
                if (handle) handle.apply(cur, data);
                // Native handler
                handle = ontype && cur[ontype];
                if (handle && handle.apply && acceptData(cur)) {
                    event.result = handle.apply(cur, data);
                    if (event.result === false) event.preventDefault();
                }
            }
            event.type = type;
            // If nobody prevented the default action, do it now
            if (!onlyHandlers && !event.isDefaultPrevented()) {
                if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) // Call a native DOM method on the target with the same name as the event.
                // Don't do default actions on window, that's where global variables be (trac-6170)
                {
                    if (ontype && isFunction(elem[type]) && !isWindow(elem)) {
                        // Don't re-trigger an onFOO event when we call its FOO() method
                        tmp = elem[ontype];
                        if (tmp) elem[ontype] = null;
                        // Prevent re-triggering of the same event, since we already bubbled it above
                        jQuery.event.triggered = type;
                        if (event.isPropagationStopped()) lastElement.addEventListener(type, stopPropagationCallback);
                        elem[type]();
                        if (event.isPropagationStopped()) lastElement.removeEventListener(type, stopPropagationCallback);
                        jQuery.event.triggered = undefined;
                        if (tmp) elem[ontype] = tmp;
                    }
                }
            }
            return event.result;
        },
        // Piggyback on a donor event to simulate a different one
        // Used only for `focus(in | out)` events
        simulate: function(type, elem, event) {
            var e = jQuery.extend(new jQuery.Event(), event, {
                type: type,
                isSimulated: true
            });
            jQuery.event.trigger(e, null, elem);
        }
    });
    jQuery.fn.extend({
        trigger: function(type, data) {
            return this.each(function() {
                jQuery.event.trigger(type, data, this);
            });
        },
        triggerHandler: function(type, data) {
            var elem = this[0];
            if (elem) return jQuery.event.trigger(type, data, elem, true);
        }
    });
    var rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
    function buildParams(prefix, obj, traditional, add) {
        var name;
        if (Array.isArray(obj)) // Serialize array item.
        jQuery.each(obj, function(i, v) {
            if (traditional || rbracket.test(prefix)) // Treat each array item as a scalar.
            add(prefix, v);
            else // Item is non-scalar (array or object), encode its numeric index.
            buildParams(prefix + "[" + (typeof v === "object" && v != null ? i : "") + "]", v, traditional, add);
        });
        else if (!traditional && toType(obj) === "object") // Serialize object item.
        for(name in obj)buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
        else // Serialize scalar item.
        add(prefix, obj);
    }
    // Serialize an array of form elements or a set of
    // key/values into a query string
    jQuery.param = function(a, traditional) {
        var prefix, s = [], add = function(key, valueOrFunction) {
            // If value is a function, invoke it and use its return value
            var value = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
            s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
        };
        if (a == null) return "";
        // If an array was passed in, assume that it is an array of form elements.
        if (Array.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) // Serialize the form elements
        jQuery.each(a, function() {
            add(this.name, this.value);
        });
        else // If traditional, encode the "old" way (the way 1.3.2 or older
        // did it), otherwise encode params recursively.
        for(prefix in a)buildParams(prefix, a[prefix], traditional, add);
        // Return the resulting serialization
        return s.join("&");
    };
    jQuery.fn.extend({
        serialize: function() {
            return jQuery.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                // Can add propHook for "elements" to filter or add form elements
                var elements = jQuery.prop(this, "elements");
                return elements ? jQuery.makeArray(elements) : this;
            }).filter(function() {
                var type = this.type;
                // Use .is( ":disabled" ) so that fieldset[disabled] works
                return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
            }).map(function(_i, elem) {
                var val = jQuery(this).val();
                if (val == null) return null;
                if (Array.isArray(val)) return jQuery.map(val, function(val) {
                    return {
                        name: elem.name,
                        value: val.replace(rCRLF, "\r\n")
                    };
                });
                return {
                    name: elem.name,
                    value: val.replace(rCRLF, "\r\n")
                };
            }).get();
        }
    });
    var r20 = /%20/g, rhash = /#.*$/, rantiCache = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg, // trac-7653, trac-8125, trac-8152: local protocol detection
    rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, /* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */ prefilters = {}, /* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */ transports = {}, // Avoid comment-prolog char sequence (trac-10098); must appease lint and evade compression
    allTypes = "*/".concat("*"), // Anchor tag for parsing the document origin
    originAnchor = document.createElement("a");
    originAnchor.href = location.href;
    // Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
    function addToPrefiltersOrTransports(structure) {
        // dataTypeExpression is optional and defaults to "*"
        return function(dataTypeExpression, func) {
            if (typeof dataTypeExpression !== "string") {
                func = dataTypeExpression;
                dataTypeExpression = "*";
            }
            var dataType, i = 0, dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];
            if (isFunction(func)) {
                // For each dataType in the dataTypeExpression
                while(dataType = dataTypes[i++])// Prepend if requested
                if (dataType[0] === "+") {
                    dataType = dataType.slice(1) || "*";
                    (structure[dataType] = structure[dataType] || []).unshift(func);
                // Otherwise append
                } else (structure[dataType] = structure[dataType] || []).push(func);
            }
        };
    }
    // Base inspection function for prefilters and transports
    function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
        var inspected = {}, seekingTransport = structure === transports;
        function inspect(dataType) {
            var selected;
            inspected[dataType] = true;
            jQuery.each(structure[dataType] || [], function(_, prefilterOrFactory) {
                var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
                if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
                    options.dataTypes.unshift(dataTypeOrTransport);
                    inspect(dataTypeOrTransport);
                    return false;
                } else if (seekingTransport) return !(selected = dataTypeOrTransport);
            });
            return selected;
        }
        return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
    }
    // A special extend for ajax options
    // that takes "flat" options (not to be deep extended)
    // Fixes trac-9887
    function ajaxExtend(target, src) {
        var key, deep, flatOptions = jQuery.ajaxSettings.flatOptions || {};
        for(key in src)if (src[key] !== undefined) (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
        if (deep) jQuery.extend(true, target, deep);
        return target;
    }
    /* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */ function ajaxHandleResponses(s, jqXHR, responses) {
        var ct, type, finalDataType, firstDataType, contents = s.contents, dataTypes = s.dataTypes;
        // Remove auto dataType and get content-type in the process
        while(dataTypes[0] === "*"){
            dataTypes.shift();
            if (ct === undefined) ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
        }
        // Check if we're dealing with a known content-type
        if (ct) {
            for(type in contents)if (contents[type] && contents[type].test(ct)) {
                dataTypes.unshift(type);
                break;
            }
        }
        // Check to see if we have a response for the expected dataType
        if (dataTypes[0] in responses) finalDataType = dataTypes[0];
        else {
            // Try convertible dataTypes
            for(type in responses){
                if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
                    finalDataType = type;
                    break;
                }
                if (!firstDataType) firstDataType = type;
            }
            // Or just use first one
            finalDataType = finalDataType || firstDataType;
        }
        // If we found a dataType
        // We add the dataType to the list if needed
        // and return the corresponding response
        if (finalDataType) {
            if (finalDataType !== dataTypes[0]) dataTypes.unshift(finalDataType);
            return responses[finalDataType];
        }
    }
    /* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */ function ajaxConvert(s, response, jqXHR, isSuccess) {
        var conv2, current, conv, tmp, prev, converters = {}, // Work with a copy of dataTypes in case we need to modify it for conversion
        dataTypes = s.dataTypes.slice();
        // Create converters map with lowercased keys
        if (dataTypes[1]) for(conv in s.converters)converters[conv.toLowerCase()] = s.converters[conv];
        current = dataTypes.shift();
        // Convert to each sequential dataType
        while(current){
            if (s.responseFields[current]) jqXHR[s.responseFields[current]] = response;
            // Apply the dataFilter if provided
            if (!prev && isSuccess && s.dataFilter) response = s.dataFilter(response, s.dataType);
            prev = current;
            current = dataTypes.shift();
            if (current) {
                // There's only work to do if current dataType is non-auto
                if (current === "*") current = prev;
                else if (prev !== "*" && prev !== current) {
                    // Seek a direct converter
                    conv = converters[prev + " " + current] || converters["* " + current];
                    // If none found, seek a pair
                    if (!conv) for(conv2 in converters){
                        // If conv2 outputs current
                        tmp = conv2.split(" ");
                        if (tmp[1] === current) {
                            // If prev can be converted to accepted input
                            conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                            if (conv) {
                                // Condense equivalence converters
                                if (conv === true) conv = converters[conv2];
                                else if (converters[conv2] !== true) {
                                    current = tmp[0];
                                    dataTypes.unshift(tmp[1]);
                                }
                                break;
                            }
                        }
                    }
                    // Apply converter (if not an equivalence)
                    if (conv !== true) {
                        // Unless errors are allowed to bubble, catch and return them
                        if (conv && s.throws) response = conv(response);
                        else try {
                            response = conv(response);
                        } catch (e) {
                            return {
                                state: "parsererror",
                                error: conv ? e : "No conversion from " + prev + " to " + current
                            };
                        }
                    }
                }
            }
        }
        return {
            state: "success",
            data: response
        };
    }
    jQuery.extend({
        // Counter for holding the number of active queries
        active: 0,
        // Last-Modified header cache for next request
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: location.href,
            type: "GET",
            isLocal: rlocalProtocol.test(location.protocol),
            global: true,
            processData: true,
            async: true,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            /*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/ accepts: {
                "*": allTypes,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            // Data converters
            // Keys separate source (or catchall "*") and destination types with a single space
            converters: {
                // Convert anything to text
                "* text": String,
                // Text to html (true = no transformation)
                "text html": true,
                // Evaluate text as a json expression
                "text json": JSON.parse,
                // Parse text as xml
                "text xml": jQuery.parseXML
            },
            // For options that shouldn't be deep extended:
            // you can add your own custom options here if
            // and when you create one that shouldn't be
            // deep extended (see ajaxExtend)
            flatOptions: {
                url: true,
                context: true
            }
        },
        // Creates a full fledged settings object into target
        // with both ajaxSettings and settings fields.
        // If target is omitted, writes into ajaxSettings.
        ajaxSetup: function(target, settings) {
            return settings ? // Building a settings object
            ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : // Extending ajaxSettings
            ajaxExtend(jQuery.ajaxSettings, target);
        },
        ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
        ajaxTransport: addToPrefiltersOrTransports(transports),
        // Main method
        ajax: function(url, options) {
            // If url is an object, simulate pre-1.5 signature
            if (typeof url === "object") {
                options = url;
                url = undefined;
            }
            // Force options to be an object
            options = options || {};
            var transport, // URL without anti-cache param
            cacheURL, // Response headers
            responseHeadersString, responseHeaders, // timeout handle
            timeoutTimer, // Url cleanup var
            urlAnchor, // Request state (becomes false upon send and true upon completion)
            completed, // To know if global events are to be dispatched
            fireGlobals, // Loop variable
            i, // uncached part of the url
            uncached, // Create the final options object
            s = jQuery.ajaxSetup({}, options), // Callbacks context
            callbackContext = s.context || s, // Context for global events is callbackContext if it is a DOM node or jQuery collection
            globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event, // Deferreds
            deferred = jQuery.Deferred(), completeDeferred = jQuery.Callbacks("once memory"), // Status-dependent callbacks
            statusCode = s.statusCode || {}, // Headers (they are sent all at once)
            requestHeaders = {}, requestHeadersNames = {}, // Default abort message
            strAbort = "canceled", // Fake xhr
            jqXHR = {
                readyState: 0,
                // Builds headers hashtable if needed
                getResponseHeader: function(key) {
                    var match;
                    if (completed) {
                        if (!responseHeaders) {
                            responseHeaders = {};
                            while(match = rheaders.exec(responseHeadersString))responseHeaders[match[1].toLowerCase() + " "] = (responseHeaders[match[1].toLowerCase() + " "] || []).concat(match[2]);
                        }
                        match = responseHeaders[key.toLowerCase() + " "];
                    }
                    return match == null ? null : match.join(", ");
                },
                // Raw string
                getAllResponseHeaders: function() {
                    return completed ? responseHeadersString : null;
                },
                // Caches the header
                setRequestHeader: function(name, value) {
                    if (completed == null) {
                        name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
                        requestHeaders[name] = value;
                    }
                    return this;
                },
                // Overrides response content-type header
                overrideMimeType: function(type) {
                    if (completed == null) s.mimeType = type;
                    return this;
                },
                // Status-dependent callbacks
                statusCode: function(map) {
                    var code;
                    if (map) {
                        if (completed) // Execute the appropriate callbacks
                        jqXHR.always(map[jqXHR.status]);
                        else // Lazy-add the new callbacks in a way that preserves old ones
                        for(code in map)statusCode[code] = [
                            statusCode[code],
                            map[code]
                        ];
                    }
                    return this;
                },
                // Cancel the request
                abort: function(statusText) {
                    var finalText = statusText || strAbort;
                    if (transport) transport.abort(finalText);
                    done(0, finalText);
                    return this;
                }
            };
            // Attach deferreds
            deferred.promise(jqXHR);
            // Add protocol if not provided (prefilters might expect it)
            // Handle falsy url in the settings object (trac-10093: consistency with old signature)
            // We also use the url parameter if available
            s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//");
            // Alias method option to type as per ticket trac-12004
            s.type = options.method || options.type || s.method || s.type;
            // Extract dataTypes list
            s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [
                ""
            ];
            // A cross-domain request is in order when the origin doesn't match the current origin.
            if (s.crossDomain == null) {
                urlAnchor = document.createElement("a");
                // Support: IE <=8 - 11, Edge 12 - 15
                // IE throws exception on accessing the href property if url is malformed,
                // e.g. http://example.com:80x/
                try {
                    urlAnchor.href = s.url;
                    // Support: IE <=8 - 11 only
                    // Anchor's host property isn't correctly set when s.url is relative
                    urlAnchor.href = urlAnchor.href;
                    s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
                } catch (e) {
                    // If there is an error parsing the URL, assume it is crossDomain,
                    // it can be rejected by the transport if it is invalid
                    s.crossDomain = true;
                }
            }
            // Convert data if not already a string
            if (s.data && s.processData && typeof s.data !== "string") s.data = jQuery.param(s.data, s.traditional);
            // Apply prefilters
            inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
            // If request was aborted inside a prefilter, stop there
            if (completed) return jqXHR;
            // We can fire global events as of now if asked to
            // Don't fire events if jQuery.event is undefined in an AMD-usage scenario (trac-15118)
            fireGlobals = jQuery.event && s.global;
            // Watch for a new set of requests
            if (fireGlobals && jQuery.active++ === 0) jQuery.event.trigger("ajaxStart");
            // Uppercase the type
            s.type = s.type.toUpperCase();
            // Determine if request has content
            s.hasContent = !rnoContent.test(s.type);
            // Save the URL in case we're toying with the If-Modified-Since
            // and/or If-None-Match header later on
            // Remove hash to simplify url manipulation
            cacheURL = s.url.replace(rhash, "");
            // More options handling for requests with no content
            if (!s.hasContent) {
                // Remember the hash so we can put it back
                uncached = s.url.slice(cacheURL.length);
                // If data is available and should be processed, append data to url
                if (s.data && (s.processData || typeof s.data === "string")) {
                    cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;
                    // trac-9682: remove data so that it's not used in an eventual retry
                    delete s.data;
                }
                // Add or update anti-cache param if needed
                if (s.cache === false) {
                    cacheURL = cacheURL.replace(rantiCache, "$1");
                    uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce.guid++ + uncached;
                }
                // Put hash and anti-cache on the URL that will be requested (gh-1732)
                s.url = cacheURL + uncached;
            // Change '%20' to '+' if this is encoded form body content (gh-2658)
            } else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) s.data = s.data.replace(r20, "+");
            // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
            if (s.ifModified) {
                if (jQuery.lastModified[cacheURL]) jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
                if (jQuery.etag[cacheURL]) jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
            }
            // Set the correct header, if data is being sent
            if (s.data && s.hasContent && s.contentType !== false || options.contentType) jqXHR.setRequestHeader("Content-Type", s.contentType);
            // Set the Accepts header for the server, depending on the dataType
            jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);
            // Check for headers option
            for(i in s.headers)jqXHR.setRequestHeader(i, s.headers[i]);
            // Allow custom headers/mimetypes and early abort
            if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed)) // Abort if not done already and return
            return jqXHR.abort();
            // Aborting is no longer a cancellation
            strAbort = "abort";
            // Install callbacks on deferreds
            completeDeferred.add(s.complete);
            jqXHR.done(s.success);
            jqXHR.fail(s.error);
            // Get transport
            transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
            // If no transport, we auto-abort
            if (!transport) done(-1, "No Transport");
            else {
                jqXHR.readyState = 1;
                // Send global event
                if (fireGlobals) globalEventContext.trigger("ajaxSend", [
                    jqXHR,
                    s
                ]);
                // If request was aborted inside ajaxSend, stop there
                if (completed) return jqXHR;
                // Timeout
                if (s.async && s.timeout > 0) timeoutTimer = window1.setTimeout(function() {
                    jqXHR.abort("timeout");
                }, s.timeout);
                try {
                    completed = false;
                    transport.send(requestHeaders, done);
                } catch (e) {
                    // Rethrow post-completion exceptions
                    if (completed) throw e;
                    // Propagate others as results
                    done(-1, e);
                }
            }
            // Callback for when everything is done
            function done(status, nativeStatusText, responses, headers) {
                var isSuccess, success, error, response, modified, statusText = nativeStatusText;
                // Ignore repeat invocations
                if (completed) return;
                completed = true;
                // Clear timeout if it exists
                if (timeoutTimer) window1.clearTimeout(timeoutTimer);
                // Dereference transport for early garbage collection
                // (no matter how long the jqXHR object will be used)
                transport = undefined;
                // Cache response headers
                responseHeadersString = headers || "";
                // Set readyState
                jqXHR.readyState = status > 0 ? 4 : 0;
                // Determine if successful
                isSuccess = status >= 200 && status < 300 || status === 304;
                // Get response data
                if (responses) response = ajaxHandleResponses(s, jqXHR, responses);
                // Use a noop converter for missing script but not if jsonp
                if (!isSuccess && jQuery.inArray("script", s.dataTypes) > -1 && jQuery.inArray("json", s.dataTypes) < 0) s.converters["text script"] = function() {};
                // Convert no matter what (that way responseXXX fields are always set)
                response = ajaxConvert(s, response, jqXHR, isSuccess);
                // If successful, handle type chaining
                if (isSuccess) {
                    // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
                    if (s.ifModified) {
                        modified = jqXHR.getResponseHeader("Last-Modified");
                        if (modified) jQuery.lastModified[cacheURL] = modified;
                        modified = jqXHR.getResponseHeader("etag");
                        if (modified) jQuery.etag[cacheURL] = modified;
                    }
                    // if no content
                    if (status === 204 || s.type === "HEAD") statusText = "nocontent";
                    else if (status === 304) statusText = "notmodified";
                    else {
                        statusText = response.state;
                        success = response.data;
                        error = response.error;
                        isSuccess = !error;
                    }
                } else {
                    // Extract error from statusText and normalize for non-aborts
                    error = statusText;
                    if (status || !statusText) {
                        statusText = "error";
                        if (status < 0) status = 0;
                    }
                }
                // Set data for the fake xhr object
                jqXHR.status = status;
                jqXHR.statusText = (nativeStatusText || statusText) + "";
                // Success/Error
                if (isSuccess) deferred.resolveWith(callbackContext, [
                    success,
                    statusText,
                    jqXHR
                ]);
                else deferred.rejectWith(callbackContext, [
                    jqXHR,
                    statusText,
                    error
                ]);
                // Status-dependent callbacks
                jqXHR.statusCode(statusCode);
                statusCode = undefined;
                if (fireGlobals) globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [
                    jqXHR,
                    s,
                    isSuccess ? success : error
                ]);
                // Complete
                completeDeferred.fireWith(callbackContext, [
                    jqXHR,
                    statusText
                ]);
                if (fireGlobals) {
                    globalEventContext.trigger("ajaxComplete", [
                        jqXHR,
                        s
                    ]);
                    // Handle the global AJAX counter
                    if (!--jQuery.active) jQuery.event.trigger("ajaxStop");
                }
            }
            return jqXHR;
        },
        getJSON: function(url, data, callback) {
            return jQuery.get(url, data, callback, "json");
        },
        getScript: function(url, callback) {
            return jQuery.get(url, undefined, callback, "script");
        }
    });
    jQuery.each([
        "get",
        "post"
    ], function(_i, method) {
        jQuery[method] = function(url, data, callback, type) {
            // Shift arguments if data argument was omitted
            if (isFunction(data)) {
                type = type || callback;
                callback = data;
                data = undefined;
            }
            // The url can be an options object (which then must have .url)
            return jQuery.ajax(jQuery.extend({
                url: url,
                type: method,
                dataType: type,
                data: data,
                success: callback
            }, jQuery.isPlainObject(url) && url));
        };
    });
    jQuery.ajaxPrefilter(function(s) {
        var i;
        for(i in s.headers)if (i.toLowerCase() === "content-type") s.contentType = s.headers[i] || "";
    });
    jQuery._evalUrl = function(url, options, doc) {
        return jQuery.ajax({
            url: url,
            // Make this explicit, since user can override this through ajaxSetup (trac-11264)
            type: "GET",
            dataType: "script",
            cache: true,
            async: false,
            global: false,
            // Only evaluate the response if it is successful (gh-4126)
            // dataFilter is not invoked for failure responses, so using it instead
            // of the default converter is kludgy but it works.
            converters: {
                "text script": function() {}
            },
            dataFilter: function(response) {
                jQuery.globalEval(response, options, doc);
            }
        });
    };
    jQuery.fn.extend({
        wrapAll: function(html) {
            var wrap;
            if (this[0]) {
                if (isFunction(html)) html = html.call(this[0]);
                // The elements to wrap the target around
                wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
                if (this[0].parentNode) wrap.insertBefore(this[0]);
                wrap.map(function() {
                    var elem = this;
                    while(elem.firstElementChild)elem = elem.firstElementChild;
                    return elem;
                }).append(this);
            }
            return this;
        },
        wrapInner: function(html) {
            if (isFunction(html)) return this.each(function(i) {
                jQuery(this).wrapInner(html.call(this, i));
            });
            return this.each(function() {
                var self = jQuery(this), contents = self.contents();
                if (contents.length) contents.wrapAll(html);
                else self.append(html);
            });
        },
        wrap: function(html) {
            var htmlIsFunction = isFunction(html);
            return this.each(function(i) {
                jQuery(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
            });
        },
        unwrap: function(selector) {
            this.parent(selector).not("body").each(function() {
                jQuery(this).replaceWith(this.childNodes);
            });
            return this;
        }
    });
    jQuery.expr.pseudos.hidden = function(elem) {
        return !jQuery.expr.pseudos.visible(elem);
    };
    jQuery.expr.pseudos.visible = function(elem) {
        return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
    };
    jQuery.ajaxSettings.xhr = function() {
        try {
            return new window1.XMLHttpRequest();
        } catch (e) {}
    };
    var xhrSuccessStatus = {
        // File protocol always yields status code 0, assume 200
        0: 200,
        // Support: IE <=9 only
        // trac-1450: sometimes IE returns 1223 when it should be 204
        1223: 204
    }, xhrSupported = jQuery.ajaxSettings.xhr();
    support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
    support.ajax = xhrSupported = !!xhrSupported;
    jQuery.ajaxTransport(function(options) {
        var callback, errorCallback;
        // Cross domain only allowed if supported through XMLHttpRequest
        if (support.cors || xhrSupported && !options.crossDomain) return {
            send: function(headers, complete) {
                var i, xhr = options.xhr();
                xhr.open(options.type, options.url, options.async, options.username, options.password);
                // Apply custom fields if provided
                if (options.xhrFields) for(i in options.xhrFields)xhr[i] = options.xhrFields[i];
                // Override mime type if needed
                if (options.mimeType && xhr.overrideMimeType) xhr.overrideMimeType(options.mimeType);
                // X-Requested-With header
                // For cross-domain requests, seeing as conditions for a preflight are
                // akin to a jigsaw puzzle, we simply never set it to be sure.
                // (it can always be set on a per-request basis or even using ajaxSetup)
                // For same-domain requests, won't change header if already provided.
                if (!options.crossDomain && !headers["X-Requested-With"]) headers["X-Requested-With"] = "XMLHttpRequest";
                // Set headers
                for(i in headers)xhr.setRequestHeader(i, headers[i]);
                // Callback
                callback = function(type) {
                    return function() {
                        if (callback) {
                            callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;
                            if (type === "abort") xhr.abort();
                            else if (type === "error") {
                                // Support: IE <=9 only
                                // On a manual native abort, IE9 throws
                                // errors on any property access that is not readyState
                                if (typeof xhr.status !== "number") complete(0, "error");
                                else complete(// File: protocol always yields status 0; see trac-8605, trac-14207
                                xhr.status, xhr.statusText);
                            } else complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, // Support: IE <=9 only
                            // IE9 has no XHR2 but throws on binary (trac-11426)
                            // For XHR2 non-text, let the caller handle it (gh-2498)
                            (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? {
                                binary: xhr.response
                            } : {
                                text: xhr.responseText
                            }, xhr.getAllResponseHeaders());
                        }
                    };
                };
                // Listen to events
                xhr.onload = callback();
                errorCallback = xhr.onerror = xhr.ontimeout = callback("error");
                // Support: IE 9 only
                // Use onreadystatechange to replace onabort
                // to handle uncaught aborts
                if (xhr.onabort !== undefined) xhr.onabort = errorCallback;
                else xhr.onreadystatechange = function() {
                    // Check readyState before timeout as it changes
                    if (xhr.readyState === 4) // Allow onerror to be called first,
                    // but that will not handle a native abort
                    // Also, save errorCallback to a variable
                    // as xhr.onerror cannot be accessed
                    window1.setTimeout(function() {
                        if (callback) errorCallback();
                    });
                };
                // Create the abort callback
                callback = callback("abort");
                try {
                    // Do send the request (this may raise an exception)
                    xhr.send(options.hasContent && options.data || null);
                } catch (e) {
                    // trac-14683: Only rethrow if this hasn't been notified as an error yet
                    if (callback) throw e;
                }
            },
            abort: function() {
                if (callback) callback();
            }
        };
    });
    // Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
    jQuery.ajaxPrefilter(function(s) {
        if (s.crossDomain) s.contents.script = false;
    });
    // Install script dataType
    jQuery.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(text) {
                jQuery.globalEval(text);
                return text;
            }
        }
    });
    // Handle cache's special case and crossDomain
    jQuery.ajaxPrefilter("script", function(s) {
        if (s.cache === undefined) s.cache = false;
        if (s.crossDomain) s.type = "GET";
    });
    // Bind script tag hack transport
    jQuery.ajaxTransport("script", function(s) {
        // This transport only deals with cross domain or forced-by-attrs requests
        if (s.crossDomain || s.scriptAttrs) {
            var script, callback;
            return {
                send: function(_, complete) {
                    script = jQuery("<script>").attr(s.scriptAttrs || {}).prop({
                        charset: s.scriptCharset,
                        src: s.url
                    }).on("load error", callback = function(evt) {
                        script.remove();
                        callback = null;
                        if (evt) complete(evt.type === "error" ? 404 : 200, evt.type);
                    });
                    // Use native DOM manipulation to avoid our domManip AJAX trickery
                    document.head.appendChild(script[0]);
                },
                abort: function() {
                    if (callback) callback();
                }
            };
        }
    });
    var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
    // Default jsonp settings
    jQuery.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce.guid++;
            this[callback] = true;
            return callback;
        }
    });
    // Detect, normalize options and install callbacks for jsonp requests
    jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
        var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");
        // Handle iff the expected data type is "jsonp" or we have a parameter to set
        if (jsonProp || s.dataTypes[0] === "jsonp") {
            // Get callback name, remembering preexisting value associated with it
            callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
            // Insert callback into url or form data
            if (jsonProp) s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
            else if (s.jsonp !== false) s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
            // Use data converter to retrieve json after script execution
            s.converters["script json"] = function() {
                if (!responseContainer) jQuery.error(callbackName + " was not called");
                return responseContainer[0];
            };
            // Force json dataType
            s.dataTypes[0] = "json";
            // Install callback
            overwritten = window1[callbackName];
            window1[callbackName] = function() {
                responseContainer = arguments;
            };
            // Clean-up function (fires after converters)
            jqXHR.always(function() {
                // If previous value didn't exist - remove it
                if (overwritten === undefined) jQuery(window1).removeProp(callbackName);
                else window1[callbackName] = overwritten;
                // Save back as free
                if (s[callbackName]) {
                    // Make sure that re-using the options doesn't screw things around
                    s.jsonpCallback = originalSettings.jsonpCallback;
                    // Save the callback name for future use
                    oldCallbacks.push(callbackName);
                }
                // Call if it was a function and we have a response
                if (responseContainer && isFunction(overwritten)) overwritten(responseContainer[0]);
                responseContainer = overwritten = undefined;
            });
            // Delegate to script
            return "script";
        }
    });
    // Support: Safari 8 only
    // In Safari 8 documents created via document.implementation.createHTMLDocument
    // collapse sibling forms: the second one becomes a child of the first one.
    // Because of that, this security measure has to be disabled in Safari 8.
    // https://bugs.webkit.org/show_bug.cgi?id=137337
    support.createHTMLDocument = function() {
        var body = document.implementation.createHTMLDocument("").body;
        body.innerHTML = "<form></form><form></form>";
        return body.childNodes.length === 2;
    }();
    // Argument "data" should be string of html
    // context (optional): If specified, the fragment will be created in this context,
    // defaults to document
    // keepScripts (optional): If true, will include scripts passed in the html string
    jQuery.parseHTML = function(data, context, keepScripts) {
        if (typeof data !== "string") return [];
        if (typeof context === "boolean") {
            keepScripts = context;
            context = false;
        }
        var base, parsed, scripts;
        if (!context) {
            // Stop scripts or inline event handlers from being executed immediately
            // by using document.implementation
            if (support.createHTMLDocument) {
                context = document.implementation.createHTMLDocument("");
                // Set the base href for the created document
                // so any parsed elements with URLs
                // are based on the document's URL (gh-2965)
                base = context.createElement("base");
                base.href = document.location.href;
                context.head.appendChild(base);
            } else context = document;
        }
        parsed = rsingleTag.exec(data);
        scripts = !keepScripts && [];
        // Single tag
        if (parsed) return [
            context.createElement(parsed[1])
        ];
        parsed = buildFragment([
            data
        ], context, scripts);
        if (scripts && scripts.length) jQuery(scripts).remove();
        return jQuery.merge([], parsed.childNodes);
    };
    /**
 * Load a url into a page
 */ jQuery.fn.load = function(url, params, callback) {
        var selector, type, response, self = this, off = url.indexOf(" ");
        if (off > -1) {
            selector = stripAndCollapse(url.slice(off));
            url = url.slice(0, off);
        }
        // If it's a function
        if (isFunction(params)) {
            // We assume that it's the callback
            callback = params;
            params = undefined;
        // Otherwise, build a param string
        } else if (params && typeof params === "object") type = "POST";
        // If we have elements to modify, make the request
        if (self.length > 0) jQuery.ajax({
            url: url,
            // If "type" variable is undefined, then "GET" method will be used.
            // Make value of this field explicit since
            // user can override it through ajaxSetup method
            type: type || "GET",
            dataType: "html",
            data: params
        }).done(function(responseText) {
            // Save response for use in complete callback
            response = arguments;
            self.html(selector ? // If a selector was specified, locate the right elements in a dummy div
            // Exclude scripts to avoid IE 'Permission Denied' errors
            jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : // Otherwise use the full result
            responseText);
        // If the request succeeds, this function gets "data", "status", "jqXHR"
        // but they are ignored because response was set above.
        // If it fails, this function gets "jqXHR", "status", "error"
        }).always(callback && function(jqXHR, status) {
            self.each(function() {
                callback.apply(this, response || [
                    jqXHR.responseText,
                    status,
                    jqXHR
                ]);
            });
        });
        return this;
    };
    jQuery.expr.pseudos.animated = function(elem) {
        return jQuery.grep(jQuery.timers, function(fn) {
            return elem === fn.elem;
        }).length;
    };
    jQuery.offset = {
        setOffset: function(elem, options, i) {
            var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery.css(elem, "position"), curElem = jQuery(elem), props = {};
            // Set position first, in-case top/left are set even on static elem
            if (position === "static") elem.style.position = "relative";
            curOffset = curElem.offset();
            curCSSTop = jQuery.css(elem, "top");
            curCSSLeft = jQuery.css(elem, "left");
            calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
            // Need to be able to calculate position if either
            // top or left is auto and position is either absolute or fixed
            if (calculatePosition) {
                curPosition = curElem.position();
                curTop = curPosition.top;
                curLeft = curPosition.left;
            } else {
                curTop = parseFloat(curCSSTop) || 0;
                curLeft = parseFloat(curCSSLeft) || 0;
            }
            if (isFunction(options)) // Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
            options = options.call(elem, i, jQuery.extend({}, curOffset));
            if (options.top != null) props.top = options.top - curOffset.top + curTop;
            if (options.left != null) props.left = options.left - curOffset.left + curLeft;
            if ("using" in options) options.using.call(elem, props);
            else curElem.css(props);
        }
    };
    jQuery.fn.extend({
        // offset() relates an element's border box to the document origin
        offset: function(options) {
            // Preserve chaining for setter
            if (arguments.length) return options === undefined ? this : this.each(function(i) {
                jQuery.offset.setOffset(this, options, i);
            });
            var rect, win, elem = this[0];
            if (!elem) return;
            // Return zeros for disconnected and hidden (display: none) elements (gh-2310)
            // Support: IE <=11 only
            // Running getBoundingClientRect on a
            // disconnected node in IE throws an error
            if (!elem.getClientRects().length) return {
                top: 0,
                left: 0
            };
            // Get document-relative position by adding viewport scroll to viewport-relative gBCR
            rect = elem.getBoundingClientRect();
            win = elem.ownerDocument.defaultView;
            return {
                top: rect.top + win.pageYOffset,
                left: rect.left + win.pageXOffset
            };
        },
        // position() relates an element's margin box to its offset parent's padding box
        // This corresponds to the behavior of CSS absolute positioning
        position: function() {
            if (!this[0]) return;
            var offsetParent, offset, doc, elem = this[0], parentOffset = {
                top: 0,
                left: 0
            };
            // position:fixed elements are offset from the viewport, which itself always has zero offset
            if (jQuery.css(elem, "position") === "fixed") // Assume position:fixed implies availability of getBoundingClientRect
            offset = elem.getBoundingClientRect();
            else {
                offset = this.offset();
                // Account for the *real* offset parent, which can be the document or its root element
                // when a statically positioned element is identified
                doc = elem.ownerDocument;
                offsetParent = elem.offsetParent || doc.documentElement;
                while(offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && jQuery.css(offsetParent, "position") === "static")offsetParent = offsetParent.parentNode;
                if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {
                    // Incorporate borders into its offset, since they are outside its content origin
                    parentOffset = jQuery(offsetParent).offset();
                    parentOffset.top += jQuery.css(offsetParent, "borderTopWidth", true);
                    parentOffset.left += jQuery.css(offsetParent, "borderLeftWidth", true);
                }
            }
            // Subtract parent offsets and element margins
            return {
                top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
                left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
            };
        },
        // This method will return documentElement in the following cases:
        // 1) For the element inside the iframe without offsetParent, this method will return
        //    documentElement of the parent window
        // 2) For the hidden or detached element
        // 3) For body or html element, i.e. in case of the html node - it will return itself
        //
        // but those exceptions were never presented as a real life use-cases
        // and might be considered as more preferable results.
        //
        // This logic, however, is not guaranteed and can change at any point in the future
        offsetParent: function() {
            return this.map(function() {
                var offsetParent = this.offsetParent;
                while(offsetParent && jQuery.css(offsetParent, "position") === "static")offsetParent = offsetParent.offsetParent;
                return offsetParent || documentElement;
            });
        }
    });
    // Create scrollLeft and scrollTop methods
    jQuery.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(method, prop) {
        var top = "pageYOffset" === prop;
        jQuery.fn[method] = function(val) {
            return access(this, function(elem, method, val) {
                // Coalesce documents and windows
                var win;
                if (isWindow(elem)) win = elem;
                else if (elem.nodeType === 9) win = elem.defaultView;
                if (val === undefined) return win ? win[prop] : elem[method];
                if (win) win.scrollTo(!top ? val : win.pageXOffset, top ? val : win.pageYOffset);
                else elem[method] = val;
            }, method, val, arguments.length);
        };
    });
    // Support: Safari <=7 - 9.1, Chrome <=37 - 49
    // Add the top/left cssHooks using jQuery.fn.position
    // Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
    // Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
    // getComputedStyle returns percent when specified for top/left/bottom/right;
    // rather than make the css module depend on the offset module, just check for it here
    jQuery.each([
        "top",
        "left"
    ], function(_i, prop) {
        jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function(elem, computed) {
            if (computed) {
                computed = curCSS(elem, prop);
                // If curCSS returns percentage, fallback to offset
                return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
            }
        });
    });
    // Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
    jQuery.each({
        Height: "height",
        Width: "width"
    }, function(name, type) {
        jQuery.each({
            padding: "inner" + name,
            content: type,
            "": "outer" + name
        }, function(defaultExtra, funcName) {
            // Margin is only for outerHeight, outerWidth
            jQuery.fn[funcName] = function(margin, value) {
                var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"), extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
                return access(this, function(elem, type, value) {
                    var doc;
                    if (isWindow(elem)) // $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
                    return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
                    // Get document width or height
                    if (elem.nodeType === 9) {
                        doc = elem.documentElement;
                        // Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
                        // whichever is greatest
                        return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
                    }
                    return value === undefined ? // Get width or height on the element, requesting but not forcing parseFloat
                    jQuery.css(elem, type, extra) : // Set width or height on the element
                    jQuery.style(elem, type, value, extra);
                }, type, chainable ? margin : undefined, chainable);
            };
        });
    });
    jQuery.each([
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend"
    ], function(_i, type) {
        jQuery.fn[type] = function(fn) {
            return this.on(type, fn);
        };
    });
    jQuery.fn.extend({
        bind: function(types, data, fn) {
            return this.on(types, null, data, fn);
        },
        unbind: function(types, fn) {
            return this.off(types, null, fn);
        },
        delegate: function(selector, types, data, fn) {
            return this.on(types, selector, data, fn);
        },
        undelegate: function(selector, types, fn) {
            // ( namespace ) or ( selector, types [, fn] )
            return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
        },
        hover: function(fnOver, fnOut) {
            return this.on("mouseenter", fnOver).on("mouseleave", fnOut || fnOver);
        }
    });
    jQuery.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(_i, name) {
        // Handle event binding
        jQuery.fn[name] = function(data, fn) {
            return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
        };
    });
    // Support: Android <=4.0 only
    // Make sure we trim BOM and NBSP
    // Require that the "whitespace run" starts from a non-whitespace
    // to avoid O(N^2) behavior when the engine would try matching "\s+$" at each space position.
    var rtrim = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
    // Bind a function to a context, optionally partially applying any
    // arguments.
    // jQuery.proxy is deprecated to promote standards (specifically Function#bind)
    // However, it is not slated for removal any time soon
    jQuery.proxy = function(fn, context) {
        var tmp, args, proxy;
        if (typeof context === "string") {
            tmp = fn[context];
            context = fn;
            fn = tmp;
        }
        // Quick check to determine if target is callable, in the spec
        // this throws a TypeError, but we will just return undefined.
        if (!isFunction(fn)) return undefined;
        // Simulated bind
        args = slice.call(arguments, 2);
        proxy = function() {
            return fn.apply(context || this, args.concat(slice.call(arguments)));
        };
        // Set the guid of unique handler to the same of original handler, so it can be removed
        proxy.guid = fn.guid = fn.guid || jQuery.guid++;
        return proxy;
    };
    jQuery.holdReady = function(hold) {
        if (hold) jQuery.readyWait++;
        else jQuery.ready(true);
    };
    jQuery.isArray = Array.isArray;
    jQuery.parseJSON = JSON.parse;
    jQuery.nodeName = nodeName;
    jQuery.isFunction = isFunction;
    jQuery.isWindow = isWindow;
    jQuery.camelCase = camelCase;
    jQuery.type = toType;
    jQuery.now = Date.now;
    jQuery.isNumeric = function(obj) {
        // As of jQuery 3.0, isNumeric is limited to
        // strings and numbers (primitives or objects)
        // that can be coerced to finite numbers (gh-2662)
        var type = jQuery.type(obj);
        return (type === "number" || type === "string") && // parseFloat NaNs numeric-cast false positives ("")
        // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
        // subtraction forces infinities to NaN
        !isNaN(obj - parseFloat(obj));
    };
    jQuery.trim = function(text) {
        return text == null ? "" : (text + "").replace(rtrim, "$1");
    };
    // Register as a named AMD module, since jQuery can be concatenated with other
    // files that may use define, but not via a proper concatenation script that
    // understands anonymous AMD modules. A named AMD is safest and most robust
    // way to register. Lowercase jquery is used because AMD module names are
    // derived from file names, and jQuery is normally delivered in a lowercase
    // file name. Do this after creating the global so that if an AMD module wants
    // to call noConflict to hide this version of jQuery, it will work.
    // Note that for maximum portability, libraries that are not jQuery should
    // declare themselves as anonymous modules, and avoid setting a global if an
    // AMD loader is present. jQuery is a special case. For more information, see
    // https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
    if (typeof define === "function" && define.amd) define("jquery", [], function() {
        return jQuery;
    });
    var // Map over jQuery in case of overwrite
    _jQuery = window1.jQuery, // Map over the $ in case of overwrite
    _$ = window1.$;
    jQuery.noConflict = function(deep) {
        if (window1.$ === jQuery) window1.$ = _$;
        if (deep && window1.jQuery === jQuery) window1.jQuery = _jQuery;
        return jQuery;
    };
    // Expose jQuery and $ identifiers, even in AMD
    // (trac-7102#comment:10, https://github.com/jquery/jquery/pull/557)
    // and CommonJS for browser emulators (trac-13566)
    if (typeof noGlobal === "undefined") window1.jQuery = window1.$ = jQuery;
    return jQuery;
});



class $f9a6ab2a2116ae78$export$6955bcca4cd3539f {
    constructor(selector, scrollTransition, components = []){
        this.components = [];
        this.selector = selector;
        this.transitionScrollUp = scrollTransition;
        this.transitionScrollDown = scrollTransition;
        this.components = components;
    }
    appendComponent(component) {
        this.components.push(component);
    }
    initializePage() {
        this.buildComponents();
    }
    buildComponents() {
        for(var i = 0; i < this.components.length; i++)this.components[i].attach();
    }
    getSelector() {
        return this.selector;
    }
    getNode() {
        const clonedElement = (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`#${this.getSelector()}`).clone(true, true)[0];
        return clonedElement;
    }
    getScrollUpCallback(pageManagement) {
        const self = this;
        return function() {
            if (self.pagePrev) self.transitionScrollUp.executeScrollUp(self.pagePrev, self, pageManagement);
        };
    }
    getScrollDownCallback(pageManagement) {
        const self = this;
        return function() {
            if (self.pageNext) self.transitionScrollDown.executeScrollDown(self, self.pageNext, pageManagement);
        };
    }
    setNeighbouringPages(pageNext, pagePrev) {
        this.pageNext = pageNext;
        this.pagePrev = pagePrev;
    }
    conditionalOnInitialBuildBeforeScrollIn() {
        for(var i = 0; i < this.components.length; i++)this.components[i].conditionalOnInitialBuildBeforeScrollIn();
    }
    onScrollIn() {
        for(var i = 0; i < this.components.length; i++)this.components[i].onScrollIn();
    }
    onScrollOut() {
        for(var i = 0; i < this.components.length; i++)this.components[i].onScrollOut();
    }
}
var $f9a6ab2a2116ae78$export$2e2bcd8739ae039 = $f9a6ab2a2116ae78$export$6955bcca4cd3539f;


var $bfab7ad14862d57e$export$ef1760368e0f70e4;
(function(ScrollDirection) {
    ScrollDirection[ScrollDirection["SCROLLING_UP"] = 0] = "SCROLLING_UP";
    ScrollDirection[ScrollDirection["SCROLLING_DOWN"] = 1] = "SCROLLING_DOWN";
    ScrollDirection[ScrollDirection["UNCHANGING"] = 2] = "UNCHANGING";
})($bfab7ad14862d57e$export$ef1760368e0f70e4 || ($bfab7ad14862d57e$export$ef1760368e0f70e4 = {}));
var $bfab7ad14862d57e$export$ec1e04e4e5ef8233;
(function(DeviceType) {
    DeviceType[DeviceType["DESKTOP"] = 0] = "DESKTOP";
    DeviceType[DeviceType["TABLET"] = 1] = "TABLET";
    DeviceType[DeviceType["MOBILE"] = 2] = "MOBILE";
})($bfab7ad14862d57e$export$ec1e04e4e5ef8233 || ($bfab7ad14862d57e$export$ec1e04e4e5ef8233 = {}));
class $bfab7ad14862d57e$export$61995152d881a9ba {
    static isScrollToPosition(figure1, figure2) {
        const tolerance = 2;
        return Math.abs(figure1 - figure2) <= tolerance;
    }
    static determineScrollDirection(lastVPosition, currentVPosition) {
        if (lastVPosition < currentVPosition) return $bfab7ad14862d57e$export$ef1760368e0f70e4.SCROLLING_DOWN;
        else if (lastVPosition > currentVPosition) return $bfab7ad14862d57e$export$ef1760368e0f70e4.SCROLLING_UP;
        else return $bfab7ad14862d57e$export$ef1760368e0f70e4.UNCHANGING;
    }
    static determineDeviceType() {
        const userAgent = navigator.userAgent || navigator.vendor;
        const isMobileDevice = ()=>{
            const regexs = [
                /(Android)(.+)(Mobile)/i,
                /BlackBerry/i,
                /iPhone|iPod/i,
                /Opera Mini/i,
                /IEMobile/i
            ];
            return regexs.some((b)=>userAgent.match(b));
        };
        const isTabletDevice = ()=>{
            const regex = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/;
            return regex.test(userAgent.toLowerCase());
        };
        const isDesktopDevice = ()=>!isMobileDevice() && !isTabletDevice();
        if (isMobileDevice()) return $bfab7ad14862d57e$export$ec1e04e4e5ef8233.MOBILE;
        else if (isTabletDevice()) return $bfab7ad14862d57e$export$ec1e04e4e5ef8233.TABLET;
        else if (isDesktopDevice()) return $bfab7ad14862d57e$export$ec1e04e4e5ef8233.DESKTOP;
        return $bfab7ad14862d57e$export$ec1e04e4e5ef8233.DESKTOP;
    }
    static delay(ms) {
        return new Promise((resolve)=>setTimeout(resolve, ms));
    }
}
var $bfab7ad14862d57e$export$2e2bcd8739ae039 = $bfab7ad14862d57e$export$61995152d881a9ba;


class $a0ff71186de08ebf$export$ebdcf3e52ca032a6 {
    constructor(divID, pages){
        this.currentPageIndex = 0;
        this.lastVPosition = 0;
        this.divID = divID;
        this.pages = pages;
        this.initialize();
    }
    doesPageSelectorDenoteCurrentPage(givenPageSelector) {
        return givenPageSelector == this.pages[this.currentPageIndex].getSelector();
    }
    getCurrentPageIndex() {
        return this.currentPageIndex;
    }
    initialize() {
        this.initializePages();
        this.initializeNeighbouringPages();
        this.pages[this.currentPageIndex].conditionalOnInitialBuildBeforeScrollIn(); // Build before start, even w/o transition
        this.pages[this.currentPageIndex].onScrollIn(); // Load first page on start
        this.setOverscrollEventListener();
    }
    initializePages() {
        for(var i = 0; i < this.pages.length; i++)this.pages[i].initializePage();
    }
    initializeNeighbouringPages() {
        for(var i = 0; i < this.pages.length; i++){
            var pagePrev = i - 1 >= 0 ? this.pages[i - 1] : null;
            var pageNext = i + 1 < this.pages.length ? this.pages[i + 1] : null;
            this.pages[i].setNeighbouringPages(pageNext, pagePrev);
        }
    }
    setOverscrollEventListener() {
        // The listener detects scroll on the main div 
        // and actuates up/down scroll transition animation 
        // accordingly.
        // In addition, any fixed parts of all components
        // from each page will have to be set to appear/disappear.
        const self = this;
        const mainDiv = document.getElementById(this.divID);
        self.setLastVPosition(mainDiv.scrollTop); // Update current V position
        mainDiv.addEventListener("scroll", function(event) {
            const scrollDirection = (0, $bfab7ad14862d57e$export$61995152d881a9ba).determineScrollDirection(self.lastVPosition, this.scrollTop);
            if (scrollDirection == (0, $bfab7ad14862d57e$export$ef1760368e0f70e4).SCROLLING_UP) {
                const lastPageIndex = self.currentPageIndex;
                const scrollUpCallback = self.pages[self.currentPageIndex].getScrollUpCallback(self);
                self.currentPageIndex = self.currentPageIndex - 1 >= 0 ? self.currentPageIndex - 1 : 0;
                if (lastPageIndex != self.currentPageIndex) {
                    self.pages[lastPageIndex].onScrollOut();
                    self.pages[self.currentPageIndex].conditionalOnInitialBuildBeforeScrollIn();
                }
                scrollUpCallback();
            } else if (scrollDirection == (0, $bfab7ad14862d57e$export$ef1760368e0f70e4).SCROLLING_DOWN) {
                const lastPageIndex = self.currentPageIndex;
                const scrollDownCallback = self.pages[self.currentPageIndex].getScrollDownCallback(self);
                self.currentPageIndex = self.currentPageIndex + 1 < self.pages.length ? self.currentPageIndex + 1 : self.pages.length - 1;
                if (lastPageIndex != self.currentPageIndex) {
                    self.pages[lastPageIndex].onScrollOut();
                    self.pages[self.currentPageIndex].conditionalOnInitialBuildBeforeScrollIn();
                }
                scrollDownCallback();
            }
        });
    }
    setLastVPosition(lastVPosition) {
        this.lastVPosition = lastVPosition;
    }
    updatePageEvents() {
        // This is called after the transition restores a new main div.
        // And technically when a new main div is established,
        // all event listeners will be removed. Thus an update is required.
        const self = this;
        self.setOverscrollEventListener();
    }
}
var $a0ff71186de08ebf$export$2e2bcd8739ae039 = $a0ff71186de08ebf$export$ebdcf3e52ca032a6;



class $73e338d5933d2651$export$9d703e95bc6ae1c9 {
    constructor(){}
}
var $73e338d5933d2651$export$2e2bcd8739ae039 = $73e338d5933d2651$export$9d703e95bc6ae1c9;


var $e2512952e94e97b1$var$_a;
class $e2512952e94e97b1$export$31acd2ae5bbde00f {
}
$e2512952e94e97b1$export$31acd2ae5bbde00f.ROOT = "/";
$e2512952e94e97b1$export$31acd2ae5bbde00f.IMG = `${$e2512952e94e97b1$export$31acd2ae5bbde00f.ROOT}img/`;
$e2512952e94e97b1$export$31acd2ae5bbde00f.IMG_WORKS = `${$e2512952e94e97b1$export$31acd2ae5bbde00f.IMG}works/`;
$e2512952e94e97b1$export$31acd2ae5bbde00f.IMG_EXPERIENCE = `${$e2512952e94e97b1$export$31acd2ae5bbde00f.IMG}experience/`;
class $e2512952e94e97b1$export$a002182e51710d39 {
}
$e2512952e94e97b1$export$a002182e51710d39.ANIMATION_DURATION_SLOWER = 1200;
$e2512952e94e97b1$export$a002182e51710d39.ANIMATION_DURATION_SLOW = 400;
$e2512952e94e97b1$export$a002182e51710d39.ANIMATION_DURATION_DEFAULT = 140;
class $e2512952e94e97b1$export$bd8f39ef8e3d2b92 {
}
$e2512952e94e97b1$export$bd8f39ef8e3d2b92.BACKGROUND = "background";
$e2512952e94e97b1$export$bd8f39ef8e3d2b92.EMAIL_FLOATING_DIALOG = "email-floating-dialog";
class $e2512952e94e97b1$export$87e9c2ff338a8575 {
}
$e2512952e94e97b1$var$_a = $e2512952e94e97b1$export$87e9c2ff338a8575;
$e2512952e94e97b1$export$87e9c2ff338a8575.PAGE_1 = "page-1";
$e2512952e94e97b1$export$87e9c2ff338a8575.PAGE_2 = "page-2";
$e2512952e94e97b1$export$87e9c2ff338a8575.PAGE_MANAGEMENT_CONTAINER = "page-management-container";
$e2512952e94e97b1$export$87e9c2ff338a8575.EMAIL_FLOATING_DIALOG = "email-floating-dialog";
$e2512952e94e97b1$export$87e9c2ff338a8575.SOC_WORKS_PROJECT_INTERVENE = "soc-works-project-intervene";
$e2512952e94e97b1$export$87e9c2ff338a8575.SOC_WORKS_EMCB32 = "soc-works-emcb32";
$e2512952e94e97b1$export$87e9c2ff338a8575.SOC_WORKS_EMCB_HD = "soc-works-emcb-hd";
$e2512952e94e97b1$export$87e9c2ff338a8575.SOC_WORKS_E_TEXTURE = "soc-works-e-texture";
$e2512952e94e97b1$export$87e9c2ff338a8575.SOC_EXPERIENCE_AGMO_STUDIO = "soc-works-agmo-studio";
$e2512952e94e97b1$export$87e9c2ff338a8575.DIALOG_WORKS_PROJECT_INTERVENE = $e2512952e94e97b1$var$_a.SOC_WORKS_PROJECT_INTERVENE + "-dialog";
$e2512952e94e97b1$export$87e9c2ff338a8575.DIALOG_WORKS_EMCB32 = $e2512952e94e97b1$var$_a.SOC_WORKS_EMCB32 + "-dialog";
$e2512952e94e97b1$export$87e9c2ff338a8575.DIALOG_WORKS_EMCB_HD = $e2512952e94e97b1$var$_a.SOC_WORKS_EMCB_HD + "-dialog";
$e2512952e94e97b1$export$87e9c2ff338a8575.DIALOG_WORKS_E_TEXTURE = $e2512952e94e97b1$var$_a.SOC_WORKS_E_TEXTURE + "-dialog";
$e2512952e94e97b1$export$87e9c2ff338a8575.DIALOG_EXPERIENCE_AGMO_STUDIO = $e2512952e94e97b1$var$_a.SOC_EXPERIENCE_AGMO_STUDIO + "-dialog";


class $19c2be0d778d5431$export$2a8c48f56903afe6 extends (0, $73e338d5933d2651$export$2e2bcd8739ae039) {
    /*  Follow the following div structure: (scrollDown)
        <div class="scene">
            <div id="pan">
                <div id="cube">
                    <div class="front">
                    <div class="bottom"> */ animationStyleScrollUp() {
        throw new Error("Method not implemented.");
    }
    animationStyleScrollDown() {
        throw new Error("Method not implemented.");
    }
    executeScrollUp(pageAtTop, pageAtBottom, pageManagement) {
        (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(function() {
            const divScene = document.createElement("div");
            const divPan = document.createElement("div");
            const divCube = document.createElement("div");
            const divTop = document.createElement("div");
            const divFront = document.createElement("div");
            divScene.classList.add("scene");
            divPan.id = "pan";
            divCube.id = "cube";
            divPan.classList.add("panScrollUp");
            divCube.classList.add("rotateCubeScrollUp");
            divTop.classList.add("top");
            divFront.classList.add("front");
            // Assign pages to faces
            divTop.appendChild(pageAtTop.getNode());
            divFront.appendChild(pageAtBottom.getNode());
            // Form Scene Complex
            divCube.appendChild(divTop);
            divCube.appendChild(divFront);
            divPan.appendChild(divCube);
            divScene.appendChild(divPan);
            // Save current body state and scroll page to the next marking
            const divBody = (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`#${(0, $e2512952e94e97b1$export$87e9c2ff338a8575).PAGE_MANAGEMENT_CONTAINER}`).clone(true, true)[0];
            divCube.addEventListener("animationend", (event)=>{
                divScene.replaceWith(divBody);
                const targetToScroll = document.getElementById(pageAtTop.getSelector());
                targetToScroll?.scrollIntoView();
                pageManagement?.updatePageEvents();
                // Make all fixed items at Top Page to appear
                pageAtTop.onScrollIn();
            });
            // Body replaced by Cube Animation
            document.getElementById((0, $e2512952e94e97b1$export$87e9c2ff338a8575).PAGE_MANAGEMENT_CONTAINER).replaceWith(divScene);
        });
    }
    executeScrollDown(pageAtTop, pageAtBottom, pageManagement) {
        (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(function() {
            const divScene = document.createElement("div");
            const divPan = document.createElement("div");
            const divCube = document.createElement("div");
            const divFront = document.createElement("div");
            const divBottom = document.createElement("div");
            divScene.classList.add("scene");
            divPan.id = "pan";
            divCube.id = "cube";
            divPan.classList.add("panScrollDown");
            divCube.classList.add("rotateCubeScrollDown");
            divFront.classList.add("front");
            divBottom.classList.add("bottom");
            // Assign pages to faces
            divFront.appendChild(pageAtTop.getNode());
            divBottom.appendChild(pageAtBottom.getNode());
            // Form Scene Complex
            divCube.appendChild(divFront);
            divCube.appendChild(divBottom);
            divPan.appendChild(divCube);
            divScene.appendChild(divPan);
            // Save current body state and scroll page to the next marking
            const divBody = (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`#${"page-management-container"}`).clone(true, true)[0];
            divCube.addEventListener("animationend", (event)=>{
                divScene.replaceWith(divBody);
                const targetToScroll = document.getElementById(pageAtBottom.getSelector());
                targetToScroll?.scrollIntoView();
                pageManagement?.updatePageEvents();
                // Make all fixed items at Bottom Page to appear
                pageAtBottom.onScrollIn();
            });
            // Body replaced by Cube Animation
            document.getElementById("page-management-container").replaceWith(divScene);
        });
    }
}
var $19c2be0d778d5431$export$2e2bcd8739ae039 = $19c2be0d778d5431$export$2a8c48f56903afe6;




class $dbf738cadf6256bb$export$16fa2f45be04daa8 {
    constructor(selector){
        this.hasInitiallyScrolledIn = false;
        this.children = [];
        // Completes element construction
        this.selector = selector;
    }
    attach() {
        // Assigns element to target selector div in HTML
        if (this.$constructedElement) (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`#${this.selector}`).replaceWith(this.$constructedElement);
        else throw new Error("Component not constructed.");
    }
    attachChildren() {
        for (const child of this.children)child.attach();
    }
    build() {
        // Returns the constructed element that is stored as the component's state
        return this.$constructedElement ? this.$constructedElement : undefined;
    }
    getConstructedElement() {
        return this.$constructedElement;
    }
    getChildrenConstructedElements() {
        const childrenConstructedElements = [];
        for (const child of this.children){
            const childConstructedElement = child.getConstructedElement();
            if (childConstructedElement) childrenConstructedElements.push(childConstructedElement);
        }
        return childrenConstructedElements;
    }
    onAttachBeforeScrollIn() {}
    onScrollIn() {}
    onScrollOut() {}
    conditionalOnInitialBuildBeforeScrollIn() {
        if (!this.hasInitiallyScrolledIn) {
            this.onAttachBeforeScrollIn();
            this.hasInitiallyScrolledIn = true;
        }
    }
}
var $dbf738cadf6256bb$export$2e2bcd8739ae039 = $dbf738cadf6256bb$export$16fa2f45be04daa8;




function $766f7e1ec7548f74$var$ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function $766f7e1ec7548f74$var$_objectSpread2(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? $766f7e1ec7548f74$var$ownKeys(Object(source), !0).forEach(function(key) {
            $766f7e1ec7548f74$var$_defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : $766f7e1ec7548f74$var$ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function $766f7e1ec7548f74$var$_typeof(obj) {
    "@babel/helpers - typeof";
    return $766f7e1ec7548f74$var$_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, $766f7e1ec7548f74$var$_typeof(obj);
}
function $766f7e1ec7548f74$var$_wrapRegExp() {
    $766f7e1ec7548f74$var$_wrapRegExp = function(re, groups) {
        return new BabelRegExp(re, void 0, groups);
    };
    var _super = RegExp.prototype, _groups = new WeakMap();
    function BabelRegExp(re, flags, groups) {
        var _this = new RegExp(re, flags);
        return _groups.set(_this, groups || _groups.get(re)), $766f7e1ec7548f74$var$_setPrototypeOf(_this, BabelRegExp.prototype);
    }
    function buildGroups(result, re) {
        var g = _groups.get(re);
        return Object.keys(g).reduce(function(groups, name) {
            return groups[name] = result[g[name]], groups;
        }, Object.create(null));
    }
    return $766f7e1ec7548f74$var$_inherits(BabelRegExp, RegExp), BabelRegExp.prototype.exec = function(str) {
        var result = _super.exec.call(this, str);
        return result && (result.groups = buildGroups(result, this)), result;
    }, BabelRegExp.prototype[Symbol.replace] = function(str, substitution) {
        if ("string" == typeof substitution) {
            var groups = _groups.get(this);
            return _super[Symbol.replace].call(this, str, substitution.replace(/\$<([^>]+)>/g, function(_, name) {
                return "$" + groups[name];
            }));
        }
        if ("function" == typeof substitution) {
            var _this = this;
            return _super[Symbol.replace].call(this, str, function() {
                var args = arguments;
                return "object" != typeof args[args.length - 1] && (args = [].slice.call(args)).push(buildGroups(args, _this)), substitution.apply(this, args);
            });
        }
        return _super[Symbol.replace].call(this, str, substitution);
    }, $766f7e1ec7548f74$var$_wrapRegExp.apply(this, arguments);
}
function $766f7e1ec7548f74$var$_classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function $766f7e1ec7548f74$var$_defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function $766f7e1ec7548f74$var$_createClass(Constructor, protoProps, staticProps) {
    if (protoProps) $766f7e1ec7548f74$var$_defineProperties(Constructor.prototype, protoProps);
    if (staticProps) $766f7e1ec7548f74$var$_defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
function $766f7e1ec7548f74$var$_defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function $766f7e1ec7548f74$var$_inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    Object.defineProperty(subClass, "prototype", {
        writable: false
    });
    if (superClass) $766f7e1ec7548f74$var$_setPrototypeOf(subClass, superClass);
}
function $766f7e1ec7548f74$var$_setPrototypeOf(o, p) {
    $766f7e1ec7548f74$var$_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return $766f7e1ec7548f74$var$_setPrototypeOf(o, p);
}
function $766f7e1ec7548f74$var$_slicedToArray(arr, i) {
    return $766f7e1ec7548f74$var$_arrayWithHoles(arr) || $766f7e1ec7548f74$var$_iterableToArrayLimit(arr, i) || $766f7e1ec7548f74$var$_unsupportedIterableToArray(arr, i) || $766f7e1ec7548f74$var$_nonIterableRest();
}
function $766f7e1ec7548f74$var$_toConsumableArray(arr) {
    return $766f7e1ec7548f74$var$_arrayWithoutHoles(arr) || $766f7e1ec7548f74$var$_iterableToArray(arr) || $766f7e1ec7548f74$var$_unsupportedIterableToArray(arr) || $766f7e1ec7548f74$var$_nonIterableSpread();
}
function $766f7e1ec7548f74$var$_arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return $766f7e1ec7548f74$var$_arrayLikeToArray(arr);
}
function $766f7e1ec7548f74$var$_arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function $766f7e1ec7548f74$var$_iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function $766f7e1ec7548f74$var$_iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function $766f7e1ec7548f74$var$_unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return $766f7e1ec7548f74$var$_arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return $766f7e1ec7548f74$var$_arrayLikeToArray(o, minLen);
}
function $766f7e1ec7548f74$var$_arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function $766f7e1ec7548f74$var$_nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function $766f7e1ec7548f74$var$_nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var $766f7e1ec7548f74$var$noop = function noop() {};
var $766f7e1ec7548f74$var$_WINDOW = {};
var $766f7e1ec7548f74$var$_DOCUMENT = {};
var $766f7e1ec7548f74$var$_MUTATION_OBSERVER = null;
var $766f7e1ec7548f74$var$_PERFORMANCE = {
    mark: $766f7e1ec7548f74$var$noop,
    measure: $766f7e1ec7548f74$var$noop
};
try {
    if (typeof window !== "undefined") $766f7e1ec7548f74$var$_WINDOW = window;
    if (typeof document !== "undefined") $766f7e1ec7548f74$var$_DOCUMENT = document;
    if (typeof MutationObserver !== "undefined") $766f7e1ec7548f74$var$_MUTATION_OBSERVER = MutationObserver;
    if (typeof performance !== "undefined") $766f7e1ec7548f74$var$_PERFORMANCE = performance;
} catch (e) {}
var $766f7e1ec7548f74$var$_ref = $766f7e1ec7548f74$var$_WINDOW.navigator || {}, $766f7e1ec7548f74$var$_ref$userAgent = $766f7e1ec7548f74$var$_ref.userAgent, $766f7e1ec7548f74$var$userAgent = $766f7e1ec7548f74$var$_ref$userAgent === void 0 ? "" : $766f7e1ec7548f74$var$_ref$userAgent;
var $766f7e1ec7548f74$var$WINDOW = $766f7e1ec7548f74$var$_WINDOW;
var $766f7e1ec7548f74$var$DOCUMENT = $766f7e1ec7548f74$var$_DOCUMENT;
var $766f7e1ec7548f74$var$MUTATION_OBSERVER = $766f7e1ec7548f74$var$_MUTATION_OBSERVER;
var $766f7e1ec7548f74$var$PERFORMANCE = $766f7e1ec7548f74$var$_PERFORMANCE;
var $766f7e1ec7548f74$var$IS_BROWSER = !!$766f7e1ec7548f74$var$WINDOW.document;
var $766f7e1ec7548f74$var$IS_DOM = !!$766f7e1ec7548f74$var$DOCUMENT.documentElement && !!$766f7e1ec7548f74$var$DOCUMENT.head && typeof $766f7e1ec7548f74$var$DOCUMENT.addEventListener === "function" && typeof $766f7e1ec7548f74$var$DOCUMENT.createElement === "function";
var $766f7e1ec7548f74$var$IS_IE = ~$766f7e1ec7548f74$var$userAgent.indexOf("MSIE") || ~$766f7e1ec7548f74$var$userAgent.indexOf("Trident/");
var $766f7e1ec7548f74$var$_familyProxy, $766f7e1ec7548f74$var$_familyProxy2, $766f7e1ec7548f74$var$_familyProxy3, $766f7e1ec7548f74$var$_familyProxy4, $766f7e1ec7548f74$var$_familyProxy5;
var $766f7e1ec7548f74$var$NAMESPACE_IDENTIFIER = "___FONT_AWESOME___";
var $766f7e1ec7548f74$var$UNITS_IN_GRID = 16;
var $766f7e1ec7548f74$var$DEFAULT_CSS_PREFIX = "fa";
var $766f7e1ec7548f74$var$DEFAULT_REPLACEMENT_CLASS = "svg-inline--fa";
var $766f7e1ec7548f74$var$DATA_FA_I2SVG = "data-fa-i2svg";
var $766f7e1ec7548f74$var$DATA_FA_PSEUDO_ELEMENT = "data-fa-pseudo-element";
var $766f7e1ec7548f74$var$DATA_FA_PSEUDO_ELEMENT_PENDING = "data-fa-pseudo-element-pending";
var $766f7e1ec7548f74$var$DATA_PREFIX = "data-prefix";
var $766f7e1ec7548f74$var$DATA_ICON = "data-icon";
var $766f7e1ec7548f74$var$HTML_CLASS_I2SVG_BASE_CLASS = "fontawesome-i2svg";
var $766f7e1ec7548f74$var$MUTATION_APPROACH_ASYNC = "async";
var $766f7e1ec7548f74$var$TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS = [
    "HTML",
    "HEAD",
    "STYLE",
    "SCRIPT"
];
var $766f7e1ec7548f74$var$PRODUCTION = function() {
    try {
        return true;
    } catch (e) {
        return false;
    }
}();
var $766f7e1ec7548f74$var$FAMILY_CLASSIC = "classic";
var $766f7e1ec7548f74$var$FAMILY_SHARP = "sharp";
var $766f7e1ec7548f74$var$FAMILIES = [
    $766f7e1ec7548f74$var$FAMILY_CLASSIC,
    $766f7e1ec7548f74$var$FAMILY_SHARP
];
function $766f7e1ec7548f74$var$familyProxy(obj) {
    // Defaults to the classic family if family is not available
    return new Proxy(obj, {
        get: function get(target, prop) {
            return prop in target ? target[prop] : target[$766f7e1ec7548f74$var$FAMILY_CLASSIC];
        }
    });
}
var $766f7e1ec7548f74$var$PREFIX_TO_STYLE = $766f7e1ec7548f74$var$familyProxy(($766f7e1ec7548f74$var$_familyProxy = {}, $766f7e1ec7548f74$var$_defineProperty($766f7e1ec7548f74$var$_familyProxy, $766f7e1ec7548f74$var$FAMILY_CLASSIC, {
    "fa": "solid",
    "fas": "solid",
    "fa-solid": "solid",
    "far": "regular",
    "fa-regular": "regular",
    "fal": "light",
    "fa-light": "light",
    "fat": "thin",
    "fa-thin": "thin",
    "fad": "duotone",
    "fa-duotone": "duotone",
    "fab": "brands",
    "fa-brands": "brands",
    "fak": "kit",
    "fakd": "kit",
    "fa-kit": "kit",
    "fa-kit-duotone": "kit"
}), $766f7e1ec7548f74$var$_defineProperty($766f7e1ec7548f74$var$_familyProxy, $766f7e1ec7548f74$var$FAMILY_SHARP, {
    "fa": "solid",
    "fass": "solid",
    "fa-solid": "solid",
    "fasr": "regular",
    "fa-regular": "regular",
    "fasl": "light",
    "fa-light": "light",
    "fast": "thin",
    "fa-thin": "thin"
}), $766f7e1ec7548f74$var$_familyProxy));
var $766f7e1ec7548f74$var$STYLE_TO_PREFIX = $766f7e1ec7548f74$var$familyProxy(($766f7e1ec7548f74$var$_familyProxy2 = {}, $766f7e1ec7548f74$var$_defineProperty($766f7e1ec7548f74$var$_familyProxy2, $766f7e1ec7548f74$var$FAMILY_CLASSIC, {
    solid: "fas",
    regular: "far",
    light: "fal",
    thin: "fat",
    duotone: "fad",
    brands: "fab",
    kit: "fak"
}), $766f7e1ec7548f74$var$_defineProperty($766f7e1ec7548f74$var$_familyProxy2, $766f7e1ec7548f74$var$FAMILY_SHARP, {
    solid: "fass",
    regular: "fasr",
    light: "fasl",
    thin: "fast"
}), $766f7e1ec7548f74$var$_familyProxy2));
var $766f7e1ec7548f74$var$PREFIX_TO_LONG_STYLE = $766f7e1ec7548f74$var$familyProxy(($766f7e1ec7548f74$var$_familyProxy3 = {}, $766f7e1ec7548f74$var$_defineProperty($766f7e1ec7548f74$var$_familyProxy3, $766f7e1ec7548f74$var$FAMILY_CLASSIC, {
    fab: "fa-brands",
    fad: "fa-duotone",
    fak: "fa-kit",
    fal: "fa-light",
    far: "fa-regular",
    fas: "fa-solid",
    fat: "fa-thin"
}), $766f7e1ec7548f74$var$_defineProperty($766f7e1ec7548f74$var$_familyProxy3, $766f7e1ec7548f74$var$FAMILY_SHARP, {
    fass: "fa-solid",
    fasr: "fa-regular",
    fasl: "fa-light",
    fast: "fa-thin"
}), $766f7e1ec7548f74$var$_familyProxy3));
var $766f7e1ec7548f74$var$LONG_STYLE_TO_PREFIX = $766f7e1ec7548f74$var$familyProxy(($766f7e1ec7548f74$var$_familyProxy4 = {}, $766f7e1ec7548f74$var$_defineProperty($766f7e1ec7548f74$var$_familyProxy4, $766f7e1ec7548f74$var$FAMILY_CLASSIC, {
    "fa-brands": "fab",
    "fa-duotone": "fad",
    "fa-kit": "fak",
    "fa-light": "fal",
    "fa-regular": "far",
    "fa-solid": "fas",
    "fa-thin": "fat"
}), $766f7e1ec7548f74$var$_defineProperty($766f7e1ec7548f74$var$_familyProxy4, $766f7e1ec7548f74$var$FAMILY_SHARP, {
    "fa-solid": "fass",
    "fa-regular": "fasr",
    "fa-light": "fasl",
    "fa-thin": "fast"
}), $766f7e1ec7548f74$var$_familyProxy4));
var $766f7e1ec7548f74$var$ICON_SELECTION_SYNTAX_PATTERN = /fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/; // eslint-disable-line no-useless-escape
var $766f7e1ec7548f74$var$LAYERS_TEXT_CLASSNAME = "fa-layers-text";
var $766f7e1ec7548f74$var$FONT_FAMILY_PATTERN = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i;
var $766f7e1ec7548f74$var$FONT_WEIGHT_TO_PREFIX = $766f7e1ec7548f74$var$familyProxy(($766f7e1ec7548f74$var$_familyProxy5 = {}, $766f7e1ec7548f74$var$_defineProperty($766f7e1ec7548f74$var$_familyProxy5, $766f7e1ec7548f74$var$FAMILY_CLASSIC, {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal",
    100: "fat"
}), $766f7e1ec7548f74$var$_defineProperty($766f7e1ec7548f74$var$_familyProxy5, $766f7e1ec7548f74$var$FAMILY_SHARP, {
    900: "fass",
    400: "fasr",
    300: "fasl",
    100: "fast"
}), $766f7e1ec7548f74$var$_familyProxy5));
var $766f7e1ec7548f74$var$oneToTen = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
];
var $766f7e1ec7548f74$var$oneToTwenty = $766f7e1ec7548f74$var$oneToTen.concat([
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20
]);
var $766f7e1ec7548f74$var$ATTRIBUTES_WATCHED_FOR_MUTATION = [
    "class",
    "data-prefix",
    "data-icon",
    "data-fa-transform",
    "data-fa-mask"
];
var $766f7e1ec7548f74$var$DUOTONE_CLASSES = {
    GROUP: "duotone-group",
    SWAP_OPACITY: "swap-opacity",
    PRIMARY: "primary",
    SECONDARY: "secondary"
};
var $766f7e1ec7548f74$var$prefixes = new Set();
Object.keys($766f7e1ec7548f74$var$STYLE_TO_PREFIX[$766f7e1ec7548f74$var$FAMILY_CLASSIC]).map($766f7e1ec7548f74$var$prefixes.add.bind($766f7e1ec7548f74$var$prefixes));
Object.keys($766f7e1ec7548f74$var$STYLE_TO_PREFIX[$766f7e1ec7548f74$var$FAMILY_SHARP]).map($766f7e1ec7548f74$var$prefixes.add.bind($766f7e1ec7548f74$var$prefixes));
var $766f7e1ec7548f74$var$RESERVED_CLASSES = [].concat($766f7e1ec7548f74$var$FAMILIES, $766f7e1ec7548f74$var$_toConsumableArray($766f7e1ec7548f74$var$prefixes), [
    "2xs",
    "xs",
    "sm",
    "lg",
    "xl",
    "2xl",
    "beat",
    "border",
    "fade",
    "beat-fade",
    "bounce",
    "flip-both",
    "flip-horizontal",
    "flip-vertical",
    "flip",
    "fw",
    "inverse",
    "layers-counter",
    "layers-text",
    "layers",
    "li",
    "pull-left",
    "pull-right",
    "pulse",
    "rotate-180",
    "rotate-270",
    "rotate-90",
    "rotate-by",
    "shake",
    "spin-pulse",
    "spin-reverse",
    "spin",
    "stack-1x",
    "stack-2x",
    "stack",
    "ul",
    $766f7e1ec7548f74$var$DUOTONE_CLASSES.GROUP,
    $766f7e1ec7548f74$var$DUOTONE_CLASSES.SWAP_OPACITY,
    $766f7e1ec7548f74$var$DUOTONE_CLASSES.PRIMARY,
    $766f7e1ec7548f74$var$DUOTONE_CLASSES.SECONDARY
]).concat($766f7e1ec7548f74$var$oneToTen.map(function(n) {
    return "".concat(n, "x");
})).concat($766f7e1ec7548f74$var$oneToTwenty.map(function(n) {
    return "w-".concat(n);
}));
var $766f7e1ec7548f74$var$initial = $766f7e1ec7548f74$var$WINDOW.FontAwesomeConfig || {};
function $766f7e1ec7548f74$var$getAttrConfig(attr) {
    var element = $766f7e1ec7548f74$var$DOCUMENT.querySelector("script[" + attr + "]");
    if (element) return element.getAttribute(attr);
}
function $766f7e1ec7548f74$var$coerce(val) {
    // Getting an empty string will occur if the attribute is set on the HTML tag but without a value
    // We'll assume that this is an indication that it should be toggled to true
    if (val === "") return true;
    if (val === "false") return false;
    if (val === "true") return true;
    return val;
}
if ($766f7e1ec7548f74$var$DOCUMENT && typeof $766f7e1ec7548f74$var$DOCUMENT.querySelector === "function") {
    var $766f7e1ec7548f74$var$attrs = [
        [
            "data-family-prefix",
            "familyPrefix"
        ],
        [
            "data-css-prefix",
            "cssPrefix"
        ],
        [
            "data-family-default",
            "familyDefault"
        ],
        [
            "data-style-default",
            "styleDefault"
        ],
        [
            "data-replacement-class",
            "replacementClass"
        ],
        [
            "data-auto-replace-svg",
            "autoReplaceSvg"
        ],
        [
            "data-auto-add-css",
            "autoAddCss"
        ],
        [
            "data-auto-a11y",
            "autoA11y"
        ],
        [
            "data-search-pseudo-elements",
            "searchPseudoElements"
        ],
        [
            "data-observe-mutations",
            "observeMutations"
        ],
        [
            "data-mutate-approach",
            "mutateApproach"
        ],
        [
            "data-keep-original-source",
            "keepOriginalSource"
        ],
        [
            "data-measure-performance",
            "measurePerformance"
        ],
        [
            "data-show-missing-icons",
            "showMissingIcons"
        ]
    ];
    $766f7e1ec7548f74$var$attrs.forEach(function(_ref) {
        var _ref2 = $766f7e1ec7548f74$var$_slicedToArray(_ref, 2), attr = _ref2[0], key = _ref2[1];
        var val = $766f7e1ec7548f74$var$coerce($766f7e1ec7548f74$var$getAttrConfig(attr));
        if (val !== undefined && val !== null) $766f7e1ec7548f74$var$initial[key] = val;
    });
}
var $766f7e1ec7548f74$var$_default = {
    styleDefault: "solid",
    familyDefault: "classic",
    cssPrefix: $766f7e1ec7548f74$var$DEFAULT_CSS_PREFIX,
    replacementClass: $766f7e1ec7548f74$var$DEFAULT_REPLACEMENT_CLASS,
    autoReplaceSvg: true,
    autoAddCss: true,
    autoA11y: true,
    searchPseudoElements: false,
    observeMutations: true,
    mutateApproach: "async",
    keepOriginalSource: true,
    measurePerformance: false,
    showMissingIcons: true
}; // familyPrefix is deprecated but we must still support it if present
if ($766f7e1ec7548f74$var$initial.familyPrefix) $766f7e1ec7548f74$var$initial.cssPrefix = $766f7e1ec7548f74$var$initial.familyPrefix;
var $766f7e1ec7548f74$var$_config = $766f7e1ec7548f74$var$_objectSpread2($766f7e1ec7548f74$var$_objectSpread2({}, $766f7e1ec7548f74$var$_default), $766f7e1ec7548f74$var$initial);
if (!$766f7e1ec7548f74$var$_config.autoReplaceSvg) $766f7e1ec7548f74$var$_config.observeMutations = false;
var $766f7e1ec7548f74$var$config = {};
Object.keys($766f7e1ec7548f74$var$_default).forEach(function(key) {
    Object.defineProperty($766f7e1ec7548f74$var$config, key, {
        enumerable: true,
        set: function set(val) {
            $766f7e1ec7548f74$var$_config[key] = val;
            $766f7e1ec7548f74$var$_onChangeCb.forEach(function(cb) {
                return cb($766f7e1ec7548f74$var$config);
            });
        },
        get: function get() {
            return $766f7e1ec7548f74$var$_config[key];
        }
    });
}); // familyPrefix is deprecated as of 6.2.0 and should be removed in 7.0.0
Object.defineProperty($766f7e1ec7548f74$var$config, "familyPrefix", {
    enumerable: true,
    set: function set(val) {
        $766f7e1ec7548f74$var$_config.cssPrefix = val;
        $766f7e1ec7548f74$var$_onChangeCb.forEach(function(cb) {
            return cb($766f7e1ec7548f74$var$config);
        });
    },
    get: function get() {
        return $766f7e1ec7548f74$var$_config.cssPrefix;
    }
});
$766f7e1ec7548f74$var$WINDOW.FontAwesomeConfig = $766f7e1ec7548f74$var$config;
var $766f7e1ec7548f74$var$_onChangeCb = [];
function $766f7e1ec7548f74$var$onChange(cb) {
    $766f7e1ec7548f74$var$_onChangeCb.push(cb);
    return function() {
        $766f7e1ec7548f74$var$_onChangeCb.splice($766f7e1ec7548f74$var$_onChangeCb.indexOf(cb), 1);
    };
}
var $766f7e1ec7548f74$var$d = $766f7e1ec7548f74$var$UNITS_IN_GRID;
var $766f7e1ec7548f74$var$meaninglessTransform = {
    size: 16,
    x: 0,
    y: 0,
    rotate: 0,
    flipX: false,
    flipY: false
};
function $766f7e1ec7548f74$var$insertCss(css) {
    if (!css || !$766f7e1ec7548f74$var$IS_DOM) return;
    var style = $766f7e1ec7548f74$var$DOCUMENT.createElement("style");
    style.setAttribute("type", "text/css");
    style.innerHTML = css;
    var headChildren = $766f7e1ec7548f74$var$DOCUMENT.head.childNodes;
    var beforeChild = null;
    for(var i = headChildren.length - 1; i > -1; i--){
        var child = headChildren[i];
        var tagName = (child.tagName || "").toUpperCase();
        if ([
            "STYLE",
            "LINK"
        ].indexOf(tagName) > -1) beforeChild = child;
    }
    $766f7e1ec7548f74$var$DOCUMENT.head.insertBefore(style, beforeChild);
    return css;
}
var $766f7e1ec7548f74$var$idPool = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function $766f7e1ec7548f74$var$nextUniqueId() {
    var size = 12;
    var id = "";
    while(size-- > 0)id += $766f7e1ec7548f74$var$idPool[Math.random() * 62 | 0];
    return id;
}
function $766f7e1ec7548f74$var$toArray(obj) {
    var array = [];
    for(var i = (obj || []).length >>> 0; i--;)array[i] = obj[i];
    return array;
}
function $766f7e1ec7548f74$var$classArray(node) {
    if (node.classList) return $766f7e1ec7548f74$var$toArray(node.classList);
    else return (node.getAttribute("class") || "").split(" ").filter(function(i) {
        return i;
    });
}
function $766f7e1ec7548f74$var$htmlEscape(str) {
    return "".concat(str).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function $766f7e1ec7548f74$var$joinAttributes(attributes) {
    return Object.keys(attributes || {}).reduce(function(acc, attributeName) {
        return acc + "".concat(attributeName, '="').concat($766f7e1ec7548f74$var$htmlEscape(attributes[attributeName]), '" ');
    }, "").trim();
}
function $766f7e1ec7548f74$var$joinStyles(styles) {
    return Object.keys(styles || {}).reduce(function(acc, styleName) {
        return acc + "".concat(styleName, ": ").concat(styles[styleName].trim(), ";");
    }, "");
}
function $766f7e1ec7548f74$var$transformIsMeaningful(transform) {
    return transform.size !== $766f7e1ec7548f74$var$meaninglessTransform.size || transform.x !== $766f7e1ec7548f74$var$meaninglessTransform.x || transform.y !== $766f7e1ec7548f74$var$meaninglessTransform.y || transform.rotate !== $766f7e1ec7548f74$var$meaninglessTransform.rotate || transform.flipX || transform.flipY;
}
function $766f7e1ec7548f74$var$transformForSvg(_ref) {
    var transform = _ref.transform, containerWidth = _ref.containerWidth, iconWidth = _ref.iconWidth;
    var outer = {
        transform: "translate(".concat(containerWidth / 2, " 256)")
    };
    var innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
    var innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
    var innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
    var inner = {
        transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
    };
    var path = {
        transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
    };
    return {
        outer: outer,
        inner: inner,
        path: path
    };
}
function $766f7e1ec7548f74$var$transformForCss(_ref2) {
    var transform = _ref2.transform, _ref2$width = _ref2.width, width = _ref2$width === void 0 ? $766f7e1ec7548f74$var$UNITS_IN_GRID : _ref2$width, _ref2$height = _ref2.height, height = _ref2$height === void 0 ? $766f7e1ec7548f74$var$UNITS_IN_GRID : _ref2$height, _ref2$startCentered = _ref2.startCentered, startCentered = _ref2$startCentered === void 0 ? false : _ref2$startCentered;
    var val = "";
    if (startCentered && $766f7e1ec7548f74$var$IS_IE) val += "translate(".concat(transform.x / $766f7e1ec7548f74$var$d - width / 2, "em, ").concat(transform.y / $766f7e1ec7548f74$var$d - height / 2, "em) ");
    else if (startCentered) val += "translate(calc(-50% + ".concat(transform.x / $766f7e1ec7548f74$var$d, "em), calc(-50% + ").concat(transform.y / $766f7e1ec7548f74$var$d, "em)) ");
    else val += "translate(".concat(transform.x / $766f7e1ec7548f74$var$d, "em, ").concat(transform.y / $766f7e1ec7548f74$var$d, "em) ");
    val += "scale(".concat(transform.size / $766f7e1ec7548f74$var$d * (transform.flipX ? -1 : 1), ", ").concat(transform.size / $766f7e1ec7548f74$var$d * (transform.flipY ? -1 : 1), ") ");
    val += "rotate(".concat(transform.rotate, "deg) ");
    return val;
}
var $766f7e1ec7548f74$var$baseStyles = ':root, :host {\n  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";\n  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";\n  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";\n  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";\n  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";\n}\n\nsvg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {\n  overflow: visible;\n  box-sizing: content-box;\n}\n\n.svg-inline--fa {\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285705em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  top: 0.25em;\n}\n.svg-inline--fa.fa-fw {\n  width: var(--fa-fw-width, 1.25em);\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-counter-scale, 0.25));\n          transform: scale(var(--fa-counter-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: 0.625em;\n  line-height: 0.1em;\n  vertical-align: 0.225em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n  line-height: 0.0833333337em;\n  vertical-align: 0.125em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n  line-height: 0.0714285718em;\n  vertical-align: 0.0535714295em;\n}\n\n.fa-lg {\n  font-size: 1.25em;\n  line-height: 0.05em;\n  vertical-align: -0.075em;\n}\n\n.fa-xl {\n  font-size: 1.5em;\n  line-height: 0.0416666682em;\n  vertical-align: -0.125em;\n}\n\n.fa-2xl {\n  font-size: 2em;\n  line-height: 0.03125em;\n  vertical-align: -0.1875em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: var(--fa-li-margin, 2.5em);\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: calc(var(--fa-li-width, 2em) * -1);\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.08em);\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);\n}\n\n.fa-pull-left {\n  float: left;\n  margin-right: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right {\n  float: right;\n  margin-left: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  -webkit-animation-name: fa-beat;\n          animation-name: fa-beat;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  -webkit-animation-name: fa-bounce;\n          animation-name: fa-bounce;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  -webkit-animation-name: fa-fade;\n          animation-name: fa-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  -webkit-animation-name: fa-beat-fade;\n          animation-name: fa-beat-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  -webkit-animation-name: fa-flip;\n          animation-name: fa-flip;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  -webkit-animation-name: fa-shake;\n          animation-name: fa-shake;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 2s);\n          animation-duration: var(--fa-animation-duration, 2s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));\n          animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n.fa-bounce,\n.fa-fade,\n.fa-beat-fade,\n.fa-flip,\n.fa-pulse,\n.fa-shake,\n.fa-spin,\n.fa-spin-pulse {\n    -webkit-animation-delay: -1ms;\n            animation-delay: -1ms;\n    -webkit-animation-duration: 1ms;\n            animation-duration: 1ms;\n    -webkit-animation-iteration-count: 1;\n            animation-iteration-count: 1;\n    -webkit-transition-delay: 0s;\n            transition-delay: 0s;\n    -webkit-transition-duration: 0s;\n            transition-duration: 0s;\n  }\n}\n@-webkit-keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@-webkit-keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@-webkit-keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@-webkit-keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@-webkit-keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@-webkit-keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  -webkit-transform: rotate(var(--fa-rotate-angle, none));\n          transform: rotate(var(--fa-rotate-angle, none));\n}\n\n.fa-stack {\n  display: inline-block;\n  vertical-align: middle;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: var(--fa-stack-z-index, auto);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.sr-only,\n.fa-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.sr-only-focusable:not(:focus),\n.fa-sr-only-focusable:not(:focus) {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse,\n.fa-duotone.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}';
function $766f7e1ec7548f74$var$css() {
    var dcp = $766f7e1ec7548f74$var$DEFAULT_CSS_PREFIX;
    var drc = $766f7e1ec7548f74$var$DEFAULT_REPLACEMENT_CLASS;
    var fp = $766f7e1ec7548f74$var$config.cssPrefix;
    var rc = $766f7e1ec7548f74$var$config.replacementClass;
    var s = $766f7e1ec7548f74$var$baseStyles;
    if (fp !== dcp || rc !== drc) {
        var dPatt = new RegExp("\\.".concat(dcp, "\\-"), "g");
        var customPropPatt = new RegExp("\\--".concat(dcp, "\\-"), "g");
        var rPatt = new RegExp("\\.".concat(drc), "g");
        s = s.replace(dPatt, ".".concat(fp, "-")).replace(customPropPatt, "--".concat(fp, "-")).replace(rPatt, ".".concat(rc));
    }
    return s;
}
var $766f7e1ec7548f74$var$_cssInserted = false;
function $766f7e1ec7548f74$var$ensureCss() {
    if ($766f7e1ec7548f74$var$config.autoAddCss && !$766f7e1ec7548f74$var$_cssInserted) {
        $766f7e1ec7548f74$var$insertCss($766f7e1ec7548f74$var$css());
        $766f7e1ec7548f74$var$_cssInserted = true;
    }
}
var $766f7e1ec7548f74$var$InjectCSS = {
    mixout: function mixout() {
        return {
            dom: {
                css: $766f7e1ec7548f74$var$css,
                insertCss: $766f7e1ec7548f74$var$ensureCss
            }
        };
    },
    hooks: function hooks() {
        return {
            beforeDOMElementCreation: function beforeDOMElementCreation() {
                $766f7e1ec7548f74$var$ensureCss();
            },
            beforeI2svg: function beforeI2svg() {
                $766f7e1ec7548f74$var$ensureCss();
            }
        };
    }
};
var $766f7e1ec7548f74$var$w = $766f7e1ec7548f74$var$WINDOW || {};
if (!$766f7e1ec7548f74$var$w[$766f7e1ec7548f74$var$NAMESPACE_IDENTIFIER]) $766f7e1ec7548f74$var$w[$766f7e1ec7548f74$var$NAMESPACE_IDENTIFIER] = {};
if (!$766f7e1ec7548f74$var$w[$766f7e1ec7548f74$var$NAMESPACE_IDENTIFIER].styles) $766f7e1ec7548f74$var$w[$766f7e1ec7548f74$var$NAMESPACE_IDENTIFIER].styles = {};
if (!$766f7e1ec7548f74$var$w[$766f7e1ec7548f74$var$NAMESPACE_IDENTIFIER].hooks) $766f7e1ec7548f74$var$w[$766f7e1ec7548f74$var$NAMESPACE_IDENTIFIER].hooks = {};
if (!$766f7e1ec7548f74$var$w[$766f7e1ec7548f74$var$NAMESPACE_IDENTIFIER].shims) $766f7e1ec7548f74$var$w[$766f7e1ec7548f74$var$NAMESPACE_IDENTIFIER].shims = [];
var $766f7e1ec7548f74$var$namespace = $766f7e1ec7548f74$var$w[$766f7e1ec7548f74$var$NAMESPACE_IDENTIFIER];
var $766f7e1ec7548f74$var$functions = [];
var $766f7e1ec7548f74$var$listener = function listener() {
    $766f7e1ec7548f74$var$DOCUMENT.removeEventListener("DOMContentLoaded", listener);
    $766f7e1ec7548f74$var$loaded = 1;
    $766f7e1ec7548f74$var$functions.map(function(fn) {
        return fn();
    });
};
var $766f7e1ec7548f74$var$loaded = false;
if ($766f7e1ec7548f74$var$IS_DOM) {
    $766f7e1ec7548f74$var$loaded = ($766f7e1ec7548f74$var$DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test($766f7e1ec7548f74$var$DOCUMENT.readyState);
    if (!$766f7e1ec7548f74$var$loaded) $766f7e1ec7548f74$var$DOCUMENT.addEventListener("DOMContentLoaded", $766f7e1ec7548f74$var$listener);
}
function $766f7e1ec7548f74$var$domready(fn) {
    if (!$766f7e1ec7548f74$var$IS_DOM) return;
    $766f7e1ec7548f74$var$loaded ? setTimeout(fn, 0) : $766f7e1ec7548f74$var$functions.push(fn);
}
function $766f7e1ec7548f74$var$toHtml(abstractNodes) {
    var tag = abstractNodes.tag, _abstractNodes$attrib = abstractNodes.attributes, attributes = _abstractNodes$attrib === void 0 ? {} : _abstractNodes$attrib, _abstractNodes$childr = abstractNodes.children, children = _abstractNodes$childr === void 0 ? [] : _abstractNodes$childr;
    if (typeof abstractNodes === "string") return $766f7e1ec7548f74$var$htmlEscape(abstractNodes);
    else return "<".concat(tag, " ").concat($766f7e1ec7548f74$var$joinAttributes(attributes), ">").concat(children.map($766f7e1ec7548f74$var$toHtml).join(""), "</").concat(tag, ">");
}
function $766f7e1ec7548f74$var$iconFromMapping(mapping, prefix, iconName) {
    if (mapping && mapping[prefix] && mapping[prefix][iconName]) return {
        prefix: prefix,
        iconName: iconName,
        icon: mapping[prefix][iconName]
    };
}
/**
 * Internal helper to bind a function known to have 4 arguments
 * to a given context.
 */ var $766f7e1ec7548f74$var$bindInternal4 = function bindInternal4(func, thisContext) {
    return function(a, b, c, d) {
        return func.call(thisContext, a, b, c, d);
    };
};
/**
 * # Reduce
 *
 * A fast object `.reduce()` implementation.
 *
 * @param  {Object}   subject      The object to reduce over.
 * @param  {Function} fn           The reducer function.
 * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
 * @param  {Object}   thisContext  The context for the reducer.
 * @return {mixed}                 The final result.
 */ var $766f7e1ec7548f74$var$reduce = function fastReduceObject(subject, fn, initialValue, thisContext) {
    var keys = Object.keys(subject), length = keys.length, iterator = thisContext !== undefined ? $766f7e1ec7548f74$var$bindInternal4(fn, thisContext) : fn, i, key, result;
    if (initialValue === undefined) {
        i = 1;
        result = subject[keys[0]];
    } else {
        i = 0;
        result = initialValue;
    }
    for(; i < length; i++){
        key = keys[i];
        result = iterator(result, subject[key], key, subject);
    }
    return result;
};
/**
 * ucs2decode() and codePointAt() are both works of Mathias Bynens and licensed under MIT
 *
 * Copyright Mathias Bynens <https://mathiasbynens.be/>

 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:

 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */ function $766f7e1ec7548f74$var$ucs2decode(string) {
    var output = [];
    var counter = 0;
    var length = string.length;
    while(counter < length){
        var value = string.charCodeAt(counter++);
        if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
            var extra = string.charCodeAt(counter++);
            if ((extra & 0xFC00) == 0xDC00) // eslint-disable-line eqeqeq
            output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
            else {
                output.push(value);
                counter--;
            }
        } else output.push(value);
    }
    return output;
}
function $766f7e1ec7548f74$var$toHex(unicode) {
    var decoded = $766f7e1ec7548f74$var$ucs2decode(unicode);
    return decoded.length === 1 ? decoded[0].toString(16) : null;
}
function $766f7e1ec7548f74$var$codePointAt(string, index) {
    var size = string.length;
    var first = string.charCodeAt(index);
    var second;
    if (first >= 0xD800 && first <= 0xDBFF && size > index + 1) {
        second = string.charCodeAt(index + 1);
        if (second >= 0xDC00 && second <= 0xDFFF) return (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
    }
    return first;
}
function $766f7e1ec7548f74$var$normalizeIcons(icons) {
    return Object.keys(icons).reduce(function(acc, iconName) {
        var icon = icons[iconName];
        var expanded = !!icon.icon;
        if (expanded) acc[icon.iconName] = icon.icon;
        else acc[iconName] = icon;
        return acc;
    }, {});
}
function $766f7e1ec7548f74$var$defineIcons(prefix, icons) {
    var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var _params$skipHooks = params.skipHooks, skipHooks = _params$skipHooks === void 0 ? false : _params$skipHooks;
    var normalized = $766f7e1ec7548f74$var$normalizeIcons(icons);
    if (typeof $766f7e1ec7548f74$var$namespace.hooks.addPack === "function" && !skipHooks) $766f7e1ec7548f74$var$namespace.hooks.addPack(prefix, $766f7e1ec7548f74$var$normalizeIcons(icons));
    else $766f7e1ec7548f74$var$namespace.styles[prefix] = $766f7e1ec7548f74$var$_objectSpread2($766f7e1ec7548f74$var$_objectSpread2({}, $766f7e1ec7548f74$var$namespace.styles[prefix] || {}), normalized);
    /**
   * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
   * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
   * for `fas` so we'll ease the upgrade process for our users by automatically defining
   * this as well.
   */ if (prefix === "fas") $766f7e1ec7548f74$var$defineIcons("fa", icons);
}
var $766f7e1ec7548f74$var$duotonePathRe = [
    /*#__PURE__*/ $766f7e1ec7548f74$var$_wrapRegExp(/path d="((?:(?!")[\s\S])+)".*path d="((?:(?!")[\s\S])+)"/, {
        d1: 1,
        d2: 2
    }),
    /*#__PURE__*/ $766f7e1ec7548f74$var$_wrapRegExp(/path class="((?:(?!")[\s\S])+)".*d="((?:(?!")[\s\S])+)".*path class="((?:(?!")[\s\S])+)".*d="((?:(?!")[\s\S])+)"/, {
        cls1: 1,
        d1: 2,
        cls2: 3,
        d2: 4
    }),
    /*#__PURE__*/ $766f7e1ec7548f74$var$_wrapRegExp(/path class="((?:(?!")[\s\S])+)".*d="((?:(?!")[\s\S])+)"/, {
        cls1: 1,
        d1: 2
    })
];
var $766f7e1ec7548f74$var$_LONG_STYLE, $766f7e1ec7548f74$var$_PREFIXES, $766f7e1ec7548f74$var$_PREFIXES_FOR_FAMILY;
var $766f7e1ec7548f74$var$styles = $766f7e1ec7548f74$var$namespace.styles, $766f7e1ec7548f74$var$shims = $766f7e1ec7548f74$var$namespace.shims;
var $766f7e1ec7548f74$var$LONG_STYLE = ($766f7e1ec7548f74$var$_LONG_STYLE = {}, $766f7e1ec7548f74$var$_defineProperty($766f7e1ec7548f74$var$_LONG_STYLE, $766f7e1ec7548f74$var$FAMILY_CLASSIC, Object.values($766f7e1ec7548f74$var$PREFIX_TO_LONG_STYLE[$766f7e1ec7548f74$var$FAMILY_CLASSIC])), $766f7e1ec7548f74$var$_defineProperty($766f7e1ec7548f74$var$_LONG_STYLE, $766f7e1ec7548f74$var$FAMILY_SHARP, Object.values($766f7e1ec7548f74$var$PREFIX_TO_LONG_STYLE[$766f7e1ec7548f74$var$FAMILY_SHARP])), $766f7e1ec7548f74$var$_LONG_STYLE);
var $766f7e1ec7548f74$var$_defaultUsablePrefix = null;
var $766f7e1ec7548f74$var$_byUnicode = {};
var $766f7e1ec7548f74$var$_byLigature = {};
var $766f7e1ec7548f74$var$_byOldName = {};
var $766f7e1ec7548f74$var$_byOldUnicode = {};
var $766f7e1ec7548f74$var$_byAlias = {};
var $766f7e1ec7548f74$var$PREFIXES = ($766f7e1ec7548f74$var$_PREFIXES = {}, $766f7e1ec7548f74$var$_defineProperty($766f7e1ec7548f74$var$_PREFIXES, $766f7e1ec7548f74$var$FAMILY_CLASSIC, Object.keys($766f7e1ec7548f74$var$PREFIX_TO_STYLE[$766f7e1ec7548f74$var$FAMILY_CLASSIC])), $766f7e1ec7548f74$var$_defineProperty($766f7e1ec7548f74$var$_PREFIXES, $766f7e1ec7548f74$var$FAMILY_SHARP, Object.keys($766f7e1ec7548f74$var$PREFIX_TO_STYLE[$766f7e1ec7548f74$var$FAMILY_SHARP])), $766f7e1ec7548f74$var$_PREFIXES);
function $766f7e1ec7548f74$var$isReserved(name) {
    return ~$766f7e1ec7548f74$var$RESERVED_CLASSES.indexOf(name);
}
function $766f7e1ec7548f74$var$getIconName(cssPrefix, cls) {
    var parts = cls.split("-");
    var prefix = parts[0];
    var iconName = parts.slice(1).join("-");
    if (prefix === cssPrefix && iconName !== "" && !$766f7e1ec7548f74$var$isReserved(iconName)) return iconName;
    else return null;
}
var $766f7e1ec7548f74$var$build = function build() {
    var lookup = function lookup(reducer) {
        return $766f7e1ec7548f74$var$reduce($766f7e1ec7548f74$var$styles, function(o, style, prefix) {
            o[prefix] = $766f7e1ec7548f74$var$reduce(style, reducer, {});
            return o;
        }, {});
    };
    $766f7e1ec7548f74$var$_byUnicode = lookup(function(acc, icon, iconName) {
        if (icon[3]) acc[icon[3]] = iconName;
        if (icon[2]) {
            var aliases = icon[2].filter(function(a) {
                return typeof a === "number";
            });
            aliases.forEach(function(alias) {
                acc[alias.toString(16)] = iconName;
            });
        }
        return acc;
    });
    $766f7e1ec7548f74$var$_byLigature = lookup(function(acc, icon, iconName) {
        acc[iconName] = iconName;
        if (icon[2]) {
            var aliases = icon[2].filter(function(a) {
                return typeof a === "string";
            });
            aliases.forEach(function(alias) {
                acc[alias] = iconName;
            });
        }
        return acc;
    });
    $766f7e1ec7548f74$var$_byAlias = lookup(function(acc, icon, iconName) {
        var aliases = icon[2];
        acc[iconName] = iconName;
        aliases.forEach(function(alias) {
            acc[alias] = iconName;
        });
        return acc;
    }); // If we have a Kit, we can't determine if regular is available since we
    // could be auto-fetching it. We'll have to assume that it is available.
    var hasRegular = "far" in $766f7e1ec7548f74$var$styles || $766f7e1ec7548f74$var$config.autoFetchSvg;
    var shimLookups = $766f7e1ec7548f74$var$reduce($766f7e1ec7548f74$var$shims, function(acc, shim) {
        var maybeNameMaybeUnicode = shim[0];
        var prefix = shim[1];
        var iconName = shim[2];
        if (prefix === "far" && !hasRegular) prefix = "fas";
        if (typeof maybeNameMaybeUnicode === "string") acc.names[maybeNameMaybeUnicode] = {
            prefix: prefix,
            iconName: iconName
        };
        if (typeof maybeNameMaybeUnicode === "number") acc.unicodes[maybeNameMaybeUnicode.toString(16)] = {
            prefix: prefix,
            iconName: iconName
        };
        return acc;
    }, {
        names: {},
        unicodes: {}
    });
    $766f7e1ec7548f74$var$_byOldName = shimLookups.names;
    $766f7e1ec7548f74$var$_byOldUnicode = shimLookups.unicodes;
    $766f7e1ec7548f74$var$_defaultUsablePrefix = $766f7e1ec7548f74$var$getCanonicalPrefix($766f7e1ec7548f74$var$config.styleDefault, {
        family: $766f7e1ec7548f74$var$config.familyDefault
    });
};
$766f7e1ec7548f74$var$onChange(function(c) {
    $766f7e1ec7548f74$var$_defaultUsablePrefix = $766f7e1ec7548f74$var$getCanonicalPrefix(c.styleDefault, {
        family: $766f7e1ec7548f74$var$config.familyDefault
    });
});
$766f7e1ec7548f74$var$build();
function $766f7e1ec7548f74$var$byUnicode(prefix, unicode) {
    return ($766f7e1ec7548f74$var$_byUnicode[prefix] || {})[unicode];
}
function $766f7e1ec7548f74$var$byLigature(prefix, ligature) {
    return ($766f7e1ec7548f74$var$_byLigature[prefix] || {})[ligature];
}
function $766f7e1ec7548f74$var$byAlias(prefix, alias) {
    return ($766f7e1ec7548f74$var$_byAlias[prefix] || {})[alias];
}
function $766f7e1ec7548f74$var$byOldName(name) {
    return $766f7e1ec7548f74$var$_byOldName[name] || {
        prefix: null,
        iconName: null
    };
}
function $766f7e1ec7548f74$var$byOldUnicode(unicode) {
    var oldUnicode = $766f7e1ec7548f74$var$_byOldUnicode[unicode];
    var newUnicode = $766f7e1ec7548f74$var$byUnicode("fas", unicode);
    return oldUnicode || (newUnicode ? {
        prefix: "fas",
        iconName: newUnicode
    } : null) || {
        prefix: null,
        iconName: null
    };
}
function $766f7e1ec7548f74$var$getDefaultUsablePrefix() {
    return $766f7e1ec7548f74$var$_defaultUsablePrefix;
}
var $766f7e1ec7548f74$var$emptyCanonicalIcon = function emptyCanonicalIcon() {
    return {
        prefix: null,
        iconName: null,
        rest: []
    };
};
function $766f7e1ec7548f74$var$getCanonicalPrefix(styleOrPrefix) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _params$family = params.family, family = _params$family === void 0 ? $766f7e1ec7548f74$var$FAMILY_CLASSIC : _params$family;
    var style = $766f7e1ec7548f74$var$PREFIX_TO_STYLE[family][styleOrPrefix];
    var prefix = $766f7e1ec7548f74$var$STYLE_TO_PREFIX[family][styleOrPrefix] || $766f7e1ec7548f74$var$STYLE_TO_PREFIX[family][style];
    var defined = styleOrPrefix in $766f7e1ec7548f74$var$namespace.styles ? styleOrPrefix : null;
    return prefix || defined || null;
}
var $766f7e1ec7548f74$var$PREFIXES_FOR_FAMILY = ($766f7e1ec7548f74$var$_PREFIXES_FOR_FAMILY = {}, $766f7e1ec7548f74$var$_defineProperty($766f7e1ec7548f74$var$_PREFIXES_FOR_FAMILY, $766f7e1ec7548f74$var$FAMILY_CLASSIC, Object.keys($766f7e1ec7548f74$var$PREFIX_TO_LONG_STYLE[$766f7e1ec7548f74$var$FAMILY_CLASSIC])), $766f7e1ec7548f74$var$_defineProperty($766f7e1ec7548f74$var$_PREFIXES_FOR_FAMILY, $766f7e1ec7548f74$var$FAMILY_SHARP, Object.keys($766f7e1ec7548f74$var$PREFIX_TO_LONG_STYLE[$766f7e1ec7548f74$var$FAMILY_SHARP])), $766f7e1ec7548f74$var$_PREFIXES_FOR_FAMILY);
function $766f7e1ec7548f74$var$getCanonicalIcon(values) {
    var _famProps;
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _params$skipLookups = params.skipLookups, skipLookups = _params$skipLookups === void 0 ? false : _params$skipLookups;
    var famProps = (_famProps = {}, $766f7e1ec7548f74$var$_defineProperty(_famProps, $766f7e1ec7548f74$var$FAMILY_CLASSIC, "".concat($766f7e1ec7548f74$var$config.cssPrefix, "-").concat($766f7e1ec7548f74$var$FAMILY_CLASSIC)), $766f7e1ec7548f74$var$_defineProperty(_famProps, $766f7e1ec7548f74$var$FAMILY_SHARP, "".concat($766f7e1ec7548f74$var$config.cssPrefix, "-").concat($766f7e1ec7548f74$var$FAMILY_SHARP)), _famProps);
    var givenPrefix = null;
    var family = $766f7e1ec7548f74$var$FAMILY_CLASSIC;
    if (values.includes(famProps[$766f7e1ec7548f74$var$FAMILY_CLASSIC]) || values.some(function(v) {
        return $766f7e1ec7548f74$var$PREFIXES_FOR_FAMILY[$766f7e1ec7548f74$var$FAMILY_CLASSIC].includes(v);
    })) family = $766f7e1ec7548f74$var$FAMILY_CLASSIC;
    if (values.includes(famProps[$766f7e1ec7548f74$var$FAMILY_SHARP]) || values.some(function(v) {
        return $766f7e1ec7548f74$var$PREFIXES_FOR_FAMILY[$766f7e1ec7548f74$var$FAMILY_SHARP].includes(v);
    })) family = $766f7e1ec7548f74$var$FAMILY_SHARP;
    var canonical = values.reduce(function(acc, cls) {
        var iconName = $766f7e1ec7548f74$var$getIconName($766f7e1ec7548f74$var$config.cssPrefix, cls);
        if ($766f7e1ec7548f74$var$styles[cls]) {
            cls = $766f7e1ec7548f74$var$LONG_STYLE[family].includes(cls) ? $766f7e1ec7548f74$var$LONG_STYLE_TO_PREFIX[family][cls] : cls;
            givenPrefix = cls;
            acc.prefix = cls;
        } else if ($766f7e1ec7548f74$var$PREFIXES[family].indexOf(cls) > -1) {
            givenPrefix = cls;
            acc.prefix = $766f7e1ec7548f74$var$getCanonicalPrefix(cls, {
                family: family
            });
        } else if (iconName) acc.iconName = iconName;
        else if (cls !== $766f7e1ec7548f74$var$config.replacementClass && cls !== famProps[$766f7e1ec7548f74$var$FAMILY_CLASSIC] && cls !== famProps[$766f7e1ec7548f74$var$FAMILY_SHARP]) acc.rest.push(cls);
        if (!skipLookups && acc.prefix && acc.iconName) {
            var shim = givenPrefix === "fa" ? $766f7e1ec7548f74$var$byOldName(acc.iconName) : {};
            var aliasIconName = $766f7e1ec7548f74$var$byAlias(acc.prefix, acc.iconName);
            if (shim.prefix) givenPrefix = null;
            acc.iconName = shim.iconName || aliasIconName || acc.iconName;
            acc.prefix = shim.prefix || acc.prefix;
            if (acc.prefix === "far" && !$766f7e1ec7548f74$var$styles["far"] && $766f7e1ec7548f74$var$styles["fas"] && !$766f7e1ec7548f74$var$config.autoFetchSvg) // Allow a fallback from the regular style to solid if regular is not available
            // but only if we aren't auto-fetching SVGs
            acc.prefix = "fas";
        }
        return acc;
    }, $766f7e1ec7548f74$var$emptyCanonicalIcon());
    if (values.includes("fa-brands") || values.includes("fab")) canonical.prefix = "fab";
    if (values.includes("fa-duotone") || values.includes("fad")) canonical.prefix = "fad";
    if (!canonical.prefix && family === $766f7e1ec7548f74$var$FAMILY_SHARP && ($766f7e1ec7548f74$var$styles["fass"] || $766f7e1ec7548f74$var$config.autoFetchSvg)) {
        canonical.prefix = "fass";
        canonical.iconName = $766f7e1ec7548f74$var$byAlias(canonical.prefix, canonical.iconName) || canonical.iconName;
    }
    if (canonical.prefix === "fa" || givenPrefix === "fa") // The fa prefix is not canonical. So if it has made it through until this point
    // we will shift it to the correct prefix.
    canonical.prefix = $766f7e1ec7548f74$var$getDefaultUsablePrefix() || "fas";
    return canonical;
}
var $766f7e1ec7548f74$var$Library = /*#__PURE__*/ function() {
    function Library() {
        $766f7e1ec7548f74$var$_classCallCheck(this, Library);
        this.definitions = {};
    }
    $766f7e1ec7548f74$var$_createClass(Library, [
        {
            key: "add",
            value: function add() {
                var _this = this;
                for(var _len = arguments.length, definitions = new Array(_len), _key = 0; _key < _len; _key++)definitions[_key] = arguments[_key];
                var additions = definitions.reduce(this._pullDefinitions, {});
                Object.keys(additions).forEach(function(key) {
                    _this.definitions[key] = $766f7e1ec7548f74$var$_objectSpread2($766f7e1ec7548f74$var$_objectSpread2({}, _this.definitions[key] || {}), additions[key]);
                    $766f7e1ec7548f74$var$defineIcons(key, additions[key]); // TODO can we stop doing this? We can't get the icons by 'fa-solid' any longer so this probably needs to change
                    var longPrefix = $766f7e1ec7548f74$var$PREFIX_TO_LONG_STYLE[$766f7e1ec7548f74$var$FAMILY_CLASSIC][key];
                    if (longPrefix) $766f7e1ec7548f74$var$defineIcons(longPrefix, additions[key]);
                    $766f7e1ec7548f74$var$build();
                });
            }
        },
        {
            key: "reset",
            value: function reset() {
                this.definitions = {};
            }
        },
        {
            key: "_pullDefinitions",
            value: function _pullDefinitions(additions, definition) {
                var normalized = definition.prefix && definition.iconName && definition.icon ? {
                    0: definition
                } : definition;
                Object.keys(normalized).map(function(key) {
                    var _normalized$key = normalized[key], prefix = _normalized$key.prefix, iconName = _normalized$key.iconName, icon = _normalized$key.icon;
                    var aliases = icon[2];
                    if (!additions[prefix]) additions[prefix] = {};
                    if (aliases.length > 0) aliases.forEach(function(alias) {
                        if (typeof alias === "string") additions[prefix][alias] = icon;
                    });
                    additions[prefix][iconName] = icon;
                });
                return additions;
            }
        }
    ]);
    return Library;
}();
var $766f7e1ec7548f74$var$_plugins = [];
var $766f7e1ec7548f74$var$_hooks = {};
var $766f7e1ec7548f74$var$providers = {};
var $766f7e1ec7548f74$var$defaultProviderKeys = Object.keys($766f7e1ec7548f74$var$providers);
function $766f7e1ec7548f74$var$registerPlugins(nextPlugins, _ref) {
    var obj = _ref.mixoutsTo;
    $766f7e1ec7548f74$var$_plugins = nextPlugins;
    $766f7e1ec7548f74$var$_hooks = {};
    Object.keys($766f7e1ec7548f74$var$providers).forEach(function(k) {
        if ($766f7e1ec7548f74$var$defaultProviderKeys.indexOf(k) === -1) delete $766f7e1ec7548f74$var$providers[k];
    });
    $766f7e1ec7548f74$var$_plugins.forEach(function(plugin) {
        var mixout = plugin.mixout ? plugin.mixout() : {};
        Object.keys(mixout).forEach(function(tk) {
            if (typeof mixout[tk] === "function") obj[tk] = mixout[tk];
            if ($766f7e1ec7548f74$var$_typeof(mixout[tk]) === "object") Object.keys(mixout[tk]).forEach(function(sk) {
                if (!obj[tk]) obj[tk] = {};
                obj[tk][sk] = mixout[tk][sk];
            });
        });
        if (plugin.hooks) {
            var hooks = plugin.hooks();
            Object.keys(hooks).forEach(function(hook) {
                if (!$766f7e1ec7548f74$var$_hooks[hook]) $766f7e1ec7548f74$var$_hooks[hook] = [];
                $766f7e1ec7548f74$var$_hooks[hook].push(hooks[hook]);
            });
        }
        if (plugin.provides) plugin.provides($766f7e1ec7548f74$var$providers);
    });
    return obj;
}
function $766f7e1ec7548f74$var$chainHooks(hook, accumulator) {
    for(var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++)args[_key - 2] = arguments[_key];
    var hookFns = $766f7e1ec7548f74$var$_hooks[hook] || [];
    hookFns.forEach(function(hookFn) {
        accumulator = hookFn.apply(null, [
            accumulator
        ].concat(args)); // eslint-disable-line no-useless-call
    });
    return accumulator;
}
function $766f7e1ec7548f74$var$callHooks(hook) {
    for(var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++)args[_key2 - 1] = arguments[_key2];
    var hookFns = $766f7e1ec7548f74$var$_hooks[hook] || [];
    hookFns.forEach(function(hookFn) {
        hookFn.apply(null, args);
    });
    return undefined;
}
function $766f7e1ec7548f74$var$callProvided() {
    var hook = arguments[0];
    var args = Array.prototype.slice.call(arguments, 1);
    return $766f7e1ec7548f74$var$providers[hook] ? $766f7e1ec7548f74$var$providers[hook].apply(null, args) : undefined;
}
function $766f7e1ec7548f74$var$findIconDefinition(iconLookup) {
    if (iconLookup.prefix === "fa") iconLookup.prefix = "fas";
    var iconName = iconLookup.iconName;
    var prefix = iconLookup.prefix || $766f7e1ec7548f74$var$getDefaultUsablePrefix();
    if (!iconName) return;
    iconName = $766f7e1ec7548f74$var$byAlias(prefix, iconName) || iconName;
    return $766f7e1ec7548f74$var$iconFromMapping($766f7e1ec7548f74$var$library.definitions, prefix, iconName) || $766f7e1ec7548f74$var$iconFromMapping($766f7e1ec7548f74$var$namespace.styles, prefix, iconName);
}
var $766f7e1ec7548f74$var$library = new $766f7e1ec7548f74$var$Library();
var $766f7e1ec7548f74$var$noAuto = function noAuto() {
    $766f7e1ec7548f74$var$config.autoReplaceSvg = false;
    $766f7e1ec7548f74$var$config.observeMutations = false;
    $766f7e1ec7548f74$var$callHooks("noAuto");
};
var $766f7e1ec7548f74$var$dom = {
    i2svg: function i2svg() {
        var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        if ($766f7e1ec7548f74$var$IS_DOM) {
            $766f7e1ec7548f74$var$callHooks("beforeI2svg", params);
            $766f7e1ec7548f74$var$callProvided("pseudoElements2svg", params);
            return $766f7e1ec7548f74$var$callProvided("i2svg", params);
        } else return Promise.reject("Operation requires a DOM of some kind.");
    },
    watch: function watch() {
        var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var autoReplaceSvgRoot = params.autoReplaceSvgRoot;
        if ($766f7e1ec7548f74$var$config.autoReplaceSvg === false) $766f7e1ec7548f74$var$config.autoReplaceSvg = true;
        $766f7e1ec7548f74$var$config.observeMutations = true;
        $766f7e1ec7548f74$var$domready(function() {
            $766f7e1ec7548f74$var$autoReplace({
                autoReplaceSvgRoot: autoReplaceSvgRoot
            });
            $766f7e1ec7548f74$var$callHooks("watch", params);
        });
    }
};
var $766f7e1ec7548f74$var$parse = {
    icon: function icon(_icon) {
        if (_icon === null) return null;
        if ($766f7e1ec7548f74$var$_typeof(_icon) === "object" && _icon.prefix && _icon.iconName) return {
            prefix: _icon.prefix,
            iconName: $766f7e1ec7548f74$var$byAlias(_icon.prefix, _icon.iconName) || _icon.iconName
        };
        if (Array.isArray(_icon) && _icon.length === 2) {
            var iconName = _icon[1].indexOf("fa-") === 0 ? _icon[1].slice(3) : _icon[1];
            var prefix = $766f7e1ec7548f74$var$getCanonicalPrefix(_icon[0]);
            return {
                prefix: prefix,
                iconName: $766f7e1ec7548f74$var$byAlias(prefix, iconName) || iconName
            };
        }
        if (typeof _icon === "string" && (_icon.indexOf("".concat($766f7e1ec7548f74$var$config.cssPrefix, "-")) > -1 || _icon.match($766f7e1ec7548f74$var$ICON_SELECTION_SYNTAX_PATTERN))) {
            var canonicalIcon = $766f7e1ec7548f74$var$getCanonicalIcon(_icon.split(" "), {
                skipLookups: true
            });
            return {
                prefix: canonicalIcon.prefix || $766f7e1ec7548f74$var$getDefaultUsablePrefix(),
                iconName: $766f7e1ec7548f74$var$byAlias(canonicalIcon.prefix, canonicalIcon.iconName) || canonicalIcon.iconName
            };
        }
        if (typeof _icon === "string") {
            var _prefix = $766f7e1ec7548f74$var$getDefaultUsablePrefix();
            return {
                prefix: _prefix,
                iconName: $766f7e1ec7548f74$var$byAlias(_prefix, _icon) || _icon
            };
        }
    }
};
var $766f7e1ec7548f74$export$644d8ea042df96a6 = {
    noAuto: $766f7e1ec7548f74$var$noAuto,
    config: $766f7e1ec7548f74$var$config,
    dom: $766f7e1ec7548f74$var$dom,
    parse: $766f7e1ec7548f74$var$parse,
    library: $766f7e1ec7548f74$var$library,
    findIconDefinition: $766f7e1ec7548f74$var$findIconDefinition,
    toHtml: $766f7e1ec7548f74$var$toHtml
};
var $766f7e1ec7548f74$var$autoReplace = function autoReplace() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var _params$autoReplaceSv = params.autoReplaceSvgRoot, autoReplaceSvgRoot = _params$autoReplaceSv === void 0 ? $766f7e1ec7548f74$var$DOCUMENT : _params$autoReplaceSv;
    if ((Object.keys($766f7e1ec7548f74$var$namespace.styles).length > 0 || $766f7e1ec7548f74$var$config.autoFetchSvg) && $766f7e1ec7548f74$var$IS_DOM && $766f7e1ec7548f74$var$config.autoReplaceSvg) $766f7e1ec7548f74$export$644d8ea042df96a6.dom.i2svg({
        node: autoReplaceSvgRoot
    });
};
function $766f7e1ec7548f74$var$domVariants(val, abstractCreator) {
    Object.defineProperty(val, "abstract", {
        get: abstractCreator
    });
    Object.defineProperty(val, "html", {
        get: function get() {
            return val.abstract.map(function(a) {
                return $766f7e1ec7548f74$var$toHtml(a);
            });
        }
    });
    Object.defineProperty(val, "node", {
        get: function get() {
            if (!$766f7e1ec7548f74$var$IS_DOM) return;
            var container = $766f7e1ec7548f74$var$DOCUMENT.createElement("div");
            container.innerHTML = val.html;
            return container.children;
        }
    });
    return val;
}
function $766f7e1ec7548f74$var$asIcon(_ref) {
    var children = _ref.children, main = _ref.main, mask = _ref.mask, attributes = _ref.attributes, styles = _ref.styles, transform = _ref.transform;
    if ($766f7e1ec7548f74$var$transformIsMeaningful(transform) && main.found && !mask.found) {
        var width = main.width, height = main.height;
        var offset = {
            x: width / height / 2,
            y: 0.5
        };
        attributes["style"] = $766f7e1ec7548f74$var$joinStyles($766f7e1ec7548f74$var$_objectSpread2($766f7e1ec7548f74$var$_objectSpread2({}, styles), {}, {
            "transform-origin": "".concat(offset.x + transform.x / 16, "em ").concat(offset.y + transform.y / 16, "em")
        }));
    }
    return [
        {
            tag: "svg",
            attributes: attributes,
            children: children
        }
    ];
}
function $766f7e1ec7548f74$var$asSymbol(_ref) {
    var prefix = _ref.prefix, iconName = _ref.iconName, children = _ref.children, attributes = _ref.attributes, symbol = _ref.symbol;
    var id = symbol === true ? "".concat(prefix, "-").concat($766f7e1ec7548f74$var$config.cssPrefix, "-").concat(iconName) : symbol;
    return [
        {
            tag: "svg",
            attributes: {
                style: "display: none;"
            },
            children: [
                {
                    tag: "symbol",
                    attributes: $766f7e1ec7548f74$var$_objectSpread2($766f7e1ec7548f74$var$_objectSpread2({}, attributes), {}, {
                        id: id
                    }),
                    children: children
                }
            ]
        }
    ];
}
function $766f7e1ec7548f74$var$makeInlineSvgAbstract(params) {
    var _params$icons = params.icons, main = _params$icons.main, mask = _params$icons.mask, prefix = params.prefix, iconName = params.iconName, transform = params.transform, symbol = params.symbol, title = params.title, maskId = params.maskId, titleId = params.titleId, extra = params.extra, _params$watchable = params.watchable, watchable = _params$watchable === void 0 ? false : _params$watchable;
    var _ref = mask.found ? mask : main, width = _ref.width, height = _ref.height;
    var isUploadedIcon = prefix === "fak";
    var attrClass = [
        $766f7e1ec7548f74$var$config.replacementClass,
        iconName ? "".concat($766f7e1ec7548f74$var$config.cssPrefix, "-").concat(iconName) : ""
    ].filter(function(c) {
        return extra.classes.indexOf(c) === -1;
    }).filter(function(c) {
        return c !== "" || !!c;
    }).concat(extra.classes).join(" ");
    var content = {
        children: [],
        attributes: $766f7e1ec7548f74$var$_objectSpread2($766f7e1ec7548f74$var$_objectSpread2({}, extra.attributes), {}, {
            "data-prefix": prefix,
            "data-icon": iconName,
            "class": attrClass,
            "role": extra.attributes.role || "img",
            "xmlns": "http://www.w3.org/2000/svg",
            "viewBox": "0 0 ".concat(width, " ").concat(height)
        })
    };
    var uploadedIconWidthStyle = isUploadedIcon && !~extra.classes.indexOf("fa-fw") ? {
        width: "".concat(width / height * 1, "em")
    } : {};
    if (watchable) content.attributes[$766f7e1ec7548f74$var$DATA_FA_I2SVG] = "";
    if (title) {
        content.children.push({
            tag: "title",
            attributes: {
                id: content.attributes["aria-labelledby"] || "title-".concat(titleId || $766f7e1ec7548f74$var$nextUniqueId())
            },
            children: [
                title
            ]
        });
        delete content.attributes.title;
    }
    var args = $766f7e1ec7548f74$var$_objectSpread2($766f7e1ec7548f74$var$_objectSpread2({}, content), {}, {
        prefix: prefix,
        iconName: iconName,
        main: main,
        mask: mask,
        maskId: maskId,
        transform: transform,
        symbol: symbol,
        styles: $766f7e1ec7548f74$var$_objectSpread2($766f7e1ec7548f74$var$_objectSpread2({}, uploadedIconWidthStyle), extra.styles)
    });
    var _ref2 = mask.found && main.found ? $766f7e1ec7548f74$var$callProvided("generateAbstractMask", args) || {
        children: [],
        attributes: {}
    } : $766f7e1ec7548f74$var$callProvided("generateAbstractIcon", args) || {
        children: [],
        attributes: {}
    }, children = _ref2.children, attributes = _ref2.attributes;
    args.children = children;
    args.attributes = attributes;
    if (symbol) return $766f7e1ec7548f74$var$asSymbol(args);
    else return $766f7e1ec7548f74$var$asIcon(args);
}
function $766f7e1ec7548f74$var$makeLayersTextAbstract(params) {
    var content = params.content, width = params.width, height = params.height, transform = params.transform, title = params.title, extra = params.extra, _params$watchable2 = params.watchable, watchable = _params$watchable2 === void 0 ? false : _params$watchable2;
    var attributes = $766f7e1ec7548f74$var$_objectSpread2($766f7e1ec7548f74$var$_objectSpread2($766f7e1ec7548f74$var$_objectSpread2({}, extra.attributes), title ? {
        "title": title
    } : {}), {}, {
        "class": extra.classes.join(" ")
    });
    if (watchable) attributes[$766f7e1ec7548f74$var$DATA_FA_I2SVG] = "";
    var styles = $766f7e1ec7548f74$var$_objectSpread2({}, extra.styles);
    if ($766f7e1ec7548f74$var$transformIsMeaningful(transform)) {
        styles["transform"] = $766f7e1ec7548f74$var$transformForCss({
            transform: transform,
            startCentered: true,
            width: width,
            height: height
        });
        styles["-webkit-transform"] = styles["transform"];
    }
    var styleString = $766f7e1ec7548f74$var$joinStyles(styles);
    if (styleString.length > 0) attributes["style"] = styleString;
    var val = [];
    val.push({
        tag: "span",
        attributes: attributes,
        children: [
            content
        ]
    });
    if (title) val.push({
        tag: "span",
        attributes: {
            class: "sr-only"
        },
        children: [
            title
        ]
    });
    return val;
}
function $766f7e1ec7548f74$var$makeLayersCounterAbstract(params) {
    var content = params.content, title = params.title, extra = params.extra;
    var attributes = $766f7e1ec7548f74$var$_objectSpread2($766f7e1ec7548f74$var$_objectSpread2($766f7e1ec7548f74$var$_objectSpread2({}, extra.attributes), title ? {
        "title": title
    } : {}), {}, {
        "class": extra.classes.join(" ")
    });
    var styleString = $766f7e1ec7548f74$var$joinStyles(extra.styles);
    if (styleString.length > 0) attributes["style"] = styleString;
    var val = [];
    val.push({
        tag: "span",
        attributes: attributes,
        children: [
            content
        ]
    });
    if (title) val.push({
        tag: "span",
        attributes: {
            class: "sr-only"
        },
        children: [
            title
        ]
    });
    return val;
}
var $766f7e1ec7548f74$var$styles$1 = $766f7e1ec7548f74$var$namespace.styles;
function $766f7e1ec7548f74$var$asFoundIcon(icon) {
    var width = icon[0];
    var height = icon[1];
    var _icon$slice = icon.slice(4), _icon$slice2 = $766f7e1ec7548f74$var$_slicedToArray(_icon$slice, 1), vectorData = _icon$slice2[0];
    var element = null;
    if (Array.isArray(vectorData)) element = {
        tag: "g",
        attributes: {
            class: "".concat($766f7e1ec7548f74$var$config.cssPrefix, "-").concat($766f7e1ec7548f74$var$DUOTONE_CLASSES.GROUP)
        },
        children: [
            {
                tag: "path",
                attributes: {
                    class: "".concat($766f7e1ec7548f74$var$config.cssPrefix, "-").concat($766f7e1ec7548f74$var$DUOTONE_CLASSES.SECONDARY),
                    fill: "currentColor",
                    d: vectorData[0]
                }
            },
            {
                tag: "path",
                attributes: {
                    class: "".concat($766f7e1ec7548f74$var$config.cssPrefix, "-").concat($766f7e1ec7548f74$var$DUOTONE_CLASSES.PRIMARY),
                    fill: "currentColor",
                    d: vectorData[1]
                }
            }
        ]
    };
    else element = {
        tag: "path",
        attributes: {
            fill: "currentColor",
            d: vectorData
        }
    };
    return {
        found: true,
        width: width,
        height: height,
        icon: element
    };
}
var $766f7e1ec7548f74$var$missingIconResolutionMixin = {
    found: false,
    width: 512,
    height: 512
};
function $766f7e1ec7548f74$var$maybeNotifyMissing(iconName, prefix) {
    if (!$766f7e1ec7548f74$var$PRODUCTION && !$766f7e1ec7548f74$var$config.showMissingIcons && iconName) console.error('Icon with name "'.concat(iconName, '" and prefix "').concat(prefix, '" is missing.'));
}
function $766f7e1ec7548f74$var$findIcon(iconName, prefix) {
    var givenPrefix = prefix;
    if (prefix === "fa" && $766f7e1ec7548f74$var$config.styleDefault !== null) prefix = $766f7e1ec7548f74$var$getDefaultUsablePrefix();
    return new Promise(function(resolve, reject) {
        var val = {
            found: false,
            width: 512,
            height: 512,
            icon: $766f7e1ec7548f74$var$callProvided("missingIconAbstract") || {}
        };
        if (givenPrefix === "fa") {
            var shim = $766f7e1ec7548f74$var$byOldName(iconName) || {};
            iconName = shim.iconName || iconName;
            prefix = shim.prefix || prefix;
        }
        if (iconName && prefix && $766f7e1ec7548f74$var$styles$1[prefix] && $766f7e1ec7548f74$var$styles$1[prefix][iconName]) {
            var icon = $766f7e1ec7548f74$var$styles$1[prefix][iconName];
            return resolve($766f7e1ec7548f74$var$asFoundIcon(icon));
        }
        $766f7e1ec7548f74$var$maybeNotifyMissing(iconName, prefix);
        resolve($766f7e1ec7548f74$var$_objectSpread2($766f7e1ec7548f74$var$_objectSpread2({}, $766f7e1ec7548f74$var$missingIconResolutionMixin), {}, {
            icon: $766f7e1ec7548f74$var$config.showMissingIcons && iconName ? $766f7e1ec7548f74$var$callProvided("missingIconAbstract") || {} : {}
        }));
    });
}
var $766f7e1ec7548f74$var$noop$1 = function noop() {};
var $766f7e1ec7548f74$var$p = $766f7e1ec7548f74$var$config.measurePerformance && $766f7e1ec7548f74$var$PERFORMANCE && $766f7e1ec7548f74$var$PERFORMANCE.mark && $766f7e1ec7548f74$var$PERFORMANCE.measure ? $766f7e1ec7548f74$var$PERFORMANCE : {
    mark: $766f7e1ec7548f74$var$noop$1,
    measure: $766f7e1ec7548f74$var$noop$1
};
var $766f7e1ec7548f74$var$preamble = 'FA "6.5.1"';
var $766f7e1ec7548f74$var$begin = function begin(name) {
    $766f7e1ec7548f74$var$p.mark("".concat($766f7e1ec7548f74$var$preamble, " ").concat(name, " begins"));
    return function() {
        return $766f7e1ec7548f74$var$end(name);
    };
};
var $766f7e1ec7548f74$var$end = function end(name) {
    $766f7e1ec7548f74$var$p.mark("".concat($766f7e1ec7548f74$var$preamble, " ").concat(name, " ends"));
    $766f7e1ec7548f74$var$p.measure("".concat($766f7e1ec7548f74$var$preamble, " ").concat(name), "".concat($766f7e1ec7548f74$var$preamble, " ").concat(name, " begins"), "".concat($766f7e1ec7548f74$var$preamble, " ").concat(name, " ends"));
};
var $766f7e1ec7548f74$var$perf = {
    begin: $766f7e1ec7548f74$var$begin,
    end: $766f7e1ec7548f74$var$end
};
var $766f7e1ec7548f74$var$noop$2 = function noop() {};
function $766f7e1ec7548f74$var$isWatched(node) {
    var i2svg = node.getAttribute ? node.getAttribute($766f7e1ec7548f74$var$DATA_FA_I2SVG) : null;
    return typeof i2svg === "string";
}
function $766f7e1ec7548f74$var$hasPrefixAndIcon(node) {
    var prefix = node.getAttribute ? node.getAttribute($766f7e1ec7548f74$var$DATA_PREFIX) : null;
    var icon = node.getAttribute ? node.getAttribute($766f7e1ec7548f74$var$DATA_ICON) : null;
    return prefix && icon;
}
function $766f7e1ec7548f74$var$hasBeenReplaced(node) {
    return node && node.classList && node.classList.contains && node.classList.contains($766f7e1ec7548f74$var$config.replacementClass);
}
function $766f7e1ec7548f74$var$getMutator() {
    if ($766f7e1ec7548f74$var$config.autoReplaceSvg === true) return $766f7e1ec7548f74$var$mutators.replace;
    var mutator = $766f7e1ec7548f74$var$mutators[$766f7e1ec7548f74$var$config.autoReplaceSvg];
    return mutator || $766f7e1ec7548f74$var$mutators.replace;
}
function $766f7e1ec7548f74$var$createElementNS(tag) {
    return $766f7e1ec7548f74$var$DOCUMENT.createElementNS("http://www.w3.org/2000/svg", tag);
}
function $766f7e1ec7548f74$var$createElement(tag) {
    return $766f7e1ec7548f74$var$DOCUMENT.createElement(tag);
}
function $766f7e1ec7548f74$var$convertSVG(abstractObj) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _params$ceFn = params.ceFn, ceFn = _params$ceFn === void 0 ? abstractObj.tag === "svg" ? $766f7e1ec7548f74$var$createElementNS : $766f7e1ec7548f74$var$createElement : _params$ceFn;
    if (typeof abstractObj === "string") return $766f7e1ec7548f74$var$DOCUMENT.createTextNode(abstractObj);
    var tag = ceFn(abstractObj.tag);
    Object.keys(abstractObj.attributes || []).forEach(function(key) {
        tag.setAttribute(key, abstractObj.attributes[key]);
    });
    var children = abstractObj.children || [];
    children.forEach(function(child) {
        tag.appendChild($766f7e1ec7548f74$var$convertSVG(child, {
            ceFn: ceFn
        }));
    });
    return tag;
}
function $766f7e1ec7548f74$var$nodeAsComment(node) {
    var comment = " ".concat(node.outerHTML, " ");
    /* BEGIN.ATTRIBUTION */ comment = "".concat(comment, "Font Awesome fontawesome.com ");
    /* END.ATTRIBUTION */ return comment;
}
var $766f7e1ec7548f74$var$mutators = {
    replace: function replace(mutation) {
        var node = mutation[0];
        if (node.parentNode) {
            mutation[1].forEach(function(_abstract) {
                node.parentNode.insertBefore($766f7e1ec7548f74$var$convertSVG(_abstract), node);
            });
            if (node.getAttribute($766f7e1ec7548f74$var$DATA_FA_I2SVG) === null && $766f7e1ec7548f74$var$config.keepOriginalSource) {
                var comment = $766f7e1ec7548f74$var$DOCUMENT.createComment($766f7e1ec7548f74$var$nodeAsComment(node));
                node.parentNode.replaceChild(comment, node);
            } else node.remove();
        }
    },
    nest: function nest(mutation) {
        var node = mutation[0];
        var _abstract2 = mutation[1]; // If we already have a replaced node we do not want to continue nesting within it.
        // Short-circuit to the standard replacement
        if (~$766f7e1ec7548f74$var$classArray(node).indexOf($766f7e1ec7548f74$var$config.replacementClass)) return $766f7e1ec7548f74$var$mutators.replace(mutation);
        var forSvg = new RegExp("".concat($766f7e1ec7548f74$var$config.cssPrefix, "-.*"));
        delete _abstract2[0].attributes.id;
        if (_abstract2[0].attributes.class) {
            var splitClasses = _abstract2[0].attributes.class.split(" ").reduce(function(acc, cls) {
                if (cls === $766f7e1ec7548f74$var$config.replacementClass || cls.match(forSvg)) acc.toSvg.push(cls);
                else acc.toNode.push(cls);
                return acc;
            }, {
                toNode: [],
                toSvg: []
            });
            _abstract2[0].attributes.class = splitClasses.toSvg.join(" ");
            if (splitClasses.toNode.length === 0) node.removeAttribute("class");
            else node.setAttribute("class", splitClasses.toNode.join(" "));
        }
        var newInnerHTML = _abstract2.map(function(a) {
            return $766f7e1ec7548f74$var$toHtml(a);
        }).join("\n");
        node.setAttribute($766f7e1ec7548f74$var$DATA_FA_I2SVG, "");
        node.innerHTML = newInnerHTML;
    }
};
function $766f7e1ec7548f74$var$performOperationSync(op) {
    op();
}
function $766f7e1ec7548f74$var$perform(mutations, callback) {
    var callbackFunction = typeof callback === "function" ? callback : $766f7e1ec7548f74$var$noop$2;
    if (mutations.length === 0) callbackFunction();
    else {
        var frame = $766f7e1ec7548f74$var$performOperationSync;
        if ($766f7e1ec7548f74$var$config.mutateApproach === $766f7e1ec7548f74$var$MUTATION_APPROACH_ASYNC) frame = $766f7e1ec7548f74$var$WINDOW.requestAnimationFrame || $766f7e1ec7548f74$var$performOperationSync;
        frame(function() {
            var mutator = $766f7e1ec7548f74$var$getMutator();
            var mark = $766f7e1ec7548f74$var$perf.begin("mutate");
            mutations.map(mutator);
            mark();
            callbackFunction();
        });
    }
}
var $766f7e1ec7548f74$var$disabled = false;
function $766f7e1ec7548f74$var$disableObservation() {
    $766f7e1ec7548f74$var$disabled = true;
}
function $766f7e1ec7548f74$var$enableObservation() {
    $766f7e1ec7548f74$var$disabled = false;
}
var $766f7e1ec7548f74$var$mo = null;
function $766f7e1ec7548f74$var$observe(options) {
    if (!$766f7e1ec7548f74$var$MUTATION_OBSERVER) return;
    if (!$766f7e1ec7548f74$var$config.observeMutations) return;
    var _options$treeCallback = options.treeCallback, treeCallback = _options$treeCallback === void 0 ? $766f7e1ec7548f74$var$noop$2 : _options$treeCallback, _options$nodeCallback = options.nodeCallback, nodeCallback = _options$nodeCallback === void 0 ? $766f7e1ec7548f74$var$noop$2 : _options$nodeCallback, _options$pseudoElemen = options.pseudoElementsCallback, pseudoElementsCallback = _options$pseudoElemen === void 0 ? $766f7e1ec7548f74$var$noop$2 : _options$pseudoElemen, _options$observeMutat = options.observeMutationsRoot, observeMutationsRoot = _options$observeMutat === void 0 ? $766f7e1ec7548f74$var$DOCUMENT : _options$observeMutat;
    $766f7e1ec7548f74$var$mo = new $766f7e1ec7548f74$var$MUTATION_OBSERVER(function(objects) {
        if ($766f7e1ec7548f74$var$disabled) return;
        var defaultPrefix = $766f7e1ec7548f74$var$getDefaultUsablePrefix();
        $766f7e1ec7548f74$var$toArray(objects).forEach(function(mutationRecord) {
            if (mutationRecord.type === "childList" && mutationRecord.addedNodes.length > 0 && !$766f7e1ec7548f74$var$isWatched(mutationRecord.addedNodes[0])) {
                if ($766f7e1ec7548f74$var$config.searchPseudoElements) pseudoElementsCallback(mutationRecord.target);
                treeCallback(mutationRecord.target);
            }
            if (mutationRecord.type === "attributes" && mutationRecord.target.parentNode && $766f7e1ec7548f74$var$config.searchPseudoElements) pseudoElementsCallback(mutationRecord.target.parentNode);
            if (mutationRecord.type === "attributes" && $766f7e1ec7548f74$var$isWatched(mutationRecord.target) && ~$766f7e1ec7548f74$var$ATTRIBUTES_WATCHED_FOR_MUTATION.indexOf(mutationRecord.attributeName)) {
                if (mutationRecord.attributeName === "class" && $766f7e1ec7548f74$var$hasPrefixAndIcon(mutationRecord.target)) {
                    var _getCanonicalIcon = $766f7e1ec7548f74$var$getCanonicalIcon($766f7e1ec7548f74$var$classArray(mutationRecord.target)), prefix = _getCanonicalIcon.prefix, iconName = _getCanonicalIcon.iconName;
                    mutationRecord.target.setAttribute($766f7e1ec7548f74$var$DATA_PREFIX, prefix || defaultPrefix);
                    if (iconName) mutationRecord.target.setAttribute($766f7e1ec7548f74$var$DATA_ICON, iconName);
                } else if ($766f7e1ec7548f74$var$hasBeenReplaced(mutationRecord.target)) nodeCallback(mutationRecord.target);
            }
        });
    });
    if (!$766f7e1ec7548f74$var$IS_DOM) return;
    $766f7e1ec7548f74$var$mo.observe(observeMutationsRoot, {
        childList: true,
        attributes: true,
        characterData: true,
        subtree: true
    });
}
function $766f7e1ec7548f74$var$disconnect() {
    if (!$766f7e1ec7548f74$var$mo) return;
    $766f7e1ec7548f74$var$mo.disconnect();
}
function $766f7e1ec7548f74$var$styleParser(node) {
    var style = node.getAttribute("style");
    var val = [];
    if (style) val = style.split(";").reduce(function(acc, style) {
        var styles = style.split(":");
        var prop = styles[0];
        var value = styles.slice(1);
        if (prop && value.length > 0) acc[prop] = value.join(":").trim();
        return acc;
    }, {});
    return val;
}
function $766f7e1ec7548f74$var$classParser(node) {
    var existingPrefix = node.getAttribute("data-prefix");
    var existingIconName = node.getAttribute("data-icon");
    var innerText = node.innerText !== undefined ? node.innerText.trim() : "";
    var val = $766f7e1ec7548f74$var$getCanonicalIcon($766f7e1ec7548f74$var$classArray(node));
    if (!val.prefix) val.prefix = $766f7e1ec7548f74$var$getDefaultUsablePrefix();
    if (existingPrefix && existingIconName) {
        val.prefix = existingPrefix;
        val.iconName = existingIconName;
    }
    if (val.iconName && val.prefix) return val;
    if (val.prefix && innerText.length > 0) val.iconName = $766f7e1ec7548f74$var$byLigature(val.prefix, node.innerText) || $766f7e1ec7548f74$var$byUnicode(val.prefix, $766f7e1ec7548f74$var$toHex(node.innerText));
    if (!val.iconName && $766f7e1ec7548f74$var$config.autoFetchSvg && node.firstChild && node.firstChild.nodeType === Node.TEXT_NODE) val.iconName = node.firstChild.data;
    return val;
}
function $766f7e1ec7548f74$var$attributesParser(node) {
    var extraAttributes = $766f7e1ec7548f74$var$toArray(node.attributes).reduce(function(acc, attr) {
        if (acc.name !== "class" && acc.name !== "style") acc[attr.name] = attr.value;
        return acc;
    }, {});
    var title = node.getAttribute("title");
    var titleId = node.getAttribute("data-fa-title-id");
    if ($766f7e1ec7548f74$var$config.autoA11y) {
        if (title) extraAttributes["aria-labelledby"] = "".concat($766f7e1ec7548f74$var$config.replacementClass, "-title-").concat(titleId || $766f7e1ec7548f74$var$nextUniqueId());
        else {
            extraAttributes["aria-hidden"] = "true";
            extraAttributes["focusable"] = "false";
        }
    }
    return extraAttributes;
}
function $766f7e1ec7548f74$var$blankMeta() {
    return {
        iconName: null,
        title: null,
        titleId: null,
        prefix: null,
        transform: $766f7e1ec7548f74$var$meaninglessTransform,
        symbol: false,
        mask: {
            iconName: null,
            prefix: null,
            rest: []
        },
        maskId: null,
        extra: {
            classes: [],
            styles: {},
            attributes: {}
        }
    };
}
function $766f7e1ec7548f74$var$parseMeta(node) {
    var parser = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        styleParser: true
    };
    var _classParser = $766f7e1ec7548f74$var$classParser(node), iconName = _classParser.iconName, prefix = _classParser.prefix, extraClasses = _classParser.rest;
    var extraAttributes = $766f7e1ec7548f74$var$attributesParser(node);
    var pluginMeta = $766f7e1ec7548f74$var$chainHooks("parseNodeAttributes", {}, node);
    var extraStyles = parser.styleParser ? $766f7e1ec7548f74$var$styleParser(node) : [];
    return $766f7e1ec7548f74$var$_objectSpread2({
        iconName: iconName,
        title: node.getAttribute("title"),
        titleId: node.getAttribute("data-fa-title-id"),
        prefix: prefix,
        transform: $766f7e1ec7548f74$var$meaninglessTransform,
        mask: {
            iconName: null,
            prefix: null,
            rest: []
        },
        maskId: null,
        symbol: false,
        extra: {
            classes: extraClasses,
            styles: extraStyles,
            attributes: extraAttributes
        }
    }, pluginMeta);
}
var $766f7e1ec7548f74$var$styles$2 = $766f7e1ec7548f74$var$namespace.styles;
function $766f7e1ec7548f74$var$generateMutation(node) {
    var nodeMeta = $766f7e1ec7548f74$var$config.autoReplaceSvg === "nest" ? $766f7e1ec7548f74$var$parseMeta(node, {
        styleParser: false
    }) : $766f7e1ec7548f74$var$parseMeta(node);
    if (~nodeMeta.extra.classes.indexOf($766f7e1ec7548f74$var$LAYERS_TEXT_CLASSNAME)) return $766f7e1ec7548f74$var$callProvided("generateLayersText", node, nodeMeta);
    else return $766f7e1ec7548f74$var$callProvided("generateSvgReplacementMutation", node, nodeMeta);
}
var $766f7e1ec7548f74$var$knownPrefixes = new Set();
$766f7e1ec7548f74$var$FAMILIES.map(function(family) {
    $766f7e1ec7548f74$var$knownPrefixes.add("fa-".concat(family));
});
Object.keys($766f7e1ec7548f74$var$PREFIX_TO_STYLE[$766f7e1ec7548f74$var$FAMILY_CLASSIC]).map($766f7e1ec7548f74$var$knownPrefixes.add.bind($766f7e1ec7548f74$var$knownPrefixes));
Object.keys($766f7e1ec7548f74$var$PREFIX_TO_STYLE[$766f7e1ec7548f74$var$FAMILY_SHARP]).map($766f7e1ec7548f74$var$knownPrefixes.add.bind($766f7e1ec7548f74$var$knownPrefixes));
$766f7e1ec7548f74$var$knownPrefixes = $766f7e1ec7548f74$var$_toConsumableArray($766f7e1ec7548f74$var$knownPrefixes);
function $766f7e1ec7548f74$var$onTree(root) {
    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    if (!$766f7e1ec7548f74$var$IS_DOM) return Promise.resolve();
    var htmlClassList = $766f7e1ec7548f74$var$DOCUMENT.documentElement.classList;
    var hclAdd = function hclAdd(suffix) {
        return htmlClassList.add("".concat($766f7e1ec7548f74$var$HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
    };
    var hclRemove = function hclRemove(suffix) {
        return htmlClassList.remove("".concat($766f7e1ec7548f74$var$HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
    };
    var prefixes = $766f7e1ec7548f74$var$config.autoFetchSvg ? $766f7e1ec7548f74$var$knownPrefixes : $766f7e1ec7548f74$var$FAMILIES.map(function(f) {
        return "fa-".concat(f);
    }).concat(Object.keys($766f7e1ec7548f74$var$styles$2));
    if (!prefixes.includes("fa")) prefixes.push("fa");
    var prefixesDomQuery = [
        ".".concat($766f7e1ec7548f74$var$LAYERS_TEXT_CLASSNAME, ":not([").concat($766f7e1ec7548f74$var$DATA_FA_I2SVG, "])")
    ].concat(prefixes.map(function(p) {
        return ".".concat(p, ":not([").concat($766f7e1ec7548f74$var$DATA_FA_I2SVG, "])");
    })).join(", ");
    if (prefixesDomQuery.length === 0) return Promise.resolve();
    var candidates = [];
    try {
        candidates = $766f7e1ec7548f74$var$toArray(root.querySelectorAll(prefixesDomQuery));
    } catch (e) {}
    if (candidates.length > 0) {
        hclAdd("pending");
        hclRemove("complete");
    } else return Promise.resolve();
    var mark = $766f7e1ec7548f74$var$perf.begin("onTree");
    var mutations = candidates.reduce(function(acc, node) {
        try {
            var mutation = $766f7e1ec7548f74$var$generateMutation(node);
            if (mutation) acc.push(mutation);
        } catch (e) {
            if (!$766f7e1ec7548f74$var$PRODUCTION) {
                if (e.name === "MissingIcon") console.error(e);
            }
        }
        return acc;
    }, []);
    return new Promise(function(resolve, reject) {
        Promise.all(mutations).then(function(resolvedMutations) {
            $766f7e1ec7548f74$var$perform(resolvedMutations, function() {
                hclAdd("active");
                hclAdd("complete");
                hclRemove("pending");
                if (typeof callback === "function") callback();
                mark();
                resolve();
            });
        }).catch(function(e) {
            mark();
            reject(e);
        });
    });
}
function $766f7e1ec7548f74$var$onNode(node) {
    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    $766f7e1ec7548f74$var$generateMutation(node).then(function(mutation) {
        if (mutation) $766f7e1ec7548f74$var$perform([
            mutation
        ], callback);
    });
}
function $766f7e1ec7548f74$var$resolveIcons(next) {
    return function(maybeIconDefinition) {
        var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : $766f7e1ec7548f74$var$findIconDefinition(maybeIconDefinition || {});
        var mask = params.mask;
        if (mask) mask = (mask || {}).icon ? mask : $766f7e1ec7548f74$var$findIconDefinition(mask || {});
        return next(iconDefinition, $766f7e1ec7548f74$var$_objectSpread2($766f7e1ec7548f74$var$_objectSpread2({}, params), {}, {
            mask: mask
        }));
    };
}
var $766f7e1ec7548f74$var$render = function render(iconDefinition) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _params$transform = params.transform, transform = _params$transform === void 0 ? $766f7e1ec7548f74$var$meaninglessTransform : _params$transform, _params$symbol = params.symbol, symbol = _params$symbol === void 0 ? false : _params$symbol, _params$mask = params.mask, mask = _params$mask === void 0 ? null : _params$mask, _params$maskId = params.maskId, maskId = _params$maskId === void 0 ? null : _params$maskId, _params$title = params.title, title = _params$title === void 0 ? null : _params$title, _params$titleId = params.titleId, titleId = _params$titleId === void 0 ? null : _params$titleId, _params$classes = params.classes, classes = _params$classes === void 0 ? [] : _params$classes, _params$attributes = params.attributes, attributes = _params$attributes === void 0 ? {} : _params$attributes, _params$styles = params.styles, styles = _params$styles === void 0 ? {} : _params$styles;
    if (!iconDefinition) return;
    var prefix = iconDefinition.prefix, iconName = iconDefinition.iconName, icon = iconDefinition.icon;
    return $766f7e1ec7548f74$var$domVariants($766f7e1ec7548f74$var$_objectSpread2({
        type: "icon"
    }, iconDefinition), function() {
        $766f7e1ec7548f74$var$callHooks("beforeDOMElementCreation", {
            iconDefinition: iconDefinition,
            params: params
        });
        if ($766f7e1ec7548f74$var$config.autoA11y) {
            if (title) attributes["aria-labelledby"] = "".concat($766f7e1ec7548f74$var$config.replacementClass, "-title-").concat(titleId || $766f7e1ec7548f74$var$nextUniqueId());
            else {
                attributes["aria-hidden"] = "true";
                attributes["focusable"] = "false";
            }
        }
        return $766f7e1ec7548f74$var$makeInlineSvgAbstract({
            icons: {
                main: $766f7e1ec7548f74$var$asFoundIcon(icon),
                mask: mask ? $766f7e1ec7548f74$var$asFoundIcon(mask.icon) : {
                    found: false,
                    width: null,
                    height: null,
                    icon: {}
                }
            },
            prefix: prefix,
            iconName: iconName,
            transform: $766f7e1ec7548f74$var$_objectSpread2($766f7e1ec7548f74$var$_objectSpread2({}, $766f7e1ec7548f74$var$meaninglessTransform), transform),
            symbol: symbol,
            title: title,
            maskId: maskId,
            titleId: titleId,
            extra: {
                attributes: attributes,
                styles: styles,
                classes: classes
            }
        });
    });
};
var $766f7e1ec7548f74$var$ReplaceElements = {
    mixout: function mixout() {
        return {
            icon: $766f7e1ec7548f74$var$resolveIcons($766f7e1ec7548f74$var$render)
        };
    },
    hooks: function hooks() {
        return {
            mutationObserverCallbacks: function mutationObserverCallbacks(accumulator) {
                accumulator.treeCallback = $766f7e1ec7548f74$var$onTree;
                accumulator.nodeCallback = $766f7e1ec7548f74$var$onNode;
                return accumulator;
            }
        };
    },
    provides: function provides(providers$$1) {
        providers$$1.i2svg = function(params) {
            var _params$node = params.node, node = _params$node === void 0 ? $766f7e1ec7548f74$var$DOCUMENT : _params$node, _params$callback = params.callback, callback = _params$callback === void 0 ? function() {} : _params$callback;
            return $766f7e1ec7548f74$var$onTree(node, callback);
        };
        providers$$1.generateSvgReplacementMutation = function(node, nodeMeta) {
            var iconName = nodeMeta.iconName, title = nodeMeta.title, titleId = nodeMeta.titleId, prefix = nodeMeta.prefix, transform = nodeMeta.transform, symbol = nodeMeta.symbol, mask = nodeMeta.mask, maskId = nodeMeta.maskId, extra = nodeMeta.extra;
            return new Promise(function(resolve, reject) {
                Promise.all([
                    $766f7e1ec7548f74$var$findIcon(iconName, prefix),
                    mask.iconName ? $766f7e1ec7548f74$var$findIcon(mask.iconName, mask.prefix) : Promise.resolve({
                        found: false,
                        width: 512,
                        height: 512,
                        icon: {}
                    })
                ]).then(function(_ref) {
                    var _ref2 = $766f7e1ec7548f74$var$_slicedToArray(_ref, 2), main = _ref2[0], mask = _ref2[1];
                    resolve([
                        node,
                        $766f7e1ec7548f74$var$makeInlineSvgAbstract({
                            icons: {
                                main: main,
                                mask: mask
                            },
                            prefix: prefix,
                            iconName: iconName,
                            transform: transform,
                            symbol: symbol,
                            maskId: maskId,
                            title: title,
                            titleId: titleId,
                            extra: extra,
                            watchable: true
                        })
                    ]);
                }).catch(reject);
            });
        };
        providers$$1.generateAbstractIcon = function(_ref3) {
            var children = _ref3.children, attributes = _ref3.attributes, main = _ref3.main, transform = _ref3.transform, styles = _ref3.styles;
            var styleString = $766f7e1ec7548f74$var$joinStyles(styles);
            if (styleString.length > 0) attributes["style"] = styleString;
            var nextChild;
            if ($766f7e1ec7548f74$var$transformIsMeaningful(transform)) nextChild = $766f7e1ec7548f74$var$callProvided("generateAbstractTransformGrouping", {
                main: main,
                transform: transform,
                containerWidth: main.width,
                iconWidth: main.width
            });
            children.push(nextChild || main.icon);
            return {
                children: children,
                attributes: attributes
            };
        };
    }
};
var $766f7e1ec7548f74$var$Layers = {
    mixout: function mixout() {
        return {
            layer: function layer(assembler) {
                var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                var _params$classes = params.classes, classes = _params$classes === void 0 ? [] : _params$classes;
                return $766f7e1ec7548f74$var$domVariants({
                    type: "layer"
                }, function() {
                    $766f7e1ec7548f74$var$callHooks("beforeDOMElementCreation", {
                        assembler: assembler,
                        params: params
                    });
                    var children = [];
                    assembler(function(args) {
                        Array.isArray(args) ? args.map(function(a) {
                            children = children.concat(a.abstract);
                        }) : children = children.concat(args.abstract);
                    });
                    return [
                        {
                            tag: "span",
                            attributes: {
                                class: [
                                    "".concat($766f7e1ec7548f74$var$config.cssPrefix, "-layers")
                                ].concat($766f7e1ec7548f74$var$_toConsumableArray(classes)).join(" ")
                            },
                            children: children
                        }
                    ];
                });
            }
        };
    }
};
var $766f7e1ec7548f74$var$LayersCounter = {
    mixout: function mixout() {
        return {
            counter: function counter(content) {
                var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                var _params$title = params.title, title = _params$title === void 0 ? null : _params$title, _params$classes = params.classes, classes = _params$classes === void 0 ? [] : _params$classes, _params$attributes = params.attributes, attributes = _params$attributes === void 0 ? {} : _params$attributes, _params$styles = params.styles, styles = _params$styles === void 0 ? {} : _params$styles;
                return $766f7e1ec7548f74$var$domVariants({
                    type: "counter",
                    content: content
                }, function() {
                    $766f7e1ec7548f74$var$callHooks("beforeDOMElementCreation", {
                        content: content,
                        params: params
                    });
                    return $766f7e1ec7548f74$var$makeLayersCounterAbstract({
                        content: content.toString(),
                        title: title,
                        extra: {
                            attributes: attributes,
                            styles: styles,
                            classes: [
                                "".concat($766f7e1ec7548f74$var$config.cssPrefix, "-layers-counter")
                            ].concat($766f7e1ec7548f74$var$_toConsumableArray(classes))
                        }
                    });
                });
            }
        };
    }
};
var $766f7e1ec7548f74$var$LayersText = {
    mixout: function mixout() {
        return {
            text: function text(content) {
                var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                var _params$transform = params.transform, transform = _params$transform === void 0 ? $766f7e1ec7548f74$var$meaninglessTransform : _params$transform, _params$title = params.title, title = _params$title === void 0 ? null : _params$title, _params$classes = params.classes, classes = _params$classes === void 0 ? [] : _params$classes, _params$attributes = params.attributes, attributes = _params$attributes === void 0 ? {} : _params$attributes, _params$styles = params.styles, styles = _params$styles === void 0 ? {} : _params$styles;
                return $766f7e1ec7548f74$var$domVariants({
                    type: "text",
                    content: content
                }, function() {
                    $766f7e1ec7548f74$var$callHooks("beforeDOMElementCreation", {
                        content: content,
                        params: params
                    });
                    return $766f7e1ec7548f74$var$makeLayersTextAbstract({
                        content: content,
                        transform: $766f7e1ec7548f74$var$_objectSpread2($766f7e1ec7548f74$var$_objectSpread2({}, $766f7e1ec7548f74$var$meaninglessTransform), transform),
                        title: title,
                        extra: {
                            attributes: attributes,
                            styles: styles,
                            classes: [
                                "".concat($766f7e1ec7548f74$var$config.cssPrefix, "-layers-text")
                            ].concat($766f7e1ec7548f74$var$_toConsumableArray(classes))
                        }
                    });
                });
            }
        };
    },
    provides: function provides(providers$$1) {
        providers$$1.generateLayersText = function(node, nodeMeta) {
            var title = nodeMeta.title, transform = nodeMeta.transform, extra = nodeMeta.extra;
            var width = null;
            var height = null;
            if ($766f7e1ec7548f74$var$IS_IE) {
                var computedFontSize = parseInt(getComputedStyle(node).fontSize, 10);
                var boundingClientRect = node.getBoundingClientRect();
                width = boundingClientRect.width / computedFontSize;
                height = boundingClientRect.height / computedFontSize;
            }
            if ($766f7e1ec7548f74$var$config.autoA11y && !title) extra.attributes["aria-hidden"] = "true";
            return Promise.resolve([
                node,
                $766f7e1ec7548f74$var$makeLayersTextAbstract({
                    content: node.innerHTML,
                    width: width,
                    height: height,
                    transform: transform,
                    title: title,
                    extra: extra,
                    watchable: true
                })
            ]);
        };
    }
};
var $766f7e1ec7548f74$var$CLEAN_CONTENT_PATTERN = new RegExp('"', "ug");
var $766f7e1ec7548f74$var$SECONDARY_UNICODE_RANGE = [
    1105920,
    1112319
];
function $766f7e1ec7548f74$var$hexValueFromContent(content) {
    var cleaned = content.replace($766f7e1ec7548f74$var$CLEAN_CONTENT_PATTERN, "");
    var codePoint = $766f7e1ec7548f74$var$codePointAt(cleaned, 0);
    var isPrependTen = codePoint >= $766f7e1ec7548f74$var$SECONDARY_UNICODE_RANGE[0] && codePoint <= $766f7e1ec7548f74$var$SECONDARY_UNICODE_RANGE[1];
    var isDoubled = cleaned.length === 2 ? cleaned[0] === cleaned[1] : false;
    return {
        value: isDoubled ? $766f7e1ec7548f74$var$toHex(cleaned[0]) : $766f7e1ec7548f74$var$toHex(cleaned),
        isSecondary: isPrependTen || isDoubled
    };
}
function $766f7e1ec7548f74$var$replaceForPosition(node, position) {
    var pendingAttribute = "".concat($766f7e1ec7548f74$var$DATA_FA_PSEUDO_ELEMENT_PENDING).concat(position.replace(":", "-"));
    return new Promise(function(resolve, reject) {
        if (node.getAttribute(pendingAttribute) !== null) // This node is already being processed
        return resolve();
        var children = $766f7e1ec7548f74$var$toArray(node.children);
        var alreadyProcessedPseudoElement = children.filter(function(c) {
            return c.getAttribute($766f7e1ec7548f74$var$DATA_FA_PSEUDO_ELEMENT) === position;
        })[0];
        var styles = $766f7e1ec7548f74$var$WINDOW.getComputedStyle(node, position);
        var fontFamily = styles.getPropertyValue("font-family").match($766f7e1ec7548f74$var$FONT_FAMILY_PATTERN);
        var fontWeight = styles.getPropertyValue("font-weight");
        var content = styles.getPropertyValue("content");
        if (alreadyProcessedPseudoElement && !fontFamily) {
            // If we've already processed it but the current computed style does not result in a font-family,
            // that probably means that a class name that was previously present to make the icon has been
            // removed. So we now should delete the icon.
            node.removeChild(alreadyProcessedPseudoElement);
            return resolve();
        } else if (fontFamily && content !== "none" && content !== "") {
            var _content = styles.getPropertyValue("content");
            var family = ~[
                "Sharp"
            ].indexOf(fontFamily[2]) ? $766f7e1ec7548f74$var$FAMILY_SHARP : $766f7e1ec7548f74$var$FAMILY_CLASSIC;
            var prefix = ~[
                "Solid",
                "Regular",
                "Light",
                "Thin",
                "Duotone",
                "Brands",
                "Kit"
            ].indexOf(fontFamily[2]) ? $766f7e1ec7548f74$var$STYLE_TO_PREFIX[family][fontFamily[2].toLowerCase()] : $766f7e1ec7548f74$var$FONT_WEIGHT_TO_PREFIX[family][fontWeight];
            var _hexValueFromContent = $766f7e1ec7548f74$var$hexValueFromContent(_content), hexValue = _hexValueFromContent.value, isSecondary = _hexValueFromContent.isSecondary;
            var isV4 = fontFamily[0].startsWith("FontAwesome");
            var iconName = $766f7e1ec7548f74$var$byUnicode(prefix, hexValue);
            var iconIdentifier = iconName;
            if (isV4) {
                var iconName4 = $766f7e1ec7548f74$var$byOldUnicode(hexValue);
                if (iconName4.iconName && iconName4.prefix) {
                    iconName = iconName4.iconName;
                    prefix = iconName4.prefix;
                }
            } // Only convert the pseudo element in this ::before/::after position into an icon if we haven't
            // already done so with the same prefix and iconName
            if (iconName && !isSecondary && (!alreadyProcessedPseudoElement || alreadyProcessedPseudoElement.getAttribute($766f7e1ec7548f74$var$DATA_PREFIX) !== prefix || alreadyProcessedPseudoElement.getAttribute($766f7e1ec7548f74$var$DATA_ICON) !== iconIdentifier)) {
                node.setAttribute(pendingAttribute, iconIdentifier);
                if (alreadyProcessedPseudoElement) // Delete the old one, since we're replacing it with a new one
                node.removeChild(alreadyProcessedPseudoElement);
                var meta = $766f7e1ec7548f74$var$blankMeta();
                var extra = meta.extra;
                extra.attributes[$766f7e1ec7548f74$var$DATA_FA_PSEUDO_ELEMENT] = position;
                $766f7e1ec7548f74$var$findIcon(iconName, prefix).then(function(main) {
                    var _abstract = $766f7e1ec7548f74$var$makeInlineSvgAbstract($766f7e1ec7548f74$var$_objectSpread2($766f7e1ec7548f74$var$_objectSpread2({}, meta), {}, {
                        icons: {
                            main: main,
                            mask: $766f7e1ec7548f74$var$emptyCanonicalIcon()
                        },
                        prefix: prefix,
                        iconName: iconIdentifier,
                        extra: extra,
                        watchable: true
                    }));
                    var element = $766f7e1ec7548f74$var$DOCUMENT.createElementNS("http://www.w3.org/2000/svg", "svg");
                    if (position === "::before") node.insertBefore(element, node.firstChild);
                    else node.appendChild(element);
                    element.outerHTML = _abstract.map(function(a) {
                        return $766f7e1ec7548f74$var$toHtml(a);
                    }).join("\n");
                    node.removeAttribute(pendingAttribute);
                    resolve();
                }).catch(reject);
            } else resolve();
        } else resolve();
    });
}
function $766f7e1ec7548f74$var$replace(node) {
    return Promise.all([
        $766f7e1ec7548f74$var$replaceForPosition(node, "::before"),
        $766f7e1ec7548f74$var$replaceForPosition(node, "::after")
    ]);
}
function $766f7e1ec7548f74$var$processable(node) {
    return node.parentNode !== document.head && !~$766f7e1ec7548f74$var$TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS.indexOf(node.tagName.toUpperCase()) && !node.getAttribute($766f7e1ec7548f74$var$DATA_FA_PSEUDO_ELEMENT) && (!node.parentNode || node.parentNode.tagName !== "svg");
}
function $766f7e1ec7548f74$var$searchPseudoElements(root) {
    if (!$766f7e1ec7548f74$var$IS_DOM) return;
    return new Promise(function(resolve, reject) {
        var operations = $766f7e1ec7548f74$var$toArray(root.querySelectorAll("*")).filter($766f7e1ec7548f74$var$processable).map($766f7e1ec7548f74$var$replace);
        var end = $766f7e1ec7548f74$var$perf.begin("searchPseudoElements");
        $766f7e1ec7548f74$var$disableObservation();
        Promise.all(operations).then(function() {
            end();
            $766f7e1ec7548f74$var$enableObservation();
            resolve();
        }).catch(function() {
            end();
            $766f7e1ec7548f74$var$enableObservation();
            reject();
        });
    });
}
var $766f7e1ec7548f74$var$PseudoElements = {
    hooks: function hooks() {
        return {
            mutationObserverCallbacks: function mutationObserverCallbacks(accumulator) {
                accumulator.pseudoElementsCallback = $766f7e1ec7548f74$var$searchPseudoElements;
                return accumulator;
            }
        };
    },
    provides: function provides(providers$$1) {
        providers$$1.pseudoElements2svg = function(params) {
            var _params$node = params.node, node = _params$node === void 0 ? $766f7e1ec7548f74$var$DOCUMENT : _params$node;
            if ($766f7e1ec7548f74$var$config.searchPseudoElements) $766f7e1ec7548f74$var$searchPseudoElements(node);
        };
    }
};
var $766f7e1ec7548f74$var$_unwatched = false;
var $766f7e1ec7548f74$var$MutationObserver$1 = {
    mixout: function mixout() {
        return {
            dom: {
                unwatch: function unwatch() {
                    $766f7e1ec7548f74$var$disableObservation();
                    $766f7e1ec7548f74$var$_unwatched = true;
                }
            }
        };
    },
    hooks: function hooks() {
        return {
            bootstrap: function bootstrap() {
                $766f7e1ec7548f74$var$observe($766f7e1ec7548f74$var$chainHooks("mutationObserverCallbacks", {}));
            },
            noAuto: function noAuto() {
                $766f7e1ec7548f74$var$disconnect();
            },
            watch: function watch(params) {
                var observeMutationsRoot = params.observeMutationsRoot;
                if ($766f7e1ec7548f74$var$_unwatched) $766f7e1ec7548f74$var$enableObservation();
                else $766f7e1ec7548f74$var$observe($766f7e1ec7548f74$var$chainHooks("mutationObserverCallbacks", {
                    observeMutationsRoot: observeMutationsRoot
                }));
            }
        };
    }
};
var $766f7e1ec7548f74$var$parseTransformString = function parseTransformString(transformString) {
    var transform = {
        size: 16,
        x: 0,
        y: 0,
        flipX: false,
        flipY: false,
        rotate: 0
    };
    return transformString.toLowerCase().split(" ").reduce(function(acc, n) {
        var parts = n.toLowerCase().split("-");
        var first = parts[0];
        var rest = parts.slice(1).join("-");
        if (first && rest === "h") {
            acc.flipX = true;
            return acc;
        }
        if (first && rest === "v") {
            acc.flipY = true;
            return acc;
        }
        rest = parseFloat(rest);
        if (isNaN(rest)) return acc;
        switch(first){
            case "grow":
                acc.size = acc.size + rest;
                break;
            case "shrink":
                acc.size = acc.size - rest;
                break;
            case "left":
                acc.x = acc.x - rest;
                break;
            case "right":
                acc.x = acc.x + rest;
                break;
            case "up":
                acc.y = acc.y - rest;
                break;
            case "down":
                acc.y = acc.y + rest;
                break;
            case "rotate":
                acc.rotate = acc.rotate + rest;
                break;
        }
        return acc;
    }, transform);
};
var $766f7e1ec7548f74$var$PowerTransforms = {
    mixout: function mixout() {
        return {
            parse: {
                transform: function transform(transformString) {
                    return $766f7e1ec7548f74$var$parseTransformString(transformString);
                }
            }
        };
    },
    hooks: function hooks() {
        return {
            parseNodeAttributes: function parseNodeAttributes(accumulator, node) {
                var transformString = node.getAttribute("data-fa-transform");
                if (transformString) accumulator.transform = $766f7e1ec7548f74$var$parseTransformString(transformString);
                return accumulator;
            }
        };
    },
    provides: function provides(providers) {
        providers.generateAbstractTransformGrouping = function(_ref) {
            var main = _ref.main, transform = _ref.transform, containerWidth = _ref.containerWidth, iconWidth = _ref.iconWidth;
            var outer = {
                transform: "translate(".concat(containerWidth / 2, " 256)")
            };
            var innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
            var innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
            var innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
            var inner = {
                transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
            };
            var path = {
                transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
            };
            var operations = {
                outer: outer,
                inner: inner,
                path: path
            };
            return {
                tag: "g",
                attributes: $766f7e1ec7548f74$var$_objectSpread2({}, operations.outer),
                children: [
                    {
                        tag: "g",
                        attributes: $766f7e1ec7548f74$var$_objectSpread2({}, operations.inner),
                        children: [
                            {
                                tag: main.icon.tag,
                                children: main.icon.children,
                                attributes: $766f7e1ec7548f74$var$_objectSpread2($766f7e1ec7548f74$var$_objectSpread2({}, main.icon.attributes), operations.path)
                            }
                        ]
                    }
                ]
            };
        };
    }
};
var $766f7e1ec7548f74$var$ALL_SPACE = {
    x: 0,
    y: 0,
    width: "100%",
    height: "100%"
};
function $766f7e1ec7548f74$var$fillBlack(_abstract) {
    var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    if (_abstract.attributes && (_abstract.attributes.fill || force)) _abstract.attributes.fill = "black";
    return _abstract;
}
function $766f7e1ec7548f74$var$deGroup(_abstract2) {
    if (_abstract2.tag === "g") return _abstract2.children;
    else return [
        _abstract2
    ];
}
var $766f7e1ec7548f74$var$Masks = {
    hooks: function hooks() {
        return {
            parseNodeAttributes: function parseNodeAttributes(accumulator, node) {
                var maskData = node.getAttribute("data-fa-mask");
                var mask = !maskData ? $766f7e1ec7548f74$var$emptyCanonicalIcon() : $766f7e1ec7548f74$var$getCanonicalIcon(maskData.split(" ").map(function(i) {
                    return i.trim();
                }));
                if (!mask.prefix) mask.prefix = $766f7e1ec7548f74$var$getDefaultUsablePrefix();
                accumulator.mask = mask;
                accumulator.maskId = node.getAttribute("data-fa-mask-id");
                return accumulator;
            }
        };
    },
    provides: function provides(providers) {
        providers.generateAbstractMask = function(_ref) {
            var children = _ref.children, attributes = _ref.attributes, main = _ref.main, mask = _ref.mask, explicitMaskId = _ref.maskId, transform = _ref.transform;
            var mainWidth = main.width, mainPath = main.icon;
            var maskWidth = mask.width, maskPath = mask.icon;
            var trans = $766f7e1ec7548f74$var$transformForSvg({
                transform: transform,
                containerWidth: maskWidth,
                iconWidth: mainWidth
            });
            var maskRect = {
                tag: "rect",
                attributes: $766f7e1ec7548f74$var$_objectSpread2($766f7e1ec7548f74$var$_objectSpread2({}, $766f7e1ec7548f74$var$ALL_SPACE), {}, {
                    fill: "white"
                })
            };
            var maskInnerGroupChildrenMixin = mainPath.children ? {
                children: mainPath.children.map($766f7e1ec7548f74$var$fillBlack)
            } : {};
            var maskInnerGroup = {
                tag: "g",
                attributes: $766f7e1ec7548f74$var$_objectSpread2({}, trans.inner),
                children: [
                    $766f7e1ec7548f74$var$fillBlack($766f7e1ec7548f74$var$_objectSpread2({
                        tag: mainPath.tag,
                        attributes: $766f7e1ec7548f74$var$_objectSpread2($766f7e1ec7548f74$var$_objectSpread2({}, mainPath.attributes), trans.path)
                    }, maskInnerGroupChildrenMixin))
                ]
            };
            var maskOuterGroup = {
                tag: "g",
                attributes: $766f7e1ec7548f74$var$_objectSpread2({}, trans.outer),
                children: [
                    maskInnerGroup
                ]
            };
            var maskId = "mask-".concat(explicitMaskId || $766f7e1ec7548f74$var$nextUniqueId());
            var clipId = "clip-".concat(explicitMaskId || $766f7e1ec7548f74$var$nextUniqueId());
            var maskTag = {
                tag: "mask",
                attributes: $766f7e1ec7548f74$var$_objectSpread2($766f7e1ec7548f74$var$_objectSpread2({}, $766f7e1ec7548f74$var$ALL_SPACE), {}, {
                    id: maskId,
                    maskUnits: "userSpaceOnUse",
                    maskContentUnits: "userSpaceOnUse"
                }),
                children: [
                    maskRect,
                    maskOuterGroup
                ]
            };
            var defs = {
                tag: "defs",
                children: [
                    {
                        tag: "clipPath",
                        attributes: {
                            id: clipId
                        },
                        children: $766f7e1ec7548f74$var$deGroup(maskPath)
                    },
                    maskTag
                ]
            };
            children.push(defs, {
                tag: "rect",
                attributes: $766f7e1ec7548f74$var$_objectSpread2({
                    fill: "currentColor",
                    "clip-path": "url(#".concat(clipId, ")"),
                    mask: "url(#".concat(maskId, ")")
                }, $766f7e1ec7548f74$var$ALL_SPACE)
            });
            return {
                children: children,
                attributes: attributes
            };
        };
    }
};
var $766f7e1ec7548f74$var$MissingIconIndicator = {
    provides: function provides(providers) {
        var reduceMotion = false;
        if ($766f7e1ec7548f74$var$WINDOW.matchMedia) reduceMotion = $766f7e1ec7548f74$var$WINDOW.matchMedia("(prefers-reduced-motion: reduce)").matches;
        providers.missingIconAbstract = function() {
            var gChildren = [];
            var FILL = {
                fill: "currentColor"
            };
            var ANIMATION_BASE = {
                attributeType: "XML",
                repeatCount: "indefinite",
                dur: "2s"
            }; // Ring
            gChildren.push({
                tag: "path",
                attributes: $766f7e1ec7548f74$var$_objectSpread2($766f7e1ec7548f74$var$_objectSpread2({}, FILL), {}, {
                    d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
                })
            });
            var OPACITY_ANIMATE = $766f7e1ec7548f74$var$_objectSpread2($766f7e1ec7548f74$var$_objectSpread2({}, ANIMATION_BASE), {}, {
                attributeName: "opacity"
            });
            var dot = {
                tag: "circle",
                attributes: $766f7e1ec7548f74$var$_objectSpread2($766f7e1ec7548f74$var$_objectSpread2({}, FILL), {}, {
                    cx: "256",
                    cy: "364",
                    r: "28"
                }),
                children: []
            };
            if (!reduceMotion) dot.children.push({
                tag: "animate",
                attributes: $766f7e1ec7548f74$var$_objectSpread2($766f7e1ec7548f74$var$_objectSpread2({}, ANIMATION_BASE), {}, {
                    attributeName: "r",
                    values: "28;14;28;28;14;28;"
                })
            }, {
                tag: "animate",
                attributes: $766f7e1ec7548f74$var$_objectSpread2($766f7e1ec7548f74$var$_objectSpread2({}, OPACITY_ANIMATE), {}, {
                    values: "1;0;1;1;0;1;"
                })
            });
            gChildren.push(dot);
            gChildren.push({
                tag: "path",
                attributes: $766f7e1ec7548f74$var$_objectSpread2($766f7e1ec7548f74$var$_objectSpread2({}, FILL), {}, {
                    opacity: "1",
                    d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
                }),
                children: reduceMotion ? [] : [
                    {
                        tag: "animate",
                        attributes: $766f7e1ec7548f74$var$_objectSpread2($766f7e1ec7548f74$var$_objectSpread2({}, OPACITY_ANIMATE), {}, {
                            values: "1;0;0;0;0;1;"
                        })
                    }
                ]
            });
            if (!reduceMotion) // Exclamation
            gChildren.push({
                tag: "path",
                attributes: $766f7e1ec7548f74$var$_objectSpread2($766f7e1ec7548f74$var$_objectSpread2({}, FILL), {}, {
                    opacity: "0",
                    d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
                }),
                children: [
                    {
                        tag: "animate",
                        attributes: $766f7e1ec7548f74$var$_objectSpread2($766f7e1ec7548f74$var$_objectSpread2({}, OPACITY_ANIMATE), {}, {
                            values: "0;0;1;1;0;0;"
                        })
                    }
                ]
            });
            return {
                tag: "g",
                attributes: {
                    "class": "missing"
                },
                children: gChildren
            };
        };
    }
};
var $766f7e1ec7548f74$var$SvgSymbols = {
    hooks: function hooks() {
        return {
            parseNodeAttributes: function parseNodeAttributes(accumulator, node) {
                var symbolData = node.getAttribute("data-fa-symbol");
                var symbol = symbolData === null ? false : symbolData === "" ? true : symbolData;
                accumulator["symbol"] = symbol;
                return accumulator;
            }
        };
    }
};
var $766f7e1ec7548f74$var$plugins = [
    $766f7e1ec7548f74$var$InjectCSS,
    $766f7e1ec7548f74$var$ReplaceElements,
    $766f7e1ec7548f74$var$Layers,
    $766f7e1ec7548f74$var$LayersCounter,
    $766f7e1ec7548f74$var$LayersText,
    $766f7e1ec7548f74$var$PseudoElements,
    $766f7e1ec7548f74$var$MutationObserver$1,
    $766f7e1ec7548f74$var$PowerTransforms,
    $766f7e1ec7548f74$var$Masks,
    $766f7e1ec7548f74$var$MissingIconIndicator,
    $766f7e1ec7548f74$var$SvgSymbols
];
$766f7e1ec7548f74$var$registerPlugins($766f7e1ec7548f74$var$plugins, {
    mixoutsTo: $766f7e1ec7548f74$export$644d8ea042df96a6
});
var $766f7e1ec7548f74$export$4f8e844b2782642c = $766f7e1ec7548f74$export$644d8ea042df96a6.noAuto;
var $766f7e1ec7548f74$export$e506a1d27d1eaa20 = $766f7e1ec7548f74$export$644d8ea042df96a6.config;
var $766f7e1ec7548f74$export$b839f963c7dc0e34 = $766f7e1ec7548f74$export$644d8ea042df96a6.library;
var $766f7e1ec7548f74$export$df3a06d6289f983e = $766f7e1ec7548f74$export$644d8ea042df96a6.dom;
var $766f7e1ec7548f74$export$98e6a39c04603d36 = $766f7e1ec7548f74$export$644d8ea042df96a6.parse;
var $766f7e1ec7548f74$export$221fed4a47f597a5 = $766f7e1ec7548f74$export$644d8ea042df96a6.findIconDefinition;
var $766f7e1ec7548f74$export$a10125c086a4df16 = $766f7e1ec7548f74$export$644d8ea042df96a6.toHtml;
var $766f7e1ec7548f74$export$1ca1ec8b29a4ce27 = $766f7e1ec7548f74$export$644d8ea042df96a6.icon;
var $766f7e1ec7548f74$export$50a222d9023da98b = $766f7e1ec7548f74$export$644d8ea042df96a6.layer;
var $766f7e1ec7548f74$export$6f093cfa640b7166 = $766f7e1ec7548f74$export$644d8ea042df96a6.text;
var $766f7e1ec7548f74$export$e575061ef2a070eb = $766f7e1ec7548f74$export$644d8ea042df96a6.counter;


var $d026058b6f241841$var$ScrollDirection;
(function(ScrollDirection) {
    ScrollDirection["LEFT"] = "left";
    ScrollDirection["RIGHT"] = "right";
})($d026058b6f241841$var$ScrollDirection || ($d026058b6f241841$var$ScrollDirection = {}));
var $d026058b6f241841$var$ScrollChevronState;
(function(ScrollChevronState) {
    ScrollChevronState["BLANK"] = "blank";
    ScrollChevronState["AVAILABLE"] = "available";
    ScrollChevronState["HOVERING"] = "hovering";
})($d026058b6f241841$var$ScrollChevronState || ($d026058b6f241841$var$ScrollChevronState = {}));
const $d026058b6f241841$var$ScrollChevronBlankStyle = {
    opacity: "0",
    width: "0%"
};
const $d026058b6f241841$var$ScrollChevronAvailableStyle = {
    opacity: "0.5",
    width: "15%"
};
const $d026058b6f241841$var$ScrollChevronHoveringStyle = {
    opacity: "1",
    width: "20%"
};
class $d026058b6f241841$export$5b55083af984f426 extends (0, $dbf738cadf6256bb$export$2e2bcd8739ae039) {
    constructor(selector, pageSelector, { children: children = [], $content: $content }){
        super(selector);
        this.scrollableSelector = `${this.selector}-scrollable`; // For the scrollable div encompassing the containers
        this.scrollChevronLeftSelector = `${this.selector}-scroll-chevron-left`; // Chevron on the left
        this.scrollChevronRightSelector = `${this.selector}-scroll-chevron-right`; // Chevron on the right
        this.scrollChevronOpacityMaskSelector = `${this.selector}-scroll-chevron-opacity-mask`; // An outer div that controls opacity for chevrons;
        this.lastVPosition = 0;
        this.xScrollPosition = 0;
        this.xScrollSpeed = 0;
        this.scrollChevronStateLeft = $d026058b6f241841$var$ScrollChevronState.BLANK;
        this.scrollChevronStateRight = $d026058b6f241841$var$ScrollChevronState.BLANK;
        this.buildScrollChevrons = (height)=>{
            const self = this;
            const scrollLeftIcon = (0, $766f7e1ec7548f74$export$1ca1ec8b29a4ce27)({
                prefix: "far",
                iconName: "circle-left"
            });
            const scrollRightIcon = (0, $766f7e1ec7548f74$export$1ca1ec8b29a4ce27)({
                prefix: "far",
                iconName: "circle-right"
            });
            const $scrollChevronLeft = (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`<div id="${self.scrollChevronLeftSelector}">`).addClass("scroll-chevron-left").css("height", `${height}px`).append(scrollLeftIcon.node[0]);
            const $scrollChevronRight = (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`<div id="${self.scrollChevronRightSelector}">`).addClass("scroll-chevron-right").css("height", `${height}px`).append(scrollRightIcon.node[0]);
            const $scrollChevronOpacityMask = (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`<div id="${self.scrollChevronOpacityMaskSelector}">`).append([
                $scrollChevronLeft,
                $scrollChevronRight
            ]);
            return $scrollChevronOpacityMask;
        };
        this.setXScrollMouseEvents = ()=>{
            const self = this;
            self.setXScrollMouseEvent(self.scrollChevronLeftSelector, $d026058b6f241841$var$ScrollDirection.LEFT);
            self.setXScrollMouseEvent(self.scrollChevronRightSelector, $d026058b6f241841$var$ScrollDirection.RIGHT);
        };
        this.setXScrollMouseEvent = (scrollChevronSelector, direction)=>{
            // Attaches mouse event to only ONE scroll chevron.
            // Manages scroll animation's speed, acceleration and chevron's state of opacity.
            const self = this;
            // Update Chevron's state whenever scroll is triggered
            (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`#${self.scrollableSelector}`).on("scroll", function() {
                self.xScrollEdgeResponse(scrollChevronSelector, direction);
            });
            // Updates chevrons when window resizes
            (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(window).on("resize", function() {
                self.updateScrollChevronVPositions();
                self.xScrollEdgeResponse(scrollChevronSelector, direction);
            });
            (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`#${scrollChevronSelector}`).on("mouseenter", function() {
                clearInterval(self.xAccelerationIntervalHandler);
                // Set Chevron to Hovering state and animate
                self.customAnimation(scrollChevronSelector, $d026058b6f241841$var$ScrollChevronState.HOVERING, direction);
                if (direction === $d026058b6f241841$var$ScrollDirection.LEFT) self.scrollChevronStateLeft = $d026058b6f241841$var$ScrollChevronState.HOVERING;
                else if (direction === $d026058b6f241841$var$ScrollDirection.RIGHT) self.scrollChevronStateRight = $d026058b6f241841$var$ScrollChevronState.HOVERING;
                // Set scroll accel animation
                self.xMovementIntervalHandler = setInterval(function() {
                    if (self.xScrollSpeed < $d026058b6f241841$export$5b55083af984f426.SCROLLABLE_MAX_DX) self.xScrollSpeed += 1;
                    if (direction === $d026058b6f241841$var$ScrollDirection.LEFT) self.xScrollPosition = (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`#${self.scrollableSelector}`).scrollLeft() - self.xScrollSpeed;
                    else if (direction === $d026058b6f241841$var$ScrollDirection.RIGHT) self.xScrollPosition = (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`#${self.scrollableSelector}`).scrollLeft() + self.xScrollSpeed;
                    (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`#${self.scrollableSelector}`).scrollLeft(self.xScrollPosition);
                }, 15);
            }).on("mouseleave", function() {
                clearInterval(self.xMovementIntervalHandler);
                // Set Chevron to Alone state
                if (direction === $d026058b6f241841$var$ScrollDirection.LEFT) self.scrollChevronStateLeft = $d026058b6f241841$var$ScrollChevronState.BLANK;
                else if (direction === $d026058b6f241841$var$ScrollDirection.RIGHT) self.scrollChevronStateRight = $d026058b6f241841$var$ScrollChevronState.BLANK;
                // Set scroll de-accel animation
                self.xAccelerationIntervalHandler = setInterval(function() {
                    if (direction === $d026058b6f241841$var$ScrollDirection.LEFT) self.xScrollPosition = (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`#${self.scrollableSelector}`).scrollLeft() - self.xScrollSpeed;
                    else if (direction === $d026058b6f241841$var$ScrollDirection.RIGHT) self.xScrollPosition = (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`#${self.scrollableSelector}`).scrollLeft() + self.xScrollSpeed;
                    (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`#${self.scrollableSelector}`).scrollLeft(self.xScrollPosition);
                    if (self.xScrollSpeed > 0) self.xScrollSpeed -= 1;
                }, 15);
                self.xScrollEdgeResponse(scrollChevronSelector, direction);
            });
        };
        this.getScrollChevronStyleByState = (scrollChevronState)=>{
            switch(scrollChevronState){
                case $d026058b6f241841$var$ScrollChevronState.BLANK:
                    return $d026058b6f241841$var$ScrollChevronBlankStyle;
                case $d026058b6f241841$var$ScrollChevronState.AVAILABLE:
                    return $d026058b6f241841$var$ScrollChevronAvailableStyle;
                case $d026058b6f241841$var$ScrollChevronState.HOVERING:
                    return $d026058b6f241841$var$ScrollChevronHoveringStyle;
            }
        };
        this.setScrollChevronVPositionEventListeners = ()=>{
            const self = this;
            (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`#${this.pageSelector}`).on("scroll", function() {
                self.updateScrollChevronVPositions();
            });
        };
        this.updateScrollChevronVPositions = ()=>{
            const self = this;
            // offset() is applicable for divs relative to the parents
            const scrollablePositions = (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`#${self.scrollableSelector}`).position();
            var finalHeight = self.lastVPosition;
            if (scrollablePositions) {
                finalHeight = scrollablePositions.top;
                self.lastVPosition = finalHeight;
            }
            (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`#${self.scrollChevronLeftSelector}`).css("top", finalHeight);
            (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`#${self.scrollChevronRightSelector}`).css("top", finalHeight);
        };
        const self = this;
        // Take content element from selector div's children or from the argument.
        this.children = children;
        $content ? this.$content = $content : this.$content = (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`#${this.selector}`).children();
        this.pageSelector = pageSelector;
        // Define constructed element.
        this.$constructedElement = (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`<div class="x-scrollable" id="${self.scrollableSelector}">`).append(self.getChildrenConstructedElements()).append(self.$content);
    }
    onAttachBeforeScrollIn() {
        const self = this;
        if (!self.$constructedElement) return;
        if ((0, $bfab7ad14862d57e$export$61995152d881a9ba).determineDeviceType() === (0, $bfab7ad14862d57e$export$ec1e04e4e5ef8233).DESKTOP) {
            // 3) Regenerate scrollable content and chevrons 
            self.$constructedElement.prepend(self.buildScrollChevrons(self.getConstructedElementHeight()));
            (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`#${self.selector}`).replaceWith(self.$constructedElement);
            // 4) Setup Mouse Scroll Events
            self.setXScrollMouseEvents();
            // 5) Make Chevrons to follow scroll
            self.setScrollChevronVPositionEventListeners();
        } else (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`#${self.selector}`).replaceWith(self.$constructedElement);
    }
    attach() {}
    attachExternally() {
        // This method is called from context other than page initialization.
        // And extra pre-processings will be conducted.
        this.onAttachBeforeScrollIn();
        this.$constructedElement?.css({
            "padding": "0",
            "margin": "0"
        });
        this.setScrollChevronsToAppear();
    }
    customAnimation(scrollChevronSelector, newScrollChevronState, direction) {
        const newStyle = this.getScrollChevronStyleByState(newScrollChevronState);
        if (direction === $d026058b6f241841$var$ScrollDirection.LEFT) {
            if (this.scrollChevronStateLeft != newScrollChevronState) {
                (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`#${scrollChevronSelector}`).stop();
                (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`#${scrollChevronSelector}`).animate(newStyle, (0, $e2512952e94e97b1$export$a002182e51710d39).ANIMATION_DURATION_DEFAULT);
                this.scrollChevronStateLeft = newScrollChevronState;
            }
        } else if (direction === $d026058b6f241841$var$ScrollDirection.RIGHT) {
            if (this.scrollChevronStateRight != newScrollChevronState) {
                (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`#${scrollChevronSelector}`).stop();
                (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`#${scrollChevronSelector}`).animate(newStyle, (0, $e2512952e94e97b1$export$a002182e51710d39).ANIMATION_DURATION_DEFAULT);
                this.scrollChevronStateRight = newScrollChevronState;
            }
        }
        if (newStyle === $d026058b6f241841$var$ScrollChevronBlankStyle) (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`#${scrollChevronSelector}`).css("pointer-events", "none");
        else (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`#${scrollChevronSelector}`).css("pointer-events", "auto");
    }
    xScrollEdgeResponse(scrollChevronSelector, direction) {
        const self = this;
        // Set Chevron's state to available/blank depending on whether the edge is reached on either side.
        if (direction == $d026058b6f241841$var$ScrollDirection.LEFT) {
            if ((0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`#${self.scrollableSelector}`).scrollLeft() == 0) self.customAnimation(scrollChevronSelector, $d026058b6f241841$var$ScrollChevronState.BLANK, direction);
            else if (self.scrollChevronStateLeft != $d026058b6f241841$var$ScrollChevronState.HOVERING) self.customAnimation(scrollChevronSelector, $d026058b6f241841$var$ScrollChevronState.AVAILABLE, direction);
             // Left Chevron edge detection
        } else if (direction == $d026058b6f241841$var$ScrollDirection.RIGHT) {
            if ((0, $bfab7ad14862d57e$export$61995152d881a9ba).isScrollToPosition(Math.round((0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`#${self.scrollableSelector}`).scrollLeft()), (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`#${self.scrollableSelector}`).prop("scrollWidth") - (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`#${self.scrollableSelector}`).prop("clientWidth"))) self.customAnimation(scrollChevronSelector, $d026058b6f241841$var$ScrollChevronState.BLANK, direction);
            else if (self.scrollChevronStateRight == $d026058b6f241841$var$ScrollChevronState.BLANK) self.customAnimation(scrollChevronSelector, $d026058b6f241841$var$ScrollChevronState.AVAILABLE, direction);
             // Right Chevron edge detection
        }
    }
    getConstructedElementHeight() {
        // This method appends the constructed element temporarily to the body,
        // reads the height, and removes the element.
        const self = this;
        if (self.$constructedElement) {
            (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`body`).append(self.$constructedElement);
            const height = self.$constructedElement.outerHeight();
            self.$constructedElement.remove();
            return height;
        } else return 0;
    }
    onScrollIn() {
        this.updateScrollChevronVPositions();
        this.setScrollChevronsToAppear();
    }
    onScrollOut() {
        this.setScrollChevronsToDisappear();
    }
    setScrollChevronsToAppear() {
        const self = this;
        self.xScrollEdgeResponse(self.scrollChevronLeftSelector, $d026058b6f241841$var$ScrollDirection.LEFT);
        self.xScrollEdgeResponse(self.scrollChevronRightSelector, $d026058b6f241841$var$ScrollDirection.RIGHT);
        (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`#${self.scrollChevronOpacityMaskSelector}`).animate({
            opacity: "1"
        }, (0, $e2512952e94e97b1$export$a002182e51710d39).ANIMATION_DURATION_DEFAULT);
    }
    setScrollChevronsToDisappear() {
        const self = this;
        (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`#${self.scrollChevronOpacityMaskSelector}`).stop();
        (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`#${self.scrollChevronOpacityMaskSelector}`).css("opacity", "0");
    }
}
$d026058b6f241841$export$5b55083af984f426.SCROLLABLE_MAX_DX = 12;
var $d026058b6f241841$export$2e2bcd8739ae039 = $d026058b6f241841$export$5b55083af984f426;






class $6c228d0e23e10c1d$export$2881499e37b75b9a {
    constructor(initialState){
        this.listeners = [];
        this.state = initialState;
    }
    getState() {
        return this.state;
    }
    setState(newState) {
        if (typeof newState === "function") this.state = {
            ...this.state,
            ...newState(this.state)
        };
        else this.state = {
            ...this.state,
            ...newState
        };
        this.notifyListeners();
    }
    subscribe(listener) {
        this.listeners.push(listener);
        return ()=>{
            this.listeners = this.listeners.filter((l)=>l !== listener);
        };
    }
    notifyListeners() {
        this.listeners.forEach((listener)=>listener(this.state));
    }
}
var $6c228d0e23e10c1d$export$2e2bcd8739ae039 = $6c228d0e23e10c1d$export$2881499e37b75b9a;


class $d85ba840fc4ba32d$export$4d5c8163a511d38a {
    static getInstance(identifier, initialState) {
        if (!$d85ba840fc4ba32d$export$4d5c8163a511d38a.instances.has(identifier)) {
            const provider = new (0, $6c228d0e23e10c1d$export$2881499e37b75b9a)(initialState);
            $d85ba840fc4ba32d$export$4d5c8163a511d38a.instances.set(identifier, provider);
        }
        return $d85ba840fc4ba32d$export$4d5c8163a511d38a.instances.get(identifier);
    }
}
$d85ba840fc4ba32d$export$4d5c8163a511d38a.instances = new Map();
var $d85ba840fc4ba32d$export$2e2bcd8739ae039 = $d85ba840fc4ba32d$export$4d5c8163a511d38a;


var $0b2227309f98042b$var$ImageMode;
(function(ImageMode) {
    ImageMode[ImageMode["NORMAL"] = 0] = "NORMAL";
    ImageMode[ImageMode["SATURATED"] = 1] = "SATURATED";
})($0b2227309f98042b$var$ImageMode || ($0b2227309f98042b$var$ImageMode = {}));
const $0b2227309f98042b$var$SVGFilm1 = [
    // A collection of CSS classes configurable in flux.scss.
    {
        normal: "bg1-normal",
        saturated: "bg1-saturate"
    },
    {
        normal: "bg2-normal",
        saturated: "bg2-saturate"
    },
    {
        normal: "bg3-normal",
        saturated: "bg3-saturate"
    },
    {
        normal: "bg4-normal",
        saturated: "bg4-saturate"
    },
    {
        normal: "bg5-normal",
        saturated: "bg5-saturate"
    },
    {
        normal: "bg6-normal",
        saturated: "bg6-saturate"
    }
];
class $0b2227309f98042b$export$36c285e43df07aa2 extends (0, $dbf738cadf6256bb$export$2e2bcd8739ae039) {
    constructor(selector, imageMode, initialImageClass){
        super(selector);
        this.FADE_DURATION = 3300;
        this.FADE_DURATION_FAST = 800;
        this.imageMode = $0b2227309f98042b$var$ImageMode.SATURATED;
        this.currentImageIndex = 0;
        this.currentFilm = $0b2227309f98042b$var$SVGFilm1;
        this.initialImageClass = "";
        this.hasInitialImageClassAnimated = false;
        this.backgroundProvider = (0, $d85ba840fc4ba32d$export$2e2bcd8739ae039).getInstance((0, $e2512952e94e97b1$export$bd8f39ef8e3d2b92).BACKGROUND, {
            currentBackground: this
        });
        imageMode && (this.imageMode = imageMode);
        if (initialImageClass) this.initialImageClass = initialImageClass;
        this.foregroundSelector = `${this.selector}-foreground`;
        this.backgroundSelector = `${this.selector}`;
        this.contentSelector = `${this.selector}-content`;
    }
    attach() {}
    onAttachBeforeScrollIn() {
        // Reforms mark-up page div into a background/foreground structure
        // with an augmented content div for children elem from within 
        // the original page div.
        // div background (this.backgroundSelector)
        //   |__ div foreground (this.foregroundSelector)
        //   |__ div content (this.contentSelector)
        const self = this;
        // 1) Clone all children of page div
        const $childrenClones = (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`#${self.selector}`).children().clone(true, true);
        // 1.5) Obtain mark-up classes of the page div
        const predefinedPageClassList = (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`#${self.selector}`)[0].classList;
        // 2) Set-up back/foregrounds
        (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`#${self.selector}`).addClass("background-window");
        (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`#${self.selector}`).html(`
            <div id=${self.foregroundSelector} class="flux-foreground"></div>
            <div id=${self.contentSelector} class="flux-content"></div>
            `);
        // 2.5) Add classes from step 1.5) to content div
        (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports))).each(predefinedPageClassList, function(index, className) {
            (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`#${self.contentSelector}`).addClass(className); // Output each class name
        });
        // 3) Append children to content
        (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`#${self.contentSelector}`).append($childrenClones);
        // 4) Set-up initial background
        (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`#${self.backgroundSelector}`).addClass(self.initialImageClass);
    }
    appendCanvases() {
        (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`#${this.selector}`).append(`
            <div class="canvas-container">
                <div id="chicken">Chicken</div>
            </div>
        `);
    }
    runFadeTransition(fromClass, toClass, duration, animationEndCallback) {
        const self = this;
        this.clearAllImageClasses();
        (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`#${this.foregroundSelector}`).addClass(fromClass);
        (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`#${this.backgroundSelector}`).addClass(toClass);
        (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`#${this.foregroundSelector}`).css("opacity", 1);
        (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`#${this.foregroundSelector}`).animate({
            opacity: 0
        }, duration, ()=>{
            if (typeof animationEndCallback === "function") animationEndCallback();
        });
    }
    runNextFadeTransition() {
        const self = this;
        var lastBackgroundClass = this.getImageClassByIndex(this.currentImageIndex - 1);
        if (!this.hasInitialImageClassAnimated) {
            lastBackgroundClass = this.initialImageClass;
            this.hasInitialImageClassAnimated = true;
        }
        const newBackgroundClass = this.getImageClassByIndex(this.currentImageIndex);
        this.runFadeTransition(lastBackgroundClass, newBackgroundClass, self.FADE_DURATION, ()=>{
            self.runNextFadeTransition();
        });
        this.updateNextImageIndex();
    }
    getImageClassByIndex(index, overrideImageMode) {
        var rectifiedIndex = (index % this.currentFilm.length + this.currentFilm.length) % this.currentFilm.length;
        var rectifiedImageMode = overrideImageMode !== undefined ? overrideImageMode : this.imageMode;
        return rectifiedImageMode == $0b2227309f98042b$var$ImageMode.NORMAL ? this.currentFilm[rectifiedIndex].normal : this.currentFilm[rectifiedIndex].saturated;
    }
    onScrollIn() {
        this.clearAllImageClasses();
        this.setForegroundToAppear();
        this.setForegroundAnimationToRunning();
        this.setThisBackgroundInProvider();
    }
    onScrollOut() {
        this.setForegroundToDisappear();
        this.setForegroundAnimationToStop();
    }
    clearAllImageClasses() {
        (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`#${this.foregroundSelector}`).removeClass(this.initialImageClass);
        for(let i = 0; i < this.currentFilm.length; i++){
            (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`#${this.foregroundSelector}`).removeClass(this.getImageClassByIndex(i, $0b2227309f98042b$var$ImageMode.NORMAL));
            (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`#${this.backgroundSelector}`).removeClass(this.getImageClassByIndex(i, $0b2227309f98042b$var$ImageMode.NORMAL));
            (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`#${this.foregroundSelector}`).removeClass(this.getImageClassByIndex(i, $0b2227309f98042b$var$ImageMode.SATURATED));
            (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`#${this.backgroundSelector}`).removeClass(this.getImageClassByIndex(i, $0b2227309f98042b$var$ImageMode.SATURATED));
        }
    }
    decrementImageIndex() {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.currentFilm.length;
    }
    updateNextImageIndex() {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.currentFilm.length;
    }
    setForegroundToAppear() {
        (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`#${this.foregroundSelector}`).css("visibility", "visible");
        (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`#${this.foregroundSelector}`).css("opacity", "0");
    }
    setForegroundToDisappear() {
        (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`#${this.foregroundSelector}`).css("visibility", "hidden");
    }
    setForegroundAnimationToStop() {
        (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`#${this.foregroundSelector}`).stop();
    }
    setForegroundAnimationToRunning() {
        this.runNextFadeTransition();
    }
    setToFocused() {
        this.setForegroundAnimationToStop();
        this.runSaturatedImageTransition();
    }
    setToDefocused() {
        this.setForegroundAnimationToStop();
        this.runNormalImageTransition();
    }
    runNormalImageTransition() {
        const fromClass = this.getImageClassByIndex(this.currentImageIndex); // Saturated img
        this.imageMode = $0b2227309f98042b$var$ImageMode.NORMAL; // As mode changes, the image would be in normal saturation.
        const toClass = this.getImageClassByIndex(this.currentImageIndex); // Normal img
        this.runFadeTransition(fromClass, toClass, this.FADE_DURATION_FAST, ()=>{});
    }
    runSaturatedImageTransition() {
        const self = this;
        const fromClass = this.getImageClassByIndex(this.currentImageIndex); // Normal img
        this.imageMode = $0b2227309f98042b$var$ImageMode.SATURATED;
        const toClass = this.getImageClassByIndex(this.currentImageIndex); // Saturated img
        this.runFadeTransition(fromClass, toClass, this.FADE_DURATION_FAST, ()=>{
            self.decrementImageIndex();
            self.runNextFadeTransition();
        });
    }
    setThisBackgroundInProvider() {
        this.backgroundProvider.setState({
            currentBackground: this
        });
    }
}


class $9cf76daebca51d7f$export$8b2af884909d32a5 {
    static getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"), results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return "";
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }
}




class $fa59b3734b65cb80$export$ac5ee7c535a378f2 {
    constructor(selector){
        this.selector = selector;
    }
    attach() {
    // As the component is built it is usually not active in the beginning.
    // The built component preserves input data, 
    // such as the text in the input field.
    // Like component's build, this function acts 
    // to attach the mixin to the DOM (usually body).
    // And it is usually called in the constructor 
    // or in onShow() of the mixin class itself.
    }
    remove() {
    // Used to remove the element from DOM.
    }
    onShow() {
    // This consequently defocuses the background
    // and the mixin shows.
    }
    onHide() {
    // This consequently re-focuses the background
    // and the mixin hides.
    }
    onReset() {
    // This function should be used to clear input data within the component.
    }
}
var $fa59b3734b65cb80$export$2e2bcd8739ae039 = $fa59b3734b65cb80$export$ac5ee7c535a378f2;






class $1e2334c1abe10ce2$export$538f4907ecbdf6c9 extends (0, $fa59b3734b65cb80$export$2e2bcd8739ae039) {
    constructor(selector, correlatedMixinOnHideCallback){
        super(selector);
        this.$veil = (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))("<div>").addClass("veil");
        this.backgroundProvider = (0, $d85ba840fc4ba32d$export$2e2bcd8739ae039).getInstance((0, $e2512952e94e97b1$export$bd8f39ef8e3d2b92).BACKGROUND, {
            currentBackground: this
        });
        this.correlatedMixinOnHideCallback = correlatedMixinOnHideCallback;
    }
    attach() {
        const self = this;
        this.$veil.on("click", ()=>{
            // Doesn't call veil's onHide. Runs onHide on the correlated mixin side.
            self.correlatedMixinOnHideCallback && self.correlatedMixinOnHideCallback();
        });
        (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))("body").append(this.$veil);
    }
    remove() {
        this.$veil.remove();
    }
    onShow() {
        this.getBackgroundFromProvider().setToDefocused();
        this.$veil.stop();
        this.$veil.css("visibility", "visible");
        this.$veil.css("opacity", 1);
    }
    onHide() {
        this.getBackgroundFromProvider().setToFocused();
        this.$veil.stop();
        this.$veil.css("visibility", "hidden");
        this.$veil.css("opacity", 0);
    }
    getBackgroundFromProvider() {
        return this.backgroundProvider.getState().currentBackground;
    }
}
var $1e2334c1abe10ce2$export$2e2bcd8739ae039 = $1e2334c1abe10ce2$export$538f4907ecbdf6c9;



class $7116625350640228$export$9ec96c1202e80f50 extends (0, $fa59b3734b65cb80$export$2e2bcd8739ae039) {
    constructor(selector, title = ""){
        super(selector);
        this.veil = new (0, $1e2334c1abe10ce2$export$2e2bcd8739ae039)(`${this.selector}-veil`, ()=>{
            this.onHide();
        });
        this.title = title;
        this.$dialogElement = (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))("<div>").addClass("dialog-element");
        this.$dialogElement.append(this.buildTitleBar());
    }
    attach() {
        this.veil.attach();
        (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))("body").append(this.$dialogElement);
    }
    remove() {
        this.veil.remove();
        this.$dialogElement.remove();
    }
    buildTitleBar() {
        const $titleBar = (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))("<div>").addClass("title-bar");
        const $title = (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))("<h1>").text(this.title);
        const $closeIcon = (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))("<div>").addClass([
            "close-button",
            "icon-x"
        ]);
        // $closeIcon.attr('height', '1.2rem');
        $closeIcon.on("click", ()=>{
            this.onHide();
        });
        $titleBar.append([
            $title,
            $closeIcon
        ]);
        return $titleBar;
    }
    onShow() {
        this.veil.onShow();
        this.$dialogElement.stop();
        this.$dialogElement.css("visibility", "visible");
        this.$dialogElement.animate({
            "opacity": 1
        }, (0, $e2512952e94e97b1$export$a002182e51710d39).ANIMATION_DURATION_SLOW);
    }
    onHide() {
        this.veil.onHide();
        this.$dialogElement.stop();
        this.$dialogElement.animate({
            "opacity": 0
        }, (0, $e2512952e94e97b1$export$a002182e51710d39).ANIMATION_DURATION_DEFAULT, ()=>{
            this.$dialogElement.css("visibility", "hidden");
        });
    }
}
var $7116625350640228$export$2e2bcd8739ae039 = $7116625350640228$export$9ec96c1202e80f50;



class $d019d8b17b73abd9$export$5e59bf6ad84f152d extends (0, $7116625350640228$export$2e2bcd8739ae039) {
    constructor(){
        super((0, $e2512952e94e97b1$export$87e9c2ff338a8575).EMAIL_FLOATING_DIALOG, "Contact the Creator");
        this.RECIPIENT_EMAIL = `wuchuyue2014@gmail.com`;
        // Create input fields
        this.$dialogElement.append(this.buildLeadingSubtitle());
        this.$dialogElement.append(this.buildForm());
        // Append the dialog element to the body
        this.attach();
    }
    buildLeadingSubtitle() {
        const self = this;
        const $subtitle = (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))("<div>");
        $subtitle.append((0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))("<p>").text(`
            Thank you for your interest in reaching out! 
            Please use the following form to send a personal email to me.`));
        const $lastParagraph = (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`<p>`).text(`
            Alternatively, 
            you may send to ${self.RECIPIENT_EMAIL}
        `);
        const $icon = (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))("<div>").addClass([
            "text-icon-button",
            "baseline",
            "icon-copy"
        ]);
        $icon.on("click", function() {
            navigator.clipboard.writeText(self.RECIPIENT_EMAIL).then(()=>{});
        });
        $lastParagraph.append($icon);
        $lastParagraph.append(`.`);
        $subtitle.append($lastParagraph);
        return $subtitle;
    }
    buildForm() {
        const self = this;
        const form = (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`<form>`).attr({
            action: `https://formspree.io/f/xyyqqypk`,
            method: "POST"
        });
        const nameGroup = (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))("<div>").addClass("input-group");
        const nameRequired = (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))("<span>").addClass("required").text("*");
        const nameLabel = (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))("<label>").append(nameRequired).append("Name or Organization");
        const nameInput = (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))("<input>").attr({
            type: "text",
            id: "name",
            required: true
        });
        const emailGroup = (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))("<div>").addClass("input-group");
        const emailRequired = (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))("<span>").addClass("required").text("*");
        const emailLabel = (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))("<label>").append(emailRequired).append("Email");
        const emailInput = (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))("<input>").attr({
            type: "email",
            id: "email",
            required: true
        });
        const messageGroup = (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))("<div>").addClass("input-group");
        const messageRequired = (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))("<span>").addClass("required").text("*");
        const messageLabel = (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))("<label>").append(messageRequired).append("Message");
        const messageInput = (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))("<textarea>").attr({
            name: "body",
            id: "message",
            rows: "4",
            required: true
        });
        const submitRow = (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))("<div>").addClass("row-group");
        const submitButton = (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))("<input>").attr({
            type: "submit",
            value: "Submit"
        });
        nameGroup.append(nameLabel, nameInput);
        emailGroup.append(emailLabel, emailInput);
        messageGroup.append(messageLabel, messageInput);
        submitRow.append(submitButton);
        const keyInfoRow = (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))("<div>").addClass("row-group");
        keyInfoRow.append(nameGroup, emailGroup);
        form.append(keyInfoRow, messageGroup, submitRow);
        return form;
    }
}
var $d019d8b17b73abd9$export$2e2bcd8739ae039 = $d019d8b17b73abd9$export$5e59bf6ad84f152d;





class $758bf46a2e563ce9$export$deb44a668b98bd04 extends (0, $dbf738cadf6256bb$export$2e2bcd8739ae039) {
    constructor(selector, { title: title, subtitle: subtitle, dateBegun: dateBegun, dateEnded: dateEnded = "", imageClass: imageClass, imageHeight: imageHeight, imageWidth: imageWidth, imageTitle: imageTitle, overview: overview }, overviewDialog){
        super(selector);
        this.containerSelector = `${this.selector}-container`;
        const self = this;
        this.overviewDialog = overviewDialog;
        const $timestamp = (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`<div>`).html(`<p class="i timestamp">${dateBegun}<br>- ${dateEnded}<p>`);
        const $image = (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`<div title="${imageTitle}">`).addClass(`${imageClass} x-scrollable-image`);
        if (imageHeight) $image.css("height", imageHeight);
        if (imageWidth) $image.css("width", imageWidth);
        const $titleBar = (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`<div>`).addClass("title-bar").append((0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`<h1>`).text(title)).append($timestamp);
        const $subtitle = (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`<p class="i">`).css({
            "margin": "0",
            "padding": "0"
        }).text(subtitle ? subtitle : "");
        const $overview = (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`<p>`).text(overview);
        this.$container = (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`<div id=${self.containerSelector}>`).addClass("container").append($image).append($titleBar).append($subtitle).append($overview);
        this.$constructedElement = (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`<div id=${selector}>`).addClass("x-scrollable-item").addClass("col-abs-width").addClass("col-default-padding").append(this.$container);
        this.setUpOnClick();
    }
    setUpOnClick() {
        const self = this;
        if (this.overviewDialog) {
            (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(document).on("click", `#${self.selector}`, ()=>{
                self.onClick();
            });
            this.$container.addClass("clickable");
        }
    }
    onClick() {
        // Display corresponding overview dialog.
        this.overviewDialog.onBuildAndShow();
    }
}
var $758bf46a2e563ce9$export$2e2bcd8739ae039 = $758bf46a2e563ce9$export$deb44a668b98bd04;






class $3f176cadda5203f0$export$9df25d9b4c88ba1d extends (0, $dbf738cadf6256bb$export$2e2bcd8739ae039) {
    constructor(selector){
        super(selector);
        this.firstScrollInComplete = false;
        this.titleSelector = `${this.selector}-title`;
        this.subtitleSelector = `${this.selector}-subtitle`;
        this.scrollDownIconSelector = `${this.selector}-scroll-down-icon`;
        const self = this;
        const $title = (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`<div id="${self.titleSelector}">`).html(`
                <h0 class="section-margin">
                    Behold the 
                    <i style="font-weight: lighter;">future</i> 
                    of portfolios.
                </h0>`).css("opacity", "0.4").addClass("section-default-page-margin");
        const $subtitle = (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`<div id="${self.subtitleSelector}">`).html(`<p0 class="section-margin">
                    A web experience designed by Chuyue Wu.
                </p0>`).css("opacity", "0.4").addClass("section-default-page-margin");
        const $scrollDownIcon = (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`<div id="${self.scrollDownIconSelector}">`);
        $scrollDownIcon.addClass("scroll-down-icon");
        const scrollDownIcon = (0, $766f7e1ec7548f74$export$1ca1ec8b29a4ce27)({
            prefix: "far",
            iconName: "circle-down"
        });
        $scrollDownIcon.append(scrollDownIcon.node[0]).css("opacity", "0");
        this.$constructedElement = (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`<div id="${selector}">`).append($title).append($subtitle).append($scrollDownIcon);
    }
    onAttachBeforeScrollIn() {
        (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`#${this.titleSelector}`).animate({
            "opacity": "1"
        }, (0, $e2512952e94e97b1$export$a002182e51710d39).ANIMATION_DURATION_SLOWER, ()=>{
            (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`#${this.subtitleSelector}`).animate({
                "opacity": "1"
            }, (0, $e2512952e94e97b1$export$a002182e51710d39).ANIMATION_DURATION_SLOWER, ()=>{
                (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`#${this.scrollDownIconSelector}`).delay(1000).animate({
                    "opacity": "1"
                }, (0, $e2512952e94e97b1$export$a002182e51710d39).ANIMATION_DURATION_SLOWER);
            });
        });
    }
    onScrollOut() {
        this.setTitleSubtitleToFullyShow();
        this.setScrollDownIconToDisappear();
    }
    onScrollIn() {
        if (this.firstScrollInComplete) {
            this.setTitleSubtitleToFullyShow();
            this.setScrollDownIconToAppear();
        } else this.firstScrollInComplete = true;
    }
    setTitleSubtitleToFullyShow() {
        (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`#${this.titleSelector}`).stop();
        (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`#${this.titleSelector}`).css("opacity", "1");
        (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`#${this.subtitleSelector}`).stop();
        (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`#${this.subtitleSelector}`).css("opacity", "1");
    }
    setScrollDownIconToDisappear() {
        (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`#${this.scrollDownIconSelector}`).stop();
        (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`#${this.scrollDownIconSelector}`).css({
            "visibility": "hidden"
        });
    }
    setScrollDownIconToAppear() {
        (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`#${this.scrollDownIconSelector}`).stop();
        (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`#${this.scrollDownIconSelector}`).css({
            "opacity": "0"
        });
        (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`#${this.scrollDownIconSelector}`).css({
            "visibility": "visible"
        });
        (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`#${this.scrollDownIconSelector}`).animate({
            "opacity": "1"
        }, (0, $e2512952e94e97b1$export$a002182e51710d39).ANIMATION_DURATION_SLOWER);
    }
}
var $3f176cadda5203f0$export$2e2bcd8739ae039 = $3f176cadda5203f0$export$9df25d9b4c88ba1d;



var $d95f73952ede904a$export$82e9f45cca5ba907 = "far";
var $d95f73952ede904a$export$864bb8d6c21fb792 = {
    prefix: "far",
    iconName: "trash-can",
    icon: [
        448,
        512,
        [
            61460,
            "trash-alt"
        ],
        "f2ed",
        "M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z"
    ]
};
var $d95f73952ede904a$export$88df7ff7eb32f9dc = $d95f73952ede904a$export$864bb8d6c21fb792;
var $d95f73952ede904a$export$6563a67224e7f879 = {
    prefix: "far",
    iconName: "message",
    icon: [
        512,
        512,
        [
            "comment-alt"
        ],
        "f27a",
        "M160 368c26.5 0 48 21.5 48 48v16l72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6H448c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16V352c0 8.8 7.2 16 16 16h96zm48 124l-.2 .2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3V474.7v-6.4V468v-4V416H112 64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0H448c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H309.3L208 492z"
    ]
};
var $d95f73952ede904a$export$6e96904d9af0ec4a = $d95f73952ede904a$export$6563a67224e7f879;
var $d95f73952ede904a$export$ef565d07efe2b5e9 = {
    prefix: "far",
    iconName: "file-lines",
    icon: [
        384,
        512,
        [
            128441,
            128462,
            61686,
            "file-alt",
            "file-text"
        ],
        "f15c",
        "M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120z"
    ]
};
var $d95f73952ede904a$export$243b47dca32bf0b8 = $d95f73952ede904a$export$ef565d07efe2b5e9;
var $d95f73952ede904a$export$f466100bf9bf37a5 = $d95f73952ede904a$export$ef565d07efe2b5e9;
var $d95f73952ede904a$export$31c6cf6f5d38dc0 = {
    prefix: "far",
    iconName: "calendar-days",
    icon: [
        448,
        512,
        [
            "calendar-alt"
        ],
        "f073",
        "M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192h80v56H48V192zm0 104h80v64H48V296zm128 0h96v64H176V296zm144 0h80v64H320V296zm80-48H320V192h80v56zm0 160v40c0 8.8-7.2 16-16 16H320V408h80zm-128 0v56H176V408h96zm-144 0v56H64c-8.8 0-16-7.2-16-16V408h80zM272 248H176V192h96v56z"
    ]
};
var $d95f73952ede904a$export$cbc139f33cff356 = $d95f73952ede904a$export$31c6cf6f5d38dc0;
var $d95f73952ede904a$export$f7bc8714c970afa4 = {
    prefix: "far",
    iconName: "hand-point-right",
    icon: [
        512,
        512,
        [],
        "f0a4",
        "M448 128l-177.6 0c1 5.2 1.6 10.5 1.6 16l0 16 32 0 144 0c8.8 0 16-7.2 16-16s-7.2-16-16-16zM224 144c0-17.7-14.3-32-32-32c0 0 0 0 0 0l-24 0c-66.3 0-120 53.7-120 120l0 48c0 52.5 33.7 97.1 80.7 113.4c-.5-3.1-.7-6.2-.7-9.4c0-20 9.2-37.9 23.6-49.7c-4.9-9-7.6-19.4-7.6-30.3c0-15.1 5.3-29 14-40c-8.8-11-14-24.9-14-40l0-40c0-13.3 10.7-24 24-24s24 10.7 24 24l0 40c0 8.8 7.2 16 16 16s16-7.2 16-16l0-40 0-40zM192 64s0 0 0 0c18 0 34.6 6 48 16l208 0c35.3 0 64 28.7 64 64s-28.7 64-64 64l-82 0c1.3 5.1 2 10.5 2 16c0 25.3-14.7 47.2-36 57.6c2.6 7 4 14.5 4 22.4c0 20-9.2 37.9-23.6 49.7c4.9 9 7.6 19.4 7.6 30.3c0 35.3-28.7 64-64 64l-64 0-24 0C75.2 448 0 372.8 0 280l0-48C0 139.2 75.2 64 168 64l24 0zm64 336c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l64 0zm16-176c0 5.5-.7 10.9-2 16l2 0 32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0 0 16zm-24 64l-40 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 16 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-24 0z"
    ]
};
var $d95f73952ede904a$export$e3c56ed54f074063 = {
    prefix: "far",
    iconName: "face-smile-beam",
    icon: [
        512,
        512,
        [
            128522,
            "smile-beam"
        ],
        "f5b8",
        "M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm177.6 62.1C192.8 334.5 218.8 352 256 352s63.2-17.5 78.4-33.9c9-9.7 24.2-10.4 33.9-1.4s10.4 24.2 1.4 33.9c-22 23.8-60 49.4-113.6 49.4s-91.7-25.5-113.6-49.4c-9-9.7-8.4-24.9 1.4-33.9s24.9-8.4 33.9 1.4zm40-89.3l0 0 0 0-.2-.2c-.2-.2-.4-.5-.7-.9c-.6-.8-1.6-2-2.8-3.4c-2.5-2.8-6-6.6-10.2-10.3c-8.8-7.8-18.8-14-27.7-14s-18.9 6.2-27.7 14c-4.2 3.7-7.7 7.5-10.2 10.3c-1.2 1.4-2.2 2.6-2.8 3.4c-.3 .4-.6 .7-.7 .9l-.2 .2 0 0 0 0 0 0c-2.1 2.8-5.7 3.9-8.9 2.8s-5.5-4.1-5.5-7.6c0-17.9 6.7-35.6 16.6-48.8c9.8-13 23.9-23.2 39.4-23.2s29.6 10.2 39.4 23.2c9.9 13.2 16.6 30.9 16.6 48.8c0 3.4-2.2 6.5-5.5 7.6s-6.9 0-8.9-2.8l0 0 0 0zm160 0l0 0-.2-.2c-.2-.2-.4-.5-.7-.9c-.6-.8-1.6-2-2.8-3.4c-2.5-2.8-6-6.6-10.2-10.3c-8.8-7.8-18.8-14-27.7-14s-18.9 6.2-27.7 14c-4.2 3.7-7.7 7.5-10.2 10.3c-1.2 1.4-2.2 2.6-2.8 3.4c-.3 .4-.6 .7-.7 .9l-.2 .2 0 0 0 0 0 0c-2.1 2.8-5.7 3.9-8.9 2.8s-5.5-4.1-5.5-7.6c0-17.9 6.7-35.6 16.6-48.8c9.8-13 23.9-23.2 39.4-23.2s29.6 10.2 39.4 23.2c9.9 13.2 16.6 30.9 16.6 48.8c0 3.4-2.2 6.5-5.5 7.6s-6.9 0-8.9-2.8l0 0 0 0 0 0z"
    ]
};
var $d95f73952ede904a$export$54ada6dc9690e0ca = $d95f73952ede904a$export$e3c56ed54f074063;
var $d95f73952ede904a$export$1d1fbac384a76a12 = {
    prefix: "far",
    iconName: "face-grin-stars",
    icon: [
        512,
        512,
        [
            129321,
            "grin-stars"
        ],
        "f587",
        "M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM183.2 132.6c-1.3-2.8-4.1-4.6-7.2-4.6s-5.9 1.8-7.2 4.6l-16.6 34.7-38.1 5c-3.1 .4-5.6 2.5-6.6 5.5s-.1 6.2 2.1 8.3l27.9 26.5-7 37.8c-.6 3 .7 6.1 3.2 7.9s5.8 2 8.5 .6L176 240.5l33.8 18.3c2.7 1.5 6 1.3 8.5-.6s3.7-4.9 3.2-7.9l-7-37.8L242.4 186c2.2-2.1 3.1-5.3 2.1-8.3s-3.5-5.1-6.6-5.5l-38.1-5-16.6-34.7zm160 0c-1.3-2.8-4.1-4.6-7.2-4.6s-5.9 1.8-7.2 4.6l-16.6 34.7-38.1 5c-3.1 .4-5.6 2.5-6.6 5.5s-.1 6.2 2.1 8.3l27.9 26.5-7 37.8c-.6 3 .7 6.1 3.2 7.9s5.8 2 8.5 .6L336 240.5l33.8 18.3c2.7 1.5 6 1.3 8.5-.6s3.7-4.9 3.2-7.9l-7-37.8L402.4 186c2.2-2.1 3.1-5.3 2.1-8.3s-3.5-5.1-6.6-5.5l-38.1-5-16.6-34.7zm6.3 175.8c-28.9 6.8-60.5 10.5-93.6 10.5s-64.7-3.7-93.6-10.5c-18.7-4.4-35.9 12-25.5 28.1c24.6 38.1 68.7 63.5 119.1 63.5s94.5-25.4 119.1-63.5c10.4-16.1-6.8-32.5-25.5-28.1z"
    ]
};
var $d95f73952ede904a$export$64347a5c8c402ef4 = $d95f73952ede904a$export$1d1fbac384a76a12;
var $d95f73952ede904a$export$853fd1561789e3bb = {
    prefix: "far",
    iconName: "address-book",
    icon: [
        512,
        512,
        [
            62138,
            "contact-book"
        ],
        "f2b9",
        "M384 48c8.8 0 16 7.2 16 16V448c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H384zM96 0C60.7 0 32 28.7 32 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H96zM240 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm-32 32c-44.2 0-80 35.8-80 80c0 8.8 7.2 16 16 16H336c8.8 0 16-7.2 16-16c0-44.2-35.8-80-80-80H208zM512 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V80zM496 192c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm16 144c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V336z"
    ]
};
var $d95f73952ede904a$export$594b5a5d4d2e156b = $d95f73952ede904a$export$853fd1561789e3bb;
var $d95f73952ede904a$export$932912e74adb8939 = {
    prefix: "far",
    iconName: "comments",
    icon: [
        640,
        512,
        [
            128490,
            61670
        ],
        "f086",
        "M88.2 309.1c9.8-18.3 6.8-40.8-7.5-55.8C59.4 230.9 48 204 48 176c0-63.5 63.8-128 160-128s160 64.5 160 128s-63.8 128-160 128c-13.1 0-25.8-1.3-37.8-3.6c-10.4-2-21.2-.6-30.7 4.2c-4.1 2.1-8.3 4.1-12.6 6c-16 7.2-32.9 13.5-49.9 18c2.8-4.6 5.4-9.1 7.9-13.6c1.1-1.9 2.2-3.9 3.2-5.9zM0 176c0 41.8 17.2 80.1 45.9 110.3c-.9 1.7-1.9 3.5-2.8 5.1c-10.3 18.4-22.3 36.5-36.6 52.1c-6.6 7-8.3 17.2-4.6 25.9C5.8 378.3 14.4 384 24 384c43 0 86.5-13.3 122.7-29.7c4.8-2.2 9.6-4.5 14.2-6.8c15.1 3 30.9 4.5 47.1 4.5c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176zM432 480c16.2 0 31.9-1.6 47.1-4.5c4.6 2.3 9.4 4.6 14.2 6.8C529.5 498.7 573 512 616 512c9.6 0 18.2-5.7 22-14.5c3.8-8.8 2-19-4.6-25.9c-14.2-15.6-26.2-33.7-36.6-52.1c-.9-1.7-1.9-3.4-2.8-5.1C622.8 384.1 640 345.8 640 304c0-94.4-87.9-171.5-198.2-175.8c4.1 15.2 6.2 31.2 6.2 47.8l0 .6c87.2 6.7 144 67.5 144 127.4c0 28-11.4 54.9-32.7 77.2c-14.3 15-17.3 37.6-7.5 55.8c1.1 2 2.2 4 3.2 5.9c2.5 4.5 5.2 9 7.9 13.6c-17-4.5-33.9-10.7-49.9-18c-4.3-1.9-8.5-3.9-12.6-6c-9.5-4.8-20.3-6.2-30.7-4.2c-12.1 2.4-24.7 3.6-37.8 3.6c-61.7 0-110-26.5-136.8-62.3c-16 5.4-32.8 9.4-50 11.8C279 439.8 350 480 432 480z"
    ]
};
var $d95f73952ede904a$export$6f95f90dd1f6d86b = {
    prefix: "far",
    iconName: "paste",
    icon: [
        512,
        512,
        [
            "file-clipboard"
        ],
        "f0ea",
        "M104.6 48H64C28.7 48 0 76.7 0 112V384c0 35.3 28.7 64 64 64h96V400H64c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H80c0 17.7 14.3 32 32 32h72.4C202 108.4 227.6 96 256 96h62c-7.1-27.6-32.2-48-62-48H215.4C211.6 20.9 188.2 0 160 0s-51.6 20.9-55.4 48zM144 56a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM448 464H256c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16l140.1 0L464 243.9V448c0 8.8-7.2 16-16 16zM256 512H448c35.3 0 64-28.7 64-64V243.9c0-12.7-5.1-24.9-14.1-33.9l-67.9-67.9c-9-9-21.2-14.1-33.9-14.1H256c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64z"
    ]
};
var $d95f73952ede904a$export$ca3229c47de163fa = $d95f73952ede904a$export$6f95f90dd1f6d86b;
var $d95f73952ede904a$export$8eee2c17ff89e724 = {
    prefix: "far",
    iconName: "face-grin-tongue-squint",
    icon: [
        512,
        512,
        [
            128541,
            "grin-tongue-squint"
        ],
        "f58a",
        "M464 256c0-114.9-93.1-208-208-208S48 141.1 48 256c0 81.7 47.1 152.4 115.7 186.4c-2.4-8.4-3.7-17.3-3.7-26.4V392.7c-24-17.5-43.1-41.4-54.8-69.2c-5-11.8 7-22.5 19.3-18.7c39.7 12.2 84.5 19 131.8 19s92.1-6.8 131.8-19c12.3-3.8 24.3 6.9 19.3 18.7c-11.8 28-31.1 52-55.4 69.6V416c0 9.2-1.3 18-3.7 26.4C416.9 408.4 464 337.7 464 256zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm116-98.9c0-9 9.6-14.7 17.5-10.5l89.9 47.9c10.7 5.7 10.7 21.1 0 26.8l-89.9 47.9c-7.9 4.2-17.5-1.5-17.5-10.5c0-2.8 1-5.5 2.8-7.6l36-43.2-36-43.2c-1.8-2.1-2.8-4.8-2.8-7.6zm262.5-10.5c7.9-4.2 17.5 1.5 17.5 10.5c0 2.8-1 5.5-2.8 7.6l-36 43.2 36 43.2c1.8 2.1 2.8 4.8 2.8 7.6c0 9-9.6 14.7-17.5 10.5l-89.9-47.9c-10.7-5.7-10.7-21.1 0-26.8l89.9-47.9zM320 416V378.6c0-14.7-11.9-26.6-26.6-26.6h-2c-11.3 0-21.1 7.9-23.6 18.9c-2.8 12.6-20.8 12.6-23.6 0c-2.5-11.1-12.3-18.9-23.6-18.9h-2c-14.7 0-26.6 11.9-26.6 26.6V416c0 35.3 28.7 64 64 64s64-28.7 64-64z"
    ]
};
var $d95f73952ede904a$export$4edf34c3def09a31 = $d95f73952ede904a$export$8eee2c17ff89e724;
var $d95f73952ede904a$export$ba5dc4287853ecbd = {
    prefix: "far",
    iconName: "face-flushed",
    icon: [
        512,
        512,
        [
            128563,
            "flushed"
        ],
        "f579",
        "M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM160.4 248a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm216-24a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM192 336c-13.3 0-24 10.7-24 24s10.7 24 24 24H320c13.3 0 24-10.7 24-24s-10.7-24-24-24H192zM160 176a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm0 128a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm144-80a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm128 0a80 80 0 1 0 -160 0 80 80 0 1 0 160 0z"
    ]
};
var $d95f73952ede904a$export$dfd2bd012685aeac = $d95f73952ede904a$export$ba5dc4287853ecbd;
var $d95f73952ede904a$export$5b1d41cdd118ea6d = {
    prefix: "far",
    iconName: "square-caret-right",
    icon: [
        448,
        512,
        [
            "caret-square-right"
        ],
        "f152",
        "M400 96c0-8.8-7.2-16-16-16L64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320zM384 32c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0zM320 256c0 6.7-2.8 13-7.7 17.6l-112 104c-7 6.5-17.2 8.2-25.9 4.4s-14.4-12.5-14.4-22l0-208c0-9.5 5.7-18.2 14.4-22s18.9-2.1 25.9 4.4l112 104c4.9 4.5 7.7 10.9 7.7 17.6z"
    ]
};
var $d95f73952ede904a$export$ae86c9de7e0f62fa = $d95f73952ede904a$export$5b1d41cdd118ea6d;
var $d95f73952ede904a$export$814c9edba7b84aa4 = {
    prefix: "far",
    iconName: "square-minus",
    icon: [
        448,
        512,
        [
            61767,
            "minus-square"
        ],
        "f146",
        "M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM152 232H296c13.3 0 24 10.7 24 24s-10.7 24-24 24H152c-13.3 0-24-10.7-24-24s10.7-24 24-24z"
    ]
};
var $d95f73952ede904a$export$ffe9387966b3e681 = $d95f73952ede904a$export$814c9edba7b84aa4;
var $d95f73952ede904a$export$b4d344633433e50e = {
    prefix: "far",
    iconName: "compass",
    icon: [
        512,
        512,
        [
            129517
        ],
        "f14e",
        "M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm306.7 69.1L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"
    ]
};
var $d95f73952ede904a$export$a1ab39cd66c4e50e = {
    prefix: "far",
    iconName: "square-caret-down",
    icon: [
        448,
        512,
        [
            "caret-square-down"
        ],
        "f150",
        "M384 432c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0zm64-16c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320zM224 352c-6.7 0-13-2.8-17.6-7.7l-104-112c-6.5-7-8.2-17.2-4.4-25.9s12.5-14.4 22-14.4l208 0c9.5 0 18.2 5.7 22 14.4s2.1 18.9-4.4 25.9l-104 112c-4.5 4.9-10.9 7.7-17.6 7.7z"
    ]
};
var $d95f73952ede904a$export$61aea18df1c84401 = $d95f73952ede904a$export$a1ab39cd66c4e50e;
var $d95f73952ede904a$export$eca99665af566fe1 = {
    prefix: "far",
    iconName: "face-kiss-beam",
    icon: [
        512,
        512,
        [
            128537,
            "kiss-beam"
        ],
        "f597",
        "M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm304.7 41.7c4.3 5.1 7.3 11.4 7.3 18.3s-3.1 13.2-7.3 18.3c-4.3 5.2-10.1 9.7-16.7 13.4c-2.7 1.5-5.7 3-8.7 4.3c3.1 1.3 6 2.7 8.7 4.3c6.6 3.7 12.5 8.2 16.7 13.4c4.3 5.1 7.3 11.4 7.3 18.3s-3.1 13.2-7.3 18.3c-4.3 5.2-10.1 9.7-16.7 13.4C274.7 427.1 257.4 432 240 432c-3.6 0-6.8-2.5-7.7-6s.6-7.2 3.8-9l0 0 0 0 0 0 0 0 .2-.1c.2-.1 .5-.3 .9-.5c.8-.5 2-1.2 3.4-2.1c2.8-1.9 6.5-4.5 10.2-7.6c3.7-3.1 7.2-6.6 9.6-10.1c2.5-3.5 3.5-6.4 3.5-8.6s-1-5-3.5-8.6c-2.5-3.5-5.9-6.9-9.6-10.1c-3.7-3.1-7.4-5.7-10.2-7.6c-1.4-.9-2.6-1.6-3.4-2.1c-.4-.2-.7-.4-.9-.5l-.2-.1 0 0 0 0 0 0c-2.5-1.4-4.1-4.1-4.1-7s1.6-5.6 4.1-7l0 0 0 0 0 0 0 0 0 0 .2-.1c.2-.1 .5-.3 .9-.5c.8-.5 2-1.2 3.4-2.1c2.8-1.9 6.5-4.5 10.2-7.6c3.7-3.1 7.2-6.6 9.6-10.1c2.5-3.5 3.5-6.4 3.5-8.6s-1-5-3.5-8.6c-2.5-3.5-5.9-6.9-9.6-10.1c-3.7-3.1-7.4-5.7-10.2-7.6c-1.4-.9-2.6-1.6-3.4-2.1c-.4-.2-.7-.4-.9-.5l-.2-.1 0 0 0 0 0 0c-3.2-1.8-4.7-5.5-3.8-9s4.1-6 7.7-6c17.4 0 34.7 4.9 47.9 12.3c6.6 3.7 12.5 8.2 16.7 13.4zm-87.1-68.9l0 0 0 0-.2-.2c-.2-.2-.4-.5-.7-.9c-.6-.8-1.6-2-2.8-3.4c-2.5-2.8-6-6.6-10.2-10.3c-8.8-7.8-18.8-14-27.7-14s-18.9 6.2-27.7 14c-4.2 3.7-7.7 7.5-10.2 10.3c-1.2 1.4-2.2 2.6-2.8 3.4c-.3 .4-.6 .7-.7 .9l-.2 .2 0 0 0 0 0 0c-2.1 2.8-5.7 3.9-8.9 2.8s-5.5-4.1-5.5-7.6c0-17.9 6.7-35.6 16.6-48.8c9.8-13 23.9-23.2 39.4-23.2s29.6 10.2 39.4 23.2c9.9 13.2 16.6 30.9 16.6 48.8c0 3.4-2.2 6.5-5.5 7.6s-6.9 0-8.9-2.8l0 0 0 0zm160 0l0 0-.2-.2c-.2-.2-.4-.5-.7-.9c-.6-.8-1.6-2-2.8-3.4c-2.5-2.8-6-6.6-10.2-10.3c-8.8-7.8-18.8-14-27.7-14s-18.9 6.2-27.7 14c-4.2 3.7-7.7 7.5-10.2 10.3c-1.2 1.4-2.2 2.6-2.8 3.4c-.3 .4-.6 .7-.7 .9l-.2 .2 0 0 0 0 0 0c-2.1 2.8-5.7 3.9-8.9 2.8s-5.5-4.1-5.5-7.6c0-17.9 6.7-35.6 16.6-48.8c9.8-13 23.9-23.2 39.4-23.2s29.6 10.2 39.4 23.2c9.9 13.2 16.6 30.9 16.6 48.8c0 3.4-2.2 6.5-5.5 7.6s-6.9 0-8.9-2.8l0 0 0 0 0 0z"
    ]
};
var $d95f73952ede904a$export$d6ff8a73c0812e63 = $d95f73952ede904a$export$eca99665af566fe1;
var $d95f73952ede904a$export$1e80f89fe84a215b = {
    prefix: "far",
    iconName: "lightbulb",
    icon: [
        384,
        512,
        [
            128161
        ],
        "f0eb",
        "M297.2 248.9C311.6 228.3 320 203.2 320 176c0-70.7-57.3-128-128-128S64 105.3 64 176c0 27.2 8.4 52.3 22.8 72.9c3.7 5.3 8.1 11.3 12.8 17.7l0 0c12.9 17.7 28.3 38.9 39.8 59.8c10.4 19 15.7 38.8 18.3 57.5H109c-2.2-12-5.9-23.7-11.8-34.5c-9.9-18-22.2-34.9-34.5-51.8l0 0 0 0c-5.2-7.1-10.4-14.2-15.4-21.4C27.6 247.9 16 213.3 16 176C16 78.8 94.8 0 192 0s176 78.8 176 176c0 37.3-11.6 71.9-31.4 100.3c-5 7.2-10.2 14.3-15.4 21.4l0 0 0 0c-12.3 16.8-24.6 33.7-34.5 51.8c-5.9 10.8-9.6 22.5-11.8 34.5H226.4c2.6-18.7 7.9-38.6 18.3-57.5c11.5-20.9 26.9-42.1 39.8-59.8l0 0 0 0 0 0c4.7-6.4 9-12.4 12.7-17.7zM192 128c-26.5 0-48 21.5-48 48c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-44.2 35.8-80 80-80c8.8 0 16 7.2 16 16s-7.2 16-16 16zm0 384c-44.2 0-80-35.8-80-80V416H272v16c0 44.2-35.8 80-80 80z"
    ]
};
var $d95f73952ede904a$export$6591b1ea509be9da = {
    prefix: "far",
    iconName: "flag",
    icon: [
        448,
        512,
        [
            127988,
            61725
        ],
        "f024",
        "M48 24C48 10.7 37.3 0 24 0S0 10.7 0 24V64 350.5 400v88c0 13.3 10.7 24 24 24s24-10.7 24-24V388l80.3-20.1c41.1-10.3 84.6-5.5 122.5 13.4c44.2 22.1 95.5 24.8 141.7 7.4l34.7-13c12.5-4.7 20.8-16.6 20.8-30V66.1c0-23-24.2-38-44.8-27.7l-9.6 4.8c-46.3 23.2-100.8 23.2-147.1 0c-35.1-17.6-75.4-22-113.5-12.5L48 52V24zm0 77.5l96.6-24.2c27-6.7 55.5-3.6 80.4 8.8c54.9 27.4 118.7 29.7 175 6.8V334.7l-24.4 9.1c-33.7 12.6-71.2 10.7-103.4-5.4c-48.2-24.1-103.3-30.1-155.6-17.1L48 338.5v-237z"
    ]
};
var $d95f73952ede904a$export$5bb6a0c94ad2f4bb = {
    prefix: "far",
    iconName: "square-check",
    icon: [
        448,
        512,
        [
            9745,
            9989,
            61510,
            "check-square"
        ],
        "f14a",
        "M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
    ]
};
var $d95f73952ede904a$export$f0c8040f596df7fe = $d95f73952ede904a$export$5bb6a0c94ad2f4bb;
var $d95f73952ede904a$export$aa13d9234890e8d3 = {
    prefix: "far",
    iconName: "circle-dot",
    icon: [
        512,
        512,
        [
            128280,
            "dot-circle"
        ],
        "f192",
        "M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"
    ]
};
var $d95f73952ede904a$export$92bc269cb244d66a = $d95f73952ede904a$export$aa13d9234890e8d3;
var $d95f73952ede904a$export$635e4d8cc8428961 = {
    prefix: "far",
    iconName: "face-dizzy",
    icon: [
        512,
        512,
        [
            "dizzy"
        ],
        "f567",
        "M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM103 135c9.4-9.4 24.6-9.4 33.9 0l23 23 23-23c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-23 23 23 23c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-23-23-23 23c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l23-23-23-23c-9.4-9.4-9.4-24.6 0-33.9zm192 0c9.4-9.4 24.6-9.4 33.9 0l23 23 23-23c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-23 23 23 23c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-23-23-23 23c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l23-23-23-23c-9.4-9.4-9.4-24.6 0-33.9z"
    ]
};
var $d95f73952ede904a$export$89a2b10dabc487e8 = $d95f73952ede904a$export$635e4d8cc8428961;
var $d95f73952ede904a$export$65a345b33858a655 = {
    prefix: "far",
    iconName: "futbol",
    icon: [
        512,
        512,
        [
            9917,
            "futbol-ball",
            "soccer-ball"
        ],
        "f1e3",
        "M435.4 361.3l-89.7-6c-5.2-.3-10.3 1.1-14.5 4.2s-7.2 7.4-8.4 12.5l-22 87.2c-14.4 3.2-29.4 4.8-44.8 4.8s-30.3-1.7-44.8-4.8l-22-87.2c-1.3-5-4.3-9.4-8.4-12.5s-9.3-4.5-14.5-4.2l-89.7 6C61.7 335.9 51.9 307 49 276.2L125 228.3c4.4-2.8 7.6-7 9.2-11.9s1.4-10.2-.5-15L100.4 118c19.9-22.4 44.6-40.5 72.4-52.7l69.1 57.6c4 3.3 9 5.1 14.1 5.1s10.2-1.8 14.1-5.1l69.1-57.6c27.8 12.2 52.5 30.3 72.4 52.7l-33.4 83.4c-1.9 4.8-2.1 10.1-.5 15s4.9 9.1 9.2 11.9L463 276.2c-3 30.8-12.7 59.7-27.6 85.1zM256 48l.9 0h-1.8l.9 0zM56.7 196.2c.9-3 1.9-6.1 2.9-9.1l-2.9 9.1zM132 423l3.8 2.7c-1.3-.9-2.5-1.8-3.8-2.7zm248.1-.1c-1.3 1-2.7 2-4 2.9l4-2.9zm75.2-226.6l-3-9.2c1.1 3 2.1 6.1 3 9.2zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm14.1-325.7c-8.4-6.1-19.8-6.1-28.2 0L194 221c-8.4 6.1-11.9 16.9-8.7 26.8l18.3 56.3c3.2 9.9 12.4 16.6 22.8 16.6h59.2c10.4 0 19.6-6.7 22.8-16.6l18.3-56.3c3.2-9.9-.3-20.7-8.7-26.8l-47.9-34.8z"
    ]
};
var $d95f73952ede904a$export$51a344ca0a215620 = $d95f73952ede904a$export$65a345b33858a655;
var $d95f73952ede904a$export$f4a29712c724ba2d = $d95f73952ede904a$export$65a345b33858a655;
var $d95f73952ede904a$export$ba236543926e3569 = {
    prefix: "far",
    iconName: "pen-to-square",
    icon: [
        512,
        512,
        [
            "edit"
        ],
        "f044",
        "M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z"
    ]
};
var $d95f73952ede904a$export$7be713e57d023733 = $d95f73952ede904a$export$ba236543926e3569;
var $d95f73952ede904a$export$703272eebf5e3eea = {
    prefix: "far",
    iconName: "hourglass-half",
    icon: [
        384,
        512,
        [
            "hourglass-2"
        ],
        "f252",
        "M0 24C0 10.7 10.7 0 24 0H360c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V67c0 40.3-16 79-44.5 107.5L225.9 256l81.5 81.5C336 366 352 404.7 352 445v19h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h8V445c0-40.3 16-79 44.5-107.5L158.1 256 76.5 174.5C48 146 32 107.3 32 67V48H24C10.7 48 0 37.3 0 24zM110.5 371.5c-3.9 3.9-7.5 8.1-10.7 12.5H284.2c-3.2-4.4-6.8-8.6-10.7-12.5L192 289.9l-81.5 81.5zM284.2 128C297 110.4 304 89 304 67V48H80V67c0 22.1 7 43.4 19.8 61H284.2z"
    ]
};
var $d95f73952ede904a$export$f1052bbf6bf361c0 = $d95f73952ede904a$export$703272eebf5e3eea;
var $d95f73952ede904a$export$ed3f2918429d029a = {
    prefix: "far",
    iconName: "eye-slash",
    icon: [
        640,
        512,
        [],
        "f070",
        "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm51.3 163.3l-41.9-33C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5zm-88-69.3L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8z"
    ]
};
var $d95f73952ede904a$export$f69db0b876f7d753 = {
    prefix: "far",
    iconName: "hand",
    icon: [
        512,
        512,
        [
            129306,
            9995,
            "hand-paper"
        ],
        "f256",
        "M256 0c-25.3 0-47.2 14.7-57.6 36c-7-2.6-14.5-4-22.4-4c-35.3 0-64 28.7-64 64V261.5l-2.7-2.7c-25-25-65.5-25-90.5 0s-25 65.5 0 90.5L106.5 437c48 48 113.1 75 181 75H296h8c1.5 0 3-.1 4.5-.4c91.7-6.2 165-79.4 171.1-171.1c.3-1.5 .4-3 .4-4.5V160c0-35.3-28.7-64-64-64c-5.5 0-10.9 .7-16 2V96c0-35.3-28.7-64-64-64c-7.9 0-15.4 1.4-22.4 4C303.2 14.7 281.3 0 256 0zM240 96.1c0 0 0-.1 0-.1V64c0-8.8 7.2-16 16-16s16 7.2 16 16V95.9c0 0 0 .1 0 .1V232c0 13.3 10.7 24 24 24s24-10.7 24-24V96c0 0 0 0 0-.1c0-8.8 7.2-16 16-16s16 7.2 16 16v55.9c0 0 0 .1 0 .1v80c0 13.3 10.7 24 24 24s24-10.7 24-24V160.1c0 0 0-.1 0-.1c0-8.8 7.2-16 16-16s16 7.2 16 16V332.9c-.1 .6-.1 1.3-.2 1.9c-3.4 69.7-59.3 125.6-129 129c-.6 0-1.3 .1-1.9 .2H296h-8.5c-55.2 0-108.1-21.9-147.1-60.9L52.7 315.3c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L119 336.4c6.9 6.9 17.2 8.9 26.2 5.2s14.8-12.5 14.8-22.2V96c0-8.8 7.2-16 16-16c8.8 0 16 7.1 16 15.9V232c0 13.3 10.7 24 24 24s24-10.7 24-24V96.1z"
    ]
};
var $d95f73952ede904a$export$6e6216c8b50471bb = $d95f73952ede904a$export$f69db0b876f7d753;
var $d95f73952ede904a$export$2262d6b626de1120 = {
    prefix: "far",
    iconName: "hand-spock",
    icon: [
        576,
        512,
        [
            128406
        ],
        "f259",
        "M170.2 80.8C161 47 180.8 12 214.6 2.4c34-9.6 69.4 10.2 79 44.2l30.3 107.1L337.1 84c6.6-34.7 40.1-57.5 74.8-50.9c31.4 6 53 33.9 52 64.9c10-2.6 20.8-2.8 31.5-.1c34.3 8.6 55.1 43.3 46.6 77.6L486.7 397.2C469.8 464.7 409.2 512 339.6 512c-11.2 0-22.5 0-33.7 0c-56.9 0-112.2-19-157.2-53.9l-92-71.6c-27.9-21.7-32.9-61.9-11.2-89.8s61.9-32.9 89.8-11.2l17 13.2L100.5 167.5c-13-32.9 3.2-70.1 36-83c11.1-4.4 22.7-5.4 33.7-3.7zm77.1-21.2c-2.4-8.5-11.2-13.4-19.7-11s-13.4 11.2-11 19.7l54.8 182.4c3.5 12.3-3.3 25.2-15.4 29.3s-25.3-2-30-13.9L174.9 138.1c-3.2-8.2-12.5-12.3-20.8-9s-12.3 12.5-9 20.8l73.3 185.6c12 30.3-23.7 57-49.4 37l-63.1-49.1c-7-5.4-17-4.2-22.5 2.8s-4.2 17 2.8 22.5l92 71.6c36.5 28.4 81.4 43.8 127.7 43.8c11.2 0 22.5 0 33.7 0c47.5 0 89-32.4 100.5-78.5l55.4-221.6c2.1-8.6-3.1-17.3-11.6-19.4s-17.3 3.1-19.4 11.6l-26 104C435.6 271.8 425 280 413 280c-16.5 0-28.9-15-25.8-31.2L415.7 99c1.7-8.7-4-17.1-12.7-18.7s-17.1 4-18.7 12.7L352.5 260c-2.2 11.6-12.4 20-24.2 20c-11 0-20.7-7.3-23.7-17.9L247.4 59.6z"
    ]
};
var $d95f73952ede904a$export$5a54c83033a0a56a = {
    prefix: "far",
    iconName: "face-kiss",
    icon: [
        512,
        512,
        [
            128535,
            "kiss"
        ],
        "f596",
        "M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm304.7 25.7c4.3 5.1 7.3 11.4 7.3 18.3s-3.1 13.2-7.3 18.3c-4.3 5.2-10.1 9.7-16.7 13.4c-2.7 1.5-5.7 3-8.7 4.3c3.1 1.3 6 2.7 8.7 4.3c6.6 3.7 12.5 8.2 16.7 13.4c4.3 5.1 7.3 11.4 7.3 18.3s-3.1 13.2-7.3 18.3c-4.3 5.2-10.1 9.7-16.7 13.4C274.7 411.1 257.4 416 240 416c-3.6 0-6.8-2.5-7.7-6s.6-7.2 3.8-9l0 0 0 0 0 0 0 0 .2-.1c.2-.1 .5-.3 .9-.5c.8-.5 2-1.2 3.4-2.1c2.8-1.9 6.5-4.5 10.2-7.6c3.7-3.1 7.2-6.6 9.6-10.1c2.5-3.5 3.5-6.4 3.5-8.6s-1-5-3.5-8.6c-2.5-3.5-5.9-6.9-9.6-10.1c-3.7-3.1-7.4-5.7-10.2-7.6c-1.4-.9-2.6-1.6-3.4-2.1l-.8-.5-.1-.1-.2-.1 0 0 0 0 0 0c-2.5-1.4-4.1-4.1-4.1-7s1.6-5.6 4.1-7l0 0 0 0 0 0 0 0 0 0 .2-.1c.2-.1 .5-.3 .9-.5c.8-.5 2-1.2 3.4-2.1c2.8-1.9 6.5-4.5 10.2-7.6c3.7-3.1 7.2-6.6 9.6-10.1c2.5-3.5 3.5-6.4 3.5-8.6s-1-5-3.5-8.6c-2.5-3.5-5.9-6.9-9.6-10.1c-3.7-3.1-7.4-5.7-10.2-7.6c-1.4-.9-2.6-1.6-3.4-2.1c-.4-.2-.7-.4-.9-.5l-.2-.1 0 0 0 0 0 0c-3.2-1.8-4.7-5.5-3.8-9s4.1-6 7.7-6c17.4 0 34.7 4.9 47.9 12.3c6.6 3.7 12.5 8.2 16.7 13.4zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
    ]
};
var $d95f73952ede904a$export$c762a77aabf64fd0 = $d95f73952ede904a$export$5a54c83033a0a56a;
var $d95f73952ede904a$export$95a7394c24f57943 = {
    prefix: "far",
    iconName: "face-grin-tongue",
    icon: [
        512,
        512,
        [
            128539,
            "grin-tongue"
        ],
        "f589",
        "M464 256c0-114.9-93.1-208-208-208S48 141.1 48 256c0 81.7 47.1 152.4 115.7 186.4c-2.4-8.4-3.7-17.3-3.7-26.4V363.6c-8.9-8-16.7-17.1-23.1-27.1c-10.4-16.1 6.8-32.5 25.5-28.1c28.9 6.8 60.5 10.5 93.6 10.5s64.7-3.7 93.6-10.5c18.7-4.4 35.9 12 25.5 28.1c-6.4 9.9-14.2 19-23 27V416c0 9.2-1.3 18-3.7 26.4C416.9 408.4 464 337.7 464 256zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm176.4-80a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm128 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 416V378.6c0-14.7-11.9-26.6-26.6-26.6h-2c-11.3 0-21.1 7.9-23.6 18.9c-2.8 12.6-20.8 12.6-23.6 0c-2.5-11.1-12.3-18.9-23.6-18.9h-2c-14.7 0-26.6 11.9-26.6 26.6V416c0 35.3 28.7 64 64 64s64-28.7 64-64z"
    ]
};
var $d95f73952ede904a$export$ef222816a43a4b3a = $d95f73952ede904a$export$95a7394c24f57943;
var $d95f73952ede904a$export$a831eedd2f59c62f = {
    prefix: "far",
    iconName: "chess-bishop",
    icon: [
        320,
        512,
        [
            9821
        ],
        "f43a",
        "M104 0C90.7 0 80 10.7 80 24c0 11.2 7.6 20.6 18 23.2c-7.8 8-16.1 17-24.4 27C38.2 116.7 0 178.8 0 250.9c0 44.8 24.6 72.2 48 87.8V352H96V325c0-9-5-17.2-13-21.3c-18-9.3-35-24.7-35-52.7c0-55.5 29.8-106.8 62.4-145.9c16-19.2 32.1-34.8 44.2-45.5c1.9-1.7 3.7-3.2 5.3-4.6c1.7 1.4 3.4 3 5.3 4.6c12.1 10.7 28.2 26.3 44.2 45.5c5.3 6.3 10.5 13 15.5 20L159 191c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l57.8-57.8c12.8 25.9 21.2 54.3 21.2 83.8c0 28-17 43.4-35 52.7c-8 4.1-13 12.3-13 21.3v27h48V338.7c23.4-15.6 48-42.9 48-87.8c0-72.1-38.2-134.2-73.6-176.7c-8.3-9.9-16.6-19-24.4-27c10.3-2.7 18-12.1 18-23.2c0-13.3-10.7-24-24-24H160 104zM52.7 464l16.6-32H250.8l16.6 32H52.7zm207.9-80H59.5c-12 0-22.9 6.7-28.4 17.3L4.6 452.5c-3 5.8-4.6 12.2-4.6 18.7C0 493.8 18.2 512 40.8 512H279.2c22.5 0 40.8-18.2 40.8-40.8c0-6.5-1.6-12.9-4.6-18.7l-26.5-51.2c-5.5-10.6-16.5-17.3-28.4-17.3z"
    ]
};
var $d95f73952ede904a$export$1dd161850c5bc64e = {
    prefix: "far",
    iconName: "face-grin-wink",
    icon: [
        512,
        512,
        [
            "grin-wink"
        ],
        "f58c",
        "M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm349.5 52.4c18.7-4.4 35.9 12 25.5 28.1C350.4 374.6 306.3 400 255.9 400s-94.5-25.4-119.1-63.5c-10.4-16.1 6.8-32.5 25.5-28.1c28.9 6.8 60.5 10.5 93.6 10.5s64.7-3.7 93.6-10.5zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm165.8 21.7c-7.6 8.1-20.2 8.5-28.3 .9s-8.5-20.2-.9-28.3c14.5-15.5 35.2-22.3 54.6-22.3s40.1 6.8 54.6 22.3c7.6 8.1 7.1 20.7-.9 28.3s-20.7 7.1-28.3-.9c-5.5-5.8-14.8-9.7-25.4-9.7s-19.9 3.8-25.4 9.7z"
    ]
};
var $d95f73952ede904a$export$2397fcd34eb12177 = $d95f73952ede904a$export$1dd161850c5bc64e;
var $d95f73952ede904a$export$bdbabf493c478cde = {
    prefix: "far",
    iconName: "face-grin-wide",
    icon: [
        512,
        512,
        [
            128515,
            "grin-alt"
        ],
        "f581",
        "M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm349.5 52.4c18.7-4.4 35.9 12 25.5 28.1C350.4 374.6 306.3 400 255.9 400s-94.5-25.4-119.1-63.5c-10.4-16.1 6.8-32.5 25.5-28.1c28.9 6.8 60.5 10.5 93.6 10.5s64.7-3.7 93.6-10.5zM224 192c0 35.3-14.3 64-32 64s-32-28.7-32-64s14.3-64 32-64s32 28.7 32 64zm96 64c-17.7 0-32-28.7-32-64s14.3-64 32-64s32 28.7 32 64s-14.3 64-32 64z"
    ]
};
var $d95f73952ede904a$export$b4abebfe416d36ba = $d95f73952ede904a$export$bdbabf493c478cde;
var $d95f73952ede904a$export$c8a28356e07b9ccb = {
    prefix: "far",
    iconName: "face-frown-open",
    icon: [
        512,
        512,
        [
            128550,
            "frown-open"
        ],
        "f57a",
        "M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM182.4 382.5c-12.4 5.2-26.5-4.1-21.1-16.4c16-36.6 52.4-62.1 94.8-62.1s78.8 25.6 94.8 62.1c5.4 12.3-8.7 21.6-21.1 16.4c-22.4-9.5-47.4-14.8-73.7-14.8s-51.3 5.3-73.7 14.8zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
    ]
};
var $d95f73952ede904a$export$c4775e66bed5d96 = $d95f73952ede904a$export$c8a28356e07b9ccb;
var $d95f73952ede904a$export$cdc9f5e7e94e76da = {
    prefix: "far",
    iconName: "hand-point-up",
    icon: [
        384,
        512,
        [
            9757
        ],
        "f0a6",
        "M64 64V241.6c5.2-1 10.5-1.6 16-1.6H96V208 64c0-8.8-7.2-16-16-16s-16 7.2-16 16zM80 288c-17.7 0-32 14.3-32 32c0 0 0 0 0 0v24c0 66.3 53.7 120 120 120h48c52.5 0 97.1-33.7 113.4-80.7c-3.1 .5-6.2 .7-9.4 .7c-20 0-37.9-9.2-49.7-23.6c-9 4.9-19.4 7.6-30.3 7.6c-15.1 0-29-5.3-40-14c-11 8.8-24.9 14-40 14H120c-13.3 0-24-10.7-24-24s10.7-24 24-24h40c8.8 0 16-7.2 16-16s-7.2-16-16-16H120 80zM0 320s0 0 0 0c0-18 6-34.6 16-48V64C16 28.7 44.7 0 80 0s64 28.7 64 64v82c5.1-1.3 10.5-2 16-2c25.3 0 47.2 14.7 57.6 36c7-2.6 14.5-4 22.4-4c20 0 37.9 9.2 49.7 23.6c9-4.9 19.4-7.6 30.3-7.6c35.3 0 64 28.7 64 64v64 24c0 92.8-75.2 168-168 168H168C75.2 512 0 436.8 0 344V320zm336-64c0-8.8-7.2-16-16-16s-16 7.2-16 16v48 16c0 8.8 7.2 16 16 16s16-7.2 16-16V256zM160 240c5.5 0 10.9 .7 16 2v-2V208c0-8.8-7.2-16-16-16s-16 7.2-16 16v32h16zm64 24v40c0 8.8 7.2 16 16 16s16-7.2 16-16V256 240c0-8.8-7.2-16-16-16s-16 7.2-16 16v24z"
    ]
};
var $d95f73952ede904a$export$4ed9da5c3cca0ef1 = {
    prefix: "far",
    iconName: "bookmark",
    icon: [
        384,
        512,
        [
            128278,
            61591
        ],
        "f02e",
        "M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"
    ]
};
var $d95f73952ede904a$export$f6dcbf0a940428f4 = {
    prefix: "far",
    iconName: "hand-point-down",
    icon: [
        384,
        512,
        [],
        "f0a7",
        "M64 448l0-177.6c5.2 1 10.5 1.6 16 1.6l16 0 0 32 0 144c0 8.8-7.2 16-16 16s-16-7.2-16-16zM80 224c-17.7 0-32-14.3-32-32c0 0 0 0 0 0l0-24c0-66.3 53.7-120 120-120l48 0c52.5 0 97.1 33.7 113.4 80.7c-3.1-.5-6.2-.7-9.4-.7c-20 0-37.9 9.2-49.7 23.6c-9-4.9-19.4-7.6-30.3-7.6c-15.1 0-29 5.3-40 14c-11-8.8-24.9-14-40-14l-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-40 0-40 0zM0 192s0 0 0 0c0 18 6 34.6 16 48l0 208c0 35.3 28.7 64 64 64s64-28.7 64-64l0-82c5.1 1.3 10.5 2 16 2c25.3 0 47.2-14.7 57.6-36c7 2.6 14.5 4 22.4 4c20 0 37.9-9.2 49.7-23.6c9 4.9 19.4 7.6 30.3 7.6c35.3 0 64-28.7 64-64l0-64 0-24C384 75.2 308.8 0 216 0L168 0C75.2 0 0 75.2 0 168l0 24zm336 64c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48 0-16c0-8.8 7.2-16 16-16s16 7.2 16 16l0 64zM160 272c5.5 0 10.9-.7 16-2l0 2 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-32 16 0zm64-24l0-40c0-8.8 7.2-16 16-16s16 7.2 16 16l0 48 0 16c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-24z"
    ]
};
var $d95f73952ede904a$export$72b780186370e953 = {
    prefix: "far",
    iconName: "folder",
    icon: [
        512,
        512,
        [
            128193,
            128447,
            61716,
            "folder-blank"
        ],
        "f07b",
        "M0 96C0 60.7 28.7 32 64 32H196.1c19.1 0 37.4 7.6 50.9 21.1L289.9 96H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16H286.6c-10.6 0-20.8-4.2-28.3-11.7L213.1 87c-4.5-4.5-10.6-7-17-7H64z"
    ]
};
var $d95f73952ede904a$export$9ef114244d26da0 = $d95f73952ede904a$export$72b780186370e953;
var $d95f73952ede904a$export$f5699fa0844e0188 = {
    prefix: "far",
    iconName: "user",
    icon: [
        448,
        512,
        [
            128100,
            62144
        ],
        "f007",
        "M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"
    ]
};
var $d95f73952ede904a$export$2c5163541229363 = {
    prefix: "far",
    iconName: "square-caret-left",
    icon: [
        448,
        512,
        [
            "caret-square-left"
        ],
        "f191",
        "M48 416c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80c-8.8 0-16 7.2-16 16l0 320zm16 64c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480zm64-224c0-6.7 2.8-13 7.7-17.6l112-104c7-6.5 17.2-8.2 25.9-4.4s14.4 12.5 14.4 22l0 208c0 9.5-5.7 18.2-14.4 22s-18.9 2.1-25.9-4.4l-112-104c-4.9-4.5-7.7-10.9-7.7-17.6z"
    ]
};
var $d95f73952ede904a$export$d0c8ba444f1f9581 = $d95f73952ede904a$export$2c5163541229363;
var $d95f73952ede904a$export$a3b0eb2cd7942125 = {
    prefix: "far",
    iconName: "star",
    icon: [
        576,
        512,
        [
            11088,
            61446
        ],
        "f005",
        "M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"
    ]
};
var $d95f73952ede904a$export$861b1f13085cf122 = {
    prefix: "far",
    iconName: "chess-knight",
    icon: [
        448,
        512,
        [
            9822
        ],
        "f441",
        "M226.6 48H117.3l17.1 12.8c6 4.5 9.6 11.6 9.6 19.2s-3.6 14.7-9.6 19.2l-6.5 4.9c-10 7.5-16 19.3-16 31.9l-.3 91c0 10.2 4.9 19.9 13.2 25.8l1.9 1.3c9.9 7.1 23.3 7 33.2-.1l49.9-36.3c10.7-7.8 25.7-5.4 33.5 5.3s5.4 25.7-5.3 33.5l-49.9 36.3-53.8 39.1c-7.3 5.3-13 12.2-16.9 20.1H66.8c5.3-22.1 17.8-41.9 35.9-56.3c-1.3-.8-2.6-1.7-3.8-2.6L97 291.8c-21-15-33.4-39.2-33.3-65l.3-91c.1-19.8 6.7-38.7 18.6-53.9l-.4-.3C70.7 73 64 59.6 64 45.3C64 20.3 84.3 0 109.3 0H226.6C331.2 0 416 84.8 416 189.4c0 11.1-1 22.2-2.9 33.2L390.1 352H341.3l24.5-137.8c1.5-8.2 2.2-16.5 2.2-24.8C368 111.3 304.7 48 226.6 48zM85.2 432L68.7 464H379.3l-16.6-32H85.2zm315.7-30.7l26.5 51.2c3 5.8 4.6 12.2 4.6 18.7c0 22.5-18.2 40.8-40.8 40.8H56.8C34.2 512 16 493.8 16 471.2c0-6.5 1.6-12.9 4.6-18.7l26.5-51.2C52.5 390.7 63.5 384 75.5 384h297c12 0 22.9 6.7 28.4 17.3zM172 128a20 20 0 1 1 0 40 20 20 0 1 1 0-40z"
    ]
};
var $d95f73952ede904a$export$67ca89c1ca38d559 = {
    prefix: "far",
    iconName: "face-laugh-squint",
    icon: [
        512,
        512,
        [
            "laugh-squint"
        ],
        "f59b",
        "M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm130.7 57.9c-4.2-13.6 7.1-25.9 21.3-25.9H364.5c14.2 0 25.5 12.4 21.3 25.9C369 368.4 318.2 408 258.2 408s-110.8-39.6-127.5-94.1zm2.8-183.3l89.9 47.9c10.7 5.7 10.7 21.1 0 26.8l-89.9 47.9c-7.9 4.2-17.5-1.5-17.5-10.5c0-2.8 1-5.5 2.8-7.6l36-43.2-36-43.2c-1.8-2.1-2.8-4.8-2.8-7.6c0-9 9.6-14.7 17.5-10.5zM396 141.1c0 2.8-1 5.5-2.8 7.6l-36 43.2 36 43.2c1.8 2.1 2.8 4.8 2.8 7.6c0 9-9.6 14.7-17.5 10.5l-89.9-47.9c-10.7-5.7-10.7-21.1 0-26.8l89.9-47.9c7.9-4.2 17.5 1.5 17.5 10.5z"
    ]
};
var $d95f73952ede904a$export$b206e700cf7084e1 = $d95f73952ede904a$export$67ca89c1ca38d559;
var $d95f73952ede904a$export$2f203616c892d415 = {
    prefix: "far",
    iconName: "face-laugh",
    icon: [
        512,
        512,
        [
            "laugh"
        ],
        "f599",
        "M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm130.7 57.9c-4.2-13.6 7.1-25.9 21.3-25.9H364.5c14.2 0 25.5 12.4 21.3 25.9C369 368.4 318.2 408 258.2 408s-110.8-39.6-127.5-94.1zM144.4 192a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
    ]
};
var $d95f73952ede904a$export$6c74e314e801a4fe = $d95f73952ede904a$export$2f203616c892d415;
var $d95f73952ede904a$export$ff7e93418af88b78 = {
    prefix: "far",
    iconName: "folder-open",
    icon: [
        576,
        512,
        [
            128194,
            128449,
            61717
        ],
        "f07c",
        "M384 480h48c11.4 0 21.9-6 27.6-15.9l112-192c5.8-9.9 5.8-22.1 .1-32.1S555.5 224 544 224H144c-11.4 0-21.9 6-27.6 15.9L48 357.1V96c0-8.8 7.2-16 16-16H181.5c4.2 0 8.3 1.7 11.3 4.7l26.5 26.5c21 21 49.5 32.8 79.2 32.8H416c8.8 0 16 7.2 16 16v32h48V160c0-35.3-28.7-64-64-64H298.5c-17 0-33.3-6.7-45.3-18.7L226.7 50.7c-12-12-28.3-18.7-45.3-18.7H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H87.7 384z"
    ]
};
var $d95f73952ede904a$export$97d84347d71ba297 = {
    prefix: "far",
    iconName: "clipboard",
    icon: [
        384,
        512,
        [
            128203
        ],
        "f328",
        "M280 64h40c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128C0 92.7 28.7 64 64 64h40 9.6C121 27.5 153.3 0 192 0s71 27.5 78.4 64H280zM64 112c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320c8.8 0 16-7.2 16-16V128c0-8.8-7.2-16-16-16H304v24c0 13.3-10.7 24-24 24H192 104c-13.3 0-24-10.7-24-24V112H64zm128-8a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"
    ]
};
var $d95f73952ede904a$export$7b8ce73615739d30 = {
    prefix: "far",
    iconName: "chess-queen",
    icon: [
        512,
        512,
        [
            9819
        ],
        "f445",
        "M256 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm-95.2-8c-18.1 0-31.3 12.8-35.6 26.9c-8 26.2-32.4 45.2-61.2 45.2c-10 0-19.4-2.3-27.7-6.3c-7.6-3.7-16.7-3.3-24 1.2C.7 162.1-3.1 177.1 3.7 188.9L97.6 352H153l-83-144.1c40.5-2.2 75.3-25.9 93.1-59.8c22 26.8 55.4 43.9 92.8 43.9s70.8-17.1 92.8-43.9c17.8 34 52.6 57.7 93.1 59.8L359 352h55.4l93.9-163.1c6.8-11.7 3-26.7-8.6-33.8c-7.3-4.5-16.4-4.9-24-1.2c-8.4 4-17.7 6.3-27.7 6.3c-28.8 0-53.2-19-61.2-45.2C382.5 100.8 369.3 88 351.2 88c-14.5 0-26.3 8.5-32.4 19.3c-12.4 22-35.9 36.7-62.8 36.7s-50.4-14.8-62.8-36.7C187.1 96.5 175.4 88 160.8 88zM133.2 432H378.8l16.6 32H116.7l16.6-32zm283.7-30.7c-5.5-10.6-16.5-17.3-28.4-17.3h-265c-12 0-22.9 6.7-28.4 17.3L68.6 452.5c-3 5.8-4.6 12.2-4.6 18.7c0 22.5 18.2 40.8 40.8 40.8H407.2c22.5 0 40.8-18.2 40.8-40.8c0-6.5-1.6-12.9-4.6-18.7l-26.5-51.2z"
    ]
};
var $d95f73952ede904a$export$be38a892fe9b4098 = {
    prefix: "far",
    iconName: "hand-back-fist",
    icon: [
        448,
        512,
        [
            "hand-rock"
        ],
        "f255",
        "M144 64c0-8.8 7.2-16 16-16s16 7.2 16 16c0 9.1 5.1 17.4 13.3 21.5s17.9 3.2 25.1-2.3c2.7-2 6-3.2 9.6-3.2c8.8 0 16 7.2 16 16c0 9.1 5.1 17.4 13.3 21.5s17.9 3.2 25.1-2.3c2.7-2 6-3.2 9.6-3.2c8.8 0 16 7.2 16 16c0 9.1 5.1 17.4 13.3 21.5s17.9 3.2 25.1-2.3c2.7-2 6-3.2 9.6-3.2c8.8 0 16 7.2 16 16V264c0 31.3-20 58-48 67.9c-9.6 3.4-16 12.5-16 22.6V488c0 13.3 10.7 24 24 24s24-10.7 24-24V370.2c38-20.1 64-60.1 64-106.2V160c0-35.3-28.7-64-64-64c-2.8 0-5.6 .2-8.3 .5C332.8 77.1 311.9 64 288 64c-2.8 0-5.6 .2-8.3 .5C268.8 45.1 247.9 32 224 32c-2.8 0-5.6 .2-8.3 .5C204.8 13.1 183.9 0 160 0C124.7 0 96 28.7 96 64v64.3c-11.7 7.4-22.5 16.4-32 26.9l17.8 16.1L64 155.2l-9.4 10.5C40 181.8 32 202.8 32 224.6v12.8c0 49.6 24.2 96.1 64.8 124.5l13.8-19.7L96.8 361.9l8.9 6.2c6.9 4.8 14.4 8.6 22.3 11.3V488c0 13.3 10.7 24 24 24s24-10.7 24-24V359.9c0-12.6-9.8-23.1-22.4-23.9c-7.3-.5-14.3-2.9-20.3-7.1l-13.1 18.7 13.1-18.7-8.9-6.2C96.6 303.1 80 271.3 80 237.4V224.6c0-9.9 3.7-19.4 10.3-26.8l9.4-10.5c3.8-4.2 7.9-8.1 12.3-11.6V208c0 8.8 7.2 16 16 16s16-7.2 16-16V142.3 128 64z"
    ]
};
var $d95f73952ede904a$export$97a81eba394c8c44 = $d95f73952ede904a$export$be38a892fe9b4098;
var $d95f73952ede904a$export$66068918abb14406 = {
    prefix: "far",
    iconName: "square-caret-up",
    icon: [
        448,
        512,
        [
            "caret-square-up"
        ],
        "f151",
        "M64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm224 64c6.7 0 13 2.8 17.6 7.7l104 112c6.5 7 8.2 17.2 4.4 25.9s-12.5 14.4-22 14.4l-208 0c-9.5 0-18.2-5.7-22-14.4s-2.1-18.9 4.4-25.9l104-112c4.5-4.9 10.9-7.7 17.6-7.7z"
    ]
};
var $d95f73952ede904a$export$307ae80b26533ce5 = $d95f73952ede904a$export$66068918abb14406;
var $d95f73952ede904a$export$b532f5d25de97633 = {
    prefix: "far",
    iconName: "chart-bar",
    icon: [
        512,
        512,
        [
            "bar-chart"
        ],
        "f080",
        "M24 32c13.3 0 24 10.7 24 24V408c0 13.3 10.7 24 24 24H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H72c-39.8 0-72-32.2-72-72V56C0 42.7 10.7 32 24 32zM128 136c0-13.3 10.7-24 24-24l208 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-208 0c-13.3 0-24-10.7-24-24zm24 72H296c13.3 0 24 10.7 24 24s-10.7 24-24 24H152c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 96H424c13.3 0 24 10.7 24 24s-10.7 24-24 24H152c-13.3 0-24-10.7-24-24s10.7-24 24-24z"
    ]
};
var $d95f73952ede904a$export$2d5f754a5e5738b = $d95f73952ede904a$export$b532f5d25de97633;
var $d95f73952ede904a$export$eccfff9bfd585652 = {
    prefix: "far",
    iconName: "window-restore",
    icon: [
        512,
        512,
        [],
        "f2d2",
        "M432 48H208c-17.7 0-32 14.3-32 32V96H128V80c0-44.2 35.8-80 80-80H432c44.2 0 80 35.8 80 80V304c0 44.2-35.8 80-80 80H416V336h16c17.7 0 32-14.3 32-32V80c0-17.7-14.3-32-32-32zM48 448c0 8.8 7.2 16 16 16H320c8.8 0 16-7.2 16-16V256H48V448zM64 128H320c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192c0-35.3 28.7-64 64-64z"
    ]
};
var $d95f73952ede904a$export$eaf727acca5a35e4 = {
    prefix: "far",
    iconName: "square-plus",
    icon: [
        448,
        512,
        [
            61846,
            "plus-square"
        ],
        "f0fe",
        "M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM200 344V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H248v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"
    ]
};
var $d95f73952ede904a$export$b6359eebfe900c35 = $d95f73952ede904a$export$eaf727acca5a35e4;
var $d95f73952ede904a$export$7e9f0928967e03b = {
    prefix: "far",
    iconName: "image",
    icon: [
        512,
        512,
        [],
        "f03e",
        "M448 80c8.8 0 16 7.2 16 16V415.8l-5-6.5-136-176c-4.5-5.9-11.6-9.3-19-9.3s-14.4 3.4-19 9.3L202 340.7l-30.5-42.7C167 291.7 159.8 288 152 288s-15 3.7-19.5 10.1l-80 112L48 416.3l0-.3V96c0-8.8 7.2-16 16-16H448zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"
    ]
};
var $d95f73952ede904a$export$5e30548b7f8eeb95 = {
    prefix: "far",
    iconName: "folder-closed",
    icon: [
        512,
        512,
        [],
        "e185",
        "M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H289.9L247 53.1C233.5 39.6 215.2 32 196.1 32H64zM48 96c0-8.8 7.2-16 16-16H196.1c6.4 0 12.5 2.5 17 7l45.3 45.3c7.5 7.5 17.7 11.7 28.3 11.7H448c8.8 0 16 7.2 16 16v32H48V96zm0 144H464V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V240z"
    ]
};
var $d95f73952ede904a$export$4fbda8f64648f3b5 = {
    prefix: "far",
    iconName: "lemon",
    icon: [
        448,
        512,
        [
            127819
        ],
        "f094",
        "M368 80c-3.2 0-6.2 .4-8.9 1.3C340 86.8 313 91.9 284.8 84.6C227.4 69.7 160.2 92 110.1 142.1S37.7 259.4 52.6 316.8c7.3 28.2 2.2 55.2-3.3 74.3c-.8 2.8-1.3 5.8-1.3 8.9c0 17.7 14.3 32 32 32c3.2 0 6.2-.4 8.9-1.3c19.1-5.5 46.1-10.7 74.3-3.3c57.4 14.9 124.6-7.4 174.7-57.5s72.4-117.3 57.5-174.7c-7.3-28.2-2.2-55.2 3.3-74.3c.8-2.8 1.3-5.8 1.3-8.9c0-17.7-14.3-32-32-32zm0-48c44.2 0 80 35.8 80 80c0 7.7-1.1 15.2-3.1 22.3c-4.6 15.8-7.1 32.9-3 48.9c20.1 77.6-10.9 161.5-70 220.7s-143.1 90.2-220.7 70c-16-4.1-33-1.6-48.9 3c-7.1 2-14.6 3.1-22.3 3.1c-44.2 0-80-35.8-80-80c0-7.7 1.1-15.2 3.1-22.3c4.6-15.8 7.1-32.9 3-48.9C-14 251.3 17 167.3 76.2 108.2S219.3 18 296.8 38.1c16 4.1 33 1.6 48.9-3c7.1-2 14.6-3.1 22.3-3.1zM246.7 167c-52 15.2-96.5 59.7-111.7 111.7c-3.7 12.7-17.1 20-29.8 16.3s-20-17.1-16.3-29.8c19.8-67.7 76.6-124.5 144.3-144.3c12.7-3.7 26.1 3.6 29.8 16.3s-3.6 26.1-16.3 29.8z"
    ]
};
var $d95f73952ede904a$export$b4c63e9bfc7906f1 = {
    prefix: "far",
    iconName: "handshake",
    icon: [
        640,
        512,
        [],
        "f2b5",
        "M272.2 64.6l-51.1 51.1c-15.3 4.2-29.5 11.9-41.5 22.5L153 161.9C142.8 171 129.5 176 115.8 176H96V304c20.4 .6 39.8 8.9 54.3 23.4l35.6 35.6 7 7 0 0L219.9 397c6.2 6.2 16.4 6.2 22.6 0c1.7-1.7 3-3.7 3.7-5.8c2.8-7.7 9.3-13.5 17.3-15.3s16.4 .6 22.2 6.5L296.5 393c11.6 11.6 30.4 11.6 41.9 0c5.4-5.4 8.3-12.3 8.6-19.4c.4-8.8 5.6-16.6 13.6-20.4s17.3-3 24.4 2.1c9.4 6.7 22.5 5.8 30.9-2.6c9.4-9.4 9.4-24.6 0-33.9L340.1 243l-35.8 33c-27.3 25.2-69.2 25.6-97 .9c-31.7-28.2-32.4-77.4-1.6-106.5l70.1-66.2C303.2 78.4 339.4 64 377.1 64c36.1 0 71 13.3 97.9 37.2L505.1 128H544h40 40c8.8 0 16 7.2 16 16V352c0 17.7-14.3 32-32 32H576c-11.8 0-22.2-6.4-27.7-16H463.4c-3.4 6.7-7.9 13.1-13.5 18.7c-17.1 17.1-40.8 23.8-63 20.1c-3.6 7.3-8.5 14.1-14.6 20.2c-27.3 27.3-70 30-100.4 8.1c-25.1 20.8-62.5 19.5-86-4.1L159 404l-7-7-35.6-35.6c-5.5-5.5-12.7-8.7-20.4-9.3C96 369.7 81.6 384 64 384H32c-17.7 0-32-14.3-32-32V144c0-8.8 7.2-16 16-16H56 96h19.8c2 0 3.9-.7 5.3-2l26.5-23.6C175.5 77.7 211.4 64 248.7 64H259c4.4 0 8.9 .2 13.2 .6zM544 320V176H496c-5.9 0-11.6-2.2-15.9-6.1l-36.9-32.8c-18.2-16.2-41.7-25.1-66.1-25.1c-25.4 0-49.8 9.7-68.3 27.1l-70.1 66.2c-10.3 9.8-10.1 26.3 .5 35.7c9.3 8.3 23.4 8.1 32.5-.3l71.9-66.4c9.7-9 24.9-8.4 33.9 1.4s8.4 24.9-1.4 33.9l-.8 .8 74.4 74.4c10 10 16.5 22.3 19.4 35.1H544zM64 336a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm528 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32z"
    ]
};
var $d95f73952ede904a$export$31ee86ac717db552 = {
    prefix: "far",
    iconName: "gem",
    icon: [
        512,
        512,
        [
            128142
        ],
        "f3a5",
        "M168.5 72L256 165l87.5-93h-175zM383.9 99.1L311.5 176h129L383.9 99.1zm50 124.9H256 78.1L256 420.3 433.9 224zM71.5 176h129L128.1 99.1 71.5 176zm434.3 40.1l-232 256c-4.5 5-11 7.9-17.8 7.9s-13.2-2.9-17.8-7.9l-232-256c-7.7-8.5-8.3-21.2-1.5-30.4l112-152c4.5-6.1 11.7-9.8 19.3-9.8H376c7.6 0 14.8 3.6 19.3 9.8l112 152c6.8 9.2 6.1 21.9-1.5 30.4z"
    ]
};
var $d95f73952ede904a$export$86c4e45dc3302d15 = {
    prefix: "far",
    iconName: "circle-play",
    icon: [
        512,
        512,
        [
            61469,
            "play-circle"
        ],
        "f144",
        "M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9V168c0-8.7 4.7-16.7 12.3-20.9z"
    ]
};
var $d95f73952ede904a$export$cf04333781061c5e = $d95f73952ede904a$export$86c4e45dc3302d15;
var $d95f73952ede904a$export$c2e9877668862374 = {
    prefix: "far",
    iconName: "circle-check",
    icon: [
        512,
        512,
        [
            61533,
            "check-circle"
        ],
        "f058",
        "M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"
    ]
};
var $d95f73952ede904a$export$be9e388158c74f29 = $d95f73952ede904a$export$c2e9877668862374;
var $d95f73952ede904a$export$229de76dfef2687f = {
    prefix: "far",
    iconName: "circle-stop",
    icon: [
        512,
        512,
        [
            62094,
            "stop-circle"
        ],
        "f28d",
        "M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm192-96H320c17.7 0 32 14.3 32 32V320c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V192c0-17.7 14.3-32 32-32z"
    ]
};
var $d95f73952ede904a$export$47af2aad60ab3e7c = $d95f73952ede904a$export$229de76dfef2687f;
var $d95f73952ede904a$export$a75288855ea05282 = {
    prefix: "far",
    iconName: "id-badge",
    icon: [
        384,
        512,
        [],
        "f2c1",
        "M256 48V64c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H256zM0 64C0 28.7 28.7 0 64 0H320c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM160 320h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z"
    ]
};
var $d95f73952ede904a$export$3f2d51c0547bf984 = {
    prefix: "far",
    iconName: "face-laugh-beam",
    icon: [
        512,
        512,
        [
            128513,
            "laugh-beam"
        ],
        "f59a",
        "M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm130.7 57.9c-4.2-13.6 7.1-25.9 21.3-25.9H364.5c14.2 0 25.5 12.4 21.3 25.9C369 368.4 318.2 408 258.2 408s-110.8-39.6-127.5-94.1zm86.9-85.1l0 0 0 0-.2-.2c-.2-.2-.4-.5-.7-.9c-.6-.8-1.6-2-2.8-3.4c-2.5-2.8-6-6.6-10.2-10.3c-8.8-7.8-18.8-14-27.7-14s-18.9 6.2-27.7 14c-4.2 3.7-7.7 7.5-10.2 10.3c-1.2 1.4-2.2 2.6-2.8 3.4c-.3 .4-.6 .7-.7 .9l-.2 .2 0 0 0 0 0 0c-2.1 2.8-5.7 3.9-8.9 2.8s-5.5-4.1-5.5-7.6c0-17.9 6.7-35.6 16.6-48.8c9.8-13 23.9-23.2 39.4-23.2s29.6 10.2 39.4 23.2c9.9 13.2 16.6 30.9 16.6 48.8c0 3.4-2.2 6.5-5.5 7.6s-6.9 0-8.9-2.8l0 0 0 0zm160 0l0 0-.2-.2c-.2-.2-.4-.5-.7-.9c-.6-.8-1.6-2-2.8-3.4c-2.5-2.8-6-6.6-10.2-10.3c-8.8-7.8-18.8-14-27.7-14s-18.9 6.2-27.7 14c-4.2 3.7-7.7 7.5-10.2 10.3c-1.2 1.4-2.2 2.6-2.8 3.4c-.3 .4-.6 .7-.7 .9l-.2 .2 0 0 0 0 0 0c-2.1 2.8-5.7 3.9-8.9 2.8s-5.5-4.1-5.5-7.6c0-17.9 6.7-35.6 16.6-48.8c9.8-13 23.9-23.2 39.4-23.2s29.6 10.2 39.4 23.2c9.9 13.2 16.6 30.9 16.6 48.8c0 3.4-2.2 6.5-5.5 7.6s-6.9 0-8.9-2.8l0 0 0 0 0 0z"
    ]
};
var $d95f73952ede904a$export$a88d1f4073ea9369 = $d95f73952ede904a$export$3f2d51c0547bf984;
var $d95f73952ede904a$export$5f519e9ac15ab8c3 = {
    prefix: "far",
    iconName: "registered",
    icon: [
        512,
        512,
        [
            174
        ],
        "f25d",
        "M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM160 152V264v96c0 13.3 10.7 24 24 24s24-10.7 24-24V288h60.9l37.2 81.9c5.5 12.1 19.7 17.4 31.8 11.9s17.4-19.7 11.9-31.8L315.7 275c21.8-14.3 36.3-39 36.3-67c0-44.2-35.8-80-80-80H184c-13.3 0-24 10.7-24 24zm48 88V176h64c17.7 0 32 14.3 32 32s-14.3 32-32 32H208z"
    ]
};
var $d95f73952ede904a$export$6ea408c7266ed557 = {
    prefix: "far",
    iconName: "address-card",
    icon: [
        576,
        512,
        [
            62140,
            "contact-card",
            "vcard"
        ],
        "f2bb",
        "M512 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H512zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM208 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm-32 32c-44.2 0-80 35.8-80 80c0 8.8 7.2 16 16 16H304c8.8 0 16-7.2 16-16c0-44.2-35.8-80-80-80H176zM376 144c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H376zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H376z"
    ]
};
var $d95f73952ede904a$export$4ac51eb0b298b190 = $d95f73952ede904a$export$6ea408c7266ed557;
var $d95f73952ede904a$export$91228257deb1bf18 = $d95f73952ede904a$export$6ea408c7266ed557;
var $d95f73952ede904a$export$5352cbdc070ce8d = {
    prefix: "far",
    iconName: "face-tired",
    icon: [
        512,
        512,
        [
            128555,
            "tired"
        ],
        "f5c8",
        "M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm176.5 64.3C196.1 302.1 223.8 288 256 288s59.9 14.1 79.5 32.3C354.5 338.1 368 362 368 384c0 5.4-2.7 10.4-7.2 13.4s-10.2 3.4-15.2 1.3l-17.2-7.5c-22.8-10-47.5-15.1-72.4-15.1s-49.6 5.2-72.4 15.1l-17.2 7.5c-4.9 2.2-10.7 1.7-15.2-1.3s-7.2-8-7.2-13.4c0-22 13.5-45.9 32.5-63.7zm-43-173.6l89.9 47.9c10.7 5.7 10.7 21.1 0 26.8l-89.9 47.9c-7.9 4.2-17.5-1.5-17.5-10.5c0-2.8 1-5.5 2.8-7.6l36-43.2-36-43.2c-1.8-2.1-2.8-4.8-2.8-7.6c0-9 9.6-14.7 17.5-10.5zM396 157.1c0 2.8-1 5.5-2.8 7.6l-36 43.2 36 43.2c1.8 2.1 2.8 4.8 2.8 7.6c0 9-9.6 14.7-17.5 10.5l-89.9-47.9c-10.7-5.7-10.7-21.1 0-26.8l89.9-47.9c7.9-4.2 17.5 1.5 17.5 10.5z"
    ]
};
var $d95f73952ede904a$export$3d016d62cda18371 = $d95f73952ede904a$export$5352cbdc070ce8d;
var $d95f73952ede904a$export$aa4baaed1c60f58d = {
    prefix: "far",
    iconName: "font-awesome",
    icon: [
        448,
        512,
        [
            62501,
            62694,
            "font-awesome-flag",
            "font-awesome-logo-full"
        ],
        "f2b4",
        "M48 56c0-13.3-10.7-24-24-24S0 42.7 0 56V456c0 13.3 10.7 24 24 24s24-10.7 24-24V124.2l12.5-2.4c16.7-3.2 31.5-8.5 44.2-13.1l0 0 0 0c3.7-1.3 7.1-2.6 10.4-3.7c15.2-5.2 30.4-9.1 51.2-9.1c25.6 0 43 6 63.5 13.3l.5 .2c20.9 7.4 44.8 15.9 79.1 15.9c32.4 0 53.7-6.8 90.5-19.6V342.9l-9.5 3.3c-41.5 14.4-55.2 19.2-81 19.2c-25.7 0-43.1-6-63.6-13.3l-.6-.2c-20.8-7.4-44.8-15.8-79-15.8c-16.8 0-31 2-43.9 5c-12.9 3-20.9 16-17.9 28.9s16 20.9 28.9 17.9c9.6-2.2 20.1-3.7 32.9-3.7c25.6 0 43 6 63.5 13.3l.5 .2c20.9 7.4 44.8 15.9 79.1 15.9c34.4 0 56.4-7.7 97.8-22.2c7.5-2.6 15.5-5.4 24.4-8.5l16.2-5.5V360 72 38.4L416.2 49.3c-9.7 3.3-18.2 6.3-25.7 8.9c-41.5 14.4-55.2 19.2-81 19.2c-25.7 0-43.1-6-63.6-13.3l-.6-.2c-20.8-7.4-44.8-15.8-79-15.8c-27.8 0-48.5 5.5-66.6 11.6c-4.9 1.7-9.3 3.3-13.6 4.8c-11.9 4.3-22 7.9-34.7 10.3L48 75.4V56z"
    ]
};
var $d95f73952ede904a$export$102c25fde54d4843 = $d95f73952ede904a$export$aa4baaed1c60f58d;
var $d95f73952ede904a$export$6e20d421a2e0f320 = $d95f73952ede904a$export$aa4baaed1c60f58d;
var $d95f73952ede904a$export$6143da800b0e6626 = {
    prefix: "far",
    iconName: "face-smile-wink",
    icon: [
        512,
        512,
        [
            128521,
            "smile-wink"
        ],
        "f4da",
        "M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm177.6 62.1C192.8 334.5 218.8 352 256 352s63.2-17.5 78.4-33.9c9-9.7 24.2-10.4 33.9-1.4s10.4 24.2 1.4 33.9c-22 23.8-60 49.4-113.6 49.4s-91.7-25.5-113.6-49.4c-9-9.7-8.4-24.9 1.4-33.9s24.9-8.4 33.9 1.4zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm165.8 21.7c-7.6 8.1-20.2 8.5-28.3 .9s-8.5-20.2-.9-28.3c14.5-15.5 35.2-22.3 54.6-22.3s40.1 6.8 54.6 22.3c7.6 8.1 7.1 20.7-.9 28.3s-20.7 7.1-28.3-.9c-5.5-5.8-14.8-9.7-25.4-9.7s-19.9 3.8-25.4 9.7z"
    ]
};
var $d95f73952ede904a$export$f5dbb37f6801ee3f = $d95f73952ede904a$export$6143da800b0e6626;
var $d95f73952ede904a$export$f0858dff6e769cf6 = {
    prefix: "far",
    iconName: "file-word",
    icon: [
        384,
        512,
        [],
        "f1c2",
        "M48 448V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm55 241.1c-3.8-12.7-17.2-19.9-29.9-16.1s-19.9 17.2-16.1 29.9l48 160c3 10.2 12.4 17.1 23 17.1s19.9-7 23-17.1l25-83.4 25 83.4c3 10.2 12.4 17.1 23 17.1s19.9-7 23-17.1l48-160c3.8-12.7-3.4-26.1-16.1-29.9s-26.1 3.4-29.9 16.1l-25 83.4-25-83.4c-3-10.2-12.4-17.1-23-17.1s-19.9 7-23 17.1l-25 83.4-25-83.4z"
    ]
};
var $d95f73952ede904a$export$c341daeecdea449a = {
    prefix: "far",
    iconName: "file-powerpoint",
    icon: [
        384,
        512,
        [],
        "f1c4",
        "M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm72 208c-13.3 0-24 10.7-24 24V336v56c0 13.3 10.7 24 24 24s24-10.7 24-24V360h44c42 0 76-34 76-76s-34-76-76-76H136zm68 104H160V256h44c15.5 0 28 12.5 28 28s-12.5 28-28 28z"
    ]
};
var $d95f73952ede904a$export$c6c3bd5f7d9b8bf2 = {
    prefix: "far",
    iconName: "envelope-open",
    icon: [
        512,
        512,
        [
            62135
        ],
        "f2b6",
        "M255.4 48.2c.2-.1 .4-.2 .6-.2s.4 .1 .6 .2L460.6 194c2.1 1.5 3.4 3.9 3.4 6.5v13.6L291.5 355.7c-20.7 17-50.4 17-71.1 0L48 214.1V200.5c0-2.6 1.2-5 3.4-6.5L255.4 48.2zM48 276.2L190 392.8c38.4 31.5 93.7 31.5 132 0L464 276.2V456c0 4.4-3.6 8-8 8H56c-4.4 0-8-3.6-8-8V276.2zM256 0c-10.2 0-20.2 3.2-28.5 9.1L23.5 154.9C8.7 165.4 0 182.4 0 200.5V456c0 30.9 25.1 56 56 56H456c30.9 0 56-25.1 56-56V200.5c0-18.1-8.7-35.1-23.4-45.6L284.5 9.1C276.2 3.2 266.2 0 256 0z"
    ]
};
var $d95f73952ede904a$export$7a4a0e4caa1e4e6f = {
    prefix: "far",
    iconName: "file-zipper",
    icon: [
        384,
        512,
        [
            "file-archive"
        ],
        "f1c6",
        "M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16h48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16h48v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm48 112c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H128c-8.8 0-16 7.2-16 16zm0 64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H128c-8.8 0-16 7.2-16 16zm-6.3 71.8L82.1 335.9c-1.4 5.4-2.1 10.9-2.1 16.4c0 35.2 28.8 63.7 64 63.7s64-28.5 64-63.7c0-5.5-.7-11.1-2.1-16.4l-23.5-88.2c-3.7-14-16.4-23.8-30.9-23.8H136.6c-14.5 0-27.2 9.7-30.9 23.8zM128 336h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H128c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
    ]
};
var $d95f73952ede904a$export$bf2047a9946b5c3f = $d95f73952ede904a$export$7a4a0e4caa1e4e6f;
var $d95f73952ede904a$export$90b4406457aae8cc = {
    prefix: "far",
    iconName: "square",
    icon: [
        448,
        512,
        [
            9632,
            9723,
            9724,
            61590
        ],
        "f0c8",
        "M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"
    ]
};
var $d95f73952ede904a$export$bab8f3647c394f48 = {
    prefix: "far",
    iconName: "snowflake",
    icon: [
        448,
        512,
        [
            10052,
            10054
        ],
        "f2dc",
        "M224 0c13.3 0 24 10.7 24 24V70.1l23-23c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-57 57v76.5l66.2-38.2 20.9-77.8c3.4-12.8 16.6-20.4 29.4-17s20.4 16.6 17 29.4L373 142.2l37.1-21.4c11.5-6.6 26.2-2.7 32.8 8.8s2.7 26.2-8.8 32.8L397 183.8l31.5 8.4c12.8 3.4 20.4 16.6 17 29.4s-16.6 20.4-29.4 17l-77.8-20.9L272 256l66.2 38.2 77.8-20.9c12.8-3.4 26 4.2 29.4 17s-4.2 26-17 29.4L397 328.2l37.1 21.4c11.5 6.6 15.4 21.3 8.8 32.8s-21.3 15.4-32.8 8.8L373 369.8l8.4 31.5c3.4 12.8-4.2 26-17 29.4s-26-4.2-29.4-17l-20.9-77.8L248 297.6v76.5l57 57c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-23-23V488c0 13.3-10.7 24-24 24s-24-10.7-24-24V441.9l-23 23c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l57-57V297.6l-66.2 38.2-20.9 77.8c-3.4 12.8-16.6 20.4-29.4 17s-20.4-16.6-17-29.4L75 369.8 37.9 391.2c-11.5 6.6-26.2 2.7-32.8-8.8s-2.7-26.2 8.8-32.8L51 328.2l-31.5-8.4c-12.8-3.4-20.4-16.6-17-29.4s16.6-20.4 29.4-17l77.8 20.9L176 256l-66.2-38.2L31.9 238.6c-12.8 3.4-26-4.2-29.4-17s4.2-26 17-29.4L51 183.8 13.9 162.4c-11.5-6.6-15.4-21.3-8.8-32.8s21.3-15.4 32.8-8.8L75 142.2l-8.4-31.5c-3.4-12.8 4.2-26 17-29.4s26 4.2 29.4 17l20.9 77.8L200 214.4V137.9L143 81c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l23 23V24c0-13.3 10.7-24 24-24z"
    ]
};
var $d95f73952ede904a$export$d91b374112d4f8c1 = {
    prefix: "far",
    iconName: "newspaper",
    icon: [
        512,
        512,
        [
            128240
        ],
        "f1ea",
        "M168 80c-13.3 0-24 10.7-24 24V408c0 8.4-1.4 16.5-4.1 24H440c13.3 0 24-10.7 24-24V104c0-13.3-10.7-24-24-24H168zM72 480c-39.8 0-72-32.2-72-72V112C0 98.7 10.7 88 24 88s24 10.7 24 24V408c0 13.3 10.7 24 24 24s24-10.7 24-24V104c0-39.8 32.2-72 72-72H440c39.8 0 72 32.2 72 72V408c0 39.8-32.2 72-72 72H72zM176 136c0-13.3 10.7-24 24-24h96c13.3 0 24 10.7 24 24v80c0 13.3-10.7 24-24 24H200c-13.3 0-24-10.7-24-24V136zm200-24h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H376c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 80h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H376c-13.3 0-24-10.7-24-24s10.7-24 24-24zM200 272H408c13.3 0 24 10.7 24 24s-10.7 24-24 24H200c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 80H408c13.3 0 24 10.7 24 24s-10.7 24-24 24H200c-13.3 0-24-10.7-24-24s10.7-24 24-24z"
    ]
};
var $d95f73952ede904a$export$611ae61f02de0aa = {
    prefix: "far",
    iconName: "face-kiss-wink-heart",
    icon: [
        512,
        512,
        [
            128536,
            "kiss-wink-heart"
        ],
        "f598",
        "M338.9 446.8c-25.4 11-53.4 17.2-82.9 17.2C141.1 464 48 370.9 48 256S141.1 48 256 48s208 93.1 208 208c0 22.4-3.5 43.9-10.1 64.1c3.1 4.5 5.7 9.4 7.8 14.6c12.7-1.6 25.1 .4 36.2 5c9.1-26.2 14-54.4 14-83.7C512 114.6 397.4 0 256 0S0 114.6 0 256S114.6 512 256 512c35.4 0 69.1-7.2 99.7-20.2c-4.8-5.5-8.5-12.2-10.4-19.7l-6.5-25.3zM296 316c0-6.9-3.1-13.2-7.3-18.3c-4.3-5.2-10.1-9.7-16.7-13.4C258.7 276.9 241.4 272 224 272c-3.6 0-6.8 2.5-7.7 6s.6 7.2 3.8 9l0 0 0 0 0 0 .2 .1c.2 .1 .5 .3 .9 .5c.8 .5 2 1.2 3.4 2.1c2.8 1.9 6.5 4.5 10.2 7.6c3.7 3.1 7.2 6.6 9.6 10.1c2.5 3.5 3.5 6.4 3.5 8.6s-1 5-3.5 8.6c-2.5 3.5-5.9 6.9-9.6 10.1c-3.7 3.1-7.4 5.7-10.2 7.6c-1.4 .9-2.6 1.6-3.4 2.1c-.4 .2-.7 .4-.9 .5l-.2 .1 0 0 0 0 0 0 0 0 0 0c-2.5 1.4-4.1 4.1-4.1 7s1.6 5.6 4.1 7l0 0 0 0 0 0 .2 .1c.2 .1 .5 .3 .9 .5c.8 .5 2 1.2 3.4 2.1c2.8 1.9 6.5 4.5 10.2 7.6c3.7 3.1 7.2 6.6 9.6 10.1c2.5 3.5 3.5 6.4 3.5 8.6s-1 5-3.5 8.6c-2.5 3.5-5.9 6.9-9.6 10.1c-3.7 3.1-7.4 5.7-10.2 7.6c-1.4 .9-2.6 1.6-3.4 2.1c-.4 .2-.7 .4-.9 .5l-.2 .1 0 0 0 0 0 0 0 0c-3.2 1.8-4.7 5.5-3.8 9s4.1 6 7.7 6c17.4 0 34.7-4.9 47.9-12.3c6.6-3.7 12.5-8.2 16.7-13.4c4.3-5.1 7.3-11.4 7.3-18.3s-3.1-13.2-7.3-18.3c-4.3-5.2-10.1-9.7-16.7-13.4c-2.7-1.5-5.7-3-8.7-4.3c3.1-1.3 6-2.7 8.7-4.3c6.6-3.7 12.5-8.2 16.7-13.4c4.3-5.1 7.3-11.4 7.3-18.3zM176.4 240a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm159.3-20c10.6 0 19.9 3.8 25.4 9.7c7.6 8.1 20.2 8.5 28.3 .9s8.5-20.2 .9-28.3C375.7 186.8 355 180 335.6 180s-40.1 6.8-54.6 22.3c-7.6 8.1-7.1 20.7 .9 28.3s20.7 7.1 28.3-.9c5.5-5.8 14.8-9.7 25.4-9.7zM434 352.3c-6-23.2-28.8-37-51.1-30.8s-35.4 30.1-29.5 53.4l22.9 89.3c2.2 8.7 11.2 13.9 19.8 11.4l84.9-23.8c22.2-6.2 35.4-30.1 29.5-53.4s-28.8-37-51.1-30.8l-20.2 5.6-5.4-21z"
    ]
};
var $d95f73952ede904a$export$ebba617701dfb917 = $d95f73952ede904a$export$611ae61f02de0aa;
var $d95f73952ede904a$export$3e4892d8bf919edd = {
    prefix: "far",
    iconName: "star-half-stroke",
    icon: [
        576,
        512,
        [
            "star-half-alt"
        ],
        "f5c0",
        "M309.5 13.5C305.5 5.2 297.1 0 287.9 0s-17.6 5.2-21.6 13.5L197.7 154.8 44.5 177.5c-9 1.3-16.5 7.6-19.3 16.3s-.5 18.1 5.9 24.5L142.2 328.4 116 483.9c-1.5 9 2.2 18.1 9.7 23.5s17.3 6 25.3 1.7l137-73.2 137 73.2c8.1 4.3 17.9 3.7 25.3-1.7s11.2-14.5 9.7-23.5L433.6 328.4 544.8 218.2c6.5-6.4 8.7-15.9 5.9-24.5s-10.3-14.9-19.3-16.3L378.1 154.8 309.5 13.5zM288 384.7V79.1l52.5 108.1c3.5 7.1 10.2 12.1 18.1 13.3l118.3 17.5L391 303c-5.5 5.5-8.1 13.3-6.8 21l20.2 119.6L299.2 387.5c-3.5-1.9-7.4-2.8-11.2-2.8z"
    ]
};
var $d95f73952ede904a$export$c13575f42532efb3 = $d95f73952ede904a$export$3e4892d8bf919edd;
var $d95f73952ede904a$export$77cb1a465c4fe84 = {
    prefix: "far",
    iconName: "file-excel",
    icon: [
        384,
        512,
        [],
        "f1c3",
        "M48 448V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm90.9 233.3c-8.1-10.5-23.2-12.3-33.7-4.2s-12.3 23.2-4.2 33.7L161.6 320l-44.5 57.3c-8.1 10.5-6.3 25.5 4.2 33.7s25.5 6.3 33.7-4.2L192 359.1l37.1 47.6c8.1 10.5 23.2 12.3 33.7 4.2s12.3-23.2 4.2-33.7L222.4 320l44.5-57.3c8.1-10.5 6.3-25.5-4.2-33.7s-25.5-6.3-33.7 4.2L192 280.9l-37.1-47.6z"
    ]
};
var $d95f73952ede904a$export$3de52eeb00462407 = {
    prefix: "far",
    iconName: "face-grin-beam",
    icon: [
        512,
        512,
        [
            128516,
            "grin-beam"
        ],
        "f582",
        "M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm349.5 52.4c18.7-4.4 35.9 12 25.5 28.1C350.4 374.6 306.3 400 255.9 400s-94.5-25.4-119.1-63.5c-10.4-16.1 6.8-32.5 25.5-28.1c28.9 6.8 60.5 10.5 93.6 10.5s64.7-3.7 93.6-10.5zM217.6 228.8l0 0 0 0-.2-.2c-.2-.2-.4-.5-.7-.9c-.6-.8-1.6-2-2.8-3.4c-2.5-2.8-6-6.6-10.2-10.3c-8.8-7.8-18.8-14-27.7-14s-18.9 6.2-27.7 14c-4.2 3.7-7.7 7.5-10.2 10.3c-1.2 1.4-2.2 2.6-2.8 3.4c-.3 .4-.6 .7-.7 .9l-.2 .2 0 0 0 0 0 0c-2.1 2.8-5.7 3.9-8.9 2.8s-5.5-4.1-5.5-7.6c0-17.9 6.7-35.6 16.6-48.8c9.8-13 23.9-23.2 39.4-23.2s29.6 10.2 39.4 23.2c9.9 13.2 16.6 30.9 16.6 48.8c0 3.4-2.2 6.5-5.5 7.6s-6.9 0-8.9-2.8l0 0 0 0zm160 0l0 0-.2-.2c-.2-.2-.4-.5-.7-.9c-.6-.8-1.6-2-2.8-3.4c-2.5-2.8-6-6.6-10.2-10.3c-8.8-7.8-18.8-14-27.7-14s-18.9 6.2-27.7 14c-4.2 3.7-7.7 7.5-10.2 10.3c-1.2 1.4-2.2 2.6-2.8 3.4c-.3 .4-.6 .7-.7 .9l-.2 .2 0 0 0 0 0 0c-2.1 2.8-5.7 3.9-8.9 2.8s-5.5-4.1-5.5-7.6c0-17.9 6.7-35.6 16.6-48.8c9.8-13 23.9-23.2 39.4-23.2s29.6 10.2 39.4 23.2c9.9 13.2 16.6 30.9 16.6 48.8c0 3.4-2.2 6.5-5.5 7.6s-6.9 0-8.9-2.8l0 0 0 0 0 0z"
    ]
};
var $d95f73952ede904a$export$734da5249381ec7e = $d95f73952ede904a$export$3de52eeb00462407;
var $d95f73952ede904a$export$887f6345573abcac = {
    prefix: "far",
    iconName: "object-ungroup",
    icon: [
        640,
        512,
        [],
        "f248",
        "M48.2 66.8c-.1-.8-.2-1.7-.2-2.5c0-.1 0-.1 0-.2c0-8.8 7.2-16 16-16c.9 0 1.9 .1 2.8 .2C74.3 49.5 80 56.1 80 64c0 8.8-7.2 16-16 16c-7.9 0-14.5-5.7-15.8-13.2zM0 64c0 26.9 16.5 49.9 40 59.3V228.7C16.5 238.1 0 261.1 0 288c0 35.3 28.7 64 64 64c26.9 0 49.9-16.5 59.3-40H324.7c9.5 23.5 32.5 40 59.3 40c35.3 0 64-28.7 64-64c0-26.9-16.5-49.9-40-59.3V123.3c23.5-9.5 40-32.5 40-59.3c0-35.3-28.7-64-64-64c-26.9 0-49.9 16.5-59.3 40H123.3C113.9 16.5 90.9 0 64 0C28.7 0 0 28.7 0 64zm368 0a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM324.7 88c6.5 16 19.3 28.9 35.3 35.3V228.7c-16 6.5-28.9 19.3-35.3 35.3H123.3c-6.5-16-19.3-28.9-35.3-35.3V123.3c16-6.5 28.9-19.3 35.3-35.3H324.7zM384 272a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM80 288c0 7.9-5.7 14.5-13.2 15.8c-.8 .1-1.7 .2-2.5 .2l-.2 0c-8.8 0-16-7.2-16-16c0-.9 .1-1.9 .2-2.8C49.5 277.7 56.1 272 64 272c8.8 0 16 7.2 16 16zm391.3-40h45.4c6.5 16 19.3 28.9 35.3 35.3V388.7c-16 6.5-28.9 19.3-35.3 35.3H315.3c-6.5-16-19.3-28.9-35.3-35.3V352H232v36.7c-23.5 9.5-40 32.5-40 59.3c0 35.3 28.7 64 64 64c26.9 0 49.9-16.5 59.3-40H516.7c9.5 23.5 32.5 40 59.3 40c35.3 0 64-28.7 64-64c0-26.9-16.5-49.9-40-59.3V283.3c23.5-9.5 40-32.5 40-59.3c0-35.3-28.7-64-64-64c-26.9 0-49.9 16.5-59.3 40H448v16.4c9.8 8.8 17.8 19.5 23.3 31.6zm88.9-26.7a16 16 0 1 1 31.5 5.5 16 16 0 1 1 -31.5-5.5zM271.8 450.7a16 16 0 1 1 -31.5-5.5 16 16 0 1 1 31.5 5.5zm301.5 13c-7.5-1.3-13.2-7.9-13.2-15.8c0-8.8 7.2-16 16-16c7.9 0 14.5 5.7 15.8 13.2l0 .1c.1 .9 .2 1.8 .2 2.7c0 8.8-7.2 16-16 16c-.9 0-1.9-.1-2.8-.2z"
    ]
};
var $d95f73952ede904a$export$1fec48c8bdd69c1d = {
    prefix: "far",
    iconName: "circle-right",
    icon: [
        512,
        512,
        [
            61838,
            "arrow-alt-circle-right"
        ],
        "f35a",
        "M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM294.6 135.1c-4.2-4.5-10.1-7.1-16.3-7.1C266 128 256 138 256 150.3V208H160c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h96v57.7c0 12.3 10 22.3 22.3 22.3c6.2 0 12.1-2.6 16.3-7.1l99.9-107.1c3.5-3.8 5.5-8.7 5.5-13.8s-2-10.1-5.5-13.8L294.6 135.1z"
    ]
};
var $d95f73952ede904a$export$88962ffdad8b856d = $d95f73952ede904a$export$1fec48c8bdd69c1d;
var $d95f73952ede904a$export$a6d72a9a068392b5 = {
    prefix: "far",
    iconName: "face-rolling-eyes",
    icon: [
        512,
        512,
        [
            128580,
            "meh-rolling-eyes"
        ],
        "f5a5",
        "M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM168 376c0 13.3 10.7 24 24 24H320c13.3 0 24-10.7 24-24s-10.7-24-24-24H192c-13.3 0-24 10.7-24 24zm-8-104c-26.5 0-48-21.5-48-48c0-14.3 6.3-27.2 16.2-36c-.2 1.3-.2 2.6-.2 4c0 17.7 14.3 32 32 32s32-14.3 32-32c0-1.4-.1-2.7-.2-4c10 8.8 16.2 21.7 16.2 36c0 26.5-21.5 48-48 48zm0 32a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm192-32c-26.5 0-48-21.5-48-48c0-14.3 6.3-27.2 16.2-36c-.2 1.3-.2 2.6-.2 4c0 17.7 14.3 32 32 32s32-14.3 32-32c0-1.4-.1-2.7-.2-4c10 8.8 16.2 21.7 16.2 36c0 26.5-21.5 48-48 48zm0 32a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"
    ]
};
var $d95f73952ede904a$export$fdc62a1bea767cc2 = $d95f73952ede904a$export$a6d72a9a068392b5;
var $d95f73952ede904a$export$40cdac24aa94a57a = {
    prefix: "far",
    iconName: "object-group",
    icon: [
        576,
        512,
        [],
        "f247",
        "M48 115.8C38.2 107 32 94.2 32 80c0-26.5 21.5-48 48-48c14.2 0 27 6.2 35.8 16H460.2c8.8-9.8 21.6-16 35.8-16c26.5 0 48 21.5 48 48c0 14.2-6.2 27-16 35.8V396.2c9.8 8.8 16 21.6 16 35.8c0 26.5-21.5 48-48 48c-14.2 0-27-6.2-35.8-16H115.8c-8.8 9.8-21.6 16-35.8 16c-26.5 0-48-21.5-48-48c0-14.2 6.2-27 16-35.8V115.8zM125.3 96c-4.8 13.6-15.6 24.4-29.3 29.3V386.7c13.6 4.8 24.4 15.6 29.3 29.3H450.7c4.8-13.6 15.6-24.4 29.3-29.3V125.3c-13.6-4.8-24.4-15.6-29.3-29.3H125.3zm2.7 64c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V160zM256 320h32c35.3 0 64-28.7 64-64V224h64c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32V320z"
    ]
};
var $d95f73952ede904a$export$e4b51a47a2f8b9db = {
    prefix: "far",
    iconName: "heart",
    icon: [
        512,
        512,
        [
            128153,
            128154,
            128155,
            128156,
            128420,
            129293,
            129294,
            129505,
            9829,
            10084,
            61578
        ],
        "f004",
        "M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"
    ]
};
var $d95f73952ede904a$export$c938968e28178994 = {
    prefix: "far",
    iconName: "face-surprise",
    icon: [
        512,
        512,
        [
            128558,
            "surprise"
        ],
        "f5c2",
        "M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm176.4-80a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm128 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM256 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
    ]
};
var $d95f73952ede904a$export$46647c72213f53ba = $d95f73952ede904a$export$c938968e28178994;
var $d95f73952ede904a$export$fbeef2513e05ad08 = {
    prefix: "far",
    iconName: "circle-pause",
    icon: [
        512,
        512,
        [
            62092,
            "pause-circle"
        ],
        "f28b",
        "M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm224-72V328c0 13.3-10.7 24-24 24s-24-10.7-24-24V184c0-13.3 10.7-24 24-24s24 10.7 24 24zm112 0V328c0 13.3-10.7 24-24 24s-24-10.7-24-24V184c0-13.3 10.7-24 24-24s24 10.7 24 24z"
    ]
};
var $d95f73952ede904a$export$d8cf08a0362da8db = $d95f73952ede904a$export$fbeef2513e05ad08;
var $d95f73952ede904a$export$4280b2387fbdad12 = {
    prefix: "far",
    iconName: "circle",
    icon: [
        512,
        512,
        [
            128308,
            128309,
            128992,
            128993,
            128994,
            128995,
            128996,
            9679,
            9898,
            9899,
            11044,
            61708,
            61915
        ],
        "f111",
        "M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"
    ]
};
var $d95f73952ede904a$export$72ea8a5e4e86cd69 = {
    prefix: "far",
    iconName: "circle-up",
    icon: [
        512,
        512,
        [
            61467,
            "arrow-alt-circle-up"
        ],
        "f35b",
        "M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM135.1 217.4c-4.5 4.2-7.1 10.1-7.1 16.3c0 12.3 10 22.3 22.3 22.3H208v96c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V256h57.7c12.3 0 22.3-10 22.3-22.3c0-6.2-2.6-12.1-7.1-16.3L269.8 117.5c-3.8-3.5-8.7-5.5-13.8-5.5s-10.1 2-13.8 5.5L135.1 217.4z"
    ]
};
var $d95f73952ede904a$export$3747a8ef0995eadf = $d95f73952ede904a$export$72ea8a5e4e86cd69;
var $d95f73952ede904a$export$b8d24c57c9e64933 = {
    prefix: "far",
    iconName: "file-audio",
    icon: [
        384,
        512,
        [],
        "f1c7",
        "M64 464H320c8.8 0 16-7.2 16-16V160H256c-17.7 0-32-14.3-32-32V48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16zM0 64C0 28.7 28.7 0 64 0H229.5c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM192 272V400c0 6.5-3.9 12.3-9.9 14.8s-12.9 1.1-17.4-3.5L129.4 376H112c-8.8 0-16-7.2-16-16V312c0-8.8 7.2-16 16-16h17.4l35.3-35.3c4.6-4.6 11.5-5.9 17.4-3.5s9.9 8.3 9.9 14.8zm85.8-4c11.6 20 18.2 43.3 18.2 68s-6.6 48-18.2 68c-6.6 11.5-21.3 15.4-32.8 8.8s-15.4-21.3-8.8-32.8c7.5-12.9 11.8-27.9 11.8-44s-4.3-31.1-11.8-44c-6.6-11.5-2.7-26.2 8.8-32.8s26.2-2.7 32.8 8.8z"
    ]
};
var $d95f73952ede904a$export$6440b286d3cbac9b = {
    prefix: "far",
    iconName: "file-image",
    icon: [
        384,
        512,
        [
            128443
        ],
        "f1c5",
        "M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm96 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm69.2 46.9c-3-4.3-7.9-6.9-13.2-6.9s-10.2 2.6-13.2 6.9l-41.3 59.7-11.9-19.1c-2.9-4.7-8.1-7.5-13.6-7.5s-10.6 2.8-13.6 7.5l-40 64c-3.1 4.9-3.2 11.1-.4 16.2s8.2 8.2 14 8.2h48 32 40 72c6 0 11.4-3.3 14.2-8.6s2.4-11.6-1-16.5l-72-104z"
    ]
};
var $d95f73952ede904a$export$d7cf0978afd90002 = {
    prefix: "far",
    iconName: "circle-question",
    icon: [
        512,
        512,
        [
            62108,
            "question-circle"
        ],
        "f059",
        "M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"
    ]
};
var $d95f73952ede904a$export$5ba67d7f2265c1a5 = $d95f73952ede904a$export$d7cf0978afd90002;
var $d95f73952ede904a$export$38c072b870a9e4ab = {
    prefix: "far",
    iconName: "face-meh-blank",
    icon: [
        512,
        512,
        [
            128566,
            "meh-blank"
        ],
        "f5a4",
        "M256 48a208 208 0 1 0 0 416 208 208 0 1 0 0-416zM512 256A256 256 0 1 1 0 256a256 256 0 1 1 512 0zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
    ]
};
var $d95f73952ede904a$export$e945435725f71e88 = $d95f73952ede904a$export$38c072b870a9e4ab;
var $d95f73952ede904a$export$b8c3e79e8c99c95b = {
    prefix: "far",
    iconName: "eye",
    icon: [
        576,
        512,
        [
            128065
        ],
        "f06e",
        "M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z"
    ]
};
var $d95f73952ede904a$export$e8ea88c55e55be7c = {
    prefix: "far",
    iconName: "face-sad-cry",
    icon: [
        512,
        512,
        [
            128557,
            "sad-cry"
        ],
        "f5b3",
        "M400 406.1V288c0-13.3-10.7-24-24-24s-24 10.7-24 24V440.6c-28.7 15-61.4 23.4-96 23.4s-67.3-8.5-96-23.4V288c0-13.3-10.7-24-24-24s-24 10.7-24 24V406.1C72.6 368.2 48 315 48 256C48 141.1 141.1 48 256 48s208 93.1 208 208c0 59-24.6 112.2-64 150.1zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM159.6 220c10.6 0 19.9 3.8 25.4 9.7c7.6 8.1 20.2 8.5 28.3 .9s8.5-20.2 .9-28.3C199.7 186.8 179 180 159.6 180s-40.1 6.8-54.6 22.3c-7.6 8.1-7.1 20.7 .9 28.3s20.7 7.1 28.3-.9c5.5-5.8 14.8-9.7 25.4-9.7zm166.6 9.7c5.5-5.8 14.8-9.7 25.4-9.7s19.9 3.8 25.4 9.7c7.6 8.1 20.2 8.5 28.3 .9s8.5-20.2 .9-28.3C391.7 186.8 371 180 351.6 180s-40.1 6.8-54.6 22.3c-7.6 8.1-7.1 20.7 .9 28.3s20.7 7.1 28.3-.9zM208 320v32c0 26.5 21.5 48 48 48s48-21.5 48-48V320c0-26.5-21.5-48-48-48s-48 21.5-48 48z"
    ]
};
var $d95f73952ede904a$export$8e924e6bd422cef9 = $d95f73952ede904a$export$e8ea88c55e55be7c;
var $d95f73952ede904a$export$143d0ca7d2200f20 = {
    prefix: "far",
    iconName: "file-code",
    icon: [
        384,
        512,
        [],
        "f1c9",
        "M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm97 289c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L79 303c-9.4 9.4-9.4 24.6 0 33.9l48 48c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-31-31 31-31zM257 255c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l31 31-31 31c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l48-48c9.4-9.4 9.4-24.6 0-33.9l-48-48z"
    ]
};
var $d95f73952ede904a$export$703cd98be31ec905 = {
    prefix: "far",
    iconName: "window-maximize",
    icon: [
        512,
        512,
        [
            128470
        ],
        "f2d0",
        "M.3 89.5C.1 91.6 0 93.8 0 96V224 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64V224 96c0-35.3-28.7-64-64-64H64c-2.2 0-4.4 .1-6.5 .3c-9.2 .9-17.8 3.8-25.5 8.2C21.8 46.5 13.4 55.1 7.7 65.5c-3.9 7.3-6.5 15.4-7.4 24zM48 224H464l0 192c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16l0-192z"
    ]
};
var $d95f73952ede904a$export$e5f78e87efbb0248 = {
    prefix: "far",
    iconName: "face-frown",
    icon: [
        512,
        512,
        [
            9785,
            "frown"
        ],
        "f119",
        "M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM174.6 384.1c-4.5 12.5-18.2 18.9-30.7 14.4s-18.9-18.2-14.4-30.7C146.9 319.4 198.9 288 256 288s109.1 31.4 126.6 79.9c4.5 12.5-2 26.2-14.4 30.7s-26.2-2-30.7-14.4C328.2 358.5 297.2 336 256 336s-72.2 22.5-81.4 48.1zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
    ]
};
var $d95f73952ede904a$export$43b7108508aecc5f = $d95f73952ede904a$export$e5f78e87efbb0248;
var $d95f73952ede904a$export$f62f2879ccaea13f = {
    prefix: "far",
    iconName: "floppy-disk",
    icon: [
        448,
        512,
        [
            128190,
            128426,
            "save"
        ],
        "f0c7",
        "M48 96V416c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V170.5c0-4.2-1.7-8.3-4.7-11.3l33.9-33.9c12 12 18.7 28.3 18.7 45.3V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H309.5c17 0 33.3 6.7 45.3 18.7l74.5 74.5-33.9 33.9L320.8 84.7c-.3-.3-.5-.5-.8-.8V184c0 13.3-10.7 24-24 24H104c-13.3 0-24-10.7-24-24V80H64c-8.8 0-16 7.2-16 16zm80-16v80H272V80H128zm32 240a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z"
    ]
};
var $d95f73952ede904a$export$1aaa83ff70706e1e = $d95f73952ede904a$export$f62f2879ccaea13f;
var $d95f73952ede904a$export$63ffcb3d4e94cb92 = {
    prefix: "far",
    iconName: "comment-dots",
    icon: [
        512,
        512,
        [
            128172,
            62075,
            "commenting"
        ],
        "f4ad",
        "M168.2 384.9c-15-5.4-31.7-3.1-44.6 6.4c-8.2 6-22.3 14.8-39.4 22.7c5.6-14.7 9.9-31.3 11.3-49.4c1-12.9-3.3-25.7-11.8-35.5C60.4 302.8 48 272 48 240c0-79.5 83.3-160 208-160s208 80.5 208 160s-83.3 160-208 160c-31.6 0-61.3-5.5-87.8-15.1zM26.3 423.8c-1.6 2.7-3.3 5.4-5.1 8.1l-.3 .5c-1.6 2.3-3.2 4.6-4.8 6.9c-3.5 4.7-7.3 9.3-11.3 13.5c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c5.1 0 10.2-.3 15.3-.8l.7-.1c4.4-.5 8.8-1.1 13.2-1.9c.8-.1 1.6-.3 2.4-.5c17.8-3.5 34.9-9.5 50.1-16.1c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9zM144 272a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm144-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm80 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"
    ]
};
var $d95f73952ede904a$export$49ee382a2425e89c = $d95f73952ede904a$export$63ffcb3d4e94cb92;
var $d95f73952ede904a$export$5d53da7627754bc6 = {
    prefix: "far",
    iconName: "face-grin-squint",
    icon: [
        512,
        512,
        [
            128518,
            "grin-squint"
        ],
        "f585",
        "M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm349.5 52.4c18.7-4.4 35.9 12 25.5 28.1C350.4 374.6 306.3 400 255.9 400s-94.5-25.4-119.1-63.5c-10.4-16.1 6.8-32.5 25.5-28.1c28.9 6.8 60.5 10.5 93.6 10.5s64.7-3.7 93.6-10.5zm-216-161.7l89.9 47.9c10.7 5.7 10.7 21.1 0 26.8l-89.9 47.9c-7.9 4.2-17.5-1.5-17.5-10.5c0-2.8 1-5.5 2.8-7.6l36-43.2-36-43.2c-1.8-2.1-2.8-4.8-2.8-7.6c0-9 9.6-14.7 17.5-10.5zM396 157.1c0 2.8-1 5.5-2.8 7.6l-36 43.2 36 43.2c1.8 2.1 2.8 4.8 2.8 7.6c0 9-9.6 14.7-17.5 10.5l-89.9-47.9c-10.7-5.7-10.7-21.1 0-26.8l89.9-47.9c7.9-4.2 17.5 1.5 17.5 10.5z"
    ]
};
var $d95f73952ede904a$export$243ae757907b1580 = $d95f73952ede904a$export$5d53da7627754bc6;
var $d95f73952ede904a$export$d97ff927c450c87f = {
    prefix: "far",
    iconName: "hand-pointer",
    icon: [
        448,
        512,
        [],
        "f25a",
        "M160 64c0-8.8 7.2-16 16-16s16 7.2 16 16V200c0 10.3 6.6 19.5 16.4 22.8s20.6-.1 26.8-8.3c3-3.9 7.6-6.4 12.8-6.4c8.8 0 16 7.2 16 16c0 10.3 6.6 19.5 16.4 22.8s20.6-.1 26.8-8.3c3-3.9 7.6-6.4 12.8-6.4c7.8 0 14.3 5.6 15.7 13c1.6 8.2 7.3 15.1 15.1 18s16.7 1.6 23.3-3.6c2.7-2.1 6.1-3.4 9.9-3.4c8.8 0 16 7.2 16 16l0 16V392c0 39.8-32.2 72-72 72H272 212.3h-.9c-37.4 0-72.4-18.7-93.2-49.9L50.7 312.9c-4.9-7.4-2.9-17.3 4.4-22.2s17.3-2.9 22.2 4.4L116 353.2c5.9 8.8 16.8 12.7 26.9 9.7s17-12.4 17-23V320 64zM176 0c-35.3 0-64 28.7-64 64V261.7C91.2 238 55.5 232.8 28.5 250.7C-.9 270.4-8.9 310.1 10.8 339.5L78.3 440.8c29.7 44.5 79.6 71.2 133.1 71.2h.9H272h56c66.3 0 120-53.7 120-120V288l0-16c0-35.3-28.7-64-64-64c-4.5 0-8.8 .5-13 1.3c-11.7-15.4-30.2-25.3-51-25.3c-6.9 0-13.5 1.1-19.7 3.1C288.7 170.7 269.6 160 248 160c-2.7 0-5.4 .2-8 .5V64c0-35.3-28.7-64-64-64zm48 304c0-8.8-7.2-16-16-16s-16 7.2-16 16v96c0 8.8 7.2 16 16 16s16-7.2 16-16V304zm48-16c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16s16-7.2 16-16V304c0-8.8-7.2-16-16-16zm80 16c0-8.8-7.2-16-16-16s-16 7.2-16 16v96c0 8.8 7.2 16 16 16s16-7.2 16-16V304z"
    ]
};
var $d95f73952ede904a$export$c578e919f2c5c135 = {
    prefix: "far",
    iconName: "hand-scissors",
    icon: [
        512,
        512,
        [],
        "f257",
        "M.2 276.3c-1.2-35.3 26.4-65 61.7-66.2l3.3-.1L57 208.1C22.5 200.5 .7 166.3 8.3 131.8S50.2 75.5 84.7 83.2l173 38.3c2.3-2.9 4.7-5.7 7.1-8.5l18.4-20.3C299.9 74.5 323.5 64 348.3 64l10.2 0c54.1 0 104.1 28.7 131.3 75.4l1.5 2.6c13.6 23.2 20.7 49.7 20.7 76.6L512 344c0 66.3-53.7 120-120 120l-8 0-96 0c-35.3 0-64-28.7-64-64c0-2.8 .2-5.6 .5-8.3c-19.4-11-32.5-31.8-32.5-55.7c0-.8 0-1.6 0-2.4L66.4 338c-35.3 1.2-65-26.4-66.2-61.7zm63.4-18.2c-8.8 .3-15.7 7.7-15.4 16.5s7.7 15.7 16.5 15.4l161.5-5.6c9.8-.3 18.7 5.3 22.7 14.2s2.2 19.3-4.5 26.4c-2.8 2.9-4.4 6.7-4.4 11c0 8.8 7.2 16 16 16c9.1 0 17.4 5.1 21.5 13.3s3.2 17.9-2.3 25.1c-2 2.7-3.2 6-3.2 9.6c0 8.8 7.2 16 16 16l96 0 8 0c39.8 0 72-32.2 72-72l0-125.4c0-18.4-4.9-36.5-14.2-52.4l-1.5-2.6c-18.6-32-52.8-51.6-89.8-51.6l-10.2 0c-11.3 0-22 4.8-29.6 13.1l-17.5-15.9 17.5 15.9-18.4 20.3c-.6 .6-1.1 1.3-1.7 1.9l57 13.2c8.6 2 14 10.6 12 19.2s-10.6 14-19.2 12l-85.6-19.7L74.3 130c-8.6-1.9-17.2 3.5-19.1 12.2s3.5 17.2 12.2 19.1l187.5 41.6c10.2 2.3 17.8 10.9 18.7 21.4l.1 1c.6 6.6-1.5 13.1-5.8 18.1s-10.6 7.9-17.2 8.2L63.6 258.1z"
    ]
};
var $d95f73952ede904a$export$8ac6d81a3d5b40a1 = {
    prefix: "far",
    iconName: "face-grin-tears",
    icon: [
        640,
        512,
        [
            128514,
            "grin-tears"
        ],
        "f588",
        "M516.1 325.5c1 3 2.1 6 3.3 8.9c3.3 8.1 8.4 18.5 16.5 26.6c3.9 3.9 8.2 7.4 12.7 10.3C506.4 454.8 419.9 512 320 512s-186.4-57.2-228.6-140.6c4.5-2.9 8.7-6.3 12.7-10.3c8.1-8.1 13.2-18.6 16.5-26.6c1.2-2.9 2.3-5.9 3.3-8.9C152.5 406.2 229.5 464 320 464s167.5-57.8 196.1-138.5zM320 48c-101.4 0-185.8 72.5-204.3 168.5c-6.7-3.1-14.3-4.3-22.3-3.1c-6.8 .9-16.2 2.4-26.6 4.4C85.3 94.5 191.6 0 320 0S554.7 94.5 573.2 217.7c-10.3-2-19.8-3.5-26.6-4.4c-8-1.2-15.7 .1-22.3 3.1C505.8 120.5 421.4 48 320 48zM78.5 341.1C60 356.7 32 355.5 14.3 337.7c-18.7-18.7-19.1-48.8-.7-67.2c8.6-8.6 30.1-15.1 50.5-19.6c13-2.8 25.5-4.8 33.9-6c5.4-.8 9.9 3.7 9 9c-3.1 21.5-11.4 70.2-25.5 84.4c-.9 1-1.9 1.8-2.9 2.7zm483 0c-.8-.6-1.5-1.3-2.3-2c-.2-.2-.5-.4-.7-.7c-14.1-14.1-22.5-62.9-25.5-84.4c-.8-5.4 3.7-9.9 9-9c1 .1 2.2 .3 3.3 .5c8.2 1.2 19.2 3 30.6 5.5c20.4 4.4 41.9 10.9 50.5 19.6c18.4 18.4 18 48.5-.7 67.2c-17.7 17.7-45.7 19-64.2 3.4zM439 336.5C414.4 374.6 370.3 400 319.9 400s-94.5-25.4-119.1-63.5c-10.4-16.1 6.8-32.5 25.5-28.1c28.9 6.8 60.5 10.5 93.6 10.5s64.7-3.7 93.6-10.5c18.7-4.4 35.9 12 25.5 28.1zM281.6 228.8l0 0-.2-.2c-.2-.2-.4-.5-.7-.9c-.6-.8-1.6-2-2.8-3.4c-2.5-2.8-6-6.6-10.2-10.3c-8.8-7.8-18.8-14-27.7-14s-18.9 6.2-27.7 14c-4.2 3.7-7.7 7.5-10.2 10.3c-1.2 1.4-2.2 2.6-2.8 3.4c-.3 .4-.6 .7-.7 .9l-.2 .2 0 0 0 0 0 0c-2.1 2.8-5.7 3.9-8.9 2.8s-5.5-4.1-5.5-7.6c0-17.9 6.7-35.6 16.6-48.8c9.8-13 23.9-23.2 39.4-23.2s29.6 10.2 39.4 23.2c9.9 13.2 16.6 30.9 16.6 48.8c0 3.4-2.2 6.5-5.5 7.6s-6.9 0-8.9-2.8l0 0 0 0 0 0zm160 0l0 0 0 0-.2-.2c-.2-.2-.4-.5-.7-.9c-.6-.8-1.6-2-2.8-3.4c-2.5-2.8-6-6.6-10.2-10.3c-8.8-7.8-18.8-14-27.7-14s-18.9 6.2-27.7 14c-4.2 3.7-7.7 7.5-10.2 10.3c-1.2 1.4-2.2 2.6-2.8 3.4c-.3 .4-.6 .7-.7 .9l-.2 .2 0 0 0 0 0 0c-2.1 2.8-5.7 3.9-8.9 2.8s-5.5-4.1-5.5-7.6c0-17.9 6.7-35.6 16.6-48.8c9.8-13 23.9-23.2 39.4-23.2s29.6 10.2 39.4 23.2c9.9 13.2 16.6 30.9 16.6 48.8c0 3.4-2.2 6.5-5.5 7.6s-6.9 0-8.9-2.8l0 0 0 0z"
    ]
};
var $d95f73952ede904a$export$b2f7512221512b5b = $d95f73952ede904a$export$8ac6d81a3d5b40a1;
var $d95f73952ede904a$export$3c70ffe5660af060 = {
    prefix: "far",
    iconName: "calendar-xmark",
    icon: [
        448,
        512,
        [
            "calendar-times"
        ],
        "f273",
        "M128 0c13.3 0 24 10.7 24 24V64H296V24c0-13.3 10.7-24 24-24s24 10.7 24 24V64h40c35.3 0 64 28.7 64 64v16 48V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192 144 128C0 92.7 28.7 64 64 64h40V24c0-13.3 10.7-24 24-24zM400 192H48V448c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V192zm-95 89l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
    ]
};
var $d95f73952ede904a$export$99b20d7352fbcf08 = $d95f73952ede904a$export$3c70ffe5660af060;
var $d95f73952ede904a$export$b44eb38345c6a964 = {
    prefix: "far",
    iconName: "file-video",
    icon: [
        384,
        512,
        [],
        "f1c8",
        "M320 464c8.8 0 16-7.2 16-16V160H256c-17.7 0-32-14.3-32-32V48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320zM0 64C0 28.7 28.7 0 64 0H229.5c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM80 288c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32v16l44.9-29.9c2-1.3 4.4-2.1 6.8-2.1c6.8 0 12.3 5.5 12.3 12.3V387.7c0 6.8-5.5 12.3-12.3 12.3c-2.4 0-4.8-.7-6.8-2.1L240 368v16c0 17.7-14.3 32-32 32H112c-17.7 0-32-14.3-32-32V288z"
    ]
};
var $d95f73952ede904a$export$38611f1c776aba73 = {
    prefix: "far",
    iconName: "file-pdf",
    icon: [
        512,
        512,
        [],
        "f1c1",
        "M64 464l48 0 0 48-48 0c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 304l-48 0 0-144-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16zM176 352l32 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-16 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48 0-80c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24l-16 0 0 48 16 0zm96-80l32 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-32 0c-8.8 0-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-16 0 0 96 16 0zm80-112c0-8.8 7.2-16 16-16l48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 32 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64 0-64z"
    ]
};
var $d95f73952ede904a$export$805cd88398a70581 = {
    prefix: "far",
    iconName: "comment",
    icon: [
        512,
        512,
        [
            128489,
            61669
        ],
        "f075",
        "M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9c.1-.2 .2-.3 .3-.5z"
    ]
};
var $d95f73952ede904a$export$6f095630677adc = {
    prefix: "far",
    iconName: "envelope",
    icon: [
        512,
        512,
        [
            128386,
            9993,
            61443
        ],
        "f0e0",
        "M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"
    ]
};
var $d95f73952ede904a$export$b9098a890f61e022 = {
    prefix: "far",
    iconName: "hourglass",
    icon: [
        384,
        512,
        [
            9203,
            62032,
            "hourglass-empty"
        ],
        "f254",
        "M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48h8V67c0 40.3 16 79 44.5 107.5L158.1 256 76.5 337.5C48 366 32 404.7 32 445v19H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8V445c0-40.3-16-79-44.5-107.5L225.9 256l81.5-81.5C336 146 352 107.3 352 67V48h8c13.3 0 24-10.7 24-24s-10.7-24-24-24H24zM192 289.9l81.5 81.5C293 391 304 417.4 304 445v19H80V445c0-27.6 11-54 30.5-73.5L192 289.9zm0-67.9l-81.5-81.5C91 121 80 94.6 80 67V48H304V67c0 27.6-11 54-30.5 73.5L192 222.1z"
    ]
};
var $d95f73952ede904a$export$a2f8176a0161e891 = $d95f73952ede904a$export$b9098a890f61e022;
var $d95f73952ede904a$export$5655108e1162ba45 = {
    prefix: "far",
    iconName: "calendar-check",
    icon: [
        448,
        512,
        [],
        "f274",
        "M128 0c13.3 0 24 10.7 24 24V64H296V24c0-13.3 10.7-24 24-24s24 10.7 24 24V64h40c35.3 0 64 28.7 64 64v16 48V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192 144 128C0 92.7 28.7 64 64 64h40V24c0-13.3 10.7-24 24-24zM400 192H48V448c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V192zM329 297L217 409c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47 95-95c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
    ]
};
var $d95f73952ede904a$export$4cb736b866cbb7ec = {
    prefix: "far",
    iconName: "hard-drive",
    icon: [
        512,
        512,
        [
            128436,
            "hdd"
        ],
        "f0a0",
        "M64 80c-8.8 0-16 7.2-16 16V258c5.1-1.3 10.5-2 16-2H448c5.5 0 10.9 .7 16 2V96c0-8.8-7.2-16-16-16H64zM48 320v96c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V320c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zM0 320V96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V320v96c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320zm280 48a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm120-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"
    ]
};
var $d95f73952ede904a$export$62551e9c5ba7093f = $d95f73952ede904a$export$4cb736b866cbb7ec;
var $d95f73952ede904a$export$8ff56f5ebb8416a0 = {
    prefix: "far",
    iconName: "face-grin-squint-tears",
    icon: [
        512,
        512,
        [
            129315,
            "grin-squint-tears"
        ],
        "f586",
        "M426.8 14.2C446-5 477.5-4.6 497.1 14.9s20 51 .7 70.3c-14.8 14.8-65.7 23.6-88.3 26.7c-5.6 .9-10.3-3.9-9.5-9.5C403.3 79.9 412 29 426.8 14.2zM75 75C158.2-8.3 284.5-22.2 382.2 33.2c-1.5 4.8-2.9 9.6-4.1 14.3c-3.1 12.2-5.5 24.6-7.3 35c-80.8-53.6-190.7-44.8-261.9 26.4C37.7 180.1 28.9 290 82.5 370.8c-10.5 1.8-22.9 4.2-35 7.3c-4.7 1.2-9.5 2.5-14.3 4.1C-22.2 284.5-8.2 158.2 75 75zm389.6 58.9c4.7-1.2 9.5-2.5 14.3-4.1C534.2 227.5 520.2 353.8 437 437c-83.2 83.2-209.5 97.2-307.2 41.8c1.5-4.8 2.8-9.6 4-14.3c3.1-12.2 5.5-24.6 7.3-35c80.8 53.6 190.7 44.8 261.9-26.4c71.2-71.2 80-181.1 26.4-261.9c10.5-1.8 22.9-4.2 35-7.3zm-105.4 93c10.1-16.3 33.9-16.9 37.9 1.9c9.5 44.4-3.7 93.5-39.3 129.1s-84.8 48.8-129.1 39.3c-18.7-4-18.2-27.8-1.9-37.9c25.2-15.7 50.2-35.4 73.6-58.8s43.1-48.4 58.8-73.6zM92 265.3l97.4-29.7c11.6-3.5 22.5 7.3 19 19l-29.7 97.4c-2.6 8.6-13.4 11.3-19.8 4.9c-2-2-3.2-4.6-3.4-7.3l-5.1-56.1-56.1-5.1c-2.8-.3-5.4-1.5-7.3-3.4c-6.3-6.3-3.6-17.2 4.9-19.8zm193-178.2c2 2 3.2 4.6 3.4 7.3l5.1 56.1 56.1 5.1c2.8 .3 5.4 1.5 7.3 3.4c6.3 6.3 3.6 17.2-4.9 19.8l-97.4 29.7c-11.6 3.5-22.5-7.3-19-19L265.3 92c2.6-8.6 13.4-11.3 19.8-4.9zM14.9 497.1c-19.6-19.6-20-51-.7-70.3C29 412 79.8 403.2 102.4 400.1c5.6-.9 10.3 3.9 9.5 9.5c-3.2 22.5-11.9 73.5-26.7 88.3C66 517 34.5 516.6 14.9 497.1z"
    ]
};
var $d95f73952ede904a$export$542206d6a85f3b42 = $d95f73952ede904a$export$8ff56f5ebb8416a0;
var $d95f73952ede904a$export$1f7600fa9fdb3978 = {
    prefix: "far",
    iconName: "rectangle-list",
    icon: [
        576,
        512,
        [
            "list-alt"
        ],
        "f022",
        "M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H512c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H512c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm96 64a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm104 0c0-13.3 10.7-24 24-24H448c13.3 0 24 10.7 24 24s-10.7 24-24 24H224c-13.3 0-24-10.7-24-24zm0 96c0-13.3 10.7-24 24-24H448c13.3 0 24 10.7 24 24s-10.7 24-24 24H224c-13.3 0-24-10.7-24-24zm0 96c0-13.3 10.7-24 24-24H448c13.3 0 24 10.7 24 24s-10.7 24-24 24H224c-13.3 0-24-10.7-24-24zm-72-64a32 32 0 1 1 0-64 32 32 0 1 1 0 64zM96 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"
    ]
};
var $d95f73952ede904a$export$c6327a203ffc65a3 = $d95f73952ede904a$export$1f7600fa9fdb3978;
var $d95f73952ede904a$export$16768a660ae3ca9d = {
    prefix: "far",
    iconName: "calendar-plus",
    icon: [
        448,
        512,
        [],
        "f271",
        "M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192zm176 40c-13.3 0-24 10.7-24 24v48H152c-13.3 0-24 10.7-24 24s10.7 24 24 24h48v48c0 13.3 10.7 24 24 24s24-10.7 24-24V352h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H248V256c0-13.3-10.7-24-24-24z"
    ]
};
var $d95f73952ede904a$export$5ae86b9da9cca3bd = {
    prefix: "far",
    iconName: "circle-left",
    icon: [
        512,
        512,
        [
            61840,
            "arrow-alt-circle-left"
        ],
        "f359",
        "M48 256a208 208 0 1 1 416 0A208 208 0 1 1 48 256zm464 0A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM217.4 376.9c4.2 4.5 10.1 7.1 16.3 7.1c12.3 0 22.3-10 22.3-22.3V304h96c17.7 0 32-14.3 32-32V240c0-17.7-14.3-32-32-32H256V150.3c0-12.3-10-22.3-22.3-22.3c-6.2 0-12.1 2.6-16.3 7.1L117.5 242.2c-3.5 3.8-5.5 8.7-5.5 13.8s2 10.1 5.5 13.8l99.9 107.1z"
    ]
};
var $d95f73952ede904a$export$5460a5b11a24996f = $d95f73952ede904a$export$5ae86b9da9cca3bd;
var $d95f73952ede904a$export$a312c7d58dd44a75 = {
    prefix: "far",
    iconName: "money-bill-1",
    icon: [
        576,
        512,
        [
            "money-bill-alt"
        ],
        "f3d1",
        "M112 112c0 35.3-28.7 64-64 64V336c35.3 0 64 28.7 64 64H464c0-35.3 28.7-64 64-64V176c-35.3 0-64-28.7-64-64H112zM0 128C0 92.7 28.7 64 64 64H512c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM176 256a112 112 0 1 1 224 0 112 112 0 1 1 -224 0zm80-48c0 8.8 7.2 16 16 16v64h-8c-8.8 0-16 7.2-16 16s7.2 16 16 16h24 24c8.8 0 16-7.2 16-16s-7.2-16-16-16h-8V208c0-8.8-7.2-16-16-16H272c-8.8 0-16 7.2-16 16z"
    ]
};
var $d95f73952ede904a$export$a35d573395884c3d = $d95f73952ede904a$export$a312c7d58dd44a75;
var $d95f73952ede904a$export$95b9968e7fceb821 = {
    prefix: "far",
    iconName: "clock",
    icon: [
        512,
        512,
        [
            128339,
            "clock-four"
        ],
        "f017",
        "M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"
    ]
};
var $d95f73952ede904a$export$9a575facf1cab48f = $d95f73952ede904a$export$95b9968e7fceb821;
var $d95f73952ede904a$export$fb61df5d98785fa8 = {
    prefix: "far",
    iconName: "keyboard",
    icon: [
        576,
        512,
        [
            9000
        ],
        "f11c",
        "M64 112c-8.8 0-16 7.2-16 16V384c0 8.8 7.2 16 16 16H512c8.8 0 16-7.2 16-16V128c0-8.8-7.2-16-16-16H64zM0 128C0 92.7 28.7 64 64 64H512c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM176 320H400c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V336c0-8.8 7.2-16 16-16zm-72-72c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H120c-8.8 0-16-7.2-16-16V248zm16-96h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H120c-8.8 0-16-7.2-16-16V168c0-8.8 7.2-16 16-16zm64 96c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H200c-8.8 0-16-7.2-16-16V248zm16-96h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H200c-8.8 0-16-7.2-16-16V168c0-8.8 7.2-16 16-16zm64 96c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H280c-8.8 0-16-7.2-16-16V248zm16-96h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H280c-8.8 0-16-7.2-16-16V168c0-8.8 7.2-16 16-16zm64 96c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H360c-8.8 0-16-7.2-16-16V248zm16-96h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H360c-8.8 0-16-7.2-16-16V168c0-8.8 7.2-16 16-16zm64 96c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H440c-8.8 0-16-7.2-16-16V248zm16-96h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H440c-8.8 0-16-7.2-16-16V168c0-8.8 7.2-16 16-16z"
    ]
};
var $d95f73952ede904a$export$8e047801a8603af7 = {
    prefix: "far",
    iconName: "closed-captioning",
    icon: [
        576,
        512,
        [],
        "f20a",
        "M512 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H512zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM200 208c14.2 0 27 6.1 35.8 16c8.8 9.9 24 10.7 33.9 1.9s10.7-24 1.9-33.9c-17.5-19.6-43.1-32-71.5-32c-53 0-96 43-96 96s43 96 96 96c28.4 0 54-12.4 71.5-32c8.8-9.9 8-25-1.9-33.9s-25-8-33.9 1.9c-8.8 9.9-21.6 16-35.8 16c-26.5 0-48-21.5-48-48s21.5-48 48-48zm144 48c0-26.5 21.5-48 48-48c14.2 0 27 6.1 35.8 16c8.8 9.9 24 10.7 33.9 1.9s10.7-24 1.9-33.9c-17.5-19.6-43.1-32-71.5-32c-53 0-96 43-96 96s43 96 96 96c28.4 0 54-12.4 71.5-32c8.8-9.9 8-25-1.9-33.9s-25-8-33.9 1.9c-8.8 9.9-21.6 16-35.8 16c-26.5 0-48-21.5-48-48z"
    ]
};
var $d95f73952ede904a$export$74f06b41ed2ca28a = {
    prefix: "far",
    iconName: "images",
    icon: [
        576,
        512,
        [],
        "f302",
        "M160 80H512c8.8 0 16 7.2 16 16V320c0 8.8-7.2 16-16 16H490.8L388.1 178.9c-4.4-6.8-12-10.9-20.1-10.9s-15.7 4.1-20.1 10.9l-52.2 79.8-12.4-16.9c-4.5-6.2-11.7-9.8-19.4-9.8s-14.8 3.6-19.4 9.8L175.6 336H160c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16zM96 96V320c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H160c-35.3 0-64 28.7-64 64zM48 120c0-13.3-10.7-24-24-24S0 106.7 0 120V344c0 75.1 60.9 136 136 136H456c13.3 0 24-10.7 24-24s-10.7-24-24-24H136c-48.6 0-88-39.4-88-88V120zm208 24a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"
    ]
};
var $d95f73952ede904a$export$92292137ef3cf4c8 = {
    prefix: "far",
    iconName: "face-grin",
    icon: [
        512,
        512,
        [
            128512,
            "grin"
        ],
        "f580",
        "M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm349.5 52.4c18.7-4.4 35.9 12 25.5 28.1C350.4 374.6 306.3 400 255.9 400s-94.5-25.4-119.1-63.5c-10.4-16.1 6.8-32.5 25.5-28.1c28.9 6.8 60.5 10.5 93.6 10.5s64.7-3.7 93.6-10.5zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
    ]
};
var $d95f73952ede904a$export$37e1f10b6de76621 = $d95f73952ede904a$export$92292137ef3cf4c8;
var $d95f73952ede904a$export$dc130582748497c6 = {
    prefix: "far",
    iconName: "face-meh",
    icon: [
        512,
        512,
        [
            128528,
            "meh"
        ],
        "f11a",
        "M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM176.4 240a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm192-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM184 328c-13.3 0-24 10.7-24 24s10.7 24 24 24H328c13.3 0 24-10.7 24-24s-10.7-24-24-24H184z"
    ]
};
var $d95f73952ede904a$export$6d2db489aaeeecd2 = $d95f73952ede904a$export$dc130582748497c6;
var $d95f73952ede904a$export$782ac893fc22249b = {
    prefix: "far",
    iconName: "id-card",
    icon: [
        576,
        512,
        [
            62147,
            "drivers-license"
        ],
        "f2c2",
        "M528 160V416c0 8.8-7.2 16-16 16H320c0-44.2-35.8-80-80-80H176c-44.2 0-80 35.8-80 80H64c-8.8 0-16-7.2-16-16V160H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM272 256a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zm104-48c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H376zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H376z"
    ]
};
var $d95f73952ede904a$export$8359c70e609eff64 = $d95f73952ede904a$export$782ac893fc22249b;
var $d95f73952ede904a$export$2fa35dcbc038dbe9 = {
    prefix: "far",
    iconName: "sun",
    icon: [
        512,
        512,
        [
            9728
        ],
        "f185",
        "M375.7 19.7c-1.5-8-6.9-14.7-14.4-17.8s-16.1-2.2-22.8 2.4L256 61.1 173.5 4.2c-6.7-4.6-15.3-5.5-22.8-2.4s-12.9 9.8-14.4 17.8l-18.1 98.5L19.7 136.3c-8 1.5-14.7 6.9-17.8 14.4s-2.2 16.1 2.4 22.8L61.1 256 4.2 338.5c-4.6 6.7-5.5 15.3-2.4 22.8s9.8 13 17.8 14.4l98.5 18.1 18.1 98.5c1.5 8 6.9 14.7 14.4 17.8s16.1 2.2 22.8-2.4L256 450.9l82.5 56.9c6.7 4.6 15.3 5.5 22.8 2.4s12.9-9.8 14.4-17.8l18.1-98.5 98.5-18.1c8-1.5 14.7-6.9 17.8-14.4s2.2-16.1-2.4-22.8L450.9 256l56.9-82.5c4.6-6.7 5.5-15.3 2.4-22.8s-9.8-12.9-17.8-14.4l-98.5-18.1L375.7 19.7zM269.6 110l65.6-45.2 14.4 78.3c1.8 9.8 9.5 17.5 19.3 19.3l78.3 14.4L402 242.4c-5.7 8.2-5.7 19 0 27.2l45.2 65.6-78.3 14.4c-9.8 1.8-17.5 9.5-19.3 19.3l-14.4 78.3L269.6 402c-8.2-5.7-19-5.7-27.2 0l-65.6 45.2-14.4-78.3c-1.8-9.8-9.5-17.5-19.3-19.3L64.8 335.2 110 269.6c5.7-8.2 5.7-19 0-27.2L64.8 176.8l78.3-14.4c9.8-1.8 17.5-9.5 19.3-19.3l14.4-78.3L242.4 110c8.2 5.7 19 5.7 27.2 0zM256 368a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM192 256a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z"
    ]
};
var $d95f73952ede904a$export$600a1b26b33c3d47 = {
    prefix: "far",
    iconName: "face-laugh-wink",
    icon: [
        512,
        512,
        [
            "laugh-wink"
        ],
        "f59c",
        "M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm130.7 57.9c-4.2-13.6 7.1-25.9 21.3-25.9H364.5c14.2 0 25.5 12.4 21.3 25.9C369 368.4 318.2 408 258.2 408s-110.8-39.6-127.5-94.1zM144.4 192a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm165.8 21.7c-7.6 8.1-20.2 8.5-28.3 .9s-8.5-20.2-.9-28.3c14.5-15.5 35.2-22.3 54.6-22.3s40.1 6.8 54.6 22.3c7.6 8.1 7.1 20.7-.9 28.3s-20.7 7.1-28.3-.9c-5.5-5.8-14.8-9.7-25.4-9.7s-19.9 3.8-25.4 9.7z"
    ]
};
var $d95f73952ede904a$export$77ac40095f39933e = $d95f73952ede904a$export$600a1b26b33c3d47;
var $d95f73952ede904a$export$531badb89cf01312 = {
    prefix: "far",
    iconName: "circle-down",
    icon: [
        512,
        512,
        [
            61466,
            "arrow-alt-circle-down"
        ],
        "f358",
        "M256 464a208 208 0 1 1 0-416 208 208 0 1 1 0 416zM256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM376.9 294.6c4.5-4.2 7.1-10.1 7.1-16.3c0-12.3-10-22.3-22.3-22.3H304V160c0-17.7-14.3-32-32-32l-32 0c-17.7 0-32 14.3-32 32v96H150.3C138 256 128 266 128 278.3c0 6.2 2.6 12.1 7.1 16.3l107.1 99.9c3.8 3.5 8.7 5.5 13.8 5.5s10.1-2 13.8-5.5l107.1-99.9z"
    ]
};
var $d95f73952ede904a$export$ff3afbc8c0bc5d59 = $d95f73952ede904a$export$531badb89cf01312;
var $d95f73952ede904a$export$aba24ca305bbe8c1 = {
    prefix: "far",
    iconName: "thumbs-down",
    icon: [
        512,
        512,
        [
            128078,
            61576
        ],
        "f165",
        "M323.8 477.2c-38.2 10.9-78.1-11.2-89-49.4l-5.7-20c-3.7-13-10.4-25-19.5-35l-51.3-56.4c-8.9-9.8-8.2-25 1.6-33.9s25-8.2 33.9 1.6l51.3 56.4c14.1 15.5 24.4 34 30.1 54.1l5.7 20c3.6 12.7 16.9 20.1 29.7 16.5s20.1-16.9 16.5-29.7l-5.7-20c-5.7-19.9-14.7-38.7-26.6-55.5c-5.2-7.3-5.8-16.9-1.7-24.9s12.3-13 21.3-13L448 288c8.8 0 16-7.2 16-16c0-6.8-4.3-12.7-10.4-15c-7.4-2.8-13-9-14.9-16.7s.1-15.8 5.3-21.7c2.5-2.8 4-6.5 4-10.6c0-7.8-5.6-14.3-13-15.7c-8.2-1.6-15.1-7.3-18-15.2s-1.6-16.7 3.6-23.3c2.1-2.7 3.4-6.1 3.4-9.9c0-6.7-4.2-12.6-10.2-14.9c-11.5-4.5-17.7-16.9-14.4-28.8c.4-1.3 .6-2.8 .6-4.3c0-8.8-7.2-16-16-16H286.5c-12.6 0-25 3.7-35.5 10.7l-61.7 41.1c-11 7.4-25.9 4.4-33.3-6.7s-4.4-25.9 6.7-33.3l61.7-41.1c18.4-12.3 40-18.8 62.1-18.8H384c34.7 0 62.9 27.6 64 62c14.6 11.7 24 29.7 24 50c0 4.5-.5 8.8-1.3 13c15.4 11.7 25.3 30.2 25.3 51c0 6.5-1 12.8-2.8 18.7C504.8 238.3 512 254.3 512 272c0 35.3-28.6 64-64 64l-92.3 0c4.7 10.4 8.7 21.2 11.8 32.2l5.7 20c10.9 38.2-11.2 78.1-49.4 89zM32 384c-17.7 0-32-14.3-32-32V128c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H32z"
    ]
};
var $d95f73952ede904a$export$3db75d5ac9e98468 = {
    prefix: "far",
    iconName: "chess-pawn",
    icon: [
        320,
        512,
        [
            9823
        ],
        "f443",
        "M232 152A72 72 0 1 0 88 152a72 72 0 1 0 144 0zm24 120H243.4l10.7 80H205.7L195 272H160 125l-10.7 80H65.9l10.7-80H64c-13.3 0-24-10.7-24-24s10.7-24 24-24c-15.1-20.1-24-45-24-72C40 85.7 93.7 32 160 32s120 53.7 120 120c0 27-8.9 51.9-24 72c13.3 0 24 10.7 24 24s-10.7 24-24 24zM52.7 464H267.3l-16.6-32H69.2L52.7 464zm207.9-80c12 0 22.9 6.7 28.4 17.3l26.5 51.2c3 5.8 4.6 12.2 4.6 18.7c0 22.5-18.2 40.8-40.8 40.8H40.8C18.2 512 0 493.8 0 471.2c0-6.5 1.6-12.9 4.6-18.7l26.5-51.2C36.5 390.7 47.5 384 59.5 384h201z"
    ]
};
var $d95f73952ede904a$export$3e7437bf6535bef0 = {
    prefix: "far",
    iconName: "credit-card",
    icon: [
        576,
        512,
        [
            128179,
            62083,
            "credit-card-alt"
        ],
        "f09d",
        "M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z"
    ]
};
var $d95f73952ede904a$export$5fffe8e3c36964a2 = $d95f73952ede904a$export$3e7437bf6535bef0;
var $d95f73952ede904a$export$9b6162797ab1b255 = {
    prefix: "far",
    iconName: "bell",
    icon: [
        448,
        512,
        [
            128276,
            61602
        ],
        "f0f3",
        "M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v25.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm0 96c61.9 0 112 50.1 112 112v25.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V208c0-61.9 50.1-112 112-112zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"
    ]
};
var $d95f73952ede904a$export$cad54bead856a678 = {
    prefix: "far",
    iconName: "file",
    icon: [
        384,
        512,
        [
            128196,
            128459,
            61462
        ],
        "f15b",
        "M320 464c8.8 0 16-7.2 16-16V160H256c-17.7 0-32-14.3-32-32V48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320zM0 64C0 28.7 28.7 0 64 0H229.5c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64z"
    ]
};
var $d95f73952ede904a$export$7a76c9d35b42d691 = {
    prefix: "far",
    iconName: "hospital",
    icon: [
        640,
        512,
        [
            127973,
            62589,
            "hospital-alt",
            "hospital-wide"
        ],
        "f0f8",
        "M232 0c-39.8 0-72 32.2-72 72v8H72C32.2 80 0 112.2 0 152V440c0 39.8 32.2 72 72 72h.2 .2 .2 .2 .2H73h.2 .2 .2 .2 .2 .2 .2 .2 .2 .2H75h.2 .2 .2 .2 .2 .2 .2 .2 .2 .2H77h.2 .2 .2 .2 .2 .2 .2 .2 .2 .2H79h.2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2H82h.2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2H85h.2 .2 .2 .2H86h.2 .2 .2 .2H87h.2 .2 .2 .2H88h.2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2H98h.2 .2 .2 .2H99h.2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2 .2v0H456h8v0H568c39.8 0 72-32.2 72-72V152c0-39.8-32.2-72-72-72H480V72c0-39.8-32.2-72-72-72H232zM480 128h88c13.3 0 24 10.7 24 24v40H536c-13.3 0-24 10.7-24 24s10.7 24 24 24h56v48H536c-13.3 0-24 10.7-24 24s10.7 24 24 24h56V440c0 13.3-10.7 24-24 24H480V336 128zM72 128h88V464h-.1-.2-.2-.2H159h-.2-.2-.2H158h-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2H154h-.2-.2-.2H153h-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2H150h-.2-.2-.2H149h-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2H146h-.2-.2-.2H145h-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2H142h-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2H139h-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2H136h-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2H133h-.2-.2-.2-.2-.2-.2-.2-.2H131h-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2H128h-.2-.2-.2-.2-.2-.2-.2-.2H126h-.2-.2-.2-.2-.2-.2-.2-.2H124h-.2-.2-.2-.2-.2-.2-.2-.2H122h-.2-.2-.2-.2-.2-.2-.2-.2H120h-.2-.2-.2-.2-.2-.2-.2-.2H118h-.2-.2-.2-.2-.2-.2-.2-.2H116h-.2-.2-.2-.2-.2-.2-.2-.2H114h-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2H111h-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2H108h-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2H105h-.2-.2-.2-.2H104h-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2H100h-.2-.2-.2-.2H99h-.2-.2-.2-.2H98h-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2H88h-.2-.2-.2-.2H87h-.2-.2-.2-.2H86h-.2-.2-.2-.2H85h-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2H82h-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2H79h-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2H77h-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2H75h-.2-.2-.2-.2-.2-.2-.2-.2-.2-.2H73h-.2-.2-.2-.2-.2H72c-13.2 0-24-10.7-24-24V336h56c13.3 0 24-10.7 24-24s-10.7-24-24-24H48V240h56c13.3 0 24-10.7 24-24s-10.7-24-24-24H48V152c0-13.3 10.7-24 24-24zM208 72c0-13.3 10.7-24 24-24H408c13.3 0 24 10.7 24 24V336 464H368V400c0-26.5-21.5-48-48-48s-48 21.5-48 48v64H208V72zm88 24v24H272c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h24v24c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16V168h24c8.8 0 16-7.2 16-16V136c0-8.8-7.2-16-16-16H344V96c0-8.8-7.2-16-16-16H312c-8.8 0-16 7.2-16 16z"
    ]
};
var $d95f73952ede904a$export$cea7736417b94a3b = $d95f73952ede904a$export$7a76c9d35b42d691;
var $d95f73952ede904a$export$69c8cc0360f017e8 = $d95f73952ede904a$export$7a76c9d35b42d691;
var $d95f73952ede904a$export$5d65c40a109eb09c = {
    prefix: "far",
    iconName: "chess-rook",
    icon: [
        448,
        512,
        [
            9820
        ],
        "f447",
        "M80 80V192c0 2.5 1.2 4.9 3.2 6.4l51.2 38.4c6.8 5.1 10.4 13.4 9.5 21.9L133.5 352H85.2l9.4-85L54.4 236.8C40.3 226.2 32 209.6 32 192V72c0-22.1 17.9-40 40-40H376c22.1 0 40 17.9 40 40V192c0 17.6-8.3 34.2-22.4 44.8L353.4 267l9.4 85H314.5l-10.4-93.3c-.9-8.4 2.7-16.8 9.5-21.9l51.2-38.4c2-1.5 3.2-3.9 3.2-6.4V80H304v24c0 13.3-10.7 24-24 24s-24-10.7-24-24V80H192v24c0 13.3-10.7 24-24 24s-24-10.7-24-24V80H80zm4.7 384H363.3l-16.6-32H101.2L84.7 464zm271.9-80c12 0 22.9 6.7 28.4 17.3l26.5 51.2c3 5.8 4.6 12.2 4.6 18.7c0 22.5-18.2 40.8-40.8 40.8H72.8C50.2 512 32 493.8 32 471.2c0-6.5 1.6-12.9 4.6-18.7l26.5-51.2C68.5 390.7 79.5 384 91.5 384h265zM208 288c-8.8 0-16-7.2-16-16V224c0-17.7 14.3-32 32-32s32 14.3 32 32v48c0 8.8-7.2 16-16 16H208z"
    ]
};
var $d95f73952ede904a$export$228008b5e11032fa = {
    prefix: "far",
    iconName: "star-half",
    icon: [
        576,
        512,
        [
            61731
        ],
        "f089",
        "M293.3 .6c10.9 2.5 18.6 12.2 18.6 23.4V408.7c0 8.9-4.9 17-12.7 21.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.3c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5c4.9-10.1 16.1-15.4 27-12.9zM263.9 128.4l-28.6 58.8c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l92.5-49.4V128.4z"
    ]
};
var $d95f73952ede904a$export$d5713874f8fefe1b = {
    prefix: "far",
    iconName: "chess-king",
    icon: [
        448,
        512,
        [
            9818
        ],
        "f43f",
        "M248 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V56H168c-13.3 0-24 10.7-24 24s10.7 24 24 24h32v40H59.6C26.7 144 0 170.7 0 203.6c0 8.2 1.7 16.3 4.9 23.8L59.1 352h52.3L49 208.2c-.6-1.5-1-3-1-4.6c0-6.4 5.2-11.6 11.6-11.6H224 388.4c6.4 0 11.6 5.2 11.6 11.6c0 1.6-.3 3.2-1 4.6L336.5 352h52.3l54.2-124.6c3.3-7.5 4.9-15.6 4.9-23.8c0-32.9-26.7-59.6-59.6-59.6H248V104h32c13.3 0 24-10.7 24-24s-10.7-24-24-24H248V24zM101.2 432H346.8l16.6 32H84.7l16.6-32zm283.7-30.7c-5.5-10.6-16.5-17.3-28.4-17.3H91.5c-12 0-22.9 6.7-28.4 17.3L36.6 452.5c-3 5.8-4.6 12.2-4.6 18.7C32 493.8 50.2 512 72.8 512H375.2c22.5 0 40.8-18.2 40.8-40.8c0-6.5-1.6-12.9-4.6-18.7l-26.5-51.2z"
    ]
};
var $d95f73952ede904a$export$9a5c11a5e3d7f1e7 = {
    prefix: "far",
    iconName: "circle-user",
    icon: [
        512,
        512,
        [
            62142,
            "user-circle"
        ],
        "f2bd",
        "M406.5 399.6C387.4 352.9 341.5 320 288 320H224c-53.5 0-99.4 32.9-118.5 79.6C69.9 362.2 48 311.7 48 256C48 141.1 141.1 48 256 48s208 93.1 208 208c0 55.7-21.9 106.2-57.5 143.6zm-40.1 32.7C334.4 452.4 296.6 464 256 464s-78.4-11.6-110.5-31.7c7.3-36.7 39.7-64.3 78.5-64.3h64c38.8 0 71.2 27.6 78.5 64.3zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-272a40 40 0 1 1 0-80 40 40 0 1 1 0 80zm-88-40a88 88 0 1 0 176 0 88 88 0 1 0 -176 0z"
    ]
};
var $d95f73952ede904a$export$be7d974e9e0dba1a = $d95f73952ede904a$export$9a5c11a5e3d7f1e7;
var $d95f73952ede904a$export$e9bd786d30cb716c = {
    prefix: "far",
    iconName: "copy",
    icon: [
        448,
        512,
        [],
        "f0c5",
        "M384 336H192c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16l140.1 0L400 115.9V320c0 8.8-7.2 16-16 16zM192 384H384c35.3 0 64-28.7 64-64V115.9c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1H192c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H256c35.3 0 64-28.7 64-64V416H272v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16H96V128H64z"
    ]
};
var $d95f73952ede904a$export$928280bdd54fa173 = {
    prefix: "far",
    iconName: "share-from-square",
    icon: [
        576,
        512,
        [
            61509,
            "share-square"
        ],
        "f14d",
        "M400 255.4V240 208c0-8.8-7.2-16-16-16H352 336 289.5c-50.9 0-93.9 33.5-108.3 79.6c-3.3-9.4-5.2-19.8-5.2-31.6c0-61.9 50.1-112 112-112h48 16 32c8.8 0 16-7.2 16-16V80 64.6L506 160 400 255.4zM336 240h16v48c0 17.7 14.3 32 32 32h3.7c7.9 0 15.5-2.9 21.4-8.2l139-125.1c7.6-6.8 11.9-16.5 11.9-26.7s-4.3-19.9-11.9-26.7L409.9 8.9C403.5 3.2 395.3 0 386.7 0C367.5 0 352 15.5 352 34.7V80H336 304 288c-88.4 0-160 71.6-160 160c0 60.4 34.6 99.1 63.9 120.9c5.9 4.4 11.5 8.1 16.7 11.2c4.4 2.7 8.5 4.9 11.9 6.6c3.4 1.7 6.2 3 8.2 3.9c2.2 1 4.6 1.4 7.1 1.4h2.5c9.8 0 17.8-8 17.8-17.8c0-7.8-5.3-14.7-11.6-19.5l0 0c-.4-.3-.7-.5-1.1-.8c-1.7-1.1-3.4-2.5-5-4.1c-.8-.8-1.7-1.6-2.5-2.6s-1.6-1.9-2.4-2.9c-1.8-2.5-3.5-5.3-5-8.5c-2.6-6-4.3-13.3-4.3-22.4c0-36.1 29.3-65.5 65.5-65.5H304h32zM72 32C32.2 32 0 64.2 0 104V440c0 39.8 32.2 72 72 72H408c39.8 0 72-32.2 72-72V376c0-13.3-10.7-24-24-24s-24 10.7-24 24v64c0 13.3-10.7 24-24 24H72c-13.3 0-24-10.7-24-24V104c0-13.3 10.7-24 24-24h64c13.3 0 24-10.7 24-24s-10.7-24-24-24H72z"
    ]
};
var $d95f73952ede904a$export$ae9e1434571f373c = $d95f73952ede904a$export$928280bdd54fa173;
var $d95f73952ede904a$export$da61665fff8aebfe = {
    prefix: "far",
    iconName: "copyright",
    icon: [
        512,
        512,
        [
            169
        ],
        "f1f9",
        "M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM199.4 312.6c-31.2-31.2-31.2-81.9 0-113.1s81.9-31.2 113.1 0c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9c-50-50-131-50-181 0s-50 131 0 181s131 50 181 0c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0c-31.2 31.2-81.9 31.2-113.1 0z"
    ]
};
var $d95f73952ede904a$export$fc82fb79180cd17c = {
    prefix: "far",
    iconName: "map",
    icon: [
        576,
        512,
        [
            128506,
            62072
        ],
        "f279",
        "M565.6 36.2C572.1 40.7 576 48.1 576 56V392c0 10-6.2 18.9-15.5 22.4l-168 64c-5.2 2-10.9 2.1-16.1 .3L192.5 417.5l-160 61c-7.4 2.8-15.7 1.8-22.2-2.7S0 463.9 0 456V120c0-10 6.1-18.9 15.5-22.4l168-64c5.2-2 10.9-2.1 16.1-.3L383.5 94.5l160-61c7.4-2.8 15.7-1.8 22.2 2.7zM48 136.5V421.2l120-45.7V90.8L48 136.5zM360 422.7V137.3l-144-48V374.7l144 48zm48-1.5l120-45.7V90.8L408 136.5V421.2z"
    ]
};
var $d95f73952ede904a$export$6b31a1e5968b2378 = {
    prefix: "far",
    iconName: "bell-slash",
    icon: [
        640,
        512,
        [
            128277,
            61943
        ],
        "f1f6",
        "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L542.6 400c2.7-7.8 1.3-16.5-3.9-23l-14.9-18.6C495.5 322.9 480 278.8 480 233.4V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V51.2c-42.6 8.6-79 34.2-102 69.3L38.8 5.1zM224 150.3C243.6 117.7 279.3 96 320 96c61.9 0 112 50.1 112 112v25.4c0 32.7 6.4 64.8 18.7 94.5L224 150.3zM406.2 416l-60.9-48H168.3c21.2-32.8 34.4-70.3 38.4-109.1L160 222.1v11.4c0 45.4-15.5 89.5-43.8 124.9L101.3 377c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6H406.2zM384 448H320 256c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"
    ]
};
var $d95f73952ede904a$export$54608d0a883fea4d = {
    prefix: "far",
    iconName: "hand-lizard",
    icon: [
        512,
        512,
        [],
        "f258",
        "M72 112c-13.3 0-24 10.7-24 24s10.7 24 24 24H240c35.3 0 64 28.7 64 64s-28.7 64-64 64H136c-13.3 0-24 10.7-24 24s10.7 24 24 24H288c4.5 0 8.9 1.3 12.7 3.6l64 40c7 4.4 11.3 12.1 11.3 20.4v24c0 13.3-10.7 24-24 24s-24-10.7-24-24V413.3L281.1 384H136c-39.8 0-72-32.2-72-72s32.2-72 72-72H240c8.8 0 16-7.2 16-16s-7.2-16-16-16H72c-39.8 0-72-32.2-72-72S32.2 64 72 64H281.6c46.7 0 90.9 21.5 119.7 58.3l78.4 100.1c20.9 26.7 32.3 59.7 32.3 93.7V424c0 13.3-10.7 24-24 24s-24-10.7-24-24V316.1c0-23.2-7.8-45.8-22.1-64.1L363.5 151.9c-19.7-25.2-49.9-39.9-81.9-39.9H72z"
    ]
};
var $d95f73952ede904a$export$b5023c446f10324 = {
    prefix: "far",
    iconName: "face-smile",
    icon: [
        512,
        512,
        [
            128578,
            "smile"
        ],
        "f118",
        "M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm177.6 62.1C192.8 334.5 218.8 352 256 352s63.2-17.5 78.4-33.9c9-9.7 24.2-10.4 33.9-1.4s10.4 24.2 1.4 33.9c-22 23.8-60 49.4-113.6 49.4s-91.7-25.5-113.6-49.4c-9-9.7-8.4-24.9 1.4-33.9s24.9-8.4 33.9 1.4zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
    ]
};
var $d95f73952ede904a$export$c632b2334f0913bc = $d95f73952ede904a$export$b5023c446f10324;
var $d95f73952ede904a$export$e49e3cfceea441cc = {
    prefix: "far",
    iconName: "hand-peace",
    icon: [
        512,
        512,
        [
            9996
        ],
        "f25b",
        "M250.8 1.4c-35.2-3.7-66.6 21.8-70.3 57L174 119 156.7 69.6C145 36.3 108.4 18.8 75.1 30.5S24.2 78.8 35.9 112.1L88.7 262.2C73.5 276.7 64 297.3 64 320v0 24c0 92.8 75.2 168 168 168h48c92.8 0 168-75.2 168-168V272 256 224c0-35.3-28.7-64-64-64c-7.9 0-15.4 1.4-22.4 4c-10.4-21.3-32.3-36-57.6-36c-.7 0-1.5 0-2.2 0l5.9-56.3c3.7-35.2-21.8-66.6-57-70.3zm-.2 155.4C243.9 166.9 240 179 240 192v48c0 .7 0 1.4 0 2c-5.1-1.3-10.5-2-16-2h-7.4l-5.4-15.3 17-161.3c.9-8.8 8.8-15.2 17.6-14.2s15.2 8.8 14.2 17.6l-9.5 90.1zM111.4 85.6L165.7 240H144c-4 0-8 .3-11.9 .9L81.2 96.2c-2.9-8.3 1.5-17.5 9.8-20.4s17.5 1.5 20.4 9.8zM288 192c0-8.8 7.2-16 16-16s16 7.2 16 16v32 16c0 8.8-7.2 16-16 16s-16-7.2-16-16V192zm38.4 108c10.4 21.3 32.3 36 57.6 36c5.5 0 10.9-.7 16-2v10c0 66.3-53.7 120-120 120H232c-66.3 0-120-53.7-120-120l0-24 0 0c0-17.7 14.3-32 32-32h80c8.8 0 16 7.2 16 16s-7.2 16-16 16H184c-13.3 0-24 10.7-24 24s10.7 24 24 24h40c35.3 0 64-28.7 64-64c0-.7 0-1.4 0-2c5.1 1.3 10.5 2 16 2c7.9 0 15.4-1.4 22.4-4zM400 272c0 8.8-7.2 16-16 16s-16-7.2-16-16V240 224c0-8.8 7.2-16 16-16s16 7.2 16 16v32 16z"
    ]
};
var $d95f73952ede904a$export$fbb22081b65e4f33 = {
    prefix: "far",
    iconName: "face-grin-hearts",
    icon: [
        512,
        512,
        [
            128525,
            "grin-hearts"
        ],
        "f584",
        "M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm349.5 52.4c18.7-4.4 35.9 12 25.5 28.1C350.4 374.6 306.3 400 255.9 400s-94.5-25.4-119.1-63.5c-10.4-16.1 6.8-32.5 25.5-28.1c28.9 6.8 60.5 10.5 93.6 10.5s64.7-3.7 93.6-10.5zM215.3 137.1c17.8 4.8 28.4 23.1 23.6 40.8l-17.4 65c-2.3 8.5-11.1 13.6-19.6 11.3l-65.1-17.4c-17.8-4.8-28.4-23.1-23.6-40.8s23.1-28.4 40.8-23.6l16.1 4.3 4.3-16.1c4.8-17.8 23.1-28.4 40.8-23.6zm122.3 23.6l4.3 16.1 16.1-4.3c17.8-4.8 36.1 5.8 40.8 23.6s-5.8 36.1-23.6 40.8l-65.1 17.4c-8.5 2.3-17.3-2.8-19.6-11.3l-17.4-65c-4.8-17.8 5.8-36.1 23.6-40.8s36.1 5.8 40.9 23.6z"
    ]
};
var $d95f73952ede904a$export$c56cf0e0c3bc5ed2 = $d95f73952ede904a$export$fbb22081b65e4f33;
var $d95f73952ede904a$export$f26673f8b10c3d46 = {
    prefix: "far",
    iconName: "building",
    icon: [
        384,
        512,
        [
            127970,
            61687
        ],
        "f1ad",
        "M64 48c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16h80V400c0-26.5 21.5-48 48-48s48 21.5 48 48v64h80c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H64zM0 64C0 28.7 28.7 0 64 0H320c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm88 40c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16H104c-8.8 0-16-7.2-16-16V104zM232 88h48c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16H232c-8.8 0-16-7.2-16-16V104c0-8.8 7.2-16 16-16zM88 232c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16H104c-8.8 0-16-7.2-16-16V232zm144-16h48c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16H232c-8.8 0-16-7.2-16-16V232c0-8.8 7.2-16 16-16z"
    ]
};
var $d95f73952ede904a$export$2ff38f330c834084 = {
    prefix: "far",
    iconName: "face-grin-beam-sweat",
    icon: [
        512,
        512,
        [
            128517,
            "grin-beam-sweat"
        ],
        "f583",
        "M476.8 126.3C497.1 120.8 512 102.7 512 81c0-20-28.6-60.4-41.6-77.7c-3.2-4.4-9.6-4.4-12.8 0c-9.5 12.6-27.1 37.2-36 57.5c-.3 .7-.6 1.4-.9 2.1C417.8 69.7 416 76 416 81c0 26 21.5 47 48 47c4.4 0 8.7-.6 12.8-1.7zM395.4 41.2C355.3 15.2 307.4 0 256 0C114.6 0 0 114.6 0 256S114.6 512 256 512s256-114.6 256-256c0-35.8-7.3-69.9-20.6-100.8c-8.6 3.1-17.8 4.8-27.4 4.8c-8.9 0-17.6-1.5-25.7-4.2C454.7 185.5 464 219.7 464 256c0 114.9-93.1 208-208 208S48 370.9 48 256S141.1 48 256 48c48.7 0 93.4 16.7 128.9 44.7c-.6-3.8-.9-7.7-.9-11.7c0-11.4 3.8-22.4 7.1-30.5c1.3-3.1 2.7-6.2 4.3-9.3zM375 336.5c10.4-16.1-6.8-32.5-25.5-28.1c-28.9 6.8-60.5 10.5-93.6 10.5s-64.7-3.7-93.6-10.5c-18.7-4.4-35.9 12-25.5 28.1c24.6 38.1 68.7 63.5 119.1 63.5s94.5-25.4 119.1-63.5zM217.6 228.8l0 0 0 0 0 0c2.1 2.8 5.7 3.9 8.9 2.8s5.5-4.1 5.5-7.6c0-17.9-6.7-35.6-16.6-48.8c-9.8-13-23.9-23.2-39.4-23.2s-29.6 10.2-39.4 23.2C126.7 188.4 120 206.1 120 224c0 3.4 2.2 6.5 5.5 7.6s6.9 0 8.9-2.8l0 0 0 0 0 0 .2-.2c.2-.2 .4-.5 .7-.9c.6-.8 1.6-2 2.8-3.4c2.5-2.8 6-6.6 10.2-10.3c8.8-7.8 18.8-14 27.7-14s18.9 6.2 27.7 14c4.2 3.7 7.7 7.5 10.2 10.3c1.2 1.4 2.2 2.6 2.8 3.4c.3 .4 .6 .7 .7 .9l.2 .2 0 0zm160 0l0 0 0 0c2.1 2.8 5.7 3.9 8.9 2.8s5.5-4.1 5.5-7.6c0-17.9-6.7-35.6-16.6-48.8c-9.8-13-23.9-23.2-39.4-23.2s-29.6 10.2-39.4 23.2C286.7 188.4 280 206.1 280 224c0 3.4 2.2 6.5 5.5 7.6s6.9 0 8.9-2.8l0 0 0 0 0 0 .2-.2c.2-.2 .4-.5 .7-.9c.6-.8 1.6-2 2.8-3.4c2.5-2.8 6-6.6 10.2-10.3c8.8-7.8 18.8-14 27.7-14s18.9 6.2 27.7 14c4.2 3.7 7.7 7.5 10.2 10.3c1.2 1.4 2.2 2.6 2.8 3.4c.3 .4 .6 .7 .7 .9l.2 .2 0 0 0 0z"
    ]
};
var $d95f73952ede904a$export$14d0ccc54c5b6826 = $d95f73952ede904a$export$2ff38f330c834084;
var $d95f73952ede904a$export$c4c2f69a53bab720 = {
    prefix: "far",
    iconName: "moon",
    icon: [
        384,
        512,
        [
            127769,
            9214
        ],
        "f186",
        "M144.7 98.7c-21 34.1-33.1 74.3-33.1 117.3c0 98 62.8 181.4 150.4 211.7c-12.4 2.8-25.3 4.3-38.6 4.3C126.6 432 48 353.3 48 256c0-68.9 39.4-128.4 96.8-157.3zm62.1-66C91.1 41.2 0 137.9 0 256C0 379.7 100 480 223.5 480c47.8 0 92-15 128.4-40.6c1.9-1.3 3.7-2.7 5.5-4c4.8-3.6 9.4-7.4 13.9-11.4c2.7-2.4 5.3-4.8 7.9-7.3c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-3.7 .6-7.4 1.2-11.1 1.6c-5 .5-10.1 .9-15.3 1c-1.2 0-2.5 0-3.7 0c-.1 0-.2 0-.3 0c-96.8-.2-175.2-78.9-175.2-176c0-54.8 24.9-103.7 64.1-136c1-.9 2.1-1.7 3.2-2.6c4-3.2 8.2-6.2 12.5-9c3.1-2 6.3-4 9.6-5.8c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-3.6-.3-7.1-.5-10.7-.6c-2.7-.1-5.5-.1-8.2-.1c-3.3 0-6.5 .1-9.8 .2c-2.3 .1-4.6 .2-6.9 .4z"
    ]
};
var $d95f73952ede904a$export$34f5c36a3e80efa2 = {
    prefix: "far",
    iconName: "calendar",
    icon: [
        448,
        512,
        [
            128197,
            128198
        ],
        "f133",
        "M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z"
    ]
};
var $d95f73952ede904a$export$4272e56f2429da88 = {
    prefix: "far",
    iconName: "face-grin-tongue-wink",
    icon: [
        512,
        512,
        [
            128540,
            "grin-tongue-wink"
        ],
        "f58b",
        "M348.3 442.4c2.4-8.4 3.7-17.3 3.7-26.4V363.5c8.8-8 16.6-17.1 23-27c10.4-16.1-6.8-32.5-25.5-28.1c-28.9 6.8-60.5 10.5-93.6 10.5s-64.7-3.7-93.6-10.5c-18.7-4.4-35.9 12-25.5 28.1c6.5 10 14.3 19.1 23.1 27.1V416c0 9.2 1.3 18 3.7 26.4C95.1 408.4 48 337.7 48 256C48 141.1 141.1 48 256 48s208 93.1 208 208c0 81.7-47.1 152.4-115.7 186.4zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM159.6 220c10.6 0 19.9 3.8 25.4 9.7c7.6 8.1 20.2 8.5 28.3 .9s8.5-20.2 .9-28.3C199.7 186.8 179 180 159.6 180s-40.1 6.8-54.6 22.3c-7.6 8.1-7.1 20.7 .9 28.3s20.7 7.1 28.3-.9c5.5-5.8 14.8-9.7 25.4-9.7zm176.7 12a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm-.4-72a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm0 128a80 80 0 1 0 0-160 80 80 0 1 0 0 160zM320 416c0 35.3-28.7 64-64 64s-64-28.7-64-64V378.6c0-14.7 11.9-26.6 26.6-26.6h2c11.3 0 21.1 7.9 23.6 18.9c2.8 12.6 20.8 12.6 23.6 0c2.5-11.1 12.3-18.9 23.6-18.9h2c14.7 0 26.6 11.9 26.6 26.6V416z"
    ]
};
var $d95f73952ede904a$export$58099903d50aefb3 = $d95f73952ede904a$export$4272e56f2429da88;
var $d95f73952ede904a$export$76c1aa4bf9a39458 = {
    prefix: "far",
    iconName: "clone",
    icon: [
        512,
        512,
        [],
        "f24d",
        "M64 464H288c8.8 0 16-7.2 16-16V384h48v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h64v48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16zM224 304H448c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H224c-8.8 0-16 7.2-16 16V288c0 8.8 7.2 16 16 16zm-64-16V64c0-35.3 28.7-64 64-64H448c35.3 0 64 28.7 64 64V288c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64z"
    ]
};
var $d95f73952ede904a$export$67a047c738fb34da = {
    prefix: "far",
    iconName: "face-angry",
    icon: [
        512,
        512,
        [
            128544,
            "angry"
        ],
        "f556",
        "M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm72.4-118.5c9.7-9 10.2-24.2 1.2-33.9C315.3 344.3 290.6 328 256 328s-59.3 16.3-73.5 31.6c-9 9.7-8.5 24.9 1.2 33.9s24.9 8.5 33.9-1.2c7.4-7.9 20-16.4 38.5-16.4s31.1 8.5 38.5 16.4c9 9.7 24.2 10.2 33.9 1.2zM176.4 272c17.7 0 32-14.3 32-32c0-1.5-.1-3-.3-4.4l10.9 3.6c8.4 2.8 17.4-1.7 20.2-10.1s-1.7-17.4-10.1-20.2l-96-32c-8.4-2.8-17.4 1.7-20.2 10.1s1.7 17.4 10.1 20.2l30.7 10.2c-5.8 5.8-9.3 13.8-9.3 22.6c0 17.7 14.3 32 32 32zm192-32c0-8.9-3.6-17-9.5-22.8l30.2-10.1c8.4-2.8 12.9-11.9 10.1-20.2s-11.9-12.9-20.2-10.1l-96 32c-8.4 2.8-12.9 11.9-10.1 20.2s11.9 12.9 20.2 10.1l11.7-3.9c-.2 1.5-.3 3.1-.3 4.7c0 17.7 14.3 32 32 32s32-14.3 32-32z"
    ]
};
var $d95f73952ede904a$export$3c96c08e234498c5 = $d95f73952ede904a$export$67a047c738fb34da;
var $d95f73952ede904a$export$3896694b3e81fba7 = {
    prefix: "far",
    iconName: "rectangle-xmark",
    icon: [
        512,
        512,
        [
            62164,
            "rectangle-times",
            "times-rectangle",
            "window-close"
        ],
        "f410",
        "M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm175 79c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
    ]
};
var $d95f73952ede904a$export$eaaf26416a51dc1 = $d95f73952ede904a$export$3896694b3e81fba7;
var $d95f73952ede904a$export$10147c0014152a3f = $d95f73952ede904a$export$3896694b3e81fba7;
var $d95f73952ede904a$export$18b7775f78a3e16 = $d95f73952ede904a$export$3896694b3e81fba7;
var $d95f73952ede904a$export$b5378818301da1be = {
    prefix: "far",
    iconName: "paper-plane",
    icon: [
        512,
        512,
        [
            61913
        ],
        "f1d8",
        "M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376V479.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z"
    ]
};
var $d95f73952ede904a$export$53dd2cacf674142a = {
    prefix: "far",
    iconName: "life-ring",
    icon: [
        512,
        512,
        [],
        "f1cd",
        "M385.1 419.1C349.7 447.2 304.8 464 256 464s-93.7-16.8-129.1-44.9l80.4-80.4c14.3 8.4 31 13.3 48.8 13.3s34.5-4.8 48.8-13.3l80.4 80.4zm68.1 .2C489.9 374.9 512 318.1 512 256s-22.1-118.9-58.8-163.3L465 81c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L419.3 58.8C374.9 22.1 318.1 0 256 0S137.1 22.1 92.7 58.8L81 47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9L58.8 92.7C22.1 137.1 0 193.9 0 256s22.1 118.9 58.8 163.3L47 431c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l11.8-11.8C137.1 489.9 193.9 512 256 512s118.9-22.1 163.3-58.8L431 465c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-11.8-11.8zm-34.1-34.1l-80.4-80.4c8.4-14.3 13.3-31 13.3-48.8s-4.8-34.5-13.3-48.8l80.4-80.4C447.2 162.3 464 207.2 464 256s-16.8 93.7-44.9 129.1zM385.1 92.9l-80.4 80.4c-14.3-8.4-31-13.3-48.8-13.3s-34.5 4.8-48.8 13.3L126.9 92.9C162.3 64.8 207.2 48 256 48s93.7 16.8 129.1 44.9zM173.3 304.8L92.9 385.1C64.8 349.7 48 304.8 48 256s16.8-93.7 44.9-129.1l80.4 80.4c-8.4 14.3-13.3 31-13.3 48.8s4.8 34.5 13.3 48.8zM208 256a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z"
    ]
};
var $d95f73952ede904a$export$bd5bd2ef56b793b1 = {
    prefix: "far",
    iconName: "face-grimace",
    icon: [
        512,
        512,
        [
            128556,
            "grimace"
        ],
        "f57f",
        "M256 48a208 208 0 1 0 0 416 208 208 0 1 0 0-416zM512 256A256 256 0 1 1 0 256a256 256 0 1 1 512 0zM168 320c-13.3 0-24 10.7-24 24s10.7 24 24 24h8V320h-8zm40 48h32V320H208v48zm96 0V320H272v48h32zm32 0h8c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8v48zM168 288H344c30.9 0 56 25.1 56 56s-25.1 56-56 56H168c-30.9 0-56-25.1-56-56s25.1-56 56-56zm-23.6-80a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
    ]
};
var $d95f73952ede904a$export$3d08cd36ac1ef231 = $d95f73952ede904a$export$bd5bd2ef56b793b1;
var $d95f73952ede904a$export$23e8b4955c2d951b = {
    prefix: "far",
    iconName: "calendar-minus",
    icon: [
        448,
        512,
        [],
        "f272",
        "M128 0c13.3 0 24 10.7 24 24V64H296V24c0-13.3 10.7-24 24-24s24 10.7 24 24V64h40c35.3 0 64 28.7 64 64v16 48V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192 144 128C0 92.7 28.7 64 64 64h40V24c0-13.3 10.7-24 24-24zM400 192H48V448c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V192zM296 352H152c-13.3 0-24-10.7-24-24s10.7-24 24-24H296c13.3 0 24 10.7 24 24s-10.7 24-24 24z"
    ]
};
var $d95f73952ede904a$export$30262489773a79a3 = {
    prefix: "far",
    iconName: "circle-xmark",
    icon: [
        512,
        512,
        [
            61532,
            "times-circle",
            "xmark-circle"
        ],
        "f057",
        "M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"
    ]
};
var $d95f73952ede904a$export$ab0ec50720a747eb = $d95f73952ede904a$export$30262489773a79a3;
var $d95f73952ede904a$export$90ac4096df8efdee = $d95f73952ede904a$export$30262489773a79a3;
var $d95f73952ede904a$export$47e4e0d519d33497 = {
    prefix: "far",
    iconName: "thumbs-up",
    icon: [
        512,
        512,
        [
            128077,
            61575
        ],
        "f164",
        "M323.8 34.8c-38.2-10.9-78.1 11.2-89 49.4l-5.7 20c-3.7 13-10.4 25-19.5 35l-51.3 56.4c-8.9 9.8-8.2 25 1.6 33.9s25 8.2 33.9-1.6l51.3-56.4c14.1-15.5 24.4-34 30.1-54.1l5.7-20c3.6-12.7 16.9-20.1 29.7-16.5s20.1 16.9 16.5 29.7l-5.7 20c-5.7 19.9-14.7 38.7-26.6 55.5c-5.2 7.3-5.8 16.9-1.7 24.9s12.3 13 21.3 13L448 224c8.8 0 16 7.2 16 16c0 6.8-4.3 12.7-10.4 15c-7.4 2.8-13 9-14.9 16.7s.1 15.8 5.3 21.7c2.5 2.8 4 6.5 4 10.6c0 7.8-5.6 14.3-13 15.7c-8.2 1.6-15.1 7.3-18 15.2s-1.6 16.7 3.6 23.3c2.1 2.7 3.4 6.1 3.4 9.9c0 6.7-4.2 12.6-10.2 14.9c-11.5 4.5-17.7 16.9-14.4 28.8c.4 1.3 .6 2.8 .6 4.3c0 8.8-7.2 16-16 16H286.5c-12.6 0-25-3.7-35.5-10.7l-61.7-41.1c-11-7.4-25.9-4.4-33.3 6.7s-4.4 25.9 6.7 33.3l61.7 41.1c18.4 12.3 40 18.8 62.1 18.8H384c34.7 0 62.9-27.6 64-62c14.6-11.7 24-29.7 24-50c0-4.5-.5-8.8-1.3-13c15.4-11.7 25.3-30.2 25.3-51c0-6.5-1-12.8-2.8-18.7C504.8 273.7 512 257.7 512 240c0-35.3-28.6-64-64-64l-92.3 0c4.7-10.4 8.7-21.2 11.8-32.2l5.7-20c10.9-38.2-11.2-78.1-49.4-89zM32 192c-17.7 0-32 14.3-32 32V448c0 17.7 14.3 32 32 32H96c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32H32z"
    ]
};
var $d95f73952ede904a$export$26a3f9d2784b90d8 = {
    prefix: "far",
    iconName: "window-minimize",
    icon: [
        512,
        512,
        [
            128469
        ],
        "f2d1",
        "M24 432c-13.3 0-24 10.7-24 24s10.7 24 24 24H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H24z"
    ]
};
var $d95f73952ede904a$export$7ec6541fee081990 = {
    prefix: "far",
    iconName: "square-full",
    icon: [
        512,
        512,
        [
            128997,
            128998,
            128999,
            129000,
            129001,
            129002,
            129003,
            11035,
            11036
        ],
        "f45c",
        "M464 48V464H48V48H464zM48 0H0V48 464v48H48 464h48V464 48 0H464 48z"
    ]
};
var $d95f73952ede904a$export$4a4e034527c933f5 = {
    prefix: "far",
    iconName: "note-sticky",
    icon: [
        448,
        512,
        [
            62026,
            "sticky-note"
        ],
        "f249",
        "M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H288V352c0-17.7 14.3-32 32-32h80V96c0-8.8-7.2-16-16-16H64zM288 480H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V320v5.5c0 17-6.7 33.3-18.7 45.3l-90.5 90.5c-12 12-28.3 18.7-45.3 18.7H288z"
    ]
};
var $d95f73952ede904a$export$80889adc5d98bf4a = $d95f73952ede904a$export$4a4e034527c933f5;
var $d95f73952ede904a$export$8a5a0dbb2a17e253 = {
    prefix: "far",
    iconName: "face-sad-tear",
    icon: [
        512,
        512,
        [
            128546,
            "sad-tear"
        ],
        "f5b4",
        "M175.9 448c-35-.1-65.5-22.6-76-54.6C67.6 356.8 48 308.7 48 256C48 141.1 141.1 48 256 48s208 93.1 208 208s-93.1 208-208 208c-28.4 0-55.5-5.7-80.1-16zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM128 369c0 26 21.5 47 48 47s48-21 48-47c0-20-28.4-60.4-41.6-77.7c-3.2-4.4-9.6-4.4-12.8 0C156.6 308.6 128 349 128 369zm128-65c-13.3 0-24 10.7-24 24s10.7 24 24 24c30.7 0 58.7 11.5 80 30.6c9.9 8.8 25 8 33.9-1.9s8-25-1.9-33.9C338.3 320.2 299 304 256 304zm47.6-96a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm-128 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"
    ]
};
var $d95f73952ede904a$export$4b5241926f692f91 = $d95f73952ede904a$export$8a5a0dbb2a17e253;
var $d95f73952ede904a$export$b276ec3dc9760d39 = {
    prefix: "far",
    iconName: "hand-point-left",
    icon: [
        512,
        512,
        [],
        "f0a5",
        "M64 128l177.6 0c-1 5.2-1.6 10.5-1.6 16l0 16-32 0L64 160c-8.8 0-16-7.2-16-16s7.2-16 16-16zm224 16c0-17.7 14.3-32 32-32c0 0 0 0 0 0l24 0c66.3 0 120 53.7 120 120l0 48c0 52.5-33.7 97.1-80.7 113.4c.5-3.1 .7-6.2 .7-9.4c0-20-9.2-37.9-23.6-49.7c4.9-9 7.6-19.4 7.6-30.3c0-15.1-5.3-29-14-40c8.8-11 14-24.9 14-40l0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-40 0-40zm32-80s0 0 0 0c-18 0-34.6 6-48 16L64 80C28.7 80 0 108.7 0 144s28.7 64 64 64l82 0c-1.3 5.1-2 10.5-2 16c0 25.3 14.7 47.2 36 57.6c-2.6 7-4 14.5-4 22.4c0 20 9.2 37.9 23.6 49.7c-4.9 9-7.6 19.4-7.6 30.3c0 35.3 28.7 64 64 64l64 0 24 0c92.8 0 168-75.2 168-168l0-48c0-92.8-75.2-168-168-168l-24 0zM256 400c-8.8 0-16-7.2-16-16s7.2-16 16-16l48 0 16 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0zM240 224c0 5.5 .7 10.9 2 16l-2 0-32 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l32 0 0 16zm24 64l40 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-48 0-16 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l24 0z"
    ]
};
var $d95f73952ede904a$export$f9059ea71e16fa16 = {
    faTrashCan: $d95f73952ede904a$export$864bb8d6c21fb792,
    faTrashAlt: $d95f73952ede904a$export$88df7ff7eb32f9dc,
    faMessage: $d95f73952ede904a$export$6563a67224e7f879,
    faCommentAlt: $d95f73952ede904a$export$6e96904d9af0ec4a,
    faFileLines: $d95f73952ede904a$export$ef565d07efe2b5e9,
    faFileAlt: $d95f73952ede904a$export$243b47dca32bf0b8,
    faFileText: $d95f73952ede904a$export$f466100bf9bf37a5,
    faCalendarDays: $d95f73952ede904a$export$31c6cf6f5d38dc0,
    faCalendarAlt: $d95f73952ede904a$export$cbc139f33cff356,
    faHandPointRight: $d95f73952ede904a$export$f7bc8714c970afa4,
    faFaceSmileBeam: $d95f73952ede904a$export$e3c56ed54f074063,
    faSmileBeam: $d95f73952ede904a$export$54ada6dc9690e0ca,
    faFaceGrinStars: $d95f73952ede904a$export$1d1fbac384a76a12,
    faGrinStars: $d95f73952ede904a$export$64347a5c8c402ef4,
    faAddressBook: $d95f73952ede904a$export$853fd1561789e3bb,
    faContactBook: $d95f73952ede904a$export$594b5a5d4d2e156b,
    faComments: $d95f73952ede904a$export$932912e74adb8939,
    faPaste: $d95f73952ede904a$export$6f95f90dd1f6d86b,
    faFileClipboard: $d95f73952ede904a$export$ca3229c47de163fa,
    faFaceGrinTongueSquint: $d95f73952ede904a$export$8eee2c17ff89e724,
    faGrinTongueSquint: $d95f73952ede904a$export$4edf34c3def09a31,
    faFaceFlushed: $d95f73952ede904a$export$ba5dc4287853ecbd,
    faFlushed: $d95f73952ede904a$export$dfd2bd012685aeac,
    faSquareCaretRight: $d95f73952ede904a$export$5b1d41cdd118ea6d,
    faCaretSquareRight: $d95f73952ede904a$export$ae86c9de7e0f62fa,
    faSquareMinus: $d95f73952ede904a$export$814c9edba7b84aa4,
    faMinusSquare: $d95f73952ede904a$export$ffe9387966b3e681,
    faCompass: $d95f73952ede904a$export$b4d344633433e50e,
    faSquareCaretDown: $d95f73952ede904a$export$a1ab39cd66c4e50e,
    faCaretSquareDown: $d95f73952ede904a$export$61aea18df1c84401,
    faFaceKissBeam: $d95f73952ede904a$export$eca99665af566fe1,
    faKissBeam: $d95f73952ede904a$export$d6ff8a73c0812e63,
    faLightbulb: $d95f73952ede904a$export$1e80f89fe84a215b,
    faFlag: $d95f73952ede904a$export$6591b1ea509be9da,
    faSquareCheck: $d95f73952ede904a$export$5bb6a0c94ad2f4bb,
    faCheckSquare: $d95f73952ede904a$export$f0c8040f596df7fe,
    faCircleDot: $d95f73952ede904a$export$aa13d9234890e8d3,
    faDotCircle: $d95f73952ede904a$export$92bc269cb244d66a,
    faFaceDizzy: $d95f73952ede904a$export$635e4d8cc8428961,
    faDizzy: $d95f73952ede904a$export$89a2b10dabc487e8,
    faFutbol: $d95f73952ede904a$export$65a345b33858a655,
    faFutbolBall: $d95f73952ede904a$export$51a344ca0a215620,
    faSoccerBall: $d95f73952ede904a$export$f4a29712c724ba2d,
    faPenToSquare: $d95f73952ede904a$export$ba236543926e3569,
    faEdit: $d95f73952ede904a$export$7be713e57d023733,
    faHourglassHalf: $d95f73952ede904a$export$703272eebf5e3eea,
    faHourglass2: $d95f73952ede904a$export$f1052bbf6bf361c0,
    faEyeSlash: $d95f73952ede904a$export$ed3f2918429d029a,
    faHand: $d95f73952ede904a$export$f69db0b876f7d753,
    faHandPaper: $d95f73952ede904a$export$6e6216c8b50471bb,
    faHandSpock: $d95f73952ede904a$export$2262d6b626de1120,
    faFaceKiss: $d95f73952ede904a$export$5a54c83033a0a56a,
    faKiss: $d95f73952ede904a$export$c762a77aabf64fd0,
    faFaceGrinTongue: $d95f73952ede904a$export$95a7394c24f57943,
    faGrinTongue: $d95f73952ede904a$export$ef222816a43a4b3a,
    faChessBishop: $d95f73952ede904a$export$a831eedd2f59c62f,
    faFaceGrinWink: $d95f73952ede904a$export$1dd161850c5bc64e,
    faGrinWink: $d95f73952ede904a$export$2397fcd34eb12177,
    faFaceGrinWide: $d95f73952ede904a$export$bdbabf493c478cde,
    faGrinAlt: $d95f73952ede904a$export$b4abebfe416d36ba,
    faFaceFrownOpen: $d95f73952ede904a$export$c8a28356e07b9ccb,
    faFrownOpen: $d95f73952ede904a$export$c4775e66bed5d96,
    faHandPointUp: $d95f73952ede904a$export$cdc9f5e7e94e76da,
    faBookmark: $d95f73952ede904a$export$4ed9da5c3cca0ef1,
    faHandPointDown: $d95f73952ede904a$export$f6dcbf0a940428f4,
    faFolder: $d95f73952ede904a$export$72b780186370e953,
    faFolderBlank: $d95f73952ede904a$export$9ef114244d26da0,
    faUser: $d95f73952ede904a$export$f5699fa0844e0188,
    faSquareCaretLeft: $d95f73952ede904a$export$2c5163541229363,
    faCaretSquareLeft: $d95f73952ede904a$export$d0c8ba444f1f9581,
    faStar: $d95f73952ede904a$export$a3b0eb2cd7942125,
    faChessKnight: $d95f73952ede904a$export$861b1f13085cf122,
    faFaceLaughSquint: $d95f73952ede904a$export$67ca89c1ca38d559,
    faLaughSquint: $d95f73952ede904a$export$b206e700cf7084e1,
    faFaceLaugh: $d95f73952ede904a$export$2f203616c892d415,
    faLaugh: $d95f73952ede904a$export$6c74e314e801a4fe,
    faFolderOpen: $d95f73952ede904a$export$ff7e93418af88b78,
    faClipboard: $d95f73952ede904a$export$97d84347d71ba297,
    faChessQueen: $d95f73952ede904a$export$7b8ce73615739d30,
    faHandBackFist: $d95f73952ede904a$export$be38a892fe9b4098,
    faHandRock: $d95f73952ede904a$export$97a81eba394c8c44,
    faSquareCaretUp: $d95f73952ede904a$export$66068918abb14406,
    faCaretSquareUp: $d95f73952ede904a$export$307ae80b26533ce5,
    faChartBar: $d95f73952ede904a$export$b532f5d25de97633,
    faBarChart: $d95f73952ede904a$export$2d5f754a5e5738b,
    faWindowRestore: $d95f73952ede904a$export$eccfff9bfd585652,
    faSquarePlus: $d95f73952ede904a$export$eaf727acca5a35e4,
    faPlusSquare: $d95f73952ede904a$export$b6359eebfe900c35,
    faImage: $d95f73952ede904a$export$7e9f0928967e03b,
    faFolderClosed: $d95f73952ede904a$export$5e30548b7f8eeb95,
    faLemon: $d95f73952ede904a$export$4fbda8f64648f3b5,
    faHandshake: $d95f73952ede904a$export$b4c63e9bfc7906f1,
    faGem: $d95f73952ede904a$export$31ee86ac717db552,
    faCirclePlay: $d95f73952ede904a$export$86c4e45dc3302d15,
    faPlayCircle: $d95f73952ede904a$export$cf04333781061c5e,
    faCircleCheck: $d95f73952ede904a$export$c2e9877668862374,
    faCheckCircle: $d95f73952ede904a$export$be9e388158c74f29,
    faCircleStop: $d95f73952ede904a$export$229de76dfef2687f,
    faStopCircle: $d95f73952ede904a$export$47af2aad60ab3e7c,
    faIdBadge: $d95f73952ede904a$export$a75288855ea05282,
    faFaceLaughBeam: $d95f73952ede904a$export$3f2d51c0547bf984,
    faLaughBeam: $d95f73952ede904a$export$a88d1f4073ea9369,
    faRegistered: $d95f73952ede904a$export$5f519e9ac15ab8c3,
    faAddressCard: $d95f73952ede904a$export$6ea408c7266ed557,
    faContactCard: $d95f73952ede904a$export$4ac51eb0b298b190,
    faVcard: $d95f73952ede904a$export$91228257deb1bf18,
    faFaceTired: $d95f73952ede904a$export$5352cbdc070ce8d,
    faTired: $d95f73952ede904a$export$3d016d62cda18371,
    faFontAwesome: $d95f73952ede904a$export$aa4baaed1c60f58d,
    faFontAwesomeFlag: $d95f73952ede904a$export$102c25fde54d4843,
    faFontAwesomeLogoFull: $d95f73952ede904a$export$6e20d421a2e0f320,
    faFaceSmileWink: $d95f73952ede904a$export$6143da800b0e6626,
    faSmileWink: $d95f73952ede904a$export$f5dbb37f6801ee3f,
    faFileWord: $d95f73952ede904a$export$f0858dff6e769cf6,
    faFilePowerpoint: $d95f73952ede904a$export$c341daeecdea449a,
    faEnvelopeOpen: $d95f73952ede904a$export$c6c3bd5f7d9b8bf2,
    faFileZipper: $d95f73952ede904a$export$7a4a0e4caa1e4e6f,
    faFileArchive: $d95f73952ede904a$export$bf2047a9946b5c3f,
    faSquare: $d95f73952ede904a$export$90b4406457aae8cc,
    faSnowflake: $d95f73952ede904a$export$bab8f3647c394f48,
    faNewspaper: $d95f73952ede904a$export$d91b374112d4f8c1,
    faFaceKissWinkHeart: $d95f73952ede904a$export$611ae61f02de0aa,
    faKissWinkHeart: $d95f73952ede904a$export$ebba617701dfb917,
    faStarHalfStroke: $d95f73952ede904a$export$3e4892d8bf919edd,
    faStarHalfAlt: $d95f73952ede904a$export$c13575f42532efb3,
    faFileExcel: $d95f73952ede904a$export$77cb1a465c4fe84,
    faFaceGrinBeam: $d95f73952ede904a$export$3de52eeb00462407,
    faGrinBeam: $d95f73952ede904a$export$734da5249381ec7e,
    faObjectUngroup: $d95f73952ede904a$export$887f6345573abcac,
    faCircleRight: $d95f73952ede904a$export$1fec48c8bdd69c1d,
    faArrowAltCircleRight: $d95f73952ede904a$export$88962ffdad8b856d,
    faFaceRollingEyes: $d95f73952ede904a$export$a6d72a9a068392b5,
    faMehRollingEyes: $d95f73952ede904a$export$fdc62a1bea767cc2,
    faObjectGroup: $d95f73952ede904a$export$40cdac24aa94a57a,
    faHeart: $d95f73952ede904a$export$e4b51a47a2f8b9db,
    faFaceSurprise: $d95f73952ede904a$export$c938968e28178994,
    faSurprise: $d95f73952ede904a$export$46647c72213f53ba,
    faCirclePause: $d95f73952ede904a$export$fbeef2513e05ad08,
    faPauseCircle: $d95f73952ede904a$export$d8cf08a0362da8db,
    faCircle: $d95f73952ede904a$export$4280b2387fbdad12,
    faCircleUp: $d95f73952ede904a$export$72ea8a5e4e86cd69,
    faArrowAltCircleUp: $d95f73952ede904a$export$3747a8ef0995eadf,
    faFileAudio: $d95f73952ede904a$export$b8d24c57c9e64933,
    faFileImage: $d95f73952ede904a$export$6440b286d3cbac9b,
    faCircleQuestion: $d95f73952ede904a$export$d7cf0978afd90002,
    faQuestionCircle: $d95f73952ede904a$export$5ba67d7f2265c1a5,
    faFaceMehBlank: $d95f73952ede904a$export$38c072b870a9e4ab,
    faMehBlank: $d95f73952ede904a$export$e945435725f71e88,
    faEye: $d95f73952ede904a$export$b8c3e79e8c99c95b,
    faFaceSadCry: $d95f73952ede904a$export$e8ea88c55e55be7c,
    faSadCry: $d95f73952ede904a$export$8e924e6bd422cef9,
    faFileCode: $d95f73952ede904a$export$143d0ca7d2200f20,
    faWindowMaximize: $d95f73952ede904a$export$703cd98be31ec905,
    faFaceFrown: $d95f73952ede904a$export$e5f78e87efbb0248,
    faFrown: $d95f73952ede904a$export$43b7108508aecc5f,
    faFloppyDisk: $d95f73952ede904a$export$f62f2879ccaea13f,
    faSave: $d95f73952ede904a$export$1aaa83ff70706e1e,
    faCommentDots: $d95f73952ede904a$export$63ffcb3d4e94cb92,
    faCommenting: $d95f73952ede904a$export$49ee382a2425e89c,
    faFaceGrinSquint: $d95f73952ede904a$export$5d53da7627754bc6,
    faGrinSquint: $d95f73952ede904a$export$243ae757907b1580,
    faHandPointer: $d95f73952ede904a$export$d97ff927c450c87f,
    faHandScissors: $d95f73952ede904a$export$c578e919f2c5c135,
    faFaceGrinTears: $d95f73952ede904a$export$8ac6d81a3d5b40a1,
    faGrinTears: $d95f73952ede904a$export$b2f7512221512b5b,
    faCalendarXmark: $d95f73952ede904a$export$3c70ffe5660af060,
    faCalendarTimes: $d95f73952ede904a$export$99b20d7352fbcf08,
    faFileVideo: $d95f73952ede904a$export$b44eb38345c6a964,
    faFilePdf: $d95f73952ede904a$export$38611f1c776aba73,
    faComment: $d95f73952ede904a$export$805cd88398a70581,
    faEnvelope: $d95f73952ede904a$export$6f095630677adc,
    faHourglass: $d95f73952ede904a$export$b9098a890f61e022,
    faHourglassEmpty: $d95f73952ede904a$export$a2f8176a0161e891,
    faCalendarCheck: $d95f73952ede904a$export$5655108e1162ba45,
    faHardDrive: $d95f73952ede904a$export$4cb736b866cbb7ec,
    faHdd: $d95f73952ede904a$export$62551e9c5ba7093f,
    faFaceGrinSquintTears: $d95f73952ede904a$export$8ff56f5ebb8416a0,
    faGrinSquintTears: $d95f73952ede904a$export$542206d6a85f3b42,
    faRectangleList: $d95f73952ede904a$export$1f7600fa9fdb3978,
    faListAlt: $d95f73952ede904a$export$c6327a203ffc65a3,
    faCalendarPlus: $d95f73952ede904a$export$16768a660ae3ca9d,
    faCircleLeft: $d95f73952ede904a$export$5ae86b9da9cca3bd,
    faArrowAltCircleLeft: $d95f73952ede904a$export$5460a5b11a24996f,
    faMoneyBill1: $d95f73952ede904a$export$a312c7d58dd44a75,
    faMoneyBillAlt: $d95f73952ede904a$export$a35d573395884c3d,
    faClock: $d95f73952ede904a$export$95b9968e7fceb821,
    faClockFour: $d95f73952ede904a$export$9a575facf1cab48f,
    faKeyboard: $d95f73952ede904a$export$fb61df5d98785fa8,
    faClosedCaptioning: $d95f73952ede904a$export$8e047801a8603af7,
    faImages: $d95f73952ede904a$export$74f06b41ed2ca28a,
    faFaceGrin: $d95f73952ede904a$export$92292137ef3cf4c8,
    faGrin: $d95f73952ede904a$export$37e1f10b6de76621,
    faFaceMeh: $d95f73952ede904a$export$dc130582748497c6,
    faMeh: $d95f73952ede904a$export$6d2db489aaeeecd2,
    faIdCard: $d95f73952ede904a$export$782ac893fc22249b,
    faDriversLicense: $d95f73952ede904a$export$8359c70e609eff64,
    faSun: $d95f73952ede904a$export$2fa35dcbc038dbe9,
    faFaceLaughWink: $d95f73952ede904a$export$600a1b26b33c3d47,
    faLaughWink: $d95f73952ede904a$export$77ac40095f39933e,
    faCircleDown: $d95f73952ede904a$export$531badb89cf01312,
    faArrowAltCircleDown: $d95f73952ede904a$export$ff3afbc8c0bc5d59,
    faThumbsDown: $d95f73952ede904a$export$aba24ca305bbe8c1,
    faChessPawn: $d95f73952ede904a$export$3db75d5ac9e98468,
    faCreditCard: $d95f73952ede904a$export$3e7437bf6535bef0,
    faCreditCardAlt: $d95f73952ede904a$export$5fffe8e3c36964a2,
    faBell: $d95f73952ede904a$export$9b6162797ab1b255,
    faFile: $d95f73952ede904a$export$cad54bead856a678,
    faHospital: $d95f73952ede904a$export$7a76c9d35b42d691,
    faHospitalAlt: $d95f73952ede904a$export$cea7736417b94a3b,
    faHospitalWide: $d95f73952ede904a$export$69c8cc0360f017e8,
    faChessRook: $d95f73952ede904a$export$5d65c40a109eb09c,
    faStarHalf: $d95f73952ede904a$export$228008b5e11032fa,
    faChessKing: $d95f73952ede904a$export$d5713874f8fefe1b,
    faCircleUser: $d95f73952ede904a$export$9a5c11a5e3d7f1e7,
    faUserCircle: $d95f73952ede904a$export$be7d974e9e0dba1a,
    faCopy: $d95f73952ede904a$export$e9bd786d30cb716c,
    faShareFromSquare: $d95f73952ede904a$export$928280bdd54fa173,
    faShareSquare: $d95f73952ede904a$export$ae9e1434571f373c,
    faCopyright: $d95f73952ede904a$export$da61665fff8aebfe,
    faMap: $d95f73952ede904a$export$fc82fb79180cd17c,
    faBellSlash: $d95f73952ede904a$export$6b31a1e5968b2378,
    faHandLizard: $d95f73952ede904a$export$54608d0a883fea4d,
    faFaceSmile: $d95f73952ede904a$export$b5023c446f10324,
    faSmile: $d95f73952ede904a$export$c632b2334f0913bc,
    faHandPeace: $d95f73952ede904a$export$e49e3cfceea441cc,
    faFaceGrinHearts: $d95f73952ede904a$export$fbb22081b65e4f33,
    faGrinHearts: $d95f73952ede904a$export$c56cf0e0c3bc5ed2,
    faBuilding: $d95f73952ede904a$export$f26673f8b10c3d46,
    faFaceGrinBeamSweat: $d95f73952ede904a$export$2ff38f330c834084,
    faGrinBeamSweat: $d95f73952ede904a$export$14d0ccc54c5b6826,
    faMoon: $d95f73952ede904a$export$c4c2f69a53bab720,
    faCalendar: $d95f73952ede904a$export$34f5c36a3e80efa2,
    faFaceGrinTongueWink: $d95f73952ede904a$export$4272e56f2429da88,
    faGrinTongueWink: $d95f73952ede904a$export$58099903d50aefb3,
    faClone: $d95f73952ede904a$export$76c1aa4bf9a39458,
    faFaceAngry: $d95f73952ede904a$export$67a047c738fb34da,
    faAngry: $d95f73952ede904a$export$3c96c08e234498c5,
    faRectangleXmark: $d95f73952ede904a$export$3896694b3e81fba7,
    faRectangleTimes: $d95f73952ede904a$export$eaaf26416a51dc1,
    faTimesRectangle: $d95f73952ede904a$export$10147c0014152a3f,
    faWindowClose: $d95f73952ede904a$export$18b7775f78a3e16,
    faPaperPlane: $d95f73952ede904a$export$b5378818301da1be,
    faLifeRing: $d95f73952ede904a$export$53dd2cacf674142a,
    faFaceGrimace: $d95f73952ede904a$export$bd5bd2ef56b793b1,
    faGrimace: $d95f73952ede904a$export$3d08cd36ac1ef231,
    faCalendarMinus: $d95f73952ede904a$export$23e8b4955c2d951b,
    faCircleXmark: $d95f73952ede904a$export$30262489773a79a3,
    faTimesCircle: $d95f73952ede904a$export$ab0ec50720a747eb,
    faXmarkCircle: $d95f73952ede904a$export$90ac4096df8efdee,
    faThumbsUp: $d95f73952ede904a$export$47e4e0d519d33497,
    faWindowMinimize: $d95f73952ede904a$export$26a3f9d2784b90d8,
    faSquareFull: $d95f73952ede904a$export$7ec6541fee081990,
    faNoteSticky: $d95f73952ede904a$export$4a4e034527c933f5,
    faStickyNote: $d95f73952ede904a$export$80889adc5d98bf4a,
    faFaceSadTear: $d95f73952ede904a$export$8a5a0dbb2a17e253,
    faSadTear: $d95f73952ede904a$export$4b5241926f692f91,
    faHandPointLeft: $d95f73952ede904a$export$b276ec3dc9760d39
};







class $434f4ab7995f1748$export$b1f9957ccfa32dac extends (0, $7116625350640228$export$2e2bcd8739ae039) {
    constructor(selector, title, images = []){
        super(selector, title);
        this.images = [];
        this.scrollableSelector = `${this.selector}-scrollable`;
        this.isScrollableAttached = false;
        this.images = images;
        this.scrollableComponent = new (0, $d026058b6f241841$export$2e2bcd8739ae039)(this.scrollableSelector, this.selector, {
            $content: this.buildImageContent()
        });
        this.$dialogElement.append(this.buildImageXScrollable());
        this.$dialogElement.append(this.buildBody().addClass("body"));
        this.attach();
    }
    buildImageXScrollable() {
        // Where slideshow image items are filled
        const self = this;
        const $scrollable = (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`<div id=${self.scrollableSelector}>`);
        this.$scrollableWrapper = (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`<div>`).css({
            "max-width": "100%",
            "padding-bottom": "16px"
        }).append($scrollable);
        return this.$scrollableWrapper;
    }
    buildBody() {
        // Where body textual content is filled
        return (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`<div>`);
    }
    attachScrollable() {
        this.scrollableComponent.attachExternally();
        this.updateScrollableFloatStatus();
    }
    updateScrollableFloatStatus() {
        // After attaching scrollable, check if scrollable width exceeds threshold.
        // If it does, do not set the scrollable to float.
        const self = this;
        var targetWidth = this.$scrollableWrapper.width();
        var parentWidth = this.$scrollableWrapper.parent().parent().width();
        // Either exceeding 0.6 of parent width or 250px.
        if (targetWidth > 0.6 * parentWidth || parentWidth - targetWidth < 250) this.$scrollableWrapper.css({
            "float": "none"
        });
        else this.$scrollableWrapper.css({
            "float": "left"
        });
    }
    buildImageContent() {
        const $slideshow = (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`<div>`);
        for(var i = 0; i < this.images.length; i++)$slideshow.append((0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))("<img>").attr({
            "src": this.images[i].path,
            "title": this.images[i].title
        }).addClass("x-scrollable-item-slideshow"));
        return $slideshow;
    }
    onBuildAndShow() {
        this.onShow();
        if (!this.isScrollableAttached) {
            this.attachScrollable();
            this.isScrollableAttached = true;
        }
        this.updateScrollableFloatStatus();
    }
}


class $ad0c7f115dc83e32$export$daebeee9f70f3589 extends (0, $434f4ab7995f1748$export$b1f9957ccfa32dac) {
    constructor(){
        super((0, $e2512952e94e97b1$export$87e9c2ff338a8575).DIALOG_WORKS_PROJECT_INTERVENE, "Project Intervene (Provisional)", [
            {
                path: `${(0, $e2512952e94e97b1$export$31acd2ae5bbde00f).IMG_WORKS}project-intervene-1.png`,
                title: "Logo"
            },
            {
                path: `${(0, $e2512952e94e97b1$export$31acd2ae5bbde00f).IMG_WORKS}project-intervene-2.png`,
                title: "A Peek on Styles"
            }
        ]);
    }
    buildBody() {
        const $body = (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`<div>`).append((0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`<h2>`).append(`Overview`)).append((0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`<p>`).append(`Project Intervene is a work-in-progress app
                    that aims to keep users from distracted by
                    other apps or websites at an alarmingly continuous period.`));
        return $body;
    }
}





class $c7ffa81e6515d12e$export$3e51a09d5894ef6b extends (0, $434f4ab7995f1748$export$b1f9957ccfa32dac) {
    constructor(){
        super((0, $e2512952e94e97b1$export$87e9c2ff338a8575).DIALOG_WORKS_EMCB32, "EMCB32", [
            {
                path: `${(0, $e2512952e94e97b1$export$31acd2ae5bbde00f).IMG_WORKS}emcb32-1.png`,
                title: "Logo"
            },
            {
                path: `${(0, $e2512952e94e97b1$export$31acd2ae5bbde00f).IMG_WORKS}emcb32-2.png`,
                title: "v1.1 Update"
            },
            {
                path: `${(0, $e2512952e94e97b1$export$31acd2ae5bbde00f).IMG_WORKS}emcb32-3.png`,
                title: "v1.2 Update"
            },
            {
                path: `${(0, $e2512952e94e97b1$export$31acd2ae5bbde00f).IMG_WORKS}emcb32-4.png`,
                title: "Test Demo 1 (w/ other mods)"
            },
            {
                path: `${(0, $e2512952e94e97b1$export$31acd2ae5bbde00f).IMG_WORKS}emcb32-5.png`,
                title: "Test Demo 2 (w/ other mods)"
            }
        ]);
    }
    buildBody() {
        const $body = (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`<div>`).append((0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`<h2>`).append(`Overview`)).append((0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`<p>`).append(`EMCB32 is a decorative Minecraft mod derived from EMCB HD 
                    that uses the same textures but in 32x32 resolution
                    in order to blend in more with vanilla graphics.<br><br>
                    Each release is done in parallel with its HD predecessor,
                    where user can switch between the two editions freely
                    long as the version number matches.<br><br>
                    See HD version for more stories behind this mod collection.<br>`)).append((0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`<h2>`).append(`Releases`)).append((0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`<p>`).append(`Every EMCB32 release syncs with EMCB HD, 
                    and likewise, it supports multiple Minecraft versions too.<br><br>
                    The latest release is v1.2.0. for 1.16.5 version of Minecraft.<br>`)).append((0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`<h2>`).append(`Download`)).append((0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`<p>`).append(`Available on CurseForge and Planet Minecraft.<br>
                    Total downloads (on 7-Dec-2023): <b>~13000</b><br><br>
                    Link to CurseForge page: 
                    <a target="_blank" href="https://www.curseforge.com/minecraft/mc-mods/essential-modern-construction-block-32px-edition" title="To CurseForge Page">
                        https://www.curseforge.com/minecraft/mc-mods/essential-modern-construction-block-32px-edition
                    </a><br>
                    Link to Planet Minecraft page: 
                    <a target="_blank" href="https://www.planetminecraft.com/mod/essential-modern-construction-block-32px-edition-emcb32-enhanced-creative-constructions/" title="To Planet Minecraft Page">
                        https://www.planetminecraft.com/mod/essential-modern-construction-block-32px-edition-emcb32-enhanced-creative-constructions/
                    </a>`));
        return $body;
    }
}





class $1815d27cf7423a83$export$67017b18077836e0 extends (0, $434f4ab7995f1748$export$b1f9957ccfa32dac) {
    constructor(){
        super((0, $e2512952e94e97b1$export$87e9c2ff338a8575).DIALOG_WORKS_EMCB_HD, "EMCB HD", [
            {
                path: `${(0, $e2512952e94e97b1$export$31acd2ae5bbde00f).IMG_WORKS}emcb-hd-1.png`,
                title: "Logo"
            },
            {
                path: `${(0, $e2512952e94e97b1$export$31acd2ae5bbde00f).IMG_WORKS}emcb-hd-2.png`,
                title: "v1.1 Update"
            },
            {
                path: `${(0, $e2512952e94e97b1$export$31acd2ae5bbde00f).IMG_WORKS}emcb-hd-3.png`,
                title: "v1.2 Update"
            },
            {
                path: `${(0, $e2512952e94e97b1$export$31acd2ae5bbde00f).IMG_WORKS}emcb-hd-4.png`,
                title: "v1.0 Bricks Showcase"
            },
            {
                path: `${(0, $e2512952e94e97b1$export$31acd2ae5bbde00f).IMG_WORKS}emcb-hd-5.png`,
                title: "v1.0 Wood Showcase"
            },
            {
                path: `${(0, $e2512952e94e97b1$export$31acd2ae5bbde00f).IMG_WORKS}emcb-hd-6.png`,
                title: "v1.0 Tile Showcase"
            },
            {
                path: `${(0, $e2512952e94e97b1$export$31acd2ae5bbde00f).IMG_WORKS}emcb-hd-7.png`,
                title: "v1.0 Pavement Showcase"
            },
            {
                path: `${(0, $e2512952e94e97b1$export$31acd2ae5bbde00f).IMG_WORKS}emcb-hd-8.png`,
                title: "v1.0 Test Environment Demo (w/ other mods)"
            },
            {
                path: `${(0, $e2512952e94e97b1$export$31acd2ae5bbde00f).IMG_WORKS}emcb-hd-9.png`,
                title: "Promotional Image for Reverse Compatibility Release"
            }
        ]);
    }
    buildBody() {
        const $body = (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`<div>`).append((0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`<h2>`).append(`Overview`)).append((0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`<p>`).append(`The advent of all EMCB releases stems from this project.<br><br>
                    EMCB HD has a collection of decorative blocks with high-resolution textures,
                    and it is intended to be used in creative projects within Minecraft worlds
                    by simulating real-life, metropolitan-like environment.<br><br>
                    The blocks came in different textures, colours and materials: 
                    bricks, wood, tiles, metals, walls and much more. These textures would also
                    be featuring in special blocks like staircases and slabs.<br>
                    `)).append((0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`<h2>`).append(`History`)).append((0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`<p>`).append(`I was struggling to implement realistic textures 
                    to my city project,
                    as what was offered by the mod community 
                    was scarce.
                    The undesired set of circumstances 
                    led to the creation of EMCB HD for Minecraft version 1.12.2
                    on August 4th, 2020.<br>`)).append((0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`<h3>`).append(`Build 1.0`)).append((0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`<p>`).append(`As the first release of EMCB HD came to fruition, 
                    a mere number of no more than 100 block styles
                    were featured. These blocks did extend the world's experience 
                    by a commendable extent, but the limited range of 
                    all possible permutations/combinations of the block placements
                    struggle to catch on as the world expands.<br>`)).append((0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`<h3>`).append(`An Improved EMCB`)).append((0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`<p>`).append(`Released on 27-Dec-2020, Update v1.1 
                    featured the added support on Minecraft version
                    1.14.4, 1.15.2 and 1.16.4, unveiling a new set of 156 blocks 
                    in the hope of further increasing the range of 
                    new structural designs. Still, this update came with many
                    over-saturated textures that were too impractical.<br><br>
                    The evaluation also showed that a much sterner reference 
                    on real-life examples must be made in the coming update.<br>`)).append((0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`<h3>`).append(`The Final "Big" Piece`)).append((0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`<p>`).append(`Prior to the development of the final version of EMCB,
                    I sought serious notes 
                    on how the real-life surface would look like.
                    And for that I would mimic the walls and tiles from Japan, 
                    as well as many exuberant European architectures. 
                    I also did my research on how 
                    to maximize the colour combinations 
                    and came up with separating the palette into 
                    tinted, toned, shaded and special colours, 
                    bringing in more variety into play.
                    Surveys were also used to better appeal to
                    what the fans really wanted in the next update.<br><br> 
                    The finalized version 1.2 released on 28-Jul-2021 
                    has brought forth tremendous improvements
                    on how the world can be built. 
                    And the new colour system elevated the usefulness 
                    of all blocks.<br>
                    `)).append((0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`<h2>`).append(`Download`)).append((0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`<p>`).append(`Available on CurseForge and Planet Minecraft.<br>
                    Total downloads (on 7-Dec-2023): <b>~15000</b><br><br>
                    Link to CurseForge page: 
                    <a target="_blank" href="https://www.curseforge.com/minecraft/mc-mods/essential-modern-construction-block-hd-emcb-hd" title="To CurseForge Page">
                        https://www.curseforge.com/minecraft/mc-mods/essential-modern-construction-block-hd-emcb-hd
                    </a><br>
                    Link to Planet Minecraft page: 
                    <a target="_blank" href="https://www.planetminecraft.com/mod/essential-modern-construction-block-hd-emcb-hd-for-creative-constructions/" title="To Planet Minecraft Page">
                        https://www.planetminecraft.com/mod/essential-modern-construction-block-hd-emcb-hd-for-creative-constructions/
                    </a>`));
        return $body;
    }
}





class $5c02edd4a6c92a45$export$43bc90f904e6648d extends (0, $434f4ab7995f1748$export$b1f9957ccfa32dac) {
    constructor(){
        super((0, $e2512952e94e97b1$export$87e9c2ff338a8575).DIALOG_WORKS_E_TEXTURE, "E-Texture", [
            {
                path: `${(0, $e2512952e94e97b1$export$31acd2ae5bbde00f).IMG_WORKS}e-texture-2.png`,
                title: "Showcase 1"
            },
            {
                path: `${(0, $e2512952e94e97b1$export$31acd2ae5bbde00f).IMG_WORKS}e-texture-3.png`,
                title: "Showcase 2"
            },
            {
                path: `${(0, $e2512952e94e97b1$export$31acd2ae5bbde00f).IMG_WORKS}e-texture-4.png`,
                title: "Real World Demonstration"
            },
            {
                path: `${(0, $e2512952e94e97b1$export$31acd2ae5bbde00f).IMG_WORKS}e-texture-5.png`,
                title: "All Signs"
            }
        ]);
    }
    buildBody() {
        const $body = (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`<div>`).append((0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`<h2>`).append(`Overview`)).append((0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`<p>`).append(`As a part of the plan 
                    to build a railway-themed city in Minecraft,
                    I made this mod extension 
                    for RealTrainMod - a popular railway mod 
                    made by a Japanese developer.<br><br>
                    It covers a wide range of signboards, 
                    and it is used to simulate pedestrian experience 
                    in Minecraft.<br>`)).append((0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`<h2>`).append(`Download`)).append((0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(`<p>`).append(`Available on Planet Minecraft.<br>
                    Requires RealTrainMod as core mod<br>
                    Link: 
                    <a target="_blank" href="https://www.planetminecraft.com/mod/rtm-add-ons-e-texture-extra-signboard-textures-for-realtrainmod/" title="To Planet Minecraft Page">
                    https://www.planetminecraft.com/mod/rtm-add-ons-e-texture-extra-signboard-textures-for-realtrainmod/
                    </a>`));
        return $body;
    }
}


class $4963ed4219911083$var$App {
    constructor(){
        this.appBuilt = false;
        this.emailMixinProvider = (0, $d85ba840fc4ba32d$export$2e2bcd8739ae039).getInstance((0, $e2512952e94e97b1$export$bd8f39ef8e3d2b92).EMAIL_FLOATING_DIALOG, {
            get: new (0, $d019d8b17b73abd9$export$5e59bf6ad84f152d)()
        });
    }
    getEmailFloatingDialog() {
        return this.emailMixinProvider.getState().get;
    }
    buildMixins() {
        this.getEmailFloatingDialog();
    }
    fontIconSetup() {
        (0, $766f7e1ec7548f74$export$b839f963c7dc0e34).add({
            faCircleDown: $d95f73952ede904a$export$531badb89cf01312,
            faCircleLeft: $d95f73952ede904a$export$5ae86b9da9cca3bd,
            faCircleRight: $d95f73952ede904a$export$1fec48c8bdd69c1d,
            faCircleUp: $d95f73952ede904a$export$72ea8a5e4e86cd69
        });
    }
    build() {
        if (this.appBuilt) return;
        const self = this;
        this.fontIconSetup();
        const page1_bg = new (0, $0b2227309f98042b$export$36c285e43df07aa2)((0, $e2512952e94e97b1$export$87e9c2ff338a8575).PAGE_1, undefined, "bg0-blank");
        const page2_bg = new (0, $0b2227309f98042b$export$36c285e43df07aa2)((0, $e2512952e94e97b1$export$87e9c2ff338a8575).PAGE_2, undefined, "bg1-saturate");
        const landingContent = new (0, $3f176cadda5203f0$export$2e2bcd8739ae039)("landing-content");
        const sectionWorksScrollable = new (0, $d026058b6f241841$export$5b55083af984f426)("section-works-scrollable", "page-2-content", {
            children: [
                new (0, $758bf46a2e563ce9$export$2e2bcd8739ae039)((0, $e2512952e94e97b1$export$87e9c2ff338a8575).DIALOG_WORKS_PROJECT_INTERVENE, {
                    title: "Project Intervene (Provisional)",
                    dateBegun: "Jun 2022",
                    imageClass: "image-project-intervene-1",
                    imageTitle: "Placeholder Logo for Project Intervene",
                    imageHeight: "7.2em",
                    overview: `Work in progress. This simple app 
                                aims to keep users from using other apps, 
                                like social medias,
                                and puts them back on track during work.`
                }, new (0, $ad0c7f115dc83e32$export$daebeee9f70f3589)()),
                new (0, $758bf46a2e563ce9$export$2e2bcd8739ae039)((0, $e2512952e94e97b1$export$87e9c2ff338a8575).DIALOG_WORKS_EMCB32, {
                    title: "EMCB32",
                    dateBegun: "Sep 2020",
                    dateEnded: "Sep 2021",
                    imageClass: "image-emcb32-1",
                    imageTitle: "Logo of EMCB32",
                    overview: `The release of the HD mod
                                inspired me to make another version
                                with the same textures but in 32x32 resolution
                                that blends in more with the organic,
                                pixelated feel of the Minecraft world.`
                }, new (0, $c7ffa81e6515d12e$export$3e51a09d5894ef6b)()),
                new (0, $758bf46a2e563ce9$export$2e2bcd8739ae039)((0, $e2512952e94e97b1$export$87e9c2ff338a8575).DIALOG_WORKS_EMCB_HD, {
                    title: "EMCB HD",
                    dateBegun: "Jun 2020",
                    dateEnded: "Sep 2021",
                    imageClass: "image-emcb-hd-1",
                    imageTitle: "Logo of EMCB HD",
                    overview: `My growing desire to build a realistic, 
                                rail-transport city in Minecraft 
                                at the time puts me on a journey
                                to create a mod that introduces
                                a collection of HD building blocks 
                                with real-world textures.`
                }, new (0, $1815d27cf7423a83$export$67017b18077836e0)()),
                new (0, $758bf46a2e563ce9$export$2e2bcd8739ae039)((0, $e2512952e94e97b1$export$87e9c2ff338a8575).DIALOG_WORKS_E_TEXTURE, {
                    title: "E-Texture",
                    dateBegun: "Jul 2019",
                    dateEnded: "Nov 2019",
                    imageClass: "image-e-texture-1",
                    imageTitle: "Showcase of E-Texture Signboard Designs",
                    imageWidth: "150px",
                    overview: `As I began working on a new city project in Minecraft, 
                                I built this signboard extension for 
                                a popular mod.
                                These signs can be placed
                                within the station perimeters 
                                to simulate real pedistrian experiences.`
                }, new (0, $5c02edd4a6c92a45$export$43bc90f904e6648d)())
            ]
        });
        const sectionExperienceScrollable = new (0, $d026058b6f241841$export$5b55083af984f426)("section-experience-scrollable", "page-2-content", {
            children: [
                new (0, $758bf46a2e563ce9$export$2e2bcd8739ae039)((0, $e2512952e94e97b1$export$87e9c2ff338a8575).SOC_EXPERIENCE_AGMO_STUDIO, {
                    title: "Agmo Studio",
                    subtitle: "Mobile Dev Intern (iOS/Flutter Team)",
                    dateBegun: "Nov 2022",
                    dateEnded: "Jan 2023",
                    imageClass: "image-agmo-1",
                    imageTitle: "Agmo Studio",
                    overview: `For 3-months of my university's industrial training,
                                I have the opportunity to work on mobile
                                app dev projects using Flutter 
                                and experiment with many proof-of-concept features.
                                `
                })
            ]
        });
        // Pages and Manager
        const page1 = new (0, $f9a6ab2a2116ae78$export$6955bcca4cd3539f)((0, $e2512952e94e97b1$export$87e9c2ff338a8575).PAGE_1, new (0, $19c2be0d778d5431$export$2a8c48f56903afe6)(), [
            page1_bg,
            landingContent
        ]);
        const page2 = new (0, $f9a6ab2a2116ae78$export$6955bcca4cd3539f)((0, $e2512952e94e97b1$export$87e9c2ff338a8575).PAGE_2, new (0, $19c2be0d778d5431$export$2a8c48f56903afe6)(), [
            page2_bg,
            sectionWorksScrollable,
            sectionExperienceScrollable
        ]);
        const pageManagement = new (0, $a0ff71186de08ebf$export$ebdcf3e52ca032a6)((0, $e2512952e94e97b1$export$87e9c2ff338a8575).PAGE_MANAGEMENT_CONTAINER, [
            page1,
            page2
        ]);
        // Mixins and links
        this.buildMixins();
        (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))("#header-icon-mail, #footnote-mail").on("click", function() {
            self.getEmailFloatingDialog().onShow();
        });
        (0, (/*@__PURE__*/$parcel$interopDefault($a2113ee7da1c19d1$exports)))(function() {
            const paramEnquire = (0, $9cf76daebca51d7f$export$8b2af884909d32a5).getParameterByName("enquire", window.location.href);
            if (paramEnquire === "1") // TODO: Add call for enquire
            self.getEmailFloatingDialog().onShow();
        });
        this.appBuilt = true;
    }
}
const $4963ed4219911083$export$729c8b7179294ba = new $4963ed4219911083$var$App().build();


//# sourceMappingURL=index.f76e0e91.js.map
