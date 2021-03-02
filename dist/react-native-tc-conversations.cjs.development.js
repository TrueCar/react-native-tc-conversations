'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var reactNative = require('react-native');
var reactNativeIphoneXHelper = require('react-native-iphone-x-helper');
var dateFns = require('date-fns');
var Svg = require('react-native-svg');
var Svg__default = _interopDefault(Svg);
var axios = _interopDefault(require('axios'));
var conversations = require('@twilio/conversations');
var reactNativeGiftedChat = require('react-native-gifted-chat');
var Feather = _interopDefault(require('react-native-vector-icons/Feather'));
var MaterialIcons = _interopDefault(require('react-native-vector-icons/MaterialIcons'));
var PropTypes = _interopDefault(require('prop-types'));
var reactNativeSafeAreaContext = require('react-native-safe-area-context');

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var tcFontWeb = "Radikal";
var tcFont = "Radikal-Regular";
var tcFontBold = "Radikal-Bold";
var tcDark = "#131213";
var tcBorderColor = "#E5E5E5";
var tcUnreadColor = "#EA028A";
var headerSpacing = {
  paddingTop: /*#__PURE__*/reactNativeIphoneXHelper.isIphoneX() ? 44 : 20
};
var shadowBox = {
  elevation: 3.5,
  shadowOffset: {
    width: 0,
    height: 2
  },
  shadowColor: "#333",
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  marginHorizontal: 1
};
var roundedContainer = {
  backgroundColor: "white",
  padding: 1,
  borderWidth: 1,
  borderColor: "lightgray",
  borderRadius: 20
};
var inputText = {
  fontFamily: tcFont,
  color: "#000",
  fontSize: 16
};

var Heading = function Heading(_ref) {
  var bold = _ref.bold,
      children = _ref.children,
      size = _ref.size,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      white = _ref.white,
      rest = _objectWithoutPropertiesLoose(_ref, ["bold", "children", "size", "style", "white"]);

  var sizeKey = sizeChart[size.toString()];
  return React__default.createElement(reactNative.Text, Object.assign({
    style: [_extends({
      color: white ? "white" : "black",
      fontFamily: bold ? tcFontBold : tcFont
    }, styles[sizeKey]), style]
  }, rest), children);
};

var sizeChart = {
  "1": "xs",
  "2": "sm",
  "3": "md",
  "4": "lg",
  "5": "xl"
};
var styles = /*#__PURE__*/reactNative.StyleSheet.create({
  xs: {
    fontSize: 17
  },
  sm: {
    fontSize: 22
  },
  md: {
    fontSize: 25
  },
  lg: {
    fontSize: 30
  },
  xl: {
    fontSize: 40
  }
});

var Text = function Text(_ref) {
  var bold = _ref.bold,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? bold ? 15 : 16 : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? "#000" : _ref$color,
      children = _ref.children,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      rest = _objectWithoutPropertiesLoose(_ref, ["bold", "size", "color", "children", "style"]);

  return React__default.createElement(reactNative.Text, Object.assign({
    style: [{
      fontFamily: bold ? tcFontBold : tcFont,
      fontSize: size,
      color: color
    }, style]
  }, rest), children);
};

var img = "data:image/png;base64,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";

var img$1 = "data:image/png;base64,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";

var img$2 = "data:image/png;base64,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";

var img$3 = "data:image/png;base64,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";

var img$4 = "data:image/png;base64,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";

var img$5 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAUKADAAQAAAABAAAAUAAAAAAx4ExPAAAJa0lEQVR4Ae1dXWwU1xU+d3bXu8vaDgZSg4Em4UcLuI7DUySUkEITpZVKIiWR2qdIEUVKHiD8JJUSXnjpQxuCW3iJUqJKfWrVtFJDq7ZKCwmJLOXJOKkNK8AQIBsIBBP/xH+7c3u+sWc7u97ZnZk7s94xPpI1M/fec+65n+/PuX9nBc0hNR3ILBujyc26LtOk62lJlCYhlhPJJpKiiQQ1GepJGiYhh4nEMEl5XRBlSNMymiYySWroGX4zfWuuisG61I5W7bua/JJuPy4lbccf59zBYCnqIBh3+kwIOom/FbTk39e6Vo/VqlSKyldXU0opYvs/26pLel5K/TnmaK7OpZRiSAjtXU3Q76eOdJwWwgBYSWAl5sAAXHf0fHzg0ugLjN+r3OzWVFIisDghBhi/N9Y8kPrdhT3rJ4LIx3cA0UyzNPii1PVXWOG2IJT2IDMrNO1wG7W85Xfz9hXAyL7eHbqUR0nS/R4KGTyLoMuaEHvyXZ0n/MrMFwATB/rvm8hPMXDyKb8UC1SOEO8l4tHdY79sv6KajzKAkb1nntGJ3uFat1hVmZryC7qjEe3M//qhv6jk6xnA9kN9DWfv5A/zyLpbRYG55uUR+9jGxZFX+g61T3rRxROAzfv6lgzrU+hHtnjJtA55upu02I6hrvbbbnVzDWDy572rxifkvzijTW4zq/P0/Ym4eHLsV53X3OjpCsD4y73pSUHv82Cx2k0moUkrxNUGSU9M/KYz41RnxwAaNW+SuucteCZiDGKigbY4rYk8EFUn9HlGs52vNc8KAZcRZUWZrcF271VroOw71JC7MX6KJ/+eB4zRfJQujDTR36630ZGLG2kkF7XTp57Cuze1xLZVG52r1sD8jQk2VbyDB0RSkRx13jNIB9N91LPtH/T9ZV/VE1B2umyBmWYXaYZXrIG5k689w1OzP5uJ/Xw+2b2dPrj1HT9FBiKLV3WerWRs2wIo/3PwvpzQz/ByVCAzjCtjKdp86kf135x5xpKIxzrtpn22TZjBOxoUeKgq302O0v61ZwOpNb4K5Snq+ETumJ3MsgDmPji4g8ELfGHgx8uzdnrVVzhjgZWmckrNasKy+0hyavyr/losSWF0XvJ3LFKr0fb1jfSTzYtp69oUrVwcM4R9cWeKTl8cpT/23KGT50fUMgA3L4WtFEs3la4nzrIncuM3X6oFeOolIlq3rIF++9PV9Ni6xlni0q0RSrcmaNeWpfThhRHa9YerdOGWp/WCadm8xpkVgy/yR5c1s6ImLM8fjfNM44A1QZDvsA290iNrUvTJ/vVlwSuVCYCRFjwqhFV2bFVYZRQBOHUt+wJvcbVZEwT5DsPaC6Hm/fVn91PLolkNyFYc0oIHvArUhn0eK38BQB40BOn0qjUyyHeYMZiVeCE0WzfgmXmAB7wqhE0yA6sZIQUAc6de38pha1SEu+Hd1fOwJxsQA0a5Ps9p3uCFDM/EO4zYpjX5CwBKks+bgUE+UfNUZiEYbVVJVQb2uE0dDABhuggp1O0JU2rJE+ZK7zct9ItMuzH7UJnCwVRRJVUZOCCA7VvoYfTC0T/94HE+n9Ksqlgt+E07TyUvH2Q044gK63BiugZOn1NR0emu450520OhAxAzDFXyQ0YBQBwxY4U6VJWqFT+mZ6rkhwzWoQPYaTifp37ETLVIzvkxt1UlP2QAM2Cn6fn8BlWFasmPhQHMbb0SeH1ZXGAFcDAUfWDaqzJzxYeFgcFvc66zBw94fSOpb9AkidABiFWVp49fdgUiwAOP0opMCfLADjWwtSQ8FJ8fD4zSw0fOO2rOaLZICx6fqVWIvWcuhWX9z67wNVlQLZc5L7IK8XIvn3CXS8vFuwkTfN5eSw+SaJk+SSsH46RnWkjeMmY8bkSFKK34OmpcJcA5dwXSNtwmrePrIgkimaPIilHS/7uU9HOONvmL+EPxwdcwjJmIirJGzfteMXgFebzjonEc0sxX0rj/G1YpHJot12J7AohIMx+JsdOmbwB5L53Z51WS4CRNJf66jePbU9yE+frUAnlEQABAuuGR22DDaFuNnKSpJqMu4/neHp+dkY5PY5YrBEwV7kftieOMNPYpQhvD3XuG+0DtnEoJYOfpfWxGlgMR4LEZM29tQb4xGsWV0byuAiGDdHYJyZvJu86QBnZR3LcdoXGuK2rXTlHL8oqzjraVSXpgbSMtb0tQKhWlaEzZTFWrGZW4+RZjRKR6DAuOp3O9DOCDldIHGdd8T4weeexeBi480z6+Rvvp8Q2NncauHC4q8xr/nADYuiJJT/ywlRrikSD/R0HIPgmhRhsBgEHkUE0mal5IweMzWOL/AOKaPBd2qFqB/Y5Hsw1hzcPUdai5cREwm66BODSIa/J+A1RJHgaMMPV5xWUR73at5j0lpsIwBx8DxYmC/cJoG1bSIpECVgUA4aCBXY4M1KpQMFVCSYIG3l6XOG3qXgAQ3i3goMGMCPoJOy+MpJH2htUTSAFAFAbeLfgRkqPzcwC/ENlEZBEwKlARgHANAu8WhdgAX0ZH3e/rBqiOM9GCDh9bL6Y3fWY4igBEGFyD4Ej/THxgj+vZ8cBkByJYiMvNi1JvlcqeBSBMGrgGKU3o9/eli96PZ/itiyN5UuwxTRdr+lkAItLwq8KuQawJ/X7PfjFG17Mh2WwS9N47G1MnymFQFkAkjEdie7gpqx+FKpfrTNjHH96kyYl8hRR1EMUYRGLR3Xaa2AI4/uamzzlypx2jH+FD30zR+/+8UdcgCi2y8+21ySt25a20IWnwaHs/5VubwfqGqdflLLZIjh1PpyqOB1UBhIOd/sGpU4ym5yv/dv+90vB6WlDlFaruVenGbYeEqHjBriqAKOSMo52P+HW++Yop/R+a3/3siOdRJ454HAEIqQtuT0xsi5+2g0hxMiL4UYFTGl5w8PGIZ2kuc/w943jHqc8YaOsYQCSGRx84peHXfnzPM+pH2dx4LUL5XQEIBvx30D/waze+5wnB+dijbmqeWW7XAIIRnSuc0sB1nCkorE+UAWVxMmCUK6PjQaQcM8LudgeMnmqgFUw4pYlHGh7iwSXQubM1T+V3wwVorLOSQx2neSjXQGtGd6MTWuUaaAUQqzhwDcJW/AEOr6eV7Sx0gm5+evBF2X2tgVYwFxxxW9FQeIeDhgVX8AoAWlkXfozAioYP74Wfw5i+Mco/h2Hc2+OrZxV+DoOPJM+cqs3wBve5uf45jP8BSAJrw+sRxqIAAAAASUVORK5CYII=";

