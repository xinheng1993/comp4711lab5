var view = {
  init: function() {
    $(".container").append(view.question(model.getQid()));
  },
  addBtn: function(q_id) {
    $(".container").append(view.question(q_id));
  },
  delBtn: function(id) {
    $("#" + id).remove();
  },
  loadData: function(i, data) {
    $("textarea", "#" + i).val(data[i].question);
    for (let j = 0; j < 4; j++) {
      $("#a" + i + j).val(data[i].answer[j]);
    }
    $("#s" + i + data[i].correct).attr("checked", true);
  },
  save_sucess: function() {
    $(".info").remove();
    $(".notify").append("<div class='info sucess'>save sucess</div>");
  },
  save_fail: function() {
    $(".info").remove();
    $(".notify").append(
      "<div class='info fail'>save failed, please check the error area</div>"
    );
  },
  save_without: function() {
    $(".info").remove();
    $(".notify").append(
      "<div class='info fail'>save failed, no questions</div>"
    );
  },
  error: function(selector1, selector2) {
    $(selector1, selector2).css("background-color", "pink");
  },
  checked: function(selector1, selector2) {
    $(selector1, selector2).css("background-color", "");
  },
  radioError: function(selector1, selector2) {
    $(selector1)
      .parent(selector2)
      .css("background-color", "pink");
  },
  radioChecked: function(selector1, selector2) {
    $(selector1)
      .parent(selector2)
      .css("background-color", "");
  },
  removeAll: function() {
    $(".question_group").remove();
  },
  question: function(id) {
    return (
      '<div class="question_group" id=' +
      id +
      ">" +
      '<div class="form-group">' +
      '<div class="q_title">' +
      "<div><label><h5>Question</h5></label></div>" +
      '<div class="easy_hard">' +
      '<div class="radio_tag" id=s' +
      id +
      1 +
      ">" +
      '<label class="label"><input type="radio" name="tag' +
      id +
      '" id=tag' +
      id +
      0 +
      ' value="easy" checked><h5>easy</h5></label>' +
      "</div>" +
      '<div class="radio_tag" id=s' +
      id +
      2 +
      ">" +
      '<label class="label"><input type="radio" name="tag' +
      id +
      '" id=tag' +
      id +
      1 +
      ' value="hard"><h5>hard</h5></label>' +
      "</div>" +
      "</div>" +
      "</div>" +
      '<textarea class="form-control" rows="5" id=' +
      id +
      ' value=""></textarea>' +
      "</div>" +
      '<div class="answers">' +
      "<label><h5>Answer:</h5></label>" +
      '<div class="input-group answer_group">' +
      '<div class="input-group-prepend">' +
      '<div class="input-group-text q' +
      id +
      '">' +
      '<input type="radio" name="q' +
      id +
      '" id=s' +
      id +
      0 +
      ">" +
      "</div>" +
      "</div>" +
      '<input type="text" class="form-control" id=a' +
      id +
      0 +
      ' value="">' +
      "</div>" +
      '<div class="input-group answer_group">' +
      '<div class="input-group-prepend">' +
      '<div class="input-group-text q' +
      id +
      '">' +
      '<input type="radio" name="q' +
      id +
      '" id=s' +
      id +
      1 +
      ">" +
      "</div>" +
      "</div>" +
      '<input type="text" class="form-control" id=a' +
      id +
      1 +
      ' value="">' +
      "</div>" +
      '<div class="input-group answer_group">' +
      '<div class="input-group-prepend">' +
      '<div class="input-group-text q' +
      id +
      '">' +
      '<input type="radio" name="q' +
      id +
      '" id=s' +
      id +
      2 +
      ">" +
      "</div>" +
      "</div>" +
      '<input type="text" class="form-control" id=a' +
      id +
      2 +
      ' value="">' +
      "</div>" +
      '<div class="input-group answer_group">' +
      '<div class="input-group-prepend">' +
      '<div class="input-group-text q' +
      id +
      '">' +
      '<input type="radio" name="q' +
      id +
      '" id=s' +
      id +
      3 +
      ">" +
      "</div>" +
      "</div>" +
      '<input type="text" class="form-control" id=a' +
      id +
      3 +
      ' value="">' +
      "</div>" +
      "</div>" +
      '<div class="delete-btn">' +
      '<button type="button" class="btn btn-danger del" id=' +
      id +
      ">Delete</button>" +
      "</div>" +
      "</div>"
    );
  }
};
var hh = 10;
