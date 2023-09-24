type WatchedParameter = {
    methodName: string,
    parameterIndex: number
}

const watchedParameters: WatchedParameter[] = [];

function Watch(target: any, methodName: string, parameterIndex: number) {
    console.log(target, methodName);

    watchedParameters.push({
        methodName,
        parameterIndex
    })
}

class Vehicle {
    move(@Watch speed: number, cool:string,) {
        console.log(speed,cool);

    }
    ko(@Watch speed: number, cool:string,) {
        console.log(speed,cool);

    }
}

console.log(watchedParameters);