//@ts-expect-error
var avatars = {
  "0": img,
  "1": img$1,
  "2": img$2,
  "3": img$3,
  "4": img$4,
  "5": img$5
};
var getAvatarSource = function getAvatarSource(index) {
  return avatars[String(index % 6)];
};

var NOT_AVAILABLE = "N/A";
var formatDate = function formatDate(date) {
  if (!date) return NOT_AVAILABLE;
  var toFormatDateTime = new Date(date).getTime();
  var formatType = "hh:mm a";
  var dateNow = Date.now();
  var oneDay = 60 * 60 * 24 * 1000;

  if (dateNow - toFormatDateTime > oneDay * 7) {
    formatType = "dd MMMM yyyy";
  } else if (dateNow - toFormatDateTime > oneDay) {
    formatType = "eeee"; // Monday
  }

  return dateFns.format(toFormatDateTime, formatType);
};

var IconSettings = function IconSettings() {
  return React.createElement(Svg__default, {
    viewBox: "0 0 24 24"
  }, React.createElement(Svg.G, {
    stroke: "black",
    fill: "none"
  }, React.createElement(Svg.Path, {
    d: "M16.9,3.5L16.9,3.5l4.9,8.5l-4.9,8.5l-9.8,0L2.2,12l4.9-8.5H16.9 M16.9,2.5H7.1C6.7,2.5,6.4,2.7,6.2,3l-4.9,8.5 c-0.2,0.3-0.2,0.7,0,1L6.2,21c0.2,0.3,0.5,0.5,0.9,0.5h9.8c0.4,0,0.7-0.2,0.9-0.5l4.9-8.5c0.2-0.3,0.2-0.7,0-1L17.8,3C17.6,2.7,17.3,2.5,16.9,2.5L16.9,2.5z"
  }), React.createElement(Svg.Path, {
    d: "M12,8c2.2,0,4,1.8,4,4s-1.8,4-4,4s-4-1.8-4-4S9.8,8,12,8 M12,7c-2.8,0-5,2.2-5,5s2.2,5,5,5s5-2.2,5-5S14.8,7,12,7L12,7z"
  })));
};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var runtime_1 = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined$1; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined$1) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined$1;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined$1;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined$1;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined$1, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined$1;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined$1;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined$1;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined$1;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined$1;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   module.exports 
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}
});

