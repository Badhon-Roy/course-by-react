# Course-Registration

## Questions

- Question-1 : Add at least 3 Project features? <br/>  
- Answer:  <br>
  * Title : Each card will have a title, which will show the special name of that card.
  * Price : Each card will have a price, indicating the price of that item.
  * Credit : Each card will have a numbers of credit that can be collected.
  * Button : Each card will have a button that can be clicked on. Clicking this button will display the title of the card, add value and credits, and verify if the total credits are greater than 20.

- Question-2 : Discuss how you managed the state in your assignment project.
- Answer :  <br>
  First I convert some fake data to json and put it in a file called data.json inside the public folder. Then I customize the data. Fetch the data from data.json and put it in a hook called useState. Then I first design the landing page dynamically using the fetch data.
  The design shows some cards that include an image, a title, description, price, credits, and a select button. It was my intention that when I click on the select button another card will show the title of that card. When I click on the select button of any card the title of the cards will show and the title of a card cannot be shown double.Then I select the parent file of the two files or in such a way the file which if When passing data through props , will get the data in both the files . Then I use onclick on the select button and pass the function to onclick and this function is an arrow function. This function name is  HandleSelectButton. Set the value of the data using this function and a useState hook and send it to another file as a parameter.
  Then map this mutual array to another children file. which goes as an object and by destructuring this object I am able to display the title in the code .
  Pass some condition in handleSelectButton function to onclick used in that select button. The conditions are that if double is selected then it will show through alert message that 'this already selected' and credit value will not be more than 20. Put these values into two useState hooks. Then I was able to complete the task using the interaction very easily.