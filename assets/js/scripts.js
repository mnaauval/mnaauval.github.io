// Typewriter JS
var title = document.getElementById("caption-title");

var typewriter = new Typewriter(title, {
  loop: true,
  delay: 75,
});
// prettier-ignore
typewriter
  .typeString('Welcome to my website')
  .pauseFor(300)
  .deleteAll(20)
  .typeString('Nice to meet you')
  .pauseFor(1000)
  .start();

var progrescontent = document.getElementById("on-progress");

var typewriter = new Typewriter(progrescontent, {});
// prettier-ignore
typewriter
  .typeString('This content on progress... ')
  .pauseFor(1000)
  .start();
