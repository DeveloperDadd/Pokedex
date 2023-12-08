# To Do List # 

## ABOUT ## 
- Based off the popular Pokemon franchise
  <br>
- Users will be able to interact with their 6 'favorite' pokemon in their team, as well as interact with their pokedex
  <br>
- Users can search the pokedex for pokemon to learn more about them
  <br>
- Home page, team page showing 6 pokemon, and pokedex pages to be navigated with React router
  <br>
- Ability to 'favorite' pokemon to add them to the trainer's team

## Atomic Design :
- *ATOMS*
    - Pokedex icon
    - Trainer Image SVG
    - Button to toggle favorite pokemon and add them to your team
    - Button to toggle pokemon as caught?
- *MOLECULES*
    - Each pokemon retrieved from the API is a molecule collectively with pokemon image, description, etc. 
- *ORGANISMS*
    - The entire pokedex
    - The team page which will be the user's 6 favorite pokemon
    - The entire app with the home page, pokedex page, and team page

## MoSCoW: 
- *MUST HAVE*
    - Pokedex with different search and filtering capabilities (region, type, caught status, legendary status)
    - Make use of React Router
    - Trainer's pokemon team consisting of the user's six favorite pokemon
    - Axios API call to fetch data from pokemon API using useEffect
- *SHOULD HAVE*
    - Friendly UI
    - Mobile responsiveness (use Tailwind)
    - SPA using React
    - Memo certain components to avoid rerendering certain parts of the application
    - A page for each Pokemon displaying detailed informaton, abilities, stats, etc.
    - Optimized performance
    - Set up with Vite
- *COULD HAVE*
    - User capability to generate a random team from the pokedex
    - Ability to only have one legendary per team (alert user if they already have a legendary on their team)
    - User Authentication so users can save their pokemon across sessions
    - Animations and transitions
    - Pagination or infinite scroll for browsing through a large number of Pokemon
    - Change UI colors / app background based on user's favorite type of pokemon
    - Ability to give pokemon on their favorite team nicknames
    - Conditional rendering to show 'Hey Trainer' or the person's name if they fill out a form?
- *WON'T HAVE*
    - Any digimon
 
## Variables / Components:
1. **HOME**
     * Trainer image SVG file
     * CTA
     * Icon for pokemon team ( six favorite pokemon )
     * Icon for pokedex
     * useEffect to make Axios call on page render pass data down to Pokedex component
     * STRETCH: conditional rendering of UI based on user's favorite type of pokemon (ghost would be black/purple, grass green/brown, etc.)
2. **FAVORITES COMPONENT**
     * Favorites array of user's six favorite pokemon
     * User can remove pokemon from favorites
     * User can click pokemon in the team to see more information
     * Randomize team maybe? AND Limit of 1 legendary per team?
3. **POKEDEX**
     * Data passed down from parent or maybe stored in global state?
     * Only shows 1 pokemon at a time
     * Pagination or infinite scroll enabled
     * User can click Pokemon to see more info, etc.
5. **FOOTER COMPONENT**
     * LinkedIn and Github icons with links to both

  
## Functions : 
- onChange event listener:
  - For pokedex search functionality
  - Store the value inside of a variable to be able to search the data from API or already collected data
- Team
  - Array of objects being Pokemon names, images, descriptions, etc.
- addToTeam():
  - User can add a pokemon to their team with the click of a button for a team of 6
  - If the user already has 6 Pokemon on their team, it will tell them they can't add anymore
  - AND: if they already have a legendary on their team, they can't have another legendary
- removeFromTeam():
  - User can remove any pokemon from their 6 man team at the click of a button
- giveNickName():
  - STRETCH: user can double click any pokemon in their 6 man team to give a nickname
  - 
