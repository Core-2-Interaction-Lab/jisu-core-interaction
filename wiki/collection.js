fetch('collection.json')
	.then(response => response.json())
	.then(collection => {
		// And passes the data to the function, above!
		renderItems(collection.reverse()) // In reverse order
	})

	
// Function to render your items
const renderItems = (collection) => {
	// The `ul` where the items will be inserted
	const collectionList = document.getElementById('collection')


	// Loop through each item in the collection array
	collection.forEach(item => {
		const listItem = document.createElement('li') // Make the `li`

// add an ID to the list item for unique styling
listItem.id = item.id;


const itemImg = document.createElement('img') // And an image
itemImg.src = item.img // Set the `src` attribute from the JSON
listItem.appendChild(itemImg) // And add that too

		// You can make each element inside of that…
		const itemName = document.createElement('name') // Make an `h2`
		itemName.innerHTML = item.name // Put the JSON title inside
		listItem.appendChild(itemName) // And add it to the `li`!

		// You can make each element inside of that…
		const itemTitle = document.createElement('Title') // Make an `h2`
		itemTitle.innerHTML = item.Title // Put the JSON title inside
		listItem.appendChild(itemTitle) // And add it to the `li`!

		// You can make each element inside of that…
		const itemImage = document.createElement('Image') // Make an `h2`
		itemImage.innerHTML = item.Image // Put the JSON title inside
		listItem.appendChild(itemImage) // And add it to the `li`!

	// Add a description under the list item
	const itemDiscription = document.createElement('discription');
	itemDiscription.innerHTML = item.discription; // Put the JSON description inside
	listItem.appendChild(itemDiscription);

	   	// Add a description under the list item
		   const itemField = document.createElement('field');
		   itemField.innerHTML = item.field; // Put the JSON description inside
		   listItem.appendChild(itemField);

	// Add a description under the list item
	const itemPublisher = document.createElement('publisher');
	itemPublisher.innerHTML = item.publisher; // Put the JSON description inside
	listItem.appendChild(itemPublisher);



// Function to render your items
const renderItems = (collection) => {
	// The `ul` where the items will be inserted
	const collectionList = document.getElementById('collection');

	// Loop through each item in the collection array
	collection.forEach(item => {
		const listItem = document.createElement('li') // Make the `li`







		// This can get annoying, so we can use “template literals” instead
		const itemDetails =
			`

					<li>
					
					<h2>${item.name} </h2>
					<p>${item.period} </p>
					<p>${item.publisher} </p>
					<div class="image-wrapper">
					<img src="${item.img}" alt="View of ${item.title}">
						<div class="lightbox">
						<p>${item.discription}</p>
					</div>
		</div>
				
					</li>
			`
		listItem.insertAdjacentHTML('beforeend', itemDetails) // Which can we then insert

		collectionList.appendChild(listItem) // Then add the whole `li` into the `ul`
	})
	



	// now that all html is in the page, we can fire a function which taps into the list items
	createLightboxes(collectionList.querySelectorAll('li'))
}




		collectionList.appendChild(listItem) // Then add the whole `li` into the `ul`
	})
}


