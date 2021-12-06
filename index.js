function getTotalSalaries(employes) {
    let total = 0;
    
    for(let key in employes) {
        let value = employes[key];
        total += value;
    }
    
    return total;
}
 
let employes = {
    "Pierre": 2500,
    "Marie": 5000,
    "Julien": 1200
};
let resultat = getTotalSalaries(employes);