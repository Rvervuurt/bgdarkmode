/**
 * This function adds css-classes to elements that are otherwise hard to target
 */
const addIdentifiableClassnames = () => {
	const queries = {
		commentQuoteWrapper: '.gamereactie-content > div[style="margin: 10px, 10px, 10px, 10px;"]',
		commentQuote: '.gamereactie-content > div[style="margin: 10px, 10px, 10px, 10px;"] > div',
		commentUsername: '.gamereactie-meta > img[src^="/images/user-"] + a',
		commentUsernameOnline: '.gamereactie-meta > img[src="/images/user-online.jpg"] + a',
		commentUsernameOffline: '.gamereactie-meta > img[src="/images/user-offline.jpg"] + a'
	};

	for (const i in queries) [...document.querySelectorAll(queries[i])].map(el => el.classList.add(i));
}
