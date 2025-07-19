import prompt from "prompt";
import mainPrompt from "./prompts/prompt-main.js"
import createQrCode from "./services/qr-code/create.js";
import createPassoword from "./services/password/create.js";

async function main(){
    prompt.get(mainPrompt,async (err,result)=>{
        if(result.select == 1){
            await createQrCode();
        }else{
            await createPassoword();
        }
    })
    prompt.start()
}

main();

