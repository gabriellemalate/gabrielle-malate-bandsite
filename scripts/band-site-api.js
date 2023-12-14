// const apiKey = "3076645d-3319-4ec5-bff9-df452bf69940";

// class BandSiteApi {
//     constructor(apiKey) {
//         this.apiKey = apiKey;
//         this.apiUrl = "https://project-1-api.herokuapp.com/";
//     }

//     async postComment(comment) {
//         const url = `${this.apiUrl}/post_comment`;
//         const headers = { Authorization: `Bearer ${this.apiKey}` };
//         const data = { content: comment };

//         await axios('${this.baseUr1}/comments/?api_key=${this.apiKey}', request)
//             method: 'POST',
//             headers: {content-type: 'application/json'},
//             body: JSON.stringify(data),
//         }
//             .then(response => response.json());
//     }

//     async getComments() {
//         const url = `${this.apiUrl}/get_comments`;
//         const headers = { Authorization: `Bearer ${this.apiKey}` };

//         await axios(url, { headers })
//             .then(response => response.json());
//     }
// }

// const bandSiteApi = new BandSiteApi(apiKey);

// // post a comment
// const commentToPost = 'This is a great website!';
// bandSiteApi.postComment(commentToPost)
//     .then(postResponse => console.log('Post Comment Response:', postResponse))
//     .catch(error => console.error('Error posting comment:', error));

// // get comments
// bandSiteApi.getComments()
//     .then(getCommentsResponse => console.log('Get Comments Response:', getCommentsResponse))
//     .catch(error => console.error('Error getting comments:', error));

// // posting new comments
// function postComment(form) {
//     const nameInput = form.querySelector('.comment__new--name');
//     const commentInput = form.querySelector('.comment__new--comment');
//     // current date
//     const currentDate = new Date().toLocaleDateString();

//     // create a new comment object
//     const newComment = {
//         name: nameInput.value,
//         date: currentDate,
//         comment: commentInput.value
//     };

//     // send the new comment to the server using the BandSiteApi class
//     bandSiteApi.postComment(newComment)
//         .then(postResponse => {
//             // assuming api returns a response with the new comment details
//             const newPostedSection = document.querySelector('.comment__new-posted');
//             const newPostedCommentArticle = createOldCommentArticle(postResponse);
//             newPostedSection.insertBefore(newPostedCommentArticle, newPostedSection.firstChild);

//             // hr after each new posted comment
//             const hrAfterNewPostedComment = document.createElement('hr');
//             newPostedSection.insertBefore(hrAfterNewPostedComment, newPostedSection.firstChild.nextSibling);

//             // clear input fields
//             nameInput.value = '';
//             commentInput.value = '';
//         })
//         .catch(error => {
//             console.error('Error posting comment:', error);
//         });
// }

const apiKey = "3076645d-3319-4ec5-bff9-df452bf69940";

class BandSiteApi {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.apiUrl = "https://project-1-api.herokuapp.com/";
    }

    async postComment(comment) {
        const url = `${this.apiUrl}comments?api_key=${this.apiKey}`;
        const headers = { Authorization: `Bearer ${this.apiKey}` };
        const data = { content: comment };

        console.log('Posting comment to:', url);

        try {
            const response = await axios.post(url, data, { headers });
            console.log('Post comment response:', response.data);
            return response.data; 
        } catch (error) {
            console.error('Error posting comment:', error);
            throw error;
        }
    }

    async getComments() {
        const url = `${this.apiUrl}comments?api_key=${this.apiKey}`;
        const headers = { Authorization: `Bearer ${this.apiKey}` };

        try {
            const response = await axios.get(url, { headers });
            return response.data;
        } catch (error) {
            console.error('Error getting comments:', error);
            throw error;
        }
    }
}

const bandSiteApi = new BandSiteApi(apiKey);

// post a comment
const commentToPost = 'This is a great website!';
bandSiteApi.postComment(commentToPost)
    .then(postResponse => console.log('Post Comment Response:', postResponse))
    .catch(error => console.error('Error posting comment:', error));

