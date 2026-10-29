/* Réglages d'abonnement de NA_DASSI.
   Tu peux modifier ce fichier directement dans GitHub (bouton crayon).
   Change seulement ce qui est entre guillemets ou après les deux-points, puis garde le fichier tel quel.
   Tant que le prix, le numéro et la clé ne sont pas remplis, l'application reste entièrement gratuite. */
window.NA_DASSI_CONFIG = {
  trialDays: 21,       // durée de l'essai gratuit, en jours (21 = 3 semaines)
  priceFcfa: 0,        // prix par mois en FCFA, sans espace. Exemple : 2000
  payService: "Wave", // "Wave", "Orange Money" ou "MTN MoMo"
  payNumber: "",       // le numéro qui reçoit les paiements. Exemple : "07 00 00 00 00"
  whatsapp: "2250787604333", // ton numéro WhatsApp avec l'indicatif, sans + ni espaces. Exemple : "2250700000000"
  publicKey: null      // la clé publique donnée par la page admin-codes.html (voir les explications dans cette page)
};
