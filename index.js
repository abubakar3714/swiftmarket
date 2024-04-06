

 let cart = [];

        function addToCart(productName, price) {
            cart.push({ name: productName, price: price });
            renderCart();
        }

        function renderCart() {
            let cartElement = document.getElementById('cart');
            cartElement.innerHTML = '<h2>Shopping Cart</h2>';
            let total = 0;
            cart.forEach(item => {
                cartElement.innerHTML += `<p>${item.name} - $${item.price}</p>`;
                total += item.price;
            });
            cartElement.innerHTML += `<p>Total: $${total.toFixed(2)}</p>`;
        }

        // JavaScript for filtering products based on search input
        document.getElementById('searchInput').addEventListener('input', function() {
            let searchValue = this.value.toLowerCase();
            let products = document.querySelectorAll('.product');
            products.forEach(product => {
                let productName = product.dataset.name.toLowerCase();
                if (productName.includes(searchValue)) {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            });
        });
        //header search bar javascript 
        document.getElementById('searchInputt').addEventListener('input', function() {
            let searchValue = this.value.toLowerCase();
            let products = document.querySelectorAll('.product');
            products.forEach(product => {
                let productName = product.dataset.name.toLowerCase();
                if (productName.includes(searchValue)) {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            });
        });

        //nav bar dark mode
        const checkbox = document.getElementById("checkbox")
        checkbox.addEventListener("change", () => {
          document.body.classList.toggle("dark")
        });
        //nav bar dark mode end
    

        // sideBar toggle harmbuger
         const menu_toggle = document.querySelector('.menu-toggle');
        const sidebar =document.querySelector('.sidebar');

        menu_toggle.addEventListener ('click', () =>{
            menu_toggle.classList.toggle('is-active');
            sidebar.classList.toggle('is-active');
        })
        //flip started
        
        //flip end
 