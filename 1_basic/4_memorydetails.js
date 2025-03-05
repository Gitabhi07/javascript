// ------------<<<<<<<-----------Heap and Stack m---------------->>>>>>

// Heap and Stack memory allocation in JavaScript
// JavaScript is a single-threaded language, which means it has only one call stack. Therefore, it can only do one thing at a time. However, it can delegate tasks to other processes, such as making an API call, by using the browser's APIs.


// Stack => in js primitive data types use this memory allocation


// The stack is a region of memory that operates in a last-in, first-out (LIFO) manner. When a function is called, it is pushed onto the stack. When the function returns, it is popped off the stack. This is why the stack is sometimes referred to as the call stack.

// Heap => in js non-primitive data types use this memory allocation


// The heap is a region of memory that is used for dynamic memory allocation. It is where objects are stored. When an object is created, it is stored in the heap. When the object is no longer needed, it is removed from the heap by the garbage collector.