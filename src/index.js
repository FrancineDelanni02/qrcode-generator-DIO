import prompt from "prompt";
import mainPrompt from "./prompts/prompt-main.js"

async function main(){
    prompt.get(mainPrompt,async (errorMonitor,result)=>{
        if(result.select){
            console.log("Escolheu o QRCODE")
        }else{
            console.log("Escolheu o PASSWORD")
        }
    })
    prompt.start()
}

main();

