import prompt from "prompt";
import promptQRCode from "../../prompts/prompt-qrcode";

async function createQrCode(){
    prompt.get(promptQRCode, async (err,result) => {

    })

    prompt.start();
}

export default createQrCode;

