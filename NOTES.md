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

* Tests in `tests` directory
* Problems in the `problems` directory

# Website

Website to explain the process
Website to take gitub logins / signups
Website signup triggers gitub repo branch

# Questions to figure out

* Is there a way to auto merge?
* How to handle incorrect answers, additional commits
* Will I need a separate repo for the source code to keep all the PR requests from people submitting challenges separate from the PR requests from people submitting new code? This probably isn't an MVP issue.

# Roadmap

* Repo
	* $ Start with one toy problem
	* $ Get npm test working with only most recently changed files
* Website
	* Get it up and running
	* Figure out Github API
	* Simple login, login automatically creates your new branch
* Add CONTRIBUTING.md document
  * Add documentation on the naming scheme of exercise vs test files
  * Provide a template for creating new exercises
* Upgrades
	* website: list of all problems
	* website: ability to star good problems
	* website: ability to search for problems by tag

# Bits of Potentially Helpful Code

List filenames of changes since your most recent commit:

	# !! we need to use this one
	# this covers both pull requests tests &
	# this covers tests run by the test taker before committing
	git diff --name-only HEAD^ # include uncommitted changes
	
	# leaving these as notes below, but I shouldn't need them
	git diff --name-only HEAD^ HEAD # << I think I want this one
	git diff --name-only HEAD^ HEAD -- exercises # filter?

Mocha grep:

	mocha --grep 'testFilter'

[Bash Loops](http://tldp.org/HOWTO/Bash-Prog-Intro-HOWTO-7.html)

	#!/bin/bash
    for i in $( ls ); do
	    echo item: $i
    done

[Bash Introduction to if](http://tldp.org/LDP/Bash-Beginners-Guide/html/sect_07_01.html)

	if [something == something]
		then
			# do stuff here
	fi

[Extracting filename in bash scripts](http://stackoverflow.com/questions/965053/extract-filename-and-extension-in-bash):

	~% FILE="example.tar.gz"
	~% echo "${FILE%%.*}"
	example
	~% echo "${FILE%.*}"
	example.tar
	~% echo "${FILE#*.}"
	tar.gz
	~% echo "${FILE##*.}"
	gz

[Passport Github](https://github.com/jaredhanson/passport-github)

[Github Basics of Authentication](https://developer.github.com/guides/basics-of-authentication/)