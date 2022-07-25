export const a = 1;

function id(limit: number) {

    //target is constructor of the class - if property is static
    //or class prototype if property is dynamic
    //propertyKey = name of the property
    return (target: Object, propertyKey: PropertyKey): any => {
        console.log(propertyKey)
        // let value: string;
        // const getter = function () {
        //     return value;
        // };
        // const setter = function (newVal: string) {
        //     if (newVal.length < limit) {
        //         Object.defineProperty(target, 'errors', {
        //             value: `Your password should be bigger than ${limit}`
        //         });
        //     }
        //     else {
        //         value = newVal;
        //     }
        // };
        // Object.defineProperty(target, propertyKey, {
        //     //here you can change a lot of meta-properties for this property
        //     //like get, set, enumerable, configurable
        //     get: getter,
        //     set: setter
        // });
    };
}


class TestClass {

    @id(8)
    identifier: string;
}

const testClass = new TestClass()
testClass.identifier = 'abcd'
console.log(testClass.identifier)