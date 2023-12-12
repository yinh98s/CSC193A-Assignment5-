//this is my fancifymytext.js file 

//modify my javascript so that when a user click on the button: Bigger, the text area will become larger

function increaseText()
{
  document.getElementById("inputText").style.fontSize ="1.5em";
}

//modify the radio
function modifyRadio()
{
  var thetext = document.getElementById("inputText");
  var fancytext = document.getElementById("fancyShmancy");
 
  

  if(fancytext.checked)
  {
    thetext.style.fontWeight= "bold";
    thetext.style.textDecoration ="underline";
    thetext.style.color="blue";
  }
  else 
  {
    thetext.style.fontWeight ="normal";
    thetext.style.textDecoration="none";
    thetext.style.color="black";
  }

  alert("Radio button changed!");
}

function makeMoo()
{
  var thetext = document.getElementById("inputText");
  thetext.value = thetext.value.toUpperCase();

   var sentences = thetext.value.split(". "); // Split sentences
   for (var i = 0; i < sentences.length; i++) {
       var words = sentences[i].split(" "); // Split words
       if (words.length > 0) {
           // Add "-Moo" to the last word of each sentence
           words[words.length - 1] += "-Moo";
       }
       sentences[i] = words.join(" "); // Join words back
   }
   thetext.value = sentences.join(". "); // Join sentences back
}