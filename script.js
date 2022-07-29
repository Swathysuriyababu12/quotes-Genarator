function getInfo() {
  var url = "https://type.fit/api/quotes";
  var num = Math.random() * 100;
  var final = Math.round(num);
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data[final]);
      document.getElementById("header1").innerHTML = data[final].text;
      document.getElementById("header2").innerHTML = `-${data[final].author}`;
    })
    .catch((err) => console.log(err));
}
