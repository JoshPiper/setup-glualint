#!/bin/bash
perl -pi -e "s/JoshPiper\/setup-glualint\@([\w.]+)?/JoshPiper\/setup-glualint\@$BUILD_TAG/g" README.md
