/**
 * Simulateur de prix Mon Bureau Tout Propre
 * Classe principale pour gérer les calculs de tarification
 */
class PriceCalculator {
    constructor() {
        // Constantes de tarification
        this.baseRate = 1.5; // 1,50€ par m²
        this.tvaTaux = 0.20; // 20% TVA
        this.vitresSupplement = 0.10; // 10% supplémentaire pour les vitres
        
        // Éléments DOM
        this.form = document.getElementById('priceForm');
        this.errorDiv = document.getElementById('error');
        this.resultsDiv = document.getElementById('results');
        
        // Initialisation des événements
        this.initEventListeners();
    }

    /**
     * Initialise tous les écouteurs d'événements
     */
    initEventListeners() {
        // Soumission du formulaire
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        
        // Calcul en temps réel
        const surface = document.getElementById('surface');
        const frequencies = document.querySelectorAll('input[name="frequency"]');
        const windows = document.getElementById('windows');
        
        surface.addEventListener('input', () => this.tryRealTimeCalculation());
        
        frequencies.forEach(freq => {
            freq.addEventListener('change', () => this.tryRealTimeCalculation());
        });
        
        windows.addEventListener('change', () => this.tryRealTimeCalculation());
        
        // Validation en temps réel des champs numériques
        surface.addEventListener('input', this.validateSurfaceInput);
    }

    /**
     * Gère la soumission du formulaire
     * @param {Event} e - Événement de soumission
     */
    handleSubmit(e) {
        e.preventDefault();
        this.hideError();
        
        const formData = this.getFormData();
        
        if (!this.validateData(formData)) {
            return;
        }

        const calculation = this.calculatePrice(formData);
        this.displayResults(calculation, formData);
    }

    /**
     * Tente un calcul en temps réel si tous les champs requis sont remplis
     */
    tryRealTimeCalculation() {
        const formData = this.getFormData();
        if (formData.surface > 0 && formData.frequency > 0) {
            this.hideError();
            const calculation = this.calculatePrice(formData);
            this.displayResults(calculation, formData);
        }
    }

    /**
     * Récupère les données du formulaire
     * @returns {Object} Données du formulaire
     */
    getFormData() {
        const surface = parseFloat(document.getElementById('surface').value) || 0;
        const frequencyElement = document.querySelector('input[name="frequency"]:checked');
        const frequency = frequencyElement ? parseInt(frequencyElement.value) : 0;
        const windows = document.getElementById('windows').checked;
        
        return { surface, frequency, windows };
    }

    /**
     * Valide les données du formulaire
     * @param {Object} data - Données à valider
     * @returns {boolean} True si les données sont valides
     */
    validateData(data) {
        if (data.surface <= 0) {
            this.showError('Veuillez saisir une surface valide (supérieure à 0 m²).');
            return false;
        }
        
        if (data.surface > 10000) {
            this.showError('La surface ne peut pas dépasser 10 000 m².');
            return false;
        }
        
        if (data.frequency === 0) {
            this.showError('Veuillez sélectionner une fréquence de nettoyage.');
            return false;
        }
        
        return true;
    }

    /**
     * Calcule le prix selon les règles définies
     * @param {Object} data - Données pour le calcul
     * @returns {Object} Résultat des calculs
     */
    calculatePrice(data) {
        // Étape 1: Tarif de base (Surface × 1,50€)
        const basePrice = data.surface * this.baseRate;
        
        // Étape 2: Application de la fréquence
        const frequencyPrice = basePrice * data.frequency;
        
        // Étape 3: Options supplémentaires (vitres +10%)
        const withWindows = data.windows ? 
            frequencyPrice * (1 + this.vitresSupplement) : 
            frequencyPrice;
        
        // Étape 4: Calculs finaux
        const montantHT = withWindows;
        const tva = montantHT * this.tvaTaux;
        const montantTTC = montantHT + tva;

        return {
            basePrice,
            frequencyPrice,
            withWindows: data.windows ? withWindows : null,
            montantHT,
            tva,
            montantTTC
        };
    }

