const article = document.querySelector("article");
const paragraphs = document.querySelectorAll("p");

if (article || paragraphs.length > 0) {
    let text;
    if (article) {
        text = article.textContent;
    } else {
        text = Array.from(paragraphs).map(p => p.textContent).join(" ");
    }

    const wordMatchRegEx = /[^\s]+/g;
    const words = text.matchAll(wordMatchRegEx);
    const wordCount = [...words].length;
    console.log("Word Count:", wordCount);

    const readingTime = Math.round(wordCount / 100);
    console.log("Reading Time:", readingTime);
   
    const badge = document.createElement("p");
    
badge.classList.add("color-secondary-text", "type--caption");
badge.style.backgroundColor = "#f0f0f0"; // Background color for the badge
badge.style.color = "#333"; // Text color for the badge
badge.style.padding = "5px 10px"; // Padding for the badge
badge.style.borderRadius = "5px"; // Rounded corners for the badge
badge.style.position = "absolute"; // Absolute position
badge.style.top = "100px"; // Distance from the top of the body
badge.style.left = "50%"; // Center horizontally
badge.textContent = `⏱️ ${readingTime} min read`;
badge.style.transform = "translateX(-50%)"; // Center horizontally
badge.style.zIndex = "9999"; // Ensure it's on top of other content

// Function to handle drag start event
function dragStart(event) {
    event.dataTransfer.setData("text/plain", null);
    event.target.style.opacity = '0.5'; // Reduce opacity during drag
}

// Function to handle drag end event
function dragEnd(event) {
    event.target.style.opacity = ''; // Restore opacity after drag
}

// Attach drag event listeners to make the badge draggable
badge.draggable = true;
badge.addEventListener("dragstart", dragStart);
badge.addEventListener("dragend", dragEnd);

// Insert the badge into the appropriate location (body)
document.body.appendChild(badge);


    const heading = article ? article.querySelector("h1") : null;
    const date = article ? article.querySelector("time")?.parentNode : null;
    const targetElement = date ?? heading ?? document.body; // If no suitable location found, attach to body
    targetElement.insertAdjacentElement("afterend", badge);
} else {
    const allText = document.body.textContent;
    const wordCount = (allText.match(/[^\s]+/g) || []).length;
    console.log("Word Count:", wordCount);

    const readingTime = Math.round(wordCount / 100);
    console.log("Reading Time text:", readingTime);
    const badge = document.createElement("p");
    badge.classList.add("color-secondary-text", "type--caption");
    badge.style.backgroundColor = "#f0f0f0"; // Background color for the badge
    badge.style.color = "#333"; // Text color for the badge
    badge.style.padding = "5px 10px"; // Padding for the badge
    badge.style.borderRadius = "5px"; // Rounded corners for the badge
    badge.style.position = "absolute"; // Absolute position
    badge.style.top = "100px"; // Distance from the top of the body
    badge.style.left = "50%"; // Center horizontally
    badge.textContent = `⏱️ ${readingTime} min read`;
    badge.style.transform = "translateX(-50%)"; // Center horizontally
    badge.style.zIndex = "9999"; // Ensure it's on top of other content
    
    // Function to handle drag start event
    function dragStart(event) {
        event.dataTransfer.setData("text/plain", null);
        event.target.style.opacity = '0.5'; // Reduce opacity during drag
    }
    
    // Function to handle drag end event
    function dragEnd(event) {
        event.target.style.opacity = ''; // Restore opacity after drag
    }
    
    // Attach drag event listeners to make the badge draggable
    badge.draggable = true;
    badge.addEventListener("dragstart", dragStart);
    badge.addEventListener("dragend", dragEnd);
    
    // Insert the badge into the appropriate location (body)
    document.body.appendChild(badge);
    
    const heading = article ? article.querySelector("h1") : null;
    const date = article ? article.querySelector("time")?.parentNode : null;
    const targetElement = date ?? heading ?? document.body; // If no suitable location found, attach to body
    targetElement.insertAdjacentElement("afterend", badge);
}