// get comments
bandSiteApi.getComments()
    .then(getCommentsResponse => console.log('Get Comments Response:', getCommentsResponse))
    .catch(error => console.error('Error getting comments:', error));

// posting new comments
function postComment(form) {
    const nameInput = form.querySelector('.comment__new--name');
    const commentInput = form.querySelector('.comment__new--comment');
    // current date
    const currentDate = new Date().toLocaleDateString();

    // create a new comment object
    const newComment = {
        name: nameInput.value,
        date: currentDate,
        comment: commentInput.value
    };

    // send the new comment to the server using the BandSiteApi class
    bandSiteApi.postComment(newComment)
        .then(postResponse => {
            // assuming api returns a response with the new comment details
            const newPostedSection = document.querySelector('.comment__new-posted');
            const newPostedCommentArticle = createOldCommentArticle(postResponse);
            newPostedSection.insertBefore(newPostedCommentArticle, newPostedSection.firstChild);

            // hr after each new posted comment
            const hrAfterNewPostedComment = document.createElement('hr');
            newPostedSection.insertBefore(hrAfterNewPostedComment, newPostedSection.firstChild.nextSibling);

            // clear input fields
            nameInput.value = '';
            commentInput.value = '';
        })
        .catch(error => {
            console.error('Error posting comment:', error);
        });
}


// just for reference to check probs
// class Burger {
//     constructor(toppings, protein, containsGluten) {
//         this.toppings = toppings;
//         this.protein = protein;
//         this.containsGluten = containsGluten;
//     }
//     describe() {
//         console.log(`Burger with ${this.protein} and toppings: ${this.toppings.join(', ')}. Gluten-free: ${this.containsGluten}`);
//     }
// }

// // 2 instances of Burger class
// const burger1 = new Burger(['lettuce', 'tomato', 'cheese'], 'beef', false);
// const burger2 = new Burger(['onion', 'mushroom', 'bacon'], 'chicken', true);

// //logs
// console.log("Burger 1:");
// console.log("Toppings:", burger1.toppings);
// console.log("Protein:", burger1.protein);
// console.log("Contains Gluten:", burger1.containsGluten);
// burger1.describe();

// console.log("\nBurger 2:");
// console.log("Toppings:", burger2.toppings);
// console.log("Protein:", burger2.protein);
// console.log("Contains Gluten:", burger2.containsGluten);
// burger2.describe();



// //PART 2

// class BurgerWithSide extends Burger {
//     constructor(toppings, protein, containsGluten, side) {
//         super(toppings, protein, containsGluten);
//         this.side = side;
//     }

//     //booleab method if yes or no side of fries
//     friesWithThat() {
//         //toLowerCase() handling case-insensitive comparison
//         return this.side.toLowerCase() === 'fries';
//     }
// }

// // Testing Burger class methods
// const burger3 = new Burger(['lettuce', 'tomato', 'cheese'], 'beef', false);
// console.log("Burger 3:");
// burger1.describe();

// const burger4 = new Burger(['onion', 'mushroom', 'bacon'], 'chicken', true);
// console.log("\nBurger 4:");
// burger2.describe();

// // Testing BurgerWithSide class methods
// const burgerWithSide = new BurgerWithSide(['lettuce', 'tomato', 'cheese'], 'beef', false, 'Fries');
// console.log("\nBurger with Side:");
// console.log("Toppings:", burgerWithSide.toppings);
// console.log("Protein:", burgerWithSide.protein);
// console.log("Contains Gluten:", burgerWithSide.containsGluten);
// console.log("Side:", burgerWithSide.side);
// burgerWithSide.describe();

// // Testing friesWithThat() method
// console.log("\nFries with that?");
// console.log("Fries with that? (true/false):", burgerWithSide.friesWithThat());


// /////


// // async postComment (commentobj){
// //     const request = {
// //     method: 'POST',
// //     headers: {
// //     "Content-Type': 'application/json'
// //     },
// //     body: JSON.stringify(commentObj)
// //     };

// // await fetch(${this.baseUr1}/comments/?api_key=${this.apiKey}, request)
// // .then(request=› {
// // console.log (request. data.comment);
// // 7)
// // .catch(error=>{
// // console. log(error);})