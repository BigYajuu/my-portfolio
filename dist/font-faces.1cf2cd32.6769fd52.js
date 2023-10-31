// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;
function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }
  return bundleURL;
}
function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);
    if (matches) {
      return getBaseURL(matches[0]);
    }
  }
  return '/';
}
function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    link.remove();
  };
  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
module.exports = reloadCSS;
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"font-faces.1cf2cd32.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"D:\\Repos\\my-portfolio\\BauPro.6c105cf5.eot":[["BauPro.6c105cf5.546004f8.eot","BauPro.6c105cf5.eot"],"BauPro.6c105cf5.eot"],"D:\\Repos\\my-portfolio\\BauPro.55747a18.woff2":[["BauPro.55747a18.3fff55a6.woff2","BauPro.55747a18.woff2"],"BauPro.55747a18.woff2"],"D:\\Repos\\my-portfolio\\BauPro.f99497eb.woff":[["BauPro.f99497eb.b6aa43a5.woff","BauPro.f99497eb.woff"],"BauPro.f99497eb.woff"],"D:\\Repos\\my-portfolio\\BauPro.bd7868dc.ttf":[["BauPro.bd7868dc.8310fa2a.ttf","BauPro.bd7868dc.ttf"],"BauPro.bd7868dc.ttf"],"D:\\Repos\\my-portfolio\\BauPro-Italic.34fb9763.eot":[["BauPro-Italic.34fb9763.a18eb6ee.eot","BauPro-Italic.34fb9763.eot"],"BauPro-Italic.34fb9763.eot"],"D:\\Repos\\my-portfolio\\BauPro-Italic.35f99289.woff2":[["BauPro-Italic.35f99289.16427d86.woff2","BauPro-Italic.35f99289.woff2"],"BauPro-Italic.35f99289.woff2"],"D:\\Repos\\my-portfolio\\BauPro-Italic.92187996.woff":[["BauPro-Italic.92187996.953f85a2.woff","BauPro-Italic.92187996.woff"],"BauPro-Italic.92187996.woff"],"D:\\Repos\\my-portfolio\\BauPro-Italic.423584f1.ttf":[["BauPro-Italic.423584f1.2901f31b.ttf","BauPro-Italic.423584f1.ttf"],"BauPro-Italic.423584f1.ttf"],"D:\\Repos\\my-portfolio\\BauPro-Medium.2eb622d8.eot":[["BauPro-Medium.2eb622d8.0e284719.eot","BauPro-Medium.2eb622d8.eot"],"BauPro-Medium.2eb622d8.eot"],"D:\\Repos\\my-portfolio\\BauPro-Medium.daa55668.woff2":[["BauPro-Medium.daa55668.d5d5e0eb.woff2","BauPro-Medium.daa55668.woff2"],"BauPro-Medium.daa55668.woff2"],"D:\\Repos\\my-portfolio\\BauPro-Medium.1b26a804.woff":[["BauPro-Medium.1b26a804.9cf75406.woff","BauPro-Medium.1b26a804.woff"],"BauPro-Medium.1b26a804.woff"],"D:\\Repos\\my-portfolio\\BauPro-Medium.f037f48d.ttf":[["BauPro-Medium.f037f48d.c6d9f1c4.ttf","BauPro-Medium.f037f48d.ttf"],"BauPro-Medium.f037f48d.ttf"],"D:\\Repos\\my-portfolio\\BauPro-MediumItalic.412d496d.eot":[["BauPro-MediumItalic.412d496d.48d71a9e.eot","BauPro-MediumItalic.412d496d.eot"],"BauPro-MediumItalic.412d496d.eot"],"D:\\Repos\\my-portfolio\\BauPro-MediumItalic.46e42ae5.woff2":[["BauPro-MediumItalic.46e42ae5.1ef6aac4.woff2","BauPro-MediumItalic.46e42ae5.woff2"],"BauPro-MediumItalic.46e42ae5.woff2"],"D:\\Repos\\my-portfolio\\BauPro-MediumItalic.006e9809.woff":[["BauPro-MediumItalic.006e9809.f2cc58c1.woff","BauPro-MediumItalic.006e9809.woff"],"BauPro-MediumItalic.006e9809.woff"],"D:\\Repos\\my-portfolio\\BauPro-MediumItalic.d80425bf.ttf":[["BauPro-MediumItalic.d80425bf.7ca1d2d1.ttf","BauPro-MediumItalic.d80425bf.ttf"],"BauPro-MediumItalic.d80425bf.ttf"],"D:\\Repos\\my-portfolio\\BauPro-Bold.2f4098bb.eot":[["BauPro-Bold.2f4098bb.85db81f2.eot","BauPro-Bold.2f4098bb.eot"],"BauPro-Bold.2f4098bb.eot"],"D:\\Repos\\my-portfolio\\BauPro-Bold.6bb9a365.woff2":[["BauPro-Bold.6bb9a365.b687c998.woff2","BauPro-Bold.6bb9a365.woff2"],"BauPro-Bold.6bb9a365.woff2"],"D:\\Repos\\my-portfolio\\BauPro-Bold.4dfea381.woff":[["BauPro-Bold.4dfea381.c3cbfd1f.woff","BauPro-Bold.4dfea381.woff"],"BauPro-Bold.4dfea381.woff"],"D:\\Repos\\my-portfolio\\BauPro-Bold.ea77bb6f.ttf":[["BauPro-Bold.ea77bb6f.28adee3f.ttf","BauPro-Bold.ea77bb6f.ttf"],"BauPro-Bold.ea77bb6f.ttf"],"D:\\Repos\\my-portfolio\\BauPro-BoldItalic.9caf0c79.eot":[["BauPro-BoldItalic.9caf0c79.c46a8a47.eot","BauPro-BoldItalic.9caf0c79.eot"],"BauPro-BoldItalic.9caf0c79.eot"],"D:\\Repos\\my-portfolio\\BauPro-BoldItalic.eee14f61.woff2":[["BauPro-BoldItalic.eee14f61.9db533b6.woff2","BauPro-BoldItalic.eee14f61.woff2"],"BauPro-BoldItalic.eee14f61.woff2"],"D:\\Repos\\my-portfolio\\BauPro-BoldItalic.585dd99b.woff":[["BauPro-BoldItalic.585dd99b.448f2993.woff","BauPro-BoldItalic.585dd99b.woff"],"BauPro-BoldItalic.585dd99b.woff"],"D:\\Repos\\my-portfolio\\BauPro-BoldItalic.bcdb59cb.ttf":[["BauPro-BoldItalic.bcdb59cb.01489ce8.ttf","BauPro-BoldItalic.bcdb59cb.ttf"],"BauPro-BoldItalic.bcdb59cb.ttf"],"D:\\Repos\\my-portfolio\\BauPro-Super.bb2c9308.eot":[["BauPro-Super.bb2c9308.9085ed56.eot","BauPro-Super.bb2c9308.eot"],"BauPro-Super.bb2c9308.eot"],"D:\\Repos\\my-portfolio\\BauPro-Super.05c28c6a.woff2":[["BauPro-Super.05c28c6a.06a50d7e.woff2","BauPro-Super.05c28c6a.woff2"],"BauPro-Super.05c28c6a.woff2"],"D:\\Repos\\my-portfolio\\BauPro-Super.1b7fb3cd.woff":[["BauPro-Super.1b7fb3cd.ccc6e85e.woff","BauPro-Super.1b7fb3cd.woff"],"BauPro-Super.1b7fb3cd.woff"],"D:\\Repos\\my-portfolio\\BauPro-Super.8f7da647.ttf":[["BauPro-Super.8f7da647.5b818ff6.ttf","BauPro-Super.8f7da647.ttf"],"BauPro-Super.8f7da647.ttf"],"D:\\Repos\\my-portfolio\\BauPro-SuperItalic.b413cce8.eot":[["BauPro-SuperItalic.b413cce8.a7d913ff.eot","BauPro-SuperItalic.b413cce8.eot"],"BauPro-SuperItalic.b413cce8.eot"],"D:\\Repos\\my-portfolio\\BauPro-SuperItalic.8a7426bf.woff2":[["BauPro-SuperItalic.8a7426bf.77d8f242.woff2","BauPro-SuperItalic.8a7426bf.woff2"],"BauPro-SuperItalic.8a7426bf.woff2"],"D:\\Repos\\my-portfolio\\BauPro-SuperItalic.27c886ca.woff":[["BauPro-SuperItalic.27c886ca.5747c055.woff","BauPro-SuperItalic.27c886ca.woff"],"BauPro-SuperItalic.27c886ca.woff"],"D:\\Repos\\my-portfolio\\BauPro-SuperItalic.6ddbde1f.ttf":[["BauPro-SuperItalic.6ddbde1f.40266cc9.ttf","BauPro-SuperItalic.6ddbde1f.ttf"],"BauPro-SuperItalic.6ddbde1f.ttf"],"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56192" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js"], null)
//# sourceMappingURL=/font-faces.1cf2cd32.6769fd52.js.map