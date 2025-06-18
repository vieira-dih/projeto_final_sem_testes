import AlunosModel from "../../Models/AlunosModel.js";

export default async (request, response) => {

    const HTTP_STATUS = CONSTANTS.HTTP;

    const requestBody = request.body;
    const id = request.params.id;

    const nome = requestBody.nome;
    const data_nascimento = requestBody.data_nascimento;
    const responsavel_id = requestBody.responsavel_id;
    const turma_id = requestBody.turma_id;

    const data = {};

    if (nome !== undefined) {
        data["nome"] = nome;
    }
    if (data_nascimento !== undefined) {
        data["data_nascimento"] = data_nascimento;
    }
    if (responsavel_id !== undefined) {
        data["responsavel_id"] = responsavel_id;
    }
    if (turma_id !== undefined) {
        data["turma_id"] = turma_id;
    }

    if (Object.keys(data).length === 0) {
        return response.status(HTTP_STATUS.BAD_REQUEST).json({
            error: `Nenhum campo foi inputado em ${id}`
        });
    }

    try {
        const [rowsAffected, [row]] = await AlunosModel.update(
            data,
            {
                where: { id: id },
                returning: true
            }
        );

        if (rowsAffected === 0 || !row) {
            return response.status(HTTP_STATUS.NOT_FOUND).json({
                error: `Nenhum registro encontrado com ID ${id}`
            });
        }

        return response.status(HTTP_STATUS.SUCCESS).json(row);

    } catch (error) {
        return response.status(HTTP_STATUS.SERVER_ERROR).json({ error: 'Error de servidor.' });
    }

};
