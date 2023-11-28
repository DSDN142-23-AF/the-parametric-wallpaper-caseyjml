//your parameter variables go here!
let CheeseX = 190 // X location of cheese
let CheeseY = 170 // Y location of cheese
let CheeseHeight = CheeseY + 0 // height/thickness of the cheese
let RatX = 60 // X location of rat
let RatY = 80 // Y location of rat
let NoseX = RatX + 0 // X location of rat nose
let NoseY = RatY + 0 // Y location of rat nose
let Tummy = RatX - 0 // Width of rat's tummy


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(240, 255, 240); // light honeydew green colour
}


function my_symbol() { // draw function
  
// CHEESE:
  strokeWeight(2);
  stroke(163, 141, 11); // cheese line colour
  fill(252, 231, 111); // cheese fill colour

  beginShape(); // body of cheese
  vertex(CheeseX-35, CheeseY-50);
  quadraticVertex(CheeseX-10, CheeseY-50, CheeseX, CheeseY-30);
  vertex(CheeseX, CheeseHeight); // CHANGES CHEESE HEIGHT/THICKNESS
  vertex(CheeseX-95, CheeseHeight); // CHANGES CHEESE HEIGHT/THICKNESS
  vertex(CheeseX-100, CheeseY-20);
  endShape(CLOSE);

  line(CheeseX-100, CheeseY-20, CheeseX, CheeseY-30); // line through middle of cheese
  


  // CHEESE HOLES:
  fill(224, 192, 74); // cheese shading colour (for holes)
  ellipse(CheeseX-30, CheeseY-15, 10, 5);
  ellipse(CheeseX-55, CheeseY-35, 20, 5);
  ellipse(CheeseX-55, CheeseY-10, 20, 10);
  ellipse(CheeseX-85, CheeseY-15, 10, 5);
  ellipse(CheeseX-30, CheeseY-40, 10, 5);
  ellipse(CheeseX, CheeseY-15, 17, 15); // righthand side hole

  // NEGATIVE SPACE (for cheese holes on border of cheese body)
  fill(240, 255, 240) // background colour
  ellipse(CheeseX+2, CheeseY-15, 12, 14); // to cover half the righthand side ellipse
  noStroke();
  rect(CheeseX+1, CheeseY-25, 8.5, 30) // to remove the stroke of half the above ellipse


// RAT:
  stroke(50, 54, 53); // rat stroke colour
  fill(211, 219, 217); // rat fill colour

  triangle(RatX-20, RatY+25, RatX+20, RatY+25, NoseX, NoseY+65); // rat head
  ellipse(RatX, RatY, Tummy, RatY); // rat belly
  circle(NoseX, NoseY+63, 6); // rat nose

  stroke(0); // eye colour
  line(NoseX-7, NoseY+45, NoseX-5, NoseY+44); // left eye
  line(NoseX+5, NoseY+44, NoseX+7, NoseY+45); // right eye


}
