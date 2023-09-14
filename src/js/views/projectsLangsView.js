class ProjectsLangsView {
    langs = [];
    generalMarkup = ``;
    checkboxes = document.querySelectorAll(
        '.project-container aside .langs .container input[type="checkbox"]'
    );
    resultsConrainer = document.querySelector(
        ".project-container .results-container"
    );
    checkboxesArray = Array.from(this.checkboxes);

    updateCheckedCheckboxes() {
        let checkedCheckboxes = this.checkboxesArray.filter(
            (checkbox) => checkbox.checked
        );
        this.langs = checkedCheckboxes.map((box) => box.dataset.lang);
        this.genMarkup();
        const filteredStr = Array.from(this.generalMarkup).filter(
            (char) => char !== ","
        );
        this.generalMarkup = filteredStr.join("");
        this.resultsConrainer.innerHTML = this.generalMarkup;
        console.log(this.langs);
    }

    genMarkup(langs = this.langs) {
        let projectsData = [
            {
                img: "src/img/WhatsApp Image 2023-09-04 at 09.32.54.png.jpg",
                name: "calculator",
                link: "https://amr-ali-saad.github.io/Calculator/",
                des: "Duis aute irure dolor in velit esse cillum dolore.",
                acceptedLangs: ["html", "css", "js"],
            },
            {
                img: "src/img/WhatsApp Image 2023-09-04 at 09.36.57.jpg",
                name: "amro-world",
                link: "https://amr-ali-saad.github.io/Template-3/",
                des: "Duis aute irure dolor in velit esse cillum dolore.",
                acceptedLangs: ["html", "css"],
            },
            {
                img: "src/img/kasper.jpg",
                name: "kasper",
                link: "https://amr-ali-saad.github.io/Template-2/",
                des: "Duis aute irure dolor in velit esse cillum dolore.",
                acceptedLangs: ["html", "css"],
            },
            {
                img: "src/img/leon.jpg",
                name: "leon",
                link: "https://amr-ali-saad.github.io/Template1/",
                des: "Duis aute irure dolor in velit esse cillum dolore.",
                acceptedLangs: ["html", "css"],
            },
        ];

        let filteredData = projectsData.filter((project) => {
            return this.langs.every((lang) =>
                project.acceptedLangs.includes(lang)
            );
        });

        this.generalMarkup = filteredData.map((project) => {
            return `<div class="result">
            <div class="title">
                <div class="project-num">Project ${
                    filteredData.indexOf(project) + 1
                }</div>
                <div class="name">// _${project.name}</div>
            </div>
            <div class="preview">
                <div class="img-holder">
                    <img src="${project.img}" alt="">
                </div>
                <p>${project.des}</p>
                <button class="view-btn"><a target="_blank"
                        href="${project.link}">view-project</a>
                </button>
            </div>
        </div>`;
        });

        if (
            this.resultsConrainer.innerHTML == "" ||
            this.resultsConrainer.innerHTML == " "
        ) {
            this.resultsConrainer.innerHTML = "No Results!!";
        }
    }

    eventHandler() {
        this.checkboxesArray.forEach((checkbox) => {
            checkbox.addEventListener(
                "change",
                this.updateCheckedCheckboxes.bind(this)
            );
        });
    }
}
export default new ProjectsLangsView();
