import util from 'util'

//Parameter decorators can only be attached to methods which belongs to classes

//target - is class on whose method decorator is attached 
//propertyKey is name of method/function
//parameterIndex is index of parameter in array of args
function ParameterDecorator(target: Object, propertyKey: string | symbol, parameterIndex: number){
    console.log(util.inspect(target, {}))
    console.log(`${String(propertyKey)} is parameter number ${parameterIndex}`)
}


class TestClass2{

    myFunction(
        @ParameterDecorator a:number,
        @ParameterDecorator b:string
    ) {
        console.log('Function execution')
    }
}
