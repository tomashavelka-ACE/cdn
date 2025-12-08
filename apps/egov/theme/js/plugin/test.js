/* strings */
var str = [];
str['version'] = "verze:";
str['unknown ver'] = "neznámá verze";
str['unknown ver req'] = "neznámá verze, požadováno:";
str['required'] = "požadováno:";
str['unsup OS'] = "nepodporovaný OS";
str['unsup browser'] = "nepodporovaný prohlížeč";
str['unsup OS and browser'] = "nepodporovaný OS a prohlížeč";
str['cannot get srv time'] = "problém se získáním času serveru";
str['big time diff'] = "nesouhlasí čas PC s časem serveru:";
str['applet need java'] = "Tento aplet vyžaduje, aby byla v nastavení prohlížeče povolena Java.";
str['JS OK'] = "povoleno";
str['install'] = "";
str['install now'] = "instalovat";
str['update now'] = "update";
str['refresh state'] = "Zkontrolovat";
str['old browser'] = "prohlížeč není aktuální, minimální požadovaná verze: ";
str['no test case'] = "";
str['app not installed or no resp'] = "aplikace není nainstalována nebo neodpovídá";
str['click to test'] = "Otestovat";
str['check_app_wait_dlg'] = "Pro správnou funkčnost portálu je nutné mít nainstalovanou externí aplikaci FormApps Signing Extension. Pokud aplikaci ještě nemáte nainstalovanou, použijte nejprve tlačítko Instalovat. V následujícím kroku se ověří její instalace. Ověření může trvat různě dlouho v závislosti na rychlosti počítače.";
str['check_tls_settings'] = "Používáte starší verzi operačního systému. Zkontrolujte si proto nastavení TLS ve svém prohlížeči.";

var OSEnum = {
  unknown : {value: 0, msg: "neznámý"},
  windows : {value: 1, msg: "Windows"},
  linux : {value: 2, msg: "Linux"},
  macos : {value: 3, msg: "MacOS"},
  unsupported : {value: 4, msg: "nepodporovaný"}
}

var browserEnum = {
  unknown : {value: 0, msg: "neznámý"},
  IE : {value: 1, msg: "Internet Explorer"},
  Gecko : {value: 2, msg: "Mozilla Firefox"},
  Safari : {value: 3, msg: "Safari"},
  Chrome : {value: 4, msg: "Google Chrome"},
  Opera : {value: 5, msg: "Opera"},
  Edge : {value: 6, msg: "Windows Edge"}
}

var statusEnum = {
  unknown : {value: 0, msg: ""},
  inprogress : {value: 1, msg: "probíhá"},
  absent : {value: 2, msg: "chybí"},
  blocked : {value: 3, msg: "blokovaný"},
  unsupported : {value: 4, msg: "nepodporovaný"},
  old : {value: 5, msg: "nepodporovaná verze"},
  failed : {value: 6, msg: "selhal"},
  cannotcheck : {value: 7, msg: "nelze zkontrolovat"},
  sync_error : {value: 8, msg: "čas není synchronizován se serverem"},
  not_allowed : {value: 9, msg: "nepovoleno"},
  
  old_warn : {value: 10, msg: "nepodporovaná verze"},
  warning : {value: 11, msg: "varování"},
  absent_warn : {value: 12, msg: "Chrome nepodporuje detekci"},
  empty : {value: 13, msg:""},
  no_test_case : {value: 14, msg:"nelze zkontrolovat"},
  
  present : {value: 20, msg: "nainstalováno"},
  supported : {value: 21, msg: "podporovaný"},
  allowed : {value: 22, msg: "povoleno"},
  OK : {value: 23, msg: "OK"},
  version: {value:24, msg:"verze "},
  
  manually : {value: 30, msg: "manuálně"},
  refresh : {value: 40, msg: "obnovit"}
}

var mobileStatusEnum = {
  unknown : {value: 0, msg: "?"},
  inprogress : {value: 1, msg: "probíhá"},
  usefam : {value: 10, msg: "použijte FormApps Mobile"},
  famrunning : {value: 11, msg: "FormApps Mobile běží"},
  nofam : {value: 12, msg: ""}
}

var globalStatusEnum = {
  unknown : {value: 0, msg: "neznámý stav"},
  running : {value: 1, msg: "probíhá"},
  failed : {value: 2, msg: "nastavení nevyhovuje"},
  warning : {value: 10, msg: "nastavení vyhovuje s varováním"},
  waiting : {value: 11, msg: "kontrola není kompletní"},
  passed : {value: 20, msg: "nastavení vyhovuje"},
  refresh : {value: 40, msg: "obnovte stránku"}
}

var testPlanEnum = {
  notplanned : {value: 0, msg: "nenaplánováno"},
  planned : {value: 1, msg: "naplánováno"},
  done : {value: 2, msg: "hotovo"}
}

/* versions */
var version_java = "0";//"1.0.0.0";
var version_adobe = "0";//"1.0.0.0";
var version_activex = "1.29.0.79";
var version_FSE_win = "2.24.0.43";
var version_FSE_mac = "2.0.4.0";
var version_FSE_linux = "1.0.0.0";
var version_browser_firefox = "32.0.0.0";
var version_browser_chrome = "37.0.0.0";
var version_browser_ie = "9";
var version_browser_safari = "5.1.0.0";
var version_browser_edge = "0";
var version_chromeext_req = 37;
var version_chrome_macosx_latest = 0;
var version_chrome_macosx_begin_fse = 0;
var version_chrome_extension = "0";//"1.0.0.0";
var version_signing_extension_app = "0";//"1.0.0";
var version_browser_firefox_fse = "0.0.0.0";
var version_browser_firefox_fse_linux = "50.0.0.0";
var version_browser_firefox_fse_windows = "50.0.0.0";
var version_npapi = "1.1.7.0";
var version_windows_internal = "6.1";
var version_windows_messages = {
  "6.1": "(<a href='{link}' target='_blank' title='" + str['check_tls_settings'] + "'>?</a>)",
  "6.2": "(<a href='{link}' target='_blank' title='" + str['check_tls_settings'] + "'>?</a>)"
}
var activex_clsid = "clsid:D8950D0E-FCE7-4AE4-9370-7E4CFBC04362";
var root_url = window.location.protocol + "//" + window.location.host;
var jar_path = root_url + "/o/asseco-eportal-theme/js/plugin/WebFormFiller.jar";
var jnlp_path = root_url + "/o/asseco-eportal-theme/js/plugin/WebFormFiller.jnlp";
var datetime_url = root_url + "/healthcheck/time";
var fsecheck_url = root_url + "/fas/formservice/filler.checkapp";
var fsesession_url = root_url + "/fas/formservice/filler.session";
var tls_settings_url = root_url + "/web/portal/prohlaseni-o-pristupnosti#tls";
var java_install_path = "<a href=\"https://java.com/en/\" target=\"_blank\">https://java.com/en/</a>";
var aread_install_path = "<a class=\"with-icon float-right\" target=\"_blank\" href=\"https://get.adobe.com/cz/reader/\" title=\"Instalovat\"><span>Instalovat</span></a>";
var chrome_extension_install_path = "<a class=\"with-icon float-right\" href=\"https://chrome.google.com/webstore/detail/formapps-plug-in/ilfoopambfaclfjmpiaijnccgcmbeigi?hl=cs&authuser=0\" target=\"_blank\"><span>Instalovat</span></a>";
var firefox_extension_install_path = "<a class=\"with-icon float-right\" href=\"" + root_url + "/fas/page/apps/FormApps_extension.xpi\" target=\"_blank\"><span>Instalovat</span></a>";
var signing_extension_app_install_path_win = "<a class=\"with-icon float-right\" href=\"" + root_url + "/fas/page/apps/FormApps_Signing_Extension.exe\" target=\"_blank\"><span>Instalovat</span></a>";
var signing_extension_app_install_path_mac = "<a class=\"with-icon float-right\" href=\"" + root_url + "/fas/page/apps/FormApps_Signing_Extension.dmg\" target=\"_blank\"><span>Instalovat</span></a>";
var signing_extension_app_install_path_linux = "<div class=\"dropdown d-inline-block float-right\" aria-label=\"Dropdown\">"
                                              + "  <button class=\"form-control dropdown-toggle\" type=\"button\" title=\"Dropdown\" id=\"dropdownInstalMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" tabindex=\"0\">Instalovat</button>"
                                              + "  <div class=\"dropdown-menu dropdown-menu--links\" aria-labelledby=\"dropdownInstalMenuButton\" role=\"menu\" aria-hidden=\"true\">"
                                              + "    <a role=\"menuitem\" class=\"dropdown-item\" title=\"Debian\" tabindex=\"-1\" href=\"/fas/page/apps/FormAppsSigningExtension.all.deb\">Debian</a>"
                                              + "    <a role=\"menuitem\" class=\"dropdown-item\" title=\"Rpm\" tabindex=\"-1\" href=\"/fas/page/apps/FormAppsSigningExtension.noarch.rpm\">Rpm</a>"
                                              + "  </div>"
                                              + "</div>"
