# tse-single-chatroom

This is a simple application that provides semi-real-time chatting functionality. 
It emulates a single chatroom, where users can post and receive messages. No channels,
no extra fluff.

## Setup 

If you do have Docker, follow these instructions:

1. Clone this repository. You should automatically be in the `onboarding` branch.
2. Run `docker-compose build`.
3. Run `docker-compose up`.

If you do NOT want to use Docker or you do not have it, follow these instructions:

1. Clone this repository. You should automatically be in the `onboarding` branch.
2. If you do not have `yarn`, please run `npm install -g yarn`.
3. Run `cd frontend`
4. Run `yarn install`
5. Run `yarn start`

## Your Task 

Your job is to add send message functionality back to the website. Right now, you can change
your name and view messages in real-time, but you are unable to send messages.

**Only file you should modify**:
* frontend/src/components/MessageForm.js

Files you might find helpful:
* frontend/src/components/NameForm.js
* frontend/src/components/MessageList.js
* frontend/src/pages/Home.js

## REST API

The backend has already been completed for you and [is live here](http://tsechatroom.us.to).
A brief description of the API that it supports is given below. 
_Hint: you will only need to look at the POST method!_

* __GET__ /api/messages?limit={LIMIT}&after={DATE}: The after and limit arguments are optional.
  The limit parameter limits the number of messages that are returned.
  The after parameter sets a minimum date for messages; all returned messages must have a creation date
  occurring AFTER the given date.

  Returns `{ success: true, data: [...] }` on success.

  Returns `{ error: true, message: '...' }` on error.

* __POST__ /api/messages: Body of the message must be of the format 
  `{ "sender" : "...", "content" : "..."}` where sender is the name of the sender and
  content is the content of the message.

  Returns `{ success: true }` on success.

  Returns `{ error: true, message: '...' }` on error.

