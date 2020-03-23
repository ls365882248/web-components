
var userTemplate = document.createElement('template');

userTemplate.innerHTML = `
<style>
:host {
  display: flex;
  align-items: center;
  width: 450px;
  height: 180px;
  background-color: #d4d4d4;
  border: 1px solid #d5d5d5;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  overflow: hidden;
  padding: 10px;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
.image {
  flex: 0 0 auto;
  width: 160px;
  height: 160px;
  vertical-align: middle;
  border-radius: 5px;
}
.container {
  box-sizing: border-box;
  padding: 20px;
  height: 160px;
}
.container > .name {
  font-size: 20px;
  font-weight: 600;
  line-height: 1;
  margin: 0;
  margin-bottom: 5px;
}
.container > .email {
  font-size: 12px;
  opacity: 0.75;
  line-height: 1;
  margin: 0;
  margin-bottom: 15px;
}
.container > .button {
  padding: 10px 25px;
  font-size: 12px;
  border-radius: 5px;
  text-transform: uppercase;
}
</style>

<img class="image">
<div class="container">
 <p class="name"></p>
 <p class="email"></p>
 <button class="button">Follow John</button>
</div>
`
let idx = 0;
class UserCard extends HTMLElement {
  constructor() {
    super();
    let shadow = this.attachShadow({ mode: 'open' });
    let content = userTemplate.content.cloneNode(true);
    // 配置模版属性
    content.querySelector('img').setAttribute('src', this.getAttribute('image'));
    content.querySelector('.container>.name').innerText = this.getAttribute('name');
    content.querySelector('.container>.email').innerText = this.getAttribute('email');
    shadow.appendChild(content); // 将模版插入
    this.$button = shadow.querySelector('button');
    this.$button.addEventListener('click', () => {
      console.log('card has been clicked');
      this.name = `User Name ${idx++}`
    })
  }
  get name() {
    return this.getAttribute('name');
  }
  set name(value) {
    this.setAttribute('name', value);
  }
  // 观察 web component 属性变化
  static get observedAttributes() {
    return ['name'];
  }
  // 触发属性变化回调
  attributeChangedCallback(name, oldVal, newVal) {
    this.render();
  }
  // 组件重新渲染
  render() {
    this.$button.innerText = this.name; // 更新数据
  }
}

export {
  UserCard
};
