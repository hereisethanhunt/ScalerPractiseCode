/***
 *  Usecases of Nested comment box:
 *    -  blogs web apps.
 *    -  JIRA or confluence page.
 *    -  Facebook, instagram, twitter -> Social media web apps / apps
 *    -  slack channel, Microsoft Teams 
 *  
 *  Requirements:
 *    - you need create an input field to take the text and a button for adding a comment.
 *    - After clicking of button need to add the text entered in input field with a reply button
 *    
 *  Approach:
 * 
 *    - need a input field and a button
 *    - attach an event on add button and create an element with entered text and reply button
 *    - if i click on reply button, again input field with button has to apprear with respect to that comment/ thread.
 * 
 */
class CommentBox {
    constructor() {
       this.commentInput = document.querySelector('#commentInput');
       this.commentButton = document.querySelector('#addCommentBtn');
       this.commentList = document.querySelector('#commentList');
       this.addComment = this.addComment.bind(this);
       this.commentButton.addEventListener('click',this.addComment);
    }

    addComment() {
        const inputValue = this.commentInput.value.trim();
        console.log(inputValue);
        if(!!inputValue) 
        {
            const li = this.createCommentElement(inputValue);
            this.commentList.appendChild(li);
            this.commentInput.value = '';
        }

    }

    createCommentElement(inputValue){
        const li = document.createElement('li');
        const replyBtn = document.createElement('button');
        replyBtn.textContent = 'Reply...';
        replyBtn.addEventListener('click', this.showReplyInput.bind(this));
        const div = document.createElement('div');
        div.textContent = inputValue;

        li.appendChild(div);
        li.appendChild(replyBtn);

        return li;
    }

    showReplyInput(e){
        console.log(this);
        console.log(e.target.parentElement);

        const li = e.target.parentElement;
        const replyContainer = document.createElement('div');
        replyContainer.classList.add('reply-container');
        const inputBox = document.createElement('input');
        const btn = document.createElement('button');
        btn.textContent = 'reply...'
        btn.addEventListener('click', this.addReply.bind(this, inputBox, replyContainer))
        replyContainer.appendChild(inputBox);
        replyContainer.appendChild(btn);
        li.appendChild(replyContainer);

    }

    addReply(inputBox, replyContainer){
        const inputvalue = inputBox.value.trim(); // continue in next class
        
        // if(!!inputvalue){
        //     const li = this.createCommentElement(inputvalue);
        //     this.commentList.appendChild(li);
        //     this.commentInput.value = '';
        // }
    }
   
}

new CommentBox();