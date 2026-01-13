/**
 * ------------------------------------------------------------------
 * CONFIGURATION & LOCALIZATION DATABASE
 * ------------------------------------------------------------------
 */
const langDict = {
    es: {
        sub: "ESTUDIANTE DE CIBERSEGURIDAD", h: "[ INICIO ]", p: "[ PROYECTOS ]", c: "[ CONTACTO ]",
        all: "TODOS", func: "FUNCIONALES", cripto: "CRIPTO", net: "REDES", conv: "CONVERSORES",
        cTitle: "CANAL SEGURO // CONTACTO", send: "ENVIAR TRANSMISIÓN",
        back: "< VOLVER", close: "FINALIZAR PROCESO",
        pName: "Identidad", pDesc: "Detalle de la solicitud...",
        lName: "AGENTE:",
        labels: { n: "NOMBRE", e: "EMAIL", p: "TELÉFONO", d: "MOTIVO / MENSAJE" },
        sPlaceholder: "BUSCAR_MODULO...",
        wait: "Esperando entrada de datos...", write: "Ingrese datos aquí...",
        scan: "OBTENER IP PÚBLICA",
        tracking: "INICIANDO HANDSHAKE CON SERVIDOR EXTERNO...",
        gen: "GENERAR MAC", dev: "ERROR 404: MÓDULO NO ENCONTRADO O EN DESARROLLO",
        spoof_loc: "Barcelona, Cataluña, España",
        selProj: "> PROYECTOS DESTACADOS",
        cat: { Cripto: "CRIPTOGRAFÍA", Net: "REDES", Conv: "CONVERSIÓN", Web: "WEB AUDIT", Data: "DATOS" }
    },
    ca: {
        sub: "ESTUDIANT DE CIBERSEGURETAT", h: "[ INICI ]", p: "[ PROJECTES ]", c: "[ CONTACTE ]",
        all: "TOTS", func: "FUNCIONALS", cripto: "CRIPTO", net: "XARXES", conv: "CONVERTIDORS",
        cTitle: "CANAL SEGUR // CONTACTE", send: "ENVIAR TRANSMISSIÓ",
        back: "< TORNAR", close: "TANCAR PROCÉS",
        pName: "Identitat", pDesc: "Detalls de la sol·licitud...",
        lName: "AGENT:",
        labels: { n: "NOM", e: "EMAIL", p: "TELÈFON", d: "MOTIU / MISSATGE" },
        sPlaceholder: "CERCAR_MODUL...",
        wait: "Esperant dades...", write: "Introdueix dades...",
        scan: "OBTENIR IP PÚBLICA",
        tracking: "INICIANT HANDSHAKE AMB SERVIDOR EXTERN...",
        gen: "GENERAR MAC", dev: "ERROR 404: MÒDUL NO TROBAT O EN DESENVOLUPAMENT",
        spoof_loc: "Barcelona, Catalunya, Espanya",
        selProj: "> PROJECTES DESTACATS",
        cat: { Cripto: "CRIPTOGRAFIA", Net: "XARXES", Conv: "CONVERSIÓ", Web: "AUDITORIA WEB", Data: "DADES" }
    },
    en: {
        sub: "CYBERSECURITY STUDENT", h: "[ HOME ]", p: "[ PROJECTS ]", c: "[ CONTACT ]",
        all: "ALL", func: "WORKING", cripto: "CRYPTO", net: "NETWORK", conv: "CONVERTERS",
        cTitle: "SECURE_CHANNEL // CONTACT", send: "SEND TRANSMISSION",
        back: "< BACK", close: "KILL PROCESS",
        pName: "Identity", pDesc: "Request details...",
        lName: "AGENT:",
        labels: { n: "NAME", e: "EMAIL", p: "PHONE", d: "REASON / MESSAGE" },
        sPlaceholder: "SEARCH_MODULE...",
        wait: "Awaiting data input...",
        write: "Input data here...",
        scan: "GET PUBLIC IP",
        tracking: "INITIATING HANDSHAKE WITH EXTERNAL SERVER...",
        gen: "GENERATE MAC", dev: "ERROR 404: MODULE NOT FOUND OR IN DEV",
        spoof_loc: "Barcelona, Catalonia, Spain",
        selProj: "> SELECTED PROJECTS",
        cat: { Cripto: "CRYPTOGRAPHY", Net: "NETWORK", Conv: "CONVERSION", Web: "WEB AUDIT", Data: "DATA" }
    },
    fr: {
        sub: "ÉTUDIANT EN CYBERSÉCURITÉ", h: "[ ACCUEIL ]", p: "[ PROJETS ]", c: "[ CONTACT ]",
        all: "TOUS", func: "FONCTIONNEL", cripto: "CRYPTO", net: "RÉSEAU", conv: "CONV",
        cTitle: "CANAL_SÉCURISÉ // CONTACT", send: "ENVOYER",
        back: "< RETOUR", close: "TERMINER",
        pName: "Identité", pDesc: "Détails...",
        lName: "AGENT:",
        labels: { n: "NOM", e: "EMAIL", p: "TÉLÉPHONE", d: "MOTIF / MESSAGE" },
        sPlaceholder: "CHERCHER...",
        wait: "En attente...", write: "Saisir données...",
        scan: "OBTENER IP PUBLIQUE",
        tracking: "INITIALISATION DU HANDSHAKE...",
        gen: "GÉNÉRER MAC", dev: "ERREUR 404: MODULE EN DÉVELOPPEMENT",
        spoof_loc: "Barcelone, Catalogne, Espagne",
        selProj: "> PROJETS SÉLECTIONNÉS",
        cat: { Cripto: "CRYPTOGRAPHIE", Net: "RÉSEAU", Conv: "CONVERSION", Web: "WEB AUDIT", Data: "DONNÉES" }
    },
    de: {
        sub: "IT-SICHERHEIT STUDENT", h: "[ HOME ]", p: "[ PROJEKTE ]", c: "[ KONTAKT ]",
        all: "ALLE", func: "FUNKTIONAL", cripto: "KRYPTO", net: "NETZWERK", conv: "KONV",
        cTitle: "SICHERER_KANAL // KONTAKT", send: "SENDEN",
        back: "< ZURÜCK", close: "BEENDEN",
        pName: "Identität", pDesc: "Nachricht...",
        lName: "AGENT:",
        labels: { n: "NAME", e: "EMAIL", p: "TELEFON", d: "GRUND / NACHRICHT" },
        sPlaceholder: "SUCHEN...",
        wait: "Warten auf Eingabe...", write: "Daten eingeben...",
        scan: "ÖFFENTLICHE IP ABRUFEN",
        tracking: "HANDSHAKE WIRD INITIALISIERT...",
        gen: "MAC GENERIEREN", dev: "FEHLER 404: MODUL IN ENTWICKLUNG",
        spoof_loc: "Barcelona, Katalonien, Spanien",
        selProj: "> AUSGEWÄHLTE PROJEKTE",
        cat: { Cripto: "KRYPTOGRAPHIE", Net: "NETZWERK", Conv: "KONVERSION", Web: "WEB AUDIT", Data: "DATEN" }
    }
};

