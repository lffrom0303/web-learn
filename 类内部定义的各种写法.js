class MyClass {
  constructor() {
    // 只放到实例
    this.bbb = "实例属性2"; // 实例属性
    this.ccc = () => {}; // 实例方法
  }
  // 只放到实例
  aaa = "实例属性1"; // 实例属性
  ddd = () => {}; // 箭头函数实例方法

  // 只放到类
  eee() {} // 实例方法

  // 假如想把实例的属性或方法放到类中，可以用这个方法，相当于反射实例的属性，定义在类中,同时也放在实例里
  get formatAAA() {
    return this.aaa;
  }
  set formatAAA(newValue) {
    this.aaa = newValue;
  }

  // 只放到实例
  #privateField = "value"; // 私有字段
  #privateMethod() {
    return 1;
  } // 私有方法

  // 只放到构造函数
  static staticProperty = "value"; // 静态属性
  static staticMethod() {} // 静态方法

  static {
    console.log("Static block1");
    // 执行其他初始化操作 该代码块在类首次加载时执行。
  }

  // {
  //   console.log('Instance block');
  //   // 执行其他初始化操作 该代码块在每次创建对象实例时都会执行。
  // }
}
let a = new MyClass();
console.log(a);