    /**
     * Affiche les résultats du calcul
     * @param {Object} calculation - Résultats des calculs
     * @param {Object} formData - Données du formulaire
     */
    displayResults(calculation, formData) {
        // Mise à jour des détails
        document.getElementById('resultSurface').textContent = `${formData.surface} m²`;
        
        // Texte de fréquence
        const frequencyText = {
            1: '1 fois par semaine',
            2: '2 fois par semaine',
            5: 'Tous les jours (5x/sem.)'
        };
        document.getElementById('resultFrequency').textContent = frequencyText[formData.frequency];
        
        // Tarifs calculés
        document.getElementById('resultBasePrice').textContent = this.formatPrice(calculation.basePrice);
        document.getElementById('resultFrequencyPrice').textContent = this.formatPrice(calculation.frequencyPrice);
        
        // Gestion de l'affichage des vitres
        const windowsResult = document.getElementById('windowsResult');
        if (formData.windows && calculation.withWindows) {
            windowsResult.style.display = 'flex';
            document.getElementById('resultWithWindows').textContent = this.formatPrice(calculation.withWindows);
        } else {
            windowsResult.style.display = 'none';
        }
        
        // Montants finaux
        document.getElementById('resultHT').textContent = this.formatPrice(calculation.montantHT);
        document.getElementById('resultTVA').textContent = this.formatPrice(calculation.tva);
        document.getElementById('resultTTC').textContent = this.formatPrice(calculation.montantTTC);
        
        // Affichage des résultats avec animation
        this.resultsDiv.style.display = 'block';
        
        // Scroll vers les résultats avec un léger délai pour l'animation
        setTimeout(() => {
            this.resultsDiv.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'nearest' 
            });
        }, 100);
    }

    /**
     * Formate un nombre en prix français (€)
     * @param {number} price - Prix à formater
     * @returns {string} Prix formaté
     */
    formatPrice(price) {
        return new Intl.NumberFormat('fr-FR', {
            style: 'currency',
            currency: 'EUR',
            minimumFractionDigits: 2
        }).format(price);
    }

    /**
     * Affiche un message d'erreur
     * @param {string} message - Message d'erreur à afficher
     */
    showError(message) {
        this.errorDiv.textContent = message;
        this.errorDiv.style.display = 'block';
        this.resultsDiv.style.display = 'none';
        
        // Scroll vers l'erreur
        this.errorDiv.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'nearest' 
        });
    }

    /**
     * Cache le message d'erreur
     */
    hideError() {
        this.errorDiv.style.display = 'none';
    }

    /**
     * Valide les entrées numériques de surface
     * @param {Event} e - Événement d'entrée
     */
    validateSurfaceInput(e) {
        const value = parseFloat(e.target.value);
        
        // Empêche les valeurs négatives
        if (value < 0) {
            e.target.value = '';
        }
        
        // Limite à 10000 m²
        if (value > 10000) {
            e.target.value = 10000;
        }
    }
}

/**
 * Initialisation de l'application quand le DOM est chargé
 */
document.addEventListener('DOMContentLoaded', () => {
    // Création d'une instance du calculateur de prix
    const calculator = new PriceCalculator();
    
    // Log de démarrage (optionnel, peut être retiré en production)
    console.log('🧽 Mon Bureau Tout Propre - Simulateur initialisé');
});

/**
 * Gestion des erreurs globales JavaScript
 */
window.addEventListener('error', (e) => {
    console.error('Erreur dans l\'application:', e.error);
});

/**
 * Fonctions utilitaires pour l'amélioration UX
 */

// Smooth scroll pour les navigateurs qui ne le supportent pas nativement
if (!('scrollBehavior' in document.documentElement.style)) {
    // Polyfill pour le smooth scroll si nécessaire
    const smoothScrollPolyfill = () => {
        const links = document.querySelectorAll('a[href*="#"]');
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    };
    
    smoothScrollPolyfill();
}

// Amélioration de l'accessibilité
document.addEventListener('keydown', (e) => {
    // Navigation clavier améliorée
    if (e.key === 'Enter' && e.target.type === 'radio') {
        e.target.click();
    }
});

// Optimisation des performances - Debounce pour les calculs en temps réel
const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};
