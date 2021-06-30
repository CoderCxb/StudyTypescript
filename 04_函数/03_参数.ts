// 可选参数和默认参数
function fullName(
	firstName: string = 'Tom',
	lastName: string = 'Kitty', // 有默认值的参数也是可选参数 如果放在末尾的时候 可以不传
	type?: string
) {
	return firstName + ' ' + lastName + ' is a ' + type;
}

// 对于有默认值的参数来说 传入undefined就可以使用默认值
console.log(fullName('Marco', 'Polo', 'ADC'));