/**
 * ------------------------------------------------------------------
 * PROJECT REPOSITORY
 * f: true (Functional), f: false (Development)
 * ------------------------------------------------------------------
 */
const projects = [
    // Existing Functional
    {n:"SHA-256 Hasher", c:"Cripto", f:true},
    {n:"Base64 Encoder", c:"Conv", f:true},
    {n:"IP Tracker", c:"Net", f:true},
    {n:"Binary Converter", c:"Conv", f:true},
    {n:"Morse Code", c:"Conv", f:true},
    {n:"HEX Viewer", c:"Conv", f:true},
    {n:"MAC Generator", c:"Net", f:true},

    // Existing Dev
    {n:"Subnet Calc", c:"Net", f:false},
    {n:"Port Scanner", c:"Net", f:false},
    {n:"SQL Injector", c:"Web", f:false},
    {n:"Steganography", c:"Cripto", f:false},
    {n:"Password Gen", c:"Cripto", f:false},

    // NEW ADDED PROJECTS (Placeholders)
    {n:"WiFi Deauther", c:"Net", f:false},
    {n:"Keylogger Sim", c:"Data", f:false},
    {n:"Packet Sniffer", c:"Net", f:false},
    {n:"Brute Force Tool", c:"Cripto", f:false},
    {n:"XSS Tester", c:"Web", f:false},
    {n:"Malware Analysis", c:"Data", f:false},
    {n:"VPN Tunnel", c:"Net", f:false},
    {n:"Firewall Rule Gen", c:"Net", f:false},
    {n:"Rootkit Detector", c:"Data", f:false},
    {n:"Social Eng. Toolkit", c:"Web", f:false}
];

