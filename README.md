<p align="center">
  <img src="https://github.com/Connor56/bare-bones/assets/34070858/1fbdf7f1-a722-46d3-9eb3-b84156377b2c" />
</p>

# Bare-Bones

The bare-bones Chrome Extension set-up. A solid, simple foundation to build and learn from.

# Features

- Popup action from the app tray, with a button for passing a message to a background service worker.
- Background service worker for transmitting popup's message to a content script on the currently active tab.
- Content script for receiving popup's message via the background service worker and changing the page background to yellow.
- Manifest that supports the above features.
