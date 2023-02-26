const testcases = {
    feature_createUser: {
            description: '@createUser - Testcases endpoint for Create User',
        positive: {
            case1: '@testid03 - Test apakah endpoint create user berfungsi membuat data user dengan data yang sesuai',
            case2: '@testid04 - Test apakah endpoint create user berfungsi membuat data user dengan data yang berasal dari file ekstensi .json',
            case3: '@testid05 - Test apakah endpoint create user berfungsi membuat data user dengan validasi bahwa datanya eksis dari endpoint getUser'
        },
        negative: {
            case1: '@testid01 - Test apakah endpoint create user berfungsi membuat data user dengan hobi kosong',
            case2: '@testid02 - Test apakah endpoint create user berfungsi membuat data user dengan hobi ada isinya tp angka',
        }
    },

    feature_getUser: {
        description: '@createUser - Testcases endpoint for GetUser',
        positive: {
            case1: '@testid06 - Test apakah endpoint get user menggunakan data user id yang valid.'
        },
        negative: {
            case1: '@testid07 - Test apakah endpoint get user gagal mendapatkan data ketika data id yang diinputkan invalid.'
        }
    }
    
};

module.exports = {
    testcases
};