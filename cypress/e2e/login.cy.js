describe('Проверка авторизации', function () {

   it('Верный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // Ввели правильный логин
        cy.get('#pass').type('iLoveqastudio1'); // ввели правильный пароль
        cy.get('#loginButton').click(); // нажал войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверю что вижу текст после авторизации
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
       
    })

   it('Неверный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // Ввели правильный логин
        cy.get('#pass').type('iLoveqastudio63'); // ввели не правильный пароль
        cy.get('#loginButton').click(); // нажал войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверю что вижу текст после авторизации
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
   })
        it('верный пароль и неверный логин', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#mail').type('german@dolniko.ru'); // Ввели не правильный логин
        cy.get('#pass').type('iLoveqastudio1'); // ввели правильный пароль
        cy.get('#loginButton').click(); // нажал войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверю что вижу текст после авторизации
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю

})
 it('верный пароль и неверный логин без @', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#mail').type('germandolnikov.ru'); // Ввели не правильный логин
        cy.get('#pass').type('iLoveqastudio1'); // ввели правильный пароль
        cy.get('#loginButton').click(); // нажал войти
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // проверю что вижу текст после авторизации
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю

})
 it('верный пароль строчные буквы и верный логин без', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#mail').type('GerMandolnikov.ru'); // Ввели  правильный логин строчными
        cy.get('#pass').type('iLoveqastudio1'); // ввели правильный пароль
        cy.get('#loginButton').click(); // нажал войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверю что вижу текст после авторизации
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю

})
it('забыл пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // Ввели правильный логин
        cy.get('#forgotEmailButton').click(); // забыл пароль
        cy.get('#mailForgot').type('Artemmessi95@gmail.ru'); // ввел почту для вост.
        cy.get('#restoreEmailButton').click(); // нажал востановить
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // проверю что вижу текст после авторизации
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
       
    })
})

