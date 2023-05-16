// Function to render your items
const renderItems = (collection) => {
	// The `ul` where the items will be inserted
	const collectionList = document.getElementById('collection')


	// Loop through each item in the collection array
	collection.forEach(item => {
		const listItem = document.createElement('li') // Make the `li`



		const itemImage = document.createElement('img') // And an image
		itemImage.src = item.Image // Set the `src` attribute from the JSON
		listItem.appendChild(itemImage) // And add that too

		const yearOfBite = item.DateOfBite.split(" ")[2];


		// This can get annoying, so we can use “template literals” instead
		const itemDetails =
			`
				<p> Species : ${item.species}</p>
				<p> Sex : ${item.sex} </p>
				<p> Borough : ${item.Borough} </p>	
				<p>Date of bite : ${yearOfBite} </p>
				
			`
		listItem.insertAdjacentHTML('beforeend', itemDetails) // Which can we then insert



		collectionList.appendChild(listItem) // Then add the whole `li` into the `ul`
	})
}



// Fetch gets your JSON file…
fetch('assets/collection.json')
	.then(response => response.json())
	.then(collection => {
		// And passes the data to the function, above!
		const collection2018 = collection.filter(item => {
			const yearOfBite = item.DateOfBite.split(" ")[2];
			return yearOfBite == '2018'
		})

		const collectionUndefined = collection.filter(item => {
			const species = item.species
		})

		console.log(collection2018)
		renderItems(collection2018) // In reverse order
	})
