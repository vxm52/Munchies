let data = "";

const request = new XMLHttpRequest();


/*
 API's URL: https://www.themealdb.com/api.php
 API's URL for random dish: https://www.themealdb.com/api/json/v1/1/random.php
 API's URL for searching dish name: https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
*/


function logIn() {

  let username = document.querySelector(".username").value;
  let password = document.querySelector(".password").value;
  if (username == '') {
    alert('Please Enter Your User Name!');
    username.focus(); //mouse automatically move to the input
    return false;
  }
  if (password == '') {
    alert('Please Enter Your Password!');
    password.focus();
    return false;
  }
  if (username != "admin" || password != "123456") {
    alert('User Name or Password Is Wrong');
    username.focus();
    return false;
  }
  //cache
  var arrList = [];
  localStorage.setItem("collecting", JSON.stringify(arrList));
  location.href = "search.html";
}


/*
First API that acts as recipe search engine (TheMealDB.com)
*/
function searchThis() {
  let dishToSearch = document.querySelector("#searchInput").value
  location.href = "searchList.html?s=" + dishToSearch;
}


function randomSearch() {
  location.href = "searchList.html?random=true"
}


// //This function displays information about the dish
// function openDish() {
//   document.getElementById('page2').style.display = 'none';
//   var pg2 = document.getElementById("page2");
//   var pg3 = document.getElementById("page3");
//   if ("none" == pg3.style.display) {
//     pg3.style.display = "block"; //Sets visible on.
//     pg2.style.display = "none"; //Sets visible off.
//   }
//
//   let dishToOpen = document.querySelector("#dishName").textContent;
//
//   request.open("GET", `https://www.themealdb.com/api/json/v1/1/search.php?s=${dishToOpen}`, true);
//
//   request.onload = function () {
//     let data = JSON.parse(this.response);
//
//     if (request.status == 200) {
//       let outputField = document.querySelector("#dishTitle");
//       outputField.innerHTML = data.meals[0].strMeal;
//
//       //Changes the src URL for the image based on the dish retrieved
//       let outputFieldImage = document.getElementById("dishImage2");
//       outputFieldImage.src = data.meals[0].strMealThumb;
//
//       console.log(`Retrieved Dish Info: "${data.meals[0].strInstructions}"`);
//
//       let outputField1 = document.querySelector("#dishCuisine");
//       outputField1.innerHTML = data.meals[0].strArea;
//
//       let outputField2 = document.querySelector("#dishCategory");
//       if (data.meals[0].strTags != null) {
//         outputField2.innerHTML = data.meals[0].strCategory + ", " + data.meals[0].strTags;
//       } else {
//         outputField2.innerHTML = data.meals[0].strCategory;
//       }
//
//
//       //Formula to store the measure and ingredient in the ingredient array (ex: "1 teaspoon of salt")
//       //***I want to put this in a loop instead of hard-coding every ingredient entry*/
//       let ingredientsArray = [];
//
//       let ing1 = data.meals[0].strIngredient1;
//       let measure1 = data.meals[0].strMeasure1;
//       let ingEntry1 = measure1 + " " + ing1;
//       let newLength = ingredientsArray.push(ingEntry1);
//       console.log(ingredientsArray[0]);
//
//       let ing2 = data.meals[0].strIngredient2;
//       let measure2 = data.meals[0].strMeasure2;
//       let ingEntry2 = measure2 + " " + ing2;
//       let newLength2 = ingredientsArray.push(ingEntry2);
//       console.log(ingredientsArray[1]);
//
//       let ing3 = data.meals[0].strIngredient3;
//       let measure3 = data.meals[0].strMeasure3;
//       let ingEntry3 = measure3 + " " + ing3;
//       let newLength3 = ingredientsArray.push(ingEntry3);
//       console.log(ingredientsArray[2]);
//
//       let ing4 = data.meals[0].strIngredient4;
//       let measure4 = data.meals[0].strMeasure4;
//       let ingEntry4 = measure4 + " " + ing4;
//       let newLength4 = ingredientsArray.push(ingEntry4);
//       console.log(ingredientsArray[3]);
//
//       let ing5 = data.meals[0].strIngredient5;
//       let measure5 = data.meals[0].strMeasure5;
//       let ingEntry5 = measure5 + " " + ing5;
//       let newLength5 = ingredientsArray.push(ingEntry5);
//       console.log(ingredientsArray[4]);
//
//       let ing6 = data.meals[0].strIngredient6;
//       let measure6 = data.meals[0].strMeasure6;
//       let ingEntry6 = measure6 + " " + ing6;
//       let newLength6 = ingredientsArray.push(ingEntry6);
//       console.log(ingredientsArray[5]);
//
//       let ing7 = data.meals[0].strIngredient7;
//       let measure7 = data.meals[0].strMeasure7;
//       let ingEntry7 = measure7 + " " + ing7;
//       let newLength7 = ingredientsArray.push(ingEntry7);
//       console.log(ingredientsArray[6]);
//
//       let ing7 = data.meals[0].strIngredient7;
//       let measure7 = data.meals[0].strMeasure7;
//       let ingEntry7 = measure7 + " " + ing7;
//       let newLength7 = ingredientsArray.push(ingEntry7);
//       console.log(ingredientsArray[6]);
// 
//       let ing7 = data.meals[0].strIngredient7;
//       let measure7 = data.meals[0].strMeasure7;
//       let ingEntry7 = measure7 + " " + ing7;
//       let newLength7 = ingredientsArray.push(ingEntry7);
//       console.log(ingredientsArray[6]);

