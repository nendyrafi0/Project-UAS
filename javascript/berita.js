document.addEventListener("DOMContentLoaded", function () {
    // Mengambil elemen formulir dan elemen kontainer komentar
    const commentForm = document.querySelector(".input-comments form");
    const commentsContainer = document.querySelector(".comments-container");
    const defaultTextElement = document.querySelector('.defaulttext');

    // Menangani pengiriman formulir komentar
    commentForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Mengambil nilai username dan komentar dari formulir
        const username = document.getElementById("user").value;
        const commentText = document.getElementById("comment").value;

        // Memastikan username dan komentar tidak kosong
        if (username.trim() === "" || commentText.trim() === "") {
            alert("Username dan komentar harus diisi.");
            return;
        }

        // Membuat elemen komentar baru
        const commentCard = document.createElement("div");
        commentCard.classList.add("comment-card");

        const nickname = document.createElement("small");
        nickname.classList.add("nickname");
        nickname.textContent = username;

        const comment = document.createElement("p");
        comment.classList.add("comment-s");
        comment.textContent = commentText;

        // Menambahkan elemen komentar ke kontainer komentar
        commentCard.appendChild(nickname);
        commentCard.appendChild(comment);
        commentsContainer.appendChild(commentCard);

        // Mengosongkan formulir setelah mengirim komentar
        commentForm.reset();
        defaultTextElement.style.display = 'none';
    });
});
