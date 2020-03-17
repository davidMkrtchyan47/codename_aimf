let check_input = async () => {
    let dat = {
        _username : $("#login_uname").val(),
        _password : $("#login_pswd").val()
    };
    if(dat._username === "" || dat._password === ""){
        dat = null;
    }
    return  dat;
};

let proceed_Login = async (data) => {
    console.log(data);
    let responce = await axios.post(url, data);


    console.log(responce);


    return false;
};