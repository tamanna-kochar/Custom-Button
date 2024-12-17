

document.addEventListener("DOMContentLoaded", function() {
  // Check if it's a product page
  if (window.location.pathname.includes('/products/')) {
    // Create the button element
    var button = document.createElement("button");
    button.innerHTML = "Get Video Demo!";
    button.id = "customButton";

    // Apply simple button styles
    button.style.padding = "10px 20px";
    button.style.backgroundColor = "#007aff";
    button.style.color = "#fff";
    button.style.border = "none";
    button.style.cursor = "pointer";
    button.style.marginTop = "10px";

    // Append the button to the product page
    var productDescription = document.querySelector(".product-single__description");
    if (productDescription) {
      productDescription.appendChild(button);
    } else {
      console.error("Product description section not found.");
      return;
    }

    // Get the product name safely
    var productTitleElement = document.querySelector(".product-single__title");
    if (productTitleElement) {
      var productName = productTitleElement.innerText;
      var formattedProductName = encodeURIComponent(productName.trim().replace(/\s+/g, '-').toLowerCase());

      // Set up the button click event
      button.addEventListener("click", function() {
        var dynamicUrl = "https://ec74-112-196-39-197.ngrok-free.app/" + formattedProductName ;
        window.location.href = dynamicUrl;
      });
    } else {
      console.error("Product title not found.");
    }
  }
});
