# mern_sg
Node, Express, Mongo, React-Redux. Using Sendgrid and pay method
If you want to run the project you must type in your cmd "npm run dev". 

The project must be associated to git in order to publish in jeroku. Besides that, in production the keys must be set in your heroku account.

Deploy to git
git add .
git commit -m "your comment of the change"
Push to heroku
heroku login
heroku create
git remote add heroku yourgivenRepo.heroku.com
git push heroku master
heroku open
