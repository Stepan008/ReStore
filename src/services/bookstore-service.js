export default class BookstoreService { 
    data = [
        {   id: 1,
            title: 'First book',
            author: 'First author',
            price: 1,
            coverImage: 'https://i.pinimg.com/originals/0f/62/65/0f6265fe8dc448b8f032f161db77c033.png'},
        {   id: 2,
            title: 'Second book',
            author: 'Second author',
            price: 2,
            coverImage: 'https://blognumbers.files.wordpress.com/2010/09/2.jpg'},
    ];

    getBooks() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.95) {
                    reject(new Error('pizda'))
                } else {
                    resolve(this.data)
                }
            }, 0);
        });
    }
}