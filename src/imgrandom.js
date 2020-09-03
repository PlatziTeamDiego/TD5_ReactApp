export function skillAvatar() {
    const power = ["power-12", "Superhero-01", "Superhero-02", "Superhero02-01", "Superhero02-02", "Superhero02-04", "Superhero-03", "Superhero-04"];
    const weakness = ["GermsCharacter1-01", "GermsCharacter1-02", "GermsCharacter1-03", "GermsCharacter1-04", "monster-01", "monster-02", "monster-03"];
    let images = [];
    images.push("./src/assets/images/" + power[numberAll(power.length)] + ".png");
    images.push("./src/assets/images/" +  weakness[numberAll(weakness.length)] + ".png");
    return images;
}

function numberAll(size) {
    return Math.floor(Math.random() * size);
}

