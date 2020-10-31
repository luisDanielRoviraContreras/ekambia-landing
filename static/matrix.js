const langs = [
    "$¥€£",
    "AIBMAKE"
];
// hello world in 92 Languages

let charSize = 18;
let fallRate = charSize / 2;
let streams;

// -------------------------------
class Char {
    constructor(value, x, y, speed, alpha) {
        this.value = value;
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.alpha = alpha
    }

    draw() {
        const flick = random(100);
        // 10 percent chance of flickering a number instead
        if (flick < 10) {
          // rgb(255 218 26)
            fill(`rgba(255, 218, 26, ${this.alpha})`);
            text(round(random(9)), this.x, this.y);
        } else {
            text(this.value, this.x, this.y);
        }

        // fall down
        // this.y = this.y > height ? 0 : this.y + this.speed;
        this.y = this.y < 0 ? height : this.y - this.speed;
    }
}

// -------------------------------------
class Stream {
    constructor(text, x) {
        this.alpha = (Math.floor(Math.random() * 100) + 0) / 100;
        const y = random(text.length);
        const speed = random(2, 8);
        this.chars = [];

        for (let i = text.length; i >= 0; i--) {
            this.chars.push(
                new Char(text[i], x, (y + text.length - i) * charSize, speed, this.alpha)
            );
        }
    }

    draw() {
        fill(`rgba(255, 218, 26, ${this.alpha})`);
        this.chars.forEach((c, i) => {
            // 30 percent chance of lit tail
            const lit = random(100);
            if (lit < 30) {
                if (i === this.chars.length - 1) {
                    // fill(255, 218, 26);
                    fill(`rgba(255, 218, 26, ${this.alpha})`);
                    // fill(alpha(255, 218, 26));
                } else {
                    // fill(120, 100, 90);
                    // fill(255, 218, 26);
                    fill(`rgba(255, 218, 26, ${this.alpha})`);
                }
            }

            c.draw();
        });
    }
}

function createStreams() {
    // create random streams from langs that span the width
    for (let i = 0; i < width; i += charSize) {
        streams.push(new Stream(random(langs), i));
    }
}

function reset() {
    streams = [];
    createStreams();
}

function setup() {
    const myCanvas = createCanvas(innerWidth, innerHeight);
    myCanvas.parent("steps")
    reset();
    frameRate(20);
    // colorMode(HSB);
    // rgb(255 218 26)
    colorMode(RGB, 255,255,255,1);
    noStroke();
    textSize(charSize);
    textFont("monospace");
    background(0);
}

function draw() {
    background(0, 0.4);
    streams.forEach((s) => s.draw());
}

function windowResized() {
    resizeCanvas(innerWidth, innerHeight);
    background(0);
    reset();
}
