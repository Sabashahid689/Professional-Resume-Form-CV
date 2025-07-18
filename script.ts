const form = document.getElementById('resume-form') as HTMLFormElement;

// Function to hide all sections
function hideAllSections() {
    const options = document.querySelectorAll<HTMLDivElement>('.options');
    options.forEach(option => {
        option.style.display = 'none'; // Hide all options
    });
}

// Function to toggle a specific section
function toggleSection(targetId: string) {
    const targetOptions = document.getElementById(targetId);
    if (targetOptions) {
        // Check if the section is currently displayed
        if (targetOptions.style.display === 'block') {
            targetOptions.style.display = 'none'; // Hide if it's currently shown
        } else {
            hideAllSections(); // Hide all sections first
            targetOptions.style.display = 'block'; // Show the targeted option
        }
    }
}

// Resume generation
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    // Get values from the form
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const location = (document.getElementById('location') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const dob = (document.getElementById('dob') as HTMLInputElement).value;
    const nationality = (document.getElementById('nationality') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills-input') as HTMLTextAreaElement).value;

    const imgInput = document.getElementById('profile-pic') as HTMLInputElement;
    const imgSrc = imgInput.files?.[0] ? URL.createObjectURL(imgInput.files[0]) : '';

    const resumePreview = document.getElementById('resume-preview')!;
    resumePreview.innerHTML = `
        <div class="top-section">
            <div class="image">
                <img src="${imgSrc}" alt="Profile Picture" />
            </div>
            <h1>${name}</h1>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Location:</strong> ${location}</p>
            <p><strong>Email:</strong> ${email}</p>
        </div>
        <div class="bottom-section">
            <button type="button" class="toggle-btn" data-target="personal-info"><strong>Personal Info</strong></button>
            <button type="button" class="toggle-btn" data-target="edu"><strong>Education</strong></button>
            <button type="button" class="toggle-btn" data-target="exp"><strong>Experience</strong></button>
            <button type="button" class="toggle-btn" data-target="skills"><strong>Skills</strong></button>
        </div>
        <div id="personal-info" class="options">
            <h3>Personal Information</h3>
            <p>Date of Birth: ${dob}</p>
            <p>Nationality: ${nationality}</p>
        </div>
        <div id="edu" class="options">
            <h3>Education</h3>
            <p>${education}</p>
        </div>
        <div id="exp" class="options">
            <h3>Experience</h3>
            <p>${experience}</p>
        </div>
        <div id="skills" class="options">
            <h3>Skills</h3>
            <p>${skills}</p>
        </div>
    `;

    // Initially hide all options
    hideAllSections();

    // Add event listeners to new buttons in the generated resume
    const newButtons = resumePreview.querySelectorAll<HTMLButtonElement>('.toggle-btn');
    newButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target')!;
            toggleSection(targetId); // Call the toggleSection function
        });
    });
});
