const root = {
  val: "A",
  left: {
    val: "B",
    left: {
      val: "D",
    },
    right: {
      val: "E",
    },
  },
  right: {
    val: "C",
    right: {
      val: "F",
    },
  },
};

// 所有遍历函数的入参都是树的根结点对象
function preorder(root) {
  if (!root) {
    return;
  }
  preorder(root.left);
  preorder(root.right);
  console.log("当前遍历的结点值是：", root.val);
}
preorder(root);
