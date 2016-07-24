# react-test-app

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://react-te.herokuapp.com/)

This is merely a fun test app to gauge levels of different contributors with React JS
It starts out as a minimalistic home and about page.

The app itself is live on http://react-te.herokuapp.com/


To contribute to it,

1. Fork the project
2. Clone the project to you local computer.
3. Run `npm install` to install all dependencies
4. Create your own branch.
5. Fix some bug or make some other improvement.
6. Commit your changes.
7. Push your changes to your branch in origin.
8. Raise a Pull Request.

Okay, that's all there is to it, so let's go over some issues you might have.

If you're not so familiar with reac but will like to contribute, just go through [this tutorial](http://blog.cent.tech/learn-react-series-iii-dev-environment-like-you-mean-business/) and you should have most of the basics you need in no time!

### Add the original repository remote url

To enable your forked repository keep sync with this one, add it as as a remote repository (by convention, `upstream`).

`git remote add upstream https://github.com/andela-iamadi/react-test-app.git`


### Error: non-fast-forward updates were rejected

If you get this error, then your local copy of a repository is [out of sync](https://help.github.com/articles/syncing-a-fork/) with the original (or upstream) repository you are trying to push to.

To fix this, you must `retrieve` or `fetch` the upstream

`git fetch upstream`

However, commits you make now will be stored in a local branch, `upstream/master`. So before making any changes, checkout to your fork's local branch.

`git checkout master`

This returns you back to your own `master` branch. Finally, you'd need to merge the changes in `upstream/master`.

`git merge upstream/master`

Now your master branch should be up to date!

Checkout to the branch you were working on, merge changes, and attempt the push again :)
