var parentElement = document.getElementById('gallery');
var childElement;
var actualImage;
var appendChildElement;

for (let path of paths) {
    childElement = document.createElement('div');
    childElement.className = "photo";
    appendChildElement = parentElement.appendChild(childElement)

    actualImage = document.createElement('img');
    actualImage.src = "../images/pc/" + parentFolder + "/" + path;
    actualImage.alt = path;
    actualImage.id = path;
    actualImage.setAttribute("onclick", "makeFullScreen(\"" + path + "\")");
    appendChildElement.appendChild(actualImage);
    // appendChildElement.innerHTML = "<img id=\"" + path + "\" src=\"../images/pc/landscapes/" + path + "\" alt=\"" + path + "\" onclick=\"makeFullScreen('" + path + "');\">";
}


