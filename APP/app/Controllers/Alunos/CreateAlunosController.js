import AlunosModel from "../../Models/AlunosModel.js";

export default async (request, response) => {

    const HTTP_STATUS = CONSTANTS.HTTP;

    const requestBody = request.body;

    const nome = requestBody.nome || null;
    const data_nascimento = requestBody.data_nascimento || null;
    const responsavel_id = requestBody.responsavel_id || null;
    const turma_id = requestBody.turma_id || null;

    if (nome === null) {
        return response.status(HTTP_STATUS.BAD_REQUEST).json({ error: 'Campo "nome" não preenchido.' });
    }
    if (data_nascimento === null) {
        return response.status(HTTP_STATUS.BAD_REQUEST).json({ error: 'Campo "data_nascimento" não preenchido.' });
    }
    if (responsavel_id === null) {
        return response.status(HTTP_STATUS.BAD_REQUEST).json({ error: 'Campo "responsavel_id" não preenchido.' });
    }
    if (turma_id === null) {
        return response.status(HTTP_STATUS.BAD_REQUEST).json({ error: 'Campo "turma_id" não preenchido.' });
    }

    try {
        const row = await AlunosModel.create({
            nome: nome,
            data_nascimento: data_nascimento,
            responsavel_id: responsavel_id,
            turma_id: turma_id
        });

        return response.status(HTTP_STATUS.SUCCESS_CREATED).json(row);

    } catch (error) {
        console.log(error)
        return response.status(HTTP_STATUS.SERVER_ERROR).json({ error: 'Error de servidor.' });
    }

};
