// tugas pertemuan 7 js

const yazid = {
    nama: "yazid mufid",
    asal: "Surabaya",
    usia: 18,
    agama: "islam",
    hobi: "bermain game"
}

const bayu = {
    nama: "bayu indrawan",
    asal: "Medan",
    usia: 20,
    agama: "islam",
    hobi: "mengganggu orang lagi telpon"
}

const syaldi = {
    nama: "syaldi syal",
    asal: "Sulawesi",
    usia: 17,
    agama: "islam",
    hobi: "bermain bola"
}

const ahmad = {
    nama: "ahmad breettd",
    asal: "Batang",
    usia: 19,
    agama: "islam",
    hobi: "sholawatan"
}

const jalil = {
    nama: "jalil kiwkiw",
    asal: "Pontianak",
    usia: 21,
    agama: "islam",
    hobi: "mengaji"
}

const bio_teman = [yazid, bayu, syaldi, ahmad, jalil]

for(bio of bio_teman) {
    console.log(bio.asal)
}


for (bio in yazid) {
    console.log(bio + '=' + yazid [bio])
}

for (bio in bayu) {
    console.log(bio + '=' + bayu [bio])
}

for (bio in syaldi) {
    console.log(bio + '=' + syaldi [bio])
}

for (bio in ahmad) {
    console.log(bio + '=' + ahmad [bio])
}

for (bio in jalil) {
    console.log(bio + '=' + jalil [bio])
}