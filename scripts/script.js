var udechosen = document.getElementById("page-4-chosen")
var chosenarr = document.getElementsByClassName("ude-gallery-img")

var udeItem = {
    "0": {
        "image": "assets/ude1.png",
        "title": "Crypt Raider",
        "description": "A <b>puzzle</b> game where you explore ancient tombs and solve intricate mechanical puzzles. This project features:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226; Level Design<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226; Mechanical Puzzle Planning<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226; Lighting with Lumen<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226; Line Tracing & Debugging"
    },
    "1": {
        "image": "assets/ude2.png",
        "title": "Toon Tanks",
        "description": "A fun and colorful <b>tank battle game</b> featuring strategic gameplay and dynamic arenas. This project includes:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226; Character, Pawn, Actor, and Components<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226; Mouse Cursor Control, Movement, and Rotation<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226; Gameplay Mechanics<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226; UI and HUD Design<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226; Sound Effects and Particle Systems"
    },
    "2": {
        "image": "assets/ude3.png",
        "title": "Simple Shooter",
        "description": "A simple <b>third-person shooter game</b> with basic controls. This project includes:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226; Animation Blends and Skeletal Mesh<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226; Third-Person View Implementation<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226; AI with Behavior Trees<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226; Sound Cues"
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const firstItem = document.querySelector('.ude-gallery-item');
    if (firstItem) {
        firstItem.classList.add('expanded');
        updateDescription(0);
    }

    document.querySelectorAll('.ude-gallery-item').forEach((item, index) => {
        item.addEventListener('click', function() {
            document.querySelectorAll('.ude-gallery-item').forEach(i => i.classList.remove('expanded'));

            this.classList.add('expanded');

            updateDescription(index);
        });
    });
});

function updateDescription(index) {
    const selectedItem = udeItem[index];

    const udeImage = document.getElementById('ude-image');
    udeImage.src = selectedItem.image;

    const udeTitle = document.getElementById('ude-title');
    udeTitle.textContent = selectedItem.title;

    const udeParagraph = document.getElementById('ude-paragraph');
    udeParagraph.innerHTML = selectedItem.description;
}