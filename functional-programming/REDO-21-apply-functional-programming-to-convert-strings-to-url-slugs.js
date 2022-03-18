/*

Apply Functional Programming to Convert Strings to URL Slugs

Fill in the urlSlug function so it converts a string title and returns the hyphenated version for the URL. 

You can use any of the methods covered in this section, and don't use replace. 

Here are the requirements:

The input is a string with spaces and title-cased words

The output is a string with the spaces between words replaced by a hyphen (-)

The output should be all lower-cased letters

The output should not have any spaces

*/

// REDO: complete using regex and an additional method or two (not replace/replaceAll)

// Only change code below this line
function urlSlug(title) {
    let finalTitle = [];
    let titleToUrl = title
      .toLowerCase()
      .split(" ")
    for (let i = 0; i < titleToUrl.length; i++) {
     if (titleToUrl[i].length) {
       finalTitle.push(titleToUrl[i])
     }
    }

    return finalTitle.join("-");
    }
// Only change code above this line

console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"));
console.log(urlSlug(" Winter Is  Coming"));









// ANSWER BELOW:

// function urlSlug(title) {

//   let outputStr = title.toLowerCase().trim().split(" ").filter(word => word.length > 0).join("-");

//   return outputStr;
// }
