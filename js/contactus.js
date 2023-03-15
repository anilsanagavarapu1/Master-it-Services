$(document).ready(function () {
    $("#YourComment").val('');
    $("#commentLength").text('0');
    $("#ContactForm").find("#btnsubmit").click(function () {
        $("#ContactForm").find("#captcha").val(grecaptcha.getResponse());
    });
});
function ContactFormSuccess(response) {
    debugger;
    console.log(response.result);
    switch (response.result) {
        case "success": 
            $("#ContactForm").find("#FullName,#Email,#PhoneNumber,#WebUrl,#YourComment").val('');
            $("#ContactForm").find("#FullName,#Email,#PhoneNumber,#WebUrl,#YourComment,#captcha").val('');
            grecaptcha.reset();
            //$("#ContactForm").find("#FullName,#Email,#PhoneNumber,#WebUrl,#YourComment").blur();
            $("#ContactForm").find("#msg").addClass("submit-success-text").removeClass("submit-fail-text").empty().append("Mail has been sent successfully <i class=\"fa fa-check ml-2\"></i>");
            break;
        case "CaptchaEmpty":
            $("#ContactForm").find("#msg").addClass("submit-fail-text").removeClass("submit-success-text").empty().append("Captcha is empty.");
            break;
        case "InvalidCaptcha":
            $("#ContactForm").find("#msg").addClass("submit-fail-text").removeClass("submit-success-text").empty().append("Invalid captcha.");
            break;
        default:
            $("#ContactForm").find("#msg").addClass("submit-fail-text").removeClass("submit-success-text").empty().append("Something went wrong. Try again later!");
            break;
    }
}
function ContactFormFail(response) {
    console.log(response.result);
    $("#ContactForm").find("#msg").css('color', 'red').empty().append("Something went wrong. Try again later.");;
}
function CheckCommentLength() {
    if ($("#ContactForm").find("#YourComment").val() != "" && $("#ContactForm").find("#YourComment").val().length > 0) {
        var commentLength = $("#ContactForm").find("#YourComment").val().length;
        $("#ContactForm").find("#commentLength").text(1000 - commentLength);
    }
}