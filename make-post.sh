#! /bin/bash

# Post title grabbed from command argument
# Formmated as dashes "-" as spaces; ex cool-post
POST_TITLE=$1

# Check if there was a post title provided
if [[ $POST_TITLE == "" ]] 
  then
    echo "Please provide a post title! : make-post {POST_TITLE}"
    exit -1
# Throw an error if post title already exists
elif [ -d "public/posts/$POST_TITLE" ]
  then
    echo "Post already exists!"
    exit -1
fi

# Post boilerplate
# Date - Will be filled in with time of post when new posts are pushed to git
# Project - The project that this post is linked to
# Project is formated with dashes "-" as spaces; ex: cool-project
# Tags - The tags that will be pinned to the post.
# Tags are seperated by commas; ex: React,NodeJS,Java Script,Code
BOILER_PLATE=$"---
title: $POST_TITLE
date:
description:
project:
tags:
---
"

# Create create a post folder and place a boilerplate text file insde
mkdir public/posts/$POST_TITLE
touch public/posts/$POST_TITLE/$POST_TITLE.md
echo "$BOILER_PLATE" >> public/posts/$POST_TITLE/$POST_TITLE.md

code public/posts/$POST_TITLE