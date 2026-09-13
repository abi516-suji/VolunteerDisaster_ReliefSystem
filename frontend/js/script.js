/* =====================================================
   VDRCS JAVASCRIPT
===================================================== */


/* ================= LOGIN ================= */

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const role =
            document.getElementById("loginRole").value;

        if (role === "") {

            alert("Please select your role.");

            return;
        }


        if (role === "admin") {

            window.location.href =
                "admin-dashboard.html";

        }

        else if (role === "volunteer") {

            window.location.href =
                "volunteer-dashboard.html";

        }

        else if (role === "coordinator") {

            window.location.href =
                "coordinator-dashboard.html";

        }

    });

}


/* ================= REGISTER ================= */

const registerForm =
    document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function(event) {

        event.preventDefault();

        alert(
            "Registration successful! Please login."
        );

        window.location.href = "login.html";

    });

}


/* ================= LOGOUT ================= */

const logoutLinks =
    document.querySelectorAll(".logout");

logoutLinks.forEach(function(link) {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        window.location.href = "login.html";

    });

});