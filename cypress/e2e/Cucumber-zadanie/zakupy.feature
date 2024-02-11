Feature: Wyszukiwanie i zakup produktu

  Scenario: Wyszukiwanie produktu
    Given Użytkownik jest na stronie głównej sklepu internetowego
    When Użytkownik wprowadza nazwę produktu "nazwa_produktu" w pole wyszukiwania
    And Użytkownik klika przycisk "Szukaj"
    Then Użytkownik widzi listę produktów pasujących do zapytania

  Scenario: Dodawanie produktu do koszyka
    Given Użytkownik znajduje produkt "nazwa_produktu" na liście wyników wyszukiwania
    When Użytkownik dodaje produkt do koszyka
    Then Produkt "nazwa_produktu" jest dodany do koszyka
    And Koszyk zawiera jeden produkt

  Scenario: Proces zakupu
    Given Użytkownik znajduje się na stronie koszyka
    When Użytkownik przechodzi do procesu zamówienia
    And Użytkownik wprowadza dane dostawy i płatności
    And Użytkownik klika przycisk "Zamów teraz"
    Then Użytkownik otrzymuje potwierdzenie zamówienia
    And Zamówienie zawiera produkt "nazwa_produktu"

  Scenario: Walidacja zamówienia
    Given Użytkownik otrzymuje potwierdzenie zamówienia
    Then Zamówienie jest prawidłowo złożone
    And Kwota zamówienia jest zgodna z ceną produktu
