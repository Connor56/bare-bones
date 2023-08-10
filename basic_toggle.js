document.getElementById("toggleColor").addEventListener("click", () => {
  chrome.runtime.sendMessage({ action: "toggleBackgroundColor" });
});
