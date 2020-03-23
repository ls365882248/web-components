let bottonTemplate = document.createElement('template');
bottonTemplate.innerHTML = `
  <style>
    .container {
      padding: 8px;
    }
    button {
      display: block;
      overflow: hidden;
      position: relative;
      padding: 0 16px;
      font-size: 16px;
      font-weight: bold;
      text-overflow: ellipsis;
      white-space: nowrap;
      cursor: pointer;
      outline: none;
      width: 50%;
      height: 40px;
      box-sizing: border-box;
      border: 1px solid #a1a1a1;
      background: #ffffff;
      box-shadow: 0 2px 4px 0 rgba(0,0,0, 0.05), 0 2px 8px 0 rgba(161,161,161, 0.4);
      color: #363636;
      cursor: pointer;
    }
  </style>
  <div class="container">
    <button>Label</button>
  </div>
`;

let idx = 0;

class AppButton extends HTMLElement {
  constructor() {
    super();
    let content = bottonTemplate.content.cloneNode(true)
    let shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(content);
    this.$button = shadow.querySelector('button');
    this.$button.addEventListener('click', () => {
      this.label = `Click Me ${idx++}`;
    })
  }
  get label() {
    return this.getAttribute('label');
  }
  set label(value) {
    this.setAttribute('label', value);
  }
  static get observedAttributes() {
    return ['label'];
  }
  attributeChangedCallback(name, oldVal, newVal) {
    this.render();
  }
  render() {
    this.$button.innerHTML = this.label;
  }
}

export {
  AppButton
};