//your parameter variables go here!
let CheeseX = 190 // X location of cheese
let CheeseY = 170 // Y location of cheese
let CheeseHeight = CheeseY + 0 // height/thickness of the cheese
let RatX = 60 // X location of rat
let RatY = 80 // Y location of rat

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

function my_symbol() { 
  
// CHEESE:
  strokeWeight(2);
  stroke(163, 141, 11); // cheese line colour
  fill(252, 231, 111); // cheese fill colour

  beginShape(); // body of cheese
  vertex(155, 120);
  quadraticVertex(180, 120, 190, 140);
  vertex(190, CheeseHeight);
  vertex(95, CheeseHeight);
  vertex(90, 150);
  endShape(CLOSE);

  line(90, 150, 190, 140); // line through middle of cheese
  


  // CHEESE HOLES:
  fill(224, 192, 74); // cheese shading colour (for holes)
  ellipse(160, 155, 10, 5);
  ellipse(135, 135, 20, 5);
  ellipse(135, 160, 20, 10);
  ellipse(105, 155, 10, 5);
  ellipse(160, 130, 10, 5);
  ellipse(190, 155, 17, 15); // righthand side hole

  // NEGATIVE SPACE (for cheese holes on border of cheese body)
  fill(240, 255, 240) // background colour
  ellipse(192, 155, 12, 14); // to cover half the righthand side ellipse
  noStroke();
  rect(191, 145, 10, 30) // to remove the stroke of half the above ellipse


// RAT:
  stroke(50, 54, 53); // dark grey
  fill(211, 219, 217); // light grey 

  ellipse(RatX, RatY, 50, 70); // rat belly



}
