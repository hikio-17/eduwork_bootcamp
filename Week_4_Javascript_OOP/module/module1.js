class biodata {
    constructor(nama, email, Telp) {
        this.nama = nama;
        this.email = email;
        this.Telp = Telp;
    }

    render(element) {
        let print = `Nama : ${this.nama} <br> Email : ${this.email} <br>Telp. : ${this.Telp}`;
        element.innerHTML = print;
    }
}

export { biodata };