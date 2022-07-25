//useful link: https://medium.com/jspoint/a-quick-introduction-to-the-property-descriptor-of-the-javascript-objects-5093c37d079

const obj = {
    prop1: 'abc',
    prop2: 'def'
}

const prop1Descriptor = Object.getOwnPropertyDescriptor(obj, 'prop1')

console.log(prop1Descriptor)
/*
    //by default everything is true
    value: true
    writable: true
    enumerable: true
    configurable: true
*/

//READ ONLY property
const obj2 = {
    prop1: 'abc'
}

Object.defineProperty(obj2, 'prop1', { writable: false})

obj2.prop1 = 'def'//This will throw an error because prop1 is now read-only

//Non Enumerable property - not visible in for..in loop or Object.keys
const obj3 = {
    prop1: 'abc'
}

Object.defineProperty(obj3, 'prop1', { enumerable: false})

console.log(Object.keys(obj3))


//Non configurable object property - when set to configurable: false - property descriptor cannot be edited anymore
const obj4 = {
    prop1: 'abc'
}

Object.defineProperty(obj4, 'prop1', { configurable: false })
Object.defineProperty(obj4, 'prop1', { writable: false, enumerable: true})//no effect