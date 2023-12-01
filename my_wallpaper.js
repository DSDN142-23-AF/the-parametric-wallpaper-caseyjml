//PARAMETER VARIABLES
let CheeseX = 190 // 190 // X location of cheese
let CheeseY = 170 // 170 // Y location of cheese
let CheeseHeight = CheeseY + 0 // 0 // height/thickness of the cheese
let Mold = true; // makes the cheese green

let BiteSize = 15 // 30 // Changes size of bites in cheese
let ShowBites = true; // Turns bites in cheese on/of

let RatX = 60 // 60 // X location of rat
let RatY = 90 // 90 // Y location of rat
let NoseX = RatX + 20 // 0 // X location of rat nose
let NoseY = RatY + 40 // 0 // Y location of rat nose
let Tummy = RatX + 100 // 0 // Width of rat's tummy

let TailX = -150 // 80 // X location of tail
let TailLength = 0 // 5 // length of tail (smaller # = longer tail)
let TailAngle = -20 // 20 //  Y of first control point of tail
let TailBend = -90 // 83 // X of second control point of tail

let FX1 = 180 // 20 // X location of fly 1
let FY1 = 40 // 20 // Y location of fly 1
let FX2 = 180 // 180 // X location of fly 2
let FY2 = 195 // 180 // Y location of fly 2


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(NINE_PORTRAIT);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(220, 239, 250); // light honeydew green colour
}


function my_symbol() { // draw function
  
// CHEESE:
  strokeWeight(2);
  stroke(163, 141, 11); // cheese line colour
  fill(252, 231, 111); // cheese fill colour

  if(Mold){ // yucky cheese mold
    fill(169, 212, 129);
  }

  beginShape(); // body of cheese
  vertex(CheeseX-35, CheeseY-50);
  quadraticVertex(CheeseX-10, CheeseY-50, CheeseX, CheeseY-30);
  vertex(CheeseX, CheeseHeight); // changes cheese thickness (right)
  vertex(CheeseX-95, CheeseHeight); // changes cheese thickness (left)
  vertex(CheeseX-100, CheeseY-20);
  endShape(CLOSE);

  line(CheeseX-100, CheeseY-20, CheeseX, CheeseY-30); // line through middle of cheese
  
// offline test

  // CHEESE HOLES:
  fill(224, 192, 74); // cheese shading colour (for holes)
  ellipse(CheeseX-30, CheeseY-15, 10, 5);
  ellipse(CheeseX-55, CheeseY-35, 20, 5);
  ellipse(CheeseX-55, CheeseY-10, 20, 10);
  ellipse(CheeseX-85, CheeseY-15, 10, 5);
  ellipse(CheeseX-30, CheeseY-40, 10, 5);
  ellipse(CheeseX, CheeseY-15, 17, 15); // righthand side hole

  // NEGATIVE SPACE (for cheese holes on border of cheese body)
  fill(220, 239, 250) // background colour
  ellipse(CheeseX+2, CheeseY-15, 12, 14); // to cover half the righthand side ellipse
  noStroke();
  rect(CheeseX+1, CheeseY-25, 8.5, 30); // to remove the stroke of half the above ellipse

  // CHEESE BITES
  if(ShowBites){
    ellipse(CheeseX-95, CheeseY-11, BiteSize, BiteSize-6);
    ellipse(CheeseX-85, CheeseY-30, BiteSize+5, BiteSize-5);
  }


// RAT:
  stroke(255); // whisker colour
  noFill();

  beginShape(); // left side whiskers :)
  vertex(RatX-15, RatY+56)
  vertex (RatX-7, RatY+52);
  vertex (RatX-15, RatY+50);
  endShape();

  beginShape(); // right side whiskers
  vertex(RatX+15, RatY+56)
  vertex (RatX+7, RatY+52);
  vertex (RatX+15, RatY+50);
  endShape();

  strokeWeight(4);
  stroke(252, 199, 189); // tail colour

  beginShape(); // tail
  vertex(TailX, TailLength);
  bezierVertex(TailBend, RatY-41, RatX, TailAngle, RatX, RatY-40);
  endShape();

  strokeWeight(2);
  stroke(50, 54, 53); // rat stroke colour
  fill(211, 219, 217); // rat fill colour

  triangle(RatX-20, RatY+25, RatX+20, RatY+25, NoseX, NoseY+65); // rat head
  ellipse(RatX, RatY, Tummy, 80); // rat belly
  circle(NoseX, NoseY+63, 6); // rat nose

  stroke(0); // eye colour
  line(NoseX-7, NoseY+45, NoseX-5, NoseY+44); // left eye
  line(NoseX+5, NoseY+44, NoseX+7, NoseY+45); // right eye


  //LOCATION OF FLIES;
  DrawFly(FX1, FY1);
  DrawFly(FX2, FY2);


}

function DrawFly(FlyX, FlyY){
  
  strokeWeight(.5);
  stroke(50, 54, 53);
  fill(255);
  ellipse(FlyX-5, FlyY, 7, 5); // wing (left)
  ellipse(FlyX+5, FlyY, 7, 5); // wing (right)
  
  strokeWeight(2);
  stroke(50, 54, 53);
  fill(50, 54, 53); 
  circle(FlyX, FlyY, 2); // fly body

}