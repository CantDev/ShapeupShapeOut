const container = document.getElementById('drawingSpace');
squareSideLength = document.getElementById('squareSideLength');
radiusForCirc = document.getElementById('raduisForCirc');
triSideLength = document.getElementById('triSideLength')
buttonForRect = document.getElementById('buttonForRect');
buttonForSqr = document.getElementById('buttonForSqr');
buttonForCirc = document.getElementById('buttonForCirc');
buttonForTri = document.getElementById('buttonForTri');

buttonForSqr.addEventListener('click', () => new Square(document.getElementById('squareSideLength').value));
buttonForRect.addEventListener('click', () => new Rectangle(document.getElementById('widthRect').value, document.getElementById('heightRect').value));
buttonForCirc.addEventListener('click', () => new Circle(document.getElementById('radiusForCirc').value));
buttonForTri.addEventListener('click', () => new Triangle(document.getElementById('triSideLength').value));


class Shape {
    constructor (){
        this.shape = document.createElement('div')
        //container.appendChild(this.shape)
        this.shape.addEventListener('click', () => this.showStats());
        this.shape.addEventListener('dblclick', () => container.removeChild(this.shape));
   
    }
    addShape() {
        container.appendChild(this.shape);
        
    }
    showStats (){
        shapeName.innertext = `Shape Name: ${this.shape.name}`;
        shapeWidth.innertext = `Shape Width: ${this.shape.width}`;
        shapeHeight.innertext = `Shape Height: ${this.shape.height}`;
        shapeRadius.innertext = `Shape Height: ${this.shape.radius}`;
        shapeArea.innertext = `Shape Area: ${this.shape.area}`;
        shapePerimeter.innertext = `Perimeter: ${this.shape.perimeter}`
    }
}
class Rectangle extends Shape {
    constructor(widthRect, heightRect) {
        super();
        this.widthRect = widthRect;
        this.heightRect = heightRect;
        this.shape.name = 'Rectangle';
        this.showStats();
        this.drawShape();
        if (this.heightRect === this.widthRect) {
            alert('that is a square...');
        } else {
            this.addShape();
        }
    }
    drawShape() {
        this.shape.classList.add('rectangle');
        this.shape.style.height = `${this.heightRect}px`;
        this.shape.style.width = `${this.widthRect}px`;
        this.shape.style.top = `${Math.floor(Math.random() * (600 - this.heightRect))}px`;
        this.shape.style.left = `${Math.floor(Math.random() * (600 - this.heightRect))}px`;
    }
    showStats() {
        this.shape.height = this.heightRect;
        this.shape.width = this.widthRect;
        this.shape.radius = 'N/A';
        this.shape.area = this.widthRect * this.heightRect;
        this.shape.perimeter = this.widthRect + this.heightRect * 2;
    }
}

class Square extends Shape {
    constructor(squareSideLength) {
        super();
        this.squareSideLength = squareSideLength;
        this.shape.name = 'Square';
        this.showStats();
        this.drawShape();
        this.addShape();

       
    }
    drawShape() {
        this.shape.classList.add('square');
        this.shape.style.height = `${this.squareSideLength}px`;
        this.shape.style.width = `${this.squareSideLength}px`;
        this.shape.style.top = `${Math.floor(Math.random() * (600 - this.squareSideLength))}px`;
        this.shape.style.left = `${Math.floor(Math.random() * (600 - this.squareSideLength))}px`;
    }
    showStats() {
        this.shape.height = this.squareSideLength;
        this.shape.width = this.squareSideLength;
        this.shape.radius = 'N/A';
        this.shape.area = this.squareSideLength ** 2
        this.shape.perimeter = this.squareSideLength * 4;
    }
}
class Circle extends Shape {
    constructor(radiusForCirc) {
        super();
        this.radiusForCirc = radiusForCirc;
        this.shape.name = 'Circle';
        this.showStats();
        this.drawShape();
        this.addShape();

       
    }
    drawShape() {
        this.shape.classList.add('circle');
        this.shape.style.height = `${document.getElementById('radiusForCirc').value}px`;
        this.shape.style.width = `${document.getElementById('radiusForCirc').value}px`;
        this.shape.style.top = `${Math.floor(Math.random() * (600 - this.radiusForCirc))}px`;
        this.shape.style.left = `${Math.floor(Math.random() * (600 - this.radiusForCirc))}px`;
    }
    showStats() {
        this.shape.height = this.radiusForCirc * 2;
        this.shape.width = this.radiusForCirc * 2;
        this.shape.radius = this.radiusForCirc;
        this.shape.area = (Math.PI * this.radiusForCirc ** 2);
        this.shape.area = this.shape.area.toFixed(2);
        this.shape.perimeter = (2 * Math.PI * this.radiusForCirc);
        this.shape.perimeter = this.shape.perimeter.toFixed(2);
    }
}
class Triangle extends Shape {
    constructor(triSideLength) {
        super();
        this.triSideLength = triSideLength;
        this.shape.name = 'Triangle';
        this.doMath();
        this.drawShape();
        this.addShapeToDOM();
    }

    drawShape() {
        this.shape.classList.add('triangle');
        this.shape.style.borderTopWidth = `${document.getElementById('triSideLength').value}px`;
        this.shape.style.borderRightWidth = `${document.getElementById('triSideLength').value}px`;
        this.shape.style.top = `${Math.floor(Math.random() * (600 - this.triSideLength))}px`;
        this.shape.style.left = `${Math.floor(Math.random() * (600 - this.triSideLength))}px`;
    }

    doMath() {
        this.shape.radius = 'N/A';
        this.shape.height = this.triSideLength;
        this.shape.width = this.triSideLength;
        this.shape.area = 0.5 * this.triSideLength * this.triSideLength;
        this.shape.perimeter = 2 * this.triSideLength + Math.sqrt(2) * this.triSideLength;
        this.shape.perimeter = this.shape.perimeter.toFixed(2);
    }
}