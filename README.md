I have used React.js, Redux and Context API as tech stack and material UI for layout and icons.

Following are the steps that I followed during developing the website:
1. Navbar and landing page layout using material UI grid component. 
2. Dataset which includes image address, title of the product, price, and MRP.
3. Product section in which I have displayed the product details such as picture of the product, price, MRP and "add to cart" button.
4. Sort by feature for the products to sort the data according to the price.
4. Footer layout using material UI grid component. 
5. Redux store using createSlice, configStore with initial values for cartData, cartItemCount, totalAmount, isCartOpen, isSubmitFormOpen as empty list, 0, 0, false, false respectively.
6. Reducers to add, remove, and reduce item in the redux store for cart data list.
7. Reducers to handle the open and close of the cart and shipping/payment details popup.
8. Popup to display the cart items and When the user clicks on the cart icon from the navigation bar the cart item section will be poped up and the scroll will be disabled.
9. Login screen to access the E-Commerce website using google authentication.
10. Google client ID on google cloud console to avail the feature of google authentication.
11. Context store using React.createContext and included the google authentication logic which uses useGoogleLogin and googleLogout functions from the "@react-oauth/google" library.


Working of the website:
1. Initially, login screen will be displayed with some animations and transitions.
2. Click on "Sign in with google" button.
3. Login using your email id.
4. After successful login, you will be redirected to the e-commerce website.
5. In the product section, there are cards of products which includes picture of the product, price, MRP and "add to cart" button.
6. Using the "add to cart" button will can add the item to the cart, clicking it twice will increase the quantity of the item and the price.
7. You can sort the products according to the price using the dropdown provided next to the product section title.
7. By clicking on "Cart" icon in the navigation bar, if there is no item in the cart, it will display a message - "No items found! Please add some items." and if there is/are item/s in the cart, it will display the cart item which includes image of the item, quantity of the item, increase, decrease and remove button, total price of an item, total amount of all the items and cancel and order buttons.
8. In the cart, you can increase and decrease the items by clicking on + or - button, it includes a delete icon too using which the item will be removed from the cart.
11. The cancel button will close the cart popup.
12. If you click on the order button, a form for shipping details will be poped up.
13. In shipping details popup, you need to input your name, address, contact number, card number, card validity and cvv of the card and at the bottom of the poup you can even see the total amount, back and confirm buttons.
14. Back button will take you back to the cart popup and confirm button will place an order.
15. To close the cart or the shipping details popup, you can click outside the popup or on the close icon that is present at the right top of the popup.


Logic used during developing website:
1. Referred a article to implement google authentication (https://blog.logrocket.com/guide-adding-google-login-react-app/)

2. To add item in the cart data list is as follows,
	i. Initially, new item details object is created on the product card component.
	ii. The new item object is passed to the redux store by calling the addItem reducer using useDispatch.
	iii. In the addItem reducer, the new item is stored in a variable as newItem using action.payload and checked if the item already exists in the cart data list using filter.
	iv. If the item is present than, it is stored in a new variable as existingItem.
	v. The existing variable is checked, if it is undefined than, a new entry in the cart data is created else the existing item quantity, cart item count, total Amount is increased.

3. Logic to increase an item in the cart is same as add item to cart:

4. Decrease an item in the cart:
	i. Initially, new item details object is created on the product card component.
	ii. An item object is passed to the redux store by calling the decreaseItem reducer using useDispatch.
	iii. In the decreaseItem reducer, the item object is stored in a variable as removeItem using action.payload by searching for the item in the cart data list using filter.
	iv. If the removeItem quantity is one than, using filter the item is removed from the cart.
	v. Total amount and the quantity of the item is decreased.

5. Remove an item from the cart:
	i. Initially, new item details object is created on the product card component.
	ii. An item object is passed to the redux store by calling the removeItem reducer using useDispatch.
	iii. In the removeItem reducer, the item object is stored in a variable as removeItem using action.payload by searching for the item in the cart data list using filter.
	iv. Total amount and the cart item count is decreased.
	v. Using filter the item is removed from the cart.

6. Shopping cart popup:
	i. isCartOpen variable in the redux store is created with false as its inital value.
	ii. By clicking on "Cart" icon in the navigation bar, toggleIsCartOpen reducer is executed.
	iii. If any value is passed while calling the reducer the isCartOpen is set to false.
	iv. Else, isCartOpen is set to its opposite value. Example: false is set to true and vice versa.
	v. To close the cart, toggleIsCartOpen reducer is again executed.

7. Shipping details popup:
	i. isSubmitForm variable in the redux store is created with false as its inital value.
	ii. By clicking on "Order" button in the shopping cart, toggleIsSubmitFormOpen reducer is executed.
	iii. If any value is passed while calling the reducer the isSubmitForm is set to false.
	iv. Else, isSubmitForm is set to its opposite value. Example: false is set to true and vice versa.
	v. To close the cart, toggleIsSubmitFormOpen reducer is again executed.
