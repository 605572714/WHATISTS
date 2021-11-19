// 函数

// ES5
// 函数声明法
function run() {
  return 'run'
}
// 匿名函数
let run1 = function () {
  return 'run'
}

// ts中
// 函数声明法
function run2(): string {
  // return 123 // 不能将类型“number”分配给类型“string”。
  return ''
}
// 匿名函数
let run3 = function (): number {
  return 1234
}

// ts中定义方法传参
function getInfo1(name: string, age: number): string {
  return `${name}---${age}`
}

// console.log(getInfo('theseus', 23));
// 方法的可选参数 可选参数必须在参数的最后面
function getInfo2(name: string, age?: number): string {
  return `${name}---${age}`
}

// // 默认参数
function getInfo3(name: string = '23', age?: number): string {
  return `${name}---${age}`
}
// // 剩余参数
function sum(a: number, b: number, c: number, d: number,) {
  console.log(a + b + c + d);

}
sum(1, 2, 3, 4)
function sum2(...args: Array<number>) {
  // console.log(a + b + c + d);
  let sum: number = 0
  for (let i = 0; i < args.length; i++) {
    sum += args[i]
  }
  console.log(sum);
}
sum2(1, 2, 3, 4)

// ts函数重载
// java中方法的重载：重载指的是两个或者两个以上同名函数，但它们的参数不一样，这时会出现函数重载的情况
// ts中的重载：通过为同一个函数提供多个函数类型定义来试下多种功能的目的
// ts中为了兼容ES5以及ES6重载的写法，和Java中有所区别

// es5中出现重名的方法，下面会替换上面的方法
// function css(config: any): any {

// }
// function css(config, value): any {

// }
// ts重载
function getInfo(name: string): string;
function getInfo(age: number): number;
function getInfo(str: any): any {
  if (typeof str === 'string') {
    return `我叫${str}`
  } else {
    return `我的年龄是${str}`
  }
}



