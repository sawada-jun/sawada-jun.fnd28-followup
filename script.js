'use strict';
// please do not delete the 'use strict' line above
//ボタンを押すたび背景が変わる
const changeColor = () => {
  let randomColor = "#";
  for (let i = 0; i < 6; i++) {
    randomColor += Math.floor(16 * Math.random()).toString(16);
  }
  document.body.style.backgroundColor = randomColor;
  if (goldContainer && goldContainer.style.display === "block") {
    goldContainer.style.backgroundColor = randomColor;
  }
}

document.getElementById("color-button").addEventListener("click", changeColor)

//ここからボタンを押すと何かが起こるコードです。
//ゴールドコンテナとスタートボタンを取得
const goldContainer = document.getElementById("goldContainer");
const startButton = document.getElementById("startButton");
//金玉をランダム作成
const createGold = () => {
  let gold = document.createElement("span");
  gold.className = "gold";

  const minSize = 5;
  const maxSize = 15;

  let goldSize = Math.random() * (maxSize - minSize) + minSize;

  gold.style.width = goldSize + "px";
  gold.style.height = goldSize + "px";

  gold.style.left = Math.random() * 100 + "%";

  goldContainer.appendChild(gold);

  setTimeout(() => {
    gold.remove();
  }, 10000);
};

// ボタンを押すとchangeボタンが消えて、テキストが切り替わる
startButton.addEventListener("click", () => {
  startButton.disabled = true;
  startButton.textContent = "音楽が流れます イヤホン推奨"
  document.getElementById("color-button").style.display = "none";

});
//ボタンを押して三秒後にミュージック開始
startButton.addEventListener("click", () => {
  setTimeout(() => {
    const audio = document.getElementById('audioPlayer');
    audio.play();
  }, 3000)
});
//ボタンを押して八秒後にメイン画面を差し替え
startButton.addEventListener("click", () => {
  setTimeout(() => {
    startButton.style.display = "none";

    goldContainer.style.display = "block";

  }, 8000)
});

//ボタンを押して、64秒後に金貨画面に差し替えて、金を降らす
startButton.addEventListener("click", () => {
  setTimeout(() => {
    setInterval(createGold, 100);
    goldContainer.style.backgroundImage = "url('金貨.jpg')";
    goldContainer.style.backgroundSize = "cover";
    goldContainer.style.backgroundPosition = "center";
  }, 64000); // 
});
//p1テキストを挿入してアニメーション実施
startButton.addEventListener("click", () => {
  setTimeout(() => {
    let p1 = document.createElement("p");
    p1.style.width = "850px";
    p1.style.height = "100px";
    p1.style.color = "white";
    p1.style.transform = "translateX(-50%)";
    p1.style.position = "absolute";
    p1.style.top = "40%";
    p1.style.left = "50%";
    p1.style.textAlign = "center";
    p1.style.fontSize = "50px";
    p1.textContent = "Music by『 TheFatRat 』";
    p1.style.opacity = 0;
    p1.style.animation = "fadeIn 6s forwards";
    goldContainer.appendChild(p1);

    //p1のフェードアウトが完了したら p2 を追加する
    p1.addEventListener("animationend", () => {
      let p2 = document.createElement("p");
      p2.style.width = "850px";
      p2.style.height = "100px";
      p2.style.color = "white";
      p2.style.transform = "translateX(-50%)";
      p2.style.position = "absolute";
      p2.style.top = "40%";
      p2.style.left = "50%";
      p2.style.textAlign = "center";
      p2.style.fontSize = "50px";
      p2.textContent = "Produced by 『 Tasty Records 』";
      p2.style.opacity = 0;
      p2.style.animation = "fadeIn 6s forwards";
      goldContainer.appendChild(p2);

      //p2のフェードアウトが完了したら p3 を追加する
      p2.addEventListener("animationend", () => {
        let p3 = document.createElement("p");
        p3.style.width = "1100px";
        p3.style.height = "150px";
        p3.style.color = "white";
        p3.style.transform = "translateX(-50%)";
        p3.style.position = "absolute";
        p3.style.top = "40%";
        p3.style.left = "50%";
        p3.style.textAlign = "center";
        p3.style.fontSize = "80px";
        p3.style.color = "yellow"
        p3.textContent = "Edited by 『 Jun Sawada 』";
        p3.style.opacity = 0;
        p3.style.animation = "fadeIn 6s forwards";
        goldContainer.appendChild(p3);

        //p3のフェードアウト開始
        setTimeout(() => {
          p3.style.animationName = "fadeOut";
          p3.style.animationDuration = "3s";
          p3.style.animationFillMode = "forwards";
        }, 5000);
      });

      // p2のフェードアウト開始
      setTimeout(() => {
        p2.style.animationName = "fadeOut";
        p2.style.animationDuration = "3s";
        p2.style.animationFillMode = "forwards";
      }, 5000);
    });

    // p1のフェードアウト開始
    setTimeout(() => {
      p1.style.animationName = "fadeOut";
      p1.style.animationDuration = "3s";
      p1.style.animationFillMode = "forwards";
    }, 5000);
  }, 13000);
})
//グローバルで変数宣言しておく
let divContainer;
//カウントダウン用のコンテナを作成して追加
startButton.addEventListener("click", () => {
  setTimeout(() => {
    divContainer = document.createElement("div");
    divContainer.className = "divContainer";
    goldContainer.appendChild(divContainer)
  }, 38000)

  setTimeout(() => {
    divContainer.remove();
  }, 64000)
});
//カウントダウンの実行関数
const countdown = () => {
  let countdownValue = 9;
  let divCountdownText = document.createElement("p");
  divCountdownText.className = "countdownText"
  divContainer.appendChild(divCountdownText);
  for (let i = countdownValue; i >= 0; i--) {
    setTimeout((num) => {
      divCountdownText.textContent = num;
    }, (countdownValue - i) * 1000, i);
  }
};
//スタートボタンを押して54秒後にカウントダウン開始
startButton.addEventListener("click", () => {
  setTimeout(countdown, 54000);
});
//スタートボタンを押して50秒後に背景チェンジ開始
let intervalIdArray = [];

