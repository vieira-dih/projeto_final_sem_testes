import ResponsaveisModel from "../../Models/ResponsaveisModel.js";

export default async (request, response) => {

    const HTTP_STATUS = CONSTANTS.HTTP;

    const requestBody = request.body;

    const nome = requestBody.nome || null;
    const telefone = requestBody.telefone || null;
    const email = requestBody.email || null;

    if (nome === null) {
        return response.status(HTTP_STATUS.BAD_REQUEST).json({ error: 'Campo "nome" não preenchido.' });
    }
    if (telefone === null) {
        return response.status(HTTP_STATUS.BAD_REQUEST).json({ error: 'Campo "telefone" não preenchido.' });
    }
    if (email === null) {
        return response.status(HTTP_STATUS.BAD_REQUEST).json({ error: 'Campo "email" não preenchido.' });
    }

    try {
        const row = await ResponsaveisModel.create({
            nome: nome,
            telefone: telefone,
            email: email
        });

        return response.status(HTTP_STATUS.SUCCESS_CREATED).json(row);

    } catch (error) {
        return response.status(HTTP_STATUS.SERVER_ERROR).json({ error: 'Error de servidor.' });
    }

};
