import { generateKeyPairsFromMnemonic, decryptPrivKey, generateEncryptedJson } from '../../src/lib/crypto/crypto';

const mnemonicDatas = [
    {
        "Mnemonic": "dance bleak matter hurt mule prefer casual mad actress tragic click badge involve suspect close wink fortune base genuine record burst order awkward west",
        "PublicKey": "COS5Uk4F1bk91EKSN4NkS2fokDi1SQ8uin5bbwycSPHw4aCopLZNX",
        "PrivateKey": "4MernMvhJ4YJ3JeQ4rtmKBpnjwC8xG9mAim9TwMnofL9hBEPvc"
    },
    {
        "Mnemonic": "trial meadow film under spot flower color lift dance switch verify defy cram coil injury grit ancient allow promote catalog once response clean fold",
        "PublicKey": "COS5A189FNRm8u1VqDEZZAFUwdEnNZqVfh4DK8DiTAKSpcy8SUNYF",
        "PrivateKey": "4FkUfdk3fM3fBsxSdfZ1WjbnhvnMoeJKHFK3EnCweDygsmmDrp"
    },
    {
        "Mnemonic": "flavor identify people cup squirrel sad ostrich common inch toast paddle purse bid ceiling stem clay three pudding arctic wing thrive approve memory lumber",
        "PublicKey": "COS7SC6RkXvvcQ2KgJPigm4oZYEGW6qN6QpRpiHC3uyiwdirWHgY4",
        "PrivateKey": "4CH5U9Q4xsbnNC8sdTCv4pcu1r8fHGVWdNwN5H86WpgXfsw3cW"
    },
    {
        "Mnemonic": "scatter pole curve maximum harsh praise alien lamp cook target dust improve giggle buffalo disease motion what relief bulb pool kit mandate mixed damage",
        "PublicKey": "COS6YSaPYX8krmC3FexdcgULNrKJQ69uttUz7SXBXSzBqf3HE6nSC",
        "PrivateKey": "4gsGAGL7A3wtys7kwbgnDjqEgTqPk3KcEJLAKhdHjVxgyp2eks"
    },
    {
        "Mnemonic": "around lecture mystery key retire audit combine episode guard bamboo solid mosquito combine mango clay foot prepare flip safe gas misery fever scissors industry",
        "PublicKey": "COS7FmWmosEoEWosj9bi7E28fRoWTsz8v282HAMRG191QKtTp9mPq",
        "PrivateKey": "4YAgTcBY59Bq6eEpZyh3ZNnfWGaYUEdPtCSjkkmRiJyj7uNVzt"
    },
    {
        "Mnemonic": "syrup ice one bag obscure will syrup deliver payment ability grain half never often fan gun caught noodle urge begin bronze canal enact awake",
        "PublicKey": "COS675qi9hUyvHSzPSPKjoZZa64dBPrzoxjiN3YEnMU3WUgrTYtJg",
        "PrivateKey": "3CR8ZM4BEPvtJdqLXwysL1ewPigbbQdo1d7ykMPAMFPmi7wn6X"
    },
    {
        "Mnemonic": "wool brain base sad sphere garbage end practice master tooth budget expect plate dust music fine crane bird exile leave isolate select walnut story",
        "PublicKey": "COS6SNiqWthVdpRaYK5Exu7D4xy6GrYPD2bmKKWPoWd2GFdokefob",
        "PrivateKey": "3WQxqvU1xAhAHEAwzkZYLnL9xCjniy8JNxashJYfPkh7uzEaep"
    },
    {
        "Mnemonic": "butter ticket stadium sunny arrange emotion rib gadget slush fortune crawl spell win fix either blood script amazing west lazy present best agree stereo",
        "PublicKey": "COS7ue9V6B27RGyGeoiNZBmWkXveqAeqnibUASNGmBG47oyBfamYr",
        "PrivateKey": "4Wk27auR5sGBiRh9F3a9D4HnympCpzJfjxtYC2dxiMs2PSxNQx"
    },
    {
        "Mnemonic": "lecture skin empower license winner sadness mass hockey sibling shop student joke calm picnic smooth simple humor doctor can road toilet prefer verify column",
        "PublicKey": "COS74PkwHVxrDYLLwKGjKc7zSguFJVcp4G9o1QgY3rWL8CJ3R2tsb",
        "PrivateKey": "2z8tRpTc4F8o8DvKckhzJJAqsicoAvCLu3PB5XQg2izL8Tbn5g"
    },
    {
        "Mnemonic": "like pigeon deputy ceiling edit alcohol bench move welcome waste filter hood soft quit draw educate jewel arch scheme point always bachelor attend fever",
        "PublicKey": "COS6GSePms9tpFEgcJCrR4uqKhXbuw7mioRvSKYHhtXWNy7CqXVKB",
        "PrivateKey": "36sE6fmfGooXqpNxQcNNyP5innMs1aZhJEPxmGrntJWtaNBaU1"
    }
];

