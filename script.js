/* =================================
   LIFEOS - JAVASCRIPT
================================= */

let xp = 0;
let level = 1;

const maxXP = 100;

const xpText = document.getElementById("xp");
const levelText = document.getElementById("level");
const progressBar = document.getElementById("xp-progress");

const missionButton = document.getElementById("mission-btn");
const missionText = document.getElementById("mission-text");

const achievement = document.getElementById("achievement");


/* =================================
   UPDATE LIFEOS
================================= */

function updateLifeOS() {

    xpText.textContent = `${xp} / ${maxXP}`;

    levelText.textContent = String(level).padStart(2, "0");

    const percentage = (xp / maxXP) * 100;

    progressBar.style.width = `${percentage}%`;
}


/* =================================
   ADD XP
================================= */

function addXP(amount) {

    xp += amount;

    /*
       If XP reaches 100,
       increase the level.
    */

    if (xp >= maxXP) {

        level++;

        xp = xp - maxXP;

        showLevelUp();
    }

    updateLifeOS();
}


/* =================================
   LEVEL UP MESSAGE
================================= */

function showLevelUp() {

    alert(`🎉 LEVEL UP!\n\nYou reached Level ${level}!`);
}


/* =================================
   TODAY'S MISSION
================================= */

missionButton.addEventListener("click", function () {

    /*
       Prevent completing
       the same mission twice.
    */

    if (missionButton.disabled) {
        return;
    }

    addXP(25);

    missionText.textContent =
        "Mission completed! Great work 🎉";

    missionButton.textContent =
        "✓ Completed";

    missionButton.disabled = true;

    missionButton.style.opacity = "0.6";

    /*
       Unlock achievement
    */

    achievement.classList.remove("locked");

    achievement.classList.add("unlocked");

    achievement.querySelector("div").textContent = "🏆";

    achievement.querySelector("h3").textContent =
        "Mission Master";

    achievement.querySelector("p").textContent =
        "You completed your first mission!";

    achievement.classList.add("unlocked-animation");

});


/* =================================
   QUICK ACTIONS
================================= */

const quickCards =
    document.querySelectorAll(".quick-card");

quickCards.forEach(function(card) {

    card.addEventListener("click", function() {

        const action =
            card.querySelector("span").textContent;

        alert(`${action} feature is coming soon! 🚀`);

    });

});


/* =================================
   ADD PROJECT
================================= */

const addProjectButton =
    document.getElementById("add-project");

addProjectButton.addEventListener("click", function() {

    const projectName =
        prompt("Enter your project name:");

    if (projectName === null) {
        return;
    }

    if (projectName.trim() === "") {

        alert("Please enter a project name.");

        return;
    }

    alert(
        `🚀 Project "${projectName}" added!\n\n` +
        `Project management will be available in the next version.`
    );

});


/* =================================
   INITIALIZE LIFEOS
================================= */

updateLifeOS();