// State Variables
let currentAppIndex = -1;
let activeFilter = 'all';

/**
 * ------------------------------------------------------------------
 * CORE UI FUNCTIONS
 * ------------------------------------------------------------------
 */
function hideAll() {
    ["home-view", "projects-view", "contact-view", "app-view"].forEach(id => {
        document.getElementById(id).style.display = "none";
    });
}

function showHome() {
    currentAppIndex = -1; hideAll();
    document.getElementById("home-view").style.display = "flex";
    // Flex direction is handled by CSS class now
}

function showProjects() {
    currentAppIndex = -1; hideAll();
    document.getElementById("projects-view").style.display = "flex";
    applyFilters();
}

function showContact() {
    currentAppIndex = -1; hideAll();
    document.getElementById("contact-view").style.display = "flex";
}

function changeLang() {
    const l = document.getElementById('lang-select').value;
    const d = langDict[l];

    // UI Updates
    document.getElementById('hero-sub').innerText = d.sub;
    document.getElementById('nav-h').innerText = d.h;
    document.getElementById('nav-p').innerText = d.p;
    document.getElementById('nav-c').innerText = d.c;
    document.getElementById('f-all').innerText = d.all;
    document.getElementById('f-func').innerText = d.func;
    document.getElementById('f-cripto').innerText = d.cripto;
    document.getElementById('f-net').innerText = d.net;
    document.getElementById('f-conv').innerText = d.conv;
    document.getElementById('c-title').innerText = d.cTitle;
    document.getElementById('c-btn-send').innerText = d.send;
    document.getElementById('c-back').innerText = d.back;
    document.getElementById('app-close-btn').innerText = d.close;
    document.getElementById('l-name').innerText = d.lName;
    document.getElementById('search-input').placeholder = d.sPlaceholder;
    document.getElementById('sel-label').innerText = d.selProj; // NUEVO

    // Contact Form Labels & Placeholders
    document.getElementById('lbl-name').innerText = d.labels.n;
    document.getElementById('lbl-email').innerText = d.labels.e;
    document.getElementById('lbl-phone').innerText = d.labels.p;
    document.getElementById('lbl-desc').innerText = d.labels.d;
    document.getElementById('form-name').placeholder = d.pName;
    document.getElementById('form-desc').placeholder = d.pDesc;

    applyFilters();
    updateDate();
    // Hot-reload active application
    if(currentAppIndex !== -1) launch(currentAppIndex, true);
}

function updateDate() {
    const now = new Date();
    document.getElementById('date-display').innerText = now.toISOString().split('T')[0];
}

function setFilter(f) {
    activeFilter = f;
    document.querySelectorAll('.filter-btns .btn').forEach(b => b.classList.remove('active'));
    document.getElementById('f-' + f.toLowerCase()).classList.add('active');
    applyFilters();
}

