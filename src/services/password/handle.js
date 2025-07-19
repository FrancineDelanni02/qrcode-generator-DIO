async function permitedCharacters() {
    let permited = [];

    if (process.env.UPPERCASE_LETTERS === "true")
        permited.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ")

    if (process.env.LOWERCASE_LETTERS === "true")
        permited.push(..."abcdefghijklmnopqrstuvwxyz")

    if (process.env.NUMBERS === "true")
        permited.push(..."0123456789")

    if (process.env.NUMBERS === "true")
        permited.push(..."!@#$%¨&*()-_")
    
    return permited;
}

async function handler() {
    let characters = [];
    let password = "";
    const passwordLenght = process.env.PASSWORD_LENGTH;

    characters = await permitedCharacters();

    for (let i = 0; i < passwordLenght; i++) {
        const index = Math.floor(Math.random() * characters.length)
        password += characters[index];
    }
    return password;
}

export default handler;