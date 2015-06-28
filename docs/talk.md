# Introduction
*TODO: rewrite*

(background: rapidly changing grid of traits)

what does it mean to be who you are? am i my job? am i my community? am i my country, my gender, my race? am i the intersection of all of these traits? am i a leaf node on the tree of life, an exemplar specimen of homo sapiens sapiens, with a history through my parents and my ancestors all the way back to single-celled sludge on the bottom of the ocean? do i trace my identity further still through the formation of the earth, the formation of the sun, the big bang?   

its hard to categorize myself in a way that represents every facet of my identity -- there's always some nuance that labels cannot capture. i am a completely unique individual, i *am* a special snowflake. YOU, on the other hand --

Well, let's just say that the vastness of the world is incomprehensible, and we need some shortcuts just to do anything at all. Fortunately, humans are pattern-matching machines -- we're built to dismantle complex concepts and individuals into their constituent traits, to match them to prototypes, archetypes, stereotypes. And we create formal systems to manage this process -- taxonomies, hierarchies, the relational algebra. But today I'm going to focus on one particular system, an *in*-formal taxonomy that has become a part of our everyday lives in the last few years: the hashtag.

## Definition 
*TODO: de-academicafy*

A hashtag is a member of a vocabulary of categorization that is:
- vernacular: tags are created by usage, not by authority
- relational: an item in a collection can have multiple tags; having a hashtag is analogous to set membership
- conversational: the members of a tag set, projected over time, constitute a stream; a hashtag can be used as a channel of communication

## Thesis
Hashtags have popularized a paradigm of thought that allows for more complex notions of identity than hierarchies. 

# hierarchy vs keywords (relational)
## history
Taxonomies like the Library of Congress system, which have to be implemented in a physical space, require a system that gives each item a single location. Hierarchies are good at this. But you can only impose one hierarchy at a time; in order to handle cross-references or alternate forms of organization you need a different form of categorization altogether. 

One of the ways to handle these cross-cutting concerns is with keywords -- in addition to having a physical location in a hierarchy, you create a vocabulary of keywords to mark attributes of the item that you couldn't express in the hierarchy. For example, the library of congress classifications dictate where books are located, and the subject headings map topics to the different sections of the classifications hierarchy where that topic is discussed. (slide: left side is classification tree, right side is subject heading with links to branches of classification tree -- use http://www.loc.gov/rr/main/research/xrefer.html)

This indirection is a necessary inconvenience in a physical collection -- an item in that collection needs a canonical address to prevent duplication. But indirection is how everything works on a computer. We're JavaScript programmers, we don't even _get_ to choose our bits are located in memory; duplicate references are the garbage collector's problem. We don't need our data to be stored in a way that's easy for a human to find. Categories were designed to be searched by hand, or on foot; keywords are meant to be searched by computer.

## theory
(set theory demo using guess who?)

*TODO: OO inheritance vs interfaces/traits*

# web 2.0 (vernacular)
## history
And then this happened. (picture of a tag cloud) In a typical library, the hierarchy and the keyword vocabulary are fixed, and the collection is curated by the librarians. A patron cannot add books to the collection, nor can they alter the classifications or keyword vocabulary. But the photos on flickr, or the links on delicious belong to the community -- so why shouldn't the vocabulary of categorization also belong the them? And thus the rise of user-generated taxonomy, or "folksonomy", became one of the defining characteristics of the Web 2.0 Era. Not only had we democratized information, we had democratized the organization of information.

Also, we stopped calling them "keywords" -- probably becasue that reminded us of AOL -- and started calling them tags;

