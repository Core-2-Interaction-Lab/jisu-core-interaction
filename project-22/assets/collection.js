// hijack the wheel event (i.e. scroll attempts) to move along the x-axis
window.addEventListener('wheel', e => {
	document.body.scrollBy(e.deltaY / 3, 0);
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


		// You can make each element inside of that…
		const itemName = document.createElement('name') // Make an `h2`
		itemName.innerHTML = item.name // Put the JSON title inside
		listItem.appendChild(itemName) // And add it to the `li`!

		// You can make each element inside of that…
		const itemPublishedYear = document.createElement('publishedyear') // Make an `h2`
		itemPublishedYear.innerHTML = item.publishedYear // Put the JSON title inside
		listItem.appendChild(itemPublishedYear) // And add it to the `li`!

		const itemImg = document.createElement('img') // And an image
		itemImg.src = item.img // Set the `src` attribute from the JSON
		listItem.appendChild(itemImg) // And add that too

	// Add a description under the list item
	const itemDiscription = document.createElement('discription');
	itemDiscription.innerHTML = item.discription; // Put the JSON description inside
	listItem.appendChild(itemDiscription);

	// Add a description under the list item
	const itemPublisher = document.createElement('publisher');
	itemPublisher.innerHTML = item.publisher; // Put the JSON description inside
	listItem.appendChild(itemPublisher);

   	// Add a description under the list item
	const itemField = document.createElement('field');
	itemField.innerHTML = item.field; // Put the JSON description inside
	listItem.appendChild(itemField);

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


		// You can build logic from your data, too
		if (!item.alsoWriter) { // If this is `false`
			listItem.classList.add('faded') // Add this class to the whole `li`
		}

		collectionList.appendChild(listItem) // Then add the whole `li` into the `ul`
	})
}




// Fetch gets your JSON file…
fetch('assets/collection.json')
	.then(response => response.json())
	.then(collection => {
		// And passes the data to the function, above!
		renderItems(collection.reverse()) // In reverse order
	})

// div 엘리먼트 찾기
const myDiv = document.getElementById('myDiv');

// div를 클릭하면 페이지 스크롤 다운
myDiv.addEventListener('click', () => {
  window.scrollBy({
    top: window.innerHeight, // 스크롤 다운할 거리
    behavior: 'smooth' // 부드러운 스크롤 효과 적용
  });
});

const createLightboxes = listItems => {
	listItems.forEach(item => {
		item.addEventListener('click', () => {
			item.classList.toggle('lightbox-enabled')
		})
	})
}