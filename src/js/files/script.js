// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

const chatButton = document.querySelector('.chatting-section__input-button')
const chatForm = document.querySelector('.chatting-section__form')
const chat = document.querySelector('.channel-chat__chat')
const chatInput = document.querySelector('.chatting-section__input')
const chatScroll = document.querySelector('.channel-chat__chat')


chatButton.addEventListener('click', enterMessage);
chatForm.addEventListener('submit', e => e.preventDefault())
chatInput.addEventListener('keypress', inputMessage);

function inputMessage (event) {
    if(event.key === "Enter"){
        chat.insertAdjacentHTML('beforeend', `
            <div class="channel-chat__chat-message">${chatInput.value}</div>
        `)
        chatInput.value = ''
    }  
    chatScroll.scrollTo(0, chatScroll.scrollHeight);
    
}
//
function enterMessage (event) {
    console.log(chatInput.value)
    chat.insertAdjacentHTML('beforeend', `
        <div class="channel-chat__chat-message">${chatInput.value}</div>
        `)
    chatInput.value = ''
    chatScroll.scrollTo(0, chatScroll.scrollHeight);
}


const channelList = document.querySelector('.channels__list');

const channelListItem = document.querySelectorAll('#channel-id');

channelList.addEventListener('click', changeChannel)
function changeChannel (e) {
    channelListItem.forEach(item => {
        item.classList.remove('channel-active')
    })
    e.target.classList.add('channel-active')
}
