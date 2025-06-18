# cypress-with-cucumber

# 🧪 Cypress + Cucumber (BDD) E2E Test Projesi – Flo.com.tr

Bu projede, [Cypress](https://docs.cypress.io/) ve [Cucumber](https://github.com/badeball/cypress-cucumber-preprocessor) (BDD yaklaşımı) kullanılarak Flo e-ticaret sitesi üzerinde uçtan uca (end-to-end) test senaryoları yazılmıştır.

## 🎯 Amaç

Ziyaretçinin Flo sitesinde:
- Anasayfaya ulaşması
- Cookie popup'ını kapatması (Shadow DOM)
- Ayakkabı kategorisine gitmesi
- Rastgele bir ürün seçmesi
- Random bedenle sepete eklemesi
- Sepet ve checkout sayfasında doğrulama yapılması

senaryosu adım adım test edilmiştir.

---

## 📁 Proje Yapısı

```bash
cypress-with-cucumber/
├── cypress/
│   ├── e2e/
│   │   └── 3-cypressbdd/
│   │       ├── search.feature
│   │       └── search.js
│   ├── support/
│   └── fixtures/
├── cypress.config.js
├── package.json
└── README.md



Kullanılan Paketler
cypress
@badeball/cypress-cucumber-preprocessor
@bahmutov/cypress-esbuild-preprocessor

.feature dosyalarındaki Gherkin adımları ve step definition dosyaları detaylı olarak cypress/e2e/3-cypressbdd/ klasöründe yer almaktadır.
