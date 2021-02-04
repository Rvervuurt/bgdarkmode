/**
 * This function adds css-classes to elements that are otherwise hard to target
 */
const addIdentifiableClassnames = () => {
	const queries = {
		commentSignature: '.gamereactie-content hr + span',
		commentQuoteWrapper: '.gamereactie-content > div[style="margin: 10px, 10px, 10px, 10px;"]',
		commentQuote: '.gamereactie-content > div[style="margin: 10px, 10px, 10px, 10px;"] > div',
		commentUsername: '.gamereactie-meta > img[src^="/images/user-"] + a',
		commentUsernameOnline: '.gamereactie-meta > img[src="/images/user-online.jpg"] + a',
		commentUsernameOffline: '.gamereactie-meta > img[src="/images/user-offline.jpg"] + a',
		userOfflineImg: 'img[src="/images/user-offline.jpg"]',
		userOnlineImg: 'img[src="/images/user-online.jpg"]',
		whitespaceAboveFooter: '#container div[style="text-align:center;width:100%; padding-top: 4px; padding-bottom: 4px"]',
		logoutButton: 'img[src="/images/exit.png"]',
		consoleMenuPS5: '.submenu > li:nth-child(2)',
		consoleMenuXSX: '.submenu > li:nth-child(3)',
		consoleMenuPS4: '.submenu > li:nth-child(4)',
		consoleMenuXOne: '.submenu > li:nth-child(5)',
		consoleMenuNS: '.submenu > li:nth-child(6)',
		consoleMenu3DS: '.submenu > li:nth-child(7)',
		consoleMenuPC: '.submenu > li:nth-child(8)',
		consoleMenuPreorders: '.submenu > li:nth-child(9)',
		consoleMenuGuides: '.submenu > li:nth-child(10)',
		consoleMenuMeer: '.submenu > li:nth-child(11)'
	};

	for (const i in queries) [...document.querySelectorAll(queries[i])].map(el => el.classList.add(i));
}
