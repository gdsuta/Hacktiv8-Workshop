var ironMan = {
    id: "MarvelHero001",
    name: "Tony Stark",
    bestfriend: "MadDog",
    age: 35,
    hobbies: [
        "workout",
        "flying",
        "dating",
        "making out",
        {
            sports: ["badminton", "making robot"]
        }
    ],
    address: {
        street: "Imam Bonjol",
        province: "Bali",
        city: "Denpasar",
        zipCode: 80119
    }
};

console.log(ironMan.hobbies[4].sports[1]);