var form = document.getElementById('resume-form');
// Function to hide all sections
function hideAllSections() {
    var options = document.querySelectorAll('.options');
    options.forEach(function (option) {
        option.style.display = 'none'; // Hide all options
    });
}
// Function to toggle a specific section
function toggleSection(targetId) {
    var targetOptions = document.getElementById(targetId);
    if (targetOptions) {
        // Check if the section is currently displayed
        if (targetOptions.style.display === 'block') {
            targetOptions.style.display = 'none'; // Hide if it's currently shown
        }
        else {
            hideAllSections(); // Hide all sections first
            targetOptions.style.display = 'block'; // Show the targeted option
        }
    }
}
// Resume generation
form.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault(); // Prevent default form submission
    // Get values from the form
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var location = document.getElementById('location').value;
    var email = document.getElementById('email').value;
    var dob = document.getElementById('dob').value;
    var nationality = document.getElementById('nationality').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills-input').value;
    var imgInput = document.getElementById('profile-pic');
    var imgSrc = ((_a = imgInput.files) === null || _a === void 0 ? void 0 : _a[0]) ? URL.createObjectURL(imgInput.files[0]) : '';
    var resumePreview = document.getElementById('resume-preview');
    resumePreview.innerHTML = "\n        <div class=\"top-section\">\n            <div class=\"image\">\n                <img src=\"".concat(imgSrc, "\" alt=\"Profile Picture\" />\n            </div>\n            <h1>").concat(name, "</h1>\n            <p><strong>Phone:</strong> ").concat(phone, "</p>\n            <p><strong>Location:</strong> ").concat(location, "</p>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n        </div>\n        <div class=\"bottom-section\">\n            <button type=\"button\" class=\"toggle-btn\" data-target=\"personal-info\"><strong>Personal Info</strong></button>\n            <button type=\"button\" class=\"toggle-btn\" data-target=\"edu\"><strong>Education</strong></button>\n            <button type=\"button\" class=\"toggle-btn\" data-target=\"exp\"><strong>Experience</strong></button>\n            <button type=\"button\" class=\"toggle-btn\" data-target=\"skills\"><strong>Skills</strong></button>\n        </div>\n        <div id=\"personal-info\" class=\"options\">\n            <h3>Personal Information</h3>\n            <p>Date of Birth: ").concat(dob, "</p>\n            <p>Nationality: ").concat(nationality, "</p>\n        </div>\n        <div id=\"edu\" class=\"options\">\n            <h3>Education</h3>\n            <p>").concat(education, "</p>\n        </div>\n        <div id=\"exp\" class=\"options\">\n            <h3>Experience</h3>\n            <p>").concat(experience, "</p>\n        </div>\n        <div id=\"skills\" class=\"options\">\n            <h3>Skills</h3>\n            <p>").concat(skills, "</p>\n        </div>\n    ");
    // Initially hide all options
    hideAllSections();
    // Add event listeners to new buttons in the generated resume
    var newButtons = resumePreview.querySelectorAll('.toggle-btn');
    newButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var targetId = button.getAttribute('data-target');
            toggleSection(targetId); // Call the toggleSection function
        });
    });
});
