## Author

@Mohammed saber bellaaziri

## Prejct description

- The project is a weather website that provides weather informations according to the name of city inserted in the search input in page Home
- The project will be runnable in localhost 3000 after running yarn start 

## Back-end

- All POST & GET methods are tested with thunder client 
- The project is completly built with Javascript 
- Javascript Library used : React 
- Document-oriented database program used : MongoDB
- The mongo database used to test the website is included in the folder of this project
- Weather data was imported from online API (openweathermap.org) ** || My account may be temporary blocked due to exceeding of requests per day limitation of my free subscription type || **
- The project was runnable using the software packaging system Yarn install & start & dev for both back-end and front-end
- Pages are automatically redirected after login, logout or registering using history.push('/path')

## Front-end

- All POST & GET methods are tested with thunder client 
- The project is completly built with Javascript 
- Javascript Library used : React 
- Web framework used : Express
- The website was built with the bare-minimum amount of basic styling
- Two pages are linked in the project before accessing the Home page which offer the possibility to search weather by city inserted by the user and show the favourite list of cities selected by the user connected 
- The register page offer the option to create a user account by inserting the Name of the user, his Email and a password
- The password inserted by the user is automaticaly hashed using bcrypt algorithm before being inserted in the MongoDB
- When signed-in: After logging in with a specific email address and password the data is verified by the API created so it can gave access to the user or not depending on the situation detected ( Correct data that exists in the database OR incorrect data that doest exist in the database ). JSON messages are shown in both cases ( Email or password incorrect if data incorrect OR login successful else )
- When signed-in: After logging in with a specific email address and password the isActive data of the user that successfuly logged in is updated to 'true' so he can have access to different other options ( his personnal favourite list of cities and his current location )
- When signed-in: an option to get all cities saved in favourite list is available in the Home page 
- After clicking add to Fav: location is automatically saved in Favlist array in the MongoDB 
- RapidAPI is used to relocate the user 
- An option to logout is offered in the home page after successfuly logging in, after clicking the logout button the isActive of the user loggedin is updated to 'false'
- Multiple users cannot login at same time so after a user is logging in will be specified by his 'true' isActive
- The user is completly allowed to sign-in/sign-up 
- The project was runnable using the software packaging system Yarn install & start & dev for both back-end and front-end
- The list of favourite cities is returned by a get method ( method tested with thunder client ) but it's not shown in the HTML page 

## Good to know

- All POST & GET methods are tested with thunder client 
- The project was so benificial for me as someone that has never user react before
- The project offer le the possibility to improve some of my programming skills and discover new things
- There may be some small issues with the project but I'm pretty sure that it was realy good for me to make big efforts trying to complete the full project
- The project made me know that I'll really learn a lot with your impressive company and your great team


## Author

@Mohammed saber bellaaziri
