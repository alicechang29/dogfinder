/**Constructs the image url string given the source
 * Input: "duke"
 * Output: "public/duke.jpg"
*/
function imgSrcConstructor(src) {
  const base = "/";
  // doing public/ is being interpreted as ./public which causes it to be dogs/public/src/ending
  // by default, it is going to public
  //server will look in the public folder bc of how it's programmed.
  const ending = ".jpg";

  return base + src + ending;
}

export { imgSrcConstructor };

