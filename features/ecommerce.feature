  Feature: ECommerce Validation

  # The second example has three steps
    Scenario: Placing an order
    Given Login to the ecommerce application using "standard_user" and "secret_sauce"
    When Add "Sauce Labs Backpack" to the cart
    Then Verify the "Sauce Labs Backpack" added to the cart
    When Enter customer details "Anju","S" and "123456"
    Then Verify the order placed
