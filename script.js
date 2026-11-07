const homeScreen = document.getElementById("homeScreen");
const partScreen = document.getElementById("partScreen");
const gameScreen = document.getElementById("gameScreen");
const resultScreen = document.getElementById("resultScreen");

const startButton = document.getElementById("startButton");
const partAButton = document.getElementById("partAButton");
const partBButton = document.getElementById("partBButton");
const resultRetryButton = document.getElementById("resultRetryButton");
const resultHomeButton = document.getElementById("resultHomeButton");
const tagline = document.getElementById("tagline");

let currentPart = "";
let score = 0;
let currentQuestion = 0;
const totalQuestion = 15;

const questions = [
    {
        question: "อัลกอริทึม (Algorithm) คืออะไร",
        choices: ["การเขียนโปรแกรมด้วยภาษาคอมพิวเตอร์","กระบวนการแก้ไขปัญหาอย่างเป็นขั้นตอน","การคำนวณทางคณิตศาสตร์","การใช้งานอุปกรณ์อิเล็กทรอนิกส์"],
        answer:"กระบวนการแก้ไขปัญหาอย่างเป็นขั้นตอน"
    },
    {
        question: "การเขียนอัลกอริทึมสามารถทำได้กี่รูปแบบ",
        choices: ["1 รูปแบบ","2 รูปแบบ","3 รูปแบบ","4 รูปแบบ"],
        answer: "3 รูปแบบ"
    },
    {
        question:"ข้อใดเป็นรูปแบบหนึ่งของการเขียนอัลกอริทึม",
        choices:["Pseudocode","Microsoft Word","PowerPoint","Photoshop"],
        answer:"Pseudocode"
    },
    {
        question:"ข้อใดเป็นลักษณะสำคัญของอัลกอริทึม",
        choices:["มีขั้นตอนที่ซับซ้อน","สามารถทำงานได้โดยไม่ต้องมีลำดับ","มีขั้นตอนที่ชัดเจนและเป็นลำดับ","ต้องใช้คอมพิวเตอร์ในการทำงานเสมอ"],
        answer:"มีขั้นตอนที่ชัดเจนและเป็นลำดับ"
    },
    {
        question:"ข้อใดคือประโยชน์ของอัลกอริทึม",
        choices:["ทำให้ไม่จำเป็นต้องตรวจสอบผลลัพธ์","ทำให้ทุกปัญหาหายไปทันที","ทำให้ไม่ต้องวางแผนการทำงาน","ทำให้การแก้ปัญหามีระบบมากขึ้น"],
        answer:"ทำให้การแก้ปัญหามีระบบมากขึ้น"
    },
    {
        question:"ข้อใดเป็นตัวอย่างของการใช้อัลกอริทึมในชีวิตประจำวัน",
        choices:["ฟังเพลงตามความชอบ","ทำอาหารตามสูตร","เลือกเสื้อผ้าตามสีที่ชอบ","ดูโทรทัศน์ในเวลาว่าง"],
        answer:"ทำอาหารตามสูตร"
    },
    {
        question:"อัลกอริทึมสามารถนำไปประยุกต์ใช้กับสิ่งใดได้บ้าง",
        choices:["การแก้ปัญหาในชีวิตประจำวัน","การตกแต่งห้องเพียงอย่างเดียว","การเล่นเกมเท่านั้น","การใช้งานคอมพิวเตอร์เท่านั้น"],
        answer:"การแก้ปัญหาในชีวิตประจำวัน"
    },
    {
        question:"บุคคลใดกำลังใช้อัลกอริทึมได้อย่างเหมาะสมที่สุด",
        choices:["น้ำหวานทำการบ้านโดยข้ามขั้นตอนไปมา","แก้มแก้ปัญหาโดยไม่วางแผน","จาจาหยิบวัตถุดิบมาทำอาหารแบบสุ่ม","ต้นน้ำทำอาหารโดยทำตามสูตรทีละขั้นตอน"],
        answer:"ต้นน้ำทำอาหารโดยทำตามสูตรทีละขั้นตอน"
    },
    {
        question:"เพราะเหตุใดการเรียงลำดับขั้นตอนจึงมีความสำคัญ",
        choices:["เพื่อให้มีขั้นตอนในการทำงานมากขึ้น","เพื่อให้การทำงานถูกต้องและไม่สับสน","เพื่อให้สามารถข้ามขั้นตอนต่าง ๆ ได้","เพื่อให้ใช้เวลาในการทำงานมากขึ้น"],
        answer:"เพื่อให้การทำงานถูกต้องและไม่สับสน"
    },
    {
        question:"หากต้องการทำแซนด์วิช ขั้นตอนแรกควรทำอะไร",
        choices:["นำแซนด์วิชไปรับประทาน","หั่นแซนด์วิชเป็นชิ้น","เตรียมขนมปังและวัตถุดิบให้พร้อม","นำแซนด์วิชใส่จาน"],
        answer:"เตรียมขนมปังและวัตถุดิบให้พร้อม"
    },
    {
        question:"หากต้องการเขียนอัลกอริทึมสำหรับการชงนม ขั้นตอนแรกควรทำอะไร",
        choices:["ดื่มนม","คนส่วนผสมให้เข้ากัน","ล้างแก้วหลังดื่มเสร็จ","เตรียมนมและแก้วให้พร้อม"],
        answer:"เตรียมนมและแก้วให้พร้อม"
    },
    {
        question:"การเขียนอัลกอริทึมในรูปแบบผังงานเรียกว่าอะไร",
        choices:["Flowchart","Pseudocode","Algorithm","Program"],
        answer:"Flowchart"
    },
    {
        question:"หากอัลกอริทึมมีขั้นตอนที่ไม่ชัดเจน จะส่งผลอย่างไร",
        choices:["ทำให้การทำงานรวดเร็วขึ้น","ทำให้ผู้ปฏิบัติงานเกิดความสับสน","ทำให้ไม่จำเป็นต้องแก้ไขปัญหา","ทำให้ผลลัพธ์ถูกต้องมากขึ้น"],
        answer:"ทำให้ผู้ปฏิบัติงานเกิดความสับสน"
    },
    {
        question:"ข้อใดเรียงลำดับขั้นตอนการแปรงฟันได้เหมาะสมที่สุด",
        choices:["แปรงฟัน → บีบยาสีฟัน → บ้วนปาก","แปรงฟัน → บ้วนปาก → บีบยาสีฟัน","บ้วนปาก → บีบยาสีฟัน → แปรงฟัน","บีบยาสีฟัน → แปรงฟัน → บ้วนปาก"],
        answer:"บีบยาสีฟัน → แปรงฟัน → บ้วนปาก"
    },
    {
        question:"หากต้องการให้อัลกอริทึมทำงานได้อย่างมีประสิทธิภาพ ควรทำอย่างไร",
        choices:["เพิ่มขั้นตอนให้มากที่สุด","เปลี่ยนลำดับขั้นตอนอยู่เสมอ","กำหนดขั้นตอนให้ชัดเจนและเป็นลำดับ","ข้ามขั้นตอนที่ไม่เข้าใจ"],
        answer:"กำหนดขั้นตอนให้ชัดเจนและเป็นลำดับ"
    }
];

