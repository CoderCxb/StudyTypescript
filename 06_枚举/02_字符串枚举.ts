// 字符串枚举
// 枚举的值默认从0开始递增 若赋值以后 按赋值的值
enum StringEnum {
	Up = 'Up',
	Down = 'Down',
	Left = 'Left',
	Right = 'Right',
}

let str: StringEnum;

console.log(StringEnum.Up); //Up
console.log(StringEnum.Down); // Down
console.log(StringEnum.Left); // Left
console.log(StringEnum.Right); // Right
