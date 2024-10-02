(function () {
    if (!$ || !$.validator) return;

    // Добавление сообщений для валидации
    $.extend($.validator.messages, {
        required: "Это поле обязательно",
        remote: "Пожалуйста, введите правильное значение.",
        email: "Пожалуйста, введите корректный e-mail",
        url: "Пожалуйста, введите корректный URL.",
        date: "Пожалуйста, введите корректную дату.",
        dateISO: "Пожалуйста, введите корректную дату в формате ISO.",
        number: "Пожалуйста, введите число.",
        digits: "Пожалуйста, вводите только цифры.",
        creditcard: "Пожалуйста, введите правильный номер кредитной карты.",
        equalTo: "Пароли не совпадают!",
        extension: "Пожалуйста, выберите файл с правильным расширением.",
        maxlength: $.validator.format("Пожалуйста, введите не больше {0} символов."),
        minlength: $.validator.format("Пожалуйста, введите не меньше {0} символов."),
        rangelength: $.validator.format("Пожалуйста, введите значение длиной от {0} до {1} символов."),
        range: $.validator.format("Пожалуйста, введите число от {0} до {1}."),
        max: $.validator.format("Пожалуйста, введите число, меньшее или равное {0}."),
        min: $.validator.format("Пожалуйста, введите число, большее или равное {0}."),
        name: "Имя должно содержать более 2 символов", 
        phone: "Введите корректный номер телефона"
    });

    const inputNameField = document.getElementById('js-submitName');
    const labelNameField = inputNameField.closest('.field');

    const inputTelField = document.getElementById('js-submitTel');
    const labelTelField = inputTelField.closest('.field');

    const phonePattern = /^\+7 \(\d{3}\) \d{3} \d{2} \d{2}$/;

    // Валидация имени
    inputNameField.addEventListener('input', function () {
        labelNameField.classList.remove('valid', 'invalid');
        this.value.length > 2 
            ? labelNameField.classList.add('valid')  
            : labelNameField.classList.add('invalid'); 
    });

    // Валидация телефона
    inputTelField.addEventListener('input', function () {
        labelTelField.classList.remove('valid', 'invalid');
        const value = inputTelField.value.trim();

        if (value.length >= 6) {
            phonePattern.test(value)
                ? labelTelField.classList.add('valid') 
                : labelTelField.classList.add('invalid'); 
        } else {
            labelTelField.classList.add('invalid'); 
        }
    });

    const submitForm = $('#js-submitForm');

    if (submitForm.length) {
        const submitAction = submitForm.attr("action");
        const submitName = submitForm.find("#js-submitName");
        const submitTel = submitForm.find('#js-submitTel');
        
        submitForm.validate({
            errorElement: "span",
            submitHandler: function (form, event) {
                event.preventDefault();
                $.ajax({
                    url: submitAction,
                    method: "POST",
                    data: {
                        name: submitName.val(),
                        tel: submitTel.val()
                    },
                    success: function () {
                        submitName.val("");
                        submitTel.val("");
                        submitName.closest('.field').removeClass('valid invalid');
                        submitTel.closest('.field').removeClass('valid invalid');
                        alert("Вы успешно подписались на рассылку новостей");
                    },
                    error: function () {
                        alert("Что-то пошло не так, попробуйте еще раз");
                    }
                });
            }
        });
    }
})();