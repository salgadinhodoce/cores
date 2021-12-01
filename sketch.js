
function setup() {
  createCanvas(400,400);
  
}

function draw() 
{

  if (keyIsDown(LEFT_ARROW)) 
  {
    background("blue");

  }

  if (keyIsDown(UP_ARROW)){

    background("green");
  }


  if (keyIsDown(DOWN_ARROW)){

    background("yellow");
  }
}
    

