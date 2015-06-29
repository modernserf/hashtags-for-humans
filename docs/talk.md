# Introduction

(rapidly changing grid of traits)

Humans are pattern matching machines. The world around us is vast and incomprehensible, but we are able to make some sense of it by organizing messy reality into neat categories. We dismantle complex concepts and individuals into their constituent traits, to match them to prototypes, archetypes, stereotypes. We have categories baked into our language via gendered nouns and pronouns; our words themselves are categorized by parts of speech. And we create formal systems to manage this process -- taxonomies, ontologies, the relational algebra.

(linnaeus-era chart)

Our systems of categorization reflect the times we live in. Categorical hierarchy, you know, kindgom phylum class order family genus species -- this is an echo of king prince duke count baron knight peasant. But new times call for new taxonomies. Allow me to thought-lead for a moment:

(picture of shingy)

The information age promises the democratization and decentralization of media, with news and ideas and conversation spreading across the world in real time. The old guard is dead -- hierarchy and linear thought is over. The world of information is coming in from every direction at once -- its a network where every node is connected. 

How do we organize knowledge in 2015? The hashtag.

## Definition 

*TODO: choose better term than temporal and stick with it*

First, let's get our terms straight. There are a lot of systems that resemble hashtags -- well beyond the scope of twitter -- but there are three traits that define the hashtags I am exploring today.

1. Hashtags are **relational**. An item in a collection can have multiple tags, and tags can have multiple items. Hashtag membership follows the same rules as mathematical sets.
2. Hashtags are **vernacular**. Any string can be a hashtag, and a hashtag's meaning comes entirely through usage. There is no authority that decides what a hashtag can be or what content can be tagged with it.
3. Hashtags are **temporal**. A hashtag is not a static collection; it is an ever-flowing stream. The messages in a hashtag have a place in time, and the hashtag is a channel of communication.

# hierarchy vs keywords (relational)
## history
There is always prior art, no matter how far you look back. Information science has been around in some form at least as long as writing -- I mean, the earliest writing we have is in the form of inventories and catalogs. I'm not gonna go that far back. Instead, lets talk about libraries.

Libraries are kind of like an analog database, right? They contain information, and they organize it in a way that you can find it. But books take up physical space. A book needs to be somewhere and when you're looking for books on a certain topic, you want them to be all in the same place. So you organize by category -- first in broad categories: science, philosophy, arts -- and then subcategories: geology, ethics, sculpture. You keep subdividing into smaller and smaller sections until you have the right place for everyhthing in your collection. 

But you can only impose one hierarchy at a time; it must necessarily be compromised. If you want arts and technology to be top-level categories, that means that architecture and structural engineering books will be on opposite sides of the library. And what do you do about cross-references?

