Create an InteractiveWelcome component that renders an input tag and a Welcome component that receives a name prop and renders the Welcome, {name}! message within a p tag.

Pass the current content of the input tag to the name prop of the Welcome component. The input tag should be a controlled component.

Create a Login component containing three inputs: a username input, a password input and a remember checkbox. 
All three inputs should be controlled components. Add a "login" button to the Login component. This button should be disabled as long as the username and password inputs are empty. When clicked, the event handler attached to the button should call an onLogin function passed as 
a prop to the Login component, passing it the state, that will print the state value.

Add a "reset" button to the Login component that clears the content of all three inputs when clicked. Use the form element to handle the form's submission, and attach the handleLogin event handler to the onSubmit event of the form element. How do you prevent the default behavior of the form element?