//var signing_extension_path_win = root_url + "/fas/page/apps/FormApps_Signing_Extension.exe";
//var signing_extension_path_mac = root_url + "/fas/page/apps/FormApps_Signing_Extension.dmg";
var npapi_mac_install_path = "<a class=\"with-icon float-right\" href=\"" + root_url + "/fas/page/macplugin/formappsplugin.dmg\" target=\"_blank\"><span>Instalovat</span></a>";
var dummy_file_url = root_url + "/o/asseco-eportal-theme/js/plugin/dummy.pdf";


var teststatus = {
  gs : globalStatusEnum.unknown,
  OS : OSEnum.unknown,
  OS_version : "0",
  OS_version_internal : "0",
  browser : browserEnum.unknown,
  browser_version : "0",
  java: statusEnum.unknown,
  java_version: "0",
  java_applet: statusEnum.unknown,
  activex: statusEnum.unknown,
  activex_installed: statusEnum.unknown,
  pdf: statusEnum.unknown,
  pdf_adobe: statusEnum.unknown,
  pdf_adobe_version: "0",
  pdf_internal: statusEnum.unknown,
  cookies: statusEnum.unknown,
  popup: statusEnum.unknown,
  npapi_plugin: statusEnum.unknown,
  datetimediff: statusEnum.unknown,
  chrome_extension: statusEnum.unknown,
  signing_extension_app: statusEnum.unknown
}

var mobileteststatus = {
  platform : globalStatusEnum.unknown,
  fam : mobileStatusEnum.unknown
}

var teststodo = {
  java : testPlanEnum.notplanned,
  java_applet: testPlanEnum.notplanned,
  activex : testPlanEnum.notplanned,
  activex_installed : testPlanEnum.notplanned,
  pdf_adobe : testPlanEnum.notplanned,
  pdf_internal : testPlanEnum.notplanned,
  cookies : testPlanEnum.notplanned,
  popup : testPlanEnum.notplanned,
  npapi_plugin : testPlanEnum.notplanned,
  datetimediff : testPlanEnum.notplanned,
  chrome_extension : testPlanEnum.notplanned,
  signing_extension_app : testPlanEnum.notplanned
}

var statusMsgSpanCssSelector = 'span.pl-2';

function log(msg) {
  //console.log(msg);
}

function IsMobile() {
  var IsWindows = navigator.userAgent.toLowerCase().indexOf('windows') != -1;
  var IsiOS = (navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad)/)) && !IsWindows;
  var IsAndroid = (navigator.userAgent.toLowerCase().indexOf('android') != -1) && !IsWindows;
  var IsWinPhone = (navigator.userAgent.toLowerCase().indexOf('windows phone') != -1);
  var IsMetro = false;
  
  if (IsWindows && PluginDetect.browser.isIE) {
    if (PluginDetect.browser.verIE >= 10) {
      if (navigator.userAgent.indexOf('Windows NT') != -1) {
        var re = new RegExp("Windows NT ([0-9]{1,}[\.0-9]{0,})");
        if (re.exec(navigator.userAgent) != null) {
          var WinVer = parseFloat(RegExp.$1);
          if (WinVer > 6.1) {
            var supported = null;        
            try {
              supported = !!new ActiveXObject("htmlfile");
            } catch (e) {
              supported = false;
            }
            if (!supported) {
              IsMetro = true;
            }
          }
        }
      }
    }
  }
  
  if (IsiOS || IsAndroid || IsWinPhone || IsMetro) return true;
  return false;
}

function DoPluginTest() {
  return window.isTestPlugin;
}

function DoDateTimeTest() {
  return window.doDateTimeTest;
}

function SetStatusClass(el, state) {
  if (el != null) {
    /*
    if (state.value <= 1) el.className = "unknown";
    else if (state.value > 1 && state.value < 10) el.className = "error";
    else if (state.value >= 10 && state.value < 20) el.className = "warn";
    else if (state.value >= 20 && state.value < 30) el.className = "succ";
    else el.className = "warn";
    /*/
    var iconClass = getStatusIconClass(state);

    var statusMsg = '';
    var statusMsgSpan = el.querySelector(statusMsgSpanCssSelector);
    if (statusMsgSpan !== null) {
      statusMsg = statusMsgSpan.innerHTML;  
    }
    
    log("SetStatusClass " + el.id + " - statusMsg: " + statusMsg + ", iconClass: " + iconClass);
    
    createStatusSpan(el, iconClass, statusMsg);
    //*/
  }
}

function getCurentStatusText(name) {
  var el = document.getElementById("status-"+name);
  if (el != null) {
    var statusMsgSpan = el.querySelector(statusMsgSpanCssSelector);
    if (statusMsgSpan !== null) {
      return statusMsgSpan.innerHTML;  
    }  
  }
  
  return '';
} 

function setStatusText(name, msg) {
  var el = document.getElementById("status-" + name);
  if (el != null) {
    var statusMsgSpan = el.querySelector(statusMsgSpanCssSelector);
    if (statusMsgSpan === null) {
      createStatusSpan(el, "info", msg);    
    } else { 
      statusMsgSpan.innerHTML = msg;
    } 
  }  
}                

function getStatusIconClass(state) {
  if (state.value <= 1) return "search";
  else if (state.value > 1 && state.value < 10) return "close";
  else if (state.value >= 10 && state.value < 20) return "info";
  else if (state.value >= 20 && state.value < 30) return "check";
  else return "info";
}


function createStatusSpan(el, iconClass, msg) {
  var parentSpan = document.createElement("span");
  
  var iconSpan = document.createElement("span");
  iconSpan.className = "icon icon-" + iconClass;
  parentSpan.appendChild(iconSpan);
  
  var textSpan = document.createElement("span"); 
  textSpan.innerHTML = msg;
  textSpan.className = "pl-2";
  parentSpan.appendChild(textSpan);
  
  el.innerHTML = parentSpan.outerHTML;
  
  log("createStatusSpan " + el.id + " - msg: " + msg + ", iconClass: " + iconClass + ", html: " + el.innerHTML);
}


function SetStatus(name, state, msg) {
  teststatus[name] = state;
  var el = document.getElementById("status-"+name);
  if (el != null) {
    /*
    if (msg) el.innerHTML = state.msg + " " + msg;
    else el.innerHTML = state.msg;
    SetStatusClass(el, state);
    /*/
    var iconClass = getStatusIconClass(state);
    var statusMsg = state.msg;
    if (msg) statusMsg = state.msg + " " + msg;
    
    log("SetStatus " + el.id + " - statusMsg: " + statusMsg + ", iconClass: " + iconClass);
    
    createStatusSpan(el, iconClass, statusMsg);
    //*/
  }
}

function IsHigherVersion(act, req) {
  var act_ver = act.split(".");
  var req_ver = req.split(".");
  
  for (i = 0; i < act_ver.length && i < req_ver.length; i++) {
    if (parseInt(act_ver[i]) > parseInt(req_ver[i])) return true;
    if (parseInt(act_ver[i]) < parseInt(req_ver[i])) return false;
  }
  return true;
}

