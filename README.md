Deployed heroku link: https://patronous-test.herokuapp.com/

# Patronous-Test

[App screenshot](https://house-cup.netlify.com/codechallenges/patronoustest/images/patronoustest.png)


Patronous Test (+10 points)
Design an application that will administer a quiz to the user to test what their patronous will be. Use the results of that quiz to display the name and picture of the animal that their patronous takes.


What is a patronous?: 
In short, a patronous is a spell in the Harry Potter series that is used as a protection against evil that often takes the form of an animal. Some examples of these animals are a stag, otter, doe, phoenix, wolf, cat, and horse. 

Your application should ask 4 or more questions of your choosing, like the ones listed below (These do not need to be the questions your quiz asks). 

Each answer should be on a scale of 1 to 5 based on how much the user agrees or disagrees with the statement. 
Loyalty is more important than honesty.
Mean people will get what they deserve.
Sports are the best way to spend free time.
Money is more important than friendship.
Your application should have a set number of possible patronous forms. Use the answers a user provides to determine which animal suits them best and display that as their patronous match. 
Determine the user's most compatible patronous using the following as a guide:
Convert each user's results into a simple array of numbers (example: [5, 1, 4, 4]).
With that done, compare the difference between the user's scores against ones you have chosen for your different patronous forms, question by question.
Add up the differences to calculate the `totalDifference`.
User: [5, 1, 4, 4]
Horse Patronous: [3, 4, 5, 1]
Total Difference: 2 + 3 + 1 + 3 = 9

Remember to use the absolute value of the differences. In other words: no negative solutions! Your app should calculate both 5-3 and 3-5 as 2, and so on.
The closest match will be the user with the least amount of difference.
Once you've found the current user's most compatible patronous, display the result.
