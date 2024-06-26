class LoginElements {
    menuIcon = () => {return "//button[contains(@class,'toggle burger btn-reset')]"}
    menuLogin = () => {return "//a[contains(@class,'btn main-nav__login')]"}
    inputEmail = () => {return "//input[@type='text'][contains(@id,'login')]"}
    inputSenha = () => {return "//input[@type='password'][contains(@id,'pass')]"}
    btnConectese = () => {return "//input[contains(@name,'wp-submit')]"}
}

export default LoginElements;