# mern_sg
Node, Express, Mongo, React-Redux. Using Sendgrid and pay method
If you want to run the project you must type in your cmd "npm run dev". 

The project must be associated to git in order to publish in heroku. Besides that, in production the keys must be set in your heroku account.

Deploy to git
git add .
git commit -m "your comment of the change"
Push to heroku
heroku login
heroku create
git remote add heroku yourgivenRepo.heroku.com
git push heroku master
heroku open

Running site: https://rocky-sea-66730.herokuapp.com/
The Sendgrid might not work due to the one month free trial, so you will not receive an email related to the functionality of the site.

Refence: Udemy course by Stephen Grider. https://www.udemy.com/node-with-react-fullstack-web-development/learn/v4/overview
