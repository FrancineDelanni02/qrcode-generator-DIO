import prompt from "prompt";
import mainPrompt from "./prompts/prompt-main.js"
import createQrCode from "./services/qr-code/create.js";

async function main(){
    prompt.get(mainPrompt,async (errorMonitor,result)=>{
        if(result.select){
            await createQrCode();
        }else{
            console.log("Escolheu o PASSWORD")
        }
    })
    prompt.start()
}

main();

