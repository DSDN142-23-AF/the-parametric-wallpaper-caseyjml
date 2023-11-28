//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;


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
  background(240, 255, 240); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  strokeWeight(2);
  stroke(163, 141, 11);
  fill(252, 231, 111);

  beginShape(); // Cheese
  vertex(155, 120);
  quadraticVertex(180, 120, 190, 140);
  vertex(190, 170);
  vertex(95, 170);
  vertex(90, 150);
  endShape(CLOSE);

  line(90, 150, 190, 140); // Line through middle of cheese


}