function applyFilters() {
    const l = document.getElementById('lang-select').value;
    const search = document.getElementById("search-input").value.toLowerCase();
    const grid = document.getElementById("grid-container");
    const filtered = projects.filter(p => {
        const matchSearch = p.n.toLowerCase().includes(search);
        let matchCat = (activeFilter === 'all') || (activeFilter === 'func' && p.f) || (p.c === activeFilter);
        return matchSearch && matchCat;
    });
    grid.innerHTML = filtered.map(p => {
        const idx = projects.findIndex(orig => orig.n === p.n);
        const catName = langDict[l].cat[p.c] || p.c;
        const color = p.f ? 'var(--accent)' : '#666';
        return `
            <div class="card" onclick="launch(${idx})">
                ${!p.f ? '<span class="badge">DEV</span>' : ''}
                <div style="color:${color}; font-weight:bold; margin-bottom:5px;">${p.n}</div>
                <div style="font-size:10px; opacity:0.7">[ ${catName} ]</div>
            </div>`;
    }).join('');
}

function toggleTheme() {
    document.body.classList.toggle('light-mode');
}

function sendContact() {
    const name = document.getElementById('form-name').value;
    const email = document.getElementById('form-email').value;
    const prefix = document.getElementById('form-prefix').value;
    const phone = document.getElementById('form-phone').value;
    if(name && email) {
        alert(`ENCRYPTED PACKET SENT TO: 7E9-ITB-SEC\nFROM: ${name}\nCONTACT: ${email} / ${prefix} ${phone}`);
        document.getElementById('form-name').value = "";
        document.getElementById('form-email').value = "";
        document.getElementById('form-phone').value = "";
        document.getElementById('form-desc').value = "";
    } else {
        alert("ERROR: MISSING REQUIRED FIELDS (NAME/EMAIL)");
    }
}

/**
 * ------------------------------------------------------------------
 * APPLICATION LAUNCHER & LOGIC ENGINE
 * ------------------------------------------------------------------
 */
