const apiKey = "3076645d-3319-4ec5-bff9-df452bf69940";

class BandSiteApi {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.apiUrl = "https://project-1-api.herokuapp.com/";
    }

    async postComment(comment) {
        const url = `${this.apiUrl}comments?api_key=${this.apiKey}`;
        const data = { content: comment };

        console.log('Posting comment to:', url);

        try {
            const response = await axios.post(url, data);
            console.log('Post comment response:', response.data);
            return response.data; 
        } catch (error) {
            console.error('Error posting comment:', error);
            throw error;
        }
    }

    async getComments() {
        const url = `${this.apiUrl}comments?api_key=${this.apiKey}`;

        try {
            const response = await axios.get(url);
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