const orderQuestions = [
    {
        question:"จงเรียงลำดับขั้นตอนการต้มไข่ให้ถูกต้อง",
        steps: [
            "เตรียมหม้อและใส่นํ้า",
            "นำหม้อขึ้นตั้งเตา",
            "รอให้นํ้าเดือด",
            "ใส่ไข่ลงในหม้อ",
            "ต้มไข่จนสุก",
            "นำไข่ขึ้นจากหม้อ"
        ],
        choices: [
            "ใส่ไข่ลงในหม้อ",
            "รอให้นํ้าเดือด",
            "ต้มไข่จนสุก",
            "นำไข่ขึ้นจากหม้อ",
            "เตรียมหม้อและใส่นํ้า",
            "นำหม้อขึ้นตั้งเตา"
        ]
    },
    {
        question:"จงเรียงลำดับขั้นตอนการหุงข้าวให้ถูกต้อง",
        steps: [
            "ล้างข้าวสารให้สะอาด",
            "ตักข้าวสารใส่หม้อหุงข้าว",
            "เติมน้ำในปริมาณที่เหมาะสม",
            "นำหม้อใส่ลงในเครื่องหุงข้าว",
            "รอจนข้าวสุก",
            "ตักข้าวใส่จานพร้อมรับประทาน"
        ],
        choices: [
            "เติมน้ำในปริมาณที่เหมาะสม",
            "ตักข้าวสารใส่หม้อหุงข้าว",
            "ตักข้าวใส่จานพร้อมรับประทาน",
            "ล้างข้าวสารให้สะอาด",
            "รอจนข้าวสุก",
            "นำหม้อใส่ลงในเครื่องหุงข้าว"
        ]
    },
    {
        question:"จงเรียงลำดับขั้นตอนการต้มบะหมี่กึ่งสำเร็จรูปให้ถูกต้อง",
        steps: [
            "ต้มน้ำให้เดือด",
            "ใส่เส้นบะหมี่ลงในหม้อ",
            "ใส่เครื่องปรุงลงในชาม",
            "เทน้ำร้อนและเส้นบะหมี่ลงในชาม",
            "ปิดฝาชามและรอให้เส้นสุก",
            "พร้อมรับประทาน"
        ],
        choices: [
            "ใส่เครื่องปรุงลงในชาม",
            "ปิดฝาชามและรอให้เส้นสุก",
            "ต้มน้ำให้เดือด",
            "ใส่เส้นบะหมี่ลงในหม้อ",
            "เทน้ำร้อนและเส้นบะหมี่ลงในชาม",
            "พร้อมรับประทาน"
        ]
    },
    {
        question:"จงเรียงลำดับขั้นตอนการทำไข่ตุ๋นให้ถูกต้อง",
        steps: [
            "ตอกไข่ใส่ชาม",
            "ตีไข่ให้เข้ากัน",
            "ปรุงรสตามต้องการ",
            "นำไข่เข้าเตาอบหรือเครื่องนึ่ง",
            "รอจนไข่ตุ๋นสุก",
            "นำออกมาพร้อมรับประทาน"
        ],
        choices: [
            "ตอกไข่ใส่ชาม",
            "นำออกมาพร้อมรับประทาน",
            "นำไข่เข้าเตาอบหรือเครื่องนึ่ง",
            "ปรุงรสตามต้องการ",
            "รอจนไข่ตุ๋นสุก",
            "ตีไข่ให้เข้ากัน"
        ]
    },
    {
        question:"จงเรียงลำดับขั้นตอนการล้างจานให้ถูกต้อง",
        steps: [
            "กำจัดเศษอาหารออกจากจาน",
            "ใส่น้ำยาล้างจานลงบนฟองน้ำ",
            "ใช้ฟองน้ำขัดทำความสะอาดจาน",
            "ล้างจานด้วยน้ำสะอาด",
            "นำจานไปผึ่งให้แห้ง",
            "เก็บจานที่ล้างสะอาดแล้วให้เรียบร้อย"
        ],
        choices: [
            "ล้างจานด้วยน้ำสะอาด",
            "นำจานไปผึ่งให้แห้ง",
            "ใส่น้ำยาล้างจานลงบนฟองน้ำ",
            "ใช้ฟองน้ำขัดทำความสะอาดจาน",
            "กำจัดเศษอาหารออกจากจาน",
            "เก็บจานที่ล้างสะอาดแล้วให้เรียบร้อย"
        ]
    },
     {
        question:"จงเรียงลำดับขั้นตอนการรดน้ำต้นไม้ให้ถูกต้อง",
        steps: [
            "ตรวจสอบว่าดินบริเวณโคนต้นไม้แห้งหรือไม่",
            "เตรียมบัวรดน้ำให้พร้อม",
            "นำน้ำใส่บัวรดน้ำ",
            "รดน้ำบริเวณโคนต้นไม้",
            "รดน้ำให้ทั่วบริเวณที่เหมาะสม",
            "เก็บอุปกรณ์หลังจากใช้งานเสร็จ"
        ],
        choices: [
            "ตรวจสอบว่าดินบริเวณโคนต้นไม้แห้งหรือไม่",
            "รดน้ำให้ทั่วบริเวณที่เหมาะสม",
            "นำน้ำใส่บัวรดน้ำ",
            "เตรียมบัวรดน้ำให้พร้อม",
            "เก็บอุปกรณ์หลังจากใช้งานเสร็จ",
            "รดน้ำบริเวณโคนต้นไม้"
        ]
    }

];

