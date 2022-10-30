/**
 * Complete the implementation of parseStory.
 *
 * parseStory retrieves the story as a single string from story.txt
 * (I have written this part for you).
 *
 * In your code, you are required (please read this carefully):
 * - to return a list of objects
 * - each object should definitely have a field, `word`
 * - each object should maybe have a field, `pos` (part of speech)
 *
 * So for example, the return value of this for the example story.txt
 * will be an object that looks like so (note the comma! periods should
 * be handled in the same way).
 *
 * Input: "Louis[n] went[v] to the store[n], and it was fun[a]."
 * Output: [
 *  { word: "Louis", pos: "noun" },
 *  { word: "went", pos: "verb", },
 *  { word: "to", },
 *  { word: "the", },
 *  { word: "store", pos: "noun" }
 *  { word: "," }
 *  ....
 *
 * There are multiple ways to do this, but you may want to use regular expressions.
 * Please go through this lesson: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/
 */

 function parseStory(rawStory) {
  const arr = rawStory.replace( /\n/, " ").split(" ");

  return arr.map(function (w){
    if (w.includes("[n]")){
      w = w.replace("[n]", "");
      return {word: w, pos: "noun"}
    }else if (w.includes("[v]")){
      w = w.replace("[v]", "");
      return {word: w, pos: "verb"}
    }else if (w.includes("[a]")){
      w = w.replace("[a]", "");
      return {word: w, pos: "adjective"}
    }else{
      return {word: w,}
    }
  });
}


function setText(rawStory){
  document.getElementsByClassName(div.madLibsEdit)
}

function extracted_data() {
  let data = []
  document.querySelectorAll(
    ".reactive"
    ).forEach(item=>{
        let el = document.getElementById(item.id)
        data.push(el.value || el.innerText)
    })

    return data.join(' ')
}

/**
 * All your other JavaScript code goes here, inside the function. Don't worry about
 * the `then` and `async` syntax for now.
 *
 * NOTE: You should not be writing any code in the global namespace EXCEPT
 * declaring functions. All code should either:
 * 1. Be in a function.
 * 2. Be in .then() below.
 *
 * You'll want to use the results of parseStory() to display the story on the page.
 */
 getRawStory()
 .then(parseStory)
 .then((processedStory) => {
   console.log(processedStory);
   processedStory.forEach((element,index) => {
     if (element.pos){
       var input = document.createElement("input");
       input.id = 'sel' + index
       input.classList.add('reactive')
       input.type = "text";
       input.placeholder = element.pos;
       input.name = "Sakar";
       input.size = 10;
       input.maxLength = 20;
       document.querySelector('.madLibsEdit').append(input);
       document.querySelector('.madLibsEdit').append(" ");
       input.addEventListener('input', function () {
         document.querySelector('.madLibsPreview').innerText = extracted_data()
         
     });
     }else{
       var span = document.createElement("span");
       span.classList.add('reactive')
       span.id = 'sel' + index
       span.innerText = element.word+" "

       document.querySelector('.madLibsEdit').append(span);
     }
   });

   processedStory.forEach(element => {
     document.querySelector('.madLibsPreview').append(element.word+" ");
   });

 });
