const allergyDict = {
    bruschetta: ["gluten"],
    caprese_salad: ["dairy"],
    fried_calamari: ["gluten"],
    garlic_knots: ["gluten"],
    caesar_salad: ["dairy", "gluten"],
    garden_salad: ["none"],
    arugula_and_prosciutto: ["dairy"],
    margherita: ["dairy", "gluten"],
    pepperoni: ["dairy", "gluten"],
    funghi: ["dairy", "gluten"],
    quattro_formaggi: ["dairy", "gluten"],
    diavola: ["dairy", "gluten"],
    prosciutto_e_rucola: ["dairy", "gluten"],
    mare_e_monti: ["dairy", "gluten", "shellfish"],
    vegetariana: ["dairy", "gluten"],
    bianca_al_prosciutto: ["dairy", "gluten"],
    quattro_formaggi_bianca: ["dairy", "gluten"],
    funghi_bianca: ["dairy", "gluten"],
    pesto_bianca: ["dairy", "gluten", "nuts"],
    spinach_and_ricotta_bianca: ["dairy", "gluten"],
    vegetarian_bianca: ["dairy", "gluten"],
    tiramisu: ["dairy", "eggs", "gluten"],
    cannoli: ["dairy", "gluten"],
    panna_cotta: ["dairy"],
    amaretto_disaronno: ["nuts"]
};


const allergyTags = document.getElementsByClassName("allergy");

console.log(allergyTags);

for (let i = 0; i < allergyTags.length; i++) {
    const element = allergyTags[i];
    console.log(element);
    element.addEventListener("mouseover", function(event) {
        console.log("Mouse over element:", event.target);
        if (allergyDict.hasOwnProperty(element.id)) {
            console.log(allergyDict[element.id]);
            displayAllergyInfo(element.id)
        }
    });
}

function displayAllergyInfo(menuItem) {
    
}