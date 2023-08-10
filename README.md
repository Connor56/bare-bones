# bare-bones

The bare-bones Chrome Extension set-up. A solid, simple foundation to build and learn from.

# Features

- Popup action from the app tray, with a button for passing a message to a background service worker.
- Background service worker for transmitting popup's message to a content script on the currently active tab.
- Content script for receiving popup's message via the background service worker and changing the page background to yellow.
- Manifest that supports the above features.
