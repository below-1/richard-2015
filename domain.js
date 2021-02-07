function convert_jumlah_anggota (x) {
	if (x > 26) return 5;
	if (x >= 21 && x <= 26) return 4;
	if (x >= 16 && x <= 20) return 3;
	if (x >= 10 && x <= 15) return 2;
	if (x < 10) return 1;
}

function convert_luas_lahan (x) {
	if (x > 20) return 5;
	if (x >= 16 && x <= 20) return 4;
	if (x >= 11 && x <= 15) return 3;
	if (x >= 5 && x <= 10) return 2;
	if (x < 5) return 1;
}

function convert_usia (x) {
	if (x > 15) return 5;
	if (x >= 11 && x <= 15) return 4;
	if (x >= 6 && x <= 10) return 3;
	if (x >= 1 && x <= 5) return 2;
	if (x < 1) return 1;
}

module.exports = {
	convert_usia,
	convert_jumlah_anggota,
	convert_luas_lahan
}