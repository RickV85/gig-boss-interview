# Overview

This coding challenge is aimed at our future implementations of our app's "Books" page.  Currently users can keep track of their income for the year, the overall income, and each individual band's income. Our future implementations will include a more thorough record of all of the above, with the addition of keeping track of individual musician income, Tracking 1099 (those who earn more than $600 from your bands), as well as an EXPORT option where all income information can be printed in a format that's easy to use for tax purposes. 

We've provided you with instructions and income data that you will use for the challenge, as well as design examples to assist you. Our MVP, or Minimum Viable Product, is the completion of Iteration 2, and we really hope you can complete through Iteration 2! Iteration 3 is extra but encouraged if you have the time.

## Tech Stack

If you know React please use React to complete this challenge! But if you prefer another framework or language that's fine as well. \
PLEASE also make the entire app mobile-friendly! Gig Boss is a mobile app, and it's imperative that everything we do works and looks great on mobile. 
This DOES NOT mean you have to use React Native to complete this project (unless you really want to); setting up your computer for dev work in React Native is a pain, so we recommend you use React Web and design everything for a mobile phone!

## Resources:

*income_data_2023_24.json* has been uploaded in this repo, this file will contain all of the necessary data for the challenge. 

\
[Here is the link](https://www.figma.com/file/9qH3jQrBrNppwJjSgnoGUP/GB-Coding-Challenge?type=design&node-id=0%3A1&mode=design&t=wlM8zlV3ihzc8ZNB-1) to the Figma designs we've created as examples of what you could create. Individual examples are also shown in this README for each iteration. You can copy our designs or do your own thing, as long as all the required data and functionality are there!

# CODING CHALLENGE INSTRUCTIONS

You are the leader of 3 bands, and it's time to do taxes for the year — ugh, sucks right?! 🙃 \
Thankfully, you're working on an app that would make tax season a whole lot easier for musicians like you!
Each band has 4 members total (3 including you).\
\
Below you will find the instructions for each iteration of the assignment!

## Iteration 0

UI Setup - This is a BASIC template of how to setup the UI.  This is not a strict template, so feel free to use your own design ideas! We are looking for functionality over beauty, but with a lot of UI changes on the horizon for Gig Boss, a catchy design is a Plus!

\
Details:
- Notice there is a "Total Income for 2023-2024" for all bands at the top.
- The "Income By Band" will be a drop down menu, where you can choose which band info you'll see.
- Then there are two Buttons
  - "Income By Musician" shows the income to each individual (with options to filter)
  - "Export Data," Push this button and all data will be exported to a sheet with all the important tax numbers.

<img src='https://github.com/joeyhuaa/gig-boss-interview/blob/main/Iteration%200_Example.png' width='400' />

## Iteration 1

This illustrates the "Income By Band" pulldown menu, as well as the information necessary in the "Render Area." These include:
 - Total Band Income
 - Income of each band member. 
 - When you switch between bands the information in this window will change.

<img src='https://github.com/joeyhuaa/gig-boss-interview/blob/main/Iteration%201_Example.png' width='400' />

## Iteration 2 (MVP - Minimum Viable Product)

This illustrates the first button, "Income By Musician."  With a click of this button the "Render Area" should show: 

- A search input (name search)
- A dropdown input with two options ">= $600" and "< $600."
  - The pulldown separates members who've earn more than or equal to, or less then $600. 
- A list of ALL (unfiltered) employees.  

When the members are unfiltered please include a visual cue for the members who have made >= $600.  This is shown with a green highlight in the example.

<img src='https://github.com/joeyhuaa/gig-boss-interview/blob/main/Iteration%202_Example.png' width='400' />

## Iteration 3

This step is the final step.  Here we will press "Export Data" and ALL of the important information should be exported to a useful tax page.  

It should include:
- Total Income 2023 - 2024
- Total $ Each Member Made
- Total $ You Paid Out To Members Who Made >= $600 
- Total $ You Paid Out To Members Who Made < $600
- Total $ You Paid Out
- Total Personal Income

The Export can be:
- Another Page (little spicy)
- PDF file (spicy)
- Excel sheet (extra spicy)

We've made a Figma example of how you might show the data in another page after clicking the button. Don't think too hard about how you want to export the data; do what time allows and prioritize displaying all the necessary information cleanly.

<img src='https://github.com/joeyhuaa/gig-boss-interview/blob/main/Iteration%203_Example.png' width='400' />

## How to Complete and Submit
Please fork this repo and email us a link to the repo after you've completed the challenge, or you can create a new repo from scratch if you'd like. Just make sure you use the data from the .csv file we've attached 🙂

If you have any questions, please do not hesitate to email Joey, one of the lead developers at Gig Boss, at joeyhua17@gmail.com.

Please send submissions to joeyhua17@gmail.com and reid.poole@gigbossapp.com

