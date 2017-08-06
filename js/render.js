const $ = require("jquery");

const url = "https://www.youtube.com/embed/{id}?ecver=1&autoplay=1&controls=0&showinfo=1&rel=0&modestbranding=1";
const source = [ "NCXfKyfpBKI", "lBN9VDFDvOk", "zeP7bqMySmE" ];
const links = [ "#s1", "#s2", "#s3" ];
const createUrl = (id) => url.replace("{id}", id);

$(document).ready(() => $("#video").attr("src", createUrl(source[0])));
$("#facebookButton").click(() => window.open("https://www.facebook.com/JanninaW", "_blank"));

links.forEach((x, i) => {
    const button = $(x);
    button.click(() => {
        button.addClass("active");
        $("#video").attr("src", createUrl(source[i]));
        links.filter(k => k != x).forEach(k => $(k).removeClass("active"));
    })
});