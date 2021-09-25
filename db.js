const data = {
   userDetails: [
      {
         id: 1,
         fullName: 'John Doe',
      },
   ],
   categories: [
      {
         id: 1,
         category: 'Programming',
         total_bookmarked: 2,
      },
      {
         id: 2,
         category: 'Cooking',
         total_bookmarked: 143,
      },
      {
         id: 3,
         category: 'Music',
         total_bookmarked: 0,
      },
      {
         id: 4,
         category: 'New Ideas',
         total_bookmarked: 0,
      },
   ],
   items: [
      {
         image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
         title: 'Ham Burger',
         isFavorite: true,
         isBookmarked: true,
         labelId: 1,
         catId: 2,
         id: 1,
      },
      {
         image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80',
         title: 'Veg Burger',
         isFavorite: true,
         isBookmarked: true,
         labelId: 1,
         catId: 2,
         id: 5,
      },
      {
         image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80',
         title: 'Veg Burger',
         isFavorite: false,
         isBookmarked: true,
         labelId: 1,
         catId: 2,
         id: 6,
      },
      {
         image: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGl6emF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
         title: 'Al-Fungi Pizza',
         isFavorite: true,
         isBookmarked: true,
         labelId: 2,
         catId: 2,
         id: 2,
      },
      {
         image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
         title: 'Pizza with burries',
         isFavorite: false,
         isBookmarked: false,
         labelId: 2,
         catId: 2,
         id: 7,
      },
      {
         image: 'https://images.unsplash.com/photo-1474600056930-615c3d706456?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80',
         title: 'Peporini Pizza ',
         isFavorite: false,
         isBookmarked: false,
         labelId: 2,
         catId: 2,
         id: 8,
      },
      {
         image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1129&q=80',
         title: 'Chicken Steam Momo',
         isFavorite: false,
         isBookmarked: true,
         labelId: 4,
         catId: 2,
         id: 3,
      },
      {
         image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1129&q=80',
         title: 'Chicken Steam Momo',
         isFavorite: false,
         isBookmarked: true,
         labelId: 5,
         catId: 2,
         id: 4,
      },
      {
         image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1789&q=80',
         title: 'Java Programming',
         isFavorite: false,
         isBookmarked: false,
         labelId: 7,
         catId: 1,
         id: 9,
      },
      {
         image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1789&q=80',
         title: 'C# Dot Net',
         isFavorite: true,
         isBookmarked: false,
         labelId: 6,
         catId: 1,
         id: 10,
      },
   ],
   labels: [
      {
         name: 'Burger',
         catId: 2,
         id: 1,
      },
      {
         name: 'Pizza',
         catId: 2,
         id: 2,
      },
      {
         name: 'Nanza',
         catId: 2,
         id: 3,
      },
      {
         name: 'Momo',
         catId: 2,
         id: 4,
      },
      {
         name: 'Chinese',
         catId: 2,
         id: 5,
      },
      {
         name: 'C#',
         id: 6,
      },
      {
         name: 'Java',
         catId: 1,
         id: 7,
      },
      {
         name: 'Python',
         catId: 1,
         id: 8,
      },
      {
         name: 'C++',
         catId: 1,
         id: 9,
      },
      {
         name: 'Javascript',
         catId: 1,
         id: 10,
      },
      {
         name: 'Dart',
         catId: 1,
         id: 11,
      },
      {
         name: 'Hip Hop',
         catId: 3,
         id: 11,
      },
      {
         name: 'Rock',
         catId: 3,
         id: 12,
      },
      {
         name: 'Alternative',
         catId: 3,
         id: 13,
      },
      {
         name: 'Pop',
         catId: 3,
         id: 14,
      },
      {
         name: 'AI',
         catId: 4,
         id: 15,
      },
      {
         name: 'App',
         catId: 4,
         id: 16,
      },
   ],
};

module.exports = data;
