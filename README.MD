Trello Issues Management Endpoint

**[Installation](#install) |**
**[Configuration](#config) |**
**[Usage](#usage) |**


---
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Contents

- [Installation](#installation)
- [Configuration](#config) 
- [Usage](#usage)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


## Installation
install this package using yarn or npm

```
yarn install
or
npm install
```

## Configuration

1.	Go to https://trello.com/app-key and get your Api Key and Token, copy values in .env file
2.	Go to your Trello Board
3.	Make a new card in To-Do List with 4 labels ( Bug, Maintenance, Research, Test )
4.	Open Card in To-Do List
5.	Add ".json" to end of the URL
6.	Search for idBoard - this will be your BOARD_ID in .env file
7.	Search for every Label id and copy the values in MAINTENANCE_LABEL_ID, RESEARCH_LABEL_ID, TEST_LABEL_ID, BUG_LABEL_ID in .env file
8.	Search for idList - this will be your LIST_ID in .env file

## Usage
Start Server with:

```
npm run start
```