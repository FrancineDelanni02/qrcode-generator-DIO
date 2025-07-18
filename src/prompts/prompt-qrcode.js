const promptQRCode = [
    {
        name: 'link',
        description: 'Digite o link para gerar o QR Code',
    },
    {
        name: 'type',
        description: 'Escolha entre o tipo de QRCODE: 1) NORMAL 2) TERMINAL',
        patterns: /^[1-2]+$/,
        massage: 'Escolha somente entre 1 e 2',
        required: true
    }
]

export default promptQRCode;