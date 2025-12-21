const TwoDArray = ["Annulus", "Circle", "Circular Sector", "Circular Segment", "Distance 2D",
    "Parallelogram", "Polygons", "Rectangle", "Rhombus", "Slope", "Square", "Stadium", "Triangle Equilateral",
    "Triangle Isosceles", "Triangle Right"];

const ThreeDArray = ["Capsule", "Cone", "Cube", "Cylinder", "Distance 3D", "Frustum", "Hemisphere",
    "Prism Rectangular", "Prism Triangular", "Pyramid Frustum", "Pyramid Square", "Sphere", "Spherical Cap",
    "Spherical Segment", "Surface Area", "Tube", "Volume"];

const LawsArray = ["AAA", "AAS", "ASA", "ASS", "SAS", "SSS", "Sine", "Cosine", "Tangent", "Secant",
    "Cosecant", "Cotangent", "Law of Sines", "Law of Cosines"];

let geoButtonArray = TwoDArray;

function geoArray(choice) {
    if (choice==="2D") {
        geoButtonArray = TwoDArray;
    } else if (choice==="3D") {
        geoButtonArray = ThreeDArray;
    } else {
        geoButtonArray = LawsArray;
    }
    loadButtons();
}

function loadButtons() {
    let geoButton = "";
    for (let i=0; i<geoButtonArray.length; i++) {
        geoButton += '<button class="number">'+geoButtonArray[i]+'</button>'
    }
    document.getElementById("geoButtons").innerHTML = geoButton;
}

window.onload = loadButtons;