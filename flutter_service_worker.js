'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js": "03e3524a7d42731ec5258d616693f5f8",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "7b8779ea582485509627efbd91f49802",
"manifest.json": "996cbdf60dda78a4e5940194d8bafab2",
"assets/AssetManifest.bin": "41d74eacdd81d52ad46e36597deaa6bc",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "573340be70488085ede5f48e2583f7e4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/FontManifest.json": "f9097450010bd82cf16bb016ba2219d8",
"assets/AssetManifest.bin.json": "cabe246ab4a165b2ec73c775afbb17d2",
"assets/assets/sandbox/index.html": "11a13190a6019a619e256fe05bb78346",
"assets/assets/logo_256.png": "d3720b6b955fb45b04734578d7558776",
"assets/assets/mcp_server.json": "3dfe2a056d56876c163eb62fde008ba4",
"assets/assets/logo.png": "924e41593da856edb5f017d1ddd9186a",
"assets/assets/logo/claude.svg": "931cd1e3a8235e7b480bc28ad6257b72",
"assets/assets/logo/openai.svg": "e4147b97431b1eec22c10b42409cbd4e",
"assets/assets/logo/ollama.svg": "648245abe923376282b893f751d37456",
"assets/assets/logo/ai-chip.svg": "f393e3d8e9112679f4ee58acf6bccbf4",
"assets/assets/logo/deepseek.svg": "f565ff34bfcfc584fc1b08bd39a68ec1",
"assets/assets/logo/grok.svg": "848b76312823b5179c5ece1f871c5eba",
"assets/assets/logo/302ai.svg": "c92752093c00ede877afeb995c8bda87",
"assets/assets/logo/gemini.svg": "848b76312823b5179c5ece1f871c5eba",
"assets/assets/logo/foundry.svg": "c3e8f3d57a84a3c40e771f1173ddf803",
"assets/assets/logo/openrouter.svg": "37525c599c5819c959a600be3109074c",
"assets/assets/logo/copilot.svg": "765429eb245628410ea9b8d2e8856e0a",
"assets/assets/logo/github.svg": "290a2fc4be6053de5336a5d6c740afeb",
"assets/fonts/MaterialIcons-Regular.otf": "dce45bca7eae75eb843eb4b17730d77a",
"assets/NOTICES": "e42988e481cc9cab4c439c25981c5611",
"assets/AssetManifest.json": "8e0f27a17010da559f13c6db95839505",
"favicon.png": "e1424a20af91893629e29f628ec91da6",
"sqflite_sw.js": "7695c1827b581ba64c7ef136d4cdb2c8",
"oauth_callback.html": "d823044964e73e17a89ed750429664c0",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"version.json": "233ffb5fd032e622d8c736a89304f0d0",
"sqlite3.wasm": "fe0b5f7d20d0d900508725319188a9a8",
"index.html": "725d553d75a9f28b8da6de1b08b10f9a",
"/": "725d553d75a9f28b8da6de1b08b10f9a",
"icons/Icon-maskable-512.png": "842469a15fae5256eebfafbf9400691b",
"icons/Icon-maskable-192.png": "8ebcca88b60c37af5f4bc66659d6a7be",
"icons/Icon-512.png": "842469a15fae5256eebfafbf9400691b",
"icons/Icon-192.png": "8ebcca88b60c37af5f4bc66659d6a7be",
".git/objects/6c/c797f125d2a11876c17b9ef35fb5e83c4ab45b": "5891e488a1176447b2bafd00f644b835",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/22/5744bd6947df637fa2f5dbcc5e7c0dea0a6aa1": "9a92957b4a8b60d7f510b1a0baaae628",
".git/objects/11/4b06c3a78899322994a8ea555fd182a98a58aa": "f030630d5be45a79e04d6a6be7688e88",
".git/objects/41/accdebbecc1325a62d3c4a507325802c4a35e9": "3d7bd823d7556d46390e24c953c9ebd6",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/69/2f20751030c4928576112dd36703233631b9c4": "b62dad7ea8839abdf748010697b0324e",
".git/objects/2f/9a5c9356c30fa0dc442a2c0ff763e9fe998ca5": "6d78a55a787440b5e5f42065923a8b16",
".git/objects/4a/c93b4b39efb4e741709718b778bd06ee7c771e": "ea2d9ebba023e79e0416da3e27f1a126",
".git/objects/42/a0bcd8bb490270983afbd7314279b20be288cc": "e5f2e67624382f45b21d8bf8361135ee",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/68/741660ab6481cae6f1051bd8f0e4ab9e43038d": "42bf684366185da40cd03bab7d72faba",
".git/objects/c7/0b100a3e931a84b061489fea2779cfe28d73d3": "d5a961ea0cfdacc644ec611b7760e28e",
".git/objects/32/f69e16d615d87c0665c1143ba7bc847ae689ee": "379a5dae1d5c158fca62e8a15af7f81a",
".git/objects/c6/42c4407383040e2118b9f130c5b37015cb90a8": "0a650bda2019ff9d87abba2cdfd41bc7",
".git/objects/bb/f88ee8ada5456befdf9b2010a0d53a795d4d5b": "96c2ba49f3b210be22e0d67502572d54",
".git/objects/48/5026b8f5c9fdb877033a9c1840105051b76623": "f6ac4c3261b4b257ef988e6131b1b9da",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/d3/007012b79a7a0217ea442cb1a7666fb7e5b47e": "2cb8a4257eae61b3272608c6a244c740",
".git/objects/ba/86c5eb654a153d6b89f4e79fcc04fd460231f7": "4bd062c75319de20a39a861dd9dd0867",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/fc/18f02a5634649e14d1da45a805e2b04ccf02ee": "103c57c2003d0ec0f9e627b5e8e79b98",
".git/objects/c1/5b6051c4002c18c04d7cd730589615f49424a3": "e8fa6ba80687d6b30aca29e9961061cc",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4d/9340b742ff2360e8520bb6456a47d77f9af0ae": "5d8ec6695cb3da53dd318cf4a1f88ce7",
".git/objects/4d/afdfe71d4d3e5596374d9673ca7a9e346c1042": "2a6a7f7f78ead9c9c8d387a23c68f645",
".git/objects/4d/f6bdea03d85c4dfd1fc8c2d5f5c0463612d36b": "db8a0b9755b843a01481bf648d3e3335",
".git/objects/ef/4ed397fe85082c0ca9d2055222da2517b2f939": "450e804cdff72d40efb3c618a86ed0f6",
".git/objects/82/eebde10279a6071127f90ac26df51d6fe60037": "20dcf9287518463b942d97132924700b",
".git/objects/59/4a890e22bc2403eecdf44277f11ef1db7db448": "9c3b605a8d334c496093fafc10dc38cc",
".git/objects/8e/2d09b6ba618e083fd3083466fbeccd047f4674": "81b0d825fcb96d80ff29c2a0dff1a1d4",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/08/3a958b4eecd87da985f2fd4ef84d0ee9499207": "0209dd0dcc5caf448c26e85c71ba497c",
".git/objects/08/59b3bd90c725cab984137bcadcf8b52df1cd7e": "eb07474a8d10cd7d5d0625669a68bc04",
".git/objects/f7/3116fd8d154f803c5349742a5404a0a88a3229": "3c5cd4f71190c13521fb7f43f8abe056",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/1f/6cf95f51faf2e1080b120f23f46fcf42629d3e": "ef72c1d985d89a27043f799fe7134e6c",
".git/objects/03/e53eb9cc358782bcc2ecfcfd4967f7dcaaeace": "1ddef4542df68c3c533b338dc330b02f",
".git/objects/75/42c6b0e9cdcf9c8e3f7da12ab5edf7415f9fad": "f31e0e5a82c78b71792ba19b15f96867",
".git/objects/d7/780867b538b50ef46cc6f69aac5869488fe2cc": "78971110857b606b82b3a0cc66374f34",
".git/objects/d7/580d3218f24de04c28eb00605bbe3866f0af60": "5bb4b12b338a5fb1c64d60232155c680",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/e1/77494fe1f06dfe5412c92fe5d17f1f8b7ca816": "04e3203606672357848d35aa2eb1fe09",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7a/d6a5ab724ccfac453c16594d58ce6d14b0d9b3": "df83a4fae75e068f4f24f694910dd718",
".git/objects/1c/726254592a71e9c6b32039d0c88d038aa96623": "30bcdb40fd979b5d14b02d5e531d3d0d",
".git/objects/73/42ea36aebdea4c04baa5b709d03ce836b92dd0": "1df57c005a95bb899f8374fd42a6dfa2",
".git/objects/10/9e09162ca13a58688826bdba02799a2807377e": "1cbece680724604d8d9a5827bdb62a2d",
".git/objects/96/17354be2c9044b99fa990cf8bca0838cbfb6e8": "e7c8dc7a7fe54e9405bfaf426399e2b7",
".git/objects/f8/60f4c0cdde199fbbc8aa1c941da25014bf9d60": "c5278dc0be84500ef36dd414281cfc10",
".git/objects/9a/425a7ee3b386320bd16cac1a29a9612c02ea57": "0bfc2c1e23807032ed9fb8894add2cb3",
".git/objects/17/75718b84e22226b9441c1c35a67db8e99fc4ca": "70f6f5c585bb79dc3f6c7214371730dc",
".git/objects/a3/2aa2d42f01ebe5402dab06633d48e1ed8f8724": "67dea1523ae6e957d1a8286644db73d7",
".git/objects/da/fcc621314f70c289fa6f3cd3453dcd15663b11": "39cee8d7351d6765b040690d7a2ff3be",
".git/objects/33/cf9e362cf604f1d05b80bfd67d6d5e563b4c4a": "7eba8541c400f6206fbaa3219fa44585",
".git/objects/9c/18822406260b93aba93d207ac58e318b1e5927": "ae836f61a04c1e0e5a68f11d57dee12e",
".git/objects/2b/7bda8b5b2e4c27c49fb5dfc11b09cdcf4195cd": "f10eca168e7bb6a10bba9f1fa4b0828d",
".git/objects/bc/0cff99d64b7e8de94c36e1ef43af8c5d1a8b75": "774651e535fcb1cb7cd473c868ec792c",
".git/objects/a9/f1d26cd0bc85c7f0e51146d832ca39dc8ca72a": "b575d6674083867a482d7551c49b6f72",
".git/objects/a9/e0b6b8203f4a98f35c49d72372aa912338f82e": "067d38da72caa85a918af64f6dc281d1",
".git/objects/e8/8345f292a1cbd961e19e907a14c445620ed605": "4bcf1b609f2fdc2f6bf28f7d072cf881",
".git/objects/e8/62f0a2480a3aedc3433f3ba05123fcfa685cdf": "8d7d0da4963a237a6d0245af46bbbbdc",
".git/objects/e8/04c742d5271e0923243598d37e58bf8ff4e0bd": "d565aadc9b3cf640f112863a7d22f4b5",
".git/objects/e3/893d874f83726c7faee6b44a20e3f501a947cf": "018c2070207c5adf1a0677acd0bd09fc",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/61/083838c65d610f77e557fcdd85e5c789dc75c8": "7f9b20ce31d6daaf2ed5b9d7fc112c19",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/d0/9e2a404edddac29bd71d0facc134185d83e223": "3655ae0e2805fca67d1f1349071e5787",
".git/objects/c9/bbd4778fffacb1f4ba8ce92fc9e7db5d62609b": "7a4fd0952ba8d5542d8c1cc4e2a8e084",
".git/objects/c9/952c11f6dc3dd9f16a6668c7800d0d800937ce": "737d4bb2e7654ee6bd955c0df74f5522",
".git/objects/72/80bdddbc17dfe709057953d0753e5ffd0f0f2e": "ba56b40d645a0f16807ab3de83ab0ea1",
".git/objects/80/ef9c4e7637608a2a86802a0b9242cbfa973896": "7bf3ba43b0a7226d42a868a6d521e777",
".git/objects/d6/ff26ea56af225bf5019779451f9110f748433e": "cf7985aaddf4ca6ecdd35d1078369310",
".git/objects/7b/5b2be4ea26a6e1abd076ec6d9df9ed67dfabf8": "15f792d6f0ca5a3d0a71e6ed438603e9",
".git/objects/28/b6d54519047d6b9e7fb5160ab2d411ee349636": "ea303b253263e48400f488973a5fa3c8",
".git/objects/28/321ef9bd5b412bfd2cbd97a9cd8b845c73b02d": "389123fc4e36dc65d56594197e692c97",
".git/objects/40/0e29deb869bf8a2bd40bd458f54f0b784f226e": "3cc02e7de298c89186ac2b49a30a57f9",
".git/objects/fd/5dd2b224040b29c7af261c56ed57bef2769880": "8013fc805da5abe782a683c7fba54520",
".git/objects/aa/0a7bd653ec20b94f49b64f9b71f9ac286398e6": "9de4a2178aac294ebbfb7a5013dac4d5",
".git/objects/18/a2bc40fc542beeb308c4f63fd08f30b6644f0c": "adb492d6441a359c448ebd539425e347",
".git/objects/44/d746f731abd48b36c4261f0efab841cbd1405f": "488294823338b63cad37eae3f2bd9925",
".git/objects/ee/8ffddf131652a98259edcaaed560730e01dec3": "4f8fc3fdd0bf758042dbc97e4f19fb80",
".git/objects/ad/6ca28939bdab4f796e597e3ed9b1879d611c53": "183f7b78f3aec22942d5519c550e195f",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/4f/e0266476d2dadfccf5437b77e8f168f06cb2bb": "5bcbd6de50d33957659d8b413ee49cef",
".git/objects/4f/0f1aa11d1c109d4a256e4c0bff86ed2ad24853": "a3be261518a64bea86ba6e15c87daa10",
".git/objects/6e/b1cf2abc450e2587dcb20bf0501790d7eec6b4": "b4c1d6b033bc5ee36aebad9e41359f5b",
".git/objects/7c/b1538d8dcf713f5b03af7a5c348cf3ffcdbd39": "ce363bdb0fa8bc3be667481b020ccf7d",
".git/objects/6f/eb2f409c71d48b24d6e0952eb647d46e0590f3": "59efe796efc7965e2948ac17b92b9d43",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/7d/98fe11db19775e775569de425e8dfe8cc23b2e": "0e02452d7733758f450308ed6de9d144",
".git/objects/d9/8b2ab795119e7fd8b2e85dfd59dfa3721c5951": "e2c3b78598701bc83988486c88d1cb4d",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/77/5e96935f3ba16a27ac997fd03e6da5bd3ddea8": "40e7d7d53f6e28275a639fc5aeddbe82",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/8a/b0aacd105f4b1a8d0604b778645d169a99f511": "90eb80a10d6305dfa5274ac526a9b5bd",
".git/refs/remotes/origin/demo": "d2eda79a9a5d98d49d6b7779a9b18278",
".git/refs/heads/demo": "d2eda79a9a5d98d49d6b7779a9b18278",
".git/config": "2ff0fceaae292bb1f162b389fcc2e8fb",
".git/COMMIT_EDITMSG": "ed20d984b757ad5291963389fc209864",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/HEAD": "59b0e2dc6676eeb91af0dd131222a94a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/refs/remotes/origin/demo": "6d7588574d3b13deec0d7c64fed0e2b0",
".git/logs/refs/heads/demo": "0f4147a888474b67b7c68dec3bb28aaf",
".git/logs/HEAD": "0f4147a888474b67b7c68dec3bb28aaf",
".git/index": "804a91f7f14f1428953ff351e192a7bf",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
