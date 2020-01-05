$(document).ready(function() {
  renderAll();
});

$(document).on("click", "#deleteBtn", function() {
  const id = $(this).attr("data-id");

  $.ajax({
    method: "DELETE",
    url: `/api/todos/delete/${id}`
  }).then(() => {
    renderAll();
  });
});

$("#todoSubmit").on("click", () => {
  const text = $("#todoText").val();

  $.ajax({
    method: "POST",
    url: "/api/todos",
    data: {
      text: text
    }
  }).then(res => {
    console.log(res);
    renderAll();
  });
});

renderAll = () => {
  $.ajax({
    method: "GET",
    url: "/api/todos"
  }).then(res => {
    $(".card-container").empty();
    res.map(element => {
      $(".card-container").append(
        `<div class="card mt-2">
          <div class="card-body pt-4">
            <div class="text-center">
              <p class="card-text">
                ${element.text}
              </p>
            </div>
            <div class="text-right pt-4">
              <button id="deleteBtn" data-id="${element.id}" class="btn btn-outline-danger">Delete</button>
            </div>
          </div>
        </div>`
      );
    });
  });
};