function string2Base64string(utf8str)
  {
    //podle filler-xhr.js, dale http://updates.html5rocks.com/2012/06/How-to-convert-ArrayBuffer-to-and-from-String

    //string to arraybuffer
    var strLen = utf8str.length;
    var buf = new ArrayBuffer(strLen);
    var bytes = new Uint8Array(buf);
    for (var i=0; i < strLen; i++) {
      bytes[i] = utf8str.charCodeAt(i);
    }
    ////////////////////////////////////////////

    var byteLength    = bytes.byteLength;
    var byteRemainder = byteLength % 3;
    var mainLength    = byteLength - byteRemainder;
    var encodings = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    var a, b, c, d;
    var chunk;

    var base64ComputedLength = 4 * Math.floor(byteLength/3);
    if (byteLength % 3 != 0)
      base64ComputedLength += 4; //posledni zarovnana ctverice
    var base64arraysize = base64ComputedLength;
    base64arraysize += base64arraysize % 4; //base64arraysize musi byt delitelny 4, aby se to stosovalo v souladu s algoritmem po usecich 3 bajty-> 4 bajty
    var base64arraybuf = new Array(base64arraysize);
    var base64pos = 0;

    for (var i = 0; i < mainLength; i = i + 3) {
      chunk = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2]
      //Use bitmasks to extract 6-bit segments from the triplet
      a = (chunk & 16515072) >> 18 //16515072 = (2^6 - 1) << 18
      b = (chunk & 258048)   >> 12 //258048   = (2^6 - 1) << 12
      c = (chunk & 4032)     >>  6 //4032     = (2^6 - 1) << 6
      d = chunk & 63               //63       = 2^6 - 1
      //Convert the raw binary segments to the appropriate ASCII encoding
      base64arraybuf[base64pos++] = encodings[a];
      base64arraybuf[base64pos++] = encodings[b];
      base64arraybuf[base64pos++] = encodings[c];
      base64arraybuf[base64pos++] = encodings[d];
    }
    //Deal with the remaining bytes and padding
    if (byteRemainder == 1) {
      chunk = bytes[mainLength]
      a = (chunk & 252) >> 2 // 252 = (2^6 - 1) << 2
      //Set the 4 least significant bits to zero
      b = (chunk & 3)   << 4 // 3   = 2^2 - 1
      base64arraybuf[base64pos++] = encodings[a];
      base64arraybuf[base64pos++] = encodings[b];
      base64arraybuf[base64pos++] = '=';
      base64arraybuf[base64pos++] = '=';
    }
    else if (byteRemainder == 2) {
      chunk = (bytes[mainLength] << 8) | bytes[mainLength + 1]
      a = (chunk & 64512) >> 10 //64512 = (2^6 - 1) << 10
      b = (chunk & 1008)  >>  4 //1008  = (2^6 - 1) << 4
      //Set the 2 least significant bits to zero
      c = (chunk & 15)    <<  2 //15    = 2^4 - 1
      base64arraybuf[base64pos++] = encodings[a];
      base64arraybuf[base64pos++] = encodings[b];
      base64arraybuf[base64pos++] = encodings[c];
      base64arraybuf[base64pos++] = '=';
    }
    var result = base64arraybuf.join('');
    base64arraybuf = null; //sichr pro garbage collector
    buf = null;
    return result;
  }

var pdfjs_f = function(pd) {
  var status = PluginDetect.isMinVersion("PDFReader", 0, dummy_file_url);
  if (status == 0) SetStatus("pdf_internal", statusEnum.present);
  else SetStatus("pdf_internal", statusEnum.absent);
  teststodo.pdf_internal = testPlanEnum.done;
}

function isGoodJava() {
  var cnt = navigator.plugins.length;
  
  for (var i = 0; i < cnt; i++) {
    if (navigator.plugins[i].name.toLowerCase().indexOf("java") >= 0) return true;
    else if (navigator.plugins[i].name.toLowerCase().indexOf("icedtea") >= 0) return true;
  }
  
  return false;
}

var java_f = function (pd) {
  var status = PluginDetect.isMinVersion("java", version_java);
  teststatus.java_version = PluginDetect.getVersion("java", jar_path);
  
  if (status == 1) {
    if (isGoodJava()) SetStatus("java", statusEnum.present, str['version']+" "+teststatus.java_version);
    else SetStatus("java", statusEnum.absent, str['install']+": "+java_install_path);
  }
  else if (status == 0) {
    if (isGoodJava()) {
      if (version_java=="0") SetStatus("java", statusEnum.present, str['unknown ver']);
      else SetStatus("java", statusEnum.old_warn, str['unknown ver req']+" "+version_java+", "+str['install']+": "+java_install_path);
    }
    else SetStatus("java", statusEnum.absent, str['install']+": "+java_install_path);
  }
  else if (status == -0.1) SetStatus("java", statusEnum.old_warn, str['version']+" "+teststatus.java_version+", "+str['required']+" "+version_java+", "+str['install']+": "+java_install_path);
  else SetStatus("java", statusEnum.absent, str['install']+": "+java_install_path);
  teststodo.java = testPlanEnum.done;
}

var java_applet_f = function (pd) {
  var status = pd.isMinVersion("java", version_java, jar_path);
  
  if (status == 1) SetStatus("java_applet", statusEnum.allowed);
  else SetStatus("java_applet", statusEnum.blocked);
  teststodo.java_applet = testPlanEnum.done;
}

function ShowBlock(name) {
/*
  var e = document.getElementById("status-"+name)
  if (e != null) e.innerHTML = statusEnum.unknown.msg;
  var e = document.getElementById("block-"+name)
  if (e != null) e.style.display = "flex";
*/
  $('#status-' + name).removeClass('hide')
  $('#block-' + name).removeClass('hide')
}

function HideBlock(name) {
/*
  var e = document.getElementById("block-"+name)
  if (e != null) e.style.display = "none";
*/  
  $('#block-' + name).addClass('hide')
}

function PlanTest(name) {
  teststodo[name] = testPlanEnum.planned;
  ShowBlock(name);
}

function SetGlobalStatus (state, msg) {
  teststatus.gs = state;
  var el = document.getElementById("status-global");
  if (el != null) {
    /*
    if (msg) el.innerHTML = state.msg + " (" + msg + ")";
    else el.innerHTML = state.msg;
    
    SetStatusClass(el, state);
    */
    var globalMsg = state.msg;
    if (msg) globalMsg = state.msg + " (" + msg + ")";
    setStatusText("global", globalMsg);
    SetStatusClass(el, state);
  }
}

function TestOS() {
  if (navigator.userAgent.indexOf("Win")!=-1) {
    teststatus.OS = OSEnum.windows;
    
    if (window.navigator.userAgent.indexOf("Windows NT 10.0")!= -1) {
      teststatus.OS_version="10";
      teststatus.OS_version_internal = "10.0";
    }
    else if (window.navigator.userAgent.indexOf("Windows NT 6.2") != -1) {
      teststatus.OS_version="8";
      teststatus.OS_version_internal = "6.2";
    }
    else if (window.navigator.userAgent.indexOf("Windows NT 6.1") != -1) {
      teststatus.OS_version="7";
      teststatus.OS_version_internal = "6.1";
    }
    else if (window.navigator.userAgent.indexOf("Windows NT 6.0") != -1) {
      teststatus.OS_version="Vista";
      teststatus.OS_version_internal = "6.0";
    }
    else if (window.navigator.userAgent.indexOf("Windows NT 5.1") != -1) {
      teststatus.OS_version="XP";
      teststatus.OS_version_internal = "5.1";
    }
    else if (window.navigator.userAgent.indexOf("Windows NT 5.0") != -1) {
      teststatus.OS_version="2000";
      teststatus.OS_version_internal = "5.0";
    }
  }
  if (navigator.userAgent.indexOf("Linux")!=-1) teststatus.OS = OSEnum.linux;
  if (navigator.userAgent.indexOf("Mac")!=-1) teststatus.OS = OSEnum.macos;
  //if (navigator.appVersion.indexOf("X11")!=-1) teststatus.OS = OSEnum.unix;?
  
  var osMsg = teststatus.OS.msg;
  if (teststatus.OS_version != "0") osMsg = teststatus.OS.msg + " " + teststatus.OS_version + ""; 
  setStatusText("OS", osMsg);
  
  /*
  if (teststatus.OS_version != "0") document.getElementById("status-OS").innerHTML = teststatus.OS.msg + " " + teststatus.OS_version + "";
  else document.getElementById("status-OS").innerHTML = teststatus.OS.msg;
  */
  
  document.getElementById("status-OS").setAttribute("data-os-type", teststatus.OS.msg);  
  document.getElementById("status-OS").setAttribute("data-os-version", teststatus.OS_version);
  document.getElementById("status-OS").setAttribute("data-os-version-internal", teststatus.OS_version_internal);

  if (teststatus.OS == OSEnum.unknown || (teststatus.OS_version_internal != "0" && !IsHigherVersion(teststatus.OS_version_internal, version_windows_internal)) ) { 
    SetStatusClass(document.getElementById("status-OS"), statusEnum.unsupported);
    SetGlobalStatus(globalStatusEnum.failed);
  }
  else if (version_windows_messages[teststatus.OS_version_internal]) {
    var el = document.getElementById("status-OS");
    var message = version_windows_messages[teststatus.OS_version_internal];
    /*
    el.innerHTML += " " + message.replace("{link}", tls_settings_url);
    SetStatusClass(el, statusEnum.warning);
    */
    message = el.innerHTML + " " + message.replace("{link}", tls_settings_url);
    setStatusText("OS", message);
    SetStatusClass(el, statusEnum.warning);
  }
  else 
  {
    SetStatusClass(document.getElementById("status-OS"), statusEnum.OK);
  }
}

function IsUnsupportedBrowser() {
  if (teststatus.browser == browserEnum.unknown) return true;
  if (teststatus.browser == browserEnum.Opera) return true;
  return false;
}

