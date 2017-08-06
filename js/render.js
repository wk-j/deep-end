const $ = require("jquery");
const source = [
    "https://www.youtube.com/embed/NCXfKyfpBKI?ecver=1",
    "https://www.youtube.com/embed/lBN9VDFDvOk?ecver=1",
    "https://www.youtube.com/embed/zeP7bqMySmE?ecver=1",
];

const links = ["#s1", "#s2", "#s3"];

links.forEach((x,i) => {
    const button = $(x);
    button.click(() => {
        button.addClass("active");
        $("#video").attr("src", source[i]);
        links.filter(k => k != x).forEach(k => $(k).removeClass("active"));
    })
});