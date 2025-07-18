const mainPrompt = [
    {
        name: "select",
        description: "Escolha entre as opções 1) QR-CODE ou 2) PASSWORD",
        pattern: /^[1-2]+$/,
        massage: "Escolha apenas entre 1 e 2",
        required: true
    },
];

export default mainPrompt;
