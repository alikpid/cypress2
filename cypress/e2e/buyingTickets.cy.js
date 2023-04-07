describe('RZD', () => {
    it('buying tickets', () => {

        // открываем
        cy.visit('https://www.rzd.ru/')
        
        // ввод данных поездки
        cy.get('input[placeholder="Откуда"]').type('Тайга');
        cy.contains('Тайга').first().click()
        cy.get('input[placeholder="Куда"]').type('Селенга');
        cy.contains('Селенга').first().click()
        cy.get('input[placeholder="Туда"]').type('30.04.2023')
        cy.get('a[class="rzd-button bg-accessible rzd-go-to-result-button"]').click();

        // выбор первого поезда
        cy.get('div[class="row card__body ng-star-inserted"]').first().click()

        // выбор первого класса обслуживания
        cy.contains('Продолжить').click()

        // выбор первого свободного места
        cy.get('.car-scheme-header__buttons__toggle-view-mode-btn').click()
        cy.get('li[class="seat-card ng-star-inserted"]').first().click()
        cy.contains('Продолжить').click()

        // авторизация
        cy.get('a[class="common-link tst-uiBtnAuthorization1"]').contains(' Войдите ').click()
        cy.get('input[aria-label="Логин"]').type('pissska')
        cy.get('input[aria-label="Пароль"]').type('QWEasd123')
        cy.get('div[class="content__text"]').contains(' Войти ').click()

        // выбор пасажира
        cy.contains(' Выбрать пассажира * ').click()
        cy.get('div[class="passenger-option__full-name"]').contains(' Путин Василий ').click()
        cy.contains(' Оформить заказ ').click()

        // ввод номера
        cy.get('input[type="tel"]').type('+79990001122')
        cy.contains(' Сохранить ').click()

        // отмена бронирование
        cy.get('div[class="content__text"]').contains(' Отменить бронирование ').click()
        cy.get('div[class="content__text"]').contains(' Да, отменить ').click()

    })
})