async function launch(i, isRefresh = false) {
    if(!isRefresh) hideAll();
    currentAppIndex = i;
    const l = document.getElementById('lang-select').value;
    const d = langDict[l];
    const appView = document.getElementById("app-view");
    const p = projects[i];
    appView.style.display = "flex";
    document.getElementById("app-header").innerText = `> EXEC: ${p.n}`;
    const ui = document.getElementById("ui");
    // Handle Dev Projects
    if (!p.f) {
        ui.innerHTML = `
            <div class="terminal-output" style="border-color:var(--alert); color:var(--alert)">
                ${d.dev}
                <br><br>
                KERNEL_PANIC: MODULE_NOT_LINKED
            </div>`;
        return;
    }

    // Handle Functional Projects
    switch(p.n) {
        case "IP Tracker":
            // --- HYBRID REAL/SPOOF LOGIC ---
            ui.innerHTML = `
                <button class="btn" style="width:100%; margin-bottom:10px;"
                id="scan-btn">${d.scan}</button>
                <div class="loading-bar" id="load-bar"></div>
                <div class="terminal-output" id="r">${d.wait}</div>
            `;
            document.getElementById('scan-btn').onclick = async function() {
                const r = document.getElementById('r');
                const bar = document.getElementById('load-bar');

                // Visual Effect: Scanning
                r.innerText = d.tracking;
                bar.style.width = "50%";

                try {
                    // 1. FETCH REAL PUBLIC IP
                    const response = await fetch('https://ipwho.is/');
                    const data = await response.json();

                    bar.style.width = "100%";

                    if(data.success) {
                        // 2. CONSTRUIR RESPUESTA HÍBRIDA
                        setTimeout(() => {
                            r.innerHTML = `
<span style="color:#fff">TARGET ACQUIRED:</span>
----------------------------------------
IP ADDR : ${data.ip}  
<span style="color:var(--accent)">[REAL]</span>
ISP     : ${data.connection.isp || data.connection.org}
TYPE    : ${data.type}
----------------------------------------
<span style="color:#fff">GEOLOCATION (FIXED):</span>
LOC     : ${d.spoof_loc}
LAT/LON : 41.3851, 2.1734
ZONE    : Europe/Madrid
----------------------------------------
STATUS  : ENCRYPTED_TUNNEL_ACTIVE
                            `;
                        }, 500);
                    } else {
                        throw new Error("API Error");
                    }
                } catch (e) {
                    bar.style.width = "100%";
                    bar.style.backgroundColor = "red";
                    r.innerText = "ERROR: FIREWALL BLOCKING CONNECTION.\nTRY DISABLING AD-BLOCKER.";
                }
            };
            break;
        case "SHA-256 Hasher":
            ui.innerHTML = `<textarea id="i" rows="3" placeholder="${d.write}"></textarea><div class="terminal-output" id="r">${d.wait}</div>`;
            document.getElementById('i').oninput = async function() {
                if(!this.value) { document.getElementById('r').innerText = d.wait;
                return; }
                const b = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(this.value));
                document.getElementById('r').innerText = Array.from(new Uint8Array(b)).map(x=>x.toString(16).padStart(2,'0')).join('');
            };
            break;

        case "Base64 Encoder":
            ui.innerHTML = `<textarea id="i" rows="3" placeholder="${d.write}"></textarea><div class="terminal-output" id="r">${d.wait}</div>`;
            document.getElementById('i').oninput = function() {
                try { document.getElementById('r').innerText = btoa(this.value);
                } catch(e) { document.getElementById('r').innerText = "INVALID_STRING"; }
            };
            break;
        case "Binary Converter":
            ui.innerHTML = `<input type="text" id="i" placeholder="${d.write}" style="width:100%; background:#111; color:#fff; border:1px solid #444; padding:10px;"><div class="terminal-output" id="r">${d.wait}</div>`;
            document.getElementById('i').oninput = function() {
                document.getElementById('r').innerText = this.value.split('').map(c=>c.charCodeAt(0).toString(2).padStart(8,'0')).join(' ');
            };
            break;

        case "MAC Generator":
            ui.innerHTML = `<button class="btn" style="width:100%" id="gen-btn">${d.gen}</button><div class="terminal-output" id="r">${d.wait}</div>`;
            document.getElementById('gen-btn').onclick = function() {
                const hex = "0123456789ABCDEF";
                let mac = "XX:XX:XX:XX:XX:XX".replace(/X/g, () => hex.charAt(Math.floor(Math.random()*16)));
                document.getElementById('r').innerText = `GENERATED MAC:\n${mac}\n\nVENDOR: VIRTUAL_INTERFACE`;
            };
            break;
        case "Morse Code":
            ui.innerHTML = `<input id="i" placeholder="${d.write}" style="width:100%; background:#111; color:#fff; border:1px solid #444; padding:10px;"><div class="terminal-output" id="r">${d.wait}</div>`;
            const m = {'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..', '1':'.----', '2':'..---', '3':'...--', '4':'....-', '5':'.....', '0':'-----', ' ': '/'};
            document.getElementById('i').oninput = function() {
                document.getElementById('r').innerText = this.value.toUpperCase().split('').map(c => m[c] || '?').join(' ');
            };
            break;

        case "HEX Viewer":
            ui.innerHTML = `<input id="i" placeholder="${d.write}" style="width:100%; background:#111; color:#fff; border:1px solid #444; padding:10px;"><div class="terminal-output" id="r">${d.wait}</div>`;
            document.getElementById('i').oninput = function() {
                document.getElementById('r').innerText = this.value.split('').map(c => "0x" + c.charCodeAt(0).toString(16).toUpperCase()).join(' ');
            };
            break;
    }
}

// --- SYSTEM INITIALIZATION ---
changeLang();
showHome();