//Menu items and their respective allergens if they have one
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

//Access all menu items with class "allergy"
const allergyTags = document.getElementsByClassName("allergy");
//Declare the popup div
let allergyDiv;

//Add event listener to each menu item
for (let i = 0; i < allergyTags.length; i++) {
    const element = allergyTags[i];
    element.addEventListener("click", function(event) {
        //Prevent the click event from bubbling up to the document
        event.stopPropagation();
        //Hide any existing allergy info
        hideAllergyInfo();
        //If the menu item has an allergy, display the allergy info
        if (allergyDict.hasOwnProperty(element.id)) {
            //Get the position of the menu item
            const elementRect = element.getBoundingClientRect();
            const X = elementRect.left + window.scrollX;
            const Y = elementRect.top + window.scrollY;
            //Display the allergy info
            displayAllergyInfo(element.id, X, Y)
        }
    });
}

//Hide the allergy info if the user clicks anywhere else on the document other than the popup div
document.addEventListener("click", function(){
    hideAllergyInfo();
})

//Display the allergy info for the menu item at the given position
function displayAllergyInfo(menuItem, X, Y) {

   
    if(allergyDict.hasOwnProperty(menuItem)){
        //Create the popup div
        allergyDiv = document.createElement("div");
        //Set the style of the popup div
        allergyDiv.style.position = "absolute";
        allergyDiv.style.left = X-180 + "px";
        allergyDiv.style.top = Y + "px";
        allergyDiv.style.width = "180px";
        allergyDiv.style.height = "fit-content";
        allergyDiv.style.padding = "10px";
        allergyDiv.style.backgroundColor = "#D36D6D";
        allergyDiv.style.color = "#FFFFFF";
        allergyDiv.style.borderRadius = "10px";

        //Create the allergy info
        const allergyHeading = document.createElement("p");
        allergyHeading.style.fontSize = "35px";
        allergyHeading.style.margin = "0";
        allergyHeading.style.width = "fit-content";
        allergyHeading.textContent = "Allergies";
        allergyDiv.appendChild(allergyHeading);

        //Create the close button
        const closeX = document.createElement("h1");
        closeX.textContent = "x";
        closeX.style.margin = "0";
        closeX.style.fontSize = "20px";
        closeX.style.float = "right";
        closeX.style.cursor = "pointer";
        closeX.style.color = "black";
        closeX.style.width = "30px"
        closeX.style.height = "30px"
        closeX.style.textAlign = "center";
        closeX.style.position = "absolute";
        closeX.style.top = "0";
        closeX.style.right = "0";
        
        //Add the close button to the popup div
        allergyDiv.appendChild(closeX);
        //Add event listener to the close button that closes the div
        closeX.addEventListener("click", function(event) {
            event.stopPropagation();
            hideAllergyInfo();
        });

        //Create the list of allergies for the menu item
        const allergies = allergyDict[menuItem];
        const allergyList = document.createElement("ul");
        allergyList.style.margin = "10px 0 10px 0";
        allergyDiv.appendChild(allergyList);
        //Add each allergy to the list
        allergies.forEach(allergy => {
            const listItem = document.createElement("li");
            listItem.style.fontSize = "30px";
            listItem.textContent = allergy;
            allergyList.appendChild(listItem);
        });
        //Add the popup div to the document
        document.body.appendChild(allergyDiv);
        //Prevent the click event from bubbling up to the document
        allergyDiv.addEventListener("click", function(event) {
            event.stopPropagation();
        });
    }
}

//Hide the allergy info
function hideAllergyInfo(){
    if(allergyDiv){
        allergyDiv.remove();
    }
}

