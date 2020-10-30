module.exports = {
    presets: ["next/babel", "@babel/preset-react"],
    plugins: [
      ["styled-components", { "ssr": true }],
      "inline-react-svg",
    ]
  };