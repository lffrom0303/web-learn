class MyClass {
  constructor() {
    // 只放到实例
    this.bbb = "实例属性2"; // 实例属性
    this.ccc = () => {}; // 实例方法
  }
  // 只放到实例
  aaa = "实例属性1"; // 实例属性
  ddd = () => {}; // 箭头函数实例方法
  #privateField = "value"; // 私有字段
  #privateMethod() {
    return 1;
  } // 私有方法

  // 只放到类
  eee() {}

  // 同时放在类中和实例里
  get formatAAA() {
    return this.aaa;
  }
  set formatAAA(newValue) {
    this.aaa = newValue;
  }

  // 只放到构造函数
  static staticProperty = "value"; // 静态属性
  static staticMethod() {} // 静态方法
}

let a = new MyClass();
console.log(a);
