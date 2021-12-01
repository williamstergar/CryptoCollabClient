This is the CryptoCollabClient!

Below this line I will discuss how the client side of my application runs. I will go in depth for each folder and the files contained within.

=================================================================================================================

COMPONENTS:
-----------------------------------------------------------------------------------------------------------------
AdminDeleteCollabs.tsx --> This TSX file provides the logic in order for an Admin to delete a collab for users without admin status. This would be necessary in case a posted Collab violates community guidelines.

AdminDeleteCrypto.tsx --> This TSX file provides the logic in order for an Admin to delete a crypto for users without admin status. This would be necessary in case a posted Crypto ends up being a meme coin. If you are unfamiliar with this term, it basically refers to a cryptocurrency originating from a meme; they have no underlying purpose and accumulate value based on speculative market demand.
-----------------------------------------------------------------------------------------------------------------
CreateCollab.tsx --> This TSX file provides the logic in order for a new user to create a new collab. It fetches from the server side logic and creates a collab when a user types in the two input fields. The new collab will show up in pgAdmin 4.

DeleteMyCollab.tsx --> This TSX file provides the logic in order for a registered/logged in user to delete their collab. It fetches from the server side logic and deletes the collab with the click of a button. The deleted collab will be removed from pgAdmin 4.

GetAllUserCollabs.tsx --> This TSX file provides the logic in order for an Admin, and only an Admin, to get all of the posted collabs on CryptoCollab. This is done for review purposes and to ensure no collab is violating community guidelines. With an Admin logging in, they will have two new components pop up on the website which will display all of the collabs with the click of a button. This will be accessed after getting one, or all, of an individual user's collab.

GetMyCollab.tsx --> This TSX file provides the logic in order for a user, or an Admin, to get their collabs they create. If a user, or an admin, creates one collab, they will see that collab. Similarly, if ten are created, they will see all ten collabs. It also has additional functionality of deleting and updating the collab once the list of them all are displayed.

UpdateMyCollab.tsx --> This TSX file provides the logic in order for a user to update their collab after creation. The input is the exact same to how a new user would create a collab. This will be accessed after getting one, or all, of an individual user's collabs. 
-----------------------------------------------------------------------------------------------------------------
CreateCrypto.tsx --> This TSX file provides the logic in order for a new user to create a crypto. It fetches from the server side logic and creates a new crypto when a user types in the two input fields. The new collab will show up in pgAdmin 4.

DeleteMyCrypto.tsx --> This TSX file provides the logic in order for a registered/logged in user to delete their crypto. It fetches from the server side logic and deletes the crypto with the click of a button. The deleted crypto will be removed from pgAdmin 4.

GetAllUserCryptos.tsx --> This TSX file provides the logic in order for an Admin, and only an Admin, to get all of the posted cryptos on CryptoCollab. This is done for review purposes and to ensure no crypto is violating community guidelines. With an Admin logging in, they will have two new components pop up on the website which will display all of the cryptos with the click of a button. This will be accessed after getting one, or all, of an individual user's crypto.

GetMyCrypto.tsx --> This TSX file provides the logic in order for a user, or an Admin, to get their cryptos they create. If a user, or an admin, creates one crypto, they will see that crypto. Similarly, if ten are created, they will see all ten cryptos. It also has additional functionality of deleting and updating the crypto once the list of them all are displayed.

UpdateMyCrypto.tsx --> This TSX file provides the logic in order for a user to update their crypto after creation. The input is the exact same to how a new user would create a crypto. This will be accessed after getting one, or all, of an individual user's cryptos.
-----------------------------------------------------------------------------------------------------------------
Auth.tsx --> This TSX file provides the logic in order for a new user to be registered on CryptoCollab. It requires an email and a password, and will subsequently be added into the pgAdmin 4 database. 

Login.tsx --> This TSX file provides the logic in order for a registered user to login to CryptoCollab. It will require the same email and password that was used to register the email, obviously. Make sure to write it down!
-----------------------------------------------------------------------------------------------------------------
App.tsx --> This TSX file is the parent of all components. It basically makes sure all the components display on the page. Without an App.tsx, or an App.js, this React application would cease to exist. It is always the first file that must be created or edited when beginning a project in React. 