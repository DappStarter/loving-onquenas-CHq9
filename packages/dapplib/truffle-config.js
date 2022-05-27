require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife olympic system index response right concert grace indoor fresh gasp'; 
let testAccounts = [
"0x66c4e2fff3969e425fa513dab06924f4679517dbed7395585d831789157cf040",
"0x8a23b8619405cb31052a7a4135a2bace78d9f67d7fd9e0702118fd4a1b948ca7",
"0x8e585edc3d3cd0f954ea12c446ec4c5151846a4f3cd3c4ec93f8b5462611234b",
"0x88428638537a9899aa75fb868babaa3c499efbe23d419e1f8c57af4071956256",
"0xd739c54d5b7de60458d79ee6fe4e1de6b552ee413112b06bcbd6ab83aad9700a",
"0xfcdf8b5f881f1e4043ba206172a08f6d072dcce7746683fcdd000bfc544b38b8",
"0x51ef319c252be6e955b9c4c35b9b6d89fc23ec01894b8b3091c1ea6618faee2a",
"0x25e47268a3b7465820c1709d3f50b4e2ea94bd8a2066839df71e98e196876a60",
"0x2c3a1aae76e67a315bd85f97c0e112569f2db967b460286fc1a5a69987ce4e02",
"0xf71901f6ad0508067dfda4d2225f0eadfdb907be7596bcc7fd017d80e64aa8fe"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

