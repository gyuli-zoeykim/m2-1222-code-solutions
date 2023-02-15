select "g"."name" as "genre",
       count("c".*) as "totalmovies"
  from "genres" as "g"
  join "filmGenre" using ("genreId")
  join "castMembers" as "c" using ("filmId")
  join "actors" using ("actorId")
 where "actors"."firstName" = 'Lisa'
   and "actors"."lastName" = 'Monroe'
group by "g"."genreId";
