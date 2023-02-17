select "c"."firstName",
       "c"."lastName",
       sum("p"."amount") as "totalpaid"
  from "customers" as "c"
  join "payments" as "p" using ("customerId")
group by "c"."customerId"
order by "totalpaid" desc;