var getProspectIdFromConversation = function getProspectIdFromConversation(conversation) {
  if (!conversation) {
    return "";
  }

  return conversation.attributes.prospect_id;
};
var formatMessageForGiftedChat = /*#__PURE__*/function () {
  var _ref = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(message, identity) {
    var _message$author, _message$conversation;

    var isConsumerMessage, name, id, formattedMessage;
    return runtime_1.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            isConsumerMessage = (_message$author = message.author) == null ? void 0 : _message$author.includes("consumer");
            name = isConsumerMessage ? // @ts-expect-error
            (_message$conversation = message.conversation) == null ? void 0 : _message$conversation.title : "";
            id = isConsumerMessage ? message.author : identity;
            formattedMessage = {
              _id: message.sid,
              text: message.body,
              createdAt: message.dateCreated,
              // system: m.author === "system",
              user: {
                _id: id,
                name: name
              }
            };

            if (!(message.type === "media")) {
              _context.next = 15;
              break;
            }

            if (!message.media.contentType.startsWith("image")) {
              _context.next = 11;
              break;
            }

            _context.next = 8;
            return message.media.getContentTemporaryUrl();

          case 8:
            formattedMessage.image = _context.sent;
            _context.next = 15;
            break;

          case 11:
            if (!message.media.contentType.startsWith("video")) {
              _context.next = 15;
              break;
            }

            _context.next = 14;
            return message.media.getContentTemporaryUrl();

          case 14:
            formattedMessage.video = _context.sent;

          case 15:
            return _context.abrupt("return", formattedMessage);

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function formatMessageForGiftedChat(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var formatMessagesForGiftedChat = /*#__PURE__*/function () {
  var _ref2 = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2(messages, identity) {
    return runtime_1.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", Promise.all(messages.map(function (m) {
              return formatMessageForGiftedChat(m, identity);
            })));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function formatMessagesForGiftedChat(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

/**
 * React.createContext can be set with a default. In most cases, there is no sensible default value,
 * and having one leads to difficult semantic bugs - components behaving incorrectly with no error
 * to work with. Instead, you'd like to make the provider required, and give a helpful error if it's
 * not available.
 */

var createRequiredContext = function createRequiredContext(name) {
  // intentional use of any - the purpose of this is to cause runtime errors!
  var Context = React__default.createContext(undefined);
  var providerName = name + "Provider";
  var hookName = "use" + name;
  Context.displayName = providerName;

  var hook = function hook() {
    // This is a factory function for a custom hook; it will eventually be
    // run within a function component.
    // eslint-disable-next-line react-hooks/rules-of-hooks
    var context = React.useContext(Context);

    if (typeof context === "undefined") {
      throw new Error(name + " context not found. Please import " + providerName + " and add it to a component above " + hookName + "().");
    }

    return context;
  };

  return [Context.Provider, hook];
};

var _createRequiredContex = /*#__PURE__*/createRequiredContext("TwilioConversations"),
    Provider = _createRequiredContex[0],
    useTwilioConversations = _createRequiredContex[1];

var TwilioConversationsProvider = function TwilioConversationsProvider(_ref) {
  var children = _ref.children,
      tokenEndpoint = _ref.tokenEndpoint,
      prospectId = _ref.prospectId;

  var _React$useState = React__default.useState(0),
      unreadUsers = _React$useState[0],
      setUnreadUsers = _React$useState[1];

  var _React$useState2 = React__default.useState([]),
      availableConversations = _React$useState2[0],
      setAvailableConversations = _React$useState2[1];

  var _React$useState3 = React__default.useState(new Map()),
      conversations$1 = _React$useState3[0],
      setConversations = _React$useState3[1];

  var _React$useState4 = React__default.useState(tokenEndpoint),
      currentTokenEndpoint = _React$useState4[0],
      setCurrentTokenEndpoint = _React$useState4[1];

  var _React$useState5 = React__default.useState(false),
      conversationsLoaded = _React$useState5[0],
      setConversationsLoaded = _React$useState5[1];

  var _React$useState6 = React__default.useState(null),
      selectedConversation = _React$useState6[0],
      setSelectedConversation = _React$useState6[1];

  var _React$useState7 = React__default.useState(null),
      client = _React$useState7[0],
      setClient = _React$useState7[1];

  var _React$useState8 = React__default.useState(""),
      identity = _React$useState8[0],
      setIdentity = _React$useState8[1];

  var getTokenData = React__default.useCallback( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee() {
    var tokenResp;
    return runtime_1.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            tokenResp = axios.get(tokenEndpoint);
            return _context.abrupt("return", tokenResp);

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), [tokenEndpoint]);
  var handleExpiredToken = React__default.useCallback( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2() {
    var tokenResp;
    return runtime_1.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return getTokenData();

          case 2:
            tokenResp = _context2.sent;
            _context2.next = 5;
            return client == null ? void 0 : client.updateToken(tokenResp.data.token);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })), [client, getTokenData]);
  var getMessages = React__default.useCallback( /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee3(conversation) {
      var messages, displayableMessages;
      return runtime_1.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (conversation) {
                _context3.next = 2;
                break;
              }

              return _context3.abrupt("return", []);

            case 2:
              _context3.next = 4;
              return conversation.getMessages();

            case 4:
              messages = _context3.sent;
              displayableMessages = messages.items.filter( // @ts-expect-error
              function (m) {
                return !m.attributes.to || m.attributes.to === identity;
              });
              return _context3.abrupt("return", formatMessagesForGiftedChat(displayableMessages, identity));

            case 7:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function (_x) {
      return _ref4.apply(this, arguments);
    };
  }(), [identity]);
  var mapTwilioConversationToCommsConversation = React__default.useCallback( /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee4(conversation) {
      var _conversation$attribu, _messages$;

      var title, messages;
      return runtime_1.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              title = (conversation == null ? void 0 : (_conversation$attribu = conversation.attributes) == null ? void 0 : _conversation$attribu.friendly_name_dealership) || (conversation == null ? void 0 : conversation.friendlyName) || (conversation == null ? void 0 : conversation.uniqueName);
              conversation.title = title;
              conversation.id = conversation.sid;
              _context4.next = 5;
              return getMessages(conversation);

            case 5:
              messages = _context4.sent;
              conversation.messages = messages;
              conversation.mostRecentMessage = (_messages$ = messages[0]) == null ? void 0 : _messages$.text;
              _context4.next = 10;
              return conversation.getUnreadMessagesCount();

            case 10:
              _context4.t0 = _context4.sent;

              if (_context4.t0) {
                _context4.next = 13;
                break;
              }

              _context4.t0 = 0;

            case 13:
              conversation.unreadMessagesCount = _context4.t0;
              return _context4.abrupt("return", conversation);

            case 15:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function (_x2) {
      return _ref5.apply(this, arguments);
    };
  }(), [getMessages]);
  var loadConversation = React__default.useCallback( /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee5(conversation) {
      var mappedConversation;
      return runtime_1.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return mapTwilioConversationToCommsConversation(conversation);

            case 2:
              mappedConversation = _context5.sent;
              setConversations(function (curr) {
                return curr ? new Map(curr.set(mappedConversation.sid, mappedConversation)) : new Map();
              });

            case 4:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function (_x3) {
      return _ref6.apply(this, arguments);
    };
  }(), [mapTwilioConversationToCommsConversation]);
  var updateConversation = React__default.useCallback(function (newConversation) {
    return setConversations(function (curr) {
      return new Map(curr.set(newConversation.sid, newConversation));
    });
  }, []);
  var renderNewMessage = React__default.useCallback(function (_ref7) {
    var author = _ref7.author,
        conversationId = _ref7.conversationId,
        newMessage = _ref7.newMessage;
    setConversations(function (curr) {
      var conversation = curr.get(conversationId);

      if (!conversation) {
        return curr;
      }

      var messages = conversation.messages;
      var lastMessage = messages[0];

      if (lastMessage != null && lastMessage.pending) {
        messages[0] = newMessage;
      } else {
        messages = [].concat(conversation.messages, [newMessage]);
      }

      conversation.mostRecentMessage = messages[0].text;
      conversation.messages = messages;

      if (conversation.lastMessage) {
        conversation.lastMessage.dateCreated = new Date(newMessage.createdAt);
      }

      if (!author.includes("dealership")) {
        conversation.unreadMessagesCount = conversation.unreadMessagesCount + 1;
      } else {
        conversation.unreadMessagesCount = 0;
        conversation.setAllMessagesRead();
      }

      return new Map(curr.set(conversation.sid, conversation));
    });
  }, []);
  var messageAdded = React__default.useCallback( /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee6(message) {
      var newMessage;
      return runtime_1.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return formatMessageForGiftedChat(message, identity);

            case 2:
              newMessage = _context6.sent;
              renderNewMessage({
                author: message.author,
                conversationId: message.conversation.sid,
                newMessage: newMessage
              });

            case 4:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    return function (_x4) {
      return _ref8.apply(this, arguments);
    };
  }(), [renderNewMessage, identity]);
  React__default.useEffect(function () {
    if (conversationsLoaded) {
      var arr = Array.from(conversations$1, function (_ref9) {
        var value = _ref9[1];
        return value;
      }).sort(function (a, b) {
        var _b$lastMessage, _a$lastMessage;

        return ((b == null ? void 0 : (_b$lastMessage = b.lastMessage) == null ? void 0 : _b$lastMessage.dateCreated) || b.dateCreated) - ((a == null ? void 0 : (_a$lastMessage = a.lastMessage) == null ? void 0 : _a$lastMessage.dateCreated) || a.dateCreated);
      });
      setAvailableConversations(arr);
    }
  }, [conversations$1, conversationsLoaded]);
  var onConversationSelected = React__default.useCallback( /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee7(conversation) {
      return runtime_1.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              if (conversation) {
                conversation.unreadMessagesCount = 0;

                if (conversation.lastReadMessageIndex === null) {
                  conversation.advanceLastReadMessageIndex(0);
                }
              }

              setSelectedConversation(conversation);

            case 2:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));

    return function (_x5) {
      return _ref10.apply(this, arguments);
    };
  }(), []);
  var loadUniqueConversation = React__default.useCallback( /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee8(client) {
      var uniqueConversation, commsConversation;
      return runtime_1.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              if (!prospectId) {
                _context8.next = 9;
                break;
              }

              _context8.next = 3;
              return client.getConversationByUniqueName("prospect_conversation_" + prospectId);

            case 3:
              uniqueConversation = _context8.sent;

              if (!uniqueConversation) {
                _context8.next = 9;
                break;
              }

              _context8.next = 7;
              return mapTwilioConversationToCommsConversation( // @ts-expect-error
              uniqueConversation);

            case 7:
              commsConversation = _context8.sent;
              return _context8.abrupt("return", {
                unreadUsers: 0,
                availableConversations: [commsConversation],
                selectedConversation: commsConversation
              });

            case 9:
              return _context8.abrupt("return", {
                unreadUsers: 0,
                availableConversations: [],
                selectedConversation: null
              });

            case 10:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    }));

    return function (_x6) {
      return _ref11.apply(this, arguments);
    };
  }(), [prospectId, mapTwilioConversationToCommsConversation]);
  var loadMultipleConversations = React__default.useCallback( /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee10(client) {
      var subscribedConversations, aggConversations, unreadMessagesUsersCount, adaptedConversationPromises, adaptedConversations;
      return runtime_1.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              _context10.next = 2;
              return client.getSubscribedConversations();

            case 2:
              subscribedConversations = _context10.sent;
              aggConversations = [].concat(subscribedConversations.items);

            case 4:
              if (!subscribedConversations.hasNextPage) {
                _context10.next = 11;
                break;
              }

              _context10.next = 7;
              return subscribedConversations.nextPage();

            case 7:
              subscribedConversations = _context10.sent;
              aggConversations = aggConversations.concat(subscribedConversations.items);
              _context10.next = 4;
              break;

            case 11:
              unreadMessagesUsersCount = 0;
              adaptedConversationPromises = aggConversations.map( /*#__PURE__*/function () {
                var _ref13 = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee9(c) {
                  return runtime_1.wrap(function _callee9$(_context9) {
                    while (1) {
                      switch (_context9.prev = _context9.next) {
                        case 0:
                          _context9.next = 2;
                          return c.getUnreadMessagesCount();

                        case 2:
                          _context9.t0 = _context9.sent;

                          if (!_context9.t0) {
                            _context9.next = 5;
                            break;
                          }

                          _context9.t0 = c.lastReadMessageIndex;

                        case 5:
                          if (!_context9.t0) {
                            _context9.next = 7;
                            break;
                          }

                          unreadMessagesUsersCount += 1;

                        case 7:
                          return _context9.abrupt("return", mapTwilioConversationToCommsConversation(c));

                        case 8:
                        case "end":
                          return _context9.stop();
                      }
                    }
                  }, _callee9);
                }));

                return function (_x8) {
                  return _ref13.apply(this, arguments);
                };
              }());
              _context10.next = 15;
              return Promise.all(adaptedConversationPromises);

            case 15:
              adaptedConversations = _context10.sent;
              adaptedConversations.sort(function (a, b) {
                var _b$lastMessage2, _a$lastMessage2;

                return ((b == null ? void 0 : (_b$lastMessage2 = b.lastMessage) == null ? void 0 : _b$lastMessage2.dateCreated) || b.dateCreated) - ((a == null ? void 0 : (_a$lastMessage2 = a.lastMessage) == null ? void 0 : _a$lastMessage2.dateCreated) || a.dateCreated);
              });
              return _context10.abrupt("return", {
                unreadUsers: unreadMessagesUsersCount,
                availableConversations: adaptedConversations,
                selectedConversation: null
              });

            case 18:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10);
    }));

    return function (_x7) {
      return _ref12.apply(this, arguments);
    };
  }(), [mapTwilioConversationToCommsConversation]);
  var loadConversations = React__default.useCallback( /*#__PURE__*/function () {
    var _ref14 = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee11(client) {
      var conversationsResult;
      return runtime_1.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              if (!prospectId) {
                _context11.next = 6;
                break;
              }

              _context11.next = 3;
              return loadUniqueConversation(client);

            case 3:
              _context11.t0 = _context11.sent;
              _context11.next = 9;
              break;

            case 6:
              _context11.next = 8;
              return loadMultipleConversations(client);

            case 8:
              _context11.t0 = _context11.sent;

            case 9:
              conversationsResult = _context11.t0;
              setUnreadUsers(conversationsResult.unreadUsers);
              setAvailableConversations(conversationsResult.availableConversations);

              if (conversationsResult.selectedConversation) {
                setSelectedConversation(conversationsResult.selectedConversation);
              }

              setConversationsLoaded(true);

            case 14:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11);
    }));

    return function (_x9) {
      return _ref14.apply(this, arguments);
    };
  }(), [prospectId, loadUniqueConversation, loadMultipleConversations]);
  var initializeClient = React__default.useCallback( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee12() {
    var tokenResp, identity, token, twilioClient;
    return runtime_1.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _context12.next = 2;
            return getTokenData();

          case 2:
            tokenResp = _context12.sent;
            identity = tokenResp.data.identity;
            token = tokenResp.data.token;
            setIdentity(identity);
            _context12.next = 8;
            return conversations.Client.create(token);

          case 8:
            twilioClient = _context12.sent;
            setClient(twilioClient);

          case 10:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12);
  })), [getTokenData]);
  React__default.useEffect(function () {
    if (tokenEndpoint) {
      if (!client && !identity) {
        initializeClient();
      } else if (tokenEndpoint !== currentTokenEndpoint) {
        // re-initialize when the dealer changes
        client == null ? void 0 : client.off("messageAdded", messageAdded);
        client == null ? void 0 : client.off("conversationAdded", loadConversation);
        client == null ? void 0 : client.off("tokenAboutToExpire", handleExpiredToken);
        client == null ? void 0 : client.off("tokenExpired", handleExpiredToken);
        setConversationsLoaded(false);
        setConversations(new Map());
        setAvailableConversations([]);
        setCurrentTokenEndpoint(tokenEndpoint);
        setClient(null);
        initializeClient();
      }
    }
  }, [tokenEndpoint, client, identity, initializeClient, currentTokenEndpoint, messageAdded, loadConversation, handleExpiredToken]);
  React__default.useEffect(function () {
    if (client && identity) {
      // Event handlers are cached with the state at the time they are added
      // so they need to be refresh when one of the state dependency changes,
      // ie. in this particular case, identity
      client.on("conversationAdded", loadConversation);
      client.on("messageAdded", messageAdded);
      client.on("tokenAboutToExpire", handleExpiredToken);
      client.on("tokenExpired", handleExpiredToken);
      return function () {
        // Note that this function will fire if this useEffect gets triggered, despite
        // whether it passes the if-statement check.
        // In this case, we want to remove the listeners when identity or client changes.
        client == null ? void 0 : client.off("messageAdded", messageAdded);
        client == null ? void 0 : client.off("conversationAdded", loadConversation);
        client == null ? void 0 : client.off("tokenAboutToExpire", handleExpiredToken);
        client == null ? void 0 : client.off("tokenExpired", handleExpiredToken);
      };
    }

    return undefined;
  }, [client, identity, loadConversation, messageAdded, handleExpiredToken]);
  React__default.useEffect(function () {
    if (client && !conversationsLoaded) {
      // loadConversations will only fire once per client init, controlled by conversationsLoaded flag
      loadConversations(client);
    }
  }, [client, conversationsLoaded, loadConversations]);
  var onMessageSend = React__default.useCallback(function (newMessages) {
    if (newMessages === void 0) {
      newMessages = [];
    }

    var newMessage = newMessages[0];

    if (newMessage && selectedConversation) {
      renderNewMessage({
        author: identity,
        conversationId: selectedConversation.sid,
        newMessage: _extends({}, newMessage, {
          user: {
            _id: identity
          },
          pending: true
        })
      });

      if (newMessage.hasOwnProperty("text")) {
        selectedConversation.sendMessage(newMessage.text);
      } else if (newMessage.hasOwnProperty("image")) {
        var formData = new FormData();
        formData.append("file", {
          //@ts-expect-error
          uri: newMessage.image,
          type: "image/jpeg",
          name: "image.jpg"
        });
        selectedConversation.sendMessage(formData);
      }

      selectedConversation.setAllMessagesRead();
    }
  }, [identity, selectedConversation, renderNewMessage]);
  var returnValues = {
    availableConversations: availableConversations,
    conversationsLoaded: conversationsLoaded,
    getMessages: getMessages,
    identity: identity,
    loadConversation: loadConversation,
    onConversationSelected: onConversationSelected,
    onMessageSend: onMessageSend,
    selectedConversation: selectedConversation,
    setSelectedConversation: setSelectedConversation,
    unreadUsers: unreadUsers,
    updateConversation: updateConversation
  };
  return React__default.createElement(Provider, {
    value: returnValues
  }, children);
};

