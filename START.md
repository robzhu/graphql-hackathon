# Your first 10 minutes
Step-by-step instructions to get your project under way

1) Fork the starter kit
Click "Fork" on the top right of this web page. 

![alt text](http://i.imgur.com/rgLrgUk.png "FORK")

Next, add everyone on your team to the list of collaborators (Under Settings). Note your git repository URL (in the address bar). You'll need it in the next steps.

2) Your team will be assigned a virtual private server. Open a new terminal window and SSH to it:
```
ssh root@<Server IP>
# enter your password when prompted
```

3) Clone the repo and run the GraphQL server

```
git clone {YourRepoURL}
cd graphql-hackathon/server
npm install
# run 'npm run build' after making any changes.
npm run build && npm start
```
Open http://<Server IP>:5000 in your browser and you should see GraphiQL. Try executing some queries against the example Library schema. Here's a good one:

```
{
  books {
    title
    author {
      name
    }
  }
}
```

4) On your laptop, run one of the clients.

```
git clone https://github.com/robzhu/graphql-hackathon
cd graphql-hackathon/ReactApollo
npm install
# open src/App.js in your editor and replace serverUri with your GraphQL server address
npm start
```

Your browser should automatically open a new tab and display a simple React App that lets you explore the books and authors served by the example GraphQL server.
