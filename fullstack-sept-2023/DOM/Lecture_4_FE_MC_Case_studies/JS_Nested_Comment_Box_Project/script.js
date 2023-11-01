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
       this.commentButton.addEventListener('click',this.addReply.bind(this, this.commentInput, this.commentList));
    }

    addReply(inputBox, replyContainer){
        // input box or value
        const inputValue = inputBox.value.trim();
        if(!!inputValue){
            const li = this.createCommentElement(inputValue);
            replyContainer.appendChild(li);
            inputBox.value = '';  
            console.log(!!replyContainer.querySelector('.inputNBtn'));
            if(!!replyContainer.querySelector('.inputNBtn')) {
                replyContainer.querySelector('.inputNBtn').remove();
            }
          
        }
    }

    createCommentElement(inputValue){
        const li = document.createElement('li');
        const replyBtn = document.createElement('button');
        replyBtn.textContent = 'Reply';
        replyBtn.classList.add('replyBtn');
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

        if(li.querySelector('.inputNBtn'))
            return;

        console.log(li);
        const inputNBtn = document.createElement('div');
        inputNBtn.classList.add('inputNBtn');
        const replyContainer = document.createElement('div');
        replyContainer.classList.add('reply-container');
        const inputBox = document.createElement('input');
        const btn = document.createElement('button');
        btn.textContent = 'Reply'
        btn.addEventListener('click', this.addReply.bind(this, inputBox, replyContainer))
        inputNBtn.appendChild(inputBox);
        inputNBtn.appendChild(btn);
        replyContainer.appendChild(inputNBtn);
        li.appendChild(replyContainer);

    }


   
}

new CommentBox();