var UnreadInteractionBadge = function UnreadInteractionBadge(_ref) {
  var type = _ref.type;
  return React__default.createElement(reactNative.View, {
    style: [type === "newProspect" ? styles$1.newProspectContainer : styles$1.newMessageContainer]
  }, React__default.createElement(Text, {
    style: type === "newProspect" && styles$1.countStyleProspect,
    bold: true
  }, type === "newProspect" && "new"));
};

var styles$1 = /*#__PURE__*/reactNative.StyleSheet.create({
  newProspectContainer: {
    height: 15,
    width: 30,
    display: "flex",
    alignContent: "flex-start",
    borderRadius: 30,
    backgroundColor: tcUnreadColor,
    justifyContent: "center"
  },
  newMessageContainer: {
    width: 10,
    height: 10,
    borderRadius: 20,
    backgroundColor: tcUnreadColor
  },
  countStyleProspect: {
    fontSize: 11,
    color: "white",
    textAlign: "center"
  }
});

var ConversationList = function ConversationList(_ref) {
  var onConversationPressed = _ref.onConversationPressed,
      onSettingsPress = _ref.onSettingsPress,
      emptyListComponent = _ref.emptyListComponent,
      participantOptedOut = _ref.participantOptedOut,
      _ref$onMessagesHubVie = _ref.onMessagesHubView,
      onMessagesHubView = _ref$onMessagesHubVie === void 0 ? function () {
    return null;
  } : _ref$onMessagesHubVie;

  var _useTwilioConversatio = useTwilioConversations(),
      availableConversations = _useTwilioConversatio.availableConversations,
      conversationsLoaded = _useTwilioConversatio.conversationsLoaded,
      selectedConversation = _useTwilioConversatio.selectedConversation,
      onConversationSelected = _useTwilioConversatio.onConversationSelected,
      unreadUsers = _useTwilioConversatio.unreadUsers;

  var _React$useState = React__default.useState("");

  var hasAvailableConversations = !!availableConversations.length;
  React__default.useEffect(function () {
    if (conversationsLoaded) {
      onMessagesHubView(unreadUsers, availableConversations.length);
    }
  }, [availableConversations, conversationsLoaded, onMessagesHubView, selectedConversation, unreadUsers]);

  var renderItem = function renderItem(_ref2) {
    var item = _ref2.item,
        index = _ref2.index;
    return React__default.createElement(Item, {
      item: item,
      index: index,
      onPress: function onPress() {
        onConversationPressed == null ? void 0 : onConversationPressed();
        onConversationSelected(item);
      },
      participantOptedOut: participantOptedOut
    });
  };

  return React__default.createElement(reactNative.View, {
    style: styles$2.container
  }, React__default.createElement(reactNative.View, {
    style: styles$2.header
  }, React__default.createElement(Heading, {
    bold: true,
    size: "2"
  }, "Messages"), React__default.createElement(reactNative.TouchableOpacity, {
    hitSlop: {
      top: 15,
      bottom: 15,
      left: 15,
      right: 10
    },
    style: styles$2.settingsIcon,
    onPress: onSettingsPress
  }, React__default.createElement(IconSettings, null))), availableConversations && conversationsLoaded ? React__default.createElement(reactNative.FlatList, {
    data: availableConversations,
    renderItem: renderItem,
    ListEmptyComponent: emptyListComponent,
    keyExtractor: function keyExtractor(item) {
      return item.sid;
    },
    contentContainerStyle: !hasAvailableConversations && {
      height: "100%"
    }
  }) : React__default.createElement(reactNative.ActivityIndicator, {
    testID: "loadingSpinner",
    size: "large",
    color: "gray",
    style: styles$2.loading
  }));
};

