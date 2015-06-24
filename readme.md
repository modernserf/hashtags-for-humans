# Hashtags for Humans

Exploring the relationship between tags, mathematical sets, and notions of identity

# installation
`npm install`

# running
`npm start`

# Introduction
(background: rapidly changing grid of traits)

what does it mean to be who you are? am i my job? am i my community? am i my country, my gender, my race? am i the intersection of all of these traits? am i a leaf node on the tree of life, an exemplar specimen of homo sapiens sapiens, with a history through my parents and my ancestors all the way back to single-celled sludge on the bottom of the ocean? do i trace my identity further still through the formation of the earth, the formation of the sun, the big bang?   

its hard to categorize myself in a way that represents every facet of my identity -- there's always some nuance that labels cannot capture. i am a completely unique individual, i *am* a special snowflake. YOU, on the other hand --

Well, let's just say that the vastness of the world is incomprehensible, and we need some shortcuts just to do anything at all. Fortunately, humans are pattern-matching machines -- we're built to dismantle complex concepts and individuals into their constituent traits, to match them to prototypes, archetypes, stereotypes. And we create formal systems to manage this process -- taxonomies, hierarchies, the relational algebra. But today I'm going to focus on one particular system, an *in*-formal taxonomy that has become a part of our everyday lives in the last few years: the hashtag.

# Interlude: History of Hashtags

## Web 2.0
First: There is always prior art. That said, the immediate ancestors to the contemporary hashtag are keyword tags and IRC channels. Taxonomies like the Library of Congress system, which have to be implemented in a physical space, require a system that gives each item a single location. Hierarchies are good at this. But you can only impose one hierarchy at a time; in order to handle cross-references or alternate forms of organization you need a different form of categorization altogether. 

(Some of this might sound familiar if you've dealt with complex inheritance systems in object-oriented programming.)

One of the ways to handle these cross-cutting concerns is with keywords -- in addition to having a single position in a hierarchy, or sometimes even instead of hierarchy, you give each item in a collection a set of keywords to mark different attributes of the item that you couldn't express in the hierarchy. This can get unwieldy to manage in a physical system -- if you have an item accessible via each keyword, you end up with a lot of duplication -- but there's no such constraints on computerized systems. Categories were designed to be searched by hand, or on foot; keywords are meant to be searched by computer.

*(define the original keyword system as formal, fixed taxonomies earlier (when you first bring them up?) so that it's a clearer contrast between that and folksonomy)*

And then this happened. (picture of a tag cloud) Sites like flickr and delicious cross-bred keyword taxonomies and user-generated content and we ended up with tag clouds. We also stopped saying "keyword", probably becasue they reminded us of AOL. But one of the defining traits of the web 2.0 era was the decline of formal taxonomies -- not just hierarchies but even keyword systems with a fixed vocabulary -- and the rise of "folksonomy." Not only had we democratized information, we had democratized the organization of information.

Of course, this created a number of new problems. Without a standard vocabulary, folksonomies have problems with discovery and redundancy. "Do I tag this with Astoria? Queens? NY, NYC, New York? I guess I should use all of them, just to be sure." And in that case, I'm piggybacking on the existing hierarchy of New York geography. What do I do when I want to talk about a category that doesn't even have a name?

We'll return to that thought later. The other progenitor of the hashtag is the IRC channel. Now, at first the resemblance seems superficial: IRC uses a hash as a sigil for public channels but otherwise has seemingly little in common with keywords; while cross-references are the core feature of keywords, cross-posting is often a bannable offense on IRC channels. 

However, an interesting pattern emerged in web 2.0 tags. A tag on flickr wasn't just a subset of a static collection, it was an ever-changing view of a stream. It was a living thing that you could interact with. it was a place that you could inhabit. *(explain transition from flickr community speed to twitter conversation speed)* And just as twitter blurs the line between real-time communication and publishing tool, it also blurs the line between channel and tag. 

# Demo: Reverse Guess Who?
- you know who it is and you need to come up with an unambiguous description
- again, but with multiple people to select
- use s-expression style builder with set operators (union, difference, intersection)

# Interlude: Tags as Mathematical Sets
- presence of tag in a record indicates membership in a set
- extremely brief explanation of set theory
- databases / relational algebra
    + LIMIT 1 means 1-item set, not a bare record
- css selectors
    + tag name as shared vocabulary, class as personal vocabulary
    + emphasis on semantic tags/classes
    + jquery object as set (always a set, never a bare record)
- inheritance vs composition/duck typing

# Conclusion: Thinking in Tags
## tags in the vernacular
- hashtags have gone from an secondary organizational aid to a part of our daily vocabulary 
- we develop new and unexpected idioms around hashtags
- tag as parenthetical aside (on blogs)
- hashtag used as interjection
    + used as interjection in conversation (willow pape "hashtag: ratchet.")

## tag-as-channel used as political identity
- social media is designed to facilitate rapid spread of memes
- not just image macros but all kinds of urban folklore
- ideas of social movements travel as memes 
- "hashtag activism" as derisive term -- corollaries with "awareness ribbon"
- hashtag as metonym for social movement with twitter presence but actions elsewhere
- arguing merits of movement's tenets by hashtag name: #AllLivesMatter = "why not Equalism?"
- hashtag as affiliation with movement -- flying a hashflag

## tags-as-set used as paradigm of identity
- tags can be used as either channels or sets, but they're rarely used as both
- tag is label for identity, but identity is multifaceted -- why not multiple tags?
- the ideologies adopted by political parties are based on hierarchical, either/or thinking, but we have an opportunity to change the paradigm

It is easy to mock young people on tumblr for their jargon-dense descriptions of their identity (e.g. panromantic demisexual) -- to ridicule them as "special snowflakes" that aren't really all that special; just an undifferentiated mass of "social justice warriors." But why? Are we not all, in fact, special snowflakes? Should we expect categories of identity to remain forever fixed; should we expect people who don't *quite* fit in to just round down to less nuanced versions of themselves? Or can we embrace our idiosyncrasies? Can we allow for inconsistency, irregularity, ambiguity but still find common cause in each aspect of our identities?

## putting it all together
- given tagged identities #a #b #c
- identity is intersectional -- i, as an individual, am #a && #b && #c 
- community is union -- my people are #a || #b || #c
