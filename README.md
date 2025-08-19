# 🧹 Mon Bureau Tout Propre — Simulateur de prix

<p align="center">
   <img src="https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white" alt="HTML5"/>
   <img src="https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white" alt="CSS3"/>
   <img src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black" alt="JavaScript"/>
</p>

<p align="center">
   <img src="docs/Mon-bureau-tout-propre.png" alt="Aperçu du simulateur" width="600"/>
</p>

---

## 📁 Structure de projet

```bash
mon-bureau-tout-propre/
│
├── index.html          # Page principale avec le simulateur
├── styles.css          # Feuille de styles principale
├── app.js              # Logique JavaScript du simulateur
├── README.md           # Documentation du projet
│
│
├── docs/               # Documentation ou captures d'écran du projet
│   └── Mon-bureau-tout-propre.png
│
```
---

## 📚 Table des matières

- [Cahier des charges (PDF)](#cahier-des-charges)
- [Contexte du projet](#-contexte-du-projet)
- [Objectifs](#-objectifs)
- [Fonctionnalités](#-fonctionnalités)
- [Technologies utilisées](#-technologies-utilisées)
- [Modalités d'évaluation](#-modalités-dévaluation)
- [Livrables attendus](#-livrables-attendus)
- [Tester le projet](#-tester-le-projet)
- [Tests et validation](#-tests-et-validation)
- [Exemples de calcul](#-exemples-de-calcul)
- [Déploiement sur GitHub Pages](#-déploiement-sur-github-pages)
- [Fonctionnalités avancées implémentées](#-fonctionnalités-avancées-implémentées)
- [Structure du code](#-structure-du-code)

---

## 📄 Cahier des charges

Le cahier des charges complet du projet est disponible ici :

- [📥 Télécharger le cahier des charges (PDF)](docs/cdc-mon-bureau-tout-propre.pdf)

Si tu veux aussi une capture d'écran du cahier des charges, ajoute-la ici :

![Cahier des charges](docs/cdc-mon-bureau-tout-propre-capture%20ecran/image.jpg)

---

## 📌 Contexte du projet

L'entreprise fictive **Mon Bureau Tout Propre** propose des prestations de nettoyage de bureaux.  
Elle souhaite mettre à disposition de ses clients un **simulateur de prix interactif** directement intégré à son site vitrine.

L'objectif est de permettre aux utilisateurs d'estimer, en toute autonomie, le coût d'une prestation de nettoyage selon plusieurs critères :

- Surface des bureaux à nettoyer (en m²)
- Fréquence du nettoyage (1x/semaine, 2x/semaine, ou tous les jours)
- Option supplémentaire : nettoyage des vitres

Ce projet mobilise des compétences en **HTML**, **CSS** et **JavaScript vanilla** afin de créer un outil simple, ergonomique et responsive.

---

## 🚀 Tester le projet

1. Cloner le dépôt :

   ```bash
   git clone https://github.com/fannysaez/mon-bureau-tout-propre
   cd mon-bureau-tout-propre
   ```

2. **Ouvrir le projet**

   - Ouvrir `index.html` directement dans un navigateur, ou
   - Utiliser Live Server dans VS Code pour un développement optimal

3. **Tester le simulateur**
   - Saisir une surface (ex: 100 m²)
   - Sélectionner une fréquence de nettoyage
   - Cocher/décocher l'option vitres
   - Vérifier les calculs automatiques

---

## 🎯 Objectifs

- Fournir un outil clair et rapide pour obtenir une estimation du prix.
- Valoriser la transparence de l'entreprise en affichant le calcul détaillé.
- Mettre en avant les résultats (HT, TVA, TTC) de manière lisible.

---

## ⚙️ Fonctionnalités

1. Formulaire interactif comprenant :

   - Champ de saisie de la surface (m²)
   - Sélection de la fréquence du nettoyage
   - Case à cocher pour inclure ou non le nettoyage des vitres

2. Calcul automatique du prix selon la formule :

   - **Tarif de base** : Surface × 1,50 €
   - **Majoration fréquence** : ×1 (1 fois/semaine), ×2 (2 fois/semaine), ×5 (tous les jours)
   - **Option vitres** : +10 % du prix
   - **Résultats affichés** :
     - Montant **HT**
     - Montant de la **TVA (20%)**
     - Montant **TTC**

3. Interface responsive (ordinateur, tablette, mobile).

---

## 🖥️ Technologies utilisées

- **HTML5** : structure sémantique de la page
- **CSS3** : mise en page responsive et design moderne
- **JavaScript (vanilla)** : logique de calcul et affichage dynamique

---

## ✅ Modalités d'évaluation

- Respect du cahier des charges
- Qualité du code (lisibilité, clarté, séparation HTML/CSS/JS)
- Expérience utilisateur (ergonomie et design responsive)
- Déploiement réussi sur **GitHub Pages**

---

## 📦 Livrables attendus

- Un **dépôt GitHub public** contenant :

  - `index.html`
  - `styles.css`
  - `app.js`
  - `README.md`

- Une version en ligne via **GitHub Pages**.

---

## 🚀 Déploiement sur GitHub Pages

1. **Pusher le code sur GitHub**

   ```bash
   git add .
   git commit -m "feat: Simulateur Mon Bureau Tout Propre"
   git push origin main
   ```

2. **Activer GitHub Pages**

   - Aller dans Settings → Pages
   - Source : Deploy from branch
   - Branch : main / (root)
   - Save

3. **Accéder au site**
   - URL : `https://fannysaez.github.io/mon-bureau-tout-propre/`

---

## 🎨 Fonctionnalités avancées implémentées

- **Calcul en temps réel** : Mise à jour instantanée des résultats
- **Validation intelligente** : Messages d'erreur contextuels
- **Design moderne** : Dégradés, animations et micro-interactions
- **Interface responsive** : Adaptation parfaite à tous les écrans
- **Accessibilité** : Navigation clavier et contraste optimisés
- **Performance** : Code optimisé et structure modulaire

---

## 📊 Structure du code

### HTML (index.html)

- Structure sémantique et accessible
- Formulaire avec validation côté client
- Zones d'affichage des résultats

### CSS (styles.css)

- Design system cohérent
- Responsive design avec breakpoints
- Animations et transitions fluides
- Architecture CSS modulaire

### JavaScript (app.js)

- Classe PriceCalculator avec méthodes organisées
- Gestion des événements et validation
- Calculs conformes au cahier des charges
- Formatage automatique des prix

---

✨ **Projet prêt pour la production et le déploiement !**
