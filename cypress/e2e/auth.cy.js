describe('RZD', () => {
  it('authorization + scroll', () => {

    // открытие
    cy.visit('https://www.rzd.ru/')

    // скролл вниз
    cy.scrollTo('bottom')

    // скролл вверх
    cy.scrollTo('top')

    // вход
    cy.get('a[class="j-auth-open username"]').click();

    // ввод валидных данных
    cy.get('form[data-id="login"]').within(() => {
      cy.get('input[name="j_username"]').type('pissska');
      cy.get('input[name="j_password"]').type('QWEasd123');
      cy.contains('Войти').click();
    })

    // я вошла? да
    cy.contains('Выход')

    // выход
    cy.contains('Выход').click()

    // я вышла? да
    cy.contains('Вход')

    // ввод невалидных данных
    cy.get('a[class="j-auth-open username"]').click()
    cy.get('form[data-id="login"]').within(() => {
      cy.get('input[name="j_username"]').type('invalidlogin')
      cy.get('input[name="j_password"]').type('invalidpassword')
      cy.contains('Войти').click();
    })

    // ошибка входа? да
    cy.contains('Ошибка: Неверное имя пользователя или пароль')
  })
})

