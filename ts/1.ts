type Add = (a: number, b: number) => number;
const addFun: Add = (a, b) => {
  return a + b;
};
addFun(1, 2);
interface A {
  name: string;

  age: number;
  say(word: string): string;
}
type B = {
  name: string;
  age: number;
  say?(word: string): string;
};
const person: B = {
  name: "lf",
  age: 20,
  say(word: string): string {
    return word;
  },
};
// 基本数据类型：number、string、boolean、tuple、void、null、undefined、never、
// 高级类型：类型别名、交叉类型（&）、联合类型（｜）、类型索引（keyof、typeof）、类型约束（extends）、映射类型（in）、条件类型（T extends U ? X : Y）
// type（类型别名）：一般用来声明一些接口无法声明的类型，比如基本数据类型type A = number、type C = [number, string]、字面量类型type B = 'foo'、还可以用一些高级类型如联合类型type D = number | boolean、交叉类型type E = A & D
// interface（接口）：只能用于定义对象类型，用extends关键字(类型约束)扩展
// 泛型：把明确类型的工作推迟到创建对象或调用方法的时候才去明确的特殊的类型，简单点来讲我们可以将泛型理解成为把类型当作参数一样去传递
