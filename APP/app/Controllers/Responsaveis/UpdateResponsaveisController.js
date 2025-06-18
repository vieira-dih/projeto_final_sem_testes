import ResponsaveisModel from "../../Models/ResponsaveisModel.js";

export default async (request, response) => {

    const HTTP_STATUS = CONSTANTS.HTTP;

    const requestBody = request.body;
    const id = request.params.id;

    const nome = requestBody.nome;
    const telefone = requestBody.telefone;
    const email = requestBody.email;

    const data = {};

    if (nome !== undefined) {
        data["nome"] = nome;
    }
    if (telefone !== undefined) {
        data["telefone"] = telefone;
    }
    if (email !== undefined) {
        data["email"] = email;
    }

    if (Object.keys(data).length === 0) {
        return response.status(HTTP_STATUS.BAD_REQUEST).json({
            error: `Nenhum campo foi inputado em ${id}`
        });
    }

    try {
        const [rowsAffected, [row]] = await ResponsaveisModel.update(
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
