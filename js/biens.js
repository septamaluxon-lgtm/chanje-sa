/* ==========================================================
   CONFIGURATION ET CATALOGUE CHANJE SA
   Ce fichier est le seul à modifier pour mettre à jour le site.
   ========================================================== */

const CONFIG = {
  whatsapp: "50939413064",
  // Collez ici le lien de votre catalogue automobile en ligne.
  // Tant que ce champ est vide, le bouton ouvre WhatsApp.
  catalogueAutoUrl: ""
};

/* Pour publier un bien : copiez un bloc ci-dessous, retirez les // et
   remplissez-le. Déposez la photo dans le dossier images/photos/.

   categorie : "maisons" | "voitures" | "terrains" | "telephones" | "electromenager" | "bijoux"
   photo : votre propre photo (images/photos/...), prioritaire si elle existe
   web : photo de secours en ligne (Unsplash)
   art : (facultatif) illustration affichée tant que la photo n'est pas ajoutée
   conditions : "Vente" | "Échange" | "Vente et échange"
   details : liste libre, chaque ligne s'affiche telle quelle sur la fiche.
*/
const BIENS = [
  /* ---------- Voitures ---------- */
  { categorie: "voitures", reference: "VOI-001", titre: "Berline", art: "art-car",
    photo: "images/photos/voi-001.jpg",
    web: "https://images.unsplash.com/photo-1546614042-7df3c24c9e5d?auto=format&fit=crop&w=1000&q=80", valeur: "Sur demande", conditions: "Vente et échange",
    details: [["Type", "Berline"], ["Marque et modèle", "À préciser"], ["Année", "À préciser"], ["Recherché en échange", "Maison, terrain ou autre bien"]] },
  { categorie: "voitures", reference: "VOI-002", titre: "SUV / 4x4", art: "art-suv",
    photo: "images/photos/voi-002.jpg",
    web: "https://images.unsplash.com/photo-1622893288761-823ba60f17a6?auto=format&fit=crop&w=1000&q=80", valeur: "Sur demande", conditions: "Vente et échange",
    details: [["Type", "SUV / 4x4"], ["Marque et modèle", "À préciser"], ["Année", "À préciser"], ["Recherché en échange", "Maison, terrain ou autre bien"]] },
  { categorie: "voitures", reference: "VOI-003", titre: "Pick-up", art: "art-pickup",
    photo: "images/photos/voi-003.jpg",
    web: "https://images.unsplash.com/photo-1551830820-330a71b99659?auto=format&fit=crop&w=1000&q=80", valeur: "Sur demande", conditions: "Vente et échange",
    details: [["Type", "Pick-up"], ["Marque et modèle", "À préciser"], ["Année", "À préciser"], ["Recherché en échange", "Maison, terrain ou autre bien"]] },

  /* ---------- Maisons (3 niveaux) ---------- */
  { categorie: "maisons", reference: "MAI-001", titre: "Maison de plain-pied", art: "art-house1",
    photo: "images/photos/mai-001.jpg",
    web: "https://images.unsplash.com/photo-1683717455768-4572af43ed3e?auto=format&fit=crop&w=1000&q=80", valeur: "Sur demande", conditions: "Vente et échange",
    details: [["Niveau", "Niveau 1 · rez-de-chaussée"], ["Chambres", "À préciser"], ["Recherché en échange", "Terrain ou véhicule"]] },
  { categorie: "maisons", reference: "MAI-002", titre: "Maison à étage", art: "art-house2",
    photo: "images/photos/mai-002.jpg",
    web: "https://images.unsplash.com/photo-1762374974129-f9266d9c4efc?auto=format&fit=crop&w=1000&q=80", valeur: "Sur demande", conditions: "Vente et échange",
    details: [["Niveau", "Niveau 2 · rez-de-chaussée + étage"], ["Chambres", "À préciser"], ["Recherché en échange", "Terrain ou véhicule"]] },
  { categorie: "maisons", reference: "MAI-003", titre: "Villa haut standing", art: "art-villa",
    photo: "images/photos/mai-003.jpg",
    web: "https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?auto=format&fit=crop&w=1000&q=80", valeur: "Sur demande", conditions: "Vente et échange",
    details: [["Niveau", "Niveau 3 · haut standing"], ["Chambres", "À préciser"], ["Recherché en échange", "Terrain, véhicule ou autre bien de valeur"]] },

  /* ---------- Terrains ---------- */
  { categorie: "terrains", reference: "TER-001", titre: "Terrain aux arbres fruitiers", art: "art-orchard",
    photo: "images/photos/ter-001.jpg",
    web: "https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=1800&q=80", valeur: "Sur demande", conditions: "Vente et échange",
    details: [["Particularité", "Arbres fruitiers sur la parcelle"], ["Superficie", "À préciser"], ["Documents", "À préciser"], ["Recherché en échange", "Maison ou véhicule"]] },

  /* ---------- Téléphones et ordinateurs ---------- */
  { categorie: "telephones", reference: "TEL-001", titre: "Samsung", art: "art-android",
    photo: "images/photos/tel-001.jpg",
    web: "https://images.unsplash.com/photo-1592890288564-76628a30a657?auto=format&fit=crop&w=1000&q=80", valeur: "Sur demande", conditions: "Vente et échange",
    details: [["Type", "Téléphone Samsung"], ["Modèle", "À préciser"], ["Stockage", "À préciser"], ["État", "À préciser"]] },
  { categorie: "telephones", reference: "TEL-002", titre: "iPhone", art: "art-iphone",
    photo: "images/photos/tel-002.jpg",
    web: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=1000&q=80", valeur: "Sur demande", conditions: "Vente et échange",
    details: [["Type", "Téléphone iPhone"], ["Modèle", "À préciser"], ["Stockage", "À préciser"], ["État", "À préciser"]] },
  { categorie: "telephones", reference: "INF-001", titre: "Laptop", art: "art-laptop",
    photo: "images/photos/inf-001.jpg",
    web: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1000&q=80", valeur: "Sur demande", conditions: "Vente et échange",
    details: [["Type", "Ordinateur portable"], ["Marque et modèle", "À préciser"], ["Mémoire / stockage", "À préciser"], ["État", "À préciser"]] },

  /* ---------- Électroménager ---------- */
  { categorie: "electromenager", reference: "ELE-001", titre: "Réfrigérateur", art: "art-fridge",
    photo: "images/photos/ele-001.jpg",
    web: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1000&q=80", valeur: "Sur demande", conditions: "Vente et échange",
    details: [["Type", "Réfrigérateur"], ["Marque et capacité", "À préciser"], ["État", "À préciser"]] },
  { categorie: "electromenager", reference: "ELE-002", titre: "Four", art: "art-oven",
    photo: "images/photos/ele-002.jpg",
    web: "https://images.unsplash.com/photo-1623114112815-74a4b9fe505d?auto=format&fit=crop&w=1000&q=80", valeur: "Sur demande", conditions: "Vente et échange",
    details: [["Type", "Four"], ["Marque et modèle", "À préciser"], ["État", "À préciser"]] },
  { categorie: "electromenager", reference: "ELE-003", titre: "Machine à laver", art: "art-washer",
    photo: "images/photos/ele-003.jpg",
    web: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=1000&q=80", valeur: "Sur demande", conditions: "Vente et échange",
    details: [["Type", "Machine à laver"], ["Marque et capacité", "À préciser"], ["État", "À préciser"]] },

  /* ---------- Bijoux ---------- */
  { categorie: "bijoux", reference: "BIJ-001", titre: "Bague", art: "art-ring",
    photo: "images/photos/bij-001.jpg",
    web: "https://images.unsplash.com/photo-1598560917807-1bae44bd2be8?auto=format&fit=crop&w=1000&q=80", valeur: "Sur demande", conditions: "Vente et échange",
    details: [["Type", "Bague"], ["Matière", "À préciser"], ["Poids / taille", "À préciser"]] },
  { categorie: "bijoux", reference: "BIJ-002", titre: "Chaîne en or", art: "art-chain",
    photo: "images/photos/bij-002.jpg",
    web: "https://images.unsplash.com/photo-1611107683227-e9060eccd846?auto=format&fit=crop&w=1000&q=80", valeur: "Sur demande", conditions: "Vente et échange",
    details: [["Type", "Chaîne"], ["Matière", "Or"], ["Poids / longueur", "À préciser"]] },
];

