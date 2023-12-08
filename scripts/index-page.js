// Initialize old comments array
    const oldComments = [
        { name: 'Connor Walton', date: '2021-02-17', comment: 'This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.' },
        { name: 'Emilie Beach', date: '2021-01-09', comment: 'I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.' },
        { name: 'Miles Acosta', date: '2020-12-20', comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough." }
    ];

    // Create comments section
    function generateCommentsSection() {
        const commentsContainer = document.getElementById('commentsContainer');

        // Create main section
        const commentsSection = document.createElement('section');
        commentsSection.classList.add('comment');

        // Create comment__all container
        const commentsAllDiv = document.createElement('div');
        commentsAllDiv.classList.add('comment__all');

        // Create heading
        const h2 = document.createElement('h2');
        h2.textContent = 'Join the Conversation';

        // Create comment__all--boxes container
        const commentsBoxesDiv = document.createElement('div');
        commentsBoxesDiv.classList.add('comment__all--boxes');

        // Add new comment form
        const newCommentArticle = createNewCommentArticle();

        // Add form to boxes container
        commentsBoxesDiv.appendChild(newCommentArticle);

        // Add hr after the new comment form
        const hrAfterForm = document.createElement('hr');
        commentsBoxesDiv.appendChild(hrAfterForm);

        // Add new-posted section
        const newPostedSection = document.createElement('article');
        newPostedSection.classList.add('comment__new-posted');
        commentsBoxesDiv.appendChild(newPostedSection);

        // Add hr after new-posted section
        const hrAfterNewPosted = document.createElement('hr');
        commentsBoxesDiv.appendChild(hrAfterNewPosted);

        // Add old comments to boxes container
        oldComments.forEach(comment => {
            const oldCommentArticle = createOldCommentArticle(comment);
            commentsBoxesDiv.appendChild(oldCommentArticle);

            // Add hr after each old comment
            const hrAfterOldComment = document.createElement('hr');
            commentsBoxesDiv.appendChild(hrAfterOldComment);
        });

        // Add heading and boxes container to comment__all container
        commentsAllDiv.appendChild(h2);
        commentsAllDiv.appendChild(commentsBoxesDiv);

        // Add comment__all container to main section
        commentsSection.appendChild(commentsAllDiv);

        // Add main section to comments container
        commentsContainer.appendChild(commentsSection);
    }

    // Function to create the new comment form
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
        newCommentForm.addEventListener('submit', function (event) {
            event.preventDefault();
            postComment(newCommentForm);
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

    // Function to create an old comment
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
        dateElement.setAttribute('datetime', comment.date);
        dateElement.textContent = new Date(comment.date).toLocaleDateString();

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

    // Function to handle posting new comments
    function postComment(form) {
        const nameInput = form.querySelector('.comment__new--name');
        const commentInput = form.querySelector('.comment__new--comment');

        // Get the current date
        const currentDate = new Date().toLocaleDateString();

        // Create a new comment object
        const newComment = {
            name: nameInput.value,
            date: currentDate,
            comment: commentInput.value
        };

        // Add the new comment to the new-posted section
        const newPostedSection = document.querySelector('.comment__new-posted');
        const newPostedCommentArticle = createOldCommentArticle(newComment);
        newPostedSection.insertBefore(newPostedCommentArticle, newPostedSection.firstChild);

        // Clear the input fields
        nameInput.value = '';
        commentInput.value = '';
    }

    // Call the function to generate the comments section
    generateCommentsSection();