var OPTED_OUT_MESSAGE = "Opted out of text communication";

var Item = function Item(_ref3) {
  var index = _ref3.index,
      item = _ref3.item,
      onPress = _ref3.onPress,
      participantOptedOut = _ref3.participantOptedOut;

  var _ref4 = item || {},
      lastMessage = _ref4.lastMessage,
      lastReadMessageIndex = _ref4.lastReadMessageIndex,
      messages = _ref4.messages,
      unreadMessagesCount = _ref4.unreadMessagesCount;

  var hasNotBeenInteractedWith = lastReadMessageIndex === null || unreadMessagesCount > 0;
  var hasNewInteraction = messages.length === 0 && lastReadMessageIndex === null || unreadMessagesCount > 0;
  var hasOptedOut = participantOptedOut || (item == null ? void 0 : item.attributes.hasOptedOut);
  return React__default.createElement(reactNative.TouchableOpacity, {
    accessible: false,
    onPress: onPress,
    testID: "conversationList" + index
  }, React__default.createElement(reactNative.View, {
    containerStyle: styles$2.itemContainer
  }, React__default.createElement(reactNative.Image, {
    source: getAvatarSource(index),
    style: [styles$2.avatarImg, hasOptedOut && styles$2.optedOutImage]
  }), React__default.createElement(reactNative.View, {
    style: styles$2.messageContainer
  }, React__default.createElement(reactNative.View, {
    style: styles$2.listItemContent
  }, React__default.createElement(Heading, {
    size: "1",
    style: [{
      width: "95%"
    }, hasOptedOut && styles$2.optedOutText],
    bold: hasNotBeenInteractedWith,
    numberOfLines: 1
  }, item.title), React__default.createElement(Text, {
    numberOfLines: 1,
    style: [styles$2.messagePreview, hasOptedOut && styles$2.optedOutText],
    bold: hasNotBeenInteractedWith,
    size: 15
  }, hasOptedOut ? OPTED_OUT_MESSAGE : item.mostRecentMessage)), React__default.createElement(reactNative.View, {
    style: styles$2.dateTimeContainer
  }, React__default.createElement(Text, {
    style: styles$2.datetime
  }, formatDate((lastMessage == null ? void 0 : lastMessage.dateCreated) || (item == null ? void 0 : item.dateCreated))), hasNewInteraction && React__default.createElement(reactNative.View, {
    style: {
      marginTop: 15
    }
  }, React__default.createElement(UnreadInteractionBadge, {
    type: messages.length === 0 ? "newProspect" : "newMessage"
  }))))));
};

