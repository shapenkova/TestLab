(function () {
    if (!$ || !$.validator) return;
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
      maxlength: $.validator.format(
        "Пожалуйста, введите не больше {0} символов."
      ),
      minlength: $.validator.format(
        "Пожалуйста, введите не меньше {0} символов."
      ),
      rangelength: $.validator.format(
        "Пожалуйста, введите значение длиной от {0} до {1} символов."
      ),
      range: $.validator.format("Пожалуйста, введите число от {0} до {1}."),
      max: $.validator.format(
        "Пожалуйста, введите число, меньшее или равное {0}."
      ),
      min: $.validator.format(
        "Пожалуйста, введите число, большее или равное {0}."
      )
    });
    $.validator.addMethod(
      "email",
      function (value, element) {
        return (
          this.optional(element) ||
          /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,6}$/.test(value)
        );
      },
      "Введите корректный e-mail"
    );

    const eventForm = $('#js-submitForm');
    console.log(eventForm)
    if (eventForm.length) {
        eventForm.validate({
            errorElement: "span"
        });
    }

})();

// (function () {
//     "use strict";
    
//     if (!$ || !$.validator) return;
    
//     // Расширяем сообщения валидации
//     $.extend($.validator.messages, {
//         required: "Это поле обязательно",
//         remote: "Пожалуйста, введите правильное значение.",
//         email: "Введите корректный e-mail",
//         url: "Пожалуйста, введите корректный URL.",
//         date: "Пожалуйста, введите корректную дату.",
//         dateISO: "Пожалуйста, введите корректную дату в формате ISO.",
//         number: "Пожалуйста, введите число.",
//         digits: "Пожалуйста, вводите только цифры.",
//         creditcard: "Пожалуйста, введите правильный номер кредитной карты.",
//         equalTo: "Пароли не совпадают!",
//         extension: "Пожалуйста, выберите файл с правильным расширением.",
//         maxlength: $.validator.format("Пожалуйста, введите не больше {0} символов."),
//         minlength: $.validator.format("Пожалуйста, введите не меньше {0} символов."),
//         rangelength: $.validator.format("Пожалуйста, введите значение длиной от {0} до {1} символов."),
//         range: $.validator.format("Пожалуйста, введите число от {0} до {1}."),
//         max: $.validator.format("Пожалуйста, введите число, меньшее или равное {0}."),
//         min: $.validator.format("Пожалуйста, введите число, большее или равное {0}.")
//     });
    
//     // Метод для проверки e-mail
//     $.validator.addMethod(
//         "email",
//         function (value, element) {
//             return this.optional(element) || /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,6}$/.test(value);
//         },
//         "Введите корректный e-mail"
//     );

//     // Валидация для формы события
//     const eventForm = $('#js-eventForm');
//     if (eventForm.length) {
//         eventForm.validate({
//             errorElement: "span"
//         });
//     }

//     // Валидация для формы подписки
//     const submitForm = $("#js-submitForm");
//     if (submitForm.length) {
//         const submitAction = submitForm.attr("action");
//         const submitName = submitForm.find("#js-submitName");
//         const submitTel = submitForm.find("#js-submitTel");
//         const submitAgree = submitForm.find('input[name="agree"]'); // Выбираем чекбокс

//         submitForm.validate({
//             errorElement: "span",
//             rules: {
//                 name: {
//                     required: true, // Имя обязательно
//                     minlength: 2 // Минимум 2 символа
//                 },
//                 tel: {
//                     required: true, // Телефон обязательно
//                     minlength: 10, // Для примера, если нужен номер минимум 10 символов
//                     digits: true // Только цифры
//                 },
//                 agree: {
//                     required: true // Требуется согласие
//                 }
//             },
//             messages: {
//                 name: {
//                     required: "Пожалуйста, введите ваше имя.",
//                     minlength: "Имя должно содержать минимум 2 символа."
//                 },
//                 tel: {
//                     required: "Пожалуйста, введите номер телефона.",
//                     minlength: "Номер телефона должен содержать минимум 10 цифр.",
//                     digits: "Пожалуйста, вводите только цифры."
//                 },
//                 agree: {
//                     required: "Вы должны согласиться с условиями."
//                 }
//             },
//             submitHandler: function (form, event) {
//                 event.preventDefault();

//                 $.ajax({
//                     url: submitAction,
//                     method: "POST",
//                     data: {
//                         name: submitName.val(),
//                         tel: submitTel.val()
//                     },
//                     success: function () {
//                         submitName.val("");
//                         submitTel.val("");
//                         submitAgree.prop('checked', false); // Сбрасываем чекбокс
//                         alert("Вы успешно подписались на рассылку новостей");
//                     },
//                     error: function () {
//                         alert("Что-то пошло не так, попробуйте еще раз.");
//                     }
//                 });
//             }
//         });
//     }

// })();