
$(function(){
    $(".btn-group").on("click",".submit",function(){
        controller.check()
        $(".submit").attr('disabled','disabled');
        $("input[type=radio]").attr('disabled', true);
    })
    $(".choose_ease_or_hard").on("click",".easy",function(){
        console.log("easy");
        controller.loadData("easy");
    })
    $(".choose_ease_or_hard").on("click",".hard",function(){
        console.log("hard");
        controller.loadData("hard");
    })
})
var controller={
    check:function(){
        let library = model.getLibrary();
        let Qlength = library.length;
        let answer = {};
        let user_ans={};
        for(let i = 0; i<Qlength;i++){
            answer = library[i].correct;
            user_ans = $("input[name='q"+i+"']").index($("input[name='q"+i+"']").filter(':checked'));
            if( answer == user_ans){
                let score = model.getScore();
                score +=1;
                model.setScore(score);
                view.addclass("#s"+i+answer,"green")
                console.log(model.getScore(),$(".radio","#s"+i+answer))
            }else{
                view.addclass("#s"+i+answer,"green");
                view.addclass("#s"+i+user_ans,"red");
            }
        }
        view.notify()        
    },
    loadData:function(c){
        view.remove(".easy");
        view.remove(".hard");
        model.getData(c);
    }
}