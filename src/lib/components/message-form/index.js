/* eslint-disable no-underscore-dangle, no-unused-vars */

// import styles from './index.css';
import shadowStyles from './shadow.css';
// import getReadableSize from '../../../utils/readableSize/getReadableSize';

const slotName = 'message-input';

const template = `
  <style>${shadowStyles.toString()}</style>
  <form>
  
    <div id="message-list" class="message-list"> 
      <div class="message">
        <div class="message-from">Привет, как дела?</div>
      </div>
      <div class="message">
        <div class="message-to">Хорошо!</div>
      </div>
    </div>

    <form-input type="text" name="message_text" placeholder="Введите сообщение" slot="message-input">
      <span id="selection" class="attachmentIcon" slot="icon">
        <input id="attachment" type="file" multiple class="attachmentFile">
      </span>
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
    const message = this.shadowRoot.querySelector('form-input');
    const messageList = this.shadowRoot.querySelector('#message-list');
    const selection = this.shadowRoot.querySelector('#selection');
    const attachment = this.shadowRoot.querySelector('#attachment');
    this._elements = {
      form,
      message,
      messageList,
      selection,
      attachment,
    };
    this._initMessageList();
  }

  _addHandlers() {
    this._elements.form.addEventListener('submit', this._onSubmit.bind(this));
    this._elements.form.addEventListener('keypress', this._onKeyPress.bind(this));
    // eslint-disable-next-line func-names
    this.addEventListener('new-message', function (event) {
      this._onNewMessage(event);
    });

    this._elements.selection.addEventListener('click', this._onSelectFiles.bind(this));
    this._elements.attachment.addEventListener('change', this._onAttachFiles.bind(this));
    this._elements.messageList.addEventListener('dragenter', this._onDragenter.bind(this));
    this._elements.messageList.addEventListener('dragover', this._onDragover.bind(this));
    this._elements.messageList.addEventListener('drop', this._onDrop.bind(this));
    // this._elements.inputSlot.addEventListener('slotchange', this._onSlotChange.bind(this));
  }

  _initMessageList() {
    Array.from(this._getMessageListFromLocalStorage()).map((message) => {
      this._sendMessage(message);
      return this;
    });
  }

  _getStorage() {
    return localStorage;
  }

  _getMessageListFromLocalStorage() {
    let messageList = this._getStorage().getItem('message-list');
    if (messageList) {
      messageList = JSON.parse(messageList);
    } else {
      messageList = []; // Array
    }
    return messageList;
  }

  _addMessageToLocalStorage(text) {
    const messageList = this._getMessageListFromLocalStorage();
    if (text) {
      Array.from(messageList).push(text);
    }
    this._getStorage().setItem('message-list', JSON.stringify(messageList));
  }

  _sendMessage(text) {
    const message = document.createElement('div');
    message.className = 'message';
    const messageFrom = document.createElement('div');
    messageFrom.innerText = text;
    messageFrom.className = 'message-from';
    message.appendChild(messageFrom);
    this._elements.messageList.appendChild(message);
    // this._elements.attachment.dispatchEvent(new Event('send-message'));
  }

  _onSubmit(event) {
    const message = Array.from(this._elements.form.elements).map(el => el.value)[1];
    // const message = Array.from(this._elements.form.elements)
    //   .map(el => el.value)
    //   .join(', ');
    console.log(message);
    if (message === '') {
      event.preventDefault();
      return false;
    }
    if (message === 'geolocation') {
      this._sendGeoPosition();

      const formInput = this._elements.form.querySelector('form-input');
      formInput._elements.input.value = '';
      event.preventDefault();
      return false;
    }

    const messageEvent = new CustomEvent('new-message', {
      bubbles: false,
      detail: message,
    });

    const formInput = this._elements.form.querySelector('form-input');
    formInput._elements.input.value = '';

    this.dispatchEvent(messageEvent);
    event.preventDefault();
    return false;
  }

  _onNewMessage(event) {
    this._sendMessage(event.detail);
    this._addMessageToLocalStorage(event.detail);
  }

  _onSelectFiles(event) {
    this._elements.attachment.click();
  }

  _onAttachFiles(event) {
    this._handleFiles(this._elements.attachment.files);
  }

  _handleFiles(files) {
    Array.from(files).forEach((file) => {
      const imageType = /image.*/;
      if (file.type.match(imageType)) {
        const img = document.createElement('img');
        const reader = new FileReader();
        reader.onloadend = function () {
          img.src = reader.result;
        };
        if (file) {
          reader.readAsDataURL(file);
        } else {
          img.src = file.name;
        }
        this._sendFile(img);
      } else {
        this._sendMessage(file.name);
      }
    });
  }

  _sendFile(file) {
    const message = document.createElement('div');
    message.className = 'message';
    let messageFromFile = document.createElement('div');
    messageFromFile = file;
    messageFromFile.className = 'message-from preview';
    messageFromFile.id = 'img';
    message.appendChild(messageFromFile);

    this._elements.messageList.appendChild(message);
    // this._attachment.dispatchEvent(new Event('send-file'));
  }

  // eslint-disable-next-line class-methods-use-this
  _onDragenter(event) {
    event.stopPropagation();
    event.preventDefault();
  }

  // eslint-disable-next-line class-methods-use-this
  _onDragover(event) {
    event.stopPropagation();
    event.preventDefault();
  }

  _onDrop(event) {
    event.stopPropagation();
    event.preventDefault();

    this._handleFiles(event.dataTransfer.files);
  }

  _sendGeoPosition() {
    const context = this;
    navigator.geolocation.getCurrentPosition((position) => {
      context._sendMessage(
        `Мои координаты: широта = ${position.coords.latitude}, долгота = ${
          position.coords.longitude
        }`,
      );
    });
  }

  _onKeyPress(event) {
    if (event.keyCode === 13) {
      this._elements.form.dispatchEvent(new Event('submit'));
    }
  }
}

customElements.define('message-form', MessageForm);
