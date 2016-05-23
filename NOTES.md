# Keywords

Open Source
Encouraging Contributions
Coding Problems

# Who is this for?

* People wanting to work on coding problems
* People preparing for bootcamps
* Both to learn and to prep for interviews
* Reduce the friction around / get used to using using git and testing

# Problem Repo

Github Repo for the problems
Travis CI runs tests on pull requests

# Website

Website to explain the process
Website to take gitub logins / signups
Website signup triggers gitub repo branch

# Questions to figure out

* Is there a way to auto merge?
* How to handle incorrect answers, additional commits

# Roadmap

* Start with one toy problem
* Get npm test working with only most recently changed files
* Add CONTRIBUTING.md document
  * Add documentation on the naming scheme of exercise vs test files
  * Provide a template for creating new exercises

# Bits of Potentially Helpful Code

List filenames of changes since last commit:

	git diff --name-only HEAD^

Mocha grep

	mocha --grep 'testFilter'