function TestBrowser() {
  /* Browser type */
  if (PluginDetect.browser.isIE) {
    teststatus.browser = browserEnum.IE;
    teststatus.browser_version = String(PluginDetect.browser.verIE);
  }
  else if (PluginDetect.browser.isGecko) {
    teststatus.browser = browserEnum.Gecko;
    teststatus.browser_version = PluginDetect.browser.verGecko;
  }
  else if (PluginDetect.browser.isSafari) {
    teststatus.browser = browserEnum.Safari;
    teststatus.browser_version = PluginDetect.browser.verSafari;
  }
  else if (PluginDetect.browser.isEdge) {
    teststatus.browser = browserEnum.Edge;
    teststatus.browser_version = PluginDetect.browser.verEdgeHTML;
  }
  else if (PluginDetect.browser.isChrome) {
    if (navigator.userAgent.toLowerCase().indexOf('edge') >= 0) {
      teststatus.browser = browserEnum.Edge;
    }
    else {
      teststatus.browser = browserEnum.Chrome;
    }
    teststatus.browser_version = PluginDetect.browser.verChrome;
  }
  else if (PluginDetect.browser.isOpera) {
    teststatus.browser = browserEnum.Opera;
    teststatus.browser_version = PluginDetect.browser.verOpera;
  }
  if (PluginDetect.browser.isIE) teststatus.browser_version = teststatus.browser_version.replace(new RegExp("\/,\/g"), ".");
  else teststatus.browser_version = teststatus.browser_version.replace(/,/g, ".");
  
  var browserMsg = teststatus.browser.msg;
  if (teststatus.browser_version != null && teststatus.browser_version != "0") browserMsg = teststatus.browser.msg + " " + teststatus.browser_version;
  setStatusText("browser", browserMsg);

  /*
  if (teststatus.browser_version != null && teststatus.browser_version != "0") document.getElementById("status-browser").innerHTML = teststatus.browser.msg + " " + teststatus.browser_version;
  else document.getElementById("status-browser").innerHTML = teststatus.browser.msg;
  */
  
  if (IsUnsupportedBrowser()) {
    SetStatusClass(document.getElementById("status-browser"), statusEnum.failed);
    SetGlobalStatus(globalStatusEnum.failed);
    return;
  }
  
  if (teststatus.browser == browserEnum.IE) {
    if (teststatus.OS != OSEnum.windows) {
      SetStatusClass(document.getElementById("status-browser"), statusEnum.unsupported);
      SetGlobalStatus(globalStatusEnum.failed);
      return;
    }
   
    if (!IsHigherVersion(teststatus.browser_version, version_browser_ie)) {
      SetStatus("browser", statusEnum.old, "<br>"+teststatus.browser.msg+" "+teststatus.browser_version); 
      SetGlobalStatus(globalStatusEnum.failed);
      return;
    }
    
    if (DoPluginTest()) {
      PlanTest("activex");
      PlanTest("activex_installed");
    }
    PlanTest("pdf_adobe");
  }
  else if (teststatus.browser == browserEnum.Gecko) {
    if (!IsHigherVersion(teststatus.browser_version, version_browser_firefox)) {
      SetStatus("browser", statusEnum.old, "<br>"+teststatus.browser.msg+" "+teststatus.browser_version); 
      SetGlobalStatus(globalStatusEnum.failed);
      return;
    }
    
    if (teststatus.OS == OSEnum.windows) {
      if (IsHigherVersion(teststatus.browser_version, version_browser_firefox_fse_windows)) {
        if (DoPluginTest()) {
          PlanTest("chrome_extension");
          PlanTest("signing_extension_app");
        }
      }
      else if (IsHigherVersion(teststatus.browser_version, version_browser_firefox_fse)) {
        if (DoPluginTest()) {
          PlanTest("signing_extension_app");
        }
      }
    }
    else if (teststatus.OS == OSEnum.linux && IsHigherVersion(teststatus.browser_version, version_browser_firefox_fse_linux)) {
      if (DoPluginTest()) {
        PlanTest("chrome_extension");
        PlanTest("signing_extension_app");
      }
    }
    else if (teststatus.OS == OSEnum.windows || teststatus.OS == OSEnum.linux) {
      if (DoPluginTest()) {
        PlanTest("java");
        PlanTest("java_applet");
      }
    }
    else {
      SetStatusClass(document.getElementById("status-browser"), statusEnum.failed);
      SetGlobalStatus(globalStatusEnum.failed);
      return;
    }
    
    PlanTest("pdf_internal");
    PlanTest("pdf_adobe");
  }
  else if (teststatus.browser == browserEnum.Safari) {
    if (teststatus.OS == OSEnum.macos) {
      if (!IsHigherVersion(teststatus.browser_version, version_browser_safari)) {
        SetStatus("browser", statusEnum.old, "<br>"+teststatus.browser.msg+" "+teststatus.browser_version); 
        SetGlobalStatus(globalStatusEnum.failed);
        return;
      }
      
      if (DoPluginTest()) {
        PlanTest("signing_extension_app");

      }

      PlanTest("pdf_internal");
      PlanTest("pdf_adobe");
    }
    else {
      SetStatusClass(document.getElementById("status-browser"), statusEnum.unsupported);
      SetGlobalStatus(globalStatusEnum.failed);
      return;
    }
  }
  else if (teststatus.browser == browserEnum.Chrome) {
    if (!IsHigherVersion(teststatus.browser_version, version_browser_chrome)) {
      SetStatus("browser", statusEnum.old, "<br>"+teststatus.browser.msg+" "+teststatus.browser_version);
      SetGlobalStatus(globalStatusEnum.failed);
      return;
    }
    
    var bv = teststatus.browser_version.substring(0, teststatus.browser_version.indexOf("."));

    if (teststatus.OS == OSEnum.macos) {
      if (bv >= version_chrome_macosx_begin_fse) {
        if (DoPluginTest()) { 
          PlanTest("chrome_extension");
          PlanTest("signing_extension_app");
        }
			}
      else if (bv >= version_chrome_macosx_latest) {
        SetStatusClass(document.getElementById("status-browser"), statusEnum.unsupported);
        SetGlobalStatus(globalStatusEnum.failed);
        return;
      }
      else {
        if (DoPluginTest()) {
          PlanTest("npapi_plugin");
        }
        PlanTest("pdf_adobe");
      }
    }
    else {
      if (bv >= version_chromeext_req) {
        if (DoPluginTest()) {
          PlanTest("chrome_extension");
          PlanTest("signing_extension_app");
        }
      }
      else {
        if (DoPluginTest()) {
          PlanTest("java");
          PlanTest("java_applet");
        }
      }
    }
    
    PlanTest("pdf_internal");
  }
  else if (teststatus.browser == browserEnum.Opera) {
    if (DoPluginTest()) {
      PlanTest("java");
      PlanTest("java_applet");
    }
    PlanTest("pdf_internal");
    PlanTest("pdf_adobe");
  }
  else if (teststatus.browser == browserEnum.Edge) {
    if (teststatus.OS != OSEnum.windows) {
      SetStatusClass(document.getElementById("status-browser"), statusEnum.failed);
      SetGlobalStatus(globalStatusEnum.failed);
      return;
    }  
    if (!IsHigherVersion(teststatus.browser_version, version_browser_edge)) {
      SetStatusClass(document.getElementById("status-browser"), statusEnum.unsupported);
      SetGlobalStatus(globalStatusEnum.failed);
      return;
    }
      
    if (DoPluginTest()) {
      PlanTest("signing_extension_app");
    }
    PlanTest("pdf_internal");
  }

  PlanTest("cookies");
  
  if (DoDateTimeTest()) {
    PlanTest("datetimediff");
  }
  //PlanTest("popup");
  
  SetStatusClass(document.getElementById("status-browser"), statusEnum.OK); 
}

function TestPopup () {
  var popUp = window.open('./popup-page.html', 'Pop-up test', 'width=10, height=10, left=0, top=0, scrollbars, resizable');
  if (popUp == null || typeof(popUp)=='undefined') { 	
	  SetStatus("popup", statusEnum.blocked); 
  } 
  else {
    SetStatus("popup", statusEnum.allowed); 	
	  popUp.close();
  }
}

function parseISO8601(s){
  var re = /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:.(\d+))?(Z|[+-]\d{2})(?::(\d{2}))?/,
  d = s.match(re);
  if( !d ) return null;
  for( var i in d ) d[i] = ~~d[i];
  var mul = 1;
  if (d[8] > 0) {
    mul = -1;
  }
  else {
    d[8] = -d[8];
  }
  return new Date(Date.UTC(d[1], d[2] - 1, d[3], d[4], d[5], d[6], d[7]) + mul * (d[8] * 60 + d[9]) * 60000);
}

var DatetimeDiffxmlhttp = new XMLHttpRequest();

