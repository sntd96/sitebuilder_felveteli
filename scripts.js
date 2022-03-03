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


