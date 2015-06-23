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

And then this happened. (picture of a tag cloud) Sites like flickr and delicious cross-bred keyword taxonomies and user-generated content and we ended up with tag clouds. We also stopped saying "keyword", probably becasue they reminded us of AOL. But one of the defining traits of the web 2.0 era was the decline of formal taxonomies -- not just hierarchies but even keyword systems with a fixed vocabulary -- and the rise of "folksonomy." Not only had we democratized information, we had democratized the organization of information.

Of course, this created a number of new problems. Without a standard vocabulary, folksonomies have problems with discovery and redundancy. "Do I tag this with Astoria? Queens? NY, NYC, New York? I guess I should use all of them, just to be sure." And in that case, I'm piggybacking on the existing hierarchy of New York geography. What do I do when I want to talk about a category that doesn't even have a name?

We'll return to that thought later. The other progenitor of the hashtag is the IRC channel. Now, at first the resemblance seems superficial: IRC uses a hash as a sigil for public channels but otherwise has seemingly little in common with keywords; while cross-references are the core feature of keywords, cross-posting is often a bannable offense on IRC channels. 

However, an interesting pattern emerged in web 2.0 tags. A tag on flickr wasn't just a subset of a static collection, it was an ever-changing view of a stream. It was a living thing that you could interact with. it was a place that you could inhabit. And just as twitter blurs the line between real-time communication and publishing tool, it also blurs the line between channel and tag. 

## Social Web (Twitter/Tumblr/Instagram)
- trending topic
- tag as idiom, even in conversation (Still drunk from last night! #hotmess)
- exhaustive tagging (instagram)
- tag as footnote (tumblr-style sentence tags)

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

## Guess Who: Visible & Invisible identity
- we’ve been playing guess who with these people, but they all have rich inner lives that contribute to their identity
- game board cells expand to show little bios of people

## Category Culture vs Tag Culture
- our culture thinks a lot about categories but not about tags
    + "what are you" as a question expecting a single answer 
    + political parties 
    + failures of progressive movements -> intersectionality
- cultures that live online (e.g. tumblr) embrace ambiguity, heterodoxy, multiple identity
    + mythology of "SJW" as a bloc but there are many different persepectives
    + even the most mocked aspects of internet culture (headmates, otherkin, paragraph sexuality) are just a product of young people who think in tags trying to exist in a category-oriented culture
