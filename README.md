### To start the app run:

- ```yarn && yarn start```

- This will run the server at localhost:3000.

- You can also create a build using ```yarn build```

### Task

- Build the mockups below, you can change the images, or the data being used, but the design should be roughly the same.

		- Desktop:

		https://d1m54pdnjzjnhe.cloudfront.net/pngineer/287e9c60-5bf9-11e7-86a2-695af5a15c90.png

		- Mobile:

		https://d1m54pdnjzjnhe.cloudfront.net/pngineer/285ac0b0-5bf9-11e7-a34a-4964468dc4d5.png

- Once you have finished you can expand on this by adding more functionality. You could add profile pages for the characters and you can add the ability to pin characters as favourites to view on your profile.

- You will want to add in a router want if you want to navigate around the app. Try using preact-router 		- https://www.npmjs.com/package/preact-router

### Notes

- If you want to add your own fonts or images then add them to the folders in ```src/assets```. If you are using fonts other than .tff you will have to add rules for these, around line 46 in the webpack config.

- I've included a CSS module setup which means all of our css won't be global. If you look at the classnames in the console you will see they are hashed, this is the work of CSS modules. See App.css and App.jsx for usage.
	- ```import styles from './App.css'```
	- ```<nav className={styles.navBar} />```
	- Read more: https://css-tricks.com/css-modules-part-1-need/


- I've added a icon library https://www.npmjs.com/package/preact-icons to the app. If you get any warnings about React then make sure you are using the files from the lib directory.
	- Usage: ```import RightArrow from 'preact-icons/lib/md/chevron-right'```


