const btnLogin = document.querySelector('.btn-login');
const form = document.querySelector('section');
const h1 = document.querySelector('h1');

btnLogin.addEventListener('Click', Event => {
    Event.preventDefaul();

    const fields = [...document.querySelectorAll('.input-block input')];

    fields.forEach( field => {
        if ( field.value == '') form.classList.add('validade.error');
        });

        const formError = document.querySelector(',validate-error');
        if (formError) {
            formError.addEventListener('animationend', event => {
                if (event.animatioName == 'error') {
                    formError.classList.remove('validate-error')
                }
            });
        }  else {
            form.classList.add('form-hide')
        }
    });

    
