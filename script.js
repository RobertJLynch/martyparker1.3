const token = document.querySelector(".wrapper");

if (window.innerWidth >= 576) {
    token.innerHTML = `
    <div class="addBlurb">
        <address>
        Room 1.78<br>
        David Weatherall Building<br>
        Keele University<br>
        Newcastle ST5 5BG
        </address>
        <p id="p1">I am a PhD student at the School of Primary, Community and Social Care at Keele University. My background is in mathematics and statistics and my current research uses multistate modelling to estimate and project health expectancies.</p>
    </div>
    <div class="imgDiv">
    </div>`;
}

function checkAndAdd() {
    if (window.innerWidth >= 576) {
        token.innerHTML = `
        <div class="addBlurb">
            <address>
            Room 1.78<br>
            David Weatherall Building<br>
            Keele University<br>
            Newcastle ST5 5BG
            </address>
            <p id="p1">I am a PhD student at the School of Primary, Community and Social Care at Keele University. My background is in mathematics and statistics and my current research uses multistate modelling to estimate and project health expectancies.</p>
        </div>
        <div class="imgDiv">
        </div>`;
    } else {
        token.innerHTML = `
        <address>
        Room 1.78<br>
        David Weatherall Building<br>
        Keele University<br>
        Newcastle ST5 5BG
        </address>
        <p id="p1">I am a PhD student at the School of Primary, Community and Social Care at Keele University. My background is in mathematics and statistics and my current research uses multistate modelling to estimate and project health expectancies.</p>
        <div class="imgDiv">
        </div>`;
    }
}

window.onresize = checkAndAdd;