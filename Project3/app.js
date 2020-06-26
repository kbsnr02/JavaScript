(function() {
	const quotes = [
		{
			quote: 'The purpose of our lives is to be happy',
			author: '- Dalai Lama'
		},
		{
			quote: 'Life is what happens when you’re busy making other plans.',
			author: '- John Lennon'
		},
		{
			quote: 'Get busy living or get busy dying.',
			author: '- Stephen King'
		},
		{
			quote: 'You only live once, but if you do it right, once is enough.',
			author: '- Mae West'
		},
		{
			quote: 'Never let the fear of striking out keep you from playing the game.',
			author: '- Babe Ruth'
		},
		{
			quote: 'In order to write about life first you must live it.',
			author: '- Ernest Hemingway'
		},
		{
			quote: 'If life were predictable it would cease to be life, and be without flavor.',
			author: '- Eleanor Roosevelt'
		},
		{
			quote: 'The big lesson in life, baby, is never be scared of anyone or anything.',
			author: '- Frank Sinatra'
		}
	];

	const btn = document.getElementById('generate'),
		div = document.getElementById('quote');

	btn.addEventListener('click', generateQuote);

	function generateQuote() {
		// Dynaically Create Elements for and Author
		let qAuthor = document.createElement('strong');
		qAuthor.className = 'author';

		let randomQ = Math.floor(Math.random() * quotes.length);

		div.textContent = quotes[randomQ].quote;
		qAuthor.textContent = quotes[randomQ].author;

		div.appendChild(qAuthor);
	}
})();
