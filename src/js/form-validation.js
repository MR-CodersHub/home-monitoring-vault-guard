(function () {
  "use strict";

  var EMAIL = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;
  var PHONE = /^[+()\-.\s\d]{7,20}$/;

  function fieldWrap(input) {
    return input.closest(".field") || input.parentNode;
  }

  function showError(input, msg) {
    var wrap = fieldWrap(input);
    input.classList.add("invalid");
    input.setAttribute("aria-invalid", "true");
    var box = wrap.querySelector(".field-error");
    if (!box) {
      box = document.createElement("p");
      box.className = "field-error";
      wrap.appendChild(box);
    }
    box.textContent = msg;
  }

  function clearError(input) {
    var wrap = fieldWrap(input);
    input.classList.remove("invalid");
    input.removeAttribute("aria-invalid");
    var box = wrap.querySelector(".field-error");
    if (box) box.textContent = "";
  }

  function labelOf(input) {
    return input.getAttribute("data-label") || input.getAttribute("name") || "This field";
  }

  function validateField(input) {
    var val = (input.value || "").trim();
    if (input.hasAttribute("required") && !val) {
      showError(input, labelOf(input) + " is required.");
      return false;
    }
    if (!val) { clearError(input); return true; }
    if (input.type === "email" && !EMAIL.test(val)) {
      showError(input, "Enter a valid email address, e.g. you@domain.com");
      return false;
    }
    if (input.type === "tel" && !PHONE.test(val)) {
      showError(input, "Enter a valid phone number including area code.");
      return false;
    }
    if (input.hasAttribute("data-match")) {
      var other = document.querySelector(input.getAttribute("data-match"));
      if (other && other.value !== val) {
        showError(input, "Passwords do not match.");
        return false;
      }
    }
    var min = parseInt(input.getAttribute("minlength") || "0", 10);
    if (min && val.length < min) {
      showError(input, labelOf(input) + " needs at least " + min + " characters.");
      return false;
    }
    var pat = input.getAttribute("pattern");
    if (pat && !new RegExp(pat).test(val)) {
      showError(input, "That format is not valid. Check the example shown in the field.");
      return false;
    }
    if (input.type === "checkbox" && input.hasAttribute("required") && !input.checked) {
      showError(input, "You need to accept this to continue.");
      return false;
    }
    clearError(input);
    return true;
  }


  function validateForm(form) {
    var inputs = VG.qa("input, textarea, select", form).filter(function (el) {
      return el.type !== "hidden" && el.type !== "submit" && el.type !== "button";
    });
    var ok = true, first = null;
    inputs.forEach(function (input) {
      if (!validateField(input)) {
        ok = false;
        if (!first) first = input;
      }
    });
    if (!ok && first) {
      first.focus();
      var wrap = fieldWrap(first);
      wrap.classList.add("shake");
      setTimeout(function () { wrap.classList.remove("shake"); }, 500);
    }
    return ok;
  }

  function success(form, msg) {
    var box = form.querySelector("[data-form-msg]");
    if (box) {
      box.className = "form-msg ok";
      box.innerHTML = VG.icon("checkCircle", "w-4 h-4 inline-icon") + "<span>" + msg + "</span>";
    }
    VG.toast(msg, "success");
  }

  function failure(form, msg) {
    var box = form.querySelector("[data-form-msg]");
    if (box) {
      box.className = "form-msg err";
      box.innerHTML = VG.icon("alertCircle", "w-4 h-4 inline-icon") + "<span>" + msg + "</span>";
    }
    VG.toast(msg, "error");
  }

  var COPY = {
    contact: "Message received. A security specialist replies within one business hour \u2014 check your inbox.",
    newsletter: "You are on the list. The next briefing lands on the first Tuesday of the month.",
    login: "Signed in. Loading your dashboard\u2026",
    signup: "Account created. Your 30-day trial starts today \u2014 welcome to VaultGuard.",
    waitlist: "Saved. We will email you the moment the feature goes live.",
profile: "Profile updated. Your changes are already live on the desk view.",
    "lost-link": "If that email is registered, a reset link is on its way. It expires in 30 minutes.",
    support: "Ticket opened. Reference VG-" + (100000 + Math.floor(Math.random() * 899999)) + " \u2014 we reply within one hour."
  };


  function strengthMeter(input) {
    var wrap = fieldWrap(input);
var bar = wrap.querySelector("[data-strength]");
    if (!bar) return;
    var track = bar.querySelector(".strength-track");
    if (!track) {
      track = document.createElement("div");
      track.className = "strength-track";
      bar.insertBefore(track, bar.firstChild);
    }
    function score() {
      var v = input.value || "";
      var s = 0;
      if (v.length >= 8) s++;
      if (v.length >= 12) s++;
      if (/[A-Z]/.test(v) && /[a-z]/.test(v)) s++;
      if (/\d/.test(v)) s++;
      if (/[^A-Za-z0-9]/.test(v)) s++;
      var labels = ["Very weak", "Weak", "Fair", "Strong", "Very strong", "Excellent"];
      var lvl = String(Math.max(s, v ? 1 : 0));
      bar.dataset.level = lvl;
      bar.className = "strength" + (v ? " s" + lvl : "");
      var text = bar.querySelector("span");
      if (text) text.textContent = v ? labels[s] : "Password strength";
    }
    input.addEventListener("input", score);
    score();
  }

  function onSubmit(e) {
    var form = e.currentTarget;
    var kind = form.getAttribute("data-form") || "contact";
    e.preventDefault();
    if (!validateForm(form)) {
      failure(form, "Please fix the highlighted fields and try again.");
      return;
    }
    var btn = form.querySelector('button[type="submit"]');
    var original = btn ? btn.innerHTML : "";
    if (btn) {
      btn.disabled = true;
      btn.innerHTML = '<span class="spinner" aria-hidden="true"></span> Working\u2026';
    }
    setTimeout(function () {
      if (btn) { btn.disabled = false; btn.innerHTML = original; }
      success(form, COPY[kind] || COPY.contact);
      var panel = form.querySelector("[data-form-success]");
      if (panel) {
        panel.classList.add("show");
        form.classList.add("is-done");
      }
      if (form.getAttribute("data-reset") !== "false") form.reset();
      if (kind === "login" || kind === "signup") {
        var dash = form.getAttribute("data-dash");
        if (dash) {
          var link = form.querySelector("[data-dash-link]");
          if (link) link.setAttribute("href", VG.url(dash));
        }
      }
    }, 700);
  }

  function init(scope) {
    VG.qa("form[data-form]", scope).forEach(function (form) {
      if (form.dataset.bound) return;
      form.dataset.bound = "1";
      form.setAttribute("novalidate", "novalidate");
      form.addEventListener("submit", onSubmit);
      VG.qa("input, textarea, select", form).forEach(function (input) {
        input.addEventListener("blur", function () { if (input.value || input.hasAttribute("required")) validateField(input); });
        input.addEventListener("input", function () { if (input.classList.contains("invalid")) validateField(input); });
      });
      strengthMeter(form.querySelector('input[type="password"][data-strength-target]'));
    });
  }

  VG.onReady = VG.onReady || [];
  VG.onReady.push(function () { init(document); });
  window.VGForm = { init: init, validate: validateForm };
})();
