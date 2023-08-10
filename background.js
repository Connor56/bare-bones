chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("hi");
  if (message.action === "toggleBackgroundColor") {
    (async () => {
      const [tab] = await chrome.tabs.query({
        active: true,
        lastFocusedWindow: true,
      });
      await chrome.tabs.sendMessage(tab.id, {
        action: "toggleBackgroundColor",
      });
    })();
  }
});
