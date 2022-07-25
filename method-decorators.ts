function MethodDecorator(
    target: Object, //reference to the function (the constructor or prototype of the class decorated.)
    propertyKey: string, //name of class property (in this case method)
    propertyDescriptor: PropertyDescriptor //Describes the class property 
){
    //value represents the function (the code that will be executed)
    //in this way we can overwrite actual function behavior
    console.log(propertyDescriptor.value())//invoking function in decorator
    propertyDescriptor.value = function(...args:any[]){//args to access original function parameters
        return `Hello ${args}`
    }
}


//Wrapping method execution with decorator
function MethodDecorator2(
    target: Object, 
    propertyKey: string,
    propertyDescriptor: PropertyDescriptor
){
    const value = propertyDescriptor.value;
    propertyDescriptor.value = function(...args:any[]){//args to access original function parameters
        console.log('Before method execution')
        value.apply(this, args);//executes the original method
        console.log('After method execution')
    }
}

class ExampleClass{

    @MethodDecorator2
    printSth(prefix: string = '') {
        console.log(prefix + '!')
    }
}

new ExampleClass().printSth('Test')