// getter和setter 存取器
// setter中不是对自身这个属性进行修改 不然会不断的触发
class Info {
	private _info: object;
	constructor(info: object) {
		this._info = info;
	}
	get info(): object {
		return this._info;
	}
	set info(newInfo: object) {
		this._info = newInfo;
	}
	static type: string = 'people';
}

console.log(Info.type);

let info = new Info({
	name: 'cxb',
	age: 22,
});
console.log(info);

info.info = {
	name: 'cw',
	age: 22,
};
console.log(info);
