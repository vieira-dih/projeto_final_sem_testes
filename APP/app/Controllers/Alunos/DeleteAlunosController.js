import AlunosModel from "../../Models/AlunosModel.js";

export default async (request, response) => {

    const HTTP_STATUS = CONSTANTS.HTTP;

    const id = request.params.id;

    try {
        const rowsDeleted = await AlunosModel.destroy({
            where: { id: id }
        });

        if (rowsDeleted === 0) {
            return response.status(HTTP_STATUS.NOT_FOUND).json({ error: `Registro com id ${id} não existe!` });
        }

        return response.status(HTTP_STATUS.SUCCESS_NO_CONTENT).send();

    } catch (error) {
        return response.status(HTTP_STATUS.SERVER_ERROR).json({ error: 'Error de servidor.' });
    }

};
