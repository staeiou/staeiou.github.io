---
id: 22
title: 'Why aren&#8217;t the GPL and the GFDL freely licensed?'
date: 2008-05-23T20:04:17+00:00
author: stuart
excerpt: Works licensed under the GPL and the GFDL can be modified and then freely redistributed, as long as the modified versions are released under the same conditions. Why are we not allowed to modify these licenses and redistribute them?

permalink: /posts/2008/05/why-arent-the-gpl-and-the-gfdl-freely-licensed// 
redirect_from:
  - /wordpress/2008/05/why-arent-the-gpl-and-the-gfdl-freely-licensed/
  - /wordpress/?p=22
categories:
  - Blog Posts
tags:
  - community
  - copyleft
  - copyright
  - creative commons
  - free culture
  - free software
  - free software foundation
  - free software movement
  - gfdl
  - gpl
  - html
  - intellectual property
  - ip
  - law
  - legal philosophy
  - open source
  - open source software
  - text
  - wiki
  - wikipedia
---
I&#8217;ve been doing a lot of work with copyright and software licenses for my new job at the [Federation of American Scientists](http://www.fas.org), and I&#8217;ve come upon a strange situation that someone else has bound to have thought about before. The [GNU Free Documentation License](http://www.gnu.org/licenses/fdl-1.2.txt), the copyleft license that [Wikipedia](http://en.wikipedia.org), the [Free Software Foundation](http://www.fsf.org), and many others use to ensure open access as well as the right to modify and re-release their text-based works, is itself not licensed under the GNU FDL or any similar scheme. Instead, the freedom to modify the license is explicitly denied.
  
<!--more-->In the heading of the GNU FDL, the following text occurs (my emphasis):

> Copyright (C) 2000,2001,2002 Free Software Foundation, Inc. 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA. Everyone is permitted to copy and distribute **verbatim copies** of this license document, **but changing it is not allowed.**

The same type of legal phrasing occurs in the [GNU GPL](http://www.opensource.org/licenses/gpl-3.0.html), the FSF&#8217;s copyleft license for computer code (my emphasis again):

> Copyright © 2007 Free Software Foundation, Inc. <http://fsf.org/> Everyone is permitted to copy and distribute **verbatim copies** of this license document, **but changing it is not allowed.**

The GNU FDL and GPL were created so that anyone could publish their works and give others the freedom to edit and publish their versions as they pleased as long as they released them under the same license. This is basically is a [Creative Commons Attribution/No-Derivatives](http://creativecommons.org/licenses/by-nd/2.0/) license, which is not exactly the freest of distribution privileges. If I want to create my own license based on the GFDL, GPL, or LGPL (the latter being the FSF&#8217;s more permissive open source software license), I would have to get the FSF&#8217;s permission.

I know the reason why: license proliferation. They don&#8217;t want someone releasing code or text that cannot be combined with material released under their copyleft licenses. This is already a problem even with the prohibition on modifying the FSF&#8217;s licenses, as there are dozens of licenses that fit the Open Source Initiative&#8217;s [definition of open source](http://www.opensource.org/docs/osd), but are not compatible with the GPL. They are either too permissive and don&#8217;t force those who recieve the code to release the source code if they modify and pubish it, or they are too strict and forbid, say, commercial use.

Let me explain why license compatibility is a rather pragmatic issue: if I add a section in the GFDL or GPL to forbid commercial use of the work without my permission, work licensed under that cannot be combined with work licensed under the GFDL or the GPL. The FSF has put a lot of work into these licenses and don&#8217;t want them to be tarnished. Now, they have every right to do so, just like Microsoft has every right to not allow anyone to change the source of their code for the same reason. It is simply antithetical to the principles of the free software movement: the freedom to tinker with the internals. I quote from the FSF&#8217;s [definition of free software](http://www.fsf.org/licensing/essays/free-sw.html), which exhaustively includes:

> The freedom to run the program, for any purpose (freedom 0).

> The freedom to study how the program works, and adapt it to your needs (freedom 1). Access to the source code is a precondition for this.

> The freedom to redistribute copies so you can help your neighbor (freedom 2).

> The freedom to improve the program, and release your improvements to the public, so that the whole community benefits (freedom 3). Access to the source code is a precondition for this.

The FSF&#8217;s current stance on the copyright of the GPL and GFDL denies freedoms 1 and 3 to all who recieve the licenses. The freedom to release improvements to the public must be extended to the licenses themselves. I understand why it is pragmatically a bad idea to allow it, but this is an ideological stance instead of an ends-justify-the-means one. And Stallman and the FSF have no problem in making their software collections objectively worse by not allowing source code they feel is not free enough, which is why their stance on the copyright of their own license puzzles me.