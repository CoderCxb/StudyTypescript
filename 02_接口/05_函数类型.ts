// 定义函数的接口
interface Face {
	(name: string, age: number): number;
}

let func: Face = function (name, age) {
	return 666;
};

func('Evan', 25);
