//Drug Data

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

// 1. Get all drugs that are antibiotics.
const antibiotics = drugs.filter(drug => drug.category === "Antibiotic");
console.log(antibiotics);

// 2. Return an array of drug names in lowercase.
const drugNamesLowercase = drugs.map(drug => drug.name.toLowerCase());
console.log(drugNamesLowercase);

// 3. Write a function that accepts a category and returns all drugs under that category.
function getDrugsByCategory(category) {
  return drugs.filter(drug => drug.category === category);
}
console.log(getDrugsByCategory("Analgesic"));

// 4. Log each drug’s name and its manufacturer.
drugs.forEach(drug => {
  console.log(`Drug: ${drug.name}, Manufacturer: ${drug.manufacturer}`);
});

// 5. Return all drugs that require a prescription.
const prescriptionDrugs = drugs.filter(drug => drug.isPrescriptionOnly === true);
console.log(prescriptionDrugs);

// 6. Return a new array, each item should follow the format: "Drug: [name] - [dosageMg]mg".
const drugDosageFormatted = drugs.map(drug => `Drug: ${drug.name} - ${drug.dosageMg}mg`);
console.log(drugDosageFormatted);

// 7. Write a function that returns all drugs with a stock less than 50.
function getDrugsLowStock() {
  return drugs.filter(drug => drug.stock < 50);
}
console.log(getDrugsLowStock());

// 8. Return all drugs that are not prescription-only.
const nonPrescriptionDrugs = drugs.filter(drug => !drug.isPrescriptionOnly);
console.log(nonPrescriptionDrugs);

// 9. Write a function that takes a manufacturer name and returns how many drugs are from that company.
function countDrugsByManufacturer(manufacturer) {
  return drugs.filter(drug => drug.manufacturer === manufacturer).length;
}
console.log(countDrugsByManufacturer("Pfizer"));

// 10. Use forEach() to count how many drugs are Analgesics.
let analgesicCount = 0;
drugs.forEach(drug => {
  if (drug.category === "Analgesic") {
    analgesicCount++;
  }
});
console.log(analgesicCount);
