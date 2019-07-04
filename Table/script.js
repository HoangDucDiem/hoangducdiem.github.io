let products = [];

// Gọi lên server để lấy dữ liệu (từ file JSON)
$.ajax({
  url: 'https://ngovansonwft1.github.io/listProduct.JSON',
  type: 'get',
  dataType: 'json',
}).done(function (data) {
  // Sau khi có dữ liệu thì gán vào biến global products để dùng khi sort
  products = data;

  // Đổ dữ liệu ra bảng
  renderContent();
});

function renderContent() {
  let content = '';

  for (let i = 0; i < products.length; i++) {
    content += `<tr>
                  <td><img src="${products[i].thumbnail}" alt="${products[i].title}"></td>
                  <td class="_ti">${products[i].title}</td>
                  <td class="_ms">${products[i].productID}</td>
                  <td class="_co">${products[i].cost}</td>
                  <td class="_sl">${products[i].amount}</td>
              </tr>`;
  }

  document.getElementById('products').innerHTML = content;
}

function sortColumn(thElement) {
  thElement = $(thElement);
  const iElement = thElement.children();
  const column = thElement.attr('data-column');

  // Chuyển hết icon của các cột về mặc định
  $('i.fa').attr('class', 'fa fa-sort');
  
  // Sort theo chiều asc
  if (thElement.attr('data-order') === 'asc') {
    thElement.attr('data-order', 'desc');
    iElement.removeClass('fa-sort-asc').addClass('fa-sort-desc');
    sort(column, 1);
  } 
  // Sort theo chiều desc
  else {
    thElement.attr('data-order', 'asc');
    iElement.removeClass('fa-sort-desc').addClass('fa-sort-asc');
    sort(column, -1);
  }

  // Đổ lại dữ liệu ra bảng sau khi sort
  renderContent();
}

function sort(column, order) {
  // Sort mảng product theo tên cột và chiều sort (1 là asc, -1 là desc)
  products.sort(function (a, b) {
    let x = a[column];
    let y = b[column];

    if (typeof x == 'string') x = x.toLocaleLowerCase()
    if (typeof y == 'string') y = y.toLocaleLowerCase()

    if (x < y) return -order;
    if (x > y) return order;

    return 0;
  })
}