var DatetimeDiffReceive = function() {

  if (DatetimeDiffxmlhttp.readyState==XMLHttpRequest.DONE) {
    
    if (DatetimeDiffxmlhttp.status==200) {
      var starttime = new Date();
      var d = DatetimeDiffxmlhttp.responseText;
      if (d != null) {
        var sdt = new Date(d);
        if (isNaN(sdt)) {
          sdt = parseISO8601(d);
        }
      
        if (isNaN(sdt) || sdt == null) SetStatus("datetimediff", statusEnum.cannotcheck);
        else {
          var cms = starttime.getTime();
          var sms = sdt.getTime();
        
          var tdiff = Math.abs(cms-sms);
      
          if (tdiff < 90000) SetStatus("datetimediff", statusEnum.OK);
          else SetStatus("datetimediff", statusEnum.sync_error);
        }
      }
      else SetStatus("datetimediff", statusEnum.cannotcheck);
    } else {
      SetStatus("datetimediff", statusEnum.cannotcheck);      
    }
    teststodo.datetimediff = testPlanEnum.done;
  }
}
    
function TestDatetimeDiff() {
  DatetimeDiffxmlhttp.onreadystatechange = DatetimeDiffReceive;
  DatetimeDiffxmlhttp.open("GET", datetime_url, true);
  DatetimeDiffxmlhttp.send();
  return;
}

function TestDone(name) {
  if (teststodo[name] == testPlanEnum.planned) return false;
  else return true;
}

function AllTestsDone() {
  if (!TestDone("java")) return false;
  if (!TestDone("java_applet")) return false;
  if (!TestDone("activex")) return false;
  if (!TestDone("activex_installed")) return false;
  if (!TestDone("pdf_adobe")) return false;
  if (!TestDone("pdf_internal")) return false;
  if (!TestDone("cookies")) return false;
  if (!TestDone("popup")) return false;
  if (!TestDone("npapi_plugin")) return false;
  if (!TestDone("datetimediff")) return false;
  if (!TestDone("chrome_extension")) return false;
  if (!TestDone("signing_extension_app")) return false;
  
  return true;
}

function EvaluateTest(name) {
  if (teststodo[name] == testPlanEnum.done) {
    if (teststatus[name].value == statusEnum.refresh.value) {
      if (teststatus.gs != globalStatusEnum.failed && teststatus.gs != globalStatusEnum.warning) teststatus.gs = globalStatusEnum.refresh;
    } 
    else if (teststatus[name].value >= 20) { /* from enum */ }
    else if (teststatus[name].value >= 10) {
      if (teststatus.gs != globalStatusEnum.failed) teststatus.gs = globalStatusEnum.warning; 
    }
    else {
      teststatus.gs = globalStatusEnum.failed;
    }
  }
}

function EvaluateGlobalStatusOnce() {
  if (!AllTestsDone()) return;

  teststatus.gs = globalStatusEnum.passed;
  
  EvaluateTest("java");
  EvaluateTest("java_applet");
  EvaluateTest("activex");
  EvaluateTest("activex_installed");
  EvaluateTest("cookies");
  //EvaluateTest("popup");
  EvaluateTest("npapi_plugin");
  EvaluateTest("datetimediff");
  EvaluateTest("chrome_extension");
  EvaluateTest("signing_extension_app");
  
  /*if (teststodo["pdf_adobe"] && teststodo["pdf_internal"]) {
    if (teststatus["pdf_adobe"].value < 10 && teststatus["pdf_internal"].value < 10) teststatus.gs = globalStatusEnum.failed;
  }
  else if (teststodo["pdf_adobe"]) {
    if (teststatus["pdf_adobe"].value < 10) teststatus.gs = globalStatusEnum.failed;
  }
  else if (teststodo["pdf_internal"]) {
    if (teststatus["pdf_internal"].value < 10) teststatus.gs = globalStatusEnum.failed;
  }*/
  
  SetGlobalStatus(teststatus.gs, null);
}

function EvaluateGlobalStatus() {
  if (!AllTestsDone()) {
    if(teststatus["signing_extension_app"] == statusEnum.empty){
        SetGlobalStatus(globalStatusEnum.waiting, null);
    } else if (teststatus["signing_extension_app"] ==  statusEnum.no_test_case){
        SetGlobalStatus(globalStatusEnum.waiting, null);
    } else{
        SetGlobalStatus(globalStatusEnum.running, null);
    } 
    
    window.setTimeout(EvaluateGlobalStatus, 1000);
    return;

  }
  
  EvaluateGlobalStatusOnce();
}

function TestJApplet() {
  var applet = document.getElementById('WebFormFiller');
  applet.style.display="block";
  if (applet != null) {
    var testIsActive = applet.isActive;
    if (applet.isActive && applet.isActive()) {
      SetStatus("java_applet", statusEnum.allowed);
      teststodo.java_applet = testPlanEnum.done;
      applet.style.visibility="hidden";
      EvaluateGlobalStatus();
      return;
    }
  }
  applet.style.visibility="visible";
  SetStatus("java_applet", statusEnum.blocked);
  teststodo.java_applet = testPlanEnum.done;
  return;
}

var ti;

function AddJApplet() {
  var e = document.getElementById("jatest");
  
  if (e != null) {
    var obj = document.createElement("object");
    var par_cb = document.createElement("param");
    var par_ms = document.createElement("param");
    var par_jh = document.createElement("param");
    
    if (obj && par_cb && par_ms && par_jh) {
      obj.setAttribute("style", "display:none;");
      obj.setAttribute("type", "application/x-java-applet");
      obj.setAttribute("classid", "java:cz.software602.webformfiller.WebFormFiller");
      obj.setAttribute("id", "WebFormFiller");
      obj.setAttribute("name", "WebFormFiller");
      obj.setAttribute("width", "100");
      obj.setAttribute("height", "100");
      obj.setAttribute("mayscript", "true");
      obj.setAttribute("alt", str['applet need java']);

      par_cb.setAttribute("name", "codebase");
      par_cb.setAttribute("value", "./");

      par_ms.setAttribute("name", "mayscript");
      par_ms.setAttribute("value", "true");

      par_jh.setAttribute("name", "jnlp_href");
      par_jh.setAttribute("value", jnlp_path);
  
      obj.appendChild(par_cb);
      obj.appendChild(par_ms);
      obj.appendChild(par_jh);

      e.appendChild(obj);
    }
  }
  
}

function PlanJATest() {
  AddJApplet();
  ti = setInterval(TestJApplet, 100);
}

function StopJATest() {
  clearInterval(ti);
}

function SetMobileStatus(name, state, msg) {
  mobileteststatus[name] = state;
  var el = document.getElementById("status-"+name);
  if (el != null) {
    /*
    if (msg) el.innerHTML = state.msg + " (" + msg + ")";
    else el.innerHTML = state.msg;
    /*/
    var statusMsg = state.msg;
    if (msg) statusMsg = state.msg + " (" + msg + ")";
    
    var iconClass = getMobileStatusIconClass(state);

    log("SetMobileStatus " + el.id + " - statusMsg: " + statusMsg + ", iconClass: " + iconClass);
    
    createStatusSpan(el, iconClass, statusMsg);
    //*/
  }
}

function getMobileStatusIconClass(state) {
  if (state.value <= 1) return "search";
  else if (state.value == 10) return "info";
  else if (state.value == 11) return "check";
  else if (state.value == 12) return "close";
  else return "info";
}

var metroFAM = false;
var metroFAM_version = 0;

function IAmFAM(version) { //funkce je volana z Win FAMu
  metroFAM = true;
  metroFAM_version = version;
}

function wf_FormSignerCallback(version) {
  metroFAM = true;
  metroFAM_version = version;
  
  ShowBlock("fam");
  SetMobileStatus("fam", mobileStatusEnum.famrunning, null);
  HideBlock("mobile");
  ShowBlock("global");
  SetGlobalStatus(globalStatusEnum.passed, null);
}

function FAMTestEnd() { //funkce je volana z Win FAMu
  if (!metroFAM) {
    SetMobileStatus("fam", mobileStatusEnum.nofam, null);
    SetMobileStatus("mobile", mobileStatusEnum.usefam, null);
  }
  return;
}

var IsFAMrun = false;
  
function IsFAM() {
  if (navigator.userAgent.toLowerCase().indexOf('formapps mobile') != -1) return 1; //povodne 'formsigner' teraz 'formapps mobile'
  if (!metroFAM && window.external && ('notify' in window.external)) {
    setTimeout(FAMTestEnd, 1500);
    setTimeout(function() { window.external.notify(":formsigner:wf_FormSignerCallback"); }, 1);
    return 0;
  }
  if (metroFAM) return 1;
  return -1;
}

