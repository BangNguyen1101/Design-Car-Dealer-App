document.getElementById('gender').addEventListener('change', function() {
    var genderIcon = document.getElementById('genderIcon');
    if (this.value === 'male') {
        genderIcon.src = '../assets/img/male.png';
    } else if (this.value === 'female') {
        genderIcon.src = '../assets/img/female.png';
    }
});
