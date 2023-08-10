chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "toggleBackgroundColor") {
    if (document.body.style.backgroundColor !== "yellow") {
      document.body.style.backgroundColor = "yellow";
    } else {
      document.body.style.backgroundColor = "";
    }
  }
});
