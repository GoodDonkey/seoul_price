create table usertb (
	ID    varchar(20)    not null,
	PW    varchar(20)    not null,
	name    varchar(20)    not null
);



insert into usertb (ID, PW, name) 
values ('seoulperson1', 'seoulperson1', 'Kimcci');

commit;