/* Google Chrome extension test */
var ChromeExtension = {};
ChromeExtension.ListenerRegistered = false;
ChromeExtension._IsAvailable = null;
ChromeExtension._IsAvailableApp = null;
ChromeExtension._AppVersion = "";
ChromeExtension._ExtVersion = "";
ChromeExtension.ID = "ilfoopambfaclfjmpiaijnccgcmbeigi"; //zaregistrovane v Google Store
ChromeExtension._FinishInitializationCallback = null;
ChromeExtension.AppVersionTimer = 0;
ChromeExtension.AppVersionTimerLimit = 10000; //8.1.16 #6916 zvetseno ze 3 sekund na 10
ChromeExtension.AppVersionTimerWizzardLimit = 30000; //3.3.16 #7405 v dobe instalace pres wizzard povoleno 30 sekund
ChromeExtension.CheckAppTimer = 0;
ChromeExtension.CheckAppTimerLimit = 7000; //8.1.16 kvuli #6916 radsi zvetseno i zde ze 3 sekund na 5  //#10171 na 7 sekund
ChromeExtension.PackageId = 0;
 
ChromeExtension.Init = function(finishInitializationCallback) {
  if (!ChromeExtension.ListenerRegistered) {
    window.addEventListener('message', ChromeExtension.OnMessage, false); //registrace k html5 PostMessage
    ChromeExtension.ListenerRegistered = true;
  }
  ChromeExtension._FinishInitializationCallback = finishInitializationCallback;
  if (ChromeExtension._IsAvailable == null) {
    var $WebExtension = document.getElementById("wf_fas_extension"); //div tam vklada sama extension
    if ($WebExtension) { //#10855 17.1.17 novy zpusob detekce pres vlozeny div, rovnou s cislem verze
      ChromeExtension._IsAvailable = true;
      var extVersion = $WebExtension.getAttribute("data-extversion");
      //alert("Extension detekována, verze " + extVersion);
      if (extVersion) {
        ChromeExtension._ExtVersion = extVersion;
      }
      else {
        //ChromeExtension.InitExt();
      }
      ChromeExtension.InitApp(false);
    }
    else {
      if (teststatus.browser == browserEnum.Gecko) { //#10855 17.1.17
        ChromeExtension._IsAvailable = false;
        ChromeExtension.FinishInitializationCallback(null);
      }
      else { //stara extension pro Chrome, detekovana pres obrazek - radsi ponechano kvuli kompatibilite
        var img = new Image();
        imgSrc = "logoS_chrome.png";
        img.onload = function()  { ChromeExtension._IsAvailable = true; ChromeExtension.InitExt(); ChromeExtension.InitApp(false); };
        img.onerror = function() { ChromeExtension._IsAvailable = false; ChromeExtension.FinishInitializationCallback(null); };
        img.src = "chrome-extension://" + ChromeExtension.ID + "/" + imgSrc;
      }
    }
  }
}


ChromeExtension.FinishInitializationCallback = function(state) {
  if (ChromeExtension._FinishInitializationCallback && ((state == null) || ((ChromeExtension._AppVersion != "") && (ChromeExtension._ExtVersion != ""))))  {
    ChromeExtension._FinishInitializationCallback();
  }
}

ChromeExtension.IsAvailable = function() { return ChromeExtension._IsAvailable; }
ChromeExtension.InitExt = function() { ChromeExtension.ExtVersion(); }
ChromeExtension.InitApp = function() {
  if (ChromeExtension.IsAvailable() == true) {
    ChromeExtension.AppVersion();
  }
  else {
    ChromeExtension.FinishInitializationCallback(null);
  }
}

ChromeExtension.IsAvailableApp = function() { return ChromeExtension._IsAvailableApp; }
ChromeExtension.NeedUpgrade = function() { return false; }
ChromeExtension.AppVersionTimerExpired = function() {}
ChromeExtension.ClearAppVersionTimer = function() {
  clearTimeout(ChromeExtension.AppVersionTimer);
  ChromeExtension.AppVersionTimer = 0;
}

ChromeExtension.AppVersion = function() {
  ChromeExtension.AppVersionTimer = setTimeout(ChromeExtension.AppVersionTimerExpired, ChromeExtension.AppVersionTimerLimit);
  ChromeExtension.Post('app-version');
}

ChromeExtension.ExtVersion = function() { ChromeExtension.Post('ext-version'); }
ChromeExtension.Task = function(packageurl, lng, debug) {
  var xmlRequestForTask = '<request><task>' + packageurl + '</task>';
  if (lng != null) xmlRequestForTask += '<lng>' + lng + '</lng>';
  if (debug != null) xmlRequestForTask += '<debug>' + debug + '</debug>';
  xmlRequestForTask += '</request>';
  ChromeExtension.Post(xmlRequestForTask);
}

 ChromeExtension.CUS2Task = function(xmlForTask, checkapp, package_id) {
  if (checkapp) {
    ChromeExtension.CheckAppTimer = setTimeout(ChromeExtension.CheckAppTimerExpired, ChromeExtension.CheckAppTimerLimit);
  }
  ChromeExtension.PackageId = package_id;
  ChromeExtension.Post(xmlForTask);
}

ChromeExtension.CheckAppTimerExpired = function() {
  ChromeExtension.CheckAppTimer = 0;
  ChromeExtension.FinishInitializationCallback();
}

ChromeExtension.ClearCheckAppTimer = function() {
  clearTimeout(ChromeExtension.CheckAppTimer);
  ChromeExtension.CheckAppTimer = 0;
}

ChromeExtension.SecurityProblem = function(taskIsCheckApp, timerExpired) {
  ChromeExtension.FinishInitializationCallback(true);
}

ChromeExtension.Post = function(request) { 
  var msg = {};
  msg.sender = "fas_formpage";
  msg.request = request;
  window.postMessage(msg, '*');
} 

ChromeExtension.OnMessage = function(event) { 
  if (event.source != window) return;
  var msg = event.data;
  if (msg.sender != 'chrome_native_extension') return;
  if (!msg.response) return;

  switch (msg.response) {
    case 'task': {
        var appoutput = {};
        appoutput.xmlResponse = msg.result;
        appoutput.result = "cancel";
        var appoutput = wf_packageResponseToOutput(appoutput);
        if ((appoutput.xmlResponse != null) && (appoutput.xmlResponse.length > 0)) {
          var attribs = new Array();
          attribs[0] = { name: "result", value: appoutput.result };
          doWaitFor("wscall", true, attribs, appoutput.xmlResponse);
        }
      }
      break;
    case 'app-version':
      if (msg.result == "notinstalled") {
        ChromeExtension._IsAvailableApp = false;
        ChromeExtension._AppVersion = "notinstalled"; //dulezite! Ovlivnuje volani callbacku
      }
      else {
        ChromeExtension._IsAvailableApp = true;
        ChromeExtension._AppVersion = msg.result; //vraci cislo verze
      }
      ChromeExtension.FinishInitializationCallback(true);
      break;
    case 'ext-version':
      ChromeExtension._ExtVersion = msg.result; //vraci cislo verze
      ChromeExtension.FinishInitializationCallback(false);
      break;
    case 'stop':
      break;
  }
}

