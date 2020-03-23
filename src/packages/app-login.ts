
var loginTemplate = document.createElement('template');

loginTemplate.innerHTML = `
<style>
:host {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 450px;
  background-color: #f2f2f2;
  border: 1px solid #d5d5d5;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  overflow: hidden;
  padding: 10px 10px 30px 10px;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  outline: 0;
}
.form {
  width: 80%;
}
.form input {
  width:300px;
  display: block;
  margin: 10px auto;
}
.form .input {
  margin: 10px auto;
  padding: 0 10px;
  height: 32px;
  outline: none;
}
.button {
  padding: 10px 25px;
  font-size: 12px;
  border-radius: 5px;
  background: #108CEE;
  color: #fff;
  cursor: pointer;
  text-transform: uppercase;
}
</style>
<h2 class ='title'>
  <span>账号登录</span>
</h2>
<div class='form'>
  <form>
    <input class='input name-input' type="text" name="name" placeholder='请输入账号'/>
    <input class= 'input pwd-input' type="text" name="password" placeholder='请输入密码'/>
    <input class='button' type="submit" value="登陆" />
  </form>
</div>
`
let idx = 0;
class AppLogin extends HTMLElement {
  constructor() {
    super();
    let shadow = this.attachShadow({ mode: 'open' });
    let content = loginTemplate.content.cloneNode(true);
    shadow.appendChild(content); // 将模版插入
  }
}

export {
  AppLogin
};
