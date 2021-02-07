create table desa (
	id integer primary key,
	nama text
);
insert into desa (nama) values ("babau"), ("merdeka"), ("oefafi"), ("tuapukan"), ("tanah putih"), ("oesao");

create table kelompok_tani (
	id integer primary key,
	id_desa integer not null,
	nama text,
	jumlah_anggota integer,
	ketua text,
	tanggal_pembentukan text,
	luas_lahan integer,
	kartu_kt integer,
	proposal integer,
	status_lahan integer,
	foreign key (id_desa)
		references desa (id)
			on update cascade
			on delete cascade
);

create table app_user (
	id integer primary key,
	username text,
	password text
);

insert into app_user (username, password) values ("admin", "admin");