class ArrayUtils {
    static wrapInArray<T>(value: T) {
        return [value];
    }
}



let numbers = ArrayUtils.wrapInArray(1);
let numberS = ArrayUtils.wrapInArray("1");