/* Catégories : l'ordre ici est l'ordre des onglets.
   court : texte de l'onglet. art / ph : illustration et couleur de secours. */
const CATEGORIES = {
  maisons: {
    court: "Maisons", titre: "Maisons et propriétés",
    texte: "Retrouvez ici les maisons et propriétés proposées à la vente ou à l'échange, avec photos et caractéristiques.",
    art: "art-house", ph: "ph-house", photo: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=82",
    champs: ["Nom ou référence", "Localisation", "Description", "Nombre de chambres", "État général", "Valeur estimée", "Conditions", "Bien recherché en échange"]
  },
  voitures: {
    court: "Voitures", titre: "Voitures et véhicules",
    texte: "Les véhicules disponibles à la vente ou à l'échange, avec toutes les informations pour comparer.",
    art: "art-car", ph: "ph-car", photo: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1200&q=82",
    champs: ["Nom ou référence", "Marque et modèle", "Année", "Kilométrage", "État du véhicule", "Valeur estimée", "Conditions", "Bien recherché en échange"]
  },
  terrains: {
    court: "Terrains", titre: "Terrains et parcelles",
    texte: "Les terrains et parcelles à vendre ou à échanger, avec superficie, localisation et documents disponibles.",
    art: "art-land", ph: "ph-land", photo: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1400&q=82",
    champs: ["Nom ou référence", "Localisation", "Superficie", "Description", "Documents disponibles", "Valeur estimée", "Conditions", "Bien recherché en échange"]
  },
  telephones: {
    court: "Téléphones et PC", titre: "Téléphones et ordinateurs",
    texte: "Téléphones et ordinateurs à vendre ou à échanger.",
    art: "art-android", ph: "ph-tech", photo: "",
    champs: ["Marque et modèle", "Stockage", "État", "Accessoires fournis", "Valeur estimée", "Conditions", "Bien recherché en échange"]
  },
  electromenager: {
    court: "Électroménager", titre: "Électroménager",
    texte: "Réfrigérateurs, fours, machines à laver et autres appareils à vendre ou à échanger.",
    art: "art-fridge", ph: "ph-home", photo: "",
    champs: ["Type d'appareil", "Marque et capacité", "État", "Valeur estimée", "Conditions", "Bien recherché en échange"]
  },
  bijoux: {
    court: "Bijoux", titre: "Bijoux",
    texte: "Bagues, chaînes en or et autres bijoux à vendre ou à échanger.",
    art: "art-ring", ph: "ph-gold", photo: "",
    champs: ["Type de bijou", "Matière", "Poids", "Valeur estimée", "Conditions", "Bien recherché en échange"]
  }
};
