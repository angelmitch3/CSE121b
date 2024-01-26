window.onload = function() {
    /* Step 2 - Variables */
    let fullName = 'Michael Galang';
    let currentYear = new Date().getFullYear();
    let profilePicture = 'images/placeholder.png';

    /* Step 3 - Element Variables */
    const nameElement = document.getElementById('name');
    let foodElement = document.getElementById('food');
    let yearElement = document.querySelector('#year');
    let imageElement = document.querySelector('#profilePicture');

    /* Step 4 - Adding Content */
    if(nameElement) {
        nameElement.innerHTML = `<strong>${fullName}</strong>`;
    }
    if(yearElement) {
        yearElement.textContent = currentYear;
    }
    if(imageElement) {
        imageElement.setAttribute('src', profilePicture); 
        imageElement.setAttribute('alt', `Profile image of ${fullName}`);
    }

    /* Step 5 - Array */
    // Declare an array variable to hold your favorite foods
    let favFoods = ['Pizza', 'Pasta', 'Ice Cream'];

    // Modify the HTML element with the id of 'food' to display your favorite foods array
    if(foodElement) {
        foodElement.innerHTML = favFoods.join(', ');
    }

    // Declare and instantiate a variable to hold another single favorite food item
    let newFavoriteFood = 'Sushi';

    // Add the value stored in this new variable to your favorite food array
    favFoods.push(newFavoriteFood);

    // Append the new array values onto the displayed content of the HTML element with the id of food
    if(foodElement) {
        foodElement.innerHTML += `<br>${favFoods.join(', ')}`;
    }

    // Remove the first element in the favorite food array
    favFoods.shift();

    // Again, append the array output showing the modified array
    if(foodElement) {
        foodElement.innerHTML += `<br>${favFoods.join(', ')}`;
    }

    // Remove the last element in the favorite food array
    favFoods.pop();

    // Append the array output with this final modified favorite foods array
    if(foodElement) {
        foodElement.innerHTML += `<br>${favFoods.join(', ')}`;
    }
    console.log({favFoods});
}
