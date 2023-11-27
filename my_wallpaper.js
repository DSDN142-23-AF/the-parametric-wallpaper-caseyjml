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
  strokeWeight(1);
  stroke(163, 141, 11);
  fill(252, 231, 111);

  triangle(155, 120, 190, 140, 90, 150); // Cheese top
  
  beginShape(); // Cheese base
  vertex(90, 150);
  vertex(95, 170);
  vertex(190, 170);
  vertex(190, 140);
  endShape(CLOSE);

}
