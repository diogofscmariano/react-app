const getRoot = (appId, rootSelector) => {
	const registered = window.appRegistry ? window.appRegistry.apps : [];
	const app = registered.find((app) => app.id === appId);

	if (app) {
		const container = document.querySelector(app.id);
		return container.shadowRoot.querySelector(rootSelector);
	}

	return null;
};

export { getRoot };
