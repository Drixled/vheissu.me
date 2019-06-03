// BLOTTER - Example 2
var text = new Blotter.Text("we are still here", {
  family : "'EB Garamond', serif",
  size : 27,
  fill : "#ff0000",
  paddingLeft : 40,
  paddingRight : 40
});

var material = new Blotter.LiquidDistortMaterial();

material.uniforms.uSpeed.value = 0.2;
material.uniforms.uVolatility.value = 0.15;

var blotter = new Blotter(material, {
  texts : text
});

var elem = document.getElementById("distortion-text");
var scope = blotter.forText(text);

scope.appendTo(elem);