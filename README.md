# 🧹 Mon Bureau Tout Propre — Simulateur de prix

## 📌 Contexte du projet
L’entreprise fictive **Mon Bureau Tout Propre** propose des prestations de nettoyage de bureaux.  
Elle souhaite mettre à disposition de ses clients un **simulateur de prix interactif** directement intégré à son site vitrine.  

L’objectif est de permettre aux utilisateurs d’estimer, en toute autonomie, le coût d’une prestation de nettoyage selon plusieurs critères :  
- Surface des bureaux à nettoyer (en m²)  
- Fréquence du nettoyage (1x/semaine, 2x/semaine, ou tous les jours)  
- Option supplémentaire : nettoyage des vitres  

Ce projet mobilise des compétences en **HTML**, **CSS** et **JavaScript vanilla** afin de créer un outil simple, ergonomique et responsive.

---

## 🎯 Objectifs
- Fournir un outil clair et rapide pour obtenir une estimation du prix.  
- Valoriser la transparence de l’entreprise en affichant le calcul détaillé.  
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

## 📅 Modalités pédagogiques
- **Durée** : 2 jours  
- **Organisation** :  
  - *Lundi matin* : révisions collectives (FizzBuzz, tables de multiplication en JS)  
  - *Lundi après-midi* : lancement du brief et conception du projet  
  - *Mardi matin* : foire aux questions, résolution de difficultés  
  - *Mardi après-midi* : finalisation, tests et mise en ligne sur GitHub Pages  

---

## ✅ Modalités d’évaluation
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

## 🚀 Tester le projet
1. Cloner le dépôt :  
   ```bash
   git clone https://github.com/fannysaez/mon-bureau-tout-propre
   cd mon-bureau-tout-propre
