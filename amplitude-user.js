// Ensure every visitor gets a stable, non-empty Amplitude user_id (stored locally)
(function () {
  var GLOBAL_KEY = 'ffAmplitudeUserId';
  var STORAGE_KEY = 'ff_amplitude_user_id';
  if (window[GLOBAL_KEY]) return;

  function generateId() {
    var cryptoObj = window.crypto || window.msCrypto;
    if (cryptoObj && typeof cryptoObj.randomUUID === 'function') {
      return cryptoObj.randomUUID();
    }

    if (cryptoObj && typeof cryptoObj.getRandomValues === 'function') {
      var bytes = new Uint8Array(16);
      cryptoObj.getRandomValues(bytes);
      return Array.prototype.map
        .call(bytes, function (b) {
          return b.toString(16).padStart(2, '0');
        })
        .join('');
    }

    return (
      'ffc-' +
      Math.random().toString(16).slice(2) +
      '-' +
      Date.now().toString(16)
    );
  }

  function loadOrCreateId() {
    try {
      var cached = localStorage.getItem(STORAGE_KEY);
      if (cached) return cached;
      var fresh = generateId();
      localStorage.setItem(STORAGE_KEY, fresh);
      return fresh;
    } catch (error) {
      return generateId();
    }
  }

  window[GLOBAL_KEY] = loadOrCreateId();
})();
