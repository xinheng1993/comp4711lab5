var library = []; 

let score = 0;
var model ={
    init:function(){
        console.log(library);
        if(library.length == 0){
            view.noq();
            view.disableBtn();
        }else{
            for(let i=0;i<library.length;i++){
                view.init(i)
                view.setval(".form-control","#"+i,library[i].question);
                if(library[i].tag == "easy"){
                    view.loadTag("#tag"+i,library[i].tag);
                    view.addclass("#tag"+i,"easy");
                }else{
                    view.loadTag("#tag"+i,library[i].tag,false);
                    view.addclass("#tag"+i,"hard");
                }
                for(let j = 0; j<4;j++){
                    view.setval("p","#s"+i+j,library[i].answers[j]); 
                }
            }
            view.addsubbtn();
        }
    },
    getLibrary:function(){
        return library;
    },
    getScore:function(){
        return score;
    },
    setScore:function(i){
        score = i;
    },
    getData:function(c){
        let key = {
            key:c
        }
        $.get('question/get',key,function(data,status){
            library = data;
            for(let i=0;i<library.length;i++){
                library[i].answers = JSON.parse(library[i].answers);
            }
            model.init();
        })
    }
}