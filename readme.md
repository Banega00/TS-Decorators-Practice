# Decorators
[![My Skills](https://skillicons.dev/icons?i=ts&theme=light)](https://skillicons.dev)

`Decorators are JavaScript functions that are executed ONCE for the class definition and not per the instance`

! Modify tsconfig.json <br>
"emitDecoratorMetadata": true, <br>
"experimentalDecorators": true, <br>
"target": "es6"

Types of decorator:
- Class Decorator
- Property Decorator
- Method Decorator
- Parameter Decorator


Under the hood typescript compiles to javascript and creates _decorate function