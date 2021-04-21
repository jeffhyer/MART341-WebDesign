<!DOCTYPE html>
<html>

  <head>
    <title>Art</title>
   <meta charset="UTF-8">
   <meta name="about" content="this the page about me">
   <meta name="author" content="Jeff Hyer">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <link rel="stylesheet" type="text/css" href="./css/style.css"/>
   <link rel="stylesheet" type="text/css" href="./css/fonts.css"/>
   <link rel="stylesheet" href="./css/foundation.css">
    <style>

    body {
      background-color: #ffe9ad;
      text-align: center;
    }
      table, td, th {
        border: 1px solid black;
        color: black;
        font-family: 'Kanit';
        text-align: center;
        margin-top: 50px;
        margin-bottom: 50px;
        float: none;
      }

      table {
        border-collapse: collapse;
        width: 100%;
      }

      th, td {
        padding: 15px;
      }
    </style>

  </head>

  <body>
    <header class="">
     <div class="menu-item">
        <a href="./index.html">Home</a>
     </div>
     <div class="menu-item">
        <a href="./about.html">About</a>
     </div>
     <div class="menu-item">
        <a href="./contact.html">Contact</a>
     </div>
     <div class="menu-item">
        <a href="./menu.html">Menu</a>
     </div>
     <div class="menu-item">
        <a href="./art.html">Art</a>
     </div>
     <div class="menu-item dropdown">
        <a href="#">Partners</a>
        <div class="dropdown-content">
           <div class="dropdown-item">
              <a href="https://www.pizzahut.com">Pizza Hut</a>
           </div>
           <div class="dropdown-item">
              <a href="https://www.dominos.com/en/">Dominos</a>
           </div>
           <div class="dropdown-item">
              <a href="https://littlecaesars.com/en-us/">Little Caesars</a>
           </div>
         </div>
     </div>

  </header>

  <canvas id="myCanvas" width="200" height="100"></canvas>
  var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

// draw a line
ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke();

// draw a circle
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();

// draw text
ctx.font = "30px Arial";
ctx.fillText("HTML5 is here", 10, 150);

// stroke text
ctx.font = "30px Arial";
ctx.strokeText("GitHub is here too", 10, 250);

// write an image
var img = document.getElementById("github");
ctx.drawImage(img, 250, 150);



  </body>
</html>
