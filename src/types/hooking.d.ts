// Hooking API:

/** Hooks function old, replacing it with the function hook. The old function is returned, you must use this function in order to call the original function. */
declare function hookfunction(
	old: (...args: unknown[]) => unknown,
	hook: (...args: unknown[]) => unknown,
): (...args: unknown[]) => unknown;

/** Hooks the metamethod passed in the object's metatable with hook. A function to call the original metamethod is returned, you must use this function in order to call the original metamethod. This function will error if an object without a metatable is passed or a invalid metamethod is passed. */
declare function hookmetamethod(
	object: Instance,
	metamethod: keyof LuaMetatable<{}> | "__namecall",
	hook: (object: unknown, ...args: unknown[]) => unknown,
): (object: unknown, ...args: unknown[]) => unknown;

/** Pushes a new CClosure that invokes function f upon call. */
declare function newcclosure<F extends (...args: unknown[]) => unknown>(f: F): F;
