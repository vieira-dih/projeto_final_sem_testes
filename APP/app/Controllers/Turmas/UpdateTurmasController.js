import TurmasModel from "../../Models/TurmasModel.js";

export default async (request, response) => {

    const HTTP_STATUS = CONSTANTS.HTTP;

    const requestBody = request.body;
    const id = request.params.id;

    const nome = requestBody.nome;
    const faixa_etaria = requestBody.faixa_etaria;

    const data = {};

    if (nome !== undefined) {
        data["nome"] = nome;
    }
    if (faixa_etaria !== undefined) {
        data["faixa_etaria"] = faixa_etaria;
    }

    if (Object.keys(data).length === 0) {
        return response.status(HTTP_STATUS.BAD_REQUEST).json({
            error: `Nenhum campo foi inputado em ${id}`
        });
    }

    try {
        const [rowsAffected, [row]] = await TurmasModel.update(
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
