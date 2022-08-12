require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give close brown slab carpet reward stick unique gesture merry flock gas'; 
let testAccounts = [
"0xa81405d3a242b79f1714155e923d35698bc0a11aab6748c9037b63e35f5cf31e",
"0xecc9020cbf691954f4a79d740d264c51703add4fec6d8daf25bbf2c40af89655",
"0xf59a7c05573c4fb975fc5569ad031528736347df12a98ce583172646c9130919",
"0x0b9df5d91cd50bec8093ec91fc947dce2df68651d392706723355a18554e1d65",
"0x06f913bbdaa9380970c84e5df4d2b007c4e0475ece9140950d1b97cae2afc847",
"0x2b1d47f419548812fc39079c8193b08ee05513ad166af289573c31d066fbe624",
"0xd1d7d332b82dcabb94295ea905690bc6f4fea33d7500a961b1977b2ee4d9e081",
"0xb31281b63ddc44f5489610903b7bb97c3af89c8b484477df0955ac451ea6b4d6",
"0xa80c86efae72bb74e9e5dda8d340ea9c6cc989999db473ec6c6e95b112625603",
"0x83eb0e1a34ecf5615fffafff6adcb77644f371a25f1e34e80963e2312b862013"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

