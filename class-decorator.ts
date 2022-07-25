//decorator is just a function
//here target is Class which is under the hood also a Function
function MyDecorator(target: Function){
    target.prototype.id = 10;
}

@MyDecorator
export class TestClass{
    id: number;
}

console.log(new TestClass().id)