//       let ing7 = data.meals[0].strIngredient7;
//       let measure7 = data.meals[0].strMeasure7;
//       let ingEntry7 = measure7 + " " + ing7;
//       let newLength7 = ingredientsArray.push(ingEntry7);
//       console.log(ingredientsArray[6]);

//       let ing7 = data.meals[0].strIngredient7;
//       let measure7 = data.meals[0].strMeasure7;
//       let ingEntry7 = measure7 + " " + ing7;
//       let newLength7 = ingredientsArray.push(ingEntry7);
//       console.log(ingredientsArray[6]);

//       let ing7 = data.meals[0].strIngredient7;
//       let measure7 = data.meals[0].strMeasure7;
//       let ingEntry7 = measure7 + " " + ing7;
//       let newLength7 = ingredientsArray.push(ingEntry7);
//       console.log(ingredientsArray[6]);
//
//       let i;
//       for (i = 0; i < 7; i++) {
//         //This inserts the elements in ingredientsArray as a new entry in the list
//         let newElt = document.createElement("li");
//         let textNode = document.createTextNode(ingredientsArray[i]);
//         newElt.appendChild(textNode);
//         document.querySelector("#dishIngredients").appendChild(newElt);
//       }
//
//       let outputField3 = document.querySelector("#dishInstructions");
//       outputField3.innerHTML = data.meals[0].strInstructions;
//
//
//       let linkToVideo = data.meals[0].strYoutube;
//       console.log(linkToVideo);
//
//       //This function splits the video URL from the API to retrieve only its video ID
//       function getId(url) {
//         const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
//         const match = url.match(regExp);
//
//         return (match && match[2].length === 11) ?
//           match[2] :
//           null;
//       }
//
//       const videoId = getId(linkToVideo);
//       console.log('Video ID:', videoId);
//       newEmbedLink = "https://www.youtube.com/embed/" + videoId; //This combines the video ID that we retrieved from the getID() function with the proper format for embedded YouTube videos
//
//       let outputFieldVideo = document.getElementById("dishVideo");
//       outputFieldVideo.src = newEmbedLink;
//     } else {
//       console.log(`Error occurred. Status: ${request.status}`);
//     }
//   }
//   request.send();
// }
