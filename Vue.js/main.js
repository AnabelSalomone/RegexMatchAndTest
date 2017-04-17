let app = new Vue({
	el: '#app',

	data: {
		inputTest: '',
		inputMatch: '',
		regexToTest: '',
		regexToMatch: '',
		answerTest: '',
		answerMatch: '',
		regexTest: /^b[aeiou]+t$/
	},//closes data

	computed: {
		getRegexMatch: function () {
			return `/${this.regexToMatch}/ig`;
		}

	},//closes computed

	methods: {

		validateTest: function () {
			//regex.test(string)
			console.log(this.getRegexTest);
			console.log(this.inputTest);

			if (app.regexTest.test(this.inputTest)) {
				return app.answerTest = 'Correct!';
			} else {
				return app.answerTest = 'Failed to validate. Try again';
			}
		},

		validateMatch: function () {
			if (this.getRegexMatch.match(this.inputMatch) === null) {
				return app.answerMatch = `Your sentences does not contain the word ${this.getRegexMatch}`;
			} else {
				return app.answerMatch = 'Correct! the form can be sent';
			}
		}

	}//closes methods

}); //closues Vue