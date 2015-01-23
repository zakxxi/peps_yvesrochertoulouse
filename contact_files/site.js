//#region Master

function MasterClass() {
	var self = this;
};

//#endregion

//#region Page Article Blog

function BlogArticleClass(oMaster) {
	var self = this;
	self.oMaster = oMaster;
	self.$form = $("#form");
	self.$div_form = $("#div_form");
	self.$articleId = $("#articleid");
	self.$pseudo = $("#pseudo");
	self.$commentaire = $("#commentaire");
	self.$feedback = $("#feedback");

	$(function () {
		self.$form.validate({
			rules: {
				"pseudo": {
					"required": true,
					"maxlength": 100
				},
				"commentaire": {
					"required": true
				}
			},
			errorElement: "span",
			errorClass: "text-danger",
			highlight: function (element, errorClass, validClass) {
				$(element).closest("div.form-group").addClass("has-error");
			},
			unhighlight: function (element, errorClass, validClass) {
				$(element).closest("div.form-group").removeClass("has-error");
			},
			submitHandler: function (form) {
				self.$feedback.removeClass("alert-danger").removeClass("alert-success").addClass("alert-warning").removeClass('hide').text('Envoi en cours...');
				$.ajax({
					type: "POST",
					url: SITE_URL + "/WebService.asmx/commenterArticle",
					data: JSON.stringify({
						articleId: self.$articleId.val(),
						pseudo: self.$pseudo.val(),
						commentaire: self.$commentaire.val()
					}),
					contentType: "application/json"
				})
				.done(function (data) {
					var erreur = data.d.ErrorMessage;
					if (erreur != null) {
						self.$feedback.removeClass("alert-warning").addClass("alert-danger").text(erreur);
					} else {
						window.location.href = window.location.href;
					}
				});
			}
		});
	});
};

//#endregion

//#region Page Contact

function ContactClass(oMaster) {
	var self = this;
	self.oMaster = oMaster;
	self.$form = $("#form");
	self.$div_form = $("#div_form");
	self.$feedback = $("#feedback");
	self.$nom = $("#nom");
	self.$prenom = $("#prenom");
	self.$email = $("#email");
	self.$tel = $("#tel");
	self.$message = $("#message");
	self.$typeDemande = $("#typeDemande");

	$(function () {
		self.$form.validate({
			rules: {
				"nom": {
					"required": true
				},
				"prenom": {
					"required": true
				},
				"tel": {
					"required": true
				},
				"email": {
					"required": true,
					"email": true
				},
				"message": {
					"required": true,
					"maxlength": 1000
				}
			},
			
			errorClass: "text-danger",
			highlight: function (element, errorClass, validClass) {
				$(element).closest("div").prev().addClass("has-error");
			},
			unhighlight: function (element, errorClass, validClass) {
				$(element).closest("div").prev().removeClass("has-error");
			},
			submitHandler: function (form) {
				self.$feedback.removeClass("alert-danger").removeClass("alert-success").addClass("alert-warning").removeClass('hide').text('Envoi en cours...');
				$.ajax({
					type: "POST",
					url: SITE_URL + "/WebService.asmx/contact",
					data: JSON.stringify({
						nom: self.$nom.val(),
						prenom: self.$prenom.val(),
						tel: self.$tel.val(),
						email: self.$email.val(),
						message: self.$message.val(),
						typeDemande: self.$typeDemande.val()
					}),
					contentType: "application/json"
				})
				.done(function (data) {
					var erreur = data.d.ErrorMessage;
					if (erreur != null) {
						self.$feedback.removeClass("alert-warning").addClass("alert-danger").text(erreur);
					} else {
						self.$div_form.hide();
						self.$feedback.removeClass("alert-warning").addClass("alert-success").text("Nous avons bien reçu votre message. Nous vous répondrons dans les plus brefs délais.");
					}
				});
			}
		});
	});
};

//#endregion
