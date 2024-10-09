function findPlayerPosition(jerseyNumber) {
    if (jerseyNumber % 2 === 0) {
        if (jerseyNumber >= 50 && jerseyNumber <= 100) {
            return "Captain";
        }
        return "Target Attacker";
    } else {
        if (jerseyNumber > 90) {
            return "Playmaker";
        }
        if (jerseyNumber % 3 === 0 || jerseyNumber % 5 === 0) {
            return "Keeper";
        }
        return "Defender";
    }
}

// Test case
let jerseyNumber = 94;
console.log(findPlayerPosition(jerseyNumber));
