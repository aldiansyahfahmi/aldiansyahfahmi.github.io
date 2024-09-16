'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "c821b3ea2cfef9502631cef4c27485c3",
"version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "c1c5f29031926111ab3ccb7c551c88f9",
"/": "c1c5f29031926111ab3ccb7c551c88f9",
"main.dart.js": "9f68c07c8b4ef1526a51a171285edfec",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
".git/config": "f9b1ca4baed61de5d976af0c8f061137",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/59/bc1bffe80440bb9f3e745297bc3b9f7de7b121": "4cb5dece523c9bbf8c472ab7b772b1b0",
".git/objects/04/c03aa9caec6df11cef93b58c809b615a085dfb": "5bd9ddd467d99627920ebeed9296c0f3",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/3d/fad2d0cffb232849a5167e586c343c86efaf7e": "916ef562e18b422dac2b3d7c1ae0a9a1",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/0b/ee503822a85d515c50c50a7115d13a7a1e9b25": "ac8c04f68cc0daa0f26c859cad234828",
".git/objects/94/0477bbc9a8b2702113cb44b5509cc171735ba3": "d4cea884a67c27599a6934643577416a",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/0e/7dc24763d99ab01f6663b0ace299679e8de2fa": "d4514dc3b9755dbefc9e0965c2109071",
".git/objects/05/2c902bf93412706e85a3c358ac624db602d1ef": "4f03b16f5749fcfe809ae1b6c412b271",
".git/objects/9d/8c3c1e758ef8711186ae12fb0fd22aaa0f70db": "a391c0384d1cabd19155f2907d961b09",
".git/objects/9c/502e92818502755ff467ac1ce394cd51978b2b": "c9884dc42e4e59ea1f9191d6955c6769",
".git/objects/02/118487d23f3156ebcb6af3f04ad0cbe9cf9570": "b3c1c8ac8e65431758afce1b9a16c9a4",
".git/objects/a4/ef33338b1685b017bff25d00c8d7560d10f551": "f99691f4a02eaefe3b8b65e8e8f1574d",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b3/d10dd568bf8637897503435f0bc9007ad20ac6": "a5ed0c16a76335e4310f307c7b65ccf9",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/a2/c2c501d92cade4609fbff2a20d058036a0f07d": "5799cad65f96fe00122233a5625d5041",
".git/objects/a2/0951a6798efe96cb94824a7bf5f68900474b55": "40a4be48695454de3f3d813ca1fffdfd",
".git/objects/bd/677c1de4563b80d8615ffb663e63908eb5cfd1": "2cd08b9352f34724993a69150b17fe30",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/f4/140100091f615f0d0dc3bea750066fdd04d3ea": "d249e2f69b9bdfd0fa7c9262b81fe903",
".git/objects/f4/ade88efb8db9b85b9ad1c9512e1cc5eccd9642": "d1ab2c6ab22411fee21027c5fe7f0049",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/4b4bd40b01661de4cd08c953e863c7e83b960c": "f45204f14c6a26a8975891ecb47f5ac1",
".git/objects/ee/eed15764228d00bf09b77d9198386f12e5060e": "43048693b5bd47f2bdc8b77f237e467b",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/c9/9b42aadeb908d25bda6b0f351f0f7763b759d7": "debe6c5359a6f6c0a509e9c4e432d236",
".git/objects/fc/1ec9fcb90ff9bd8f14c18f14197f9fdf56bd7e": "fa79b5b985b04a4229f2a12082ab4274",
".git/objects/fd/e8df8847dec73e3ae94c95de6e032e0cdf7421": "a4d561d964ed0b5f32b13017c24aed80",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/d7af667ef9408111e13f8de9205b5fcc80877c": "aad96ccfe3dbe73df554b219d1905f49",
".git/objects/f5/010cda95492006dae3638dfb01a8d0822a1e6a": "04eb9fcdf209b67f396e5ab84cb956e2",
".git/objects/cf/5e5260318d90197a1505087e97abf678945f06": "db45e02112dce67ff6a961dc50282904",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/27/af4491b3558edf0155a4868279b8f4a7923fdb": "982a2e3d5f63f94b33ce53fc50ccdbd8",
".git/objects/16/77d5049c99af3633e7f600dbb998f29cbf5198": "6fe29ca1b24f1ee8dd38dc13bd12c882",
".git/objects/16/5da67191b73406e15fc3e6cf7cda3c195dc735": "86cfac30d97fb45bba2f4417782645d6",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/74/c726e32781bc2c0a83170f6800c0ef4cb9ddcf": "69a43282cb8038fd0577dc0529e5d6cb",
".git/objects/17/f95da9405e4701b3ddb2a6b8b6e29ed47a839d": "aa31a30a1949c9bffd3fe4dbc05e4a2a",
".git/objects/7b/fa951a1ce93cd1a633590e1d3c12a13a046294": "ddd28097f2c7fecb3f3873f72e305d8a",
".git/objects/8a/a3196d085afc263bb5cc2867f2dc7e7051377e": "82dca47eb6a3308c001e4e1bea9dbe4a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4d/caed2e62bcb6bdf8ad9de5a00b6a2d71f9573d": "82154f468b7541844151bed7e74c564a",
".git/objects/75/1e836c98e12df9ac372c3b3d3d94cfd2fc3524": "81d4a9f2820f141c2c1d314a622d8899",
".git/objects/88/6911531197d65d23cdb5e54af15b131bd6ebf6": "e6b029ab4cebf129e5fa6cc801506ea5",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/6b/cdcc27f22e001e46defdfd9e23f224ff65dd67": "624b5324c1f5198f7f6ede95410d5b7b",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/07/5b22e8abda428d8e7488a6c22fc1f2d649d6b2": "f2eb2e921fb72d7e4e8986e6bb94f2e9",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/5c/d94d8246c425c1c3990b89eaa50717ee1542f0": "164bf614d36e22b5ca204dd7b9904399",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/5d/15fadf1864d70c7184fca7d3efde79cdf68af5": "79a44d8578cc18e3add64aa6a97f0da0",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/30/f510cb52a21d7f14d003712cb865b07bad5e65": "463d0d5d36b69d3a173d8d58f1cb1046",
".git/objects/5e/489b801f7b60b596cac77c6b190f33fe957fb6": "817059f5510224fdf510c01bf0a883df",
".git/objects/37/5c02aa7e4c5a2a7854f11e5b4566d261fce6aa": "0b4a2ab76b3b8e6cd2a698951b608110",
".git/objects/6d/99295b5c8d87df6095c9483d6477b35a9f5d67": "99a8dc9d00386cbb41f203055046ecbb",
".git/objects/6c/4350ccefffcbfce57b238bfa701d2db660311e": "a425cc2de47b0e2cc13c644a41f8d64f",
".git/objects/39/6098b1132548bf7d558ead8d3ba82706c470bd": "f09b05548fae2f2974423458981c33ac",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/a7f7247b5a20aa97f4519c117932c31697b80b": "7d12b907c4dfbbf54ebae2ff3ebc0cf0",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/a7/d05e2b8937bef6019cca6509e1448f82369d81": "c2d69d535798190e047735e9abc9ecf5",
".git/objects/d5/c186b191655b2499dd33577432a97caf4e6ac6": "f4e67e79ff0443f32727bfb06aa80568",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/d4b3528e963d096f3d8a1a07772d1f102d0b6c": "4006622aeb2b0a6625761a1370cc2f86",
".git/objects/a8/4a321c17032948cd335ea5039e0ad50f742919": "3675e63e443d54a2a9e125c11d3357fd",
".git/objects/de/d915261191c5ccb8d669ce54d2c3a9665355a4": "95087eded91093176fb92df87da043e9",
".git/objects/b0/daceb428a962ea64fe192b963f7ddf35296d4d": "d8f79b508230fbeefa41af15d3906fa6",
".git/objects/a6/ca61f4c5ae84f5199c467cd5888a9b9cb2fe97": "d40eacf682d3955d7b1c6d83d15cea3d",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/6aa2cf6edbe2f5b7532340c86d891738e4a0ef": "bdb4f87f0d2e1bc371ecd209e118ac1b",
".git/objects/c3/bd1053ae64b117b3ca5b894d0f7b39e3fd7c81": "ac3898c077d74e849346f04cb30abdff",
".git/objects/f9/35d964ef79d34ab590c7c9b7b39593fc6d0459": "d537e8edc33d8d227285c641921a2de4",
".git/objects/f0/324db7b1fee8ee8a1cc32e6288d623b21639c8": "03889db5d7f00326871f6cb444509eca",
".git/objects/ff/e96263d68bf0809155378a2a9154b4f1ecb99f": "e6edb08402ab77980404900c45ff726a",
".git/objects/c5/ca18a7274c5d324abd86bea72f9aa250cb44cb": "4c02a8b626d48b1a82ddc9e049f59423",
".git/objects/e9/29403cc03dfd282c16a56a44beb47831b14cdb": "86565582ddafeba959a770a402036fd4",
".git/objects/e7/4940e24389c921433e28e5927562e67460bd5a": "caeda771011fc98b1bc4f220a169aedf",
".git/objects/f8/7f2d98bf0cf4b8e69632ba65e410ce2dbec168": "faf3cdfa1631a1c20240e91662457ae3",
".git/objects/e0/090aa35b6f5b322fef0c48b170c571e6a93b59": "eddcd6f6eebc084bcc93cce5b8c22a33",
".git/objects/79/3e602fa0065c100db45b0b6b0a32682565810f": "eccf2e60bf967872ef582406f174ddfc",
".git/objects/77/13b90a1a564168a072653990ec3f61027085ca": "bd2ba0efd62e0e576fbe09741f12e4ac",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/1d/825a19de9b051f783f1978e63101c616b6d2fe": "3218e7b3f450bc844677e7a46d2254eb",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/7a/cb0d92b3d4f1dde4b01d427601116e382a5644": "8c08a976f807058b9cac2ff6b0021725",
".git/objects/7a/7f30ad8ce2e76786627ebf8dc56e18b5327011": "acc8b6fa55ffb3c0bdb1dfdbdbd83a04",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/25/e2d9f56b11cd362337faf0a654f6948486b5b2": "7ae9e9e0b293c40853264d5667e2c7a8",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "73d171e481bb684ec430e55f161c9f87",
".git/logs/refs/heads/main": "73d171e481bb684ec430e55f161c9f87",
".git/logs/refs/remotes/origin/main": "ce105c16cf29a1fef1c4c497f14ec979",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "68b756d4bc6c6b9508f8e380da21c318",
".git/refs/remotes/origin/main": "68b756d4bc6c6b9508f8e380da21c318",
".git/index": "35dc00a926f8fba4f1fe919af5a76681",
".git/COMMIT_EDITMSG": "a912d9776ed22537f51bc6907218d2ca",
"assets/AssetManifest.json": "1e2208590836bdb9f1bd58b6d00278f2",
"assets/NOTICES": "1a7d1089aec922ff3a28981a78533ef9",
"assets/FontManifest.json": "92818e61d2b3673d24f9b8edfad3c095",
"assets/AssetManifest.bin.json": "b74f5c8682b02e4ff32dbd4cf46df038",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "56d754d964f54bca1f3535eb8260c0fe",
"assets/fonts/MaterialIcons-Regular.otf": "6809be91dd53af02a17205b66a9b8a44",
"assets/assets/images/projects/Med%2520Anatomy%2520Learning%2520FKUH.png": "d0d5773526028b951673e2517413c8fe",
"assets/assets/images/projects/E-Logbook%2520Profesi%2520FKUH.png": "119c30ee4d55410f3ef6ae850359b27d",
"assets/assets/images/projects/E-Logbook%2520Profesi%2520UNIPA.png": "5de6215aa69308667f036e68e5e2d399",
"assets/assets/images/projects/E-Logbook%2520PPDS-THT.png": "861901b6503ec0e6f5b38334585b5550",
"assets/assets/images/projects/Presensita.png": "4cc28ae984c9918bafaf996ade4f07d9",
"assets/assets/images/projects/E-Book%2520Anatomy%2520Learning.png": "ee38115805e8b6dcdb2bf4d06740d53a",
"assets/assets/images/projects/Wallpaper%2520App.png": "50e9697338160b0cd78c3f3eb93f1214",
"assets/assets/images/projects/E-Logbook%2520Prodi%2520S1%2520FKUH.png": "4f38bde1159e6ab1cacff5e7753da94e",
"assets/assets/images/icons/dart-original.svg": "286db58487c358790c5425333443d6d7",
"assets/assets/images/icons/github.svg": "93fbbf84fd22b6e903b68f2e5199b10b",
"assets/assets/images/icons/instagram.svg": "24dd1d03a348d70a392ded9a9d84d201",
"assets/assets/images/icons/git-original.svg": "7ceae6625416696a5ca7f6eb2db76ae6",
"assets/assets/images/icons/figma-original.svg": "5d528f86ab2ebd962522639b7d0184ef",
"assets/assets/images/icons/flutter-original.svg": "67acc94dc2034a9e7515cc0a5ee6e5cd",
"assets/assets/images/icons/linkedin.svg": "5f042c51b6732f16194d00a55251ad1a",
"assets/assets/images/photo/profile_pic.png": "5d9b9b13659324570a727fed97e7de2d",
"assets/assets/images/photo/profile_pic2.png": "02f39879a0922c0070ccb431bcbd09d4",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
