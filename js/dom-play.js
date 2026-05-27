/*


   Create an app that on click actors lines are highlighted


   With a single click, highlight (bold or otherwise) all lines for a specific actor in a play
   Un-highlight (normal or otherwise) all lines from all other actors in the play
  
   The function(s) created to do the work must accommodate any number of actors, and any number of additional lines added to the page
  
   HTML "hooks" may be added to the page for proper operation


*/

// 1. Grab all the clickable actor names, and all the dialogue lines
const actorNames = document.querySelectorAll("#play .actor-name");
const allDialogues = document.querySelectorAll("#play .dialogue");

// 2. Loop through all the names to attach the click listener
for (const nameSpan of actorNames) {
    
    nameSpan.addEventListener("click", function() {
        // 'this' refers to the specific name span that was just clicked
        let clickedActor = this.dataset.actor; 
        
        // 3. Now, loop through ALL dialogue lines to highlight or reset them
        for (const dialogueSpan of allDialogues) {
            
            if (dialogueSpan.dataset.actor === clickedActor) {
                // If it matches the clicked actor, highlight it
                dialogueSpan.style.backgroundColor = "yellow";
            } else {
                // If it belongs to anyone else, reset it to normal
                dialogueSpan.style.backgroundColor = "transparent";
            }
        }
    });
}