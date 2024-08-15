async function authenticateUser() {
    console.log('authenticateUser');
    const publicKey = {
        challenge: new Uint8Array(32), // Deve ser o mesmo desafio usado no registro
        allowCredentials: [{
            id: new Uint8Array(16), // ID da credencial registrada
            type: "public-key"
        }]
    };

    try {
        const assertion = await navigator.credentials.get({ publicKey });
        console.log("Autenticação bem-sucedida:", assertion);
        // Aqui você deve verificar a assinatura e autenticar o usuário no servidor
    } catch (error) {
        console.error("Erro na autenticação:", error);
    }
}

async function registerUser() {
    console.log('registerUser');
    const publicKey = {
        challenge: new Uint8Array(32), // Deve ser gerado de forma segura
        rp: { name: "Seu Site" },
        user: {
            id: new Uint8Array(16), // ID do usuário
            name: "admin@mail.com",
            displayName: "Admin MAisl Teste"
        },
        pubKeyCredParams: [{ type: "public-key", alg: -7 }] // Algoritmo ES256
    };

    try {
        const credential = await navigator.credentials.create({ publicKey });
        console.log("Credencial registrada:", credential);
        // Aqui você deve enviar a credencial para o servidor para armazenamento
    } catch (error) {
        console.error("Erro ao registrar:", error);
    }
}
