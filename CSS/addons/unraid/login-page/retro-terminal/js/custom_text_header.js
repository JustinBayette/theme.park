
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// You must escape any backward slashes. "\\"

let custom_text_header = `
<div class="custom-text-header"> <pre>            _______ __      __           __
  / ____(_) /_____/ /___ ____  / /
 / /   / / __/ __  / __ `/ _ \/ / 
/ /___/ / /_/ /_/ / /_/ /  __/ /  
\____/_/\__/\__,_/\__,_/\___/_/   
                                                                 </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header