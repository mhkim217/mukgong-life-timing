// 묵공 주석: 기존 0.4.0 양·음력 변환 계산을 유지하고 한국어 화면만 제공합니다.
let converterMode = "solar";
const converterText = { ko: {
        title: "무료 양·음력 변환기",
        subtitle: "필요한 날짜를 양력과 음력으로 무료 변환할 수 있습니다.",
        solarMode: "양력 → 음력",
        lunarMode: "음력 → 양력",
        year: "년",
        month: "월",
        day: "일",
        leap: "윤달로 입력",
        convert: "변환하기",
        result: "변환 결과",
        solar: "양력",
        lunar: "음력",
        leapYes: "윤달",
        leapNo: "평달",
        error: "날짜를 다시 확인해주세요. 지원 범위를 벗어났거나 존재하지 않는 날짜 또는 윤달일 수 있습니다.",
        rangeError: "지원 범위는 1950년부터 2050년까지입니다.",
        libraryError: "변환 기능을 불러오지 못했습니다. 잠시 후 페이지를 새로고침해주세요.",
        appButton: "이 생년월일로 Life Timing 살펴보기",
        privacy: "입력한 날짜는 이 페이지의 변환 계산에만 사용되며, 별도 서버로 저장하도록 구현하지 않았습니다."
}};
const converterLanguage = "ko";
    function setConverterMode(mode) {
      converterMode = mode;
      document.getElementById("solarMode").classList.toggle("active", mode === "solar");
      document.getElementById("lunarMode").classList.toggle("active", mode === "lunar");
      document.getElementById("leapRow").style.display = mode === "lunar" ? "flex" : "none";

      if (mode === "solar") {
        document.getElementById("leapInput").checked = false;
      }

      hideConverterMessages();
    }

    function hideConverterMessages() {
      document.getElementById("converterResult").classList.remove("show");
      document.getElementById("converterError").classList.remove("show");
    }

    function showConverterError(message) {
      const errorBox = document.getElementById("converterError");
      errorBox.textContent = message;
      errorBox.classList.add("show");
      document.getElementById("converterResult").classList.remove("show");
    }

    function convertCalendarDate() {
      hideConverterMessages();
      const t = converterText[converterLanguage];

      if (typeof KoreanLunarCalendar === "undefined") {
        showConverterError(t.libraryError);
        return;
      }

      const year = Number(document.getElementById("yearInput").value);
      const month = Number(document.getElementById("monthInput").value);
      const day = Number(document.getElementById("dayInput").value);

      if (!Number.isInteger(year) || !Number.isInteger(month) || !Number.isInteger(day)) {
        showConverterError(t.error);
        return;
      }

      if (year < 1950 || year > 2050) {
        showConverterError(t.rangeError);
        return;
      }

      try {
        const calendar = new KoreanLunarCalendar();
        let ok = false;
        let resultHtml = "";

        if (converterMode === "solar") {
          ok = calendar.setSolarDate(year, month, day);
          if (!ok) {
            showConverterError(t.error);
            return;
          }

          const solar = calendar.getSolarCalendar();
          const lunar = calendar.getLunarCalendar();
          const lunarType = lunar.intercalation ? t.leapYes : t.leapNo;

          resultHtml =
            '<div class="result-line"><strong>' + t.solar + ":</strong> " +
            solar.year + "-" + String(solar.month).padStart(2, "0") + "-" + String(solar.day).padStart(2, "0") +
            "</div>" +
            '<div class="result-line"><strong>' + t.lunar + ":</strong> " +
            lunar.year + "-" + String(lunar.month).padStart(2, "0") + "-" + String(lunar.day).padStart(2, "0") +
            " · " + lunarType + "</div>";
        } else {
          const isLeap = document.getElementById("leapInput").checked;
          ok = calendar.setLunarDate(year, month, day, isLeap);
          if (!ok) {
            showConverterError(t.error);
            return;
          }

          const lunar = calendar.getLunarCalendar();
          const solar = calendar.getSolarCalendar();
          const lunarType = lunar.intercalation ? t.leapYes : t.leapNo;

          resultHtml =
            '<div class="result-line"><strong>' + t.lunar + ":</strong> " +
            lunar.year + "-" + String(lunar.month).padStart(2, "0") + "-" + String(lunar.day).padStart(2, "0") +
            " · " + lunarType + "</div>" +
            '<div class="result-line"><strong>' + t.solar + ":</strong> " +
            solar.year + "-" + String(solar.month).padStart(2, "0") + "-" + String(solar.day).padStart(2, "0") +
            "</div>";
        }

        document.getElementById("resultBody").innerHTML = resultHtml;
        document.getElementById("converterResult").classList.add("show");
      } catch (error) {
        showConverterError(t.error);
      }
    }


const today = new Date();
document.getElementById("yearInput").value = Math.min(2050, Math.max(1950, today.getFullYear()));
document.getElementById("monthInput").value = today.getMonth()+1;
document.getElementById("dayInput").value = today.getDate();
setConverterMode("solar");
