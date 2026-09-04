const widgetContainer = document.getElementById('widgetContainer');

// Build all paths with the URL API so they resolve correctly whether this
// page is opened as /settings/ or /settings/index.html, including on
// GitHub Pages where the project lives below /now-playing/.
const settingsCoreURL = new URL('../common/core/settings-core/', window.location.href);
const settingsJSONURL = new URL('settings.json', window.location.href);
const widgetURL = new URL('../', window.location.href);

settingsCoreURL.searchParams.set('settingsJson', settingsJSONURL.href);
settingsCoreURL.searchParams.set('widgetURL', widgetURL.href);
settingsCoreURL.searchParams.set('usesStreamerBot', 'false');

console.debug('Window Ref: ' + window.location.href);
console.debug('Settings Core URL: ' + settingsCoreURL.href);
console.debug('Settings JSON: ' + settingsJSONURL.href);
console.debug('Widget URL: ' + widgetURL.href);

widgetContainer.src = settingsCoreURL.href;
