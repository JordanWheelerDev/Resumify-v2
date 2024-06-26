document.addEventListener('DOMContentLoaded', function () {
    const userFullName = document.getElementById('userFullName');
    const userFullNameText = document.getElementById('userFullNameText');
    const userAboutMe = document.getElementById('userAboutMe');
    const userJobTitle1 = document.getElementById('userJobTitle1');
    const userCompanyName1 = document.getElementById('userCompanyName1');
    const userJobResponsibilities1 = document.getElementById('userJobResponsibilities1');
    const userDegree = document.getElementById('userDegree');
    const userEducationInstitutionName = document.getElementById('userEducationInstitutionName');
    const userEducationInformation = document.getElementById('userEducationInformation');
    const userSkills = document.getElementById('userSkills');
    const userEmailAddress = document.getElementById('userEmailAddress');
    const userPhoneNumber = document.getElementById('userPhoneNumber');
    const userAddress = document.getElementById('userAddress');
    const userLinkedIn = document.getElementById('userLinkedIn');
    const userGitHub = document.getElementById('userGitHub');
    const userTwitter = document.getElementById('userTwitter');
    const addMoreEducationInformation = document.getElementById('addMoreEducationInformation');
    // const userJobTitle2 = document.getElementById('userJobTitle2');
    // const userCompanyName2 = document.getElementById('userCompanyName2');
    // const userJobResponsibilities2 = document.getElementById('userJobResponsibilities2');
    // const userJobTitle3 = document.getElementById('userJobTitle3');
    // const userCompanyName3 = document.getElementById('userCompanyName3');
    // const userJobResponsibilities3 = document.getElementById('userJobResponsibilities3');

    // Button Steps
    const nextToStepTwo = document.getElementById('nextToStepTwo');
    const nextToStepThree = document.getElementById('nextToStepThree');
    const nextToStepFour = document.getElementById('nextToStepFour');
    const nextToStepFive = document.getElementById('nextToStepFive');
    const nextToStepSix = document.getElementById('nextToStepSix');
    const nextToStepSeven = document.getElementById('nextToStepSeven');
    const nextToStepEight = document.getElementById('nextToStepEight');
    const prevToStepOne = document.getElementById('prevToStepOne');
    const prevToStepTwo = document.getElementById('prevToStepTwo');
    const prevToStepThree = document.getElementById('prevToStepThree');
    const prevToStepFour = document.getElementById('prevToStepFour');
    const prevToStepFive = document.getElementById('prevToStepFive');
    const prevToStepSix = document.getElementById('prevToStepSix');
    const prevToStepSeven = document.getElementById('prevToStepSeven');
    // const addMoreWorkExperience = document.getElementById('addMoreWorkExperience');

    // Div steps
    const stepOne = document.getElementById('stepOne');
    const stepTwo = document.getElementById('stepTwo');
    const stepThree = document.getElementById('stepThree');
    const stepFour = document.getElementById('stepFour');
    const stepFive = document.getElementById('stepFive');
    const stepSix = document.getElementById('stepSix');
    const stepSeven = document.getElementById('stepSeven');
    const stepEight = document.getElementById('stepEight');

    // Work experience divs 
    // const userJobDiv1 = document.getElementById('userJobDiv1');
    // const userJobDiv2 = document.getElementById('userJobDiv2');
    // const userJobDiv3 = document.getElementById('userJobDiv3');

    // Navigation and retaining user input
    nextToStepTwo.addEventListener('click', () => {
        if(userFullName.value === '') {
            alert('Please enter your full name');
            return;
        }
        localStorage.setItem('userFullName', userFullName.value);
        stepOne.style.display = 'none';
        stepTwo.style.display = 'block';
        userFullNameText.innerHTML = localStorage.getItem('userFullName');
    });

    nextToStepThree.addEventListener('click', () => {
        if(userAboutMe.value === '') {
            alert('Please enter a short description about yourself');
            return;
        }
        localStorage.setItem('userAboutMe', userAboutMe.value);
        stepTwo.style.display = 'none';
        stepThree.style.display = 'block';
    });

    nextToStepFour.addEventListener('click', () => {
        if(userJobTitle1.value === '' || userCompanyName1.value === '' || userJobResponsibilities1.value === '') {
            alert('Please fill in job title, company name and your responsibilities before continuing!');
            return;
        }
        localStorage.setItem('userJobTitle1', userJobTitle1.value);
        localStorage.setItem('userCompanyName1', userCompanyName1.value);
        localStorage.setItem('userJobResponsibilities1', userJobResponsibilities1.value);
        stepThree.style.display = 'none';
        stepFour.style.display = 'block';
    });

    nextToStepFive.addEventListener('click', () => {
        if(userDegree.value === '' || userEducationInstitutionName.value === '' || userEducationInformation.value === '') {
            alert('Please fill in degree, institution name and your education information before continuing!');
            return;
        }
        localStorage.setItem('userDegree', userDegree.value);
        localStorage.setItem('userEducationInstitutionName', userEducationInstitutionName.value);
        localStorage.setItem('userEducationInformation', userEducationInformation.value);
        stepFour.style.display = 'none';
        stepFive.style.display = 'block';
    });

    nextToStepSix.addEventListener('click', () => {
        if(userSkills.value === '') {
            alert('Please fill in your skills before continuing!');
            return;
        }
        localStorage.setItem('userSkills', userSkills.value);
        stepFive.style.display = 'none';
        stepSix.style.display = 'block';
    });

    nextToStepSeven.addEventListener('click', () => {
        if(userEmailAddress.value === '' || userPhoneNumber.value === '' || userAddress.value === '') {
            alert('Please fill in your email address, phone number and address before continuing!');
            return;
        }
        localStorage.setItem('userEmailAddress', userEmailAddress.value);
        localStorage.setItem('userPhoneNumber', userPhoneNumber.value);
        localStorage.setItem('userAddress', userAddress.value);
        stepSix.style.display = 'none';
        stepSeven.style.display = 'block';
    });

    nextToStepEight.addEventListener('click', () => {
        localStorage.setItem('userLinkedIn', userLinkedIn.value);
        localStorage.setItem('userGitHub', userGitHub.value);
        localStorage.setItem('userTwitter', userTwitter.value);
        stepSeven.style.display = 'none';
        stepEight.style.display = 'block';
    });

    // Previous button steps
    prevToStepOne.addEventListener('click', () => {
        stepOne.style.display = 'block';
        stepTwo.style.display = 'none';
    });

    prevToStepTwo.addEventListener('click', () => {
        stepTwo.style.display = 'block';
        stepThree.style.display = 'none';
    });

    prevToStepThree.addEventListener('click', () => {
        stepThree.style.display = 'block';
        stepFour.style.display = 'none';
    });

    prevToStepFour.addEventListener('click', () => {
        stepFour.style.display = 'block';
        stepFive.style.display = 'none';
    });

    prevToStepFive.addEventListener('click', () => {
        stepFive.style.display = 'block';
        stepSix.style.display = 'none';
    });

    prevToStepSix.addEventListener('click', () => {
        stepSix.style.display = 'block';
        stepSeven.style.display = 'none';
    });

    prevToStepSeven.addEventListener('click', () => {
        stepSeven.style.display = 'block';
        stepEight.style.display = 'none';
    });

    // Add More Work Experience functionality
    // addMoreWorkExperience.addEventListener('click', () => {
    //     const currentDivIndex = Array.from(document.querySelectorAll('.job-div')).findIndex(div => div.style.display === 'block');
    //     const nextDivIndex = currentDivIndex + 1;

    //     if (currentDivIndex !== -1) {
    //         const currentDiv = document.querySelectorAll('.job-div')[currentDivIndex];
    //         const jobTitle = currentDiv.querySelector(`#userJobTitle${currentDivIndex + 1}`);
    //         const companyName = currentDiv.querySelector(`#userCompanyName${currentDivIndex + 1}`);
    //         const jobResponsibilities = currentDiv.querySelector(`#userJobResponsibilities${currentDivIndex + 1}`);

    //         // Check if all fields are filled
    //         if (jobTitle.value.trim() === '' || companyName.value.trim() === '' || jobResponsibilities.value.trim() === '') {
    //             alert('Please fill out all fields before adding more work experience.');
    //             return;
    //         }

    //         // Show next div
    //         if (nextDivIndex < document.querySelectorAll('.job-div').length) {
    //             document.querySelectorAll('.job-div')[nextDivIndex].style.display = 'block';
    //             currentDiv.style.display = 'none';
    //         } else {
    //             alert('You have reached the maximum number of job experiences.');
    //         }
    //     }
    // });

    // Retain user input on page load
    if (localStorage.getItem('userFullName')) {
        userFullName.value = localStorage.getItem('userFullName');
    }
    if (localStorage.getItem('userAboutMe')) {
        userAboutMe.value = localStorage.getItem('userAboutMe');
    }
    if (localStorage.getItem('userJobTitle1')) {
        userJobTitle1.value = localStorage.getItem('userJobTitle1');
    }
    if (localStorage.getItem('userCompanyName1')) {
        userCompanyName1.value = localStorage.getItem('userCompanyName1');
    }
    if (localStorage.getItem('userJobResponsibilities1')) {
        userJobResponsibilities1.value = localStorage.getItem('userJobResponsibilities1');
    }
    // if (localStorage.getItem('userJobTitle2')) {
    //     userJobTitle2.value = localStorage.getItem('userJobTitle2');
    // }
    // if (localStorage.getItem('userCompanyName2')) {
    //     userCompanyName2.value = localStorage.getItem('userCompanyName2');
    // }
    // if (localStorage.getItem('userJobResponsibilities2')) {
    //     userJobResponsibilities2.value = localStorage.getItem('userJobResponsibilities2');
    // }
    // if (localStorage.getItem('userJobTitle3')) {
    //     userJobTitle3.value = localStorage.getItem('userJobTitle3');
    // }
    // if (localStorage.getItem('userCompanyName3')) {
    //     userCompanyName3.value = localStorage.getItem('userCompanyName3');
    // }
    // if (localStorage.getItem('userJobResponsibilities3')) {
    //     userJobResponsibilities3.value = localStorage.getItem('userJobResponsibilities3');
    // }
});
