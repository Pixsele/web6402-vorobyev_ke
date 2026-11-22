class Track {
    constructor(title, artist, members, genre, releaseDate) {
        this.title = title;
        this.artist = artist;
        this.members = members;
        this.genre = genre;
        this.releaseDate = releaseDate;
    }

    printInfo() {
        console.log(`
Название: ${this.title}
Исполнитель: ${this.artist}
Участники: ${this.members}
Жанр: ${this.genre}
Дата релиза: ${this.releaseDate}
        `);
    }
}

const form = document.getElementById("upload-form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const track = new Track(
        document.getElementById("title").value,
        document.getElementById("artist").value,
        document.getElementById("members").value,
        document.getElementById("genre").value,
        document.getElementById("release-date").value
    );

    track.printInfo();

    form.reset()
});