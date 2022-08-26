const quoteTxt = document.querySelector(".quote");
const authorName = document.querySelector(".author-name")
const quoteButton = document.querySelector("button")


function randomQuote (){
    fetch("https://api.quotable.io/random")
    .then(res => res.json())
    .then(result => {
        console.log(result);
        quoteTxt.innerHTML = result.content;
        authorName.innerHTML = result.author;
        
    })
}
function textSound(){
    const quote = new SpeechSynthesisUtterance();
    quote.text = quoteTxt.innerHTML;
    window.speechSynthesis.speak(quote);
}
function textCopy(){
    console.log('clicked');
    if (navigator && navigator.clipboard && navigator.clipboard.writeText)
    return navigator.clipboard.writeText(quoteTxt.innerHTML);
    // quoteTxt.select();
    // quoteTxt.setSelectionRange(0, 99999);
    // navigator.clipboard.writeText(quoteTxt.innerHTML);
}

function textTwitter(){
        console.log('clicked');
        let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteTxt.innerHTML}`
        window.open(tweetUrl, '_blank');
}


quoteButton.addEventListener("click", randomQuote)