## pros/cons of folksonomy
[redundant tags, tags as post metadata](http://www.metafilter.com/13955/Let-Slip-the-Blogs-of-War)
Of course, this created a number of new problems. Without a standard vocabulary, folksonomies have problems with discovery and redundancy. Here's a metafilter post from 2002 -- note that in a post about warblogs (_very_ 2002!) we see the tags #war #blog #blogs #warblog and #warblogs. On the one hand, we're able to categorize via neologisms -- "blog" first appeared in 1999 and "warblog" was coined three months before this post -- a decentralized vocabulary can include new concepts much more quickly than a centralized one. On the other hand, a centralized system can have rules for dealing with synonyms and inflections -- a controlled vocabulary, once it were able to reference blogs at all, wouldn't have distinct terms for #blog and #blogs. A decentralized system depends on its users creating and then following conventions.

*TODO: note that some terms, like warblog, fall out of use as quickly as they came in -- ephemerality is a feature*

Also note that the set of tags includes a different kind of metadata -- the #brokenlink tag is about the functionality of the post, not the content to which it once referenced.

## meeting the challenges
(image of askme sidebar with popular tags and complete category list)One solution for this is an ontology that includes both a fixed vocabulary of categories, often mapping to classical hierarchies, and an open vocabulary of non-hierarchical tags. This is the approach that's used in wordpress blogs and ask metafilter questions. 

*TODO: Compare with DOM tree, fixed tags, open classes*

(autocomplete tags) Another common solution is to have user-defined tags as the sole form of taxonomy, but encourage users, through the UI, to prefer existing terms over novel ones. 

*TODO: Facebook gender selector -- note that it allows freeform gender now?*

(stack overflow/wikipedia) You can also harness the internet's limitless supply of pedantry and allow community moderators to normalize the usage and inflection of tags. *TODO: more here: community standards, anarchy vs bureaucracy*

# channels
## history

*TODO: rewrite, "how the hashtag got its hash"*

[first use of hashtag on twitter](https://twitter.com/chrismessina/status/223115412)

How did the hashtag get its hash? 

[# because of IRC convention and it was easy to type on T-9 phones in 2007! (Pre-touch!)](https://twitter.com/chrismessina/status/386127369603256320)

A little background: IRC is a decentralized chatroom protocol that predates the web. The rooms are called channels and public channels are marked with a hash symbol; on many servers any user can create a channel. Channels _are_ a form of categorization, but channels are intended to be a single, long-running discussion with real-time participation. 

IRC channels are vernacular and conversational, but they are not relational; there is no system for cross-referencing. Messages can be cross-posted but this creates unconnected copies. On many IRC servers cross-posting is a bannable offense. 

In 2006, prior to the first twitter hashtags, Jaiku, a now-forgotten microblogging system allowed you to message groups by starting a post with a hashtagged group name, and this would create a new group if one with that name didn't already exist. This was still more channel-oriented than tag-oriented; you were messaging the group as you would message another user; you couldn't "mention" multiple groups. Tagged messages would go into a channel *instead of* the main feed.

But when hashtags came to twitter, there was no builtin support. Much like mentions and retweets, they began as conventions that would only later have built-in support. This meant that early hashtags functioned like keywords for twitter's builtin search system, which allowed people to use them idiomatically as they would tags on flickr. 

(slide: proposed hashtag syntax from messina's blog)
[Groups for Twitter; or A Proposal for Twitter Tag Channels](http://factoryjoe.com/blog/2007/08/25/groups-for-twitter-or-a-proposal-for-twitter-tag-channels/)

There was a whole syntax for messaging and subscribing to tags proposed, but it was never implemented; twitter never even distinguished between prefixed and inline hashtags as they did between replies and mentions.

Twitter combined the real-time conversational aspects of IRC with the authorial collection aspects of blogging. It needed a system of grouping conversations into a channel and it needed a system for tagging posts with metadata. Hashtags combined these features into a single idiom.

*TODO: examples of tag searches used as channels, note URL pattern*

- tumblr tags as community anchors
- twitter inherits traits from both

# Conclusion: Thinking in Tags
## vernacular: hashtags in conversation
- hashtags have gone from an secondary organizational aid to a part of our daily vocabulary 
- we develop new and unexpected idioms around hashtags
- tag as parenthetical aside (on blogs)
- hashtag used as interjection
    + used as interjection in conversation (willow pape "hashtag: ratchet.")

## conversational: tag-as-channel used as political movement
- social media is designed to facilitate rapid spread of memes
- not just image macros but all kinds of urban folklore
- ideas of social movements travel as memes 
- "hashtag activism" as derisive term -- corollaries with "awareness ribbon"
- hashtag as metonym for social movement with twitter presence but actions elsewhere
- arguing merits of movement's tenets by hashtag name: #AllLivesMatter = "why not Equalism?"
- hashtag as affiliation with movement -- flying a hashflag

## relational: tag-as-set and intersectionality
*TODO: intersectionality for programmers?*
> id like some sort of intersectionality example that's more immediately gemane -- maybe i start with "programmers" as a category, and then break it down first by "safe" properties -- e.g. stack -- and how their experiences can be wildly different and they have different community needs; then break down by gender/race/class etc and the intersectionalities therein. 

> And programmers have intense boundary policing about the most asinine stuff -- tabs vs spaces, vim vs emacs, etc. and "best practices" are more often than not as rooted in tradition and accidents of history as any political ideology?
But now this feels obvious again