var styles$2 = /*#__PURE__*/reactNative.StyleSheet.create({
  loading: {
    flex: 1
  },
  container: /*#__PURE__*/_extends({
    flex: 1,
    backgroundColor: "white"
  }, headerSpacing),
  avatarImg: {
    height: 50,
    width: 50
  },
  topItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  messagePreview: {
    marginTop: 10,
    color: tcDark,
    width: "95%"
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    height: 56,
    justifyContent: "space-between",
    paddingHorizontal: 15
  },
  datetime: {
    fontSize: 12,
    color: "#999"
  },
  optedOutText: {
    opacity: 0.2,
    color: tcDark
  },
  optedOutImage: {
    opacity: 0.3
  },
  itemContainer: {
    borderBottomColor: tcBorderColor,
    borderBottomWidth: 1,
    borderBottomEndRadius: 15,
    borderBottomStartRadius: 15,
    display: "flex",
    flex: 1,
    flexDirection: "row",
    alignContent: "center"
  },
  settingsIcon: {
    width: 20,
    height: 20
  },
  listItemContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "90%",
    flex: 1
  },
  messageContainer: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    width: "82%"
  },
  dateTimeContainer: {
    display: "flex",
    alignItems: "flex-end",
    flexDirection: "column",
    position: "relative",
    top: 3
  }
});

var IconInventory = function IconInventory(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? "24" : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? "24" : _ref$height;
  return React__default.createElement(Svg__default, {
    viewBox: "0 0 24 24",
    width: width,
    height: height
  }, React__default.createElement(Svg.G, {
    strokeWidth: 1,
    stroke: "black",
    fill: "none"
  }, React__default.createElement(Svg.Path, {
    d: "M6 9h12v1H6zM7.5 13h-3a.5.5 0 000 1h3a.5.5 0 000-1zM19.5 13h-3a.5.5 0 000 1h3a.5.5 0 000-1z"
  }), React__default.createElement(Svg.Path, {
    d: "M23 9h-1.5a.33.33 0 00-.17 0l-1.55-3.07A3.49 3.49 0 0016.65 4h-9.3a3.49 3.49 0 00-3.13 1.93L2.67 9a.33.33 0 00-.17 0H1a.5.5 0 000 1h1.19l-.61 1.22A5.53 5.53 0 001 13.68v4.82A1.5 1.5 0 002.5 20h2A1.5 1.5 0 006 18.5v-.35L18 18v.46A1.5 1.5 0 0019.5 20h2a1.5 1.5 0 001.5-1.5v-4.82a5.53 5.53 0 00-.58-2.46L21.81 10H23a.5.5 0 000-1zm-1 9.5a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5V17l-14 .16v1.34a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-4.82a4.41 4.41 0 01.48-2l2.64-5.3A2.48 2.48 0 017.35 5h9.3a2.48 2.48 0 012.23 1.38l2.64 5.29a4.41 4.41 0 01.48 2z"
  })));
};

// TODO: added this to ignore noUnusedLocals

var CustomActions = function CustomActions(_ref) {
  var _ref$onManualOfferPre = _ref.onManualOfferPress,
      onManualOfferPress = _ref$onManualOfferPre === void 0 ? function () {
    return null;
  } : _ref$onManualOfferPre;
  // const onActionsPress = () => {
  //   onCameraPressed();
  //   const options = ["Choose From Library", "Take Picture", "Cancel"];
  //   const cancelButtonIndex = options.length - 1;
  //   context.actionSheet().showActionSheetWithOptions(
  //     {
  //       options,
  //       cancelButtonIndex,
  //     },
  //     async (buttonIndex: number) => {
  //       switch (buttonIndex) {
  //         case 0:
  //           pickImageAsync(onSend);
  //           return;
  //         case 1:
  //           takePictureAsync(onSend);
  //           return;
  //         default:
  //       }
  //     }
  //   );
  // };
  // const renderCameraIcon = React.useCallback(() => <IconCamera />, []);
  var renderManualOfferIcon = React__default.useCallback(function () {
    return React__default.createElement(IconInventory, null);
  }, []);
  return React__default.createElement(reactNative.View, {
    style: styles$3.wrapper
  }, React__default.createElement(reactNative.TouchableOpacity, {
    style: styles$3.container,
    onPress: onManualOfferPress,
    testID: "manualOfferIcon"
  }, renderManualOfferIcon()));
};

var styles$3 = /*#__PURE__*/reactNative.StyleSheet.create({
  container: {
    width: 26,
    height: 26,
    marginLeft: 10,
    marginBottom: 10
  },
  wrapper: {
    flexDirection: "row",
    width: 30
  },
  iconText: {
    color: "#b2b2b2",
    fontWeight: "bold",
    fontSize: 16,
    backgroundColor: "transparent",
    textAlign: "center"
  }
});
CustomActions.contextTypes = {
  actionSheet: PropTypes.func
};

var IconToBottom = function IconToBottom(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? 25 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 25 : _ref$height;
  return React.createElement(Svg__default, {
    viewBox: "0 0 24 24",
    width: width,
    height: height
  }, React.createElement(Svg.G, {
    stroke: "black",
    fill: "#343434"
  }, React.createElement(Svg.Path, {
    d: "M4.27 17.49H19.73V18.49H4.27V17.49Z"
  }), React.createElement(Svg.Path, {
    d: "M19.02 6.45L19.73 7.16 12.04 14.86 12 14.82 11.96 14.86 4.27 7.16 4.98 6.45 12 13.47 19.02 6.45Z"
  })));
};

// import React from "react";
// import { StyleSheet, TouchableOpacity } from "react-native";
// import { Header } from "react-native-elements";
// import AntDesign from "react-native-vector-icons/AntDesign";
// import Text from "../../Text";
// type NavBarProps = {
//   onPressLeft: () => void;
//   title: string;
//   onPressTitle: () => void;
//   onPressRight: () => void;
// };
// const NavBar = ({
//   onPressLeft,
//   title,
//   onPressTitle,
//   onPressRight,
// }: NavBarProps) => (
//   <Header
//     backgroundColor="#f5f5f5"
//     leftComponent={
//       <TouchableOpacity
//         onPress={onPressLeft}
//         hitSlop={{ top: 10, bottom: 10, left: 10 }}
//         style={styles.leftComponent}
//       >
//         <AntDesign name="left" size={24} color="black" />
//       </TouchableOpacity>
//     }
//     centerComponent={
//       <Text bold size={18} onPress={onPressTitle}>
//         {title}
//       </Text>
//     }
//     rightComponent={
//       <AntDesign
//         name="ellipsis1"
//         size={24}
//         color="black"
//         onPress={onPressRight}
//         testID="prospectProfileBtn"
//       />
//     }
//     containerStyle={{
//       height: 100,
//     }}
//   />
// );
// const styles = StyleSheet.create({
//   leftComponent: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   avatarImg: {
//     height: 30,
//     width: 30,
//     marginLeft: 10,
//   },
// });
var NavBar = (function () {
  return null;
});

