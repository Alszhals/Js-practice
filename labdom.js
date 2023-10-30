<script src="https://cdn.jsdelivr.net/emojione/2.2.7/lib/js/emojione.min.js"></script>
var emoji=emojione.thinkingface

const paragraph = document.getElementById('paragraph');
const text = paragraph.textContent;
const words = text.split(/\s+/); 

for (let i = 0; i < words.length; i++) {
    if (words[i].length > 8) {
        words[i] = `<span class="highlight">${words[i]}</span>`;
    }
}

paragraph.innerHTML = words.join(' ');


const sourceLink = document.createElement('a');
sourceLink.href = "https://www.inc.com/jeff-haden/this-new-linkedin-study-reveals-top-8-jobinterview-questions-and-how-great-job-candidates-answer-them.html";
sourceLink.textContent = "Source";
paragraph.insertAdjacentElement('afterend', sourceLink);

 
paragraph.innerHTML = paragraph.innerHTML.replace(/\.\s/g, ".<br>");


const wordCount = words.length;
const countElement = document.createElement('p');
countElement.textContent = `Word Count: ${wordCount}`;
document.body.insertBefore(countElement, paragraph);
