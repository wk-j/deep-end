const remote = require("electron").remote;

document.getElementById("closeButton", () => {
    console.log("close ..");
    var window = remote.getCurrentWindow();
    window.close();
});