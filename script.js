async function loadData() {
  try {
    let store = await fetch("https://fakestoreapi.com/products")
      .then(res => res.json());

    console.log(store);

    document.getElementById("textAndHtml").innerHTML = store
      .map((data) => `
        <div class="card">
         <p class="image"> <img src="${data.image}"</p>
          <p class="title">Title: ${data.title}</p>
          <p class="price">Price: $${data.price}</p>
         
        </div>
      `)
      .join("");
  } catch (error) {
    console.log(error, "Failed");
  }
}

loadData();