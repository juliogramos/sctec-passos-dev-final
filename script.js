const form = document.getElementById("contact-form");

// Colocando event listener nos inputs com restrição de tamanho/valor
// Não checa telefone pois não sei qual o menor número de telefone possível no mundo
// e ele vai ser checado por regex mais tarde

document
    .getElementById("dono-nome")
    .addEventListener("blur", (event) => checkInvalidOwnerNameLength());

document
    .getElementById("dono-email")
    .addEventListener("blur", (event) => checkInvalidOwnerEmailLength());

document
    .getElementById("digimon-nome")
    .addEventListener("blur", (event) => checkInvalidDigimonNameLength());

document
    .getElementById("estadia-dias")
    .addEventListener("blur", (event) => checkInvalidStayDays());

// Colocando event listener nos botões rádio para checar se deve exibir consentimento
document
    .getElementById("estadia-batalhar-sim")
    .addEventListener("change", (event) => displayConsent(true));

document
    .getElementById("estadia-batalhar-nao")
    .addEventListener("change", (event) => displayConsent(false));

function displayConsent(shouldDisplay) {
    const consentContainer = document.getElementById("consentimento-container");
    const consentCheck = document.getElementById(
        "estadia-batalhar-consentimento",
    );

    if (shouldDisplay) {
        consentContainer.style.display = "flex";
        consentCheck.removeAttribute("disabled");
    } else {
        consentContainer.style.display = "none";
        consentCheck.setAttribute("disabled", true);
    }
}

// Caso a página for recarregada e o "sim batalhar" esteja selecionado, o consentimento não vai aparecer
// Isso faz essa checagem e mostra ele corretamente
displayConsent(document.getElementById("estadia-batalhar-sim").checked);

// Configurando submissão de formulário
form.addEventListener("submit", async (event) => {
    event.preventDefault();

    // Usando FormData ao invés de pegar todos os IDs pois achei interessante
    const formData = new FormData(form);

    // Checa se todos os campos foram preenchidos
    // O "required" do HTML já faz isso, mas é bom garantir
    if (checkFormNulls(formData)) return;

    // Checa se as restrições de tamanho dos campos estão sendo respeitadas
    // Novamente, o HTML já faz isso, mas é bom garantir
    if (checkInvalidLengths(formData)) return;

    // Checa se o email e telefone são válidos através de regex
    if (checkRegexFails(formData)) return;

    // Checa se o usuário não deu consentimento mas deixou "batalhar" como sim
    if (checkConsentFailed(formData)) return;

    // Simulando carregamento do envio
    await loadFormSubmit(form);

    // Formulário enviado com sucesso
    formSubmitSuccess();
});

function checkFormNulls(formData) {
    if (
        !formData.get("dono-nome") ||
        !formData.get("dono-email") ||
        !formData.get("dono-telefone")
    ) {
        alert("Preencha os seus dados");
        return true;
    }

    if (
        !formData.get("digimon-nome") ||
        !formData.get("digimon-nivel") ||
        !formData.get("digimon-tipo") ||
        !formData.get("digimon-armadura")
    ) {
        alert("Preencha os dados do seu digimon");
        return true;
    }

    if (!formData.get("estadia-dias") || !formData.get("estadia-batalhar")) {
        alert("Preencha os dados da sua estadia");
        return true;
    }

    return false;
}

function checkInvalidLengths(formData) {
    // As checagens são feitas em outras funções
    // Pois elas também vão ocorrer após o usuário acabar de digitar
    // e mudar para outro campo (blur)

    // Os alertas são invocados aqui e não nas funções
    // Pois não quero exibir alertas caso o usuário esteja digitando
    if (checkInvalidOwnerNameLength(formData)) {
        alert("Seu nome deve ter entre 2 e 50 caracteres");
        return true;
    }

    if (checkInvalidOwnerEmailLength(formData)) {
        alert("Email deve ter entre 5 e 50 caracteres");
        return true;
    }

    if (checkInvalidDigimonNameLength(formData)) {
        alert("Nome do digimon deve ter entre 4 e 50 caracteres");
        return true;
    }

    if (checkInvalidStayDays(formData)) {
        alert("Estadia deve ser de entre 1 e 7 dias");
        return true;
    }

    return false;
}