var Conversation = function Conversation(_ref) {
  var _ref$bottomOffset = _ref.bottomOffset,
      bottomOffset = _ref$bottomOffset === void 0 ? 0 : _ref$bottomOffset,
      manualOfferBtnComponent = _ref.manualOfferBtnComponent,
      _ref$onManualOfferPre = _ref.onManualOfferPress,
      onManualOfferPress = _ref$onManualOfferPre === void 0 ? function () {
    return null;
  } : _ref$onManualOfferPre,
      navBarRightComponent = _ref.navBarRightComponent,
      onNavBarPressLeft = _ref.onNavBarPressLeft,
      participantOptedOut = _ref.participantOptedOut,
      renderCustomAvatar = _ref.renderCustomAvatar,
      _ref$predefinedChatIn = _ref.predefinedChatInput,
      predefinedChatInput = _ref$predefinedChatIn === void 0 ? "" : _ref$predefinedChatIn,
      _ref$onUserMessagesVi = _ref.onUserMessagesView,
      onUserMessagesView = _ref$onUserMessagesVi === void 0 ? function () {
    return null;
  } : _ref$onUserMessagesVi,
      _ref$onCameraPressed = _ref.onCameraPressed,
      onCameraPressed = _ref$onCameraPressed === void 0 ? function () {
    return null;
  } : _ref$onCameraPressed,
      _ref$renderUsernameOn = _ref.renderUsernameOnMessage,
      renderUsernameOnMessage = _ref$renderUsernameOn === void 0 ? false : _ref$renderUsernameOn,
      _ref$webMode = _ref.webMode,
      webMode = _ref$webMode === void 0 ? false : _ref$webMode;

  var _React$useState = React__default.useState(""),
      conversationInputText = _React$useState[0],
      setConversationInputText = _React$useState[1];

  var _useTwilioConversatio = useTwilioConversations(),
      identity = _useTwilioConversatio.identity,
      onMessageSend = _useTwilioConversatio.onMessageSend,
      selectedConversation = _useTwilioConversatio.selectedConversation,
      setSelectedConversation = _useTwilioConversatio.setSelectedConversation,
      updateConversation = _useTwilioConversatio.updateConversation;

  React__default.useEffect(function () {
    var prospectId = getProspectIdFromConversation(selectedConversation);
    onUserMessagesView(prospectId);
  }, [onUserMessagesView, selectedConversation]);
  React__default.useEffect(function () {
    setConversationInputText(predefinedChatInput);
  }, [predefinedChatInput]);
  var hasOptedOut = participantOptedOut || (selectedConversation == null ? void 0 : selectedConversation.attributes.hasOptedOut);
  var handleBackPress = React__default.useCallback(function () {
    if (selectedConversation) {
      selectedConversation.setAllMessagesRead();
      selectedConversation.unreadMessagesCount = 0;
      updateConversation(selectedConversation);
      setSelectedConversation(null);
    }
  }, [selectedConversation, setSelectedConversation, updateConversation]);
  React__default.useEffect(function () {
    if (webMode) return;

    var handleHardwareBackPress = function handleHardwareBackPress() {
      if (selectedConversation) {
        onNavBarPressLeft == null ? void 0 : onNavBarPressLeft();
        handleBackPress();
        return true;
      }

      return false;
    };

    reactNative.BackHandler.addEventListener("hardwareBackPress", handleHardwareBackPress);
    return function () {
      return reactNative.BackHandler.removeEventListener("hardwareBackPress", handleHardwareBackPress);
    };
  }, [handleBackPress, onNavBarPressLeft, selectedConversation, setSelectedConversation, webMode]);

  var renderScrollToBottom = function renderScrollToBottom() {
    return React__default.createElement(IconToBottom, null);
  };

  var renderCustomActions = function renderCustomActions(props) {
    // Note: this check is different from Platform.OS === web (for cypress)
    // vs webMode
    if (webMode) return null;
    return React__default.createElement(CustomActions, Object.assign({}, props, {
      onManualOfferPress: onManualOfferPress,
      onCameraPressed: onCameraPressed,
      //@ts-expect-error
      onSend: onMessageSend
    }));
  };

  var renderBubble = function renderBubble(props) {
    return React__default.createElement(reactNative.View, {
      style: styles$4.chatBubble,
      testID: "message"
    }, React__default.createElement(reactNativeGiftedChat.Bubble, Object.assign({}, props)));
  };

  var renderSystemMessage = function renderSystemMessage(props) {
    return React__default.createElement(reactNativeGiftedChat.SystemMessage, Object.assign({}, props, {
      containerStyle: {
        marginBottom: 15
      },
      textStyle: {
        fontSize: 14,
        fontFamily: webMode ? tcFontWeb : tcFont
      }
    }));
  };

  var renderCustomInputToolbar = function renderCustomInputToolbar(props) {
    return React__default.createElement(reactNativeGiftedChat.InputToolbar, Object.assign({}, props, {
      containerStyle: _extends({}, roundedContainer, {
        marginHorizontal: 15,
        marginBottom: 10,
        minHeight: 35,
        justifyContent: "center"
      })
    }));
  };

  var renderCustomComposer = function renderCustomComposer(props) {
    var textInputProps = _extends({}, props.textInputProps);

    var textInputStyle = _extends({}, inputText, {
      marginBottom: 3
    });

    if (webMode) {
      textInputProps = _extends({}, props.textInputProps, {
        blurOnSubmit: true,
        onSubmitEditing: function onSubmitEditing() {
          //@ts-expect-error
          if (props.text && props.onSend) {
            //@ts-expect-error
            props.onSend({
              text: props.text.trim()
            }, true);
          }
        }
      });
      textInputStyle.fontFamily = tcFontWeb;
    }

    return React__default.createElement(reactNativeGiftedChat.Composer, Object.assign({}, props, {
      placeholder: "Type a message",
      textInputStyle: textInputStyle,
      textInputProps: textInputProps
    }));
  };

  var renderSend = function renderSend(props) {
    var SendButton = React__default.createElement(MaterialIcons, {
      size: 30,
      name: "send"
    });

    if (webMode) {
      SendButton = React__default.createElement(Text, {
        style: styles$4.sendButtonWeb
      }, "Send");
    } else if (reactNative.Platform.OS === "ios") {
      SendButton = React__default.createElement(Feather, {
        name: "arrow-up-circle",
        size: 24,
        color: "black"
      });
    }

    return React__default.createElement(reactNativeGiftedChat.Send, Object.assign({}, props, {
      containerStyle: styles$4.sendContainer
    }), SendButton);
  };

  return React__default.createElement(reactNative.View, {
    style: styles$4.container,
    accessibilityLabel: "main",
    testID: "main"
  }, !webMode && React__default.createElement(NavBar // title={selectedConversation?.title || ""}
  // onPressLeft={async () => {
  //   onNavBarPressLeft?.();
  //   handleBackPress();
  // }}
  // onPressRight={() => {
  //   onNavBarPressRight?.();
  // }}
  // onPressTitle={() => {
  //   onNavBarPressTitle?.();
  // }}
  , null), React__default.createElement(reactNativeGiftedChat.GiftedChat, {
    text: conversationInputText,
    onInputTextChanged: setConversationInputText,
    messages: reactNative.Platform.OS !== "web" ? selectedConversation == null ? void 0 : selectedConversation.messages.reverse() : selectedConversation == null ? void 0 : selectedConversation.messages,
    onSend: onMessageSend,
    user: {
      _id: identity,
      name: identity
    },
    scrollToBottom: true,
    scrollToBottomComponent: renderScrollToBottom,
    keyboardShouldPersistTaps: "never",
    renderActions: renderCustomActions,
    renderBubble: renderBubble,
    renderSystemMessage: renderSystemMessage,
    renderSend: renderSend,
    minInputToolbarHeight: !hasOptedOut ? 44 : 0,
    renderAvatar: renderCustomAvatar,
    renderInputToolbar: hasOptedOut ? function () {
      return null;
    } : renderCustomInputToolbar,
    renderComposer: renderCustomComposer,
    renderUsernameOnMessage: renderUsernameOnMessage,
    //@ts-expect-error
    renderTicks: function renderTicks() {
      return null;
    },
    quickReplyStyle: {
      borderRadius: 2
    },
    inverted: reactNative.Platform.OS !== "web",
    bottomOffset: bottomOffset,
    timeTextStyle: {
      left: {
        color: "red"
      },
      right: {
        color: "yellow"
      }
    },
    listViewProps: {
      style: {
        marginBottom: 10
      }
    },
    infiniteScroll: true,
    textProps: {
      style: {
        fontFamily: webMode ? tcFontWeb : tcFont
      }
    }
  }), hasOptedOut && React__default.createElement(reactNative.View, {
    testID: "optedOut",
    style: styles$4.optedOut
  }, React__default.createElement(Text, {
    bold: true
  }, selectedConversation == null ? void 0 : selectedConversation.title, " has opted out of text communication."), React__default.createElement(Text, null, "If you still want to contact your customer you can reach them by email.")), navBarRightComponent == null ? void 0 : navBarRightComponent({
    id: getProspectIdFromConversation(selectedConversation),
    name: (selectedConversation == null ? void 0 : selectedConversation.title) || ""
  }), manualOfferBtnComponent == null ? void 0 : manualOfferBtnComponent({
    id: getProspectIdFromConversation(selectedConversation),
    name: (selectedConversation == null ? void 0 : selectedConversation.title) || ""
  }));
};