var TestChromeExtensionEvaluate = function () {
  if (ChromeExtension.IsAvailable()) {
    if (version_chrome_extension != "0" && !IsHigherVersion(ChromeExtension._ExtVersion, version_chrome_extension)) {
      if (teststatus.browser == browserEnum.Gecko) {
        SetStatus("chrome_extension", statusEnum.old, ChromeExtension._ExtVersion + "" + firefox_extension_install_path);
      }
      else {
        SetStatus("chrome_extension", statusEnum.old, ChromeExtension._ExtVersion + "" + chrome_extension_install_path);
      }
      teststodo.chrome_extension = testPlanEnum.done;
      
      SetStatus("signing_extension_app", statusEnum.cannotcheck, null);
      teststodo.signing_extension_app = testPlanEnum.done;
      return;
    }
    else {
      SetStatus("chrome_extension", statusEnum.version, ChromeExtension._ExtVersion);
      teststodo.chrome_extension = testPlanEnum.done;
    }
  }
  else {
    if (teststatus.browser == browserEnum.Gecko) {
      SetStatus("chrome_extension", statusEnum.absent, firefox_extension_install_path);
    }
    else {
      SetStatus("chrome_extension", statusEnum.absent, chrome_extension_install_path);
    }
    SetStatus("signing_extension_app", statusEnum.cannotcheck, null);
    teststodo.chrome_extension = testPlanEnum.done;
    teststodo.signing_extension_app = testPlanEnum.done;
    return; 
  }
    
  if (ChromeExtension.IsAvailableApp()) {
    if (teststatus.OS == OSEnum.windows) {
      if (version_FSE_win != "0" && !IsHigherVersion(ChromeExtension._AppVersion, version_FSE_win)) {
        var inst_path = "";
        inst_path = signing_extension_app_install_path_win;
        SetStatus("signing_extension_app", statusEnum.old, ChromeExtension._AppVersion + " " + inst_path);
        teststodo.signing_extension_app = testPlanEnum.done;
      }
      else {
        SetStatus("signing_extension_app", statusEnum.version, ChromeExtension._AppVersion);
        teststodo.signing_extension_app = testPlanEnum.done;
      }
    }
    else if (teststatus.OS == OSEnum.macos) {
      if (version_FSE_mac != "0" && !IsHigherVersion(ChromeExtension._AppVersion, version_FSE_mac)) {
        var inst_path = "";
        inst_path = signing_extension_app_install_path_mac;
      
        SetStatus("signing_extension_app", statusEnum.old, ChromeExtension._AppVersion + " " + inst_path);
        teststodo.signing_extension_app = testPlanEnum.done;
      }
      else {
        SetStatus("signing_extension_app", statusEnum.version, ChromeExtension._AppVersion);
        teststodo.signing_extension_app = testPlanEnum.done;
      }
    }
    else if (teststatus.OS == OSEnum.linux) {
      if (version_FSE_linux != "0" && !IsHigherVersion(ChromeExtension._AppVersion, version_FSE_linux)) {
        var inst_path = "";
        inst_path = signing_extension_app_install_path_linux;
      
        SetStatus("signing_extension_app", statusEnum.old, ChromeExtension._AppVersion + " " + inst_path);
        teststodo.signing_extension_app = testPlanEnum.done;
      }
      else {
        SetStatus("signing_extension_app", statusEnum.version, ChromeExtension._AppVersion);
        teststodo.signing_extension_app = testPlanEnum.done;
      }
    }
  }
  else {
    var inst_path = "";
      
    if (teststatus.OS == OSEnum.windows) inst_path = signing_extension_app_install_path_win;
    else if (teststatus.OS == OSEnum.macos) inst_path = signing_extension_app_install_path_mac;
    else if (teststatus.OS == OSEnum.linux) inst_path = signing_extension_app_install_path_linux;
      
    SetStatus("signing_extension_app", statusEnum.absent, inst_path);
    teststodo.signing_extension_app = testPlanEnum.done;
  }
  
  EvaluateGlobalStatusOnce();
}

function ReRunChromeExtTest () {
  ChromeExtension.InitApp();
  if (teststatus["chrome_extension"] != statusEnum.present) return;
  if (teststatus["signing_extension_app"] != statusEnum.present) window.setTimeout(ReRunChromeExtTest, 1000);
}

function RunChromeExtTest() {
  ChromeExtension.Init(TestChromeExtensionEvaluate);
  if (teststatus["signing_extension_app"] != statusEnum.present) window.setTimeout(ReRunChromeExtTest, 1000);
}


var FSEcheckxmlhttp = new XMLHttpRequest();
var FSEsid = null;
var FSEcount = 0;
var FSEti;
var FSEtaskb64 = "";

var FSEcheckReceive = function() {
  if (FSEcheckxmlhttp.readyState==4 && FSEcheckxmlhttp.status==200) {
    
    var d = FSEcheckxmlhttp.responseText;
    if (d != null) {
      if (d == "OK") {
        SetStatus("signing_extension_app", statusEnum.present);
        $(".settings").css("display", "none");
        teststodo.signing_extension_app = testPlanEnum.done;
        clearInterval(FSEti);
      }
      else if (d == "FAILED") {
        SetStatus("signing_extension_app", statusEnum.absent);
        $(".settings").css("display", "none");
        teststodo.signing_extension_app = testPlanEnum.done;
        clearInterval(FSEti);
      }
    }
    else {
      SetStatus("signing_extension_app", statusEnum.absent);
      $(".settings").css("display", "none");
      teststodo.signing_extension_app = testPlanEnum.done;
    }
  }
}

function ReRunFSEcheck() {
  teststodo.signing_extension_app = testPlanEnum.planned;
  SetStatus("signing_extension_app", statusEnum.inprogress);
  FSEopenWindow();
  EvaluateGlobalStatus();  
}

function FSEcheck() {
  FSEcount--;
  if (FSEcount <= 0) {
    if (teststatus.OS == OSEnum.windows) inst_path = signing_extension_app_install_path_win;
    else if (teststatus.OS == OSEnum.macos) inst_path = signing_extension_app_install_path_mac;
        
    SetStatus("signing_extension_app", statusEnum.absent, inst_path);
    $(".settings").css("display", "none");
    
   teststodo.signing_extension_app = testPlanEnum.done;
    clearInterval(FSEti);
    return;
  }
  
  FSEcheckxmlhttp.onreadystatechange = FSEcheckReceive;
  var lx = 0;
  if (teststatus.OS == OSEnum.linux) lx = 1;
  FSEcheckxmlhttp.open("GET", fsecheck_url+"?getstate="+FSEsid+"&lx="+lx, true);
  FSEcheckxmlhttp.timeout = 500;
  FSEcheckxmlhttp.send();
}

function FSEopenWindow() {
  SetStatus("signing_extension_app", statusEnum.inprogress);
  $(".settings").css("display", "block");

  FSEcount = 10;
  
	var e = document.getElementById("jatest");
	var ifr = document.getElementById("jatestifr");
	
  if (e != null) {
    
		if (!ifr) {
		  var ifr = document.createElement("iframe");
		  ifr.id = "jatestifr";
			ifr.style.display = "none";
			ifr.height = 0;
			ifr.width = 0;
      e.appendChild(ifr);
    }
    
    if (ifr) {
      ifr.src = "formapps://"+FSEtaskb64;
		}
  }
  FSEti = setInterval(FSEcheck, 1000);
  //var win = window.open("formapps://"+FSEtaskb64, "_blank");
  //win.close();
}

var FSEgetsidReceive = function() {
  if (FSEcheckxmlhttp.readyState==4) {
	  if (FSEcheckxmlhttp.status==200) {
    
      var d = FSEcheckxmlhttp.responseText;
      if (d != null) {
        var arr = d.split('\n');         
        
        if (arr.length >= 2) {
            FSEsid = arr[0];
            var FSEtask = arr[1];
            var cok = "";
            if (arr.length == 3) cok = arr[2];
          
            if (cok != "") {
              cok = "<acc>"+cok+"</acc>";
            }
        
            var ver = "";
            if (teststatus.OS == OSEnum.windows) ver = "<version>"+version_FSE_win+"</version>";
            else if (teststatus.OS == OSEnum.macos) ver = "<version>"+version_FSE_mac+"</version>";
        
          var task = "<task><form></form><useragent></useragent>"+ver+"<package-url><fas>"+fsecheck_url+"</fas>"+cok+"<crid>"+FSEtask+"</crid></package-url><lang>cs</lang></task>";
          FSEtaskb64 = string2Base64string(task);
        
            SetStatus("signing_extension_app", statusEnum.empty, "<button class=\"test-button\" onclick=\"FSEopenWindow();\">"+str['click to test']+"</button>");
            SetGlobalStatus(globalStatusEnum.waiting, null);
        }
        else {
          SetStatus("signing_extension_app", statusEnum.no_test_case);
          teststodo.signing_extension_app = testPlanEnum.done;
        }
      }
      else {
        SetStatus("signing_extension_app", statusEnum.no_test_case);
        teststodo.signing_extension_app = testPlanEnum.done;
      }
    }
    else {
      SetStatus("signing_extension_app", statusEnum.no_test_case);
      teststodo.signing_extension_app = testPlanEnum.done;
  	}
  }
}

var FSEsessions_xmlhttp = new XMLHttpRequest();
var FSEGetSessionsReceive = function() {
  if (FSEsessions_xmlhttp.readyState==4) {
	  FSEcheckxmlhttp.onreadystatechange = FSEgetsidReceive;
    FSEcheckxmlhttp.open("GET", fsecheck_url+"?getid=true", true);
    FSEcheckxmlhttp.timeout = 2000;
    FSEcheckxmlhttp.send();
  }
}

function RunFSETest() {
  if (fsesession_url != null && fsesession_url.length > 0) {
    FSEsessions_xmlhttp.onreadystatechange = FSEGetSessionsReceive;
    FSEsessions_xmlhttp.open("GET", fsesession_url, true);
    FSEsessions_xmlhttp.timeout = 2000;
    FSEsessions_xmlhttp.send();
  }
  else {
    FSEcheckxmlhttp.onreadystatechange = FSEgetsidReceive;
    FSEcheckxmlhttp.open("GET", fsecheck_url+"?getid=true", true);
    FSEcheckxmlhttp.timeout = 2000;
    FSEcheckxmlhttp.send();
  }
}

