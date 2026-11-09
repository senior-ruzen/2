const statements = [
    "Sizning <span>tabassumingiz</span> atrofdagilar kunini yoritadi.",
    "Siz <span>samimiy</span> va haqiqiy insonsiz.",
    "Siz bilan suhbatlashish har doim <span>yoqimli</span>.",
    "Sizda <span>noyob</span> va takrorlanmas shaxsiyat bor.",
    "Siz atrofdagilarga <span>ilhom</span> berasiz.",
    "Sizning <span>mehribonligingiz</span> cheksiz.",
    "Siz har doim o'z so'zingizda <span>turasiz</span>.",
    "Sizning <span>hazil tuyg'ungiz</span> ajoyib.",
    "Siz boshqalarni tinglashni <span>bilasiz</span>.",
    "Sizning <span>ko'zlaringizda</span> samimiylik bor.",
    "Siz juda <span>mehnatkash</span> insonsiz.",
    "Siz har qanday vaziyatda <span>sabrli</span> bo'la olasiz.",
    "Sizning <span>dilingiz va tilingiz</span> bir.",
    "Siz o'z maqsadingiz sari <span>intilasiz</span>.",
    "Siz bilan o'tgan vaqt <span>qadrli</span>.",
    "Siz atrofdagilarga <span>ishonch</span> bag'ishlaysiz.",
    "Sizning <span>didli</span> tanlovingiz bor.",
    "Siz odamlarning <span>yaxshi taraflarini</span> ko'ra olasiz.",
    "Siz har bir ishga <span>mas'uliyat</span> bilan yondashasiz.",
    "Sizning <span>ovozingiz</span> tinchlantiruvchi ta'sirga ega.",
    "Siz <span>ijodkor</span> va qiziqarli fikrlaysiz.",
    "Siz har doim yordamga <span>tayyorsiz</span>.",
    "Sizning <span>yuragingiz</span> juda keng.",
    "Siz do'stlikka <span>sadoqatlisiz</span>.",
    "Siz bilan har qanday suhbat <span>qiziqarli</span> kechadi.",
    "Siz <span>durdona</span> insonlardan birisiz.",
    "Siz har bir kunda <span>go'zallik</span> ko'ra olasiz.",
    "Sizning <span>kuchli g'ayratingiz</span> bor.",
    "Siz boshqalarga <span>umid</span> bag'ishlaysiz.",
    "Siz o'z xatolaringizdan <span>xulosa</span> chiqara olasiz.",
    "Siz har doim <span>rivojlanishga</span> intilasiz.",
    "Sizning <span>qadriyatingiz</span> baland.",
    "Siz o'z yaqinlaringizni <span>qadrlaysiz</span>.",
    "Sizning <span>aqlingiz va zakovatingiz</span> tahsinga loyiq.",
    "Siz <span>yoqimli syurprizlar</span> qila olasiz.",
    "Siz bilan har doim <span>xotirjamlik</span> seziladi.",
    "Siz <span>odob-axloqli</span> va muloyimsiz.",
    "Sizning <span>matonatingiz</span> ko'plarga namuna.",
    "Siz o'z burchingizni <span>a'lo</span> bajarishga harakat qilasiz.",
    "Siz <span>jasur</span> va qat'iyatlisiz.",
    "Siz har bir insonni <span>tushunishga</span> harakat qilasiz.",
    "Sizning <span>tabiiyligingiz</span> kishini jalb qiladi.",
    "Siz <span>orzu qilishdan</span> qo'rqmaysiz.",
    "Sizning <span>fikrlashingiz</span> keng va teran.",
    "Siz atrofdagilarni <span>birlashtira oladigan</span> insonsiz.",
    "Siz <span>mehribon va g'amxor</span> do'stsiz.",
    "Sizning <span>shijoatingiz</span> boshqalarga ham yuqadi.",
    "Siz <span>sirlarni</span> saqlashni bilasiz.",
    "Siz har doim <span>yangi narsalarni</span> o'rganishga ochiqsiz.",
    "Sizning <span>ichki dunyongiz</span> juda boy.",
    "Siz har doim <span>adolat</span> tarafidasiz.",
    "Siz <span>nozik didli</span> va nafosatli insonsiz.",
    "Siz o'z his-tuyg'ularingizda <span>samimiysiz</span>.",
    "Siz <span>yoqimli xotiralar</span> qoldirasiz.",
    "Siz har bir ishda <span>tartibni</span> xush ko'rasiz.",
    "Siz boshqalarning yutug'idan <span>xursand bo'lasiz</span>.",
    "Sizning <span>qobiliyatlaringiz</span> ko'p.",
    "Siz juda <span>mulohazalisiz</span>.",
    "Siz har bir lahzani <span>qadrlashni</span> bilasiz.",
    "Siz boshqalarni <span>tinchlantira olasiz</span>.",
    "Siz <span>yaxshilik qilishdan</span> charchamaysiz.",
    "Sizning <span>uslubingiz</span> o'zgacha va o'zingizga xos.",
    "Siz <span>noodatiy yechimlar</span> topa olasiz.",
    "Siz juda <span>vafodorsiz</span>.",
    "Sizning <span>kulgingiz</span> juda samimiy.",
    "Siz har qanday davraga <span>fayz</span> bag'ishlaysiz.",
    "Siz <span>o'zingizga ishonchli</span> insonsiz.",
    "Siz <span>odamlar qalbiga</span> yo'l topa olasiz.",
    "Siz <span>tinchlikparvarsiz</span>.",
    "Siz <span>ozodalik va poklikni</span> sevasiz.",
    "Siz har doim <span>to'g'ri maslahat</span> berasiz.",
    "Sizning <span>kelajagingiz</span> porloq.",
    "Siz <span>kattalarga hurmat, kichiklarga izzatda</span> siz.",
    "Sizning <span>g'oyangiz</span> har doim qiziq.",
    "Siz <span>minnatdor bo'lishni</span> bilasiz.",
    "Siz <span>boshqalarga quvonch</span> ulashasiz.",
    "Siz <span>haqiqiy va soxtasiz</span> inson siz.",
    "Sizning <span>saboqingiz</span> ko'plarga asqotadi.",
    "Siz har qanday qiyinchilikni <span>yenga olasiz</span>.",
    "Siz <span>bag'rikengsiz</span>.",
    "Siz <span>boshqalarga motivatsiya</span> berasiz.",
    "Sizning <span>hushingiz va fahmingiz</span> yuqori.",
    "Siz <span>tashabbuskorsiz</span>.",
    "Siz bilan vaqt o'tgani <span>bilinmaydi</span>.",
    "Siz <span>haqiqiy do'st</span> bo'la olasiz.",
    "Siz <span>kutilmagan yaxshiliklar</span> qilasiz.",
    "Sizning <span>nigohingiz</span> juda issiq.",
    "Siz <span>ozod va hur</span> fikrlisiz.",
    "Siz har bir insonda <span>qiziqish</span> uyg'otasiz.",
    "Sizning <span>so'zlaringiz</span> ta'sirchan va o'rinli.",
    "Siz <span>ishonchli hamkorsiz</span>.",
    "Siz <span>o'zligingizni</span> yoqotmaysiz.",
    "Siz har doim <span>oldinga</span> intilasiz.",
    "Siz <span>go'zal fazilatlar</span> egasisiz.",
    "Sizning <span>borligingiz</span> o'zi bir baxt.",
    "Siz <span>mehri daryo</span> insonsiz.",
    "Siz <span>atrofdagilar uchun</span> qadrlisiz.",
    "Siz <span>har qanday muhitni</span> yoritib yuborasiz.",
    "Siz <span>dunyoni yanada yaxshiroq</span> qilasiz.",
    "Siz shunchaki <span>siz bo'lganingiz uchun</span> ajoyibsiz!"
];

