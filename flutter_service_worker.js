'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "cc255a285b02f117e7d2eeb6a60b7f02",
".git/config": "1a8803567688bf3709de397a27196a19",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "0217eb4cbccba3b31509136f4df38277",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "4cf9be47c6828aad55a0717a0f42d3b8",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c16ef42d12abb13f47df41386e29ca6c",
".git/logs/refs/heads/checkout": "0d0ff897053ef37ffd1dd0936df1a3d4",
".git/logs/refs/heads/master": "a4d0eb4c529eed938ea52e024bfa653b",
".git/logs/refs/heads/testing-v1.0": "5d43e2e40d33c86592a9d3e62f02784e",
".git/logs/refs/remotes/origin/master": "ff4bd201a580dc0691ece0c4ff80e5de",
".git/logs/refs/remotes/origin/testing-v1.0": "0bc6f7d1e3665e9c48f582b109eac62b",
".git/objects/01/2462c094ed7f68934d060d16dd42c4a7bd3fb4": "1c04dbe38c60c965742053fe16206c38",
".git/objects/01/bd2389760bd995403e44bf66eca052582d052d": "48eeb1db2092b6a683fff0fd0d087f17",
".git/objects/01/d41e85dcb684eecf475d5cc6fec5d8a21713f1": "3f0023fb93f3f98bdec2a6cbe0e6a0b5",
".git/objects/02/45f49d909568acc227c4e8b08b1d7747600eb4": "7ce4185e99a09717fe7e1ce823592fa6",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/08/44c32e2c433a48054dac00ee35095812ff6ca4": "68dbaecd6116b49d52e693f1e4338a10",
".git/objects/0b/5e04afb92c16e3b9ced2ab5553e0908073a663": "06f802f91220b4730769f9cfb9149149",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/14/1949841841fc14489094cfd7abb6b4d76465cd": "4282803af1efe49f0a2998e2e2e19b33",
".git/objects/16/6e1ee094ca7e18622af8c609ae8b5f43ddd0fa": "dbe79b4a18aa9cb2ff4c4f246696dcb6",
".git/objects/19/420c07c7330c98357bbf6156e2e8debb478a24": "71cbdef6defc4b2c73783263578cec2a",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/21/988dd39ef3fb5f85096fdf431fbdb871f53532": "f84ab2df50f623c2b7f89c7cebdcba1a",
".git/objects/22/b3624e6437421faac7ad3d87565f838757080a": "366586babf3bd50daaba23dd986ee924",
".git/objects/25/33bdecb1fa09d4caa967bda3816700c5a7960e": "aca14d8d3e0a2870046076dc6feef6bf",
".git/objects/26/8c98508f2cbc056538a49d9cf35ca0ed02da21": "ba5e4b86f5b12b4ac41447df2fb58a6d",
".git/objects/2b/c3242af2085fd9d5eb90e41e69be5402fdb5ae": "66776f07b3ebdcec46e097cecf71eae6",
".git/objects/2d/8498adddf1a8805acf6e9779cf202daea55f3a": "d03ba442b250ed8f719c69dd8a6dc0c9",
".git/objects/2f/804ca3167546f337d5e8665cd5359149a531d6": "37cf727f2856691f4b78fa961232a121",
".git/objects/2f/8845d046c28b018201dba334611ff76785b5af": "28af8051ab0bb6d57e461df5171182ff",
".git/objects/2f/d65f519f6e53a4c137cceb2e4e4df59fbc5b64": "2a6243c0399a9ea58008524d56387c70",
".git/objects/2f/ef2e944007ce134f9ec4b0d2227957c070ea81": "98cf8ea2a5c65656f1c5bf609fb25d90",
".git/objects/32/d1c67f994572dc1091ea3b41d998d5d55f444c": "ae7c7a6be8c8c5a18dc4a1b25cfb5223",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/39/23cdc9f1ac7cc0dce614c3a8b279cccdd1a4dd": "df0b4af3857543c2812e61cec73e1669",
".git/objects/39/fb46bc0f7d7ea9be147fccd53f80f16230cfce": "c3777807a9f601f5ea71b06ec53faf94",
".git/objects/3c/7c1a198d683d9dfd6929611a09fe61d3d1ff94": "44f0290d0642903dc884b99e21ef7fa1",
".git/objects/3d/5e9d68453f89ca4b3b63513d8f41bcc647645c": "f41fe9704d6ed7d456f4f4a94e6c482d",
".git/objects/40/a4f3d3bbf0be1ce9a7c51b707359fbbff35b85": "e284e9e16f203baff15d9e39f0c3ec21",
".git/objects/43/448eadfc52011dd37006433ac25580000e1afc": "0cc0836f2dec781dbc1e58c165d5a58c",
".git/objects/43/d69b343019b81bf954d74420277872d7240396": "ea1c1e1fdbaf51bd2d998256f33e2584",
".git/objects/44/9cf132653b788e22b0487a904e39c7bc12f7b0": "51b0df59145725f82f8372b502c00eb1",
".git/objects/45/62ae12f16790b5c55c1d5b9f9d16ec7744bf29": "bc8c142391c02cfc8573ecb8da79b03e",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/30e7e38ebf2536fec5bf2b4596e7c492794bf6": "a86656f4bf1b3a0e399a4047417b8e99",
".git/objects/4a/338cac00807026d34d1a79f9730052ca35370b": "e9cec2760aa89233761179b7aee74a87",
".git/objects/4a/d7e77462e18a4b97bab5a17c98f144a9edeecf": "6d0759be773d7f49654cf5b004302e7c",
".git/objects/4a/fb08c37ba3082fd780d96edc86f288208cf517": "0e0340cda32b9012798f59abd1dcd05b",
".git/objects/4d/38fc5f5e8e946bd292944caead938771f52b5a": "04b922c20bfa8ea6d8224e73ce23fd59",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/52/9e38c55b9313b4f580bd00fef3a832ab76a7e2": "d954bd59d83b10446d74105a2f228750",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/53/e6bc609d9b27d47fd616d909358e5ccaa54684": "8599acde2d1f46256b0f4bbb3722b027",
".git/objects/59/5f4c03a88309c1c1b721736ddb94d76cc09340": "6765b0d605099b9c6103319c23116a1c",
".git/objects/5c/539adcef21ad4eb951c3a5ff732d6857d0c69a": "a882206dca49306a3794062d69389366",
".git/objects/5f/6436b67f9dd52f516d177b8ea3be9954187188": "0bf8f3fd8f85ed42d49d743fd7f16118",
".git/objects/5f/86e5125c5ba95963c2c8b218bc2c6d353ab510": "a81691cf4ac48a70ace411a40ec33183",
".git/objects/60/09ec88f9c5e439ef0effe6b61fb1d457252505": "7d8faf8e514bc6bf90457b35f372601f",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/62/a05d7161020ab23eb9676a34bfa533fc56962d": "89428ef442a18c7d441f8893f23620b7",
".git/objects/6a/64dc77c78e7a6808aa68180b4fdee52f0d5a35": "bdddeed19125153bac55a86253b70e18",
".git/objects/6a/d9aab0430993eb3ac55f695253ada552328b36": "81e0b93e6a69b7a3c5df8f565acbb2d6",
".git/objects/6c/24f689cf54a2058f27eb6d889b4d763ad5f397": "ccae4a0e1b27e2adff57bf7509dc416a",
".git/objects/6c/abda1929b7b83f03a5e60cb68b2b97bcdeebb0": "4d6713a243fe7a6289eedceefb66f9e7",
".git/objects/6d/3e68997ac288dc3805b2ccbac9fca2678dc16f": "b0168a866ad2f7edd49b856b5f8d48e2",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/70/aa28bfd0478bfca9ea2f160d519411679fcd0d": "453a14ec09eb4e07a06b6b10b2e3cd08",
".git/objects/70/fc7fe8be6bf2b13fd93acfb8bfdfc0cd17a0ef": "71014aeccf707280377d1b0e3673823c",
".git/objects/71/a3062764c848f29e403875f403753133e80c67": "695c4329280d99cfe87f1d949c6516cd",
".git/objects/72/5c83d6cfce47a1c4a204e747cb0ec4e43f203a": "b86de59c7402e2be8ea2de0b0f2d1b29",
".git/objects/75/8b0dea427d4a543a171af0d1c999b17262dc0f": "d1d81411554e00666ccf31ffd0ffffac",
".git/objects/7a/1bcba9e7bc4d888301473d35d17c18d5fc91ef": "afbeac225cb957c25aadd69d88b7644d",
".git/objects/7a/4c98316c3b8c792ca5009dba70719283c872e5": "2a31dbf2375347b841c54e60ba3e963d",
".git/objects/7a/a8539f798187983625ec057e35570ab7adc467": "8f697ca289dccf6b30fdd2926479ba05",
".git/objects/7f/71981d662bd6b152b8881882186b8d270f9558": "d32bcb7ce52475c28dc7638893c35c6a",
".git/objects/82/8f3f61d0d2009401696c5148e321ce0c69978a": "a3af7e2696fb5500d781c8833aa23a0a",
".git/objects/87/ab538b1ed87e4848b5870d1cbff42651415ff1": "db5bfb5c373d3e70286d1d2ed01a894f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/c14cc2e5e6efc168aa99bdc4eb48c29df029f6": "4eb849a415402f3ded2f26854d4ea452",
".git/objects/8c/b8407519cc68d7120c9b97ae05d46f878f2304": "5cf1c8cd3b3461e17990fc20e44ae6fa",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/8e/acbd01f56e671a40901b07d3797ef0cd8add18": "cee38d8f601f454c4c70a7d6e8c6cdc9",
".git/objects/8f/6d05f310b51883a3c6755e86c65c304bc1b605": "9d27c096d3aff33375499859d44ac4da",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/91/f8b3e7918e4169edf8406e9aaa815f0a8115b6": "95bacfb4e0ba1078fa95ee9b19ffe9d8",
".git/objects/99/1e638622d858e424ab7728f8eced66cf411be8": "834d999e2ab468329626e9ca2f0a0ecb",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/9e/1ccdcc0a32595153b621d7d39c00d781dba677": "9b55184e4b13be5ba490e6cb36244f9b",
".git/objects/9f/0dbe842a687141dab12973495279abce38218f": "409293efa85136ad9aef4e880009a5af",
".git/objects/a1/ad80428bb8418bbd64150aabb3d2fb6b947168": "ada5b041de86d3607f5bcae81b0dd204",
".git/objects/a4/b4887149f2437390f7521b2845d3ff4b65ea81": "6428227aaff273bfc73fe5951967479b",
".git/objects/a6/6f279b6332d198930cc37f349c4dddff8ce745": "a44cc6a0d79e75ae93c5d70ca56ecfd1",
".git/objects/ad/8241996444a9674027ef16c1b06d3fd0aeb07c": "067c2e54003772a19404ffa67e02e786",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/af/18b53651325c58de8bb38cf3ad0124f149cd92": "6967c2633493e14971d827c89ca1faa5",
".git/objects/af/a46066a51d54b57c6bb392a1d0f2a8d473af86": "c6faca5f10ee7a3142183073dcc209a7",
".git/objects/b1/eb16b23e8c561dc09d30e456cdfb1e3fa418ff": "37aaad2f73d1b7c7d5c3000ebdce258b",
".git/objects/b1/f6ae243cd295dcabaf2adb7d652cd36a44b06d": "af315d3219d997d4d0cd2ab3cf8ed137",
".git/objects/b1/fe90df4950c3393d5b9f126cfdcd01a25a185c": "d4a6422d07ddd27e9694b83ae6103716",
".git/objects/b2/28909ce988bd8dc1800738ddaec3d4cff7a6db": "aad2ec3ff87afae0673d747a992787cd",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b5/1f5a89b8b471363d2d422e2a7d54b8367b0698": "3f2465aa804f109045edb2f4ebcd3e03",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/49c320b7faa7daeca56f49efc45700b22e70fe": "d8d8626e10ab013597f3c5dafce1e386",
".git/objects/b8/e48b7502a6aaad1104a29161d7f665ab099d7e": "95e9b50d99537806e024b5129b3fb076",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/563abf61e8a175d67e3e6d832cb48e5af2e063": "c81d8680f39ffac616fc3a498d90be62",
".git/objects/bb/6cbcc7d3171e7b2f1e75432989efc3c787b77a": "cb9a82243b82dea76e0349ae784cc888",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/c5/a0e746a100a596cf809c62cc035fa47c23757d": "e1ffffe218f4bb0b8add72585bada79c",
".git/objects/c6/ba90b5f0efa3d0d64a49f1068309677636c842": "7611bd5366047ba9379e54718cddb342",
".git/objects/c9/9bcf548f9cb9b8c90318f8304d476cf20af878": "5b9b749c80ecaa90b93e882029158c12",
".git/objects/cd/6f3298e901dd679290f1c74d739b952555dd82": "459a484a0c2e4e5ebc7e5fc2b3fa1b29",
".git/objects/cf/a0f4c18e687d9f55af94bacb8591ca98e7304d": "d68fdc569a0700981a01c70e682ca315",
".git/objects/d2/95fd52d0343565abdbc84abec859772aeafc56": "a046665bf06f113d7ccc40ac085ccfa5",
".git/objects/d2/f15069735bfee2f463e1a87ba7bef8f98b4595": "ec8eb74f508cb3863276fffaf740f70b",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/df/5d9fc0c71ba6bae9274afce56a87b113af2f3d": "ec4e0fd46d7aaa69d372570c9dd386c6",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e0/1933ea0dd2432ddee6bc465927bfd287288544": "7a866bab0e86454a9e0ecd770ee66845",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/e1/fdc368490c233a1e3e49c84387958246e7c713": "06eeb957de8227161d02c426aca05dd4",
".git/objects/e2/c036986ecabad563d65c9f9c4bac2340e013a0": "a46af4a0335db09a025a29c96e5d3689",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/e7/807eb293f5663fbb1cc96ab683851384058c6d": "08033ee86d59d354060383929e10d462",
".git/objects/e9/01d983165e1427e2b64194175bec1e8b764ac4": "dbfe34dc2888464fa5ff8742e4752610",
".git/objects/e9/46a6e800ea4a7ce0ce48b416ea5f537e58a66f": "73245728ff5326a8df34f23f0887e563",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/1449cdc6c043153183a210a4219f8cea9cb6b1": "70610be7a5dd94f5d07fbd173da49108",
".git/objects/f4/608bb2aefb3d5ee266343d3567d2b2a991b650": "413032200302ceb257caa7637e91a21a",
".git/objects/f4/f9c23c7ba4bab75468acf6beb7561acea7ea2a": "0a3d81356f35894393967e5d770d288a",
".git/objects/f6/ec1fa1f370106a1338622476f1eb6480170f4c": "dc6ead3bfa68268b8e5bf03d65bf3d93",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/b4f4a2d68a6faced07a4f225fb98e73c41fbdb": "6545ceb7fb0bb07b5b262282d730f652",
".git/ORIG_HEAD": "1a85c19a0878d0861075668b91b4b7f9",
".git/refs/heads/checkout": "50ffc9977f07ae8f3262d30a4d8268a0",
".git/refs/heads/master": "1a85c19a0878d0861075668b91b4b7f9",
".git/refs/heads/testing-v1.0": "50ffc9977f07ae8f3262d30a4d8268a0",
".git/refs/remotes/origin/master": "1a85c19a0878d0861075668b91b4b7f9",
".git/refs/remotes/origin/testing-v1.0": "50ffc9977f07ae8f3262d30a4d8268a0",
"assets/AssetManifest.bin": "d68863defb8b09477b0dd8f901a77101",
"assets/AssetManifest.json": "93dbceb86291d5e2ee41935c339c8e73",
"assets/assets/Avatar.png": "654d434997e976b164217aae0f9b6e77",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "9a4713c9d9c1850eb170a2aeb1ccf2ef",
"assets/NOTICES": "ef69e6dbf2aee97cf4ad773ee542abd2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"firebase-messaging-sw.js": "3474c750089f16890cb066835601e961",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3203884656fab032df3d4af323913434",
"/": "3203884656fab032df3d4af323913434",
"main.dart.js": "6cb0ecd46c239e9c26f46367fcd0613a",
"manifest.json": "f55bb5697e7d4178d10bc43722f4d748",
"README.md": "be8192603f89a4462af1861917695464",
"version.json": "3db4d3558c0a11dc4942934a8f4524b7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
