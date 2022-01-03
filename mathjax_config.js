window.MathJax = {
  tex: {
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"],
    ],
    tags: "ams",
  },
  svg: {
    fontCache: "global",
  },
  elements: ["math"],
  loader: { load: ["ui/lazy"] },
};
console.log("MathJax config loaded");
