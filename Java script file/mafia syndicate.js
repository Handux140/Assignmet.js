// Function to check mafia rank based on the input data
function checkMafiaRank(name, age, place_to_live, savings) {
    // Criteria for Don
    if (age > 40 && 
        (place_to_live === "Nevada" || place_to_live === "New York" || place_to_live === "Havana") && 
        savings > 10000000) {
        return `${name} is likely a mafia member with rank: Don.`;
    }
    
    // Criteria for Underboss
    if (age >= 25 && age <= 40 && 
        (place_to_live === "New Jersey" || place_to_live === "Manhattan" || place_to_live === "Nevada") && 
        savings >= 1000000 && savings <= 2000000) {
        return `${name} is likely a mafia member with rank: Underboss.`;
    }
    
    // Criteria for Capo
    if (age >= 18 && age <= 24 && 
        (place_to_live === "California" || place_to_live === "Detroit" || place_to_live === "Boston") && 
        savings < 1000000) {
        return `${name} is likely a mafia member with rank: Capo.`;
    }
    
    // If no criteria matched
    return `${name} is not suspicious.`;
}
