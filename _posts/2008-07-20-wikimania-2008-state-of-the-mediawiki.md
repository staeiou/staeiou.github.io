---
id: 75
title: 'Wikimania 2008: State of the Mediawiki'
date: 2008-07-20T13:24:20+00:00
author: stuart
permalink: /posts/2008/07/wikimania-2008-state-of-the-mediawiki// 
redirect_from:
  - /wordpress/2008/07/wikimania-2008-state-of-the-mediawiki/
  - /wordpress/?p=75
categories:
  - Conference Notes
tags:
  - cms
  - flagged revisions
  - mediawiki
  - wikimania
  - wikipedia
---
State of the Mediawiki, a presentation give at Wikimania by some developers of Mediawiki and maintainers of the Wikimedia installation of it

<!--more-->

The Wikimedia foundation installation is huge:

  * 10,000,000,000 views per month
  * 50,000 http objects/sec
  * Hardware budget: $1.5 million
  * Bandwidth costs: 25k/months
  * Physical hosting: $10k/month
  * X86_64 software, ubuntu with customized packages, RAMdisks

MediaWiki basic goals: allow open, collaborative editing of a large encyclopedia; also be easy to setup for smaller installations. It runs on LAMP, or LAMP on steroids (Squid, Memcached, many other optimizations). Wikipedia used to crash all the time, but it doesn’t now. We can focus on long term.

Recently: we got login unification working. [to thunderous applause], got flagged revisions in open beta [to no applause]. We are working on better mobile support. We’ve been improving localization.

What not to expect next year: flying cars, WYSIWYG (but you may get better template and table tools), peer-to-peer Wikipedia

What to expect: more tech staff, better operations (data center updates and expansions), dumps and backup capacity), and software.

In the software:

  * Revision deletion: there is some version of a page we want to delete, but we don’t want to delete other revisions. We have oversight, but that is a hack. Hacks are bad.
  * Vandalism and abuse: Globally block an IP address across all WMF projects
  * Extension:AbuseFilter – automatic abuse filter for admins
  * Threads and comment system
  * Wikimedia Commons – especially uploading – will be updated so that “actual humans can use it.”  AfD on commons is “pretty scary” – sometimes I can’t find out why my file has been deleted, and if I can’t find it, well…