function showQuestion() {
    const questionText = document.getElementById("questionText");
    const current =questions[currentQuestion];
    
    questionText.textContent = current.question;

    document.getElementById("progressText").textContent =
       `Question ${currentQuestion + 1} of ${questions.length}`;

    const answerArea = document.getElementById("answerArea");

    answerArea.innerHTML = "";

    current.choices.forEach(function (choice) {
        const buttton = document.createElement("button");
        buttton.textContent = choice;
        buttton.addEventListener("click", function () {
            if (choice === current.answer) {
                score++;
                document.getElementById("scoreText").textContent = `Score: ${score}`;
            }
            currentQuestion++;

            if (currentQuestion < questions.length) {
                showQuestion();
            } else {
                showScreen(resultScreen);
                document.getElementById("finalScoreText").textContent = `Final Score: ${score}`;
            }
        });
        answerArea.appendChild(buttton);
    });
}

function showOrderQuestion() {
    const current = orderQuestions[currentQuestion];

    document.getElementById("questionText").textContent = current.question;

    document.getElementById("progressText").textContent =
        `Question ${currentQuestion + 1} of ${orderQuestions.length}`;

    const answerArea = document.getElementById("answerArea");
    answerArea.innerHTML = "";

    const slotsArea = document.createElement("div");
    slotsArea.id = "slotsArea";
    answerArea.appendChild(slotsArea);

    const allSlots = [];

    current.steps.forEach(function (step, index) {
        const slot = document.createElement("div");

        slot.className = "order-slot";
        slot.dataset.correctAnswer = step;
        slot.textContent = `Step ${index + 1}`;
        slot.draggable = true;

        allSlots.push(slot);

        slot.addEventListener("dragstart", function (event) {
            if (!slot.dataset.answer) {
                event.preventDefault();
                return;
            }

            event.dataTransfer.setData("sourceType", "slot");
            event.dataTransfer.setData("sourceIndex", index);
            event.dataTransfer.setData("text", slot.dataset.answer);
        });

        slot.addEventListener("dragover", function (event) {
            event.preventDefault();
        });

        slot.addEventListener("drop", function (event) {
            event.preventDefault();

            if (slotsArea.dataset.checked === "true") {
                return;
            }

            const draggedText = event.dataTransfer.getData("text");
            const sourceType = event.dataTransfer.getData("sourceType");

            if (sourceType === "slot") {
                const sourceIndex = Number(
                    event.dataTransfer.getData("sourceIndex")
                );

                const sourceSlot = allSlots[sourceIndex];

                if (sourceSlot === slot) {
                    return;
                }

                const targetAnswer = slot.dataset.answer;
                const sourceAnswer = sourceSlot.dataset.answer;

                slot.dataset.answer = sourceAnswer;
                slot.textContent = sourceAnswer;
                slot.style.color = "#513430";

                if (targetAnswer) {
                    sourceSlot.dataset.answer = targetAnswer;
                    sourceSlot.textContent = targetAnswer;
                    slot.style.color = "#513430";
                } else {
                    delete sourceSlot.dataset.answer;
                    sourceSlot.textContent =
                        `Step ${sourceIndex + 1}`;
                        sourceSlot.style.color = "white";
                }
            }

            if (sourceType === "choice") {
                if (slot.dataset.answer) {
                    return;
                }

                slot.dataset.answer = draggedText;
                slot.textContent = draggedText;
                slot.style.color = "#513430";

                const choiceItems =
                    choicesArea.querySelectorAll(".choice-item");

                choiceItems.forEach(function (item) {
                    if (item.textContent === draggedText) {
                        item.remove();
                    }
                });
            }

            const allFilled = allSlots.every(function (item) {
                return item.dataset.answer !== undefined;
            });

            if (allFilled) {
                slotsArea.dataset.checked = "true";

                const isCorrect = allSlots.every(function (item) {
                    return item.dataset.answer === item.dataset.correctAnswer;
                });

                if (isCorrect) {
                    score++;
                    document.getElementById("scoreText").textContent =
                        `Score: ${score}`;

                    allSlots.forEach(function (item) {
                        item.style.backgroundColor = "lightgreen";
                    });
                } else {
                    allSlots.forEach(function (item) {
                        item.style.backgroundColor = "lightcoral";
                    });
                }

                  setTimeout(function() {
                    nextOrderQuestion();
                  }, 1000);    
                
            }
        });

        slotsArea.appendChild(slot);
    });

    

    
    const choicesArea = document.createElement("div");
    choicesArea.id = "choicesArea";
    answerArea.appendChild(choicesArea);
    
    current.choices.forEach(function (choice) {
        const choiceItem = document.createElement("div");
        choiceItem.className = "choice-item";
        choiceItem.textContent = choice;
        choiceItem.draggable = true;
        choiceItem.addEventListener("dragstart", function (event) {
            event.dataTransfer.setData("sourceType","choice");
            event.dataTransfer.setData("text", choice);
        });
        choicesArea.appendChild(choiceItem);
    });
}

