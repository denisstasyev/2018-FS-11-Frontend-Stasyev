/* eslint-disable no-underscore-dangle, no-unused-vars */

// import styles from './index.css';
import shadowStyles from './shadow.css';
// import getReadableSize from '../../../utils/getReadableSize';

const slotName = 'message-input';

const template = `
  <style>${shadowStyles.toString()}</style>
  <form class="chat">
    <div class="result"></div>
    <form-input type="text" name="message_text" placeholder="Введите сообщение" slot="message-input">
      <span slot="icon" class="attachment"></span>
    </form-input>
  </form>
`;

class MessageForm extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = template;
    this._initElements();
    this._addHandlers();
  }

  static get observedAttributes() {
    return ['action', 'method'];
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    this._elements.form[attrName] = newVal;
  }

  _initElements() {
    const form = this.shadowRoot.querySelector('form');
    const message = this.shadowRoot.querySelector('.result');
    this._elements = {
      form,
      message,
    };
  }

  _addHandlers() {
    this._elements.form.addEventListener('submit', this._onSubmit.bind(this));
    this._elements.form.addEventListener('keypress', this._onKeyPress.bind(this));
    // this._elements.inputSlot.addEventListener('slotchange', this._onSlotChange.bind(this));
  }

  // _onSubmit(event) {
  //   this._elements.message.innerText = Array.from(this._elements.form.elements)
  //     .map(el => el.value)
  //     .join(', ');
  //   event.preventDefault();
  //   return false;
  // }

  // ////////////////////////////////////////////////

  _onSubmit(event) {
    const messageList = document.body.querySelector('.message-list');

    const newMessage = document.createElement('div');
    newMessage.innerText = Array.from(this._elements.form.elements)
      .map(el => el.value)
      .join(', ');

    if (newMessage.innerText === '') {
      event.preventDefault();
      return false;
    }

    newMessage.className = 'message-test';
    messageList.appendChild(newMessage);

    const formInput = this._elements.form.querySelector('form-input');
    formInput._elements.input.value = '';

    this._elements.form.reset();

    event.preventDefault();
    this._onSubmitFromFriend('Hello');
    return false;
  }

  static _onSubmitFromFriend(text) {
    const messageList = document.body.querySelector('.message-list');

    const newMessage = document.createElement('div');
    newMessage.innerText = text;

    if (newMessage.innerText === '') {
      event.preventDefault();
      return false;
    }

    newMessage.className = 'message-test';
    newMessage.style.color = 'green';
    newMessage.style.alignSelf = 'flex-start';

    messageList.appendChild(newMessage);
    return false;
  }

  // ///////////////////////////////////////////////////////

  _onKeyPress(event) {
    if (event.keyCode === 13) {
      this._elements.form.dispatchEvent(new Event('submit'));
    }
  }
}

customElements.define('message-form', MessageForm);
