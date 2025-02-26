let exp = 0;
let level = 1;
let characterAchievements = [];
let adventureAchievements = [];
let combatAchievements = [];
let taskAchievements = [];
let communityAchievements = [];
let collectionAchievements = [];

characterAchievements = [
    { title: "升到5等", completed: false },
    { title: "升到10等", completed: false },
    { title: "升到15等", completed: false },
    { title: "升到20等", completed: false },

    { title: "升到20等", completed: false },

    { title: "升到20等", completed: false },

    { title: "升到20等", completed: false },

];

adventureAchievements = [
    { title: "通過攻略區試煉2次", completed: false },
    { title: "通過攻略區試煉3次", completed: false },
    { title: "通過攻略區試煉5次", completed: false }
];

combatAchievements = [
    { title: "完美擊殺攻略區魔王1次", completed: false },
    { title: "完美擊殺攻略區魔王2次", completed: false },
    { title: "完美擊殺攻略區魔王3次", completed: false }
];

taskAchievements = [
    { title: "完成個人任務3次", completed: false },
    { title: "完成小組任務3次", completed: false }
];

communityAchievements = [
    { title: "加入小組", completed: false },
    { title: "新增好友", completed: false },
    { title: "加入社群3", completed: false },
    { title: "加入社群4", completed: false }
];

collectionAchievements = [
    { title: "收藏物品1", completed: false },
    { title: "收藏物品2", completed: false }
];
// 取得 avatar 圖片元素
const avatar = document.getElementById('avatar');

// 預設等級為青銅
let currentLevel = 'bronze';

// 點擊圖片時，根據等級循環切換顏色
avatar.addEventListener('click', () => {
    if (currentLevel === 'bronze') {
        avatar.classList.remove('bronze');
        avatar.classList.add('silver');
        currentLevel = 'silver';
    } else if (currentLevel === 'silver') {
        avatar.classList.remove('silver');
        avatar.classList.add('gold');
        currentLevel = 'gold';
    } else if (currentLevel === 'gold') {
        avatar.classList.remove('gold');
        avatar.classList.add('diamond');
        currentLevel = 'diamond';
    } else if (currentLevel === 'diamond') {
        avatar.classList.remove('diamond');
        avatar.classList.add('bronze');
        currentLevel = 'bronze';
    }
});

function showAchievements(category) {
    const container = document.getElementById("achievements-container");
    container.innerHTML = "";

    let achievementsToShow = [];

    if (category === "角色") {
        achievementsToShow = characterAchievements;
    } else if (category === "冒險") {
        achievementsToShow = adventureAchievements;
    } else if (category === "戰鬥") {
        achievementsToShow = combatAchievements;
    } else if (category === "任務") {
        achievementsToShow = taskAchievements;
    } else if (category === "社群") {
        achievementsToShow = communityAchievements;
    } else if (category === "收藏") {
        achievementsToShow = collectionAchievements;
    }

    achievementsToShow.forEach((ach, index) => {
        const div = document.createElement("div");
        div.className = `achievement ${ach.completed ? 'completed' : ''}`;
        div.innerHTML = `<strong>${ach.title}</strong>`;
        div.onclick = () => completeAchievement(index, category);
        container.appendChild(div);
    });
}

function completeAchievement(index, category) {
    if (category === '角色' && !characterAchievements[index].completed) {
        characterAchievements[index].completed = true;
        exp += 10;
    } else if (category === '冒險' && !adventureAchievements[index].completed) {
        adventureAchievements[index].completed = true;
        exp += 10;
    } else if (category === '戰鬥' && !combatAchievements[index].completed) {
        combatAchievements[index].completed = true;
        exp += 10;
    } else if (category === '任務' && !taskAchievements[index].completed) {
        taskAchievements[index].completed = true;
        exp += 10;
    } else if (category === '社群' && !communityAchievements[index].completed) {
        communityAchievements[index].completed = true;
        exp += 10;
    } else if (category === '收藏' && !collectionAchievements[index].completed) {
        collectionAchievements[index].completed = true;
        exp += 10;
    }

    if (exp >= 100) {
        exp -= 100;
        level++;
        document.getElementById("level").innerText = level;
    }
    document.getElementById("exp").innerText = exp;
    document.getElementById("exp-fill").style.width = (exp / 100) * 100 + "%";

    updateProgress();
    showAchievements(category); // 更新成就列表
}

// 動態更新每個類別的進度
function updateProgress() {
    // 更新角色進度
    document.getElementById("character-progress").innerText =
        characterAchievements.filter(a => a.completed).length + "/" + characterAchievements.length;

    // 更新冒險進度
    document.getElementById("adventure-progress").innerText =
        adventureAchievements.filter(a => a.completed).length + "/" + adventureAchievements.length;

    // 更新戰鬥進度
    document.getElementById("combat-progress").innerText =
        combatAchievements.filter(a => a.completed).length + "/" + combatAchievements.length;

    // 更新任務進度
    document.getElementById("task-progress").innerText =
        taskAchievements.filter(a => a.completed).length + "/" + taskAchievements.length;

    // 更新社群進度
    document.getElementById("community-progress").innerText =
        communityAchievements.filter(a => a.completed).length + "/" + communityAchievements.length;

    // 更新收藏進度
    document.getElementById("collection-progress").innerText =
        collectionAchievements.filter(a => a.completed).length + "/" + collectionAchievements.length;
}

// 页面加载时，确保初始显示正确的成就和进度
showAchievements("角色"); // 默认显示角色成就
updateProgress(); // 更新進度顯示

