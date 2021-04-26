var xball = {
  x: 300,
  y: 200,
  xspeed: 3,
  yspeed: -5
}
var yball = {
  x: 500,
  y: 700,
  xspeed:14,
  yspeed: -12
}
var zball = {
  x: 12,
  y: 40,
  xspeed:1,
  yspeed: -1
}
var aball = {
  x: 400,
  y: 40,
  xspeed:5,
  yspeed: -3
}
var bball = {
  x: 300,
  y: 600,
  xspeed:10,
  yspeed: -6
}
var cball = {
  x: 1,
  y: 30,
  xspeed:8,
  yspeed: -3
}
var dball = {
  x: 20,
  y: 300,
  xspeed:3,
  yspeed: -4
}

var eball = {
  x: 20,
  y: 200,
  xspeed:5,
  yspeed: 5
}

var fball = {
  x: 420,
  y: 10,
  xspeed:3,
  yspeed: 3
}

var gball = {
  x: 100,
  y: 200,
  xspeed:7,
  yspeed: 4
}

var hball = {
  x: 40,
  y: 160,
  xspeed:20,
  yspeed: 10
}

var iball = {
  x: 420,
  y: 10,
  xspeed:2,
  yspeed: 2
}

var jball = {
  x: 100,
  y: 10,
  xspeed:-1,
  yspeed:-4
}

var kball = {
  x: 100,
  y: 10,
  xspeed:2,
  yspeed:4
}

var lball = {
  x: 100,
  y: 10,
  xspeed:3,
  yspeed:1
}
  
function setup() {
  createCanvas(windowWidth,windowHeight);
  noFill();
  
}

function draw() {
  background(120,130,120);
  move();
  bounce();
  display();

  
}

function move () {
  xball.x = xball.x + xball.xspeed;
  xball.y = xball.y + xball.yspeed;
  
  yball.x = yball.x + yball.xspeed;
  yball.y = yball.y + yball.yspeed;

  zball.x = zball.x + zball.xspeed;
  zball.y = zball.y + zball.yspeed;
  
  aball.x = aball.x + aball.xspeed;
  aball.y = aball.y + aball.yspeed;
  
  bball.x = bball.x + bball.xspeed;
  bball.y = bball.y + bball.yspeed;
  
  cball.x = cball.x + cball.xspeed;
  cball.y = cball.y + cball.yspeed;
  
  dball.x = dball.x + dball.xspeed;
  dball.y = dball.y + dball.yspeed;
  
  eball.x = eball.x + eball.xspeed;
  eball.y = eball.y + eball.yspeed;
  
  fball.x = fball.x + fball.xspeed;
  fball.y = fball.y + fball.yspeed;
  
  gball.x = gball.x + gball.xspeed;
  gball.y = gball.y + gball.yspeed;
  
  hball.x = hball.x + hball.xspeed;
  hball.y = hball.y + hball.yspeed;
  
  iball.x = iball.x + iball.xspeed;
  iball.y = iball.y + iball.yspeed;
  
  jball.x = jball.x + jball.xspeed;
  jball.y = jball.y + jball.yspeed;
  
  kball.x = kball.x + kball.xspeed;
  kball.y = kball.y + kball.yspeed;
  
  lball.x = lball.x + lball.xspeed;
  lball.y = lball.y + lball.yspeed;
}

