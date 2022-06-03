https: //usefulangle.com/post/32/moving-an-element-in-circular-path-with-css
    // https://css-tricks.com/get-value-of-css-rotation-through-javascript/
    document.addEventListener('DOMContentLoaded', function () {

        const bigCircle = document.getElementById('big-circle')
        bigCircle.style.transform = `rotate(0deg)`;
        
console.log('wa')

        function bigRotate(){
            
            var circleStyle = window.getComputedStyle(bigCircle, null);
        const bigCircleRotateMatrix = circleStyle.getPropertyValue("transform");
        // rotate(Xdeg) = matrix(cos(X), sin(X), -sin(X), cos(X), 0, 0);
        // console.log(bigCircleRotateMatrix)
        var values = bigCircleRotateMatrix.split('(')[1],
            values = values.split(')')[0],
            values = values.split(',');

        var a = values[0]; // 0.866025
        var b = values[1]; // 0.5
        var c = values[2]; // -0.5
        var d = values[3]; // 0.866025

        // console.log(b)
      
        var angle = Math.round(Math.asin(b) * (180 / Math.PI));
        //   positiveAngle = Math.abs(angle);
            console.log(angle)
        bigCircle.style.transform = `rotate(${angle+90}deg)`;
        }
     
        const bigRotateInerval = setInterval(bigRotate, 2000);
        //////////////////
    })