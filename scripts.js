    /*char counter field update*/
    function textCounter(field) {
        if (field.value.length > 200) 
        {
            field.value = field.value.substring(0, 200);
            return false;
        } else {
        var boxlength = (200 - field.value.length);
        document.getElementById('counter').innerHTML = 'maximium 200 karakter - ' + boxlength + ' maradt'
        }
    }

    /*label moving from text inputs*/
    window.onload = function showlabel()
    {
        var labelid;
        labelid = document.getElementById('email');

        labelid.addEventListener('focus', (event) => {
        document.getElementById('label_email').style.display = "block";
        document.getElementById('inputwrapper_email').style.paddingTop = "6px";
        if(document.getElementById('email').value==="")
        {
            document.getElementById('email').style.color = "transparent";
        }
        });
        labelid.addEventListener('blur', (event) => {
        document.getElementById('label_email').style.display = "none";
        document.getElementById('inputwrapper_email').style.paddingTop = "30px";
        document.getElementById('email').style.color = "white";
        });

        labelid = document.getElementById('name');

        labelid.addEventListener('focus', (event) => {
        document.getElementById('label_name').style.display = "block"
        document.getElementById('inputwrapper_name').style.paddingTop = "6px";
        if(document.getElementById('name').value==="")
        {
            document.getElementById('name').style.color = "transparent";
        }
        });
        labelid.addEventListener('blur', (event) => {
        document.getElementById('label_name').style.display = "none"
        document.getElementById('inputwrapper_name').style.paddingTop = "30px";
        document.getElementById('name').style.color = "white";
        });

        labelid = document.getElementById('message');

        labelid.addEventListener('focus', (event) => {
        document.getElementById('label_message').style.display = "block"
        document.getElementById('inputwrapper_message').style.paddingTop = "6px";
        if(document.getElementById('message').value==="")
        {
            document.getElementById('message').style.color = "transparent";
        }
        });
        labelid.addEventListener('blur', (event) => {
        document.getElementById('label_message').style.display = "none"
        document.getElementById('inputwrapper_message').style.paddingTop = "30px";
        document.getElementById('message').style.color = "white";
        });
    }

    /*label removal from text inputs*/
    function checkemailcolor()
    {
        if(document.getElementById('email').value==="")
        {
            document.getElementById('email').style.color = "transparent";
        }
        else
        document.getElementById('email').style.color = "white";
    }

    function checknamecolor()
    {
        if(document.getElementById('name').value==="")
        {
            document.getElementById('name').style.color = "transparent";
        }
        else
        document.getElementById('name').style.color = "white";
    }

    function checkmessagecolor()
    {
        if(document.getElementById('message').value==="")
        {
            document.getElementById('message').style.color = "transparent";
        }
        else
        document.getElementById('message').style.color = "white";
    }

    /*burgermenu*/
    $(document).ready(function () {
        $('.burgermenu').on('click', function () {
            if(document.getElementById('mob-navbar').style.backgroundColor === '')
            {
                document.getElementById('mob-navbar').style.backgroundColor = '#0093D8';
            }
            else
            {
                document.getElementById('mob-navbar').style.backgroundColor = '';
            }
            $('.mob-dropdown').toggle();
        })
    });

    /*change slides 1-by-1*/
    var slideIndex = 1;
    showSlides(slideIndex);

    function currentSlide(n) 
    {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("topbox");
    var dots = document.getElementsByClassName("rectangle");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) 
    {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    }
    var slideIndex = 0;

    /*automatically change slides*/
    window.onload = AutoShowSlides();
    function AutoShowSlides() {
    var i;
    var slides = document.getElementsByClassName("topbox");
    var dots = document.getElementsByClassName("rectangle");
    for (i = 0; i < slides.length; i++) 
    {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(AutoShowSlides, 2000); // Change image every 2 seconds
    }
        


