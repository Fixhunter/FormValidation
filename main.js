    let id = (id) => document.getElementById(id);
    let classes = (classes) => document.getElementsByClassName(classes);
    let username = id("username"),
    email = id("email"),
    password = id("password"),
    form = id("form"),//let form = document.getElementById("form");
    errorMsg = classes("error"),
    successIcon = classes("success-icon"),
    failureIcon = classes("failure-icon");

    //error['error','error','error']

    /*errorMsg[0].innerHTML = "User name error";
    errorMsg[1].innerHTML = "Email error";
    errorMsg[2].innerHTML = "Password error";*/


    // events
    form.addEventListener("submit",(e)=>{
        e.preventDefault();
        engine(username,0,"Username can not be blank!");
        engine(email,1,"Email can not be blank!");
        engine(password,2,"Password can not be blank!");
    });

    let engine = (id, serial,message)=>{
        if(id.value.trim() === '') {
            errorMsg[serial].innerHTML = message;
            id.style.border = "2px solid red"
            failureIcon[serial].style.opacity="1";
            successIcon[serial].style.opacity="0";
        }else {
            errorMsg[serial].innerHTML ="";
            id.style.border = "2px solid green"
            failureIcon[serial].style.opacity="0";
            successIcon[serial].style.opacity="1";
        }
    };
