(function(m,g){var A="0.7.9",C="",B="?",t="function",i="undefined",e="object",r="string",f="major",v="model",h="name",p="type",l="vendor",x="version",a="architecture",j="console",s="mobile",y="tablet",o="smarttv",z="wearable",u="embedded";var b={extend:function(D,F){for(var E in F){if("browser cpu device engine os".indexOf(E)!==-1&&F[E].length%2===0){D[E]=F[E].concat(D[E])}}return D},has:function(E,D){if(typeof E==="string"){return D.toLowerCase().indexOf(E.toLowerCase())!==-1}else{return false}},lowerize:function(D){return D.toLowerCase()},major:function(D){return typeof(D)===r?D.split(".")[0]:g}};var w={rgx:function(){var N,H=0,G,F,E,D,I,J,K=arguments;while(H<K.length&&!I){var M=K[H],L=K[H+1];if(typeof N===i){N={};for(E in L){D=L[E];if(typeof D===e){N[D[0]]=g}else{N[D]=g}}}G=F=0;while(G<M.length&&!I){I=M[G++].exec(this.getUA());if(!!I){for(E=0;E<L.length;E++){J=I[++F];D=L[E];if(typeof D===e&&D.length>0){if(D.length==2){if(typeof D[1]==t){N[D[0]]=D[1].call(this,J)}else{N[D[0]]=D[1]}}else{if(D.length==3){if(typeof D[1]===t&&!(D[1].exec&&D[1].test)){N[D[0]]=J?D[1].call(this,J,D[2]):g}else{N[D[0]]=J?J.replace(D[1],D[2]):g}}else{if(D.length==4){N[D[0]]=J?D[3].call(this,J.replace(D[1],D[2])):g}}}}else{N[D]=J?J:g}}}}H+=2}return N},str:function(G,F){for(var E in F){if(typeof F[E]===e&&F[E].length>0){for(var D=0;D<F[E].length;D++){if(b.has(F[E][D],G)){return(E===B)?g:E}}}else{if(b.has(F[E],G)){return(E===B)?g:E}}}return G}};var q={browser:{oldsafari:{version:{"1.0":"/8","1.2":"/1","1.3":"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0","2000":"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0","7":"NT 6.1","8":"NT 6.2","8.1":"NT 6.3","10":["NT 6.4","NT 10.0"],RT:"ARM"}}}};var n={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[h,x],[/\s(opr)\/([\w\.]+)/i],[[h,"Opera"],x],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i,/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]+)*/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium)\/([\w\.-]+)/i],[h,x],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[[h,"IE"],x],[/(edge)\/((\d+)?[\w\.]+)/i],[h,x],[/(yabrowser)\/([\w\.]+)/i],[[h,"Yandex"],x],[/(comodo_dragon)\/([\w\.]+)/i],[[h,/_/g," "],x],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i,/(uc\s?browser|qqbrowser)[\/\s]?([\w\.]+)/i],[h,x],[/(dolfin)\/([\w\.]+)/i],[[h,"Dolphin"],x],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[h,"Chrome"],x],[/XiaoMi\/MiuiBrowser\/([\w\.]+)/i],[x,[h,"MIUI Browser"]],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)/i],[x,[h,"Android Browser"]],[/FBAV\/([\w\.]+);/i],[x,[h,"Facebook"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],[x,[h,"Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],[x,h],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[h,[x,w.str,q.browser.oldsafari.version]],[/(konqueror)\/([\w\.]+)/i,/(webkit|khtml)\/([\w\.]+)/i],[h,x],[/(navigator|netscape)\/([\w\.-]+)/i],[[h,"Netscape"],x],[/fxios\/([\w\.-]+)/i],[x,[h,"Firefox"]],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]+)*/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[h,x]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[a,"amd64"]],[/(ia32(?=;))/i],[[a,b.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[a,"ia32"]],[/windows\s(ce|mobile);\sppc;/i],[[a,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[a,/ower/,"",b.lowerize]],[/(sun4\w)[;\)]/i],[[a,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[[a,b.lowerize]]],device:[[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],[v,l,[p,y]],[/applecoremedia\/[\w\.]+ \((ipad)/],[v,[l,"Apple"],[p,y]],[/(apple\s{0,1}tv)/i],[[v,"Apple TV"],[l,"Apple"]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[l,v,[p,y]],[/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i],[v,[l,"Amazon"],[p,y]],[/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i],[[v,w.str,q.device.amazon.model],[l,"Amazon"],[p,s]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[v,l,[p,s]],[/\((ip[honed|\s\w*]+);/i],[v,[l,"Apple"],[p,s]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[l,v,[p,s]],[/\(bb10;\s(\w+)/i],[v,[l,"BlackBerry"],[p,s]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7)/i],[v,[l,"Asus"],[p,y]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[l,"Sony"],[v,"Xperia Tablet"],[p,y]],[/(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i],[[l,"Sony"],[v,"Xperia Phone"],[p,s]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[l,v,[p,j]],[/android.+;\s(shield)\sbuild/i],[v,[l,"Nvidia"],[p,j]],[/(playstation\s[3portablevi]+)/i],[v,[l,"Sony"],[p,j]],[/(sprint\s(\w+))/i],[[l,w.str,q.device.sprint.vendor],[v,w.str,q.device.sprint.model],[p,s]],[/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],[l,v,[p,y]],[/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,/(zte)-(\w+)*/i,/(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i],[l,[v,/_/g," "],[p,s]],[/(nexus\s9)/i],[v,[l,"HTC"],[p,y]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[v,[l,"Microsoft"],[p,j]],[/(kin\.[onetw]{3})/i],[[v,/\./g," "],[l,"Microsoft"],[p,s]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w+)*/i,/(XT\d{3,4}) build\//i],[v,[l,"Motorola"],[p,s]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[v,[l,"Motorola"],[p,y]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n8000|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[l,"Samsung"],v,[p,y]],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-n900))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i,/sec-((sgh\w+))/i],[[l,"Samsung"],v,[p,s]],[/(samsung);smarttv/i],[l,v,[p,o]],[/\(dtv[\);].+(aquos)/i],[v,[l,"Sharp"],[p,o]],[/sie-(\w+)*/i],[v,[l,"Siemens"],[p,s]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]+)*/i],[[l,"Nokia"],v,[p,s]],[/android\s3\.[\s\w;-]{10}(a\d{3})/i],[v,[l,"Acer"],[p,y]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[l,"LG"],v,[p,y]],[/(lg) netcast\.tv/i],[l,v,[p,o]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w+)*/i],[v,[l,"LG"],[p,s]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[v,[l,"Lenovo"],[p,y]],[/linux;.+((jolla));/i],[l,v,[p,s]],[/((pebble))app\/[\d\.]+\s/i],[l,v,[p,z]],[/android.+;\s(glass)\s\d/i],[v,[l,"Google"],[p,z]],[/android.+(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:one|one[\s_]plus)?[\s_]*(?:\d\w)?)\s+build/i],[[v,/_/g," "],[l,"Xiaomi"],[p,s]],[/(mobile|tablet);.+rv\:.+gecko\//i],[[p,b.lowerize],l,v]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[x,[h,"EdgeHTML"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[h,x],[/rv\:([\w\.]+).*(gecko)/i],[x,h]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[h,x],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[h,[x,w.str,q.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[h,"Windows"],[x,w.str,q.os.windows.version]],[/\((bb)(10);/i],[[h,"BlackBerry"],x],[/(blackberry)\w*\/?([\w\.]+)*/i,/(tizen)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,/linux;.+(sailfish);/i],[h,x],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],[[h,"Symbian"],x],[/\((series40);/i],[h],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[h,"Firefox OS"],x],[/(nintendo|playstation)\s([wids3portablevu]+)/i,/(mint)[\/\s\(]?(\w+)*/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?([\w\.-]+)*/i,/(hurd|linux)\s?([\w\.]+)*/i,/(gnu)\s?([\w\.]+)*/i],[h,x],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[h,"Chromium OS"],x],[/(sunos)\s?([\w\.]+\d)*/i],[[h,"Solaris"],x],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],[h,x],[/(ip[honead]+)(?:.*os\s*([\w]+)*\slike\smac|;\sopera)/i],[[h,"iOS"],[x,/_/g,"."]],[/(mac\sos\sx)\s?([\w\s\.]+\w)*/i,/(macintosh|mac(?=_powerpc)\s)/i],[[h,"Mac OS"],[x,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i,/(haiku)\s(\w+)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,/(unix)\s?([\w\.]+)*/i],[h,x]]};var k=function(E,G){if(!(this instanceof k)){return new k(E,G).getResult()}var F=E||((m&&m.navigator&&m.navigator.userAgent)?m.navigator.userAgent:C);var D=G?b.extend(n,G):n;this.getBrowser=function(){var H=w.rgx.apply(this,D.browser);H.major=b.major(H.version);return H};this.getCPU=function(){return w.rgx.apply(this,D.cpu)};this.getDevice=function(){return w.rgx.apply(this,D.device)};this.getEngine=function(){return w.rgx.apply(this,D.engine)};this.getOS=function(){return w.rgx.apply(this,D.os)};this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}};this.getUA=function(){return F};this.setUA=function(H){F=H;return this};this.setUA(F);return this};k.VERSION=A;k.BROWSER={NAME:h,MAJOR:f,VERSION:x};k.CPU={ARCHITECTURE:a};k.DEVICE={MODEL:v,VENDOR:l,TYPE:p,CONSOLE:j,MOBILE:s,SMARTTV:o,TABLET:y,WEARABLE:z,EMBEDDED:u};k.ENGINE={NAME:h,VERSION:x};k.OS={NAME:h,VERSION:x};if(typeof(exports)!==i){if(typeof module!==i&&module.exports){exports=module.exports=k}exports.UAParser=k}else{if(typeof(define)===t&&define.amd){define(function(){return k})}else{m.UAParser=k}}var d=m.jQuery||m.Zepto;if(typeof d!==i){var c=new k();d.ua=c.getResult();d.ua.get=function(){return c.getUA()};d.ua.set=function(E){c.setUA(E);var D=c.getResult();for(var F in D){d.ua[F]=D[F]}}}})(typeof window==="object"?window:this);