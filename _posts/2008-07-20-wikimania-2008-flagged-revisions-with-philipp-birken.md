---
id: 65
title: 'Wikimania 2008: Flagged Revisions with Philipp Birken'
date: 2008-07-20T11:46:58+00:00
author: stuart
permalink: /posts/2008/07/wikimania-2008-flagged-revisions-with-philipp-birken// 
redirect_from:
  - /wordpress/2008/07/wikimania-2008-flagged-revisions-with-philipp-birken/
  - /wordpress/?p=65
categories:
  - Conference Notes
tags:
  - flagged revisions
  - quality
  - stable versions
  - vandalism
  - wikimania
  - wikipedia
  - wikiquality
---
From &#8220;Flagged Revisions,&#8221; a presentation at Wikimania 2008 by Philip Birken. In my opinion, flagged revisions realize the concept of stable versions without making the article actually stable.  It is not a system of voting to approve new revisions &#8211; a new revision is approved when only one autoconfirmed user says it is vandalism-free.  Yes, it won&#8217;t solve everything, but it will make things much better.  We can get rid of protecting articles that are experiencing heavy vandalism if we do this, because an edit only updates to the public when it is flagged as not-vandalism by a trusted user. However, vandals (or any other user) immediately sees the results of their edit for an hour, which is just ingenious.  Also, you can choose whether the most recent revision is shown by default, or make it so that certain users (like anonymous users) only see the most recent reviewed revision.  For those who feel that it threatens &#8220;the wiki way,&#8221; I suggest making the most recent version appear by default and giving people the option to see the latest reviewed version.

Anyways, enough of my cheerleading.  Here follows my notes from his talk:
  
<!--more-->


  
Everyone meant something different by stable versions, so we called it flagged revisions. This gives reader feedback on the quality of the articles. Currently, you can make users by default see the most recent flagged revision of an article. It enforces the four-eye principle.

Development of Stable Versions (which is not Flagged Revisions): It is the idea that the article is finished. The concept is in printed encyclopedias and Nupedia. Ideas formed early on Meta.  It was discussed since the beginning. Magnus Manski wrote a tool to rate articles &#8211; FA, Good, A, B, Start, Stub. We now have patrolled edits, active on Wikipedia.

In June 2006, we started. We asked Jimbo: “What’s up with stable versions?” Jimbo said: “You’re right, let’s just do it.” We agreed on basic parameters: 1. No voting and 2. Keep it simple. He asked the board if they would object. They said they wouldn’t. We hired a contractor to implement stable versions. Erik Moeller had become a board member and quality was one of his topics. We found Jorg Baach, he did the coding. It was put on the SVN under flagged revisions, which stuck. Wikimedia France gave 1,000 euro – the first international wiki feature collaboration. People started working on it – mailing list wikiquality. Open beta in Feb 2008. Found bugs. Now it is stable and on the German Wikipedia.

People flag and edit or they don’t. You don’t vote on it, you just make sure the people who flag are trustworthy. One flag is enough to get it approved.

Ongoing problems:
  
• Too few developers
  
• No process for giving useful input
  
• Developers not present in content creation
  
• Not enough competence in design/usability
  
• Not enough leadership structure in local projects

Flagged Revisions
  
Two flags: sighed and quality. Editors can flag something as sighed, reviewers can flag as quality. If desired, IPs see by default the last sighted version instead of the current version. Can do it per wiki or per page. Templates and Images are in this. If you flag an article, the stable revision incorporates the template and images as they were then. If an IP changes a template, that change will not be visible until someone flags the template. How to incorporate comments in this system? We were told not to think about it.

Sighed Versions: These are versions that are checked by an editor for vandalism. Basic trust – automatic procedure for granting rights, and any admin can give it. Misconception is that they are only about vandalism. They are about forcing the four-eye principle. An edit has to be checked. You guarantee a basic quality for readers: someone trustable looked at it. Any edit that is done is logged in the system. If an IP corrects a spelling a mistake, hordes of vandal fighters will look at it now, but all that needs to look at it is one trusted vandal fighter. Now, people concentrate on IPs, but what if you just created an account? They won’t have the sighted privilege.

You can use a box to check the article. Can search for pages without any sighted version, or pages where newer unsighted revisions are waiting. You see the results of your change, but if you come back an hour later, you will see the sighted version. Other people will see the sighted version. The vandal sees the results of his vandalism, but no one else will. Other people will see that there are new unsighted versions and can see them, but will not see it on the main article. With Magnus’s tool, you can get intersections with categories. These are all the unsighted edits waiting in mathematics. It would take me half an hour to look through all the math unsighted revisions.