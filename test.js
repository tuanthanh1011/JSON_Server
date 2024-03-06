const list = [];
let string;
for (var i = 1; i < 31; i++) {
  string = `{
      "id": ${i},"content": "The room was clean and cozy, perfect for a weekend getaway. The view from the window was breathtaking.","date": "June 2024","user": {"id": 1, "name": "admin"},"roomId": ${i}
    }`;

  list.push(string);
}

console.log(list);
