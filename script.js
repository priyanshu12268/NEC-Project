// function formSubmitted() {
//     // alert("Form submitted successfully");
//     // const email = document.getElementById("email");
//     // const name = document.getElementById("name")
//     // const bloodType = document.getElementById("bloodType");
//     // const defaultOption = document.getElementById("select");
//     // email.value = "";
//     // bloodType.value = "select";
//     // name.value = "";

//     return false;
// }

window.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);

    if (urlParams.has('type')) {
        const typeValue = urlParams.get('type');

        console.log(`The 'type' parameter value is: ${typeValue}`);

        window.alert("Form submitted successfully!");

    }
})