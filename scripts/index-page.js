// comments section
async function generateCommentsSection() {
    const commentsContainer = document.getElementById('commentsContainer');

    try {
        // get old comments
        const oldComments = await bandSiteApi.getComments();

        // display old comments
        oldComments.forEach(comment => {
            const oldCommentArticle = createOldCommentArticle(comment);
            commentsContainer.appendChild(oldCommentArticle);

            // hr after each old comment
            const hrAfterOldComment = document.createElement('hr');
            commentsContainer.appendChild(hrAfterOldComment);
        });
    } catch (error) {
        console.error('Error getting comments:', error);
    }

        // Create a section for new posted comments
        const newPostedSection = document.createElement('section');
        newPostedSection.classList.add('comment__new-posted');
        commentsContainer.appendChild(newPostedSection);
}

    const commentsContainer = document.getElementById('commentsContainer');

    // main section
    const commentsSection = document.createElement('section');
    commentsSection.classList.add('comment');

    // comment__all container
    const commentsAllDiv = document.createElement('div');
    commentsAllDiv.classList.add('comment__all');

    // heading
    const h2 = document.createElement('h2');
    h2.textContent = 'Join the Conversation';

    // comment__all--boxes container
    const commentsBoxesDiv = document.createElement('div');
    commentsBoxesDiv.classList.add('comment__all--boxes');

    // new comment form
    const newCommentArticle = createNewCommentArticle();

    // form to boxes container
    commentsBoxesDiv.appendChild(newCommentArticle);

    // hr after the new comment form
    const hrAfterForm = document.createElement('hr');
    commentsBoxesDiv.appendChild(hrAfterForm);

    // new-posted section
    const newPostedSection = document.createElement('article');
    newPostedSection.classList.add('comment__new-posted');
    commentsBoxesDiv.appendChild(newPostedSection);;

    // heading and boxes container to comment__all container
    commentsAllDiv.appendChild(h2);
    commentsAllDiv.appendChild(commentsBoxesDiv);

    // comment__all container to main section
    commentsSection.appendChild(commentsAllDiv);

    // main section to comments container
    commentsContainer.appendChild(commentsSection);


// new comment form
function createNewCommentArticle() {
    const newCommentArticle = document.createElement('article');
    newCommentArticle.classList.add('comment__new');

    const newCommentDiv = document.createElement('div');
    newCommentDiv.classList.add('comment__entirely');

    const newCommentImg = document.createElement('img');
    newCommentImg.classList.add('comment__new--img');
    newCommentImg.setAttribute('src', './assets/Images/Mohan-muruge.jpg');
    newCommentImg.setAttribute('alt', "Mohan's Photo");

    const newCommentForm = document.createElement('form');
    newCommentForm.classList.add('comment__entirely--text');
    newCommentForm.setAttribute('id', 'newCommentForm'); 
    newCommentForm.addEventListener('submit', function (event) {
        event.preventDefault();
        postComment(newCommentForm);
    submitButton.addEventListener('submit', function (event) {
        event.preventDefault();
        postComment(newCommentForm);})
    });

    const nameLabel = document.createElement('h4');
    nameLabel.textContent = 'NAME';

    const nameTextarea = document.createElement('textarea');
    nameTextarea.classList.add('comment__new--name');
    nameTextarea.setAttribute('type', 'text');
    nameTextarea.setAttribute('placeholder', 'Enter your name');
    nameTextarea.style.resize = 'none';

    const commentLabel = document.createElement('h4');
    commentLabel.textContent = 'COMMENT';

    const commentTextarea = document.createElement('textarea');
    commentTextarea.classList.add('comment__new--comment');
    commentTextarea.setAttribute('type', 'text');
    commentTextarea.setAttribute('placeholder', 'Add a new comment');
    commentTextarea.style.resize = 'none';

    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.textContent = 'COMMENT';

    newCommentForm.appendChild(nameLabel);
    newCommentForm.appendChild(nameTextarea);
    newCommentForm.appendChild(commentLabel);
    newCommentForm.appendChild(commentTextarea);
    newCommentForm.appendChild(submitButton);

    newCommentDiv.appendChild(newCommentImg);
    newCommentDiv.appendChild(newCommentForm);
    newCommentArticle.appendChild(newCommentDiv);

    return newCommentArticle;
}

// create an old comment
function createOldCommentArticle(comment) {
    const oldCommentArticle = document.createElement('article');
    oldCommentArticle.classList.add('comment__old');

    const oldCommentDiv = document.createElement('div');
    oldCommentDiv.classList.add('comment__entirely');

    const img = document.createElement('img');
    img.setAttribute('src', './assets/Images/empty-image.png');
    img.setAttribute('alt', `${comment.name}'s Photo`);

    const textDiv = document.createElement('div');
    textDiv.classList.add('comment__entirely--text');

    const topDiv = document.createElement('div');
    topDiv.classList.add('comment__old--top');

    const nameH3 = document.createElement('h3');
    nameH3.textContent = comment.name;

    const dateElement = document.createElement('time');
    // dateElement.setAttribute('datetime', comment.date);
    dateElement.textContent = new Date(comment.timestamp).toLocaleDateString();

    const commentP = document.createElement('p');
    commentP.textContent = comment.comment;

    topDiv.appendChild(nameH3);
    topDiv.appendChild(dateElement);

    textDiv.appendChild(topDiv);
    textDiv.appendChild(commentP);

    oldCommentDiv.appendChild(img);
    oldCommentDiv.appendChild(textDiv);

    oldCommentArticle.appendChild(oldCommentDiv);

    return oldCommentArticle;
}

// posting new comments
// Update the postComment function
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
            // Assuming api returns a response with the new comment details
            // Display the new comment on the page
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


generateCommentsSection();

//add sort function after getting comments from api