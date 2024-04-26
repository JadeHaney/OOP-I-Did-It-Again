// class Circle {
//     constructor(apple, textColor, shapeColor) {
//         this.text = apple;
//         this.textColor = textColor;
//         this.sheColor = shapeColor;
//     }ap
// }

class Shape {
    constructor(userLetters, textColor, shapeColor) {
        this.text = userLetters;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }

}

class Circle extends Shape {
    constructor(userLetters, textColor, shapeColor) {
        super(userLetters, textColor, shapeColor);
    }
    render(){
        return`
        <svg version="1.1"
        width="300" height="200"
        xmlns="htt[://www.w3.org/2000/svg">

            <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`;
    }
}

class Square {
    constructor(userLetters, textColor, shapeColor) {
        this.text = userLetters;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
}

class Triangle {
    constructor(userLetters, textColor, shapeColor) {
        this.text = userLetters;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
}

module.exports = {Circle};