"use strict";
// typescript中的数据类型
// typescript中为了编写的代码规范，更有利于维护，增加了类型校验，
// 布尔类型（boolean)
// 数字类型（number）
// 字符串类型（string）
// 数组类型（array）
// 元组类型（tuple）
// 枚举类型（enum ）
// 任意类型（any）
// null和undefined
// void类型
// never类
var b = false;
var PayStatus;
(function (PayStatus) {
    PayStatus[PayStatus["payed"] = 1] = "payed";
    PayStatus[PayStatus["onPay"] = 2] = "onPay";
    PayStatus[PayStatus["err"] = 0] = "err";
})(PayStatus || (PayStatus = {}));
var pay_status = PayStatus.payed;
console.log(pay_status);
// 任意类型
var num = 123;
num = 'str';
num = true;
// null和undefined
// let num3: number;
// console.log(num3); // 在赋值前使用了变量“num3”。
var num1;
console.log(num1); //let num1: undefined
var num4;
console.log(num4);
num4 = 4;
console.log(num4);
// void类型：ts中的void表示没有任何类型，一般用于定义方法的时候方法没有返回值
function run() {
    console.log('run');
}
// never类型：是其他类型（包含null和undefined）的子类型，代表从不会出现的值，这意味着声明never的变量只能被never类型所赋值
var a;
// a = 1123 // 不能将类型“number”分配给类型“never”。
a = (function () {
    throw new Error('err');
})();
