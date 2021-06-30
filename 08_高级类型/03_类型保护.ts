// 类型保护 也就是对一个不确定的类型的类型进行判断 并针对不同的情况继续宁不同的操作
// 可以使用如typeof 以及instanceof
// 例一:
interface Bird {
	fly();
	layEggs();
}

interface Fish {
	swim();
	layEggs();
}

function getSmallPet(): Fish | Bird | String {
	return {
		swim() {},
		layEggs() {},
	};
}

let pet = getSmallPet();

function isFish(pet: Fish | Bird | String): pet is Fish {
	return (<Fish>pet).swim !== undefined;
}
function isBird(pet: Fish | Bird | String): pet is Bird {
	return (<Bird>pet).fly !== undefined;
}
// pet.swim();  // 报错
// 类型保护
if (isFish(pet)) {
	// 在这里 pet相当于被断言成了 Fish
	pet.swim();
} else if (isBird(pet)) {
	// 在这里 pet相当于被断言成了 Bird
	pet.fly();
} else {
	pet.toString();
}