startButton.addEventListener("click", () => {
  setTimeout(() => {
    let intervalId1 = setInterval(changeColor, 800);
    intervalIdArray.push(intervalId1);
  }, 50000);
});
//54秒後に速度追加
startButton.addEventListener("click", () => {
  setTimeout(() => {
    let intervalId2 = setInterval(changeColor, 300);
    intervalIdArray.push(intervalId2);
  }, 54000);
});
//60秒後に速度追加
startButton.addEventListener("click", () => {
  setTimeout(() => {
    let intervalId3 = setInterval(changeColor, 100);
    intervalIdArray.push(intervalId3);
  }, 60000);
});
//62秒後に速度追加
startButton.addEventListener("click", () => {
  setTimeout(() => {
    let intervalId4 = setInterval(changeColor, 50);
    intervalIdArray.push(intervalId4);
  }, 62000);
});

startButton.addEventListener("click", () => {
  setTimeout(() => {
    intervalIdArray.forEach(id => clearInterval(id));
    goldContainer.style.backgroundColor = "black";
  }, 63000);
});

startButton.addEventListener("click", () => {
  setTimeout(() => {
    goldContainer.style.backgroundImage = "none";
  }, 80000);
});

startButton.addEventListener("click", () => {
  setTimeout(() => {
    let p4 = document.createElement("p");
    p4.style.width = "850px";
    p4.style.height = "100px";
    p4.style.color = "white";
    p4.style.transform = "translateX(-50%)";
    p4.style.position = "absolute";
    p4.style.top = "40%";
    p4.style.left = "50%";
    p4.style.textAlign = "center";
    p4.style.fontSize = "50px";
    p4.textContent = "It's never too late to learn.";
    p4.style.opacity = 0;
    p4.style.animation = "fadeIn 6s forwards";
    goldContainer.appendChild(p4);
    setTimeout(() => {
      p4.style.animationName = "fadeOut";
      p4.style.animationDuration = "3s";
      p4.style.animationFillMode = "forwards";
    }, 7000);
  }, 82000);
});

startButton.addEventListener("click", () => {
  setTimeout(() => {
    let p5 = document.createElement("p");
    p5.style.width = "850px";
    p5.style.height = "100px";
    p5.style.color = "white";
    p5.style.transform = "translateX(-50%)";
    p5.style.position = "absolute";
    p5.style.top = "40%";
    p5.style.left = "50%";
    p5.style.textAlign = "center";
    p5.style.fontSize = "50px";
    p5.textContent = "The End.";
    p5.style.opacity = 0;
    p5.style.animation = "fadeIn 6s forwards";
    goldContainer.appendChild(p5);
    setTimeout(() => {
      p4.style.animationName = "fadeOut";
      p4.style.animationDuration = "3s";
      p4.style.animationFillMode = "forwards";
    }, 7000);
  }, 93000);
});


