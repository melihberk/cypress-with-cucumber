import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('Flo sitesine gidilir ve sayfanın açıldığı kontrol edilir', () => {
  cy.visit('https://www.flo.com.tr');
  cy.get("a[data-test='open-to-login-form']").should('be.visible');
});

When('Shadow root görünürse kapatılır', () => {
  cy.document().then((doc) => {
    const shadowHost = doc.querySelector('efilli-layout-dynamic');

    if (shadowHost && shadowHost.shadowRoot) {
      const button = shadowHost.shadowRoot.querySelector('#eefe4907-e404-4da1-923b-7787d076df08');

      if (button) {
        button.click();
        cy.log('Shadow DOM içindeki cookie butonuna tıklandı');
      } else {
        cy.log('Buton bulunamadı.');
      }
    } else {
      cy.log('Shadow host bulunamadı.');
    }
  });
});

When('Anasayfada bulunan ayakkabı kategorisine tıklanır', () => {
 cy.get(':nth-child(1) > [data-test="open-to-header-nav-menu"] > .d-flex > .navigation__item-title').click();
});


When('İlk ürün seçilip ürün detay sayfasından random beden seçimi yapılıp, sepete ekleme işlemi yapılır', () => {
  // İlk ürüne tıkla
  cy.get("a[data-test='open-to-product-detail-from-list']").first().click();

  // Ürün detaydan rastgele beden seçimi yapılır
cy.get("input[name='sizeSelection'] + label[data-test='click-to-product-size-selection']:not([class*='disabled'])")
  .then(($sizes) => {
    const randomIndex = Math.floor(Math.random() * $sizes.length);
    cy.wrap($sizes[randomIndex]).click();
  });

  // Sepete eklenir ve sepete gidilir
  cy.get('[data-test="click-to-product-add-to-basket"]').click();
  cy.get('[data-test="open-to-go-to-cart"]').click();

});

Then('Ürünün sepette olduğu ve checkout sayfasında olunduğu kontrol edilir', () => {
  cy.origin('https://checkout.flo.com.tr', () => {
    cy.get("button[data-test='action-show-basket-from-checkout']")
      .should('be.visible'); 
  });
});

