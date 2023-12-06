
// Function that generates the comments section
function generateCommentsSection() {
    const commentsContainer = document.getElementById('commentsContainer');

    const commentsData = [
        { name: 'Connor Walton', date: '2021-02-17', comment: 'This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.' },
        { name: 'Emilie Beach', date: '2021-01-09', comment: 'I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.' },
        { name: 'Miles Acosta', date: '2020-12-20', comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough." }
    ];

    const commentsSection = document.createElement('section');
    commentsSection.classList.add('comment');

    const commentsAllDiv = document.createElement('div');
    commentsAllDiv.classList.add('comment__all');

    const h2 = document.createElement('h2');
    h2.textContent = 'Join the Conversation';

    const commentsBoxesDiv = document.createElement('div');
    commentsBoxesDiv.classList.add('comment__all--boxes');

    // Add new comment form
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
    newCommentForm.setAttribute('action', 'post_comment.php');
    newCommentForm.setAttribute('method', 'post');

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

    commentsBoxesDiv.appendChild(newCommentArticle);

    // Add horizontal line after each comment
    const addHorizontalLine = () => {
        const hr = document.createElement('hr');
        commentsBoxesDiv.appendChild(hr);
    };

    commentsData.forEach(comment => {
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

        commentsBoxesDiv.appendChild(oldCommentArticle);

        addHorizontalLine();
    });

    commentsAllDiv.appendChild(h2);
    commentsAllDiv.appendChild(commentsBoxesDiv);

    commentsSection.appendChild(commentsAllDiv);

    commentsContainer.appendChild(commentsSection);
}

// Call the function to generate the comments section
generateCommentsSection();