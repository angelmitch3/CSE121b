/* Profile Object  */
let myProfile = {
    /* Name */
    name: "Michael Galang",
  
    /* Photo with attributes */
    photo: "/images/placeholder.png",
  
    /* Favorite Foods List*/
    favoriteFoods: [
      'rice',
      'Pizza',
      'Fried Chicken',
      'Ice Cream',
      'Sphagetti',
    ],
  
    /* Hobbies List */
    hobbies: [
      'Sleeping',
      'Mountain Climbing',
      'Watching anime',
      'Studying',
      'Eating',
    ],
  
    /* Places Lived DataList */
    placesLived: [
      {
        place: "Makati City",
        length: "28 years",
      },
      {
        place: "Quezon City",
        length: "10 years",
      }
    ],
  }
  
  /* DOM Manipulation - Output */
  
  // Assign the value of the name property of the myProfile object to the HTML element with an ID of name
  document.querySelector('#name').textContent = myProfile.name;
  
  // Assign the value of the photo property as the src attribute of the HTML <img> with an ID of photo
  document.querySelector('#photo').src = myProfile.photo;
  
  // Assign the value of the name property as the alt attribute of the HTML <img> with an ID of photo
  document.querySelector('#photo').alt = myProfile.name;
  
  // For each favorite food in the favoriteFoods property
  myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
  });
  
  // For each hobby in the hobbies property
  myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
  
    // Append this new <li> element with content as a child of the HTML for hobbies
    document.querySelector('#hobbies').appendChild(li);
  });
  
  // For each object in the placesLived property
  myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;
  
    // Create an HTML <dd> element and put its length property in the <dd> element
    let dd = document.createElement('dd');
    dd.textContent = place.length;
  
    // Get the dl element by its id
    let dl = document.getElementById('places-lived');
  
    // Append the HTML <dt> and <dd> elements 
    dl.appendChild(dt);
    dl.appendChild(dd);
  });
  