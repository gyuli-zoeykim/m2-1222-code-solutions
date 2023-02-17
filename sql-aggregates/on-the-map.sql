select "co"."name" as "country",
       count("c".*) as "totalcities"
  from "countries" as "co"
  join "cities" as "c" using ("countryId")
group by "co"."countryId";
