

/* 改成物件形式，用 this方式取得自身其他函式或資料 */
const hexHotel = {
  // 定義要送出的資料
  productInfo: {
    title: "",
    category: "",
    content: "",
    description: "",
    imageUrl: [],
    enabled: true,
    origin_price: 0,
    price: 0,
    unit: "單位"
  },
  // 定義 API專屬 ID
  hexAPI: {
    personID: `85a8cd22-1b7d-43af-9b5a-5aa679129559`,
    data: []
  },
  // 取得/處理資料，方式為 get
  getData() {
    let vm = this;
    axios.get(`https://course-ec-api.hexschool.io/api/${vm.hexAPI.personID}/ec/products`)
      .then((response) => {
        // 若使用 axios.get後，回傳的資料可以定義一個參數去取得，資料會在 參數.data
        // 剛好練習用的 API的物件屬性也命名為 data，所以要純粹取得產品資料就會變成  response.data.data
        vm.hexAPI.data = response.data.data;
        vm.render();
      })
  },
  render() {
    let listProducts = document.querySelector(`.list__products`);
    let listProductsReview = document.querySelector(`.list__products__review`);
    let titleDOM =  document.querySelector(`title`);
    let str = ``;
    let strReview =``;
    this.hexAPI.data.forEach((item) => {
      str += `
<li class="col-12 col-md-6 col-lg-4">
  <div class="card mb-3">
    <img src="${item.imageUrl[0]}" class="img-fluid rounded-top">
    <div class="card-body">
      <h5 class="font-weight-bold">${item.title}</h5> 
      <p>${item.content}</p>
      <div class="d-flex justify-content-between">
        <p class="mb-0">售價 : <del>${item.origin_price}</del> </p>
        <p class="mb-0">特價 : ${item.price}</p>
      </div>
    </div>
    <div class="card-footer d-flex justify-content-between">
      <button class="btn btn-danger">刪除</button>
      <button class="btn btn-primary">修改</button> 
    </div>
  </div>
</li>`
    });
    this.hexAPI.data.forEach((item) => {
      strReview += `
<li class="col-12 col-md-6 col-lg-4">
  <div class="card mb-3">
    <img src="${item.imageUrl[0]}" class="img-fluid rounded-top">
    <div class="card-body">
      <h5 class="font-weight-bold">${item.title}</h5> 
      <p>${item.content}</p>
      <div class="d-flex justify-content-between">
        <p class="mb-0">原價 : <del>${item.origin_price}</del> </p>
        <p class="mb-0">早鳥 : ${item.price}</p>
      </div>
    </div>
    <div class="card-footer d-flex ">
     <button class="btn btn-primary ml-auto">預訂房間</button>
    </div>
  </div>
</li>`
    });

    switch(titleDOM.textContent){
      case `Index`:
        listProductsReview.innerHTML = strReview;
        break;
      case `Backend`:
        listProducts.innerHTML = str;
        break;
    }
  }
  
}

hexHotel.getData();


// 新增資料，方式為 post

// 修改資料，方式為 patch

// 刪除資料，方式為 delete

