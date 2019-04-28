
$(function(){
    //localStorage.setItem("library","");
    view.init();
})

let library = [];
let quiz = {
    question:{},
    answer:[],
    correct:{},
    tag:{}
};
let Qid = 0;

var model = {
    getLibrary:function(){
        return library;   
    },
    getQid :function(){
        return Qid;
    },
    setQid :function(newId){
        Qid = newId;
    },
    save:function(){       
        let radio = false;
        let answer = [false,false,false,false];
        let textarea = false;
        library = [];
        for(let i = 0; i<= Qid;i++){
            quiz = {
                question:{},
                answer:[],
                correct:{},
                tag:{}
            }
            console.log(Qid);
            if($('textarea','#'+i)){
                if($('textarea','#'+i).val()){
                    if($('textarea','#'+i).val().length == 0){
                        textarea = false;
                        view.error('textarea','#'+i);
                        
                    }else{
                        view.checked('textarea','#'+i)
                        textarea = true;
                        quiz.question = $('textarea','#'+i).val();
                    }
                }else{
                    textarea = false;
                    view.error('textarea','#'+i);
                }
            }            
            if($("input[name='q"+i+"']")){
                if($("input[name='q"+i+"']").index($("input[name='q"+i+"']").filter(':checked')) == -1){
                    view.radioError("input[name='q"+i+"']",".q"+i);
                    radio = false;
                } else {
                    view.radioChecked("input[name='q"+i+"']",".q"+i);
                    quiz.correct = $("input[name='q"+i+"']").index($("input[name='q"+i+"']").filter(':checked'));
                    radio = true;
                }  
            }  
            for(let j = 0; j<4;j++){
                if($('#a'+i+j)){
                    if($('#a'+i+j).val()){
                        if($('#a'+i+j).val().length == 0){
                            answer[j] = false;
                            view.error('#a'+i+j);
                        }else{
                            view.checked('#a'+i+j);
                            answer[j] = true;
                            quiz.answer.push($('#a'+i+j).val())
                        }
                    }else{
                        answer[j] = false;
                        view.error('#a'+i+j);
                    }
                }
            }
            for(let j = 0; j< 2; j++){
                if($("#tag"+i+j).is(':checked')){
                    quiz.tag = $("#tag"+i+j).val()
                }
            }
            if(radio && answer[0] && answer[1] && answer[2] && answer[3] && textarea){
                library.push(quiz)
            }
        }
        console.log(textarea,answer,radio);
        console.log(library);
        if($('.question_group').length == 0){
            console.log($('.question_group').length)
            //localStorage.setItem("library",JSON.stringify(library));
            view.save_without();
        }else{
            if(radio && answer[0] && answer[1] && answer[2] && answer[3] && textarea){
                //localStorage.setItem("library",JSON.stringify(library));
                console.log("send request")
                let data = {
                    data:library
                }
                console.log(data);
                $.post('question/save',data,function(data,status){
                    console.log(data,status);
                    if(data.status == "ojbk"){
                        view.save_sucess();
                    }else{
                        view.save_fail();
                    }
                });
            }else{ 
                view.save_fail()
            }
        }
    },
    delData:function(id){
        if(library[id]){
            library.splice(id,1);
            console.log(library)
            localStorage.setItem("library",JSON.stringify(library));
            view.removeAll();
        }
        location.reload();
    },
}