function nextOrderQuestion() {
    currentQuestion++;
    
    if (currentQuestion < orderQuestions.length) {
        showOrderQuestion();
    } else {
        showScreen(resultScreen);
    }
    document.getElementById("finalScoreText").textContent = `Final Score: ${score}`;
}

function showScreen(screen) {
    homeScreen.hidden = true;
    partScreen.hidden = true;
    gameScreen.hidden = true;
    resultScreen.hidden = true;

    screen.hidden = false; 
    document.getElementById("app").classList.toggle(
        "part-b",
        screen === gameScreen && currentPart === "B"
    );
    document.getElementById("app").classList.toggle(
        "home-page",
        screen === homeScreen
    );

    tagline.hidden = (screen === gameScreen);
}

function startPartA() {
    currentPart = "A";
    score = 0;
    currentQuestion = 0;
    document.getElementById("scoreText").textContent = "Score: 0";
    showScreen(gameScreen);
    showQuestion();
}

function startPartB() {
    currentPart = "B";
    score = 0;
    currentQuestion = 0;
    document.getElementById("scoreText").textContent = "Score: 0";
    showScreen(gameScreen);
    showOrderQuestion();
}

function retryGame() {
        if (currentPart === "A") {
            startPartA();
        } else  {
            startPartB();
        }
    }

startButton.addEventListener("click", function () {
    showScreen(partScreen);
});  

partAButton.addEventListener("click", function () {
    startPartA();
});

partBButton.addEventListener("click", function () {
    startPartB();
});

resultRetryButton.addEventListener("click", function () {
    document.getElementById("finalScoreText").textContent = "Final Score:0";
    retryGame();
});

resultHomeButton.addEventListener("click", function () {
    showScreen(homeScreen);
});





 