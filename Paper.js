class Paper{
constructor(x,y,width,height){
var  options={
isStatic:false,
restitution:0.3,
friction:0.5,
density:1.2,
}
this.body=Bodies.circle(x,y,100,options)
World.add(world,this.body);
}
display(){
   //paper.x= paperBody.position.x 
    //paper.y= paperBody.position.y 
   //  pos=paperBody
  
   fill("red");
   ellipseMode(RADIUS);
   ellipse(this.body.position.x,this.body.position.y,100,100);
   
}
}