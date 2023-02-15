select "a"."firstName",
       "a"."lastName"
  from "actors" as "a"
  join "castMembers" using ("actorId")
  join "films" as "f" using ("filmId")
 where "f"."title" = 'Jersey Sassy';
