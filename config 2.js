/* Réglages de NA_DASSI.
   Tu peux modifier ce fichier directement dans GitHub (bouton crayon).
   Change seulement ce qui est entre guillemets ou après les deux-points, puis garde le fichier tel quel. */
window.NA_DASSI_CONFIG = {
  trialDays: 21,       // durée de l'essai gratuit, en jours (21 = 3 semaines)
  priceFcfa: 2500,     // prix par mois en FCFA, sans espace. Exemple : 2000
  payService: "Wave",  // "Wave", "Orange Money" ou "MTN MoMo"
  payNumber: "07 87 60 43 33", // le numéro qui reçoit les paiements
  whatsapp: "2250787604333",   // ton numéro WhatsApp avec l'indicatif, sans + ni espaces

  // Serveur Supabase : comptes, essai gratuit et abonnements (clé publique, sans danger à publier)
  supabaseUrl: "https://xpmkmzzwttrzrzywfgkm.supabase.co",
  supabaseKey: "sb_publishable_4jtYq1e0ZV20HGSTmclYdQ_ewVZFYcE",

  signupUrl: "",       // facultatif : service de formulaire (Web3Forms) pour recevoir un e-mail à chaque inscription
  signupFields: {}     // facultatif : par exemple {access_key: "ta-clé"}
};
