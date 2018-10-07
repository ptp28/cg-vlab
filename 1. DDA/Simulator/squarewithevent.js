var mysquare=function(canvas,x1,y1,x2,y2)
{
    this.canvas = canvas;
    this.context = this.canvas.getContext("2d");
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.mycolor = 'grey';
    
}

mysquare.prototype.draw = function ()
{
    context.beginPath();
    context.rect(this.x1,this.y1,this.x2,this.y2);
    context.fillStyle = this.mycolor
    context.fill();
    context.strokeStyle = "black";
    context.lineWidth = 1
    context.stroke();

}