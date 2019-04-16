var mysquare=function(canvas,x1,y1,x2,y2)
{
    this.canvas = canvas;
    this.context = this.canvas.getContext("2d");
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.mycolor = 'grey';
    this.textColor = "white";

}

mysquare.prototype.draw = function ()
{
    this.context.beginPath();
    this.context.rect(this.x1,this.y1,this.x2,this.y2);
    this.context.fillStyle = this.mycolor
    this.context.fill();
    this.context.font = "18px Comic Sans MS";
    this.context.fillStyle = this.textColor;
    this.context.textAlign = "center";
    this.context.fillText(this.x1/50+","+this.y1/50,this.x1+25, this.y1+25);
    this.context.strokeStyle = "black";
    this.context.lineWidth = 1
    this.context.stroke();

}
