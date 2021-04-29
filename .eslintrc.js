module.exports = {
  globals: {
    __PATH_PREFIX__: true,
    window: true,
    document: true,
  },
  extends: ["airbnb", "airbnb/hooks", "prettier/prettier"],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/no-danger": 0,
    "linebreak-style": 0,
    quotes: 0,
    semi: 0,
  },
}
