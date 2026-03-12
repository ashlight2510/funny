(function () {
  "use strict";

  var PICK_URL = "https://pick.funnyfunny.cloud";

  function getParam(name) {
    return new URLSearchParams(window.location.search).get(name);
  }

  function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function loadJson(path) {
    return fetch(path).then(function (r) {
      if (!r.ok) throw new Error("fetch " + path);
      return r.json();
    });
  }

  function getLang() {
    if (getParam("lang") === "en") return "en";
    if (document.body.getAttribute("data-lang") === "en") return "en";
    var p = window.location.pathname.split("/").pop();
    return p === "en.html" ? "en" : "ko";
  }

  var lang = getLang();
  var MOOD_PATH = lang === "en" ? "data/mood-en.json" : "data/mood.json";
  var AMBIENT_PATH = lang === "en" ? "data/ambient-en.json" : "data/ambient.json";
  var BASE = lang === "en" ? "en.html" : "index.html";
  var MSG = {
    ko: { retry: "잠시 후 다시 눌러줘.", done: "오늘은 여기까지" },
    en: { retry: "Try again in a moment.", done: "That's enough for today." },
  };

  /* ——— index: choices ——— */
  var choicesEl = document.getElementById("choices");
  if (choicesEl) {
    loadJson(MOOD_PATH)
      .then(function (data) {
        var choices = data.choices || [];
        var qs = lang === "en" ? "?lang=en" : "";
        choices.forEach(function (c) {
          var btn = document.createElement("button");
          btn.type = "button";
          btn.textContent = c.label;
          btn.dataset.id = c.id;
          btn.onclick = function () {
            if (c.id === "blank") {
              window.location.href = "quiet.html" + qs;
              return;
            }
            window.location.href = "play.html?type=" + encodeURIComponent(c.id) + (lang === "en" ? "&lang=en" : "");
          };
          choicesEl.appendChild(btn);
        });
      })
      .catch(function () {
        choicesEl.innerHTML =
          '<p style="color:#888; font-size:0.9rem;">' + (MSG[lang] || MSG.ko).retry + "</p>";
      });
    return;
  }

  /* ——— play: result + action → pick ——— */
  var resultEl = document.getElementById("result");
  var actionBtn = document.getElementById("actionBtn");
  var bannerEl = document.getElementById("banner");
  var footerLink = document.getElementById("footerLink");
  if (resultEl && actionBtn) {
    var type = getParam("type");
    var playLang = getParam("lang");
    var playBase = playLang === "en" ? "en.html" : "index.html";
    if (playLang === "en") document.documentElement.lang = "en";

    loadJson(playLang === "en" ? "data/mood-en.json" : "data/mood.json")
      .then(function (data) {
        var results = (data.results || {})[type];
        if (!results || !results.length) {
          window.location.href = playBase;
          return;
        }
        var actions = data.actions || [];
        var actionLabels = data.actionLabels || (playLang === "en" ? ["Try something else"] : ["이쯤에서 다른 거"]);
        var pickUrl = data.pickUrl || PICK_URL;

        var text = pick(results);
        var inner = resultEl.querySelector(".result-inner");
        if (inner) {
          inner.innerHTML = text;
        } else {
          resultEl.innerHTML = text;
        }

        var pool = [].concat(actionLabels, actions).filter(Boolean);
        actionBtn.textContent = pool.length ? pick(pool) : (playLang === "en" ? "Try something else" : "이쯤에서 다른 거");
        actionBtn.onclick = function () {
          window.location.href = pickUrl;
        };

        if (bannerEl && data.banner) {
          bannerEl.textContent = data.banner;
        }

        if (footerLink && playLang === "en") {
          footerLink.href = "en.html";
          footerLink.textContent = MSG.en.done;
        }
      })
      .catch(function () {
        window.location.href = playBase;
      });
    return;
  }

  /* ——— quiet: ambient ——— */
  var quietEl = document.getElementById("quiet");
  var quietBg = document.getElementById("quietBg");
  var quietText = document.getElementById("quietText");
  var quietOut = document.getElementById("quietOut");
  if (quietEl && quietBg && quietText) {
    var quietLang = getParam("lang");
    if (quietLang === "en") document.documentElement.lang = "en";
    var ambientPath = quietLang === "en" ? "data/ambient-en.json" : "data/ambient.json";
    var quietBase = quietLang === "en" ? "en.html" : "index.html";
    var defaultText = quietLang === "en" ? "Don't think about anything." : "아무 생각 하지 말 것";

    loadJson(ambientPath)
      .then(function (data) {
        var list = data.ambient || [];
        var a = list.length ? pick(list) : { gradient: ["#e8eef4", "#d4dce6"], text: defaultText };
        var g = a.gradient || ["#e8eef4", "#d4dce6"];
        quietBg.style.background =
          "linear-gradient(135deg, " + (g[0] || "#e8eef4") + " 0%, " + (g[1] || "#d4dce6") + " 100%)";
        quietText.textContent = a.text || defaultText;
      })
      .catch(function () {
        quietBg.style.background = "linear-gradient(135deg, #e8eef4 0%, #d4dce6 100%)";
        quietText.textContent = defaultText;
      });

    if (quietOut && quietLang === "en") {
      quietOut.href = "en.html";
      quietOut.textContent = MSG.en.done;
    }
  }
})();
