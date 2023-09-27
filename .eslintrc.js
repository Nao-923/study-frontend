module.exports = {
  root: true,
  env: {
    node: true,
  },
  plugins: [
    'vue' // この行が存在し、'vue' が指定されていることを確認
  ],
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
};
