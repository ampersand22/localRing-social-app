
localRing - Expo/GraphQL/MongoDB/Prisma

Using older localChat repo and expanding upon that.

Building a social media app with messaging, profiles, events, and maps for local independent wrestling companies to promote their shows, dates, and locations to users. I'm doing this solo while working two jobs... so it might take a while. Starting with messaging function, then maps, then events.

Issues.

Hard time finding best way to use GraphQL.
Enabling apollo subscriptions
had to add binaryTargets into prisma schema
Fix babel with { "extends": ["next/babel", "next/core-web-vitals"] }
In Modal, data?.searchUsers && ... doesn't have clappers after the &&, when I try it, it breaks the code. --> FIXED
There's just so much to GraphQL and TS. Understand better after receiving help but there's a lot to it.
Wins.


Using prisma for GQL to communicate with frontend.
Have a moderate grasp on TS syntax to request specific queries from API
Snippets. That's the win. Snippets.
To Do List

Create separate type files in util on frontend
What to remember with Prisma?:

Remember to recompile dev when changing variables or environments
add in binaryTargets, with "native, darwin"
Run npx prisma generate --schema=sr c/prisma/schema.prisma in terminal to connect
S/O Shad Merhi, Caleb Hollingsworth for help.