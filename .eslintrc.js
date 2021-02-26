const warnOnLocal = process.env.LINT_ERRORS ? "error" : "warn";
const offOnLocal = process.env.LINT_ERRORS ? "error" : "off";

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    "react-native/react-native": true,
    jest: true,
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  root: true,
  plugins: [
    "react",
    "react-native",
    "babel",
    "jest",
    "import",
    "react-hooks",
    "testing-library",
  ],
  rules: {
    // Part of eslint:recommended. These are nearly always errors.

    // Prevent infinite loops, which lock up browser tabs.
    "for-direction": "error",
    // We don't use get/set often, but failing to return something should be an error.
    "getter-return": "error",
    // Prevent some very strange error handling with async + promise mix
    "no-async-promise-executor": "error",
    // Generally not a good idea since this causes sequential calls. Can be overridden for retry logic
    "no-await-in-loop": "error",
    // Comparisons against -0 don't do what you'd expect
    "no-compare-neg-zero": "error",
    // Prevents accidental assignment when comparison was expected.
    // example: if (shopType = "new") {
    "no-cond-assign": ["error", "always"],
    // Prevents the console from being flooded with debug output
    "no-console": warnOnLocal,
    // Prevents unnecessary code like if (false) {}
    "no-constant-condition": "error",
    // Rare issue but is a bug 99% of the time
    "no-control-regex": "error",
    // Leaving this in on production is always a mistake
    "no-debugger": warnOnLocal,
    "no-dupe-args": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-empty": warnOnLocal,
    "no-empty-character-class": "error",
    "no-ex-assign": "error",
    "no-extra-boolean-cast": "error",
    "no-extra-semi": offOnLocal,
    "no-func-assign": "error",
    "no-inner-declarations": "error",
    "no-invalid-regexp": "error",
    "no-irregular-whitespace": "error",
    "no-misleading-character-class": "error",
    "no-obj-calls": "error",
    "no-regex-spaces": "error",
    "no-sparse-arrays": "error",
    "no-template-curly-in-string": "error",
    "no-unexpected-multiline": "error",
    "no-unreachable": warnOnLocal,
    "no-unsafe-finally": "error",
    "no-unsafe-negation": "error",
    "require-atomic-updates": "off",
    "use-isnan": "error",
    "valid-typeof": "error",
    // Failing to call super() is a mistake.
    "constructor-super": "error",
    // Forbids confusing chained reassignment of a class. Sometimes used to wrap classes in HOCs.
    "no-class-assign": "error",
    // This is a build/runtime error
    "no-const-assign": "error",
    "no-dupe-class-members": "error",
    // Bitwise & or | are confusing and almost always a typo
    "no-bitwise": "error",
    // Avoid iterating through prototype methods like "toString()"
    "guard-for-in": "error",
    // Deleting a var attempts to delete it from "window"
    "no-delete-var": "error",
    // We don't use labels, so any usage is likely a mistake.
    "no-extra-label": "error",
    "no-label-var": "error",
    "no-labels": "error",
    "no-unused-labels": "error",
    "no-empty-pattern": "error",
    "no-fallthrough": "error",
    "no-iterator": "error",
    "no-multi-assign": "error",
    "no-new-func": "error",
    "no-new-wrappers": "error",
    "no-octal": "error",
    "no-octal-escape": "error",
    "no-proto": "error",
    "no-redeclare": "error",
    // It's common to accidentally use global objects instead of their identically-named versions within
    // libraries. react-router location is one of these.
    "no-restricted-globals": [
      "off", // TODO enable
      {
        name: "location",
        message:
          "This is the global location object. Did you mean to access React Router's location object? Disable this with // eslint-disable-line no-restricted-globals if you need access to window.location.",
      },
      {
        name: "Location",
        message:
          "This is the global Location type. Did you mean to import a Location type? Disable this with // eslint-disable-line no-restricted-globals if you need access to window.location's type.",
      },
    ],
    "no-self-assign": "error",
    "no-self-compare": "error",
    // Prevent bugs from accidental comma expressions
    "no-sequences": "error",
    // Prevent accidentally redefining things like "undefined"
    "no-shadow-restricted-names": "error",
    // Prevent accessing / mutating classes before calling super()
    "no-this-before-super": "error",
    "no-undef": "error",
    "no-undef-init": "error",
    "no-unused-vars": [warnOnLocal, { ignoreRestSiblings: true }], // future: remove "ignoreRestSiblings"
    // Use let/const, var scoping doesn't make much sense
    "no-var": "error",
    "no-with": "error",
    // Prevent accidental usage of this within stateless components.
    // Very very useful during refactoring
    "babel/no-invalid-this": "error",
    "jest/no-focused-tests": warnOnLocal,
    "jest/no-identical-title": "off", // TODO enable
    "jest/no-jest-import": "error",
    "jest/valid-describe": "error",
    "jest/valid-expect-in-promise": "error",
    "jest/valid-expect": "error",
    "react/no-direct-mutation-state": "error",
    "react/no-render-return-value": "error",
    "react/no-typos": "error",
    "react/no-this-in-sfc": "error",
    "react/no-unknown-property": "error",
    "react/react-in-jsx-scope": "error",
    "react/require-render-return": "error",
    "react/style-prop-object": "error",
    "react/void-dom-elements-no-children": "error",
    "react/jsx-key": "error",
    // Prevent comments from accidentally getting displayed on the page
    "react/jsx-no-comment-textnodes": "error",
    "react/jsx-no-duplicate-props": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "testing-library/await-async-query": "error",
    "testing-library/await-async-utils": "error",
    "testing-library/no-await-sync-query": "error",

    // best practices

    // Forgetting to return from map/reduce is common. Use forEach when missing return is intentional.
    "array-callback-return": "error",
    // JS's conversion rules are insane. https://dorey.github.io/JavaScript-Equality-Table/
    eqeqeq: "error",
    // Use modals or anything with better user experience
    "no-alert": "off", // TODO enable
    // Rarely used, deoptimizes code
    "no-caller": "error",
    // Avoids variable hoisting confusion in switch/case.
    //
    // To prevent this error, wrap block in braces:
    // case "ACTION_NAME": {
    //   const newState = { ...state, loading: false }
    //   return newState;
    // }
    "no-case-declarations": "error",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-global-assign": "error",
    "no-implied-eval": "error",
    "no-lone-blocks": "error",
    "no-loop-func": "error",
    "no-new": "error",
    "no-new-object": "error",
    "no-new-symbol": "error",
    "no-path-concat": "error",
    "no-return-await": "error",
    "no-script-url": "off", // TODO enable
    "no-throw-literal": "error",
    "no-unneeded-ternary": "error",
    "no-useless-call": "error",
    "no-useless-computed-key": "off", // TODO enable, must also use quote-props
    "no-useless-concat": "off", // TODO enable
    "no-useless-constructor": "error",
    "no-useless-rename": "error",
    "no-useless-return": "off", // TODO enable and auto-fix
    "prefer-const": "error",
    "prefer-promise-reject-errors": "off", // TODO enable
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "require-await": "off", // TODO enable
    "require-yield": "error",
    yoda: ["error", "never", { onlyEquality: true }],
    "jest/prefer-to-be-null": "off", // TODO enable and auto-fix
    "jest/prefer-to-be-undefined": "off", // TODO enable and auto-fix
    "jest/prefer-to-have-length": "off", // TODO enable and auto-fix
    "react/display-name": "off", // TODO enable
    "react/no-danger": "off", // TODO enable
    "react/no-did-mount-set-state": "off", // TODO enable
    "react/no-danger-with-children": "error",
    "react/no-did-update-set-state": "off", // TODO enable
    "react/no-redundant-should-component-update": "error",
    "react/no-unsafe": "error",
    "react/no-unused-state": "off", // TODO enable
    "react/no-will-update-set-state": "off", // TODO enable
    "react/prefer-es6-class": "error",
    // Too many Flow false positives. TS doesn't need this.
    "react/prop-types": ["off"],
    "react/jsx-pascal-case": ["error", { allowAllCaps: true }],

    // stylistic

    // Enforce curly braces for if/else. Matches majority case.
    curly: warnOnLocal,
    // Dot notation is more consise and works better with Flow. Auto-fixable.
    "dot-notation": "off", // TODO enable and auto-fix
    // Cleaner diffs and easier cut/paste.
    "eol-last": warnOnLocal,
    // Consistent quotes make for easier edits (especially with multiple cursors)
    "jsx-quotes": [warnOnLocal, "prefer-double"],
    // Avoid mass git diffs across platforms
    "linebreak-style": ["error", "unix"],
    // Slightly shorter, makes it clear that the last return is a fallback
    "no-else-return": warnOnLocal,
    // Slight improvement to consistency for search/replace
    "no-floating-decimal": "off", // TODO enable and auto-fix
    "no-mixed-spaces-and-tabs": "error",
    "no-tabs": "error",
    "no-void": "off", // TODO enable
    // Shorthand helps emphasize key/value pairs that aren't the same.
    "object-shorthand": "off", // TODO enable and auto-fix
    "prefer-object-spread": "off", // TODO enable, causes Flow errors from improved typing
    "prefer-template": "off", // TODO enable and auto-fix
    // Remove unnecessary quotes around property keys. Helps when pasting fixtures into JS.
    // Flow doesn't support numbers as keys because reasons.
    "quote-props": ["off", "as-needed", { unnecessary: true, numbers: true }], // TODO enable and auto-fix carefully
    quotes: [warnOnLocal, "double", { avoidEscape: true }], // disable if prettier is in use
    semi: [offOnLocal, "always"], // disable if prettier is in use
    "yield-star-spacing": warnOnLocal,
    "import/extensions": [
      "off", // TODO enable
      "always",
      { js: "never", flow: "never" },
    ],
    "import/first": "off", // TODO auto-fix if this is worth it
    "react/jsx-boolean-value": "off", // TODO enable and auto-fix
    "react/jsx-curly-brace-presence": ["off", "never"], // TODO enable and auto-fix
    // jasmine is being refactored out of jest. Use jest globals instead
    "jest/no-jasmine-globals": "error",
    "react/no-deprecated": "off", // TODO enable
    "react/no-find-dom-node": "off", // TODO enable
    "react/no-is-mounted": "error",
    "react/no-string-refs": "off", // TODO enable

    // future possibilities

    "no-param-reassign": "off", // this causes many errors requiring manual fixes, and reduce() is an exception
    "no-restricted-properties": "off", // ditto
    "no-return-assign": "off", // many errors, not auto-fixable
    "no-underscore-dangle": "off", // would be nice to disable trailing, not leading
    "no-useless-escape": "off", // causes many errors and isn't auto-fixable
    "prefer-destructuring": "off", // experiment with this
    "jest/prefer-inline-snapshots": "off", // could solve the snapshot abuse problem
    "react/jsx-no-target-blank": "off", // many manual fixes, could be fixed through unified Link component
    "react/no-unescaped-entities": "off", // many manual fixes and may not be worth it
    "react/no-access-state-in-setstate": "off", // can result it subtle bugs
    "react/prefer-stateless-function": "off", // too widespread, requires codemod

    // rules required to prevent false positives from e.g. unused variables
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
  },
};