let currentIndex = 0;
let isPlaying = true;
let interval;
let enteredPin = "";
const correctPin = "2104";

const statementEl = document.getElementById("statement");
const counterEl = document.getElementById("counter");
const progressEl = document.getElementById("progress");
const pauseIndicator = document.getElementById("pauseIndicator");
const lockScreen = document.getElementById("lockScreen");
const mainCard = document.getElementById("mainCard");
const pinDisplay = document.getElementById("pinDisplay");
const errorMsg = document.getElementById("errorMsg");

// --- PIN KOD MANTig'I ---
function pressNum(num) {
    if (enteredPin.length < 4) {
        enteredPin += num;
        updatePinDisplay();
    }
}

function clearPin() {
    enteredPin = "";
    updatePinDisplay();
    errorMsg.innerText = "";
}

function updatePinDisplay() {
    let display = "";
    for (let i = 0; i < 4; i++) {
        display += i < enteredPin.length ? "•" : "*";
    }
    pinDisplay.innerText = display;
    
    if (enteredPin.length === 4) {
        submitPin();
    }
}

function submitPin() {
    if (enteredPin === correctPin) {
        lockScreen.style.opacity = "0";
        setTimeout(() => {
            lockScreen.style.display = "none";
            mainCard.classList.add("visible");
            startAnimation();
        }, 500);
    } else {
        errorMsg.innerText = "Noto'g'ri kod! Qaytadan urinib ko'ring.";
        lockScreen.querySelector(".lock-card").classList.add("shake");
        setTimeout(() => {
            lockScreen.querySelector(".lock-card").classList.remove("shake");
            clearPin();
        }, 400);
    }
}

