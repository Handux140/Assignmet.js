function isMurder(criteria) {
    let score = 0;

    // Assign points based on the criteria
    if (criteria.cyanideInStomach) score += 50;
    if (criteria.moreThan50mgCyanide) score += 500;
    if (criteria.clearCCTV) score += 250;
    if (criteria.blurryCCTV) score += 150;
    if (criteria.twoOrMoreFingerprints) score += 100;
    if (criteria.suspiciousMovements) score += 50;
    if (criteria.cyanideInPocket) score += 750;

    // Check if it's a murder
    if (score > 1300 && criteria.clearCCTV) {
        return "It is certain that this is a murder.";
    } else {
        return "The case is not clear enough to be classified as murder.";
    }
}

// Test case
const criteria = {
    cyanideInStomach: true,
    moreThan50mgCyanide: true,
    clearCCTV: true,
    blurryCCTV: false,
    twoOrMoreFingerprints: true,
    suspiciousMovements: true,
    cyanideInPocket: true
};

console.log(isMurder(criteria));
