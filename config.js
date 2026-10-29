/* Réglages d'abonnement de NA_DASSI.
   Tu peux modifier ce fichier directement dans GitHub (bouton crayon).
   Change seulement ce qui est entre guillemets ou après les deux-points, puis garde le fichier tel quel.
   Tant que le prix, le numéro et la clé ne sont pas remplis, l'application reste entièrement gratuite. */
window.NA_DASSI_CONFIG = {
  trialDays: 21,       // durée de l'essai gratuit, en jours (21 = 3 semaines)
  priceFcfa: 2500,     // prix par mois en FCFA, sans espace. Exemple : 2000
  payService: "Wave",  // "Wave", "Orange Money" ou "MTN MoMo"
  payNumber: "07 87 60 43 33", // le numéro qui reçoit les paiements
  whatsapp: "2250787604333",   // ton numéro WhatsApp avec l'indicatif, sans + ni espaces
  publicKey: {"kty":"EC","crv":"P-256","x":"LrjAJs-cMOkMlTjmTMEhNdEwD2ftffv-na59mSy3CG8","y":"TZ-wevDA_aofKxmTIYUz9uW7Wu0B-BSmCSSUpjJxsq4","ext":true,"key_ops":["verify"]}  // clé publique créée avec la page admin-codes.html
};