function checkInvalidOwnerNameLength(formData) {
    let name;
    const errorDisplay = document.getElementById("dono-nome-erro");

    if (!formData) {
        name = document.getElementById("dono-nome").value;
    } else {
        name = formData.get("dono-nome");
    }

    if (name.length < 2 || name.length > 50) {
        errorDisplay.innerText = "Nome deve ter entre 2 e 50 caracteres";
        return true;
    }

    errorDisplay.innerText = "";
    return false;
}

function checkInvalidOwnerEmailLength(formData) {
    let email;
    const errorDisplay = document.getElementById("dono-email-erro");

    if (!formData) {
        email = document.getElementById("dono-email").value;
    } else {
        email = formData.get("dono-email");
    }

    if (email.length < 5 || name.length > 50) {
        errorDisplay.innerText = "Email deve ter entre 5 e 50 caracteres";
        return true;
    }

    errorDisplay.innerText = "";
    return false;
}

function checkInvalidDigimonNameLength(formData) {
    let digimonName;
    const errorDisplay = document.getElementById("digimon-nome-erro");

    if (!formData) {
        digimonName = document.getElementById("digimon-nome").value;
    } else {
        digimonName = formData.get("digimon-nome");
    }

    if (digimonName.length < 4 || digimonName.length > 50) {
        errorDisplay.innerText =
            "Nome do digimon deve ter entre 4 e 50 caracteres";
        return true;
    }

    errorDisplay.innerText = "";
    return false;
}

function checkInvalidStayDays(formData) {
    let stayDays;
    const errorDisplay = document.getElementById("estadia-dias-erro");

    if (!formData) {
        stayDays = document.getElementById("estadia-dias").value;
    } else {
        stayDays = formData.get("estadia-dias");
    }

    if (stayDays < 1 || stayDays > 7) {
        errorDisplay.innerText = "Estadia deve ser de entre 1 e 7 dias";
        return true;
    }

    errorDisplay.innerText = "";
    return false;
}

function checkRegexFails(formData) {
    // https://regex101.com/library/SOgUIV
    const emailPattern = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm;

    // https://regex101.com/library/wZ4uU6
    // Esse regex checa telefones ao redor do mundo, então
    // telefones estranhos como "999" são válidos
    const telephonePattern =
        /(?:([+]\d{1,4})[-.\s]?)?(?:[(](\d{1,3})[)][-.\s]?)?(\d{1,4})[-.\s]?(\d{1,4})[-.\s]?(\d{1,9})/g;

    if (!emailPattern.test(formData.get("dono-email"))) {
        alert("Insira um email válido");
        return true;
    }

    if (!telephonePattern.test(formData.get("dono-telefone"))) {
        alert("Insira um telefone válido");
        return true;
    }

    return false;
}

function checkConsentFailed(formData) {
    console.log(formData);
    if (
        formData.get("estadia-batalhar") === "sim" &&
        !formData.get("estadia-batalhar-consentimento")
    ) {
        alert(
            "Só podemos deixar o seu digimon batalhar com outros clientes se você nos der seu consentimento",
        );
        return true;
    }
    return false;
}

// Após o envio, fica carregando por 3 segundos
function loadFormSubmit(form) {
    const spinner = document.getElementById("spinner");
    const mensagem = document.getElementById("mensagem-envio");

    form.style.display = "none";
    spinner.style.display = "block";
    mensagem.innerText = "Enviando...";
    return new Promise((resolve) => setTimeout(resolve, 3000));
}

function formSubmitSuccess() {
    const spinner = document.getElementById("spinner");
    const mensagem = document.getElementById("mensagem-envio");
    const formResultImg = document.getElementById("form-result-img");

    spinner.style.display = "none";
    formResultImg.removeAttribute("hidden");
    mensagem.innerText = "Enviado com sucesso! Entraremos em contato em breve.";
}
