$(function() {
  $("body").on("click", ".add_question", function() {
    controller.add_question();
  });
  $("body").on("click", ".del", function() {
    controller.delete_question(this.id);
  });
  $("body").on("click", ".save_questions", function() {
    controller.save_questions();
  });
});

var controller = {
  add_question: function() {
    let id = model.getQid();
    id += 1;
    model.setQid(id);
    view.addBtn(id);
    console.log(model.getQid());
  },
  delete_question: function(id) {
    view.delBtn(id);
    console.log("Qid:" + model.getQid());
  },
  save_questions: function() {
    model.save();
  }
};
