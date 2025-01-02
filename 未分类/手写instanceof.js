function myInstanceof(left,right) {
  let rightPrototype = right.prototype,
      leftProto = left.__proto__;
  while (true){
    if(left === null)return false;
    if(leftProto === rightPrototype) return true;
    leftProto = leftProto.__proto__;
  }
}
