(function () {
  "use strict";

  function initPwToggles() {
    document.querySelectorAll(".btn-pw-toggle").forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        var targetId = btn.getAttribute("data-pw-target");
        var input = document.getElementById(targetId);
        if (!input) return;
        var isPw = input.type === "password";
        input.type = isPw ? "text" : "password";
        btn.setAttribute("aria-label", isPw ? "Hide password" : "Show password");
        if (window.VG && window.VG.icon) {
          btn.innerHTML = window.VG.icon(isPw ? "eyeOff" : "eye", "w-4 h-4");
        }
      });
    });
  }

  function initDemoFill() {
    document.querySelectorAll("[data-demo-user]").forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        var type = btn.getAttribute("data-demo-user");
        var emailInput = document.getElementById("liEmail") || document.getElementById("suEmail");
        var pwInput = document.getElementById("liPassword") || document.getElementById("suPassword");
        var confirmInput = document.getElementById("suConfirm");
        var nameInput = document.getElementById("suName");
        var phoneInput = document.getElementById("suPhone");
        var addrInput = document.getElementById("suAddress");
        var planSelect = document.getElementById("suPlan");

        if (type === "resident") {
          if (emailInput) emailInput.value = "alex.morgan@austinrentals.com";
          if (pwInput) pwInput.value = "securePass2025!";
          if (confirmInput) confirmInput.value = "securePass2025!";
          if (nameInput) nameInput.value = "Alex Morgan";
          if (phoneInput) phoneInput.value = "+1 (512) 555-0142";
          if (addrInput) addrInput.value = "2400 South Lamar Blvd, Austin, TX";
          if (planSelect) planSelect.value = "smart";
        } else if (type === "admin") {
          if (emailInput) emailInput.value = "ops.admin@vaultguard.com";
          if (pwInput) pwInput.value = "adminVault2025!";
          if (confirmInput) confirmInput.value = "adminVault2025!";
          if (nameInput) nameInput.value = "Sarah Chen (Ops Lead)";
          if (phoneInput) phoneInput.value = "+1 (512) 555-0199";
          if (addrInput) addrInput.value = "VaultGuard Central Station, Austin";
          if (planSelect) planSelect.value = "portfolio";
        }

        // Trigger input event to clear validation states & update strength
        [emailInput, pwInput, confirmInput, nameInput, phoneInput, addrInput].forEach(function (inp) {
          if (inp) inp.dispatchEvent(new Event("input", { bubbles: true }));
        });

        if (window.VG && window.VG.toast) {
          window.VG.toast("Filled demo credentials for " + (type === "admin" ? "Admin Console" : "Resident Dashboard"), "info");
        }
      });
    });
  }

  function initSocialDemo() {
    document.querySelectorAll(".auth-social-btn").forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        var provider = btn.getAttribute("data-provider") || "SSO";
        if (window.VG && window.VG.toast) {
          window.VG.toast(provider + " authentication is ready in demo mode. Signing in...", "info");
        }
        setTimeout(function () {
          window.location.href = "user/user-dashboard.html";
        }, 1200);
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      initPwToggles();
      initDemoFill();
      initSocialDemo();
    });
  } else {
    initPwToggles();
    initDemoFill();
    initSocialDemo();
  }
})();