(slide: left side is classification tree, right side is subject heading with links to branches of classification tree -- use http://www.loc.gov/rr/main/research/xrefer.html)

You create a system of categorization on top of your hierarchy, with a vocabulary of keywords to mark attributes of the item that you couldn't express in the hierarchy. For example, the library of congress *classifications* dictate where books are located, and the *subject headings* map topics to the different sections of the classifications hierarchy where that topic is discussed. 

*TODO: not sure this should go here*

If you've done any programming in typed object-oriented languages like Java you've probably thought a lot about hierarchies in the form of class inheritance. You've also probably come across situations where you just cannot make an inheritance tree make sense on its own and you've used interfaces to connect classes that are similar in function but phylogenetically unrelated.

This indirection is a necessary inconvenience in a physical collection -- an item in that collection needs a canonical address to prevent duplication. But indirection is how everything works on a computer. We're JavaScript programmers, we don't even _get_ to choose our bits are located in memory; duplicate references are the garbage collector's problem. We don't need our data to be stored in a way that's easy for a human to find. Categories were designed to be searched by hand, or on foot; keywords are meant to be searched by computer.

## theory
Categories aren't just for books. Here's another thing we love to categorize.

(guess who? demo)

I'm not gonna tell you that the categories that describe these people don't matter. I may be a thought leader, but I'm not _that_ naive. But we all understand that the categorization of human traits can't all fit into a single tree -- you have to think of how the traits interact. We will return the the ramifications of that later, but first I want to give you a little refresher on set theory. 

Each of these people have a different collection of traits -- they have blonde hair and brown eyes and hats and mustaches -- and in the game Guess Who? you're supposed to figure out who your opponent's character is by asking yes-or-no questions about that trait. 

I assure you this was tremendous fun in 1991. I think I might have had a little crush on Maria. I have no idea if this is still interesting to kids because its essentially the same as narrowing down Google results.

The questions you ask in Guess Who? fill in predicates to a big logical `AND`. This is how we could express this in javascript:

```
people.filter((p) => p.blond && p.male && p.mustache)
```

And this is one way to say that in SQL:
```
SELECT * 
FROM people 
WHERE tags LIKE "%blond%" 
AND tags LIKE "%male%" 
AND tags LIKE "%mustache%"
```

In the hourlong version of this talk I'll give the version of this with JOINs.

Being programmers, we can't help but add features, even if we don't need 'em. So we can _improve_ Guess Who? by adding some more operators. If we add logical `OR` and `NOT` now we can express complex selections, like 
`(and male (or blond redhead) (not mustache))`

Let's flip our perspective around and look at this from the trait's perspective instead of the person's. Before we would say that Anita, Charles, David and Joe all have blond hair; instead, we'll say the set of people with blond hair includes Anita, Charles, David and Joe. The set of people with glasses are Claire, Joe, Paul, and Tom. The *intersection* of blondes and people wearing glasses is Joe.

(venn diagrams)

Set intersections are the overlapping parts of this venn diagram; intersection corresponds to logical `AND`. Set unions are both of the sets combined, both of the circles together. They correspond to logical `OR`. And set complements, the area outside of the circles, correspond to logical `NOT`.

*TODO: is there a point to this section?*

# web 2.0 (vernacular)
## history

In a typical library, the hierarchy and the keyword vocabulary are fixed, and the collection is curated by the librarians. A patron cannot add books to the collection, nor can they alter the classifications or keyword vocabulary.

(TODO: medical library needs different system than general library)

(picture of a tag cloud)

 But the photos on flickr, or the links on delicious belong to the community -- so why shouldn't the vocabulary of categorization also belong the them? And thus the rise of user-generated taxonomy, or "folksonomy", became one of the defining characteristics of the Web 2.0 Era. Not only had we democratized information, we had democratized the organization of information.

Also, we stopped calling them "keywords" -- probably becasue that reminded us of AOL -- and started calling them tags.

## pros/cons of folksonomy
[redundant tags, tags as post metadata](http://www.metafilter.com/13955/Let-Slip-the-Blogs-of-War)

Of course, this created a number of new problems. Without a standard vocabulary, folksonomies have problems with discovery and redundancy. Here's a metafilter post from 2002 -- note that in a post about warblogs (_very_ 2002!) we see the tags #war #blog #blogs #warblog and #warblogs. On the one hand, we're able to categorize via neologisms -- "blog" first appeared in 1999 and "warblog" was coined *three months* before this post -- a decentralized vocabulary can include new concepts much more quickly than a centralized one. If we needed an approval committee for tag terms, warblogs would have become totally irrelevant by the time they were added to the tag vocbulary.

On the other hand, a centralized system can have rules for dealing with synonyms and inflections -- a controlled vocabulary, once it were able to reference blogs at all, wouldn't have distinct terms for #blog and #blogs. Nor does a controlled vocabulary have namespace collisions: posts tagged with #football will either be about soccer or hand-egg, but not both. A decentralized system can only hope its users figure out some conventions and choose to follow them.

Also note that the set of tags includes a different kind of metadata -- the #brokenlink tag is about the functionality of the post, not the content to which it once referenced.

## meeting the challenges

(image of askme sidebar with popular tags and complete category list)

One solution for this is an ontology that includes both a fixed vocabulary of categories, often mapping to classical hierarchies, and an open vocabulary of non-hierarchical tags. This is the approach that's used in wordpress blogs and ask metafilter questions. 

(dom elements on left side, class names on right side)

This is also the approach taken by browsers. We have a fixed vocabulary of general-purpose tags -- some of them have special functionality but most of them are just common classifictions of containers. But we can also create our own terms with meaning specific to the site. Every element on the page must have one and only tag type, but they can have as few or as many classes as they want. 

(autocomplete tags) Another common solution is to have user-defined tags as the sole form of taxonomy, but encourage users, through the UI, to prefer existing terms over novel ones. 

*TODO: Facebook gender selector -- note that it allows freeform gender now?*

(stack overflow/wikipedia) You can also harness the internet's limitless supply of pedantry and allow community moderators to normalize the usage and inflection of tags. *TODO: more here: community standards, anarchy vs bureaucracy*

# channels
## history

[first use of hashtag on twitter](https://twitter.com/chrismessina/status/223115412)

How did the hashtag get its hash? 

[# because of IRC convention and it was easy to type on T-9 phones in 2007! (Pre-touch!)](https://twitter.com/chrismessina/status/386127369603256320)

A little background: IRC is a decentralized chatroom protocol that predates the web. The rooms are called channels and public channels are marked with a hash symbol; on many servers any user can create a channel. Channels _are_ a form of categorization, but channels are intended to be a single, long-running discussion with real-time participation. 

IRC channels are vernacular and conversational, but they are not relational; there is no system for cross-referencing. Messages can be cross-posted but this creates unconnected copies. On many IRC servers cross-posting is a bannable offense. 

In 2006, prior to the first twitter hashtags, Jaiku, a now-forgotten microblogging system allowed you to message groups by starting a post with a hashtagged group name, and this would create a new group if one with that name didn't already exist. This was still more channel-oriented than tag-oriented; you were messaging the group as you would message another user; you couldn't "mention" multiple groups. Tagged messages would go into a channel *instead of* the main feed.

But when hashtags came to twitter, there was no builtin support. Much like mentions and retweets, they began as conventions that would only later have built-in support. This meant that early hashtags functioned like keywords for twitter's builtin search system, which allowed people to use them idiomatically as they would tags on flickr. 

(proposed hashtag syntax from messina's blog)
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

