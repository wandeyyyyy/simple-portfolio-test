//  toggle functionality
    const toggleButton = document.querySelector('.btn-nav');
    const navbarMenu = document.querySelector('.nav-ul');

    toggleButton.addEventListener('click', function() {
      
        if (navbarMenu.style.display === 'flex') {
            navbarMenu.style.display = 'none';
        } else {
            navbarMenu.style.display = 'flex';
        }
    });



    //  link to resume
    const button = document.getElementById('resume-btn');

  
    button.addEventListener('click', function() {
       
        window.location.href = 'https://www.dropbox.com/scl/fi/ijsum1f3dxr8wlbp3foyv/adeyemi_yewande.resume-3.pdf?rlkey=ytq95n4v5o4cyl437fqh1q5th&st=21i548kv&dl=0';
    });


    //submit message
   

     function submitForm() {
    
        document.getElementById("submitform").submit();
    }