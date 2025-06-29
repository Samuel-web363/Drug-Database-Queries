
// DRUGS ARRAY

const drugs = [

 { id: 1, name: "Amoxicillin", category: "Antibiotic", dosageMg: 500, isPrescriptionOnly: true, stock: 120, manufacturer: "Pfizer" },

 { id: 2, name: "Paracetamol", category: "Analgesic", dosageMg: 1000, isPrescriptionOnly: false, stock: 200, manufacturer: "GSK" },

 { id: 3, name: "Ibuprofen", category: "Analgesic", dosageMg: 400, isPrescriptionOnly: false, stock: 150, manufacturer: "Bayer" },

 { id: 4, name: "Chloroquine", category: "Antimalarial", dosageMg: 250, isPrescriptionOnly: true, stock: 80, manufacturer: "Sanofi" },

 { id: 5, name: "Ciprofloxacin", category: "Antibiotic", dosageMg: 500, isPrescriptionOnly: true, stock: 70, manufacturer: "Pfizer" },

 { id: 6, name: "Loratadine", category: "Antihistamine", dosageMg: 10, isPrescriptionOnly: false, stock: 160, manufacturer: "Novartis" },

 { id: 7, name: "Metformin", category: "Antidiabetic", dosageMg: 850, isPrescriptionOnly: true, stock: 140, manufacturer: "Teva" },

 { id: 8, name: "Artemether", category: "Antimalarial", dosageMg: 20, isPrescriptionOnly: true, stock: 60, manufacturer: "Roche" },

 { id: 9, name: "Aspirin", category: "Analgesic", dosageMg: 300, isPrescriptionOnly: false, stock: 180, manufacturer: "Bayer" },

 { id: 10, name: "Omeprazole", category: "Antacid", dosageMg: 20, isPrescriptionOnly: true, stock: 90, manufacturer: "AstraZeneca" },

 { id: 11, name: "Azithromycin", category: "Antibiotic", dosageMg: 250, isPrescriptionOnly: true, stock: 50, manufacturer: "Pfizer" },

 { id: 12, name: "Cetirizine", category: "Antihistamine", dosageMg: 10, isPrescriptionOnly: false, stock: 110, manufacturer: "Novartis" },

 { id: 13, name: "Insulin", category: "Antidiabetic", dosageMg: 100, isPrescriptionOnly: true, stock: 30, manufacturer: "Novo Nordisk" },

 { id: 14, name: "Artemisinin", category: "Antimalarial", dosageMg: 100, isPrescriptionOnly: true, stock: 50, manufacturer: "GSK" },

 { id: 15, name: "Codeine", category: "Analgesic", dosageMg: 30, isPrescriptionOnly: true, stock: 20, manufacturer: "Teva" },

 { id: 16, name: "Vitamin C", category: "Supplement", dosageMg: 500, isPrescriptionOnly: false, stock: 300, manufacturer: "Nature’s Bounty" },

 { id: 17, name: "Ranitidine", category: "Antacid", dosageMg: 150, isPrescriptionOnly: false, stock: 90, manufacturer: "Sanofi" },

 { id: 18, name: "Doxycycline", category: "Antibiotic", dosageMg: 100, isPrescriptionOnly: true, stock: 40, manufacturer: "Pfizer" },

 { id: 19, name: "Tramadol", category: "Analgesic", dosageMg: 50, isPrescriptionOnly: true, stock: 45, manufacturer: "Teva" },

 { id: 20, name: "Folic Acid", category: "Supplement", dosageMg: 5, isPrescriptionOnly: false, stock: 250, manufacturer: "Nature’s Bounty" }

];



// DRUGS THAT ARE ANTIBIOTICS

const antibiotics = drugs.filter((each) => {
    return each.category === "Antibiotic";
});

console.log(antibiotics);


// DRUGS NAME IN LOWERCASE

const drugNamesLowercase = drugs.map((each) => {
    return each.name.toLowerCase();
});

console.log(drugNamesLowercase);


// DRUGS BY CATEGORY
const getDrugsByCategory = (category) => {
    return drugs.filter((each) => {
        return each.category === category;
    });
};

console.log(getDrugsByCategory("Analgesic"));


// EACH DRUGS NAME AND ITS MANUFACTURER

drugs.forEach((each) => {
    console.log(`${each.name} - ${each.manufacturer}`);
});

// RETURN ALL DRUGS THAT REQUIRE A PRESCRIPTION

const prescriptionDrugs = drugs.filter((each) => {
    return each.isPrescriptionOnly === true;
});

console.log(prescriptionDrugs);

// Return a new array: "Drug: [name] - [dosageMg]mg"

const formattedDrugs = drugs.map((each) => {
    return `Drug: ${each.name} - ${each.dosageMg}mg`;
});

console.log(formattedDrugs);


//  Write a function that returns all drugs with a stock less than 50

const getLowStockDrugs = () => {
    return drugs.filter((each) => {
        return each.stock < 50;
    });
};

console.log(getLowStockDrugs());


// Return all drugs that are not prescription-only
const nonPrescriptionDrugs = drugs.filter((each) => {
    return each.isPrescriptionOnly === false;
});

console.log(nonPrescriptionDrugs);


// Function that takes a manufacturer name and returns how many drugs are from that company

const countByManufacturer = (manufacturer) => {
    return drugs.filter((each) => {
        return each.manufacturer === manufacturer;
    }).length;
};

console.log(countByManufacturer("Pfizer")); // example


// Use forEach() to count how many drugs are Analgesics
let analgesicCount = 0;

drugs.forEach((each) => {
    if (each.category === "Analgesic") {
        analgesicCount++;
    }
});

console.log(analgesicCount);

