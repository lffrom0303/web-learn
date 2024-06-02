class treeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

let root = new treeNode("root");
root.left = new treeNode("rootLeft");
root.left.left = new treeNode("rootLeftLeft");
root.left.right = new treeNode("rootLeftRight");
root.right = new treeNode("rootRight");
root.right.left = new treeNode("rootRightLeft");
root.right.right = new treeNode("rootRightRight");
console.log(preorder(root));
// 所有遍历函数的入参都是树的根结点对象
function preorder(root) {
  // 递归边界，root 为空
  if (!root) return;

  // 递归遍历左子树
  preorder(root.left);
  console.log("当前遍历的结点值是：", root.val);

  // 递归遍历右子树
  preorder(root.right);

}
