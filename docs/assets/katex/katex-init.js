let d = document;

// const Render_Math = () => {
//     renderMathInElement(d.body, {

//         delimiters: [
//             { left: "$$", right: "$$", display: true },
//             { left: "$", right: "$", display: false },
//             { left: "\\(", right: "\\)", display: false },
//             { left: "\\[", right: "\\]", display: true }
//         ]
//     });
// }

d.addEventListener("DOMContentLoaded", function () {
  renderMathInElement(document.body, {
    delimiters: [
      { left: "$$", right: "$$", display: true },
      { left: "$", right: "$", display: true },
      { left: "\\(", right: "\\)", display: false },
      { left: "\\[", right: "\\]", display: true },
    ],
  });
});
