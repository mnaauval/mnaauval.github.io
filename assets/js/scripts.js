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