var styles$4 = /*#__PURE__*/reactNative.StyleSheet.create({
  loading: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  profile: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "#ccc"
  },
  optedOut: /*#__PURE__*/_extends({
    paddingHorizontal: 30,
    paddingTop: 20,
    paddingBottom: 35,
    justifyContent: "space-between",
    backgroundColor: "#F8F8F8",
    height: 150
  }, shadowBox),
  chatBubble: {
    width: "100%"
  },
  sendContainer: {
    justifyContent: "center",
    paddingRight: 10
  },
  sendButtonWeb: {
    fontFamily: tcFontWeb,
    color: "#0084ff"
  }
});

var ConversationCenterWithoutProvider = function ConversationCenterWithoutProvider(_ref) {
  var bottomOffset = _ref.bottomOffset,
      manualOfferBtnComponent = _ref.manualOfferBtnComponent,
      _ref$onManualOfferPre = _ref.onManualOfferPress,
      onManualOfferPress = _ref$onManualOfferPre === void 0 ? function () {
    return null;
  } : _ref$onManualOfferPre,
      navBarRightComponent = _ref.navBarRightComponent,
      onConversationPressed = _ref.onConversationPressed,
      onNavBarPressLeft = _ref.onNavBarPressLeft,
      onNavBarPressRight = _ref.onNavBarPressRight,
      onNavBarPressTitle = _ref.onNavBarPressTitle,
      predefinedChatInput = _ref.predefinedChatInput,
      onSettingsPress = _ref.onSettingsPress,
      emptyListComponent = _ref.emptyListComponent,
      participantOptedOut = _ref.participantOptedOut,
      renderCustomAvatar = _ref.renderCustomAvatar,
      onMessagesHubView = _ref.onMessagesHubView,
      onUserMessagesView = _ref.onUserMessagesView,
      onCameraPressed = _ref.onCameraPressed;

  var _useTwilioConversatio = useTwilioConversations(),
      selectedConversation = _useTwilioConversatio.selectedConversation;

  return !selectedConversation ? React__default.createElement(ConversationList, {
    onMessagesHubView: onMessagesHubView,
    onConversationPressed: onConversationPressed,
    onSettingsPress: onSettingsPress,
    emptyListComponent: emptyListComponent,
    participantOptedOut: participantOptedOut
  }) : React__default.createElement(Conversation, {
    bottomOffset: bottomOffset,
    predefinedChatInput: predefinedChatInput,
    manualOfferBtnComponent: manualOfferBtnComponent,
    onManualOfferPress: onManualOfferPress,
    navBarRightComponent: navBarRightComponent,
    onNavBarPressLeft: onNavBarPressLeft,
    onNavBarPressRight: onNavBarPressRight,
    onNavBarPressTitle: onNavBarPressTitle,
    participantOptedOut: participantOptedOut,
    renderCustomAvatar: renderCustomAvatar,
    onUserMessagesView: onUserMessagesView,
    onCameraPressed: onCameraPressed
  });
};

var NotificationHandler = function NotificationHandler(_ref2) {
  var nativeNotificationHandler = _ref2.nativeNotificationHandler;

  var _useTwilioConversatio2 = useTwilioConversations(),
      availableConversations = _useTwilioConversatio2.availableConversations,
      onConversationSelected = _useTwilioConversatio2.onConversationSelected,
      selectedConversation = _useTwilioConversatio2.selectedConversation,
      setSelectedConversation = _useTwilioConversatio2.setSelectedConversation;

  return React__default.createElement(React__default.Fragment, null, nativeNotificationHandler({
    availableConversations: availableConversations,
    onConversationSelected: onConversationSelected,
    selectedConversation: selectedConversation,
    setSelectedConversation: setSelectedConversation
  }));
};

var ConversationCenter = function ConversationCenter(_ref3) {
  var nativeNotificationHandler = _ref3.nativeNotificationHandler,
      rest = _objectWithoutPropertiesLoose(_ref3, ["nativeNotificationHandler"]);

  return React__default.createElement(TwilioConversationsProvider, {
    tokenEndpoint: rest.tokenEndpoint
  }, React__default.createElement(ConversationCenterWithoutProvider, Object.assign({}, rest)), nativeNotificationHandler && React__default.createElement(NotificationHandler, {
    nativeNotificationHandler: nativeNotificationHandler
  }));
};

var Conversation$1 = function Conversation$1(_ref4) {
  var tokenEndpoint = _ref4.tokenEndpoint,
      prospectId = _ref4.prospectId,
      rest = _objectWithoutPropertiesLoose(_ref4, ["tokenEndpoint", "prospectId"]);

  return React__default.createElement(TwilioConversationsProvider, {
    tokenEndpoint: tokenEndpoint,
    prospectId: prospectId
  }, React__default.createElement(reactNativeSafeAreaContext.SafeAreaProvider, null, React__default.createElement(Conversation, Object.assign({
    webMode: true
  }, rest))));
};

exports.Conversation = Conversation$1;
exports.ConversationCenter = ConversationCenter;
exports.ConversationList = ConversationList;
//# sourceMappingURL=react-native-tc-conversations.cjs.development.js.map
