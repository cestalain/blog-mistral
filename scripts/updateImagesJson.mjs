import fs from "fs";
import path from "path";

const __dirname = path.resolve();
const imagesDir = path.join(__dirname, "src/assets");
const outputFile = path.join(__dirname, "src/data/images.json");

// Liste des sous-catégories pour chaque catégorie
const categories = {
  aquarelle: ["DIVERS", "PAYSAGES", "MARINE", "ASIATIQUE"],
  petanque: ["CLUBS", "REGLEMENT", "RESULTATS"],
  auvergne: [],
};

function scanDirectory(dir) {
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir);
  return files.filter(
    (file) => !fs.statSync(path.join(dir, file)).isDirectory()
  );
}

function updateJson() {
  const result = {};

  for (const [category, subcategories] of Object.entries(categories)) {
    result[category] = {};

    if (subcategories.length === 0) {
      // Cas spécial pour "auvergne" qui n'a pas de sous-rubriques
      const miniaturesDir = path.join(imagesDir, category, "MINIATURES");
      const originalDir = path.join(imagesDir, category, "ORIGINAL");
      if (fs.existsSync(miniaturesDir) && fs.existsSync(originalDir)) {
        const files = scanDirectory(miniaturesDir);
        result[category] = files.map((file) => ({
          nom: path.parse(file).name,
          MINIATURES: `MINIATURES/${file}`,
          ORIGINAL: `ORIGINAL/${file}`,
        }));
      } else {
        result[category] = [];
      }
    } else {
      // Pour chaque sous-catégorie
      for (const subcategory of subcategories) {
        const miniaturesDir = path.join(
          imagesDir,
          category,
          subcategory,
          "MINIATURES"
        );
        const originalDir = path.join(
          imagesDir,
          category,
          subcategory,
          "ORIGINAL"
        );

        // Créer les répertoires s'ils n'existent pas
        if (!fs.existsSync(miniaturesDir))
          fs.mkdirSync(miniaturesDir, { recursive: true });
        if (!fs.existsSync(originalDir))
          fs.mkdirSync(originalDir, { recursive: true });

        // Scanner les fichiers dans MINIATURES
        const files = scanDirectory(miniaturesDir);
        result[category][subcategory] = files.map((file) => ({
          nom: path.parse(file).name,
          MINIATURES: `MINIATURES/${file}`,
          ORIGINAL: `ORIGINAL/${file}`,
        }));
      }
    }
  }

  // Assurez-vous que toutes les sous-catégories sont présentes, même si elles sont vides
  for (const subcategory of categories.aquarelle) {
    if (!result.aquarelle[subcategory]) {
      result.aquarelle[subcategory] = [];
    }
  }

  fs.writeFileSync(outputFile, JSON.stringify(result, null, 2));
  console.log("Fichier images.json mis à jour avec succès !");
}

updateJson();
