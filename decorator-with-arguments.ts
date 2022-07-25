/*
In order to pass additional arguments to a decorator
you have to use Decorator Factory

Decorator Factory is function that receives parameters and 
returns a Function with a Decorator Signature
*/

const DecoratorWithParams = (a: string, b?: number) => {

    //the original decorator
    return function(target: Function & typeof TestClass): void{
        target.prototype.id = a;
        target.prototype.b = b;
    }
}

@DecoratorWithParams('testID',3)
class TestClass{
    id: string;
    b: number;
}

const testClass = new TestClass()
console.log(testClass.id, testClass.b)