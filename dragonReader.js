// This function simply returns the colour of the dragon
function getColour(dragon) {
  return dragon.colour;
}

// Similarly, this simply returns their alignment
function getAlignment(dragon) {
  return dragon.alignment;
}

// We'll also fetch their STR stat - note that this is an integer, not a string!
function getStr(dragon) {
  return dragon.str;
}

// This function returns a dice roll modifier based on the ability score given to it
// Since we're working with a specific range of scores (23-27), the function will only consider
// relevant numbers, instead of every score used in the D&D rulebook
function getModifier(score) {
  if (score >= 26) return "+8";
  else if (score >= 24) return "+7";
  else return "+6";
}

// If any of the above is confusing, please consult a nerd.

// Fetch our file, and convert it into a JS JSON object
await fetch("./dragons.json")
  .then((response) => response.json())
  .then((data) => {
    // Because the 'fetch' command is asynchronous, we handle the main logic once we have the response
    // Start with just an 'unordered list' tag - we'll add list items as we iterate through the JSON
    let htmlString = "<ul>";

    data.forEach((dragon) => {
      // Print this element of the JSON to the console in a pretty table
      console.table(dragon);

      htmlString +=
        "<li>Adult " +
        getColour(dragon) +
        " dragons are " +
        getAlignment(dragon) +
        " in alignment.</li>";

      console.log(htmlString);
    });

    // Append the closing list tag, and then set the document's contents to be our completed string
    htmlString += "</ul>";
    document.body.innerHTML = htmlString;
  })
  .catch((error) => {
    // If there are any errors in the fetching, log them
    console.log(error);
  });