function RunTest() {
  /* JavaScript running? */
  /*
  document.getElementById("status-js").innerHTML = str['JS OK'];
  SetStatusClass(document.getElementById("status-js"), statusEnum.OK);
  */
  setStatusText("js", str['JS OK']);
  SetStatusClass(document.getElementById("status-js"), statusEnum.OK);

  if (IsMobile()) {
    SetGlobalStatus(globalStatusEnum.running, null);
    ShowBlock("mobile");
    SetMobileStatus("mobile", mobileStatusEnum.inprogress, null);
    
    var isfam = IsFAM();
    if (isfam == 1) {
      ShowBlock("fam");
      SetMobileStatus("fam", mobileStatusEnum.famrunning, null);
      HideBlock("mobile");
      ShowBlock("global");
      SetGlobalStatus(globalStatusEnum.passed, null);
      return;
    }
    else if (isfam == -1) {
      SetMobileStatus("fam", mobileStatusEnum.nofam, null);
      SetMobileStatus("mobile", mobileStatusEnum.usefam, null);
      return;
    }
    
    return;
  }
  
  ShowBlock("global");
  SetGlobalStatus(globalStatusEnum.running, null);
  PluginDetect.getVersion(".");
  
  ShowBlock("line");
  
  ShowBlock("OS");
  TestOS();
  if (teststatus.gs == globalStatusEnum.failed) return;
  
  ShowBlock("browser");
  TestBrowser();
  if (teststatus.gs == globalStatusEnum.failed) return;
  
  if (teststodo.datetimediff == testPlanEnum.planned) {
    SetStatus("datetimediff", statusEnum.inprogress);
    
    TestDatetimeDiff();
  }
  
  /* JAVA */
  if (teststodo.java == testPlanEnum.planned) {
    SetStatus("java", statusEnum.inprogress);
    var status = 0;
    if (teststodo.java_applet != testPlanEnum.planned) status = PluginDetect.onDetectionDone("java", java_f, jar_path, [3, 0, 0]); 
    else status = PluginDetect.onDetectionDone("java", java_f);
    if (status == -1) {
      SetStatus("java", statusEnum.fail);
      teststodo.java = testPlanEnum.done;
    }
  }
  
  /* JAVA applet */
  if (teststodo.java_applet == testPlanEnum.planned) {
    SetStatus("java_applet", statusEnum.inprogress);
    
    if (teststatus["java"].value < 10) {
      SetStatus("java_applet", statusEnum.absent);
      teststodo.java_applet = testPlanEnum.done;
    }
    else /*if (teststatus.browser == browserEnum.Chrome || teststatus.browser == browserEnum.Opera)*/ {
      window.setTimeout(PlanJATest, 10);
    }
    /*else {
      var status = PluginDetect.onDetectionDone("java", java_applet_f, jar_path, [3, 0, 2]);
      if (status == -1) {
        SetStatus("java_applet", statusEnum.fail);
        teststodo.java_applet = testPlanEnum.done;
      }
    }*/
  }
  
  /* ActiveX */
  if (teststodo.activex == testPlanEnum.planned) {
    SetStatus("activex", statusEnum.inprogress);
    if (PluginDetect.browser.ActiveXEnabled) SetStatus("activex", statusEnum.allowed);
    else SetStatus("activex", statusEnum.not_allowed);
    teststodo.activex = testPlanEnum.done;
  }
  
  /* ActiveX plugin installed */
  if (teststodo.activex_installed == testPlanEnum.planned) {
    SetStatus("activex_installed", statusEnum.inprogress);
    
    var bitver = (navigator.userAgent.toLowerCase().indexOf('win64')!=-1)?"64":"32";
    var version = PluginDetect.getVersion("activex", activex_clsid, [9999,9999,9999,9999]);
    var status = PluginDetect.isMinVersion("activex", version_activex, activex_clsid)    
    
    if (status == 1) SetStatus("activex_installed", statusEnum.version, version);
    else if (status == 0) {
      if (version_activex == "0") SetStatus("activex_installed", statusEnum.present);
      else SetStatus("activex_installed", statusEnum.unknown, str['unknown ver']);
    }
    else if (status == 0.1) SetStatus("activex_installed", statusEnum.old_warn, version + "<a class=\"with-icon float-right\" href=\"/web/portal/formapps-navod-"+bitver+"\"><span>Instalovat</span></a>");
    else SetStatus("activex_installed", statusEnum.absent, "<a class=\"with-icon float-right\" href=\"/web/portal/formapps-navod-"+bitver+"\"><span>Instalovat</span></a>");
    teststodo.activex_installed = testPlanEnum.done;
  }
  
  /* PDF */
  if (teststodo.pdf_adobe == testPlanEnum.planned) {
    SetStatus("pdf_adobe", statusEnum.inprogress);
    var status = PluginDetect.isMinVersion("AdobeReader", version_adobe);
    teststatus.pdf_adobe_version = PluginDetect.getVersion("AdobeReader");
    
    if (status == 1) SetStatus("pdf_adobe", statusEnum.version, teststatus.pdf_adobe_version);
    else if (status == 0) {
      if (version_adobe=="0") SetStatus("pdf_adobe", statusEnum.present);
      else SetStatus("pdf_adobe", statusEnum.old_warn, teststatus.pdf_adobe_version);
    }      
    else if (status == -0.1) SetStatus("pdf_adobe", statusEnum.old_warn, teststatus.pdf_adobe_version+" "+ aread_install_path);
    else SetStatus("pdf_adobe", statusEnum.absent, aread_install_path);    
    teststodo.pdf_adobe = testPlanEnum.done;
  }
  
  if (teststodo.pdf_internal == testPlanEnum.planned) {
    SetStatus("pdf_internal", statusEnum.inprogress);
    var status = PluginDetect.onDetectionDone('PDFReader', pdfjs_f, dummy_file_url);
    if (status == -1) {
      SetStatus("pdf_internal", statusEnum.absent);
      teststodo.pdf_internal = testPlanEnum.done;
    }
  }
  
  /* support cookies */
  if (teststodo.cookies == testPlanEnum.planned) {
    SetStatus("cookies", statusEnum.inprogress);
    document.cookie = "ctest=val";
    var c = document.cookie;
    if (c.indexOf("ctest=val") != -1) SetStatus("cookies", statusEnum.allowed);
    else SetStatus("cookies", statusEnum.not_allowed);
    teststodo.cookies = testPlanEnum.done;
  }
  
  /* pop-up blocking */
  if (teststodo.popup == testPlanEnum.planned) {
    SetStatus("popup", statusEnum.inprogress);
    TestPopup();
    teststodo.popup = testPlanEnum.done;
  }
  
  /* NPApi plugin - mac (safari, chrome) */
  if (teststodo.npapi_plugin == testPlanEnum.planned) {
    SetStatus("npapi_plugin", statusEnum.inprogress);
    
    var npapi = navigator.plugins["FormApps Plugin"];
    if (npapi == null) {
      if (teststatus.OS==OSEnum.macos) SetStatus("npapi_plugin", statusEnum.absent, npapi_mac_install_path);
			else SetStatus("npapi_plugin", statusEnum.absent);
		}
    else {
        if (version_npapi.length > 0 && version_npapi != "0") {
            npver = npapi.version;
            if (npver === undefined) {
              if (npapi.description) {
                var splitArray = npapi.description.split(' ');
                if (splitArray.length > 1) {
                  npver = splitArray[splitArray.length-1];
                }
              }
            }

            if (npver == undefined) {
                if (teststatus.OS==OSEnum.macos) SetStatus("npapi_plugin", statusEnum.absent, npapi_mac_install_path);
                else SetStatus("npapi_plugin", statusEnum.absent);
            }
            else {
                if (IsHigherVersion(npver, version_npapi)) SetStatus("npapi_plugin", statusEnum.present);
                else {
                    if (teststatus.OS==OSEnum.macos) SetStatus("npapi_plugin", statusEnum.old_warn, npapi_mac_install_path);
                    else SetStatus("npapi_plugin", statusEnum.old);
                }
            }
	}
	else {
            SetStatus("npapi_plugin", statusEnum.present);
	}
    }
    
    teststodo.npapi_plugin = testPlanEnum.done;
  }
  
  /* Chrome extension and signing application */
  if (teststodo.chrome_extension == testPlanEnum.planned) {
    SetStatus("chrome_extension", statusEnum.inprogress);
    SetStatus("signing_extension_app", statusEnum.inprogress);
    
    RunChromeExtTest();
  }
  
  /* only signing application - for FF and Edge */
  if (teststodo.chrome_extension != testPlanEnum.planned && teststodo.signing_extension_app == testPlanEnum.planned) {
        RunFSETest();
  }

  EvaluateGlobalStatus();
}