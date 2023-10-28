const allergyDict = {
    bruschetta: ["Gluten"],
    caprese_salad: ["Dairy"],
    fried_calamari: ["Gluten"],
    garlic_knots: ["Gluten"],
    caesar_salad: ["Dairy", "Gluten"],
    garden_salad: ["none"],
    arugula_and_prosciutto: ["Dairy"],
    margherita: ["Dairy", "Gluten"],
    pepperoni: ["Dairy", "Gluten"],
    funghi: ["Dairy", "Gluten"],
    quattro_formaggi: ["Dairy", "Gluten"],
    diavola: ["Dairy", "Gluten"],
    prosciutto_e_rucola: ["Dairy", "Gluten"],
    mare_e_monti: ["Dairy", "Gluten", "Shellfish"],
    vegetariana: ["Dairy", "Gluten"],
    bianca_al_prosciutto: ["Dairy", "Gluten"],
    quattro_formaggi_bianca: ["Dairy", "Gluten"],
    funghi_bianca: ["Dairy", "Gluten"],
    pesto_bianca: ["Dairy", "Gluten", "Nuts"],
    spinach_and_ricotta_bianca: ["Dairy", "Gluten"],
    vegetarian_bianca: ["Dairy", "Gluten"],
    tiramisu: ["Dairy", "Eggs", "Gluten"],
    cannoli: ["Dairy", "Gluten"],
    panna_cotta: ["Dairy"],
    amaretto_disaronno: ["Nuts"]
};


const allergyTags = document.getElementsByClassName("allergy");
let allergyDiv;

for (let i = 0; i < allergyTags.length; i++) {
    const element = allergyTags[i];
    console.log(element);
    element.addEventListener("click", function(event) {
        event.stopPropagation();
        hideAllergyInfo();
        if (allergyDict.hasOwnProperty(element.id)) {
            console.log(allergyDict[element.id]);
            const X = event.clientX + window.scrollX
            const Y = event.clientY + window.scrollY
            console.log(X,Y);
            displayAllergyInfo(element.id, X, Y)
        }
    });
}

document.addEventListener("click", function(){
    hideAllergyInfo();
})


function displayAllergyInfo(menuItem, X, Y) {

    if(allergyDict.hasOwnProperty(menuItem)){

        allergyDiv = document.createElement("div");
        allergyDiv.style.position = "absolute";
        allergyDiv.style.left = X-180 + "px";
        allergyDiv.style.top = Y + "px";
        allergyDiv.style.width = "180px";
        allergyDiv.style.height = "fit-content";
        allergyDiv.style.padding = "10px";
        allergyDiv.style.backgroundColor = "#D36D6D";
        allergyDiv.style.color = "#fff";
        allergyDiv.style.borderRadius = "10px";

        const allergyHeading = document.createElement("h1");
        allergyHeading.style.margin = "0";
        allergyHeading.textContent = "Allergies";
        allergyDiv.appendChild(allergyHeading);

        const allergies = allergyDict[menuItem];
        const allergyList = document.createElement("ul");
        allergyList.style.listStyleType = "none";
        allergyList.style.padding = "0";
        allergyList.style.margin = "0";
        allergyDiv.appendChild(allergyList);
        allergies.forEach(allergy => {
            const listItem = document.createElement("li");
            const listItemText = document.createElement("h2");
            const allergyIcon = document.createElement("img");
            allergyIcon.src = "images/" + allergy + ".svg";
            allergyIcon.style.width = "50px";
            allergyIcon.style.height = "50px";
            allergyIcon.style.float = "right";
            allergyDiv.appendChild(allergyIcon);
            listItemText.textContent = allergy;
            listItem.appendChild(listItemText);
            allergyList.appendChild(listItem);
        });

        document.body.appendChild(allergyDiv);

        allergyDiv.addEventListener("click", function(event) {
            event.stopPropagation();
        });
    }
}

function hideAllergyInfo(){
    if(allergyDiv){
        allergyDiv.remove();
    }
}