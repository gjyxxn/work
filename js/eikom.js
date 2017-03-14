/**
 * Created by lenovo on 2017/3/13.
 */
var btn = $('.text-btn');
var close = $('.close');
var add_text = $('.add_text');
var add_word = $('.add_text input');
var add_btn = $('.add_text button');
var ul = $('.editor_info');
//console.log(add_word)
//console.log(close.parent())
btn.on('click',function(){
    if($(this).hasClass('ok')){
        $(this).html('')
        $(this).html('编辑')
        $(this).removeClass('ok')
        close.hide()
        add_text.hide()
    }else{
        $(this).html('')
        $(this).html('完成')
        $(this).addClass('ok')
        close.show()
        add_text.show()
    }

});
$('li').on('click',close,function(){
    $(this).remove()
});
add_btn.on('click',function(){
    close.hide()
    btn.html('')
    btn.html('编辑')
    add_text.hide()
    if(add_word.val()==''){
        console.log('空哒')
    }else{
        var t = $(add_word).val();
        //console.log(t)
        var new_li = '<li>'+t+'</li>'
        ul.append(new_li)
    }
    add_word.val('')
})