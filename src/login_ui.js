let _fade_time = 500;
$("#login-button").click(async function(event){
    await _hide_error_login();
    event.preventDefault();
    let data = await check_input();
    if(!data){
        await _show_error_login("Input username and password");
        return;
    }
    login_fade(false);
    let login = await proceed_Login(data);
    if(!login){
        login_fade(true);
        await _show_error_login("Incorrect username or password");
        return;
    }
    setTimeout(function () {
        fade_everything();
    }, 2*_fade_time);
    setTimeout(function () {
        window.location = "profile.html";
    }, 3*_fade_time)
    //window.location = "profile.html";
   // $('.wrapper').addClass('form-success');
});

let _show_error_login = async (text) => {
    let errText = $("#Err_text_login");
    errText.text(text);
    errText.fadeIn(_fade_time);
};

let _hide_error_login = async () => {
    let errText = $("#Err_text_login");
    errText.fadeOut(_fade_time);
};


$("#register_btn").click(function (event) {
   event.preventDefault();
   reg_fade(false);
   setTimeout(function () {
        $('#load').fadeIn(_fade_time);
   }, _fade_time);
});

$("#reg").click(function (event) {
   event.preventDefault();
   login_fade(false);
   setTimeout(function(){reg_fade(true)}, _fade_time);
});

$("#sign").click(function (event) {
    event.preventDefault();
    reg_fade(false);
    setTimeout(function () {login_fade(true)}, _fade_time);
});

let login_fade = (isIn) => {
    if(isIn) {
        $('#form').fadeIn(_fade_time);
    } else {
        $('#form').fadeOut(_fade_time);
    }
};

let reg_fade = (isIn) => {
    if(isIn) {
        $('#form_reg').fadeIn(_fade_time);
    } else {
        $('#form_reg').fadeOut(_fade_time);
    }
};

let fade_everything = () => {
    $('#wr').fadeOut(_fade_time);
};