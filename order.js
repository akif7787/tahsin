document.addEventListener("DOMContentLoaded", function() {
    const orderForm = document.getElementById("orderForm");
    const confirmOrderButton = document.getElementById("confirmOrder");
    const orderConfirmationSection = document.getElementById("orderConfirmation");

    confirmOrderButton.addEventListener("click", function() {
        const productName = document.getElementById("productName").value;
        const quantity = document.getElementById("quantity").value;
        const price = document.getElementById("price").value;

        // Display order confirmation dynamically
        document.getElementById("confirmProductName").textContent = productName;
        document.getElementById("confirmQuantity").textContent = quantity;
        document.getElementById("confirmPrice").textContent = price;

        // Hide the order form and display the order confirmation section
        orderForm.style.display = "none";
        orderConfirmationSection.style.display = "block";
    });
});
