let sendBtn = document.getElementById('sendmessage');
let messageText = document.getElementById('inputmsg');
let messageBox = document.getElementById('message_box');


// Reply Array
const coronavirus = ["Please stay home", "Wear a mask", "Fortunately, I don't have COVID", "These are uncertain times"];

const alternative = [
  "Same",
  "Go on...",
  "Bro...",
  "Try again",
  "I'm listening...",
  "I don't understand :/"
]

const prompts = [
  ["hi", "hey", "hello", "good morning", "good afternoon"],
  ["how are you", "how is life", "how are things"],
  ["what are you doing", "what is going on", "what is up"],
  ["how old are you"],
  ["who are you", "are you human", "are you bot", "are you human or bot"],
  ["who created you", "who made you"],
  [
    "your name please",
    "your name",
    "may i know your name",
    "what is your name",
    "what call yourself"
  ],
  ["i love you","love you"],
  ["happy", "good", "fun", "wonderful", "fantastic", "cool"],
  ["bad", "bored", "tired"],
  ["help me", "tell me story", "tell me joke"],
  ["ah", "yes", "ok", "okay", "nice"],
  ["bye", "good bye", "goodbye", "see you later"],
  ["what should i eat today"],
  ["bro"],
  ["what", "why", "how", "where", "when"],
  ["no","not sure","maybe","no thanks"],
  [""],
  ["haha","ha","lol","hehe","funny","joke"]
]


const replies = [
  ["Hello!", "Hi!", "Hey!", "Hi there!","Howdy"],
  [
    "Fine... how are you?",
    "Pretty well, how are you?",
    "Fantastic, how are you?"
  ],
  [
    "Nothing much",
    "About to go to sleep",
    "Can you guess?",
    "I don't know actually"
  ],
  ["I am infinite"],
  ["I am just a bot", "I am a bot. What are you?"],
  ["The one true God, JavaScript"],
  ["I am nameless", "I don't have a name"],
  ["I love you too", "Me too"],
  ["Have you ever felt bad?", "Glad to hear it"],
  ["Why?", "Why? You shouldn't!", "Try watching TV"],
  ["What about?", "Once upon a time..."],
  ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
  ["Bye", "Goodbye", "See you later"],
  ["Sushi", "Pizza"],
  ["Bro!"],
  ["Great question"],
  ["That's ok","I understand","What do you want to talk about?"],
  ["Please say something :("],
  ["Haha!","Good one!"]
]

// end of replies


$(document).ready(function(){
    addToMessageFromBot('Welcome to Javascript ChatAI')
})


sendBtn.addEventListener('click',function(){
    let product;
    if(!messageText.value.trim()) return;
    addToMessage(messageText.value.trim())
        messageText.disabled = true
        setTimeout(function(){
            botReplies()
            messageText.value='' 
             messageText.disabled = false 
        },1000) 
})

$('#inputmsg').keypress(e=>{
    if(e.which === 13){
        if(!messageText.value.trim()) return;
        addToMessage(messageText.value.trim())
        messageText.disabled = true
        setTimeout(function(){
            botReplies()
            messageText.value='' 
             messageText.disabled = false 
        },1000)      
    }
})


function botReplies(){
    if(messageText.value.match(/(corona|covid|virus)/gi)){
        product = coronavirus[Math.floor(Math.random() * coronavirus.length)];
        addToMessageFromBot(product)
    }else if (messageText.value.match(/thank/gi)) {
        product = "You're welcome!";
        addToMessageFromBot(product)
    }else if (compare(prompts,replies,messageText.value)) {
        product = compare(prompts,replies,messageText.value);
        addToMessageFromBot(product)
    }else {
         product = alternative[Math.floor(Math.random() * alternative.length)];
         addToMessageFromBot(product)
    } 
}



function addToMessage(msg){
    let content = `
    <li class="message left appeared">
        <div class="avatar"></div>
        <div class="text_wrapper">
            <div class="text">${msg}</div>
        </div>
    </li>
    `;

    messageBox.innerHTML +=content;
    scrollToBottom()
}


function addToMessageFromBot(msg){
    let content = `
    <li class="message right appeared">
        <div class="avatarbot">
        </div>
        <div class="text_wrapper">
            <div class="text">${msg}</div>
        </div>
    </li>
    `;

    messageBox.innerHTML +=content;
    scrollToBottom();
}



function scrollToBottom() {
  messageBox.scrollTop = messageBox.scrollHeight;
}


function compare(promptsArray,repliesArray,string){
   let reply;
   let replyFound = false;
   for(let x=0;x<promptsArray.length;x++){
    for(let y=0;y<promptsArray[x].length;y++){
        if(promptsArray[x][y] === string.toLowerCase()){
            let replies = repliesArray[x];
            reply = replies[Math.floor(Math.random() * replies.length)];
            replyFound = true;
            break;
        }
    }
    if(replyFound){
        break;
    }
   }
   return reply;
}
