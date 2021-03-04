'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var reactNative = require('react-native');
var reactNativeGiftedChat = require('react-native-gifted-chat');
var Feather = _interopDefault(require('react-native-vector-icons/Feather'));
var MaterialIcons = _interopDefault(require('react-native-vector-icons/MaterialIcons'));
var reactNativeIphoneXHelper = require('react-native-iphone-x-helper');
var Svg = require('react-native-svg');
var Svg__default = _interopDefault(Svg);
var axios = _interopDefault(require('axios'));
var conversations = require('@twilio/conversations');
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
    var _message$author, _message$conversation, _message$attributes;

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
              //@ts-expect-error
              clientMessageId: (_message$attributes = message.attributes) == null ? void 0 : _message$attributes.clientMessageId,
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
            return _context2.abrupt("return", Promise.all(messages.reverse().map(function (m) {
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
      var messagePaginator, displayableMessages;
      return runtime_1.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (conversation) {
                _context3.next = 2;
                break;
              }

              return _context3.abrupt("return", {
                messagePaginator: null,
                messages: []
              });

            case 2:
              _context3.next = 4;
              return conversation.getMessages();

            case 4:
              messagePaginator = _context3.sent;
              displayableMessages = messagePaginator.items.filter( // @ts-expect-error
              function (m) {
                return !m.attributes.to || m.attributes.to === identity;
              });
              _context3.t0 = messagePaginator;
              _context3.next = 9;
              return formatMessagesForGiftedChat(displayableMessages, identity);

            case 9:
              _context3.t1 = _context3.sent;
              return _context3.abrupt("return", {
                messagePaginator: _context3.t0,
                messages: _context3.t1
              });

            case 11:
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
  var updateConversation = React__default.useCallback(function (newConversation) {
    return setConversations(function (curr) {
      return new Map(curr.set(newConversation.sid, newConversation));
    });
  }, []);
  var loadEarlierMessages = React__default.useCallback( /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee4(conversation) {
      var _conversation$message;

      var messagePaginator, aggMessages;
      return runtime_1.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              if (!(!conversation || !((_conversation$message = conversation.messagePaginator) != null && _conversation$message.hasPrevPage))) {
                _context4.next = 2;
                break;
              }

              return _context4.abrupt("return");

            case 2:
              messagePaginator = conversation.messagePaginator;
              aggMessages = [].concat(conversation.messages);

            case 4:
              if (!messagePaginator.hasPrevPage) {
                _context4.next = 15;
                break;
              }

              _context4.next = 7;
              return messagePaginator.prevPage();

            case 7:
              messagePaginator = _context4.sent;
              _context4.t0 = aggMessages;
              _context4.next = 11;
              return formatMessagesForGiftedChat(messagePaginator.items, identity);

            case 11:
              _context4.t1 = _context4.sent;
              aggMessages = _context4.t0.concat.call(_context4.t0, _context4.t1);
              _context4.next = 4;
              break;

            case 15:
              conversation.messagePaginator = messagePaginator;
              conversation.messages = aggMessages;
              setSelectedConversation(conversation);
              updateConversation(conversation);

            case 19:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function (_x2) {
      return _ref5.apply(this, arguments);
    };
  }(), [identity, updateConversation]);
  var mapTwilioConversationToCommsConversation = React__default.useCallback( /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee5(conversation) {
      var _conversation$attribu, _messages$;

      var title, _yield$getMessages, messagePaginator, messages;

      return runtime_1.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              title = (conversation == null ? void 0 : (_conversation$attribu = conversation.attributes) == null ? void 0 : _conversation$attribu.friendly_name_dealership) || (conversation == null ? void 0 : conversation.friendlyName) || (conversation == null ? void 0 : conversation.uniqueName);
              conversation.title = title;
              conversation.id = conversation.sid;
              _context5.next = 5;
              return getMessages(conversation);

            case 5:
              _yield$getMessages = _context5.sent;
              messagePaginator = _yield$getMessages.messagePaginator;
              messages = _yield$getMessages.messages;
              conversation.messagePaginator = messagePaginator;
              conversation.messages = messages;
              conversation.mostRecentMessage = (_messages$ = messages[0]) == null ? void 0 : _messages$.text;
              _context5.next = 13;
              return conversation.getUnreadMessagesCount();

            case 13:
              _context5.t0 = _context5.sent;

              if (_context5.t0) {
                _context5.next = 16;
                break;
              }

              _context5.t0 = 0;

            case 16:
              conversation.unreadMessagesCount = _context5.t0;
              return _context5.abrupt("return", conversation);

            case 18:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function (_x3) {
      return _ref6.apply(this, arguments);
    };
  }(), [getMessages]);
  var loadConversation = React__default.useCallback( /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee6(conversation) {
      var mappedConversation;
      return runtime_1.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return mapTwilioConversationToCommsConversation(conversation);

            case 2:
              mappedConversation = _context6.sent;
              setConversations(function (curr) {
                return curr ? new Map(curr.set(mappedConversation.sid, mappedConversation)) : new Map();
              });

            case 4:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    return function (_x4) {
      return _ref7.apply(this, arguments);
    };
  }(), [mapTwilioConversationToCommsConversation]);
  var renderNewMessage = React__default.useCallback(function (_ref8) {
    var author = _ref8.author,
        conversationId = _ref8.conversationId,
        newMessage = _ref8.newMessage;
    setConversations(function (curr) {
      var conversation = curr.get(conversationId);

      if (!conversation) {
        return curr;
      }

      var messages = conversation.messages; //@ts-expect-error

      if (newMessage != null && newMessage.clientMessageId) {
        messages = messages.map(function (msg) {
          return (//@ts-expect-error
            msg._id === (newMessage == null ? void 0 : newMessage.clientMessageId) ? newMessage : msg
          );
        });
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
    var _ref9 = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee7(message) {
      var newMessage;
      return runtime_1.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return formatMessageForGiftedChat(message, identity);

            case 2:
              newMessage = _context7.sent;
              renderNewMessage({
                author: message.author,
                conversationId: message.conversation.sid,
                newMessage: newMessage
              });

            case 4:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));

    return function (_x5) {
      return _ref9.apply(this, arguments);
    };
  }(), [renderNewMessage, identity]);
  React__default.useEffect(function () {
    if (conversationsLoaded) {
      var arr = Array.from(conversations$1, function (_ref10) {
        var value = _ref10[1];
        return value;
      }).sort(function (a, b) {
        var _b$lastMessage, _a$lastMessage;

        return ((b == null ? void 0 : (_b$lastMessage = b.lastMessage) == null ? void 0 : _b$lastMessage.dateCreated) || b.dateCreated) - ((a == null ? void 0 : (_a$lastMessage = a.lastMessage) == null ? void 0 : _a$lastMessage.dateCreated) || a.dateCreated);
      });
      setAvailableConversations(arr);
    }
  }, [conversations$1, conversationsLoaded]);
  var onConversationSelected = React__default.useCallback( /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee8(conversation) {
      return runtime_1.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
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
              return _context8.stop();
          }
        }
      }, _callee8);
    }));

    return function (_x6) {
      return _ref11.apply(this, arguments);
    };
  }(), []);
  var loadUniqueConversation = React__default.useCallback( /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee9(client) {
      var uniqueConversation, commsConversation;
      return runtime_1.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              if (!prospectId) {
                _context9.next = 9;
                break;
              }

              _context9.next = 3;
              return client.getConversationByUniqueName("prospect_conversation_" + prospectId);

            case 3:
              uniqueConversation = _context9.sent;

              if (!uniqueConversation) {
                _context9.next = 9;
                break;
              }

              _context9.next = 7;
              return mapTwilioConversationToCommsConversation( // @ts-expect-error
              uniqueConversation);

            case 7:
              commsConversation = _context9.sent;
              return _context9.abrupt("return", {
                unreadUsers: 0,
                availableConversations: [commsConversation],
                selectedConversation: commsConversation
              });

            case 9:
              return _context9.abrupt("return", {
                unreadUsers: 0,
                availableConversations: [],
                selectedConversation: null
              });

            case 10:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9);
    }));

    return function (_x7) {
      return _ref12.apply(this, arguments);
    };
  }(), [prospectId, mapTwilioConversationToCommsConversation]);
  var loadMultipleConversations = React__default.useCallback( /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee11(client) {
      var subscribedConversations, aggConversations, unreadMessagesUsersCount, adaptedConversationPromises, adaptedConversations;
      return runtime_1.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              _context11.next = 2;
              return client.getSubscribedConversations();

            case 2:
              subscribedConversations = _context11.sent;
              aggConversations = [].concat(subscribedConversations.items);

            case 4:
              if (!subscribedConversations.hasNextPage) {
                _context11.next = 11;
                break;
              }

              _context11.next = 7;
              return subscribedConversations.nextPage();

            case 7:
              subscribedConversations = _context11.sent;
              aggConversations = aggConversations.concat(subscribedConversations.items);
              _context11.next = 4;
              break;

            case 11:
              unreadMessagesUsersCount = 0;
              adaptedConversationPromises = aggConversations.map( /*#__PURE__*/function () {
                var _ref14 = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee10(c) {
                  return runtime_1.wrap(function _callee10$(_context10) {
                    while (1) {
                      switch (_context10.prev = _context10.next) {
                        case 0:
                          _context10.next = 2;
                          return c.getUnreadMessagesCount();

                        case 2:
                          _context10.t0 = _context10.sent;

                          if (!_context10.t0) {
                            _context10.next = 5;
                            break;
                          }

                          _context10.t0 = c.lastReadMessageIndex;

                        case 5:
                          if (!_context10.t0) {
                            _context10.next = 7;
                            break;
                          }

                          unreadMessagesUsersCount += 1;

                        case 7:
                          return _context10.abrupt("return", mapTwilioConversationToCommsConversation(c));

                        case 8:
                        case "end":
                          return _context10.stop();
                      }
                    }
                  }, _callee10);
                }));

                return function (_x9) {
                  return _ref14.apply(this, arguments);
                };
              }());
              _context11.next = 15;
              return Promise.all(adaptedConversationPromises);

            case 15:
              adaptedConversations = _context11.sent;
              adaptedConversations.sort(function (a, b) {
                var _b$lastMessage2, _a$lastMessage2;

                return ((b == null ? void 0 : (_b$lastMessage2 = b.lastMessage) == null ? void 0 : _b$lastMessage2.dateCreated) || b.dateCreated) - ((a == null ? void 0 : (_a$lastMessage2 = a.lastMessage) == null ? void 0 : _a$lastMessage2.dateCreated) || a.dateCreated);
              });
              return _context11.abrupt("return", {
                unreadUsers: unreadMessagesUsersCount,
                availableConversations: adaptedConversations,
                selectedConversation: null
              });

            case 18:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11);
    }));

    return function (_x8) {
      return _ref13.apply(this, arguments);
    };
  }(), [mapTwilioConversationToCommsConversation]);
  var loadConversations = React__default.useCallback( /*#__PURE__*/function () {
    var _ref15 = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee12(client) {
      var conversationsResult;
      return runtime_1.wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              if (!prospectId) {
                _context12.next = 6;
                break;
              }

              _context12.next = 3;
              return loadUniqueConversation(client);

            case 3:
              _context12.t0 = _context12.sent;
              _context12.next = 9;
              break;

            case 6:
              _context12.next = 8;
              return loadMultipleConversations(client);

            case 8:
              _context12.t0 = _context12.sent;

            case 9:
              conversationsResult = _context12.t0;
              setUnreadUsers(conversationsResult.unreadUsers);

              if (conversationsResult.selectedConversation) {
                setSelectedConversation(conversationsResult.selectedConversation);
                setTimeout(function () {
                  return loadEarlierMessages(conversationsResult.selectedConversation);
                }, 1);
              } else if (conversationsResult.availableConversations) {
                setAvailableConversations(conversationsResult.availableConversations);
              }

              setConversationsLoaded(true);

            case 13:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12);
    }));

    return function (_x10) {
      return _ref15.apply(this, arguments);
    };
  }(), [prospectId, loadEarlierMessages, loadUniqueConversation, loadMultipleConversations]);
  var initializeClient = React__default.useCallback( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee13() {
    var tokenResp, identity, token, twilioClient;
    return runtime_1.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            _context13.next = 2;
            return getTokenData();

          case 2:
            tokenResp = _context13.sent;
            identity = tokenResp.data.identity;
            token = tokenResp.data.token;
            setIdentity(identity);
            _context13.next = 8;
            return conversations.Client.create(token);

          case 8:
            twilioClient = _context13.sent;
            setClient(twilioClient);

          case 10:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13);
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
          }
        })
      });
      var msgAttributes = {
        clientMessageId: newMessage._id
      };

      if (newMessage.hasOwnProperty("text")) {
        selectedConversation.sendMessage(newMessage.text, msgAttributes);
      } else if (newMessage.hasOwnProperty("image")) {
        var formData = new FormData();
        formData.append("file", {
          //@ts-expect-error
          uri: newMessage.image,
          type: "image/jpeg",
          name: "image.jpg"
        });
        selectedConversation.sendMessage(formData, msgAttributes);
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

var ConversationWithoutProvider = function ConversationWithoutProvider(_ref) {
  var _ref$bottomOffset = _ref.bottomOffset,
      bottomOffset = _ref$bottomOffset === void 0 ? 0 : _ref$bottomOffset,
      manualOfferBtnComponent = _ref.manualOfferBtnComponent,
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
    if (webMode) {
      return;
    }

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

  var renderBubble = function renderBubble(props) {
    return React__default.createElement(reactNative.View, {
      style: styles.chatBubble,
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
        style: styles.sendButtonWeb
      }, "Send");
    } else if (reactNative.Platform.OS === "ios") {
      SendButton = React__default.createElement(Feather, {
        name: "arrow-up-circle",
        size: 24,
        color: "black"
      });
    }

    return React__default.createElement(reactNativeGiftedChat.Send, Object.assign({}, props, {
      containerStyle: styles.sendContainer
    }), SendButton);
  };

  return React__default.createElement(reactNative.View, {
    style: styles.container,
    accessibilityLabel: "main",
    testID: "main"
  }, React__default.createElement(reactNativeGiftedChat.GiftedChat // ref={ref}
  , {
    // ref={ref}
    text: conversationInputText,
    onInputTextChanged: setConversationInputText,
    messages: selectedConversation == null ? void 0 : selectedConversation.messages,
    onSend: onMessageSend,
    user: {
      _id: identity,
      name: identity
    },
    scrollToBottom: true,
    scrollToBottomComponent: renderScrollToBottom,
    keyboardShouldPersistTaps: "never",
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
    quickReplyStyle: {
      borderRadius: 2
    },
    inverted: true,
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
    //@ts-expect-error
    textProps: {
      style: {
        fontFamily: webMode ? tcFontWeb : tcFont
      }
    }
  }), hasOptedOut && React__default.createElement(reactNative.View, {
    testID: "optedOut",
    style: styles.optedOut
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

var Conversation = function Conversation(_ref2) {
  var tokenEndpoint = _ref2.tokenEndpoint,
      prospectId = _ref2.prospectId,
      rest = _objectWithoutPropertiesLoose(_ref2, ["tokenEndpoint", "prospectId"]);

  return React__default.createElement(TwilioConversationsProvider, {
    tokenEndpoint: tokenEndpoint,
    prospectId: prospectId
  }, React__default.createElement(reactNativeSafeAreaContext.SafeAreaProvider, null, React__default.createElement(ConversationWithoutProvider, Object.assign({
    webMode: true
  }, rest))));
};
var styles = /*#__PURE__*/reactNative.StyleSheet.create({
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

exports.Conversation = Conversation;
exports.default = Conversation;
//# sourceMappingURL=react-native-tc-conversations.cjs.development.js.map
