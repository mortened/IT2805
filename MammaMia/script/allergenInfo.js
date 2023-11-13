const allergyDict = {
    bruschetta: ["Gluten"],
    caprese_salad: ["Dairy"],
    fried_calamari: ["Gluten"],
    garlic_knots: ["Gluten"],
    caesar_salad: ["Dairy", "Gluten"],
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
            //Postion of the element relative to the viewport
            const elementRect = element.getBoundingClientRect();
            const X = elementRect.left + window.scrollX;
            const Y = elementRect.top + window.scrollY;
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
        allergyDiv.style.color = "#FFFFFF";
        allergyDiv.style.borderRadius = "10px";

        const allergyHeading = document.createElement("p");
        allergyHeading.style.fontSize = "35px";
        allergyHeading.textContent = "Allergies";
        allergyDiv.appendChild(allergyHeading);

        const closeX = document.createElement("h1");
        closeX.textContent = "x";
        closeX.style.margin = "0";
        closeX.style.fontSize = "20px";
        closeX.style.float = "right";
        closeX.style.cursor = "pointer";
        closeX.style.color = "black";
        closeX.style.width = "30px"
        closeX.style.height = "30px"
        closeX.style.textAlign = "right";
        closeX.style.marginTop = "-10px";
        
        allergyDiv.appendChild(closeX);
        closeX.addEventListener("click", function(event) {
            event.stopPropagation();
            hideAllergyInfo();
        });


        const allergies = allergyDict[menuItem];
        const allergyList = document.createElement("ul");
        allergyList.style.margin = "10px 0 10px 0";
        allergyDiv.appendChild(allergyList);
        allergies.forEach(allergy => {
            const listItem = document.createElement("li");
            listItem.style.fontSize = "30px";
            // const listItemText = document.createElement("p");
            // listItemText.style.margin = "10px 0 10px 0";
            // listItemText.style.width = "fit-content";
            // listItemText.style.fontSize = "30px";
            // listItemText.style.float = "left";
            const allergyIcon = document.createElement("img");
            allergyIcon.src = "images/" + allergy + ".svg";
            allergyIcon.style.width = "30px";
            allergyIcon.style.height = "30px";
            allergyIcon.style.float = "right";
            // allergyDiv.appendChild(allergyIcon);
            listItem.appendChild(allergyIcon);
            listItem.textContent = allergy;
            // listItemText.textContent = allergy;
            // listItem.appendChild(listItemText);
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

