// Solution for part 1:
// Fib(26 + 2) + 16 * 12

// State at line 5
a: 1
b: 1
c: null
d: 26

// State at line 10 (first pass)
a: 1
b: 1
c: 1
d: 26

// State at line 16 (first pass)
a: 2
b: 1
c: 1
d: 25

// State at line 10 (second pass)
a: 2
b: 1
c: 2
d: 25

// State at line 16 (second pass)
a: 3
b: 2
c: 2
d: 24

// State at line 16 (third pass)
a: 5
b: 3
c: 3
d: 23

// Looked like fibonnaci with an offset
// Fib(5) = 5. There were going to be 23 more
// iterations, so I probably wanted Fib(28)

// State at line 17
a: Fib(28)
b: // doesn't matter
c: 16
d: 12

// State at line 23 (first pass)
a: Fib(28) + 12
b: // doesn't matter
c: 15
d: 0

// State at line 23 (second pass)
a: Fib(28) + 12 * 2
b: // doesn't matter
c: 14
d: 0

// So it will be 12 * 16 = 192
// Fib(28) + 192




// Solution for part 2:
// Fib(26 + 7 + 2) + 16 * 12

// State at line 4
a: 1
b: 1
c: 1
d: 26

// State at line 9
a: 1
b: 1
c: 6
d: 27

// State at line 10 (first pass)
a: 1
b: 1
c: 1
d: 33

// Can continue with same pattern as part 1
// Fib(35) + 192