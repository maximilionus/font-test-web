var sourceContent = document.getElementById('content-source').innerHTML;
var targetDivs = document.querySelectorAll(
    '.content-light, .content-dark, .content-low-contrast'
);

targetDivs.forEach((div) => {
    div.innerHTML = sourceContent;
});