// Klaviatura orqali parolni kiritishni qo'llab-quvvatlash
document.addEventListener("keydown", (e) => {
    if (lockScreen.style.display !== "none") {
        if (e.key >= "0" && e.key <= "9") {
            pressNum(e.key);
        } else if (e.key === "Backspace") {
            clearPin();
        }
    }
});


// --- ANIMATSIYA MANTIQI ---
function updateDisplay() {
    statementEl.classList.remove("fade-in");
    statementEl.classList.add("fade-out");

    setTimeout(() => {
        statementEl.innerHTML = statements[currentIndex];
        counterEl.innerText = `${currentIndex + 1} / ${statements.length}`;
        progressEl.style.width = `${((currentIndex + 1) / statements.length) * 100}%`;

        statementEl.classList.remove("fade-out");
        statementEl.classList.add("fade-in");
    }, 250);
}

function nextStatement() {
    currentIndex = (currentIndex + 1) % statements.length;
    updateDisplay();
}

function startAnimation() {
    updateDisplay();
    restartInterval();
}

function restartInterval() {
    clearInterval(interval);
    if (isPlaying) {
        interval = setInterval(() => {
            nextStatement();
        }, 2400);
    }
}

// --- BIR MARTA VA IKKI MARTA BOSISH (CLICK / DOUBLE CLICK) ---
let clickTimeout = null;

mainCard.addEventListener("click", () => {
    if (lockScreen.style.display !== "none") return;

    if (clickTimeout === null) {
        // 1 marta bosilgan bo'lishi mumkin, kutamiz (Double-click tekshirish uchun)
        clickTimeout = setTimeout(() => {
            clickTimeout = null;
            // 1 marta bosish -> PAUZA / DAVOM ETISH
            isPlaying = !isPlaying;
            if (isPlaying) {
                pauseIndicator.classList.remove("show");
                restartInterval();
            } else {
                clearInterval(interval);
                pauseIndicator.classList.add("show");
            }
        }, 250);
    } else {
        // 2 marta tez bosildi -> KEYINGI TILAKKA DARXOL O'TISH
        clearTimeout(clickTimeout);
        clickTimeout = null;
        nextStatement();
        if (isPlaying) {
            restartInterval();
        }
    }
});