//PascalCasing - capitalize every character of the word
function Message() {
  //This syntax is known as JSX and it gets converted to javascript
  const name = "Stranger";
  if (name) {
    return <h1>Hello {name}!</h1>;
  } else {
    return <h1>Hello World!</h1>;
  }
}

export default Message;
