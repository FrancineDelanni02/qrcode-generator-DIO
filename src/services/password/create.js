import handler from "./handle.js";

async function createPassoword() {
    console.log("Password");
    const password = await handler();
    console.log(password)
}

export default createPassoword;
