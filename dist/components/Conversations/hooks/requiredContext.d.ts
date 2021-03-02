import React from "react";
/**
 * React.createContext can be set with a default. In most cases, there is no sensible default value,
 * and having one leads to difficult semantic bugs - components behaving incorrectly with no error
 * to work with. Instead, you'd like to make the provider required, and give a helpful error if it's
 * not available.
 */
export declare const createRequiredContext: <TContext extends unknown>(name: string) => readonly [React.Provider<TContext>, () => TContext];
