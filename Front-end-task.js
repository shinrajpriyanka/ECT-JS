/**
 * Question 1: Create a function which creates a deep copy of an object
 */
/**Structured clone */
function deepCopy(oldObj) {
    const newObj = structuredClone(oldObj);
    return newObj;
}
/** Custom method*/
function deepCopy(newObj, oldObj) {
    for (let [key, value] of Object.entries(oldObj)) {
        let propertyname = key;
        let valueofproperty;
        if(typeof(value) === 'object') {            
            valueofproperty = deepCopy({},{...value});
        }
        else {
            valueofproperty = value;
        }
        Object.defineProperty(newObj, propertyname , {
            value: valueofproperty, 
            enumerable: true,
            writable: true              
        });        
    }
    return newObj;
}

/**
 * Question 2: Write a function which checks if two objects are equivalent
- “undefined” and “null” can be treated as equal
- consider all primitive types, objects, arrays and dates
 */

function check(data1, data2) {
    return (Object.entries(data1).sort().toString()===
    Object.entries(data2).sort().toString())
}

/**
 * Question 3: Write a function which executes a string provided javascript code, while
considering the following:
 */

/**
 * There is a set of "global" variables, which are always available
- '$math': exposes two functions 'sum' and 'mul', adding or
multiplying two numbers
 */

$math = { 
    sum: (a,b) => { return a+b},
    mul: (a,b) => { return a*b }    
}
/**
 * '$logger': exposes the console.log functionality
 */
$logger = (a,b) => {
    console.log(a+ b);
}

/**
 * 
 * @param {text} - a string provided javascript code, 
 * @param {values} - accepts variables to execute the javascript code 
 */
function execute(loggerString, values) {
    const {a, b} = {...values};
    eval(loggerString);    
}

execute('$logger("Sum:", $math.sum(a, b))', { a: 17, b: 3 });
execute('$logger("Mul:", $math.mul(a, b))', { a: 17, b: 3 });





