$(document).ready(function(){
    validateText("#username", "#errUsername", "Tên Đăng Ký không Được Để Trống!");
    validatePhone("#phone", "#errPhone", "Số Điện Thoại Phải Ít Nhất 10 Số!", "Số Điện Thoại Không Quá 15 Số!");
    validatePassword("#password", "#errPassword", "Mật Khẩu Phải Có Tối Thiểu 6 Ký Tự!")
    validateRewritePassword("#rewrite-password", "#password", "#errRewritePassword", "Mật Khẩu Phải Có Tối Thiểu 6 Ký Tự!", "Không Khơp Với Mật Khẩu Đã Nhập")
    validateEmail("#email", "#errEmail", "Bạn phải nhập đúng email!")
    buttonSubmit()
})

function validateText(id, errId, content){
    $(id).blur(() => {
        if($(id).val() == ""){
            $(errId).text(content);
            $(errId).css("color", "red");
            return false;
        }else{
            $(errId).text("");
        }
    })
}

function validateEmail(id, errId, content){
    $(id).blur(() => {
        const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if($(id).val() != mailFormat){
            $(errId).text(content);
            $(errId).css("color", "red");
        }else{
            $(errId).text("");
        }
    })
}

function validatePhone(id, errId, content, content2){
    $(id).blur(() => {
        if($(id).val().length < 10){
            $(errId).text(content);
            $(errId).css("color", "red");
        }else if($(id).val().length > 15){
            $(errId).text(content2);
            $(errId).css("color", "red");
        }
        else{
            $(errId).text("");
        }
    })
}

function validatePassword(id, errId, content){
    $(id).blur(() => {
        if($(id).val().length < 6){
            $(errId).text(content);
            $(errId).css("color", "red");
        }else{
            $(errId).text("");
        }
    })
}

function validateRewritePassword(id1, id2, errId, content, content2){
    $(id1).blur(() => {
        if($(id1).val().length < 6){
            $(errId).text(content);
            $(errId).css("color", "red");
        }else if($(id1).val() != $(id2).val()){
            $(errId).text(content2);
            $(errId).css("color", "red");
        }
        else{
            $(errId).text("");
        }
    })
}

function validateEmail(id, errId, content){
    $(id).blur(() => {
        if($(id).val() == ""){
            $(errId).text(content);
            $(errId).css("color", "red");
        }else{
            $(errId).text("");
        }
    })
}

function buttonSubmit(){
    $('form[name=form-parent]').submit(() => {
        if(
            $("#username").val() == "" ||
            $("#email").val() == "" ||
            $("#phone").val() == ""||
            $("#password").val() == "" ||
            $("#rewrite-pasword").val() == "" ||
            $("#rewrite-pasword").val() != $("#pasword").val()
        )
        {
            $("#errBtnSubmit").text("Bạn Chưa Nhập Đủ Những Thông Tin Cần Thiết!");
            $("#errBtnSubmit").css("color", "red");
            return false;
        }else
        {
            return true;
        }
        
    });
}