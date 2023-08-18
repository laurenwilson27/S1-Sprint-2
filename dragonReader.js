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
fetch("./dragons.json")
  .then((response) => response.json())
  .then((data) => {
    // Because the 'fetch' command is asynchronous, we'll handle the main logic once we have the response
    // Create a string containing some opening tags - we'll add list items as we iterate through the JSON
    let htmlString = "<br>In Dungeons & Dragons, 5th Edition:<ul>";

    data.forEach((dragon) => {
      // Print this element of the JSON to the console in a pretty table
      console.table(dragon);

      htmlString +=
        "<li>Adult " +
        getColour(dragon) +
        " dragons are " +
        getAlignment(dragon) +
        " in alignment. They have a Strength score of " +
        getStr(dragon) +
        ", giving them a Strength modifier of " +
        getModifier(getStr(dragon)) +
        ".</li>";

      console.log(htmlString);
    });

    // Append the closing tags, and then set the document's contents to be our completed string
    htmlString += "</ul>";
    document.body.innerHTML = htmlString;
  })
  .catch((error) => {
    // If there are any errors while fetching the JSON, log them
    document.body.innerHTML =
      "There was an error loading the data. Please consult the console log.";
    console.log(error);
  });
