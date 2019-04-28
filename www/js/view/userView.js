
var view = {
    init:function(id){
        $(".container").append(
            view.question(id)
        )
    },
    question:function(id){
        return '<div class="question_group" id='+id+'>'+
                    '<div class="form-group">'+
                        '<div class="q_title">'+
                            '<label><h5>Question '+(id+1)+':</h5></label>'+
                            '<label><h5 class="tag" id=tag'+id+'></h5></label>'+
                        '</div>'+
                        '<p class="form-control" id='+id+'></p>'+
                    '</div>'+
                    
                    '<div class="answers">'+
                        '<label><h5>Answer:</h5></label>'+
                        
                        '<div class="radio" id=s'+id+0+'>\
                        <label class="label"><input type="radio" name="q'+id+'" id=s'+id+0+'><p class ="ansinput" id=s'+id+0+'></p></label>\
                        </div>\
                        <div class="radio" id=s'+id+1+'>\
                        <label class="label"><input type="radio" name="q'+id+'" id=s'+id+1+'><p class ="ansinput" id=s'+id+1+'></p></label>\
                        </div>\
                        <div class="radio" id=s'+id+2+'>\
                        <label class="label"><input type="radio" name="q'+id+'" id=s'+id+2+'><p class ="ansinput" id=s'+id+2+'></p></label>\
                        </div>\
                        <div class="radio" id=s'+id+3+'>\
                        <label class="label"><input type="radio" name="q'+id+'" id=s'+id+3+'><p class ="ansinput" id=s'+id+3+'></p></label>\
                        </div>\
                    </div>\
                </div>'
    },
    addsubbtn:function(){
        $(".btn-group").append('<button type="button" class="btn btn-info submit">submit</button>')
    },
    addclass:function(selector,x){
        $(selector).addClass(x);
    },
    notify:function(){
        $(".info").remove();
        $(".notify").append("<div class='info sucess'>"+model.getScore()+"/"+model.getLibrary().length+"</div>")
    },
    noq:function(){
        $(".info").remove();
        $(".notify").append("<div class='info sucess'>No quize avaliable</div>")
    },
    setval:function(selector1,selector2,val){
        $(selector1,selector2).html(val)
    },
    disableBtn:function(){
        $(".submit").attr('disabled','disabled');
    },
    loadTag:function(id,val){
        $(id).html(val);
    },
    remove:function(selector1){
        $(selector1).remove()
    }
}