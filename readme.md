# Wordle Bot

My family likes playing wordle and waffle. We post in a family slack every day to compare scores. A message gets sent to the #wordle channel with the format: "Wordle 371 - ?????". Everyone threads off of that message to share their results. Whoever initially posted the message is responsible to edit it the following day with the answer. No one likes doing this so most days we wait until 9pm or so when someone (usually my dad) will cave and make the initial post. Then everyone piles on real quick in the thread.

I'm hoping this alleviates that. I threw up a small script on deno that I can query for answers and day numbers. A github action uses that to post in our family wordle every day at 12:30am to update the previous day's post and to post the next one.

## index.ts

This file holds the code for our deno function. Pass it a date to get the wordle answer for that day.

## .github/workflows

Here lies the cronjob to update our slack.