const keyStores = [
    {
        "username": "testuser1",
        "passphrase": "123456",
        "privateKey": "3ApWCcYot48MeZshPaPFYAAvV2MmpJKca8SReu1nmxyfVhEEub",
        "keystore": {
            "Name": "testuser1",
            "PubKey": "COS6YY2o4tbHvbA1aC1fGijv5EC4tEdCNiVEQLrt5Qv4j2PFndiLE",
            "Cipher": "AES-256",
            "CipherText": "J5uIiKjp3D+jyjFsZHkLcbmeFXFiExvvt92wop39/xOdQFFv8jMQ1pAHd8AjzVwujUM=",
            "Iv": "JudSkP6KlKaTN2gB/xXLsg==",
            "Mac": "6rcB53f/VUup4R9vF6KCUrW2bMU2R9JxZPl9Yvib590=",
            "Version": 1
        }
    },
    {
        "username": "testuser2",
        "passphrase": "abcdefg",
        "privateKey": "4TPq3agwZvQEGoQSppGaLrutwfJ4EcbXYTpq8Gxk6GR7RHgi4M",
        "keystore": {
            "Name": "testuser2",
            "PubKey": "COS6Rmj91piczS1REdHXAZ59iJwkhRdVuiPmQ5ewjJ72nuMmSertL",
            "Cipher": "AES-256",
            "CipherText": "HLiT3hqme/Tr7edVLhLvT0qSwkh+WIYX4FTVR06MdbHn2oGEpHWSBEwghOy3cSrgp7A=",
            "Iv": "CMnItrB9+8C7rQJY1a5X5Q==",
            "Mac": "I9DOacSQcZy/ZS5TpQJKNzl2oCTPS5tAfdoNhHG3dm4=",
            "Version": 1
        }
    },
    {
        "username": "testuser3",
        "passphrase": "000000",
        "privateKey": "35LfqxFYb6waenaKXNW29q1vqYKVDCCVBtcQCdUiFkKoAXLdGX",
        "keystore": {
            "Name": "testuser3",
            "PubKey": "COS6znzq4ZESw6A2Zc54yAXFb6kaz2vuRhz331LR4LBFjAeqGuGoF",
            "Cipher": "AES-256",
            "CipherText": "UgpGz2BybGkxQ4eF5GDKQHJ+xRGJK5cz/FdKGDFV8kFCH0bL4gGWIKZdCDi13+T8Ecc=",
            "Iv": "jaGARlJOn6UaOnSD7EOOiA==",
            "Mac": "krznaNkUAD4eKN74DBAz4U07bUo7zSKIYYJ1TUryi9s=",
            "Version": 1
        }
    }
];

function test() {
    mnemonicDatas.forEach((item, index) => {
        const result = generateKeyPairsFromMnemonic(item.Mnemonic);

        if (!result) {
            console.log('e');
            return;
        }
        if (result.privateKey === item.PrivateKey && result.publicKey === item.PublicKey) {
            console.log('matched');
            return;
        }
        console.log('ee');
    });

    keyStores.forEach((item, index) => {
        const result = decryptPrivKey(item.keystore.CipherText, item.passphrase, item.keystore.Iv, item.keystore.Mac);

        if (result === item.privateKey) {
            console.log('keystore matched');
            return;
        }

        console.log('keystore error');
    });

    keyStores.forEach((item, index) => {
        const result = generateEncryptedJson(item.username, item.passphrase, item.keystore.PubKey, item.privateKey);

        if (result.Iv !== item.keystore.Iv
            && result.Mac !== item.keystore.Mac
            && result.CipherText !== item.keystore.CipherText) {
            console.log('keystore error 2');
        }

        console.log('keystore matched 2');
    });
}

test();
