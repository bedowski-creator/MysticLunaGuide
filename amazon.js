// GLOBAL AMAZON GEO-REDIRECT ENGINE
(async function() {
    // 1. Fetch user country using free API
    let country = "US";
    try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();
        country = data.country || "US";
    } catch (e) {
        country = "US";
    }

    // 2. Amazon marketplace map
    const markets = {
        "US": { domain: "amazon.com", tag: "mysticlunag01-20" },
        "UK": { domain: "amazon.co.uk", tag: "mysticlunagui-21" },
        "GB": { domain: "amazon.co.uk", tag: "mysticlunagui-21" },
        "CA": { domain: "amazon.ca", tag: "mysticlunag01-20" },
        "AU": { domain: "amazon.com.au", tag: "mysticlunag01-20" },
        "DE": { domain: "amazon.de", tag: "mysticlunag01-20" },
        "FR": { domain: "amazon.fr", tag: "mysticlunag01-20" },
        "IT": { domain: "amazon.it", tag: "mysticlunag01-20" },
        "ES": { domain: "amazon.es", tag: "mysticlunag01-20" },
        "NL": { domain: "amazon.nl", tag: "mysticlunag01-20" },
        "IN": { domain: "amazon.in", tag: "mysticlunag01-20" }
    };

    // 3. Fallback (your choice = amazon.com)
    const chosen = markets[country] || markets["US"];

    // 4. Rewrite all universal affiliate links
    document.querySelectorAll(".amazon-link").forEach(el => {
        const asin = el.dataset.asin;
        if (!asin) return;

        const url = `https://${chosen.domain}/dp/${asin}/?tag=${chosen.tag}`;
        el.href = url;
        el.target = "_blank";
        el.rel = "nofollow noopener sponsored";
    });
})();

