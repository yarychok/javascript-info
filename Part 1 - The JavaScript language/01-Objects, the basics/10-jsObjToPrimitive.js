// Summary:
// The object-to-primitive conversion is called automaticallt by many built-in functions and operators that expect a primitive as a value

// Three types (hints) of it:
// "string" (for 'console.log()' or 'alert()')
// "number" (for maths)
// "default" (few operators, usually objects implement it the same way as "number")

// In practice, it's often enough to implement only 'obj.toString()' as a "catch-all" method for string conversions that should return a "human-readable" representation of an object, for logging or debugging purposes