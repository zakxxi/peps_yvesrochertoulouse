/**
 * Contributed by Jean-Yves ORSSAUD, Rouen, France
 * And a litte help from an anonymous, er, helper
 */
; (function ($) {
	$.extend(jQuery.validator.messages, {
		email				: "Veuillez saisir une adresse e-mail valide.",
		maxlength			: "Veuillez ne pas saisir plus de {0} caractères.",
		minlength			: "Veuillez saisir au moins {0} caractères.",
		number				: "Veuillez saisir un nombre.",
		required			: "Champ obligatoire."
	});
})(jQuery);
