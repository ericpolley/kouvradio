supportBtn = document.getElementById('supportBtn');
support = document.getElementById('support');
aboutUsBtn - document.getElementById('aboutUsBtn')
aboutUs = document.getElementById('aboutUs');



function startWebsite() {
supportBtn.addEventListener("click", supportPage)
aboutUsBtn.addEventListener("click", aboutUsPage)
console.log('start')
}

startWebsite();

function supportPage() {
aboutUsPageOpen()
    support.classList.remove('hide');
    console.log('support is open');
    supportBtn.removeEventListener("click", supportPage)
    supportBtn.addEventListener("click", supportPageOpen)
}

function supportPageOpen() {
    support.classList.add('hide');
    console.log('support is closed');
    supportBtn.addEventListener("click", supportPage)
    supportBtn.removeEventListener("click", supportPageOpen)
}

function aboutUsPage() {
    supportPageOpen()
    aboutUs.classList.remove('hide');
    console.log('aboutus is open');
    aboutUsBtn.removeEventListener("click", aboutUsPage)
    aboutUsBtn.addEventListener("click", aboutUsPageOpen)
}

function aboutUsPageOpen() {
    aboutUs.classList.add('hide');
    console.log('aboutus is closed');
    aboutUsBtn.addEventListener("click", aboutUsPage)
    aboutUsBtn.removeEventListener("click", aboutUsPageOpen)
}