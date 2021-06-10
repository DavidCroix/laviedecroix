function init(){
    console.log('running');
    //svg
    svgLayout = document.getElementById('svghome');
    //
    drawTemperatureIcon(svgLayout,5,205,'in');
    drawTemperatureIcon(svgLayout,355,205,'out');
}

function drawTemperatureIcon(svgParent , x , y ,id){
    drawCircleClass(svgParent , new Point( x + 45, y + 45) ,40,'termo','back' + id);
    var d ='M' + (x + 35)+ ',' + (y + 20);
    d+= 'A10,10 0 0,1' + (x + 55) + ',' + ( y + 20);
    for(var yy = 20; yy <= 40; yy += 10){
        d += 'L' +(x+60)+ ','+(y + yy);
        d += 'L' +(x+60)+ ','+(y + yy +5);
        d += 'L' +(x+55)+ ','+(y + yy +5);
        d += 'L' +(x+55)+ ','+(y + yy + 10);
    }
    d+='A17,17 1 1,1' + (x + 35)+ ','+ (y+50)
    d+= 'z';
    drawPathClass(svgParent, d, null,'thermoborder');
    drawCircleClass(svgParent, new Point((x + 45),( y + 64)),12,'termot');
    drawCircleClass(svgParent, new Point((x+39),(y+50)), new Size(12,10), 'termot','tempbar'+id);
    drawTextClass(svgParent,'0&deg;', new Point((x+65),(y+85)), 'thermovalue', 'tempvalue'+id)
    
    /*<circle class="termo" cx="400" cy="250" r="40" />
             <path class="termoborder" d="M390, 225 A10,10 0 0 ,1 410, 225
              L415,225 L415, 230 L410,230 L410,235 L415, 235 L415, 240 L410,
              240 L410, 245 L415, 245 L415,250 L410, 250 L410,255
              A17,17 1 1,1 390,255
             Z"/>
             */

    
}
