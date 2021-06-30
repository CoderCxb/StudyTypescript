// 枚举类型
//
enum Direction {
	Up, // 0
	Down, // 1
	Left = 1, // 1
	Right, // 2
}

let d: Direction = Direction.Down;
let r: Direction = Direction.Right;

console.log(Direction.Up); // 0
console.log(Direction.Down); // 1
console.log(Direction.Left); // 1
console.log(Direction.Right); // 2
