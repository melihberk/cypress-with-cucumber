Feature: Flo Sepet 

  Scenario: Guest Kullanıcı ile Sepete Ürün Ekleme
    Given Flo sitesine gidilir ve sayfanın açıldığı kontrol edilir
    When Shadow root görünürse kapatılır
    And Anasayfada bulunan ayakkabı kategorisine tıklanır
    And İlk ürün seçilip ürün detay sayfasından random beden seçimi yapılıp, sepete ekleme işlemi yapılır
    Then Ürünün sepette olduğu ve checkout sayfasında olunduğu kontrol edilir
