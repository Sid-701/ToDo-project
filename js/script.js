$("ul").on("click","li",function(){
    $(this).toggleClass("strike");
});

$("ul").on("click","span",function(e){
    $(this).parent().fadeOut(300,function(){
        $(this).remove();
    });
    e.stopPropagation();
})

$("h1 button").on("click",function(e){
    $("input[type='text']").fadeToggle(200);
    e.stopPropagation();
})

$("input[type='text']").keypress(function(e){
    if(e.which===13){
        if($(this).val()==""){
            return ;
        }
        var text=$(this).val();
        $(this).val("");
        $("ul").append("<li><span>delete</span>"+text+"</li>");
    }
})