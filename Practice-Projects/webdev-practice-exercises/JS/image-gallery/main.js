const imgex = {
  id: "7",
  author: "Alejandro Escamilla",
  width: 4728,
  height: 3168,
  url: "https://unsplash.com/photos/BbQLHCpVUqA",
  download_url: "https://picsum.photos/id/7/4728/3168",
};

class Gallery {
  API_URL = "https://picsum.photos/v2/list?limit=30";
  imgsData = [];
  gallery = document.querySelector("#gallery");
  modalOverlay = document.querySelector("#modalOverlay");
  modalCard = document.querySelector("#modalCard");

  constructor() {
    this.getImgUrls().then(() => {
      this.renderImgs();
    });

    this.gallery.addEventListener("click", this.openModal.bind(this));
  }

  async getImgUrls() {
    try {
      const req = await fetch(this.API_URL);
      const data = await req.json();
      this.imgsData = data;
      console.log(data);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  }

  renderImgs() {
    this.imgsData.forEach((img) => {
      const htmlString = `
          <div id=${img.id} class="image-container">
            <img src="${img.download_url}" alt="image"/>
          </div>`;
      this.gallery.insertAdjacentHTML("afterbegin", htmlString);
    });
  }

  openModal(e) {
    if (!e.target.closest(".image-container")) return;

    const imageIndex = e.target.closest(".image-container").id;

    this.modalOverlay.classList.remove("hidden");
    this.modalCard.classList.remove("hidden");

    this.modalCard.innerHTML = `
      <p>author: ${this.imgsData[imageIndex].author}</p>
      <img src=${this.imgsData[imageIndex].download_url} alt="pic" />`;

    this.modalOverlay.addEventListener("click", () => {
      this.modalCard.classList.add("hidden");
      this.modalOverlay.classList.add("hidden");
    });

    if (this.modalOverlay.classList.contains("hidden"))
      this.modalOverlay.removeEventListener("click");
  }
}

const galeria = new Gallery();
