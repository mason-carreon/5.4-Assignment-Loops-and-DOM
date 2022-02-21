
document.getElementById("p2").style.color = "blue";
document.getElementById("p2").style.fontFamily = "Arial";
document.getElementById("p2").style.fontSize = "larger";

const names = ["Floyd", "Zay", "Mason"];

for (name of names) {
    console.log (name);
    if (name === "Mason") {
        console.log ("Mason is in the list!");
        break;
    }
}

let loading = 0;

while (loading < 100) {
    console.log("Website still loading");

    loading++;
}