function bounce () {
  
  if (xball.x > width || xball.x < 0) {
    xball.xspeed = xball.xspeed * -1;}
  if (xball.y > height || xball.y < 0) {
    xball.yspeed = xball.yspeed * -1;}
  
  if (yball.x > width || yball.x < 0) {
    yball.xspeed = yball.xspeed * -1;}
  if (yball.y > height || yball.y < 0) {
    yball.yspeed = yball.yspeed * -1;}
  
   if (zball.x > width || zball.x < 0) {
    zball.xspeed = zball.xspeed * -1;}
  if (zball.y > height || zball.y < 0) {
    zball.yspeed = zball.yspeed * -1;}
  
  if (aball.x > width || aball.x < 0) {
    aball.xspeed = aball.xspeed * -1;}
  if (aball.y > height || aball.y < 0) {
    aball.yspeed = aball.yspeed * -1;}
  
 if (bball.x > width || bball.x < 0) {
    bball.xspeed = bball.xspeed * -1;}
  if (bball.y > height || bball.y < 0) {
    bball.yspeed = bball.yspeed * -1;} 
  
  if (cball.x > width || cball.x < 0) {
    cball.xspeed = cball.xspeed * -1;}
  if (cball.y > height || cball.y < 0) {
    cball.yspeed = cball.yspeed * -1;}
  
  if (dball.x > width || dball.x < 0) {
    dball.xspeed = dball.xspeed * -1;}
  if (dball.y > height || dball.y < 0) {
    dball.yspeed = dball.yspeed * -1;}
  
  if (eball.x > width || eball.x < 0) {
    eball.xspeed = eball.xspeed * -1;}
  if (eball.y > height || eball.y < 0) {
    eball.yspeed = eball.yspeed * -1;}
  
  if (fball.x > width || fball.x < 0) {
    fball.xspeed = fball.xspeed * -1;}
  if (fball.y > height || fball.y < 0) {
    fball.yspeed = fball.yspeed * -1;}
  
   if (gball.x > width || gball.x < 0) {
    gball.xspeed = gball.xspeed * -1;}
  if (gball.y > height || gball.y < 0) {
    gball.yspeed = gball.yspeed * -1;}
  
   if (hball.x > width || hball.x < 0) {
    hball.xspeed = hball.xspeed * -1;}
  if (hball.y > height || hball.y < 0) {
    hball.yspeed = hball.yspeed * -1;}
  
   if (iball.x > width || iball.x < 0) {
    iball.xspeed = iball.xspeed * -1;}
  if (iball.y > height || iball.y < 0) {
    iball.yspeed = iball.yspeed * -1;}
  
   if (jball.x > width || jball.x < 0) {
    jball.xspeed = jball.xspeed * -1;}
  if (jball.y > height || jball.y < 0) {
    jball.yspeed = jball.yspeed * -1;}
  
   if (kball.x > width || kball.x < 0) {
    kball.xspeed = kball.xspeed * -1;}
  if (kball.y > height || kball.y < 0) {
    kball.yspeed = kball.yspeed * -1;}
  
   if (lball.x > width || lball.x < 0) {
    lball.xspeed = lball.xspeed * -1;}
  if (lball.y > height || lball.y < 0) {
    lball.yspeed = lball.yspeed * -1;}
}
function display (){
  noStroke()
  
   fill(4,40,10);
  ellipse (jball.x,jball.y,600,600);
  
  fill(40,70,20);
  ellipse (xball.x,xball.y,100,100);
  
   fill(100,180,100);
  ellipse (iball.x,iball.y,300,300);
  
    fill(30,50,0);
  ellipse (yball.x,yball.y,50,50);
  
   fill(0,100,);
  ellipse (zball.x,zball.y,200,200);
  
  fill(20,60,);
  ellipse (aball.x,aball.y,150,150);
  
  fill(0,60,20);
  ellipse (bball.x,bball.y,75,75);
  
  fill(20,60,3);
  ellipse (cball.x,cball.y,250,250);
  
  fill(25,80,20);
  ellipse (dball.x,dball.y,55,55);
  
  fill(134,180,150);
  ellipse (eball.x,eball.y,80,80);
  
  fill(125,180,120);
  ellipse (fball.x,fball.y,120,120);
  
   fill(3,15,5);
  ellipse (gball.x,gball.y,90,90);
  
   fill(5,20,7);
  ellipse (hball.x,hball.y,20,20);
  
  fill(5,101,35);
  ellipse (kball.x,kball.y,30,30);
  
  fill(35,90,40);
  ellipse (lball.x,lball.y,150,150);
}

function windowResize(){
  resizeCanvus(windowHeight,windowWidth);
}