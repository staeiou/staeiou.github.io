---
title: "So you want to start a data science institute? Achieving sustainability"
published: 2018-04-19
excerpt: "A cross-post of a piece that synthesizes the experiences of many in academic data science institutes and research software engineering groups, focused on what is important in sustaining these cross-disciplinary efforts over time."
permalink: /posts/2018/04/so-you-want-to-start-a-data-science-institute/ 
---

_This is a post that first appeared on the [Software Sustainability Institute's blog](https://www.software.ac.uk/blog/2018-04-05-so-you-want-start-data-science-institute-achieving-sustainability) and was co-authored by myself, Alejandra Gonzalez-Beltran, Robert Haines, James Hetherington, Chris Holdgraf, Heiko Mueller, Martin O'Reilly, Tomas Petricek, Jake VanderPlas (authors in alphabetical order) during [a workshop](https://github.com/alan-turing-institute/RSE4DataScience18) at the Alan Turing Institute._

## Introduction: Sustaining Data Science and Research Software Engineering

Data and software have enmeshed themselves in the academic world, and are a growing force in most academic disciplines (many of which are not traditionally seen as "data-intensive"). Many universities wish to improve their ability to create software tools, enable efficient data-intensive collaborations, and spread the use of "data science" methods in the academic community.

The fundamentally cross-disciplinary nature of such activities has led to a common model: the creation of institutes or organisations not bound to a particular department or discipline, focusing on the skills and tools that are common across the academic world. However, creating institutes with a cross-university mandate and non-standard academic practices is challenging. These organisations often do not fit into the "traditional" academic model of institutes or departments, and involve work that is not incentivised or rewarded under traditional academic metrics. To add to this challenge, the combination of quantitative and qualitative skills needed is also highly in-demand in non-academic sectors. This raises the question: how do you create such institutes so that they attract top-notch candidates, sustain themselves over time, and provide value both to members of the group as well as the broader university community?

In recent years many universities have experimented with organisational structures aimed at acheiving this goal. They focus on combining research software, data analytics, and training for the broader academic world, and intentionally cut across scientific disciplines. Two-such groups are the [Moore-Sloan Data Science Environments](http://msdse.org/) based in the USA and the [Research Software Engineer groups](http://rse.ac.uk/community/research-software-groups-rsgs/) based in the UK. Representatives from both countries recently met at the [Alan Turing Institute](http://turing.ac.uk/) in London for the [RSE4DataScience18 Workshop](https://github.com/alan-turing-institute/RSE4DataScience18) to discuss their collective experiences at creating successful data science and research software institutes.

This article synthesises the collective experience of these groups, with a focus on challenges and solutions around the topic of sustainability. To put it bluntly: a sustainable institute depends on sustaining the people within it. This article focuses on three topics that have proven crucial.

1.  Creating consistent and competitive funding models.
2.  Building a positive culture and an environment where all members feel valued.
3.  Defining career trajectories that cater to the diverse goals of members within the organisation.

We'll discuss each of these points below, and provide some suggestions, tips, and lessons-learned in accomplishing each.

### An Aside on Nomenclature

The terms _Research Software Engineer_ (i.e. RSE; most often used by UK partners) and _Data Scientist_ (most often used by USA partners) have slightly different connotations, but we will not dwell on those aspects here (see [Research Software Engineers and Data Scientists: More in Common](https://software.ac.uk/blog/2018-04-05-research-software-engineers-and-data-scientists-more-common) for some more thoughts on this). In the current document, we will mostly use the terms RSE and Data Scientist interchangeably, to denote the broad range of positions that focus on software-intensive and data-intensive research within academia. In practice, we find that most people flexibly operate in both worlds simultaneously.

## Challenges & Proposed Solutions

### Challenge: Financial sustainability

_How can institutions find the financial support to run an RSE program?_

The primary challenge for sustainability of this type of program is often financial: how do you raise the funding necessary to hire data scientists and support their research? While this doesn't require paying industry-leading rates for similar work, it does require resources to compensate people comfortably. In practice, institutions have come at this from a number of angles:

**Private Funding:** Funding from private philanthropic organisations has been instrumental in getting some of these programs off the ground: for example, the Moore-Sloan Data Science Initiative funded these types of programs for five years at the University of Washington (UW), UC Berkeley, and New York University (NYU). This is probably best viewed as seed funding to help the institutions get on their feet, with the goal of seeking other funding sources for the long term.

**Organisational Grants:** Many granting organisations (such as the NSF or the UK Research Councils) have seen the importance of software to research, and are beginning to make funding available specifically for cross-disciplinary software-related and data science efforts. Examples are the Alan Turing Institute, mainly funded by the UK Engineering and Physical Sciences Research Council (EPSRC) and the NSF IGERT grant awarded to UW, which funded the interdisciplinary graduate program centered on the data science institute there.

**Project-based Grants:** There are also opportunities to gain funding for the development of software or to carry out scientific work that requires creating new tools. For example, several members of UC Berkeley were [awarded a grant from the Sloan Foundation](https://bids.berkeley.edu/news/bids-receives-sloan-foundation-grant-contribute-numpy-development) to hire developers for the NumPy software project. The grant provided enough funding to pay competitive wages with the broader tech community in the Bay Area.

**Individual Grants:** For organisations that give their RSEs principal investigator status, grants to individuals’ research programs can be a route to sustainable funding, particularly as granting organisations become more aware of and attuned to the importance of software in science. In the UK, the EPSRC has run two rounds of [Research Software Engineer Fellowships](https://www.epsrc.ac.uk/funding/calls/research-software-engineer-fellowships-ii/), supporting leaders in the research software field for a period of five years to establish their RSE groups. Another example of a small grant for individuals promoting and supporting RSE activities is the [Software Sustainability Institute fellowship](https://www.software.ac.uk/fellowship-programme/2018/terms-and-conditions).

**Paid Consulting:** Some RSE organisations have adopted a paid consulting model, in which they fund their institute by consulting with groups both inside and outside the university. This requires finding common goals with non-academic organisations, and agreeing to create open tools in order to accomplish those goals. An example is at Manchester, where as part of their role in research IT, RSEs provide paid on-demand technical research consulting services for members of the University community. Having a group of experts on campus able to do this sort of work is broadly beneficial to the University as a whole.

**University Funding:** Universities generally spend part of their budget on in-house services for students and researchers; a prime example is IT departments. When RSE institutes establish themselves as providing a benefit to the University community, the University administration may see fit to support those efforts: this has been the case at UW, where the University funds faculty positions within the data science institute. In addition, several RSE groups perform on-demand training sessions to research groups on campus in exchange for proceeds from research grants.

**Information Technology (IT) Connections:** IT organisations in universities are generally well-funded, and their present-day role is often far removed from their original mission of supporting computational research. One vision for sustainability is to reimagine RSE programs as the “research wing” of university IT, to make use of the relatively large IT funding stream to help enable more efficient computational research. This model has been implemented at the University of Manchester, where Research IT sits directly within the Division of IT Services. Some baseline funding is provided to support things like research application support and training, and RSE projects are funded via cost recovery.

**Professors of Practice:** Many U.S. universities have the notion of "professors of practice" or "clinical professors," which often exist in professional schools like medicine, public policy, business, and law. In these positions, experts with specialised fields are recruited as faculty for their experience outside of traditional academic research. Such positions are typically salaried, but not tenure-track, with these faculty evaluated on different qualities than traditional faculty. Professors of practice are typically able to teach specialised courses, advise students, influence the direction of their departments, and get institutional support for various projects. Such a model could be applied to support academic data science efforts, perhaps by adopting the "Professor of practice" pattern within computational science departments.

**Research Librarians:** We also see similarities in how academic libraries have supported stable, long-term career paths for their staff. Many academic librarians are experts in both a particular domain specialty and in library science, and spend much of their time helping members of the community with their research. At some universities, librarians have tenure-track positions equivilant to those in academic departments, while at others, librarians are a distinct kind of administrative or staff track that often have substantial long-term job security and career progression. These types of institutions and positions provide a precedent for the kinds of flexible, yet stable academic careers that our data science institutes support.

### Challenge: Community cohesion and personal value

_How to create a successful environment where people feel valued?_

From our experience, there are four main points that help create an enjoyable and successful environment to facilitate success and makes people feel valued in their role.

**Physical Space**. The physical space that hosts the group plays an important role to creating an enjoyable working environment. In most cases there will be a lot of collaboration going on between people within the group but also with people from other departments within the university. Having facilities (e.g. meeting spaces) that support collaborative work on software projects will be a big facilitator for successful outputs.

**Get Started Early**. Another important aspect to creating a successful environment is to connect the group to other researchers with the university early on. It is important to inform people about the tasks and services the group provides, and to involve people early on who are well connected and respected within the university so that they can promote and champion the group within the university. This helps get the efforts off the ground early, and spread the word and bring on further opportunities.

**Celebrate Each Other's Work**. While it may not be possible to convince the broader academic community to treat software as first-class research output, data science organisations should explicitly recognise many forms of scientific output, including tools and software, analytics workflows, or non-standard written communication. This is especially true for projects where there is no "owner", such as major open-source projects. Just because your name isn't "first" doesn't mean you can't make a valuable contribution to science. Creating a culture that celebrates these efforts makes individuals feel that their work is valued.

**Allow Free Headspace**. The roles of individuals should (i) enable them to work in collaboration with researchers from other domains (e.g., in a support role on their research projects) and (ii) also allow them to explore their own 'research' ideas. Involvement in research projects not only helps these projects develop reliable and reproducible results but can be an important source to help identify areas and tasks that are currently poorly supported be existing research software. Having free head space allows individuals to further pursue ideas that help solve the identified tasks. There are a lot of examples for successful open source software projects that have started as small side projects.

### Challenge: Preparing members for a diversity of careers

_How do we establish career trajectories that value people's skills and experience in this new inter-disciplinary domain?_

The final dimension that we consider is that of the career progression of data scientists. Their career path generally differs from the traditional academic progression, and the traditional academic incentives and assessment criteria do not necessarily apply to the work they perform.

**Professional Development.** A data science institute should prepare its staff both in technical skills (such as software development best practices and data-intensive activities) as well as soft skills (such as team work and communication skills) that would allow them to be ready for their next career step in multiple interdisciplinary settings. Whether it is in academia or industry, data science is inherently collaborative, and requires working with a team composed of diverse skillsets.

**Where Next.** Most individuals will not spend their entire careers within a data science institute, which means their time must be seen as adequately preparing them for their next step. We envision that a data scientist could progress in their career either staying in academia, or moving to industry positions. For the former, career progression might involve moving to new supervisory roles, attaining PI status, or building research groups. For the latter, the acquired technical and soft skills are valuable in industrial settings and should allow for a smooth transition. Members should be encouraged to collaborate or communicate with industry partners in order to understand the roles that data analytics and software play in those organisations.

**The Revolving Door.** The career trajectory from academia to industry has traditionally been mostly a one-way street, with academic researchers and industry engineers living in different worlds. However, the value of data analytic methods cuts across both groups, and offers opportunities to learn from one another. We believe a Data Science Institute should encourage strong collaborations and a bi-directional and fluid interchange between academic and industrial endeavours. This will enable a more rapid spread of tools and best-practices, and support the intermixing of career paths between research and industry. We see the institute as 'the revolving door' with movement of personnel between different research and commercial roles, rather than a one-time commitment where members must choose one or the other.

## Final Thoughts

Though these efforts are still young, we have already seen the dividends of supporting RSEs and Data Scientists within our institutions in the USA and the [UK](https://zenodo.org/record/495360#.WrE2A9bLjCL). We hope this document can provide a roadmap for other institutions to develop sustainable programs in support of cross-disciplinary software and research.
