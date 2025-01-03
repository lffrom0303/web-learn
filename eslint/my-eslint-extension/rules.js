export const noLFVars = {
  meta: {
    name: "no-lf-vars",
    version: "0.0.1",
  },
  create(context) {
    return {
      Identifier(node) {
        console.log(node);
      },
    };
  },
};
