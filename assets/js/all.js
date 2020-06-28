"use strict";

/* 改成物件形式，用 this方式取得自身其他函式或資料 */
var hexHotel = {
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
    personID: "85a8cd22-1b7d-43af-9b5a-5aa679129559",
    data: []
  },
  // 取得/處理資料，方式為 get
  getData: function getData() {
    var vm = this;
    axios.get("https://course-ec-api.hexschool.io/api/".concat(vm.hexAPI.personID, "/ec/products")).then(function (response) {
      // 若使用 axios.get後，回傳的資料可以定義一個參數去取得，資料會在 參數.data
      // 剛好練習用的 API的物件屬性也命名為 data，所以要純粹取得產品資料就會變成  response.data.data
      vm.hexAPI.data = response.data.data;
      vm.render();
    });
  },
  render: function render() {
    var listProducts = document.querySelector(".list__products");
    var listProductsReview = document.querySelector(".list__products__review");
    var titleDOM = document.querySelector("title");
    var str = "";
    var strReview = "";
    this.hexAPI.data.forEach(function (item) {
      str += "\n<li class=\"col-12 col-md-6 col-lg-4\">\n  <div class=\"card mb-3\">\n    <img src=\"".concat(item.imageUrl[0], "\" class=\"img-fluid rounded-top\">\n    <div class=\"card-body\">\n      <h5 class=\"font-weight-bold\">").concat(item.title, "</h5> \n      <p>").concat(item.content, "</p>\n      <div class=\"d-flex justify-content-between\">\n        <p class=\"mb-0\">\u552E\u50F9 : <del>").concat(item.origin_price, "</del> </p>\n        <p class=\"mb-0\">\u7279\u50F9 : ").concat(item.price, "</p>\n      </div>\n    </div>\n    <div class=\"card-footer d-flex justify-content-between\">\n      <button class=\"btn btn-danger\">\u522A\u9664</button>\n      <button class=\"btn btn-primary\">\u4FEE\u6539</button> \n    </div>\n  </div>\n</li>");
    });
    this.hexAPI.data.forEach(function (item) {
      strReview += "\n<li class=\"col-12 col-md-6 col-lg-4\">\n  <div class=\"card mb-3\">\n    <img src=\"".concat(item.imageUrl[0], "\" class=\"img-fluid rounded-top\">\n    <div class=\"card-body\">\n      <h5 class=\"font-weight-bold\">").concat(item.title, "</h5> \n      <p>").concat(item.content, "</p>\n      <div class=\"d-flex justify-content-between\">\n        <p class=\"mb-0\">\u539F\u50F9 : <del>").concat(item.origin_price, "</del> </p>\n        <p class=\"mb-0\">\u65E9\u9CE5 : ").concat(item.price, "</p>\n      </div>\n    </div>\n    <div class=\"card-footer d-flex \">\n     <button class=\"btn btn-primary ml-auto\">\u9810\u8A02\u623F\u9593</button>\n    </div>\n  </div>\n</li>");
    });

    switch (titleDOM.textContent) {
      case "Index":
        listProductsReview.innerHTML = strReview;
        break;

      case "Backend":
        listProducts.innerHTML = str;
        break;
    }
  }
};
hexHotel.getData(); // 新增資料，方式為 post
// 修改資料，方式為 patch
// 刪除資料，方式為 delete
//# sourceMappingURL=all.js.map
