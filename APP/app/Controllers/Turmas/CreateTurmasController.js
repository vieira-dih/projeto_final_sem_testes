import TurmasModel from "../../Models/TurmasModel.js";

export default async (request, response) => {

    const HTTP_STATUS = CONSTANTS.HTTP;

    const requestBody = request.body;

    const nome = requestBody.nome || null;
    const faixa_etaria = requestBody.faixa_etaria || null;

    if (nome === null) {
        return response.status(HTTP_STATUS.BAD_REQUEST).json({ error: 'Campo "nome" não preenchido.' });
    }
    if (faixa_etaria === null) {
        return response.status(HTTP_STATUS.BAD_REQUEST).json({ error: 'Campo "faixa_etaria" não preenchido.' });
    }

    try {
        const row = await TurmasModel.create({
            nome: nome,
            faixa_etaria: faixa_etaria
        });

        return response.status(HTTP_STATUS.SUCCESS_CREATED).json(row);

    } catch (error) {
        return response.status(HTTP_STATUS.SERVER_ERROR).json({ error: 'Error de servidor.' });
    }

};
