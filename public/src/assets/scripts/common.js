document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper', {
        centeredSlides: true,
        spaceBetween: 30,

        navigation: {
          nextEl: '.gotoNext',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar', // 진행도 표시
        },
    });

    // 유저 이미지 변경
    window.addEventListener('DOMContentLoaded', function() {
        document.getElementById('fileInput').addEventListener('change', function() {
            const file = this.files[0];
            if (file) {
                const preview = document.getElementById('preview');
                const objectURL = URL.createObjectURL(file);  // 임시 URL 생성
                preview.src = objectURL;

                // 메모리 누수를 방지하기 위해 이미지 로드 후 URL 해제
                preview.onload = function() {
                URL.revokeObjectURL(objectURL);
                };
            } else {
                document.getElementById('preview').src = "";
            }
        });
    });
    const rangeInputs = document.querySelectorAll("input[type='range']");

    rangeInputs.forEach(function (rangeInput) {
        rangeInput.addEventListener("input", function () {
            const value = this.value;

            if (value === "0") {
                this.className = "bad";
            } else if (value === "100") {
                this.className = "good";
            } else {
                this.className= "";
            }
        });
    });
});