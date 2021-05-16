const xhr = new XMLHttpRequest();

window.onload = function () {
    xhr.open('GET', 'https://ddragon.leagueoflegends.com/cdn/11.10.1/data/pt_BR/champion.json');
    xhr.send();
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                const champions = JSON.parse(xhr.responseText).data;
                const indexRandomChampion = Math.floor(Math.random() * Object.keys(champions).length);
                fillPageChampionName(Object.keys(champions)[indexRandomChampion])
            }
        }
    }
}

function fillPageChampionName(championName) {
    xhr.open('GET', `https://ddragon.leagueoflegends.com/cdn/11.10.1/data/pt_BR/champion/${championName}.json`);
    xhr.send();
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                const chmapionData = JSON.parse(xhr.responseText).data;
                const championNameReturnJson = Object.keys(chmapionData)[0];
                document.getElementById("champion_name").append(championNameReturnJson)
                fillPageChampionImage(chmapionData[championNameReturnJson].image.full)
            }
        }
    }
}

function fillPageChampionImage(imgName) {
    document.getElementById("champion_img").src = `https://ddragon.leagueoflegends.com/cdn/11.10.1/img/champion/${imgName}`;
}