document.addEventListener('DOMContentLoaded', function () {
    const userFullName = document.getElementById('userFullName');
    const userFullNameText = document.getElementById('userFullNameText');
    const userAboutMe = document.getElementById('userAboutMe');
    const userJobTitle1 = document.getElementById('userJobTitle1');
    const userCompanyName1 = document.getElementById('userCompanyName1');
    const userJobResponsibilities1 = document.getElementById('userJobResponsibilities1');
    const userJobTitle2 = document.getElementById('userJobTitle2');
    const userCompanyName2 = document.getElementById('userCompanyName2');
    const userJobResponsibilities2 = document.getElementById('userJobResponsibilities2');
    const userJobTitle3 = document.getElementById('userJobTitle3');
    const userCompanyName3 = document.getElementById('userCompanyName3');
    const userJobResponsibilities3 = document.getElementById('userJobResponsibilities3');

    // Button Steps
    const nextToStepTwo = document.getElementById('nextToStepTwo');
    const nexToStepThree = document.getElementById('nextToStepThree');
    const nextToStepFour = document.getElementById('nextToStepFour');
    const prevToStepOne = document.getElementById('prevToStepOne');
    const prevToStepTwo = document.getElementById('prevToStepTwo');
    const prevToStepThree = document.getElementById('prevToStepThree');

    // Div steps
    const stepOne = document.getElementById('stepOne');
    const stepTwo = document.getElementById('stepTwo');
    const stepThree = document.getElementById('stepThree');
    const stepFour = document.getElementById('stepFour');

    // Navigation and retaining user input
    nextToStepTwo.addEventListener('click', () => {
        localStorage.setItem('userFullName', userFullName.value);
        stepOne.style.display = 'none';
        stepTwo.style.display = 'block';
        userFullNameText.innerHTML = localStorage.getItem('userFullName');
    });

    nexToStepThree.addEventListener('click', () => {
        localStorage.setItem('userAboutMe', userAboutMe.value);
        stepTwo.style.display = 'none';
        stepThree.style.display = 'block';
        userFullNameText.innerHTML = localStorage.getItem('userFullName');
        userAboutMe.innerHTML = localStorage.getItem('userAboutMe');
    });

    nextToStepFour.addEventListener('click', () => {
        localStorage.setItem('userJobTitle1', userJobTitle1.value);
        localStorage.setItem('userCompanyName1', userCompanyName1.value);
        localStorage.setItem('userJobResponsibilities1', userJobResponsibilities1.value);
        localStorage.setItem('userJobTitle2', userJobTitle2.value);
        localStorage.setItem('userCompanyName2', userCompanyName2.value);
        localStorage.setItem('userJobResponsibilities2', userJobResponsibilities2.value);
        localStorage.setItem('userJobTitle3', userJobTitle3.value);
        localStorage.setItem('userCompanyName3', userCompanyName3.value);
        stepThree.style.display = 'none';
        stepFour.style.display = 'block';
        userFullNameText.innerHTML = localStorage.getItem('userFullName');
        userAboutMe.innerHTML = localStorage.getItem('userAboutMe');
        userJobTitle1.innerHTML = localStorage.getItem('userJobTitle1');
        userCompanyName1.innerHTML = localStorage.getItem('userCompanyName1');
        userJobResponsibilities1.innerHTML = localStorage.getItem('userJobResponsibilities1');
        userJobTitle2.innerHTML = localStorage.getItem('userJobTitle2');
        userCompanyName2.innerHTML = localStorage.getItem('userCompanyName2');
        userJobResponsibilities2.innerHTML = localStorage.getItem('userJobResponsibilities2');
        userJobTitle3.innerHTML = localStorage.getItem('userJobTitle3');
        userCompanyName3.innerHTML = localStorage.getItem('userCompanyName3');
        userJobResponsibilities3.innerHTML = localStorage.getItem('userJobResponsibilities3');
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
    if (localStorage.getItem('userJobTitle2')) {
        userJobTitle2.value = localStorage.getItem('userJobTitle2');
    }
    if (localStorage.getItem('userCompanyName2')) {
        userCompanyName2.value = localStorage.getItem('userCompanyName2');
    }
    if (localStorage.getItem('userJobResponsibilities2')) {
        userJobResponsibilities2.value = localStorage.getItem('userJobResponsibilities2');
    }
    if (localStorage.getItem('userJobTitle3')) {
        userJobTitle3.value = localStorage.getItem('userJobTitle3');
    }
    if (localStorage.getItem('userCompanyName3')) {
        userCompanyName3.value = localStorage.getItem('userCompanyName3');
    }
    if (localStorage.getItem('userJobResponsibilities3')) {
        userJobResponsibilities3.value = localStorage.getItem('userJobResponsibilities3');
    }
    
});
